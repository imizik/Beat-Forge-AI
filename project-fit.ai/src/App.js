import logo from './logo.svg';
import './App.scss';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Form from './components/Form';
function App() {
  return (
    <ChakraProvider>
      <div className="App">

        <Navbar/>
        <Form />
      </div>
    </ChakraProvider>
  );
}

export default App;
