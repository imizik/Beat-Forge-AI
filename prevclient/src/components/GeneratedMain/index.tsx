import { Button, Stack, Center, Text, Box, Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../../index.css';
import EditableArea from '../EditableArea';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FaPlay } from "react-icons/fa";
import { getChordNotes } from '../../utils/getChordNotes';
import { useSynth } from '../../../../client/src/hooks/useSynth';
import { GeneratedMainComponent } from './types';

export const GeneratedMain: GeneratedMainComponent = ({ data, onGoBack }) => {
  const [title, setTitle] = useState(`${data.artist}'s ${data.vibe} Song`);
  const synth = useSynth();

  const handleGenerateClick = () => {
    const chordNotes = data.chordProgression.map((chord) =>
      getChordNotes(chord, data.key)
    );
    synth.playChordNotes(chordNotes, data.timing, data.bpm);
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
