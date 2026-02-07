import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { securityCommercial } from '@/data/services';

export const metadata: Metadata = {
  title: 'Security Commercial',
  description:
    'Commercial security systems from ECS Systems. NSI Gold-certified intruder alarms, CCTV, access control, and locksmith services for businesses of all sizes.',
  alternates: { canonical: '/services/security-commercial' },
};

export default function SecurityCommercialPage() {
  return <ServiceDetailPage service={securityCommercial} />;
}
