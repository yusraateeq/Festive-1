import ServicePage from '@/components/templates/ServicePage';
import { serviceBySlug } from '@/lib/data/services';
import { makeMetadata } from '@/lib/site';

const s = serviceBySlug('christmas-lighting');

export const metadata = makeMetadata({
  title: 'Christmas Lighting Installation Dubai & UAE | Festive Occasions',
  description:
    'Professional Christmas lighting installation — rooftops, facades, trees & gardens. Certified energy-efficient LED, designed and installed across all 7 Emirates.',
  keywords: [
    'Christmas lighting', 'Christmas lighting installation Dubai',
    'Christmas lights installation UAE', 'villa Christmas lights',
    'rooftop Christmas lighting Dubai', 'LED Christmas lights installation',
  ],
  path: '/christmas-lighting/',
});

export default function Page() {
  return <ServicePage service={s} />;
}