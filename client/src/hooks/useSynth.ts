import * as Tone from 'tone';
import { Synth } from './types';

export const useSynth = (): Synth => {
  const synth = new Tone.PolySynth().toDestination();

  const playChordNotes = (chordNotes: string[][], timing: string[], bpm: number): void => {
    const now = Tone.now();
    const secondsPerBeat = 60 / bpm; // Calculate the duration of one beat in seconds
    let cumulativeTime = 0; // Initialize cumulative time

    timing.forEach((timing, index) => {
      const chord = chordNotes[index];
      const duration = secondsPerBeat * Tone.Time(timing).toSeconds(); // Calculate the duration of the chord in seconds
      const delayTime = now + cumulativeTime + 1; // Add cumulative time and delay

      synth.triggerAttackRelease(chord, duration, delayTime);

      cumulativeTime += duration; // Add the duration of the current chord to cumulative time
    });
  };

  return { synth, playChordNotes };
};