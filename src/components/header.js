// src/components/Header.js

import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname === '/projeler';
  const isAboutPage = location.pathname === '/hakkimizda';
  const isStandsPage = location.pathname === '/standlarimiz';
  // 1. ADIM: İletişim sayfasını kontrol etmek için yeni bir değişken ekliyoruz
  const isContactPage = location.pathname === '/iletisim';

  let headerClasses;
  // 2. ADIM: Koşula İletişim sayfasını da ekliyoruz (|| isContactPage)
  if (isHomePage) {
    headerClasses = 'absolute';
  } else if (isProjectsPage || isAboutPage || isStandsPage || isContactPage) { // || "VEYA" anlamına gelir
    headerClasses = 'relative bg-koyu-lacivert shadow-md';
  } else {
    headerClasses = 'relative bg-white shadow-md';
  }

  const linkClasses = ({ isActive }) => {
    // 3. ADIM: Koyu arka plan kuralına İletişim sayfasını da ekliyoruz
    const isDarkBg = isHomePage || isProjectsPage || isAboutPage || isStandsPage || isContactPage;
    const textColor = isDarkBg ? 'text-white' : 'text-gray-800';
    const hoverColor = isDarkBg ? 'hover:text-gray-200' : 'hover:text-gray-500';
    const activeBorderColor = isActive ? (isDarkBg ? 'border-blue-400' : 'border-blue-700') : 'border-transparent';
    return `transition-colors drop-shadow-sm font-medium py-2 border-b-2 ${textColor} ${hoverColor} ${activeBorderColor}`;
  };

  return (
    <header className={`${headerClasses} top-0 left-0 w-full z-20`}>
      <nav className="px-6 py-4 flex justify-between items-center">
        <NavLink to="/">
          <img src="/logo.jpeg" alt="StandPro Logo" className="h-24 w-auto" />
        </NavLink>
        <div className="flex items-center space-x-8">
          <NavLink to="/" className={linkClasses}>Anasayfa</NavLink>
          <NavLink to="/projeler" className={linkClasses}>Projeler</NavLink>
          <NavLink to="/standlarimiz" className={linkClasses}>Hizmetler</NavLink>
          <NavLink to="/hakkimizda" className={linkClasses}>Hakkımızda</NavLink>
          <NavLink to="/iletisim" className={linkClasses}>İletişim</NavLink>
        
        </div>
      </nav>
    </header>
  );
}

export default Header;