import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">P &amp; S</div>
      <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
        {[['#hero','Home'],['#story','Our Story'],['#events','Events'],['#gallery','Gallery'],
          ['#venue','Venue'],['#family','Family'],['#blessings','Blessings'],['#rsvp','RSVP']].map(([href,label]) => (
          <li key={href}><a href={href} onClick={close}>{label}</a></li>
        ))}
      </ul>
      <button className="nav-toggle" id="navToggle" onClick={() => setOpen(o => !o)}>
        <span/><span/><span/>
      </button>
    </nav>
  );
}
