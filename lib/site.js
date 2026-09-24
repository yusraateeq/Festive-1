export const SITE = {
  name: 'Festive Occasions',
  domain: 'https://festiveoccasions.ae',
  tagline: 'Luxury Christmas Decoration Services in Dubai & the UAE',
  phoneDisplay: '+971 56 428 4444',
  phoneTel: '+971564284444',
  whatsapp: '971564284444',
  email: 'info@festiveoccasions.ae',
  address: 'Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates',
  hours: 'Open 24/7 — enquiries via WhatsApp & email',
  weekend: 'Office closed Sat & Sun · weekend replies may be slower',
  instagram: 'https://instagram.com/festive_ocassions',
  instagramHandle: '@festive_ocassions',
};

/** WhatsApp deep link with a pre-filled message */
export const wa = (msg) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    msg || "Hi Festive Occasions! I'd love a quote for your Christmas decoration services."
  )}`;

/** WhatsApp link pre-filled for a specific service/page */
export const waService = (name) =>
  wa(`Hi Festive Occasions! I'd like a quote for ${name}. Please share details, availability and pricing.`);

export const DEFAULT_IMG = '/og-image.svg';

/** Build complete Next.js metadata for a page */
export function makeMetadata({ title, description, path, keywords, ogType = 'website', publishedTime, image = DEFAULT_IMG }) {
  const url = new URL(path, SITE.domain).href;
  return {
    metadataBase: new URL(SITE.domain),
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: ogType,
      siteName: SITE.name,
      locale: 'en_AE',
      url,
      images: [{ url: new URL(image, SITE.domain).href, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime, authors: [SITE.name] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [new URL(image, SITE.domain).href] },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    formatDetection: { telephone: false },
    other: { 'theme-color': '#0e3a2b' },
  };
}

/** JSON-LD snippet component-friendly object */
export function ld(...blocks) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': blocks.flat() });
}

/** Shared Organization / LocalBusiness graph used site-wide */
export const orgGraph = [
  {
    '@type': ['Organization', 'HomeAndConstructionBusiness'],
    '@id': `${SITE.domain}/#organization`,
    name: SITE.name,
    url: SITE.domain,
    logo: `${SITE.domain}/icon.svg`,
    image: `${SITE.domain}${DEFAULT_IMG}`,
    email: SITE.email,
    telephone: SITE.phoneTel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Business Centre, Sharjah Publishing City Free Zone',
      addressLocality: 'Sharjah',
      addressCountry: 'AE',
    },
    areaServed: [
      'Dubai',
      'Abu Dhabi',
      'Sharjah',
      'Ajman',
      'Umm Al Quwain',
      'Ras Al Khaimah',
      'Fujairah',
      'United Arab Emirates',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    sameAs: [SITE.instagram],
  },
];