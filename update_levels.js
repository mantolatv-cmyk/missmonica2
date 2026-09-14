const fs = require('fs');
const path = require('path');

const filesToUpdate = ['scenarios1.ts', 'scenarios2.ts', 'reviews.ts'];
const dataDir = path.join(__dirname, 'data');

console.log('Iniciando a migração de vocabulário para A1 e A2...');

filesToUpdate.forEach(fileName => {
  const filePath = path.join(dataDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Arquivo não encontrado: ${fileName}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Essa expressão regular procura exatamente o padrão antigo:
  // exampleEn: "frase em inglês", examplePt: "frase em português"
  const regex = /exampleEn:\s*(["'`])(.*?)\1,\s*examplePt:\s*(["'`])(.*?)\3/g;
  
  let matchCount = 0;

  const newContent = content.replace(regex, (match, q1, enText, q3, ptText) => {
    matchCount++;
    // Aqui estamos migrando a estrutura. 
    // Como não temos uma inteligência artificial rodando dentro deste script, 
    // ele vai copiar a frase atual para o A1 e A2. 
    // Assim o aplicativo não quebra, os botões funcionam e você pode editar 
    // as frases no arquivo aos poucos quando quiser!
    return `examples: { A1: { en: ${q1}${enText}${q1}, pt: ${q3}${ptText}${q3} }, A2: { en: ${q1}${enText}${q1}, pt: ${q3}${ptText}${q3} } }`;
  });

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ Atualizado: ${fileName} (${matchCount} frases migradas)`);
  } else {
    console.log(`ℹ️ Nenhuma mudança necessária ou formato já atualizado em: ${fileName}`);
  }
});

console.log('✨ Script finalizado com sucesso!');
