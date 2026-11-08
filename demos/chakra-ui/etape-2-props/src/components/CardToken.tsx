import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";

const Home = () => (
  <Card.Root
    flexDirection="row"
    overflow="hidden"
    maxW="xl"
    bg="primary.500" // token
    color="text.50" // token
    borderRadius="radii.card" // token
  >
    <Image
      objectFit="cover"
      maxW="200px"
      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?auto=format&fit=crop&w=800&q=60"
      alt="Caffe Latte"
    />

    <Box p="6" display="flex" flexDirection="column" gap="4" flex="1">
      <Card.Body p="0">
        <Card.Title
          mb="2"
          fontSize="18px"
          fontWeight="700"
          color="text.100" // blanc pur
        >
          The perfect latte
        </Card.Title>

        <Card.Description
          fontSize="14px"
          color="text.300" // texte muted
        >
          Caffè latte is a coffee beverage of Italian origin made with espresso
          and steamed milk.
        </Card.Description>

        <HStack mt="4">
          <Badge
            bg="success.bg"
            color="success.fg"
            borderRadius="radii.pill"
            px="3"
            py="1"
            fontSize="12px"
            fontWeight="500"
            w="fit-content"
          >
            Hot
          </Badge>

          <Badge
            bg="danger.bg"
            color="danger.fg"
            borderRadius="radii.pill"
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
          bg="brand.500"
          color="text.100"
          borderRadius="radii.button"
          fontWeight="600"
          _hover={{ bg: "brand.600" }}
        >
          Buy Latte
        </Button>
      </Card.Footer>
    </Box>
  </Card.Root>
);

export default Home;
