'use client';

import React from 'react';
import { Row, Col } from 'antd';
import {
  CheckCircleFilled,
  SafetyCertificateOutlined,
  TrophyOutlined,
  TeamOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { vision, mission, whyChooseUs, manufacturing, certifications, stats } from '@/data/company';
import styles from './about.module.css';
export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent} data-aos="fade-up">
            <div className="page-hero__label">About Kiran Industries</div>
            <h1 className="page-hero__title">
              Building Trust Through
              <br />
              <span style={{ color: '#0B65B5' }}>Quality & Innovation</span>
            </h1>
            <p className="page-hero__subtitle">
              A premier construction material manufacturer headquartered in Manvi, Karnataka —
              delivering ISO-certified excellence to builders across South India since 2024.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={12} data-aos="fade-right">
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Who We Are</h2>
              <p className={styles.bodyText}>
                Kiran Industries was founded with a clear mission: to bring international-grade construction
                materials to South India&apos;s rapidly growing construction industry. Operating under the
                <strong> Continental</strong> brand, we manufacture a complete range of dry mix mortars,
                tile adhesives, ready plasters, block joint mortars, and super grouts.
              </p>
              <p className={styles.bodyText}>
                Our fully automated 20 TPH manufacturing plant in Manvi, Raichur District, Karnataka
                is equipped with advanced Plough Mixer technology, automated packaging lines, and a
                dedicated quality control laboratory — ensuring every product meets or exceeds international
                standards.
              </p>
              <p className={styles.bodyText}>
                Today, we serve builders, contractors, architects, tile dealers, and distributors across
                Karnataka, Telangana, Andhra Pradesh, Tamil Nadu, and Kerala, with a network of 100+
                dealer partners and growing.
              </p>
            </Col>
            <Col xs={24} lg={12} data-aos="fade-left">
              <div className={styles.storyImageWrap}>
                <Image
                  src="/images/hero/about-team.png"
                  alt="Kiran Industries Team"
                  fill
                  style={{ objectFit: 'cover', borderRadius: 16 }}
                />
                <div className={styles.storyOverlay}>
                  <div className={styles.storyStatGrid}>
                    {stats.slice(0, 4).map((s) => (
                      <div key={s.label} className={styles.storyStat}>
                        <div className={styles.storyStatVal}>{s.value}{s.suffix}</div>
                        <div className={styles.storyStatLabel}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section--warm">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }} data-aos="fade-up">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Direction</div>
            <h2 className="section-title">Vision & Mission</h2>
          </div>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12} data-aos="fade-right">
              <div className={styles.vmCard}>
                <div className={styles.vmIcon}><TrophyOutlined /></div>
                <h3 className={styles.vmTitle}>Our Vision</h3>
                <p className={styles.vmText}>{vision}</p>
              </div>
            </Col>
            <Col xs={24} md={12} data-aos="fade-left">
              <div className={`${styles.vmCard} ${styles.vmCardGold}`}>
                <div className={`${styles.vmIcon} ${styles.vmIconGold}`}><GlobalOutlined /></div>
                <h3 className={styles.vmTitle}>Our Mission</h3>
                <p className={styles.vmText}>{mission}</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Continental</div>
            <h2 className="section-title section-title--white">Why Choose Kiran Industries?</h2>
          </div>
          <Row gutter={[24, 24]}>
            {whyChooseUs.map((item) => (
              <Col xs={24} sm={12} lg={8} key={item.title} data-aos="fade-up">
                <div className={styles.whyCard}>
                  <CheckCircleFilled className={styles.whyIcon} />
                  <h3 className={styles.whyCardTitle}>{item.title}</h3>
                  <p className={styles.whyCardDesc}>{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="section">
        <div className="container">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={10} data-aos="fade-right">
              <div className="section-label">Infrastructure</div>
              <h2 className="section-title">Manufacturing Facility</h2>
              <p className={styles.bodyText}>
                Our plant at Sy. No. 659/2, Mustor Road, Manvi – 583123 is a benchmark for automated
                construction chemical manufacturing in South India. Every batch is tested in our in-house
                laboratory before dispatch.
              </p>
              <div className={styles.infraList}>
                {manufacturing.infrastructure.map((item) => (
                  <div key={item.label} className={styles.infraItem}>
                    <CheckCircleFilled className={styles.infraIcon} />
                    <div>
                      <div className={styles.infraLabel}>{item.label}</div>
                      <div className={styles.infraDesc}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={24} lg={14} data-aos="fade-left">
              <Row gutter={[12, 12]}>
                <Col span={24}>
                  <div className={styles.mfgImgLarge}>
                    <Image src="/images/gallery/manufacturing-facility.png" alt="Plant" fill style={{ objectFit: 'cover' }} />
                  </div>
                </Col>
                <Col span={12}>
                  <div className={styles.mfgImgSmall}>
                    <Image src="/images/gallery/warehouse.png" alt="Warehouse" fill style={{ objectFit: 'cover' }} />
                  </div>
                </Col>
                <Col span={12}>
                  <div className={styles.mfgImgSmall}>
                    <Image src="/images/gallery/construction-site.png" alt="Site" fill style={{ objectFit: 'cover' }} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section--warm">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Certifications</div>
            <h2 className="section-title">Triple ISO Certified Excellence</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our manufacturing facility maintains three internationally recognized ISO certifications,
              reflecting our commitment to quality, sustainability, and safety.
            </p>
          </div>
          <Row gutter={[24, 24]}>
            {certifications.map((cert) => (
              <Col xs={24} md={8} key={cert.id} data-aos="fade-up">
                <div className={styles.certCard}>
                  <div className={styles.certBadge} style={{ borderColor: cert.color, color: cert.color }}>
                    <SafetyCertificateOutlined />
                    {cert.name}
                  </div>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certDesc}>{cert.description}</p>
                  <div className={styles.certScope}>
                    <span>Scope: </span>{cert.scope}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className={styles.certImgWrap}>
            <Image src="/images/gallery/iso-certifications.png" alt="ISO Certifications" fill style={{ objectFit: 'cover', borderRadius: 16 }} />
          </div>
        </div>
      </section>
    </>
  );
}
