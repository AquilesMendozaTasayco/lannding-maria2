"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CarruselPlano({ imagenes }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // === Funciones de navegación ===
  const siguiente = () => setIndex((i) => (i + 1) % imagenes.length);
  const anterior = () =>
    setIndex((i) => (i - 1 + imagenes.length) % imagenes.length);

  // === Auto avance ===
  useEffect(() => {
    const timer = setInterval(() => siguiente(), 5000);
    return () => clearInterval(timer);
  }, [imagenes.length]);

  // === Swipe táctil ===
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const onTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 60) siguiente();
    if (touchStartX.current - touchEndX.current < -60) anterior();
  };

  return (
    <div
      className="relative w-full max-w-md overflow-hidden rounded-xl"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Imagen activa (solo una en el DOM, sin superposición) */}
      <motion.img
        key={index}
        src={imagenes[index]}
        alt={`Plano ${index + 1}`}
        className="w-full object-contain rounded-xl select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Flechas de control */}
      {imagenes.length > 1 && (
        <>
          <button
            onClick={anterior}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-[#004A99] rounded-full p-2 hover:bg-[#004A99] hover:text-white transition"
          >
            ‹
          </button>

          <button
            onClick={siguiente}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-[#004A99] rounded-full p-2 hover:bg-[#004A99] hover:text-white transition"
          >
            ›
          </button>

          {/* Indicadores inferiores */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {imagenes.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "bg-[#004A99] w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
