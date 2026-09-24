import ServicePage from '@/components/templates/ServicePage';
import { serviceBySlug } from '@/lib/data/services';
import { makeMetadata } from '@/lib/site';

const s = serviceBySlug('corporate-christmas-decoration');

export const metadata = makeMetadata({
  title: 'Corporate Christmas Decoration Dubai & UAE | Festive Occasions',
  description:
    'Show-stopping corporate Christmas décor for hotels, malls, showrooms and events. Branded installations, feature trees and lighting — nationwide across the UAE.',
  keywords: [
    'corporate Christmas decoration', 'corporate Christmas decoration Dubai',
    'hotel Christmas decoration UAE', 'mall Christmas decoration',
    'large scale Christmas decoration Dubai', 'event Christmas decoration',
  ],
  path: '/corporate-christmas-decoration/',
});

export default function Page() {
  return <ServicePage service={s} />;
}