import { Chord } from 'tonal';

export const getChordNotes = (chord: string) => {
  const chordNotes = Chord.get(chord).notes;
  const notes = chordNotes.map((note) => {
    const octaveOffset = note.charAt(0) < chordNotes[0][0] ? 5 : 4;
    return note + octaveOffset;
  });
  return notes;
};