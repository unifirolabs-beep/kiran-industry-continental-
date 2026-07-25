'use client'

import React from 'react';
import { Form, Input, Select, Button, Row, Col, App } from 'antd';
import { TrophyOutlined, CustomerServiceOutlined, CarOutlined, ToolOutlined } from '@ant-design/icons';
import { company } from '@/data/company';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Please enter your name'),
  phone: yup
    .string()
    .required('Please enter phone number')
    .matches(/^[6-9]\d{9}$/, 'Enter a valid phone number'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  business: yup.string().required('Business name is required'),
  district: yup.string().required('District is required'),
  experience: yup.string().required('Please select experience'),
  investment: yup.string().required('Please select turnover'),
  message: yup.string(),
});

type DealerFormData = yup.InferType<typeof schema>;

const { TextArea } = Input;

const dealerBenefits = [
  { icon: <TrophyOutlined />, title: 'Exclusive Territory', desc: 'Protect your market with a dedicated exclusive dealership zone.' },
  { icon: <CustomerServiceOutlined />, title: 'Marketing Support', desc: 'Co-branded marketing materials, hoardings, and digital promotion.' },
  { icon: <ToolOutlined />, title: 'Technical Training', desc: 'Regular product training and on-site technical assistance.' },
  { icon: <CarOutlined />, title: 'Fast Delivery', desc: 'Reliable logistics from our 2000+ ton warehouse to your location.' },
];

export default function DealersPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DealerFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      business: '',
      district: '',
      experience: '',
      investment: '',
      message: '',
    },
  });

  const onSubmit = async (data: DealerFormData) => {
    console.log(data);

    // await api call
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
              <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-lg">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        Full Name
                      </label>

                      <input
                        {...register('name')}
                        placeholder="Your name"
                        className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-primary"
                      />

                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        Phone Number
                      </label>

                      <input
                        {...register('phone')}
                        placeholder="+91 XXXXXXXXXX"
                        className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-primary"
                      />

                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        Email Address
                      </label>

                      <input
                        type="email"
                        {...register('email')}
                        placeholder="email@example.com"
                        className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-primary"
                      />

                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Business */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        Business Name
                      </label>

                      <input
                        {...register('business')}
                        placeholder="Your shop / company name"
                        className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-primary"
                      />

                      {errors.business && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.business.message}
                        </p>
                      )}
                    </div>

                    {/* District */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        District / Location
                      </label>

                      <input
                        {...register('district')}
                        placeholder="District, State"
                        className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-primary"
                      />

                      {errors.district && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.district.message}
                        </p>
                      )}
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-800">
                        Years in Building Materials
                      </label>

                      <select
                        {...register('experience')}
                        className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 outline-none transition focus:border-primary"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">Less than 1 year</option>
                        <option value="1-3">1–3 years</option>
                        <option value="3-5">3–5 years</option>
                        <option value="5+">5+ years</option>
                      </select>

                      {errors.experience && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.experience.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Turnover */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-800">
                      Expected Monthly Turnover (₹)
                    </label>

                    <select
                      {...register('investment')}
                      className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 outline-none transition focus:border-primary"
                    >
                      <option value="">Select range</option>
                      <option value="0-2L">Up to ₹2 Lakh</option>
                      <option value="2-5L">₹2–5 Lakh</option>
                      <option value="5-10L">₹5–10 Lakh</option>
                      <option value="10L+">₹10 Lakh+</option>
                    </select>

                    {errors.investment && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.investment.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-800">
                      Additional Information
                    </label>

                    <textarea
                      rows={4}
                      {...register('message')}
                      placeholder="Tell us about your business and dealership interest..."
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
                    />

                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-12 w-full items-center justify-center rounded-lg bg-[#0B65B5] font-bold text-white transition hover:bg-[#09589e] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting
                      ? 'Submitting...'
                      : 'Submit Dealer Application'}
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
