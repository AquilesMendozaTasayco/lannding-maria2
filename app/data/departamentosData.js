export const categorias = [
  {
    id: "familiar-127",
    nombre: "Diseño Familiar A (Nivel 3)",
    resumen: "3 dormitorios • 3 baños",
    areaRango: "127.11 m²",
    imagenes: ["/planos/plano-127-301.webp"],
  },
  {
    id: "familiar-110",
    nombre: "Diseño Familiar B (Niveles 4–6)",
    resumen: "3 dormitorios • 3 baños",
    areaRango: "110.21 m²",
    imagenes: ["/planos/plano-110-401.webp"],
  },
  {
    id: "familiar-100",
    nombre: "Diseño Familiar C (Niveles 7–10)",
    resumen: "3 dormitorios • 3 baños",
    areaRango: "99.27 – 110.19 m²",
    imagenes: [
      "/planos/plano-100-701.webp",
      "/planos/plano-100-801.webp",
      "/planos/plano-100-901.webp",
      "/planos/plano-100-1001.webp",
    ],
  },
  {
    id: "compacto",
    nombre: "Diseño Compacto (Niveles 4–11)",
    resumen: "2–3 dormitorios • 2–3 baños",
    areaRango: "80.47 – 98.88 m²",
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
  { id: 1, numero: "301", nivel: 3, area: 127.11, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-127" },

  { id: 2, numero: "401", nivel: 4, area: 110.21, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-110" },
  { id: 3, numero: "501", nivel: 5, area: 110.21, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-110" },
  { id: 4, numero: "601", nivel: 6, area: 110.21, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-110" },

  { id: 5, numero: "701", nivel: 7, area: 110.19, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-100" },
  { id: 6, numero: "801", nivel: 8, area: 109.34, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-100" },
  { id: 7, numero: "901", nivel: 9, area: 105.51, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-100" },
  { id: 8, numero: "1001", nivel: 10, area: 99.27, dormitorios: 3, banos: 3, estado: "disponible", categoriaId: "familiar-100" },

  { id: 9, numero: "402", nivel: 4, area: 98.20, dormitorios: 3, banos: 2, estado: "vendido", categoriaId: "compacto" },
  { id: 10, numero: "502", nivel: 5, area: 98.17, dormitorios: 3, banos: 2, estado: "disponible", categoriaId: "compacto" },
  { id: 11, numero: "602", nivel: 6, area: 98.88, dormitorios: 3, banos: 2, estado: "disponible", categoriaId: "compacto" },
  { id: 12, numero: "702", nivel: 7, area: 98.22, dormitorios: 3, banos: 2, estado: "disponible", categoriaId: "compacto" },

  { id: 13, numero: "802", nivel: 8, area: 93.46, dormitorios: 2, banos: 2, estado: "disponible", categoriaId: "compacto" },
  { id: 14, numero: "902", nivel: 9, area: 88.68, dormitorios: 2, banos: 2, estado: "disponible", categoriaId: "compacto" },
  { id: 15, numero: "1002", nivel: 10, area: 80.47, dormitorios: 2, banos: 2, estado: "disponible", categoriaId: "compacto" },
  { id: 16, numero: "1101", nivel: 11, area: 95.02, dormitorios: 2, banos: 3, estado: "disponible", categoriaId: "compacto" },
];
