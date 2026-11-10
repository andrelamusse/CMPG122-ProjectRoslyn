/**
 * NWU CMPG122 — Silent Background Telemetry & Presence Engine
 * Tracks active study time (with strict 60s idle cutoff), IP-hashed unique device
 * deduplication, question answering accuracy, and 15s live presence heartbeats.
 */
(function (root) {
  'use strict';

  const IDLE_CUTOFF_MS = 60000; // 1 minute (60 seconds)
  const HEARTBEAT_INTERVAL_MS = 15000; // 15 seconds
  const ACTIVE_WINDOW_MS = 60000; // 60 seconds presence window

  const STORAGE_KEYS = {
    LEDGER: 'cmpg122_telemetry_ledger_v2',
    DEVICE_SEED: 'cmpg122_device_seed_v2',
    DEVICE_HASH: 'cmpg122_ip_device_hash_v2',
    REG_PREFIX: 'cmpg122_device_reg_v2_'
  };

  const CLOUD_RELAY_TOPIC = 'nwu_cmpg122_roslyn_telemetry_v2';
  const CLOUD_RELAY_URL = 'https://ntfy.sh/' + CLOUD_RELAY_TOPIC;
  const COUNTAPI_BASE = 'https://countapi.mileshilliard.com/api/v1';
  const COUNTAPI_KEYS = {
    DEVICES: 'nwu_cmpg122_roslyn_v2_devices',
    SECONDS: 'nwu_cmpg122_roslyn_v2_seconds',
    ANSWERED: 'nwu_cmpg122_roslyn_v2_answered',
    CORRECT: 'nwu_cmpg122_roslyn_v2_correct',
    WRONG: 'nwu_cmpg122_roslyn_v2_wrong'
  };

  // Pure-JS SHA-256 implementation (synchronous & works in non-secure file:// contexts too)
  function sha256HexSync(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }
    const mathPow = Math.pow;
    const maxWord = mathPow(2, 32);
    const lengthProperty = 'length';
    let i, j;
    let result = '';
    const words = [];
    const asciiBitLength = ascii[lengthProperty] * 8;
    let hash = sha256HexSync.h = sha256HexSync.h || [];
    const k = sha256HexSync.k = sha256HexSync.k || [];
    let primeCounter = k[lengthProperty];
    const isComposite = {};
    for (let candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (i = 0; i < 313; i += candidate) {
          isComposite[i] = candidate;
        }
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }
    ascii += '\x80';
    while ((ascii[lengthProperty] % 64) - 56) ascii += '\x00';
    for (i = 0; i < ascii[lengthProperty]; i++) {
      j = ascii.charCodeAt(i);
      if (j >> 8) return '';
      words[i >> 2] |= j << ((3 - (i % 4)) * 8);
    }
    words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
    words[words[lengthProperty]] = asciiBitLength;
    for (j = 0; j < words[lengthProperty]; ) {
      const w = words.slice(j, (j += 16));
      const oldHash = hash;
      hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        const i2 = i + j;
        const w15 = w[i - 15];
        const w2 = w[i - 2];
        const a = hash[0];
        const e = hash[4];
        const temp1 =
          hash[7] +
          (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
          ((e & hash[5]) ^ (~e & hash[6])) +
          k[i] +
          (w[i] =
            i < 16
              ? w[i]
              : (w[i - 16] +
                  (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
                  w[i - 7] +
                  (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) |
                0);
        const temp2 =
          (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
          ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }
      for (i = 0; i < 8; i++) {
        hash[i] = (hash[i] + oldHash[i]) | 0;
      }
    }
    for (i = 0; i < 8; i++) {
      for (j = 3; j + 1; j--) {
        const b = (hash[i] >> (j * 8)) & 255;
        result += (b < 16 ? 0 : '') + b.toString(16);
      }
    }
    return result;
  }

  async function sha256Hex(input) {
    const str = String(input || '');
    try {
      if (typeof crypto !== 'undefined' && crypto.subtle && typeof TextEncoder !== 'undefined') {
        const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
        return Array.from(new Uint8Array(buf))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');
      }
    } catch (_e) {
      // Fallback to synchronous SHA-256
    }
    return sha256HexSync(str);
  }

  function safeReadLedger() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.LEDGER);
      if (!raw) return { devices: {} };
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return { devices: {} };
      if (!parsed.devices || typeof parsed.devices !== 'object') parsed.devices = {};
      return parsed;
    } catch (_e) {
      return { devices: {} };
    }
  }

  function safeWriteLedger(ledger) {
    try {
      localStorage.setItem(STORAGE_KEYS.LEDGER, JSON.stringify(ledger));
    } catch (_e) {}
  }

  let broadcastChannel = null;
  try {
    if (typeof BroadcastChannel !== 'undefined' && typeof process === 'undefined') {
      broadcastChannel = new BroadcastChannel('cmpg122_telemetry_channel_v2');
    }
  } catch (_e) {}

  let lastActivityTime = Date.now();
  let deviceHash = '';
  let unsyncedCloudSeconds = 0;
  let initialized = false;
  let persistenceHooked = false;

  function ensureDeviceRecord(hash) {
    if (!hash) return null;
    const ledger = safeReadLedger();
    const now = Date.now();
    if (!ledger.devices[hash]) {
      ledger.devices[hash] = {
        deviceHash: hash,
        firstSeen: now,
        lastSeen: now,
        lastHeartbeat: now,
        activeSeconds: 0,
        answered: 0,
        correct: 0,
        wrong: 0
      };
    }
    return { ledger, record: ledger.devices[hash] };
  }

  function broadcastUpdate(type, payload) {
    if (!broadcastChannel) return;
    try {
      broadcastChannel.postMessage(Object.assign({ type, ts: Date.now() }, payload));
    } catch (_e) {}
  }

  function canUseRemoteNetwork() {
    if (typeof fetch !== 'function') return false;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
    if (typeof location !== 'undefined' && location.protocol === 'file:') return false;
    return true;
  }

  function sendCloudPacket(eventType, extra) {
    if (!deviceHash || !canUseRemoteNetwork()) return;
    const state = ensureDeviceRecord(deviceHash);
    if (!state) return;
    const rec = state.record;
    const packet = Object.assign(
      {
        t: eventType,
        d: deviceHash,
        ts: Date.now(),
        hb: rec.lastHeartbeat,
        sec: rec.activeSeconds,
        ans: rec.answered,
        cor: rec.correct,
        wrg: rec.wrong
      },
      extra || {}
    );
    try {
      fetch(CLOUD_RELAY_URL, {
        method: 'POST',
        body: JSON.stringify(packet),
        keepalive: true
      }).catch(function () {});
    } catch (_e) {}
  }

  function hitCountApi(key) {
    if (!canUseRemoteNetwork()) return;
    try {
      fetch(COUNTAPI_BASE + '/hit/' + key, { cache: 'no-store', keepalive: true }).catch(function () {});
    } catch (_e) {}
  }

  async function resolveDeviceHash() {
    try {
      const cached = localStorage.getItem(STORAGE_KEYS.DEVICE_HASH);
      if (cached && cached.length === 64) {
        deviceHash = cached;
      }
    } catch (_e) {}

    let ipString = '';
    if (canUseRemoteNetwork()) {
      try {
        const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
        const timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 3500) : null;
        const res = await fetch('https://api.ipify.org?format=json', {
          cache: 'no-store',
          signal: ctrl ? ctrl.signal : undefined
        });
        if (timer) clearTimeout(timer);
        if (res && res.ok) {
          const data = await res.json();
          if (data && typeof data.ip === 'string' && data.ip.trim()) {
            ipString = data.ip.trim();
          }
        }
      } catch (_e) {}

      if (!ipString) {
        try {
          const ctrl2 = typeof AbortController !== 'undefined' ? new AbortController() : null;
          const timer2 = ctrl2 ? setTimeout(function () { ctrl2.abort(); }, 3500) : null;
          const res2 = await fetch('https://ipapi.co/json/', {
            cache: 'no-store',
            signal: ctrl2 ? ctrl2.signal : undefined
          });
          if (timer2) clearTimeout(timer2);
          if (res2 && res2.ok) {
            const data2 = await res2.json();
            if (data2 && typeof data2.ip === 'string' && data2.ip.trim()) {
              ipString = data2.ip.trim();
            }
          }
        } catch (_e2) {}
      }
    }

    if (!ipString) {
      if (deviceHash && deviceHash.length === 64) {
        return deviceHash;
      }
      let seed = '';
      try {
        seed = localStorage.getItem(STORAGE_KEYS.DEVICE_SEED) || '';
        if (!seed) {
          const nav = typeof navigator !== 'undefined' ? navigator : {};
          const scr = typeof screen !== 'undefined' ? screen : {};
          seed = [
            nav.userAgent || 'ua',
            nav.language || 'en',
            scr.width || 0,
            scr.height || 0,
            Intl && Intl.DateTimeFormat ? Intl.DateTimeFormat().resolvedOptions().timeZone : 'tz'
          ].join('|');
          localStorage.setItem(STORAGE_KEYS.DEVICE_SEED, seed);
        }
      } catch (_e) {
        seed = 'cmpg122-fallback-device-seed';
      }
      ipString = 'device:' + seed;
    }

    const computedHash = await sha256Hex('cmpg122_ip_salt_v2::' + ipString);
    const oldHash = deviceHash;
    deviceHash = computedHash;

    try {
      localStorage.setItem(STORAGE_KEYS.DEVICE_HASH, deviceHash);
    } catch (_e) {}

    // If a fallback hash was created before IP resolved, merge it into the resolved IP hash record
    const ledger = safeReadLedger();
    const now = Date.now();
    if (oldHash && oldHash !== deviceHash && ledger.devices[oldHash]) {
      const prev = ledger.devices[oldHash];
      const cur = ledger.devices[deviceHash] || {
        deviceHash: deviceHash,
        firstSeen: prev.firstSeen || now,
        lastSeen: now,
        lastHeartbeat: now,
        activeSeconds: 0,
        answered: 0,
        correct: 0,
        wrong: 0
      };
      cur.activeSeconds = Math.max(cur.activeSeconds || 0, prev.activeSeconds || 0);
      cur.answered = Math.max(cur.answered || 0, prev.answered || 0);
      cur.correct = Math.max(cur.correct || 0, prev.correct || 0);
      cur.wrong = Math.max(cur.wrong || 0, prev.wrong || 0);
      cur.lastSeen = now;
      cur.lastHeartbeat = now;
      ledger.devices[deviceHash] = cur;
      delete ledger.devices[oldHash];
      safeWriteLedger(ledger);
    } else {
      const ensured = ensureDeviceRecord(deviceHash);
      if (ensured) {
        ensured.record.lastSeen = now;
        ensured.record.lastHeartbeat = now;
        safeWriteLedger(ensured.ledger);
      }
    }

    // Deduplicate device registration by IP hash
    try {
      const regKey = STORAGE_KEYS.REG_PREFIX + deviceHash;
      if (!localStorage.getItem(regKey)) {
        localStorage.setItem(regKey, String(now));
        hitCountApi(COUNTAPI_KEYS.DEVICES);
        sendCloudPacket('reg');
      } else {
        sendCloudPacket('hb');
      }
    } catch (_e) {}

    broadcastUpdate('device_ready', { deviceHash: deviceHash });
    return deviceHash;
  }

  function isUserIdle(nowTs) {
    const now = typeof nowTs === 'number' ? nowTs : Date.now();
    if (typeof document !== 'undefined' && document.visibilityState && document.visibilityState !== 'visible') {
      return true;
    }
    return (now - lastActivityTime) > IDLE_CUTOFF_MS;
  }

  function onUserInteraction() {
    const now = Date.now();
    const wasIdle = (now - lastActivityTime) > IDLE_CUTOFF_MS;
    lastActivityTime = now;
    if (!deviceHash) return;
    const ensured = ensureDeviceRecord(deviceHash);
    if (ensured) {
      ensured.record.lastSeen = now;
      if (wasIdle || (now - (ensured.record.lastHeartbeat || 0)) >= HEARTBEAT_INTERVAL_MS) {
        ensured.record.lastHeartbeat = now;
        safeWriteLedger(ensured.ledger);
        broadcastUpdate('heartbeat', { deviceHash: deviceHash });
        sendCloudPacket('hb');
      }
    }
  }

  function sendHeartbeatIfActive() {
    const now = Date.now();
    if (isUserIdle(now) || !deviceHash) return false;
    const ensured = ensureDeviceRecord(deviceHash);
    if (!ensured) return false;
    ensured.record.lastSeen = now;
    ensured.record.lastHeartbeat = now;
    safeWriteLedger(ensured.ledger);
    broadcastUpdate('heartbeat', { deviceHash: deviceHash });
    sendCloudPacket('hb');
    return true;
  }

  function tickActiveSecond(nowTs) {
    const now = typeof nowTs === 'number' ? nowTs : Date.now();
    if (isUserIdle(now) || !deviceHash) return false;
    const ensured = ensureDeviceRecord(deviceHash);
    if (!ensured) return false;
    ensured.record.activeSeconds = (Number(ensured.record.activeSeconds) || 0) + 1;
    ensured.record.lastSeen = now;
    if ((now - (ensured.record.lastHeartbeat || 0)) <= IDLE_CUTOFF_MS) {
      ensured.record.lastHeartbeat = now;
    }
    safeWriteLedger(ensured.ledger);
    unsyncedCloudSeconds += 1;
    if (unsyncedCloudSeconds >= 15) {
      unsyncedCloudSeconds = 0;
      sendCloudPacket('time');
    }
    broadcastUpdate('active_tick', {
      deviceHash: deviceHash,
      activeSeconds: ensured.record.activeSeconds
    });
    return true;
  }

  function recordQuestionSubmission(isCorrect) {
    const now = Date.now();
    lastActivityTime = now;
    if (!deviceHash) {
      const seedHash = sha256HexSync('cmpg122_ip_salt_v2::pending');
      deviceHash = seedHash;
    }
    const ensured = ensureDeviceRecord(deviceHash);
    if (!ensured) return null;
    ensured.record.answered = (Number(ensured.record.answered) || 0) + 1;
    if (isCorrect) {
      ensured.record.correct = (Number(ensured.record.correct) || 0) + 1;
    } else {
      ensured.record.wrong = (Number(ensured.record.wrong) || 0) + 1;
    }
    ensured.record.lastSeen = now;
    ensured.record.lastHeartbeat = now;
    safeWriteLedger(ensured.ledger);

    hitCountApi(COUNTAPI_KEYS.ANSWERED);
    hitCountApi(isCorrect ? COUNTAPI_KEYS.CORRECT : COUNTAPI_KEYS.WRONG);
    sendCloudPacket('ans', { c: Boolean(isCorrect) });
    broadcastUpdate('question_answered', {
      deviceHash: deviceHash,
      answered: ensured.record.answered,
      correct: ensured.record.correct,
      wrong: ensured.record.wrong
    });
    return {
      answered: ensured.record.answered,
      correct: ensured.record.correct,
      wrong: ensured.record.wrong
    };
  }

  function attachQuestionHooks() {
    if (persistenceHooked) return;
    const persRoot = root.CMPG122_PERSISTENCE || (root.window && root.window.CMPG122_PERSISTENCE);
    if (persRoot && persRoot.PersistenceManager && persRoot.PersistenceManager.prototype) {
      const proto = persRoot.PersistenceManager.prototype;
      if (typeof proto.recordQuestionAttempt === 'function' && !proto.recordQuestionAttempt._telemetryWrapped) {
        const originalRecord = proto.recordQuestionAttempt;
        const wrapped = function (questionId, isCorrect, meta) {
          const result = originalRecord.apply(this, arguments);
          try {
            recordQuestionSubmission(Boolean(isCorrect));
          } catch (_e) {}
          return result;
        };
        wrapped._telemetryWrapped = true;
        proto.recordQuestionAttempt = wrapped;
        persistenceHooked = true;
      }
    }
  }

  function attachSpotErrorDomHook() {
    if (typeof document === 'undefined') return;
    document.addEventListener(
      'click',
      function (ev) {
        const target = ev && ev.target && typeof ev.target.closest === 'function'
          ? ev.target.closest('#btnSubmitSpot')
          : null;
        if (!target) return;
        setTimeout(function () {
          try {
            const fb = document.getElementById('spotFeedback');
            if (!fb || fb.style.display === 'none' || !fb.textContent) return;
            const txt = fb.textContent.trim();
            if (!txt || /select an option/i.test(txt)) return;
            const isCorrect = /spot-on/i.test(txt) || fb.classList.contains('correct');
            recordQuestionSubmission(isCorrect);
          } catch (_e) {}
        }, 30);
      },
      true
    );
  }

  function computeAggregatedMetrics(nowTs) {
    const now = typeof nowTs === 'number' ? nowTs : Date.now();
    const ledger = safeReadLedger();
    const devices = Object.values(ledger.devices || {});
    let activeNow = 0;
    let totalDevices = devices.length;
    let totalActiveSeconds = 0;
    let totalAnswered = 0;
    let totalCorrect = 0;
    let totalWrong = 0;

    for (let i = 0; i < devices.length; i++) {
      const d = devices[i];
      if (!d || typeof d !== 'object') continue;
      if (d.lastHeartbeat && (now - Number(d.lastHeartbeat)) <= ACTIVE_WINDOW_MS) {
        activeNow += 1;
      }
      totalActiveSeconds += Number(d.activeSeconds) || 0;
      totalAnswered += Number(d.answered) || 0;
      totalCorrect += Number(d.correct) || 0;
      totalWrong += Number(d.wrong) || 0;
    }

    const accuracyPercent = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 1000) / 10 : 0;
    return {
      activeUsersNow: activeNow,
      totalDevices: totalDevices,
      totalActiveSeconds: totalActiveSeconds,
      totalQuestionsAnswered: totalAnswered,
      totalCorrectAnswers: totalCorrect,
      totalWrongAnswers: totalWrong,
      accuracyPercent: accuracyPercent
    };
  }

  function startStudentTracker() {
    if (initialized) return;
    if (root.CMPG122_DISABLE_STUDENT_TRACKER) return;
    initialized = true;

    const initialSeed = (function () {
      try {
        return localStorage.getItem(STORAGE_KEYS.DEVICE_HASH) || '';
      } catch (_e) {
        return '';
      }
    })();
    if (initialSeed && initialSeed.length === 64) {
      deviceHash = initialSeed;
    } else {
      deviceHash = sha256HexSync('cmpg122_ip_salt_v2::init_' + (Date.now()));
    }
    const ensured = ensureDeviceRecord(deviceHash);
    if (ensured) {
      ensured.record.lastSeen = Date.now();
      ensured.record.lastHeartbeat = Date.now();
      safeWriteLedger(ensured.ledger);
    }

    resolveDeviceHash();
    attachQuestionHooks();
    attachSpotErrorDomHook();

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const events = ['mousemove', 'mousedown', 'click', 'keydown', 'scroll', 'touchstart', 'input'];
      for (let i = 0; i < events.length; i++) {
        window.addEventListener(events[i], onUserInteraction, { passive: true, capture: true });
      }

      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
          onUserInteraction();
        } else if (deviceHash) {
          // Immediately expire live heartbeat when tab is hidden or closed
          const state = ensureDeviceRecord(deviceHash);
          if (state) {
            state.record.lastHeartbeat = 0;
            safeWriteLedger(state.ledger);
            broadcastUpdate('tab_hidden', { deviceHash: deviceHash });
            sendCloudPacket('leave', { hb: 0 });
          }
        }
      });

      window.addEventListener('pagehide', function () {
        if (!deviceHash) return;
        const state = ensureDeviceRecord(deviceHash);
        if (state) {
          state.record.lastHeartbeat = 0;
          safeWriteLedger(state.ledger);
          broadcastUpdate('pagehide', { deviceHash: deviceHash });
          sendCloudPacket('leave', { hb: 0 });
        }
      });

      const t1 = setInterval(function () {
        attachQuestionHooks();
        tickActiveSecond();
      }, 1000);
      if (t1 && typeof t1.unref === 'function') t1.unref();

      const t2 = setInterval(function () {
        sendHeartbeatIfActive();
      }, HEARTBEAT_INTERVAL_MS);
      if (t2 && typeof t2.unref === 'function') t2.unref();
    }
  }

  const api = {
    IDLE_CUTOFF_MS: IDLE_CUTOFF_MS,
    HEARTBEAT_INTERVAL_MS: HEARTBEAT_INTERVAL_MS,
    ACTIVE_WINDOW_MS: ACTIVE_WINDOW_MS,
    STORAGE_KEYS: STORAGE_KEYS,
    CLOUD_RELAY_TOPIC: CLOUD_RELAY_TOPIC,
    sha256Hex: sha256Hex,
    sha256HexSync: sha256HexSync,
    resolveDeviceHash: resolveDeviceHash,
    getDeviceHash: function () { return deviceHash; },
    getLastActivityTime: function () { return lastActivityTime; },
    setLastActivityTimeForTest: function (ts) { lastActivityTime = Number(ts) || 0; },
    isIdle: isUserIdle,
    tickActiveSecond: tickActiveSecond,
    sendHeartbeatIfActive: sendHeartbeatIfActive,
    recordQuestionSubmission: recordQuestionSubmission,
    computeAggregatedMetrics: computeAggregatedMetrics,
    attachQuestionHooks: attachQuestionHooks,
    init: startStudentTracker
  };

  root.CMPG122_TELEMETRY = api;
  if (root.window) {
    root.window.CMPG122_TELEMETRY = api;
  }
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startStudentTracker);
    } else {
      startStudentTracker();
    }
  }
})(typeof self !== 'undefined' ? self : this);
