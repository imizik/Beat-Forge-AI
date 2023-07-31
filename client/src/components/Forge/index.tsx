import { GeneratedMain } from './GeneratedMain';
import { Forms } from './Forms';
import { useState } from 'react';
import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';
import { FormData } from '../../hooks/types';
import { GenerationData } from './types';

//MockData
// const mockdata = {
//   artist: "asfasf",
//   vibe: "afsfas",
//   bpm: 120,
//   key: "C Major",
//   chordProgression: ["C","F","G","Am"],
//   bars: 4,
//   timing: ["1m","1m","1m","1m"]
//   }

function Forge() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedData, setGeneratedData] = useState<GenerationData | null>(null);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    artist: '',
    vibe: '',
    bpmEnabled: false,
    keyEnabled: false,
    bpm: 0,
    note: '',
    scale: '',
  });

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    console.log(import.meta.env.VITE_API_URL)
    try {
      const response: AxiosResponse<GenerationData> = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/generations`,
        data
      );
      setGeneratedData(response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError;
        if (serverError && serverError.response) {
          console.log(serverError.response.data);
        }
      } else {
        console.log((error as Error).message);
      }
    } finally {
      setIsLoading(false);
      setIsGenerated(true);
    }
  };

  const handleGoBack = () => {
    setIsGenerated(false);
  };

  return (
    <>
      {isGenerated && generatedData !== null ? (
        <GeneratedMain data={generatedData} onGoBack={handleGoBack} />
      ) : (
        <Forms onSubmit={handleSubmit} isLoading={isLoading} formData={formData} setFormData={setFormData} />
      )}
    </>
  );
}

export default Forge;