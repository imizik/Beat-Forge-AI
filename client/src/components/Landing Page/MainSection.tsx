import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const MainSection = () => {
  return (
    <Box bg="white" p={8} width="100%">
      <VStack spacing={4} align="start">
        <Heading as="h2" size="xl">
          About Beat Forge
        </Heading>
        <Text>
          Beat Forge is a web-based music generation application that empowers music producers by leveraging AI technology. With Beat Forge, you can create unique beat templates that serve as the foundation for your music production projects.
        </Text>
        <Text>
          By utilizing OpenAI's powerful GPT-3.5 language model, Beat Forge generates beat templates that align with your specific preferences. Whether you're looking for a specific artist's style or a particular vibe, Beat Forge has got you covered.
        </Text>
        <Text>
          The user-friendly interface allows you to input essential details such as the artist's name, desired vibe, BPM, and key. The application's backend server, built with Node.js, processes your input and generates customized beat templates that align with your creative vision.
        </Text>
      </VStack>

      <VStack spacing={4} align="start">
        <Heading as="h2" size="xl">
          How Beat Forge Works
        </Heading>
        <Text>
          1. Input Your Preferences: Begin by providing the artist's name and describing the vibe or mood you want the beat to have. Additionally, you can set the desired BPM and key to further customize your beat template.
        </Text>
        <Text>
          2. AI-Generated Beat Templates: Once you've inputted your preferences, Beat Forge's backend server processes your information and generates AI-powered beat templates. These templates serve as a starting point for your music production projects.
        </Text>
        <Text>
          3. Customization and Editing: Beat Forge empowers you to customize and edit the generated beat templates. Fine-tune the composition, adjust the timing, and experiment with different elements to craft a beat that resonates with your artistic vision.
        </Text>
        <Text>
          4. Seamless Integration: With the beat template in hand, you can seamlessly integrate it into your preferred digital audio workstation (DAW) or music production software. Build upon the template, add your own creative elements, and bring your musical vision to life.
        </Text>
      </VStack>
    </Box>
  );
};

export default MainSection;
