const ts = require('typescript');
const fs = require('fs');

function removeVocabularyLevel2(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile('temp.ts', code, ts.ScriptTarget.Latest, true);

  const replacements = [];

  function visit(node) {
    if (ts.isPropertyAssignment(node)) {
      const name = node.name.getText(sourceFile);
      if (name === 'vocabularyLevel2') {
        // find the comma after it if any
        let end = node.getEnd();
        while (code[end] === ',' || code[end] === ' ' || code[end] === '\n' || code[end] === '\r') {
          end++;
        }
        replacements.push({
          start: node.getStart(sourceFile),
          end: end
        });
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (replacements.length === 0) {
    console.log(`No vocabularyLevel2 found in ${filePath}`);
    return;
  }

  // Sort in reverse to not mess up indices
  replacements.sort((a, b) => b.start - a.start);

  let newCode = code;
  for (const { start, end } of replacements) {
    newCode = newCode.slice(0, start) + newCode.slice(end);
  }

  fs.writeFileSync(filePath, newCode, 'utf8');
  console.log(`Removed ${replacements.length} vocabularyLevel2 blocks from ${filePath}`);
}

removeVocabularyLevel2('../data/scenarios1.ts');
removeVocabularyLevel2('../data/scenarios2.ts');
