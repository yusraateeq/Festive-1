import Icon from '@/components/Icon';
import { wa } from '@/lib/site';

/* Floating WhatsApp button with pulse ring + greeting bubble. */
export default function WhatsAppFloat() {
  const href = wa();
  return (
    <>
      <a className="wa-float" href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with Festive Occasions on WhatsApp">
        <Icon name="whatsapp" size={30} />
      </a>
      <div className="wa-note" aria-hidden="true">
        <Icon name="message" size={16} style={{ verticalAlign: '-3px', color: 'var(--wa-dark)' }} /> Chat with us — we reply fast!
      </div>
    </>
  );
}