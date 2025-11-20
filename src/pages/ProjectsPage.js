import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper CSS (yalnızca bu sayfada gerekiyorsa burada import et; global ise _app tarzı ortak yerde bırak)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* ─────────────────────────────
   PROJE VERİLERİ
   Not: Türkçe karakterli dosya adları (ör. /tasarım.jpeg) bazı hostlarda sorun çıkarabilir.
   Mümkünse ASCII (tasarim.jpeg) kullan.
────────────────────────────── */
const projectData1 = {
  id: 1,
  title: '4x3 Kongre ve Fuar Standı Tasarımı',
  description:
    `Toplam 12 m²'lik bir alana yayılan, 4 metre genişlik ve 3 metre derinliğe sahip bu standlar, markanızın hikayesini anlatmak için size geniş bir tuval sunar. Bu popüler ölçü, hem dikkat çekici ürün sergileme alanları yaratmaya hem de müşterilerinizle konforlu görüşmeler yapabileceğiniz özel bir köşe oluşturmaya olanak tanır. Stratejik olarak planlandığında, ziyaretçi trafiğini en verimli şekilde yöneterek marka etkileşiminizi en üst düzeye çıkarır.`,
  images: ['/2.jpeg'],
  features: []
};

const projectData2 = {
  id: 2,
  title: '5x2 Panoramik Stand',
  description:
    `Fuar alanının hareketli koridorlarında ziyaretçilerin dikkatini anında çeken bir sunum hayal edin.
     Toplam 10 m²'lik 5x2 standlarımız, tam da bu etkiyi yaratmak için tasarlanmıştır.
     5 metrelik kesintisiz ön cephesi, marka mesajınızı panoramik bir şekilde sunma imkanı verirken,
     2 metrelik akıllıca planlanmış derinliği, hızlı ve etkili görüşmeler için yeterli alanı sağlar.`,
  images: ['/5.jpeg', '/5x2.jpeg'],
  features: [
    '5 metrelik panoramik ön cephe',
    'Maksimum marka ve ürün görünürlüğü',
    'Yoğun koridorlar için stratejik tasarım',
    'Hızlı ve etkili ziyaretçi etkileşimi',
    'Görsel odaklı ve modern sunum imkanı',
  ]
};

const projectData3 = {
  id: 3,
  title: '7x3 Stand',
  description:
    `7x3'lük bir stand, sadece bir sergileme alanı değil, fuar alanındaki marka elçinizdir. 21 m²'lik bu stratejik alan, size birden fazla deneyimi aynı anda sunma lüksü tanır. 7 metrelik panoramik sahnesi, büyük ölçekli görselleriniz, video duvarlarınız veya birden fazla ürün grubunuz için kesintisiz bir tuval yaratır. 3 metrelik konforlu derinliği ise ziyaretçilerinizi markanızın dünyasına davet eder; burada özel bir VIP görüşme köşesi, interaktif bir demo alanı veya geniş bir danışma bankosu rahatlıkla konumlandırılabilir. Bu, fuarda sadece "yer almak" değil, "ağırlık koymak" isteyen lider markaların tercihidir.`,
  images: ['/7x32.jpeg', '/1.jpeg', '/7x33.jpeg'],
  features: [
    "21 m²'lik stratejik ve prestijli alan",
    '7 metrelik etkileyici panoramik cephe',
    'Özel VIP ve görüşme alanları yaratma imkanı',
    'Çok yönlü ve esnek tasarım olanakları',
    'Fuar alanında marka hakimiyeti kurma',
  ]
};

const projectData4 = {
  id: 4,
  title: 'Marka Deneyiminiz İçin İdeal Alan: 5x3 Stand',
  description:
    `15 m²'lik 5x3 stand, bir fuarda ihtiyacınız olan her şeyi sunan stratejik bir "tatlı noktadır". Bu alan, sadece bir stant değil, markanız için bir iş yapma ve deneyim merkezidir. 5 metrelik geniş vitrini, ürünlerinizi ve marka mesajınızı etkileyici bir şekilde sunarken, 3 metrelik cömert derinliği, ziyaretçileri markanızın dünyasına davet etmenizi sağlar. Bu alanda hem şık bir karşılama bankosu, hem interaktif bir sunum köşesi, hem de yarı özel bir toplantı alanı rahatlıkla planlanabilir.`,
  images: ['/3.jpeg', '/5x32.jpeg'],
  features: [
    "15 m²'lik ideal ve dengeli alan",
    'Geniş karşılama ve sergileme cephesi',
    'Derinlemesine marka deneyimi sunma imkanı',
    'İnteraktif sunum ve toplantı alanları için esneklik',
    'Orta ölçekli bütçelerle maksimum etki',
  ]
};

const projectData5 = {
  id: 5,
  title: '4x3 Kongre ve Fuar Standı Tasarımı',
  description:
    `Toplam 12 m²'lik bir alana yayılan, 4 metre genişlik ve 3 metre derinliğe sahip bu standlar, markanızın hikayesini anlatmak için size geniş bir tuval sunar. Bu popüler ölçü, hem dikkat çekici ürün sergileme alanları yaratmaya hem de müşterilerinizle konforlu görüşmeler yapabileceğiniz özel bir köşe oluşturmaya olanak tanır. Stratejik olarak planlandığında, ziyaretçi trafiğini en verimli şekilde yöneterek marka etkileşiminizi en üst düzeye çıkarır.`,
  images: ['/4.jpeg'],
  features: []
};

/* ─────────────────────────────
   TEKRAR KULLANILABİLEN BÖLÜM
────────────────────────────── */
const ProjectSection = ({ project, imageFirst = false }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
    {/* Galeri (Mobilde üstte) */}
    <div className={!imageFirst ? 'lg:order-last' : ''}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
        spaceBetween={16}
        aria-label={`${project.title} görsel galerisi`}
        className="rounded-xl shadow-2xl"
      >
        {project.images.map((src, index) => (
          <SwiperSlide key={`${project.id}-${index}`}>
            <img
              src={src}
              alt={`${project.title} Görseli ${index + 1}`}
              className="w-full h-auto max-h-[600px] object-cover rounded-xl"
              loading="lazy"
              decoding="async"
              width="1600"
              height="1066"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Metin */}
    <div className="lg:sticky lg:top-24">
      {/* Başlık h1 olarak kalabilir (sayfa başında Helmet Title var) */}
      <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        {project.title}
      </h1>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed whitespace-pre-line">
        {project.description}
      </p>

      {project.features?.length > 0 && (
        <ul className="space-y-4 mb-8">
          {project.features.map((feature, index) => (
            <li key={`${project.id}-f-${index}`} className="flex items-start text-lg text-gray-700">
              <svg
                className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

/* ─────────────────────────────
   SAYFA BİLEŞENİ
────────────────────────────── */
function ProjectsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* SEO */}
      <Helmet>
        <title>Projelerimiz | Fuar & Kongre Standı Portfolyosu | Standpro</title>
        <meta
          name="description"
          content="Standpro'nun tamamladığı fuar standı projeleri. 4x3, 5x2, 7x3 ve 5x3 panoramik ve ada stand tasarımlarımızı ve portfolyomuzu inceleyin."
        />
        <link rel="canonical" href="https://www.kongrestandpro.com/projeler" />
      </Helmet>

      <div className="container mx-auto px-6 py-12 lg:py-16 space-y-16 lg:space-y-24">
        {/* Resim sağda */}
        <ProjectSection project={projectData1} />
        {/* Resim solda */}
        <ProjectSection project={projectData2} imageFirst />
        {/* Resim sağda */}
        <ProjectSection project={projectData3} />
        {/* Resim solda */}
        <ProjectSection project={projectData4} imageFirst />
        {/* Resim sağda */}
        <ProjectSection project={projectData5} />
      </div>
    </div>
  );
}

export default ProjectsPage;
