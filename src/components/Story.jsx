import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef();
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') || [];
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const stories = [
  { title:'Childhood', text:'Raised in families rooted in tradition and warmth — Pravallika in Bheemunipatnam, Sai Sandeep in Tagarapuvalasa — carrying values that would one day bring two homes together.' },
  { title:'First Introduction', text:'Through the blessings of elders and the quiet workings of destiny, their families came together with a proposal of alliance.' },
  { title:'Getting To Know Each Other', text:'Conversations turned into comfort, and comfort turned into a shared vision of the life they wished to build together.' },
  { title:'The Blessing', text:'With the blessings of Sri Maroju Venkata Rao & Smt. Devi, and Sri Putta Venkata Rao & Smt. Sridevi, the alliance was formalized with joy on both sides.' },
  { title:'Sumuhurtham', text:'Under the Uttara Nakshatram, in Kumbha Lagnam, the auspicious moment was fixed — Saturday, 15th August 2026 at 07:46 PM.' },
  { title:'Forever Begins', text:"At Chenna's Convention Hall, Visakhapatnam, two families become one, and a new journey begins — with all of you as witnesses." },
];

export default function Story() {
  const ref = useReveal();
  return (
    <section id="story" className="section texture-bg arch-frame" ref={ref}>
      <svg className="arch-top" viewBox="0 0 900 70" preserveAspectRatio="none"><path d="M0 70 Q450 -30 900 70" fill="none" stroke="#C79A3B" strokeWidth="2"/></svg>
      <div className="section-head reveal">
        <p className="eyebrow">A Journey Of Two Hearts</p>
        <h2 className="section-title">Our Story</h2>
        <p className="section-desc">Every love story is beautiful, but theirs is one written by families, blessings, and destiny.</p>
      </div>
      <div className="kolam-divider">
        <div className="line"/>
        <svg viewBox="0 0 24 24" fill="none" stroke="#C79A3B"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
        <div className="line"/>
      </div>
      <div className="timeline">
        {stories.map(({ title, text }) => (
          <div className="t-item reveal" key={title}>
            <div className="t-dot"/>
            <div className="t-card"><h3>{title}</h3><p>{text}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
