import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme";
import { LandingPage } from './components/Landing Page';
import Forge from './components/Forge';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={ <LandingPage /> }/>
            <Route path="/forge" element={ <Forge /> }/>
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}
export default App;