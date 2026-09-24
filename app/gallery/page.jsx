import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import CtaStrip from '@/components/CtaStrip';
import GalleryGrid from '@/components/GalleryGrid';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import CtaBand from '@/components/templates/CtaBand';
import { SITE, waService, ld, orgGraph, makeMetadata } from '@/lib/site';
import { gallery } from '@/lib/data/gallery';

export const metadata = makeMetadata({
  title: 'Christmas Decoration Gallery — Dubai & UAE | Festive Occasions',
  description:
    'Browse real Christmas decoration projects from across Dubai & the UAE — villas, homes, offices, corporate venues, lighting & outdoor installations by Festive Occasions.',
  keywords: [
    'Christmas decoration gallery', 'Christmas decoration photos Dubai',
    'villa Christmas decoration images', 'Christmas tree decoration ideas Dubai photos',
    'Christmas decor Dubai gallery',
  ],
  path: '/gallery/',
});

export default function GalleryPage() {
  const quote = waService('a project like the ones in your gallery');
  return (
    <>
      <Hero
        compact
        eyebrow="Portfolio"
        title={<>See what we&rsquo;ve decorated — <span className="gold">proof, not promises</span></>}
        sub="Real projects across Dubai and the UAE. Filter by villa, home, office, corporate, lighting or outdoor installation."
        actions={
          <a className="btn btn-wa btn-lg" href={quote} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} /> Want yours featured next?
          </a>
        }
        trust={['250+ installations', 'All 7 Emirates', 'Every photo is a real project']}
      />
      <Breadcrumbs crumbs={[{ label: 'Gallery' }]} />

      <section className="section">
        <div className="container">
          <Reveal className="center sec-head">
            <p className="eyebrow">Our Work</p>
            <h2>Christmas decoration gallery</h2>
          </Reveal>
          <Reveal>
            <GalleryGrid />
          </Reveal>
          <Reveal>
            <CtaStrip
              text="Feeling inspired? Send us your space — we’ll show you what it could look like from the gallery you just scrolled."
              waMsg={quote}
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Your space could be the next photo in this gallery"
        text="Book a free consultation and see your home designed before we install a single ornament."
        waMsg={quote}
      />

      <JsonLd
        data={ld(
          orgGraph,
          {
            '@type': 'ImageGallery',
            url: `${SITE.domain}/gallery/`,
            about: 'Christmas decoration projects in Dubai and the UAE',
            hasPart: gallery.map((g) => ({
              '@type': 'ImageObject',
              contentUrl: `${SITE.domain}${g.src}`,
              name: g.cap,
              description: `${g.cap} — ${g.area}`,
            })),
          }
        )}
      />
    </>
  );
}