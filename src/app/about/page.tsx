import type { Metadata } from 'next';
import { buildMetadata } from '@/utils/seo';
import AboutClient from './AboutClient';

export const metadata: Metadata = buildMetadata({
  title: 'About Kiran Industries | Continental Construction Materials',
  description: 'Learn about Kiran Industries, a premier construction material manufacturer in Karnataka delivering ISO-certified tile adhesives and dry mix mortars.',
  path: '/about',
  keywords: 'About Kiran Industries, Continental brand, construction materials manufacturer, tile adhesive supplier, Karnataka, ISO certified',
});

export default function AboutPage() {
  return <AboutClient />;
}
