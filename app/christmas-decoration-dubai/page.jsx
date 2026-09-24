import LocationPage from '@/components/templates/LocationPage';
import { dubaiKeys } from '@/lib/data/locations';
import { makeMetadata } from '@/lib/site';

const page = {
  slug: 'christmas-decoration-dubai',
  eyebrow: 'Christmas Decoration Dubai',
  heroTitle: 'Christmas decoration in Dubai, designed around your home',
  lead: 'Palm Jumeirah villas, Marina flats, DIFC offices — across every Dubai neighbourhood, our teams design, install and maintain festive displays that make the whole street stop and admire.',
  ctaName: 'Christmas decoration in Dubai',
  trust: ['Free on-site quote', 'Covers all Dubai communities', 'Design · Install · Takedown'],
  crumbs: [{ label: 'Christmas Decoration Dubai' }],
  introHead: 'Dubai&rsquo;s Christmas decorators, neighbourhood by neighbourhood',
  intro: [
    'Dubai celebrates Christmas in a uniquely glamorous way — and the best displays balance drama with elegance. That balance is our home turf. Whether you want a warm family Christmas in Arabian Ranches, a champagne-toned penthouse in Downtown or a show villa on Palm Jumeirah, we design the décor to fit the architecture, the light and your life.',
    'As a full-service company we handle everything: the design consultation, supply of trees and décor, professional installation, in-season care and the January takedown. You never climb a ladder, untangle a single string of lights or make a trip to a storage unit.',
  ],
  tags: ['Villas', 'Flats & Homes', 'Offices', 'Corporate', 'Lighting', 'Outdoor'],
  ctaStrip1: 'Tell us which Dubai community you call home and what you want to light up — we’ll reply with ideas and a quote.',
  sections: [
    {
      h: 'Why Dubai chooses Festive Occasions',
      p: 'Dubai homeowners are discerning: they want the wow without the hassle. That is exactly why clients across the city book us. You get a genuine designer (not just installers), certified weatherproof materials built for the Gulf climate, and a fixed itemised quote agreed before any work begins.',
      list: [
        'Free consultation for every Dubai community — from the Palm to Dubai South',
        'Real imported Christmas trees delivered and dressed across the city',
        'Villa exteriors engineered for Dubai heat, wind and humidity',
        'Office and corporate décor installed out-of-hours with zero disruption',
        'January takedown included, with optional storage until next season',
      ],
    },
    {
      h: 'The most-decorated Dubai communities',
      p: 'We install and style Christmas décor all over Dubai every season. Recent projects span the waterfront towers, the villa compounds and everything between. If you live in any of these areas (and plenty more), we know your security rules, your plaza layouts and your neighbours’ taste levels — and we design accordingly.',
    },
  ],
  areasHead: 'Dubai communities we decorate',
  areas: dubaiKeys,
  faqHead: 'Dubai Christmas decoration questions',
  faq: [
    { q: 'Do you serve all of Dubai?', a: 'Yes — from Palm Jumeirah and Jumeirah to Mirdif, Deira and Dubai South. Most Dubai areas are covered with no travel surcharge.' },
    { q: 'Can you decorate a villa in a gated community?', a: 'Yes. We coordinate with estate management and follow each community’s decoration guidelines, so your display is always compliant and neighbour-friendly.' },
    { q: 'How fast can you install in Dubai?', a: 'Most homes are transformed in a single day. Larger villa exteriors take 1–2 days with our full crew. Book early in December for the fastest slots.' },
    { q: 'Do you provide real Christmas trees in Dubai?', a: 'Yes — genuine imported real trees, delivered, installed and dressed across Dubai, plus premium artificial trees supplied and stored by us.' },
    { q: 'Is there a minimum spend for Dubai projects?', a: 'No. We take on everything from a single dressed tree (from AED 399) to complete villa-and-garden transformations.' },
  ],
  bandText: 'Your Dubai home deserves the best Christmas it has ever had. Message us your community and your dates.',
  ldName: 'Christmas Decoration in Dubai',
};

export const metadata = makeMetadata({
  title: 'Christmas Decoration in Dubai | Festive Occasions',
  description:
    'Professional Christmas decorators in Dubai — Palm Jumeirah to Arabian Ranches. Villa, home & office decoration with design, installation and takedown. Free quote.',
  keywords: [
    'Christmas decoration Dubai', 'Christmas decoration services in Dubai',
    'Christmas decorators in Dubai', 'villa Christmas decoration Dubai',
    'home Christmas decoration Dubai', 'Christmas decorating company Dubai',
  ],
  path: '/christmas-decoration-dubai/',
});

export default function Page() {
  return <LocationPage page={page} />;
}