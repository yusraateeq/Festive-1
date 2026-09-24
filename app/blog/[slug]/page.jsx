import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaStrip from '@/components/CtaStrip';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import CtaBand from '@/components/templates/CtaBand';
import { notFound } from 'next/navigation';
import { SITE, makeMetadata, wa, waService, ld, orgGraph } from '@/lib/site';
import { posts, postBySlug, postLd } from '@/lib/data/blog';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) return {};
  return makeMetadata({
    title: `${p.title} | Festive Occasions`,
    description: p.excerpt,
    path: `/blog/${p.slug}/`,
    keywords: [...p.tags, 'Christmas decoration Dubai', 'Christmas decoration UAE'],
    ogType: 'article',
    publishedTime: p.date,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) notFound();

  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const quote = wa(`Hi Festive Occasions! I just read "${p.title}" and have a question.`);

  return (
    <>
      <Hero
        compact
        eyebrow={`${p.reading} · ${p.dateDisplay}`}
        title={<>{p.title} <span className="gold">— a Festive Occasions guide</span></>}
        sub={p.excerpt}
        actions={
          <a className="btn btn-wa btn-lg" href={quote} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} /> Ask our designers
          </a>
        }
        trust={[`By ${p.author}`, ...p.tags]}
      />
      <Breadcrumbs crumbs={[{ label: 'Blog', href: '/blog/' }, { label: p.title }]} />

      <article className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <Reveal>
              <p className="article-meta">
                <span><Icon name="user" size={15} /> {p.author}</span>
                <span><Icon name="calendar" size={15} /> {p.dateDisplay}</span>
                <span><Icon name="clock" size={15} /> {p.reading}</span>
              </p>
              {p.body.map((block, i) => (
                <div key={i}>
                  {block.h && <h2>{block.h}</h2>}
                  {block.p && <p>{block.p}</p>}
                </div>
              ))}
            </Reveal>

            <Reveal><CtaStrip text={`Want this exact look in your own ${p.tags.includes('Villas') ? 'villa or home' : 'home'}? We install it for you.`} waMsg={quote} /></Reveal>

            {p.faq?.length > 0 && (
              <Reveal>
                <h2 style={{ marginTop: '2.4rem' }}>Quick answers</h2>
                <Faq items={p.faq} />
              </Reveal>
            )}

            <Reveal><CtaStrip dark={false} text="Read something you’d like to try? Share your space details — we’ll quote it." waMsg={quote} /></Reveal>
          </div>
        </div>
      </article>

      <section className="section section-tint">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Keep Reading</p>
            <h2>More festive guides</h2>
          </Reveal>
          <div className="grid g3">
            {related.map((r, i) => (
              <Reveal as="article" key={r.slug} delay={(i % 3) + 1} className="card">
                <span className="card-tags">{r.tags.map((t) => <span key={t}>{t}</span>)}</span>
                <h3 style={{ marginTop: '.6rem' }}>{r.title}</h3>
                <p style={{ fontSize: '.95rem' }}>{r.excerpt}</p>
                <a className="card-link" href={`/blog/${r.slug}/`}>Read article <Icon name="arrow" size={15} /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer a designer to a blog post?"
        text={p.tags.includes('Pricing') ? 'Get an accurate, fixed price for your space in one message.' : 'Tell us your space and we’ll design around it.'}
        waMsg={quote}
      />

      <JsonLd data={ld(orgGraph, postLd(p, SITE.domain))} />
    </>
  );
}