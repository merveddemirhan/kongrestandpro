// src/components/Header.js

import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname === '/projeler';
  const isAboutPage = location.pathname === '/hakkimizda';
  const isStandsPage = location.pathname === '/standlarimiz';
  const isContactPage = location.pathname === '/iletisim';
  const isInternalPage = isProjectsPage || isAboutPage || isStandsPage || isContactPage;

  let headerClasses;
  if (isHomePage) {
    headerClasses = 'absolute';
  } else if (isInternalPage) {
    headerClasses = 'relative bg-koyu-lacivert shadow-md';
  } else {
    headerClasses = 'relative bg-white shadow-md';
  }

  const linkClasses = ({ isActive }) => {
    const isDarkBg = isHomePage || isInternalPage;
    const textColor = isDarkBg ? 'text-white' : 'text-gray-800';
    const hoverColor = isDarkBg ? 'hover:text-gray-200' : 'hover:text-gray-500';
    const activeBorderColor = isActive ? (isDarkBg ? 'border-blue-400' : 'border-blue-700') : 'border-transparent';
    return `transition-colors drop-shadow-sm font-medium py-2 border-b-2 ${textColor} ${hoverColor} ${activeBorderColor}`;
  };

  return (
    <header className={`${headerClasses} top-0 left-0 w-full z-20`}>
      {/* --- DEĞİŞİKLİK 1: justify-between -> justify-start --- */}
      <nav className="container mx-auto px-6 py-4 flex justify-start items-center">
        
        {/* Logo (Anasayfa hariç görünür) */}
        <NavLink to="/" className={isHomePage ? 'hidden' : 'block'}>
          <img src="/logo.jpeg" alt="StandPro Logo" className="h-20 md:h-24 w-auto" />
        </NavLink>
        
        {/* === MASAÜSTÜ MENÜSÜ === */}
        {/* --- DEĞİŞİKLİK 2: ml-10 class'ı eklendi --- */}
        <div className="hidden md:flex items-center space-x-8 ml-10">
          <NavLink to="/" className={linkClasses}>Anasayfa</NavLink>
          <NavLink to="/projeler" className={linkClasses}>Projeler</NavLink>
          <NavLink to="/standlarimiz" className={linkClasses}>Hizmetler</NavLink>
          <NavLink to="/hakkimizda" className={linkClasses}>Hakkımızda</NavLink>
          <NavLink to="/iletisim" className={linkClasses}>İletişim</NavLink>
        </div>

        {/* === MOBİL MENÜ İKONU (HAMBURGER) === */}
        {/* Mobil ikonu sağa atmak için ml-auto eklendi */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FiX className="h-8 w-8 text-white" />
            ) : (
              <FiMenu className="h-8 w-8 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* === AÇILIR MOBİL MENÜ PANELİ === */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-koyu-lacivert absolute w-full`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <NavLink to="/" className="block text-white text-lg py-2" onClick={() => setIsMenuOpen(false)}>Anasayfa</NavLink>
            <NavLink to="/projeler" className="block text-white text-lg py-2" onClick={() => setIsMenuOpen(false)}>Projeler</NavLink>
            <NavLink to="/standlarimiz" className="block text-white text-lg py-2" onClick={() => setIsMenuOpen(false)}>Hizmetler</NavLink>
            <NavLink to="/hakkimizda" className="block text-white text-lg py-2" onClick={() => setIsMenuOpen(false)}>Hakkımızda</NavLink>
            <NavLink to="/iletisim" className="block text-white text-lg py-2" onClick={() => setIsMenuOpen(false)}>İletişim</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;