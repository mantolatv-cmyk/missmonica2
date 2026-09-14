const { Project, SyntaxKind } = require("ts-morph");

const project = new Project();
project.addSourceFilesAtPaths("./data/scenarios1.ts");
project.addSourceFilesAtPaths("./data/scenarios2.ts");

function mergeLevels(targetLevelsObj, sourceLevelsObj) {
  if (!sourceLevelsObj) return;
  const targetProps = targetLevelsObj.getProperties();
  const sourceProps = sourceLevelsObj.getProperties();

  sourceProps.forEach(sourceProp => {
    if (sourceProp.getKind() === SyntaxKind.PropertyAssignment) {
      const name = sourceProp.getName();
      const existingProp = targetLevelsObj.getProperty(name);
      if (!existingProp) {
        // Add the property from source to target
        targetLevelsObj.addPropertyAssignment({
          name: name,
          initializer: sourceProp.getInitializer().getText()
        });
      }
    }
  });
}

const sourceFiles = project.getSourceFiles();

sourceFiles.forEach(sourceFile => {
  const arrays = sourceFile.getVariableDeclarations();
  arrays.forEach(decl => {
    const initializer = decl.getInitializer();
    if (initializer && initializer.getKind() === SyntaxKind.ArrayLiteralExpression) {
      const scenarios = initializer.getElements();
      
      scenarios.forEach(scenario => {
        if (scenario.getKind() !== SyntaxKind.ObjectLiteralExpression) return;
        
        const vocabProp = scenario.getProperty("vocabulary");
        if (!vocabProp || vocabProp.getKind() !== SyntaxKind.PropertyAssignment) return;
        
        const vocabArray = vocabProp.getInitializer();
        if (vocabArray.getKind() !== SyntaxKind.ArrayLiteralExpression) return;
        
        const vocabElements = vocabArray.getElements();
        const seen = new Map();
        const toRemove = [];

        vocabElements.forEach((vocabElement, index) => {
          if (vocabElement.getKind() !== SyntaxKind.ObjectLiteralExpression) return;
          
          const engProp = vocabElement.getProperty("english");
          if (!engProp || engProp.getKind() !== SyntaxKind.PropertyAssignment) return;
          
          const engText = engProp.getInitializer().getText().replace(/['"]/g, '').trim().toLowerCase();
          
          if (seen.has(engText)) {
            // Duplicate found
            const firstElement = seen.get(engText);
            
            // Merge levels
            const firstLevels = firstElement.getProperty("levels");
            const dupLevels = vocabElement.getProperty("levels");
            
            if (dupLevels && dupLevels.getKind() === SyntaxKind.PropertyAssignment) {
              const dupLevelsObj = dupLevels.getInitializer();
              if (dupLevelsObj.getKind() === SyntaxKind.ObjectLiteralExpression) {
                if (firstLevels && firstLevels.getKind() === SyntaxKind.PropertyAssignment) {
                  const firstLevelsObj = firstLevels.getInitializer();
                  mergeLevels(firstLevelsObj, dupLevelsObj);
                } else {
                  // First element doesn't have levels, add them
                  firstElement.addPropertyAssignment({
                    name: "levels",
                    initializer: dupLevelsObj.getText()
                  });
                }
              }
            }
            
            toRemove.push(vocabElement);
          } else {
            seen.set(engText, vocabElement);
          }
        });
        
        // Remove duplicates
        toRemove.forEach(el => {
          vocabArray.removeElement(el);
        });
        
        if (toRemove.length > 0) {
          const id = scenario.getProperty("id").getInitializer().getText();
          console.log(`[${sourceFile.getBaseName()}] Removed ${toRemove.length} duplicates from ${id}`);
        }
      });
    }
  });
  
  sourceFile.saveSync();
});

console.log("Deduplication complete!");
