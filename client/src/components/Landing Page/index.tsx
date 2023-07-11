import { Box, Stack, HStack, Image, Heading } from '@chakra-ui/react'
import {Navbar} from '../Navbar';
import wave from '../../assets/synthwaveform.png'
import MainBox from '../Description'
import { useRef } from 'react';

export const LandingPage = () => {
  const topCtnRef = useRef<HTMLDivElement>(null)

  return (
    <Stack className="main-stack" align={"center"} bg="primary.main" spacing={0}>
      <Navbar topCtnRef={topCtnRef}/>
      <Box className='top-box'>
        <HStack ref={topCtnRef} className='top-ctn' bg="primary.main">
          <Image src={wave} className='wave'></Image>
          <Box className='middle'><MainBox/></Box>
        </HStack>
        <Box width="90%" pl="6rem">
          <Heading as='h2' size='md' color="text.secondary" textAlign="left">
            Discover Beat Forge, a unique AI that revolutionizes music production by enabling personalized beat creation. With its advanced capabilities, Beat Forge allows for a seamless interaction with musical elements, affording the freedom to craft unique beats, adjust parameters intuitively, and explore the infinite realm of music generation.
          </Heading>
        </Box>
      </Box>
      <Box bg="white" className='asd'>asfg</Box>
    </Stack>
  );
}