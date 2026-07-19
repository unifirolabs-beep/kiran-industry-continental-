import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kiran Industries - Continental Brand',
    short_name: 'Continental',
    description: 'Premium manufacturer of dry mix mortars, tile adhesives, ready plasters, and construction chemicals.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A1A1A',
    theme_color: '#0B65B5',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
