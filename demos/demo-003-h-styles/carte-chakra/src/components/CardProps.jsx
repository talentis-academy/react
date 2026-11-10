import { Badge, Box, Button, Card, HStack, Text } from "@chakra-ui/react";

// Approche 1 : la carte personnalisée avec des props de style (bg, color, borderRadius…) et les valeurs de la maquette
export default function CardProps() {
  return (
    <Card.Root
      w="320px"
      bg="#1f2937" // fond de la carte
      color="#f9fafb" // texte clair
      borderRadius="12px"
      border="none"
    >
      <Card.Body p="6" gap="4">
        <Card.Title fontSize="18px" fontWeight="700" color="#ffffff">
          Tesla Model S
        </Card.Title>
        <HStack gap="2">
          <Box w="16px" h="16px" borderRadius="full" border="2px solid" borderColor="#6b7280" bg="#dc2626" />
          <Text fontSize="14px" color="#9ca3af">
            Rouge
          </Text>
        </HStack>
        <Badge
          bg="#d1fae5"
          color="#065f46"
          borderRadius="9999px"
          px="3"
          py="1"
          fontSize="12px"
          fontWeight="500"
          w="fit-content"
        >
          Available
        </Badge>
        <Text fontSize="20px" fontWeight="600" color="#ffffff">
          $79,990
        </Text>
        <Button
          w="100%"
          bg="#3b82f6"
          color="#ffffff"
          borderRadius="8px"
          fontWeight="600"
          _hover={{ bg: "#2563eb" }} // _hover : le style au survol
        >
          View Details
        </Button>
      </Card.Body>
    </Card.Root>
  );
}
