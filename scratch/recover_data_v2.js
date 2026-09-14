const fs = require('fs');

function extractBlocks(code) {
  const blocks = [];
  const regex = /vocabulary:\s*\[[\s\S]*?\],(?=\s*(dialogue|vocabularyLevel2|quizLevel2|flashcards|quiz):)/g;
  let match;
  while ((match = regex.exec(code)) !== null) {
    blocks.push(match[0]);
  }
  return blocks;
}

function recoverData(corruptPath, cleanPath, outPath) {
  const corruptCode = fs.readFileSync(corruptPath, 'utf8');
  const cleanCode = fs.readFileSync(cleanPath, 'utf8');
  
  const cleanVocabs = extractBlocks(cleanCode);
  console.log(`Found ${cleanVocabs.length} clean vocabularies in ${cleanPath}`);
  
  let i = 0;
  const regex = /vocabulary:\s*\[[\s\S]*?\],(?=\s*(dialogue|vocabularyLevel2|quizLevel2|flashcards|quiz):)/g;
  const result = corruptCode.replace(regex, (m) => {
    if (i < cleanVocabs.length) {
      const replacement = cleanVocabs[i];
      i++;
      return replacement;
    }
    return m;
  });
  
  fs.writeFileSync(outPath, result, 'utf8');
  console.log(`Replaced ${i} corrupted vocabularies and saved to ${outPath}`);
}

recoverData('../scratch/corrupt1.ts', '../data/scenarios1.ts', '../data/scenarios1.ts');
recoverData('../scratch/corrupt2.ts', '../data/scenarios2.ts', '../data/scenarios2.ts');
