import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { EditableArea } from './EditableArea';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FaPlay, FaMeteor, FaMusic, FaChartBar } from 'react-icons/fa';
import { getChordNotes } from '../../../utils/getChordNotes';
import { useSynth } from '../../../hooks/useSynth';
import { GeneratedMainComponent } from './types';
import { Navbar } from '../../Navbar';
import { generateMidi } from '../../../utils/generateMidi';
import { Footer } from '../../Footer';

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
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Navbar bgProp="secondary.main" />
      <Stack className="stack-ctn">
      <div>Generated Beat Information:</div>

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          mx={10}
        >
          <EditableArea data={title} setData={setTitle} />
          <Flex flexDirection="column" alignItems="flex-start" spacing={3}>
            <Text>
              <FaMeteor /> BPM: {data.bpm}
            </Text>
            <Text>
              <FaMusic /> Key: {data.key}
            </Text>
            <Text>
              <FaChartBar /> Chords: {data.chordProgression.join(', ')}
            </Text>
            <Text>Bars: {data.bars}</Text>
            <Text>Timing: {data.timing.join(', ')}</Text>
          </Flex>
          <Flex justify="space-between" mt={5}>
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
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
};
