const fs = require('fs');
const content1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');
const content2 = fs.readFileSync('../data/scenarios2.ts', 'utf8');

const regex = /id:\s*"(.*?)"/g;
let match;
while ((match = regex.exec(content1)) !== null) {
  console.log('S1:', match[1]);
}
while ((match = regex.exec(content2)) !== null) {
  console.log('S2:', match[1]);
}
