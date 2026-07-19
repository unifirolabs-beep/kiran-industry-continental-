import React from 'react';
import { buildMetadata } from '@/utils/seo';
import CareerClient from './CareerClient';
import JsonLd from '@/components/JsonLd';
import { openPositions } from '@/data/company';

export const metadata = buildMetadata({
  title: 'Careers at Kiran Industries | Join the Continental Team',
  description: 'Explore job openings at Kiran Industries. Build your career with South India\'s leading dry-mix mortar and tile adhesive manufacturer in Karnataka.',
  path: '/career',
  keywords: 'Careers Kiran Industries, jobs in Karnataka, sales manager job, civil engineer jobs, dry mix mortar jobs, concrete plant operator',
});

export default function CareerPage() {
  const jobPostings = openPositions.map((job) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    'title': job.title,
    'description': `${job.description}\n\nDepartment: ${job.department}\nExperience: ${job.experience}\nQualification: ${job.qualification}\n\nResponsibilities:\n${job.responsibilities.join('\n')}\n\nRequirements:\n${job.requirements.join('\n')}`,
    'datePosted': '2025-06-01',
    'validThrough': '2026-12-31',
    'employmentType': 'FULL_TIME',
    'hiringOrganization': {
      '@type': 'Organization',
      'name': 'Kiran Industries',
      'sameAs': 'https://www.kiscontinental.com',
      'logo': 'https://www.kiscontinental.com/favicon.ico'
    },
    'jobLocation': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': job.location,
        'addressRegion': job.location === 'Bengaluru' || job.location === 'Hubli' || job.location === 'Dharwad' || job.location === 'Belagavi' || job.location === 'Bijapur' || job.location === 'Koppala' || job.location === 'Kalaburagi' || job.location === 'Bidar' || job.location === 'Raichur' ? 'Karnataka' : 'South India',
        'addressCountry': 'India'
      }
    }
  }));

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
        'name': 'Careers',
        'item': 'https://www.kiscontinental.com/career'
      }
    ]
  };

  return (
    <>
      <JsonLd data={[breadcrumb, ...jobPostings]} />
      <CareerClient />
    </>
  );
}
