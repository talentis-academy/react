import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // tailwindcss() : le plugin qui branche Tailwind v4 dans Vite
  plugins: [react(), tailwindcss()],
});
