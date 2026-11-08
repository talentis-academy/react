import { useState } from "react";
import { adaptDemoResult } from "./ApiDemoScreen.adapter";
import { ApiDemoScreenScene } from "./ApiDemoScreen.scene";

const SIMULATED_DELAY_MS = 2000;

// Une page pour voir les 3 états d'un appel API : loading, succès, erreur
export function ApiDemoScreenView() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [crash, setCrash] = useState(false);

  // Pour tester l'Error Boundary : une erreur pendant le render
  if (crash) {
    throw new Error("Crash volontaire pour tester l'Error Boundary");
  }

  const simulate = (ok) => {
    setResult(null);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResult(adaptDemoResult(ok));
    }, SIMULATED_DELAY_MS);
  };

  return <ApiDemoScreenScene isLoading={isLoading} result={result} onSimulate={simulate} onCrash={() => setCrash(true)} />;
}
