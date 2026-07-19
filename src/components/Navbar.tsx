'use client';

import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company } from '@/data/company';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Info,
  Package,
  Cpu,
  Users,
  Handshake,
  Briefcase,
  Phone,
  ChevronDown,
  X,
  Mail,
  MapPin,
  MessageCircle,
  FileText
} from 'lucide-react';

const menuItems = [
  { label: 'Home', key: '/' },
  { label: 'About Us', key: '/about' },
  { label: 'Products', key: '/products' },
  { label: 'Solutions', key: '/solutions' },
  { label: 'Customers', key: '/customers' },
  { label: 'Dealers', key: '/dealers' },
  { label: 'Career', key: '/career' },
  { label: 'Contact Us', key: '/contact' },
];

const getMenuIcon = (key: string) => {
  switch (key) {
    case '/':
      return Home;
    case '/about':
      return Info;
    case '/products':
      return Package;
    case '/solutions':
      return Cpu;
    case '/customers':
      return Users;
    case '/dealers':
      return Handshake;
    case '/career':
      return Briefcase;
    case '/contact':
      return Phone;
    default:
      return null;
  }
};

const shouldShowBottomNav = (path: string) => {
  if (path === '/' || path === '/about' || path === '/contact') return true;
  if (path.startsWith('/products')) return true;
  return false;
};

const StickyBottomNav = ({ pathname }: { pathname: string }) => {
  if (!shouldShowBottomNav(pathname)) return null;

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Products', href: '/products', icon: Package },
    { label: 'WhatsApp', href: `https://wa.me/${company.contact.whatsapp.replace(/[^0-9]/g, '')}`, icon: MessageCircle, external: true },
    { label: 'Call', href: `tel:${company.contact.phone1.replace(/\s+/g, '')}`, icon: Phone },
    { label: 'Enquiry', href: '/request-quote', icon: FileText },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-[400px] h-16 rounded-[24px] bg-[#111111]/85 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_12px_rgba(11,101,181,0.15)] z-[9990] flex items-center justify-around px-2 pb-safe lg:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = !item.external && (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href));
        
        if (item.external) {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center flex-1 h-full text-white/55 hover:text-white transition-all duration-200 no-underline"
            >
              <Icon size={20} className="mb-0.5 text-[#25D366]" />
              <span className="text-[10px] font-semibold tracking-wide uppercase">{item.label}</span>
            </a>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className={[
              'flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 no-underline',
              isActive ? 'text-primary-light font-bold' : 'text-white/55 hover:text-white',
            ].join(' ')}
          >
            <Icon size={20} className="mb-0.5" />
            <span className="text-[10px] font-semibold tracking-wide uppercase">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect
        x="3"
        y="6"
        width="18"
        height="2"
        rx="1"
        fill="currentColor"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 5 : 0,
          originX: "4px",
          originY: "7px"
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
      <motion.rect
        x="3"
        y="11"
        width="18"
        height="2"
        rx="1"
        fill="currentColor"
        animate={{
          opacity: isOpen ? 0 : 1
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.rect
        x="3"
        y="16"
        width="18"
        height="2"
        rx="1"
        fill="currentColor"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -5 : 0,
          originX: "4px",
          originY: "17px"
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
    </svg>
  );
};

const ProductAccordionItem = ({
  item,
  pathname,
  onClose,
}: {
  item: any;
  pathname: string;
  onClose: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  const isProductActive = pathname.startsWith('/products') || ['/wall-putty', '/waterproofing-products'].includes(pathname);

  const subProducts = [
    { label: 'Type 1', href: '/products/type-1' },
    { label: 'Type 2', href: '/products/type-2' },
    { label: 'Type 3', href: '/products/type-3' },
    { label: 'Type 4', href: '/products/type-4' },
    { label: 'Type 5', href: '/products/type-5' },
    { label: 'Tile Grout', href: '/products/super-grout' },
    { label: 'Wall Putty', href: '/wall-putty' },
    { label: 'Block Joint Mortar', href: '/products/block-joint' },
    { label: 'Ready Plaster', href: '/products/ready-plaster' },
    { label: 'Waterproofing', href: '/waterproofing-products' },
  ];

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setExpanded(!expanded)}
        className={[
          'flex items-center justify-between h-14 px-4 rounded-xl font-display text-[15px] font-semibold text-white/70 transition-all duration-200 ease-in-out focus:outline-none w-full text-left cursor-pointer border border-transparent',
          isProductActive
            ? 'text-white bg-gradient-to-br from-primary/10 to-primary-light/5 border-primary/20 shadow-[0_0_8px_rgba(11,101,181,0.15)]'
            : 'hover:text-white hover:bg-white/5',
        ].join(' ')}
      >
        <div className="flex items-center gap-3.5">
          <Package size={18} className={isProductActive ? "text-primary-light" : "text-white/40"} />
          <span>{item.label}</span>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className="text-white/40" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden pl-11 flex flex-col gap-1.5 mt-1 mb-1"
          >
            {subProducts.map((sub) => {
              const isSubActive = pathname === sub.href;
              return (
                <Link
                  key={sub.label}
                  href={sub.href}
                  onClick={onClose}
                  className={[
                    'block py-2 px-3 text-sm rounded-lg font-medium transition-all duration-200 no-underline',
                    isSubActive
                      ? 'text-primary-light font-bold bg-primary/5'
                      : 'text-white/50 hover:text-white hover:bg-white/3',
                  ].join(' ')}
                >
                  {sub.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  // Lock scroll position when drawer is open, and restore it when closed
  useEffect(() => {
    if (drawerOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Escape key support to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navClass = [
    'fixed top-0 left-0 right-0 z-[1000] flex items-center p-0 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]',
    scrolled
      ? 'h-[64px] bg-[rgba(10,10,10,0.9)] border-b border-[rgba(11,101,181,0.25)] shadow-[0_4px_30px_rgba(0,0,0,0.4)] max-sm:h-[60px]'
      : 'h-[80px] bg-[rgba(15,15,15,0.6)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.08)] max-md:h-[64px] max-sm:h-[60px]',
  ].join(' ');

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-[1280px] mx-auto px-6 w-full flex items-center justify-between gap-6 max-sm:px-4">
          
          {/* ============================================================
             DESKTOP NAVBAR HEADER (visible on screens >= 1024px)
             ============================================================ */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Desktop Logo */}
            <Link href="/" className="flex items-center gap-3 no-underline shrink-0 transition-transform duration-300 ease hover:-translate-y-[0.5px]">
              <div className="w-11 h-11 rounded-full overflow-hidden relative border-[1.5px] border-[rgba(255,255,255,0.2)] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex items-center justify-center shrink-0">
                <Image 
                  src="/logo/image.png" 
                  alt="Kiran Industries" 
                  width={44} 
                  height={44} 
                  className="absolute top-0 left-0 w-full h-full scale-140 -translate-y-[1px] origin-top object-cover"
                  priority 
                />
              </div>
              <div className="flex flex-col leading-[1.15]">
                <span className="font-display text-[19px] font-black text-white tracking-[0.05em]">KIRAN</span>
                <span className="font-display text-[10px] font-bold text-primary-light tracking-[0.15em] mt-[1px]">INDUSTRIES</span>
              </div>
            </Link>

            {/* Desktop Menu Links */}
            <ul className="flex items-center gap-1.5 list-none m-0 p-0 flex-1 justify-center">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.key}
                    className={[
                      'font-display text-[13.5px] font-semibold text-[rgba(255,255,255,0.75)] py-2 px-4 rounded-[20px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap no-underline tracking-[0.02em] border border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.1)] hover:-translate-y-[1px]',
                      pathname === item.key ? 'text-white bg-gradient-to-br from-[rgba(11,101,181,0.25)] to-[rgba(42,133,214,0.15)] border-[rgba(11,101,181,0.4)] shadow-[0_4px_12px_rgba(11,101,181,0.15)]' : '',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Buttons */}
            <div className="flex items-center gap-4 shrink-0">
              <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-[13.5px] font-semibold text-[rgba(255,255,255,0.85)] no-underline py-2 px-3.5 rounded-[20px] transition-all duration-300 ease border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] hover:text-primary-light hover:bg-[rgba(11,101,181,0.1)] hover:border-[rgba(11,101,181,0.3)]">
                <PhoneOutlined />
                <span className="hidden min-[1100px]:inline">{company.contact.phone1}</span>
              </a>
              <Link href="/request-quote">
                <Button type="primary" className="!h-10 !px-5 !text-[13.5px] !font-bold !font-display !bg-gradient-to-br !from-primary !to-primary-light !border-none !text-white !rounded-[20px] !shadow-[0_4px_14px_rgba(11,101,181,0.4)] !transition-all !duration-300 !ease-[cubic-bezier(0.4,0,0.2,1)] !inline-flex !items-center !justify-center hover:!-translate-y-[1.5px] hover:!shadow-[0_6px_20px_rgba(11,101,181,0.6)] hover:!brightness-110">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* ============================================================
             MOBILE NAVBAR HEADER (visible on screens < 1024px)
             ============================================================ */}
          <div className="hidden max-lg:flex items-center justify-between w-full">
            {/* Mobile Logo & Brand Name next to it */}
            <Link href="/" className="flex items-center gap-3 no-underline shrink-0" onClick={() => setDrawerOpen(false)}>
              <div className="w-10 h-10 rounded-full overflow-hidden relative border-[1.5px] border-[rgba(255,255,255,0.2)] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex items-center justify-center shrink-0">
                <Image 
                  src="/logo/image.png" 
                  alt="Kiran Industries" 
                  width={40} 
                  height={40} 
                  className="absolute top-0 left-0 w-full h-full scale-140 -translate-y-[1px] origin-top object-cover"
                />
              </div>
              <div className="flex flex-col leading-[1.15]">
                <span className="font-display text-[17px] font-black text-white tracking-[0.05em]">KI&apos;S</span>
                <span className="font-display text-[9px] font-bold text-primary-light tracking-[0.12em] mt-[1.5px]">CONTINENTAL</span>
              </div>
            </Link>

            {/* Custom Hamburger Menu Button */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white transition-all duration-300 relative focus:outline-none hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_12px_rgba(11,101,181,0.5)] active:scale-95 cursor-pointer"
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
            >
              <HamburgerIcon isOpen={drawerOpen} />
            </button>
          </div>

        </div>
      </nav>

      {/* ============================================================
         CUSTOM PREMIUM MOBILE MENU DRAWER (visible on screens < 1024px)
         ============================================================ */}
      {isMobile && (
        <AnimatePresence>
          {drawerOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] lg:hidden"
                onClick={() => setDrawerOpen(false)}
              />

              {/* Drawer Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                drag="x"
                dragConstraints={{ left: 0, right: 380 }}
                dragElastic={{ left: 0.1, right: 0.6 }}
                onDragEnd={(e, info) => {
                  // Swipe right to close
                  if (info.offset.x > 80) {
                    setDrawerOpen(false);
                  }
                }}
                className="fixed top-0 right-0 h-full w-[min(90vw,380px)] bg-[#111111]/95 border-l border-white/8 backdrop-blur-xl rounded-l-2xl shadow-2xl z-[9999] lg:hidden flex flex-col overflow-y-auto"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/5">
                  <Link href="/" className="flex items-center gap-3 no-underline" onClick={() => setDrawerOpen(false)}>
                    <div className="w-9 h-9 rounded-full overflow-hidden relative border-[1.5px] border-[rgba(255,255,255,0.2)] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex items-center justify-center shrink-0">
                      <Image
                        src="/logo/image.png"
                        alt="Kiran Industries"
                        width={36}
                        height={36}
                        className="absolute top-0 left-0 w-full h-full scale-140 -translate-y-[1px] origin-top object-cover"
                      />
                    </div>
                    <div className="flex flex-col leading-[1.15]">
                      <span className="font-display text-base font-black text-white tracking-[0.05em]">KI&apos;S</span>
                      <span className="font-display text-[9px] font-bold text-primary-light tracking-[0.12em] mt-[1.5px]">CONTINENTAL</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Navigation Menu */}
                <div className="flex-1 py-6 px-4 flex flex-col gap-2">
                  {menuItems.map((item) => {
                    if (item.key === '/products') {
                      return (
                        <ProductAccordionItem
                          key={item.key}
                          item={item}
                          pathname={pathname}
                          onClose={() => setDrawerOpen(false)}
                        />
                      );
                    }
                    
                    const Icon = getMenuIcon(item.key);
                    const isActive = pathname === item.key;
                    return (
                      <Link
                        key={item.key}
                        href={item.key}
                        onClick={() => setDrawerOpen(false)}
                        className={[
                          'flex items-center gap-3.5 h-14 px-4 rounded-xl font-display text-[15px] font-semibold text-white/70 no-underline transition-all duration-200 ease border border-transparent',
                          isActive
                            ? 'text-white bg-gradient-to-br from-primary/20 to-primary-light/10 border-primary/30 shadow-[0_0_12px_rgba(11,101,181,0.25)] font-bold'
                            : 'hover:text-white hover:bg-white/5 hover:border-white/5',
                        ].join(' ')}
                      >
                        {Icon && <Icon size={18} className={isActive ? "text-primary-light" : "text-white/40"} />}
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Contact info & Sticky CTAs */}
                <div className="p-6 border-t border-white/5 bg-black/20 flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`} className="flex items-center gap-2.5 text-xs text-white/60 hover:text-white no-underline">
                      <Phone size={14} className="text-primary-light" />
                      <span>{company.contact.phone1}</span>
                    </a>
                    <a href={`mailto:${company.contact.email1}`} className="flex items-center gap-2.5 text-xs text-white/60 hover:text-white no-underline">
                      <Mail size={14} className="text-primary-light" />
                      <span>{company.contact.email1}</span>
                    </a>
                    <div className="flex items-start gap-2.5 text-xs text-white/60">
                      <MapPin size={14} className="text-primary-light mt-0.5 shrink-0" />
                      <span>Sy. #659/2, Mustor Road, Manvi, Karnataka</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <a
                      href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`}
                      className="flex items-center justify-center h-12 rounded-xl text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 text-white no-underline transition-all duration-200 cursor-pointer"
                    >
                      Call Now
                    </a>
                    <Link
                      href="/request-quote"
                      onClick={() => setDrawerOpen(false)}
                      className="flex items-center justify-center h-12 rounded-xl text-sm font-bold bg-gradient-to-r from-primary to-primary-light text-white shadow-[0_4px_12px_rgba(11,101,181,0.3)] hover:brightness-110 no-underline transition-all duration-200"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}

      {/* ============================================================
         STICKY FLOATING BOTTOM NAVIGATION (visible on screens < 1024px)
         ============================================================ */}
      {isMobile && <StickyBottomNav pathname={pathname} />}
    </>
  );
}