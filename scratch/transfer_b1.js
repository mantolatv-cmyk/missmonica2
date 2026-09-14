const fs = require('fs');

function transferB1(corruptPath, cleanPath) {
  const corrupt = fs.readFileSync(corruptPath, 'utf8');
  let clean = fs.readFileSync(cleanPath, 'utf8');

  // We need to make sure we map them correctly to the right word!
  // Extract the word and the B1 sentence from the corrupt file
  const wordB1Regex = /english:\s*(["'`])(.*?)\1.*?B1:\s*\{\s*en:\s*(["'`])(.*?)\3,\s*pt:\s*(["'`])(.*?)\5\s*\}/gs;
  
  let wordMatches = [];
  let match;
  while ((match = wordB1Regex.exec(corrupt)) !== null) {
    wordMatches.push({
      word: match[2],
      en: match[4],
      pt: match[6]
    });
  }
  
  console.log(`Found ${wordMatches.length} words with B1 in ${corruptPath}`);

  // Now replace in clean file
  let replacedCount = 0;
  for (const item of wordMatches) {
    const escapedWord = item.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // In the clean file, inject B1 right after A2
    const searchRegex = new RegExp(`(english:\\s*["'\`]${escapedWord}["'\`][\\s\\S]{0,300}?A2:\\s*\\{[\\s\\S]*?\\})`, 'g');
    
    clean = clean.replace(searchRegex, (m, p1) => {
      replacedCount++;
      return `${p1},\n                  B1: { en: "${item.en.replace(/"/g, '\\"')}", pt: "${item.pt.replace(/"/g, '\\"')}" }`;
    });
  }

  console.log(`Updated ${replacedCount} B1 items in ${cleanPath}`);
  fs.writeFileSync(cleanPath, clean, 'utf8');
}

transferB1('corrupt1.ts', '../data/scenarios1.ts');
transferB1('corrupt2.ts', '../data/scenarios2.ts');
