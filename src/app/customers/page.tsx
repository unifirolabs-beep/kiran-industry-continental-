import React from 'react';
import { buildMetadata } from '@/utils/seo';
import CustomersClient from './CustomersClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'Our Customers | Construction Solutions for South India',
  description: 'See how Kiran Industries supplies builders, contractors, and developers across Karnataka, Telangana, Andhra Pradesh, Tamil Nadu, and Kerala.',
  path: '/customers',
  keywords: 'Kiran Industries customers, builders Karnataka, contractors South India, building material distributors, construction company partners',
});

export default function CustomersPage() {
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
        'name': 'Our Customers',
        'item': 'https://www.kiscontinental.com/customers'
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, orgSchema]} />
      <CustomersClient />
    </>
  );
}
