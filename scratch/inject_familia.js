const fs = require('fs');

const extraQuestions1 = {
  "familia": {
    q: `                  {
                    question: "How is the relationship with a 'stepmother', 'stepfather', 'mother-in-law' or 'father-in-law'?",
                    translation: "Como é o relacionamento com uma 'madrasta' (stepmother), 'padrasto' (stepfather), 'sogra' (mother-in-law) ou 'sogro' (father-in-law)?"
                  }`,
  }
};

function injectExtra(content, extraObj) {
  let newContent = content;
  for (const [id, extra] of Object.entries(extraObj)) {
    const scenarioStart = newContent.indexOf(`id: "${id}"`);
    if (scenarioStart === -1) continue;

    const speakingStart = newContent.indexOf("speakingPracticeLevel2", scenarioStart);
    const part2Start = newContent.indexOf("part2:", speakingStart);
    const part2End = newContent.indexOf("]", part2Start);

    newContent = newContent.slice(0, part2End) + ",\n" + extra.q + "\n      " + newContent.slice(part2End);
  }
  return newContent;
}

const c1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');
fs.writeFileSync('../data/scenarios1.ts', injectExtra(c1, extraQuestions1));

console.log("Injection completed");
