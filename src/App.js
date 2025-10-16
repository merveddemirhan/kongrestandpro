// src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"; // ✅ Vercel Analytics import edildi

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

      {/* ✅ Vercel Analytics bileşeni (otomatik sayfa ve kullanıcı takibi yapar) */}
      <Analytics />
    </>
  );
}

export default App;

