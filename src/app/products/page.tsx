'use client';

import React, { useState } from 'react';
import { Tag } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { products, productCategories } from '@/data/products';
import styles from './products.module.css';

const productExtraDetails: Record<string, { tagline: string; substrate: string; usage: string; keyFeatures: string }> = {
  'type-1': {
    tagline: 'For Fixing Ceramic & Porcelain Tiles',
    substrate: 'Interior floor & wall cementitious surfaces',
    usage: 'Floors and vertical walls (interior)',
    keyFeatures: 'High initial grip, Non-slump formula, Easy mixing & application',
  },
  'type-2': {
    tagline: 'For Fixing Vitrified & Porcelain Tiles',
    substrate: 'Interior & Exterior cementitious surfaces & Tile-on-tile surfaces',
    usage: 'Floors and vertical walls (kitchens, bathrooms, wet areas)',
    keyFeatures: 'Anti-slip technology, Enhanced bond strength, Water resistant',
  },
  'type-3': {
    tagline: 'For Fixing Large Format Tiles on Exterior Walls & Swimming Pools',
    substrate: 'Exterior cementitious walls, swimming pools, concrete surfaces',
    usage: 'Swimming pools, exterior walls, outdoor flooring & cladding',
    keyFeatures: 'Weather & UV resistant, Extended open time, Heavy duty performance',
  },
  'type-4': {
    tagline: 'For Fixing Stone Cladding & Balconies',
    substrate: 'Balconies, terraces, plaster, and surfaces subject to thermal movement',
    usage: 'Balconies, terraces, high-traffic floors, exterior stone cladding',
    keyFeatures: 'S1 Deformability, High flexibility, Thermal cycle & vibration resistance',
  },
  'type-5': {
    tagline: 'For Bonding Glass, Metal, Mirror & Wood Panels',
    substrate: 'Metal panels, glass, mirrors, wooden boards, drywalls',
    usage: 'Interior walls, wood panels, glass partitions, metal cladding',
    keyFeatures: 'PU technology, Ultra high bond, Chemical & moisture resistant',
  },
  'ready-plaster': {
    tagline: 'For Plastering Interior & Exterior Walls & Ceilings',
    substrate: 'Brickwork, blockwork, concrete block surfaces, ceilings',
    usage: 'Interior and exterior walls, ceilings, columns & beams',
    keyFeatures: 'Crack resistant, Superior workability, Factory controlled quality, Consistent finish',
  },
  'block-joint': {
    tagline: 'For Jointing AAC, CLC & Lightweight Concrete Blocks',
    substrate: 'AAC blocks, CLC blocks, lightweight concrete blocks, hollow blocks',
    usage: 'Interior and exterior load-bearing & partition walls',
    keyFeatures: 'Thin bed system (3–5mm), High bond strength, Shrinkage resistant',
  },
  'super-grout': {
    tagline: 'For Filling Tile Joints',
    substrate: 'Joint spaces between ceramic, vitrified, marble, and granite tiles',
    usage: 'Floors and walls, kitchens, bathrooms, swimming pools',
    keyFeatures: 'Anti-fungal formula, Anti-bacterial, Stain resistant, Color consistent',
  },
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const router = useRouter();

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Product Catalog</div>
          <h1 className="page-hero__title" data-aos="fade-up">
            Continental
            <br />
            <span style={{ color: '#0B65B5' }}>Product Range</span>
          </h1>
          <p className="page-hero__subtitle" data-aos="fade-up" data-aos-delay="100">
            8 engineered construction solutions for every application — from residential flooring to
            industrial cladding. All C-grade certified and ISO quality assured.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterTabs} data-aos="fade-in">
            {productCategories.map((cat) => (
              <button
                key={cat.key}
                className={[styles.filterTab, activeCategory === cat.key ? styles.filterTabActive : ''].join(' ')}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid in Row Format (Image 2 style) */}
      <section className={styles.productsSection}>
        <div className="container">
          <div className={styles.productRowList}>
            {filteredProducts.map((product) => {
              const details = productExtraDetails[product.id] || {
                tagline: '',
                substrate: 'Cementitious surfaces',
                usage: 'Floors and walls',
                keyFeatures: product.features.join(', '),
              };

              return (
                <div
                  className={styles.productRow}
                  key={product.id}
                  data-aos="fade-up"
                  onClick={() => router.push(`/products/${product.id}`)}
                >
                  {/* Left Column: Overlapping Bag Image in White Card */}
                  <div className={styles.rowImageContainer}>
                    <Image
                      src={product.imageFront}
                      alt={product.name}
                      width={160}
                      height={200}
                      className={styles.rowImage}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                    <Tag color={product.tagColor} className={styles.rowGradeTag}>
                      {product.grade}
                    </Tag>
                  </div>

                  {/* Right Column: Premium Colored Panel (Logo Theme: Blue & Gold) */}
                  <div className={styles.rowContentPanel}>
                    <div className={styles.rowHeader}>
                      <h2 className={styles.rowTitle}>{product.shortName}</h2>
                      {details.tagline && <span className={styles.rowTagline}>{details.tagline}</span>}
                    </div>

                    <div className={styles.rowSpecs}>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Substrate:</span>
                        <span className={styles.specValue}>{details.substrate}</span>
                      </div>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Areas of usage:</span>
                        <span className={styles.specValue}>{details.usage}</span>
                      </div>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Key features:</span>
                        <span className={styles.specValue}>{details.keyFeatures}</span>
                      </div>
                    </div>

                    <div className={styles.rowFooter}>
                      <div className={styles.rowMeta}>
                        <span>Pack: <strong>{product.packSize}</strong></span>
                        <span className={styles.metaDivider}>|</span>
                        <span>Shelf Life: <strong>{product.shelfLife}</strong></span>
                      </div>
                      <button className={styles.rowViewBtn}>
                        View Details <ArrowRightOutlined />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
