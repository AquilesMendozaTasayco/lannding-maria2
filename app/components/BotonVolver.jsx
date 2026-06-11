"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BotonVolver() {
  return (
    <Link
      href="https://www.roden.pe/"
      className="
        fixed top-6 left-6 md:left-6 right-6 md:right-auto z-40
        flex items-center gap-2
        bg-white text-[#075fa5]
        font-bold px-4 py-2
        rounded-full shadow-lg
        hover:bg-[#075fa5] hover:text-white
        transition-all duration-300
      "
    >
      <FaArrowLeft />
      Volver a Roden
    </Link>
  );
}
