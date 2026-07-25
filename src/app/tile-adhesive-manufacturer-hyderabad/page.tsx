import React from 'react';
import type { Metadata } from 'next';
import { seoLandingConfigs } from '@/data/seoLandings';
import SeoLandingTemplate from '@/components/SeoLandingTemplate';

const config = seoLandingConfigs['tile-adhesive-manufacturer-hyderabad'];

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  keywords: config.metaKeywords,
};

export default function Page() {
  return <SeoLandingTemplate config={config} />;
}
