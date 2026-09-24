import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import CtaStrip from '@/components/CtaStrip';
import Faq from '@/components/Faq';
import CountUp from '@/components/CountUp';
import SmartImage from '@/components/SmartImage';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import CtaBand from '@/components/templates/CtaBand';
import { SITE, wa, waService, ld, orgGraph, makeMetadata } from '@/lib/site';
import { services } from '@/lib/data/services';
import { packages } from '@/lib/data/packages';
import { gallery, testimonials } from '@/lib/data/gallery';

export const metadata = makeMetadata({
  title: 'Christmas Decoration in Dubai & UAE | Festive Occasions',
  description:
    'Professional Christmas decoration services in Dubai & across all 7 Emirates. Villa, home, office, corporate, lighting & outdoor décor — design, install & takedown. Free quote on WhatsApp.',
  keywords: [
    'Christmas decoration Dubai', 'Villa Christmas decoration', 'home Christmas decoration',
    'elegant Christmas decoration for my flat', 'Christmas decoration services in Dubai',
    'real Christmas tree decoration', 'Christmas decoration UAE', 'Christmas decorators Dubai',
  ],
  path: '/',
});

function PackageCard({ p, index }) {
  return (
    <Reveal as="div" delay={(index % 3) + 1} className="card">
      <span className="svc-num" aria-hidden="true">0{index + 1}</span>
      <h3>{p.name}<span className="gold-text"> · {p.price}</span></h3>
      <p className="card-tags" style={{ marginTop: 0 }}><span>{p.tag}</span></p>
      <p>{p.blurb}</p>
      <ul className="mt-2">
        {p.features.slice(0, 4).map((f) => (
          <li className="tick" key={f}><Icon name="check" size={17} /><p>{f}</p></li>
        ))}
      </ul>
      <a className="card-link" href="/packages/">View package <Icon name="arrow" size={15} /></a>
    </Reveal>
  );
}

export default function HomePage() {
  const quote = waService('a complete Christmas decoration for my property');

  return (
    <>
      <Hero
        eyebrow="Christmas Decoration · Dubai & the UAE"
        title={
          <>
            Make this Christmas <span className="gold">unforgettable</span>
            <span className="h1-sub">— from Palm Jumeirah villas to Downtown flats</span>
          </>
        }
        sub="Professional Christmas decoration for villas, homes, offices and corporate venues. Design, installation, seasonal maintenance and January takedown — one trusted team across all 7 Emirates."
        actions={
          <>
            <a className="btn btn-wa btn-lg" href={quote} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={20} /> Get a free quote on WhatsApp
            </a>
            <a className="btn btn-light btn-lg" href="/packages/">
              <Icon name="gift" size={18} /> View packages
            </a>
          </>
        }
        trust={['250+ installations delivered', 'All 7 Emirates — Nationwide', 'Free on-site consultation', '24/7 WhatsApp']}
        badge={
          <>
            <p className="hb-title"><Icon name="star" size={18} /> Trusted Christmas decorators</p>
            <div className="hb-row"><Icon name="badge" size={16} /> Rated 5.0 by Dubai &amp; UAE homeowners</div>
            <div className="hb-row"><Icon name="shield" size={16} /> Design · Install · Takedown · Storage</div>
            <div className="hb-row"><Icon name="leaf" size={16} /> Real &amp; premium artificial trees</div>
            <div className="hb-row"><Icon name="truck" size={16} /> Serving all 7 Emirates — Nationwide</div>
          </>
        }
      />

      {/* Why us + stats */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <p className="eyebrow">Why Festive Occasions</p>
              <h2>Christmas decoration services in Dubai, done properly</h2>
              <p className="lead">
                We know what most décor companies get wrong: the design looks fine, but the mess,
                the safety and the January takedown are left to you. We flipped the model.
              </p>
              <div className="tick"><Icon name="badge" size={20} /><p><strong>One fixed quote</strong> — design, supply, install, maintain and takedown. No line-item surprises.</p></div>
              <div className="tick"><Icon name="shield" size={20} /><p><strong>Certified &amp; safe</strong> — IP65 weatherproof lighting, fire-retardant trees, insured crew.</p></div>
              <div className="tick"><Icon name="users" size={20} /><p><strong>Design-led</strong> — real designers style your space, not just installers following a checklist.</p></div>
              <div className="tick"><Icon name="snow" size={20} /><p><strong>Real Christmas trees</strong> — genuine imported trees, delivered and dressed at your door.</p></div>
            </Reveal>
            <div className="stats light">
              <Reveal className="stat"><div><CountUp to={250} suffix="+" /><span>Festive installations</span></div></Reveal>
              <Reveal delay={1} className="stat"><div><CountUp to={7} /><span>Emirates covered</span></div></Reveal>
              <Reveal delay={2} className="stat"><div><CountUp to={40} suffix="+" /><span>Expert team members</span></div></Reveal>
              <Reveal delay={3} className="stat"><div><CountUp to={98} suffix="%" /><span>Clients who rebook</span></div></Reveal>
            </div>
          </div>
          <Reveal>
            <CtaStrip
              text="Want the numbers for your home or office? Send your property details on WhatsApp."
              waMsg={quote}
            />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Our Services</p>
            <h2>Every Christmas decoration service under one roof</h2>
            <p className="lead">
              Villa, home, office, corporate, lighting and outdoor — or a blend of all six.
              Whatever your space, we design around it.
            </p>
          </Reveal>
          <div className="grid g3">
            {services.map((s, i) => (
              <Reveal as="div" key={s.slug} delay={(i % 3) + 1} className="card">
                <span className="svc-num" aria-hidden="true">0{i + 1}</span>
                <span className="ic"><Icon name={s.icon} size={26} /></span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="card-tags"><span>From {s.priceFrom}</span></span>
                <a className="card-link" href={`/${s.slug}/`}>Explore service <Icon name="arrow" size={15} /></a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <CtaStrip
              text="Not sure which service fits? Describe your space on WhatsApp and we'll point you to the right one."
              waMsg={quote}
            />
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="section">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Packages &amp; Pricing</p>
            <h2>Transparent Christmas decoration packages</h2>
            <p className="lead">From a beautifully dressed tree to a full villa-and-garden wonderland — clear prices, no hidden lines.</p>
          </Reveal>
          <div className="grid g3">
            {packages.map((p, i) => <PackageCard key={p.slug} p={p} index={i} />)}
          </div>
          <Reveal>
            <CtaStrip
              text="Corporate or large venue? Ask for a bespoke quote instead — same transparency, custom scale."
              waMsg={wa("Hi Festive Occasions! We'd like a bespoke corporate Christmas decoration quote. Please contact us.")}
            />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section section-tint">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">How It Works</p>
            <h2>Your Christmas, handled from start to finish</h2>
          </Reveal>
          <div className="steps">
            {[
              ['Send a WhatsApp message', 'Two minutes to describe your space and dates — no forms, no phone trees.'],
              ['Free consultation & design', 'We visit, measure, and send a fixed quote with a design concept you’ll love.'],
              ['We install while you relax', 'Certified crew sets everything up on schedule — indoor, outdoor or both.'],
              ['Maintenance & January takedown', 'Season visits keep it perfect. In January we pack everything away for you.'],
            ].map(([t, d], i) => (
              <Reveal as="div" key={i} delay={(i % 4) + 1} className="step">
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal><CtaStrip text="The process sounds easy because it is. Message us and see." waMsg={quote} /></Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Recent Work</p>
            <h2>Real homes and venues we&rsquo;ve transformed</h2>
          </Reveal>
          <div className="grid g3">
            {gallery.slice(0, 6).map((g, i) => (
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
              <a className="btn btn-dark" href="/gallery/"><Icon name="camera" size={18} /> Browse the full gallery</a>
            </span>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Client Love</p>
            <h2>What Dubai says about its décor team</h2>
          </Reveal>
          <div className="grid g3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal as="blockquote" key={i} delay={(i % 3) + 1} className="quote-card">
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>“{t.quote}”</p>
                <cite>{t.name}<small>{t.role}</small></cite>
              </Reveal>
            ))}
          </div>
          <Reveal><CtaStrip text="Join 250+ happy clients. Your Christmas is one message away." waMsg={quote} /></Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <Reveal className="center sec-head">
            <p className="eyebrow">Questions &amp; Answers</p>
            <h2>Your Christmas decoration questions, answered</h2>
          </Reveal>
          <Reveal>
            <Faq
              items={[
                { q: 'How much does Christmas decoration cost in Dubai?', a: 'A professionally dressed tree starts from AED 399. Complete home packages run AED 1,299–2,999, villa-wide transformations AED 2,500–8,000 and corporate installations are quoted per project. Every quote is fixed and itemised.' },
                { q: 'Do you provide real Christmas trees in Dubai?', a: 'Yes — we deliver genuine imported real Christmas trees across the UAE, set up, watered and dressed. Premium artificial trees are available too, supplied and stored by us.' },
                { q: 'Which areas do you cover?', a: 'All 7 Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah. Most of the UAE is covered with no travel surcharge.' },
                { q: 'How early should I book Christmas decoration?', a: 'Book by mid-November to lock your preferred installation date. December dates — especially the first two weeks — go very fast.' },
                { q: 'Do you take the decorations down after Christmas?', a: 'Yes, every package includes professional takedown in January, and packages can include storage until next year.' },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Your best Christmas ever is one message away"
        text="Tell us your space, your dates and your budget — usually we reply within the hour."
        waMsg={quote}
      />

      <JsonLd
        data={ld(
          orgGraph,
          {
            '@type': 'WebSite',
            '@id': `${SITE.domain}/#website`,
            url: `${SITE.domain}/`,
            name: 'Festive Occasions',
            publisher: { '@id': `${SITE.domain}/#organization` },
            inLanguage: 'en',
          },
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