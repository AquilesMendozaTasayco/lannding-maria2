import { HiPhone, HiMapPin, HiEnvelope } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="w-full bg-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* === IZQUIERDA: FORMULARIO === */}
        <form className="bg-[#F9FAFB] p-8 rounded-2xl shadow-lg space-y-5 border border-gray-100">
          <h3 className="text-2xl font-bold text-[#004A99]">
            Solicita información
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Completa el formulario y te responderemos pronto
          </p>

          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full p-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 rounded-md border border-gray-300 text-gray-800 h-32 focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#004A99] text-white font-semibold py-3 px-6 rounded-md w-full hover:bg-[#003b7d] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <HiEnvelope className="text-lg" />
            Enviar mensaje
          </button>

          <p className="text-xs text-gray-500 text-center">
            Tus datos están protegidos y no serán compartidos con terceros.
          </p>
        </form>

        {/* === DERECHA: INFORMACIÓN === */}
        <div className="text-left space-y-6">
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
              +51 987 654 321
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaFacebookF className="text-[#00A651] text-lg" />
              Roden Constructores
            </p>
          </div>

          <p className="text-gray-600 text-sm max-w-md pt-2">
            Escríbenos para coordinar una visita al proyecto María Auxiliadora II o
            para conocer nuestras promociones de preventa exclusivas.
          </p>
        </div>
      </div>
    </section>
  );
}
