'use client';
import React from 'react';
import { Row, Col } from 'antd';
import { DownloadOutlined, FilePdfOutlined } from '@ant-design/icons';
import { company } from '@/data/company';
import styles from './downloads.module.css';


const downloads = [
  { name: 'Continental Tile Adhesive Type 1', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Tile Adhesive Type 2', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Tile Adhesive Type 3', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Tile Adhesive Type 4', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Tile Adhesive Type 5', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Ready Plaster', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Block Joint Mortar', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Super Grouts', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Product Catalogue 2025', type: 'Product Brochure', size: 'PDF', icon: 'pdf' },
  { name: 'Tile Adhesive Application Guide', type: 'Application Guide', size: 'PDF', icon: 'pdf' },
  { name: 'Ready Plaster Application Guide', type: 'Application Guide', size: 'PDF', icon: 'pdf' },
  { name: 'ISO Certification Documents', type: 'Certification', size: 'PDF', icon: 'pdf' },
];

export default function DownloadsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Downloads</div>
          <h1 className="page-hero__title">Product Resources<br /><span style={{ color: '#0B65B5' }}>& Documentation</span></h1>
          <p className="page-hero__subtitle">Download technical data sheets, application guides, and product brochures for all Continental products.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.notice}>
            <FilePdfOutlined style={{ fontSize: 20, color: '#0B65B5' }} />
            <p>Product documentation is available upon request. Please <a href="/contact">contact us</a> for the latest technical data sheets and certifications.</p>
          </div>

          <Row gutter={[20, 20]}>
            {downloads.map((doc) => (
              <Col xs={24} sm={12} lg={8} key={doc.name}>
                <div className={styles.downloadCard}>
                  <div className={styles.docIcon}><FilePdfOutlined /></div>
                  <div className={styles.docInfo}>
                    <div className={styles.docName}>{doc.name}</div>
                    <div className={styles.docType}>{doc.type}</div>
                  </div>
                  <button className={styles.downloadBtn} onClick={() => alert(`Please contact us at ${company.contact.email1} to receive this document.`)}>
                    <DownloadOutlined />
                  </button>
                </div>
              </Col>
            ))}
          </Row>

          <div className={styles.contactCta}>
            <h3>Need a specific document?</h3>
            <p>Contact our technical team for custom documentation, MSDS sheets, or project-specific guidelines.</p>
            <a href={`mailto:${company.contact.email1}`} className={styles.emailBtn}>
              {company.contact.email1}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
