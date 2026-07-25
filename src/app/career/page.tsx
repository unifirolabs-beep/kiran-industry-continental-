'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Input } from 'antd';
import {
  DownOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { openPositions, JobPosition, company } from '@/data/company';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const jobApplicationFormSchema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Phone is invalid').required('Phone is required'),
  position: yup.string().required('Position is required'),
  location: yup.string().required('Location is required'),
  experience: yup.string().required('Experience is required'),
  resume: yup.mixed()
    .test('fileSize', 'Resume size must be less than 2MB', (file: any) => {
      if (!file) return true;
      return file.size <= 2000000;
    })
    .test('fileType', 'Resume must be a PDF or Word document', (file: any) => {
      if (!file) return true;
      return file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    })
    .required('Resume is required'),
  message: yup.string().required('Message is required'),
})

const { TextArea } = Input;

export default function CareerPage() {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { register, setValue, handleSubmit, formState: { errors, isSubmitting } } = useForm<yup.InferType<typeof jobApplicationFormSchema>>({
    resolver: yupResolver(jobApplicationFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      position: '',
      location: '',
      experience: '',
      resume: undefined,
      message: '',
    },
  });

  const onSubmit = (data: yup.InferType<typeof jobApplicationFormSchema>) => {
    console.log(data);
  };

  const handleApplyNowClick = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
                    <div className={`max-h-0 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 w-full ${isExpanded ? 'max-h-[1000px] opacity-100 mt-5 border-t border-dashed border-[#eaeaea] pt-5' : ''}`}>
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
                        <button className="bg-primary text-white py-2 px-5 rounded font-semibold text-[13px] transition-colors duration-200 hover:bg-primary-light" onClick={() => handleApplyNowClick()}>
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

            <div className="flex justify-center">
              <form
                ref={formRef}
                id="apply-form"
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
                className="w-full max-w-4xl rounded-3xl bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-black/5 space-y-6"
              >
                {/* Name & Phone */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      {...register('fullName')}
                      placeholder="Enter your full name"
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />

                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      {...register('phone')}
                      placeholder="9876543210"
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />

                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    {...register('email')}
                    placeholder="john@example.com"
                    className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Position & Location */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Position Applying For
                    </label>

                    <select
                      {...register('position')}
                      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select Position</option>

                      {uniqueTitles.map((title) => (
                        <option key={title} value={title}>
                          {title}
                        </option>
                      ))}

                      <option value="Other">
                        Other / Open Application
                      </option>
                    </select>

                    {errors.position && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.position.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Preferred Location
                    </label>

                    <select
                      {...register('location')}
                      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select Location</option>

                      {uniqueLocations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}

                      <option value="Any">
                        Any Location
                      </option>
                    </select>

                    {errors.location && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.location.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Total Experience
                  </label>

                  <select
                    {...register('experience')}
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select Experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="1-2">1–2 Years</option>
                    <option value="3-5">3–5 Years</option>
                    <option value="5-10">5–10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>

                  {errors.experience && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.experience.message}
                    </p>
                  )}
                </div>

                {/* Resume */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Upload Resume
                  </label>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      setValue('resume', e.target.files?.[0] as any, {
                        shouldValidate: true,
                      })
                    }
                    className="block w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-5 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-primary/90"
                  />

                  {errors.resume && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.resume.message}
                    </p>
                  )}
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Cover Letter / Message
                  </label>

                  <textarea
                    rows={5}
                    {...register('message')}
                    placeholder="Tell us why you would like to join Kiran Industries..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                  className="flex h-14 w-full items-center justify-center rounded-xl bg-primary text-lg font-bold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
