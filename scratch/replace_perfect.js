const fs = require('fs');
let content1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');
let content2 = fs.readFileSync('../data/scenarios2.ts', 'utf8');

const regex = /B1:\s*\{\s*en:\s*[\"'](.*?)[\"'],\s*pt:\s*[\"'](.*?)[\"']\s*\}/g;
let match;
let count = 0;

function toPastSimple(en, pt) {
  let newEn = en
    .replace(/ has always been /g, " was always ")
    .replace(/ have always been /g, " were always ")
    .replace(/ has been /g, " was ")
    .replace(/ have been /g, " were ")
    .replace(/ has /g, " ")
    .replace(/ have /g, " ")
    .replace(/ haven't hung /g, " didn't hang ")
    .replace(/ hadn't /g, " didn't ")
    .replace(/ already /g, " ")
    .replace(/ just /g, " ")
    .replace(/ recently /g, " ")
    .replace(/ since /g, " in ")
    .replace(/ for /g, " during ")
    .replace(/ working /g, " worked ")
    .replace(/ studying /g, " studied ")
    .replace(/ living /g, " lived ")
    .replace(/ growing /g, " grew ")
    .replace(/ becoming /g, " became ");
    
  let newPt = pt
    .replace(/ tem sido /g, " foi ")
    .replace(/ têm sido /g, " foram ")
    .replace(/ tem /g, " ")
    .replace(/ têm /g, " ")
    .replace(/ trabalhado /g, " trabalhou ")
    .replace(/ estudado /g, " estudou ")
    .replace(/ vivido /g, " viveu ")
    .replace(/ morado /g, " morou ")
    .replace(/ crescido /g, " cresceu ")
    .replace(/ se tornado /g, " se tornou ")
    .replace(/ já /g, " ")
    .replace(/ recentemente /g, " ")
    .replace(/ acabado de /g, " ");

  return { en: newEn.trim().replace(/\s+/g, ' '), pt: newPt.trim().replace(/\s+/g, ' ') };
}

let newContent1 = content1.replace(regex, (m, en, pt) => {
  if (en.includes('have ') || en.includes('has ') || en.includes('had ')) {
    count++;
    let transformed = toPastSimple(en, pt);
    // fallback for regular verbs
    if (transformed.en === en.replace(/ (have|has|had) /, ' ')) {
      // it just removed "have", assuming the next word was past participle it now acts as past simple
    }
    return `B1: { en: "${transformed.en}", pt: "${transformed.pt}" }`;
  }
  return m;
});

let newContent2 = content2.replace(regex, (m, en, pt) => {
  if (en.includes('have ') || en.includes('has ') || en.includes('had ')) {
    count++;
    let transformed = toPastSimple(en, pt);
    return `B1: { en: "${transformed.en}", pt: "${transformed.pt}" }`;
  }
  return m;
});

fs.writeFileSync('../data/scenarios1.ts', newContent1);
fs.writeFileSync('../data/scenarios2.ts', newContent2);

console.log('Replaced', count, 'items!');
