import "./App.css";
import Parent from "./components/Parent";

function App() {
  return (
    <div>
      <div className="header">
        <h1>La maman et l’enfant</h1>
        <p>La maman donne un ordre, l’enfant répond.</p>
      </div>
      <Parent />
    </div>
  );
}

export default App;
