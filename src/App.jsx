import { useCallback, useEffect, useRef, useState } from 'react';
import BootScreen from './components/BootScreen.jsx';
import Desktop from './components/Desktop.jsx';
import SystemBar from './components/SystemBar.jsx';

function App() {
  // STATE: The boot flag switches the app between the entrance screen and desktop.
  const [systemOnline, setSystemOnline] = useState(false);
  // WINDOW MANAGEMENT: openApps is also the window stacking order; the last id is focused.
  const [openApps, setOpenApps] = useState([]);
  // Keeps minimized windows registered so the system bar can restore them.
  const [minimizedApps, setMinimizedApps] = useState([]);
  // Temporary message shown when a visitor discovers an Easter egg.
  const [secretMessage, setSecretMessage] = useState('');
  // Holds the timeout id so a new secret replaces the old one and cleanup is safe.
  const secretTimer = useRef(null);

  // Clear the pending toast timer if the app unmounts.
  useEffect(() => () => window.clearTimeout(secretTimer.current), []);

  // Show one short secret message, replacing any message already on screen.
  // message is the text supplied by the mascot, keyboard sequence, or hidden control.
  const showSecret = useCallback((message) => {
    window.clearTimeout(secretTimer.current);
    setSecretMessage(message);
    secretTimer.current = window.setTimeout(() => setSecretMessage(''), 3500);
  }, []);

  // WINDOW MANAGEMENT: Move the app id to the end of the array to focus it.
  // The same function reopens minimized apps after removing them from minimizedApps.
  function openApp(appId) {
    setOpenApps((current) => [...current.filter((id) => id !== appId), appId]);
    setMinimizedApps((current) => current.filter((id) => id !== appId));
  }

  // Close removes an app from both the visible stack and the minimized list.
  function closeApp(appId) {
    setOpenApps((current) => current.filter((id) => id !== appId));
    setMinimizedApps((current) => current.filter((id) => id !== appId));
  }

  // Minimize keeps the app id registered but filters it out of Desktop's visible windows.
  function minimizeApp(appId) {
    setMinimizedApps((current) => current.includes(appId) ? current : [...current, appId]);
  }

  // The system logo returns to the clean desktop by closing all open windows.
  function goToDesktop() {
    setOpenApps([]);
    setMinimizedApps([]);
  }

  return (
    <div className={`system-app${systemOnline ? ' system-online' : ''}`}>
      {systemOnline && <SystemBar openApps={openApps} onRestore={openApp} onHome={goToDesktop} />}
      <main>
        {systemOnline ? (
          <Desktop
            openApps={openApps.filter((appId) => !minimizedApps.includes(appId))}
            onOpenApp={openApp}
            onFocusApp={openApp}
            onCloseApp={closeApp}
            onMinimizeApp={minimizeApp}
            secretMessage={secretMessage}
            onSecretFound={showSecret}
          />
        ) : (
          <BootScreen onEnter={() => setSystemOnline(true)} />
        )}
      </main>
    </div>
  );
}

export default App;