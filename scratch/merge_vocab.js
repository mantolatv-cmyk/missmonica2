const fs = require('fs');

function mergeCleanVocabulary(corruptPath, cleanPath) {
  let corrupt = fs.readFileSync(corruptPath, 'utf8');
  const clean = fs.readFileSync(cleanPath, 'utf8');

  // We want to extract each scenario's vocabulary from `clean`
  // and inject it into `corrupt`.
  // The easiest way is to match from `vocabulary: [` to `],\n    flashcards:` or `],\n    quiz:`
  
  const vocabRegex = /vocabulary:\s*\[[\s\S]*?\n\s*\],(?=\n\s*(flashcards|vocabularyLevel2|quiz))/g;
  
  const cleanVocabs = [];
  let match;
  while ((match = vocabRegex.exec(clean)) !== null) {
    cleanVocabs.push(match[0]);
  }
  
  console.log(`Extracted ${cleanVocabs.length} vocabulary blocks from ${cleanPath}`);

  let i = 0;
  const merged = corrupt.replace(vocabRegex, (m) => {
    if (i < cleanVocabs.length) {
      const replacement = cleanVocabs[i];
      i++;
      return replacement;
    }
    return m;
  });

  if (i !== cleanVocabs.length) {
    console.log(`WARNING: Mismatched vocabulary count in ${corruptPath}. Replaced ${i}, expected ${cleanVocabs.length}`);
  }

  // write back the merged file as the final result!
  fs.writeFileSync(cleanPath, merged, 'utf8');
  console.log(`Merged ${i} clean vocabularies into ${cleanPath}`);
}

mergeCleanVocabulary('../scratch/corrupt1.ts', '../data/scenarios1.ts');
mergeCleanVocabulary('../scratch/corrupt2.ts', '../data/scenarios2.ts');
