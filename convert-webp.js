// convert-webp.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

// Carpeta raíz de entrada
const inputDir = "./public";
const outputDir = "./public/webp";

// Crear carpeta de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Extensiones válidas
const validExtensions = [".jpg", ".jpeg", ".png"];

// Función recursiva para convertir imágenes
const convertImages = async (dir, base = "") => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const relativePath = path.join(base, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertImages(fullPath, relativePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (validExtensions.includes(ext)) {
        const outputPath = path.join(outputDir, relativePath.replace(ext, ".webp"));
        const outputFolder = path.dirname(outputPath);

        // Crear carpeta si no existe
        if (!fs.existsSync(outputFolder)) {
          fs.mkdirSync(outputFolder, { recursive: true });
        }

        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          console.log(`✅ ${relativePath} → ${outputPath}`);
        } catch (err) {
          console.error(`❌ Error al convertir ${relativePath}:`, err.message);
        }
      }
    }
  }
};

// Ejecutar
convertImages(inputDir)
  .then(() => console.log("\n✨ Conversión completada correctamente."))
  .catch((err) => console.error("❌ Error general:", err));
