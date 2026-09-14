const fs = require('fs');
const path = require('path');

// We will use ts-node to parse the ts files
require('ts-node').register({ compilerOptions: { module: 'commonjs' } });

const { scenarios1 } = require('../data/scenarios1');
const { scenarios2 } = require('../data/scenarios2');
const { reviewScenarios } = require('../data/reviews');

function shuffle(array) {
  return [...array].sort(() => 0.5 - Math.random());
}

function generateFlashcards(vocabItems, level) {
  const cards = [];
  for (const v of vocabItems) {
    if (v.levels && v.levels[level]) {
      cards.push({
        english: v.levels[level].en,
        portuguese: v.levels[level].pt,
        example: `Palavra-chave: ${v.english}`
      });
    }
  }
  return shuffle(cards).slice(0, 20);
}

function generateQuiz(vocabItems, level) {
  const questions = [];
  const validVocab = shuffle(vocabItems.filter(v => v.levels && v.levels[level]));
  
  for (let i = 0; i < Math.min(10, validVocab.length); i++) {
    const v = validVocab[i];
    const sentence = v.levels[level].en;
    
    const type = Math.random();
    let qText = "";
    let correctOpt = "";
    let options = [];

    if (type < 0.6) {
      // Fill in the blank
      // Try to find the english word in the sentence
      const mainWord = v.english.split(' / ')[0].trim();
      const regex = new RegExp(`\\b${mainWord}\\b`, 'i');
      if (regex.test(sentence)) {
        const blanked = sentence.replace(regex, '______');
        qText = `Complete a frase: "${blanked}"`;
        correctOpt = v.english;
        options = [correctOpt];
        const otherVocabs = shuffle(vocabItems.filter(other => other.english !== v.english)).slice(0, 3);
        otherVocabs.forEach(other => options.push(other.english));
      } else {
        // Fallback to meaning of sentence
        qText = `O que significa a frase: "${sentence}"?`;
        correctOpt = v.levels[level].pt;
        options = [correctOpt];
        const otherVocabs = shuffle(vocabItems.filter(other => other.english !== v.english && other.levels && other.levels[level])).slice(0, 3);
        otherVocabs.forEach(other => options.push(other.levels[level].pt));
      }
    } else {
      // Translation of sentence
      qText = `Traduza a frase: "${v.levels[level].pt}"`;
      correctOpt = sentence;
      options = [correctOpt];
      const otherVocabs = shuffle(vocabItems.filter(other => other.english !== v.english && other.levels && other.levels[level])).slice(0, 3);
      otherVocabs.forEach(other => options.push(other.levels[level].en));
    }

    while (options.length < 4) {
      options.push("Nenhuma das alternativas");
    }

    const shuffledOptions = shuffle(options.slice(0, 4));
    const correctIndex = shuffledOptions.indexOf(correctOpt);

    questions.push({
      question: qText,
      options: shuffledOptions,
      correctIndex: correctIndex,
      explanation: `A frase correta é "${sentence}", que significa "${v.levels[level].pt}".`
    });
  }
  
  return questions;
}

function processScenarios(scenarios, fileStr) {
  let fileContent = fs.readFileSync(fileStr, 'utf8');

  // Strip existing dummy/injected arrays to prevent duplication
  fileContent = fileContent.replace(/flashcardsA2:\s*\[[\s\S]*?\n\s{4,6}\],\n*/g, '');
  fileContent = fileContent.replace(/flashcardsB1:\s*\[[\s\S]*?\n\s{4,6}\],\n*/g, '');
  fileContent = fileContent.replace(/quizA2:\s*\[[\s\S]*?\n\s{4,6}\],\n*/g, '');
  fileContent = fileContent.replace(/quizB1:\s*\[[\s\S]*?\n\s{4,6}\],\n*/g, '');

  for (const s of scenarios) {
    if (!s.vocabulary || s.vocabulary.length === 0) continue;

    const fA2 = generateFlashcards(s.vocabulary, 'A2');
    const fB1 = generateFlashcards(s.vocabulary, 'B1');
    const qA2 = generateQuiz(s.vocabulary, 'A2');
    const qB1 = generateQuiz(s.vocabulary, 'B1');

    const fA2Str = `flashcardsA2: ${JSON.stringify(fA2, null, 4).replace(/\n/g, '\n      ')},`;
    const fB1Str = `flashcardsB1: ${JSON.stringify(fB1, null, 4).replace(/\n/g, '\n      ')},`;
    const qA2Str = `quizA2: ${JSON.stringify(qA2, null, 4).replace(/\n/g, '\n      ')},`;
    const qB1Str = `quizB1: ${JSON.stringify(qB1, null, 4).replace(/\n/g, '\n      ')},`;

    // Regex to insert them after vocabulary array
    const vocabRegex = new RegExp(`(id:\\s*["']${s.id}["'][\\s\\S]*?vocabulary:\\s*\\[[\\s\\S]*?\\n\\s*\\],)`);
    
    fileContent = fileContent.replace(vocabRegex, `$1\n      ${fA2Str}\n      ${fB1Str}\n      ${qA2Str}\n      ${qB1Str}`);
  }

  fs.writeFileSync(fileStr, fileContent, 'utf8');
  console.log(`Updated ${fileStr}`);
}

processScenarios(scenarios1, './data/scenarios1.ts');
processScenarios(scenarios2, './data/scenarios2.ts');
processScenarios(reviewScenarios, './data/reviews.ts');
