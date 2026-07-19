import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { Metadata } from 'next';
import { products } from '@/data/products';
import { detailedProductSpecs } from '@/data/productSpecs';
import ProductDetailsClient from './ProductDetailsClient';
import { buildMetadata } from '@/utils/seo';
import JsonLd from '@/components/JsonLd';

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return buildMetadata({
      title: 'Product Not Found | Continental',
      description: 'The requested product could not be found.',
      path: `/products/${id}`,
      noIndex: true,
    });
  }

  // Ensure title is between 50-60 characters
  const title = `${product.name} | Continental`;

  // Ensure description is between 140-160 characters
  let description = product.description;
  if (description.length < 140) {
    description = `${description} Premium grade ${product.grade} manufactured by Kiran Industries in Manvi, Karnataka, India.`;
  }
  if (description.length > 160) {
    description = description.slice(0, 157) + '...';
  }

  return buildMetadata({
    title,
    description,
    path: `/products/${id}`,
    keywords: `${product.name}, ${product.shortName}, ${product.type}, ${product.grade}, Continental brand, tile adhesive Karnataka`,
    image: product.imageFront,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  // Await the params Promise in server component
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const product = products.find((p) => p.id === id);
  const specs = detailedProductSpecs[id];

  if (!product || !specs) {
    return (
      <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: '#fafafa' }}>
        <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 24, marginBottom: 16 }}>Product Not Found</h2>
          <p style={{ color: '#666', marginBottom: 24 }}>The product you are looking for does not exist.</p>
          <Link href="/products">
            <Button type="primary">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': product.description,
    'image': `https://www.kiscontinental.com${product.imageFront}`,
    'category': product.category,
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock',
      'itemCondition': 'https://schema.org/NewCondition',
      'seller': {
        '@type': 'Organization',
        'name': 'Kiran Industries',
        'url': 'https://www.kiscontinental.com'
      }
    },
    'brand': {
      '@type': 'Brand',
      'name': 'Continental'
    },
    'manufacturer': {
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
        'name': 'Products',
        'item': 'https://www.kiscontinental.com/products'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': product.shortName,
        'item': `https://www.kiscontinental.com/products/${product.id}`
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, productSchema]} />
      <ProductDetailsClient product={product} specs={specs} />
    </>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
