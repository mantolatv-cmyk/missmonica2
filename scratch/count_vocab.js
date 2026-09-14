const fs = require('fs');
let content = fs.readFileSync('../data/scenarios1.ts', 'utf8');
const startIndex = content.indexOf('id: "familia"');
const nextId = content.indexOf('id: "amigos"');
const section = content.slice(startIndex, nextId);
const vRegex = /vocabulary:\s*\[([\s\S]*?)\]/g;
const v2Regex = /vocabularyLevel2:\s*\[([\s\S]*?)\]/g;

console.log('Vocab 1:', (section.match(vRegex) || [''])[0].split('english:').length - 1);
console.log('Vocab 2:', (section.match(v2Regex) || [''])[0].split('english:').length - 1);
