import { useEffect, useRef } from 'react';

function useReveal(ref) {
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') || [];
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
}

const events = [
  { icon:<path d="M12 2C9 6 8 9 8 12a4 4 0 0 0 8 0c0-3-1-6-4-10z"/>, title:'Haldi', meta:'Turmeric ceremony blessing the couple with radiance.', date:'14 Aug 2026 · Morning' },
  { icon:<><path d="M4 20c4-8 4-14 8-16 4 2 4 8 8 16"/><path d="M8 20h8"/></>, title:'Mehendi', meta:'Intricate henna artistry and joyful family gathering.', date:'14 Aug 2026 · Evening' },
  { icon:<><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></>, title:'Pellikuthuru & Pellikoduku', meta:'Traditional bride & groom adornment ceremonies.', date:'15 Aug 2026 · Morning' },
  { icon:<path d="M12 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/>, title:'Sangeet', meta:'An evening of music, dance and family celebration.', date:'14 Aug 2026 · Night' },
  { icon:<path d="M12 3v18M6 9l6-6 6 6"/>, title:'Mangala Snanam', meta:'Sacred ceremonial bath purifying the couple before rites.', date:'15 Aug 2026 · Early Morning' },
  { icon:<><path d="M4 4h16v16H4z"/><path d="M4 10h16"/></>, title:'Kashi Yatra', meta:"The groom's symbolic journey, gently persuaded to stay for marriage.", date:'15 Aug 2026' },
  { icon:<><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></>, title:'Jeelakarra Bellam', meta:'Cumin & jaggery placed atop heads, symbolizing lifelong bonding.', date:'15 Aug 2026' },
  { icon:<path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z"/>, title:'Sumuhurtham & Mangalsutra', meta:'The sacred moment of the wedding knot.', date:'15 Aug 2026 · 07:46 PM' },
  { icon:<><path d="M4 18c2-6 6-8 8-8s6 2 8 8"/><circle cx="12" cy="6" r="2"/></>, title:'Saptapadi', meta:'Seven sacred steps, seven vows for a lifetime together.', date:'15 Aug 2026 · Night' },
  { icon:<><path d="M4 12h16M12 4v16"/><circle cx="12" cy="12" r="9"/></>, title:'Reception & Dinner', meta:"Celebration dinner at the marriage venue.", date:"15 Aug 2026 · 07:00 PM onwards\nVenue: Chenna's Convention Hall" },
];

export default function Events() {
  const ref = useRef();
  useReveal(ref);
  return (
    <section id="events" className="section texture-bg" ref={ref}>
      <div className="section-head reveal">
        <p className="eyebrow">Celebrations Across Days</p>
        <h2 className="section-title">Wedding Events</h2>
        <p className="section-desc">Join us as we celebrate each sacred ritual leading to the union of Pravallika &amp; Sai Sandeep.</p>
      </div>
      <div className="events-grid">
        {events.map(({ icon, title, meta, date }) => (
          <div className="event-card reveal" key={title}>
            <div className="event-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">{icon}</svg></div>
            <h3>{title}</h3>
            <div className="event-meta">{meta}<br/><b>Date:</b> {date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
