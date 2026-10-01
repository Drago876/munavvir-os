import { useState } from 'react';
import AppHeading from './AppHeading.jsx';

// SAFE TO EDIT: These are learning interests, not claims of professional experience.
const labSystems = [
  { code: 'AGENT_SYSTEMS', label: 'AI coding agents', status: 'BUILDING', detail: 'Learning to build software alongside coding agents.' },
  { code: 'LOCAL_MODELS', label: 'Local LLMs', status: 'EXPLORING', detail: 'Experimenting with the idea of running models locally.' },
  { code: 'AI_APPLICATIONS', label: 'AI applications', status: 'LEARNING', detail: 'Exploring useful ways to bring AI into software.' },
  { code: 'AI_ENGINEERING', label: 'Future AI engineering', status: 'NEXT OBJECTIVE', detail: 'A direction to grow toward, not a current job title.' },
];

function AILab() {
  // Stores the selected learning node so its detail panel can update on click.
  const [activeSystem, setActiveSystem] = useState(labSystems[0]);

  return (
    <div className="app-page">
      <AppHeading eyebrow="RESEARCH WING / 01" title="AI LAB" intro="A learning space for curious experiments with AI-assisted development and local systems." status="CORE ONLINE" />
      <div className="ai-console">
        <div className="ai-console-head"><span>AI CORE / INTEREST MAP</span><span><i /> SIMULATED DISPLAY</span></div>
        <div className="ai-console-body">
          <div className="ai-node-list" role="group" aria-label="AI learning areas">
            {/* Each node selects one row from labSystems; aria-pressed reports selection. */}
            {labSystems.map((system) => (
              <button className={`ai-node${activeSystem.code === system.code ? ' is-selected' : ''}`} type="button" key={system.code} onClick={() => setActiveSystem(system)} aria-pressed={activeSystem.code === system.code}>
                <span className="ai-node-glyph" aria-hidden="true">{system.code === 'AGENT_SYSTEMS' ? '↗' : system.code === 'LOCAL_MODELS' ? '◉' : system.code === 'AI_APPLICATIONS' ? '◇' : '✦'}</span>
                <span><strong>{system.label}</strong><small>{system.status}</small></span>
                <i aria-hidden="true">›</i>
              </button>
            ))}
          </div>
          <section className="ai-readout" aria-live="polite">
            <div className="ai-orb" aria-hidden="true"><span>AI</span><i /><i /><i /></div>
            <p className="ai-readout-code">NODE / {activeSystem.code}</p>
            <h3>{activeSystem.label}</h3>
            <span className="ai-state">{activeSystem.status}</span>
            <p>{activeSystem.detail}</p>
            <div className="ai-flow" aria-label="Illustrative learning workflow"><span>EXPLORE</span><i>→</i><span>EXPERIMENT</span><i>→</i><span>REFLECT</span></div>
          </section>
        </div>
      </div>
      <div className="app-callout"><strong>LAB NOTE</strong> This is an exploration log. I&apos;m learning these areas and building toward deeper AI engineering work.</div>
    </div>
  );
}

export default AILab;