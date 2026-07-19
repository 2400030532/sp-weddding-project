import { useState, useEffect, useRef } from 'react';

const initial = [
  { msg:'May your togetherness be as eternal as the stars. Wishing you a lifetime of joy.', name:'Family & Friends' },
  { msg:'A beautiful union of two hearts and two families. Congratulations, Pravallika & Sandeep!', name:'Well Wishers' },
  { msg:'May Lord Ganesha bless your new journey with prosperity, love, and laughter.', name:'Relatives' },
];

export default function Blessings() {
  const [blessings, setBlessings] = useState(initial);
  const ref = useRef();

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') || [];
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.bName.value.trim();
    const msg = e.target.bMsg.value.trim();
    if (!name || !msg) return;
    setBlessings(prev => [{ msg, name }, ...prev]);
    e.target.reset();
  };

  return (
    <section id="blessings" className="section texture-bg" ref={ref}>
      <div className="section-head reveal">
        <p className="eyebrow">Words From The Heart</p>
        <h2 className="section-title">Blessings</h2>
        <p className="section-desc">Leave a blessing for Pravallika &amp; Sai Sandeep as they begin this new chapter.</p>
      </div>
      <div className="blessings-wrap">
        <form className="blessing-form reveal" onSubmit={handleSubmit}>
          <input type="text" name="bName" placeholder="Your Name" required/>
          <input type="text" name="bMsg" placeholder="Write your blessing..." required/>
          <button type="submit">Add Blessing</button>
        </form>
        <div className="blessing-wall">
          {blessings.map((b, i) => (
            <div className="blessing-note" key={i}>
              "{b.msg}"<span className="b-name">— {b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
