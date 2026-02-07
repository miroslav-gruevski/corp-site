import Script from 'next/script';

/**
 * Analytics component — renders GA4 or Plausible script tags.
 * Configure via environment variables:
 * - NEXT_PUBLIC_GA_MEASUREMENT_ID: Google Analytics 4 measurement ID (e.g., G-XXXXXXXXXX)
 * - NEXT_PUBLIC_PLAUSIBLE_DOMAIN: Plausible domain (e.g., ecssystems.co.uk)
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
              });
            `}
          </Script>
        </>
      )}

      {/* Plausible Analytics (privacy-friendly alternative) */}
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
