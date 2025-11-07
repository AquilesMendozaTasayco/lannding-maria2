"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiHomeModern } from "react-icons/hi2";

const images = ["/MA2-render-1.png"];

export default function Description() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = useMemo(() => images.map((src, i) => ({ id: i, src })), []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <motion.section
      id="proyecto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-16 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 text-left flex flex-col justify-center space-y-5"
        >
          <div className="flex items-center gap-2 text-[#00A651] font-semibold uppercase tracking-wide">
            <HiHomeModern className="text-[#00A651] text-lg animate-pulse" />
            <span>Proyecto residencial exclusivo</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#004A99] leading-snug">
            María Auxiliadora II:{" "}
            <span className="text-[#00A651]">un espacio pensado en ti</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-[1.05rem]">
            Vive frente a un hermoso parque en Trujillo, rodeado de naturaleza y
            tranquilidad.{" "}
            <span className="font-semibold text-[#004A99]">
              María Auxiliadora II
            </span>{" "}
            ofrece departamentos cómodos, modernos y estratégicamente ubicados
            cerca de colegios, bancos y centros comerciales.
          </p>

          <p className="text-gray-600 leading-relaxed text-base">
            Diseñado para quienes buscan confort y calidad de vida en un entorno
            seguro y funcional.
          </p>

          <ul className="grid grid-cols-2 gap-3 mt-4">
            {[
              { title: "Dormitorios", desc: "2–3" },
              { title: "Áreas", desc: "Terraza, BBQ, Lavandería" },
              { title: "Acabados", desc: "Modernos" },
              { title: "Entrega", desc: "En construcción" },
            ].map((item) => (
              <li
                key={item.title}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#004A99] bg-[#F9FAFB]"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>

          <ul className="space-y-1.5 mt-5 text-gray-700 text-[0.95rem]">
            <li>✔ Sala comedor con iluminación natural</li>
            <li>✔ Cocheras independientes</li>
            <li>✔ Lavandería y tendal privado en azotea</li>
            <li>✔ Cocina equipada con acabados de primera</li>
            <li>✔ Balcón con vista al parque</li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/Brochure-MA2-nov.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004A99] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#003B7D] transition-all duration-300"
            >
              Ver Brochure
            </a>
            <a
              href="#departamentos"
              className="border-2 border-[#004A99] text-[#004A99] font-semibold px-6 py-3 rounded-md hover:bg-[#004A99] hover:text-white transition-all duration-300"
            >
              Ver departamentos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 w-full max-w-xl relative overflow-hidden rounded-2xl shadow-lg aspect-[5/6]"
        >
          {slides.map((s, i) => (
            <motion.div
              key={s.id}
              animate={{
                opacity: i === currentIndex ? 1 : 0,
                scale: i === currentIndex ? 1 : 1.05,
                zIndex: i === currentIndex ? 10 : 0,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={s.src}
                alt={`Render ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl select-none"
                priority={i === 0}
              />
            </motion.div>
          ))}

          {slides.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentIndex ? "bg-[#00A651]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
