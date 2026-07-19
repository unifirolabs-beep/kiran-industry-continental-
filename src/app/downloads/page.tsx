import React from 'react';
import { buildMetadata } from '@/utils/seo';
import DownloadsClient from './DownloadsClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'Product Catalogs & Technical Data Sheets | Continental',
  description: 'Download brochures, technical data sheets (TDS), and quality certificates for Continental tile adhesives, ready plasters, and super grouts.',
  path: '/downloads',
  keywords: 'Continental product catalog, technical data sheets, tile adhesive brochure pdf, MSDS construction chemicals download',
});

export default function DownloadsPage() {
  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Downloads | Technical Catalogues & Data Sheets',
    'description': 'Brochures, technical data sheets (TDS), and ISO certificates for Continental building materials.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Kiran Industries',
      'logo': 'https://www.kiscontinental.com/favicon.ico'
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
        'name': 'Downloads',
        'item': 'https://www.kiscontinental.com/downloads'
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, webpageSchema]} />
      <DownloadsClient />
    </>
  );
}
