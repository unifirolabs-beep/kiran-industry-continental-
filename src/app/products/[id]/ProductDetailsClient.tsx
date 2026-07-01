'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Tag } from 'antd';
import { 
  ArrowLeftOutlined, 
  CheckCircleFilled, 
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  CalendarOutlined,
  InboxOutlined,
  SettingOutlined,
  HomeOutlined,
  BuildOutlined,
  ShopOutlined,
  DatabaseOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import { type Product } from '@/data/products';
import { type DetailedProductInfo } from '@/data/productSpecs';
import styles from './detail.module.css';

interface ProductDetailsClientProps {
  product: Product;
  specs: DetailedProductInfo;
}

const getApplicationIcon = (area: string) => {
  const clean = area.toLowerCase();
  if (clean.includes('floor')) return <AppstoreOutlined className={styles.appCardIcon} />;
  if (clean.includes('wall') || clean.includes('cladding') || clean.includes('facade') || clean.includes('ceiling')) return <BuildOutlined className={styles.appCardIcon} />;
  if (clean.includes('residential') || clean.includes('home') || clean.includes('building')) return <HomeOutlined className={styles.appCardIcon} />;
  if (clean.includes('commercial') || clean.includes('metro') || clean.includes('station') || clean.includes('traffic') || clean.includes('industrial')) return <ShopOutlined className={styles.appCardIcon} />;
  if (clean.includes('pool') || clean.includes('water') || clean.includes('spa') || clean.includes('fountain') || clean.includes('reservoir')) return <DatabaseOutlined className={styles.appCardIcon} />;
  return <CheckCircleFilled className={styles.appCardIcon} />;
};

export default function ProductDetailsClient({ product, specs }: ProductDetailsClientProps) {
  const [activeImage, setActiveImage] = useState<'front' | 'back'>('front');

  const currentImage = activeImage === 'front' ? product.imageFront : product.imageBack;

  return (
    <div className={styles.detailWrapper}>
      <div className="container">
        {/* Breadcrumb / Back Link */}
        <Link href="/products" className={styles.backLink}>
          <ArrowLeftOutlined /> Back to Products
        </Link>

        {/* Two Column Grid */}
        <div className={styles.mainGrid}>
          {/* Left Column: Product Images */}
          <div className={styles.imageSection}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={currentImage}
                alt={`${product.name} - ${activeImage} view`}
                fill
                style={{ objectFit: 'contain', padding: '24px' }}
                priority
              />
            </div>
            <div className={styles.thumbnailGrid}>
              <button 
                className={[styles.thumbnailBtn, activeImage === 'front' ? styles.thumbnailBtnActive : ''].join(' ')}
                onClick={() => setActiveImage('front')}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 60 }}>
                  <Image src={product.imageFront} alt="Front View" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className={styles.thumbnailLabel}>Front View</span>
              </button>
              <button 
                className={[styles.thumbnailBtn, activeImage === 'back' ? styles.thumbnailBtnActive : ''].join(' ')}
                onClick={() => setActiveImage('back')}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 60 }}>
                  <Image src={product.imageBack} alt="Back View" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className={styles.thumbnailLabel}>Back View</span>
              </button>
            </div>
          </div>

          {/* Right Column: Key Details */}
          <div className={styles.infoSection}>
            <div className={styles.productCategory}>{product.type}</div>
            <h1 className={styles.productName}>{product.name}</h1>
            <span className={styles.tagline}>{specs.tagline}</span>
            
            <p className={styles.description}>{specs.fullDescription}</p>

            <div className={styles.badgeList}>
              <Tag color={product.tagColor} className={styles.badge}>
                {product.grade}
              </Tag>
              {product.standards && (
                <Tag color="blue" className={styles.badge}>
                  {product.standards}
                </Tag>
              )}
            </div>

            <div className={styles.quickSpecs}>
              <div className={styles.quickSpecItem}>
                <span className={quickSpecsStyle(product.packSize)}>Pack Size</span>
                <span className={styles.quickSpecValue}>
                  <InboxOutlined style={{ marginRight: 6, color: '#0B65B5' }} />
                  {product.packSize}
                </span>
              </div>
              <div className={styles.quickSpecItem}>
                <span className={styles.quickSpecLabel}>Shelf Life</span>
                <span className={styles.quickSpecValue}>
                  <CalendarOutlined style={{ marginRight: 6, color: '#0B65B5' }} />
                  {product.shelfLife}
                </span>
              </div>
              <div className={styles.quickSpecItem}>
                <span className={styles.quickSpecLabel}>Color</span>
                <span className={styles.quickSpecValue}>
                  <SettingOutlined style={{ marginRight: 6, color: '#0B65B5' }} />
                  {product.color || 'Grey'}
                </span>
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/request-quote">
                <Button type="primary" className={styles.quoteBtn}>
                  Request a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button className={styles.enquireBtn}>
                  Enquire Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Technical Specifications</h2>
          <div className={styles.specsTableWrapper}>
            <table className={styles.specsTable}>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Specification</th>
                </tr>
              </thead>
              <tbody>
                {specs.technicalSpecs.map((spec) => (
                  <tr key={spec.property}>
                    <td className={styles.propertyCol}>{spec.property}</td>
                    <td>{spec.specification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Areas of Application */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Areas of Application</h2>
          <div className={styles.appGrid}>
            {specs.areasOfApplication.map((area) => (
              <div key={area} className={styles.appCard}>
                {getApplicationIcon(area)}
                <span className={styles.appCardLabel}>{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Guide / How to Use (Visual card steps matching bag illustrations) */}
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Usage Guide & Method of Application</h2>
          <div className={styles.usageGuideGrid}>
            {specs.methodOfApplication.map((step, idx) => (
              <div key={step.title} className={styles.usageStep}>
                <div className={styles.usageStepHeader}>
                  <span className={styles.usageStepNumber}>0{idx + 1}</span>
                  <span className={styles.usageStepTitle}>{step.title}</span>
                </div>
                <p className={styles.usageStepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage & Precautions Grid */}
        <div className={styles.twoColGrid}>
          {/* Coverage */}
          <div className={styles.coverageCard}>
            <InfoCircleOutlined className={styles.coverageIcon} />
            <div>
              <h3 className={styles.coverageTitle}>Coverage</h3>
              <p className={styles.coverageText}>{specs.coverageDetailed}</p>
            </div>
          </div>

          {/* Precautions */}
          <div className={styles.precautionsCard}>
            <h3 className={styles.precautionTitle}>
              <ExclamationCircleOutlined className={styles.precautionIcon} />
              Precautions & Safety
            </h3>
            <ul className={styles.precautionList}>
              {specs.precautions.map((precaution, idx) => (
                <li key={idx}>{precaution}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function quickSpecsStyle(str: string) {
  return styles.quickSpecLabel;
}
