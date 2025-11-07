"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { videosData } from "../data/videosData";
import { HiPlayCircle } from "react-icons/hi2";

export default function VideosPromocionales() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const currentVideo = videosData[current];

  // --- Reproducir siguiente video automáticamente ---
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        setCurrent((prev) => (prev + 1) % videosData.length);
      };
      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, []);

  // --- Detectar visibilidad de la sección ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 50% visible para activar
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // --- Controlar reproducción según visibilidad ---
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isVisible) {
        video.play().catch(() => {}); // evita error si no puede reproducir
      } else {
        video.pause();
      }
    }
  }, [isVisible, current]);

  return (
    <section
      ref={sectionRef}
      id="videos"
      className="w-full bg-white py-20 px-6 md:px-12 lg:px-24"
    >
      {/* === CONTENEDOR GENERAL === */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* ==== VIDEO IZQUIERDA ==== */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[420px] h-[680px] overflow-hidden shadow-lg bg-black">
            <video
              ref={videoRef}
              key={currentVideo.id}
              src={currentVideo.src}
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ==== TEXTO DERECHA ==== */}
        <motion.div
          key={currentVideo.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-left"
        >
          <p className="inline-block px-4 py-1 text-sm rounded-full bg-[#E6F6EE] text-[#00A651] font-semibold mb-3">
            🎥 VIDEOS PROMOCIONALES
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#004A99] mb-4">
            Vive la experiencia{" "}
            <span className="text-[#00A651]">María Auxiliadora II</span>
          </h2>

          <p className="text-gray-600 mb-10 max-w-lg leading-relaxed">
            Observa nuestros videos institucionales y recorridos virtuales para
            conocer más sobre el proyecto.
          </p>

          <h3 className="text-2xl font-bold text-[#004A99] flex items-center gap-2 mb-2">
            <HiPlayCircle className="text-[#00A651] text-3xl" />
            {currentVideo.title}
          </h3>
          <p className="text-gray-700 leading-relaxed text-base mb-8">
            {currentVideo.description}
          </p>

          {/* ==== CONTROLES Y CONTADOR ==== */}
          <div className="flex justify-between items-center pt-4">
            <div className="flex gap-4">
              {videosData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current
                      ? "bg-[#00A651]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Contador */}
            <span className="text-sm text-[#004A99] font-semibold">
              {current + 1} / {videosData.length}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
