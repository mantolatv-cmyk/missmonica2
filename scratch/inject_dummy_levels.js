const fs = require('fs');

function injectDummyLevels(content) {
  // We will find the vocabulary array, then use it to generate dummy flashcards
  // But to be safer, let's just do simple regex replacements or AST.
  // Since the files are large and formatted, we'll use a simple approach:
  // After `flashcards: [ ... ],` we insert `flashcardsA2: [ ... ], flashcardsB1: [ ... ],`
  // After `quiz: [ ... ],` we insert `quizA2: [ ... ], quizB1: [ ... ],`

  // Let's just create 3 dummy flashcards and 2 dummy quiz questions
  const dummyFlashcardsA2 = `
    flashcardsA2: [
      { english: "A2 Example Card 1", portuguese: "Exemplo A2 1", example: "This is an A2 level example." },
      { english: "A2 Example Card 2", portuguese: "Exemplo A2 2", example: "Keep practicing at A2 level." },
      { english: "A2 Example Card 3", portuguese: "Exemplo A2 3", example: "You are doing great." }
    ],`;
    
  const dummyFlashcardsB1 = `
    flashcardsB1: [
      { english: "B1 Example Card 1", portuguese: "Exemplo B1 1", example: "This is a B1 level example, representing intermediate proficiency." },
      { english: "B1 Example Card 2", portuguese: "Exemplo B1 2", example: "Furthermore, B1 requires more complex vocabulary." },
      { english: "B1 Example Card 3", portuguese: "Exemplo B1 3", example: "Therefore, keep up the excellent work." }
    ],`;

  const dummyQuizA2 = `
    quizA2: [
      { question: "A2 Dummy Question 1?", options: ["Option A", "Option B", "Option C"], correctIndex: 0, explanation: "A2 Explanation 1" },
      { question: "A2 Dummy Question 2?", options: ["Option A", "Option B", "Option C"], correctIndex: 1, explanation: "A2 Explanation 2" }
    ],`;

  const dummyQuizB1 = `
    quizB1: [
      { question: "B1 Dummy Question 1 (Intermediate)?", options: ["Option A", "Option B", "Option C"], correctIndex: 0, explanation: "B1 Explanation 1" },
      { question: "B1 Dummy Question 2 (Intermediate)?", options: ["Option A", "Option B", "Option C"], correctIndex: 1, explanation: "B1 Explanation 2" }
    ],`;

  // Inject after flashcards array
  // Find `flashcards: [\n ... \n    ],`
  let newContent = content.replace(/(flashcards:\s*\[[\s\S]*?\n\s{4}\],)/g, '$1\n' + dummyFlashcardsA2 + '\n' + dummyFlashcardsB1);
  
  // Inject after quiz array
  newContent = newContent.replace(/(quiz:\s*\[[\s\S]*?\n\s{4}\],)/g, '$1\n' + dummyQuizA2 + '\n' + dummyQuizB1);

  return newContent;
}

const files = ['./data/scenarios1.ts', './data/scenarios2.ts', './data/reviews.ts'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = injectDummyLevels(content);
  fs.writeFileSync(file, newContent, 'utf8');
  console.log('Injected dummy levels into', file);
}
