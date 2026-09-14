const fs = require('fs');

function findDuplicates(file) {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /(trueOrFalseLevel2|speakingPracticeLevel2|buildSentence)\s*:\s*\{/g;
  let match;
  let blocks = [];
  while ((match = regex.exec(content)) !== null) {
    const key = match[1];
    const startIdx = match.index;
    const startBraceIdx = startIdx + match[0].length - 1;
    
    let depth = 1;
    let i = startBraceIdx + 1;
    while (i < content.length && depth > 0) {
      if (content[i] === '{') depth++;
      else if (content[i] === '}') depth--;
      i++;
    }
    blocks.push({
      key,
      startIdx,
      endIdx: i,
      content: content.substring(startIdx, i)
    });
  }
  return blocks;
}

const b2 = findDuplicates('../data/scenarios2.ts');
const b1 = findDuplicates('../data/scenarios1.ts');

console.log("SCENARIOS 2:");
let currentType = '';
b2.forEach((b) => {
  console.log(`Key: ${b.key}, length: ${b.content.length}, preview: ${b.content.substring(0, 80).replace(/\n/g, ' ')}`);
});
