import { Box, VStack, Stack, HStack, Image, Heading, Grid, GridItem } from '@chakra-ui/react';
import { Navbar } from '../Navbar';
import wave from '../../assets/synthwaveform.png';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export const LandingPage = () => {
  const imageAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
  };
  const contentAnimation = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <VStack
      align="start"
      bg="primary.main"
      spacing={0}
      width="100%"
    >
      <Navbar />
      <Stack
        mt={{ base: "56px", md: "64px" }} // Offset by the height of the Navbar
        align="start"
        bg="primary.main"
        spacing={0}
        height="calc(100vh - 64px)" // Adjust for the height of the Navbar
        width="100%"
      >
        <HStack w="100%" h="100%" justify="space-between">
          <MotionImage src={wave} {...imageAnimation} w="45%" opacity="90%" />
          <Grid
            w="45%"
            h="100%"
            templateRows="repeat(2, 1fr)"
            gap={6}
          >
            <GridItem>
              <MotionBox {...contentAnimation}>
                <Heading as="h1" size="4xl" color="text.primary" textAlign="center">
                  The Anvil for <br />
                  Auditory Artistry
                </Heading>
              </MotionBox>
            </GridItem>
            <GridItem >
              <Box pl="6rem">
                <MotionBox {...contentAnimation}>
                  <Heading as="h2" size="md" color="text.secondary" textAlign="left">
                    Discover Beat Forge, a unique AI that revolutionizes music
                    production by enabling personalized beat creation. With its
                    advanced capabilities, Beat Forge allows for a seamless interaction
                    with musical elements, affording the freedom to craft unique beats,
                    adjust parameters intuitively, and explore the infinite realm of
                    music generation.
                  </Heading>
                </MotionBox>
              </Box>
            </GridItem>
          </Grid>
        </HStack>
        <Box bg="white" className='asd'>
          asfg
        </Box>
      </Stack>
    </VStack>
  );
};
