import {
  Select,
  Stack,
  Center,
  Textarea,
  FormControl,
  FormLabel,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';
import './Forms.scss';
import EditableArea from './EditableArea';
import SliderPref from './SliderPref';

export default function Forms() {
  const [artist, setArtist] = useState('');
  const [vibe, setVibe] = useState('');
  const [bpmEnabled, setBpmEnabled] = useState(false);
  const [keyEnabled, setKeyEnabled] = useState(false);
  const [bpm, setBpm] = useState(0);
  const [key, setKey] = useState('');
  const [chords, setChords] = useState('');
  const [instruments, setInstruments] = useState('');

  const handleEvent = (event, setter) => {
    setter(event.target.value);
  };

  const handleChecked = (event, setter) => {
    setter(event.target.checked);
  };

  return (
    <Center className="forms-ctn">
      <Stack className="stack-ctn">
        <div>Please Enter All Information Below:</div>
        <Stack
          className="stack-inner"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <FormControl>
            <FormLabel>Artist:</FormLabel>
            <Textarea
              value={artist}
              onChange={(e) => handleEvent(e, setArtist)}
              placeholder="Please enter the name of the artist you want to create a beat in the style of"
              size="sm"
              isRequired
            />
          </FormControl>
          <FormControl>
            <FormLabel>Vibe:</FormLabel>
            <Textarea
              value={vibe}
              onChange={(e) => handleEvent(e, setVibe)}
              placeholder="Please describe the vibe or mood you want the beat to have"
              size="sm"
              isRequired
            />
          </FormControl>
          <FormControl>
            <Stack spacing={8} direction='row'>
              <Checkbox
                isChecked={bpmEnabled}
                onChange={(e) => handleChecked(e, setBpmEnabled)}
                colorScheme="blue"
              >
                Set BPM
              </Checkbox>
              <Checkbox
                isChecked={keyEnabled}
                onChange={(e) => handleChecked(e, setKeyEnabled)}
                colorScheme="blue"
              >
                Set Key
              </Checkbox>
            </Stack>
          </FormControl>
          <FormControl opacity={bpmEnabled ? 1 : 0.5}>
            <FormLabel>BPM:</FormLabel>
            <SliderPref disabled={!bpmEnabled} setBpm={setBpm} bpm={bpm} handleEvent={handleEvent} />
          </FormControl>
          <FormControl opacity={keyEnabled ? 1 : 0.5}>
            <FormLabel>Key:</FormLabel>
            <Select
              disabled={!keyEnabled}
              value={key}
              onChange={(e) => handleEvent(e, setKey)}
              placeholder="Please select the desired key"
            >
              <option value="C">C</option>
              <option value="C#">C#</option>
              <option value="D">D</option>
              <option value="D#">D#</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="F#">F#</option>
              <option value="G">G</option>
              <option value="G#">G#</option>
              <option value="A">A</option>
              <option value="A#">A#</option>
              <option value="B">B</option>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Center>
  );
}
