'use client';

import React from 'react';
import { Row, Col } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';
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
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <div>
            <h3 className={styles.ctaTitle}>Ready to Build Stronger?</h3>
            <p className={styles.ctaSubtitle}>Get a free quote or find a dealer near you today.</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/request-quote" className={styles.ctaBtnPrimary}>
              Request a Quote
            </Link>
            <Link href="/dealers" className={styles.ctaBtnOutline}>
              Find Dealers
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.footerMain}>
        <div className={styles.footerInner}>
          <Row gutter={0}>
            {/* Brand Column */}
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className={styles.brand}>
                <Link href="/" className={styles.logoWrapper}>
                  <div className={styles.logoImageWrapper}>
                    <Image
                      src="/logo/image.png"
                      alt="Kiran Industries"
                      width={44}
                      height={44}
                      className={styles.logoIcon}
                    />
                  </div>
                  <div className={styles.logoTextContainer}>
                    <span className={styles.logoBrandText}>KIRAN</span>
                    <span className={styles.logoSubText}>INDUSTRIES</span>
                  </div>
                </Link>
                <p className={styles.brandDesc}>
                  South India&apos;s premier manufacturer of tile adhesives, ready plaster, block joint mortar,
                  and super grouts. Triple ISO certified excellence.
                </p>
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

            {/* Products */}
            <Col xs={24} sm={12} md={5} lg={5}>
              <h4 className={styles.colTitle}>Products</h4>
              <ul className={styles.linkList}>
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      <RightOutlined className={styles.linkArrow} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Quick Links */}
            <Col xs={24} sm={12} md={4} lg={4}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      <RightOutlined className={styles.linkArrow} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Contact */}
            <Col xs={24} sm={24} md={7} lg={7}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <EnvironmentOutlined className={styles.contactIcon} />
                  <span>Sy. #659/2, Mustor Road,<br />Manavi – 583123,<br />Raichur District, Karnataka</span>
                </div>
                <div className={styles.contactItem}>
                  <PhoneOutlined className={styles.contactIcon} />
                  <div>
                    <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`} className={styles.contactLink}>
                      {company.contact.phone1}
                    </a>
                    <br />
                    <a href={`tel:${company.contact.phone2.replace(/\s+/g, '')}`} className={styles.contactLink}>
                      {company.contact.phone2}
                    </a>
                    <br />
                    <a href={`tel:${company.contact.phone3.replace(/\s+/g, '')}`} className={styles.contactLink}>
                      {company.contact.phone3}
                    </a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <MailOutlined className={styles.contactIcon} />
                  <div>
                    <a href={`mailto:${company.contact.email1}`} className={styles.contactLink}>
                      {company.contact.email1}
                    </a>
                    <br />
                    <a href={`mailto:${company.contact.email2}`} className={styles.contactLink}>
                      {company.contact.email2}
                    </a>
                    <br />
                    <a href={`mailto:${company.contact.email3}`} className={styles.contactLink}>
                      {company.contact.email3}
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Kiran Industries. All rights reserved. Brand: Continental.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.dot}>·</span>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
            <span className={styles.dot}>·</span>
            <Link href="/downloads" className={styles.legalLink}>Downloads</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
