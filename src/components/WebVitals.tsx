'use client';

import { useReportWebVitals } from 'next/web-vitals';

/**
 * Web Vitals performance monitoring.
 * Reports Core Web Vitals to analytics or console in development.
 *
 * Metrics tracked:
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay) / INP (Interaction to Next Paint)
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
      gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      const color = metric.rating === 'good' ? '🟢' : metric.rating === 'needs-improvement' ? '🟡' : '🔴';
      console.log(`${color} ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`);
    }
  });

  return null;
}
