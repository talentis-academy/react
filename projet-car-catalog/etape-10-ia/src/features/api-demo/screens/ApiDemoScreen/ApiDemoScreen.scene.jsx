import { Button } from "@/components/atoms";
import { StatusMessage } from "@/components/molecules";

export function ApiDemoScreenScene({ isLoading, result, onSimulate, onCrash }) {
  return (
    <div className="container">
      <h1 className="page-title">API Demo</h1>

      <div className="card api-demo-card">
        <p className="subtitle">Test loading states and error messages</p>

        <div className="button-group">
          <Button variant="success" onClick={() => onSimulate(true)} disabled={isLoading}>
            Simulate Success
          </Button>
          <Button variant="danger" onClick={() => onSimulate(false)} disabled={isLoading}>
            Simulate Error
          </Button>
        </div>

        <div className="button-group">
          <Button onClick={onCrash}>Crash the page (Error Boundary)</Button>
        </div>

        {isLoading && <StatusMessage variant="loading">Loading...</StatusMessage>}

        {result && <StatusMessage variant={result.variant}>{result.message}</StatusMessage>}
      </div>
    </div>
  );
}
