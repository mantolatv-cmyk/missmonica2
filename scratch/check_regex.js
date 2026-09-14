const fs = require('fs');
let content = fs.readFileSync('../data/scenarios1.ts', 'utf8');
const startIndex = content.indexOf('id: "familia"');
const nextId = content.indexOf('id: "amigos"');
const section = content.slice(startIndex, nextId);
const tfRegex = /trueOrFalse:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;
console.log('TF:', tfRegex.test(section));

const spRegex = /speakingPractice:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;
console.log('SP:', spRegex.test(section));
