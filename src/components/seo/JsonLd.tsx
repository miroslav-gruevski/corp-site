interface JsonLdProps {
  type: 'organization' | 'localBusiness' | 'faqPage' | 'service' | 'breadcrumb' | 'website';
  data?: Record<string, unknown>;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://ecssystems.co.uk';

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ECS Systems',
  url: BASE_URL,
  logo: `${BASE_URL}/ECS-logo.svg`,
  description:
    'THE FIRE & SECURITY SPECIALISTS. Quality design and engineering, careful installation and excellent aftercare.',
  telephone: '0208 300 9996',
  email: 'sales@ecssystems.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '75 Station Rd',
    addressLocality: 'Sidcup',
    postalCode: 'DA15 7DN',
    addressCountry: 'GB',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 51.4319,
      longitude: 0.1022,
    },
    geoRadius: '50000',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+44-208-300-9996',
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+44-208-300-9996',
      contactType: 'sales',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
  ],
  sameAs: [
    'https://www.facebook.com/p/ECS-Systems-Ltd-100039883335629/',
    'https://www.instagram.com/ecssystemsltd/',
    'https://www.linkedin.com/company/ecs-systems-ltd',
  ],
};

const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ECS Systems Limited',
  url: BASE_URL,
  telephone: '0208 300 9996',
  email: 'sales@ecssystems.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '75 Station Rd',
    addressLocality: 'Sidcup',
    postalCode: 'DA15 7DN',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4319,
    longitude: 0.1022,
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  priceRange: '$$',
  image: `${BASE_URL}/ECS-logo.svg`,
};

const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ECS Systems',
  url: BASE_URL,
  description:
    'THE FIRE & SECURITY SPECIALISTS. Quality design and engineering, careful installation and excellent aftercare.',
  publisher: {
    '@type': 'Organization',
    name: 'ECS Systems',
    logo: `${BASE_URL}/ECS-logo.svg`,
  },
};

const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'LocalBusiness',
    name: 'ECS Systems Limited',
    telephone: '0208 300 9996',
  },
  areaServed: {
    '@type': 'Place',
    name: 'London and the South East, UK',
  },
};

export default function JsonLd({ type, data }: JsonLdProps) {
  let jsonLd;
  switch (type) {
    case 'organization':
      jsonLd = { ...organizationData, ...data };
      break;
    case 'localBusiness':
      jsonLd = { ...localBusinessData, ...data };
      break;
    case 'service':
      jsonLd = { ...serviceData, ...data };
      break;
    case 'website':
      jsonLd = { ...websiteData, ...data };
      break;
    case 'faqPage':
    case 'breadcrumb':
      jsonLd = data;
      break;
    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
