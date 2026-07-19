import { useEffect, useRef } from 'react';

const brideFamily = [
  { init:'MV', name:'Sri Maroju Venkata Rao', role:'Father of the Bride' },
  { init:'D',  name:'Smt. Devi', role:'Mother of the Bride' },
  { init:'MC', name:'Brahmasri Maroju Chinna Chandra Rao (Late)', role:'Grandfather' },
  { init:'R',  name:'Smt. Ratnam', role:'Grandmother' },
];
const groomFamily = [
  { init:'PV', name:'Sri Putta Venkata Rao', role:'Father of the Groom' },
  { init:'S',  name:'Smt. Sridevi', role:'Mother of the Groom' },
  { init:'SS', name:'Chi. Sai Sandeep', role:'Only Son, Tagarapuvalasa' },
];

export default function Family() {
  const ref = useRef();
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') || [];
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const FamilyCard = ({ init, name, role }) => (
    <div className="family-card">
      <div className="family-avatar">{init}</div>
      <div><div className="fname">{name}</div><div className="frole">{role}</div></div>
    </div>
  );

  return (
    <section id="family" className="section texture-bg arch-frame" ref={ref}>
      <svg className="arch-top" viewBox="0 0 900 70" preserveAspectRatio="none"><path d="M0 70 Q450 -30 900 70" fill="none" stroke="#C79A3B" strokeWidth="2"/></svg>
      <div className="section-head reveal">
        <p className="eyebrow">With Love &amp; Blessings</p>
        <h2 className="section-title">Our Families</h2>
      </div>
      <div className="family-cols">
        <div className="family-col reveal">
          <h3>Bride's Family</h3>
          {brideFamily.map(f => <FamilyCard key={f.name} {...f}/>)}
        </div>
        <div className="family-col reveal">
          <h3>Groom's Family</h3>
          {groomFamily.map(f => <FamilyCard key={f.name} {...f}/>)}
        </div>
      </div>
    </section>
  );
}
