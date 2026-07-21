'use client';

import React from 'react';
import { Row, Col } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';

const productLinks = [
  { label: 'Tile Adhesive Type 1', href: '/products' },
  { label: 'Tile Adhesive Type 2', href: '/products' },
  { label: 'Tile Adhesive Type 3', href: '/products' },
  { label: 'Tile Adhesive Type 4', href: '/products' },
  { label: 'Tile Adhesive Type 5', href: '/products' },
  { label: 'Ready Plaster', href: '/products' },
  { label: 'Block Joint Mortar', href: '/products' },
  { label: 'Super Grouts', href: '/products' },
];

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[rgba(255,255,255,0.75)]">
      {/* CTA Banner */}
      <div className="bg-gradient-to-br from-primary to-primary-light py-12">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h3 className="font-display text-[28px] font-extrabold text-black m-0 mb-1 tracking-[-0.02em]">Ready to Build Stronger?</h3>
            <p className="text-[15px] text-[rgba(0,0,0,0.65)] m-0">Get a free quote or find a dealer near you today.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/request-quote" className="inline-flex items-center py-3 px-7 bg-black text-white rounded-lg text-sm font-semibold no-underline transition-all duration-200 hover:bg-[#1A1A1A] hover:-translate-y-[1px]">
              Request a Quote
            </Link>
            <Link href="/dealers" className="inline-flex items-center py-3 px-7 bg-transparent text-black border-2 border-[rgba(0,0,0,0.3)] rounded-lg text-sm font-semibold no-underline transition-all duration-200 hover:border-black hover:bg-[rgba(0,0,0,0.08)]">
              Find Dealers
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-[72px] pb-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <Row gutter={[48, 40]}>
            {/* Brand Column */}
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="flex flex-col">
                <Link href="/" className="flex items-center gap-3 no-underline mb-5 shrink-0 transition-transform duration-300 ease hover:-translate-y-[0.5px]">
                  <div className="w-11 h-11 rounded-full overflow-hidden relative border-[1.5px] border-[rgba(255,255,255,0.2)] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex items-center justify-center shrink-0">
                    <Image
                      src="/logo/image.png"
                      alt="Kiran Industries"
                      width={44}
                      height={44}
                      className="absolute top-0 left-0 w-full h-full scale-140 -translate-y-[1px] origin-top object-cover"
                    />
                  </div>
                  <div className="flex flex-col leading-[1.15]">
                    <span className="font-display text-[19px] font-black text-white tracking-[0.05em]">KIRAN</span>
                    <span className="font-display text-[10px] font-bold text-primary-light tracking-[0.15em] mt-[1px]">INDUSTRIES</span>
                  </div>
                </Link>
                <p className="text-sm leading-[1.7] text-[rgba(255,255,255,0.55)] mb-5 max-w-[320px]">
                  South India&apos;s premier manufacturer of tile adhesives, ready plaster, block joint mortar,
                  and super grouts. Triple ISO certified excellence.
                </p>
                <div className="flex gap-2 flex-wrap mb-5">
                  <span className="text-[10px] font-semibold tracking-[0.05em] py-[3px] px-2 border border-[rgba(11,101,181,0.3)] rounded text-primary-light">ISO 9001</span>
                  <span className="text-[10px] font-semibold tracking-[0.05em] py-[3px] px-2 border border-[rgba(11,101,181,0.3)] rounded text-primary-light">ISO 14001</span>
                  <span className="text-[10px] font-semibold tracking-[0.05em] py-[3px] px-2 border border-[rgba(11,101,181,0.3)] rounded text-primary-light">ISO 45001</span>
                </div>
                <div className="flex gap-2">
                  <a href="#" aria-label="Instagram" className="w-[34px] h-[34px] rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(255,255,255,0.55)] text-sm transition-all duration-200 no-underline hover:bg-[rgba(11,101,181,0.15)] hover:border-[rgba(11,101,181,0.3)] hover:text-primary-light hover:-translate-y-[2px]"><InstagramOutlined /></a>
                  <a href="#" aria-label="Facebook" className="w-[34px] h-[34px] rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(255,255,255,0.55)] text-sm transition-all duration-200 no-underline hover:bg-[rgba(11,101,181,0.15)] hover:border-[rgba(11,101,181,0.3)] hover:text-primary-light hover:-translate-y-[2px]"><FacebookOutlined /></a>
                  <a href="#" aria-label="LinkedIn" className="w-[34px] h-[34px] rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(255,255,255,0.55)] text-sm transition-all duration-200 no-underline hover:bg-[rgba(11,101,181,0.15)] hover:border-[rgba(11,101,181,0.3)] hover:text-primary-light hover:-translate-y-[2px]"><LinkedinOutlined /></a>
                  <a href="#" aria-label="YouTube" className="w-[34px] h-[34px] rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(255,255,255,0.55)] text-sm transition-all duration-200 no-underline hover:bg-[rgba(11,101,181,0.15)] hover:border-[rgba(11,101,181,0.3)] hover:text-primary-light hover:-translate-y-[2px]"><YoutubeOutlined /></a>
                </div>
              </div>
            </Col>

            {/* Products */}
            <Col xs={24} sm={12} md={5} lg={5}>
              <h4 className="font-display text-sm font-bold tracking-[0.08em] uppercase text-white mb-5">Products</h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-0.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-1.5 text-[13.5px] text-[rgba(255,255,255,0.55)] no-underline py-1.5 transition-colors duration-200 hover:text-primary-light">
                      <RightOutlined className="text-[10px] text-primary-light opacity-60" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Quick Links */}
            <Col xs={24} sm={12} md={4} lg={4}>
              <h4 className="font-display text-sm font-bold tracking-[0.08em] uppercase text-white mb-5">Quick Links</h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-0.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-1.5 text-[13.5px] text-[rgba(255,255,255,0.55)] no-underline py-1.5 transition-colors duration-200 hover:text-primary-light">
                      <RightOutlined className="text-[10px] text-primary-light opacity-60" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Contact */}
            <Col xs={24} sm={24} md={7} lg={7}>
              <h4 className="font-display text-sm font-bold tracking-[0.08em] uppercase text-white mb-5">Contact Us</h4>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-start text-[13.5px] text-[rgba(255,255,255,0.6)] leading-[1.6]">
                  <EnvironmentOutlined className="text-primary-light text-[15px] mt-[2px] shrink-0" />
                  <span>Sy. #659/2, Mustor Road,<br />Manavi – 583123,<br />Raichur District, Karnataka</span>
                </div>
                <div className="flex gap-3 items-start text-[13.5px] text-[rgba(255,255,255,0.6)] leading-[1.6]">
                  <PhoneOutlined className="text-primary-light text-[15px] mt-[2px] shrink-0" />
                  <div>
                    <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`} className="text-[rgba(255,255,255,0.6)] no-underline transition-colors duration-200 hover:text-primary-light">
                      {company.contact.phone1}
                    </a>
                    <br />
                    <a href={`tel:${company.contact.phone2.replace(/\s+/g, '')}`} className="text-[rgba(255,255,255,0.6)] no-underline transition-colors duration-200 hover:text-primary-light">
                      {company.contact.phone2}
                    </a>
                    <br />
                    <a href={`tel:${company.contact.phone3.replace(/\s+/g, '')}`} className="text-[rgba(255,255,255,0.6)] no-underline transition-colors duration-200 hover:text-primary-light">
                      {company.contact.phone3}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start text-[13.5px] text-[rgba(255,255,255,0.6)] leading-[1.6]">
                  <MailOutlined className="text-primary-light text-[15px] mt-[2px] shrink-0" />
                  <div>
                    <a href={`mailto:${company.contact.email1}`} className="text-[rgba(255,255,255,0.6)] no-underline transition-colors duration-200 hover:text-primary-light">
                      {company.contact.email1}
                    </a>
                    <br />
                    <a href={`mailto:${company.contact.email2}`} className="text-[rgba(255,255,255,0.6)] no-underline transition-colors duration-200 hover:text-primary-light">
                      {company.contact.email2}
                    </a>
                    <br />
                    <a href={`mailto:${company.contact.email3}`} className="text-[rgba(255,255,255,0.6)] no-underline transition-colors duration-200 hover:text-primary-light">
                      {company.contact.email3}
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[rgba(255,255,255,0.06)] py-5">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-[13px] text-[rgba(255,255,255,0.35)] m-0">
            © {new Date().getFullYear()} Kiran Industries. All rights reserved. Brand: Continental.
          </p>
          <div className="flex items-center gap-2">
            <Link href="/privacy-policy" className="text-[13px] text-[rgba(255,255,255,0.35)] no-underline transition-colors duration-200 hover:text-primary-light">Privacy Policy</Link>
            <span className="text-[rgba(255,255,255,0.2)]">·</span>
            <Link href="/terms" className="text-[13px] text-[rgba(255,255,255,0.35)] no-underline transition-colors duration-200 hover:text-primary-light">Terms of Service</Link>
            <span className="text-[rgba(255,255,255,0.2)]">·</span>
            <Link href="/downloads" className="text-[13px] text-[rgba(255,255,255,0.35)] no-underline transition-colors duration-200 hover:text-primary-light">Downloads</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
