import {
  HiOutlineHomeModern,
  HiOutlineSparkles,
  HiOutlineBuildingOffice2,
  HiOutlineMapPin,
  HiOutlineSun,
  HiOutlineTruck,
} from "react-icons/hi2";

export default function Feature() {
  const features = [
    {
      icon: <HiOutlineHomeModern className="text-[#00A651] text-3xl" />,
      title: "Diseño moderno y funcional",
      desc: "Departamentos amplios con distribución inteligente y acabados de primera.",
    },
    {
      icon: <HiOutlineSparkles className="text-[#00A651] text-3xl" />,
      title: "Cocina equipada",
      desc: "Ambientes modernos con equipamiento completo y detalles elegantes.",
    },
    {
      icon: <HiOutlineBuildingOffice2 className="text-[#00A651] text-3xl" />,
      title: "Cocheras independientes",
      desc: "Espacios cómodos y seguros con acceso directo al edificio.",
    },
    {
      icon: <HiOutlineSun className="text-[#00A651] text-3xl" />,
      title: "Iluminación natural",
      desc: "Cada espacio está diseñado para aprovechar al máximo la luz del día.",
    },
    {
      icon: <HiOutlineMapPin className="text-[#00A651] text-3xl" />,
      title: "Frente a parque",
      desc: "Disfruta de la tranquilidad de vivir frente a un entorno verde y natural.",
    },
    {
      icon: <HiOutlineTruck className="text-[#00A651] text-3xl" />,
      title: "Acceso estratégico",
      desc: "Cerca de colegios, bancos, centros comerciales y avenidas principales.",
    },
  ];

  return (
    <section
      id="caracteristicas"
      className="w-full bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-24 text-center"
    >
      {/* === Encabezado === */}
      <div className="max-w-3xl mx-auto mb-14">
        <p className="inline-block px-4 py-1 text-sm rounded-full bg-[#E6F6EE] text-[#00A651] font-semibold mb-4">
          ✳ CARACTERÍSTICAS
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#004A99] mb-4">
          Espacios creados para tu{" "}
          <span className="text-[#00A651]">bienestar y confort</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Residencial María Auxiliadora II ofrece departamentos diseñados con
          ambientes funcionales, iluminación natural y acabados modernos, en un
          entorno pensado para tu familia.
        </p>
      </div>

      {/* === Grid de características === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg text-[#004A99] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
