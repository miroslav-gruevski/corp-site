import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { securityLuxuryResidential } from '@/data/services';

export const metadata: Metadata = {
  title: 'Security Luxury Residential',
  description:
    'Bespoke security systems for luxury homes and estates. High-definition CCTV, smart access control, integrated home security, and safe protection from ECS Systems.',
  alternates: { canonical: '/services/security-luxury-residential' },
};

export default function SecurityLuxuryResidentialPage() {
  return <ServiceDetailPage service={securityLuxuryResidential} />;
}
