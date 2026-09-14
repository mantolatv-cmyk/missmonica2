require('ts-node').register({
  compilerOptions: {
    module: 'commonjs'
  }
});

const fs = require('fs');
const { scenarios1 } = require('../data/scenarios1');
const { scenarios2 } = require('../data/scenarios2');

const allScenarios = [...scenarios1, ...scenarios2];

// revisao-1: index 0 to 4
// revisao-2: index 5 to 9
// revisao-3: index 10 to 14

function generateReviewVocab(scenariosChunk) {
  const newVocab = [];
  
  // We need 20 A1/A2 words and 20 B1 words.
  // There are 5 scenarios in a chunk. So we pick 4 A1/A2 words and 4 B1 words from each.
  for (const scenario of scenariosChunk) {
    const a1a2Words = scenario.vocabulary.filter(v => v.levels && v.levels.A1);
    const b1Words = scenario.vocabulary.filter(v => v.levels && v.levels.B1 && !v.levels.A1);
    
    // Pick 4 random a1a2
    const pickedA1A2 = [...a1a2Words].sort(() => 0.5 - Math.random()).slice(0, 4);
    // Pick 4 random b1
    const pickedB1 = [...b1Words].sort(() => 0.5 - Math.random()).slice(0, 4);
    
    newVocab.push(...pickedA1A2, ...pickedB1);
  }
  
  // shuffle them slightly
  return newVocab.sort(() => 0.5 - Math.random());
}

const rev1Vocab = generateReviewVocab(allScenarios.slice(0, 5));
const rev2Vocab = generateReviewVocab(allScenarios.slice(5, 10));
const rev3Vocab = generateReviewVocab(allScenarios.slice(10, 15));

function formatVocabArray(vocabList) {
  let str = '[\n';
  for (const v of vocabList) {
    const levelsStr = [];
    if (v.levels.A1) levelsStr.push(`A1: { en: ${JSON.stringify(v.levels.A1.en)}, pt: ${JSON.stringify(v.levels.A1.pt)} }`);
    if (v.levels.A2) levelsStr.push(`A2: { en: ${JSON.stringify(v.levels.A2.en)}, pt: ${JSON.stringify(v.levels.A2.pt)} }`);
    if (v.levels.B1) levelsStr.push(`B1: { en: ${JSON.stringify(v.levels.B1.en)}, pt: ${JSON.stringify(v.levels.B1.pt)} }`);
    
    str += `      { english: ${JSON.stringify(v.english)}, portuguese: ${JSON.stringify(v.portuguese)}, levels: { ${levelsStr.join(', ')} } },\n`;
  }
  str = str.replace(/,\n$/, '\n');
  str += '    ]';
  return str;
}

let reviewsContent = fs.readFileSync('./data/reviews.ts', 'utf8');

const rev1Replacement = formatVocabArray(rev1Vocab);
const rev2Replacement = formatVocabArray(rev2Vocab);
const rev3Replacement = formatVocabArray(rev3Vocab);

let reviewIndex = 0;
reviewsContent = reviewsContent.replace(/vocabulary:\s*\[[\s\S]*?\](?=\s*,\s*flashcards)/g, (match) => {
  if (reviewIndex === 0) {
    reviewIndex++;
    return `vocabulary: ${rev1Replacement}`;
  } else if (reviewIndex === 1) {
    reviewIndex++;
    return `vocabulary: ${rev2Replacement}`;
  } else if (reviewIndex === 2) {
    reviewIndex++;
    return `vocabulary: ${rev3Replacement}`;
  }
  return match;
});

fs.writeFileSync('./data/reviews.ts', reviewsContent, 'utf8');
console.log('Successfully updated reviews.ts with leveled vocabulary.');
