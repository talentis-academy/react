import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// theme.js (Chakra UI v3) : nos tokens = les valeurs de la maquette Figma, avec un nom
export const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          500: { value: "#1f2937" }, // fond de la carte
          600: { value: "#111827" }, // page bg
        },
        text: {
          50: { value: "#f9fafb" }, // texte clair
          100: { value: "#ffffff" }, // blanc pur
          300: { value: "#9ca3af" }, // texte muted
        },
        brand: {
          500: { value: "#3b82f6" }, // bouton
          600: { value: "#2563eb" }, // hover bouton
        },
        success: {
          bg: { value: "#d1fae5" },
          fg: { value: "#065f46" },
        },
        danger: {
          bg: { value: "#fee2e2" },
          fg: { value: "#991b1b" },
        },
        border: {
          500: { value: "#374151" },
          600: { value: "#6b7280" },
        },
      },
      radii: {
        card: { value: "12px" },
        button: { value: "8px" },
        pill: { value: "9999px" },
      },
      fonts: {
        body: { value: "Inter, system-ui, sans-serif" },
      },
    },
  },
});

// createSystem : la config par défaut de Chakra + nos tokens = le thème donné au ChakraProvider
const system = createSystem(defaultConfig, config);
export default system;
