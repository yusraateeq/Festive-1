'use client';

import { useEffect, useRef, useState } from 'react';

/* Scroll-reveal wrapper. Hidden until observed (only when JS + motion ok). */
export default function Reveal({ as: Tag = 'div', className = '', delay, children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setInView(true);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    // Safety net: never let content stay invisible (matches CSS fallback).
    const t = setTimeout(() => setInView(true), 3000);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  const cls = ['reveal', inView ? 'in' : '', delay ? `d${delay}` : '', className].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}