import type { NextConfig } from "next";
import path from 'path';

// Security headers configuration
// Note: CSP is handled via middleware for nonce support
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecssystems.co.uk',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Cache static assets aggressively
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // Fix: Explicitly set Turbopack root to this project directory
  // Prevents Turbopack from using a parent lockfile as workspace root
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

// Only wrap with Sentry in production builds to avoid dev-mode overhead
// @sentry/nextjs adds ~63MB and instruments every component/route at compile time
function getConfig(): NextConfig {
  if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { withSentryConfig } = require('@sentry/nextjs');
    return withSentryConfig(nextConfig, {
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
      silent: !process.env.CI,
      disableLogger: true,
      bundleSizeOptimizations: {
        excludeDebugStatements: true,
        excludeReplayIframe: true,
        excludeReplayShadowDom: true,
      },
    });
  }
  return nextConfig;
}

export default getConfig();
