import CardUtilities from "./CardUtilities";
import CardTheme from "./CardTheme";

// La Card Car de la maquette Figma avec Tailwind CSS : à gauche les classes de base, à droite nos couleurs (@theme)
export default function Home() {
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center gap-8 bg-page">
      <CardUtilities />
      <CardTheme />
    </div>
  );
}
