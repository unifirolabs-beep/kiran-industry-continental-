'use client';

import React from 'react';
import { Row, Col } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { manufacturing } from '@/data/company';

export default function ManufacturingPage() {
  return (
    <>
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">Manufacturing</div>
          <h1 className="page-hero__title">
            Automated Excellence
            <br />
            <span className="text-primary">at 20 TPH</span>
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
              <p className="text-[15.5px] text-[#595959] leading-[1.8] mb-7">
                Located at Sy. No. 659/2, Mustor Road, Manvi – 583123, Raichur District, Karnataka,
                our facility is designed for precision, efficiency, and environmental responsibility.
                Every product is manufactured under strict ISO-certified processes.
              </p>
              <div className="flex flex-col gap-3.5">
                {manufacturing.infrastructure.map((item) => (
                  <div key={item.label} className="flex gap-3 items-start bg-white p-3.5 px-[18px] rounded-lg border border-black/5">
                    <CheckCircleFilled className="!text-base !text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-[#1A1A1A] mb-0.5">{item.label}</div>
                      <div className="text-[12.5px] text-[#8C8C8C]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="grid grid-cols-2 grid-rows-[280px_180px] gap-3">
                <div className="col-span-2 relative rounded-xl overflow-hidden">
                  <Image src="/images/gallery/manufacturing-facility.png" alt="Plant" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image src="/images/gallery/warehouse.png" alt="Warehouse" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="relative rounded-xl overflow-hidden">
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
          <div className="grid grid-cols-3 gap-[1px] bg-white/5 rounded-2xl overflow-hidden max-[768px]:grid-cols-2 max-[768px]:bg-transparent max-[768px]:gap-4 max-[768px]:p-0 max-[480px]:grid-cols-1">
            {[
              { value: '20', unit: 'TPH', label: 'Production Output', desc: 'Tonnes per hour automated production' },
              { value: '2000+', unit: 'T', label: 'Warehouse', desc: 'Finished goods storage capacity' },
              { value: '100', unit: 'T', label: 'Cement Silo', desc: 'Bulk cement storage' },
              { value: '50', unit: 'T', label: 'Fly Ash Silo', desc: 'Fly ash material storage' },
              { value: '24/7', unit: '', label: 'Monitoring', desc: 'Continuous quality monitoring' },
              { value: '3', unit: 'ISO', label: 'Certifications', desc: 'International quality standards' },
            ].map((s) => (
              <div key={s.label} className="bg-[#1A1A1A] py-10 px-8 text-center transition-colors duration-200 hover:bg-[#202020] max-[768px]:rounded-xl max-[768px]:border max-[768px]:border-white/5">
                <div className="font-display text-[52px] font-black text-primary leading-none mb-1">{s.value}<span className="text-2xl font-semibold ml-1">{s.unit}</span></div>
                <div className="text-sm font-bold text-white mb-1.5">{s.label}</div>
                <div className="text-xs text-white/45">{s.desc}</div>
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
          <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
            {[
              { step: '01', title: 'Raw Material Inspection', desc: 'Every batch of raw materials is tested for composition, purity, and consistency before entering production.' },
              { step: '02', title: 'Precision Batching', desc: 'Automated weighing systems ensure exact recipe ratios are maintained in every production run.' },
              { step: '03', title: 'Plough Mixer Blending', desc: 'Advanced Plough Mixer technology ensures homogeneous blending of all components at controlled temperatures.' },
              { step: '04', title: 'In-Process QC', desc: 'Samples are tested at multiple stages of production for consistency, adhesion strength, and workability.' },
              { step: '05', title: 'Automated Packaging', desc: 'Precision packaging machines fill, seal, and label each bag to exact weight specifications.' },
              { step: '06', title: 'Final Approval & Dispatch', desc: 'Final batch testing and quality clearance before products enter the warehouse for dispatch.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-7 border border-black/6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] hover:border-[rgba(11,101,181,0.2)]">
                <div className="font-display text-[44px] font-black text-primary/20 leading-none mb-3.5">{s.step}</div>
                <h3 className="font-display text-base font-bold text-[#1A1A1A] mb-2">{s.title}</h3>
                <p className="text-[13.5px] text-[#595959] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-extrabold text-black mb-3">Interested in a Plant Visit?</h2>
          <p className="text-base text-black/65 mb-8">Schedule a factory tour and see our production process firsthand.</p>
          <Link href="/contact">
            <button className="py-3.5 px-8 bg-black text-white border-none rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-200 hover:bg-[#1A1A1A] hover:-translate-y-0.5">Schedule a Visit</button>
          </Link>
        </div>
      </section>
    </>
  );
}
