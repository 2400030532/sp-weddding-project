import { gsap } from 'gsap';

export function spawnPetals(count, container) {
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.top = '-20px';

    const size = 10 + Math.random() * 10;
    const color = Math.random() > 0.5 ? '#EFD48A' : '#A6192E';
    petal.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 20 20"><path d="M10 0 C15 5 15 15 10 20 C5 15 5 5 10 0Z" fill="${color}"/></svg>`;
    container.appendChild(petal);

    gsap.to(petal, {
      y: container.offsetHeight + 60,
      x: `+=${Math.random() * 160 - 80}`,
      rotation: Math.random() * 360,
      duration: 6 + Math.random() * 4,
      ease: 'none',
      onComplete: () => petal.remove(),
    });
  }
}
