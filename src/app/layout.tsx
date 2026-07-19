import React from 'react';
import type { Metadata } from 'next';
import Providers from './Providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "KI'S Continental by Kiran Industries | Premium Tile Adhesives & Dry Mix Products",
  description:
    "KI'S Continental by Kiran Industries is India's premium tile adhesive manufacturer & dry mix mortar brand. ISO-certified manufacturer of wall putty, ready mix plaster, block joining mortar, and waterproofing solutions.",
  keywords: 'tile adhesive manufacturer, ceramic tile adhesive, wall tile adhesive, floor tile adhesive, dry mix mortar, construction chemicals, building materials, waterproofing products, wall putty manufacturer, block joining mortar, premium tile adhesive india, KI\'S Continental, kiran industries',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.kiscontinental.com/#organization",
                  "name": "Kiran Industries",
                  "alternateName": "KI'S Continental",
                  "url": "https://www.kiscontinental.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.kiscontinental.com/logo.png"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 99168 05972",
                    "contactType": "sales",
                    "email": "Infoandsalesconnect@kiscontinental.com",
                    "areaServed": "IN",
                    "availableLanguage": ["en", "kn", "te", "hi"]
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.kiscontinental.com/#localbusiness",
                  "name": "KI'S Continental",
                  "parentOrganization": {
                    "@id": "https://www.kiscontinental.com/#organization"
                  },
                  "url": "https://www.kiscontinental.com/",
                  "image": "https://www.kiscontinental.com/images/factory-facade.jpg",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sy. #659/2, Mustor Road",
                    "addressLocality": "Manvi",
                    "addressRegion": "Karnataka",
                    "postalCode": "583123",
                    "addressCountry": "IN"
                  },
                  "telephone": "+91 99168 05972",
                  "email": "Infoandsalesconnect@kiscontinental.com",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 15.964923,
                    "longitude": 77.042824
                  },
                  "knowsAbout": [
                    "Tile Adhesive Manufacturing",
                    "Dry Mix Mortar",
                    "Construction Chemicals",
                    "Waterproofing Solutions",
                    "Wall Putty",
                    "Ready Mix Plaster",
                    "Block Joining Mortar",
                    "Building Materials"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
