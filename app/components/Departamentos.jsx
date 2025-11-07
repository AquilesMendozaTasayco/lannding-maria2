"use client";

import { useState } from "react";
import { departamentos } from "../data/departamentosData";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function Departamentos() {
  const [filtroNivel, setFiltroNivel] = useState("todos");
  const [filtroEstado, setFiltroEstado] = useState("todos");

  // === Filtrado dinámico ===
  const filtrados = departamentos.filter((d) => {
    const coincideNivel = filtroNivel === "todos" || d.nivel === Number(filtroNivel);
    const coincideEstado = filtroEstado === "todos" || d.estado === filtroEstado;
    return coincideNivel && coincideEstado;
  });

  // === Niveles únicos ===
  const niveles = [...new Set(departamentos.map((d) => d.nivel))];

  return (
    <section id="departamentos" className="py-20 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* === Título === */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <HiOutlineBuildingOffice2 className="text-[#00A651] text-2xl" />
          <h2 className="text-3xl font-bold text-[#004A99]">
            Departamentos Disponibles
          </h2>
        </div>

        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Explora los departamentos del proyecto María Auxiliadora II. Filtra por
          nivel o estado para conocer la disponibilidad de cada unidad.
        </p>

        {/* === Controles de filtrado === */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {/* Filtro por nivel */}
          <select
            value={filtroNivel}
            onChange={(e) => setFiltroNivel(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 text-[#004A99] focus:outline-none focus:ring-2 focus:ring-[#00A651] transition-all"
          >
            <option value="todos">Todos los niveles</option>
            {niveles.map((nivel) => (
              <option key={nivel} value={nivel}>
                Nivel {nivel}
              </option>
            ))}
          </select>

          {/* Filtro por estado */}
          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 text-[#004A99] focus:outline-none focus:ring-2 focus:ring-[#00A651] transition-all"
          >
            <option value="todos">Todos los estados</option>
            <option value="disponible">Disponibles</option>
            <option value="vendido">Vendidos</option>
          </select>
        </div>

        {/* === Contador y botón reset === */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="text-gray-600 text-sm">
            Mostrando{" "}
            <strong className="text-[#004A99]">{filtrados.length}</strong>{" "}
            departamentos
          </span>
          {(filtroNivel !== "todos" || filtroEstado !== "todos") && (
            <button
              onClick={() => {
                setFiltroNivel("todos");
                setFiltroEstado("todos");
              }}
              className="text-sm text-[#004A99] hover:text-[#00A651] underline transition-colors"
            >
              Restablecer filtros
            </button>
          )}
        </div>

        {/* === Grid de departamentos === */}
        {filtrados.length === 0 ? (
          <p className="text-gray-600 italic">
            No se encontraron departamentos con los filtros seleccionados.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filtrados.map((d) => (
              <div
                key={d.id}
                className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-[#F9FAFB] text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-xl text-[#004A99]">
                    Dpto {d.numero}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      d.estado === "disponible"
                        ? "bg-[#E6F6EE] text-[#00A651]"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {d.estado === "disponible" ? "Disponible" : "Vendido"}
                  </span>
                </div>

                <p className="text-gray-700 mb-1">
                  {d.dormitorios} Dormitorios • {d.banos} Baños
                </p>
                <p className="text-gray-700 mb-2">{d.area} m² de área total</p>
                <span className="text-[#004A99] font-medium">
                  Nivel {d.nivel}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
