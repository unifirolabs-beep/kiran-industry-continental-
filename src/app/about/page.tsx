import React from 'react';
import { buildMetadata } from '@/utils/seo';
import AboutClient from './AboutClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'About Kiran Industries | Continental Dry Mix Mortar',
  description: 'Learn about Kiran Industries, our fully automated Plough Mixer plant in Manvi, Karnataka, and our ISO-certified Continental construction chemicals.',
  path: '/about',
  keywords: 'About Kiran Industries, Continental brand, Manvi plant, dry mix mortar manufacturer, ISO certified construction materials',
});

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Kiran Industries',
      'alternateName': 'Continental',
      'url': 'https://www.kiscontinental.com',
      'logo': 'https://www.kiscontinental.com/favicon.ico',
      'foundingDate': '2024',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Sy. #659/2, Mustor Road, Manvi – 583123',
        'addressLocality': 'Manvi',
        'addressRegion': 'Karnataka',
        'postalCode': '583123',
        'addressCountry': 'India'
      }
    },
    'breadcrumb': {
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
          'name': 'About Us',
          'item': 'https://www.kiscontinental.com/about'
        }
      ]
    }
  };

  return (
    <>
      <JsonLd data={schema} />
      <AboutClient />
    </>
  );
}
