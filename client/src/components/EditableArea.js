import {
  Editable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
  IconButton,
  Tooltip,
  Input,
  useEditableControls,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import './Forms.scss';

export default function EditableArea({ data, setData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data.title);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleCancelClick() {
    setEditedTitle(data.title);
    setIsEditing(false);
  }

  function handleSubmitClick() {
    setData((prevData) => ({
      ...prevData,
      title: editedTitle,
    }));
    setIsEditing(false);
  }

  return (
    <Editable
      value={editedTitle}
      isEditing={isEditing}
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
