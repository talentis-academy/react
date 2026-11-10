// Approche 1 : uniquement les classes de base de Tailwind (couleurs et tailles déjà fournies)
export default function CardUtilities() {
  return (
    <div className="flex w-80 flex-col gap-4 rounded-xl bg-gray-800 p-6 shadow-md transition-shadow hover:shadow-xl">
      {/*
        flex flex-col gap-4 : les éléments en colonne, 16px entre eux
        w-80 : largeur 320px
        rounded-xl : coins arrondis de 12px
        bg-gray-800 : fond gris foncé (#1f2937)
        p-6 : padding de 24px
        shadow-md / hover:shadow-xl : ombre, plus grande au survol
      */}
      <h3 className="text-lg font-bold text-white">Tesla Model S</h3>

      <div className="flex items-center gap-2 text-sm text-gray-400">
        {/* size-4 : 16px × 16px ; rounded-full : un cercle ; border-2 : bordure de 2px */}
        <span className="size-4 rounded-full border-2 border-gray-500 bg-red-600"></span>
        <span>Rouge</span>
      </div>

      {/* self-start : le badge garde sa largeur (il ne s'étire pas) */}
      <span className="self-start rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
        Available
      </span>

      <p className="text-xl font-semibold text-white">$79,990</p>

      {/* hover:bg-blue-600 : la couleur au survol */}
      <button className="w-full cursor-pointer rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
}
