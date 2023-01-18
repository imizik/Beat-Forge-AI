import logo from './logo.svg';
import './App.scss';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Forms from './components/Forms';

function App() {
  return (
    <ChakraProvider>
      <div className="App">

        <Navbar/>
        <Forms />
      </div>
  </ChakraProvider>
  );
}

export default App;
