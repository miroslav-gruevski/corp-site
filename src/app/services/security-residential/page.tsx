import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { securityResidential } from '@/data/services';

export const metadata: Metadata = {
  title: 'Security Residential',
  description:
    'Residential security systems from ECS Systems. Intruder alarms, CCTV, intercoms, gates & railings, and locksmith services for your home.',
  alternates: { canonical: '/services/security-residential' },
};

export default function SecurityResidentialPage() {
  return <ServiceDetailPage service={securityResidential} />;
}
