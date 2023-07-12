import { Dispatch, SetStateAction, FunctionComponent } from 'react';
import { FormData } from '../../../hooks/types';

interface FormsProps {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
}

export type FormsComponent = FunctionComponent<FormsProps>


interface ScaleSelectProps {
  keyEnabled: boolean;
  value: string;
  field: string;
  selectType: 'noteType' | 'scaleType';
  setFormData: Dispatch<SetStateAction<FormData>>;
}

interface SliderPrefProps {
  disabled: boolean;
  bpm: number;
  setFormData: Dispatch<SetStateAction<FormData>>;
}

export type ScaleSelectComponent = FunctionComponent<ScaleSelectProps>
export type SliderPrefComponent = FunctionComponent<SliderPrefProps>
