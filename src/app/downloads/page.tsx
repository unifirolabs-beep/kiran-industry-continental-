'use client'

import { Row, Col } from 'antd';
import { DownloadOutlined, FilePdfOutlined } from '@ant-design/icons';
import { company } from '@/data/company';

const downloads = [
  { name: 'Continental Tile Adhesive Type 1', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Tile Adhesive Type 2', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Tile Adhesive Type 3', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Tile Adhesive Type 4', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Tile Adhesive Type 5', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Ready Plaster', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Block Joint Mortar', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Super Grouts', type: 'Technical Data Sheet', size: 'PDF', icon: 'pdf' },
  { name: 'Continental Product Catalogue 2025', type: 'Product Brochure', size: 'PDF', icon: 'pdf' },
  { name: 'Tile Adhesive Application Guide', type: 'Application Guide', size: 'PDF', icon: 'pdf' },
  { name: 'Ready Plaster Application Guide', type: 'Application Guide', size: 'PDF', icon: 'pdf' },
  { name: 'ISO Certification Documents', type: 'Certification', size: 'PDF', icon: 'pdf' },
];

export default function DownloadsPage() {

  return (
    <>
      <section className="pt-[140px] pb-20 bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#2a1f08] relative after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_70%_50%,rgba(11,101,181,0.07)_0%,transparent_65%)]">
        <div className="container">
          <div className="page-hero__label">Downloads</div>
          <h1 className="page-hero__title">Product Resources<br /><span className="text-primary">& Documentation</span></h1>
          <p className="page-hero__subtitle">Download technical data sheets, application guides, and product brochures for all Continental products.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex items-center gap-3 bg-[rgba(11,101,181,0.08)] border border-[rgba(11,101,181,0.25)] rounded-xl p-4 mb-10">
            <FilePdfOutlined style={{ fontSize: 20, color: '#0B65B5' }} />
            <p className="text-sm text-[#595959] m-0">Product documentation is available upon request. Please <a href="/contact" className="text-primary font-semibold">contact us</a> for the latest technical data sheets and certifications.</p>
          </div>

          <Row gutter={[20, 20]}>
            {downloads.map((doc) => (
              <Col xs={24} sm={12} lg={8} key={doc.name}>
                <div className="flex items-center gap-3.5 bg-white rounded-xl p-[18px_20px] border border-black/7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] hover:border-[rgba(11,101,181,0.2)] hover:-translate-y-0.5">
                  <div className="text-[28px] text-primary shrink-0"><FilePdfOutlined /></div>
                  <div className="flex-1">
                    <div className="text-[13.5px] font-semibold text-[#1A1A1A] mb-0.5 leading-snug">{doc.name}</div>
                    <div className="text-[11.5px] text-[#8C8C8C]">{doc.type}</div>
                  </div>
                  <button className="w-9 h-9 rounded-lg bg-[#F5F4F0] border-none text-primary text-base cursor-pointer flex items-center justify-center transition-all duration-200 shrink-0 hover:bg-primary hover:text-black" onClick={() => alert(`Please contact us at ${company.contact.email1} to receive this document.`)}>
                    <DownloadOutlined />
                  </button>
                </div>
              </Col>
            ))}
          </Row>

          <div className="mt-[60px] text-center p-12 bg-[#F5F4F0] rounded-2xl">
            <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-2.5">Need a specific document?</h3>
            <p className="text-[15px] text-[#595959] mb-5">Contact our technical team for custom documentation, MSDS sheets, or project-specific guidelines.</p>
            <a href={`mailto:${company.contact.email1}`} className="inline-block py-3 px-7 bg-primary text-black rounded-lg text-sm font-bold no-underline transition-all duration-200 hover:bg-primary-light">
              {company.contact.email1}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
