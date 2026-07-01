import React from 'react';
import { company } from '@/data/company';
import styles from '../privacy-policy/legal.module.css';

export const metadata = {
  title: 'Terms of Service — Kiran Industries | Continental',
  description: 'Terms of Service for Kiran Industries website and Continental brand products.',
};

export default function TermsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Legal</div>
          <h1 className="page-hero__title">Terms of Service</h1>
          <p className="page-hero__subtitle">Last updated: June 2025</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the Kiran Industries website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>

            <h2>2. Use of Website</h2>
            <p>This website is provided for informational and business inquiry purposes only. You agree to use the website lawfully and not to misuse, copy, or redistribute any content without prior written permission.</p>

            <h2>3. Product Information</h2>
            <p>Product specifications, coverage rates, and application guidelines provided on this website are for general guidance only. Actual results may vary based on site conditions, application methods, and substrate quality. Always refer to the product Technical Data Sheet (TDS) for precise specifications.</p>

            <h2>4. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, product names, and design elements, is the property of Kiran Industries and protected under applicable intellectual property laws. Unauthorized use is prohibited.</p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>This website is provided "as is" without any warranties of any kind, express or implied. Kiran Industries does not warrant that the website will be error-free or uninterrupted.</p>

            <h2>6. Limitation of Liability</h2>
            <p>Kiran Industries shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or our products beyond the product's purchase price.</p>

            <h2>7. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of the State of Karnataka, India. Any disputes shall be subject to the exclusive jurisdiction of courts in Raichur, Karnataka.</p>

            <h2>8. Contact</h2>
            <p>For questions about these terms:<br />
            <strong>Kiran Industries</strong><br />
            {company.contact.email} | {company.contact.phone1}</p>
          </div>
        </div>
      </section>
    </>
  );
}
