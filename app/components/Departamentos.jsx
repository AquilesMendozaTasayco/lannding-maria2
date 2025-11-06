    export default function Departamentos() {
  return (
    <section id="departamentos" className="py-16 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-[#004A99] mb-6">Departamentos Disponibles</h2>
      <p className="text-gray-700 mb-8">Explora las unidades disponibles según nivel y área.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl text-[#004A99]">Dpto 301</h3>
          <p>3 Dormitorios • 3 Baños • 127 m²</p>
          <span className="text-[#00A651] font-medium">Disponible</span>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl text-[#004A99]">Dpto 401</h3>
          <p>3 Dormitorios • 3 Baños • 110 m²</p>
          <span className="text-[#00A651] font-medium">Disponible</span>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl text-[#004A99]">Dpto 402</h3>
          <p>3 Dormitorios • 2 Baños • 98 m²</p>
          <span className="text-red-500 font-medium">Vendido</span>
        </div>
      </div>
    </section>
  );
}
