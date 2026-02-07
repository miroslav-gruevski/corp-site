export const SHOP_URL = process.env.NEXT_PUBLIC_SHOP_URL || 'https://webshop-8hmr.vercel.app';

export interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const serviceCategories = [
  { name: 'Residential', slug: 'residential' },
  { name: 'Luxury Residential', slug: 'luxury-residential' },
  { name: 'Education', slug: 'education' },
  { name: 'Commercial', slug: 'commercial' },
  { name: 'Hospitality', slug: 'hospitality' },
];

export const mainNavigation: NavItem[] = [
  {
    name: 'Security',
    href: '/services',
    children: serviceCategories.map((cat) => ({
      name: cat.name,
      href: `/services/security-${cat.slug}`,
    })),
  },
  {
    name: 'Fire Safety',
    href: '/services',
    children: serviceCategories.map((cat) => ({
      name: cat.name,
      href: `/services/fire-safety-${cat.slug}`,
    })),
  },
  {
    name: 'Gates & Railings',
    href: '/services',
    children: serviceCategories.map((cat) => ({
      name: cat.name,
      href: `/services/gates-railings-${cat.slug}`,
    })),
  },
  {
    name: 'SALTO Partner',
    href: '/salto',
  },
  {
    name: 'Visit Shop',
    href: SHOP_URL,
    external: true,
  },
];

export const supportLinks = [
  { name: 'Maintenance & Aftercare', href: '/maintenance' },
  { name: 'Estate Management', href: '/services' },
  { name: '24/7 Response', href: '/maintenance' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
];

export const companyLinks = [
  { name: 'Testimonials & Ratings', href: '/testimonials' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Work for us', href: '/careers' },
];

export const contactInfo = {
  phone: '0208 300 9996',
  email: 'sales@ecssystems.co.uk',
  address: 'ECS Systems Limited, 75 Station Rd, Sidcup DA15 7DN',
};

export const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/p/ECS-Systems-Ltd-100039883335629/' },
  { name: 'Instagram', href: 'https://www.instagram.com/ecssystemsltd/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ecs-systems-ltd' },
];
