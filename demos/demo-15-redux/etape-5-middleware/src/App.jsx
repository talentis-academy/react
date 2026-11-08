import "./App.css";
import Home from "./pages/Home.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
