import AppHeading from './AppHeading.jsx';

// The shell below is static portfolio artwork; it never invokes a real system shell.
function Linux() {
  return (
    <div className="app-page">
      <AppHeading eyebrow="ENVIRONMENT / 05" title="LINUX" intro="Linux is part of my development setup and one of the systems I’m continuing to learn." status="IN USE" />
      <div className="linux-shell">
        <div className="linux-shell-head"><span>USER@MUNAVVIR / SHELL</span><span>SESSION: PERSONAL</span></div>
        <div className="linux-shell-body" aria-label="Fictional Linux-style environment preview">
          <p><span className="linux-prompt">munavvir@system</span>:<span className="linux-context">~</span>$ whoami</p>
          <p>learner · builder · Linux user</p>
          <p><span className="linux-prompt">munavvir@system</span>:<span className="linux-context">~</span>$ echo $FOCUS</p>
          <p>development / exploration / curiosity<span className="boot-cursor">_</span></p>
        </div>
      </div>
      <p className="section-label">WORKSTATION NOTES</p>
      <div className="linux-facts">
        <p>ENVIRONMENT<strong>Linux</strong></p>
        <p>ROLE IN MY TOOLKIT<strong>Development setup</strong></p>
        <p>WORKFLOW<strong>Code · learn · iterate</strong></p>
        <p>DISPLAY<strong>Fictional shell preview</strong></p>
      </div>
      <p className="app-callout">This is a visual terminal-style illustration, not a live system monitor or a real shell.</p>
    </div>
  );
}

export default Linux;