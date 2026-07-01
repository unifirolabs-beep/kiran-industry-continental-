'use client';

import React, { useState } from 'react';
import { Form, Input, Select, Button, Row, Col, App } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { company } from '@/data/company';
import styles from './contact.module.css';

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
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Contact Us</div>
          <h1 className="page-hero__title">
            Get in Touch
            <br />
            <span style={{ color: '#0B65B5' }}>With Our Team</span>
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
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><EnvironmentOutlined /></div>
                <h3 className={styles.infoTitle}>Address</h3>
                <p className={styles.infoText}>
                  Sy. #659/2, Mustor Road,<br />
                  Manavi – 583123,<br />
                  Raichur District, Karnataka
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><PhoneOutlined /></div>
                <h3 className={styles.infoTitle}>Phone</h3>
                <p className={styles.infoText}>
                  <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`}>{company.contact.phone1}</a><br />
                  <a href={`tel:${company.contact.phone2.replace(/\s+/g, '')}`}>{company.contact.phone2}</a><br />
                  <a href={`tel:${company.contact.phone3.replace(/\s+/g, '')}`}>{company.contact.phone3}</a>
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><MailOutlined /></div>
                <h3 className={styles.infoTitle}>Email</h3>
                <p className={styles.infoText}>
                  <a href={`mailto:${company.contact.email1}`}>{company.contact.email1}</a><br />
                  <a href={`mailto:${company.contact.email2}`}>{company.contact.email2}</a><br />
                  <a href={`mailto:${company.contact.email3}`}>{company.contact.email3}</a>
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><ClockCircleOutlined /></div>
                <h3 className={styles.infoTitle}>Working Hours</h3>
                <p className={styles.infoText}>
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
              <div className={styles.formCard}>
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
              <div className={styles.mapWrap}>
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
              <div className={styles.mapAddress}>
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
