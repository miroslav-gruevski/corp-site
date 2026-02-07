import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Generate a nonce for CSP
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Build CSP header with nonce
  const cspDirectives = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: 'unsafe-inline'`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    `font-src 'self' https://fonts.gstatic.com`,
    `img-src 'self' data: https: blob:`,
    `connect-src 'self' https: https://*.ingest.sentry.io https://*.google-analytics.com https://*.analytics.google.com https://plausible.io`,
    `frame-src https://www.google.com https://maps.google.com https://www.openstreetmap.org`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `object-src 'none'`,
  ];

  // Only add upgrade-insecure-requests in production
  if (process.env.NODE_ENV === 'production') {
    cspDirectives.push(`upgrade-insecure-requests`);
  }

  const cspHeader = cspDirectives.join('; ');

  // Set nonce in request headers so it can be read by Server Components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set CSP header on response
  response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}

export const config = {
  matcher: [
    // Match all routes except static files and API
    {
      source: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
