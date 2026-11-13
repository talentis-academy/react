import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true, // si le port 3000 est déjà pris : erreur, au lieu de passer à 3001
    // open: true, // (bonus) ouvre le navigateur tout seul au lancement (npm run dev)
  },
  plugins: [react()],
});
