import { rest } from 'msw';

export const handlers = [
  rest.post(`${import.meta.env.VITE_API_URL}/api/generations`, (req, res, ctx) => {
    const mockData = {
      artist: 'Test Artist',
      vibe: 'Test Vibe',
      bpm: 120,
      key: 'C Major',
      chordProgression: ['C', 'F', 'G', 'Am'],
      bars: 4,
      timing: ['1m', '1m', '1m', '1m'],
    };
    console.log(req)
    return res(ctx.json(mockData));
  }),
];