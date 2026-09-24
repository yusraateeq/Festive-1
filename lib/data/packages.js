/* Packages - transparent pricing tiers shown on the site. */

export const packages = [
  {
    slug: 'silver',
    name: 'Silver',
    tag: 'Cozy & classic',
    price: 'From AED 399',
    blurb: 'The essentials, beautifully done. Perfect for a home, flat or first festive season.',
    features: [
      '6ft premium artificial tree (or size-matched)',
      'Warm-white LED string lights',
      '50-piece classic bauble set & ribbon',
      'Tree skirt & star topper',
      'Living-room styling accents',
      'Professional installation',
      'Takedown in January',
    ],
    waMsg: "Hi Festive Occasions! I'm interested in your Silver Christmas decoration package (from AED 399). Please share more details.",
  },
  {
    slug: 'gold',
    name: 'Gold',
    tag: 'Most popular',
    price: 'From AED 1,299',
    blurb: 'A fuller festive transformation — tree, lighting and styling across two key areas.',
    features: [
      '7.5ft premium tree (or size-matched)',
      'Designer LED lights with effects',
      '100-piece curated bauble collection',
      'Garlands, wreaths & window décor',
      'Entryway & living room styling',
      'Garden or balcony lighting accents',
      'Professional installation & styling',
      'Takedown & packaged storage',
    ],
    waMsg: "Hi Festive Occasions! I'm interested in your Gold Christmas decoration package (from AED 1,299). Please share more details.",
    popular: true,
  },
  {
    slug: 'platinum',
    name: 'Platinum',
    tag: 'The full wonderland',
    price: 'From AED 2,999',
    blurb: 'A complete home-and-garden experience. Real trees, grand lighting and décor worthy of a magazine shoot.',
    features: [
      'Real Nordic-style Christmas tree option',
      'Multi-room interior styling',
      'Grand entrance & garden display',
      'Icicle, curtain & facade lighting',
      'Designer show-home décor collection',
      'Synchronized lighting with timers',
      'Season maintenance visits included',
      'Takedown, cleaning & storage',
    ],
    waMsg: "Hi Festive Occasions! I'm interested in your Platinum Christmas decoration package (from AED 2,999). Please share more details.",
  },
];

export const corporatePkg = {
  name: 'Corporate & Bespoke',
  price: 'Custom quote',
  blurb: 'Hotels, malls, offices and events — designed, installed and maintained by our project studio.',
  features: [
    'Commercial-grade statement trees to 8m+',
    'Branded festive installations & photo moments',
    'Facade lighting, light shows & projections',
    'Dedicated project manager & certified crew',
    'Full logistics, power & municipal approvals',
    'Season-long maintenance & safe dismantle',
  ],
  waMsg: "Hi Festive Occasions! We'd like a custom corporate Christmas decoration quote for our venue. Please contact us.",
};

/* Comparison table rows */
export const packageCompare = [
  ['Premium Christmas tree', true, true, true],
  ['LED lighting & effects', true, true, true],
  ['Styled décor collection', true, true, true],
  ['Outdoor & entrance display', false, false, true],
  ['Real tree option', false, false, true],
  ['Multi-room interior styling', false, false, true],
  ['Season maintenance visits', false, false, true],
  ['Takedown & storage', true, true, true],
];

export function packagesLd(domain) {
  return [
    {
      '@type': 'Service',
      '@id': `${domain}/packages/#service`,
      name: 'Christmas Decoration Packages',
      serviceType: 'Christmas decoration packages',
      description: 'Silver, Gold and Platinum Christmas decoration packages plus bespoke corporate installations, nationwide across the UAE.',
      url: `${domain}/packages/`,
      provider: { '@id': `${domain}/#organization` },
      areaServed: ['United Arab Emirates'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Christmas decoration packages',
        itemListElement: packages.map((p) => ({
          '@type': 'Offer',
          name: `${p.name} package`,
          priceCurrency: 'AED',
          price: p.price.replace(/[^0-9.,]/g, ''),
          description: p.blurb,
        })),
      },
    },
  ];
}