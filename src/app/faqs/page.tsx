import type { Metadata } from 'next';
import { HeroSection, FAQAccordion, CTABanner } from '@/components/sections';
import { faqSections } from '@/data/faqs';
import { JsonLd } from '@/components/seo';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Frequently asked questions about ECS Systems security, fire safety, gates & railings, maintenance, and accreditations.',
  alternates: { canonical: '/faqs' },
};

export default function FAQsPage() {
  // Generate FAQ structured data
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <>
      <JsonLd type="faqPage" data={faqJsonLd} />

      <HeroSection
        title="Support FAQs"
        subtitle="Frequently Asked Questions"
        description="Find answers to common questions about our security, fire safety, and gates & railings services."
        compact
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion sections={faqSections} />
        </div>
      </section>

      <CTABanner
        title="Can't find what you're looking for?"
        description="Our team is happy to help. Get in touch and we'll answer any questions you have."
        ctaLabel="Contact Us"
        ctaHref="/contact"
        icon={HelpCircle}
        variant="light"
      />
    </>
  );
}
