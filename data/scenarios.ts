import { scenarios1 } from "./scenarios1";
import { scenarios2 } from "./scenarios2";
import { reviewScenarios } from "./reviews";
import type { Scenario, VocabularyItem, FlashcardItem, QuizQuestion, DialogueLine, UsefulExpression } from "./types";

export const scenarios: Scenario[] = [
  ...scenarios1.slice(0, 5),
  reviewScenarios[0],
  ...scenarios1.slice(5),
  ...scenarios2.slice(0, 2),
  reviewScenarios[1],
  ...scenarios2.slice(2),
  reviewScenarios[2]
];

export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find((s) => s.id === id);
}

export type { Scenario, VocabularyItem, FlashcardItem, QuizQuestion, DialogueLine, UsefulExpression };
