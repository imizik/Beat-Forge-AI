import { Dispatch, SetStateAction, useCallback } from 'react';
import { FormData } from './types';

const useHandleEvent = (setFormData: Dispatch<SetStateAction<FormData>>) =>
  useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>, field: keyof FormData) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: event.target.value,
      }));
    },
    [setFormData]
  );

const useHandleChecked = (setFormData: Dispatch<SetStateAction<FormData>>) =>
  useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: event.target.checked,
      }));
    },
    [setFormData]
  );

const useHandleSubmit = (
  onSubmit: (formData: FormData) => void,
  formData: FormData
) =>
  useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(formData);
    },
    [onSubmit, formData]
  );

export { useHandleEvent, useHandleChecked, useHandleSubmit };