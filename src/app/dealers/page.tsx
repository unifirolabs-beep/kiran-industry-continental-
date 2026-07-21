'use client';

import React from 'react';
import { Form, Input, Select, Button, Row, Col, App } from 'antd';
import { TrophyOutlined, CustomerServiceOutlined, CarOutlined, ToolOutlined } from '@ant-design/icons';
import { company } from '@/data/company';

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
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">Dealer Network</div>
          <h1 className="page-hero__title">
            Partner with
            <br />
            <span className="text-primary">Continental</span>
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
                <div className="bg-white rounded-2xl p-8 text-center border border-black/6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                  <div className="text-[36px] text-primary mb-4">{b.icon}</div>
                  <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#595959] leading-relaxed">{b.desc}</p>
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
          <div className="grid grid-cols-4 gap-[1px] bg-white/5 rounded-2xl overflow-hidden max-[900px]:grid-cols-2 max-[900px]:bg-transparent max-[900px]:gap-4 max-[900px]:p-0 max-[480px]:grid-cols-1 max-[480px]:bg-transparent max-[480px]:gap-4 max-[480px]:p-0">
            {[
              { num: '01', title: 'Submit Application', desc: 'Fill out the dealer registration form below with your business details.' },
              { num: '02', title: 'Team Review', desc: 'Our regional sales team reviews your application within 48 hours.' },
              { num: '03', title: 'Meeting & Presentation', desc: 'We schedule a meeting to discuss territory, products, and terms.' },
              { num: '04', title: 'Onboarding & Training', desc: 'Sign agreement, receive product training, and start selling.' },
            ].map((step) => (
              <div key={step.num} className="group bg-[#1A1A1A] py-9 px-7 border border-white/[0.03] relative transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gradient-to-br hover:from-primary hover:to-primary-light hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(11,101,181,0.3)] hover:border-white/25 hover:z-10 max-[900px]:rounded-xl max-[900px]:border-white/8 max-[480px]:rounded-xl max-[480px]:border-white/8">
                <div className="font-display text-[52px] font-black text-primary/20 leading-none mb-4 tracking-tight transition-colors duration-400 group-hover:text-white/25">{step.num}</div>
                <h3 className="font-display text-[17px] font-bold text-white mb-2 transition-colors duration-400">{step.title}</h3>
                <p className="text-[13.5px] text-white/50 leading-relaxed transition-colors duration-400 group-hover:text-white/95">{step.desc}</p>
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
              <p className="text-[15px] text-[#595959] leading-relaxed mb-7">
                Ready to join the Continental family? Fill out this form and our team will reach out
                within 24 working hours to discuss dealership terms for your area.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center text-sm">
                  <span className="font-semibold text-[#1A1A1A] min-w-[50px]">Phone</span>
                  <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`} className="text-primary no-underline hover:underline">{company.contact.phone1}</a>
                </div>
                <div className="flex gap-3 items-center text-sm">
                  <span className="font-semibold text-[#1A1A1A] min-w-[50px]">Email</span>
                  <a href={`mailto:${company.contact.email1}`} className="text-primary no-underline hover:underline">{company.contact.email1}</a>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={14}>
              <div className="bg-white rounded-2xl p-9 shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-black/6">
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
