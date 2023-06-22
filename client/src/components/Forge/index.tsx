import {GeneratedMain} from './GeneratedMain';
import {Forms} from './Forms';
import {useState} from 'react';
import axios from 'axios';

export default function Forge() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedData, setGeneratedData] = useState(null);
  const [isGenerated, setIsGenerated] = useState(false);
  const [formData, setFormData] = useState({
    artist: '',
    vibe: '',
    bpmEnabled: false,
    keyEnabled: false,
    bpm: 0,
    note: '',
    scale: '',
  });

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:3080/generations',
        data
      );
      setGeneratedData(response.data);
    } catch (error) {
      console.log(error);
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
      {isGenerated ? (
        <GeneratedMain data={generatedData} onGoBack={handleGoBack} />
      ) : (
        <Forms onSubmit={handleSubmit} isLoading={isLoading} formData={formData} setFormData={setFormData} />
      )}
    </>
  );
}
