// src/pages/StandsPage.js (Dosya adı olarak bu kullanılmalı)

import React from 'react';
import { NavLink } from 'react-router-dom';

// Swiper React bileşenleri
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// İkonlar
import { Building2 } from 'lucide-react';

// --- Modern Building Icon bileşeni ---
const BuildingIcon = () => (
  <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-transform transform hover:scale-110 hover:bg-blue-200 duration-300">
    <Building2 className="h-10 w-10 text-blue-600" />
  </div>
);

const projectData = {
  id: 1,
  title: 'Fuar Standı Sistem ve Uygulamalarımız',
  description: `Bu bölümde, farklı fuar ve etkinlik gereksinimleri için sunduğumuz stand sistemlerine ait uygulama örnekleri yer almaktadır. Portföyümüzü inceleyerek projeniz için en uygun çözümler hakkında fikir edinebilirsiniz.`,
  images: [
    '/stand-1.jpeg',
    '/stand-2.jpeg',
    '/stand-3.jpeg',
    '/stand-4.jpeg',
    '/stand-5.jpeg',
    '/stand-6.jpeg',
    '/stand-7.jpeg',
  ],
};

const solutionsData = [
  { title: '3x2 Kongre Standı', description: 'Kompakt alanlarda maksimum verimlilik sağlayan şık stand tasarımları.', link: '/stand-detay/3x2-kongre' },
  { title: '6x2 Kongre Standı', description: 'Orta ölçekli fuarlar için ideal, fonksiyonel çözümler.', link: '/stand-detay/6x2-kongre' },
  { title: '9x2 Kongre Standı', description: 'Geniş alanlarda güçlü marka görünürlüğü sağlayan tasarımlar.', link: '/stand-detay/9x2-kongre' },
  { title: '6x4 Ada Standı', description: 'Özgün konseptler ve modern çözümlerle öne çıkan stand tasarımı.', link: '/stand-detay/6x4-ada' },
  { title: '6x6 Fuar Standı', description: 'Prestijli markalar için premium ölçü ve özel tasarım çözümleri.', link: '/stand-detay/6x6-fuar' },
  { title: 'Kongre Standı', description: 'Sağlık, kozmetik ve gıda sektörlerine özel kurumsal kongre standları.', link: '/stand-detay/kongre' },
  { title: 'LED Ekranlı Stand', description: 'Markanızı en dikkat çekici şekilde öne çıkaran LED çözümleri.', link: '/stand-detay/led-ekranli' },
  { title: 'Fuar Standı', description: 'Her sektör ve ölçü için özel tasarım, üretim ve kurulum hizmeti.', link: '/stand-detay/fuar' },
];

// === DEĞİŞİKLİK 1: Fonksiyon adı "StandsPage" olarak güncellendi ===
function StandsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* SOL: Metin */}
          <div className="text-gray-800 order-2 lg:order-1">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {projectData.title}
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed whitespace-pre-line">
              {projectData.description}
            </p>
          </div>

          {/* SAĞ: Görsel Galeri */}
          <div className="lg:sticky lg:top-24 max-h-[600px] lg:h-screen lg:max-h-[70vh] order-1 lg:order-2">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={true}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              className="rounded-xl shadow-2xl h-full"
            >
              {projectData.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Proje Görseli ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* === Çözümler Bölümü === */}
      <section className="bg-white py-20 sm:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
              Fuar ve Kongre Standı Çözümlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong className="text-blue-600">KongreStandPro</strong>, markaların ihtiyaçlarına özel, farklı ölçülerde modern ve kurumsal fuar standı çözümleri sunmaktadır. Estetik tasarım anlayışımız ve fonksiyonel yaklaşımlarımızla markanızın fuar ve kongrelerde güçlü bir izlenim bırakmasını sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionsData.map((solution, index) => (
              <NavLink
                to={solution.link}
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center flex flex-col justify-between"
              >
                <div className="mb-6">
                  <BuildingIcon />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </div>
              </NavLink>
            ))}
          </div>

          <div className="mt-16 text-center">
            <NavLink
              to="/projeler"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              PROJELER
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

// === DEĞİŞİKLİK 2: Export ifadesi "StandsPage" olarak güncellendi ===
export default StandsPage;








