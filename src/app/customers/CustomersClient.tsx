'use client';

import React from 'react';
import { Row, Col, Rate, Carousel } from 'antd';
import { HomeOutlined, BankOutlined, ToolOutlined, ApartmentOutlined, FlagOutlined, TeamOutlined } from '@ant-design/icons';
import { industries } from '@/data/company';
import { testimonials } from '@/data/testimonials';
import Link from 'next/link';
import styles from './customers.module.css';

const industryIcons: Record<string, React.ReactNode> = {
  'HomeOutlined': <HomeOutlined />,
  'BankOutlined': <BankOutlined />,
  'ToolOutlined': <ToolOutlined />,
  'ApartmentOutlined': <ApartmentOutlined />,
  'FlagOutlined': <FlagOutlined />,
  'BuildOutlined': <BankOutlined />,
  'TeamOutlined': <TeamOutlined />,
  'ShopOutlined': <BankOutlined />,
};

export default function CustomersPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Our Customers</div>
          <h1 className="page-hero__title">
            Trusted by Builders
            <br />
            <span style={{ color: '#0B65B5' }}>Across South India</span>
          </h1>
          <p className="page-hero__subtitle">
            From residential builders to large infrastructure contractors — Continental products power
            construction projects across 5 states.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Industries Served</div>
            <h2 className="section-title">Who We Serve</h2>
          </div>
          <div className={styles.industriesGrid}>
            {industries.map((ind) => (
              <div key={ind.label} className={styles.industryCard}>
                <div className={styles.industryIcon}>
                  {industryIcons[ind.icon] || <TeamOutlined />}
                </div>
                <div className={styles.industryLabel}>{ind.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--dark">
        <div className="container">
          <Row gutter={[32, 32]}>
            {[
              { value: '5+', label: 'States', desc: 'Karnataka, Telangana, Andhra Pradesh, Tamil Nadu, Kerala' },
              { value: '100+', label: 'Dealer Partners', desc: 'Extensive dealer network across South India' },
              { value: '500+', label: 'Projects Served', desc: 'Residential, commercial, and infrastructure projects' },
              { value: '10,000+', label: 'Satisfied Customers', desc: 'Builders, contractors, and end users' },
            ].map((s) => (
              <Col xs={12} md={6} key={s.label}>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                  <div className={styles.statDesc}>{s.desc}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--warm">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>What They Say</div>
            <h2 className="section-title">Customer Testimonials</h2>
          </div>
          <Row gutter={[24, 24]}>
            {testimonials.map((t) => (
              <Col xs={24} md={12} lg={8} key={t.id}>
                <div className={styles.testimonialCard}>
                  <Rate disabled defaultValue={t.rating} style={{ fontSize: 13, color: '#0B65B5' }} />
                  <p className={styles.testimonialText}>&ldquo;{t.review}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.avatar}>{t.avatar}</div>
                    <div>
                      <div className={styles.authorName}>{t.name}</div>
                      <div className={styles.authorRole}>{t.role}, {t.company}</div>
                      <div className={styles.authorLocation}>{t.location}</div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>Join Our Growing Customer Base</h2>
          <p className={styles.ctaSubtitle}>Experience the Continental difference for your next project.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact"><button className={styles.ctaPrimary}>Contact Us Today</button></Link>
            <Link href="/dealers"><button className={styles.ctaOutline}>Become a Dealer</button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
