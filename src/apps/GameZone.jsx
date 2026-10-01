import { useEffect, useRef, useState } from 'react';
import AppHeading from './AppHeading.jsx';

function GameZone() {
  // GAME STATE: idle -> waiting -> ready -> result; tapping early during waiting is a miss.
  const [phase, setPhase] = useState('idle');
  const [message, setMessage] = useState('Tap the star to begin. Wait for the glow, then react.');
  // Latest score and best score are local to this open game session; neither is persisted.
  const [lastTime, setLastTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);
  // Refs store the pending random-delay timer and the exact ready timestamp without rerenders.
  const timerRef = useRef(null);
  const startRef = useRef(0);

  // Cancel the random wait if the game window closes while a round is starting.
  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  // EVENT HANDLER: Begin/replay, detect an early click, or calculate a ready-state reaction.
  function handleTargetClick() {
    if (phase === 'idle' || phase === 'result') {
      setLastTime(null);
      setMessage('Hold your nerve...');
      setPhase('waiting');
      // Random delay prevents visitors from predicting when the target becomes active.
      timerRef.current = window.setTimeout(() => {
        startRef.current = performance.now();
        setPhase('ready');
        setMessage('NOW! Tap the star.');
      }, 1100 + Math.random() * 1800);
    } else if (phase === 'waiting') {
      window.clearTimeout(timerRef.current);
      setPhase('result');
      setMessage('Too soon! Your next run starts when you tap again.');
    } else {
      // Compare the click time with the timestamp captured when the game entered ready.
      const reaction = Math.round(performance.now() - startRef.current);
      setLastTime(reaction);
      setBestTime((currentBest) => currentBest === null ? reaction : Math.min(currentBest, reaction));
      setPhase('result');
      setMessage('Nice reflex. Tap again for another run.');
    }
  }

  // Display label follows the current phase; tapping after result starts another round.
  const targetLabel = phase === 'waiting' ? 'WAIT' : phase === 'ready' ? 'GO!' : phase === 'result' ? '↻' : '✦';

  return (
    <div className="app-page">
      <AppHeading eyebrow="ARCADE CARTRIDGE / 10" title="GAME ZONE" intro="A tiny reaction experiment. One round at a time; no scores are sent or saved." />
      <div className={`game-stage game-stage-${phase}`}>
        <div className="game-hud"><span>ARCADE / EXPERIMENT 001</span><span className={`game-phase game-phase-${phase}`}><i />{phase === 'idle' ? 'READY' : phase === 'waiting' ? 'STANDBY' : phase === 'ready' ? 'REACT' : 'ROUND COMPLETE'}</span></div>
        <h3>STAR REACTION</h3>
        <p>{message}</p>
        <button className={`game-target${phase === 'waiting' ? ' is-waiting' : ''}${phase === 'ready' ? ' is-ready' : ''}`} type="button" onClick={handleTargetClick} aria-label={phase === 'ready' ? 'React now' : phase === 'waiting' ? 'Too soon if you tap now' : 'Start or retry reaction test'}>{targetLabel}</button>
        <div className="game-stats"><span>LAST <strong>{lastTime === null ? '--' : `${lastTime} ms`}</strong></span><span>BEST <strong>{bestTime === null ? '--' : `${bestTime} ms`}</strong></span></div>
      </div>
      <p className="terminal-hint">EXPERIMENT_001 / REACTION TIMING / SESSION ONLY</p>
    </div>
  );
}

export default GameZone;