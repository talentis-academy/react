import CardUtilities from "./CardUtilities";
import CardTheme from "./CardTheme";

// La Card Car de la maquette Figma, faite avec Tailwind CSS, de deux façons
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 bg-page p-8">
      <h1 className="text-4xl font-bold text-white">Tailwind CSS</h1>

      <div className="flex flex-wrap justify-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-400">1 · Les classes de Tailwind</h2>
          <CardUtilities />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-400">2 · Nos couleurs (@theme) + @apply</h2>
          <CardTheme />
        </div>
      </div>
    </main>
  );
}
