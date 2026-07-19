import React from 'react';
import { buildMetadata } from '@/utils/seo';
import HomeClient from './HomeClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'Kiran Industries | Continental Construction Materials',
  description: 'Kiran Industries manufactures Continental brand tile adhesives, ready plaster, and dry mix mortars at our 20 TPH plant in Manvi, Karnataka, India.',
  path: '/',
  keywords: 'Kiran Industries, Continental Tile Adhesive, Tile Adhesive Manufacturer Karnataka, Dry Mix Mortar Manufacturer, Construction Chemicals, Construction Materials, KIS Continental, kis continental, kiscontinental, Continental, kis',
});

export default function HomePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.kiscontinental.com/#organization',
        'name': 'Kiran Industries',
        'alternateName': 'Continental',
        'url': 'https://www.kiscontinental.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.kiscontinental.com/favicon.ico'
        },
        'foundingDate': '2024',
        'sameAs': [
          'https://www.instagram.com/#',
          'https://www.facebook.com/#',
          'https://www.linkedin.com/#'
        ]
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.kiscontinental.com/#localbusiness',
        'name': 'Kiran Industries - Continental Brand',
        'image': 'https://www.kiscontinental.com/opengraph-image.jpg',
        'telephone': '+91 99168 05972',
        'email': 'Infoandsalesconnect@kiscontinental.com',
        'url': 'https://www.kiscontinental.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Sy. #659/2, Mustor Road, Manvi – 583123',
          'addressLocality': 'Manvi',
          'addressRegion': 'Karnataka',
          'postalCode': '583123',
          'addressCountry': 'India'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '15.964923',
          'longitude': '77.042824'
        },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Karnataka' },
          { '@type': 'AdministrativeArea', 'name': 'Telangana' },
          { '@type': 'AdministrativeArea', 'name': 'Andhra Pradesh' },
          { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' },
          { '@type': 'AdministrativeArea', 'name': 'Kerala' }
        ]
      },
      {
        '@type': 'Manufacturer',
        '@id': 'https://www.kiscontinental.com/#manufacturer',
        'name': 'Kiran Industries (Continental)',
        'description': 'Premium manufacturer of dry mix mortars, tile adhesives, ready plasters, and construction chemicals.',
        'logo': 'https://www.kiscontinental.com/favicon.ico',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Sy. #659/2, Mustor Road, Manvi – 583123',
          'addressLocality': 'Manvi',
          'addressRegion': 'Karnataka',
          'postalCode': '583123',
          'addressCountry': 'India'
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={schemaGraph} />
      <HomeClient />
    </>
  );
}
