import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaStrip from '@/components/CtaStrip';
import Faq from '@/components/Faq';
import SmartImage from '@/components/SmartImage';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import { SITE, waService, ld, orgGraph } from '@/lib/site';
import { serviceLd } from '@/lib/data/services';
import { packages } from '@/lib/data/packages';
import { gallery } from '@/lib/data/gallery';

const catForService = {
  'villa-christmas-decoration': 'villa',
  'home-christmas-decoration': 'home',
  'office-christmas-decoration': 'office',
  'corporate-christmas-decoration': 'corporate',
  'christmas-lighting': 'lighting',
  'outdoor-christmas-decoration': 'outdoor',
};

function BreadcrumbLd({ service, title }) {
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.domain}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.domain}/services/` },
    { '@type': 'ListItem', position: 3, name: title },
  ];
  return (
    <JsonLd
      data={ld({
        '@type': 'BreadcrumbList',
        '@id': `${SITE.domain}/${service.slug}/#breadcrumb`,
        itemListElement: items,
      })}
    />
  );
}

export default function ServicePage({ service }) {
  const path = `/${service.slug}/`;
  const quote = waService(service.name);
  const cat = catForService[service.slug] || 'villa';
  const preview = gallery.filter((g) => g.cat === cat).slice(0, 3);

  return (
    <>
      <Hero
        compact
        eyebrow="Our Services"
        title={<>{service.headline} <span className="gold">&amp; the UAE</span></>}
        sub={service.lead}
        actions={
          <>
            <a className="btn btn-wa btn-lg" href={quote} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={20} /> Get a Free Quote
            </a>
            <a className="btn btn-light btn-lg" href={`tel:${SITE.phoneTel}`}>
              <Icon name="phone" size={18} /> {SITE.phoneDisplay}
            </a>
          </>
        }
        trust={['Free on-site consultation', 'All 7 Emirates', `From ${service.priceFrom}`]}
      />

      <Breadcrumbs crumbs={[{ label: 'Services', href: '/services/' }, { label: service.name }]} />

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <p className="eyebrow">The {service.name} Experience</p>
              <h2>{service.name} — {service.priceFrom}</h2>
              {service.intro.map((p, i) => <p className="lead" key={i}>{p}</p>)}
              <div className="tick">
                <Icon name="badge" size={20} />
                <p><strong>Design, supply, install, maintain &amp; takedown</strong> — one team, one fixed quote.</p>
              </div>
              <div className="chip-row mt-2">
                {service.included.map((inc) => <span className="chip gold" key={inc}>{inc}</span>)}
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="img-card">
                <div className="img-frame">
                  <SmartImage src={service.image} alt={`${service.name} in Dubai — Festive Occasions`} width={720} height={960} />
                </div>
                <div className="img-cap">
                  <h3>{service.name}</h3>
                  <p>Professionally designed and installed by Festive Occasions.</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal><CtaStrip text={`Ready for a ${service.name.toLowerCase()}? Tell us your dates for a fast quote.`} waMsg={quote} /></Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">What&rsquo;s Included</p>
            <h2>Everything you need for a flawless festive season</h2>
            <p className="lead">No half-done corners, no chasing vendors — just this list, delivered to a professional finish.</p>
          </Reveal>
          <div className="grid g3">
            {service.features.map((f, i) => (
              <Reveal as="div" key={i} delay={(i % 3) + 1} className="card">
                <span className="ic"><Icon name={i === 0 ? 'sparkles' : i % 2 ? 'check' : 'star'} size={26} /></span>
                <p>{f}</p>
              </Reveal>
            ))}
          </div>
          <Reveal><CtaStrip text="Want the full scope in writing before you decide? We send a clear, itemised proposal." waMsg={quote} label="Get Proposal on WhatsApp" /></Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">How It Works</p>
            <h2>From hello to holiday magic in four steps</h2>
          </Reveal>
          <div className="steps">
            {[
              ['Tell us your dates', 'Message us on WhatsApp or book a free consultation. It takes two minutes.'],
              ['We design & quote', 'A designer visits your space, plans the look and sends a fixed, itemised quote.'],
              ['We install & style', 'Our crew arrives on schedule, installs safely and styles every detail beautifully.'],
              ['We maintain & clear', 'Season visits keep everything perfect; in January we take it all down and pack it away.'],
            ].map(([t, d], i) => (
              <Reveal as="div" key={i} delay={(i % 4) + 1} className="step">
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal><CtaStrip text="Our December diary fills fast. Book your consultation now and lock your installation date." waMsg={quote} /></Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section section-tint">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Recent Work</p>
            <h2>Real projects, real results</h2>
          </Reveal>
          <div className="grid g3">
            {preview.map((g, i) => (
              <Reveal as="figure" key={g.src} delay={(i % 3) + 1} className="img-card">
                <a className="img-open" href="/gallery/" aria-label={`View larger photo: ${g.cap}`}>
                  <div className="img-frame">
                    <SmartImage src={g.src} alt={`${g.cap} — ${g.area}`} width={640} height={853} />
                    <span className="img-zoom" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                        <path d="M11 8v6M8 11h6" />
                      </svg>
                    </span>
                  </div>
                </a>
                <figcaption className="img-cap">
                  <h3>{g.cap}</h3>
                  <p>{g.area}</p>
                </figcaption>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <span className="center" style={{ display: 'block' }}>
              <a className="btn btn-dark" href="/gallery/"><Icon name="camera" size={18} /> View Full Gallery</a>
            </span>
          </Reveal>
          <Reveal><CtaStrip text="Love what you see? Tell us your space and we will design something just as magical." waMsg={quote} /></Reveal>
        </div>
      </section>

      {/* Areas */}
      <section className="section">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Where We Decorate</p>
            <h2>{service.name} across Dubai &amp; all 7 Emirates</h2>
            <p className="lead">Our teams work across Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah — with no travel surcharge for most of the UAE.</p>
          </Reveal>
          <Reveal>
            <div className="chip-row" style={{ justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
              {service.areas.map((a) => <span className="chip" key={a}>{a}</span>)}
            </div>
          </Reveal>
          <Reveal><CtaStrip text="Not sure if we cover your area? Ask on WhatsApp — if we can reach you, we will decorate you." waMsg={quote} /></Reveal>
        </div>
      </section>

      {/* Packages teaser */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Packages</p>
            <h2>Simple packages, transparent prices</h2>
            <p className="lead">Silver, Gold or Platinum — or a fully bespoke quote for your space.</p>
          </Reveal>
          <div className="grid g3">
            {packages.map((p, i) => (
              <Reveal as="div" key={p.slug} delay={(i % 3) + 1} className="card">
                <span className="svc-num" aria-hidden="true">0{i + 1}</span>
                <h3>{p.name}<span className="gold-text"> · {p.price}</span></h3>
                <p>{p.blurb}</p>
                <ul className="mt-2">
                  {p.features.slice(0, 3).map((f) => (
                    <li className="tick" key={f}><Icon name="check" size={17} /><p>{f}</p></li>
                  ))}
                </ul>
                <a className="card-link" href="/packages/">See full package <Icon name="arrow" size={15} /></a>
              </Reveal>
            ))}
          </div>
          <Reveal><CtaStrip text="Not sure which package fits your space and budget? Tell us your rooms and we will recommend one." waMsg={quote} /></Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <Reveal className="center sec-head">
            <p className="eyebrow">Questions &amp; Answers</p>
            <h2>Everything clients ask about {service.name.toLowerCase()}</h2>
          </Reveal>
          <Reveal><Faq items={service.faq} /></Reveal>
          <Reveal><CtaStrip text="Still curious? Real humans answer on WhatsApp — no chatbots, no waiting." waMsg={quote} /></Reveal>
        </div>
      </section>

      {/* Closing band */}
      <section className="cta-band">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>This Season is Booking Fast</p>
            <h2>Let&rsquo;s make {new Date().getFullYear()}&rsquo;s Christmas unforgettable</h2>
            <p>Message us now and we&rsquo;ll send pricing, availability and design ideas for your {service.name.toLowerCase()} — usually within the hour.</p>
            <a className="btn btn-wa btn-lg" href={quote} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={22} /> Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <BreadcrumbLd service={service} title={service.name} />
      <JsonLd data={ld(orgGraph, serviceLd(service, SITE.domain, path))} />
    </>
  );
}