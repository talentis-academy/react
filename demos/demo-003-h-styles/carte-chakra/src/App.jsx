import "./App.css";
import { ChakraProvider, Flex, Heading, VStack } from "@chakra-ui/react";
import system from "./styles/theme";
import CardProps from "./components/CardProps";
import CardToken from "./components/CardToken";

// La Card Car de la maquette Figma, faite avec Chakra UI, de deux façons
function App() {
  // ChakraProvider : donne le thème (system) à tous les composants Chakra
  return (
    <ChakraProvider value={system}>
      <VStack bg="primary.600" minH="100vh" w="100%" p="8" gap="12" justify="center">
        <Heading size="3xl" color="text.100">
          Chakra UI
        </Heading>
        <Flex wrap="wrap" gap="12" justify="center" align="flex-start">
          <VStack gap="4">
            <Heading size="md" color="text.300">1 · Props de style</Heading>
            <CardProps />
          </VStack>
          <VStack gap="4">
            <Heading size="md" color="text.300">2 · Tokens du thème</Heading>
            <CardToken />
          </VStack>
        </Flex>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
