'use client';

import React, { useEffect } from 'react';
import { ConfigProvider, App } from 'antd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const theme = {
  token: {
    colorPrimary: '#0B65B5',
    colorPrimaryHover: '#2A85D6',
    colorBgBase: '#FFFFFF',
    colorTextBase: '#1A1A1A',
    borderRadius: 8,
    borderRadiusLG: 12,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 15,
    colorLink: '#0B65B5',
    colorLinkHover: '#2A85D6',
  },
  components: {
    Button: {
      primaryColor: '#FFFFFF',
      colorPrimary: '#0B65B5',
      colorPrimaryHover: '#2A85D6',
      colorPrimaryActive: '#064885',
      borderRadius: 8,
      controlHeight: 42,
      fontWeight: 600,
    },
    Menu: {
      itemSelectedColor: '#0B65B5',
      itemHoverColor: '#0B65B5',
      horizontalItemSelectedColor: '#0B65B5',
    },
    Input: {
      borderRadius: 8,
      controlHeight: 44,
    },
    Select: {
      borderRadius: 8,
    },
    Card: {
      borderRadius: 12,
    },
    Form: {
      labelColor: '#595959',
      labelFontSize: 13,
    },
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <App>
        <Navbar />
        <main style={{ minHeight: '100vh' }}>{children}</main>
        <Footer />
      </App>
    </ConfigProvider>
  );
}
