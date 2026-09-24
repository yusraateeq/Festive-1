import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaStrip from '@/components/CtaStrip';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import CtaBand from '@/components/templates/CtaBand';
import { SITE, wa, waService, ld, orgGraph, makeMetadata } from '@/lib/site';
import { packages, corporatePkg, packageCompare, packagesLd } from '@/lib/data/packages';

export const metadata = makeMetadata({
  title: 'Christmas Decoration Packages & Prices Dubai | Festive Occasions',
  description:
    'Transparent Christmas decoration packages from AED 399. Silver, Gold, Platinum & bespoke corporate packages — trees, lights, styling, installation & takedown nationwide.',
  keywords: [
    'Christmas decoration packages', 'Christmas decoration prices Dubai',
    'Christmas decoration cost Dubai', 'Christmas package Dubai',
    'Christmas tree package UAE', 'corporate Christmas decoration quote',
  ],
  path: '/packages/',
});

export default function PackagesPage() {
  const quote = waService('a Christmas decoration package');
  return (
    <>
      <Hero
        compact
        eyebrow="Packages & Prices"
        title={<>Christmas decoration packages with <span className="gold">honest prices</span></>}
        sub="Every package includes design, supply, professional installation, seasonal care and January takedown. What you see is what you pay."
        actions={
          <a className="btn btn-wa btn-lg" href={quote} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} /> Get a personal quote
          </a>
        }
        trust={['From AED 399', 'All 7 Emirates', 'Fixed itemised quotes']}
      />
      <Breadcrumbs crumbs={[{ label: 'Packages' }]} />

      <section className="section">
        <div className="container">
          <div className="grid g3">
            {packages.map((p, i) => (
              <Reveal as="div" key={p.slug} delay={(i % 3) + 1} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="svc-num" aria-hidden="true">0{i + 1}</span>
                {p.popular && <span className="badge" style={{ marginBottom: '.8rem' }}>Most Popular</span>}
                <h3>{p.name}</h3>
                <p className="card-tags" style={{ marginTop: 0 }}><span>{p.tag}</span></p>
                <p className="pkg-price" style={{ fontSize: '1.35rem' }}>{p.price}</p>
                <p>{p.blurb}</p>
                <ul className="mt-2" style={{ flex: 1 }}>
                  {p.features.map((f) => (
                    <li className="tick" key={f}><Icon name="check" size={17} /><p>{f}</p></li>
                  ))}
                </ul>
                <a className="btn btn-wa" href={wa(p.waMsg)} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={17} /> Enquire about {p.name}
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal><CtaStrip text="Not sure which tier fits? Send a photo of your space — the right package will pick itself." waMsg={quote} label="Ask which package fits" /></Reveal>
        </div>
      </section>

      {/* Corporate */}
      <section className="section section-alt">
        <div className="container">
          <div className="split">
            <Reveal>
              <p className="eyebrow">Corporate &amp; Bespoke</p>
              <h2>{corporatePkg.name}</h2>
              <p className="lead">{corporatePkg.blurb}</p>
              <ul className="mt-2">
                {corporatePkg.features.map((f) => (
                  <li className="tick" key={f}><Icon name="check" size={17} /><p>{f}</p></li>
                ))}
              </ul>
              <a className="btn btn-dark mt-2" href={wa(corporatePkg.waMsg)} target="_blank" rel="noopener noreferrer">
                <Icon name="briefcase" size={18} /> Request corporate proposal
              </a>
            </Reveal>
            <Reveal delay={1}>
              <div className="card">
                <span className="ic"><Icon name="gift" size={26} /></span>
                <h3>Rent the season, own the savings</h3>
                <p>
                  Hiring décor instead of buying it can cut your Christmas cost by up to 50% across
                  five seasons. We design, supply, install, maintain and store — you simply enjoy it.
                  Ask for the rental option on any package.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Compare</p>
            <h2>What changes between tiers</h2>
          </Reveal>
          <Reveal>
            <div className="table-wrap">
              <table className="pkg">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Silver</th>
                    <th>Gold</th>
                    <th>Platinum</th>
                  </tr>
                </thead>
                <tbody>
                  {packageCompare.map((row, i) => (
                    <tr key={i}>
                      <td>{row[0]}</td>
                      {row.slice(1).map((v, j) => (
                        <td key={j}>{v ? <Icon name="check" size={18} /> : '—'}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal><CtaStrip text="Most homes choose Gold — the Goldilocks of Christmas. Ask us why." waMsg={quote} label="Compare with my space" /></Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '820px' }}>
          <Reveal className="center sec-head">
            <p className="eyebrow">Questions &amp; Answers</p>
            <h2>Pricing questions, answered</h2>
          </Reveal>
          <Reveal>
            <Faq
              items={[
                { q: 'Are the prices final, or do extras appear later?', a: 'Final. You get a fixed, itemised quote before anything is installed. If we recommend extras during the visit, they are quoted separately and always optional.' },
                { q: 'Can I mix services across packages?', a: 'Yes — every package is a starting point. Villa exterior + Platinum interior, office + lighting, Silver tree + garden lights: we happily blend.' },
                { q: 'Is the December price different from November?', a: 'Listed prices are consistent across the season. Last-minute bookings in the second half of December may carry an express fee, so book early.' },
                { q: 'Do you offer rental (hire) packages?', a: 'Yes, rental is our most popular option — décor is supplied, installed and collected with storage included. Ask about rental rates on any tier.' },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Your package is one message away"
        text="Tell us your property type and size — we’ll confirm the right tier and a fixed price today."
        waMsg={quote}
      />

      <JsonLd data={ld(orgGraph, packagesLd(SITE.domain))} />
    </>
  );
}