'use client';

import { useEffect, useRef, useState } from 'react';

/* Animated number counter (stats band). */
export default function CountUp({ to, suffix = '', className = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(to);
      return;
    }
    let start = null, raf = null;
    const dur = 1400;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          io.disconnect();
          raf = requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [to]);

  return (
    <b ref={ref} className={className}>
      {val.toLocaleString()}{suffix}
    </b>
  );
}