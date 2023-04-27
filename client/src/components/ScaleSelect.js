import { Select } from '@chakra-ui/react';
import './Forms.scss';

export default function ScaleSelect({ keyEnabled, value, setter, selectType }) {

  const type = {
    notes: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    scale: ["Major", "Natural Minor", "Harmonic Minor", "Melodic Minor", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Locrian"]
  }

  return (
    <Select
      disabled={!keyEnabled}
      value={value}
      onChange={(e) => setter(e.target.value)}
    >
      {type[selectType].map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}