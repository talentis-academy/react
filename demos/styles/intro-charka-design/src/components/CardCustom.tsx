import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";

const Home = () => (
  <Card.Root
    flexDirection="row"
    overflow="hidden"
    maxW="xl"
    bg="#1f2937" // fond de ta card
    color="#f9fafb" // texte clair
    borderRadius="12px"
  >
    <Image
      objectFit="cover"
      maxW="200px"
      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?auto=format&fit=crop&w=800&q=60"
      alt="Caffe Latte"
    />

    <Box p="6" display="flex" flexDirection="column" gap="4" flex="1">
      <Card.Body p="0">
        <Card.Title mb="2" fontSize="18px" fontWeight="700" color="#ffffff">
          The perfect latte
        </Card.Title>

        <Card.Description fontSize="14px" color="#9ca3af">
          Caffè latte is a coffee beverage of Italian origin made with espresso
          and steamed milk.
        </Card.Description>

        <HStack mt="4">
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
            Hot
          </Badge>

          <Badge
            bg="#fee2e2"
            color="#991b1b"
            borderRadius="9999px"
            px="3"
            py="1"
            fontSize="12px"
            fontWeight="500"
            w="fit-content"
          >
            Caffeine
          </Badge>
        </HStack>
      </Card.Body>

      <Card.Footer p="0" mt="auto">
        <Button
          w="100%"
          bg="#3b82f6"
          color="#ffffff"
          borderRadius="8px"
          fontWeight="600"
          _hover={{ bg: "#2563eb" }}
        >
          Buy Latte
        </Button>
      </Card.Footer>
    </Box>
  </Card.Root>
);

export default Home;
