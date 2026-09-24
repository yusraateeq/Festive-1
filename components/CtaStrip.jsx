import Icon from '@/components/Icon';
import { SITE, wa } from '@/lib/site';

/* Small WhatsApp CTA that closes every section — per client requirement. */
export default function CtaStrip({ text, waMsg, dark = true, label = 'Chat on WhatsApp', className = '' }) {
  return (
    <div className={`cta-strip${dark ? '' : ' light'} ${className}`.trim()}>
      <span className="cta-txt">
        <Icon name={dark ? 'sparkles' : 'star'} size={22} />
        <span>{text}</span>
      </span>
      <span className="cta-actions">
        <a className="btn btn-wa btn-sm" href={wa(waMsg)} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={16} /> {label}
        </a>
        <a className={`btn btn-sm ${dark ? 'btn-line' : 'btn-dark'}`} href={`tel:${SITE.phoneTel}`}>
          <Icon name="phone" size={15} /> Call {SITE.phoneDisplay}
        </a>
      </span>
    </div>
  );
}