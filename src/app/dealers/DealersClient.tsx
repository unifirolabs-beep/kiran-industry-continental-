'use client';

import React from 'react';
import { Form, Input, Select, InputNumber, Button, Row, Col, App } from 'antd';
import { CheckCircleFilled, ArrowRightOutlined, TrophyOutlined, CustomerServiceOutlined, CarOutlined, ToolOutlined } from '@ant-design/icons';
import { company } from '@/data/company';
import styles from './dealers.module.css';

const { TextArea } = Input;

const dealerBenefits = [
  { icon: <TrophyOutlined />, title: 'Exclusive Territory', desc: 'Protect your market with a dedicated exclusive dealership zone.' },
  { icon: <CustomerServiceOutlined />, title: 'Marketing Support', desc: 'Co-branded marketing materials, hoardings, and digital promotion.' },
  { icon: <ToolOutlined />, title: 'Technical Training', desc: 'Regular product training and on-site technical assistance.' },
  { icon: <CarOutlined />, title: 'Fast Delivery', desc: 'Reliable logistics from our 2000+ ton warehouse to your location.' },
];

export default function DealersPage() {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  const onFinish = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    message.success('Thank you! Our team will contact you within 24 hours.');
    form.resetFields();
  };

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="page-hero__label">Dealer Network</div>
          <h1 className="page-hero__title">
            Partner with
            <br />
            <span style={{ color: '#0B65B5' }}>Continental</span>
          </h1>
          <p className="page-hero__subtitle">
            Join South India&apos;s fastest-growing construction material brand as an authorized dealer
            and build a profitable business with our full support.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Partner With Us</div>
            <h2 className="section-title">Dealer Benefits</h2>
          </div>
          <Row gutter={[24, 24]}>
            {dealerBenefits.map((b) => (
              <Col xs={24} sm={12} lg={6} key={b.title}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{b.icon}</div>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* How to Become */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Process</div>
            <h2 className="section-title section-title--white">How to Become a Dealer</h2>
          </div>
          <div className={styles.stepsGrid}>
            {[
              { num: '01', title: 'Submit Application', desc: 'Fill out the dealer registration form below with your business details.' },
              { num: '02', title: 'Team Review', desc: 'Our regional sales team reviews your application within 48 hours.' },
              { num: '03', title: 'Meeting & Presentation', desc: 'We schedule a meeting to discuss territory, products, and terms.' },
              { num: '04', title: 'Onboarding & Training', desc: 'Sign agreement, receive product training, and start selling.' },
            ].map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section section--warm">
        <div className="container">
          <Row gutter={[64, 48]}>
            <Col xs={24} lg={10}>
              <div className="section-label">Registration</div>
              <h2 className="section-title">Dealer Registration Form</h2>
              <p className={styles.formIntro}>
                Ready to join the Continental family? Fill out this form and our team will reach out
                within 24 working hours to discuss dealership terms for your area.
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Phone</span>
                  <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`}>{company.contact.phone1}</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href={`mailto:${company.contact.email1}`}>{company.contact.email1}</a>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={14}>
              <div className={styles.formCard}>
                <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Please enter your name' }]}>
                        <Input placeholder="Your name" size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please enter phone' }]}>
                        <Input placeholder="+91 XXXXXXXXXX" size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item name="email" label="Email Address" rules={[{ required: true, type: 'email', message: 'Please enter valid email' }]}>
                        <Input placeholder="email@example.com" size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="business" label="Business Name" rules={[{ required: true }]}>
                        <Input placeholder="Your shop / company name" size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item name="district" label="District / Location" rules={[{ required: true }]}>
                        <Input placeholder="District, State" size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="experience" label="Years in Building Materials">
                        <Select placeholder="Select experience" size="large">
                          <Select.Option value="0-1">Less than 1 year</Select.Option>
                          <Select.Option value="1-3">1–3 years</Select.Option>
                          <Select.Option value="3-5">3–5 years</Select.Option>
                          <Select.Option value="5+">5+ years</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item name="investment" label="Expected Monthly Turnover (₹)">
                    <Select placeholder="Select range" size="large">
                      <Select.Option value="0-2L">Up to ₹2 Lakh</Select.Option>
                      <Select.Option value="2-5L">₹2–5 Lakh</Select.Option>
                      <Select.Option value="5-10L">₹5–10 Lakh</Select.Option>
                      <Select.Option value="10L+">₹10 Lakh+</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="message" label="Additional Information">
                    <TextArea rows={3} placeholder="Tell us about your business and dealership interest..." />
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    block
                    style={{ background: '#0B65B5', borderColor: '#0B65B5', color: '#000', fontWeight: 700, height: 48 }}
                  >
                    Submit Dealer Application
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
