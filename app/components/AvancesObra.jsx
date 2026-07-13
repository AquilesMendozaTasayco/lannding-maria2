"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark } from "react-icons/hi2";

const videos = [
  { id: "I3IFlOfdHXw", title: "Llegamos al 1er nivel", label: "Último avance", pulse: true },
  { id: "NH0-5FJDISU", title: "Vaciado de Placas 1er Nivel", label: "4to avance", pulse: false },
  { id: "bDS9PU3fe0M", title: "Vaciado de Aligerado", label: "3er avance", pulse: false },
  { id: "A-4v2kw0wus", title: "Vaciado de Cisterna", label: "2do avance", pulse: false },
  { id: "AlvnrS0RfdU", title: "Vaciado de Concreto", label: "1er avance", pulse: false },
];

export default function AvancesObra() {
  const [modalVideo, setModalVideo] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="avances"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 text-center"
    >
      <motion.div variants={fadeIn} className="max-w-3xl mx-auto mb-10">
        <p className="inline-block px-4 py-1 text-sm rounded-full bg-[#E6F6EE] text-[#00A651] font-semibold mb-4">
          🏗️ AVANCES DE OBRA
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#004A99] mb-4">
          Seguimiento del proyecto{" "}
          <span className="text-[#00A651]">María Auxiliadora II</span>
        </h2>
        <p className="text-gray-600">
          Conoce el progreso del proyecto y mantente al tanto del desarrollo de
          tu futuro hogar.
        </p>
        <p className="text-[#004A99] font-semibold mt-2">
          Departamentos desde <span className="text-[#00A651]">82.17 m²</span> hasta{" "}
          <span className="text-[#00A651]">120.40 m²</span>
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="max-w-[580px] mx-auto flex flex-wrap justify-center gap-3"
      >
        {videos.map((v) => (
          <div
            key={v.id}
            onClick={() => setModalVideo(v.id)}
            className="bg-white rounded-2xl p-1 shadow-lg border-2 transition-all duration-300 w-[170px] cursor-pointer hover:scale-105"
            style={{ borderColor: v.pulse ? "#00A651" : "#004A9920" }}
          >
            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <div
                className="absolute inset-0 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(https://img.youtube.com/vi/${v.id}/hqdefault.jpg)` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#004A99] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-1 px-1">
              <p className="text-xs font-bold text-[#004A99] truncate">{v.title}</p>
              <div className="flex items-center justify-center gap-2">
                <span className={`w-2 h-2 rounded-full ${v.pulse ? "bg-[#00A651] animate-pulse" : "bg-[#004A99]"}`} />
                <p className={`text-[10px] font-bold tracking-wide uppercase ${v.pulse ? "text-[#004A99]" : "text-[#00A651]"}`}>
                  {v.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setModalVideo(null)}
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition"
              >
                <HiXMark className="text-xl" />
              </button>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
