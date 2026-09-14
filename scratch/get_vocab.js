const fs = require('fs');
let content = fs.readFileSync('../data/scenarios1.ts', 'utf8');
const startIndex = content.indexOf('vocabulary:');
const endIndex = content.indexOf('flashcards:');
const vocabStr = content.slice(startIndex, endIndex);

const regex = /english:\s*"(.*?)"/g;
let match;
let i = 1;
while ((match = regex.exec(vocabStr)) !== null) {
  console.log(i + ': ' + match[1]);
  i++;
  if (i > 15) break;
}
