import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { gatesRailingsHospitality } from '@/data/services';

export const metadata: Metadata = {
  title: 'Gates & Railings Hospitality',
  description:
    'Gates and railings for hotels, restaurants, and leisure venues. Elegant entrance gates, car park barriers, decorative railings, and service area security from ECS Systems.',
  alternates: { canonical: '/services/gates-railings-hospitality' },
};

export default function GatesRailingsHospitalityPage() {
  return <ServiceDetailPage service={gatesRailingsHospitality} />;
}
