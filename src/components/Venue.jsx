import { useEffect, useRef } from 'react';

export default function Venue() {
  const ref = useRef();
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') || [];
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="venue" className="section dark-section" ref={ref}>
      <div className="section-head reveal">
        <p className="eyebrow" style={{color:'#EFD48A'}}>Where We Celebrate</p>
        <h2 className="section-title">Wedding Venue</h2>
      </div>
      <div className="venue-wrap reveal">
        <div className="venue-info">
          <h3>Chenna's Convention Hall</h3>
          <p>
            Peddipalem, Anandapuram, Visakhapatnam, Andhra Pradesh.<br/><br/>
            <b style={{color:'var(--gold)'}}>Sumuhurtham:</b> Saturday, 15th August 2026 at 07:46 PM (Uttara Nakshatram, Kumbha Lagnam)<br/>
            <b style={{color:'var(--gold)'}}>Dinner:</b> 07:00 PM onwards at the marriage venue.
          </p>
          <a className="venue-btn" href="https://www.google.com/maps/search/?api=1&query=Chenna%27s+Convention+Hall+Peddipalem+Anandapuram+Visakhapatnam" target="_blank" rel="noopener noreferrer">
            Get Directions
          </a>
        </div>
        <div className="venue-map">
          <iframe
            loading="lazy"
            title="Venue Map"
            src="https://www.google.com/maps?q=Anandapuram,Visakhapatnam,Andhra+Pradesh&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
