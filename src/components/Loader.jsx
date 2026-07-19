import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Loader({ onHide }) {
  const ref = useRef();

  useEffect(() => {
    // Build mandala dots
    const svg = ref.current.querySelector('#petalsGroup');
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * 2 * Math.PI;
      const x = 100 + Math.cos(angle) * 30;
      const y = 100 + Math.sin(angle) * 30;
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', x); c.setAttribute('cy', y);
      c.setAttribute('r', 2); c.setAttribute('fill', '#EFD48A');
      svg.appendChild(c);
    }
    // Particles
    const wrap = ref.current.querySelector('#loaderParticles');
    for (let i = 0; i < 28; i++) {
      const s = document.createElement('div');
      s.className = 'spark';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.animationDelay = (Math.random() * 2.6) + 's';
      wrap.appendChild(s);
    }
    const t = setTimeout(() => onHide(), 3600);
    return () => clearTimeout(t);
  }, [onHide]);

  return (
    <div id="loader" ref={ref}>
      <div className="loader-particles" id="loaderParticles"></div>
      <div className="loader-mandala">
        <svg viewBox="0 0 200 200" fill="none">
          <g stroke="#C79A3B" strokeWidth="1">
            <circle cx="100" cy="100" r="90"/>
            <circle cx="100" cy="100" r="70"/>
            <circle cx="100" cy="100" r="50"/>
            <g id="petalsGroup"></g>
          </g>
        </svg>
        <div className="loader-ganesh">
          <svg viewBox="0 0 64 64" fill="none" stroke="#EFD48A" strokeWidth="1.4">
            <ellipse cx="32" cy="28" rx="12" ry="10"/>
            <path d="M20 30c-4 2-6 8-2 12 3 3 7 1 8-3"/>
            <circle cx="26" cy="26" r="2" fill="#EFD48A"/>
            <circle cx="38" cy="26" r="2" fill="#EFD48A"/>
            <path d="M14 40c8 10 28 10 36 0" strokeLinecap="round"/>
            <path d="M22 46l-3 8M42 46l3 8" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div className="loader-text">|| శ్రీ గణేశాయ నమః ||</div>
      <div className="loader-sub">The Union Begins</div>
    </div>
  );
}
