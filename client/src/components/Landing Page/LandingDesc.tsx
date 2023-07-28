import {
  Stack,
  HStack,
  Image,
  Heading,
  Grid,
  GridItem,
  Box,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import wave from '../../assets/synthwaveform.png';
import { MdKeyboardArrowDown } from 'react-icons/md';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const LandingContent: React.FC = () => {
  const imageAnimation: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
  };
  const contentAnimation: Variants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  };
  const arrowAnimation: Variants = {
    animate: {
      y: [-10, 0, -10],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <Stack align="start" bg="primary.main" spacing={0}>
      <HStack
        w="100%"
        h="calc(100vh - 64px)"
        justify="space-between"
        position="relative"
      >
        <MotionImage
          src={wave}
          initial="initial"
          animate="animate"
          {...imageAnimation}
          w="45%"
          opacity="90%"
        />
        <Grid
          w="45%"
          h="100%"
          templateRows="repeat(2, 1fr)"
          gap={16}
          overflow="hidden"
          mt={16}
        >
          <GridItem>
            <MotionBox {...contentAnimation}>
              <Heading
                as="h1"
                fontSize="9xl"
                color="text.primary"
                textAlign="left"
                borderBottom="4px solid"
                borderColor="accent.main"
              >
                Anvil of <br />
                Auditory Artistry
              </Heading>
            </MotionBox>
          </GridItem>
          <GridItem>
            <Box>
              <MotionBox {...contentAnimation}>
                <Heading
                  as="h2"
                  size="md"
                  color="text.secondary"
                  textAlign="left"
                  mt={4}
                >
                  Discover Beat Forge, a unique AI that revolutionizes music
                  production by enabling personalized beat creation. With its
                  advanced capabilities, Beat Forge allows for a seamless
                  interaction with musical elements, affording the freedom to
                  craft unique beats, adjust parameters intuitively, and explore
                  the infinite realm of music generation.
                </Heading>
              </MotionBox>
            </Box>
          </GridItem>
        </Grid>
        <MotionBox
          as={MdKeyboardArrowDown}
          size="32px"
          color="text.primary"
          {...arrowAnimation}
          initial="initial"
          animate="animate"
          position="absolute"
          bottom={4}
          left="50%"
          transform="translateX(-50%)"
        />
      </HStack>
    </Stack>
  );
};

export default LandingContent;
