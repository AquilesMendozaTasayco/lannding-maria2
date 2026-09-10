
"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://echatp.link/w/MAII-Roden";
const WHATSAPP_MSG = "Hola, estoy interesado en el proyecto María Auxiliadora II, quisiera más información por favor.";

export default function BotonWhatsApp() {
  const href = `${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp - María Auxiliadora II"
      title={WHATSAPP_MSG}
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
