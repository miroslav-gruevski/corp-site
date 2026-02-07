import type { Metadata } from 'next';
import { Star, Quote, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { HeroSection, CTABanner } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Testimonials & Ratings',
  description:
    'Read what our customers say about ECS Systems. Check out our five-star reviews from delighted customers on Checkatrade and Which Trusted Traders.',
  alternates: { canonical: '/testimonials' },
};

const testimonials = [
  {
    name: 'Residential Client',
    location: 'Kent',
    text: 'ECS Systems installed a complete security system in our home including intruder alarms, CCTV, and automated gates. The team was professional, tidy, and the system works flawlessly. Highly recommended.',
    rating: 5,
    service: 'Security Systems',
    category: 'Residential',
  },
  {
    name: 'School Administrator',
    location: 'London',
    text: 'We chose ECS for our fire safety upgrade and access control installation. They understood the unique requirements of an educational environment and delivered a solution that keeps our students and staff safe.',
    rating: 5,
    service: 'Fire Safety & Access Control',
    category: 'Education',
  },
  {
    name: 'Property Manager',
    location: 'South East',
    text: 'The SALTO access control system installed by ECS has transformed how we manage our multi-tenancy building. The wire-free installation meant minimal disruption, and the cloud-based management is incredibly convenient.',
    rating: 5,
    service: 'SALTO Access Control',
    category: 'Commercial',
  },
  {
    name: 'Business Owner',
    location: 'Sidcup',
    text: 'We\'ve been using ECS for our maintenance contract for over five years. Their 24/7 response service gives us complete peace of mind, and their engineers are always prompt and professional.',
    rating: 5,
    service: 'Maintenance & Support',
    category: 'Commercial',
  },
  {
    name: 'Luxury Home Owner',
    location: 'Surrey',
    text: 'From the initial survey to the final installation, ECS provided an exceptional service. The integrated security solution they designed for our property is discreet yet incredibly effective.',
    rating: 5,
    service: 'Luxury Residential Security',
    category: 'Luxury Residential',
  },
  {
    name: 'Hotel Manager',
    location: 'London',
    text: 'ECS supplied and installed SALTO electronic locks throughout our hotel. The guest experience has improved dramatically, and the management system gives us full control over access rights.',
    rating: 5,
    service: 'Hospitality Security',
    category: 'Commercial',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-warning fill-warning' : 'text-border'
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <HeroSection
        title="Testimonials & Ratings"
        subtitle="Why ECS?"
        description="At ECS Systems, we pride ourselves on delivering a first-class service. Check out some of the five-star reviews below from delighted customers, or click on the buttons below to see more excellent feedback about our work."
        compact
      />

      {/* Review site links */}
      <section className="py-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs sm:max-w-none mx-auto">
            <a
              href="https://trustedtraders.which.co.uk/businesses/ecs-systems-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-52"
            >
              <Button variant="outline" size="md" className="w-full">
                Which Trusted Trader
                <ExternalLink className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Button>
            </a>
            <a
              href="https://www.checkatrade.com/trades/ecssystems"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-52"
            >
              <Button variant="outline" size="md" className="w-full">
                Check a Trade
                <ExternalLink className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <Quote className="w-8 h-8 text-accent/30 mb-3" strokeWidth={1.5} />
                <p className="text-sm text-foreground-muted leading-relaxed flex-1 mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-border">
                  <StarRating rating={testimonial.rating} />
                  <p className="text-sm font-bold text-primary mt-2">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-foreground-light">
                    {testimonial.location} &middot; {testimonial.service}
                  </p>
                </div>
              </div>
            ))}
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
              <Link href="/faqs" className="block">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
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

      <CTABanner
        title="Ready to Experience the ECS Difference?"
        description="Join our satisfied customers. Contact us for a free survey and no-obligation quote."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
        icon={Star}
      />
    </>
  );
}
