// Résultat simulé (succès ou échec) -> encadré à afficher
export const adaptDemoResult = (ok) =>
  ok
    ? { variant: "success", message: "Data loaded successfully!" }
    : { variant: "error", message: "Failed to load data. Please try again." };
