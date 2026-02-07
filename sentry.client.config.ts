import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Only enable in production
  enabled: process.env.NODE_ENV === 'production',

  // Performance monitoring
  tracesSampleRate: 0.1, // 10% of transactions

  // Session replay (optional — captures user sessions on errors)
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,

  // Don't send PII
  sendDefaultPii: false,

  // Environment
  environment: process.env.NODE_ENV,
});
