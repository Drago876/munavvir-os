import { useEffect, useState } from 'react';

function SystemBar({ openApps, onRestore, onHome }) {
  // SYSTEM CLOCK: This is the visitor's local time, not a machine-performance metric.
  const [time, setTime] = useState(() => new Date());

  // Refresh the displayed local time periodically and release the timer on unmount.
  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="system-bar">
      <button className="system-brand" type="button" aria-label="Return to desktop" onClick={onHome}>
        <span className="system-brand-mark">M</span><span>MUNAVVIR<span className="system-brand-os">_OS</span></span>
      </button>
      <div className="system-bar-center"><i /> ONLINE <span>·</span> PERSONAL INSTANCE</div>
      <div className="system-bar-right">
        {/* Task buttons restore minimized windows; the parent owns window state. */}
        <div className="task-apps" aria-label="Open applications">
          {openApps.map((appId) => (
            <button type="button" key={appId} onClick={() => onRestore(appId)} aria-label={`Restore ${appId}`} title={`Restore ${appId}`}>
              {appId.slice(0, 1).toUpperCase()}
            </button>
          ))}
        </div>
        <span className="system-clock" aria-label="Local time">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </header>
  );
}

export default SystemBar;