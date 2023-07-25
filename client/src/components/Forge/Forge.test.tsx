import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Forge from '.';
import theme from '../../theme'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';


describe('Forge', () => {
  it('renders Forms by default', () => {
    render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Forge />
        </BrowserRouter>
      </ChakraProvider>
    );
    expect(screen.getByText('Please Enter All Information Below:')).toBeInTheDocument();
  });

  it('submits form and renders GeneratedMain', async () => {
    render(
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Forge />
        </BrowserRouter>
      </ChakraProvider>
    );

    // Type into the artist and vibe textareas
    userEvent.type(screen.getByPlaceholderText('Please enter the name of the artist you want to create a beat in the style of'), 'Test Artist');
    userEvent.type(screen.getByPlaceholderText('Please describe the vibe or mood you want the beat to have'), 'Test Vibe');

    // Click the submit button
    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for the promise to resolve
    await screen.findByText('BPM: 120');

    expect(screen.getByText('BPM: 120')).toBeInTheDocument();
  });
});