import {
  Button,
  Stack,
  Center,
  Textarea,
  FormControl,
  FormLabel,
  Checkbox,
} from '@chakra-ui/react';
import '../../../index.css';
import {SliderPref} from './SliderPref';
import {ScaleSelect} from './ScaleSelect';
import { FormsComponent } from './types';
import { useHandleEvent, useHandleChecked, useHandleSubmit } from '../../../hooks/useForms';

export const Forms: FormsComponent = ({ onSubmit, isLoading, formData, setFormData }) => {
  const handleEvent = useHandleEvent(setFormData);
  const handleChecked = useHandleChecked(setFormData);
  const handleSubmit = useHandleSubmit(onSubmit, formData);


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
                value={formData.artist}
                onChange={(e) => handleEvent(e, 'artist')}
                placeholder="Please enter the name of the artist you want to create a beat in the style of"
                size="sm"
                isRequired
              />
            </FormControl>
            <FormControl>
              <FormLabel>Vibe:</FormLabel>
              <Textarea
                value={formData.vibe}
                onChange={(e) => handleEvent(e, 'vibe')}
                placeholder="Please describe the vibe or mood you want the beat to have"
                size="sm"
                isRequired
              />
            </FormControl>
            <FormControl>
              <Stack spacing={8} direction="row">
                <Checkbox
                  isChecked={formData.bpmEnabled}
                  onChange={(e) => handleChecked(e, 'bpmEnabled')}
                  colorScheme="blue"
                >
                  Set BPM
                </Checkbox>
                <Checkbox
                  isChecked={formData.keyEnabled}
                  onChange={(e) => handleChecked(e, 'keyEnabled')}
                  colorScheme="blue"
                >
                  Set Key
                </Checkbox>
              </Stack>
            </FormControl>
            <FormControl opacity={formData.bpmEnabled ? 1 : 0.5}>
              <FormLabel>BPM:</FormLabel>
              <SliderPref
                disabled={formData.bpmEnabled}
                setFormData={setFormData}
                bpm={formData.bpm}
              />
            </FormControl>
            <FormControl opacity={formData.keyEnabled ? 1 : 0.5}>
              <FormLabel>Scale Type:</FormLabel>
              <ScaleSelect
                keyEnabled={formData.keyEnabled}
                value={formData.scale}
                setFormData={setFormData}
                field="scale"
                selectType='scaleType'
              />
              <FormLabel>Key:</FormLabel>
              <ScaleSelect
                keyEnabled={formData.keyEnabled}
                value={formData.note}
                setFormData={setFormData}
                field="note"
                selectType='noteType'

              />
            </FormControl>
            <Button isLoading={isLoading} type="submit" colorScheme="blue">
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
}