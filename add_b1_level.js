const fs = require('fs');
const path = require('path');

const filesToUpdate = ['scenarios1.ts', 'scenarios2.ts', 'reviews.ts'];
const dataDir = path.join(__dirname, 'data');

console.log('Iniciando a adição do nível B1...');

filesToUpdate.forEach(fileName => {
  const filePath = path.join(dataDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Arquivo não encontrado: ${fileName}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Esta expressão regular procura pela estrutura do Nível A2:
  // A2: { en: "frase", pt: "frase" } }
  // e insere o B1 copiando o texto do A2 como placeholder para o B1.
  const regex = /A2:\s*\{\s*en:\s*(["'`])(.*?)\1,\s*pt:\s*(["'`])(.*?)\3\s*\}\s*\}/g;
  
  let matchCount = 0;

  const newContent = content.replace(regex, (match, q1, enText, q3, ptText) => {
    // Se o B1 já existir no texto encontrado, não fazemos nada.
    if (match.includes('B1:')) return match;
    
    matchCount++;
    return `A2: { en: ${q1}${enText}${q1}, pt: ${q3}${ptText}${q3} }, B1: { en: ${q1}${enText}${q1}, pt: ${q3}${ptText}${q3} } }`;
  });

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ Atualizado: ${fileName} (${matchCount} frases ganharam o B1)`);
  } else {
    console.log(`ℹ️ Nenhuma mudança necessária (ou B1 já existente) em: ${fileName}`);
  }
});

console.log('✨ Script finalizado com sucesso!');
