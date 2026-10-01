// Entrance screen for the fictional OS; onEnter is owned by App and reveals Desktop.
function BootScreen({ onEnter }) {
  return (
    <section className="boot-screen" aria-labelledby="boot-title">
      <div className="boot-aura" aria-hidden="true" />
      <div className="boot-panel">
        <div className="boot-panel-heading">
          <span className="boot-emblem">M<span>✦</span></span>
          <span className="boot-version">PERSONAL SYSTEM / 001</span>
          <span className="boot-ping"><i /> READY</span>
        </div>
        <div className="boot-content">
          <div className="boot-terminal" aria-label="Boot status">
            <p><span>&gt;</span> MUNAVVIR_OS <b>v.01</b></p>
            <p className="boot-line"><i /> AI CORE <strong>ONLINE</strong></p>
            <p className="boot-line"><i /> CREATIVE CORE <strong>ONLINE</strong></p>
            <p className="boot-line"><i /> USER PROFILE <strong>LOADED</strong></p>
            <p className="boot-user">USER DETECTED<span className="boot-cursor">_</span></p>
          </div>
          <div className="boot-identity">
            <p className="boot-kicker">WELCOME, PLAYER</p>
            <h1 id="boot-title">MUNAVVIR<span>.</span></h1>
            <p className="boot-class">AI BUILDER <i>·</i> TECH EXPLORER</p>
            <p className="boot-desc">A curious mind, a growing toolkit, and a digital world still under construction.</p>
            <button className="boot-enter" type="button" onClick={onEnter}>
              <span>ENTER SYSTEM</span><b aria-hidden="true">↗</b>
            </button>
            <p className="boot-footnote">LEARNING / BUILDING / EXPERIMENTING</p>
          </div>
        </div>
        <div className="boot-panel-footer"><span>MM // LOCAL INSTANCE</span><span>NO SIGNAL LOST <i>✦</i></span></div>
      </div>
      <div className="boot-side-note" aria-hidden="true">個人システム <span>PERSONAL SYSTEM</span></div>
    </section>
  );
}

export default BootScreen;