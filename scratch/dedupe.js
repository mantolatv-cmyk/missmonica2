const fs = require('fs');

function deduplicateFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find each scenario by looking for `{ id: ` or `id: ` after `{`
  // Actually, we can just split the file by `id: "` to process each scenario separately
  const parts = content.split(/id:\s*["'`]/);
  
  if (parts.length <= 1) return;
  
  let newContent = parts[0];
  
  for (let p = 1; p < parts.length; p++) {
    let scenStr = 'id: "' + parts[p];
    
    // Deduplicate keys
    const keysToDeduplicate = ['trueOrFalseLevel2', 'speakingPracticeLevel2', 'buildSentence'];
    
    for (const key of keysToDeduplicate) {
      const regex = new RegExp(`\\b${key}\\s*:\\s*\\{`, 'g');
      let matches = [];
      let match;
      while ((match = regex.exec(scenStr)) !== null) {
        matches.push(match.index);
      }
      
      if (matches.length > 1) {
        // We have duplicates! We want to remove the FIRST one (matches[0]).
        // We need to find where the first block ends.
        const startIdx = matches[0];
        const startBraceIdx = startIdx + scenStr.substring(startIdx).indexOf('{');
        
        let depth = 1;
        let i = startBraceIdx + 1;
        while (i < scenStr.length && depth > 0) {
          if (scenStr[i] === '{') depth++;
          else if (scenStr[i] === '}') depth--;
          i++;
        }
        
        const endIdx = i;
        
        // Also remove the trailing comma and whitespace
        let deleteEnd = endIdx;
        while (deleteEnd < scenStr.length && (scenStr[deleteEnd] === ',' || scenStr[deleteEnd] === ' ' || scenStr[deleteEnd] === '\n' || scenStr[deleteEnd] === '\r')) {
          deleteEnd++;
        }
        
        console.log(`Deduplicating ${key} in ${file} scenario part ${p}`);
        scenStr = scenStr.substring(0, startIdx) + scenStr.substring(deleteEnd);
      }
    }
    
    newContent += scenStr;
  }
  
  fs.writeFileSync(file, newContent);
}

deduplicateFile('../data/scenarios1.ts');
deduplicateFile('../data/scenarios2.ts');
console.log("Deduplication complete!");
