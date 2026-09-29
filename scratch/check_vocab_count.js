const fs = require('fs');
['scenarios1.ts', 'scenarios2.ts'].forEach(file => {
  const content = fs.readFileSync('../data/' + file, 'utf8');
  const regex = /title:\s*['"]([^'"]+)['"][\s\S]*?vocabulary:\s*\[([\s\S]*?)\]\s*,\s*(?:flashcards|quiz)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const title = match[1];
    const vocabBlock = match[2];
    const words = [];
    const wRegex = /english:\s*['"]([^'"]+)['"]/g;
    let wMatch;
    while ((wMatch = wRegex.exec(vocabBlock)) !== null) {
      words.push(wMatch[1]);
    }
    console.log(title + ': ' + words.length + ' words');
    if (words.length > 20) {
      console.log('Words 21-40: ', words.slice(20, 40).join(', '));
    }
  }
});
