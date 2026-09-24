'use client';

import { useEffect, useRef } from 'react';

/* Subtle snowfall on the hero canvas. Respects reduced motion & hidden tabs. */
export default function Snow({ count = 60 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = canvas.getContext('2d');
    let flakes = [];
    let W, H, raf = null, last = 0;
    const particles = window.innerWidth < 700 ? Math.floor(count / 2) : count;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    const make = () => ({
      x: Math.random() * W,
      y: Math.random() * -H,
      r: Math.random() * 2.4 + 1,
      s: Math.random() * 0.5 + 0.35,
      drift: Math.random() * 1.2 - 0.6,
    });

    resize();
    for (let i = 0; i < particles; i++) flakes.push(make());

    const loop = (ts) => {
      if (ts - last < 34) { raf = requestAnimationFrame(loop); return; }
      last = ts;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      for (const f of flakes) {
        f.y += f.s;
        f.x += f.drift + Math.sin(ts / 1600 + f.y / 90) * 0.35;
        if (f.y > H + 8) { f.y = -8; f.x = Math.random() * W; }
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onVis = () => {
      if (document.hidden && raf) { cancelAnimationFrame(raf); raf = null; }
      else if (!raf) raf = requestAnimationFrame(loop);
    };
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', onVis);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [count]);

  return <canvas ref={canvasRef} id="snow" aria-hidden="true" />;
}