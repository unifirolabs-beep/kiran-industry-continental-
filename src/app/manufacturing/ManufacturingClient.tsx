'use client';

import React from 'react';
import { Row, Col } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { manufacturing, certifications } from '@/data/company';
import styles from './manufacturing.module.css';

export default function ManufacturingPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Manufacturing</div>
          <h1 className="page-hero__title">
            Automated Excellence
            <br />
            <span style={{ color: '#0B65B5' }}>at 20 TPH</span>
          </h1>
          <p className="page-hero__subtitle">
            Our state-of-the-art manufacturing facility in Manvi, Karnataka produces 20 tonnes per hour
            of premium dry-mix construction materials.
          </p>
        </div>
      </section>

      {/* Plant Overview */}
      <section className="section">
        <div className="container">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="section-label">Our Plant</div>
              <h2 className="section-title">World-Class Manufacturing Facility</h2>
              <p className={styles.bodyText}>
                Located at Sy. No. 659/2, Mustor Road, Manvi – 583123, Raichur District, Karnataka,
                our facility is designed for precision, efficiency, and environmental responsibility.
                Every product is manufactured under strict ISO-certified processes.
              </p>
              <div className={styles.infraGrid}>
                {manufacturing.infrastructure.map((item) => (
                  <div key={item.label} className={styles.infraCard}>
                    <CheckCircleFilled className={styles.infraIcon} />
                    <div>
                      <div className={styles.infraLabel}>{item.label}</div>
                      <div className={styles.infraDesc}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.imageGrid}>
                <div className={styles.imgLarge}>
                  <Image src="/images/gallery/manufacturing-facility.png" alt="Plant" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.imgSmall}>
                  <Image src="/images/gallery/warehouse.png" alt="Warehouse" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.imgSmall}>
                  <Image src="/images/gallery/construction-site.png" alt="Site" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Capacity Stats */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Capacity</div>
            <h2 className="section-title section-title--white">Production Capacity</h2>
          </div>
          <div className={styles.capacityGrid}>
            {[
              { value: '20', unit: 'TPH', label: 'Production Output', desc: 'Tonnes per hour automated production' },
              { value: '2000+', unit: 'T', label: 'Warehouse', desc: 'Finished goods storage capacity' },
              { value: '100', unit: 'T', label: 'Cement Silo', desc: 'Bulk cement storage' },
              { value: '50', unit: 'T', label: 'Fly Ash Silo', desc: 'Fly ash material storage' },
              { value: '24/7', unit: '', label: 'Monitoring', desc: 'Continuous quality monitoring' },
              { value: '3', unit: 'ISO', label: 'Certifications', desc: 'International quality standards' },
            ].map((s) => (
              <div key={s.label} className={styles.capacityCard}>
                <div className={styles.capacityValue}>{s.value}<span className={styles.capacityUnit}>{s.unit}</span></div>
                <div className={styles.capacityLabel}>{s.label}</div>
                <div className={styles.capacityDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="section section--warm">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Quality</div>
            <h2 className="section-title">Quality Control Process</h2>
          </div>
          <div className={styles.processSteps}>
            {[
              { step: '01', title: 'Raw Material Inspection', desc: 'Every batch of raw materials is tested for composition, purity, and consistency before entering production.' },
              { step: '02', title: 'Precision Batching', desc: 'Automated weighing systems ensure exact recipe ratios are maintained in every production run.' },
              { step: '03', title: 'Plough Mixer Blending', desc: 'Advanced Plough Mixer technology ensures homogeneous blending of all components at controlled temperatures.' },
              { step: '04', title: 'In-Process QC', desc: 'Samples are tested at multiple stages of production for consistency, adhesion strength, and workability.' },
              { step: '05', title: 'Automated Packaging', desc: 'Precision packaging machines fill, seal, and label each bag to exact weight specifications.' },
              { step: '06', title: 'Final Approval & Dispatch', desc: 'Final batch testing and quality clearance before products enter the warehouse for dispatch.' },
            ].map((s) => (
              <div key={s.step} className={styles.processCard}>
                <div className={styles.processStep}>{s.step}</div>
                <h3 className={styles.processTitle}>{s.title}</h3>
                <p className={styles.processDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>Interested in a Plant Visit?</h2>
          <p className={styles.ctaSubtitle}>Schedule a factory tour and see our production process firsthand.</p>
          <Link href="/contact">
            <button className={styles.ctaBtn}>Schedule a Visit</button>
          </Link>
        </div>
      </section>
    </>
  );
}
