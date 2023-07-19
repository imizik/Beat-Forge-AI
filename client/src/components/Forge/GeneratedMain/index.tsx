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
import {
  FaPlay,
  FaMeteor,
  FaMusic,
  FaChartBar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
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
      bpm: data.bpm,
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
      <Box
        as="header"
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        p={5}
      >
        <Image src="/path/to/logo.png" alt="Logo" h="50px" />
        <Box as="nav">
          <Link href="#" mr={5}>
            Home
          </Link>
          <Link href="#">About</Link>
        </Box>
      </Box>
      <Box as="main" p={5}>
        <EditableArea data={title} setData={setTitle} />
        <SimpleGrid columns={2} spacing={10} my={5}>
          <Box
            bg="white"
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Text>
              <FaMeteor /> BPM: {data.bpm}
            </Text>
          </Box>
          <Box
            bg="white"
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Text>
              <FaMusic /> Key: {data.key}
            </Text>
          </Box>
          <Box
            bg="white"
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Text>
              <FaChartBar /> Chord Progression:{' '}
              {data.chordProgression.join(', ')}
            </Text>
          </Box>
          <Box
            bg="white"
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Text>Bars: {data.bars}</Text>
          </Box>
          <Box
            bg="white"
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Text>Timing: {data.timing.join(', ')}</Text>
          </Box>
        </SimpleGrid>
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
      </Box>
      <Footer />
    </Stack>
  );
};
