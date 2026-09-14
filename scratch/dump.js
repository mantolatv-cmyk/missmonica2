const fs = require('fs');
const content = fs.readFileSync('../data/scenarios1.ts', 'utf8');
const startIndex = content.indexOf('id: "familia"');
const nextId = content.indexOf('id: "amigos"');
const section = content.slice(startIndex, nextId);
console.log(section);
