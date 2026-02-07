import type { Metadata } from 'next';
import Image from 'next/image';
import { Users } from 'lucide-react';
import { HeroSection, CTABanner } from '@/components/sections';
import { teamMembers } from '@/data/team';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the team at ECS Systems. Our skilled engineers, designers, and support staff are committed to delivering excellence in fire safety and security.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
  return (
    <>
      <HeroSection
        title="Our Team"
        subtitle="Meet the Experts"
        description="Our experienced team brings together decades of expertise in security systems, fire safety, and access control."
        compact
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Photo */}
                {member.image ? (
                  <div className="relative h-64 sm:h-56 lg:h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                    {/* Name overlay on photo */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-sm text-white/80 font-medium">{member.role}</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-48 bg-primary/5 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{member.initials}</span>
                    </div>
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                      <p className="text-sm text-accent font-medium">{member.role}</p>
                    </div>
                  </div>
                )}

                {/* Bio */}
                <div className="p-5">
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join Our Team"
        description="We're always looking for talented individuals to join ECS Systems. Check our current opportunities."
        ctaLabel="Work for Us"
        ctaHref="/careers"
        icon={Users}
        variant="light"
      />
    </>
  );
}
