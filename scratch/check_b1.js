const fs = require('fs');

function checkFile(filePath) {
  console.log(`Checking ${filePath}:`);
  const content = fs.readFileSync(filePath, 'utf8');
  // Match items that ONLY have B1 in levels
  const regex = /\{\s*english:\s*["']([^"']+)["'][^}]*?levels:\s*\{\s*B1:\s*\{/g;
  let match;
  let count = 0;
  while ((match = regex.exec(content)) !== null) {
    console.log(match[1]);
    count++;
  }
  console.log(`Total: ${count}\n`);
}

checkFile('data/scenarios1.ts');
checkFile('data/scenarios2.ts');
