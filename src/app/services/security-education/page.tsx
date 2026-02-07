import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { securityEducation } from '@/data/services';

export const metadata: Metadata = {
  title: 'Security Education',
  description:
    'Security systems for schools, colleges, and universities. Intruder alarms, CCTV, access control, and intercom systems designed to meet safeguarding requirements.',
  alternates: { canonical: '/services/security-education' },
};

export default function SecurityEducationPage() {
  return <ServiceDetailPage service={securityEducation} />;
}
