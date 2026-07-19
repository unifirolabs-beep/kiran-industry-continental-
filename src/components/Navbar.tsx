'use client';

import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { MenuOutlined, PhoneOutlined } from '@ant-design/icons';
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
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const navClass = [
    styles.navbar,
    scrolled ? styles.navbarScrolled : '',
  ].join(' ');

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
                priority
                className={styles.logoIcon}
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
                    pathname === item.key
                      ? styles.menuItemActive
                      : '',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className={styles.navActions}>
            <a
              href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`}
              className={styles.phoneLink}
            >
              <PhoneOutlined />
              <span>{company.contact.phone1}</span>
            </a>

            <Link
              href="/request-quote"
              className={styles.ctaBtn}
            >
              Get Quote
            </Link>

            <button
              className={styles.hamburger}
              aria-label="Open Menu"
              onClick={() => setMobileOpen(true)}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`${styles.mobileOverlay} ${
          mobileOpen ? styles.mobileOverlayShow : ''
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <aside
        className={`${styles.mobileDrawer} ${
          mobileOpen ? styles.mobileDrawerOpen : ''
        }`}
      >
        {/* Header */}
        <div className={styles.mobileHeader}>
          <Link
            href="/"
            className={styles.logoWrapper}
            onClick={() => setMobileOpen(false)}
          >
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

          <button
            className={styles.closeBtn}
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className={styles.mobileMenu}>
          {menuItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.key}
                onClick={() => setMobileOpen(false)}
                className={[
                  styles.mobileMenuItem,
                  pathname === item.key
                    ? styles.mobileMenuItemActive
                    : '',
                ].join(' ')}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className={styles.drawerFooter}>
          <a
            href={`tel:${company.contact.phone1.replace(/\s+/g, '')}`}
            className={styles.drawerPhone}
          >
            <PhoneOutlined />
            {company.contact.phone1}
          </a>

          <Link
            href="/request-quote"
            onClick={() => setMobileOpen(false)}
          >
            <Button
              type="primary"
              block
              size="large"
              className={styles.ctaBtn}
            >
              Get a Quote
            </Button>
          </Link>
        </div>
      </aside>
    </>
  );
}