import React from 'react';
import { buildMetadata } from '@/utils/seo';
import ManufacturingClient from './ManufacturingClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'Advanced Manufacturing Facility | Kiran Industries',
  description: 'Discover our state-of-the-art 20 TPH manufacturing plant in Manvi, Karnataka, featuring automated packaging and a dedicated QC laboratory.',
  path: '/manufacturing',
  keywords: 'dry mix plant Manvi, Plough Mixer technology, automated packaging system, 20 TPH manufacturing, quality control lab',
});

export default function ManufacturingPage() {
  const industrialSchema = {
    '@context': 'https://schema.org',
    '@type': 'IndustrialBusiness',
    'name': 'Kiran Industries Manufacturing Plant',
    'description': '20 TPH capacity dry mix mortar plant in Manvi, Raichur District, Karnataka. Fully automated Plough Mixer technology and state-of-the-art quality control laboratory.',
    'image': 'https://www.kiscontinental.com/images/gallery/manufacturing-facility.png',
    'telephone': '+91 99168 05972',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sy. #659/2, Mustor Road, Manvi – 583123',
      'addressLocality': 'Manvi',
      'addressRegion': 'Karnataka',
      'postalCode': '583123',
      'addressCountry': 'India'
    }
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.kiscontinental.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Manufacturing',
        'item': 'https://www.kiscontinental.com/manufacturing'
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, industrialSchema]} />
      <ManufacturingClient />
    </>
  );
}
