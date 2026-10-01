import AppHeading from './AppHeading.jsx';

// SAFE TO EDIT: Keep tools you currently use separate from subjects still being explored.
function Skills() {
  return (
    <div className="app-page">
      <AppHeading eyebrow="LOADOUT / 04" title="SKILLS" intro="A snapshot of tools I use and subjects I’m actively exploring. No made-up scores or levels." />
      <div className="skill-columns">
        <section className="skill-column">
          <h3><i /> CURRENT TOOLS <span>ACTIVE</span></h3>
          <div className="skill-state-list">{['HTML', 'CSS', 'JavaScript', 'React', 'Git / GitHub', 'Linux'].map((skill) => <span key={skill}><i />{skill}</span>)}</div>
        </section>
        <section className="skill-column learning">
          <h3><i /> LEARNING / EXPLORING <span>IN PROGRESS</span></h3>
          <div className="skill-state-list">{['AI applications', 'AI coding agents', 'Local LLMs', 'Cybersecurity', 'Game development', 'Data analytics', 'Web development expansion'].map((skill) => <span key={skill}><i />{skill}</span>)}</div>
        </section>
      </div>
      <div className="app-callout"><strong>BUILD MODE</strong> Web development is where I practice turning ideas into working interfaces while growing toward other areas of technology.</div>
    </div>
  );
}

export default Skills;