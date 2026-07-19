import { useEffect, useRef } from 'react';

const trads = [
  { icon:<><ellipse cx="12" cy="10" rx="6" ry="5"/><path d="M6 12c-2 1-3 4-1 6M18 12c2 1 3 4 1 6"/></>, title:'Ganesh Puja', text:'Invoking Lord Ganesha to remove obstacles before the ceremonies begin.' },
  { icon:<><path d="M12 2v10M6 22c0-6 3-8 6-8s6 2 6 8"/></>, title:'Mangala Snanam', text:'A purifying ceremonial bath for the bride and groom.' },
  { icon:<path d="M4 20l8-16 8 16z"/>, title:'Kashi Yatra', text:'The groom playfully sets off for Kashi, lovingly stopped by the bride\'s family.' },
  { icon:<><path d="M4 12h16M12 4c-4 4-4 12 0 16"/></>, title:'Kanyadaanam', text:'The sacred giving away of the bride by her parents.' },
  { icon:<circle cx="12" cy="12" r="7"/>, title:'Jeelakarra Bellam', text:'Cumin and jaggery paste placed on each other\'s heads, symbolizing unity.' },
  { icon:<path d="M12 3l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z"/>, title:'Mangalsutra', text:'The groom ties the sacred thread — the eternal symbol of marriage.' },
  { icon:<><path d="M4 4l16 16M20 4L4 20"/></>, title:'Talambralu', text:'Rice mixed with turmeric and saffron showered upon each other, filled with laughter.' },
  { icon:<path d="M4 18c2-6 6-8 8-8s6 2 8 8"/>, title:'Saptapadi', text:'Seven steps taken together, each one a vow for their shared life ahead.' },
  { icon:<><circle cx="12" cy="6" r="2"/><path d="M12 8v10"/></>, title:'Arundhati Nakshatram', text:'The couple views the star Arundhati, a symbol of marital devotion.' },
];

export default function Traditions() {
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
    <section id="traditions" className="section dark-section arch-frame" ref={ref}>
      <svg className="arch-top" viewBox="0 0 900 70" preserveAspectRatio="none"><path d="M0 70 Q450 -30 900 70" fill="none" stroke="#EFD48A" strokeWidth="2"/></svg>
      <div className="section-head reveal">
        <p className="eyebrow" style={{color:'#EFD48A'}}>Sacred Customs</p>
        <h2 className="section-title">Telugu Wedding Traditions</h2>
        <p className="section-desc">A glimpse into the rituals that make this union sacred and rooted in heritage.</p>
      </div>
      <div className="trad-grid">
        {trads.map(({ icon, title, text }) => (
          <div className="trad-card reveal" key={title}>
            <div className="trad-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">{icon}</svg></div>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
