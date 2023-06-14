import {
  Editable,
  EditableInput,
  EditablePreview,
  Tooltip,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import './Forms.scss';

export default function EditableArea({ data, setData }) {
  const [isediting, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data);

  function handleCancelClick() {
    setEditedTitle(data);
    setIsEditing(false);
  }

  function handleSubmitClick() {
    setData(editedTitle);
    setIsEditing(false);
  }

  return (
    <Editable
      value={editedTitle}
      isEditing={isediting}
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
