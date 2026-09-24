'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import SmartImage from '@/components/SmartImage';
import { gallery, galleryCats } from '@/lib/data/gallery';
import { waService } from '@/lib/site';
import Icon from '@/components/Icon';

/* Filterable gallery grid (interactive client component) with a lightbox:
   clicking a photo opens it large with prev/next, caption and keyboard nav. */
export default function GalleryGrid() {
  const [filter, setFilter] = useState('all');
  const [lb, setLb] = useState(null); // index into filtered list, null = closed

  const items = useMemo(
    () => gallery.filter((g) => filter === 'all' || g.cat === filter),
    [filter]
  );

  const open = useCallback((i) => setLb(i), []);
  const close = useCallback(() => setLb(null), []);
  const prev = useCallback(() => setLb((i) => (i === null ? null : (i - 1 + items.length) % items.length)), [items.length]);
  const next = useCallback(() => setLb((i) => (i === null ? null : (i + 1) % items.length)), [items.length]);

  /* Keyboard + scroll lock while the lightbox is open */
  useEffect(() => {
    if (lb === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.documentElement.classList.add('lb-open');
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('lb-open');
    };
  }, [lb, close, next, prev]);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter gallery">
        {galleryCats.map((c) => (
          <button
            key={c.key}
            className={filter === c.key ? 'active' : ''}
            onClick={() => setFilter(c.key)}
            aria-pressed={filter === c.key}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid g3">
        {items.map((g, i) => (
          <figure key={g.src} className="img-card gal-item">
            <button type="button" className="img-open" onClick={() => open(i)} aria-label={`View larger photo: ${g.cap}`}>
              <div className="img-frame">
                <SmartImage src={g.src} alt={`${g.cap} — ${g.area}`} width={640} height={853} />
                <span className="img-zoom" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </span>
              </div>
            </button>
            <figcaption className="img-cap">
              <h3>{g.cap}</h3>
              <p>{g.area}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="center mt-4">
        <a className="btn btn-wa" href={waService('a Christmas decoration project like the ones in your gallery')} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={18} /> I want décor like these
        </a>
      </div>

      {lb !== null && items[lb] &&
        createPortal(
          <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${items[lb].cap} enlarged photo`} onClick={close}>
            <button type="button" className="lb-btn lb-close" onClick={close} aria-label="Close photo"><span aria-hidden="true">✕</span></button>

            <button type="button" className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>

            <div className="lb-main" onClick={(e) => e.stopPropagation()}>
              <img src={items[lb].src} alt={`${items[lb].cap} — ${items[lb].area}`} width={1200} height={1600} />
              <figcaption className="lb-cap">
                <h3>{items[lb].cap}</h3>
                <p>{items[lb].area} · {lb + 1} / {items.length}</p>
              </figcaption>
            </div>

            <button type="button" className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>,
          document.body
        )}
    </>
  );
}