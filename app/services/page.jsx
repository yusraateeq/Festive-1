import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaStrip from '@/components/CtaStrip';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import CtaBand from '@/components/templates/CtaBand';
import { SITE, waService, ld, orgGraph, makeMetadata } from '@/lib/site';
import { services } from '@/lib/data/services';

export const metadata = makeMetadata({
  title: 'Christmas Decoration Services in Dubai & UAE | Festive Occasions',
  description:
    'Explore every Christmas decoration service we offer: villa, home, office, corporate, Christmas lighting and outdoor decoration — nationwide across all 7 Emirates.',
  keywords: [
    'Christmas decoration services Dubai', 'villa Christmas decoration', 'home Christmas decoration',
    'office Christmas decoration', 'corporate Christmas decoration', 'Christmas lighting',
    'outdoor Christmas decoration', 'Christmas decorators UAE',
  ],
  path: '/services/',
});

export default function ServicesPage() {
  const quote = waService('a Christmas decoration service');
  return (
    <>
      <Hero
        compact
        eyebrow="Our Services"
        title={<>Every Christmas decoration service <span className="gold">you&rsquo;ll ever need</span></>}
        sub="One design-led team for your villa, home, office or venue. Choose a single service or build a complete festive package."
        actions={
          <a className="btn btn-wa btn-lg" href={quote} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} /> Talk to a designer
          </a>
        }
        trust={['Free on-site consultation', 'All 7 Emirates — Nationwide', 'Design · Install · Takedown']}
      />
      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      <section className="section">
        <div className="container">
          <div className="grid g3">
            {services.map((s, i) => (
              <Reveal as="article" key={s.slug} delay={(i % 3) + 1} className="card">
                <span className="svc-num" aria-hidden="true">0{i + 1}</span>
                <span className="ic"><Icon name={s.icon} size={26} /></span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="card-tags"><span>From {s.priceFrom}</span></span>
                <a className="card-link" href={`/${s.slug}/`}>Explore {s.name} <Icon name="arrow" size={15} /></a>
              </Reveal>
            ))}
          </div>
          <Reveal><CtaStrip text="Still deciding? Message us your space and we'll recommend the perfect service mix." waMsg={quote} /></Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '880px' }}>
          <Reveal className="center sec-head">
            <p className="eyebrow">Full-Service Promise</p>
            <h2>The same standard, every time</h2>
          </Reveal>
          <Reveal>
            <p className="lead center">
              Whatever you book, you get the complete Festive Occasions experience: a real
              designer, a fixed itemised quote, certified materials, a professional instal,
              in-season care and a spotless January takedown. That is how Christmas decoration
              should be — magical on the outside, completely effortless for you.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Start with a free consultation"
        text="Tell us the property type, the vibe you want and your dates. We'll design the rest."
        waMsg={quote}
      />

      <JsonLd
        data={ld(
          orgGraph,
          {
            '@type': 'ItemList',
            itemListElement: services.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: s.name,
              url: `${SITE.domain}/${s.slug}/`,
            })),
          }
        )}
      />
    </>
  );
}