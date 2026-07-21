'use client';

import React, { useState } from 'react';
import { Form, Input, Select, Button, Row, Col, App } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { company } from '@/data/company';

const { TextArea } = Input;

export default function ContactPage() {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    message.success('Message sent! We will respond within 24 hours.');
    form.resetFields();
  };

  return (
    <>
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">Contact Us</div>
          <h1 className="page-hero__title">
            Get in Touch
            <br />
            <span className="text-primary">With Our Team</span>
          </h1>
          <p className="page-hero__subtitle">
            Have a project query, need technical advice, or want to discuss a dealership? Our team
            is ready to help you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <Row gutter={[24, 24]} style={{ marginBottom: 64 }}>
            <Col xs={24} sm={12} lg={6}>
              <div className="bg-white rounded-2xl p-7 text-center border border-black/6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 h-full hover:-translate-y-[3px] hover:shadow-[0_10px_36px_rgba(0,0,0,0.1)] hover:border-[rgba(11,101,181,0.2)]">
                <div className="text-3xl text-primary mb-3"><EnvironmentOutlined /></div>
                <h3 className="font-display text-base font-bold text-[#1A1A1A] mb-2">Address</h3>
                <p className="text-sm text-[#595959] leading-relaxed">
                  Sy. #659/2, Mustor Road,<br />
                  Manavi – 583123,<br />
                  Raichur District, Karnataka
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <div className="bg-white rounded-2xl p-7 text-center border border-black/6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 h-full hover:-translate-y-[3px] hover:shadow-[0_10px_36px_rgba(0,0,0,0.1)] hover:border-[rgba(11,101,181,0.2)]">
                <div className="text-3xl text-primary mb-3"><PhoneOutlined /></div>
                <h3 className="font-display text-base font-bold text-[#1A1A1A] mb-2">Phone</h3>
                <p className="text-sm text-[#595959] leading-relaxed">
                  <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`} className="text-primary no-underline hover:underline">{company.contact.phone1}</a><br />
                  <a href={`tel:${company.contact.phone2.replace(/\s+/g, '')}`} className="text-primary no-underline hover:underline">{company.contact.phone2}</a><br />
                  <a href={`tel:${company.contact.phone3.replace(/\s+/g, '')}`} className="text-primary no-underline hover:underline">{company.contact.phone3}</a>
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <div className="bg-white rounded-2xl p-7 text-center border border-black/6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 h-full hover:-translate-y-[3px] hover:shadow-[0_10px_36px_rgba(0,0,0,0.1)] hover:border-[rgba(11,101,181,0.2)]">
                <div className="text-3xl text-primary mb-3"><MailOutlined /></div>
                <h3 className="font-display text-base font-bold text-[#1A1A1A] mb-2">Email</h3>
                <p className="text-sm text-[#595959] leading-relaxed">
                  <a href={`mailto:${company.contact.email1}`} className="text-primary no-underline hover:underline">{company.contact.email1}</a><br />
                  <a href={`mailto:${company.contact.email2}`} className="text-primary no-underline hover:underline">{company.contact.email2}</a><br />
                  <a href={`mailto:${company.contact.email3}`} className="text-primary no-underline hover:underline">{company.contact.email3}</a>
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <div className="bg-white rounded-2xl p-7 text-center border border-black/6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 h-full hover:-translate-y-[3px] hover:shadow-[0_10px_36px_rgba(0,0,0,0.1)] hover:border-[rgba(11,101,181,0.2)]">
                <div className="text-3xl text-primary mb-3"><ClockCircleOutlined /></div>
                <h3 className="font-display text-base font-bold text-[#1A1A1A] mb-2">Working Hours</h3>
                <p className="text-sm text-[#595959] leading-relaxed">
                  Monday – Saturday<br />
                  9:00 AM – 6:00 PM IST<br />
                  <span style={{ color: '#52c41a', fontSize: 12, fontWeight: 600 }}>● Open Now</span>
                </p>
              </div>
            </Col>
          </Row>

          {/* Form + Map */}
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div className="section-label">Send Message</div>
              <h2 className="section-title" style={{ fontSize: 28 }}>Send Us a Message</h2>
              <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-black/6">
                <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
                        <Input placeholder="Your name" size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
                        <Input placeholder="+91 XXXXXXXXXX" size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input placeholder="email@example.com" size="large" />
                  </Form.Item>
                  <Form.Item name="subject" label="Subject">
                    <Select placeholder="Select a topic" size="large">
                      <Select.Option value="product">Product Inquiry</Select.Option>
                      <Select.Option value="quote">Request a Quote</Select.Option>
                      <Select.Option value="dealer">Dealership Inquiry</Select.Option>
                      <Select.Option value="technical">Technical Support</Select.Option>
                      <Select.Option value="other">Other</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="message" label="Message" rules={[{ required: true }]}>
                    <TextArea rows={5} placeholder="Type your message here..." />
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    block
                    style={{ background: '#0B65B5', borderColor: '#0B65B5', color: '#000', fontWeight: 700, height: 48 }}
                  >
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>

            {/* Map */}
            <Col xs={24} lg={12}>
              <div className="section-label">Find Us</div>
              <h2 className="section-title" style={{ fontSize: 28 }}>Our Location</h2>
              <div className="w-full h-[380px] rounded-2xl overflow-hidden border border-black/8 shadow-[0_4px_20px_rgba(0,0,0,0.07)] mb-4">
                <iframe
                  src={company.location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kiran Industries Location"
                />
              </div>
              <div className="text-sm text-[#595959] py-3.5 px-4 bg-[#F5F4F0] rounded-lg">
                <EnvironmentOutlined style={{ color: '#0B65B5', marginRight: 8 }} />
                Sy. #659/2, Mustor Road, Manavi – 583123, Raichur District, Karnataka, India
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
