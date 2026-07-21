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

interface ProductDetailsClientProps {
  product: Product;
  specs: DetailedProductInfo;
}

const getApplicationIcon = (area: string) => {
  const clean = area.toLowerCase();
  if (clean.includes('floor')) return <AppstoreOutlined className="!text-2xl !text-primary max-[480px]:!text-lg max-[480px]:mt-0" />;
  if (clean.includes('wall') || clean.includes('cladding') || clean.includes('facade') || clean.includes('ceiling')) return <BuildOutlined className="!text-2xl !text-primary max-[480px]:!text-lg max-[480px]:mt-0" />;
  if (clean.includes('residential') || clean.includes('home') || clean.includes('building')) return <HomeOutlined className="!text-2xl !text-primary max-[480px]:!text-lg max-[480px]:mt-0" />;
  if (clean.includes('commercial') || clean.includes('metro') || clean.includes('station') || clean.includes('traffic') || clean.includes('industrial')) return <ShopOutlined className="!text-2xl !text-primary max-[480px]:!text-lg max-[480px]:mt-0" />;
  if (clean.includes('pool') || clean.includes('water') || clean.includes('spa') || clean.includes('fountain') || clean.includes('reservoir')) return <DatabaseOutlined className="!text-2xl !text-primary max-[480px]:!text-lg max-[480px]:mt-0" />;
  return <CheckCircleFilled className="!text-2xl !text-primary max-[480px]:!text-lg max-[480px]:mt-0" />;
};

export default function ProductDetailsClient({ product, specs }: ProductDetailsClientProps) {
  const [activeImage, setActiveImage] = useState<'front' | 'back'>('front');

  const currentImage = activeImage === 'front' ? product.imageFront : product.imageBack;

  return (
    <div className="pt-[120px] pb-20 bg-[#fafafa] min-h-screen max-[768px]:pt-24 max-[768px]:pb-15 max-[480px]:pt-[88px] max-[480px]:pb-10">
      <div className="container">
        {/* Breadcrumb / Back Link */}
        <Link href="/products" className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary no-underline mb-6 transition-all duration-200 hover:text-primary-light hover:-translate-x-1 max-[480px]:mb-4 max-[480px]:text-xs">
          <ArrowLeftOutlined /> Back to Products
        </Link>

        {/* Two Column Grid */}
        <div className="grid grid-cols-2 gap-12 mb-12 items-start max-[960px]:grid-cols-1 max-[960px]:gap-8 max-[768px]:gap-6 max-[1200px]:xl:gap-16">
          {/* Left Column: Product Images */}
          <div className="flex flex-col gap-4">
            <div className="relative h-[400px] bg-white rounded-2xl border border-black/8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-center p-6 overflow-hidden max-[768px]:h-[300px] max-[768px]:p-4 max-[768px]:rounded-xl max-[480px]:h-[240px]">
              <Image
                src={currentImage}
                alt={`${product.name} - ${activeImage} view`}
                fill
                style={{ objectFit: 'contain', padding: '24px' }}
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button 
                className={`bg-white border-2 rounded-xl h-[90px] flex items-center justify-center p-2 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 relative max-[768px]:h-20 max-[768px]:rounded-lg ${
                  activeImage === 'front' ? 'border-primary shadow-[0_6px_16px_rgba(11,101,181,0.12)]' : 'border-transparent'
                }`}
                onClick={() => setActiveImage('front')}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 60 }}>
                  <Image src={product.imageFront} alt="Front View" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className={`absolute bottom-1 left-0 right-0 text-[10px] font-bold uppercase text-center tracking-wider ${activeImage === 'front' ? 'text-primary' : 'text-[#8c8c8c]'}`}>Front View</span>
              </button>
              <button 
                className={`bg-white border-2 rounded-xl h-[90px] flex items-center justify-center p-2 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 relative max-[768px]:h-20 max-[768px]:rounded-lg ${
                  activeImage === 'back' ? 'border-primary shadow-[0_6px_16px_rgba(11,101,181,0.12)]' : 'border-transparent'
                }`}
                onClick={() => setActiveImage('back')}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 60 }}>
                  <Image src={product.imageBack} alt="Back View" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className={`absolute bottom-1 left-0 right-0 text-[10px] font-bold uppercase text-center tracking-wider ${activeImage === 'back' ? 'text-primary' : 'text-[#8c8c8c]'}`}>Back View</span>
              </button>
            </div>
          </div>

          {/* Right Column: Key Details */}
          <div className="bg-white rounded-2xl border border-black/6 p-9 shadow-[0_4px_20px_rgba(0,0,0,0.02)] max-[1024px]:p-7 max-[768px]:p-6 max-[768px]:rounded-xl max-[1200px]:xl:p-12">
            <div className="text-[11px] font-bold tracking-widest uppercase text-primary mb-2">{product.type}</div>
            <h1 className="font-display text-[32px] font-black text-[#111111] mb-3 leading-none max-[768px]:text-2xl max-[480px]:text-2xl">{product.name}</h1>
            <span className="text-sm text-[#595959] font-medium italic mb-5 block max-[480px]:text-[13.5px] max-[480px]:mb-4">{specs.tagline}</span>
            
            <p className="text-[14.5px] text-[#404040] leading-relaxed mb-6 max-[480px]:text-[13.5px] max-[480px]:leading-relaxed max-[480px]:mb-5">{specs.fullDescription}</p>

            <div className="flex gap-2 flex-wrap mb-7 max-[480px]:mb-5">
              <Tag color={product.tagColor} className="text-xs font-bold py-1.5 px-3.5 rounded-full tracking-wide">
                {product.grade}
              </Tag>
              {product.standards && (
                <Tag color="blue" className="text-xs font-bold py-1.5 px-3.5 rounded-full tracking-wide">
                  {product.standards}
                </Tag>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-[#f0f0f0] py-5 max-[560px]:grid-cols-1 max-[560px]:gap-3 max-[560px]:py-4">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase text-[#8c8c8c] tracking-wider">Pack Size</span>
                <span className="font-display text-[14.5px] font-bold text-[#111111]">
                  <InboxOutlined style={{ marginRight: 6, color: '#0B65B5' }} />
                  {product.packSize}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase text-[#8c8c8c] tracking-wider">Shelf Life</span>
                <span className="font-display text-[14.5px] font-bold text-[#111111]">
                  <CalendarOutlined style={{ marginRight: 6, color: '#0B65B5' }} />
                  {product.shelfLife}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase text-[#8c8c8c] tracking-wider">Color</span>
                <span className="font-display text-[14.5px] font-bold text-[#111111]">
                  <SettingOutlined style={{ marginRight: 6, color: '#0B65B5' }} />
                  {product.color || 'Grey'}
                </span>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap max-[480px]:flex-col max-[480px]:gap-3">
              <Link href="/request-quote" className="max-[480px]:w-full">
                <Button type="primary" className="!h-12 !px-7 !text-sm !font-bold !font-display !rounded-3xl !bg-gradient-to-br !from-primary !to-primary-dark !color-white !border-none !shadow-[0_6px_20px_rgba(11,101,181,0.3)] !transition-all !duration-300 !inline-flex !items-center !justify-center hover:!scale-[1.02] hover:!shadow-[0_10px_25px_rgba(11,101,181,0.45)] hover:!brightness-110 max-[480px]:!w-full max-[480px]:!h-11 max-[480px]:!text-sm">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/contact" className="max-[480px]:w-full">
                <Button className="!h-12 !px-7 !text-sm !font-bold !font-display !rounded-3xl !border-2 !border-[#111111] !bg-transparent !color-[#111111] !transition-all !duration-300 hover:!bg-[#111111] hover:!color-white hover:!-translate-y-px max-[480px]:!w-full max-[480px]:!h-11 max-[480px]:!text-sm">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="bg-white rounded-2xl border border-black/6 p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-8 max-[768px]:py-7 max-[768px]:px-5 max-[768px]:rounded-xl max-[768px]:mb-6">
          <h2 className="font-display text-2xl font-black text-[#111111] mb-6 border-l-4 border-primary pl-3 leading-none max-[768px]:text-lg max-[768px]:mb-5">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mt-2 text-left">
              <thead>
                <tr>
                  <th className="bg-[#F5F4F0] font-display font-bold text-[13.5px] text-[#111111] py-3.5 px-5 border-b-2 border-primary/15 uppercase tracking-wider max-[560px]:py-3 max-[560px]:px-3.5 max-[560px]:text-xs">Property</th>
                  <th className="bg-[#F5F4F0] font-display font-bold text-[13.5px] text-[#111111] py-3.5 px-5 border-b-2 border-primary/15 uppercase tracking-wider max-[560px]:py-3 max-[560px]:px-3.5 max-[560px]:text-xs">Specification</th>
                </tr>
              </thead>
              <tbody>
                {specs.technicalSpecs.map((spec) => (
                  <tr key={spec.property} className="odd:bg-transparent even:bg-[rgba(245,244,240,0.4)]">
                    <td className="py-3.5 px-5 border-b border-[#f0f0f0] text-sm text-[#404040] max-[560px]:py-3 max-[560px]:px-3.5 max-[560px]:text-xs font-semibold text-[#111111]">{spec.property}</td>
                    <td className="py-3.5 px-5 border-b border-[#f0f0f0] text-sm text-[#404040] max-[560px]:py-3 max-[560px]:px-3.5 max-[560px]:text-xs">{spec.specification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Areas of Application */}
        <div className="bg-white rounded-2xl border border-black/6 p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-8 max-[768px]:py-7 max-[768px]:px-5 max-[768px]:rounded-xl max-[768px]:mb-6">
          <h2 className="font-display text-2xl font-black text-[#111111] mb-6 border-l-4 border-primary pl-3 leading-none max-[768px]:text-lg max-[768px]:mb-5">Areas of Application</h2>
          <div className="grid grid-cols-4 gap-5 max-[960px]:grid-cols-2 max-[480px]:grid-cols-1">
            {specs.areasOfApplication.map((area) => (
              <div key={area} className="bg-[#F5F4F0] rounded-xl p-5 text-center flex flex-col items-center gap-3 border border-transparent transition-all duration-300 hover:bg-white hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,101,181,0.08)] max-[480px]:p-3.5 max-[480px]:flex-row max-[480px]:gap-3 max-[480px]:text-left max-[480px]:rounded-lg">
                {getApplicationIcon(area)}
                <span className="font-display text-sm font-bold text-[#111111]">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Guide / How to Use (Visual card steps matching bag illustrations) */}
        <div className="bg-white rounded-2xl border border-black/6 p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-8 max-[768px]:py-7 max-[768px]:px-5 max-[768px]:rounded-xl max-[768px]:mb-6">
          <h2 className="font-display text-2xl font-black text-[#111111] mb-6 border-l-4 border-primary pl-3 leading-none max-[768px]:text-lg max-[768px]:mb-5">Usage Guide & Method of Application</h2>
          <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-1 max-[768px]:gap-4">
            {specs.methodOfApplication.map((step, idx) => (
              <div key={step.title} className="bg-[#F5F4F0] rounded-xl p-6 border-t-4 border-primary transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_10px_rgba(0,0,0,0.02)] flex flex-col gap-2.5 hover:bg-white hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(11,101,181,0.1)] hover:border-t-[#F3C068]">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xl font-black text-primary transition-colors duration-300">0{idx + 1}</span>
                  <span className="font-display text-sm font-bold text-[#111111]">{step.title}</span>
                </div>
                <p className="text-[13.5px] text-[#595959] leading-relaxed m-0">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage & Precautions Grid */}
        <div className="grid grid-cols-2 gap-8 max-[768px]:grid-cols-1 max-[480px]:gap-4">
          {/* Coverage */}
          <div className="bg-primary/[0.04] border border-primary/12 rounded-2xl p-6 flex gap-4 items-start max-[480px]:p-4.5 max-[480px]:rounded-xl">
            <InfoCircleOutlined className="!text-2xl !text-primary mt-0.5" />
            <div>
              <h3 className="font-display text-base font-bold text-[#111111] mb-1.5">Coverage</h3>
              <p className="text-[13.5px] text-[#404040] leading-relaxed">{specs.coverageDetailed}</p>
            </div>
          </div>

          {/* Precautions */}
          <div className="bg-[#F3C068]/[0.05] border border-[#F3C068]/20 rounded-2xl p-6 max-[480px]:p-4.5 max-[480px]:rounded-xl">
            <h3 className="font-display text-base font-bold text-[#a06b0d] mb-3 flex items-center gap-2">
              <ExclamationCircleOutlined className="!text-lg !text-[#a06b0d]" />
              Precautions & Safety
            </h3>
            <ul className="flex flex-col gap-1.5 pl-4 m-0 text-[13.5px] text-[#595959] leading-normal list-disc">
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
