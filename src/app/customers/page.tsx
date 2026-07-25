'use client'

import React from 'react';
import { Row, Col, Rate } from 'antd';
import { HomeOutlined, BankOutlined, ToolOutlined, ApartmentOutlined, FlagOutlined, TeamOutlined } from '@ant-design/icons';
import { industries } from '@/data/company';
import { testimonials } from '@/data/testimonials';
import Link from 'next/link';

const industryIcons: Record<string, React.ReactNode> = {
  'HomeOutlined': <HomeOutlined />,
  'BankOutlined': <BankOutlined />,
  'ToolOutlined': <ToolOutlined />,
  'ApartmentOutlined': <ApartmentOutlined />,
  'FlagOutlined': <FlagOutlined />,
  'BuildOutlined': <BankOutlined />,
  'TeamOutlined': <TeamOutlined />,
  'ShopOutlined': <BankOutlined />,
};

export default function CustomersPage() {

  return (
    <>
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">Our Customers</div>
          <h1 className="page-hero__title">
            Trusted by Builders
            <br />
            <span className="text-primary">Across South India</span>
          </h1>
          <p className="page-hero__subtitle">
            From residential builders to large infrastructure contractors — Continental products power
            construction projects across 5 states.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Industries Served</div>
            <h2 className="section-title">Who We Serve</h2>
          </div>
          <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-2">
            {industries.map((ind) => (
              <div key={ind.label} className="bg-white rounded-2xl py-7 px-5 text-center border border-black/6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] hover:border-[rgba(11,101,181,0.2)]">
                <div className="text-3xl text-primary mb-3">
                  {industryIcons[ind.icon] || <TeamOutlined />}
                </div>
                <div className="text-sm font-semibold text-[#1A1A1A] leading-snug">{ind.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--dark">
        <div className="container">
          <Row gutter={[32, 32]}>
            {[
              { value: '5+', label: 'States', desc: 'Karnataka, Telangana, Andhra Pradesh, Tamil Nadu, Kerala' },
              { value: '100+', label: 'Dealer Partners', desc: 'Extensive dealer network across South India' },
              { value: '500+', label: 'Projects Served', desc: 'Residential, commercial, and infrastructure projects' },
              { value: '10,000+', label: 'Satisfied Customers', desc: 'Builders, contractors, and end users' },
            ].map((s) => (
              <Col xs={12} md={6} key={s.label}>
                <div className="text-center py-8 px-4">
                  <div className="font-display text-[44px] font-black text-primary leading-none mb-1.5">{s.value}</div>
                  <div className="text-sm font-bold text-white mb-2">{s.label}</div>
                  <div className="text-xs text-white/45 leading-relaxed">{s.desc}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--warm">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>What They Say</div>
            <h2 className="section-title">Customer Testimonials</h2>
          </div>
          <Row gutter={[24, 24]}>
            {testimonials.map((t) => (
              <Col xs={24} md={12} lg={8} key={t.id}>
                <div className="bg-white rounded-2xl p-7 border border-black/6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                  <Rate disabled defaultValue={t.rating} style={{ fontSize: 13, color: '#0B65B5' }} />
                  <p className="text-sm text-[#404040] leading-relaxed my-3.5 mb-5 italic flex-1">&ldquo;{t.review}&rdquo;</p>
                  <div className="flex items-center gap-3 border-t border-[#f0f0f0] pt-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-sm font-bold text-black shrink-0">{t.avatar}</div>
                    <div>
                      <div className="text-sm font-bold text-[#1A1A1A]">{t.name}</div>
                      <div className="text-[12.5px] text-[#8C8C8C]">{t.role}, {t.company}</div>
                      <div className="text-[11.5px] text-primary font-medium">{t.location}</div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-extrabold text-white mb-3 tracking-tight">Join Our Growing Customer Base</h2>
          <p className="text-base text-white/55 mb-8">Experience the Continental difference for your next project.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact"><button className="py-3.5 px-8 bg-primary text-black border-none rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-200 hover:bg-primary-light hover:-translate-y-0.5">Contact Us Today</button></Link>
            <Link href="/dealers"><button className="py-3.5 px-8 bg-transparent text-white border-2 border-white/30 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-200 hover:border-white/60 hover:bg-white/6">Become a Dealer</button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
