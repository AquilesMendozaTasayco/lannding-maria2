// === CATEGORÍAS (cada plano único o grupo del brochure) ===
export const categorias = [
  {
    id: "familiar-127",
    nombre: "Diseño Familiar A (Nivel 3)",
    resumen: "3 dormitorios • 3 baños",
    areaRango: "≈ 127 m²",
    imagenes: ["/planos/plano-127-301.png"], // una sola imagen
  },
  {
    id: "familiar-110",
    nombre: "Diseño Familiar B (Niveles 4–6)",
    resumen: "3 dormitorios • 3 baños",
    areaRango: "≈ 110 m²",
    imagenes: ["/planos/plano-110-401.png"], // una sola imagen
  },
  {
    id: "familiar-100",
    nombre: "Diseño Familiar C (Niveles 7–10)",
    resumen: "3 dormitorios • 3 baños",
    areaRango: "≈ 99–105 m²",
    imagenes: [
      "/planos/plano-100-701.png", 
      "/planos/plano-100-801.png", 
      "/planos/plano-100-901.png", 
      "/planos/plano-100-1001.png", 
    ],
  },
  {
    id: "compacto-98",
    nombre: "Diseño Compacto (Niveles 4–11)",
    resumen: "3 dormitorios • 2 baños",
    areaRango: "≈ 80–98 m²",
    imagenes: [
      "/planos/plano-98-402.png",
      "/planos/plano-98-502.png",
      "/planos/plano-98-602.png",
      "/planos/plano-98-702.png",
      "/planos/plano-98-802.png",
      "/planos/plano-98-902.png",
      "/planos/plano-98-1002.png",
    ],
  },
];

// === UNIDADES (según brochure MA2) ===
export const unidades = [
  // --- Familiar 127 m² ---
  { id: 1, numero: "301", nivel: 3, area: 127.11, estado: "disponible", categoriaId: "familiar-127" },

  // --- Familiar 110 m² (niveles 4–6) ---
  { id: 2, numero: "401", nivel: 4, area: 110.21, estado: "disponible", categoriaId: "familiar-110" },
  { id: 3, numero: "501", nivel: 5, area: 110.21, estado: "disponible", categoriaId: "familiar-110" },
  { id: 4, numero: "601", nivel: 6, area: 110.21, estado: "disponible", categoriaId: "familiar-110" },

  // --- Familiar 100 m² (niveles 7–10) ---
  { id: 5, numero: "701", nivel: 7, area: 110.19, estado: "vendido", categoriaId: "familiar-100" },
  { id: 6, numero: "801", nivel: 8, area: 109.34, estado: "disponible", categoriaId: "familiar-100" },
  { id: 7, numero: "901", nivel: 9, area: 105.51, estado: "disponible", categoriaId: "familiar-100" },
  { id: 8, numero: "1001", nivel: 10, area: 99.27, estado: "disponible", categoriaId: "familiar-100" },

  // --- Compacto 98 m² (niveles 4–11) ---
  { id: 9, numero: "402", nivel: 4, area: 98.20, estado: "vendido", categoriaId: "compacto-98" },
  { id: 10, numero: "502", nivel: 5, area: 98.17, estado: "disponible", categoriaId: "compacto-98" },
  { id: 11, numero: "602", nivel: 6, area: 98.88, estado: "disponible", categoriaId: "compacto-98" },
  { id: 12, numero: "702", nivel: 7, area: 98.22, estado: "disponible", categoriaId: "compacto-98" },
  { id: 13, numero: "802", nivel: 8, area: 93.46, estado: "disponible", categoriaId: "compacto-98" },
  { id: 14, numero: "902", nivel: 9, area: 88.68, estado: "disponible", categoriaId: "compacto-98" },
  { id: 15, numero: "1002", nivel: 10, area: 80.47, estado: "disponible", categoriaId: "compacto-98" },
  { id: 16, numero: "1102", nivel: 11, area: 95.02, estado: "disponible", categoriaId: "compacto-98" },
];
