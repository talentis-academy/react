import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Le proxy évite les erreurs CORS en dev : /api/... est envoyé à https://myfakeapi.com/api/...
    proxy: {
      "/api/": {
        target: "https://myfakeapi.com",
        changeOrigin: true,
      },
    },
  },
});
