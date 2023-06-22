import { Select } from '@chakra-ui/react';
import '../../index.css';

export default function ScaleSelect({
  keyEnabled,
  value,
  setFormData,
  selectType,
  field,
}) {
  const type = {
    noteType: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
    scaleType: [
      'Major',
      'Natural Minor',
      'Harmonic Minor',
      'Melodic Minor',
      'Dorian',
      'Phrygian',
      'Lydian',
      'Mixolydian',
      'Locrian',
    ],
  };

  return (
    <Select
      disabled={!keyEnabled}
      value={value}
      onChange={(e) =>
        setFormData((prevFormData) => ({
          ...prevFormData,
          [field]: e.target.value,
        }))
      }
    >
      {type[selectType].map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
