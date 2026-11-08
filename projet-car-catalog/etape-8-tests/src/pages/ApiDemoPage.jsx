import { useState } from "react";
import { AlertIcon, CheckIcon } from "../components/Icons";

// Une page pour voir les 3 états d'un appel API : loading, succès, erreur
export default function ApiDemoPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { ok: true|false, message }
  const [crash, setCrash] = useState(false);

  // Pour tester l'Error Boundary : une erreur pendant le render
  if (crash) {
    throw new Error("Crash volontaire pour tester l'Error Boundary");
  }

  const simulate = (ok) => {
    setResult(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult(ok ? { ok, message: "Data loaded successfully!" } : { ok, message: "Failed to load data. Please try again." });
    }, 2000);
  };

  return (
    <div className="container">
      <h1 className="page-title">API Demo</h1>

      <div className="card api-demo-card">
        <p className="subtitle">Test loading states and error messages</p>

        <div className="button-group">
          <button onClick={() => simulate(true)} disabled={loading} className="btn btn-success">
            Simulate Success
          </button>
          <button onClick={() => simulate(false)} disabled={loading} className="btn btn-danger">
            Simulate Error
          </button>
        </div>

        <div className="button-group">
          <button onClick={() => setCrash(true)} className="btn">
            Crash the page (Error Boundary)
          </button>
        </div>

        {loading && (
          <div className="message-box loading-box">
            <div className="spinner"></div>
            <span>Loading...</span>
          </div>
        )}

        {result && (
          <div className={`message-box ${result.ok ? "success-box" : "error-box"}`}>
            {result.ok ? <CheckIcon /> : <AlertIcon />}
            <span>{result.message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
