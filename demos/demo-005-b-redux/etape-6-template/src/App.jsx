import "./App.css";
import Home from "./pages/Home.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
function App() {
  // Provider donne le store à tous les composants (useSelector, useDispatch)
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
