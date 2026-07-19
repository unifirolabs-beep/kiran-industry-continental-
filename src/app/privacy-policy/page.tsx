import React from 'react';
import { company } from '@/data/company';
import { buildMetadata } from '@/utils/seo';
import JsonLd from '@/components/JsonLd';
import styles from './legal.module.css';

export const metadata = buildMetadata({
  title: 'Privacy Policy | Kiran Industries Continental Brand',
  description: 'Read the privacy policy for Kiran Industries and Continental brand websites, detailing how we collect, use, and protect customer information.',
  path: '/privacy-policy',
  keywords: 'Privacy policy Kiran Industries, legal terms, personal data security, cookies policy',
});

export default function PrivacyPolicyPage() {
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
        'name': 'Privacy Policy',
        'item': 'https://www.kiscontinental.com/privacy-policy'
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Legal</div>
          <h1 className="page-hero__title">Privacy Policy</h1>
          <p className="page-hero__subtitle">Last updated: June 2025</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <h2>1. Information We Collect</h2>
            <p>When you use our website, we may collect personal information such as your name, email address, phone number, and business details when you fill out contact, quote, or dealer inquiry forms.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information collected to respond to your inquiries, provide product quotes, process dealer applications, send relevant product updates (with your consent), and improve our website and services.</p>

            <h2>3. Data Sharing</h2>
            <p>Kiran Industries does not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>

            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>5. Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.</p>

            <h2>6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>

            <h2>7. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information held by us. To exercise these rights, please contact us at {company.contact.email1}.</p>

            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page.</p>

            <h2>9. Contact Us</h2>
            <p>For any questions regarding this Privacy Policy, contact us at:<br />
            <strong>Kiran Industries</strong><br />
            Sy. #659/2, Mustor Road, Manvi – 583123, Raichur District, Karnataka<br />
            Email: {company.contact.email}<br />
            Phone: {company.contact.phone1}</p>
          </div>
        </div>
      </section>
    </>
  );
}
