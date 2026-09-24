'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`to-top${show ? ' show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <Icon name="chevron" size={20} style={{ transform: 'rotate(180deg)' }} />
    </button>
  );
}