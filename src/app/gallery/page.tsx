'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';

const galleryCategories = ['All', 'Products', 'Factory', 'Site'];

const galleryItems = [
  { src: '/images/gallery/manufacturing-facility.png', alt: 'Manufacturing Plant', cat: 'Factory' },
  { src: '/images/gallery/warehouse.png', alt: 'Warehouse Storage', cat: 'Factory' },
  { src: '/images/gallery/construction-site.png', alt: 'Construction Site Application', cat: 'Site' },
  { src: '/images/gallery/iso-certifications.png', alt: 'ISO Certifications', cat: 'Factory' },
  ...products.map((p) => ({ src: p.imageFront, alt: p.name, cat: 'Products' })),
  ...products.map((p) => ({ src: p.imageBack, alt: `${p.name} — Back`, cat: 'Products' })),
];

const aspectRatios = ['aspect-[3/4]', 'aspect-[1/1]', 'aspect-[4/3]'];

export default function GalleryPage() {
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    'name': 'Kiran Industries Manufacturing Facility Gallery',
    'description': 'Media gallery displaying our fully automated 20 TPH manufacturing facility, warehouse, research lab, and construction projects across South India.',
    'url': 'https://www.kiscontinental.com/gallery',
    'image': [
      'https://www.kiscontinental.com/images/gallery/manufacturing-facility.png',
      'https://www.kiscontinental.com/images/gallery/warehouse.png',
      'https://www.kiscontinental.com/images/gallery/construction-site.png',
      'https://www.kiscontinental.com/images/gallery/iso-certifications.png'
    ]
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.kiscontinental.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Media Gallery',
        'item': 'https://www.kiscontinental.com/gallery'
      }
    ]
  };

  return (
    <>
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">Gallery</div>
          <h1 className="page-hero__title">
            Our Work &
            <br />
            <span className="text-primary">Facility Gallery</span>
          </h1>
          <p className="page-hero__subtitle">
            Explore our manufacturing facility, product range, and construction site applications.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className="flex gap-2 flex-wrap mb-9">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                className={`py-2 px-5 rounded-md text-[13.5px] font-medium cursor-pointer transition-all duration-200 bg-transparent text-[#595959] border border-black/12 font-primary hover:text-primary hover:border-primary/40 ${
                  activeCategory === cat ? 'bg-[rgba(11,101,181,0.1)] !text-primary border-primary/45 font-semibold' : ''
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-4 gap-3 max-[1024px]:columns-3 max-[640px]:columns-2">
            {filtered.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className={`relative block w-full mb-3 break-inside-avoid rounded-lg overflow-hidden cursor-zoom-in group ${aspectRatios[i % 3]}`}
                onClick={() => setLightbox(item.src)}
              >
                <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-0 transition-opacity duration-300 flex items-end p-3.5 group-hover:opacity-100">
                  <span className="text-xs font-semibold text-white">{item.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center cursor-zoom-out p-10" onClick={() => setLightbox(null)}>
          <div className="relative w-full h-full max-w-[900px] max-h-[80vh]">
            <Image src={lightbox} alt="Gallery" fill style={{ objectFit: 'contain' }} />
          </div>
          <button className="absolute top-5 right-6 bg-white/10 border-none text-white text-xl w-10 h-10 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-white/20" onClick={() => setLightbox(null)}>✕</button>
        </div>
      )}
    </>
  );
}
