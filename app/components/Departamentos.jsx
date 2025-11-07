"use client";

import { useMemo, useState } from "react";
import { categorias, unidades } from "../data/departamentosData";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function Departamentos() {
  const [categoriaActiva, setCategoriaActiva] = useState("todas");
  const [filtroEstado, setFiltroEstado] = useState("todos");

  // Filtrar unidades según categoría y estado
  const unidadesFiltradas = useMemo(() => {
    return unidades
      .filter(u => (categoriaActiva === "todas" ? true : u.categoriaId === categoriaActiva))
      .filter(u => (filtroEstado === "todos" ? true : u.estado === filtroEstado))
      .sort((a, b) => a.nivel - b.nivel || a.numero.localeCompare(b.numero));
  }, [categoriaActiva, filtroEstado]);

  // Conteo por estado
  const stats = useMemo(() => {
    const total = unidadesFiltradas.length;
    const disponibles = unidadesFiltradas.filter(u => u.estado === "disponible").length;
    const vendidos = unidadesFiltradas.filter(u => u.estado === "vendido").length;
    return { total, disponibles, vendidos };
  }, [unidadesFiltradas]);

  // Categoría seleccionada
  const catSeleccionada = useMemo(
    () => categorias.find(c => c.id === categoriaActiva),
    [categoriaActiva]
  );

  return (
    <section id="departamentos" className="py-20 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-6 flex justify-center items-center gap-2">
          <HiOutlineBuildingOffice2 className="text-[#00A651] text-2xl" />
          <h2 className="text-3xl font-bold text-[#004A99]">
            Departamentos Disponibles
          </h2>
        </div>

        <p className="text-gray-700 max-w-2xl mx-auto text-center mb-8">
          Explora los planos reales del proyecto y revisa las unidades disponibles o vendidas.
        </p>

        {/* Tabs de categoría (los planos) */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={() => setCategoriaActiva("todas")}
            className={`px-4 py-2 rounded-full border transition ${
              categoriaActiva === "todas"
                ? "bg-[#004A99] text-white border-[#004A99]"
                : "bg-white text-[#004A99] border-[#004A99]/30 hover:border-[#004A99]"
            }`}
          >
            Todas
          </button>

          {categorias.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategoriaActiva(c.id)}
              className={`px-4 py-2 rounded-full border transition ${
                categoriaActiva === c.id
                  ? "bg-[#004A99] text-white border-[#004A99]"
                  : "bg-white text-[#004A99] border-[#004A99]/30 hover:border-[#004A99]"
              }`}
              title={`${c.resumen} • ${c.areaRango}`}
            >
              {c.nombre}
            </button>
          ))}
        </div>

        {/* Filtros secundarios */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 text-[#004A99] focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          >
            <option value="todos">Todos los estados</option>
            <option value="disponible">Disponibles</option>
            <option value="vendido">Vendidos</option>
          </select>

          {(categoriaActiva !== "todas" || filtroEstado !== "todos") && (
            <button
              onClick={() => {
                setCategoriaActiva("todas");
                setFiltroEstado("todos");
              }}
              className="text-sm text-[#004A99] hover:text-[#00A651] underline"
            >
              Restablecer filtros
            </button>
          )}
        </div>

        {/* Mostrar plano de la categoría seleccionada */}
        {catSeleccionada && (
          <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-4">
              <img
                src={catSeleccionada.imagen}
                alt={`Plano ${catSeleccionada.nombre}`}
                className="rounded-xl w-full object-contain"
              />
            </div>
            <div className="space-y-2 text-left">
              <h3 className="text-2xl font-bold text-[#004A99]">
                {catSeleccionada.nombre}
              </h3>
              <p className="text-gray-700">
                {catSeleccionada.resumen} • {catSeleccionada.areaRango}
              </p>
              <div className="flex gap-4 text-sm mt-3">
                <span className="px-3 py-1 rounded-full bg-[#E6F6EE] text-[#00A651]">
                  Disponibles: {stats.disponibles}
                </span>
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-600">
                  Vendidos: {stats.vendidos}
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  Total: {stats.total}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Listado de unidades */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {unidadesFiltradas.length === 0 ? (
            <p className="col-span-full text-center text-gray-600 italic">
              No se encontraron unidades con los filtros seleccionados.
            </p>
          ) : (
            unidadesFiltradas.map((u) => (
              <div
                key={u.id}
                className="border border-gray-200 rounded-xl p-5 bg-[#F9FAFB] hover:shadow-md hover:-translate-y-1 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-[#004A99]">
                    Dpto {u.numero}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      u.estado === "disponible"
                        ? "bg-[#E6F6EE] text-[#00A651]"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {u.estado === "disponible" ? "Disponible" : "Vendido"}
                  </span>
                </div>
                <p className="text-gray-700">Nivel {u.nivel}</p>
                <p className="text-gray-700">Área: {u.area} m²</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
