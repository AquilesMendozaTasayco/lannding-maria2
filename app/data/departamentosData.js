export const categorias = [
  {
    id: "familiar-301",
    nombre: "Diseño Familiar A (Nivel 3)",
    resumen: "3 dormitorios • 3 baños",
    areaRango: "120.40 m²",
    imagenes: ["/planos/plano-127-301.webp"],
  },
  {
    id: "familiar-93",
    nombre: "Diseño Familiar B (Niveles 4–10)",
    resumen: "3 dormitorios • 3 baños",
    areaRango: "92.82 m²",
    imagenes: ["/planos/plano-110-401.webp"],
  },
  {
    id: "compacto",
    nombre: "Diseño Compacto (Niveles 4–11)",
    resumen: "2–3 dormitorios • 2–3 baños",
    areaRango: "82.17 – 98.29 m²",
    imagenes: [
      "/planos/plano-98-402.webp",
      "/planos/plano-98-502.webp",
      "/planos/plano-98-602.webp",
      "/planos/plano-98-702.webp",
      "/planos/plano-93-802.webp",
      "/planos/plano-88-902.webp",
      "/planos/plano-80-1002.webp",
      "/planos/plano-95-1101.png",
    ],
  },
];

export const unidades = [
  // Nivel 3
  { id: 1,  numero: "301",  nivel: 3,  area: 120.40, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-301" },

  // Niveles 4–10 — misma planta, 92.82 m² (brochure Jun 2026)
  { id: 2,  numero: "401",  nivel: 4,  area: 92.82, dormitorios: 3, banos: 3, estado: "vendido",    categoriaId: "familiar-93" },
  { id: 3,  numero: "501",  nivel: 5,  area: 92.82, dormitorios: 3, banos: 3, estado: "vendido",    categoriaId: "familiar-93" },
  { id: 4,  numero: "601",  nivel: 6,  area: 92.82, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-93" },
  { id: 5,  numero: "701",  nivel: 7,  area: 92.82, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-93" },
  { id: 6,  numero: "801",  nivel: 8,  area: 92.82, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-93" },
  { id: 7,  numero: "901",  nivel: 9,  area: 92.82, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-93" },
  { id: 8,  numero: "1001", nivel: 10, area: 92.82, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-93" },

  // Compactos — 3 dorm / 2 baños (Niveles 4–7)
  { id: 9,  numero: "402",  nivel: 4,  area: 98.20, dormitorios: 3, banos: 2, estado: "vendido",    categoriaId: "compacto" },
  { id: 10, numero: "502",  nivel: 5,  area: 98.17, dormitorios: 3, banos: 2, estado: "vendido",    categoriaId: "compacto" },
  { id: 11, numero: "602",  nivel: 6,  area: 97.97, dormitorios: 3, banos: 2, estado: "vendido",    categoriaId: "compacto" },
  { id: 12, numero: "702",  nivel: 7,  area: 98.29, dormitorios: 3, banos: 2, estado: "disponible", categoriaId: "compacto" },

  // Compactos — 2 dorm / 2 baños (Niveles 8–10)
  { id: 13, numero: "802",  nivel: 8,  area: 93.54, dormitorios: 2, banos: 2, estado: "disponible", categoriaId: "compacto" },
  { id: 14, numero: "902",  nivel: 9,  area: 84.92, dormitorios: 2, banos: 2, estado: "disponible", categoriaId: "compacto" },
  { id: 15, numero: "1002", nivel: 10, area: 82.17, dormitorios: 2, banos: 2, estado: "disponible", categoriaId: "compacto" },

  // Compacto — 2 dorm / 3 baños (Nivel 11)
  { id: 16, numero: "1101", nivel: 11, area: 92.43, dormitorios: 2, banos: 3, estado: "disponible", categoriaId: "compacto" },
];