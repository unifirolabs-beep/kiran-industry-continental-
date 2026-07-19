'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Form, Input, Select, Upload, Button, Row, Col, App } from 'antd';
import {
  UploadOutlined,
  EnvironmentOutlined,
  SolutionOutlined,
  DownOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { openPositions, JobPosition, company } from '@/data/company';
import styles from './career.module.css';

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

  const onFinish = async (values: any) => {
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
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>Career</h1>
        </div>
        <div className={styles.heroRight}>
          <Image
            src="/images/gallery/manufacturing-facility.png"
            alt="Continental Manufacturing Plant"
            fill
            priority
            className={styles.heroRightImg}
          />
        </div>
      </div>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className="container">
          <h2 className={styles.introTitle}>
            Join the Continental Team: Build Your Future with Industry Leaders
          </h2>
          <div className={styles.dividerWrapper}>
            <div className={styles.dividerLine} />
            <div className={styles.dividerSquare} />
            <div className={styles.dividerLine} />
          </div>
          <p className={styles.introText}>
            At Kiran Industries, we believe that our people are our greatest asset. As a rapidly growing company in the Dry Mix industry, we are always looking for talented, passionate, and driven individuals to join our team. If you are looking for a dynamic work environment where innovation, collaboration, and personal growth are valued, Kiran Industries is the place for you.
          </p>
        </div>
      </section>

      {/* Current Job Openings Section */}
      <section className={styles.jobListSection}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Current Job Openings</h2>

          <div className={styles.jobList}>
            {openPositions.map((job, index) => {
              const isExpanded = expandedJobId === job.id;
              // Format index as 01., 02., etc.
              const formattedIndex = String(index + 1).padStart(2, '0') + '.';

              return (
                <div key={job.id} className={styles.jobItem}>
                  <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
                      {/* Left: Number and Title/Focus */}
                      <div className={styles.jobItemLeft}>
                        <div className={styles.jobItemNum}>{formattedIndex}</div>
                        <div className={styles.jobItemDetails}>
                          <h3 className={styles.jobTitle} onClick={() => setExpandedJobId(isExpanded ? null : job.id)}>
                            {job.title}
                          </h3>
                          <div className={styles.jobFocus}>{job.focus}</div>
                        </div>
                      </div>

                      {/* Right: Meta Details */}
                      <div className={styles.jobItemRight}>
                        <ul className={styles.jobMetaList}>
                          <li className={styles.jobMetaRow}>
                            <span className={styles.jobMetaBullet} />
                            <span className={styles.jobMetaLabel}>Location:</span>
                            <span className={styles.jobMetaVal}>{job.location}</span>
                          </li>
                          <li className={styles.jobMetaRow}>
                            <span className={styles.jobMetaBullet} />
                            <span className={styles.jobMetaLabel}>Qualification:</span>
                            <span className={styles.jobMetaVal}>{job.qualification}</span>
                          </li>
                        </ul>

                        <button
                          className={styles.btnDetailsToggle}
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
                    <div className={`${styles.jobDetailDrawer} ${isExpanded ? styles.jobDetailDrawerExpanded : ''}`}>
                      <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
                        {job.description}
                      </p>
                      
                      <div className={styles.drawerGrid}>
                        <div>
                          <div className={styles.drawerSectionTitle}>Key Responsibilities</div>
                          <ul className={styles.drawerList}>
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className={styles.drawerListItem}>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className={styles.drawerSectionTitle}>Requirements & Skills</div>
                          <ul className={styles.drawerList}>
                            {job.requirements.map((req, i) => (
                              <li key={i} className={styles.drawerListItem}>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={styles.drawerActions}>
                        <button className={styles.btnApplySmall} onClick={() => handleApply(job)}>
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
      <section className={styles.howToApplySection}>
        <div className="container">
          <h2 className={styles.howToApplyHeading}>How to Apply?</h2>
          <p className={styles.howToApplyText}>
            If you&apos;re ready to take the next step in your career and join a team that values innovation, collaboration, and growth, we want to hear from you!
            <br />
            To apply for any of our open positions, please send your resume and a cover letter to{' '}
            <a href={`mailto:${company.contact.email1}`} className={styles.emailLink}>
              <strong>{company.contact.email1}</strong>
            </a>
            .
            <br />
            Alternatively, you can click on the below button to apply.
          </p>

          <button className={styles.btnCustomApply} onClick={handleApplyNowClick}>
            <span className={styles.btnApplyTextPart}>APPLY NOW</span>
            <span className={styles.btnApplyIconPart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ transition: 'transform 0.2s' }}
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
      <section className={styles.formSection} id="apply-form">
        <div className="container">
          <div className={styles.formCard}>
            <div className="section-label">Apply Now</div>
            <h2 className="section-title" style={{ marginBottom: 12 }}>Submit Your Application</h2>
            <p className={styles.formIntro}>
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
