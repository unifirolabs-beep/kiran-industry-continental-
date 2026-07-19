import React from 'react';
import { buildMetadata } from '@/utils/seo';
import GalleryClient from './GalleryClient';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  title: 'Media Gallery | Kiran Industries Manufacturing Plant',
  description: 'View photos of our fully automated manufacturing facility, warehouse, quality control lab, and projects using Continental construction materials.',
  path: '/gallery',
  keywords: 'Kiran Industries gallery, manufacturing plant photos, automated dry mix mixer, construction site images, warehouse storage',
});

export default function GalleryPage() {
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    'name': 'Kiran Industries Manufacturing Facility Gallery',
    'description': 'Media gallery displaying our fully automated 20 TPH manufacturing facility, warehouse, research lab, and construction projects across South India.',
    'url': 'https://www.kiscontinental.com/gallery',
    'image': [
      'https://www.kiscontinental.com/images/gallery/manufacturing-facility.png',
      'https://www.kiscontinental.com/images/gallery/warehouse.png',
      'https://www.kiscontinental.com/images/gallery/construction-site.png',
      'https://www.kiscontinental.com/images/gallery/iso-certifications.png'
    ]
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
        'name': 'Media Gallery',
        'item': 'https://www.kiscontinental.com/gallery'
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, gallerySchema]} />
      <GalleryClient />
    </>
  );
}
