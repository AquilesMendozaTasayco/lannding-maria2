"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galeriaImages } from "../data/galeriaData";

export default function Galeria() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="galeria"
      className="w-full bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-24 text-center"
    >
      {/* === ENCABEZADO === */}
      <div className="max-w-3xl mx-auto mb-14">
        <p className="inline-block px-4 py-1 text-sm rounded-full bg-[#E6F6EE] text-[#00A651] font-semibold mb-4">
          ✳ GALERÍA
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#004A99] mb-4">
          Explora los ambientes de{" "}
          <span className="text-[#00A651]">María Auxiliadora II</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Descubre los espacios diseñados para tu comodidad: cocina, dormitorios,
          áreas sociales y mucho más.
        </p>
      </div>

      {/* === GRID DE IMÁGENES === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galeriaImages.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(img.src)}
            className="relative cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={350}
              className="object-cover w-full h-64"
            />
            {/* Overlay elegante */}
            <div className="absolute inset-0 bg-[#004A99]/0 group-hover:bg-[#004A99]/60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all">
              <p className="text-lg font-semibold mb-2">{img.alt}</p>
              <span className="text-sm bg-white/20 px-4 py-1 rounded-md">
                Ver imagen completa
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === MODAL / LIGHTBOX === */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <Image
                src={selected}
                alt="Vista ampliada"
                width={1600}
                height={1000}
                className="w-full h-auto object-contain"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#004A99] rounded-full p-2 text-lg shadow-lg transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
