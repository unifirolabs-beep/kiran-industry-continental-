'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Row, Col, Rate, Carousel, Tag } from 'antd';
import {
  ArrowRightOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { stats, whyChooseUs } from '@/data/company';
import { testimonials } from '@/data/testimonials';

/* ---------- Animated Counter ---------- */
function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseInt(value, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 40);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="py-9 px-6 text-center border-r border-white/6 last:border-r-0 relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:bg-primary before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-3/5 max-md:border-r-0 max-md:bg-white/2 max-md:border max-md:border-white/5 max-md:rounded-xl max-md:py-6 max-md:px-4">
      <div className="font-display text-4xl font-black text-white tracking-[-0.02em] leading-none mb-1.5 max-md:text-[32px]">
        {count}
        {suffix}
      </div>
      <div className="text-xs font-medium text-white/45 tracking-widest uppercase">{label}</div>
    </div>
  );
}

/* ---------- Home Page ---------- */
export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = useRef<any>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 z-0" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(105deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.7)_50%,rgba(0,0,0,0.3)_100%)]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-[120px] pb-20 w-full">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-6">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse" />
            South India&apos;s Premier Construction Material Brand
          </div>
          <h1 className="font-display text-[clamp(36px,8vw,80px)] font-black text-white leading-[1.05] tracking-[-0.03em] mb-6">
            Building Tomorrow
            <br />
            <span className="text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Stronger, Faster</span>
            <br />
            With Continental
          </h1>
          <p className="text-[17px] text-white/70 max-w-[520px] leading-relaxed mb-9">
            Premium tile adhesives, ready plaster, block joint mortar and super grouts.
            Triple ISO certified. 20 TPH production. Pan South India distribution.
          </p>
          <div className="flex gap-3 flex-wrap mb-12">
            <Link href="/products">
              <button className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-250 border-2 border-transparent whitespace-nowrap tracking-wide no-underline bg-primary text-black border-primary hover:bg-primary-light hover:border-primary-light hover:-translate-y-0.5 hover:shadow-gold">
                Explore Products <ArrowRightOutlined />
              </button>
            </Link>
            <Link href="/request-quote">
              <button className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-250 border-2 border-transparent whitespace-nowrap tracking-wide no-underline bg-transparent text-white border-white/35 hover:bg-white/8 hover:border-white/65">
                Get a Quote
              </button>
            </Link>
          </div>
          <div className="flex gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs font-medium text-white/55 py-1.5 px-3 border border-white/10 rounded-[20px] bg-white/4"><CheckCircleFilled className="text-primary text-[11px]" /> ISO 9001:2015</div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-white/55 py-1.5 px-3 border border-white/10 rounded-[20px] bg-white/4"><CheckCircleFilled className="text-primary text-[11px]" /> ISO 14001:2015</div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-white/55 py-1.5 px-3 border border-white/10 rounded-[20px] bg-white/4"><CheckCircleFilled className="text-primary text-[11px]" /> ISO 45001:2018</div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-manufacturing.png"
            alt="Continental Manufacturing Facility"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="object-center block max-md:hidden"
          />
          <Image
            src="/images/hero/mobile-view-hero-page.png"
            alt="Continental Manufacturing Facility Mobile"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="object-center hidden max-md:block"
          />
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/35 text-[11px] tracking-widest uppercase">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent animate-[scrollLine_1.8s_ease_infinite]" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#1A1A1A] p-0">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-4 border-t border-white/4 max-md:grid-cols-2 max-md:gap-4 max-md:py-6" data-colors-theme="dark" data-aos="fade-up">
          {stats.slice(0, 4).map((s) => (
            <AnimatedStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-24">
        <div className="container">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={12} data-aos="fade-right">
              <div className="relative h-[520px] max-md:h-[320px]">
                <div className="absolute left-0 top-0 w-3/4 h-[85%] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero/about-team.png"
                    alt="Kiran Industries Team"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="absolute right-0 bottom-0 w-[48%] h-[52%] rounded-xl overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/images/gallery/manufacturing-facility.png"
                    alt="Manufacturing Facility"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="absolute top-8 right-0 bg-gradient-to-br from-primary to-primary-light rounded-xl py-4 px-5 text-center shadow-gold z-10">
                  <div className="font-display text-2xl font-black text-black">20 TPH</div>
                  <div className="text-[11px] font-semibold text-black/65 uppercase tracking-wider mt-0.5">Production Capacity</div>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12} data-aos="fade-left">
              <div>
                <div className="section-label">About Kiran Industries</div>
                <h2 className="section-title">
                  Karnataka&apos;s Trusted Construction
                  <span className="text-primary"> Material Manufacturer</span>
                </h2>
                <p className="text-[15.5px] text-[#595959] leading-[1.75] mb-4">
                  Founded with a vision to transform the construction materials landscape in South India,
                  Kiran Industries operates a fully automated 20 TPH manufacturing plant in Manvi, Karnataka.
                  Our Continental brand products are engineered for performance, durability, and ease of application.
                </p>
                <p className="text-[15.5px] text-[#595959] leading-[1.75] mb-4">
                  Triple ISO certified and serving builders, contractors, and dealers across Karnataka,
                  Telangana, Andhra Pradesh, Tamil Nadu, and Kerala — we deliver quality that professionals trust.
                </p>
                <div className="flex flex-col gap-2.5 my-6 mb-8">
                  {[
                    'Fully automated production line',
                    '2000+ ton warehouse capacity',
                    'In-house quality control lab',
                    'Pan South India distribution',
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-[14.5px] text-[#404040] font-medium">
                      <CheckCircleFilled className="!text-primary !text-base shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/about">
                    <button className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-250 border-2 border-transparent whitespace-nowrap tracking-wide no-underline bg-[#1A1A1A] text-white border-[#1A1A1A] hover:bg-[#2D2D2D] hover:border-[#2D2D2D] hover:-translate-y-0.5">
                      Learn More <ArrowRightOutlined />
                    </button>
                  </Link>
                  <Link href="/manufacturing">
                    <button className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-250 border-2 border-transparent whitespace-nowrap tracking-wide no-underline bg-transparent text-[#1A1A1A] border-black/25 hover:bg-black/5 hover:border-black/50">
                      View Facility
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ===== PRODUCTS HIGHLIGHT ===== */}
      <section className="py-24 bg-[#F5F4F0] section--warm">
        <div className="container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-5" data-aos="fade-up">
            <div>
              <div className="section-label">Product Portfolio</div>
              <h2 className="section-title">8 Engineered Solutions for<br />Every Construction Need</h2>
            </div>
            <Link href="/products">
              <button className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-250 border-2 border-transparent whitespace-nowrap tracking-wide no-underline bg-transparent text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white">
                View All Products <ArrowRightOutlined />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
            {products.map((product, idx) => (
              <Link key={product.id} href="/products" className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 no-underline shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-black/5 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:border-[rgba(11,101,181,0.2)]" data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className="relative h-[200px] overflow-hidden bg-[#F5F4F0]">
                  <Image
                    src={product.imageFront}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain', padding: '16px' }}
                    className="transition-transform duration-500 ease group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15" />
                </div>
                <div className="p-5 flex-1 flex flex-col gap-1.5">
                  <Tag color={product.tagColor} className="w-fit text-[11px] font-semibold tracking-wider">
                    {product.grade}
                  </Tag>
                  <h3 className="font-display text-sm font-bold text-[#1A1A1A] leading-snug my-1 mt-1">{product.shortName}</h3>
                  <p className="text-[12.5px] text-[#8C8C8C] mb-2">{product.applications.slice(0, 2).join(' · ')}</p>
                  <span className="flex items-center gap-1 text-[12.5px] font-semibold text-primary mt-auto transition-[gap] duration-200 group-hover:gap-2">
                    View Details <ArrowRightOutlined />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 bg-[#111111] section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
            <h2 className="section-title section-title--white">
              The Continental Advantage
            </h2>
            <p className="section-subtitle section-subtitle--white" style={{ margin: '0 auto' }}>
              Six reasons why 100+ dealers and thousands of contractors choose Continental products.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[1px] bg-white/5 rounded-2xl overflow-hidden max-[900px]:grid-cols-2 max-[900px]:bg-transparent max-[900px]:gap-4 max-[900px]:p-0 max-sm:grid-cols-1 max-sm:bg-transparent max-sm:gap-4 max-sm:p-0">
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className="group bg-[#1A1A1A] py-10 px-8 border border-white/[0.03] relative transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gradient-to-br hover:from-primary hover:to-primary-light hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,101,181,0.35)] hover:border-white/25 hover:z-10 max-[900px]:rounded-xl max-[900px]:border-white/8" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="font-display text-5xl font-black text-primary/15 leading-none mb-4 tracking-tight transition-colors duration-400 group-hover:text-white/25">0{i + 1}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2.5 transition-colors duration-400">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed transition-colors duration-400 group-hover:text-white/95">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MANUFACTURING SNAPSHOT ===== */}
      <section className="py-24">
        <div className="container">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={12} data-aos="fade-right">
              <div className="section-label">Manufacturing Facility</div>
              <h2 className="section-title">
                State-of-the-Art Plant
                <span className="text-primary"> in Karnataka</span>
              </h2>
              <p className="text-[15.5px] text-[#595959] leading-[1.75] mb-4">
                Our 20 TPH automated production facility in Manvi, Raichur District, is equipped with
                advanced Plough Mixer technology, automated packaging lines, and a comprehensive quality
                control laboratory.
              </p>
              <div className="grid grid-cols-4 max-sm:grid-cols-2 max-[390px]:grid-cols-1 gap-4 my-8 mb-9">
                {[
                  { value: '20 TPH', label: 'Production Capacity' },
                  { value: '2000+', label: 'Ton Warehouse' },
                  { value: '100T', label: 'Cement Silo' },
                  { value: '50T', label: 'Fly Ash Silo' },
                ].map((s) => (
                  <div key={s.label} className="bg-[#F5F4F0] rounded-xl p-4 text-center border border-black/5">
                    <div className="font-display text-2xl font-black text-primary leading-none mb-1">{s.value}</div>
                    <div className="text-[11px] font-medium text-[#8C8C8C] tracking-wider uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/manufacturing">
                <button className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-250 border-2 border-transparent whitespace-nowrap tracking-wide no-underline bg-primary text-black border-primary hover:bg-primary-light hover:border-primary-light hover:-translate-y-0.5 hover:shadow-gold">
                  Explore Facility <ArrowRightOutlined />
                </button>
              </Link>
            </Col>
            <Col xs={24} lg={12} data-aos="fade-left">
              <div className="grid grid-cols-2 grid-rows-[280px_200px] gap-3 rounded-2xl overflow-hidden">
                <div className="col-span-2 relative rounded-xl overflow-hidden">
                  <Image src="/images/gallery/manufacturing-facility.png" alt="Manufacturing" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image src="/images/gallery/warehouse.png" alt="Warehouse" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image src="/images/gallery/construction-site.png" alt="Site Application" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-[#F5F4F0] section--warm">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }} data-aos="fade-up">
            <div className="section-label" style={{ justifyContent: 'center' }}>Testimonials</div>
            <h2 className="section-title">Trusted by Builders Across South India</h2>
          </div>
          <Carousel
            ref={carouselRef}
            autoplay
            autoplaySpeed={2000}
            slidesToShow={slidesToShow}
            slidesToScroll={1}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="px-2.5">
                <div className="bg-white rounded-2xl p-7 h-full border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                  <Rate disabled defaultValue={t.rating} style={{ fontSize: 13, color: '#0B65B5' }} />
                  <p className="text-[14.5px] text-[#404040] leading-relaxed my-3.5 mb-5 italic">&ldquo;{t.review}&rdquo;</p>
                  <div className="flex items-center gap-3 border-t border-[#f0f0f0] pt-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-sm font-bold text-black shrink-0">{t.avatar}</div>
                    <div>
                      <div className="text-sm font-bold text-[#1A1A1A]">{t.name}</div>
                      <div className="text-[12.5px] text-[#8C8C8C]">{t.role}, {t.company}</div>
                      <div className="text-[11.5px] text-primary font-medium">{t.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] py-20">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between flex-wrap gap-8">
          <div>
            <h2 className="font-display text-4xl font-extrabold text-white m-0 mb-2 tracking-tight">Ready to Start Your Project?</h2>
            <p className="text-base text-white/55 m-0">
              Get technical advice, product samples, or a custom quote from our team.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/request-quote">
              <button className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-250 border-2 border-transparent whitespace-nowrap tracking-wide no-underline bg-primary text-black border-primary hover:bg-primary-light hover:border-primary-light hover:-translate-y-0.5 hover:shadow-gold">
                Request a Quote <ArrowRightOutlined />
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 py-3.5 px-7 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-250 border-2 border-transparent whitespace-nowrap tracking-wide no-underline bg-transparent text-white border-white/35 hover:bg-white/8 hover:border-white/65">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
