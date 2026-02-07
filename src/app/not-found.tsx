import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <Search className="w-10 h-10 text-accent" strokeWidth={1.5} />
        </div>
        <h1 className="text-6xl font-black text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-primary mb-4">Page Not Found</h2>
        <p className="text-foreground-muted mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          Try navigating back to our homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs sm:max-w-md mx-auto">
          <Link href="/" className="w-full sm:flex-1">
            <Button variant="primary" size="md" className="w-full">
              <Home className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Go to Homepage
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:flex-1">
            <Button variant="outline" size="md" className="w-full">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Back to previous page
          </Link>
        </div>
      </div>
    </section>
  );
}
