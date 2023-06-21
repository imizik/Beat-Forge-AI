import { Button, Stack, Center, Text, Box, Flex, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import '../Forms.scss';
import EditableArea from '../EditableArea';
import * as Tone from 'tone';
import { Chord } from 'tonal';
import { ArrowBackIcon, PlayIcon } from "@chakra-ui/icons";
import { FaPlay } from "react-icons/fa";

export default function GeneratedMain({ data, onGoBack }) {
  const [title, setTitle] = useState(`${data.artist}'s ${data.vibe} Song`);

  const handleGenerateClick = () => {
    const synth = new Tone.PolySynth().toDestination();
    const chordNotes = data.chordProgression.map((chord) =>
      getChordNotes(chord, data.key)
    );
    const now = Tone.now();
    const secondsPerBeat = 60 / data.bpm; // Calculate the duration of one beat in seconds
    let cumulativeTime = 0; // Initialize cumulative time

    data.timing.forEach((timing, index) => {
      const chord = chordNotes[index];
      const duration = secondsPerBeat * Tone.Time(timing).toSeconds(); // Calculate the duration of the chord in seconds
      const delayTime = now + cumulativeTime + 1; // Add cumulative time and delay

      synth.triggerAttackRelease(chord, duration, delayTime);

      cumulativeTime += duration; // Add the duration of the current chord to cumulative time
    });
  };

  const getChordNotes = (chord, key) => {
    const chordNotes = Chord.get(chord).notes;
    const notes = chordNotes.map((note, index) => {
      const octaveOffset = note.charAt(0) < chordNotes[0][0] ? 5 : 4;
      return note + octaveOffset;
    });
    return notes;
  };

  return (
    <Center className="forms-ctn">
      <Stack className="stack-ctn">
        <Stack
          className="stack-inner"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          padding={4}
        >
          <Box marginBottom={4}>
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
          </Box>
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
              leftIcon={<FaPlay  />}
              colorScheme="purple"
              onClick={handleGenerateClick}
              _hover={{ bg: 'purple.500' }}
            >
              Play Sound
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Center>
  );
}
