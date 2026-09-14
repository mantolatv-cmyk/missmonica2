const fs = require('fs');

function count(file) {
  const content = fs.readFileSync(file, 'utf8');
  const scenarios = content.match(/id:\s*['"][^'"]+['"][\s\S]*?vocabulary:\s*\[[\s\S]*?(?=\],\s*(?:flashcards|quiz|dialogue|trueOrFalse|speakingPractice|usefulExpressions))/g) || [];
  
  for (const s of scenarios) {
    const id = s.match(/id:\s*['"]([^'"]+)['"]/)[1];
    const a1 = (s.match(/A1:\s*\{/g) || []).length;
    const a2 = (s.match(/A2:\s*\{/g) || []).length;
    const b1 = (s.match(/B1:\s*\{/g) || []).length;
    console.log(`${id}: A1=${a1}, A2=${a2}, B1=${b1}`);
  }
}

count('data/scenarios1.ts');
count('data/scenarios2.ts');
