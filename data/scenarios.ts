import { scenarios1 } from "./scenarios1";
import { scenarios2 } from "./scenarios2";
import type { Scenario, VocabularyItem, FlashcardItem, QuizQuestion, DialogueLine } from "./types";

export const scenarios: Scenario[] = [...scenarios1, ...scenarios2];

export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find((s) => s.id === id);
}

export type { Scenario, VocabularyItem, FlashcardItem, QuizQuestion, DialogueLine };
