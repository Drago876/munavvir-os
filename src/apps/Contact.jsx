import AppHeading from './AppHeading.jsx';

const contactChannels = [
  { icon: '@', label: 'EMAIL', detail: 'munnumunawir0@gmail.com', href: 'mailto:munnumunawir0@gmail.com' },
  { icon: 'GH', label: 'GITHUB', detail: 'github.com/Drago876', href: 'https://github.com/Drago876', external: true },
  { icon: 'in', label: 'LINKEDIN', detail: 'linkedin.com/in/munavvir-musthafa-b42538248', href: 'https://www.linkedin.com/in/munavvir-musthafa-b42538248', external: true },
];

// Contact destinations are the exact personal URLs supplied by Munavvir.
function Contact() {
  return (
    <div className="app-page">
      <AppHeading eyebrow="OPEN CHANNEL / 08" title="CONTACT" intro="Interested in an entry-level IT or web opportunity? Send a signal through one of these channels." />
      <div className="contact-identity"><strong>MUNAVVIR MUSTHAFA</strong><span>AI BUILDER / TECH EXPLORER</span></div>
      <div className="contact-list">{contactChannels.map((channel) => <a className="contact-row" href={channel.href} key={channel.label} {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}><span>{channel.icon}</span><div><strong>{channel.label}</strong><small>{channel.detail}</small></div><em>{channel.external ? 'OPEN ↗' : 'EMAIL ↗'}</em></a>)}</div>
      <p className="app-callout">Choose a channel to open the real destination. External profiles open in a new tab.</p>
    </div>
  );
}

export default Contact;