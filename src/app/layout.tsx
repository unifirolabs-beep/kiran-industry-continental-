import React from 'react';
import type { Metadata } from 'next';
import Providers from './Providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kiscontinental.com'),
  title: {
    default: 'Kiran Industries | Continental — Premium Tile Adhesives & Dry Mix Products',
    template: '%s | Continental',
  },
  description:
    'Kiran Industries manufactures Continental brand tile adhesives, ready plaster, block joint mortar and super grouts. ISO-certified, 20 TPH capacity plant in Manvi, Karnataka.',
  keywords: ['tile adhesive', 'continental', 'kiran industries', 'ready plaster', 'block joint mortar', 'super grout', 'construction chemicals', 'kis', 'continental tile adhesive', 'continental dry mix mortar', 'continental ready plaster', 'continental construction chemicals', 'continental construction materials', 'kis continental', 'kis continental tile adhesive', 'kis continental dry mix mortar', 'kis continental ready plaster', 'kis continental construction chemicals', 'kis continental construction materials', 'continental', 'kis', 'kis continental construction', 'kis continental'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1A1A1A" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
