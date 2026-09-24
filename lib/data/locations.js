/* Location / coverage pages: Christmas Decoration Dubai, UAE & Nationwide. */

export const dubaiKeys = [
  'Palm Jumeirah', 'Jumeirah', 'JBR', 'Dubai Marina', 'Downtown Dubai', 'Business Bay',
  'DIFC', 'Emirates Hills', 'The Meadows', 'The Springs', 'Arabian Ranches', 'Damac Hills',
  'Dubai Hills Estate', 'Al Barari', 'Jumeirah Golf Estates', 'Mirdif', 'Al Furjan',
  'Dubai Silicon Oasis', 'Motor City', 'Jumeirah Village Circle', 'Town Square', 'Mudon',
  'Dubai South', 'Deira', 'Al Qouz', 'Umm Suqeim', 'Al Sufouh', 'Wasl Gate',
];

export const emirates = [
  { emirate: 'Dubai', note: 'Villas, penthouses, offices and hotels across the city — from Palm Jumeirah to Dubai South.' },
  { emirate: 'Abu Dhabi', note: 'Saadiyat, Yas Island, Al Reem and city homes — luxury decoration for the capital.' },
  { emirate: 'Sharjah', note: 'Tilal Al Ghaf-style communities, Al Zahia and villa compounds near the city centre.' },
  { emirate: 'Ajman', note: 'Beachfront apartments and villa communities decorated with the same standards as Dubai.' },
  { emirate: 'Umm Al Quwain', note: 'Private villas, resorts and weekend homes across UAQ.' },
  { emirate: 'Ras Al Khaimah', note: 'Al Hamra, Al Marjan Island and mountain-lodge holiday homes made festive.' },
  { emirate: 'Fujairah', note: 'Coastal villas and city homes on the East Coast, fully covered.' },
];

export const uaeCities = [
  'Dubai', 'Abu Dhabi', 'Al Ain', 'Sharjah', 'Ajman', 'Umm Al Quwain',
  'Ras Al Khaimah', 'Fujairah', 'Khor Fakkan', 'Dibba',
];

/* JSON-LD for location pages */
export function locationServiceLd(name, description, path, domain) {
  return {
    '@type': 'Service',
    '@id': `${domain}${path}#service`,
    name,
    description,
    url: `${domain}${path}`,
    provider: { '@id': `${domain}/#organization` },
    areaServed: name.includes('Dubai')
      ? ['Dubai', 'United Arab Emirates']
      : ['United Arab Emirates', 'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'],
  };
}