import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { gatesRailingsEducation } from '@/data/services';

export const metadata: Metadata = {
  title: 'Gates & Railings Education',
  description:
    'Gates and railings for schools and educational institutions. Entrance gates, perimeter fencing, pedestrian access control, and vehicle barriers meeting safeguarding standards.',
  alternates: { canonical: '/services/gates-railings-education' },
};

export default function GatesRailingsEducationPage() {
  return <ServiceDetailPage service={gatesRailingsEducation} />;
}
