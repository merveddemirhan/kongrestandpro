// src/pages/ProjectsPage.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Gerekli Swiper CSS dosyaları
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- PROJE VERİLERİ ---
const projectData1 = {
    id: 1,
    title: '4x3 Kongre ve Fuar Standı Tasarımı',
    description: `Toplam 12 m²'lik bir alana yayılan, 4 metre genişlik ve 3 metre derinliğe sahip bu standlar, markanızın hikayesini anlatmak için size geniş bir tuval sunar. Bu popüler ölçü, hem dikkat çekici ürün sergileme alanları yaratmaya hem de müşterilerinizle konforlu görüşmeler yapabileceğiniz özel bir köşe oluşturmaya olanak tanır. Stratejik olarak planlandığında, ziyaretçi trafiğini en verimli şekilde yöneterek marka etkileşiminizi en üst düzeye çıkarır.`,
    images: ['/2.jpeg'],
    features: []
};
const projectData2 = {
    id: 2,
    title: '5x2 Panoramik Stand',
    description: `Fuar alanının hareketli koridorlarında ziyaretçilerin dikkatini anında çeken bir sunum hayal edin. 
                     Toplam 10 m²'lik 5x2 standlarımız, tam da bu etkiyi yaratmak için tasarlanmıştır. 
                     5 metrelik kesintisiz ön cephesi, marka mesajınızı panoramik bir şekilde sunma imkanı verirken, 
                     2 metrelik akıllıca planlanmış derinliği, hızlı ve etkili görüşmeler için yeterli alanı sağlar.`,
    images: ['/5.jpeg', '/5x2.jpeg'], // DÜZELTİLDİ: Resimler ayrı elemanlar olarak diziye eklendi.
    features: [
        '5 metrelik panoramik ön cephe', 'Maksimum marka ve ürün görünürlüğü', 'Yoğun koridorlar için stratejik tasarım',
        'Hızlı ve etkili ziyaretçi etkileşimi', 'Görsel odaklı ve modern sunum imkanı',
    ]
};
const projectData3 = {
    id: 3,
    title: '7x3 Stand',
    description: `7x3'lük bir stand, sadece bir sergileme alanı değil, fuar alanındaki marka elçinizdir. 21 m²'lik bu stratejik alan, size birden fazla deneyimi aynı anda sunma lüksü tanır. 7 metrelik panoramik sahnesi, büyük ölçekli görselleriniz, video duvarlarınız veya birden fazla ürün grubunuz için kesintisiz bir tuval yaratır. 3 metrelik konforlu derinliği ise ziyaretçilerinizi markanızın dünyasına davet eder; burada özel bir VIP görüşme köşesi, interaktif bir demo alanı veya geniş bir danışma bankosu rahatlıkla konumlandırılabilir. Bu, fuarda sadece "yer almak" değil, "ağırlık koymak" isteyen lider markaların tercihidir.`,
    images: ['/7x32.jpeg', '/1.jpeg', '/7x33.jpeg'], // DÜZELTİLDİ: Resimler ayrıldı ve yazım hatası giderildi (jepg -> jpeg).
    features: [
        '21 m²\'lik stratejik ve prestijli alan', '7 metrelik etkileyici panoramik cephe', 'Özel VIP ve görüşme alanları yaratma imkanı',
        'Çok yönlü ve esnek tasarım olanakları', 'Fuar alanında marka hakimiyeti kurma',
    ]
};
const projectData4 = {
    id: 4,
    title: 'Marka Deneyiminiz İçin İdeal Alan: 5x3 Stand',
    description: `15 m²'lik 5x3 stand, bir fuarda ihtiyacınız olan her şeyi sunan stratejik bir "tatlı noktadır". Bu alan, sadece bir stant değil, markanız için bir iş yapma ve deneyim merkezidir. 5 metrelik geniş vitrini, ürünlerinizi ve marka mesajınızı etkileyici bir şekilde sunarken, 3 metrelik cömert derinliği, ziyaretçileri markanızın dünyasına davet etmenizi sağlar. Bu alanda hem şık bir karşılama bankosu, hem interaktif bir sunum köşesi, hem de yarı özel bir toplantı alanı rahatlıkla planlanabilir.`,
    images: ['/3.jpeg', '/5x32.jpeg'], // DÜZELTİLDİ: Resimler ayrı elemanlar olarak diziye eklendi.
    features: [
        '15 m²\'lik ideal ve dengeli alan', 'Geniş karşılama ve sergileme cephesi', 'Derinlemesine marka deneyimi sunma imkanı',
        'İnteraktif sunum ve toplantı alanları için esneklik', 'Orta ölçekli bütçelerle maksimum etki',
    ]
};
const projectData5 = {
    id: 5,
    title: '4x3 Kongre ve Fuar Standı Tasarımı',
    description: `Toplam 12 m²'lik bir alana yayılan, 4 metre genişlik ve 3 metre derinliğe sahip bu standlar, markanızın hikayesini anlatmak için size geniş bir tuval sunar. Bu popüler ölçü, hem dikkat çekici ürün sergileme alanları yaratmaya hem de müşterilerinizle konforlu görüşmeler yapabileceğiniz özel bir köşe oluşturmaya olanak tanır. Stratejik olarak planlandığında, ziyaretçi trafiğini en verimli şekilde yöneterek marka etkileşiminizi en üst düzeye çıkarır.`,
    images: ['/4.jpeg'],
    features: []
};

// Bu, her bir proje bölümünü render eden, tekrar kullanılabilir ve mobil öncelikli bir bileşen.
const ProjectSection = ({ project, imageFirst = false }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Galeri Sütunu (Mobil için her zaman üstte) */}
        <div className={!imageFirst ? 'lg:order-last' : ''}>
            <Swiper 
                modules={[Navigation, Pagination]} 
                navigation={true} 
                pagination={{ clickable: true }} 
                loop={true} 
                className="rounded-xl shadow-2xl"
            >
                {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img 
                            src={image} 
                            alt={`${project.title} Görseli ${index + 1}`} 
                            className="w-full h-auto max-h-[600px] object-cover rounded-xl" 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        {/* Metin Sütunu (Mobil için her zaman altta) */}
        <div className="lg:sticky lg:top-24"> 
            <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {project.title}
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed whitespace-pre-line">
                {project.description}
            </p>
            <ul className="space-y-4 mb-8">
                {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-lg text-gray-700">
                        <svg className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

// Ana Sayfa Bileşeni
function ProjectsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="container mx-auto px-6 py-12 lg:py-16 space-y-16 lg:space-y-24">
        
        {/* Resim sağda başlasın */}
        <ProjectSection project={projectData1} /> 
        
        {/* Resim sola gelsin */}
        <ProjectSection project={projectData2} imageFirst={true} /> 
        
        {/* Resim tekrar sağa gelsin */}
        <ProjectSection project={projectData3} />
        
        {/* Resim tekrar sola gelsin */}
        <ProjectSection project={projectData4} imageFirst={true} />
          {/* Resim tekrar sağa gelsin */}
        <ProjectSection project={projectData5} />

      </div>
    </div>
  );
}

export default ProjectsPage;