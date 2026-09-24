import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaStrip from '@/components/CtaStrip';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import ContactForm from '@/components/ContactForm';
import CtaBand from '@/components/templates/CtaBand';
import { SITE, wa, ld, orgGraph, makeMetadata } from '@/lib/site';

export const metadata = makeMetadata({
  title: 'Contact Festive Occasions | Christmas Decoration Dubai & UAE',
  description:
    'Get a free Christmas decoration quote. Call or WhatsApp +971 56 428 4444, email info@festiveoccasions.ae. Serving all 7 Emirates, 24/7 enquiries.',
  keywords: [
    'contact Festive Occasions', 'Christmas decoration quote Dubai',
    'Christmas decorators contact UAE', 'Christmas decoration company Dubai',
  ],
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Contact Us"
        title={<>Let&rsquo;s start your <span className="gold">festive planning</span></>}
        sub="A real person answers every message. Tell us what you need and we’ll come back with ideas, availability and a fixed quote."
        actions={
          <a className="btn btn-wa btn-lg" href={wa()} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} /> Chat on WhatsApp now
          </a>
        }
        trust={['Open 24/7 for enquiries', 'Serving all 7 Emirates', 'Replies within the hour']}
      />
      <Breadcrumbs crumbs={[{ label: 'Contact' }]} />

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <p className="eyebrow">Get In Touch</p>
              <h2>Pick whichever channel you love</h2>
              <div className="contact-meta mt-2">
                <div className="contact-card">
                  <span className="ic"><Icon name="phone" size={22} /></span>
                  <div>
                    <h3>Call or WhatsApp</h3>
                    <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
                    <p style={{ marginTop: '.3rem' }}>{SITE.hours}</p>
                  </div>
                </div>
                <div className="contact-card">
                  <span className="ic"><Icon name="mail" size={22} /></span>
                  <div>
                    <h3>Email</h3>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                    <p style={{ marginTop: '.3rem' }}>Enquiries answered within one business day.</p>
                  </div>
                </div>
                <div className="contact-card">
                  <span className="ic"><Icon name="pin" size={22} /></span>
                  <div>
                    <h3>Business Centre</h3>
                    <p>{SITE.address}</p>
                    <p style={{ marginTop: '.3rem' }}>{SITE.weekend}</p>
                  </div>
                </div>
                <div className="contact-card">
                  <span className="ic"><Icon name="instagram" size={22} /></span>
                  <div>
                    <h3>Follow the magic</h3>
                    <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">{SITE.instagramHandle} on Instagram</a>
                    <p style={{ marginTop: '.3rem' }}>Behind-the-scenes decor, new projects and season updates.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Find Us</p>
            <h2>Our business centre, Sharjah</h2>
          </Reveal>
          <Reveal>
            <div className="table-wrap" style={{ margin: '0 auto', maxWidth: '720px', padding: '1.2rem 1.4rem' }}>
              <div className="hours-table">
                <div><b>Enquiries (WhatsApp &amp; email)</b><span>24/7 — all week</span></div>
                <div><b>Office visits</b><span>Sat &amp; Sun closed</span></div>
                <div><b>Weekend replies</b><span>May be slower</span></div>
                <div><b>Installation window</b><span>Nov – early Jan</span></div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ margin: '1.6rem auto 0', maxWidth: '820px' }}>
              <iframe
                className="map-frame"
                title="Festive Occasions business location, Sharjah"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Sharjah%20Publishing%20City%20Free%20Zone%2C%20Sharjah%2C%20United%20Arab%20Emirates&output=embed"
              />
            </div>
          </Reveal>
          <Reveal><CtaStrip text="The fastest route to a quote is still a WhatsApp message — try it, you’ll be surprised how quick we are." waMsg={wa()} /></Reveal>
        </div>
      </section>

      <CtaBand
        title="Say hello — the lights can wait"
        text="Message us now and get your Christmas plan started today."
        waMsg={wa()}
      />

      <JsonLd data={ld(orgGraph)} />
    </>
  );
}