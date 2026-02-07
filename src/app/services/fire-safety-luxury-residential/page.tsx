import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { fireSafetyLuxuryResidential } from '@/data/services';

export const metadata: Metadata = {
  title: 'Fire Safety Luxury Residential',
  description:
    'Premium fire safety systems for luxury homes. Aspirating smoke detection, bespoke fire alarms, suppression systems, and smart fire safety integration from ECS Systems.',
  alternates: { canonical: '/services/fire-safety-luxury-residential' },
};

export default function FireSafetyLuxuryResidentialPage() {
  return <ServiceDetailPage service={fireSafetyLuxuryResidential} />;
}
