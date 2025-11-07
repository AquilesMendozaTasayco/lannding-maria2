"use client";

import { HiOutlineBuildingOffice2, HiOutlineClock } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function AvancesObra() {
  return (
    <section
      id="avances"
      className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 text-center"
    >
      {/* === ENCABEZADO === */}
      <div className="max-w-3xl mx-auto mb-10">
        <p className="inline-block px-4 py-1 text-sm rounded-full bg-[#E6F6EE] text-[#00A651] font-semibold mb-4">
          🏗️ AVANCES DE OBRA
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#004A99] mb-4">
          Seguimiento del proyecto{" "}
          <span className="text-[#00A651]">María Auxiliadora II</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Conoce el progreso del proyecto y mantente al tanto del desarrollo de
          tu futuro hogar.
        </p>
      </div>

      {/* === CONTENIDO (placeholder) === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-[#F5F7FA] rounded-2xl p-10 flex flex-col items-center justify-center shadow-sm"
      >
        <div className="flex items-center justify-center mb-4 text-[#004A99]">
          <HiOutlineBuildingOffice2 className="text-5xl mr-2" />
          <HiOutlineClock className="text-4xl text-[#00A651]" />
        </div>
        <h3 className="text-2xl font-bold text-[#004A99] mb-2">
          ¡Pronto iniciaremos obras!
        </h3>
        <p className="text-gray-600 max-w-md">
          Estamos preparando el inicio de construcción de{" "}
          <span className="font-semibold text-[#00A651]">
            Residencial María Auxiliadora II
          </span>
          . Muy pronto compartiremos los avances y actualizaciones del proyecto.
        </p>
      </motion.div>
    </section>
  );
}
