import React from 'react';
import { buildMetadata } from '@/utils/seo';
import RequestQuoteClient from './RequestQuoteClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'Request a Quote | Premium Continental Building Materials',
  description: 'Get custom pricing for Continental tile adhesives, ready plaster, block joint mortar, and super grouts. Quick estimates for builders and contractors.',
  path: '/request-quote',
  keywords: 'Request quote, tile adhesive price, wholesale dry mix mortar, construction materials cost, custom pricing estimate',
});

export default function RequestQuotePage() {
  const quoteServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Custom Building Materials Quotation',
    'provider': {
      '@type': 'Organization',
      'name': 'Kiran Industries',
      'url': 'https://www.kiscontinental.com'
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Karnataka' },
      { '@type': 'AdministrativeArea', 'name': 'Telangana' },
      { '@type': 'AdministrativeArea', 'name': 'Andhra Pradesh' },
      { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' },
      { '@type': 'AdministrativeArea', 'name': 'Kerala' }
    ],
    'description': 'Provide custom pricing and supply quotes for bulk orders of dry mix mortars, tile adhesives, ready plasters, and super grouts.'
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
        'name': 'Request Quote',
        'item': 'https://www.kiscontinental.com/request-quote'
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, quoteServiceSchema]} />
      <RequestQuoteClient />
    </>
  );
}
