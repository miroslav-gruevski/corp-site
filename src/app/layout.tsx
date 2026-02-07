import type { Metadata, Viewport } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo';
import { BackToTop, MobileCallButton } from '@/components/ui';
import Analytics from '@/components/Analytics';
import WebVitals from '@/components/WebVitals';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

const APP_NAME = 'ECS Systems';
const APP_DESCRIPTION =
  'THE FIRE & SECURITY SPECIALISTS. Quality design and engineering, careful installation and excellent aftercare for security systems, fire safety, and automated gates & railings.';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://ecssystems.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: APP_NAME,
  title: {
    default: `${APP_NAME} | THE FIRE & SECURITY SPECIALISTS`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'ECS Systems',
    'fire safety',
    'security systems',
    'intruder alarms',
    'CCTV',
    'access control',
    'gates',
    'railings',
    'SALTO',
    'Sidcup',
    'Kent',
    'London',
  ],
  authors: [{ name: 'ECS Systems', url: 'https://ecssystems.co.uk' }],
  creator: 'ECS Systems',
  publisher: 'ECS Systems',
  category: 'Security',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} | THE FIRE & SECURITY SPECIALISTS`,
    description: APP_DESCRIPTION,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ECS Systems - The Fire & Security Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} | THE FIRE & SECURITY SPECIALISTS`,
    description: APP_DESCRIPTION,
    images: ['/images/og-image.png'],
    creator: '@ecssystems',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_NAME,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Favicon for light/dark mode */}
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-dark.png" sizes="32x32" type="image/png" media="(prefers-color-scheme: dark)" />
        <JsonLd type="organization" />
        <JsonLd type="website" />
        {/* Geo meta tags for Bing local SEO */}
        <meta name="geo.region" content="GB-KEN" />
        <meta name="geo.placename" content="Sidcup" />
        <meta name="geo.position" content="51.4319;0.1022" />
        <meta name="ICBM" content="51.4319, 0.1022" />
      </head>
      <body className={`${lato.className} antialiased bg-white`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:font-medium focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <BackToTop />
        <MobileCallButton />

        <WebVitals />
        <Analytics />
      </body>
    </html>
  );
}
