import {
  Button,
  Stack,
  Center,
  Textarea,
  FormControl,
  FormLabel,
  Checkbox,
  Spinner
} from '@chakra-ui/react';
import { useState } from 'react';
import './Forms.scss';
import SliderPref from './SliderPref';
import ScaleSelect from './ScaleSelect';
import axios from 'axios';

export default function Forms() {
  const [artist, setArtist] = useState('');
  const [vibe, setVibe] = useState('');
  const [bpmEnabled, setBpmEnabled] = useState(false);
  const [keyEnabled, setKeyEnabled] = useState(false);
  const [bpm, setBpm] = useState(0);
  const [note, setNote] = useState('');
  const [scale, setScale] = useState('');
  const [chords, setChords] = useState('');
  const [instruments, setInstruments] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleEvent = (event, setter) => {
    setter(event.target.value);
  };

  const handleChecked = (event, setter) => {
    setter(event.target.checked);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      artist,
      vibe,
      bpmEnabled,
      keyEnabled,
      bpm,
      note,
      scale,
      chords,
      instruments,
    };
    console.log(data);
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3080/generations', data);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center className="forms-ctn">
      {isLoading && (
        <div className="loader-container">
          <div className="loader" />
        </div>
      )}
      <Stack className="stack-ctn">
        <div>Please Enter All Information Below:</div>
        <form onSubmit={handleSubmit}>
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
              <SliderPref disabled={bpmEnabled} setBpm={setBpm} bpm={bpm} handleEvent={handleEvent} />
            </FormControl>
            <FormControl opacity={keyEnabled ? 1 : 0.5}>
              <FormLabel>Scale Type:</FormLabel>
              <ScaleSelect
                keyEnabled={keyEnabled}
                value={scale}
                setter={setScale}
                selectType="scale"
              />
              <FormLabel>Key:</FormLabel>
              <ScaleSelect
                keyEnabled={keyEnabled}
                value={note}
                setter={setNote}
                selectType="notes"
              />
            </FormControl>
            <Button isLoading={isLoading} type="submit" colorScheme='blue'>Submit</Button>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
}