import { Dispatch, SetStateAction, FunctionComponent } from 'react';


interface GeneratedMainProps {
    data: {
      artist: string;
      vibe: string;
      chordProgression: string[];
      key: string;
      bpm: number;
      timing: string[];
      bars: number;
    };
    onGoBack: () => void;
  }

export type GeneratedMainComponent = FunctionComponent<GeneratedMainProps>

interface EditableAreaProps {
  data: string;
  setData: Dispatch<SetStateAction<string>>;
}

export type EditableAreaComponent = FunctionComponent<EditableAreaProps>