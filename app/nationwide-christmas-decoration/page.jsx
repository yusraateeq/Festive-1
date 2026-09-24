import LocationPage from '@/components/templates/LocationPage';
import { emirates } from '@/lib/data/locations';
import { makeMetadata } from '@/lib/site';

const page = {
  slug: 'nationwide-christmas-decoration',
  eyebrow: 'All 7 Emirates · Nationwide',
  heroTitle: 'Nationwide Christmas decoration — one team, all 7 Emirates',
  lead: 'Wherever your home, office or venue is in the United Arab Emirates, our professional crews arrive, install and style Christmas décor to the exact same luxury standard.',
  ctaName: 'nationwide Christmas decoration',
  trust: ['All 7 Emirates', 'Full logistics handled', 'Free consultation nationwide'],
  crumbs: [{ label: 'Nationwide — All 7 Emirates' }],
  introHead: 'National coverage, boutique service',
  intro: [
    'Most decoration companies promise “nationwide” and quietly mean one city. Festive Occasions actually has the crews, the fleet and the project planners to cover the entire country — every emirate, every community, every season.',
    'Nationwide service means your Christmas looks just as considered whether it’s a villa in Dubai, a compound in Sharjah, a holiday home in RAK or an office tower in Abu Dhabi. One quote, one plan, one team from first WhatsApp message to January takedown.',
  ],
  icon: 'truck',
  tags: ['Design', 'Install', 'Maintain', 'Takedown', 'Storage'],
  ctaStrip1: 'Any emirate, any scale — tell us the postcode and we’ll handle the logistics.',
  sections: [
    {
      h: 'How our nationwide network works',
      p: 'Each December we run coordinated routes across the seven emirates so installation windows stay precise and travel stays efficient — which keeps prices honest and standards identical. Local crews know each emirate’s villa compound rules, municipal approvals and resort logistics, so nothing gets held up at the gate.',
      list: [
        'Dedicated project planners route every nationwide installation',
        'Local crews stationed across the northern and western emirates',
        'Municipal approvals and community permissions handled for you',
        'Storage depots in Dubai and the northern region for décor reuse',
      ],
    },
    {
      h: 'The seven emirates, at a glance',
      p: 'Here is where we install luxury Christmas decoration, and the kinds of spaces we decorate in each.',
    },
  ],
  areasHead: 'All 7 Emirates — nationwide coverage',
  areas: emirates.map((e) => `${e.emirate} — ${e.note}`),
  faqHead: 'Nationwide decoration questions',
  faq: [
    { q: 'What does your nationwide coverage actually include?', a: 'Every emirate: Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah — plus towns like Al Ain, Khor Fakkan and Dibba.' },
    { q: 'Do you handle logistics for remote locations?', a: 'Yes. Trees, lights and décor travel in our own climate-controlled fleet, and installation schedules are planned around each property’s access and timings.' },
    { q: 'Is the quality the same outside Dubai?', a: 'Identical. The same designers, the same certified materials, the same installation standards and the same fixed-quote process — everywhere.' },
    { q: 'When should I book a nationwide project?', a: 'Ideally by mid-November. Late bookings are possible in December on selected areas, but the best installation windows go first.' },
  ],
  bandText: 'Tell us your emirate, your space and your dates — we’ll confirm coverage and pricing today.',
  ldName: 'Nationwide Christmas Decoration in the UAE',
};

export const metadata = makeMetadata({
  title: 'Nationwide Christmas Decoration — All 7 Emirates | Festive Occasions',
  description:
    'One team, all 7 Emirates. Nationwide Christmas decoration with professional design, installation, maintenance and takedown — Dubai, Abu Dhabi, Sharjah, Ajman, UAQ, RAK, Fujairah.',
  keywords: [
    'nationwide Christmas decoration', 'Christmas decoration all 7 Emirates',
    'Christmas decoration UAE nationwide', 'Christmas decorating company nationwide UAE',
    'Christmas decoration all emirates',
  ],
  path: '/nationwide-christmas-decoration/',
});

export default function Page() {
  return <LocationPage page={page} />;
}