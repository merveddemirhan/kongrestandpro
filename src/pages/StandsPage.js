import React from "react";
import { Building2 } from "lucide-react";

const stands = [
  {
    title: "Modüler Fuar Standları",
    description:
      "Hızlı kurulum, uygun maliyet ve esnek tasarım seçenekleri ile modüler stand çözümleri sunuyoruz.",
  },
  {
    title: "Özel Tasarım Standlar",
    description:
      "Markanıza özel, dikkat çekici ve yaratıcı tasarımlar ile fuarlarda fark yaratmanızı sağlıyoruz.",
  },
  {
    title: "Kurumsal Stand Projeleri",
    description:
      "Kurumsal kimliğinizi profesyonelce yansıtan, yüksek kalite standartlarına sahip projeler geliştiriyoruz.",
  },
];

const StandsPage = () => {
  return (
    <section className="py-20 bg-gray-50">
      {/* Üst Başlık Bölümü */}
      <div className="max-w-5xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Stand Çözümlerimiz
        </h2>
        <p className="text-gray-600 text-lg">
          KongreStandPro olarak markanızın ihtiyaçlarına özel modern ve kurumsal
          fuar standı çözümleri geliştiriyoruz. Her projede estetik, işlevsellik
          ve profesyonelliği bir araya getiriyoruz.
        </p>
      </div>

      {/* Kartlar Bölümü */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {stands.map((stand, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110 hover:bg-blue-200 shadow-md hover:shadow-lg">
              <Building2 className="h-10 w-10 text-blue-600 transition-colors duration-300 hover:text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {stand.title}
            </h3>
            <p className="text-gray-600">{stand.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StandsPage;




