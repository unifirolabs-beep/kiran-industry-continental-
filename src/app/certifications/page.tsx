'use client';

import React from 'react';
import { Row, Col } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { certifications } from '@/data/company';
import Image from 'next/image';

export default function CertificationsPage() {
  return (
    <>
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">Certifications</div>
          <h1 className="page-hero__title">Triple ISO<br /><span className="text-primary">Certified Excellence</span></h1>
          <p className="page-hero__subtitle">Our manufacturing facility maintains three internationally recognized ISO certifications — a testament to our commitment to quality, environment, and safety.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Row gutter={[32, 32]} style={{ marginBottom: 64 }}>
            {certifications.map((cert) => (
              <Col xs={24} md={8} key={cert.id}>
                <div className="bg-white rounded-2xl p-9 border border-black/7 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 border-t-4 h-full hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(0,0,0,0.11)]" style={{ borderTopColor: cert.color }}>
                  <div className="text-4xl mb-3.5" style={{ color: cert.color }}><SafetyCertificateOutlined /></div>
                  <div className="font-display text-sm font-black tracking-widest mb-2.5" style={{ color: cert.color }}>{cert.name}</div>
                  <h2 className="font-display text-xl font-bold text-[#1A1A1A] mb-3">{cert.title}</h2>
                  <p className="text-sm text-[#595959] leading-relaxed mb-4">{cert.description}</p>
                  <div className="text-[12.5px] text-[#8C8C8C] pt-3.5 border-t border-[#f0f0f0] leading-relaxed"><strong>Scope:</strong> {cert.scope}</div>
                </div>
              </Col>
            ))}
          </Row>

          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-[72px]">
            <Image src="/images/gallery/iso-certifications.png" alt="ISO Certificates" fill style={{ objectFit: 'cover', borderRadius: 16 }} />
            <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
              <h3 className="font-display text-[32px] font-extrabold text-white text-center max-w-[600px] tracking-tight">Certified for Quality, Environment & Safety</h3>
            </div>
          </div>

          <div className="pt-8">
            <h2 className="section-title text-center" style={{ marginBottom: 40 }}>Why ISO Certification Matters</h2>
            <Row gutter={[24, 24]}>
              {[
                { title: 'Consistent Quality', desc: 'Every batch meets the same high standard — no variation, no surprises.' },
                { title: 'Environmental Responsibility', desc: 'Manufacturing processes that minimize ecological impact and waste.' },
                { title: 'Worker Safety', desc: 'A safe, healthy workplace for every employee in our facility.' },
                { title: 'Customer Confidence', desc: 'Internationally recognized certification you can trust and verify.' },
              ].map((item) => (
                <Col xs={24} sm={12} key={item.title}>
                  <div className="bg-[#F5F4F0] rounded-xl p-7 transition-all duration-300 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-[3px]">
                    <h3 className="font-display text-[17px] font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#595959] leading-relaxed">{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}
