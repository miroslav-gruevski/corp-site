import type { Metadata } from 'next';
import {
  Wrench,
  Shield,
  Flame,
  DoorOpen,
  Building2,
  ArrowRight,
  ShoppingBag,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { HeroSection, CTABanner } from '@/components/sections';
import { SHOP_URL } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Maintenance & Aftercare',
  description:
    'ECS Systems provides 24/7 maintenance and aftercare for security systems, fire safety, gate automation, and large site estate management.',
  alternates: { canonical: '/maintenance' },
};

const maintenanceServices = [
  {
    icon: Shield,
    title: 'Security',
    description:
      'From replacing batteries in wireless systems, to troubleshooting hard-wired intruder alarms or CCTV systems, we\u2019re always on hand to make sure your systems are working correctly.',
  },
  {
    icon: Flame,
    title: 'Fire Safety',
    description:
      'We can take responsibility for all aspects of your fire safety, from testing alarms, replacing or refilling fire extinguishers through to checking automatic smoke vents and maintaining fire curtains.',
  },
  {
    icon: DoorOpen,
    title: 'Gate Automation & Intercom',
    description:
      'The team at ECS will ensure your gates are fully secure and working at their best, all year round. Our maintenance package includes regular inspection of your automatic gate systems and their accompanying intercom setups, plus fast and professional repairs as needed.',
  },
  {
    icon: Building2,
    title: 'Large Site & Estate Management',
    description:
      'ECS can take responsibility for all aspects of your security, fire safety and gate system requirements at large and multiple sites, ensuring all are properly maintained, legally compliant and repaired quickly. We\u2019ll allocate you a Key Account Administrator to ensure we have a full and complete understanding of your needs. Regular review meetings with our larger sites also help us to analyse our own performance and gain insights into your future plans and requirements.',
  },
];

export default function MaintenancePage() {
  return (
    <>
      <HeroSection
        title="Maintenance & Aftercare"
        subtitle="Always On Hand"
        description="At ECS, we\u2019re very proud of the fire and security solutions that we design, install and service. Many of our clients ask us to provide their systems with regular maintenance, which we do to keep systems in optimum working order."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        compact
      />

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-foreground-muted leading-relaxed text-lg">
              However, we know that sometimes things go wrong &ndash; and that&apos;s why we
              offer you 24/7 engineer support. You can simply phone our 24-hour monitoring
              station and we&apos;ll resolve your issue within hours, if not immediately. Get
              in touch to learn more about how our maintenance packages work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {maintenanceServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl border border-border p-8 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs & Why ECS */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-border p-8">
              <h3 className="text-2xl font-bold text-primary mb-3">Frequently Asked Questions</h3>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Do you have a question about how ECS Systems can help you? We may have the
                answer in our FAQs.
              </p>
              <Link href="/faqs">
                <Button variant="outline" size="sm">
                  FAQs
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                </Button>
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-border p-8">
              <h3 className="text-2xl font-bold text-primary mb-3">Why ECS?</h3>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Our work is always focused on providing the highest quality solutions and best
                workmanship that fully meet our clients&apos; needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/testimonials">
                  <Button variant="outline" size="sm">Ratings</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="sm">About</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="sm">Contact</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-accent/5 rounded-xl border border-accent/20 p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Need Replacement Parts?</h3>
                <p className="text-sm text-foreground-muted">
                  Browse SALTO locks, access control products, and security equipment in our online shop.
                </p>
              </div>
            </div>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                Visit Shop
                <ExternalLink className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Why ECS Systems?"
        description="Quality design and engineering, careful installation and excellent aftercare."
        ctaLabel="About Us"
        ctaHref="/about"
        icon={Wrench}
        variant="primary"
      />
    </>
  );
}
