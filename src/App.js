// src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"; 
import { Helmet } from 'react-helmet-async'; // Import burada kalıyor

// Temel Bileşenleri Import Et
import Header from './components/header';
import Footer from './components/footer';
import WhatsAppButton from './components/WhatsappButton';

// Sayfaları Import Et
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import StandsPage from './pages/StandsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter>
      
        {/*           SİTE GENELİ ETİKETLER
          Buraya sadece tüm sayfalarda görünmesi gereken 
          favicon (tarayıcı sekmesi ikonu) etiketlerini bırakıyoruz.
          Title, Description ve Canonical etiketleri 
          her sayfanın kendi dosyasında (Örn: HomePage.js) yönetilecek.
        */}
        <Helmet>
          {/* İKONLARINIZ (Bunlar doğru, burada kalmalı) */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/StandproLogo.png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/logo.jpeg" />
        </Helmet>
      
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projeler" element={<ProjectsPage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/standlarimiz" element={<StandsPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
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

