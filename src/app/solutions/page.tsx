'use client';

import React from 'react';
import { Row, Col, Card, Steps, Collapse, Tag } from 'antd';
import { CheckCircleFilled, ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { solutions } from '@/data/company';
import { products } from '@/data/products';
import styles from './solutions.module.css';

const applicationSteps = [
  { title: 'Surface Preparation', description: 'Clean, level, and prime the substrate for optimal adhesion.' },
  { title: 'Mixing', description: 'Mix Continental adhesive with water to achieve lump-free consistency.' },
  { title: 'Application', description: 'Apply with notched trowel in one direction for consistent coverage.' },
  { title: 'Tile Setting', description: 'Press and align tiles firmly within open time for strong bond.' },
  { title: 'Grouting', description: 'After 24 hours, apply Continental Super Grout for a perfect finish.' },
];

export default function SolutionsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Solutions</div>
          <h1 className="page-hero__title">
            The Right Product
            <br />
            <span style={{ color: '#0B65B5' }}>For Every Application</span>
          </h1>
          <p className="page-hero__subtitle">
            Whether you&apos;re tiling a bathroom or cladding an industrial façade, Continental has
            the engineered solution for your project.
          </p>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>By Segment</div>
            <h2 className="section-title">Solutions by Application Segment</h2>
          </div>
          <Row gutter={[24, 24]}>
            {solutions.map((sol) => (
              <Col xs={24} sm={12} lg={6} key={sol.id}>
                <div className={styles.solCard}>
                  <div className={styles.solCardTop} style={{ borderColor: sol.color }}>
                    <div className={styles.solNumber} style={{ color: sol.color }}>
                      {sol.title.charAt(0)}
                    </div>
                    <Tag style={{ borderColor: sol.color, color: sol.color, background: 'transparent', fontSize: 11, fontWeight: 600 }}>
                      {sol.subtitle}
                    </Tag>
                  </div>
                  <h3 className={styles.solTitle}>{sol.title}</h3>
                  <p className={styles.solDesc}>{sol.description}</p>
                  <div className={styles.solProducts}>
                    <div className={styles.solProductsLabel}>Recommended Products:</div>
                    {sol.products.map((p) => (
                      <div key={p} className={styles.solProduct}>
                        <CheckCircleFilled style={{ color: '#0B65B5', fontSize: 11 }} />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/products" className={styles.solLink}>
                    Explore Products <ArrowRightOutlined />
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Application Process */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Process</div>
            <h2 className="section-title section-title--white">Application Guide</h2>
            <p className="section-subtitle section-subtitle--white" style={{ margin: '0 auto' }}>
              Follow our step-by-step process for flawless tile adhesive application.
            </p>
          </div>
          <Steps
            current={-1}
            items={applicationSteps.map((step) => ({
              title: <span style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{step.title}</span>,
              content: <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{step.description}</span>,
            }))}
            style={{ '--ant-color-primary': '#0B65B5' } as React.CSSProperties}
          />
        </div>
      </section>

      {/* FAQ Collapse */}
      <section className="section section--warm">
        <div className="container">
          <Row gutter={[64, 48]}>
            <Col xs={24} lg={10}>
              <div className="section-label">FAQ</div>
              <h2 className="section-title">Common Questions</h2>
              <p className={styles.bodyText}>
                Get expert answers to the most common questions about Continental product selection
                and application.
              </p>
              <Link href="/contact">
                <button className={styles.askBtn}>Ask Our Experts <ArrowRightOutlined /></button>
              </Link>
            </Col>
            <Col xs={24} lg={14}>
              <Collapse
                expandIconPlacement="end"
                bordered={false}
                className={styles.faqCollapse}
                items={[
                  {
                    key: '1',
                    label: 'Which adhesive is best for vitrified tiles in bathrooms?',
                    children: <p style={{ color: '#595959', fontSize: 14, lineHeight: 1.7 }}>Continental Tile Adhesive Type 2 (C2 Grade) is ideal for vitrified tiles in wet areas like bathrooms. Its anti-slip technology and enhanced bond strength make it perfect for both floor and wall applications in moisture-prone environments.</p>,
                  },
                  {
                    key: '2',
                    label: 'Can I use Continental adhesive for exterior cladding?',
                    children: <p style={{ color: '#595959', fontSize: 14, lineHeight: 1.7 }}>Yes. Continental Tile Adhesive Type 3 is specifically formulated for exterior applications with weather and UV resistance. For highly flexible substrates like balconies, Type 4 (S1 deformable) is recommended.</p>,
                  },
                  {
                    key: '3',
                    label: 'What is the coverage of Continental Tile Adhesives?',
                    children: <p style={{ color: '#595959', fontSize: 14, lineHeight: 1.7 }}>Coverage varies by product and application. Type 1 covers approximately 4–5 sq.m per 20kg bag at 6mm bed thickness. Type 2–4 cover 3–4.5 sq.m per 20kg bag. Actual coverage depends on substrate flatness and tile size.</p>,
                  },
                  {
                    key: '4',
                    label: 'Is Ready Plaster suitable for exterior walls?',
                    children: <p style={{ color: '#595959', fontSize: 14, lineHeight: 1.7 }}>Yes, Continental Ready Plaster is suitable for both interior and exterior walls. Its factory-controlled formulation ensures superior workability, crack resistance, and consistent finish on any masonry surface.</p>,
                  },
                  {
                    key: '5',
                    label: 'What is the shelf life of Continental products?',
                    children: <p style={{ color: '#595959', fontSize: 14, lineHeight: 1.7 }}>Tile adhesives and Block Joint Mortar have a 12-month shelf life. Super Grouts have a 24-month shelf life. Ready Plaster should be used within 6 months. Always store in a cool, dry place away from moisture.</p>,
                  },
                ]}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>Not Sure Which Product to Choose?</h2>
          <p className={styles.ctaSubtitle}>Our technical team will help you select the right product for your project.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact"><button className={styles.ctaBtnPrimary}>Talk to an Expert</button></Link>
            <Link href="/products"><button className={styles.ctaBtnOutline}>View All Products</button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
