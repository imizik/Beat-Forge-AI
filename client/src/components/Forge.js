import GeneratedMain from './Generated/GeneratedMain';
import Forms from './Forms';
import {useState} from 'react';
import axios from 'axios';

export default function Forge() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedData, setGeneratedData] = useState(null);
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
    }
  };

  return (
    <>
      {generatedData ? (
        <GeneratedMain data={generatedData} />
      ) : (
        <Forms onSubmit={handleSubmit} isLoading={isLoading} formData={formData} setFormData={setFormData}/>
      )}
    </>
  );
}
