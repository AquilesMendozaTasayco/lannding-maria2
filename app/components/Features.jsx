"use client";

import { motion } from "framer-motion";
import { featuresData } from "../data/featuresData";

export default function Feature() {
  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="caracteristicas"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-24 text-center"
    >
      <motion.div
        variants={fadeIn}
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
            variants={fadeIn}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
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
