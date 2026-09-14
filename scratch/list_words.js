const fs = require('fs');

function listWords(file, scenarioId) {
  const content = fs.readFileSync(file, 'utf8');
  const scenarioRegex = new RegExp(`id:\\s*['"]${scenarioId}['"][\\s\\S]*?vocabulary:\\s*\\[([\\s\\S]*?)\\](?=\\s*,\\s*(?:flashcards|quiz|dialogue|trueOrFalse|speakingPractice|usefulExpressions))`);
  const s = content.match(scenarioRegex);
  if (!s) return;
  const words = [...s[1].matchAll(/english:\s*["']([^"']+)["'][\s\S]*?levels:\s*\{\s*A1/g)].map(m => m[1]);
  console.log(`${scenarioId}: ${words.join(', ')}`);
}

listWords('data/scenarios1.ts', 'esportes');
listWords('data/scenarios1.ts', 'supermercado');
listWords('data/scenarios2.ts', 'redes-sociais');
