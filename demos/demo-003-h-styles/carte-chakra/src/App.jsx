import "./App.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import system from "./styles/theme";
import CardProps from "./components/CardProps";
import CardToken from "./components/CardToken";

// La Card Car de la maquette Figma avec Chakra UI : à gauche les props de style, à droite les tokens du thème
function App() {
  // ChakraProvider : donne le thème (system) à tous les composants Chakra
  return (
    <ChakraProvider value={system}>
      <Flex minH="100vh" bg="primary.600" align="center" justify="center" wrap="wrap" gap="8">
        <CardProps />
        <CardToken />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
