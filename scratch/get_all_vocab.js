const fs = require('fs');

const s1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');
const s2 = fs.readFileSync('../data/scenarios2.ts', 'utf8');

function extractVocab(content) {
  const ids = [];
  const regex = /id:\s*"(.*?)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    ids.push(match[1]);
  }
  
  const results = {};
  for(let id of ids) {
    const startIndex = content.indexOf('id: "' + id + '"');
    let nextId = content.indexOf('id: "', startIndex + 10);
    if(nextId === -1) nextId = content.length;
    
    const section = content.slice(startIndex, nextId);
    
    const vStart = section.indexOf('vocabulary:');
    const vEnd = section.indexOf('flashcards:');
    const vocabStr = section.slice(vStart, vEnd);
    
    const vRegex = /english:\s*"(.*?)"/g;
    let vMatch;
    const words = [];
    while ((vMatch = vRegex.exec(vocabStr)) !== null) {
      words.push(vMatch[1]);
    }
    results[id] = {
      level1: words.slice(0, 10),
      level2: words.slice(10, 15)
    };
  }
  return results;
}

const all = {...extractVocab(s1), ...extractVocab(s2)};
fs.writeFileSync('all_vocab.json', JSON.stringify(all, null, 2));
console.log('Saved to all_vocab.json');
