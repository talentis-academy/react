import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Alias : "@/features/cars/..." au lieu de "../../../features/cars/..."
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // Le proxy évite les erreurs CORS en dev : /api/... est envoyé à https://myfakeapi.com/api/...
    proxy: {
      "/api/": {
        target: "https://myfakeapi.com",
        changeOrigin: true,
      },
    },
  },
  // Vitest : les tests unitaires (*.test.js) ; les tests e2e (Playwright) sont dans tests/e2e
  test: {
    include: ["src/**/*.test.js"],
  },
});
