// NWU CMPG122 Project Roslyn - Real Global Cloud Telemetry & Time Tracking Engine
// Connected live to global cloud counter API (countapi.mileshilliard.com)
// ZERO Fake Base Numbers • True Unique Devices • Real Active Learners

(function() {
  'use strict';

  const CLOUD_BASE = 'https://countapi.mileshilliard.com/api/v1';
  const KEYS = {
    DEVICES: 'nwu_cmpg122_axiom_devices_prod',
    ACTIVE: 'nwu_cmpg122_axiom_active_prod',
    COMPLETED: 'nwu_cmpg122_axiom_completed_prod',
    MINUTES: 'nwu_cmpg122_axiom_minutes_prod'
  };

  const STORAGE = {
    DEVICE_LOGGED: 'nwu_cmpg122_axiom_device_logged',
    ACTIVE_LOGGED: 'nwu_cmpg122_axiom_active_logged'
  };

  let sessionSeconds = 0;

  // 1. Log Unique Device on First Visit
  async function registerDeviceIfNew() {
    const isRegistered = localStorage.getItem(STORAGE.DEVICE_LOGGED);
    if (!isRegistered) {
      try {
        const res = await fetch(`${CLOUD_BASE}/hit/${KEYS.DEVICES}`, { cache: 'no-store' });
        if (res.ok) {
          localStorage.setItem(STORAGE.DEVICE_LOGGED, 'true');
        }
      } catch (e) {
        console.warn('[Telemetry] Device registration fallback:', e);
      }
    }
  }

  // 2. Continuous Engagement Heartbeat (Every 10 seconds)
  function startEngagementTimer() {
    setInterval(async () => {
      sessionSeconds += 10;

      // Accumulate total minutes every 60 seconds
      if (sessionSeconds % 60 === 0) {
        try {
          await fetch(`${CLOUD_BASE}/hit/${KEYS.MINUTES}`, { cache: 'no-store' });
        } catch(e) {}
      }

      // Check Active User criteria: Continuous study >= 5 minutes (300 seconds)
      if (sessionSeconds >= 300) {
        const hasLoggedActive = localStorage.getItem(STORAGE.ACTIVE_LOGGED);
        if (!hasLoggedActive) {
          try {
            const res = await fetch(`${CLOUD_BASE}/hit/${KEYS.ACTIVE}`, { cache: 'no-store' });
            if (res.ok) {
              localStorage.setItem(STORAGE.ACTIVE_LOGGED, 'true');
            }
          } catch(e) {}
        }
      }
    }, 10000);
  }

  // 3. Log Completed Assessment
  async function logAssessmentCompleted() {
    try {
      await fetch(`${CLOUD_BASE}/hit/${KEYS.COMPLETED}`, { cache: 'no-store' });
    } catch(e) {
      console.warn('[Telemetry] Assessment logging fallback:', e);
    }
    updateBadge();
  }

  // 4. Update Footer Badge with Real Live Cloud Numbers
  async function updateBadge() {
    const el = document.getElementById('telemetry-badge');
    if (!el) return;

    try {
      const [devRes, compRes] = await Promise.all([
        fetch(`${CLOUD_BASE}/get/${KEYS.DEVICES}`, { cache: 'no-store' }),
        fetch(`${CLOUD_BASE}/get/${KEYS.COMPLETED}`, { cache: 'no-store' })
      ]);
      const devData = await devRes.json();
      const compData = await compRes.json();

      const devs = (devData && typeof devData.value === 'number') ? devData.value : 1;
      const comps = (compData && typeof compData.value === 'number') ? compData.value : 0;

      el.innerHTML = `<span><span style="color: var(--accent-emerald, #4caf50);">●</span> Live Cloud: <strong>${devs.toLocaleString()}</strong> Unique Devices</span> &nbsp;•&nbsp; <span><strong>${comps.toLocaleString()}</strong> Assessments Completed</span>`;
    } catch (e) {
      el.innerHTML = `<span><span style="color: var(--accent-emerald, #4caf50);">●</span> Live Cloud Connected</span>`;
    }
  }

  // 5. Query Real Live Metrics for admin.html
  async function getLiveCloudMetrics() {
    try {
      const [devRes, actRes, compRes, minRes] = await Promise.all([
        fetch(`${CLOUD_BASE}/get/${KEYS.DEVICES}`, { cache: 'no-store' }),
        fetch(`${CLOUD_BASE}/get/${KEYS.ACTIVE}`, { cache: 'no-store' }),
        fetch(`${CLOUD_BASE}/get/${KEYS.COMPLETED}`, { cache: 'no-store' }),
        fetch(`${CLOUD_BASE}/get/${KEYS.MINUTES}`, { cache: 'no-store' })
      ]);

      const devData = await devRes.json();
      const actData = await actRes.json();
      const compData = await compRes.json();
      const minData = await minRes.json();

      const totalDevices = (devData && typeof devData.value === 'number') ? devData.value : 0;
      const activeUsers = (actData && typeof actData.value === 'number') ? actData.value : 0;
      const totalMinutes = (minData && typeof minData.value === 'number') ? minData.value : 0;
      const totalCompleted = (compData && typeof compData.value === 'number') ? compData.value : 0;

      const avgActiveMinutes = activeUsers > 0 ? Math.round(totalMinutes / activeUsers) : 0;

      return {
        totalDevices,
        activeUsers,
        totalMinutes,
        totalCompleted,
        avgActiveMinutes
      };
    } catch (e) {
      console.error('[Telemetry] Failed to fetch live cloud metrics:', e);
      return null;
    }
  }

  window.AxiomTelemetry = {
    init: function() {
      registerDeviceIfNew();
      startEngagementTimer();
      updateBadge();
      setInterval(updateBadge, 15000);
    },
    logAssessmentCompleted: logAssessmentCompleted,
    getLiveCloudMetrics: getLiveCloudMetrics
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.AxiomTelemetry.init);
  } else {
    window.AxiomTelemetry.init();
  }
})();
