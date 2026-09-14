const { Project } = require("ts-morph");
const path = require("path");

const project = new Project();
const filePath = "c:/Users/martm/Documents/Arquivos do Antigravity/MissMonicaDay/english-everyday/data/reviews.ts";
const sourceFile = project.addSourceFileAtPath(filePath);
const scenarioArray = sourceFile.getVariableDeclarationOrThrow("reviewScenarios").getInitializerIfKindOrThrow(require("ts-morph").SyntaxKind.ArrayLiteralExpression);

let allWords = {};

for (const element of scenarioArray.getElements()) {
  const idProp = element.getProperty("id").getInitializer().getText().replace(/['"]/g, '');
  const flashcardsProp = element.getProperty("flashcards");
  if (!flashcardsProp) continue;
  
  const flashcardsArray = flashcardsProp.getInitializerIfKindOrThrow(require("ts-morph").SyntaxKind.ArrayLiteralExpression);
  const words = [];
  
  for (const card of flashcardsArray.getElements()) {
    const en = card.getProperty("english").getInitializer().getText().replace(/['"]/g, '');
    const pt = card.getProperty("portuguese").getInitializer().getText().replace(/['"]/g, '');
    words.push({ en, pt });
  }
  
  allWords[idProp] = words;
}

console.log(JSON.stringify(allWords, null, 2));
