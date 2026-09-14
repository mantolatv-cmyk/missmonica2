const fs = require('fs');

function findDuplicates(file) {
  const content = fs.readFileSync(file, 'utf8');
  const idRegex = /id:\s*"([^"]+)"/g;
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    const id = match[1];
    let nextId = content.indexOf('id: "', match.index + 10);
    if (nextId === -1) nextId = content.length;
    const section = content.slice(match.index, nextId);
    
    const vocabMatch = section.match(/vocabulary:\s*\[([\s\S]*?)\]\s*,/);
    if (vocabMatch) {
      const vocabText = vocabMatch[1];
      const enRegex = /english:\s*"([^"]+)"/g;
      let enMatch;
      const seen = new Set();
      const duplicates = [];
      while ((enMatch = enRegex.exec(vocabText)) !== null) {
        const word = enMatch[1].trim().toLowerCase();
        if (seen.has(word)) {
          duplicates.push(enMatch[1]);
        }
        seen.add(word);
      }
      if (duplicates.length > 0) {
        console.log(`[${file}] Scenario '${id}' has duplicates:`, duplicates);
      }
    }
  }
}

findDuplicates('./data/scenarios1.ts');
findDuplicates('./data/scenarios2.ts');
