import type { Metadata } from 'next';
import { HeroSection, ServiceCard, CTABanner } from '@/components/sections';
import { serviceCategories } from '@/data/services';
import { SHOP_URL } from '@/data/navigation';
import { Shield, ShoppingBag, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Security systems, fire safety, and automated gates & railings for residential, commercial, education, and hospitality sectors from ECS Systems.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive Protection"
        description="From security systems and fire safety to automated gates & railings, we provide complete protection tailored to your sector."
        compact
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceCategories.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-12 lg:py-16 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-xl border border-accent/20 p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Browse Our Online Shop</h3>
                <p className="text-sm text-foreground-muted">
                  Purchase SALTO locks, access control systems, and security products online.
                </p>
              </div>
            </div>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                Visit Shop
                <ExternalLink className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure What You Need?"
        description="Our experts can survey your property and recommend the best solution. Contact us for a free, no-obligation consultation."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
        icon={Shield}
      />
    </>
  );
}
