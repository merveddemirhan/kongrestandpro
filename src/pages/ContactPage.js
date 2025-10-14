// src/pages/ContactPage.js

import { NavLink } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function ContactPage() {
  return (
    // 1. ADIM: Arka plana modern bir gradient (renk geçişi) ekledik
    <div className="bg-gradient-to-br from-gray-900 to-slate-800 min-h-screen pt-16">
      <div className="container mx-auto px-6 py-20">
        
        {/* İki sütunlu ana yapı */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* === SOL SÜTUN: Bilgi Paneli (Buzlu Cam Efekti) === */}
          {/* 2. ADIM: "Buzlu Cam" efekti için özel sınıflar ekledik */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 text-white h-full">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Merhaba!</h1>
            <p className="text-lg text-gray-300 mb-10">Projenizi hayata geçirmek için ilk adımı atın. Sizi dinlemeye hazırız.</p>
            
            <div className="space-y-8">
              {/* İletişim Bilgileri */}
              <div className="flex items-start space-x-4">
                <FiPhone className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Telefon</h3>
                  <p className="text-gray-300">+90 551 181 32 41</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FiMail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">E-Posta</h3>
                  <p className="text-gray-300">kongrestandpro@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FiMapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Konum</h3>
                  <p className="text-gray-300">Antalya merkezli, Türkiye geneli hizmet</p>
                </div>
              </div>
            </div>

            {/* Ayırıcı Çizgi */}
            <hr className="my-10 border-white/20" />

            {/* Sosyal Medya İkonları */}
            <div className="flex items-center space-x-6">
              <p className="text-lg font-semibold">Bizi Takip Edin:</p>
              <a href="https://instagram.com/kongrestandpro" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors"><FaInstagram size={28} /></a>
              
             
            </div>
          </div>

          {/* === SAĞ SÜTUN: İletişim Formu (Buzlu Cam Efekti) === */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Bize Mesaj Gönderin</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Adınız Soyadınız</label>
                <input type="text" id="name" name="name" className="block w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-posta Adresiniz</label>
                <input type="email" id="email" name="email" className="block w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mesajınız</label>
                <textarea id="message" name="message" rows="5" className="block w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"></textarea>
              </div>
              <div>
                {/* 3. ADIM: Butona modern bir gradient ve animasyon ekledik */}
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transform transition-transform duration-300 ease-in-out shadow-lg">
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;