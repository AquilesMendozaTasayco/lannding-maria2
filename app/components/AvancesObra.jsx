"use client";

import { motion } from "framer-motion";
import { HiOutlineBuildingOffice2, HiOutlineClock } from "react-icons/hi2";

export default function AvancesObra() {
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
        <p className="text-gray-600 leading-relaxed">
          Conoce el progreso del proyecto y mantente al tanto del desarrollo de
          tu futuro hogar.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="max-w-xl mx-auto bg-[#F5F7FA] rounded-2xl p-10 flex flex-col items-center justify-center shadow-sm"
      >
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-center mb-4 text-[#004A99]"
        >
          <HiOutlineBuildingOffice2 className="text-5xl mr-2" />
          <HiOutlineClock className="text-4xl text-[#00A651]" />
        </motion.div>

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
    </motion.section>
  );
}
