'use client';

import { useEffect, useRef, useState } from 'react';

const PH_SVG = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#0e3a2b"/><stop offset="1" stop-color="#14513c"/></linearGradient></defs>' +
    '<rect width="640" height="480" fill="url(#g)"/>' +
    '<circle cx="512" cy="120" r="120" fill="rgba(216,189,110,.18)"/>' +
    '<g transform="translate(320 250)" fill="none" stroke="#d8bd6e" stroke-width="6" stroke-linecap="round">' +
    '<path d="M0 -70 L0 66 M0 -4 L58 26 M0 -4 L-58 26 M0 -30 L40 -8 M0 -30 L-40 -8 M0 46 L-12 66 M0 46 L12 66"/>' +
    '<path d="M0 20 L26 44 M0 20 L-26 44" stroke="#b08d2e"/></g>' +
    '<text x="320" y="432" text-anchor="middle" font-family="Georgia,serif" font-size="30" fill="rgba(255,255,255,.9)">' +
    'Festive Occasions</text></svg>'
);

export const placeholderSrc = `data:image/svg+xml;utf8,${PH_SVG}`;

/* Plain <img> with lazy loading + graceful placeholder when the photo file
   hasn't been added to /public/images yet. Never shows a broken image. */
export default function SmartImage({ src, alt, className = '', loading = 'lazy', decoding = 'async', width, height, priority = false, ...rest }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <>
      <img
        ref={imgRef}
        src={failed ? placeholderSrc : src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        decoding={decoding}
        fetchPriority={priority ? 'high' : undefined}
        width={width}
        height={height}
        className={(loaded ? 'loaded ' : '') + className}
        onLoad={() => setLoaded(true)}
        onError={() => { setFailed(true); setLoaded(true); }}
        {...rest}
      />
      {!loaded && (
        <span className="ph" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20" />
            <path d="M12 4 7 10h4l-4 6h10l-4-6h4z" />
            <path d="M8 20h8" />
          </svg>
        </span>
      )}
      {failed && <span className="ph-lbl">Photo coming soon</span>}
    </>
  );
}