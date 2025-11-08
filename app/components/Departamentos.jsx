"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { categorias, unidades } from "../data/departamentosData";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import CarruselPlano from "./CarruselPlano";

export default function Departamentos() {
  const [categoriaActiva, setCategoriaActiva] = useState("familiar-127");
  const [filtroEstado, setFiltroEstado] = useState("todos");

  const unidadesFiltradas = useMemo(() => {
    return unidades
      .filter((u) =>
        categoriaActiva === "todas" ? true : u.categoriaId === categoriaActiva
      )
      .filter((u) =>
        filtroEstado === "todos" ? true : u.estado === filtroEstado
      )
      .sort((a, b) => a.nivel - b.nivel || a.numero.localeCompare(b.numero));
  }, [categoriaActiva, filtroEstado]);

  const stats = useMemo(() => {
    const total = unidadesFiltradas.length;
    const disponibles = unidadesFiltradas.filter(
      (u) => u.estado === "disponible"
    ).length;
    const vendidos = unidadesFiltradas.filter((u) => u.estado === "vendido").length;
    return { total, disponibles, vendidos };
  }, [unidadesFiltradas]);

  const catSeleccionada = useMemo(
    () => categorias.find((c) => c.id === categoriaActiva),
    [categoriaActiva]
  );

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="departamentos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-white px-6 md:px-12 lg:px-24"
    >
      <motion.div variants={fadeIn} className="max-w-7xl mx-auto">
        <div className="text-center mb-6 flex justify-center items-center gap-2">
          <HiOutlineBuildingOffice2 className="text-[#00A651] text-2xl" />
          <h2 className="text-3xl font-bold text-[#004A99]">Departamentos Disponibles</h2>
        </div>

        <p className="text-gray-700 max-w-2xl mx-auto text-center mb-8">
          Explora los planos reales del proyecto y revisa las unidades disponibles o vendidas según su tipo de diseño.
        </p>

        <motion.div variants={fadeIn} className="flex flex-wrap gap-3 justify-center mb-8">
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
        </motion.div>

        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4 mb-10">
          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 text-[#004A99] focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          >
            <option value="todos">Todos los estados</option>
            <option value="disponible">Disponibles</option>
            <option value="vendido">Vendidos</option>
          </select>
          {filtroEstado !== "todos" && (
            <button
              onClick={() => setFiltroEstado("todos")}
              className="text-sm text-[#004A99] hover:text-[#00A651] underline"
            >
              Restablecer filtro
            </button>
          )}
        </motion.div>

        {catSeleccionada && (
          <motion.div variants={fadeIn} className="max-w-6xl mx-auto mb-12 flex flex-col lg:flex-row items-start gap-10">
            <motion.div variants={fadeIn} className="flex-1 bg-[#F9FAFB] border border-gray-200 rounded-2xl p-4 flex justify-center items-center shadow-sm hover:shadow-md transition">
              {catSeleccionada.imagenes?.length > 1 ? (
                <CarruselPlano imagenes={catSeleccionada.imagenes} />
              ) : (
                <img
                  src={catSeleccionada.imagenes?.[0]}
                  alt={`Plano ${catSeleccionada.nombre}`}
                  className="rounded-xl w-full max-w-md object-contain"
                />
              )}
            </motion.div>

            <motion.div variants={fadeIn} className="flex-1 text-left space-y-4">
              <h3 className="text-2xl font-bold text-[#004A99]">{catSeleccionada.nombre}</h3>
              <p className="text-gray-700">{catSeleccionada.resumen} • {catSeleccionada.areaRango}</p>

              <div className="flex gap-4 text-sm">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {unidadesFiltradas
                  .filter((u) => u.categoriaId === catSeleccionada.id)
                  .map((u) => (
                    <motion.div
                      key={u.id}
                      variants={fadeIn}
                      transition={{ duration: 0.35, delay: 0.05 }}
                      className="border border-gray-200 rounded-xl p-4 bg-[#F9FAFB] hover:shadow-sm transition"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-[#004A99]">Dpto {u.numero}</h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            u.estado === "disponible"
                              ? "bg-[#E6F6EE] text-[#00A651]"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {u.estado === "disponible" ? "Disponible" : "Vendido"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">Nivel {u.nivel}</p>
                      <p className="text-sm text-gray-700">Área: {u.area} m²</p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
}
