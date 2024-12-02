import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // Cambia la raíz del proyecto a "src"
  build: {
    outDir: "../docs", // Los archivos construidos irán a la carpeta "docs"
    rollupOptions: {
      input: {
        main: "./src/index.html", // Entrada principal
        page1: "./src/form.html", // Otra página
      },
    },
  },
  base: "./", // Asegura rutas relativas
});