import { Box, Stack, HStack, Img } from '@chakra-ui/react'
import {Navbar} from '../Navbar';
import weight from '../../assets/weight.png'
import MainBox from '../Description'

export const LandingPage = () => {
  return (
    <Stack className="top-stack" align={"center"} bg="primary.main">
      <Navbar/>
      <HStack className='top-ctn' bg="secondary.main">
        <Box className='middle'><MainBox/></Box>
        <Img src={weight} className='weight'></Img>
        <Box bg="accent.main">asfasffsaasf</Box>

      </HStack>
    </Stack>
  );
}