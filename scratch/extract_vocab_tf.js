const fs = require('fs');

function extractVocab(file) {
  const content = fs.readFileSync(file, 'utf8');
  const scenarios = [];
  
  const idRegex = /id:\s*"([^"]+)"/g;
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    const id = match[1];
    if (id === 'familia' || id === 'amigos' || id === 'corpo' || id === 'casa' || id === 'casa2' || id === 'hobbies' || id === 'esportes') continue;
    
    let nextId = content.indexOf('id: "', match.index + 10);
    if (nextId === -1) nextId = content.length;
    const section = content.slice(match.index, nextId);
    
    const vocabMatch = section.match(/vocabulary:\s*\[([\s\S]*?)\]\s*,/);
    if (vocabMatch) {
      const vocabText = vocabMatch[1];
      const enRegex = /english:\s*"([^"]+)"/g;
      let enMatch;
      const words = [];
      while ((enMatch = enRegex.exec(vocabText)) !== null) {
        words.push(enMatch[1]);
      }
      scenarios.push({ id, words: words.slice(0, 20) });
    }
  }
  return scenarios;
}

const s1 = extractVocab('./data/scenarios1.ts');
const s2 = extractVocab('./data/scenarios2.ts');
console.log(JSON.stringify(s1.concat(s2), null, 2));
