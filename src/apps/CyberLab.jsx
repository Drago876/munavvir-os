import { useState } from 'react';
import AppHeading from './AppHeading.jsx';

// SAFE TO EDIT: Educational topics only; none of these rows initiate network activity.
const studyAreas = [
  ['NETWORKING', 'Foundations to study before moving into security topics.'],
  ['LINUX', 'Continue building familiarity with command-line environments.'],
  ['WEB SECURITY', 'Learn how to recognize and prevent common web risks.'],
  ['CYBERSECURITY', 'Explore defensive concepts and security fundamentals.'],
  ['ETHICAL HACKING', 'A future learning topic, practiced only in authorized labs.'],
];

function CyberLab() {
  // Controls the local tabletop animation and explanatory message only.
  const [simulationRun, setSimulationRun] = useState(false);

  return (
    <div className="app-page">
      <AppHeading eyebrow="LEARNING SIMULATION / 06" title="CYBER LAB" intro="An educational roadmap for security topics. This interface performs no scans, tests, or network actions." status="SANDBOX / FICTIONAL" />
      <div className="cyber-map" role="img" aria-label="Illustrative local learning network with browser, firewall, and server concepts">
        <div className="cyber-map-head"><span>CONCEPT MAP / LOCAL ILLUSTRATION</span><span><i /> NO NETWORK ACCESS</span></div>
        <div className={`cyber-path${simulationRun ? ' cyber-path-active' : ''}`}>
          <div className="cyber-node"><span>◎</span><strong>BROWSER</strong><small>CLIENT CONCEPT</small></div>
          <i className="cyber-link" aria-hidden="true" />
          <div className="cyber-node cyber-firewall"><span>⬡</span><strong>FIREWALL</strong><small>CONTROL CONCEPT</small></div>
          <i className="cyber-link" aria-hidden="true" />
          <div className="cyber-node"><span>▤</span><strong>SERVER</strong><small>HOST CONCEPT</small></div>
        </div>
        <div className="cyber-map-foot"><span>{simulationRun ? 'TABLETOP WALKTHROUGH / COMPLETE' : 'EDUCATIONAL CONCEPTS ONLY'}</span><span>PACKETS / SIMULATED</span></div>
      </div>
      {/* EVENT HANDLER: Toggle a fictional path highlight; no packets or scans are sent. */}
      <button className="action-button cyber-sim-button" type="button" aria-pressed={simulationRun} onClick={() => setSimulationRun((current) => !current)}>{simulationRun ? 'RESET TABLETOP VIEW ↺' : 'RUN TABLETOP WALKTHROUGH ↗'}</button>
      {simulationRun && <p className="cyber-sim-result" role="status">Simulation only: a conceptual path is highlighted locally. No traffic is generated and no device is scanned.</p>}
      <p className="section-label">LEARNING PATH</p>
      <ol className="learning-path">{studyAreas.map(([name, detail]) => <li key={name}><div><strong>{name}</strong>{detail}</div></li>)}</ol>
      <div className="app-callout"><strong>SAFE PRACTICE</strong> Any future hands-on security work belongs in a deliberately authorized, isolated learning environment.</div>
    </div>
  );
}

export default CyberLab;