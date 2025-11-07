"use client";

import Image from "next/image";
import {
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#004A99] text-white pt-16 pb-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
        
        <div className="space-y-5">
          <div className="relative w-48 h-16">
            <Image
              src="/logo-maria-aux.png"
              alt="Residencial María Auxiliadora II"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-200 leading-relaxed mt-2">
            En Residencial María Auxiliadora II creemos en construir hogares que
            brinden confort, tranquilidad y calidad de vida. Cada detalle ha sido
            diseñado para tu bienestar y el de tu familia.
          </p>
          <p className="text-sm font-medium text-[#00A651]">
            Modernidad, Confort y Bienestar Familiar
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">CONTACTO</h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-center gap-3">
              <HiOutlinePhone className="text-[#00A651]" size={18} />
              <span>+51 956 223 460</span>
            </li>
            <li className="flex items-start gap-3">
              <HiOutlineMapPin className="text-[#00A651]" size={18} />
              <span>Calle Venezuela #288, Urb. El Recreo - Trujillo</span>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h4 className="text-lg font-semibold text-white">ENLACES RÁPIDOS</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#inicio" className="hover:text-[#00A651] transition">Inicio</a></li>
            <li><a href="#proyecto" className="hover:text-[#00A651] transition">Proyecto</a></li>
            <li><a href="#caracteristicas" className="hover:text-[#00A651] transition">Características</a></li>
            <li><a href="#galeria" className="hover:text-[#00A651] transition">Galería</a></li>
            <li><a href="#departamentos" className="hover:text-[#00A651] transition">Departamentos</a></li>
            <li><a href="#avances" className="hover:text-[#00A651] transition">Avances</a></li>
            <li><a href="#contacto" className="hover:text-[#00A651] transition">Contacto</a></li>
          </ul>

          <div>
            <h4 className="text-lg font-semibold text-white mt-6 mb-2">SÍGUENOS</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/rodenconstructores"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#00A651] transition p-3 rounded-full"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/rodenconstructores/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#00A651] transition p-3 rounded-full"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/@rodenconstructores6797"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#00A651] transition p-3 rounded-full"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="https://wa.me/51956223460"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#00A651] transition p-3 rounded-full"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4 pt-6">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Residencial María Auxiliadora II. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#00A651] transition">
            Política de Privacidad
          </a>
          <a href="#" className="hover:text-[#00A651] transition">
            Términos y Condiciones
          </a>
        </div>
      </div>
    </footer>
  );
}
