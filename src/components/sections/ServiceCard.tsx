import Link from 'next/link';
import Image from 'next/image';
import { Shield, Flame, Fence, LucideIcon } from 'lucide-react';
import { ServiceCategory } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Flame,
  Fence,
};

const imageMap: Record<string, string> = {
  security: '/images/homepage/home-security.jpg',
  'fire-safety': '/images/homepage/home-fire.jpg',
  'gates-railings': '/images/homepage/home-gates.jpg',
};

interface ServiceCardProps {
  service: ServiceCategory;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Shield;
  const imageSrc = imageMap[service.id];

  return (
    <div className="group bg-white rounded-xl border border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Image */}
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="p-6 pb-4">
        {!imageSrc && (
          <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
            <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" strokeWidth={1.5} />
          </div>
        )}
        <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
        <p className="text-sm text-foreground-muted leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Sector links */}
      <div className="px-6 pb-6">
        <div className="border-t border-border pt-4 space-y-1">
          {service.sectors.map((sector) => (
            <Link
              key={sector.slug}
              href={sector.href}
              className="group/link inline-flex items-center py-1.5 text-sm text-foreground-muted hover:text-accent transition-colors w-full"
            >
              <span className="relative">
                {sector.name}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover/link:w-full" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
