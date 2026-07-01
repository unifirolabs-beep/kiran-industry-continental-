const fs = require('fs');

const content = `'use client';

import React from 'react';
import { Row, Col } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, InstagramOutlined, FacebookOutlined, LinkedinOutlined, YoutubeOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const productLinks = [
  { label: 'Tile Adhesive Type 1', href: '/products' },
  { label: 'Tile Adhesive Type 2', href: '/products' },
  { label: 'Tile Adhesive Type 3', href: '/products' },
  { label: 'Tile Adhesive Type 4', href: '/products' },
  { label: 'Tile Adhesive Type 5', href: '/products' },
  { label: 'Ready Plaster', href: '/products' },
  { label: 'Block Joint Mortar', href: '/products' },
  { label: 'Super Grouts', href: '/products' },
];

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <div>
            <h3 className={styles.ctaTitle}>Ready to Build Stronger?</h3>
            <p className={styles.ctaSubtitle}>Get a free quote or find a dealer near you today.</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/request-quote" className={styles.ctaBtnPrimary}>Request a Quote</Link>
            <Link href="/dealers" className={styles.ctaBtnOutline}>Find Dealers</Link>
          </div>
        </div>
      </div>
      <div className={styles.footerMain}>
        <div className={styles.footerInner}>
          <Row gutter={[48, 40]}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className={styles.brand}>
                <Link href="/" className={styles.logo}>
                  <Image src="/logo/image.png" alt="Kiran Industries" width={180} height={64} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} unoptimized />
                </Link>
                <p className={styles.brandDesc}>South India\\'s premier manufacturer of tile adhesives, ready plaster, block joint mortar, and super grouts. Triple ISO certified excellence.</p>
                <div className={styles.certs}>
                  <span className={styles.certBadge}>ISO 9001</span>
                  <span className={styles.certBadge}>ISO 14001</span>
                  <span className={styles.certBadge}>ISO 45001</span>
                </div>
                <div className={styles.socials}>
                  <a href="#" aria-label="Instagram" className={styles.socialIcon}><InstagramOutlined /></a>
                  <a href="#" aria-label="Facebook" className={styles.socialIcon}><FacebookOutlined /></a>
                  <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><LinkedinOutlined /></a>
                  <a href="#" aria-label="YouTube" className={styles.socialIcon}><YoutubeOutlined /></a>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={5} lg={5}>
              <h4 className={styles.colTitle}>Products</h4>
              <ul className={styles.linkList}>
                {productLinks.map((link) => (
                  <li key={link.label}><Link href={link.href} className={styles.footerLink}><RightOutlined className={styles.linkArrow} />{link.label}</Link></li>
                ))}
              </ul>
            </Col>
            <Col xs={24} sm={12} md={4} lg={4}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map((link) => (
                  <li key={link.label}><Link href={link.href} className={styles.footerLink}><RightOutlined className={styles.linkArrow} />{link.label}</Link></li>
                ))}
              </ul>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}><EnvironmentOutlined className={styles.contactIcon} /><span>Sy. 659/2, Mustor Road, Manavi 583123, Raichur Dist, Karnataka</span></div>
                <div className={styles.contactItem}><PhoneOutlined className={styles.contactIcon} /><div><a href="tel:+919620527147" className={styles.contactLink}>+91 96205 27147</a><br /><a href="tel:+919611459870" className={styles.contactLink}>+91 96114 59870</a></div></div>
                <div className={styles.contactItem}><MailOutlined className={styles.contactIcon} /><a href="mailto:kiranindustries2024@gmail.com" className={styles.contactLink}>kiranindustries2024@gmail.com</a></div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>2025 Kiran Industries. All rights reserved. Brand: Continental.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.dot}> · </span>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
            <span className={styles.dot}> · </span>
            <Link href="/downloads" className={styles.legalLink}>Downloads</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
`;

fs.writeFileSync('src/components/Footer.tsx', content, 'utf8');
console.log('Footer.tsx fixed successfully');
