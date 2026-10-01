// Shared heading keeps app pages consistent; each value comes from the app using this component.
function AppHeading({ eyebrow, title, intro, status }) {
  return (
    <div className="app-heading">
      <div>
        <p className="app-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {intro && <p className="app-intro">{intro}</p>}
      </div>
      {status && <span className="app-status"><i />{status}</span>}
    </div>
  );
}

export default AppHeading;