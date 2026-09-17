const fs = require('fs');

function extract() {
  const files = ['data/scenarios1.ts', 'data/scenarios2.ts'];
  const results = [];
  
  files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const regex = /question:\s*"Can you use \\?"(.*?)\\?" in a sentence in the past simple\?"/g;
    let m;
    while((m = regex.exec(content)) !== null) {
      results.push(m[1]);
    }
  });
  
  fs.writeFileSync('scratch/words_to_fix.json', JSON.stringify(results, null, 2));
  console.log('Total found:', results.length);
}

extract();
