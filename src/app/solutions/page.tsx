'use client'

import React from 'react';
import { Row, Col, Steps, Collapse, Tag } from 'antd';
import { CheckCircleFilled, ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { solutions } from '@/data/company';

const applicationSteps = [
  { title: 'Surface Preparation', description: 'Clean, level, and prime the substrate for optimal adhesion.' },
  { title: 'Mixing', description: 'Mix Continental adhesive with water to achieve lump-free consistency.' },
  { title: 'Application', description: 'Apply with notched trowel in one direction for consistent coverage.' },
  { title: 'Tile Setting', description: 'Press and align tiles firmly within open time for strong bond.' },
  { title: 'Grouting', description: 'After 24 hours, apply Continental Super Grout for a perfect finish.' },
];

export default function SolutionsPage() {

  return (
    <>
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">Solutions</div>
          <h1 className="page-hero__title">
            The Right Product
            <br />
            <span className="text-primary">For Every Application</span>
          </h1>
          <p className="page-hero__subtitle">
            Whether you&apos;re tiling a bathroom or cladding an industrial façade, Continental has
            the engineered solution for your project.
          </p>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>By Segment</div>
            <h2 className="section-title">Solutions by Application Segment</h2>
          </div>
          <Row gutter={[24, 24]}>
            {solutions.map((sol) => (
              <Col xs={24} sm={12} lg={6} key={sol.id}>
                <div className="bg-white rounded-2xl p-7 h-full border border-black/6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(0,0,0,0.1)] group">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b-2" style={{ borderColor: sol.color }}>
                    <div className="font-display text-[40px] font-black leading-none opacity-20" style={{ color: sol.color }}>
                      {sol.title.charAt(0)}
                    </div>
                    <Tag style={{ borderColor: sol.color, color: sol.color, background: 'transparent', fontSize: 11, fontWeight: 600 }}>
                      {sol.subtitle}
                    </Tag>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-2.5">{sol.title}</h3>
                  <p className="text-[13.5px] text-[#595959] leading-relaxed mb-5">{sol.description}</p>
                  <div className="flex-1 mb-5">
                    <div className="text-[11px] font-bold tracking-wider uppercase text-[#8C8C8C] mb-2">Recommended Products:</div>
                    {sol.products.map((p) => (
                      <div key={p} className="flex items-center gap-1.5 text-xs text-[#404040] py-1">
                        <CheckCircleFilled style={{ color: '#0B65B5', fontSize: 11 }} />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/products" className="flex items-center gap-1.5 text-xs font-semibold text-primary no-underline transition-all duration-200 mt-auto group-hover:gap-2.5">
                    Explore Products <ArrowRightOutlined />
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Application Process */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Process</div>
            <h2 className="section-title section-title--white">Application Guide</h2>
            <p className="section-subtitle section-subtitle--white" style={{ margin: '0 auto' }}>
              Follow our step-by-step process for flawless tile adhesive application.
            </p>
          </div>
          <Steps
            current={-1}
            items={applicationSteps.map((step) => ({
              title: <span style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{step.title}</span>,
              content: <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{step.description}</span>,
            }))}
            style={{ '--ant-color-primary': '#0B65B5' } as React.CSSProperties}
          />
        </div>
      </section>

      {/* FAQ Collapse */}
      <section className="section section--warm">
        <div className="container">
          <Row gutter={[64, 48]}>
            <Col xs={24} lg={10}>
              <div className="section-label">FAQ</div>
              <h2 className="section-title">Common Questions</h2>
              <p className="text-[15.5px] text-[#595959] leading-relaxed mb-7">
                Get expert answers to the most common questions about Continental product selection
                and application.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 py-3 px-6 bg-[#1A1A1A] text-white border-none rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-200 hover:bg-primary hover:text-black hover:-translate-y-0.5">Ask Our Experts <ArrowRightOutlined /></button>
              </Link>
            </Col>
            <Col xs={24} lg={14}>
              <Collapse
                expandIconPlacement="end"
                bordered={false}
                className="bg-transparent"
                items={[
                  {
                    key: '1',
                    label: 'Which adhesive is best for vitrified tiles in bathrooms?',
                    children: <p style={{ color: '#595959', fontSize: 14, lineHeight: 1.7 }}>Continental Tile Adhesive Type 2 (C2 Grade) is ideal for vitrified tiles in wet areas like bathrooms. Its anti-slip technology and enhanced bond strength make it perfect for both floor and wall applications in moisture-prone environments.</p>,
                  },
                  {
                    key: '2',
                    label: 'Can I use Continental adhesive for exterior cladding?',
                    children: <p style={{ color: '#595959', fontSize: 14, lineHeight: 1.7 }}>Yes. Continental Tile Adhesive Type 3 is specifically formulated for exterior applications with weather and UV resistance. For highly flexible substrates like balconies, Type 4 (S1 deformable) is recommended.</p>,
                  },
                  {
                    key: '3',
                    label: 'What is the coverage of Continental Tile Adhesives?',
                    children: <p style={{ color: '#595959', fontSize: 14, lineHeight: 1.7 }}>Coverage varies by product and application. Type 1 covers approximately 4–5 sq.m per 20kg bag at 6mm bed thickness. Type 2–4 cover 3–4.5 sq.m per 20kg bag. Actual coverage depends on substrate flatness and tile size.</p>,
                  },
                  {
                    key: '4',
                    label: 'Is Ready Plaster suitable for exterior walls?',
                    children: <p style={{ color: '#595959', fontSize: 14, lineHeight: 1.7 }}>Yes, Continental Ready Plaster is suitable for both interior and exterior walls. Its factory-controlled formulation ensures superior workability, crack resistance, and consistent finish on any masonry surface.</p>,
                  },
                  {
                    key: '5',
                    label: 'What is the shelf life of Continental products?',
                    children: <p style={{ color: '#595959', fontSize: 14, lineHeight: 1.7 }}>Tile adhesives and Block Joint Mortar have a 12-month shelf life. Super Grouts have a 24-month shelf life. Ready Plaster should be used within 6 months. Always store in a cool, dry place away from moisture.</p>,
                  },
                ]}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-extrabold text-white mb-3">Not Sure Which Product to Choose?</h2>
          <p className="text-base text-white/65 mb-8">Our technical team will help you select the right product for your project.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact"><button className="py-3.5 px-8 bg-white text-black border-none rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-200 hover:bg-[#1A1A1A] hover:-translate-y-0.5">Talk to an Expert</button></Link>
            <Link href="/products"><button className="py-3.5 px-8 bg-transparent text-white border-2 border-white/30 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-200 hover:border-black hover:bg-black/7">View All Products</button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
