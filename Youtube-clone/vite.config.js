import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
