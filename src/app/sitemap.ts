import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://ecssystems.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    'security-residential',
    'security-luxury-residential',
    'security-education',
    'security-commercial',
    'security-hospitality',
    'fire-safety-residential',
    'fire-safety-luxury-residential',
    'fire-safety-education',
    'fire-safety-commercial',
    'fire-safety-hospitality',
    'gates-railings-residential',
    'gates-railings-luxury-residential',
    'gates-railings-education',
    'gates-railings-commercial',
    'gates-railings-hospitality',
  ];

  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/salto', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/maintenance', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/testimonials', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/faqs', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/team', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/careers', priority: 0.4, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const now = new Date();

  return [
    ...staticPages.map((page) => ({
      url: `${BASE_URL}${page.url}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...services.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
