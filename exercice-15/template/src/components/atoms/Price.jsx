// Un prix déjà formaté (le formatage est fait par l'adapter)
export function Price({ value, className }) {
  return <span className={className ? `${className} price` : "price"}>{value}</span>;
}
