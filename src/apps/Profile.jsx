import AppHeading from './AppHeading.jsx';

// Reuses the desktop's CSS-drawn mascot as an original replaceable avatar placeholder.
function Mascot() {
  return <div className="mascot" aria-label="Original placeholder mascot illustration" role="img"><span className="mascot-hair" /><span className="mascot-ear mascot-ear-left" /><span className="mascot-ear mascot-ear-right" /><span className="mascot-face"><i /><i /><b /></span><span className="mascot-collar" /></div>;
}

// RPG-style profile layout uses the supplied background without numeric game stats.
function Profile() {
  return (
    <div className="app-page">
      <AppHeading eyebrow="PLAYER PROFILE / 03" title="PROFILE" intro="A game-inspired character sheet, using real details only." />
      <div className="profile-banner"><Mascot /><div><h3>Munavvir Musthafa</h3><p>PLAYER / HUMAN / ALWAYS LEARNING</p></div></div>
      <div className="profile-readouts">
        <p><span>CLASS</span><strong>AI BUILDER / TECH EXPLORER</strong></p>
        <p><span>CURRENT STATE</span><strong>LEARNING · BUILDING · EXPERIMENTING</strong></p>
        <p><span>BACKGROUND</span><strong>BCA</strong></p>
        <p><span>QUEST</span><strong>ENTRY-LEVEL IT / WEB OPPORTUNITIES</strong></p>
      </div>
      <p className="section-label">CHARACTER JOURNAL</p>
      <div className="profile-journey">
        <section><span>01 / CURRENTLY BUILDING</span><strong>React frontend projects</strong></section>
        <section><span>02 / CURRENTLY LEARNING</span><strong>Web development · AI · Data analytics</strong></section>
        <section><span>03 / EXPLORING NEXT</span><strong>Local AI · Cybersecurity · Game development</strong></section>
      </div>
      <p className="section-label">INTEREST MAP</p>
      <div className="tag-list">{['AI', 'Programming', 'Linux', 'Cybersecurity', 'Games', 'Web development', 'Data analytics'].map((interest) => <span className="tag" key={interest}>{interest}</span>)}</div>
    </div>
  );
}

export default Profile;