'use client';

import { Phone } from 'lucide-react';
import { contactInfo } from '@/data/navigation';

export default function MobileCallButton() {
  const phoneHref = `tel:${contactInfo.phone.replace(/\s/g, '')}`;

  return (
    <a
      href={phoneHref}
      className="fixed bottom-6 left-6 z-40 md:hidden w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:bg-accent-hover transition-all duration-300 flex items-center justify-center animate-hero-pulse-glow focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      aria-label={`Call ECS Systems at ${contactInfo.phone}`}
    >
      <Phone className="w-6 h-6" strokeWidth={2} />
    </a>
  );
}
