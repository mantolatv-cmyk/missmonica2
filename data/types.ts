export interface VocabularyItem {
  english: string;
  portuguese: string;
  levels?: {
    A1?: { en: string; pt: string };
    A2?: { en: string; pt: string };
    B1?: { en: string; pt: string };
  };
}

export interface UsefulExpression {
  expressionPt: string;
  translationEn: string;
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

export interface TrueOrFalseItem {
  statement: string;
  statementPt: string;
  isTrue: boolean;
  explanation: string;
}

export interface TrueOrFalsePractice {
  part1: TrueOrFalseItem[];
  part2: TrueOrFalseItem[];
}

export interface SpeakingQuestion {
  question: string;
  translation: string;
}

export interface SpeakingPractice {
  part1: SpeakingQuestion[];
  part2: SpeakingQuestion[];
}

export interface BuildSentencePractice {
  level1: { english: string; portuguese: string; }[];
  level2: { english: string; portuguese: string; }[];
}

export interface ReadingLevel {
  textEn: string;
  textPt: string;
  questions: QuizQuestion[];
}

export interface ReadingPractice {
  level1: ReadingLevel;
  level2: ReadingLevel;
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
  flashcards?: FlashcardItem[];
  quiz: QuizQuestion[];
  dialogue?: DialogueLine[];
  trueOrFalse?: TrueOrFalsePractice;
  speakingPractice?: SpeakingPractice;
  usefulExpressions?: UsefulExpression[];
  quizLevel2?: QuizQuestion[];
  trueOrFalseLevel2?: TrueOrFalsePractice;
  speakingPracticeLevel2?: SpeakingPractice;
  buildSentence?: BuildSentencePractice;
  reading?: ReadingPractice;
}
