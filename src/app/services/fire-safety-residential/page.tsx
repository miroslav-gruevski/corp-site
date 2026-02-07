import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { fireSafetyResidential } from '@/data/services';

export const metadata: Metadata = {
  title: 'Fire Safety Residential',
  description:
    'Residential fire safety systems from ECS Systems. Fire alarm design, installation, fire extinguishers, and 24/7 monitoring for your home.',
  alternates: { canonical: '/services/fire-safety-residential' },
};

export default function FireSafetyResidentialPage() {
  return <ServiceDetailPage service={fireSafetyResidential} />;
}
