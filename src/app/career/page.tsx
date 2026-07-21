'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Form, Input, Select, Upload, Button, Row, Col, App } from 'antd';
import {
  UploadOutlined,
  DownOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { openPositions, JobPosition, company } from '@/data/company';

const { TextArea } = Input;

export default function CareerPage() {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

  const handleApply = (job: JobPosition) => {
    form.setFieldsValue({
      position: job.title,
      location: job.location,
    });
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
    message.info(`Pre-selected: ${job.title} in ${job.location}`);
  };

  const handleApplyNowClick = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const onFinish = async (values: Record<string, unknown>) => {
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    message.success('Application submitted successfully! Our HR team will contact you.');
    form.resetFields();
  };

  const uniqueTitles = Array.from(new Set(openPositions.map((p) => p.title)));
  const uniqueLocations = Array.from(new Set(openPositions.map((p) => p.location)));

  return (
    <>
      {/* Split Hero Section */}
      <div className="flex w-full h-[340px] items-stretch overflow-hidden mt-20 bg-bg-light max-md:h-[240px] max-sm:flex-col max-sm:h-auto">
        <div className="flex-1 bg-primary flex items-center px-[8%] relative after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-[30px] after:bg-gradient-to-r after:from-transparent after:to-black/5 max-sm:py-[60px] max-sm:px-6">
          <h1 className="font-display text-[64px] font-black text-white tracking-tight m-0 leading-none max-md:text-[48px] max-sm:text-4xl max-sm:text-center max-sm:w-full">Career</h1>
        </div>
        <div className="flex-[1.2] relative min-h-full max-sm:h-[200px] max-sm:w-full">
          <Image
            src="/images/gallery/manufacturing-facility.png"
            alt="Continental Manufacturing Plant"
            fill
            priority
            className="object-cover brightness-95 contrast-105"
          />
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 pb-12 bg-white text-center">
        <div className="container">
          <h2 className="font-display text-[38px] font-black text-primary mb-6 leading-tight max-w-[900px] mx-auto max-md:text-3xl">
            Join the Continental Team: Build Your Future with Industry Leaders
          </h2>
          <div className="flex items-center justify-center gap-4 my-7 w-full">
            <div className="flex-1 max-w-[400px] h-[1px] bg-[#e0e0e0]" />
            <div className="w-2 h-2 bg-primary rotate-45 shrink-0" />
            <div className="flex-1 max-w-[400px] h-[1px] bg-[#e0e0e0]" />
          </div>
          <p className="text-base text-text-secondary max-w-[850px] mx-auto leading-relaxed px-4">
            At Kiran Industries, we believe that our people are our greatest asset. As a rapidly growing company in the Dry Mix industry, we are always looking for talented, passionate, and driven individuals to join our team. If you are looking for a dynamic work environment where innovation, collaboration, and personal growth are valued, Kiran Industries is the place for you.
          </p>
        </div>
      </section>

      {/* Current Job Openings Section */}
      <section className="py-12 pb-20 bg-white">
        <div className="container">
          <h2 className="font-display text-[26px] font-black text-primary mb-9 border-b-2 border-primary inline-block pb-2">Current Job Openings</h2>

          <div className="flex flex-col mb-12">
            {openPositions.map((job, index) => {
              const isExpanded = expandedJobId === job.id;
              // Format index as 01., 02., etc.
              const formattedIndex = String(index + 1).padStart(2, '0') + '.';

              return (
                <div key={job.id} className="flex justify-between items-start py-7 border-b border-[#eaeaea] transition-colors duration-200 hover:bg-primary/[0.01] max-md:flex-col max-md:gap-4">
                  <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
                      {/* Left: Number and Title/Focus */}
                      <div className="flex items-start gap-5 flex-[1.5]">
                        <div className="font-display text-2xl font-black text-primary leading-none w-8 shrink-0">{formattedIndex}</div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-display text-[22px] font-bold text-charcoal m-0 cursor-pointer transition-colors duration-200 hover:text-primary" onClick={() => setExpandedJobId(isExpanded ? null : job.id)}>
                            {job.title}
                          </h3>
                          <div className="text-sm italic text-text-secondary">{job.focus}</div>
                        </div>
                      </div>

                      {/* Right: Meta Details */}
                      <div className="flex flex-col gap-2 flex-1 items-end pl-6 max-md:items-start max-md:pl-[52px]">
                        <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
                          <li className="flex items-center text-sm text-text-secondary gap-2">
                            <span className="w-1 h-1 bg-text-secondary rounded-full inline-block" />
                            <span className="font-bold text-charcoal">Location:</span>
                            <span className="text-text-secondary">{job.location}</span>
                          </li>
                          <li className="flex items-center text-sm text-text-secondary gap-2">
                            <span className="w-1 h-1 bg-text-secondary rounded-full inline-block" />
                            <span className="font-bold text-charcoal">Qualification:</span>
                            <span className="text-text-secondary">{job.qualification}</span>
                          </li>
                        </ul>

                        <button
                          className="text-[13px] font-semibold text-primary mt-2 inline-flex items-center gap-1 cursor-pointer"
                          onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                        >
                          {isExpanded ? (
                            <>
                              Hide Details <UpOutlined style={{ fontSize: 10 }} />
                            </>
                          ) : (
                            <>
                              View Details <DownOutlined style={{ fontSize: 10 }} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Collapsible Details Drawer */}
                    <div className={`max-h-0 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 w-full ${isExpanded ? 'max-h-[1000px] opacity-1 mt-5 border-t border-dashed border-[#eaeaea] pt-5' : ''}`}>
                      <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
                        {job.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6 mb-4 max-md:grid-cols-1 max-md:gap-4">
                        <div>
                          <div className="font-display text-[14px] font-bold text-charcoal uppercase tracking-wider mb-2.5">Key Responsibilities</div>
                          <ul className="pl-5 m-0">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="text-sm text-text-secondary leading-relaxed mb-1.5">
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="font-display text-[14px] font-bold text-charcoal uppercase tracking-wider mb-2.5">Requirements & Skills</div>
                          <ul className="pl-5 m-0">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="text-sm text-text-secondary leading-relaxed mb-1.5">
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex justify-end gap-4 mt-4 border-t border-[#f0f0f0] pt-4">
                        <button className="bg-primary text-white py-2 px-5 rounded font-semibold text-[13px] transition-colors duration-200 hover:bg-primary-light" onClick={() => handleApply(job)}>
                          Apply For This Role
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="bg-white py-12 pb-16 border-t border-[#eaeaea]">
        <div className="container">
          <h2 className="font-display text-[32px] font-black text-charcoal mb-4">How to Apply?</h2>
          <p className="text-[15px] text-text-secondary leading-relaxed max-w-[800px] mb-8">
            If you&apos;re ready to take the next step in your career and join a team that values innovation, collaboration, and growth, we want to hear from you!
            <br />
            To apply for any of our open positions, please send your resume and a cover letter to{' '}
            <a href={`mailto:${company.contact.email1}`} className="text-primary font-bold no-underline hover:underline">
              <strong>{company.contact.email1}</strong>
            </a>
            .
            <br />
            Alternatively, you can click on the below button to apply.
          </p>

          <button className="group inline-flex items-stretch rounded overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 cursor-pointer h-[52px] border-none bg-none p-0 hover:-translate-y-0.5 hover:shadow-gold" onClick={handleApplyNowClick}>
            <span className="bg-primary text-white font-display text-[15px] font-black tracking-wider px-8 flex items-center justify-center transition-colors duration-200 group-hover:bg-primary-light">APPLY NOW</span>
            <span className="bg-[#111111] text-white w-[52px] flex items-center justify-center text-base transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-bg-section py-24 scroll-mt-[100px]" id="apply-form">
        <div className="container">
          <div className="bg-white rounded-2xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5 max-sm:p-6">
            <div className="section-label">Apply Now</div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Submit Your Application</h2>
            <p className="text-[15px] text-text-secondary leading-relaxed mb-6">
              Don&apos;t see an active opening matching your profile? Apply with your resume and detail your interests.
              We are always seeking talented individuals to join our sales, logistics, and production teams.
            </p>

            <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <Input placeholder="Your full name" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                    <Input placeholder="+91 XXXXXXXXXX" size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item name="email" label="Email Address" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                <Input placeholder="email@example.com" size="large" />
              </Form.Item>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item name="position" label="Position Applying For" rules={[{ required: true, message: 'Please select a position' }]}>
                    <Select placeholder="Select position" size="large">
                      {uniqueTitles.map((title) => (
                        <Select.Option key={title} value={title}>{title}</Select.Option>
                      ))}
                      <Select.Option value="Other">Other / Open Application</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item name="location" label="Preferred Work Location" rules={[{ required: true, message: 'Please select preferred location' }]}>
                    <Select placeholder="Select location" size="large">
                      {uniqueLocations.map((loc) => (
                        <Select.Option key={loc} value={loc}>{loc}</Select.Option>
                      ))}
                      <Select.Option value="Any">Any Location in Karnataka</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item name="experience" label="Total Experience" rules={[{ required: true, message: 'Please select experience range' }]}>
                    <Select placeholder="Years of experience" size="large">
                      <Select.Option value="fresher">Fresher</Select.Option>
                      <Select.Option value="1-2">1–2 years</Select.Option>
                      <Select.Option value="3-5">3–5 years</Select.Option>
                      <Select.Option value="5-10">5–10 years</Select.Option>
                      <Select.Option value="10+">10+ years</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="resume"
                label="Upload Resume"
                valuePropName="fileList"
                getValueFromEvent={(e) => {
                  if (Array.isArray(e)) {
                    return e;
                  }
                  return e?.fileList;
                }}
                rules={[{ required: true, message: 'Please upload your resume' }]}
              >
                <Upload
                  accept=".pdf,.doc,.docx"
                  maxCount={1}
                  beforeUpload={() => false}
                >
                  <Button icon={<UploadOutlined />} size="large" style={{ width: '100%' }}>
                    Upload Resume (PDF / DOC)
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item name="message" label="Cover Letter / Message">
                <TextArea rows={4} placeholder="Tell us why you want to join Kiran Industries..." />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                size="large"
                block
                style={{ background: '#0B65B5', borderColor: '#0B65B5', color: '#fff', fontWeight: 700, height: 48 }}
              >
                Submit Application
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
