import * as Tone from 'tone';

export interface Synth {
  synth: Tone.PolySynth;
  playChordNotes: (chordNotes: string[][], timing: string[], bpm: number) => void;
}

export interface FormData {
  artist: string;
  vibe: string;
  bpmEnabled: boolean;
  keyEnabled: boolean;
  bpm: number;
  scale: string;
  note: string;
}