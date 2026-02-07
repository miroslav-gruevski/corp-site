import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { gatesRailingsLuxuryResidential } from '@/data/services';

export const metadata: Metadata = {
  title: 'Gates & Railings Luxury Residential',
  description:
    'Bespoke gates and railings for luxury homes and estates. Custom entrance gates, premium automation, estate railings, and integrated access control from ECS Systems.',
  alternates: { canonical: '/services/gates-railings-luxury-residential' },
};

export default function GatesRailingsLuxuryResidentialPage() {
  return <ServiceDetailPage service={gatesRailingsLuxuryResidential} />;
}
