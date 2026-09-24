import LocationPage from '@/components/templates/LocationPage';
import { uaeCities } from '@/lib/data/locations';
import { makeMetadata } from '@/lib/site';

const page = {
  slug: 'christmas-decoration-uae',
  eyebrow: 'Christmas Decoration UAE',
  heroTitle: 'Christmas decoration across the UAE, all 7 Emirates',
  lead: 'From Dubai villas to Abu Dhabi penthouses, Sharjah compounds, RAK holiday homes and Fujairah coastal residences — one professional team decorates the entire country.',
  ctaName: 'Christmas decoration in the UAE',
  trust: ['Dubai · Abu Dhabi · Sharjah', 'Ajman · UAQ · RAK · Fujairah', 'No travel surcharge (most areas)'],
  crumbs: [{ label: 'Christmas Decoration UAE' }],
  introHead: 'One national team, the same luxury standard everywhere',
  intro: [
    'Most décor companies quietly stay inside Dubai. We built Festive Occasions to cover the whole UAE — because Christmas magic shouldn’t stop at the emirate border. Our crews regularly install in Abu Dhabi’s Saadiyat and Yas Island, Sharjah’s villa communities, and up the coast to Ras Al Khaimah and Fujairah.',
    'Everything is identical to our Dubai service: free consultation, designer-led concepts, certified materials, professional installation, seasonal care and a clean January takedown. The only difference is the postcode — and the view from your window.',
  ],
  tags: ['Villas', 'Homes', 'Offices', 'Hotels', 'Lighting', 'Outdoor'],
  ctaStrip1: 'Outside Dubai? Good — we love the drive. Tell us your emirate and we’ll arrange a consultation.',
  sections: [
    {
      h: 'Christmas decoration services in every emirate',
      p: 'We deliver the full service catalogue nationwide: villa Christmas decoration, home and flat decoration, office and corporate festive builds, Christmas lighting and outdoor displays. For hotels and resorts along the northern emirates coastline, our corporate team handles large seasonal installations with full logistics and maintenance.',
      list: [
        'Abu Dhabi — luxury villas on Saadiyat, Yas Island & Al Reem, plus ADGM offices',
        'Sharjah — Al Zahia and villa compounds, styled door to door',
        'Ajman — beachfront apartments and family homes',
        'Umm Al Quwain — villas, weekend homes and quiet community displays',
        'Ras Al Khaimah — Al Hamra & Al Marjan Island holiday homes and resorts',
        'Fujairah — coastal residences and city villas on the East Coast',
      ],
    },
    {
      h: 'How a UAE-wide service saves you money',
      p: 'Because we source, store and reuse décor across the whole country, renting the season costs a fraction of buying new every year. You get a designer’s touch, professional installation and weatherproof materials — without filling your garage with boxes.',
    },
  ],
  areasHead: 'Cities and towns we serve across the UAE',
  areas: uaeCities,
  faqHead: 'UAE Christmas decoration questions',
  faq: [
    { q: 'Do you charge extra for cities outside Dubai?', a: 'For most of the UAE there is no travel surcharge — Abu Dhabi, Sharjah, Ajman, UAQ and many others are covered at standard project pricing.' },
    { q: 'Can you really decorate in Ras Al Khaimah and Fujairah?', a: 'Yes. We install across all 7 emirates, including Al Marjan Island, Al Hamra, Khor Fakkan and the Fujairah coastline — holiday homes are some of our favourite projects.' },
    { q: 'Do your materials handle coastal humidity?', a: 'We use IP65-rated, corrosion-resistant fittings for coastal and high-humidity areas, and inspect installations mid-season as part of our maintenance plan.' },
    { q: 'How early should a UAE-wide project be booked?', a: 'Northern and western emirate projects should be booked by mid-November. We plan multi-emirate routes to keep logistics fast and clean.' },
  ],
  bandText: 'Wherever you are in the UAE, Christmas can look exactly how you dreamed. Message us your emirate.',
  ldName: 'Christmas Decoration in the UAE',
};

export const metadata = makeMetadata({
  title: 'Christmas Decoration UAE — All 7 Emirates | Festive Occasions',
  description:
    'Nationwide Christmas decoration across the UAE: Dubai, Abu Dhabi, Sharjah, Ajman, UAQ, Ras Al Khaimah & Fujairah. Professional install & takedown. Free quote.',
  keywords: [
    'Christmas decoration UAE', 'Christmas decoration Abu Dhabi', 'Christmas decoration Sharjah',
    'Christmas decoration Ras Al Khaimah', 'Christmas decoration Fujairah', 'Christmas decorators UAE',
    'nationwide Christmas decoration',
  ],
  path: '/christmas-decoration-uae/',
});

export default function Page() {
  return <LocationPage page={page} />;
}