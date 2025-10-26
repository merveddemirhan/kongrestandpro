import React from 'react';
import { Helmet } from 'react-helmet-async';

function AboutPage() {
  // JSON-LD (arama motorlarına sayfayı daha iyi anlatır)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Hakkımızda | Standpro',
    url: 'https://www.kongrestandpro.com/hakkimizda',
    description:
      "Standpro, 2020'den beri Antalya'dan başlayarak Türkiye geneline yenilikçi fuar standı tasarımı ve uygulama hizmetleri sunar.",
    isPartOf: {
      '@type': 'WebSite',
      name: 'Standpro',
      url: 'https://www.kongrestandpro.com/'
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://www.kongrestandpro.com/stand-1.jpeg'
    }
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Standpro',
    url: 'https://www.kongrestandpro.com/',
    email: 'kongrestandpro@gmail.com',
    telephone: '+90 551 181 32 41',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Antalya',
      addressCountry: 'TR'
    },
    sameAs: ['https://www.instagram.com/kongrestandpro']
  };

  return (
    <>
      <Helmet>
        <title>Hakkımızda | Standpro - Fuar & Etkinlik Çözümleri</title>
        <meta
          name="description"
          content="Standpro, 2020'den beri Antalya'dan başlayarak Türkiye geneline yenilikçi fuar standı tasarımı ve uygulama hizmetleri sunan uzman bir ekiptir. Misyonumuzu ve vizyonumuzu keşfedin."
        />
        <link rel="canonical" href="https://www.kongrestandpro.com/hakkimizda" />

        {/* Paylaşım kartları (opsiyonel ama faydalı) */}
        <meta property="og:title" content="Hakkımızda | Standpro" />
        <meta
          property="og:description"
          content="Standpro'nun misyonu, vizyonu ve ekibi hakkında bilgi edinin."
        />
        <meta property="og:type" content="website" />

        {/* JSON-LD şemaları */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      <div className="bg-white min-h-screen pt-16">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Sol: Metin */}
            <div className="text-gray-700">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Hayalleri Mekana, Markaları Zirveye Taşıyoruz
              </h1>

              <p className="text-lg mb-6">
                Biz, fuar ve etkinlik sektöründe sıradan standlar üretmenin ötesine geçerek, markaların
                kimliğini ve vizyonunu yansıtan özgün mekanlar tasarlayan bir ekibiz. 2020 yılında
                Antalya'da başlayan yolculuğumuz, Türkiye'nin dört bir yanındaki fuarlarda sayısız
                markanın başarı hikayesine ortak olmamızla devam etti.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">Misyonumuz</h2>
              <p className="mb-6">
                Misyonumuz, en kaliteli malzemeyi yenilikçi tasarımla birleştirerek, müşterilerimizin
                fuar alanında sadece yer almalarını değil, aynı zamanda fark edilmelerini, hatırlanmalarını
                ve hedeflerine ulaşmalarını sağlamaktır.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">Vizyonumuz</h2>
              <p>
                Vizyonumuz, Türkiye'de stand tasarımı ve uygulama denildiğinde akla gelen ilk marka olmak ve
                her projede beklentilerin üzerinde bir kalite sunarak sektör standartlarını yeniden
                belirlemektir.
              </p>
            </div>

            {/* Sağ: Görsel */}
            <div>
              <img
                src="/stand-1.jpeg"
                alt="Standpro ekibinden bir uygulama örneği"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="1600"
                height="1066"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
