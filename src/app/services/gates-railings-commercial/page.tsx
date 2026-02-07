import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { gatesRailingsCommercial } from '@/data/services';

export const metadata: Metadata = {
  title: 'Gates & Railings Commercial',
  description:
    'Commercial gates, barriers, and railings from ECS Systems. Heavy-duty entrance gates, industrial barriers, perimeter fencing, and bollards for business premises.',
  alternates: { canonical: '/services/gates-railings-commercial' },
};

export default function GatesRailingsCommercialPage() {
  return <ServiceDetailPage service={gatesRailingsCommercial} />;
}
