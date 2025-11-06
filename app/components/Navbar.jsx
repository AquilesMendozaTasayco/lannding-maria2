"use client";

export default function Navbar() {
  return (
    <header className="w-full bg-[#004A99] text-white py-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="font-semibold text-lg">Roden Constructores</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#inicio" className="hover:text-[#00A651]">Inicio</a>
          <a href="#proyecto" className="hover:text-[#00A651]">Proyecto</a>
          <a href="#ubicacion" className="hover:text-[#00A651]">Ubicación</a>
          <a href="#departamentos" className="hover:text-[#00A651]">Departamentos</a>
          <a href="#contacto" className="hover:text-[#00A651]">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
