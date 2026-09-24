import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaStrip from '@/components/CtaStrip';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import { SITE, wa, ld, orgGraph } from '@/lib/site';
import { services } from '@/lib/data/services';
import { locationServiceLd } from '@/lib/data/locations';
import CtaBand from '@/components/templates/CtaBand';

/* Shared layout for the location/coverage pages (Dubai, UAE, Nationwide). */
export default function LocationPage({ page }) {
  const path = `/${page.slug}/`;
  const cite = (name) => wa(`Hi Festive Occasions! I'd like a ${name} quote for my property. Please share details.`);

  return (
    <>
      <Hero
        compact
        eyebrow={page.eyebrow}
        title={<>{page.heroTitle} <span className="gold">&amp; the UAE</span></>}
        sub={page.lead}
        actions={
          <>
            <a className="btn btn-wa btn-lg" href={cite(page.ctaName)} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={20} /> Get a Free Quote
            </a>
            <a className="btn btn-light btn-lg" href={`tel:${SITE.phoneTel}`}>
              <Icon name="phone" size={18} /> {SITE.phoneDisplay}
            </a>
          </>
        }
        trust={page.trust}
      />

      <Breadcrumbs crumbs={page.crumbs} />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <p className="eyebrow">{page.eyebrow}</p>
              <h2>{page.introHead}</h2>
              {page.intro.map((p, i) => <p className="lead" key={i}>{p}</p>)}
            </Reveal>
            <Reveal delay={1}>
              <div className="card">
                <span className="ic"><Icon name={page.icon || 'pin'} size={26} /></span>
                <h3>Full-service coverage</h3>
                <p>Free consultation, design, installation and January takedown — handled entirely by one professional team, wherever you are in the UAE.</p>
                <div className="chip-row mt-2">
                  {page.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal><CtaStrip text={page.ctaStrip1} waMsg={cite(page.ctaName)} /></Reveal>
        </div>
      </section>

      {/* Body content */}
      <section className="section section-alt">
        <div className="container">
          <div className="prose" style={{ maxWidth: '860px', margin: '0 auto' }}>
            {page.sections.map((s, i) => (
              <Reveal key={i}>
                {s.h && <h2>{s.h}</h2>}
                {s.p && <p>{s.p}</p>}
                {s.list && (
                  <ul>
                    {s.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="section">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Areas We Serve</p>
            <h2>{page.areasHead}</h2>
          </Reveal>
          <Reveal>
            <div className="chip-row" style={{ justifyContent: 'center', maxWidth: '940px', margin: '0 auto' }}>
              {page.areas.map((a) => <span className="chip gold" key={a}>{a}</span>)}
            </div>
          </Reveal>
          <Reveal><CtaStrip text="Your community might not be on the list yet — ask and we’ll almost certainly say yes." waMsg={cite(page.ctaName)} /></Reveal>
        </div>
      </section>

      {/* Related services */}
      <section className="section section-tint">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Our Services</p>
            <h2>Every decoration service, available here</h2>
          </Reveal>
          <div className="grid g3">
            {services.map((s, i) => (
              <Reveal as="div" key={s.slug} delay={(i % 3) + 1} className="card">
                <span className="ic"><Icon name={s.icon} size={26} /></span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <a className="card-link" href={`/${s.slug}/`}>Explore service <Icon name="arrow" size={15} /></a>
              </Reveal>
            ))}
          </div>
          <Reveal><CtaStrip text="Tell us which service you need and where — we’ll handle the rest." waMsg={cite(page.ctaName)} /></Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <Reveal className="center sec-head">
            <p className="eyebrow">Questions &amp; Answers</p>
            <h2>{page.faqHead}</h2>
          </Reveal>
          <Reveal><Faq items={page.faq} /></Reveal>
          <Reveal><CtaStrip text="Prefer to just talk it through? WhatsApp us — a real human replies." waMsg={cite(page.ctaName)} /></Reveal>
        </div>
      </section>

      <CtaBand text={page.bandText} waMsg={cite(page.ctaName)} />

      <JsonLd data={ld(orgGraph, locationServiceLd(page.ldName, page.lead, path, SITE.domain))} />
    </>
  );
}