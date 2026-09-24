import Snow from '@/components/Snow';

export default function Hero({
  eyebrow,
  title,
  sub,
  actions,
  trust = [],
  compact = false,
  badge = null,
}) {
  return (
    <section className={`hero${compact ? ' hero-compact' : ''}`}>
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/images/hero.jpg"
          alt=""
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
        />
        <span className="hero-shade" />
        <span className="hero-glow" />
        <span className="hero-fade" />
      </div>
      <Snow />
      <div className="container hero-inner">
        <div className="hero-copy">
          {eyebrow && <p className="eyebrow h-anim h1">{eyebrow}</p>}
          <h1 className="h-anim h2">{title}</h1>
          {sub && <p className="hero-sub h-anim h3">{sub}</p>}
          {actions && <div className="hero-actions h-anim h3">{actions}</div>}
          {trust?.length > 0 && (
            <div className="hero-trust h-anim h4">
              {trust.map((t, i) => (
                <span key={i}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        {badge && <div className="hero-badge h-anim h3">{badge}</div>}
      </div>
    </section>
  );
}