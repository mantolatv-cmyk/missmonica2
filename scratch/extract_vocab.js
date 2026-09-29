const fs = require('fs');
['scenarios1.ts', 'scenarios2.ts'].forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Simple regex to find title and vocabulary blocks
  const titleRegex = /title:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = titleRegex.exec(content)) !== null) {
    const title = match[1];
    const startIndex = match.index;
    
    // Find the vocabulary array
    const vocabIndex = content.indexOf('vocabulary:', startIndex);
    if (vocabIndex === -1) continue;
    
    // Find the end of vocabulary array, assuming next field is flashcards or something
    const endVocabIndex = content.indexOf('flashcards', vocabIndex);
    if (endVocabIndex === -1) continue;
    
    const vocabBlock = content.substring(vocabIndex, endVocabIndex);
    
    const words = [];
    const wRegex = /english:\s*['"]([^'"]+)['"]/g;
    let wMatch;
    while ((wMatch = wRegex.exec(vocabBlock)) !== null) {
      words.push(wMatch[1]);
    }
    
    console.log(title + ':');
    console.log('Part 1:', words.slice(0, 10).join(', '));
    console.log('Part 2:', words.slice(10, 20).join(', '));
    console.log('---');
  }
});
