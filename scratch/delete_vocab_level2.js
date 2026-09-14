const fs = require('fs');

function deleteVocabLevel2(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove `vocabularyLevel2: [ ... ],`
  // We use a safe regex that finds `vocabularyLevel2:` and matches up to the closing `],`
  // that is followed by `quizLevel2:` or `trueOrFalseLevel2:` or `flashcards:`
  const regex = /\s*vocabularyLevel2:\s*\[[\s\S]*?\],(?=\s*(quizLevel2|trueOrFalseLevel2|flashcards|buildSentence):)/g;
  
  content = content.replace(regex, '');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Deleted vocabularyLevel2 from', file);
}

deleteVocabLevel2('../data/scenarios1.ts');
deleteVocabLevel2('../data/scenarios2.ts');
