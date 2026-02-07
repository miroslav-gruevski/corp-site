import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { securityHospitality } from '@/data/services';

export const metadata: Metadata = {
  title: 'Security Hospitality',
  description:
    'Security systems for hotels, restaurants, and leisure venues. Discreet CCTV, electronic locking, access control, and guest safety systems from ECS Systems.',
  alternates: { canonical: '/services/security-hospitality' },
};

export default function SecurityHospitalityPage() {
  return <ServiceDetailPage service={securityHospitality} />;
}
