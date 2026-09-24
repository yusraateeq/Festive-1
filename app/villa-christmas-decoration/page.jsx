import ServicePage from '@/components/templates/ServicePage';
import { serviceBySlug } from '@/lib/data/services';
import { makeMetadata } from '@/lib/site';

const s = serviceBySlug('villa-christmas-decoration');

export const metadata = makeMetadata({
  title: 'Villa Christmas Decoration Dubai & UAE | Festive Occasions',
  description:
    'Luxury villa Christmas decoration across Dubai and all 7 Emirates. Grand trees, entrance displays, garden lights & interior styling — design, install & January takedown included.',
  keywords: [
    'Villa Christmas decoration', 'villa Christmas decoration Dubai', 'villa decoration UAE',
    'luxury villa Christmas decoration', 'Christmas decoration Palm Jumeirah',
    'villa exterior Christmas decoration',
  ],
  path: '/villa-christmas-decoration/',
});

export default function Page() {
  return <ServicePage service={s} />;
}