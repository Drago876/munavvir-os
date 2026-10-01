import AppHeading from './AppHeading.jsx';

// Resume download stays disabled until Munavvir supplies an actual resume document.
function Resume() {
  return (
    <div className="app-page">
      <AppHeading eyebrow="CREDENTIAL FILE / 07" title="RESUME" intro="A recruiter-friendly view of my background. The downloadable document will be connected when it’s ready." />
      <article className="resume-sheet">
        <div className="resume-sheet-top"><div><h3>Munavvir Musthafa</h3><p>AI Builder · Tech Explorer · BCA</p></div><span className="app-status"><i /> OPEN TO OPPORTUNITIES</span></div>
        <section className="resume-section"><h4>EDUCATION</h4><p>Bachelor of Computer Applications (BCA)</p></section>
        <section className="resume-section"><h4>FOCUS</h4><p>Learning web development, building frontend projects, and exploring AI, Linux, and data analytics.</p></section>
        <section className="resume-section"><h4>OPPORTUNITY</h4><p>Entry-level IT and web-related roles.</p></section>
      </article>
      <div className="resume-placeholder"><span aria-hidden="true">📄</span><span>Resume PDF not added yet. Download will be enabled when you provide the file.</span></div>
      <button className="action-button" type="button" disabled>DOWNLOAD RESUME / FILE NOT AVAILABLE</button>
    </div>
  );
}

export default Resume;