const fs = require('fs');
const { scenarios1 } = require('../data/scenarios1.js');
const { scenarios2 } = require('../data/scenarios2.js');

function generateBuildSentenceText(scen) {
  let level1 = [];
  let level2 = [];
  
  for (let i = 0; i < 6; i++) {
    const v = scen.vocabulary[i];
    if (!v) continue;
    
    // Fallback logic for A1/A2 and B1
    const l1En = v.examples?.A2?.en || v.examples?.A1?.en || v.english;
    const l1Pt = v.examples?.A2?.pt || v.examples?.A1?.pt || v.portuguese;
    const l2En = v.examples?.B1?.en || v.english;
    const l2Pt = v.examples?.B1?.pt || v.portuguese;
    
    level1.push(`        { english: "${l1En.replace(/"/g, '\\"')}", portuguese: "${l1Pt.replace(/"/g, '\\"')}" }`);
    level2.push(`        { english: "${l2En.replace(/"/g, '\\"')}", portuguese: "${l2Pt.replace(/"/g, '\\"')}" }`);
  }
  
  return `    buildSentence: {\n      level1: [\n${level1.join(',\n')}\n      ],\n      level2: [\n${level2.join(',\n')}\n      ]\n    }`;
}

let ts1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');
let ts2 = fs.readFileSync('../data/scenarios2.ts', 'utf8');

scenarios1.forEach(scen => {
  const replacement = generateBuildSentenceText(scen);
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

console.log("Injected buildSentence from vocabulary examples!");
