'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'ecs-cookie-consent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Delay showing to avoid CLS on initial load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem(CONSENT_KEY, 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 animate-slide-up"
    >
      <div className="max-w-4xl mx-auto px-4 pb-4">
        <div className="bg-white rounded-xl border border-border shadow-2xl p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-primary font-semibold mb-1">
                We value your privacy
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed">
                We use essential cookies to ensure our website functions properly.
                No tracking or marketing cookies are used.{' '}
                <Link
                  href="/privacy"
                  className="text-accent hover:text-accent-hover underline"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={acceptEssential}
                className="px-4 py-2 text-sm font-medium text-foreground-muted border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                Essential Only
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
