import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

function ContactPage() {
  // Basit mailto gönderici (backend yoksa pratik çözüm)
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) return; // HTML5 required de var ama ekstra koruma

    const subject = encodeURIComponent(`Teklif / İletişim Talebi - ${name}`);
    const body = encodeURIComponent(
      `İsim: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
    );

    // Mail istemcisini aç
    window.location.href = `mailto:kongrestandpro@gmail.com?subject=${subject}&body=${body}`;
  }, []);

  // JSON-LD (opsiyonel ama faydalı)
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
      addressCountry: 'TR',
    },
    sameAs: ['https://www.instagram.com/kongrestandpro'],
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>İletişim & Teklif Al | Standpro | Fuar Stand Hizmetleri</title>
        <meta
          name="description"
          content="Standpro ile iletişime geçin. Fuar, kongre standı ve etkinlik projeleriniz için bize telefon, e-posta veya form üzerinden ulaşın. Antalya merkezli, Türkiye geneli hizmet."
        />
        <link rel="canonical" href="https://www.kongrestandpro.com/iletisim" />

        {/* Paylaşım kartları (opsiyonel) */}
        <meta property="og:title" content="İletişim & Teklif Al | Standpro" />
        <meta property="og:description" content="Fuar ve kongre stand projeleriniz için bize ulaşın." />
        <meta property="og:type" content="website" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-gray-900 to-slate-800 min-h-screen pt-16">
        <div className="container mx-auto px-6 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* SOL: Bilgi Paneli */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 text-white h-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                Merhaba!
              </h1>
              <p className="text-lg text-gray-300 mb-10">
                Projenizi hayata geçirmek için ilk adımı atın. Sizi dinlemeye hazırız.
              </p>

              <div className="space-y-8" aria-label="İletişim bilgileri">
                <div className="flex items-start space-x-4">
                  <FiPhone className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold">Telefon</h3>
                    <a href="tel:+905511813241" className="text-gray-300 hover:text-white transition-colors">
                      +90 551 181 32 41
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiMail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold">E-Posta</h3>
                    <a
                      href="mailto:kongrestandpro@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      kongrestandpro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiMapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold">Konum</h3>
                    <p className="text-gray-300">Antalya merkezli, Türkiye geneli hizmet</p>
                  </div>
                </div>
              </div>

              <hr className="my-10 border-white/20" />

              {/* Sosyal medya */}
              <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
                <p className="text-lg font-semibold">Bizi Takip Edin:</p>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com/kongrestandpro"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram - kongrestandpro"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaInstagram size={28} />
                  </a>
                </div>
              </div>
            </div>

            {/* SAĞ: İletişim Formu */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Bize Mesaj Gönderin
              </h2>

              {/* Backend yoksa mailto ile gönderiyoruz */}
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Adınız Soyadınız
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    E-posta Adresiniz
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="block w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder=""
                  ></textarea>
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transform transition-transform duration-300 ease-in-out shadow-lg"
                  >
                    Gönder
                  </button>

                
                </div>
              </form>

              {/* Gizlilik / KVKK kısa notu (opsiyonel) */}
              <p className="mt-4 text-xs text-gray-300">
                Gönderdiğiniz bilgiler yalnızca sizinle iletişime geçmek için kullanılacaktır.
              </p>
            </div>
          </div>

          {/* SSS/CTA küçük alanı (opsiyonel) */}
          <div className="mt-12 text-center">
            <NavLink
              to="/projeler"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Projelerimizi İnceleyin
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
