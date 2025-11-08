"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { HiPhone, HiMapPin, HiEnvelope } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa los campos obligatorios.",
        confirmButtonColor: "#004A99",
      });
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Tu mensaje fue enviado con éxito. Pronto nos pondremos en contacto contigo.",
          confirmButtonColor: "#00A651",
          background: "#F9FAFB",
        });
        setFormData({ nombre: "", correo: "", telefono: "", mensaje: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al enviar",
          text: "Hubo un problema al enviar tu mensaje. Inténtalo nuevamente.",
          confirmButtonColor: "#004A99",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error inesperado",
        text: "Ocurrió un error de conexión. Intenta nuevamente más tarde.",
        confirmButtonColor: "#004A99",
      });
    } finally {
      setLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="contacto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full bg-white py-20 px-6 md:px-12 lg:px-24"
    >
      <motion.div
        variants={fadeIn}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn}
          className="bg-[#F9FAFB] p-8 rounded-2xl shadow-lg space-y-5 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-[#004A99]">
            Solicita información
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Completa el formulario y te responderemos pronto.
          </p>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo *"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico *"
            value={formData.correo}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje *"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 text-gray-800 h-32 focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-[#00A651]/70 cursor-not-allowed"
                : "bg-[#004A99] hover:bg-[#003b7d]"
            } text-white font-semibold py-3 px-6 rounded-md w-full transition-all duration-300 flex items-center justify-center gap-2`}
          >
            <HiEnvelope className="text-lg" />
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          <p className="text-xs text-gray-500 text-center">
            Tus datos están protegidos y no serán compartidos con terceros.
          </p>
        </motion.form>

        <motion.div variants={fadeIn} className="text-left space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#004A99] mb-3">
              Hablemos sobre tu{" "}
              <span className="text-[#00A651]">nuevo hogar</span>
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-md">
              En{" "}
              <span className="font-semibold text-[#004A99]">
                Roden Constructores
              </span>
              , te acompañamos en cada paso para encontrar la propiedad ideal.
              Déjanos tus datos y te contactaremos con una atención
              personalizada.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <p className="flex items-center gap-3 text-gray-700">
              <HiMapPin className="text-[#00A651] text-xl" />
              Calle Venezuela #288, Urb. El Recreo – Trujillo
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <HiPhone className="text-[#00A651] text-xl" />
              +51 956 223 460
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaFacebookF className="text-[#00A651] text-lg" />
              Roden - Constructores
            </p>
          </div>

          <p className="text-gray-600 text-sm max-w-md pt-2">
            Escríbenos para coordinar una visita al proyecto María Auxiliadora II
            o para conocer nuestras promociones de preventa exclusivas.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
