'use client';

import { useEffect, useState, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center animate-fade-in focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2} />
    </button>
  );
}
