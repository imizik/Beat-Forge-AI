import { Chord } from 'tonal';

export const getChordNotes = (chord: string) => {
  const chordNotes = Chord.get(chord).notes;
  let octave = 4; // Start in the 4th octave
  const notesOrder = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // Order of notes

  const notes = chordNotes.map((note, index, arr) => {
    // If this is not the first note and it's lower than the previous one in musical terms, increment the octave
    if (index > 0 && notesOrder.indexOf(note.charAt(0)) < notesOrder.indexOf(arr[index - 1].charAt(0))) {
      octave++;
    }
    return note + octave;
  });
  return notes;
};