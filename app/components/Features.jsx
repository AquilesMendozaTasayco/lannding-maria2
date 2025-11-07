"use client";

import { motion } from "framer-motion";
import { featuresData } from "../data/featuresData";

export default function Feature() {
  return (
    <motion.section
      id="caracteristicas"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-24 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto mb-14"
      >
        <p className="inline-block px-4 py-1 text-sm rounded-full bg-[#E6F6EE] text-[#00A651] font-semibold mb-4">
          ✳ CARACTERÍSTICAS
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#004A99] mb-4">
          Espacios creados para tu{" "}
          <span className="text-[#00A651]">bienestar y confort</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Residencial María Auxiliadora II ofrece departamentos diseñados con
          ambientes funcionales, iluminación natural y acabados modernos, en un
          entorno pensado para tu familia.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuresData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: i * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg text-[#004A99] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
