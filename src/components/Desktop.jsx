import { useEffect, useState } from 'react';
import Window from './Window.jsx';
import AppContent from '../apps/AppContent.jsx';

// SAFE TO EDIT: Add or remove desktop applications here.
// Each id must also exist in apps/AppContent.jsx; icon and color drive launcher presentation.
export const applications = [
  { id: 'ai-lab', name: 'AI LAB', icon: '🧠', color: 'lilac' },
  { id: 'projects', name: 'PROJECTS', icon: '💻', color: 'cyan' },
  { id: 'game-zone', name: 'GAME ZONE', icon: '🎮', color: 'coral' },
  { id: 'skills', name: 'SKILLS', icon: '🛠️', color: 'lime' },
  { id: 'linux', name: 'LINUX', icon: '🐧', color: 'lime' },
  { id: 'cyber-lab', name: 'CYBER LAB', icon: '🔐', color: 'cyan' },
  { id: 'profile', name: 'PROFILE', icon: '👤', color: 'lilac' },
  { id: 'resume', name: 'RESUME', icon: '📄', color: 'coral' },
  { id: 'terminal', name: 'TERMINAL', icon: '💬', color: 'lime' },
  { id: 'contact', name: 'CONTACT', icon: '⚡', color: 'lilac' },
];

function Desktop({ openApps, onOpenApp, onFocusApp, onCloseApp, onMinimizeApp, secretMessage, onSecretFound }) {
  // Controls the small recurring mascot discovery message after its first interaction.
  const [mascotMessage, setMascotMessage] = useState(false);

  // EASTER EGG: Watch for the Konami-style sequence, but ignore typing in form fields.
  useEffect(() => {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let position = 0;
    function checkSequence(event) {
      if (event.target instanceof HTMLElement && ['INPUT', 'TEXTAREA'].includes(event.target.tagName)) return;
      if (event.key !== sequence[position]) {
        position = event.key === sequence[0] ? 1 : 0;
        return;
      }
      position += 1;
      if (position === sequence.length) {
        onSecretFound('KONAMI INPUT DETECTED / PLAYER CURIOSITY: CONFIRMED');
        position = 0;
      }
    }
    window.addEventListener('keydown', checkSequence);
    return () => window.removeEventListener('keydown', checkSequence);
  }, [onSecretFound]);

  return (
    <section className="desktop" aria-label="Munavvir OS desktop">
      <div className="desktop-wallpaper" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
      <div className="desktop-topline"><span>PERSONAL DEVICE / USER: MUNAVVIR</span><span>DESKTOP ENVIRONMENT <i>✦</i></span></div>
      <div className="desktop-welcome">
        <button className={`mascot${mascotMessage ? ' mascot-reacting' : ''}`} type="button" aria-label="Tap the system mascot" onClick={() => { setMascotMessage(true); onSecretFound('MASCOT MESSAGE: keep building, one small experiment at a time.'); }}>
          <span className="mascot-hair" /><span className="mascot-ear mascot-ear-left" /><span className="mascot-ear mascot-ear-right" />
          <span className="mascot-face"><i /><i /><b /></span><span className="mascot-collar" />
        </button>
        <div><p className="desktop-welcome-kicker">USER PROFILE / 001</p><h1>Hey, Munavvir<span>!</span></h1><p>Your digital world is open. Pick an app to explore.</p></div>
        <div className="desktop-status-card"><span>NOW EXPLORING</span><strong>AI <i>·</i> SOFTWARE <i>·</i> LINUX</strong><small>Learning in public, one build at a time.</small></div>
      </div>
      <div className="app-launcher" aria-label="Applications">
        {applications.map((app) => (
          <button className={`app-icon app-icon-${app.color}`} type="button" key={app.id} onClick={() => onOpenApp(app.id)}>
            <span className="app-icon-art" aria-hidden="true">{app.icon}</span>
            <span className="app-icon-label">{app.name}</span>
          </button>
        ))}
      </div>
      <footer className="desktop-dock">
        <span className="dock-label">QUICK ACCESS</span>
        {applications.slice(0, 5).map((app) => (
          <button key={app.id} type="button" aria-label={`Open ${app.name}`} title={app.name} onClick={() => onOpenApp(app.id)}>{app.icon}</button>
        ))}
        <span className="dock-divider" />
        <button type="button" aria-label="Open contact" title="Contact" onClick={() => onOpenApp('contact')}>⚡</button>
      </footer>
      <div className="window-layer">
        {/* openApps arrives ordered from App; the last window is rendered highest/focused. */}
        {openApps.map((appId, index) => {
          const app = applications.find((item) => item.id === appId);
          return app ? (
            <Window key={app.id} app={app} onClose={onCloseApp} onMinimize={onMinimizeApp} onFocus={onFocusApp} layer={index + 1} isFocused={index === openApps.length - 1}>
              <AppContent appId={app.id} onOpenApp={onOpenApp} />
            </Window>
          ) : null;
        })}
      </div>
      {mascotMessage && <span className="mascot-hint" aria-live="polite">CURIOUS ONE, YOU FOUND A FRIEND.</span>}
      {secretMessage && <div className="secret-toast" role="status">{secretMessage}</div>}
      <button className="secret-spark" type="button" aria-label="A tiny system secret" title="..." onClick={() => onSecretFound('SECRET SIGNAL FOUND / try `sudo coffee` in the terminal')}>✦</button>
    </section>
  );
}

export default Desktop;