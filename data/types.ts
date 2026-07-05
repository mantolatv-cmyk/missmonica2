export interface VocabularyItem {
  english: string;
  portuguese: string;
  exampleEn?: string;
  examplePt?: string;
}

export interface FlashcardItem {
  english: string;
  portuguese: string;
  example?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface DialogueLine {
  speaker: string;
  english: string;
  portuguese: string;
  isPrimary?: boolean;
}

export interface Scenario {
  id: string;
  title: string;
  titlePt: string;
  description: string;
  descriptionPt: string;
  icon: string;
  image: string;
  color: string;
  available: boolean;
  vocabulary: VocabularyItem[];
  flashcards: FlashcardItem[];
  quiz: QuizQuestion[];
  dialogue?: DialogueLine[];
}
