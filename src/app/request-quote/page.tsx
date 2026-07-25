'use client';

import React, { useState } from 'react';
import { Form, Input, Select, InputNumber, Upload, Button, Row, Col, App } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { products } from '@/data/products';
import { company } from '@/data/company';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const { TextArea } = Input;

const getQuoteSchema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  company: yup.string().required("Company is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().required("Email is required"),
  product: yup.array().of(yup.string().required()).min(1, "Product is required").required("Product is required"),
  quantity: yup.string().required("Quantity is required"),
  location: yup.string().required("Location is required"),
  projectType: yup.string().required("Project Type is required"),
  drawings: yup.mixed().test('fileSize', 'Drawing size must be less than 2MB', (file: any) => {
    if (!file) return true;
    return file.size <= 2000000;
  })
    .test('fileType', 'Drawing must be a PDF or Word document', (file: any) => {
      if (!file) return true;
      return file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    }),
  notes: yup.string()
})

export default function RequestQuotePage() {
  const [isOpen, setIsOpen] = useState(false);

  const { register, setValue, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm<yup.InferType<typeof getQuoteSchema>>({
    resolver: yupResolver(getQuoteSchema),
    defaultValues: {
      fullName: '',
      company: '',
      phone: '',
      email: '',
      product: [],
      quantity: '',
      location: '',
      projectType: '',
      drawings: undefined,
      notes: '',
    },
  });

  const drawings = watch("drawings") as File[] | undefined;
  const selectedProducts = watch("product") || [];


  const onSubmit = async (data: yup.InferType<typeof getQuoteSchema>) => {
    console.log(data)
  }

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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Company */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("fullName")}
                        placeholder="Your full name"
                        className="w-full rounded-xl border px-4 py-3 focus:border-primary focus:outline-none"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Company / Business
                      </label>
                      <input
                        {...register("company")}
                        placeholder="Company or business name"
                        className="w-full rounded-xl border px-4 py-3 focus:border-primary focus:outline-none"
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("phone")}
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full rounded-xl border px-4 py-3 focus:border-primary focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="email@example.com"
                        className="w-full rounded-xl border px-4 py-3 focus:border-primary focus:outline-none"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Product */}
                  <div className="relative">
                    <label className="mb-2 block text-sm font-semibold">
                      Product Required <span className="text-red-500">*</span>
                    </label>

                    {/* Input */}
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="min-h-[52px] w-full cursor-pointer rounded-xl border border-gray-300 bg-white px-3 py-2 transition hover:border-primary focus-within:border-primary"
                    >
                      {selectedProducts.length === 0 ? (
                        <span className="text-gray-400">
                          Select one or more products
                        </span>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {selectedProducts.map((id: string) => {
                            const product = products.find((p) => p.id === id);

                            return (
                              <div
                                key={id}
                                className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                              >
                                {product?.shortName}

                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();

                                    setValue(
                                      "product",
                                      selectedProducts.filter((x: string) => x !== id),
                                      { shouldValidate: true }
                                    );
                                  }}
                                  className="text-base leading-none hover:text-red-500"
                                >
                                  ×
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Dropdown */}
                    {isOpen && (
                      <div className="absolute z-20 mt-2 max-h-72 w-full overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl">
                        {products.map((product) => {
                          const checked = selectedProducts.includes(product.id);

                          return (
                            <label
                              key={product.id}
                              className="flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-gray-50"
                            >
                              <div>
                                <p className="font-medium">{product.shortName}</p>
                                <p className="text-xs text-gray-500">
                                  {product.grade}
                                </p>
                              </div>

                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setValue(
                                      "product",
                                      [...selectedProducts, product.id],
                                      { shouldValidate: true }
                                    );
                                  } else {
                                    setValue(
                                      "product",
                                      selectedProducts.filter(
                                        (x: string) => x !== product.id
                                      ),
                                      { shouldValidate: true }
                                    );
                                  }
                                }}
                              />
                            </label>
                          );
                        })}
                      </div>
                    )}

                    {errors.product && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.product.message}
                      </p>
                    )}
                  </div>

                  {/* Quantity & Location */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Estimated Quantity (Bags / Month)
                      </label>
                      <input
                        type="number"
                        min={1}
                        {...register("quantity")}
                        placeholder="e.g. 500"
                        className="w-full rounded-xl border px-4 py-3 focus:border-primary focus:outline-none"
                      />
                      {errors.quantity && (
                        <p className="mt-1 text-sm text-red-500">{errors.quantity.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Delivery Location
                      </label>
                      <input
                        {...register("location")}
                        placeholder="City, District, State"
                        className="w-full rounded-xl border px-4 py-3 focus:border-primary focus:outline-none"
                      />
                      {errors.location && (
                        <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Project Type
                    </label>

                    <select
                      {...register("projectType")}
                      className="w-full rounded-xl border px-4 py-3 focus:border-primary focus:outline-none"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="government">Government Project</option>
                    </select>

                    {errors.projectType && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.projectType.message}
                      </p>
                    )}
                  </div>

                  {/* Drawings */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Project Drawings / Specifications
                    </label>

                    <input
                      type="file"
                      accept=".pdf,.dwg,.jpg,.jpeg,.png"
                      multiple
                      onChange={(e) =>
                        setValue("drawings", Array.from(e.target.files || []), {
                          shouldValidate: true,
                        })
                      }
                      className="block w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3
      file:mr-4 file:rounded-lg file:border-0 file:bg-primary
      file:px-5 file:py-2 file:text-sm file:font-semibold
      file:text-white hover:file:bg-primary/90"
                    />

                    {drawings && drawings.length > 0 && (
                      <p className="mt-2 text-sm text-green-600">
                        {drawings.length} file(s) selected
                      </p>
                    )}

                    {errors.drawings && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.drawings.message}
                      </p>
                    )}
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Additional Notes
                    </label>

                    <textarea
                      rows={4}
                      {...register("notes")}
                      placeholder="Any special requirements, timeline, or other details..."
                      className="w-full rounded-xl border px-4 py-3 focus:border-primary focus:outline-none"
                    />

                    {errors.notes && (
                      <p className="mt-1 text-sm text-red-500">{errors.notes.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-13 w-full items-center justify-center rounded-xl bg-primary font-semibold text-white transition hover:bg-primary-light disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
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
