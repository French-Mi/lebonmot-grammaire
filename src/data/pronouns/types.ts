// src/data/pronouns/types.ts

// --- Basis-Struktur für alle Übungen ---
export interface BaseExercise {
  type: string;
  shortTitle: string;
  instructions: string;
}

// --- Strukturen für die einzelnen Übungstypen ---

export interface FillInTheBlankQuestion {
  text_start: string;
  text_blank: string | string[]; // Kann jetzt ein oder mehrere Lücken enthalten
  text_end: string;
  explanation?: string;
  translation_de?: string;
}
export interface FillInTheBlankExercise extends BaseExercise {
  type: 'fillInTheBlank';
  questions: FillInTheBlankQuestion[];
  answerOptions?: string[];
}

export interface SentenceOrderQuestion {
  parts: string[];
  correctOrder: number[];
  explanation?: string;
  translation_de?: string;
}
export interface SentenceOrderExercise extends BaseExercise {
  type: 'sentenceOrder';
  questions: SentenceOrderQuestion[];
}

export interface MatchPair {
  id: number;
  text: string;
  translation_de: string;
}
export interface MatchPairsExercise extends BaseExercise {
  type: 'matchPairs';
  sentenceStarts: MatchPair[];
  relativeClauses: MatchPair[];
}

export interface IdentifyPartQuestion {
  sentence: string;
  prompt: string;
  answer: string;
  explanation?: string;
}
export interface IdentifyPartExercise extends BaseExercise {
  type: 'identifyPart';
  questions: IdentifyPartQuestion[];
}

export interface ClickTheWordQuestion {
  sentence: string;
  prompt: string;
  answerContext?: string;
  answer: string[];
  explanation?: string;
  translation_de?: string;
}
export interface ClickTheWordExercise extends BaseExercise {
  type: 'clickTheWord';
  questions: ClickTheWordQuestion[];
}

// --- Zusammenfassende Typen ---

export type Exercise =
  | FillInTheBlankExercise
  | SentenceOrderExercise
  | MatchPairsExercise
  | ClickTheWordExercise
  | IdentifyPartExercise;

export interface Level {
  level: number;
  uniqueId: string;
  title: string;
  description: string;
  hasTheory: boolean;
  exercises: Exercise[];
}

export interface PronounCategory {
  id: string;
  title: string;
  levels: Level[];
}

export interface PronounTopicData {
  id: 'pronouns';
  title: string;
  categories: PronounCategory[];
}
