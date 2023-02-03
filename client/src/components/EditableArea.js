import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    ButtonGroup,
    IconButton,
    Flex,
    Input,
    useEditableControls
  } from '@chakra-ui/react';
import './Forms.scss'
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
export default function EditableArea({setEquip, handleEvent}) {
    function EditableControls() {
        const {
          isEditing,
          getSubmitButtonProps,
          getCancelButtonProps,
          getEditButtonProps,
        } = useEditableControls()
    
        return isEditing ? (
          <ButtonGroup justifyContent='center' size='sm'>
            <IconButton color='green' icon={<CheckIcon />} {...getSubmitButtonProps()} />
            <IconButton color='red' icon={<CloseIcon />} {...getCancelButtonProps()} />
          </ButtonGroup>
        ) : (
          <Flex justifyContent='center'>
            <IconButton color='black' size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
          </Flex>
        )
      }
    
      return (
        <Editable
          defaultValue=''
          isPreviewFocusable={false}
          selectAllOnFocus={false}
        >
          <EditablePreview className='edit' />
          <Input as={EditableTextarea} className='in_edit' onChange={(e) => handleEvent(e, setEquip)} />
          <EditableControls />
        </Editable>
      )
}