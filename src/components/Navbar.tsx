'use client';

import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined, PhoneOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company } from '@/data/company';
import styles from './Navbar.module.css';

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

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = [styles.navbar, scrolled ? styles.navbarScrolled : ''].join(' ');

  return (
    <>
      <nav className={navClass}>
        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="/" className={styles.logoWrapper}>
            <div className={styles.logoImageWrapper}>
              <Image 
                src="/logo/image.png" 
                alt="Kiran Industries" 
                width={44} 
                height={44} 
                className={styles.logoIcon}
                priority 
              />
            </div>
            <div className={styles.logoTextContainer}>
              <span className={styles.logoBrandText}>KIRAN</span>
              <span className={styles.logoSubText}>INDUSTRIES</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.key}
                  className={[
                    styles.menuItem,
                    pathname === item.key ? styles.menuItemActive : '',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className={styles.navActions}>
            <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`} className={styles.phoneLink}>
              <PhoneOutlined />
              <span>{company.contact.phone1}</span>
            </a>
            <Link href="/request-quote">
              <Button type="primary" className={styles.ctaBtn}>
                Get Quote
              </Button>
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <Link href="/" className={styles.logoWrapper} onClick={() => setDrawerOpen(false)}>
            <div className={styles.logoImageWrapper}>
              <Image 
                src="/logo/image.png" 
                alt="Kiran Industries" 
                width={40} 
                height={40} 
                className={styles.logoIcon}
              />
            </div>
            <div className={styles.logoTextContainer}>
              <span className={styles.logoBrandText}>KIRAN</span>
              <span className={styles.logoSubText}>INDUSTRIES</span>
            </div>
          </Link>
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        size="default"
        closeIcon={<CloseOutlined style={{ color: '#ffffff' }} />}
        style={{ background: '#111111' }}
        styles={{ 
          body: { padding: '24px 0', background: '#111111' }, 
          header: { borderBottom: '1px solid rgba(255, 255, 255, 0.08)', background: '#111111', color: '#ffffff' },
          mask: { backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }
        }}
      >
        <ul className={styles.mobileMenu}>
          {menuItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.key}
                className={[
                  styles.mobileMenuItem,
                  pathname === item.key ? styles.mobileMenuItemActive : '',
                ].join(' ')}
                onClick={() => setDrawerOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.drawerFooter}>
          <a href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`} className={styles.drawerPhone}>
            <PhoneOutlined /> {company.contact.phone1}
          </a>
          <Link href="/request-quote" onClick={() => setDrawerOpen(false)}>
            <Button type="primary" block size="large" className={styles.ctaBtn}>
              Get a Quote
            </Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
}
