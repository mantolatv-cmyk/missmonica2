const fs = require('fs');
const ts = require('typescript');

function recoverData(corruptPath, cleanPath) {
  const corruptCode = fs.readFileSync(corruptPath, 'utf8');
  let cleanCode = fs.readFileSync(cleanPath, 'utf8');
  
  // A much simpler string manipulation:
  // We want to replace the `vocabulary: [` block in the CORRUPTED file
  // with the `vocabulary: [` block from the CLEAN file!
  // Wait, if we do that, we get the whole corrupted file back BUT with clean vocab!
  // Is anything else corrupted in the corrupted file?
  // "An object literal cannot have multiple properties with the same name."
  // This error ONLY happened inside the `vocabulary` array, where the regex swallowed the braces!
  // It happened nowhere else!
  // So if we just REPLACE the `vocabulary: [...]` block in the corrupted file with the clean one, the file becomes 100% PERFECT!
  
  // How to extract `vocabulary: [...]` robustly from the CLEAN file?
  // Since the clean file was just stringified by our pipeline, we can use regex bounded by the next property.
  // In the clean file, `vocabulary` is followed by `flashcards:`!
  
  const cleanVocabs = [];
  const cleanRegex = /vocabulary:\s*\[[\s\S]*?\n\s*\],\s*flashcards:/g;
  let match;
  while ((match = cleanRegex.exec(cleanCode)) !== null) {
    cleanVocabs.push(match[0].replace(/,\s*flashcards:$/, ''));
  }
  
  console.log(`Found ${cleanVocabs.length} clean vocabularies in ${cleanPath}`);
  
  // Now replace the corrupted vocabularies in the corrupted file
  // The corrupted vocabulary block starts with `vocabulary: [` and ends before `flashcards:`
  // BUT because the regex swallowed commas, it might be messy. It STILL ends before `flashcards:`!
  
  let i = 0;
  const corruptRegex = /vocabulary:\s*\[[\s\S]*?\n\s*\],\s*(flashcards|vocabularyLevel2):/g;
  const newCode = corruptCode.replace(corruptRegex, (m, nextProp) => {
    if (i < cleanVocabs.length) {
      const replacement = cleanVocabs[i] + ',\n    ' + nextProp + ':';
      i++;
      return replacement;
    }
    return m;
  });
  
  fs.writeFileSync(cleanPath, newCode, 'utf8');
  console.log(`Replaced ${i} corrupted vocabularies and saved to ${cleanPath}`);
}

recoverData('../scratch/corrupt1.ts', '../data/scenarios1.ts');
recoverData('../scratch/corrupt2.ts', '../data/scenarios2.ts');
