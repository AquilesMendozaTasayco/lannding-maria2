"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const scrollToDepartamentos = () => {
    const element = document.getElementById("departamentos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative -mt-[80px] min-h-[calc(100vh+80px)] flex flex-col items-center justify-center text-white text-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/ma2-img.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-0" />
      
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8"
        >
          <div className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Proyecto en venta</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        >
          Vive el{" "}
          <motion.span
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[#00A651] bg-gradient-to-r from-[#00A651] to-[#00C853] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            nuevo estilo
          </motion.span>{" "}
          de vida
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
        >
          Residencial María Auxiliadora II — Donde el confort y la elegancia se encuentran
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#departamentos"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -10px rgba(0, 166, 81, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A651] to-[#00C853] hover:from-[#00954f] hover:to-[#00A651] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-2xl text-lg"
          >
            Ver departamentos disponibles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
          
          <motion.button
            onClick={scrollToDepartamentos}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium px-6 py-4 rounded-xl transition-all duration-300"
          >
            Más información
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20"
        >
          {[
            { label: "Ubicación", value: "Estratégica" },
            { label: "Departamentos", value: "Desde 2 dorm." },
            { label: "Entrega", value: "-" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-[#00A651] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{item.value}</div>
              <div className="text-sm text-gray-300 mt-1">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToDepartamentos}
        >
          <ChevronDownIcon className="w-8 h-8 text-white/70 hover:text-white transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
