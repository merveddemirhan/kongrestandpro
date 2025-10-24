// src/pages/AboutPage.js

import React from 'react';
import { Helmet } from 'react-helmet-async'; // 1. Adım: Kütüphaneyi import edin

function AboutPage() {
  return (
    <> {/* 2. Adım: Helmet'i de içerebilmesi için bir Fragment (<>) ekledik */}
      
      {/* 3. Adım: Bu sayfaya özel SEO etiketlerini ekleyin */}
      <Helmet>
        <title>Hakkımızda | Standpro - Fuar & Etkinlik Çözümleri</title>
        <meta 
          name="description" 
          content="Standpro, 2020'den beri Antalya'dan başlayarak Türkiye geneline yenilikçi fuar standı tasarımı ve uygulama hizmetleri sunan uzman bir ekiptir. Misyonumuzu ve vizyonumuzu keşfedin." 
        />
        
        {/*
          Google Search Console hatalarını çözmek için eklenen 
          standart (canonical) URL etiketi. 
          Vercel ayarlarınız 'www' üzerine olduğu için 'www'li versiyonu ekliyoruz.
        */}
        <link rel="canonical" href="https://www.kongrestandpro.com/hakkimizda" />

      </Helmet>

      <div className="bg-white min-h-screen pt-16">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Sol Taraf: Metin İçeriği */}
            <div className="text-gray-700">
              
              {/* Bu <h1> etiketi SEO için çok iyi. */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Hayalleri Mekana, Markaları Zirveye Taşıyoruz
              </h1>
              
              <p className="text-lg mb-6">
                Biz, fuar ve etkinlik sektöründe sıradan standlar üretmenin ötesine geçerek, markaların kimliğini ve vizyonunu yansıtan özgün mekanlar tasarlayan bir ekibiz. 2020 yılında Antalya'da başlayan yolculuğumuz, Türkiye'nin dört bir yanındaki fuarlarda sayısız markanın başarı hikayesine ortak olmamızla devam etti.
              </p>

              {/* Bu <h2> etiketleri de harika. */}
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Misyonumuz</h2>
              <p className="mb-6">
                Misyonumuz, en kaliteli malzemeyi yenilikçi tasarımla birleştirerek, müşterilerimizin fuar alanında sadece yer almalarını değil, aynı zamanda fark edilmelerini, hatırlanmalarını ve hedeflerine ulaşmalarını sağlamaktır.
              </p>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Vizyonumuz</h2>
              <p>
                Vizyonumuz, Türkiye'de stand tasarımı ve uygulama denildiğinde akla gelen ilk marka olmak ve her projede beklentilerin üzerinde bir kalite sunarak sektör standartlarını yeniden belirlemektir.
              </p>
            </div>

            {/* Sağ Taraf: Görsel */}
            <div>
              <img 
                src="/stand-1.jpeg" 
                // Bu 'alt' etiketi de SEO için önemli, "StandPro Ekip" gayet uygun.
                alt="StandPro Ekip"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
 
export default AboutPage;