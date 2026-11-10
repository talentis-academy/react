// Approche 2 : nos couleurs à nous (déclarées dans @theme, dans App.css) + une classe @apply
export default function CardTheme() {
  return (
    <div className="flex w-80 flex-col gap-4 rounded-xl bg-card p-6 shadow-md transition-shadow hover:shadow-xl">
      {/* bg-card : la couleur --color-card du thème */}
      <h3 className="text-lg font-bold text-white">Tesla Model S</h3>

      <div className="flex items-center gap-2 text-sm text-muted">
        <span className="size-4 rounded-full border-2 border-gray-500 bg-red-600"></span>
        <span>Rouge</span>
      </div>

      <span className="self-start rounded-full bg-success-bg px-3 py-1 text-xs font-medium text-success-fg">
        Available
      </span>

      <p className="text-xl font-semibold text-white">$79,990</p>

      {/* btn-brand : notre classe faite avec @apply (dans App.css) */}
      <button className="btn-brand">View Details</button>
    </div>
  );
}
