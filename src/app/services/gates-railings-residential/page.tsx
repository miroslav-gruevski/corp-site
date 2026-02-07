import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { gatesRailingsResidential } from '@/data/services';

export const metadata: Metadata = {
  title: 'Gates & Railings Residential',
  description:
    'Residential gates and railings from ECS Systems. Manual gates, automated gates, railings, and bollards for your property.',
  alternates: { canonical: '/services/gates-railings-residential' },
};

export default function GatesRailingsResidentialPage() {
  return <ServiceDetailPage service={gatesRailingsResidential} />;
}
