import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaStrip from '@/components/CtaStrip';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import CtaBand from '@/components/templates/CtaBand';
import { SITE, wa, ld, orgGraph, makeMetadata } from '@/lib/site';
import { posts } from '@/lib/data/blog';

export const metadata = makeMetadata({
  title: 'Christmas Decoration Blog & Ideas | Festive Occasions',
  description:
    'Expert Christmas decoration ideas, cost guides and tips for Dubai homes, villas & offices — real trees, lighting trends and honest price breakdowns.',
  keywords: [
    'Christmas decoration ideas Dubai', 'Christmas decoration cost Dubai',
    'real Christmas tree Dubai', 'Christmas lighting trends UAE',
    'villa Christmas decoration ideas',
  ],
  path: '/blog/',
});

export default function BlogPage() {
  const quote = wa("Hi Festive Occasions! I read your blog and have a question about Christmas decoration.");
  return (
    <>
      <Hero
        compact
        eyebrow="Blog & Ideas"
        title={<>Festive guides &amp; <span className="gold">honest answers</span></>}
        sub="Everything we know about Christmas decoration in the UAE — real trees, prices, lighting trends and design ideas, written in plain English."
        actions={
          <a className="btn btn-wa btn-lg" href={quote} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} /> Ask us anything
          </a>
        }
        trust={['New guides before the season', 'Real UAE pricing', 'Written by our design team']}
      />
      <Breadcrumbs crumbs={[{ label: 'Blog' }]} />

      <section className="section">
        <div className="container">
          <div className="grid g3">
            {posts.map((p, i) => (
              <Reveal as="article" key={p.slug} delay={(i % 3) + 1} className="card">
                <span className="card-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</span>
                <h3 style={{ marginTop: '.6rem' }}>{p.title}</h3>
                <p className="article-meta" style={{ marginBottom: '.5rem' }}>
                  <span><Icon name="calendar" size={14} /> {p.dateDisplay}</span>
                  <span><Icon name="clock" size={14} /> {p.reading}</span>
                </p>
                <p>{p.excerpt}</p>
                <a className="card-link" href={`/blog/${p.slug}/`}>Read article <Icon name="arrow" size={15} /></a>
              </Reveal>
            ))}
          </div>
          <Reveal><CtaStrip text="Can’t find your answer here? The fastest answer you’ll get today is on WhatsApp." waMsg={quote} /></Reveal>
        </div>
      </section>

      <CtaBand
        title="Read the guide, then talk to the experts"
        text="Every article comes from real projects. Bring your questions — we’re quick to reply."
        waMsg={quote}
      />

      <JsonLd
        data={ld(
          orgGraph,
          {
            '@type': 'Blog',
            url: `${SITE.domain}/blog/`,
            name: 'Festive Occasions Blog',
            publisher: { '@id': `${SITE.domain}/#organization` },
            blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE.domain}/blog/${p.slug}/`, datePublished: p.date })),
          }
        )}
      />
    </>
  );
}