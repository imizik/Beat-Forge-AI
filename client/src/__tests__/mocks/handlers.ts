import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:8080/api/generations', (req, res, ctx) => {
    // Mock the response data
    console.log('Mock server called');
    const mockData = {
      artist: 'asfasf',
      vibe: 'afsfas',
      bpm: 120,
      key: 'C Major',
      chordProgression: ['C', 'F', 'G', 'Am'],
      bars: 4,
      timing: ['1m', '1m', '1m', '1m'],
    };

    console.log(req)
    // Return the mocked response
    return res(ctx.json(mockData));
  }),
];