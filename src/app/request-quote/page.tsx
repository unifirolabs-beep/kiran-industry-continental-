'use client';

import React, { useState } from 'react';
import { Form, Input, Select, InputNumber, Upload, Button, Row, Col, App } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { products } from '@/data/products';
import { company } from '@/data/company';

const { TextArea } = Input;

export default function RequestQuotePage() {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    message.success('Quote request submitted! Our team will send you a quote within 24 hours.');
    form.resetFields();
  };

  return (
    <>
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">Request a Quote</div>
          <h1 className="page-hero__title">Get Your Project<br /><span className="text-primary">Quote Today</span></h1>
          <p className="page-hero__subtitle">Fill in your project details and get a competitive quote from our sales team within 24 hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Row gutter={[64, 48]}>
            <Col xs={24} lg={8}>
              <div className="bg-[#1A1A1A] rounded-2xl p-9 sticky top-[90px]">
                <h3 className="font-display text-xl font-bold text-white mb-6">Why Choose Continental?</h3>
                {['Premium ISO-certified products', 'Competitive pricing for bulk orders', 'Pan South India delivery', 'Technical support included', 'Private label options available'].map((item) => (
                  <div key={item} className="text-sm text-white/65 py-2 border-b border-white/5">✓ {item}</div>
                ))}
                <div className="border-t border-white/8 my-6" />
                <div className="sideContact">
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-1.5">Call us directly</div>
                  <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`} className="block font-display text-[22px] font-extrabold text-primary no-underline hover:text-primary-light">
                    {company.contact.phone1}
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={16}>
              <div className="bg-white rounded-2xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-black/6">
                <h2 className="font-display text-2xl font-black text-[#1A1A1A] mb-7 tracking-tight">Quote Request Form</h2>
                <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
                        <Input placeholder="Your full name" size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="company" label="Company / Business">
                        <Input placeholder="Company or business name" size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                        <Input placeholder="+91 XXXXXXXXXX" size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="email" label="Email Address" rules={[{ required: true, type: 'email' }]}>
                        <Input placeholder="email@example.com" size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item name="product" label="Product Required" rules={[{ required: true }]}>
                    <Select placeholder="Select product" size="large" mode="multiple" allowClear>
                      {products.map((p) => (
                        <Select.Option key={p.id} value={p.id}>{p.shortName}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item name="quantity" label="Estimated Quantity (Bags / Month)" rules={[{ required: true }]}>
                        <InputNumber min={1} placeholder="e.g. 500" size="large" style={{ width: '100%' }} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="location" label="Delivery Location" rules={[{ required: true }]}>
                        <Input placeholder="City, District, State" size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item name="projectType" label="Project Type">
                    <Select placeholder="Select project type" size="large">
                      <Select.Option value="residential">Residential</Select.Option>
                      <Select.Option value="commercial">Commercial</Select.Option>
                      <Select.Option value="industrial">Industrial</Select.Option>
                      <Select.Option value="infrastructure">Infrastructure</Select.Option>
                      <Select.Option value="government">Government Project</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="drawings"
                    label="Project Drawings / Specifications (Optional)"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => {
                      if (Array.isArray(e)) {
                        return e;
                      }
                      return e?.fileList;
                    }}
                  >
                    <Upload accept=".pdf,.dwg,.jpg,.png" maxCount={3} beforeUpload={() => false}>
                      <Button icon={<UploadOutlined />} size="large" style={{ width: '100%' }}>
                        Upload Files (PDF, DWG, Images)
                      </Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item name="notes" label="Additional Notes">
                    <TextArea rows={4} placeholder="Any special requirements, timeline, or other details..." />
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    block
                    style={{ background: '#0B65B5', borderColor: '#0B65B5', color: '#000', fontWeight: 700, height: 52 }}
                  >
                    Submit Quote Request
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
