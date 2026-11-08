import Home from "./components/Home";
import ErrorBoundary from "./components/ErrorBoundary";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
