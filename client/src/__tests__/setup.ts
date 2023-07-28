import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close());
afterEach(() => server.resetHandlers());

expect.extend(matchers);

afterEach(() => {
  cleanup();
});



window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {
        //needed for tests to function
      },
      removeListener: function() {
        //needed for tests to function
      }
  };
};