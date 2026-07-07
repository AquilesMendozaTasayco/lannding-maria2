"use client";

import { motion } from "framer-motion";

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
        className="max-w-4xl mx-auto flex justify-center gap-3"
      >
        {[
          { id: "A-4v2kw0wus", label: "1er avance", pulse: false },
          { id: "AlvnrS0RfdU", label: "2do avance", pulse: false },
          { id: "bDS9PU3fe0M", label: "3er avance", pulse: false },
          { id: "NH0-5FJDISU", label: "Avance reciente", pulse: true },
        ].map((v, i) => (
          <div
            key={v.id}
            className="bg-white rounded-2xl p-1 shadow-lg border-2 transition-colors duration-300 w-[180px]"
            style={{ borderColor: v.pulse ? "#00A651" : "#004A9920" }}
          >
            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${v.id}`}
                title={`Avance de obra - ${v.label}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-2 mb-1">
              <span className={`w-2 h-2 rounded-full ${v.pulse ? "bg-[#00A651] animate-pulse" : "bg-[#004A99]"}`} />
              <p className={`text-xs font-bold tracking-wide uppercase ${v.pulse ? "text-[#004A99]" : "text-[#00A651]"}`}>
                {v.label}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
