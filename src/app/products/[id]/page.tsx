import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { products } from '@/data/products';
import { detailedProductSpecs } from '@/data/productSpecs';
import ProductDetailsClient from './ProductDetailsClient';

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
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

  return <ProductDetailsClient product={product} specs={specs} />;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
