// src/App.js — React 18 + Helmet
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet-async';

// Bileşenler
import Header from './components/header';
import Footer from './components/footer';
import WhatsAppButton from './components/WhatsappButton';

// Sayfalar
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import StandsPage from './pages/StandsPage';
import ContactPage from './pages/ContactPage';

// Basit 404
function NotFoundPage() {
  return (
    <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Sayfa bulunamadı</h1>
      <p>Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        {/* GLOBAL DEFAULT META (canonical YOK) */}
        <Helmet
          defaultTitle="Standpro"
          titleTemplate="%s | Standpro"
        >
          <meta
            name="description"
            content="Antalya merkezli Standpro, Türkiye genelinde profesyonel fuar standı, kongre standı ve karşılama deski tasarımı, üretimi ve kurulum hizmetleri sunar."
          />
          {/* ikonlar */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/StandproLogo.png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/logo.jpeg" />
          {/* (opsiyonel) tema rengi */}
          <meta name="theme-color" content="#0f172a" />
        </Helmet>

        <Header />
        <main role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projeler" element={<ProjectsPage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/standlarimiz" element={<StandsPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>

      <Analytics />
    </>
  );
}

export default App;


