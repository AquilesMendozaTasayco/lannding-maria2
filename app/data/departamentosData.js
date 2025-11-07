// === CATEGORÍAS (cada una representa un plano del brochure) ===
export const categorias = [
  {
    id: "familiar-127",
    nombre: "Diseño Familiar (3D/3B)",
    resumen: "3 dormitorios • 3 baños",
    areaRango: "≈ 127 m²",
    imagen: "/plano-familiar-127.png", // imagen real del brochure
  },
  {
    id: "compacto-98",
    nombre: "Diseño Compacto (3D/2B)",
    resumen: "3 dormitorios • 2 baños",
    areaRango: "≈ 98 m²",
    imagen: "/plano-compacto-98.png",
  },
];

// === UNIDADES (cada una es un departamento en un piso específico) ===
export const unidades = [
  // --- Familiar 127 m² ---
  { id: 1,  numero: "201", nivel: 2,  area: 127.11, estado: "disponible", categoriaId: "familiar-127" },
  { id: 3,  numero: "301", nivel: 3,  area: 127.11, estado: "disponible", categoriaId: "familiar-127" },
  { id: 5,  numero: "401", nivel: 4,  area: 110.21, estado: "disponible", categoriaId: "familiar-127" },
  { id: 7,  numero: "501", nivel: 5,  area: 110.21, estado: "disponible", categoriaId: "familiar-127" },
  { id: 9,  numero: "601", nivel: 6,  area: 110.21, estado: "disponible", categoriaId: "familiar-127" },
  { id: 11, numero: "701", nivel: 7,  area: 110.19, estado: "vendido",    categoriaId: "familiar-127" },
  { id: 13, numero: "801", nivel: 8,  area: 109.34, estado: "disponible", categoriaId: "familiar-127" },
  { id: 15, numero: "901", nivel: 9,  area: 105.51, estado: "disponible", categoriaId: "familiar-127" },
  { id: 17, numero: "1001",nivel: 10, area: 99.27,  estado: "disponible", categoriaId: "familiar-127" },

  // --- Compacto 98 m² ---
  { id: 2,  numero: "202", nivel: 2,  area: 98.00,  estado: "disponible", categoriaId: "compacto-98" },
  { id: 4,  numero: "302", nivel: 3,  area: 98.20,  estado: "disponible", categoriaId: "compacto-98" },
  { id: 6,  numero: "402", nivel: 4,  area: 98.20,  estado: "vendido",    categoriaId: "compacto-98" },
  { id: 8,  numero: "502", nivel: 5,  area: 98.17,  estado: "disponible", categoriaId: "compacto-98" },
  { id: 10, numero: "602", nivel: 6,  area: 98.88,  estado: "disponible", categoriaId: "compacto-98" },
  { id: 12, numero: "702", nivel: 7,  area: 98.22,  estado: "disponible", categoriaId: "compacto-98" },
  { id: 14, numero: "802", nivel: 8,  area: 93.46,  estado: "disponible", categoriaId: "compacto-98" },
  { id: 16, numero: "902", nivel: 9,  area: 88.68,  estado: "disponible", categoriaId: "compacto-98" },
  { id: 18, numero: "1002",nivel: 10, area: 80.47,  estado: "disponible", categoriaId: "compacto-98" },
  { id: 20, numero: "1102",nivel: 11, area: 95.02,  estado: "disponible", categoriaId: "compacto-98" },
];
