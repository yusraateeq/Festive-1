import Link from 'next/link';
import Icon from '@/components/Icon';
import { SITE, wa } from '@/lib/site';
import { services } from '@/lib/data/services';

const quickLinks = [
  { href: '/about/', label: 'About Us' },
  { href: '/packages/', label: 'Packages & Prices' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/blog/', label: 'Blog & Ideas' },
  { href: '/contact/', label: 'Contact' },
  { href: '/privacy-policy/', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="brand">
              <span className="logo-badge" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="16" r="6" fill="#d8bd6e" />
                  <path d="M22.6 35h18.8l-2 13H24.6z" fill="#fff" />
                  <rect x="29" y="48" width="6" height="6" rx="1.5" fill="#b08d2e" />
                </svg>
              </span>
              <span>
                Festive Occasions
                <small>Christmas Decoration</small>
              </span>
            </div>
            <p className="f-about">
              Professional Christmas decoration services for villas, homes, offices and
              corporate venues — across Dubai and all 7 Emirates. Design, install, maintain
              and takedown, all in one white-glove service.
            </p>
            <div className="socials">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <Icon name="instagram" size={18} />
              </a>
              <a href={wa()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <Icon name="whatsapp" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/${s.slug}/`}>{s.name}</Link></li>
              ))}
              <li><Link href="/christmas-decoration-dubai/">Christmas Decoration Dubai</Link></li>
              <li><Link href="/christmas-decoration-uae/">Christmas Decoration UAE</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <span className="fc-ico"><Icon name="phone" size={15} /> <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></span>
              </li>
              <li>
                <span className="fc-ico"><Icon name="mail" size={15} /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></span>
              </li>
              <li>
                <span className="fc-ico"><Icon name="pin" size={15} /> <span>{SITE.address}</span></span>
              </li>
              <li>
                <span className="fc-ico"><Icon name="clock" size={15} /> <span>{SITE.hours}</span></span>
              </li>
              <li>
                <span className="fc-ico"><Icon name="calendar" size={15} /> <span>{SITE.weekend}</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Festive Occasions. All rights reserved.</span>
          <span>
            Christmas Decoration Dubai · UAE · All 7 Emirates — Nationwide Service
          </span>
        </div>
      </div>
    </footer>
  );
}