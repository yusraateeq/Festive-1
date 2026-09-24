import ServicePage from '@/components/templates/ServicePage';
import { serviceBySlug } from '@/lib/data/services';
import { makeMetadata } from '@/lib/site';

const s = serviceBySlug('home-christmas-decoration');

export const metadata = makeMetadata({
  title: 'Home & Apartment Christmas Decoration Dubai | Festive Occasions',
  description:
    'Elegant Christmas decoration for homes, flats & apartments in Dubai. Styled trees, lights and festive interiors by professional decorators — from AED 399.',
  keywords: [
    'home Christmas decoration', 'elegant Christmas decoration for my flat',
    'flat Christmas decoration Dubai', 'apartment Christmas decoration',
    'home Christmas decoration UAE', 'Christmas tree decoration for homes',
  ],
  path: '/home-christmas-decoration/',
});

export default function Page() {
  return <ServicePage service={s} />;
}