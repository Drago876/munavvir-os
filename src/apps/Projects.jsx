import projects from '../data/projects.js';
import AppHeading from './AppHeading.jsx';

// Project facts live in ../data/projects.js so new missions can be added without changing this layout.
function Projects() {
  return (
    <div className="app-page">
      <AppHeading eyebrow="MISSION ARCHIVE / 02" title="PROJECTS" intro="A small mission log. More entries will appear as new projects are ready to share." />
      {/* The array index only labels missions; project details come from the data file. */}
      {projects.map((project, index) => (
        <article className="quest-card" key={project.id}>
          <div className="quest-topline"><span>MISSION_{String(index + 1).padStart(3, '0')}</span><span className="quest-status">STATUS: COMPLETED</span></div>
          <h3>{project.name}</h3>
          <p className="mission-objective"><strong>OBJECTIVE</strong>{project.objective}</p>
          <p>{project.description}</p>
          <div className="quest-meta">
            <span>TECH</span>
            <div className="tag-list">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
          </div>
          <div className="quest-meta">
            <span>CHALLENGE</span>
            <p>{project.challenges || 'Detailed challenge notes not added yet.'}</p>
          </div>
          <div className="quest-meta">
            <span>RESULT / WHAT I LEARNED</span>
            <p>{project.result}</p>
            <p>{project.learned}</p>
          </div>
          <div className="quest-links">
            {project.github ? <a className="action-button" href={project.github} target="_blank" rel="noreferrer">OPEN REPOSITORY ↗</a> : <button className="action-button" type="button" disabled>REPOSITORY LINK NOT ADDED</button>}
            {project.demo && <a className="action-button" href={project.demo} target="_blank" rel="noreferrer">LIVE DEMO ↗</a>}
          </div>
          <div className="quest-placeholder">{project.screenshot || 'SCREENSHOT / ARTIFACT SLOT · NOT ADDED'}</div>
        </article>
      ))}
    </div>
  );
}

export default Projects;