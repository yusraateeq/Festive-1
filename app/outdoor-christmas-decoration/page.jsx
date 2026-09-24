import ServicePage from '@/components/templates/ServicePage';
import { serviceBySlug } from '@/lib/data/services';
import { makeMetadata } from '@/lib/site';

const s = serviceBySlug('outdoor-christmas-decoration');

export const metadata = makeMetadata({
  title: 'Outdoor Christmas Decoration Dubai & UAE | Festive Occasions',
  description:
    'Dazzling outdoor Christmas decor — gardens, facades, gates, pool areas & rooftops. Weatherproof displays designed and installed across Dubai & the UAE.',
  keywords: [
    'outdoor Christmas decoration', 'outdoor Christmas decoration Dubai',
    'garden Christmas decoration UAE', 'villa exterior Christmas decoration',
    'Christmas decoration for gardens', 'outdoor Christmas lights Dubai',
  ],
  path: '/outdoor-christmas-decoration/',
});

export default function Page() {
  return <ServicePage service={s} />;
}