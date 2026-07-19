import React from 'react';
import { buildMetadata } from '@/utils/seo';
import CertificationsClient from './CertificationsClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'Quality Certifications | ISO 9001 & 14001 | Continental',
  description: 'Kiran Industries holds ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications for our manufacturing plant in Manvi, Karnataka, India.',
  path: '/certifications',
  keywords: 'ISO certifications, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, construction materials quality, safety standards',
});

export default function CertificationsPage() {
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
        'name': 'Certifications',
        'item': 'https://www.kiscontinental.com/certifications'
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <CertificationsClient />
    </>
  );
}
