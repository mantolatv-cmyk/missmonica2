const fs = require('fs');
const c = fs.readFileSync('./data/scenarios2.ts', 'utf8');
const start = c.indexOf('id: "compras"');
const end = c.indexOf('id: "profissoes"');
const sec = c.slice(start, end);
const m = sec.match(/english:\s*"[^"]+"/g);
console.log(m.length);
