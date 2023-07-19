// utils/generateMidi.ts
import MidiWriter from 'midi-writer-js';
import { getChordNotes } from './getChordNotes';

interface MidiGenerationData {
    chordProgression: string[];
    timing: string[];
  }

export const generateMidi = ({ chordProgression, timing }: MidiGenerationData): string => {
  const track = new MidiWriter.Track();

  chordProgression.forEach((chord, index) => {
    const chordNotes = getChordNotes(chord);
    let duration = timing[index].replace('n', ''); // Remove 'n' from the timing
    if (duration === '1m') { // If the duration is '1m', map it to '1'
      duration = '1';
    }
    console.log(chordNotes, duration)
    track.addEvent(new MidiWriter.NoteEvent({ pitch: chordNotes as any, duration: duration as any }));
  });

  const write = new MidiWriter.Writer(track);
  return write.dataUri();
};
