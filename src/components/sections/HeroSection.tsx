'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui';

// Map page titles to background images
const heroImages: Record<string, string> = {
  'Security Residential': '/images/homepage/home-security.jpg',
  'Security Luxury Residential': '/images/security/intruder-alarm-lux.jpg',
  'Security Education': '/images/homepage/smart-locks.jpg',
  'Security Commercial': '/images/security/alarm-commercial.jpg',
  'Security Hospitality': '/images/hospitality/luxury.jpg',
  'Fire Safety Residential': '/images/homepage/home-fire.jpg',
  'Fire Safety Luxury Residential': '/images/fire-safety/fire-safety.jpg',
  'Fire Safety Education': '/images/fire-safety/fire-alarm.jpg',
  'Fire Safety Commercial': '/images/fire-safety/fire-extinguisher.jpg',
  'Fire Safety Hospitality': '/images/hospitality/convention.jpg',
  'Gates & Railings Residential': '/images/homepage/home-gates.jpg',
  'Gates & Railings Luxury Residential': '/images/gates-railings/automated-gates.jpg',
  'Gates & Railings Education': '/images/gates-railings/barriers.jpg',
  'Gates & Railings Commercial': '/images/gates-railings/manual-gates.jpg',
  'Gates & Railings Hospitality': '/images/hospitality/luxury.jpg',
  'About Us': '/images/about/directors.jpg',
  'About ECS Systems': '/images/about/directors.jpg',
  'Contact': '/images/security/consultancy.jpg',
  'Contact Us': '/images/security/consultancy.jpg',
  'SALTO Inspired Business Partner': '/images/salto/salto-about.jpg',
  'Maintenance & Aftercare': '/images/maintenance/cctv-maintenance.jpg',
  '24/7 Maintenance & Support': '/images/maintenance/cctv-maintenance.jpg',
  'Testimonials & Ratings': '/images/homepage/why-ecs.jpg',
};

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  compact?: boolean;
  /** Optional background image path. Overrides the default title-based lookup. */
  image?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  compact = false,
  image,
}: HeroSectionProps) {
  const bgImage = image ?? heroImages[title];

  return (
    <section
      className={`relative bg-primary text-white overflow-hidden ${
        compact ? 'py-16 lg:py-24' : 'py-20 lg:py-32'
      }`}
    >
      {/* Background image */}
      {bgImage && (
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/75" />
        </div>
      )}

      {/* Decorative background pattern (fallback if no image) */}
      {!bgImage && (
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
      )}

      {/* Subtle geometric accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/[0.04]" />
        <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full border border-white/[0.04]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="animate-hero-fade-up delay-100 text-accent-light text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            {subtitle}
          </p>
        )}
        <h1
          className={`animate-hero-fade-up delay-200 font-black tracking-tight text-white ${
            compact
              ? 'text-3xl sm:text-4xl lg:text-5xl'
              : 'text-4xl sm:text-5xl lg:text-6xl'
          }`}
        >
          {title}
        </h1>

        {/* Accent line under title */}
        <div className="flex justify-center mt-5 mb-2">
          <div className="w-16 h-0.5 bg-accent/50 rounded-full animate-line-grow delay-400" />
        </div>

        {description && (
          <p className="animate-hero-fade-up delay-300 mt-4 text-base sm:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="animate-hero-fade-up delay-500 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCTA && (
              <Link href={primaryCTA.href} className="group">
                <Button variant="primary" size="lg">
                  {primaryCTA.label}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Button>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="group">
                <Button variant="outline-white" size="lg">
                  {secondaryCTA.label}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
