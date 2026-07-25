import type { Metadata } from 'next';
import { buildMetadata } from '@/utils/seo';
import ProductsClient from './ProductClient';

export const metadata = buildMetadata({
  title: 'Products',
  description: 'Products of Kiran Industries, Continental Brand',
  path: '/products',
  keywords: 'Products, kis products, kiran industries products, continental products,KIS Tile Adhesives, KIS Dry Mix Mortars,KIS Block Joint Adhesives, KIS Ready Plaster, KIS Super Grout,KIS PU Adhesives, KIS Construction Chemicals',
});

export default function ProductsPage() {
  return <ProductsClient />;
}