import React from 'react';
import './PianoGrid.scss';

const PianoGrid = ({ measures, quant }) => {
  const notesPerOctave = 12; // Number of notes in an octave
  const octaves = 3; // Number of octaves to display

  const renderNotes = () => {
    const notes = [];
    for (let i = 0; i < measures * quant; i++) {
      notes.push(<div key={i} className="note"></div>);
    }
    return notes;
  };

  const renderNoteLabels = () => {
    const noteLabels = [];
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    for (let row = 0; row < 36; row++) {
      const noteIndex = row % notesPerOctave;
      const octave = Math.floor(row / notesPerOctave);
      const noteName = noteNames[noteIndex];
      const noteLabel = noteName + (octave - 1);

      noteLabels.push(<div key={noteLabel} className="note-label">{noteLabel}</div>);
    }

    return noteLabels;
  };

  const renderStrings = () => {
    const strings = [];
    for (let i = 0; i < 6; i++) {
      strings.push(
        <div key={i} className="string hbox">
          {renderNotes()}
        </div>
      );
    }
    return strings;
  };

  return (
    <div className="piano-grid-container">
      <div className="note-labels vbox">
        {renderNoteLabels()}
      </div>
      <div id="tabroll" className="vbox">{renderStrings()}</div>
    </div>
  );
};

export default PianoGrid;