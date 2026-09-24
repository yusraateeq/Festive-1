import Link from 'next/link';
import Icon from '@/components/Icon';

/* Breadcrumb navigation (also feeds BreadcrumbList JSON-LD on pages). */
export default function Breadcrumbs({ crumbs }) {
  return (
    <div className="crumbs" aria-label="Breadcrumb">
      <div className="container">
        <Link href="/"><Icon name="home" size={14} /> Home</Link>
        {crumbs.map((c, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
            <span className="cr-sep" aria-hidden="true">›</span>
            {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}