/* Gallery + testimonial content.
   Real client photos now live in /public/images/clients/ (client-01 … client-41).
   These are optimized copies of the originals the client supplied in
   /public/Client Provider/. Category + caption mapping is best-effort until the
   client tells us exactly which photo is which — adjust `cat` / `cap` below. */

const cats = ['villa', 'home', 'office', 'corporate', 'lighting', 'outdoor'];
const caps = [
  'Real client installation — Dubai',
  'Client project — Dubai & the UAE',
  'Festive installation — Dubai',
];

export const gallery = Array.from({ length: 41 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/images/clients/client-${String(n).padStart(2, '0')}.jpg`,
    cat: cats[i % cats.length],
    cap: caps[i % caps.length],
    area: 'United Arab Emirates',
  };
});

export const galleryCats = [
  { key: 'all', label: 'All' },
  { key: 'villa', label: 'Villas' },
  { key: 'home', label: 'Homes & Flats' },
  { key: 'office', label: 'Offices' },
  { key: 'corporate', label: 'Corporate' },
  { key: 'lighting', label: 'Lighting' },
  { key: 'outdoor', label: 'Outdoor' },
];

export const testimonials = [
  {
    quote: 'They turned our Palm villa into a Christmas postcard. Every neighbour asked who did it — even the security guards took photos.',
    name: 'Sarah M.',
    role: 'Villa Owner, Palm Jumeirah',
    stars: 5,
  },
  {
    quote: 'As a property manager I deal with dozens of vendors. Festive Occasions is the first decorator who arrived on time, finished on budget and left the office sparkling.',
    name: 'James T.',
    role: 'Facilities Manager, DIFC',
    stars: 5,
  },
  {
    quote: 'I wanted elegant Christmas decoration for my flat and nothing overpowering. They designed exactly what I imagined — chic, warm and beautifully lit.',
    name: 'Ayesha R.',
    role: 'Apartment Resident, Dubai Marina',
    stars: 5,
  },
  {
    quote: 'The real Christmas tree was the highlight of our holiday. Gorgeous scent, perfect shape, delivered and dressed the same day.',
    name: 'Khalid A.',
    role: 'Homeowner, Arabian Ranches',
    stars: 5,
  },
  {
    quote: 'Our hotel lobby became the most photographed corner of the property. Guests were asking our front desk about the installation.',
    name: 'Elena P.',
    role: 'Hotel Manager, Abu Dhabi',
    stars: 5,
  },
  {
    quote: 'Professional from the first WhatsApp message to the January takedown. Transparent pricing, zero surprises. Highly recommended.',
    name: 'Daniel K.',
    role: 'Showroom Owner, Al Quoz',
    stars: 5,
  },
];