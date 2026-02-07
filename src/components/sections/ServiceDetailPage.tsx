import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wrench, Shield, ClipboardList, PenTool, HardHat, Headphones } from 'lucide-react';
import { Button, Breadcrumb } from '@/components/ui';
import { HeroSection, CTABanner } from '@/components/sections';
import type { ServiceDetail } from '@/data/services';

// Map individual service titles to images
const serviceItemImages: Record<string, string> = {
  'Intruder Alarms': '/images/security/intruder-alarm.jpg',
  'CCTV': '/images/security/cctv.jpg',
  'Intercoms': '/images/security/cctv-maintenance.jpg',
  'Gates & Railings': '/images/gates-railings/railings.jpg',
  'Locksmith Services': '/images/security/smart-locks.jpg',
  'Security Consultancy': '/images/security/consultancy.jpg',
  'Access Controls & Smart Locks': '/images/security/smart-locks.jpg',
  'Valuables Protection: Safes and Art Alarms': '/images/security/art-alarm.jpg',
  'Security Rooms': '/images/security/panic-room.jpg',
  'Education Security Specialists': '/images/homepage/smart-locks.jpg',
  'Smart Locks': '/images/security/smart-locks.jpg',
  'Access Control': '/images/security/smart-locks.jpg',
  'Lockdown Alarms': '/images/security/intruder-alarm-2.jpg',
  'Gates & Barriers': '/images/gates-railings/barriers.jpg',
  'Wireless Lockers': '/images/security/smart-locks.jpg',
  'Security Systems': '/images/homepage/home-security.jpg',
  'Fire Alarms': '/images/fire-safety/fire-alarm.jpg',
  'Fire Extinguishers': '/images/fire-safety/fire-extinguisher.jpg',
  '24/7 Monitoring': '/images/homepage/monitoring.jpg',
  'Aspiration Systems': '/images/fire-safety/fire-safety.jpg',
  'Fire Curtains': '/images/fire-safety/fire-safety.jpg',
  'Fire Risk Assessment': '/images/fire-safety/fire-safety.jpg',
  'Emergency Lighting': '/images/fire-safety/fire-alarm.jpg',
  'Smoke Vents': '/images/fire-safety/fire-extinguisher.jpg',
  'Fire Alarms & Smoke Detection': '/images/fire-safety/fire-alarm.jpg',
  'Emergency Lighting & Smoke Vents': '/images/fire-safety/fire-extinguisher.jpg',
  'Fire Risk Assessments': '/images/fire-safety/fire-safety.jpg',
  'Manual Gates': '/images/gates-railings/manual-gates.jpg',
  'Automated Gates': '/images/gates-railings/automated-gates.jpg',
  'Gate Automation': '/images/gates-railings/automated-gates.jpg',
  'Railings': '/images/gates-railings/railings.jpg',
  'Bollards': '/images/gates-railings/bollards.jpg',
  'Barriers': '/images/gates-railings/barriers.jpg',
  'Gates & Automation': '/images/gates-railings/automated-gates.jpg',
  'Roller Barrier': '/images/gates-railings/railings.jpg',
  'Fencing': '/images/gates-railings/barriers.jpg',
  // Hospitality
  'Truly Remarkable Products': '/images/hospitality/luxury.jpg',
  'Cutting-Edge Technologies': '/images/hospitality/luxury.jpg',
  'Meeting Your Challenges Head On': '/images/hospitality/convention.jpg',
  'Direct Technical Support & Maintenance': '/images/maintenance/cctv-maintenance.jpg',
  'Friendly, Fully Trained Staff': '/images/hospitality/convention.jpg',
};

interface ServiceDetailPageProps {
  service: ServiceDetail;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: service.categoryTitle, href: '/services' },
    { label: service.title },
  ];

  return (
    <>
      {/* Breadcrumb navigation */}
      <div className="bg-background-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <HeroSection
        title={service.title}
        subtitle={service.categoryTitle}
        description={service.intro}
        primaryCTA={{ label: 'Request a Quote', href: '/contact' }}
        compact
      />

      {/* Our Process */}
      <section className="py-16 lg:py-24 bg-background-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-title mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Process</h2>
            <p className="mt-4 text-foreground-muted max-w-xl mx-auto">
              From initial consultation to ongoing support, we make every step seamless.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                { step: '01', icon: ClipboardList, title: 'Survey', description: 'Free on-site survey to assess your requirements and identify the best solutions.' },
                { step: '02', icon: PenTool, title: 'Design', description: 'Tailored system design with a detailed, no-obligation quote for your approval.' },
                { step: '03', icon: HardHat, title: 'Install', description: 'Professional installation by our skilled, DBS-checked engineers with minimal disruption.' },
                { step: '04', icon: Headphones, title: 'Support', description: '24/7 maintenance, monitoring, and dedicated aftercare for complete peace of mind.' },
              ].map((item) => {
                const StepIcon = item.icon;
                return (
                  <div key={item.step} className="group relative flex flex-col items-center text-center">
                    {/* Step circle */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-accent/20 flex items-center justify-center mb-6 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-accent/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-300">
                        <StepIcon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                      </div>
                      {/* Step number badge */}
                      <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-md">
                        {item.step}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-foreground-muted leading-relaxed max-w-[220px]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {service.services.map((svc, index) => (
              <div
                key={svc.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Service image */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  {serviceItemImages[svc.title] ? (
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] max-w-[380px] mx-auto">
                      <Image
                        src={serviceItemImages[svc.title]}
                        alt={svc.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 380px, 380px"
                      />
                    </div>
                  ) : (
                    <div className="bg-background-secondary rounded-xl p-8 lg:p-12 flex items-center justify-center aspect-[4/3] max-w-[380px] mx-auto">
                      <Shield className="w-16 h-16 text-primary/20" strokeWidth={1} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-4">{svc.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">{svc.description}</p>
                  <Link href="/contact" className="block mt-4">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      Enquire
                      <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="24/7 Maintenance"
        description="We're on hand when you need us to solve problems and maintain your security systems."
        ctaLabel="Find out more"
        ctaHref="/maintenance"
        icon={Wrench}
      />

      {/* Why ECS? */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Why ECS?</h2>
            <p className="text-foreground-muted leading-relaxed mb-8">
              Our work is always focused on providing the highest quality solutions and best
              workmanship to fully meet our clients&apos; needs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
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
      </section>
    </>
  );
}
