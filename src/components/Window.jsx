import { useEffect, useRef, useState } from 'react';

// Reusable window chrome. App identity/content arrive through app and children props;
// the parent owns stacking order while this component owns only its drag/exit details.
function Window({ app, children, onClose, onMinimize, onFocus, layer = 1, isFocused = false }) {
  // WINDOW POSITION: x/y offsets are measured from the centered starting position.
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Captures pointer and window starting coordinates for smooth pointer dragging.
  const [dragOrigin, setDragOrigin] = useState(null);
  // CSS exit class lets the close/minimize animation finish before parent state changes.
  const [exitState, setExitState] = useState('');
  // Keep the pending exit callback available for cleanup if the component unmounts.
  const exitTimer = useRef(null);

  // POINTER LIFECYCLE: Stop dragging even if pointer release happens outside the title bar.
  useEffect(() => {
    function stopDragging() {
      setDragOrigin(null);
    }

    window.addEventListener('pointerup', stopDragging);
    window.addEventListener('pointercancel', stopDragging);
    return () => {
      window.removeEventListener('pointerup', stopDragging);
      window.removeEventListener('pointercancel', stopDragging);
      window.clearTimeout(exitTimer.current);
    };
  }, []);

  // Minimize animates this window, then asks App to hide it while keeping it restorable.
  function minimizeWindow() {
    setExitState('is-minimizing');
    exitTimer.current = window.setTimeout(() => onMinimize(app.id), 150);
  }

  // Close animates this window, then asks App to remove it from the window registry.
  function closeWindow() {
    setExitState('is-closing');
    exitTimer.current = window.setTimeout(() => onClose(app.id), 150);
  }

  // DRAG START: Ignore title-bar controls; dragging is disabled on mobile full-screen panels.
  // Store the pointer origin and capture the pointer so movement remains continuous.
  function startDrag(event) {
    if (event.target.closest('button') || window.matchMedia('(max-width: 620px)').matches) return;
    setDragOrigin({ pointerX: event.clientX, pointerY: event.clientY, x: position.x, y: position.y });
    event.currentTarget.setPointerCapture(event.pointerId);
    onFocus(app.id);
  }

  // DRAG MOVE: Apply the pointer delta to x/y and clamp it so the window stays reachable.
  function moveWindow(event) {
    if (!dragOrigin) return;
    const horizontalLimit = Math.max(40, window.innerWidth / 2 - 40);
    const verticalLimit = Math.max(50, window.innerHeight / 2 - 90);
    setPosition({
      x: Math.max(-horizontalLimit, Math.min(horizontalLimit, dragOrigin.x + event.clientX - dragOrigin.pointerX)),
      y: Math.max(-verticalLimit, Math.min(verticalLimit, dragOrigin.y + event.clientY - dragOrigin.pointerY)),
    });
  }

  // The layer sets z-index; the custom x/y values apply the desktop drag offset in CSS.
  return (
    <section
      className={`app-window${isFocused ? ' is-focused' : ''} ${exitState}`}
      style={{ '--window-layer': layer, '--window-x': `${position.x}px`, '--window-y': `${position.y}px` }}
      aria-label={`${app.name} window`}
      onPointerDown={() => onFocus(app.id)}
    >
      {/* The title bar is the desktop drag handle. Window controls are excluded in startDrag. */}
      <header className="window-titlebar" onPointerDown={startDrag} onPointerMove={moveWindow}>
        <span className="window-app-icon" aria-hidden="true">{app.icon}</span>
        <span className="window-title">{app.name}</span>
        <span className="window-title-id">MM_OS / {app.id.toUpperCase()}</span>
        <div className="window-controls">
          {/* Mobile windows are full-screen; these controls remain touch-sized there. */}
          <button type="button" aria-label={`Minimize ${app.name}`} onClick={minimizeWindow}>−</button>
          <button className="window-close" type="button" aria-label={`Close ${app.name}`} onClick={closeWindow}>×</button>
        </div>
      </header>
      <div className="window-content">{children}</div>
      <div className="window-grip" aria-hidden="true">✦</div>
    </section>
  );
}

export default Window;