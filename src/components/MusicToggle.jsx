import { useState, useRef } from 'react';

let audioCtx = null;
function playChime() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    [880, 1320, 1760].forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine'; osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, now + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.15, now + i * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 1.2);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start(now + i * 0.05); osc.stop(now + i * 0.05 + 1.3);
    });
  } catch(err) {}
}

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const ivRef = useRef(null);

  const toggle = () => {
    if (!playing) {
      playChime();
      ivRef.current = setInterval(playChime, 4000);
    } else {
      clearInterval(ivRef.current);
    }
    setPlaying(p => !p);
  };

  return (
    <button id="music-toggle" className={playing ? 'playing' : ''} aria-label="Toggle temple bell ambience" onClick={toggle}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    </button>
  );
}
