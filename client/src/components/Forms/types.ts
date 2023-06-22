import { Dispatch, SetStateAction, FunctionComponent } from 'react';

interface FormsProps {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
}

export type FormsComponent = FunctionComponent<FormsProps>