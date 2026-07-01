'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button, Row, Col, Card, Rate, Carousel, Tag, Statistic } from 'antd';
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  PlayCircleOutlined,
  StarFilled,
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { stats, whyChooseUs } from '@/data/company';
import { testimonials } from '@/data/testimonials';
import styles from './Home.module.css';

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
    <div ref={ref} className={styles.statItem}>
      <div className={styles.statValue}>
        {count}
        {suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

/* ---------- Home Page ---------- */
export default function HomePage() {
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
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            <span className={styles.heroDot} />
            South India&apos;s Premier Construction Material Brand
          </div>
          <h1 className={styles.heroTitle}>
            Building Tomorrow
            <br />
            <span className={styles.heroAccent}>Stronger, Faster</span>
            <br />
            With Continental
          </h1>
          <p className={styles.heroSubtitle}>
            Premium tile adhesives, ready plaster, block joint mortar and super grouts.
            Triple ISO certified. 20 TPH production. Pan South India distribution.
          </p>
          <div className={styles.heroActions}>
            <Link href="/products">
              <button className={`${styles.heroCta} ${styles.heroCtaPrimary}`}>
                Explore Products <ArrowRightOutlined />
              </button>
            </Link>
            <Link href="/request-quote">
              <button className={`${styles.heroCta} ${styles.heroCtaOutline}`}>
                Get a Quote
              </button>
            </Link>
          </div>
          <div className={styles.heroBadges}>
            <div className={styles.heroBadge}><CheckCircleFilled /> ISO 9001:2015</div>
            <div className={styles.heroBadge}><CheckCircleFilled /> ISO 14001:2015</div>
            <div className={styles.heroBadge}><CheckCircleFilled /> ISO 45001:2018</div>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <Image
            src="/images/hero/hero-manufacturing.png"
            alt="Continental Manufacturing Facility"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className={`${styles.heroBgImg} ${styles.heroBgImgDesktop}`}
          />
          <Image
            src="/images/hero/mobile-view-hero-page.png"
            alt="Continental Manufacturing Facility Mobile"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className={`${styles.heroBgImg} ${styles.heroBgImgMobile}`}
          />
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.heroScrollLine} />
          <span>Scroll</span>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className={styles.statsBar}>
        <div className={styles.statsInner} data-aos="fade-up">
          {stats.slice(0, 4).map((s) => (
            <AnimatedStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className={styles.aboutSection}>
        <div className="container">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={12} data-aos="fade-right">
              <div className={styles.aboutImageBlock}>
                <div className={styles.aboutImgMain}>
                  <Image
                    src="/images/hero/about-team.png"
                    alt="Kiran Industries Team"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.aboutImgAccent}>
                  <Image
                    src="/images/gallery/manufacturing-facility.png"
                    alt="Manufacturing Facility"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.aboutFloatCard}>
                  <div className={styles.floatCardValue}>20 TPH</div>
                  <div className={styles.floatCardLabel}>Production Capacity</div>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12} data-aos="fade-left">
              <div className={styles.aboutText}>
                <div className="section-label">About Kiran Industries</div>
                <h2 className="section-title">
                  Karnataka&apos;s Trusted Construction
                  <span className={styles.highlight}> Material Manufacturer</span>
                </h2>
                <p className={styles.aboutDesc}>
                  Founded with a vision to transform the construction materials landscape in South India,
                  Kiran Industries operates a fully automated 20 TPH manufacturing plant in Manvi, Karnataka.
                  Our Continental brand products are engineered for performance, durability, and ease of application.
                </p>
                <p className={styles.aboutDesc}>
                  Triple ISO certified and serving builders, contractors, and dealers across Karnataka,
                  Telangana, Andhra Pradesh, Tamil Nadu, and Kerala — we deliver quality that professionals trust.
                </p>
                <div className={styles.aboutFeatureList}>
                  {[
                    'Fully automated production line',
                    '2000+ ton warehouse capacity',
                    'In-house quality control lab',
                    'Pan South India distribution',
                  ].map((f) => (
                    <div key={f} className={styles.aboutFeatureItem}>
                      <CheckCircleFilled className={styles.checkIcon} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.aboutActions}>
                  <Link href="/about">
                    <button className={`${styles.heroCta} ${styles.heroCtaDark}`}>
                      Learn More <ArrowRightOutlined />
                    </button>
                  </Link>
                  <Link href="/manufacturing">
                    <button className={`${styles.heroCta} ${styles.heroCtaGhost}`}>
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
      <section className={`${styles.productsSection} section--warm`}>
        <div className="container">
          <div className={styles.sectionHead} data-aos="fade-up">
            <div>
              <div className="section-label">Product Portfolio</div>
              <h2 className="section-title">8 Engineered Solutions for<br />Every Construction Need</h2>
            </div>
            <Link href="/products">
              <button className={`${styles.heroCta} ${styles.heroCtaOutlineDark}`}>
                View All Products <ArrowRightOutlined />
              </button>
            </Link>
          </div>
          <div className={styles.productsGrid}>
            {products.map((product, idx) => (
              <Link key={product.id} href="/products" className={styles.productCard} data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className={styles.productCardImg}>
                  <Image
                    src={product.imageFront}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain', padding: '16px' }}
                  />
                  <div className={styles.productCardOverlay} />
                </div>
                <div className={styles.productCardBody}>
                  <Tag color={product.tagColor} className={styles.productTag}>
                    {product.grade}
                  </Tag>
                  <h3 className={styles.productCardName}>{product.shortName}</h3>
                  <p className={styles.productCardDesc}>{product.applications.slice(0, 2).join(' · ')}</p>
                  <span className={styles.productCardCta}>
                    View Details <ArrowRightOutlined />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className={`${styles.whySection} section--dark`}>
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
          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className={styles.whyCard} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className={styles.whyCardNum}>0{i + 1}</div>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MANUFACTURING SNAPSHOT ===== */}
      <section className={styles.mfgSection}>
        <div className="container">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={12} data-aos="fade-right">
              <div className="section-label">Manufacturing Facility</div>
              <h2 className="section-title">
                State-of-the-Art Plant
                <span className={styles.highlight}> in Karnataka</span>
              </h2>
              <p className={styles.aboutDesc}>
                Our 20 TPH automated production facility in Manvi, Raichur District, is equipped with
                advanced Plough Mixer technology, automated packaging lines, and a comprehensive quality
                control laboratory.
              </p>
              <div className={styles.mfgStats}>
                {[
                  { value: '20 TPH', label: 'Production Capacity' },
                  { value: '2000+', label: 'Ton Warehouse' },
                  { value: '100T', label: 'Cement Silo' },
                  { value: '50T', label: 'Fly Ash Silo' },
                ].map((s) => (
                  <div key={s.label} className={styles.mfgStatItem}>
                    <div className={styles.mfgStatValue}>{s.value}</div>
                    <div className={styles.mfgStatLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/manufacturing">
                <button className={`${styles.heroCta} ${styles.heroCtaPrimary}`}>
                  Explore Facility <ArrowRightOutlined />
                </button>
              </Link>
            </Col>
            <Col xs={24} lg={12} data-aos="fade-left">
              <div className={styles.mfgImageGrid}>
                <div className={styles.mfgImgLarge}>
                  <Image src="/images/gallery/manufacturing-facility.png" alt="Manufacturing" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.mfgImgSmall}>
                  <Image src="/images/gallery/warehouse.png" alt="Warehouse" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.mfgImgSmall}>
                  <Image src="/images/gallery/construction-site.png" alt="Site Application" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className={`${styles.testimonialSection} section--warm`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }} data-aos="fade-up">
            <div className="section-label" style={{ justifyContent: 'center' }}>Testimonials</div>
            <h2 className="section-title">Trusted by Builders Across South India</h2>
          </div>
          <Carousel
            ref={carouselRef}
            autoplay
            autoplaySpeed={2000}
            dots={{ className: styles.carouselDots }}
            slidesToShow={slidesToShow}
            slidesToScroll={1}
          >
            {testimonials.map((t) => (
              <div key={t.id} className={styles.testimonialSlide}>
                <div className={styles.testimonialCard}>
                  <Rate disabled defaultValue={t.rating} style={{ fontSize: 13, color: '#0B65B5' }} />
                  <p className={styles.testimonialText}>&ldquo;{t.review}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>{t.avatar}</div>
                    <div>
                      <div className={styles.testimonialName}>{t.name}</div>
                      <div className={styles.testimonialRole}>{t.role}, {t.company}</div>
                      <div className={styles.testimonialLocation}>{t.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div>
            <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
            <p className={styles.ctaSubtitle}>
              Get technical advice, product samples, or a custom quote from our team.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/request-quote">
              <button className={`${styles.heroCta} ${styles.heroCtaPrimary}`}>
                Request a Quote <ArrowRightOutlined />
              </button>
            </Link>
            <Link href="/contact">
              <button className={`${styles.heroCta} ${styles.heroCtaOutline}`}>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
