import { LandingPage } from '.';
import Forge from '../Forge';
import theme from '../../theme';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Landing', () => {
  it('links to forge when create button is clicked', async () => {
    render(
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

    const linkBtn = screen.getByText('Start Creating');
    fireEvent.click(linkBtn);

    // Wait for page to update with about text
    const element = await screen.findByText("Scale Type:");
    expect(element).toBeInTheDocument();
  });
});
