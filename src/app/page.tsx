import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Fire & Security Specialists | Kent & London',
  description:
    'ECS Systems — quality security systems, fire safety and automated gates & railings for residential, commercial and education sectors in Kent & London.',
  alternates: { canonical: '/' },
};
import {
  ArrowRight,
  Shield,
  Wrench,
  Eye,
  Award,
  HeartHandshake,
  Star,
  Clock,
  ShoppingBag,
  ExternalLink,
  Newspaper,
  Home,
  GraduationCap,
  Building2,
  Hotel,
  Gem,
  Quote,
} from 'lucide-react';
import { Button, AnimateOnScroll } from '@/components/ui';
import { ServiceCard, CTABanner } from '@/components/sections';
import { serviceCategories } from '@/data/services';
import { SHOP_URL } from '@/data/navigation';
import { JsonLd } from '@/components/seo';

export default function HomePage() {
  return (
    <>
      <JsonLd type="organization" />

      {/* Hero Section */}
      <section
        className="relative bg-primary text-white overflow-hidden min-h-[80svh] sm:min-h-[600px] lg:min-h-[700px] flex items-center"
        style={{ backgroundImage: 'url(/images/homepage/home-security.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Background image with Ken Burns */}
        <div className="absolute inset-0">
          <Image
            src="/images/homepage/home-security.jpg"
            alt=""
            fill
            className="object-cover animate-ken-burns"
            priority
            fetchPriority="high"
            sizes="100vw"
            aria-hidden="true"
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/[.97] via-primary/90 to-primary/75 pointer-events-none" />
          {/* Shimmer overlay */}
          <div className="absolute inset-0 hero-shimmer pointer-events-none" />
        </div>

        {/* Decorative geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-white/5 animate-hero-fade-in delay-1000" />
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full border border-white/5 animate-hero-fade-in delay-1200" />
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-accent/40 animate-hero-float" />
          <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-white/20 animate-hero-float delay-500" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text content with staggered animations */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              {/* Pill badge */}
              <div className="animate-hero-slide-right delay-100">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-light border border-white/10 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  ECS Systems
                </span>
              </div>

              {/* Title */}
              <h1 className="animate-hero-fade-up delay-200 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black tracking-tight text-white leading-[1.1]">
                The Fire &amp;{' '}
                Security{' '}
                Specialists
              </h1>

              {/* Description */}
              <p className="animate-hero-fade-up delay-400 mt-6 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed lg:text-left">
                Quality design and engineering, careful installation and excellent
                aftercare &ndash; we&apos;re on your side.
              </p>

              {/* CTA buttons */}
              <div className="animate-hero-fade-up delay-600 mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full max-w-xs sm:max-w-md mx-auto lg:mx-0">
                <Link href="/services" className="group w-full sm:flex-1">
                  <Button variant="primary" size="lg" className="animate-hero-pulse-glow w-full">
                    Our Services
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                  </Button>
                </Link>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="group w-full sm:flex-1">
                  <Button variant="outline-white" size="lg" className="w-full">
                    Visit Shop
                    <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
                  </Button>
                </a>
              </div>

            </div>

            {/* Right side - Feature cards with stagger */}
            <div className="hidden lg:flex flex-col gap-4 flex-shrink-0 w-[280px]">
              {[
                { icon: Shield, label: 'NSI Gold Accredited', desc: 'Highest industry standard' },
                { icon: Award, label: 'ISO 9001 Certified', desc: 'Quality management' },
                { icon: Clock, label: '24/7 Support', desc: 'Always on hand' },
                { icon: Star, label: 'SALTO Partner', desc: 'Official distributor' },
              ].map((badge, i) => (
                <div
                  key={badge.label}
                  className={`group animate-hero-fade-up delay-${(i + 3) * 200} flex items-center gap-4 bg-white/[0.07] backdrop-blur-md rounded-xl px-5 py-4 border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.15] transition-all duration-300 cursor-default`}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors duration-300">
                    <badge.icon className="w-5 h-5 text-accent-light group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white/90 block">{badge.label}</span>
                    <span className="text-xs text-white/40">{badge.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade — tall and multi-stop for smooth blending */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, var(--background-secondary) 0%, rgba(248,249,250,0.7) 40%, rgba(248,249,250,0.3) 70%, transparent 100%)',
          }}
        />
      </section>

      {/* Service Categories */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="section-title mb-3">Our Services</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Comprehensive Security Solutions
              </h2>
              <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
                From intruder alarms and CCTV to fire safety systems and automated gates,
                we provide complete protection for your property.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceCategories.map((service, i) => (
              <AnimateOnScroll key={service.id} animation="fade-up" delay={i * 100}>
                <ServiceCard service={service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="section-title mb-3">Who We Help</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Sectors We Serve
              </h2>
              <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
                Tailored security, fire safety, and access control solutions for every environment.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Home, label: 'Residential', href: '/services/security-residential', image: '/images/homepage/home-security.jpg' },
              { icon: Gem, label: 'Luxury Residential', href: '/services/security-luxury-residential', image: '/images/security/consultancy.jpg' },
              { icon: GraduationCap, label: 'Education', href: '/services/security-education', image: '/images/homepage/smart-locks.jpg' },
              { icon: Building2, label: 'Commercial', href: '/services/security-commercial', image: '/images/security/alarm-commercial.jpg' },
              { icon: Hotel, label: 'Hospitality', href: '/services/security-hospitality', image: '/images/hospitality/luxury.jpg' },
            ].map((sector) => (
              <Link
                key={sector.label}
                href={sector.href}
                className="group relative h-40 sm:h-48 rounded-xl overflow-hidden"
              >
                <Image
                  src={sector.image}
                  alt={sector.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:from-primary/95 transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                  <sector.icon className="w-5 h-5 text-accent-light mx-auto mb-1.5" strokeWidth={1.5} />
                  <p className="text-sm font-bold text-white leading-tight">{sector.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Maintenance & Monitoring */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Maintenance */}
              <Link href="/maintenance" className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/homepage/maintenance.jpg"
                    alt="24/7 Maintenance"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">24/7 Maintenance</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                    We&apos;re on hand when you need us to solve problems and maintain your
                    security systems.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:text-accent-hover transition-colors">
                    Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>

              {/* Monitoring */}
              <Link href="/contact" className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/homepage/monitoring.jpg"
                    alt="24/7 Monitoring"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">24/7 Monitoring</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                    Our specialist security experts can monitor your CCTV and alarms around
                    the clock.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:text-accent-hover transition-colors">
                    Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="py-12 lg:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Team Members' },
              { value: '100s', label: 'Clients Annually' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, i) => (
              <AnimateOnScroll key={stat.label} animation="scale" delay={i * 100}>
                <p className="text-3xl sm:text-4xl font-black text-accent-light">{stat.value}</p>
                <p className="text-sm text-white/60 mt-1 font-medium">{stat.label}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why ECS */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <AnimateOnScroll animation="fade-right" className="flex-1">
              <p className="section-title mb-3">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Why ECS Systems?
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-8">
                Quality design and engineering, careful installation and excellent
                aftercare &ndash; we&apos;re on your side.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: 'NSI Gold accredited and ISO 9001 certified' },
                  { icon: HeartHandshake, text: 'Dedicated aftercare and support team' },
                  { icon: Award, text: 'Official SALTO Systems distributor and installer' },
                  { icon: Star, text: 'Highly recommended on independent review sites' },
                ].map((item) => (
                  <div key={item.text} className="group/item flex items-center gap-3 p-2 -mx-2 rounded-lg transition-all duration-200">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 transition-colors duration-200">
                      <item.icon className="w-4 h-4 text-accent group-hover/item:scale-110 transition-transform duration-200" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-foreground-muted group-hover/item:text-primary transition-colors duration-200">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xs sm:max-w-md">
                <Link href="/about" className="w-full sm:flex-1">
                  <Button variant="secondary" size="md" className="w-full">
                    About Us
                  </Button>
                </Link>
                <Link href="/testimonials" className="w-full sm:flex-1">
                  <Button variant="outline" size="md" className="w-full">
                    Testimonials &amp; Ratings
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Why ECS image */}
            <AnimateOnScroll animation="fade-left" className="flex-shrink-0 w-full lg:w-[400px]">
              <div className="group/img relative h-72 lg:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/images/homepage/why-ecs.jpg"
                  alt="Why ECS Systems"
                  fill
                  className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 400px"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { title: 'NSI Gold', subtitle: 'Accredited' },
                  { title: 'ISO 9001', subtitle: 'Certified' },
                  { title: 'BAFE', subtitle: 'Registered' },
                  { title: 'SALTO', subtitle: 'Approved Partner' },
                ].map((cert) => (
                  <div
                    key={cert.title}
                    className="bg-white rounded-xl border border-border p-4 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-2">
                      <Award className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm font-bold text-primary">{cert.title}</p>
                    <p className="text-xs text-foreground-muted">{cert.subtitle}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SALTO Partner */}
      <CTABanner
        title="SALTO Inspired Business Partner"
        description="ECS Systems is proud to have been appointed as an official distributor and installer of SALTO products. Battery-powered, wire-free access control solutions for any property."
        ctaLabel="Find out more"
        ctaHref="/salto"
        icon={Star}
        variant="primary"
      />

      {/* Latest News */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="section-title mb-3">Stay Updated</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Latest News
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: 'Team Spotlight',
                title: 'Surveyor spotlight: Jack Cooper',
                summary:
                  'We shine a light on Jack Cooper, one of ECS\u2019s experienced surveyors. Jack joined in 2021 and brings nearly two decades of industry experience.',
              },
              {
                tag: 'Company News',
                title: 'Celebrating 10 years of ECS',
                summary:
                  'From Matt Evans and Dan Cope working from a garage to one of the leading fire and security specialists in London and the South East.',
              },
              {
                tag: 'Community',
                title: 'Halloween at Queen Elizabeth Hospital',
                summary:
                  'Members of the ECS team visited Queen Elizabeth Hospital to deliver a dose of spooky fun to young patients and staff.',
              },
            ].map((news) => (
              <Link
                key={news.title}
                href="/careers#latest-news"
                className="group bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Newspaper className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground-light">
                    {news.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {news.summary}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent group-hover:text-accent-hover transition-colors">
                  Read more <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="section-title mb-3">Client Reviews</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                What Our Clients Say
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Excellent company, quality work at reasonable prices. We had CCTV, an alarm and a video doorbell fitted and are very impressed with the set up.',
                author: 'Sarah M.',
                role: 'Residential Client',
              },
              {
                quote: 'ECS installed a full security system for our school. Professional from survey to completion. Their education team really understood our safeguarding needs.',
                author: 'James T.',
                role: 'School Business Manager',
              },
              {
                quote: 'Fantastic service from start to finish. The SALTO access control system they installed at our hotel has transformed how we manage guest and staff access.',
                author: 'Rebecca L.',
                role: 'Hotel Operations Manager',
              },
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white rounded-xl border border-border p-6 flex flex-col hover:shadow-md hover:-translate-y-1 hover:border-accent/20 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-accent/30 mb-3 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-bold text-primary">{testimonial.author}</p>
                  <p className="text-xs text-foreground-light">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-xs sm:max-w-none mx-auto">
            <Link href="/testimonials" className="block">
              <Button variant="outline" size="md" className="w-full sm:w-auto sm:mx-auto sm:flex">
                View All Reviews
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-16 lg:py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-xl border border-accent/20 p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Visit Our Online Shop</h3>
                <p className="text-sm text-foreground-muted">
                  Browse and purchase SALTO electronic locks, access control systems, and
                  security products online.
                </p>
              </div>
            </div>
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                Go to Shop
                <ExternalLink className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
