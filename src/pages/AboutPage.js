// src/pages/AboutPage.js

function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Düzeltme: Dikey boşluk (py) mobil için küçültüldü, geniş ekranlar için korundu */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        
        {/* Düzeltme: Sütunlar arası boşluk (gap) mobil için ayarlandı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Sol Taraf: Metin İçeriği */}
          <div className="text-gray-700">
            
            {/* Düzeltme: Başlık boyutu mobil için küçültüldü */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hayalleri Mekana, Markaları Zirveye Taşıyoruz
            </h1>
            
            <p className="text-lg mb-6">
              Biz, fuar ve etkinlik sektöründe sıradan standlar üretmenin ötesine geçerek, markaların kimliğini ve vizyonunu yansıtan özgün mekanlar tasarlayan bir ekibiz. 2025 yılında Antalya'da başlayan yolculuğumuz, Türkiye'nin dört bir yanındaki fuarlarda sayısız markanın başarı hikayesine ortak olmamızla devam etti.
            </p>
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
              // Düzeltme: Türkçe karakter ('ö') kaldırıldı. Dosya adını da 'ornek.jpeg' olarak değiştirmelisiniz.
              src="/stand-1.jpeg" 
              alt="StandPro Ekip"
              className="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutPage;