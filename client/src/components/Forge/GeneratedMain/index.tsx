import { Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { EditableArea } from './EditableArea';
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  FaPlay,
  FaMeteor,
  FaMusic,
  FaChartBar,
  FaBars,
  FaClock,
} from 'react-icons/fa';
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
      <Stack width="50%">
        <div>Generated Beat Information:</div>

        <Stack
          p={10}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          mx={10}
          height="55vh"
          justifyContent="space-between"
        >
          <EditableArea data={title} setData={setTitle} />
          <Flex flexDirection="row" justifyContent="space-between" height="50%">
            <Flex flexDirection="column" alignItems="flex-start">
              <Flex flexDirection="row" alignItems="center">
                <FaMeteor size="1.5em" />
                <Text fontSize="2xl" ml={2}>
                  BPM: {data.bpm}
                </Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center">
                <FaMusic size="1.5em" />
                <Text fontSize="2xl" ml={2}>
                  Key: {data.key}
                </Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" alignItems="flex-start">
              <Flex flexDirection="row" alignItems="center">
                <FaChartBar size="1.5em" />
                <Text fontSize="xl" ml={2}>
                  Chords: {data.chordProgression.join(', ')}
                </Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center">
                <FaBars size="1.5em" />
                <Text fontSize="xl" ml={2}>
                  Bars: {data.bars}
                </Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center">
                <FaClock size="1.5em" />
                <Text fontSize="xl" ml={2}>
                  Timing: {data.timing.join(', ')}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* Add extra content here if needed to fill up space */}
          <Flex justify="space-between" mt={5}>
            <IconButton
              aria-label="Go back"
              icon={<ArrowBackIcon boxSize="24px"/>}
              colorScheme="whiteAlpha"
              variant="ghost"
              onClick={onGoBack}
              _hover={{ color: 'teal.500' }}
              width="25%"
            />
            <Button
              colorScheme="purple"
              onClick={handleMidiGenerateClick}
              _hover={{ bg: 'purple.500' }}
              width="25%"

            >
              Generate MIDI
            </Button>
            <Button
              leftIcon={<FaPlay />}
              colorScheme="purple"
              onClick={handleGenerateClick}
              _hover={{ bg: 'purple.500' }}
              width="25%"

            >
              Play Sound
            </Button>
          </Flex>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};
