import { useState, useRef, useEffect } from 'react';
import { spawnPetals } from '../utils/petals';

export default function RSVP() {
  const [success, setSuccess] = useState(false);
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
    setSuccess(true);
    const hero = document.getElementById('hero');
    if (hero) spawnPetals(30, hero);
    e.target.reset();
  };

  return (
    <section id="rsvp" className="section dark-section" ref={ref}>
      <div className="section-head reveal">
        <p className="eyebrow" style={{color:'#EFD48A'}}>Kindly Confirm</p>
        <h2 className="section-title">RSVP</h2>
        <p className="section-desc">We would be delighted to have you bless the couple in person. Please let us know if you'll be joining.</p>
      </div>
      <form className="rsvp-form reveal" onSubmit={handleSubmit}>
        <div className="row2">
          <div><label>Full Name</label><input type="text" required placeholder="Your Name"/></div>
          <div><label>Phone Number</label><input type="tel" required placeholder="+91"/></div>
        </div>
        <div className="row2">
          <div><label>Number Of Guests</label><input type="number" min="1" defaultValue="1" required/></div>
          <div>
            <label>Food Preference</label>
            <select required>
              <option value="">Select</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
            </select>
          </div>
        </div>
        <div><label>Message For The Couple</label><textarea rows="3" placeholder="Your wishes..."/></div>
        <button type="submit" className="rsvp-submit">Send RSVP</button>
        {success && <p className="rsvp-success show">🌸 Thank you! Your RSVP has been received with love. 🌸</p>}
      </form>
    </section>
  );
}
