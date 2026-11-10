import { Badge, Box, Button, Card, HStack, Text } from "@chakra-ui/react";

// Approche 2 : les valeurs viennent du thème (tokens définis dans styles/theme.js)
export default function CardToken() {
  return (
    <Card.Root
      w="320px"
      bg="primary.500" // token
      color="text.50" // token
      borderRadius="card" // token (radii)
      border="none"
    >
      <Card.Body p="6" gap="4">
        <Card.Title fontSize="18px" fontWeight="700" color="text.100">
          Tesla Model S
        </Card.Title>
        <HStack gap="2">
          <Box w="16px" h="16px" borderRadius="full" border="2px solid" borderColor="border.600" bg="#dc2626" />
          <Text fontSize="14px" color="text.300">
            Rouge
          </Text>
        </HStack>
        <Badge
          bg="success.bg"
          color="success.fg"
          borderRadius="pill"
          px="3"
          py="1"
          fontSize="12px"
          fontWeight="500"
          w="fit-content"
        >
          Available
        </Badge>
        <Text fontSize="20px" fontWeight="600" color="text.100">
          $79,990
        </Text>
        <Button
          w="100%"
          bg="brand.500"
          color="text.100"
          borderRadius="button"
          fontWeight="600"
          _hover={{ bg: "brand.600" }}
        >
          View Details
        </Button>
      </Card.Body>
    </Card.Root>
  );
}
