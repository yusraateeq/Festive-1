import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaStrip from '@/components/CtaStrip';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import CtaBand from '@/components/templates/CtaBand';
import CountUp from '@/components/CountUp';
import { SITE, waService, ld, orgGraph, makeMetadata } from '@/lib/site';

export const metadata = makeMetadata({
  title: 'About Festive Occasions | Christmas Decorators Dubai & UAE',
  description:
    'Meet Festive Occasions — the team behind some of Dubai & the UAE’s most beautiful Christmas installations. Professional, safe and reliable festive décor since day one.',
  keywords: [
    'about Festive Occasions', 'Christmas decoration company Dubai',
    'Christmas decorators UAE', 'professional Christmas decoration team',
  ],
  path: '/about/',
});

const values = [
  { icon: 'sparkles', title: 'Design first', text: 'We are decorators with a design studio, not installers with a checklist. Every project starts with a look, a palette and a plan.' },
  { icon: 'shield', title: 'Safety always', text: 'Certified materials, IP65 outdoor lighting, insured crews and strict high-level access procedures. Families live in these spaces — we treat them that way.' },
  { icon: 'users', title: 'One accountable team', text: 'You deal with the same people from quote to takedown. One WhatsApp number, one team, one standard of care.' },
  { icon: 'truck', title: 'Nationwide reach', text: 'Crews and storage across all 7 Emirates mean your Christmas looks identical whether you live in Dubai, RAK or Fujairah.' },
];

export default function AboutPage() {
  const quote = waService('something from the Festive Occasions team');
  return (
    <>
      <Hero
        compact
        eyebrow="About Us"
        title={<>The team behind the UAE&rsquo;s <span className="gold">most-loved Christmases</span></>}
        sub="Festive Occasions is a full-service Christmas decoration company — designers, installers and project managers who treat your Christmas like our own."
        actions={
          <a className="btn btn-wa btn-lg" href={quote} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} /> Say hello on WhatsApp
          </a>
        }
        trust={['Based in Sharjah, serving all UAE', '250+ installations', '24/7 enquiries']}
      />
      <Breadcrumbs crumbs={[{ label: 'About Us' }]} />

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <p className="eyebrow">Our Story</p>
              <h2>Christmas is our year-round obsession</h2>
              <p className="lead">
                Festive Occasions began with a simple observation: families in the UAE love
                Christmas, but the good stuff — the design, the safe high-level installation, the
                real trees, the January takedown — was always scattered across a dozen vendors.
                We built the company that does it all.
              </p>
              <p className="lead">
                Today our designers and certified installation crews work across all seven emirates,
                transforming villas, flats, offices, hotels and malls into places people
                photograph, remember and come back to visit. Our team is small enough to care and
                big enough to cover a country — both are deliberate.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div className="stats light">
                <div className="stat"><div><CountUp to={250} suffix="+" /><span>Installations delivered</span></div></div>
                <div className="stat"><div><CountUp to={7} /><span>Emirates covered</span></div></div>
                <div className="stat"><div><CountUp to={40} suffix="+" /><span>Team members</span></div></div>
                <div className="stat"><div><CountUp to={5} suffix="★" /><span>Average client rating</span></div></div>
              </div>
            </Reveal>
          </div>
          <Reveal><CtaStrip text="Want to meet the people behind the magic? Introduce yourself on WhatsApp." waMsg={quote} /></Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">What We Stand For</p>
            <h2>Four promises we never break</h2>
          </Reveal>
          <div className="grid g4">
            {values.map((v, i) => (
              <Reveal as="div" key={v.title} delay={(i % 4) + 1} className="card">
                <span className="ic"><Icon name={v.icon} size={26} /></span>
                <h3 style={{ fontSize: '1.05rem' }}>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal><CtaStrip dark={false} text="These promises apply to every booking — AED 399 or AED 100,000." waMsg={quote} /></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '880px' }}>
          <Reveal className="center sec-head">
            <p className="eyebrow">Service Area</p>
            <h2>Headquartered in the UAE, everywhere in the UAE</h2>
          </Reveal>
          <Reveal>
            <p className="lead center">
              Our business centre is in Sharjah Publishing City Free Zone, but our crews, storage
              and project managers are positioned across the country. If there&rsquo;s a roof in
              the UAE, we can probably decorate it.
            </p>
          </Reveal>
          <Reveal><CtaStrip text="Check our coverage page or just ask — the answer is usually yes." waMsg={quote} /></Reveal>
        </div>
      </section>

      <CtaBand
        title="Let’s plan your best Christmas yet"
        text="Message the team that’s decorated half of Dubai’s favourite homes."
        waMsg={quote}
      />

      <JsonLd data={ld(orgGraph)} />
    </>
  );
}