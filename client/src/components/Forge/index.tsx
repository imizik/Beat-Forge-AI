import { GeneratedMain } from './GeneratedMain';
import { Forms } from './Forms';
import { useState } from 'react';
import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';
import { FormData } from '../../hooks/types';
import { GenerationData } from './types';


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
    try {
      const response: AxiosResponse<GenerationData> = await axios.post(
        'http://localhost:3080/generations',
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