const fs = require('fs');

function extractA1(file) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/A1:\s*\{\s*en:\s*["']([^"']+)["'],\s*pt:\s*["']([^"']+)["']\s*\}/g)];
  
  const suspicious = [];
  
  for (const m of matches) {
    const en = m[1];
    const pt = m[2];
    
    // Check for Continuous, Past, Future
    if (
      /\b(?:am|is|are|was|were)\b\s+\w+ing\b/i.test(en) || // continuous
      /\b(?:will|shall|would|could|should)\b/i.test(en) || // future/modals
      /\b(?:have|has|had)\b\s+(?!to\b)\w+(?:ed|en|own|ought|ung)\b/i.test(en) || // perfect (approximate)
      /\b(?:went|did|saw|made|bought|took|came|knew|got|found|gave|thought|told|became|left|felt|put|brought|began|kept|held|wrote|stood|heard|let|meant|set|met|ran|paid|sat|spoke|lay|led|read|grew|lost|fell|sent|built|understood|drew|broke|spent|cut|rose|drove|bought|wore|chose)\b/i.test(en) || // common irregular past
      /\b\w+ed\b/i.test(en) || // regular past
      /\bgoing to\b/i.test(en) ||
      /\b'll\b/i.test(en) ||
      /\b'd\b/i.test(en)
    ) {
        // filter out false positives for "ed" like "need", "bed", "red", "tired"
        if (/\b(?:need|bed|red|tired|bored|hundred|seed|feed)\b/i.test(en) && !/\b(?:am|is|are|was|were)\b\s+\w+ing\b/i.test(en) && !/\b(?:will|shall|would|could|should)\b/i.test(en)) {
          if (!/\b\w{3,}ed\b/.test(en.replace(/\b(?:need|tired|bored|hundred|seed|feed)\b/gi, ''))) {
            continue;
          }
        }

        suspicious.push({ en, pt });
    }
  }
  
  return suspicious;
}

const s1 = extractA1('data/scenarios1.ts');
const s2 = extractA1('data/scenarios2.ts');
const all = [...s1, ...s2];

console.log(JSON.stringify(all, null, 2));
console.log(`Total suspicious A1 sentences: ${all.length}`);
