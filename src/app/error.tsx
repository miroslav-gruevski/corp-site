'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import Link from 'next/link';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';
import { Button } from '@/components/ui';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report to Sentry in production
    Sentry.captureException(error);

    if (process.env.NODE_ENV === 'development') {
      console.error('Application error:', error);
    }
  }, [error]);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 rounded-full bg-error-bg flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-error" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">Something Went Wrong</h1>
        <p className="text-foreground-muted mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs sm:max-w-none mx-auto">
          <Button variant="primary" size="md" onClick={reset} className="w-full sm:w-48">
            <RefreshCcw className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Try Again
          </Button>
          <Link href="/" className="w-full sm:w-48">
            <Button variant="outline" size="md" className="w-full">
              <Home className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
