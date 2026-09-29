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
    const level2Words = words.slice(20);
    const mid = Math.ceil(level2Words.length / 2);
    console.log(title + ' (Level 2):');
    console.log('Part 1:', level2Words.slice(0, mid).join(', '));
    console.log('Part 2:', level2Words.slice(mid).join(', '));
    console.log('---');
  }
});
