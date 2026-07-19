import React from 'react';
import { buildMetadata } from '@/utils/seo';
import DealersClient from './DealersClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'Become a Dealer | Partner with Continental Adhesives',
  description: 'Join a network of 100+ dealer partners. Distribute Continental tile adhesives, ready plasters, and dry mix mortars across South India states.',
  path: '/dealers',
  keywords: 'Become a dealer, tile adhesive dealership, building material distributor, Continental dealer network, retail partnership Karnataka',
});

export default function DealersPage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Kiran Industries',
    'url': 'https://www.kiscontinental.com',
    'logo': 'https://www.kiscontinental.com/favicon.ico',
    'description': 'Kiran Industries manufacturers premium Continental brand tile adhesives, dry mix mortars, ready plasters, and super grouts.'
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
        'name': 'Dealers',
        'item': 'https://www.kiscontinental.com/dealers'
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, orgSchema]} />
      <DealersClient />
    </>
  );
}
