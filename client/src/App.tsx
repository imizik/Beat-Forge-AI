import './App.css';
import { ChakraProvider, Box, Stack, HStack, Img } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import weight from './assets/weight.png'
import MainBox from './components/Description'
import Forge from './components/Forge';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Stack className="top-stack" align={"center"}>
          <Navbar/>
          <HStack className='top-ctn'>
            <Box className='middle'><MainBox/></Box>
            <Img src={weight} className='weight'></Img>
            {/* <Img src={monet} className='weight'></Img> */}

          </HStack>
          
          <Forge />
        </Stack>
      </div>
  </ChakraProvider>
  );
}

export default App;
