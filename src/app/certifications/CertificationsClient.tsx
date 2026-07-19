'use client';

import React from 'react';
import { Row, Col } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { certifications } from '@/data/company';
import Image from 'next/image';
import styles from './certifications.module.css';

export default function CertificationsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Certifications</div>
          <h1 className="page-hero__title">Triple ISO<br /><span style={{ color: '#0B65B5' }}>Certified Excellence</span></h1>
          <p className="page-hero__subtitle">Our manufacturing facility maintains three internationally recognized ISO certifications — a testament to our commitment to quality, environment, and safety.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Row gutter={[32, 32]} style={{ marginBottom: 64 }}>
            {certifications.map((cert) => (
              <Col xs={24} md={8} key={cert.id}>
                <div className={styles.certCard} style={{ borderTopColor: cert.color }}>
                  <div className={styles.certIcon} style={{ color: cert.color }}><SafetyCertificateOutlined /></div>
                  <div className={styles.certCode} style={{ color: cert.color }}>{cert.name}</div>
                  <h2 className={styles.certTitle}>{cert.title}</h2>
                  <p className={styles.certDesc}>{cert.description}</p>
                  <div className={styles.certScope}><strong>Scope:</strong> {cert.scope}</div>
                </div>
              </Col>
            ))}
          </Row>

          <div className={styles.certImageWrap}>
            <Image src="/images/gallery/iso-certifications.png" alt="ISO Certificates" fill style={{ objectFit: 'cover', borderRadius: 16 }} />
            <div className={styles.certImageOverlay}>
              <h3 className={styles.certImageTitle}>Certified for Quality, Environment & Safety</h3>
            </div>
          </div>

          <div className={styles.whySection}>
            <h2 className="section-title text-center" style={{ marginBottom: 40 }}>Why ISO Certification Matters</h2>
            <Row gutter={[24, 24]}>
              {[
                { title: 'Consistent Quality', desc: 'Every batch meets the same high standard — no variation, no surprises.' },
                { title: 'Environmental Responsibility', desc: 'Manufacturing processes that minimize ecological impact and waste.' },
                { title: 'Worker Safety', desc: 'A safe, healthy workplace for every employee in our facility.' },
                { title: 'Customer Confidence', desc: 'Internationally recognized certification you can trust and verify.' },
              ].map((item) => (
                <Col xs={24} sm={12} key={item.title}>
                  <div className={styles.whyCard}>
                    <h3 className={styles.whyTitle}>{item.title}</h3>
                    <p className={styles.whyDesc}>{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}
