const { Project, SyntaxKind } = require("ts-morph");

const project = new Project();

function getKeywords(scenarioId) {
  return [];
}

const imagesMap = {
  "familia": "/images/scenarios/scenario_familia_1789410479958.jpg",
  "amigos": "/images/scenarios/scenario_amigos_1789410489902.jpg",
  "corpo": "/images/scenarios/scenario_corpo_1789410497176.jpg",
  "casa": "/images/scenarios/scenario_casa_1789410507520.jpg",
  "casa2": "/images/scenarios/scenario_casa2_1789410518274.jpg",
  "hobbies": "/images/scenarios/scenario_hobbies_1789410561252.jpg",
  "esportes": "/images/scenarios/scenario_esportes_1789410571759.jpg",
  "supermercado": "/images/scenarios/scenario_supermercado_1789410581014.jpg",
  "compras": "/images/scenarios/scenario_compras_1789410590941.jpg",
  "profissoes": "/images/scenarios/scenario_profissoes_1789410601044.jpg",
  "lugares": "/images/scenarios/scenario_lugares_1789410665043.jpg",
  "animais": "/images/scenarios/scenario_animais_1789410674284.jpg",
  "culinaria": "https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "tecnologia": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "redes-sociais": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

function processFile(filePath, varName) {
  const sourceFile = project.addSourceFileAtPath(filePath);
  const scenarioArray = sourceFile.getVariableDeclarationOrThrow(varName).getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
  
  for (const element of scenarioArray.getElements()) {
    if (element.getKind() !== SyntaxKind.ObjectLiteralExpression) continue;
    
    const idProp = element.getProperty("id");
    if (!idProp) continue;
    const id = idProp.getInitializer().getText().replace(/['"]/g, '');
    
    // Check if it's a review, skip it
    if (id.startsWith("revisao")) continue;

    const vocabProp = element.getProperty("vocabulary");
    if (!vocabProp) continue;
    
    const vocabArray = vocabProp.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    const vocabItems = vocabArray.getElements();
    
    let keywords = [];
    // pick 4 random words or first 4
    for (let i = 0; i < 4 && i < vocabItems.length; i++) {
      const eng = vocabItems[i].getProperty("english").getInitializer().getText().replace(/['"]/g, '');
      const pt = vocabItems[i].getProperty("portuguese").getInitializer().getText().replace(/['"]/g, '');
      keywords.push(`{ english: "${eng}", portuguese: "${pt}" }`);
    }

    const imgPath = imagesMap[id];
    if (!imgPath) {
      console.log(`No image for ${id}`);
      continue;
    }

    // Remove existing imageDescription if any
    const existing = element.getProperty("imageDescription");
    if (existing) {
      existing.remove();
    }

    element.addPropertyAssignment({
      name: "imageDescription",
      initializer: `{
        imagePath: "${imgPath}",
        keywords: [
          ${keywords.join(',\n          ')}
        ]
      }`
    });
  }

  sourceFile.saveSync();
  console.log(`Processed ${filePath}`);
}

processFile("c:/Users/martm/Documents/Arquivos do Antigravity/MissMonicaDay/english-everyday/data/scenarios1.ts", "scenarios1");
processFile("c:/Users/martm/Documents/Arquivos do Antigravity/MissMonicaDay/english-everyday/data/scenarios2.ts", "scenarios2");
