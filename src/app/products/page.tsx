import React from 'react';
import { buildMetadata } from '@/utils/seo';
import ProductsClient from './ProductsClient';
import JsonLd from '@/components/JsonLd';
import { products } from '@/data/products';

export const metadata = buildMetadata({
  title: 'Construction Materials | Tile Adhesives | Continental',
  description: 'Explore the Continental range of premium building materials, including tile adhesives, ready plasters, block joint mortars, and super grouts.',
  path: '/products',
  keywords: 'Continental tile adhesive, dry mix mortar products, ready plaster, block joint mortar, super grouts, construction solutions',
});

export default function ProductsPage() {
  const productsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Continental Construction Materials Range',
    'description': 'Product range by Kiran Industries including Tile Adhesives (Type 1 to 5), Ready Plaster, Block Joint Mortar, and Super Grouts.',
    'url': 'https://www.kiscontinental.com/products',
    'numberOfItems': products.length,
    'itemListElement': products.map((p, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'item': {
        '@type': 'Product',
        'name': p.name,
        'description': p.description,
        'image': `https://www.kiscontinental.com${p.imageFront}`,
        'url': `https://www.kiscontinental.com/products/${p.id}`,
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'itemCondition': 'https://schema.org/NewCondition'
        }
      }
    }))
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
        'name': 'Products',
        'item': 'https://www.kiscontinental.com/products'
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, productsListSchema]} />
      <ProductsClient />
    </>
  );
}
