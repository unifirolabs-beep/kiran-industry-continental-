import React from 'react';
import { buildMetadata } from '@/utils/seo';
import ContactClient from './ContactClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'Contact Kiran Industries | Continental Sales & Support',
  description: 'Get in touch with Kiran Industries for Continental tile adhesives, ready plaster, and block joint mortars. Phone, email, and plant address details.',
  path: '/contact',
  keywords: 'Contact Kiran Industries, Continental customer care, Manvi office address, sales support, construction chemicals phone',
});

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Kiran Industries',
    'description': 'Contact information for Kiran Industries / Continental sales and support.',
    'url': 'https://www.kiscontinental.com/contact',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Kiran Industries',
      'telephone': '+91 99168 05972',
      'email': 'Infoandsalesconnect@kiscontinental.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Sy. #659/2, Mustor Road, Manvi – 583123',
        'addressLocality': 'Manvi',
        'addressRegion': 'Karnataka',
        'postalCode': '583123',
        'addressCountry': 'India'
      }
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
        'name': 'Contact Us',
        'item': 'https://www.kiscontinental.com/contact'
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, contactSchema]} />
      <ContactClient />
    </>
  );
}
