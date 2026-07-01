'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';
import styles from './gallery.module.css';

const galleryCategories = ['All', 'Products', 'Factory', 'Site'];

const galleryItems = [
  { src: '/images/gallery/manufacturing-facility.png', alt: 'Manufacturing Plant', cat: 'Factory' },
  { src: '/images/gallery/warehouse.png', alt: 'Warehouse Storage', cat: 'Factory' },
  { src: '/images/gallery/construction-site.png', alt: 'Construction Site Application', cat: 'Site' },
  { src: '/images/gallery/iso-certifications.png', alt: 'ISO Certifications', cat: 'Factory' },
  ...products.map((p) => ({ src: p.imageFront, alt: p.name, cat: 'Products' })),
  ...products.map((p) => ({ src: p.imageBack, alt: `${p.name} — Back`, cat: 'Products' })),
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.cat === activeCategory);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Gallery</div>
          <h1 className="page-hero__title">
            Our Work &
            <br />
            <span style={{ color: '#0B65B5' }}>Facility Gallery</span>
          </h1>
          <p className="page-hero__subtitle">
            Explore our manufacturing facility, product range, and construction site applications.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className={styles.filterBar}>
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                className={[styles.filterBtn, activeCategory === cat ? styles.filterBtnActive : ''].join(' ')}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className={styles.galleryGrid}>
            {filtered.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className={styles.galleryItem}
                onClick={() => setLightbox(item.src)}
              >
                <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} />
                <div className={styles.galleryOverlay}>
                  <span className={styles.galleryItemName}>{item.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxImg}>
            <Image src={lightbox} alt="Gallery" fill style={{ objectFit: 'contain' }} />
          </div>
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
        </div>
      )}
    </>
  );
}
