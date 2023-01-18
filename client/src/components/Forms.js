import { Text, Select, Stack, Center, Box, Textarea, FormControl, FormLabel } from '@chakra-ui/react';
import React from 'react';
import './Forms.scss';

export default function Forms() {
  const [fitGoal, setFitGoal] = React.useState('');
  const [fitLvl, setFitLvl] = React.useState('');

  const handleEvent = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <Center className="forms-ctn">
      <Stack className="stack-ctn">
        <FormControl>
          <FormLabel>Current Fitness Level: {fitLvl}</FormLabel>
          <Select
            isRequired
            value={fitLvl}
            onChange={(e) => handleEvent(e, setFitLvl)}
            placeholder='Please select option'
          >
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel mb="8px">Describe your fitness goal: {fitGoal}</FormLabel>
          <Textarea
            value={fitGoal}
            onChange={(e) => handleEvent(e, setFitGoal)}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
        </FormControl>
      </Stack>
    </Center>
  );
}
