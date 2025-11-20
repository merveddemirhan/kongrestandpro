// src/components/WhatsAppButton.js
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  // WhatsApp numaranızı + olmadan, ülke koduyla birlikte girin
  const whatsappNumber = "+905382172168"; 
  // Kullanıcı butona tıkladığında otomatik gönderilecek mesaj
  const whatsappMessage = encodeURIComponent("Merhaba, web siteniz üzerinden ulaşıyorum ve stand çözümleriniz hakkında bilgi almak istiyorum.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center bg-green-500 text-white font-bold py-3 px-5 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <FaWhatsapp className="h-7 w-7" />
      <span className="ml-2">WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;