import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { wa } from '@/lib/site';

/* Big closing CTA band used at the bottom of most pages. */
export default function CtaBand({ title = "Let's make this Christmas unforgettable", text, waMsg, label = 'Chat on WhatsApp' }) {
  return (
    <section className="cta-band">
      <div className="container">
        <Reveal>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>This Season is Booking Fast</p>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
          <a className="btn btn-wa btn-lg" href={wa(waMsg)} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={22} /> {label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}