import {
  Editable,
  EditableInput,
  EditablePreview,
  Tooltip,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import '../../../index.css';
import { EditableAreaComponent } from './types';

export const EditableArea: EditableAreaComponent = ({ data, setData }) => {
  const [editedTitle, setEditedTitle] = useState(data);

  function handleCancelClick() {
    setEditedTitle(data);
  }

  function handleSubmitClick() {
    setData(editedTitle);
  }

  return (
    <Editable
      value={editedTitle}
      onChange={(value) => setEditedTitle(value)}
      onSubmit={handleSubmitClick}
      onCancel={handleCancelClick}
      isPreviewFocusable={true}
      selectAllOnFocus={false}
      fontSize="2xl"
      fontWeight="bold"
    >
      <Tooltip label="Click to edit" shouldWrapChildren={true}>
        <EditablePreview
          py={2}
          px={4}
          _hover={{
            background: useColorModeValue('gray.500', 'gray.200'),
          }}
        />
      </Tooltip>
      <Input py={2} px={4} as={EditableInput} />
    </Editable>
  );
}