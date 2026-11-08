import "./App.css";
import Card from "./components/CardCustom";
import system from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider value={system}>
      <Card />
    </ChakraProvider>
  );
}

export default App;
