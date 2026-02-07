import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { fireSafetyEducation } from '@/data/services';

export const metadata: Metadata = {
  title: 'Fire Safety Education',
  description:
    'Fire safety systems for schools and educational institutions. Fire alarms, risk assessments, emergency lighting, and fire extinguishers meeting Building Regulations and Ofsted standards.',
  alternates: { canonical: '/services/fire-safety-education' },
};

export default function FireSafetyEducationPage() {
  return <ServiceDetailPage service={fireSafetyEducation} />;
}
