import React from 'react';
import { buildMetadata } from '@/utils/seo';
import SolutionsClient from './SolutionsClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'Construction Solutions | Residential & Commercial Solutions',
  description: 'Tailored material solutions for residential, commercial, industrial, and infrastructure projects across South India using Continental products.',
  path: '/solutions',
  keywords: 'construction solutions, residential building materials, commercial tile adhesives, industrial mortar, infrastructure materials',
});

export default function SolutionsPage() {
  const solutionsServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Continental Construction Material Solutions',
    'provider': {
      '@type': 'Organization',
      'name': 'Kiran Industries',
      'url': 'https://www.kiscontinental.com'
    },
    'description': 'Tailored material solutions and application specifications for residential, commercial, industrial, and infrastructure building projects.'
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
        'name': 'Solutions',
        'item': 'https://www.kiscontinental.com/solutions'
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, solutionsServiceSchema]} />
      <SolutionsClient />
    </>
  );
}
