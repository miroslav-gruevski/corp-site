import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Award,
  Users,
  Star,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
  ShoppingBag,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui';
import { HeroSection, CTABanner } from '@/components/sections';
import { SHOP_URL } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'ECS Systems — one of the leading fire & security specialists in London and the South East. NSI Gold accredited, ISO 9001 certified.',
  alternates: { canonical: '/about' },
};

const values = [
  {
    icon: Shield,
    title: 'Quality Security Systems and Aftercare',
    description:
      'With a wealth of experience behind our directors, and with our clients\u2019 support, ECS has been able to grow quickly. Our employment programme is focused on recruiting people with the right experience and a positive, \u2018can-do\u2019 attitude. We only want the best staff at ECS and our approach has allowed us to specialise in a wider range of services, obtaining the highest levels of accreditation in each area.',
  },
  {
    icon: Users,
    title: 'The Best Talent in the Industry',
    description:
      'Our engineers are handpicked and many of the most talented in the industry come to work for us. We are completely customer focused and strive to answer every call within moments, while providing quotes quickly \u2013 often within minutes or hours.',
  },
  {
    icon: HeartHandshake,
    title: 'Competitively Priced',
    description:
      'Although an industry leader with a focus on innovation and quality, our products and services are competitively priced. Our maintenance and repair service is fast, efficient and good value.',
  },
  {
    icon: Star,
    title: 'Highly Recommended on Independent Sites',
    description:
      'Most of our work is generated thanks to recommendations from satisfied customers. However, if we are new to you, be sure to check out our outstanding reviews on independent sites such as Checkatrade.',
  },
];

const accreditations = [
  { name: 'NSI Gold', description: 'Highest accreditation in our industry' },
  { name: 'ISO 9001', description: 'Quality management system certified' },
  { name: 'BAFE', description: 'British Approvals for Fire Equipment registered' },
  { name: 'SALTO', description: 'Official SALTO Systems distributor and installer' },
  { name: 'SSAIB', description: 'Security Systems and Alarms Inspection Board' },
  { name: 'FIA', description: 'Fire Industry Association member' },
  { name: 'Safe Contractor', description: 'Health and safety accreditation for contractors' },
  { name: 'Constructionline', description: 'Pre-qualification and supply chain management certified' },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="Who We Are"
        description="ECS is one of the leading \u2013 and fastest-growing \u2013 security and fire specialists in London and the South East. We design, install and maintain modern, integrated systems for hundreds of clients annually, including those in the residential, education and commercial sectors."
        compact
      />

      {/* Company Introduction */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-foreground-muted leading-relaxed text-lg">
              Our work is always focused on providing the highest quality solutions and best
              workmanship that fully meet our clients&apos; needs. Read on to learn more about
              who we are, what we do and how we can help you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-foreground-muted leading-relaxed">
              Read on to learn more about our accreditations and the brands we offer.
              If we can help you with any of your security or fire safety needs,
              don&apos;t hesitate to{' '}
              <Link href="/contact" className="text-accent hover:text-accent-hover transition-colors font-medium">
                get in touch
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-title mb-3">Our Credentials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Accreditations
            </h2>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              ECS is a highly accredited company. We conform to or exceed all required sector
              standards and have achieved the highest accreditation in our industry: NSI Gold
              &amp; ISO9001.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((acc) => (
              <div
                key={acc.name}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-success-bg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-success" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{acc.name}</h3>
                </div>
                <p className="text-sm text-foreground-muted">{acc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturers */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="section-title mb-3">Our Partners</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Manufacturers
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              We take research seriously and are committed to ensuring we offer the latest
              market solutions within our range. Our team meticulously edits and audits all
              manner of fire safety and security equipment from leading industry manufacturers
              to ensure we continue to provide quality, reliable, state-of-the-art products
              to our customers that we know you can trust.
            </p>
          </div>

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
                <Link href="/about">
                  <Button variant="outline" size="sm">About</Button>
                </Link>
                <Link href="/team">
                  <Button variant="outline" size="sm">Our Team</Button>
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
                <h3 className="text-xl font-bold text-primary">Visit Our Online Shop</h3>
                <p className="text-sm text-foreground-muted">
                  Explore SALTO electronic locks, access control systems, and security products.
                </p>
              </div>
            </div>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                Go to Shop
                <ExternalLink className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Secure Your Property?"
        description="Get in touch for a free survey and no-obligation quote. Our experts are ready to help."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
        icon={Award}
      />
    </>
  );
}
