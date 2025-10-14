// src/pages/HomePage.js
import { NavLink } from 'react-router-dom';
// Yeni, daha modern bir onay ikonu import ediyoruz
import { IoIosCheckmarkCircle } from 'react-icons/io';
// Eksik ikonları import ediyoruz (FiShield ve FiUsers)
import { FiShield, FiUsers } from 'react-icons/fi';

function HomePage() {
  return (
    <div>
      {/* === BÖLÜM 1: TAM EKRAN KARŞILAMA GÖRSELİ === */}
      <div
        className="relative h-screen bg-cover bg-top bg-no-repeat flex items-center justify-center text-center"
        style={{ backgroundImage: `url(/arkaplan.png)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
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

      {/* === BÖLÜM 2: MODERN TANITIM BÖLÜMÜ (Antalya ve Türkiye Genelinde) === */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
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
      {/* === YENİ VE MODERN: ÖNE ÇIKAN FUAR STANDI TASARIMLARI BÖLÜMÜ === */}
      <section className="py-20 sm:py-32 bg-gray-100"> {/* Arka planı biraz değiştirdim */}
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
              Fuar Standı Tasarımlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Markanızın fuar vizyonunu hayata geçiriyoruz. Proje yönetiminden nihai uygulamaya kadar, her ölçü ve sektörde, kurumsal kimliğinizle mükemmel uyum sağlayan, ziyaretçi etkileşimini zirveye taşıyan özgün stand çözümlerini keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           

            {/* Stand Görseli 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="/1.jpeg" // Örnek yol
                alt="Modern Fuar Standı Tasarımı 2"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                 
                </h3>
              </div>
            </div>

            {/* Stand Görseli 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="/2.jpeg" // Örnek yol
                alt="Modern Fuar Standı Tasarımı 3"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                
                </h3>
              </div>
            </div>

            {/* Stand Görseli 3 (Örnek) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="/3.jpeg" // Örnek yol
                alt="Modern Fuar Standı Tasarımı 4"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  
                </h3>
              </div>
            </div>

            {/* Stand Görseli 4 (Örnek) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="/4.jpeg" // Örnek yol
                alt="Modern Fuar Standı Tasarımı 5"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  
                </h3>
              </div>
            </div>

            {/* Stand Görseli 5 (Örnek) */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="/5.jpeg" // Örnek yol
                alt="Modern Fuar Standı Tasarımı 6"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  
                </h3>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <NavLink
              to="/projeler" 
              className="inline-flex items-center px-10 py-4 border border-transparent text-xl font-semibold rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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
      
      {/* Fuar Standı Çözümleri Bölümü (Avantajlar ve Listeleme) */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Sol Sütun: Görsel */}
            <div className="flex justify-center">
              <img src="/1.jpeg" alt="Fuar Standı Tasarımı ve Üretimi" className="rounded-xl shadow-xl w-full max-w-xl object-contain"/>
            </div>
            {/* Sağ Sütun: Metin */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Fuar Standı Çözümleri: Tasarım, Üretim ve Kiralama
              </h2>
              <div className="mt-4 w-20 h-1.5 bg-blue-600 rounded-full"></div>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Her marka eşsizdir, bu yüzden her stand da benzersiz bir kimliğe sahip olmalıdır. Biz, markanızın değerlerini ve hedeflerini yansıtan, yüksek kalitede fuar standları tasarlıyoruz. Tasarım aşamasından fuar alanındaki son vidaya kadar tüm süreci kusursuz bir şekilde yöneterek size anahtar teslim çözümler sunuyoruz.
              </p>
              <ul className="mt-8 space-y-4 text-lg text-gray-700">
                <li className="flex items-center"><IoIosCheckmarkCircle className="text-blue-600 h-7 w-7 mr-3 flex-shrink-0" /><span>Stratejik Tasarım ve 3D Modelleme: Markanızı rakiplerinizden ayıracak, estetik ve fonksiyonel tasarımlar.</span></li>
                <li className="flex items-center"><IoIosCheckmarkCircle className="text-blue-600 h-7 w-7 mr-3 flex-shrink-0" /><span>Anahtar Teslim Üretim ve Kurulum: Fikirden gerçeğe, atölyemizden fuar alanına kadar tüm süreci yönetiyoruz.</span></li>
                <li className="flex items-center"><IoIosCheckmarkCircle className="text-blue-600 h-7 w-7 mr-3 flex-shrink-0" /><span>Bütçe Dostu ve Esnek Kiralama Çözümleri: Projenizin ihtiyaçlarına ve bütçenize en uygun kiralama seçenekleri.</span></li>
                <li className="flex items-center"><IoIosCheckmarkCircle className="text-blue-600 h-7 w-7 mr-3 flex-shrink-0" /><span>Türkiye Genelinde Lojistik ve Saha Desteği: Nerede olursanız olun, zamanında ve sorunsuz kurulum garantisi.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === 360° HİZMETLER KARTLARI BÖLÜMÜ (Orjinal Bölüm) === */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">360° Fuar Standı Hizmetleri</h2>
            <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600">Fikirden tasarıma, üretimden kuruluma kadar projenizin her aşamasında yanınızdayız.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="overflow-hidden rounded-lg shadow-lg"><img src="/tasarım.jpeg" alt="Tasarım Hizmetleri" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 ease-out"/></div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Tasarım Hizmetleri</h3>
              <p className="text-gray-600 mb-4">Markanıza özel, dikkat çekici ve sahada uygulanabilir 3D stand tasarımları sunarız. Mimari estetikle birleşen teknik hassasiyetle, her projeyi özgün bir kimliğe dönüştürüyoruz.</p>
              <NavLink to="/projeler" className="text-blue-600 font-semibold hover:underline">Stand Tasarımlarımızı İnceleyin</NavLink>
            </div>
            <div className="text-center">
              <div className="overflow-hidden rounded-lg shadow-lg"><img src="/uretim.jpg" alt="Üretim Hizmetleri" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 ease-out"/></div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Üretim Hizmetleri</h3>
              <p className="text-gray-600 mb-4">Onaylanan tasarımları, kendi atölyemizde usta işçilik ve birinci sınıf malzemelerle hayata geçiriyoruz. Standınızın hem estetik hem de dayanıklı olması için her detay hassasiyetle işlenir.</p>
              <NavLink to="/standlarimiz" className="text-blue-600 font-semibold hover:underline">Stand Üretim Hizmetlerimizi İnceleyin</NavLink>
            </div>
            <div className="text-center">
              <div className="overflow-hidden rounded-lg shadow-lg"><img src="/lojistik.jpg" alt="Lojistik ve Kurulum" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 ease-out"/></div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Lojistik ve Kurulum</h3>
              <p className="text-gray-600 mb-4">Atölyeden fuar alanına kadar kusursuz bir deneyim sunuyoruz. Profesyonel lojistik ağımız ve saha ekiplerimiz, standınızın zamanında ve hatasız bir şekilde kurulmasını sağlar. Siz markanıza odaklanın, gerisini bize bırakın.</p>
              <NavLink to="/standlarimiz" className="text-blue-600 font-semibold hover:underline">Lojistik ve Kurulum Hizmetlerimizi İnceleyin</NavLink>
            </div>
          </div>
        </div>
      </section>    
      {/* === SON BÖLÜM: NEDEN BİZ? === */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Sol Sütun: Görsel */}
            <div className="flex justify-center">
              <img 
                src="/isbirligi.jpeg" 
                alt="Neden Bizi Tercih Etmelisiniz"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover"
              />
            </div>
            {/* Sağ Sütun: Metin */}
            <div>
              <p className="text-blue-600 font-semibold tracking-wide uppercase">PROJENİZE DEĞER KATIYORUZ</p>
              <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              
              <div className="mt-10 space-y-8">
                {/* Madde 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                      <FiShield size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Anahtar Teslim Proje Yönetimi</h3>
                    <p className="mt-2 text-gray-600">
                      Tasarım masasından fuar alanındaki son vidaya kadar tüm süreci sizin için tek bir merkezden yönetiyoruz. Karmaşayı ortadan kaldırır, size sadece projenizin keyfini çıkarmak kalır.
                    </p>
                  </div>
                </div>
                {/* Madde 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                      <FiUsers size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Uzman Kadro ve Saha Hakimiyeti</h3>
                    <p className="mt-2 text-gray-600">
                      Tasarımcılarımızdan üretimdeki ustalarımıza, saha operasyon ekibimize kadar her bir personelimiz, fuar sektörünün dinamiklerine hakim profesyonellerden oluşur. Başarınız, bizim tecrübemizle güvence altında.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <NavLink 
                  to="/iletisim" 
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
                >
                  İletişime Geçin
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/* === YENİ VE MODERN İLETİŞİM BÖLÜMÜ (4 Kartlı Grid) - DÜZELTİLDİ === */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center text-white mb-16">
            <p className="text-blue-400 font-semibold tracking-widest uppercase mb-2">
              HEMEN İLETİŞİME GEÇİN
            </p>
            <h2 className="text-5xl font-extrabold leading-snug tracking-tight mb-4">
              Fuar Başarınız İçin Hazırız!
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              KONGRESTANDPRO olarak kongre ve fuarlarda size özel stand çözümleri sunuyoruz. Projeniz hakkında konuşmak ve hızlı teklif almak için bize ulaşın.
            </p>
          </div>

          {/* DİKKAT: Grid yapısı 4 sütunlu (md:grid-cols-4) olarak ayarlandı ve 4 kart da içine alındı. */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Kart 1: Telefon */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transition-all duration-300 hover:bg-blue-600 hover:text-white group">
              <div className="flex justify-center mb-4">
                <svg className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Telefon</h3>
              <a href="tel:+905511813241" className="text-blue-400 group-hover:text-white font-semibold text-sm hover:underline transition-colors duration-300">
                +90 551 181 32 41
              </a>
            </div>

            {/* Kart 2: E-Posta */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transition-all duration-300 hover:bg-blue-600 hover:text-white group">
              <div className="flex justify-center mb-4">
                <svg className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-1" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">E-Posta</h3>
              <a href="mailto:kongrestandpro@gmail.com" className="text-blue-400 group-hover:text-white font-semibold text-sm hover:underline transition-colors duration-300">
                kongrestandpro@gmail.com
              </a>
            </div>

            {/* Kart 3: WhatsApp */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transition-all duration-300 hover:bg-blue-600 hover:text-white group">
              <div className="flex justify-center mb-4">
                <svg className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.035 1.836A10.165 10.165 0 0 0 1.87 12.007c0 1.762.48 3.447 1.396 4.912l-1.6 5.861 6.015-1.574c1.442.788 3.064 1.206 4.354 1.206h.001a10.165 10.165 0 0 0 10.165-10.164A10.165 10.165 0 0 0 12.035 1.836zM17.062 14.86c-.272.245-.552.446-.867.625-.098.058-.21.111-.322.146-.3.093-.65.137-.968.127-.378-.012-.767-.09-1.157-.184-1.928-.475-3.376-1.554-4.887-3.045-.572-.572-.988-1.127-1.3-1.666-.328-.564-.492-1.077-.492-1.614 0-.58.175-1.025.525-1.348.156-.145.32-.266.47-.367.43-.298.81-.456 1.144-.456.126 0 .265.012.42.046.208.045.42.11.64.205.282.126.543.3.784.516.27.245.54.513.782.805.21.248.375.485.495.73.18.358.267.72.267 1.085 0 .285-.06.57-.175.855-.164.408-.372.78-.607 1.113-.375.54-.775 1.05-1.282 1.585-.296.312-.6.62-.916.892-.267.23-.466.392-.72.545.24.167.5.312.78.435 1.09.467 2.12.73 3.08.777.89.043 1.517-.066 2.072-.256.6-.205 1.135-.584 1.528-1.05.216-.255.352-.44.498-.562.42-.358.834-.23 1.168.21.294.4.453.86.453 1.342 0 .584-.15 1.165-.453 1.69z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
              <a href="https://wa.me/905382172168?text=Merhaba,%20BUTASTAND%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="text-blue-400 group-hover:text-white font-semibold text-sm hover:underline transition-colors duration-300">
                Hemen Mesaj Gönder
              </a>
            </div>
            
            {/* Kart 4: Instagram */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transition-all duration-300 hover:bg-blue-600 hover:text-white group">
              <div className="flex justify-center mb-4">
                {/* Düzgün Instagram İkonu SVG'si */}
                <svg className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Instagram</h3>
              <a href="https://www.instagram.com/kongrestandpro" target="_blank" rel="noopener noreferrer" className="text-blue-400 group-hover:text-white font-semibold text-sm hover:underline transition-colors duration-300">
                @kongrestandpro
              </a>
            </div>
            
          </div>
          
        
          
        </div>
      </section>

    </div>
  );
}

export default HomePage;