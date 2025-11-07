"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiHomeModern } from "react-icons/hi2";

const images = ["/MA2-render-1.png"];

export default function Description() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="proyecto"
      className="relative py-16 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* === IZQUIERDA (texto) === */}
        <div className="flex-1 text-left flex flex-col justify-center space-y-5">
          {/* Subtítulo con ícono */}
          <div className="flex items-center gap-2 text-[#00A651] font-semibold uppercase tracking-wide">
            <HiHomeModern className="text-[#00A651] text-lg animate-pulse" />
            <span>Proyecto residencial exclusivo</span>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#004A99] leading-snug">
            María Auxiliadora II:{" "}
            <span className="text-[#00A651]">un espacio pensado en ti</span>
          </h2>

          {/* Descripción resumida */}
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

          {/* Cuadros informativos */}
          <ul className="grid grid-cols-2 gap-3 mt-4">
            {[
              { title: "Dormitorios", desc: "2–3" },
              { title: "Áreas", desc: "Terraza, BBQ, Lavandería" },
              { title: "Acabados", desc: "Modernos" },
              { title: "Entrega", desc: "En construcción" },
            ].map((item, i) => (
              <li
                key={i}
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#004A99] bg-[#F9FAFB]"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>

          {/* Lista de características */}
          <ul className="space-y-1.5 mt-5 text-gray-700 text-[0.95rem]">
            <li>✔ Sala comedor con iluminación natural</li>
            <li>✔ Cocheras independientes</li>
            <li>✔ Lavandería y tendal privado en azotea</li>
            <li>✔ Cocina equipada con acabados de primera</li>
            <li>✔ Balcón con vista al parque</li>
          </ul>

          {/* Botones */}
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
        </div>

        {/* === DERECHA (imagen) === */}
        <div className="flex-1 w-full max-w-xl relative overflow-hidden rounded-2xl shadow-lg aspect-[5/6]">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out transform ${
                index === currentIndex
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Render ${index + 1}`}
                fill
                className="object-cover rounded-2xl select-none"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Indicadores (solo si hay más de una imagen) */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-[#00A651]" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
