import {
  Button,
  Stack,
  Text,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { EditableArea } from './EditableArea';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FaPlay } from 'react-icons/fa';
import { getChordNotes } from '../../../utils/getChordNotes';
import { useSynth } from '../../../hooks/useSynth';
import { GeneratedMainComponent } from './types';
import { Navbar } from '../../Navbar';
import { generateMidi } from '../../../utils/generateMidi';

export const GeneratedMain: GeneratedMainComponent = ({ data, onGoBack }) => {
  const [title, setTitle] = useState(`${data.artist}'s ${data.vibe} Song`);
  const synth = useSynth();

  const handleGenerateClick = () => {
    const chordNotes = data.chordProgression.map((chord) =>
      getChordNotes(chord)
    );
    synth.playChordNotes(chordNotes, data.timing, data.bpm);
  };

  const handleMidiGenerateClick = () => {
    const midiDataUri = generateMidi({
      chordProgression: data.chordProgression,
      timing: data.timing,
    });

    const link = document.createElement('a');
    link.href = midiDataUri;
    link.download = 'output.mid';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Stack
      bg="secondary.main"
      color="text.primary"
      width="100%"
      alignItems="center"
    >
      <Navbar bgProp="secondary.main" />
      <Stack
        width="50%"
        padding={4}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Stack padding={4} marginBottom={4}>
          <EditableArea data={title} setData={setTitle} />
          <Text>BPM: {data.bpm}</Text>
          <Text>Key: {data.key}</Text>
          <Text>
            Chord Progression:{' '}
            {data.chordProgression.map((chord, index) => (
              <span key={index}>
                {chord}
                {index < data.chordProgression.length - 1 ? ', ' : ''}
              </span>
            ))}
          </Text>
          <Text>Bars: {data.bars}</Text>
          <Text>
            Timing of the chords on the bar:{' '}
            {data.timing.map((timing, index) => (
              <span key={index}>
                {timing}
                {index < data.timing.length - 1 ? ', ' : ''}
              </span>
            ))}
          </Text>
        </Stack>
        <Flex justify="space-between">
          <IconButton
            aria-label="Go back"
            icon={<ArrowBackIcon />}
            colorScheme="whiteAlpha"
            variant="ghost"
            onClick={onGoBack}
            _hover={{ color: 'teal.500' }}
          />
          <Button
            colorScheme="purple"
            onClick={handleMidiGenerateClick}
            _hover={{ bg: 'purple.500' }}
          >
            Generate MIDI
          </Button>
          <Button
            leftIcon={<FaPlay />}
            colorScheme="purple"
            onClick={handleGenerateClick}
            _hover={{ bg: 'purple.500' }}
          >
            Play Sound
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
};
