import { MetadataRoute } from 'next';
import { products } from '@/data/products';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kiscontinental.com';

  const staticPages = [
    { url: '', priority: 1.0 },
    { url: '/products', priority: 0.9 },
    { url: '/about', priority: 0.8 },
    { url: '/manufacturing', priority: 0.8 },
    { url: '/contact', priority: 0.8 },
    { url: '/dealers', priority: 0.8 },
    { url: '/request-quote', priority: 0.8 },
    { url: '/solutions', priority: 0.8 },
    { url: '/career', priority: 0.7 },
    { url: '/certifications', priority: 0.7 },
    { url: '/customers', priority: 0.7 },
    { url: '/downloads', priority: 0.7 },
    { url: '/gallery', priority: 0.7 },
    { url: '/privacy-policy', priority: 0.5 },
    { url: '/terms', priority: 0.5 },
  ];

  const productPages = products.map((p) => ({
    url: `/products/${p.id}`,
    priority: 0.8,
  }));

  const allPages = [...staticPages, ...productPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.priority >= 0.8 ? 'weekly' as const : 'monthly' as const,
    priority: page.priority,
  }));
}
