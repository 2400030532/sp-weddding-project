import { useEffect, useRef } from 'react';

const galleryData = [
  {h:260,label:'Haldi Mornings'},{h:340,label:'Mehendi Art'},{h:220,label:'Family Blessings'},
  {h:300,label:'Sangeet Night'},{h:260,label:'Temple Rituals'},{h:230,label:'Sumuhurtham'},
  {h:310,label:'Saptapadi'},{h:250,label:'Reception'},{h:280,label:'Together Forever'}
];
const colors = ['%235C0A1E','%230B4433','%23C79A3B','%23A6192E'];

export default function Gallery() {
  const ref = useRef();
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') || [];
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="gallery" className="section texture-bg" ref={ref}>
      <div className="section-head reveal">
        <p className="eyebrow">Moments &amp; Memories</p>
        <h2 className="section-title">Gallery</h2>
        <p className="section-desc">A curated frame of memories — replace these placeholders with your own photographs.</p>
      </div>
      <div className="gallery-masonry">
        {galleryData.map((g, i) => {
          const c = colors[i % colors.length];
          const src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='${g.h}'><rect width='400' height='${g.h}' fill='${c}'/><circle cx='200' cy='${g.h/2}' r='38' fill='none' stroke='%23EFD48A' stroke-width='2'/><text x='200' y='${g.h/2+6}' font-size='13' fill='%23EFD48A' text-anchor='middle' font-family='serif'>${g.label}</text></svg>`;
          return (
            <div className="g-item reveal" key={g.label}>
              <img loading="lazy" src={src} alt={g.label}/>
              <div className="g-caption">{g.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
