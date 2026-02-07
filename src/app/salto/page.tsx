import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Wifi,
  Eye,
  Wrench,
  Zap,
  RefreshCcw,
  Settings,
  Headphones,
  ArrowRight,
  ExternalLink,
  ShoppingBag,
} from 'lucide-react';
import { Button } from '@/components/ui';
import { HeroSection, CTABanner } from '@/components/sections';
import { SHOP_URL } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'SALTO Access Control | Official UK Installer',
  description:
    'Official SALTO distributor & installer. Wire-free, RFID-based access control for residential and commercial projects in Kent & London.',
  alternates: { canonical: '/salto' },
};

const features = [
  {
    icon: Eye,
    title: 'Complete management of movement at your site',
    description:
      'The data-on-card technology used within the SALTO Virtual Network (SVN) allows you to control precisely who enters and exits your premises.',
  },
  {
    icon: Shield,
    title: 'Secure system',
    description:
      '2 Factor Authentication (2FA) ensures a higher level of security than traditional keys. Plus, card permissions can be added and changed in a matter of seconds via the control platform.',
  },
  {
    icon: Wrench,
    title: 'Full traceability',
    description:
      'Access information is recorded in a detailed audit trail, meaning data on the movement of residents, staff and/or visitors can be pulled in an instant.',
  },
  {
    icon: Wifi,
    title: 'Wire-free installation',
    description:
      'With SALTO products, there\u2019s no need for the complicated or expensive wiring. SALTO\u2019s wireless system is underpinned by smart keys, which can be easily replaced if they are lost or stolen.',
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Easy to fit',
    description:
      'Whether we\u2019re installing on your new build or adding these products to an existing building, setting up a carefully designed SALTO access control system at your premises that takes care of all your bespoke access requirements couldn\u2019t be easier.',
  },
  {
    icon: RefreshCcw,
    title: 'Straightforward conversions',
    description:
      'There are virtually no barriers to installing these pioneering products at any site. SALTO makes it possible to enhance any door with smart security features \u2013 however old or unusual it may be.',
  },
  {
    icon: Settings,
    title: 'Simple servicing & maintenance',
    description:
      'Software and firmware can be updated quickly to ensure your SALTO system is never compromised. Updates and upgrades are typically handled as part of an ongoing maintenance agreement.',
  },
  {
    icon: Headphones,
    title: 'Direct technical support',
    description:
      'SALTO locks are the most reliable on the market \u2013 but if you should experience any issues with your new SALTO access control system, rest assured our technical support team will be on hand to fix any problems relating to your hardware or software, or deliver additional training sessions to your building users.',
  },
];

const saltoProducts = [
  {
    name: 'Salto XS4 Mini',
    description: 'Upgrade and modernize your access control system with the XS4 Mini. The XS4 Mini offers an easy-to-install design, making it a simple solution for professionals looking to replace traditional mechanical-key-operated locks with the latest in electronic access control.',
    image: '/images/salto/xs4-mini.jpg',
  },
  {
    name: 'Salto XS4 Neo Cylinder',
    description: 'For any building, function, or model, SALTO offers the perfect electronic cylinder to fit any door. The SALTO Neo Cylinder delivers an easy-to-use electronic locking platform that integrates all of the physical security needs through smart, wireless, and battery-operated smart cylinders.',
    image: '/images/salto/xs4-neo.jpg',
  },
  {
    name: 'Design XS \u2013 European Wall Reader',
    description: 'The SALTO Design XS Wall Reader incorporates the SALTO cutting-edge design standard in this technological powerhouse. Combined with the SALTO smart access controller, it facilitates the integration of the wall reader with any SALTO smart access platform to control lifts, sliding doors or electronic gate doors.',
    image: '/images/salto/xs-wall-reader.jpg',
  },
  {
    name: 'XS4 Original+',
    description: 'The SALTO XS4 Original+ narrow body version is designed to fit most European profile doors and mortise locks standards. Easy to install and retrofit, it can replace your existing door hardware and fits any door with a broad range of different models and functions.',
    image: '/images/salto/xs4-original.jpg',
  },
  {
    name: '\u00C6lement Fusion',
    description: '\u00C6lement Fusion is an electronic lock with a sleek reader accentuated by an interactive light ring that illuminates when access credentials are presented, providing a minimalistic design that blends with any hotel d\u00E9cor.',
    image: '/images/salto/aelement-fusion.jpg',
  },
];

export default function SaltoPage() {
  return (
    <>
      <HeroSection
        title="SALTO Inspired Business Partner"
        subtitle="Official Distributor & Installer"
        description="ECS Systems is proud to have been appointed as an official distributor and installer of SALTO products."
        primaryCTA={{ label: 'Enquire Now', href: '/contact' }}
        compact
      />

      {/* About SALTO */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-10">
              <Image
                src="/images/salto/salto-about.jpg"
                alt="SALTO Access Control Systems"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                priority
              />
            </div>
            <div className="text-center">
            <p className="section-title mb-3">About SALTO Systems</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Smart Access Control Solutions
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Considered a true game changer for the access control industry, SALTO&apos;s
              battery powered systems deliver the best possible protection to any property.
              Read on to find out more about SALTO&apos;s unique product range and discover
              how we combine our extensive experience in design, consultancy, and installation
              with SALTO&apos;s innovations to develop best-in-class access control networks
              for our clients.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Established in 2001, SALTO Systems has transformed the access control space with
              a security solution that&apos;s reliable, adaptable, cost-effective and &ndash;
              crucially for us and our teams &ndash; easy to install and maintain. SALTO locks
              operate using radio frequency identification (RFID) technology. Forget carrying
              around cumbersome keys &ndash; all you need to access your premises is a card or
              fob that contains the necessary access permissions.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-title mb-3">Key Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Why Choose SALTO?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-title mb-3">Advantages</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Benefits of SALTO
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-title mb-3">Product Showcase</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              The SALTO Range
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saltoProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                {product.image && (
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Shop CTA card */}
            <div className="bg-accent/5 rounded-xl border border-accent/20 p-6 flex flex-col justify-center items-center text-center">
              <ShoppingBag className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-primary mb-2">Browse Our Shop</h3>
              <p className="text-sm text-foreground-muted mb-4">
                View pricing and order SALTO products from our online shop.
              </p>
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                <Button variant="primary" size="sm" className="w-full sm:w-auto">
                  Visit Shop
                  <ExternalLink className="w-3.5 h-3.5 ml-2" strokeWidth={1.5} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How ECS Can Support */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              How Can ECS Support You
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              As an official distributor for SALTO Systems, we can supply and install the full
              range of SALTO products for use in residential and commercial projects anywhere
              in Kent and its surrounding counties.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-6">
              While we do offer a supply only service, you&apos;ll get the full benefit of our
              expertise when you choose ECS Systems to design and install your new SALTO system.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-8">
              Our engineers have undergone extensive training with SALTO, and we ourselves are
              a highly accredited company, having achieved both NSI Gold and ISO:9001 standards.
              You can learn more about our company and our approach to quality by clicking the
              link below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xs sm:max-w-none mx-auto">
              <Link href="/about" className="w-full sm:w-52">
                <Button variant="outline" size="lg" className="w-full">
                  About ECS Systems
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-52">
                <Button variant="primary" size="lg" className="w-full">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                </Button>
              </Link>
            </div>
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
    </>
  );
}
