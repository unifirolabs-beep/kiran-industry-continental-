import { Metadata } from 'next';

interface SEOOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string | string[];
  image?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image = '/opengraph-image.jpg',
  type = 'website',
  noIndex = false,
}: SEOOptions): Metadata {
  const canonicalUrl = `https://www.kiscontinental.com${path === '/' ? '' : path}`;
  
  const keywordsArray = Array.isArray(keywords) 
    ? keywords 
    : keywords 
      ? keywords.split(',').map(k => k.trim()) 
      : [];

  // Default core keywords to include across all pages
  const baseKeywords = [
    'Kiran Industries',
    'Continental',
    'Construction Materials',
    'Building Materials Karnataka',
    'Tile Adhesive India'
  ];

  const mergedKeywords = Array.from(new Set([...keywordsArray, ...baseKeywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    metadataBase: new URL('https://www.kiscontinental.com'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Kiran Industries | Continental',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'Construction Materials Manufacturing',
    authors: [{ name: 'Kiran Industries', url: 'https://www.kiscontinental.com' }],
    creator: 'Kiran Industries',
    publisher: 'Kiran Industries',
  };
}
