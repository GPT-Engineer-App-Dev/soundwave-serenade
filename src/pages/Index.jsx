import { Box, Container, Flex, IconButton, VStack, Text, Image, HStack, Spacer } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.900" color="white" p={4} align="center">
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
        <Spacer />
        <HStack spacing={4}>
          <Text>Home</Text>
          <Text>Library</Text>
          <Text>Search</Text>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Flex direction={{ base: "column", md: "row" }} height="calc(100vh - 64px)">
        {/* Playlist Section */}
        <Box flex="1" bg="gray.800" color="white" p={4} overflowY="auto">
          <VStack align="start" spacing={4}>
            <Text fontSize="xl" fontWeight="bold">Playlist</Text>
            <Text>Song 1</Text>
            <Text>Song 2</Text>
            <Text>Song 3</Text>
            <Text>Song 4</Text>
            <Text>Song 5</Text>
          </VStack>
        </Box>

        {/* Player Controls Section */}
        <Box flex="2" bg="gray.700" color="white" p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Image boxSize="200px" src="https://via.placeholder.com/200" alt="Album Art" mb={4} />
          <Text fontSize="2xl" mb={2}>Song Title</Text>
          <Text fontSize="lg" mb={4}>Artist Name</Text>
          <HStack spacing={4}>
            <IconButton aria-label="Previous" icon={<FaBackward />} size="lg" />
            <IconButton aria-label="Play" icon={<FaPlay />} size="lg" />
            <IconButton aria-label="Pause" icon={<FaPause />} size="lg" />
            <IconButton aria-label="Next" icon={<FaForward />} size="lg" />
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;