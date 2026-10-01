import AILab from './AILab.jsx';
import Contact from './Contact.jsx';
import CyberLab from './CyberLab.jsx';
import GameZone from './GameZone.jsx';
import Linux from './Linux.jsx';
import Profile from './Profile.jsx';
import Projects from './Projects.jsx';
import Resume from './Resume.jsx';
import Skills from './Skills.jsx';
import Terminal from './Terminal.jsx';

// ROUTING: Keep app ids aligned with the applications list in Desktop.jsx.
// To add a view, import it here and add a matching id-to-component entry.
const applicationViews = {
  'ai-lab': AILab,
  projects: Projects,
  'game-zone': GameZone,
  skills: Skills,
  linux: Linux,
  'cyber-lab': CyberLab,
  profile: Profile,
  resume: Resume,
  terminal: Terminal,
  contact: Contact,
};

function AppContent({ appId, onOpenApp }) {
  // The registry selects a component by id; onOpenApp is passed only to views that route elsewhere.
  const ApplicationView = applicationViews[appId];
  return ApplicationView ? <ApplicationView onOpenApp={onOpenApp} /> : null;
}

export default AppContent;