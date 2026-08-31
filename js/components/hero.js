/**
 * NEXUS GAMING TH - Zero-CPU Static Ambient Hero Canvas
 * Draws once on load/resize - absolutely 0% background CPU / GPU overhead.
 */

export function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  const drawStaticBackdrop = () => {
    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);

    ctx.clearRect(0, 0, width, height);

    // Subtle ambient glow orbs
    const grad1 = ctx.createRadialGradient(width * 0.25, height * 0.35, 10, width * 0.25, height * 0.35, width * 0.4);
    grad1.addColorStop(0, 'rgba(168, 85, 247, 0.08)');
    grad1.addColorStop(1, 'rgba(168, 85, 247, 0)');
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, width, height);

    const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.6, 10, width * 0.8, height * 0.6, width * 0.35);
    grad2.addColorStop(0, 'rgba(0, 229, 255, 0.06)');
    grad2.addColorStop(1, 'rgba(0, 229, 255, 0)');
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);

    // A few subtle static gamer stars
    const staticStars = [
      { x: 0.15, y: 0.25, r: 1.5, color: 'rgba(0, 229, 255, 0.4)' },
      { x: 0.35, y: 0.7, r: 1.2, color: 'rgba(168, 85, 247, 0.3)' },
      { x: 0.72, y: 0.2, r: 1.8, color: 'rgba(0, 229, 255, 0.35)' },
      { x: 0.88, y: 0.65, r: 1.4, color: 'rgba(255, 0, 128, 0.3)' },
      { x: 0.52, y: 0.85, r: 1.2, color: 'rgba(0, 255, 136, 0.3)' }
    ];

    staticStars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.fill();
    });
  };

  drawStaticBackdrop();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(drawStaticBackdrop, 250);
  }, { passive: true });
}
