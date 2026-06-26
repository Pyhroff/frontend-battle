import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

/* Mandated typography (asset_package.zip → fonts.pdf):
   JetBrains Mono for headers/code aesthetic, Inter for body/UI. */
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dataflow-ai.vercel.app'),
  title: 'DataFlow AI — Automate Anything at Scale',
  description:
    'DataFlow AI is the next-generation AI-driven data automation platform. Build intelligent workflows, automate 10,000+ tasks per second, and scale without limits.',
  keywords: ['AI automation', 'data pipeline', 'workflow automation', 'AI platform', 'DataFlow'],
  authors: [{ name: 'DataFlow AI' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dataflow-ai.vercel.app',
    siteName: 'DataFlow AI',
    title: 'DataFlow AI — Automate Anything at Scale',
    description:
      'Next-gen AI-driven data automation platform. Intelligent workflows, real-time analytics, enterprise-grade security.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DataFlow AI — Next-Gen AI Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataFlow AI — Automate Anything at Scale',
    description: 'Next-gen AI-driven data automation platform.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
