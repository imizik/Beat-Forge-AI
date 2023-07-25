import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';

// Setup a new server instance
const server = setupServer(...handlers);

// Start the server before running the tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Reset the server and clean up after running the tests
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

expect.extend(matchers);

afterEach(() => {
  cleanup();
});



window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};