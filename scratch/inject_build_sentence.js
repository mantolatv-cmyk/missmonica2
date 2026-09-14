const fs = require('fs');
const { scenarios1 } = require('../data/scenarios1.js');
const { scenarios2 } = require('../data/scenarios2.js');

function generateBuildSentenceText(scenario) {
  const flashcards = scenario.flashcards;
  
  let level1 = [];
  let level2 = [];
  
  for (let i = 0; i < 6; i++) {
    const fc = flashcards[i];
    if (!fc || !fc.levels) continue;
    
    level1.push(`        { english: "${fc.levels.A1?.en || fc.levels.A2?.en || fc.english}", portuguese: "${fc.levels.A1?.pt || fc.levels.A2?.pt || fc.portuguese}" }`);
    level2.push(`        { english: "${fc.levels.B1?.en || fc.english}", portuguese: "${fc.levels.B1?.pt || fc.portuguese}" }`);
  }
  
  return `    buildSentence: {\n      level1: [\n${level1.join(',\n')}\n      ],\n      level2: [\n${level2.join(',\n')}\n      ]\n    }`;
}

let ts1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');
let ts2 = fs.readFileSync('../data/scenarios2.ts', 'utf8');

scenarios1.forEach(scen => {
  const replacement = generateBuildSentenceText(scen);
  // find the end of this scenario in ts1
  // we can search for the end of speakingPracticeLevel2 since it's the last item before the closing }
  const regex = new RegExp(`(id:\\s*["'\`]${scen.id}["'\`][\\s\\S]*?speakingPracticeLevel2:\\s*\\{[\\s\\S]*?part2:\\s*\\[[\\s\\S]*?\\]\\s*\\})`);
  ts1 = ts1.replace(regex, `$1,\n${replacement}`);
});

scenarios2.forEach(scen => {
  const replacement = generateBuildSentenceText(scen);
  const regex = new RegExp(`(id:\\s*["'\`]${scen.id}["'\`][\\s\\S]*?speakingPracticeLevel2:\\s*\\{[\\s\\S]*?part2:\\s*\\[[\\s\\S]*?\\]\\s*\\})`);
  ts2 = ts2.replace(regex, `$1,\n${replacement}`);
});

fs.writeFileSync('../data/scenarios1.ts', ts1);
fs.writeFileSync('../data/scenarios2.ts', ts2);

console.log("Injected buildSentence into all scenarios!");
