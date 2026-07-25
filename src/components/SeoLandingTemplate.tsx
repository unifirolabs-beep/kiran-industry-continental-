'use client';

// src/components/SeoLandingTemplate.tsx

import React from 'react';
import { Row, Col, Collapse, Button, Table } from 'antd';
import { CheckCircleFilled, InfoCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { type SeoLandingConfig } from '@/data/seoLandings';

interface SeoLandingTemplateProps {
  config: SeoLandingConfig;
}

export default function SeoLandingTemplate({ config }: SeoLandingTemplateProps) {
  // Build JSON-LD Schema based on config type
  const renderSchema = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let schemaObj: Record<string, any> = {};

    if (config.schemaType === 'Product') {
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": config.title,
        "image": "https://www.kiscontinental.com/logo.png",
        "description": config.metaDescription,
        "brand": {
          "@type": "Brand",
          "name": "KI'S Continental"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Kiran Industries"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "offerCount": "1",
          "lowPrice": "0",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "description": "Contact for B2B and wholesale commercial project quotes"
          }
        }
      };
    } else if (config.schemaType === 'LocalBusiness') {
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `KI'S Continental - ${config.keyword} Manufacturer`,
        "url": `https://www.kiscontinental.com/${config.slug}`,
        "image": "https://www.kiscontinental.com/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sy. #659/2, Mustor Road",
          "addressLocality": "Manvi",
          "addressRegion": "Karnataka",
          "postalCode": "583123",
          "addressCountry": "IN"
        },
        "telephone": "+91 99168 05972"
      };
    } else {
      // Default to general WebPage schema
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": config.title,
        "description": config.metaDescription,
        "publisher": {
          "@type": "Organization",
          "name": "Kiran Industries"
        }
      };
    }

    // Add FAQ schema if FAQs are defined
    const faqSchema = config.faqs && config.faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": config.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    } : null;

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </>
    );
  };

  const tableColumns = [
    { title: 'Technical Property', dataIndex: 'property', key: 'property', className: 'font-semibold text-[#111111]' },
    { title: 'Continental Standard Value', dataIndex: 'value', key: 'value' },
  ];

  const tableData = config.specs.map((spec, index) => ({
    key: index,
    property: spec.property,
    value: spec.value,
  }));

  return (
    <>
      {renderSchema()}

      {/* Hero Section */}
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">{config.keyword}</div>
          <h1 className="page-hero__title">
            {config.title.split(' ').slice(0, -2).join(' ')}{' '}
            <span className="text-primary">{config.title.split(' ').slice(-2).join(' ')}</span>
          </h1>
          <p className="page-hero__subtitle">{config.subtitle}</p>
          <div className="mt-8 flex gap-4 max-[480px]:flex-col max-[480px]:gap-3">
            <Link href={config.ctaLink}>
              <Button type="primary" className="!h-12 !px-7 !text-sm !font-bold !font-display !rounded-3xl !bg-gradient-to-br !from-primary !to-primary-dark !color-white !border-none !shadow-[0_6px_20px_rgba(11,101,181,0.3)] !transition-all !duration-300 !inline-flex !items-center !justify-center hover:!scale-[1.02] hover:!shadow-[0_10px_25px_rgba(11,101,181,0.45)] hover:!brightness-110 max-[480px]:!w-full max-[480px]:!h-11">
                {config.ctaText}
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="!h-12 !px-7 !text-sm !font-bold !font-display !rounded-3xl !border-2 !border-white !bg-transparent !color-white !transition-all !duration-300 hover:!bg-white hover:!color-black hover:!-translate-y-px max-[480px]:!w-full max-[480px]:!h-11">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="section bg-[#fafafa]">
        <div className="container">
          <Row gutter={[48, 48]}>
            {/* Left Content: Description & Features */}
            <Col xs={24} lg={14}>
              <div className="bg-white rounded-2xl p-10 border border-black/6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] max-md:p-6 max-md:rounded-xl">
                <h2 className="font-display text-2xl font-black text-[#1A1A1A] mb-6 border-l-4 border-primary pl-3 leading-none">
                  About {config.keyword}
                </h2>
                <p className="text-[15.5px] text-[#404040] leading-relaxed mb-8">{config.aboutText}</p>

                <h3 className="font-display text-[17px] font-bold text-[#1A1A1A] mb-4">Key Advantages</h3>
                <div className="flex flex-col gap-3">
                  {config.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircleFilled className="text-primary mt-1 text-base flex-shrink-0" />
                      <span className="text-[14.5px] text-[#595959] leading-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Right Content: Specs Table */}
            <Col xs={24} lg={10}>
              <div className="bg-white rounded-2xl p-8 border border-black/6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] max-md:p-6 max-md:rounded-xl sticky top-[90px]">
                <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                  <InfoCircleOutlined className="text-primary" /> Technical Data
                </h3>
                <Table 
                  columns={tableColumns} 
                  dataSource={tableData} 
                  pagination={false} 
                  bordered={false} 
                  size="middle"
                  className="w-full border-collapse"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* FAQs Section */}
      {config.faqs && config.faqs.length > 0 && (
        <section className="section bg-[#F5F4F0]/40 border-t border-b border-[#f0f0f0]">
          <div className="container">
            <div className="max-w-[800px] mx-auto">
              <div className="text-center mb-10">
                <div className="section-label justify-center">Answers</div>
                <h2 className="section-title">Frequently Asked Questions</h2>
              </div>
              <Collapse
                expandIconPlacement="end"
                bordered={false}
                className="bg-transparent"
                items={config.faqs.map((faq, idx) => ({
                  key: idx.toString(),
                  label: <span className="font-semibold text-sm text-[#111111]">{faq.question}</span>,
                  children: <p className="text-[14px] text-[#595959] leading-relaxed m-0">{faq.answer}</p>
                }))}
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Bottom Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-extrabold text-black mb-3 max-md:text-[28px]">
            Ready to Partner with KI&apos;S Continental?
          </h2>
          <p className="text-base text-black/65 mb-8 max-md:text-sm">
            Whether you are registering as a retail dealer or ordering wholesale dry mortars for bulk construction, our sales team is standing by.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/dealers">
              <button className="py-3.5 px-8 bg-black text-white border-none rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-200 hover:bg-[#1A1A1A] hover:-translate-y-0.5 max-md:w-full">
                Become a Dealer
              </button>
            </Link>
            <Link href="/request-quote">
              <button className="py-3.5 px-8 bg-transparent text-black border-2 border-black/30 rounded-lg text-sm font-semibold font-primary cursor-pointer transition-all duration-200 hover:border-black hover:bg-black/7 max-md:w-full">
                Bulk / Project Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
