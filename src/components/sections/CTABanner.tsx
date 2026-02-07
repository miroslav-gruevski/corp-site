import Link from 'next/link';
import { Button } from '@/components/ui';
import { LucideIcon } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'accent' | 'light';
}

export default function CTABanner({
  title,
  description,
  ctaLabel,
  ctaHref,
  icon: Icon,
  variant = 'primary',
}: CTABannerProps) {
  const variants = {
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-white',
    light: 'bg-background-secondary text-primary',
  };

  const descriptionColor = {
    primary: 'text-white/80',
    accent: 'text-white/80',
    light: 'text-foreground-muted',
  };

  return (
    <section className={`py-16 lg:py-20 ${variants[variant]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4 max-w-2xl">
            {Icon && (
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                  variant === 'light' ? 'bg-primary/5' : 'bg-white/10'
                }`}
              >
                <Icon
                  className={`w-7 h-7 ${
                    variant === 'light' ? 'text-accent' : 'text-white'
                  }`}
                  strokeWidth={1.5}
                />
              </div>
            )}
            <div>
              <h2
                className={`text-2xl sm:text-3xl font-bold ${
                  variant === 'light' ? 'text-primary' : 'text-white'
                }`}
              >
                {title}
              </h2>
              <p className={`mt-2 text-base ${descriptionColor[variant]} leading-relaxed`}>
                {description}
              </p>
            </div>
          </div>
          <Link href={ctaHref} className="flex-shrink-0">
            <Button
              variant={variant === 'light' ? 'primary' : 'outline-white'}
              size="lg"
            >
              {ctaLabel}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
