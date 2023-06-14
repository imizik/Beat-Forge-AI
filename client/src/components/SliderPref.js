import {
  NumberInput,
  Flex,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import './Forms.scss';
export default function SliderPref({ setFormData, bpm, disabled }) {
  return (
    <Flex>
      <NumberInput
        disabled={!disabled}
        maxW="100px"
        mr="2rem"
        value={bpm}
        onChange={(e) =>
          setFormData((prevFormData) => ({
            ...prevFormData,
            bpm: e,
          }))
        }
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
}
