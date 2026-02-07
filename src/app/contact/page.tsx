import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { HeroSection, ContactForm } from '@/components/sections';
import { JsonLd } from '@/components/seo';
import { contactInfo } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact ECS Systems for a free survey and quote. Call 0208 300 9996 or email sales@ecssystems.co.uk. Based in Sidcup, Kent, serving London and the South East.',
  alternates: { canonical: '/contact' },
};

const contactDetails = [
  {
    icon: Phone,
    label: 'Telephone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'ECS Systems Limited, 75 Station Rd, Sidcup DA15 7DN',
    href: 'https://maps.google.com/?q=75+Station+Rd,+Sidcup+DA15+7DN',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 8:00am - 6:00pm\n24/7 Emergency Response',
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd type="localBusiness" />

      <HeroSection
        title="Contact"
        subtitle="Get in Touch"
        description="If you'd like to learn more about ECS Systems or the services we offer, please get in touch by emailing us or via our online form. If you'd like a quote, please use the form below or call us today on Freephone 0208 300 9996."
        compact
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info & map */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    const content = (
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-foreground-light mb-0.5">
                            {detail.label}
                          </p>
                          <p className="text-sm text-primary font-medium whitespace-pre-line">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    );
                    return detail.href ? (
                      <a
                        key={detail.label}
                        href={detail.href}
                        className="block hover:opacity-80 transition-opacity"
                        target={detail.label === 'Address' ? '_blank' : undefined}
                        rel={detail.label === 'Address' ? 'noopener noreferrer' : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={detail.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=ECS+Systems+Ltd,+75+Station+Rd,+Sidcup+DA15+7DN&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ECS Systems Location - 75 Station Rd, Sidcup DA15 7DN"
                />
              </div>
            </div>

            {/* Quote request form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-border p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Get in Touch
                </h2>
                <p className="text-foreground-muted mb-8">
                  Interested in our services? Fill in the form below and we&apos;ll get
                  back to you with free advice and a no-obligation estimate.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
