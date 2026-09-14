const fs = require('fs');

let content1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');
let content2 = fs.readFileSync('../data/scenarios2.ts', 'utf8');

function cleanString(str) {
  return str
    .replace(/ (have|has|had) been /g, " was ")
    .replace(/ (have|has|had) always been /g, " was always ")
    .replace(/ (have|has|had) never been /g, " was never ")
    .replace(/ (have|has|had) gone /g, " went ")
    .replace(/ (have|has|had) seen /g, " saw ")
    .replace(/ (have|has|had) written /g, " wrote ")
    .replace(/ (have|has|had) sung /g, " sang ")
    .replace(/ (have|has|had) swum /g, " swam ")
    .replace(/ (have|has|had) eaten /g, " ate ")
    .replace(/ (have|has|had) ridden /g, " rode ")
    .replace(/ (have|has|had) driven /g, " drove ")
    .replace(/ (have|has|had) forgotten /g, " forgot ")
    .replace(/ (have|has|had) taken /g, " took ")
    .replace(/ (have|has|had) bitten /g, " bit ")
    .replace(/ (have|has|had) become /g, " became ")
    .replace(/ (have|has|had) (always|never|finally|recently|just|already) /g, " $2 ")
    .replace(/ (have|has|had) /g, " ")
    .replace(/ since /g, " in ")
    .replace(/ for /g, " during ")
    .replace(/ haven't /g, " didn't ")
    .replace(/ hasn't /g, " didn't ")
    .replace(/ hadn't /g, " didn't ")
    .replace(/\s+/g, ' ');
}

function cleanPt(str) {
  return str
    .replace(/ tem sido /g, " foi ")
    .replace(/ têm sido /g, " foram ")
    .replace(/ tem /g, " ")
    .replace(/ têm /g, " ")
    .replace(/ tinham /g, " ")
    .replace(/ tinha /g, " ")
    .replace(/ já /g, " ")
    .replace(/ recentemente /g, " ")
    .replace(/ finalmente /g, " ")
    .replace(/ se tornado /g, " se tornou ")
    .replace(/ ido /g, " foi ")
    .replace(/ visto /g, " viu ")
    .replace(/ escrito /g, " escreveu ")
    .replace(/ cantado /g, " cantou ")
    .replace(/ nadado /g, " nadou ")
    .replace(/ comido /g, " comeu ")
    .replace(/ andado /g, " andou ")
    .replace(/ dirigido /g, " dirigiu ")
    .replace(/ esquecido /g, " esqueceu ")
    .replace(/ tomado /g, " tomou ")
    .replace(/ mordido /g, " mordeu ")
    .replace(/ trabalhado /g, " trabalhou ")
    .replace(/\s+/g, ' ');
}

let count = 0;

const regexB1 = /B1:\s*\{\s*en:\s*[\"']([^"']+)[\"'],[\s\S]*?pt:\s*[\"']([^"']+)[\"']\s*\}/g;

let newContent1 = content1.replace(regexB1, (m, en, pt) => {
  if (en.includes('have ') || en.includes('has ') || en.includes('had ')) {
    count++;
    return `B1: { en: "${cleanString(en)}", pt: "${cleanPt(pt)}" }`;
  }
  return m;
});

let newContent2 = content2.replace(regexB1, (m, en, pt) => {
  if (en.includes('have ') || en.includes('has ') || en.includes('had ')) {
    count++;
    return `B1: { en: "${cleanString(en)}", pt: "${cleanPt(pt)}" }`;
  }
  return m;
});

// Also replace true/false and speaking statements
const regexStatement = /(statement|question):\s*[\"'](.*?)[\"']/g;
newContent1 = newContent1.replace(regexStatement, (m, key, val) => {
  if (val.includes('have ') || val.includes('has ') || val.includes('had ')) {
    count++;
    return `${key}: "${cleanString(val)}"`;
  }
  return m;
});
newContent2 = newContent2.replace(regexStatement, (m, key, val) => {
  if (val.includes('have ') || val.includes('has ') || val.includes('had ')) {
    count++;
    return `${key}: "${cleanString(val)}"`;
  }
  return m;
});

fs.writeFileSync('../data/scenarios1.ts', newContent1);
fs.writeFileSync('../data/scenarios2.ts', newContent2);

console.log('Replaced', count, 'items!');
