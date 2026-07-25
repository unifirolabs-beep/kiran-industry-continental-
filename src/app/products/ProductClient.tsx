'use client';

import { Tag } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { products, productCategories } from '@/data/products';
import { useState } from 'react';
import {useRouter} from 'next/navigation';

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

  const filteredProducts =
  activeCategory === 'all'
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">Product Catalog</div>
          <h1 className="page-hero__title" data-aos="fade-up">
            Continental
            <br />
            <span className="text-primary">Product Range</span>
          </h1>
          <p className="page-hero__subtitle" data-aos="fade-up" data-aos-delay="100">
            8 engineered construction solutions for every application — from residential flooring to
            industrial cladding. All C-grade certified and ISO quality assured.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white p-0 border-b border-[#f0f0f0] sticky top-[72px] z-[100]">
        <div className="container">
          <div className="flex gap-1 overflow-x-auto py-4 no-scrollbar" data-aos="fade-in">
            {productCategories.map((cat) => (
              <button
                key={cat.key}
                className={`py-2 px-5 rounded-md text-[13.5px] font-medium whitespace-nowrap cursor-pointer transition-all duration-200 bg-transparent text-[#595959] border border-transparent font-primary hover:text-primary hover:bg-[rgba(11,101,181,0.06)] ${
                  activeCategory === cat.key ? 'bg-[rgba(11,101,181,0.1)] !text-primary border-primary/30 font-semibold' : ''
                }`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid in Row Format (Image 2 style) */}
      <section className="py-16 pb-24">
        <div className="container">
          <div className="flex flex-col gap-8 max-w-[1000px] mx-auto">
            {filteredProducts.map((product) => {
              const details = productExtraDetails[product.id] || {
                tagline: '',
                substrate: 'Cementitious surfaces',
                usage: 'Floors and walls',
                keyFeatures: product.features.join(', '),
              };

              return (
                <div
                  className="flex items-center relative cursor-pointer w-full max-[768px]:flex-col max-[768px]:items-center group"
                  key={product.id}
                  data-aos="fade-up"
                  onClick={() => router.push(`/products/${product.id}`)}
                >
                  {/* Left Column: Overlapping Bag Image in White Card */}
                  <div className="w-[200px] h-[240px] bg-white rounded-2xl border border-black/8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center relative z-10 shrink-0 p-4 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04] group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_40px_rgba(11,101,181,0.15)] max-[768px]:w-[220px] max-[768px]:h-[220px] max-[768px]:mb-[-30px] max-[768px]:z-10">
                    <Image
                      src={product.imageFront}
                      alt={product.name}
                      width={160}
                      height={200}
                      className="object-contain transition-transform duration-400"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                    <Tag color={product.tagColor} className="absolute top-3 left-3 text-[11px] font-bold z-20 tracking-wide">
                      {product.grade}
                    </Tag>
                  </div>

                  {/* Right Column: Premium Colored Panel (Logo Theme: Blue & Gold) */}
                  <div className="bg-gradient-to-br from-primary to-[#064885] rounded-2xl py-6 pr-8 pl-[72px] -ml-[50px] flex-1 z-0 relative shadow-[0_8px_30px_rgba(11,101,181,0.15)] border border-white/8 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center min-h-[190px] group-hover:shadow-[0_16px_48px_rgba(11,101,181,0.35)] group-hover:border-white/20 group-hover:translate-x-1 max-[768px]:ml-0 max-[768px]:pt-11 max-[768px]:px-5 max-[768px]:pb-5 max-[768px]:w-full max-[768px]:z-0 max-[768px]:min-h-auto max-[768px]:text-center max-[768px]:group-hover:translate-x-0">
                    <div className="flex items-baseline gap-3 mb-3 border-b border-white/12 pb-2 flex-wrap max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-1">
                      <h2 className="font-display text-xl font-extrabold text-white tracking-tight m-0">{product.shortName}</h2>
                      {details.tagline && <span className="font-primary text-[12.5px] font-medium text-white/70 italic">{details.tagline}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 mb-4 max-[768px]:items-center max-[768px]:w-full">
                      <div className="flex text-[13.5px] leading-normal items-start gap-1.5 max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-0.5">
                        <span className="font-display font-bold text-[#F3C068] shrink-0 min-w-[105px] max-[768px]:min-w-0">Substrate:</span>
                        <span className="text-white/90">{details.substrate}</span>
                      </div>
                      <div className="flex text-[13.5px] leading-normal items-start gap-1.5 max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-0.5">
                        <span className="font-display font-bold text-[#F3C068] shrink-0 min-w-[105px] max-[768px]:min-w-0">Areas of usage:</span>
                        <span className="text-white/90">{details.usage}</span>
                      </div>
                      <div className="flex text-[13.5px] leading-normal items-start gap-1.5 max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-0.5">
                        <span className="font-display font-bold text-[#F3C068] shrink-0 min-w-[105px] max-[768px]:min-w-0">Key features:</span>
                        <span className="text-white/90">{details.keyFeatures}</span>
                      </div>
                    </div>

                    <div className="flex justify-between align-items-center border-top border-white/12 pt-3 flex-wrap gap-3 max-[768px]:flex-col max-[768px]:items-center max-[768px]:w-full">
                      <div className="flex gap-3 items-center text-[12.5px] text-white/60">
                        <span>Pack: <strong className="text-white font-semibold">{product.packSize}</strong></span>
                        <span className="text-white/20">|</span>
                        <span>Shelf Life: <strong className="text-white font-semibold">{product.shelfLife}</strong></span>
                      </div>
                      <button className="flex items-center gap-1.5 font-display text-[13px] font-bold text-black bg-white border-none py-1.5 px-4 rounded-2xl cursor-pointer transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:bg-[#F3C068] hover:-translate-y-0.5 hover:shadow-[0_6px_15px_rgba(243,192,104,0.3)]">
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
