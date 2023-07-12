import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const MainSection = () => {
  return (
    <Box bg="white" p={8} width="100%">
      {/* Features Section */}
      <VStack spacing={4} align="start">
        <Heading as="h2" size="xl">
          Key Features
        </Heading>
        <Box>
          <Heading as="h3" size="lg">
            Feature 1
          </Heading>
          <Text>
            Description of the first feature. Explain how it benefits users and solves their problems.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Feature 2
          </Heading>
          <Text>
            Description of the second feature. Highlight its importance and how it adds value to the user experience.
          </Text>
        </Box>
        {/* Add more feature boxes as needed */}
      </VStack>

      {/* How It Works Section */}
      <VStack spacing={4} align="start">
        <Heading as="h2" size="xl">
          How It Works
        </Heading>
        <Box>
          <Heading as="h3" size="lg">
            Step 1: Sign Up
          </Heading>
          <Text>
            Walk users through the process of signing up for the application. Describe the necessary steps and any required information.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Step 2: Create a Project
          </Heading>
          <Text>
            Explain how users can create a new project within the application. Provide guidance and tips to make it easy for them to get started.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Step 3: Customize and Edit
          </Heading>
          <Text>
            Detail the options and tools available for users to customize and edit their projects. Highlight the flexibility and creativity they can achieve.
          </Text>
        </Box>
        {/* Add more steps as needed */}
      </VStack>
    </Box>
  );
};

export default MainSection;
