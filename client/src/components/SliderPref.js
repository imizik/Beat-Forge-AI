import {Box, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb} from '@chakra-ui/react'
import './Forms.scss'
export default function SliderPref({setGymPref, handleEvent, gymPref}) {
    const labelStyles = {
      mt: '2',
      mr: '1',
      fontSize: 'sm',
    }
  
    return (
      
      <Box pt={6} pb={5} style={{width: '100%'}}>
        <Slider defaultValue={50} min={0} max={100} step={25} aria-label='slider-ex-6' onChange={(e) => setGymPref(e)}>
          <SliderMark value={0} {...labelStyles}>
            100% Home
          </SliderMark>
          <SliderMark value={25} {...labelStyles}>
            75% Home
          </SliderMark>
          <SliderMark value={50} {...labelStyles}>
            50%
          </SliderMark>
          <SliderMark value={75} {...labelStyles}>
            75% Gym
          </SliderMark>
          <SliderMark value={100} {...labelStyles}>
            100% Gym
          </SliderMark>
          <SliderMark
            value={gymPref}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {gymPref}%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    )
  }