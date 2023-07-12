
import {
  NumberInput,
  Flex,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import '../../../index.css';
import { SliderPrefComponent } from './types';

export const SliderPref: SliderPrefComponent = ({ setFormData, bpm, disabled }) => {
  return (
    <Flex>
      <NumberInput
        isDisabled={!disabled}
        maxW="100px"
        mr="2rem"
        value={bpm}
        onChange={(e) =>
          setFormData((prevFormData) => ({
            ...prevFormData,
            bpm: Number(e),
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