"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const scrollToSeccion = (id) => {
    const element = document.getElementById(id);
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
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="inline-flex items-center bg-black/40 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
            Proyecto en venta
          </span>
          <span className="inline-flex items-center bg-[#00A651]/90 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            En construcción
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        >
          Tu nuevo estilo de vida{" "}
          <motion.span
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[#00A651] bg-gradient-to-r from-[#00A651] to-[#00C853] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            en la Urb El Recreo
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <img
            src="/logo-maria-aux.webp"
            alt="Residencial María Auxiliadora II"
            className="h-16 md:h-20 w-auto select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20"
        >
          {[
            { value: "2 a 3", label: "dormitorios" },
            { value: "Cocina", label: "equipada" },
            { value: "Zona de tendales", label: "independientes" }
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
          onClick={() => scrollToSeccion("departamentos")}
        >
          <ChevronDownIcon className="w-8 h-8 text-white/70 hover:text-white transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
