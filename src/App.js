// src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Temel Bileşenleri Import Et
import Header from './components/header';
import Footer from './components/footer';
import WhatsAppButton from './components/WhatsappButton'; // 1. YENİ BİLEŞENİ İMPORT ET

// Sayfaları Import Et
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import StandsPage from './pages/StandsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
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
      
      <WhatsAppButton /> {/* 2. YENİ BUTONU BURAYA EKLE */}
    </BrowserRouter>
  );
}

export default App;