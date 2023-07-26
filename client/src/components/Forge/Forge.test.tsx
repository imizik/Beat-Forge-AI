import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Forge from '.';
import theme from '../../theme'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

vi.mock('tone', () => {
  return {
    PolySynth: vi.fn().mockImplementation(() => {
      return { toDestination: vi.fn() }
    }),
    Synth: vi.fn().mockImplementation(() => {
      return { toDestination: vi.fn() }
    }),
  };
});


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
  
    const artistInput = screen.getByPlaceholderText('Please enter the name of the artist you want to create a beat in the style of');
    const vibeInput = screen.getByPlaceholderText('Please describe the vibe or mood you want the beat to have');
    fireEvent.change(artistInput, { target: { value: 'Test Artist' } });
    fireEvent.change(vibeInput, { target: { value: 'Test Vibe' } });
  
    expect(artistInput).toHaveTextContent('Test Artist');
    expect(vibeInput).toHaveTextContent('Test Vibe');
  
    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);
  
    expect(submitButton).toBeDisabled();
  
    // Wait for the apicall to resolve, should now render GeneratedMainComponent
    await waitFor(() => expect(screen.getByText('BPM: 120')).toBeInTheDocument());
  });
  
});