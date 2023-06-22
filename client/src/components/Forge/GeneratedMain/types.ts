import { FunctionComponent } from "react"

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