"use client";

import { motion } from "framer-motion";

export default function Ubicacion() {
  return (
    <motion.section
      id="ubicacion"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-[#004A99] text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* === TEXTO === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center px-8 md:px-12 py-14 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            Ubicación del proyecto
          </h2>
          <hr className="border-[#00A651] w-20 mb-2" />
          <p className="text-[#E8ECF4] leading-relaxed">
            El proyecto{" "}
            <span className="font-semibold text-white">
              Residencial María Auxiliadora II
            </span>{" "}
            se encuentra ubicado en{" "}
            <span className="font-semibold text-[#00A651]">
              Calle Venezuela, Urb. El Recreo
            </span>
            , una zona céntrica, tranquila y de gran desarrollo en la ciudad de
            Trujillo.
          </p>
          <p className="text-[#E8ECF4] leading-relaxed">
            A pocos minutos de avenidas principales, centros comerciales,
            colegios y parques. Disfruta de un entorno ideal para tu familia.
          </p>
          <p className="font-semibold mt-3 text-white">Trujillo – Perú</p>
        </motion.div>

        {/* === MAPA (MISMA ALTURA QUE TENÍAS) === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative h-[360px] md:h-[400px] lg:h-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7432580935225!2d-79.031155!3d-8.120149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOC4xMjAnMTIuNSJTIDc5wrAwMSc1Mi4yIlc!5e0!3m2!1ses!2spe!4v1731000000000!5m2!1ses!2spe"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
}
