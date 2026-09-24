import ServicePage from '@/components/templates/ServicePage';
import { serviceBySlug } from '@/lib/data/services';
import { makeMetadata } from '@/lib/site';

const s = serviceBySlug('office-christmas-decoration');

export const metadata = makeMetadata({
  title: 'Office Christmas Decoration Dubai & UAE | Festive Occasions',
  description:
    'Festive offices that lift team spirits and impress clients. Lobby trees, desks, meeting rooms & break zones — installed out-of-hours across Dubai and the UAE.',
  keywords: [
    'office Christmas decoration', 'office Christmas decoration Dubai',
    'office festive decoration UAE', 'corporate office Christmas tree',
    'office lobby Christmas decoration',
  ],
  path: '/office-christmas-decoration/',
});

export default function Page() {
  return <ServicePage service={s} />;
}