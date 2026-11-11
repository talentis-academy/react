import "./App.css";
import Profile from "./components/BadExample";

// Les exemples interdits sont dans components/BadExample.jsx
// npm run lint : ESLint montre chaque hook mal placé
function App() {
  return <Profile />;
}

export default App;
