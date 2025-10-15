// src/pages/HomePage.js
import { NavLink } from 'react-router-dom';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FiShield, FiUsers } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

function HomePage() {
  return (
    <div>
      {/* Bu <style> bloğu, ekran boyutuna göre arkaplan resmini değiştirmemizi sağlar.
        - Geniş ekranlarda (masaüstü): /arkaplan.jpg kullanılır.
        - 768px'den dar ekranlarda (mobil): /arkaplan-mobil.jpg kullanılır.
      */}
      <style>
        {`
          .hero-background {
            background-image: url(/arkaplan.png);
          }
          
          @media (max-width: 768px) {
            .hero-background {
              background-image: url(/arkaplan-mobil.png); 
            }
          }
        `}
      </style>

      {/* === BÖLÜM 1: TAM EKRAN KARŞILAMA GÖRSELİ (MOBİL UYUMLU) === */}
      <div
        className="hero-background relative h-[90vh] sm:h-screen flex items-center justify-center text-center bg-scroll md:bg-fixed"
        style={{
          // Arkaplan resmini artık CSS yönettiği için buradan kaldırdık.
          // Bu stiller hem mobil hem de masaüstü için ortaktır.
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000', // Resim yüklenemezse görünecek renk
          backgroundSize: 'cover',
        }}
      >
        {/* Yazıların okunabilirliği için karanlık filtre */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Ortalanmış İçerik */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Yaratıcı Fuar Standları ve Etkinlik Çözümleri
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Markanızı en iyi şekilde temsil eden, modern ve işlevsel stand tasarımlarıyla fuarlarda fark yaratın.
          </p>
          <div className="mt-10">
            <NavLink
              to="/projeler"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Projelerimizi Keşfedin
            </NavLink>
          </div>
        </div>
      </div>

      {/* === BÖLÜM 2: TANITIM === */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Antalya ve Türkiye Genelinde Fuar Kongre Standı Tasarımı
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Fuar ve kongre alanlarında dikkat çekici, işlevsel ve kurumsal kimliğinizi yansıtan özel stand çözümleri üretiyoruz. Antalya merkezli ekibimizle Türkiye'nin dört bir yanındaki organizasyonlara zamanında, güvenilir ve yaratıcı hizmet sunuyoruz.
              </p>
              <div className="mt-10">
                <NavLink
                  to="/projeler"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
                >
                  Tüm Projeleri İncele
                </NavLink>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/2.jpeg"
                alt="STANDPRO özel üretim fuar standı tasarımı"
                className="rounded-2xl shadow-2xl w-full max-w-lg object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === BÖLÜM 3: FUAR STANDI TASARIMLARI === */}
      <section className="py-20 sm:py-24 bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
              Fuar Standı Tasarımlarımız
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Markanızın fuar vizyonunu hayata geçiriyoruz. Proje yönetiminden nihai uygulamaya kadar, her ölçü ve sektörde, kurumsal kimliğinizle mükemmel uyum sağlayan, ziyaretçi etkileşimini zirveye taşıyan özgün stand çözümlerini keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={`/${num}.jpeg`}
                  alt={`Modern Fuar Standı Tasarımı ${num}`}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-6"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <NavLink
              to="/projeler"
              className="inline-flex items-center px-8 md:px-10 py-3 md:py-4 border border-transparent text-lg md:text-xl font-semibold rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Tüm Projeleri Keşfet
            </NavLink>
          </div>
        </div>
      </section>

      {/* Buradan sonraki bölümleriniz aynı şekilde devam edebilir. */}
    </div>
  );
}

export default HomePage;