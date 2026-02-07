import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { fireSafetyCommercial } from '@/data/services';

export const metadata: Metadata = {
  title: 'Fire Safety Commercial',
  description:
    'Commercial fire safety systems from ECS Systems. Fire alarms to BS 5839, fire risk assessments, emergency lighting, suppression systems, and staff training for businesses.',
  alternates: { canonical: '/services/fire-safety-commercial' },
};

export default function FireSafetyCommercialPage() {
  return <ServiceDetailPage service={fireSafetyCommercial} />;
}
