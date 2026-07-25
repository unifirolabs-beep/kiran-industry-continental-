'use client';

import { Form, Input, Select, Button, Row, Col, App } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { company } from '@/data/company';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const contactFormSchema = yup.object().shape({
  fullName: yup.string().required('Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  phoneNumber: yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required('Phone is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

export default function ContactPage() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<yup.InferType<typeof contactFormSchema>>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = (data: yup.InferType<typeof contactFormSchema>) => {
    console.log(data);
  }

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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        {...register("fullName")}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        {...register("phoneNumber")}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.phoneNumber.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      {...register("email")}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      {...register("subject")}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Write your message..."
                      {...register("message")}
                      className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-12 w-full items-center justify-center rounded-xl bg-primary font-semibold text-white transition hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 h-5 w-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
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
