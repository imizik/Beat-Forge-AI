import { Box, Stack, HStack, Img } from '@chakra-ui/react'
import {Navbar} from '../Navbar';
import weight from '../../assets/synthwaveform.png'
import MainBox from '../Description'
import { useRef } from 'react';

export const LandingPage = () => {
  const topCtnRef = useRef<HTMLDivElement>(null)

  return (
    <Stack className="top-stack" align={"center"} bg="primary.main" spacing={0}>
      <Navbar topCtnRef={topCtnRef}/>
      <HStack ref={topCtnRef} className='top-ctn' bg="primary.main">
        <Box className='middle'><MainBox/></Box>
        <Img src={weight} className='weight'></Img>
        <Box bg="accent.main">asfasffsaasf</Box>
      </HStack>
      <Box bg="white" className='asd'>asfg</Box>
    </Stack>
  );
}