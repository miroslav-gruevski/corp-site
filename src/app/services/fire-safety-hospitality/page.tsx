import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { fireSafetyHospitality } from '@/data/services';

export const metadata: Metadata = {
  title: 'Fire Safety Hospitality',
  description:
    'Fire safety systems for hotels, restaurants, and leisure venues. Fire alarms, kitchen suppression, emergency lighting, and compliance services from ECS Systems.',
  alternates: { canonical: '/services/fire-safety-hospitality' },
};

export default function FireSafetyHospitalityPage() {
  return <ServiceDetailPage service={fireSafetyHospitality} />;
}
