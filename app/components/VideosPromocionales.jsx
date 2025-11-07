"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { videosData } from "../data/videosData";
import { HiPlayCircle } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function VideosPromocionales() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const currentVideo = videosData[current];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => setCurrent((prev) => (prev + 1) % videosData.length);
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Autoplay permitido en la mayoría de navegadores
      if (isVisible) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [isVisible, current]);

  return (
    <section
      ref={sectionRef}
      id="videos"
      className="relative w-full bg-gradient-to-b from-[#F3F8FF] to-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_#004A9915,_transparent_70%)] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-[420px] h-[680px] overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#004A9910] bg-gradient-to-br from-[#ffffff] to-[#f5faff]">
            <video
              ref={videoRef}
              key={currentVideo.id}
              src={currentVideo.src}
              playsInline
              muted
              autoPlay
              loop={false}
              controls
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 border-4 border-transparent rounded-3xl animate-[pulse_3s_ease-in-out_infinite] [border-image:linear-gradient(to_bottom_right,#004A99,#00A651)_1]"></div>
          </div>
        </motion.div>

        <motion.div
          key={currentVideo.id}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
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

          <p className="text-[#00A651] font-semibold mb-6">
            Puedes ver más de nuestros videos y novedades en nuestras redes
            sociales de <span className="text-[#004A99] font-bold">Roden</span>:
          </p>

          <div className="flex items-center gap-4 mb-10">
            <a
              href="https://www.facebook.com/rodenconstructores"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:scale-110 transition-transform text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/rodenconstructores/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] hover:scale-110 transition-transform text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@rodenconstructores6797"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:scale-110 transition-transform text-2xl"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/51956223460"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:scale-110 transition-transform text-2xl"
            >
              <FaWhatsapp />
            </a>
          </div>

          <h3 className="text-2xl font-bold text-[#004A99] flex items-center gap-2 mb-2">
            <HiPlayCircle className="text-[#00A651] text-3xl" />
            {currentVideo.title}
          </h3>
          <p className="text-gray-700 leading-relaxed text-base mb-8">
            {currentVideo.description}
          </p>

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
            <span className="text-sm text-[#004A99] font-semibold">
              {current + 1} / {videosData.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
