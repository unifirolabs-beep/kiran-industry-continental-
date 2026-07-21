'use client';

import React from 'react';
import { Row, Col } from 'antd';
import {
  CheckCircleFilled,
  SafetyCertificateOutlined,
  TrophyOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import { vision, mission, whyChooseUs, manufacturing, certifications, stats } from '@/data/company';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="relative z-10" data-aos="fade-up">
            <div className="page-hero__label">About Kiran Industries</div>
            <h1 className="page-hero__title">
              Building Trust Through
              <br />
              <span className="text-primary">Quality & Innovation</span>
            </h1>
            <p className="page-hero__subtitle">
              A premier construction material manufacturer headquartered in Manvi, Karnataka —
              delivering ISO-certified excellence to builders across South India since 2024.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={12} data-aos="fade-right">
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Who We Are</h2>
              <p className="text-[15.5px] text-[#595959] leading-[1.8] mb-[18px]">
                Kiran Industries was founded with a clear mission: to bring international-grade construction
                materials to South India&apos;s rapidly growing construction industry. Operating under the
                <strong> Continental</strong> brand, we manufacture a complete range of dry mix mortars,
                tile adhesives, ready plasters, block joint mortars, and super grouts.
              </p>
              <p className="text-[15.5px] text-[#595959] leading-[1.8] mb-[18px]">
                Our fully automated 20 TPH manufacturing plant in Manvi, Raichur District, Karnataka
                is equipped with advanced Plough Mixer technology, automated packaging lines, and a
                dedicated quality control laboratory — ensuring every product meets or exceeds international
                standards.
              </p>
              <p className="text-[15.5px] text-[#595959] leading-[1.8] mb-[18px]">
                Today, we serve builders, contractors, architects, tile dealers, and distributors across
                Karnataka, Telangana, Andhra Pradesh, Tamil Nadu, and Kerala, with a network of 100+
                dealer partners and growing.
              </p>
            </Col>
            <Col xs={24} lg={12} data-aos="fade-left">
              <div className="relative h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero/about-team.png"
                  alt="Kiran Industries Team"
                  fill
                  style={{ objectFit: 'cover', borderRadius: 16 }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black/85 p-6">
                  <div className="grid grid-cols-4 max-sm:grid-cols-2 max-[360px]:grid-cols-1 gap-4">
                    {stats.slice(0, 4).map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="font-display text-2xl font-black text-primary">{s.value}{s.suffix}</div>
                        <div className="text-[10px] text-white/60 uppercase tracking-[0.06em] mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section--warm">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }} data-aos="fade-up">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Direction</div>
            <h2 className="section-title">Vision & Mission</h2>
          </div>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12} data-aos="fade-right">
              <div className="group bg-white rounded-2xl p-10 h-full border border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                <div className="text-3xl text-primary mb-4"><TrophyOutlined /></div>
                <h3 className="font-display text-[22px] font-extrabold text-[#1A1A1A] mb-3.5">Our Vision</h3>
                <p className="text-[15px] text-[#595959] leading-relaxed">{vision}</p>
              </div>
            </Col>
            <Col xs={24} md={12} data-aos="fade-left">
              <div className="group bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] rounded-2xl p-10 h-full border border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(11,101,181,0.2)]">
                <div className="text-3xl text-primary mb-4"><GlobalOutlined /></div>
                <h3 className="font-display text-[22px] font-extrabold text-white mb-3.5">Our Mission</h3>
                <p className="text-[15px] text-white/65 leading-relaxed">{mission}</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Continental</div>
            <h2 className="section-title section-title--white">Why Choose Kiran Industries?</h2>
          </div>
          <Row gutter={[24, 24]}>
            {whyChooseUs.map((item) => (
              <Col xs={24} sm={12} lg={8} key={item.title} data-aos="fade-up">
                <div className="group bg-white/4 border border-white/7 rounded-2xl p-8 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden h-full before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary before:to-[#064885] before:opacity-0 before:z-0 before:transition-opacity before:duration-400 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:opacity-1 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,101,181,0.25)] hover:border-primary-light/40">
                  <CheckCircleFilled className="!text-2xl !text-primary mb-3.5 !block relative z-10 transition-all duration-400 ease group-hover:!text-primary-light group-hover:scale-110" />
                  <h3 className="font-display text-[17px] font-bold text-white mb-2 relative z-10 transition-colors duration-400">{item.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed relative z-10 transition-colors duration-400 group-hover:text-white/85">{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="section">
        <div className="container">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={10} data-aos="fade-right">
              <div className="section-label">Infrastructure</div>
              <h2 className="section-title">Manufacturing Facility</h2>
              <p className="text-[15.5px] text-[#595959] leading-[1.8] mb-[18px]">
                Our plant at Sy. No. 659/2, Mustor Road, Manvi – 583123 is a benchmark for automated
                construction chemical manufacturing in South India. Every batch is tested in our in-house
                laboratory before dispatch.
              </p>
              <div className="flex flex-col gap-3.5 mt-6">
                {manufacturing.infrastructure.map((item) => (
                  <div key={item.label} className="flex gap-3 items-start">
                    <CheckCircleFilled className="!text-base !text-primary mt-[3px] shrink-0" />
                    <div>
                      <div className="text-[14.5px] font-semibold text-[#1A1A1A] mb-0.5">{item.label}</div>
                      <div className="text-xs text-[#8C8C8C]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={24} lg={14} data-aos="fade-left">
              <Row gutter={[12, 12]}>
                <Col span={24}>
                  <div className="relative h-[280px] rounded-xl overflow-hidden">
                    <Image src="/images/gallery/manufacturing-facility.png" alt="Plant" fill style={{ objectFit: 'cover' }} />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="relative h-[180px] rounded-xl overflow-hidden">
                    <Image src="/images/gallery/warehouse.png" alt="Warehouse" fill style={{ objectFit: 'cover' }} />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="relative h-[180px] rounded-xl overflow-hidden">
                    <Image src="/images/gallery/construction-site.png" alt="Site" fill style={{ objectFit: 'cover' }} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section--warm">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Certifications</div>
            <h2 className="section-title">Triple ISO Certified Excellence</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our manufacturing facility maintains three internationally recognized ISO certifications,
              reflecting our commitment to quality, sustainability, and safety.
            </p>
          </div>
          <Row gutter={[24, 24]}>
            {certifications.map((cert) => (
              <Col xs={24} md={8} key={cert.id} data-aos="fade-up">
                <div className="bg-white rounded-2xl p-9 h-full border border-black/6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                  <div className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-[0.05em] py-1.5 px-3.5 border-2 rounded-md mb-5" style={{ borderColor: cert.color, color: cert.color }}>
                    <SafetyCertificateOutlined />
                    {cert.name}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-3">{cert.title}</h3>
                  <p className="text-sm text-[#595959] leading-relaxed mb-4">{cert.description}</p>
                  <div className="text-[12.5px] text-[#8C8C8C] pt-3.5 border-t border-[#f0f0f0] leading-relaxed">
                    <span>Scope: </span>{cert.scope}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="relative h-[320px] mt-12 rounded-2xl overflow-hidden">
            <Image src="/images/gallery/iso-certifications.png" alt="ISO Certifications" fill style={{ objectFit: 'cover', borderRadius: 16 }} />
          </div>
        </div>
      </section>
    </>
  );
}
