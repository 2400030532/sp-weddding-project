import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { spawnPetals } from '../utils/petals';

const WEDDING = new Date('2026-08-15T19:46:00+05:30').getTime();

function useCountdown() {
  const [t, setT] = useState({ d:'00', h:'00', m:'00', s:'00' });
  useEffect(() => {
    const tick = () => {
      const diff = WEDDING - Date.now();
      if (diff <= 0) return;
      setT({
        d: String(Math.floor(diff/86400000)).padStart(2,'0'),
        h: String(Math.floor((diff%86400000)/3600000)).padStart(2,'0'),
        m: String(Math.floor((diff%3600000)/60000)).padStart(2,'0'),
        s: String(Math.floor((diff%60000)/1000)).padStart(2,'0'),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function Hero({ animate }) {
  const { d, h, m, s } = useCountdown();
  const heroRef = useRef();

  useEffect(() => {
    if (!animate) return;
    gsap.timeline()
      .to('#he1', { opacity:1, y:0, duration:.8, delay:.3 }, 0)
      .fromTo('#he2', { opacity:0, y:20, letterSpacing:'0.1em' }, { opacity:1, y:0, duration:1.1 }, 0.15)
      .to('#he3', { opacity:1, y:0, duration:.9 }, 0.5)
      .to('#he4', { opacity:1, y:0, duration:.9 }, 0.75)
      .to('#countdown', { opacity:1, y:0, duration:.9 }, 0.95);
    spawnPetals(26, heroRef.current);
    const iv = setInterval(() => heroRef.current && spawnPetals(3, heroRef.current), 2200);
    return () => clearInterval(iv);
  }, [animate]);

  return (
    <section id="hero" ref={heroRef}>
      <div className="glow"/>
      <svg className="silhouette" viewBox="0 0 1200 260" preserveAspectRatio="none">
        <path d="M0 260 L0 180 Q60 150 90 180 L90 120 Q100 90 110 120 L110 180 Q150 150 180 180 L180 90 L200 60 L220 90 L220 180 Q260 150 300 180 L300 40 Q320 10 340 40 L340 180 Q400 140 440 180 L440 70 L460 40 L480 70 L480 180 Q520 150 560 180 L560 20 Q600 -20 640 20 L640 180 Q680 150 720 180 L720 70 L740 40 L760 70 L760 180 Q800 140 860 180 L860 90 L880 60 L900 90 L900 180 Q940 150 980 180 L980 120 Q990 90 1000 120 L1000 180 Q1050 150 1100 180 L1100 260 Z" fill="#2c050f" opacity="0.85"/>
      </svg>
      <div className="hero-inner">
        <p className="hero-eyebrow" id="he1">Together With Their Families</p>
        <h1 className="hero-names" id="he2">Pravallika<span className="hero-and">weds</span>Sai Sandeep</h1>
        <p className="hero-sub" id="he3">"Two families, one blessing, a forever beginning."</p>
        <div className="hero-date-row" id="he4">
          <span className="hero-chip">15th August 2026</span>
          <span className="hero-chip">Muhurtham · 07:46 PM</span>
          <span className="hero-chip">Chenna's Convention Hall, Visakhapatnam</span>
        </div>
        <div id="countdown">
          <div className="cd-box"><span className="cd-num">{d}</span><span className="cd-label">Days</span></div>
          <div className="cd-box"><span className="cd-num">{h}</span><span className="cd-label">Hours</span></div>
          <div className="cd-box"><span className="cd-num">{m}</span><span className="cd-label">Mins</span></div>
          <div className="cd-box"><span className="cd-num">{s}</span><span className="cd-label">Secs</span></div>
        </div>
      </div>
      <div className="hero-scroll">Scroll<div className="arrow"/></div>
    </section>
  );
}
