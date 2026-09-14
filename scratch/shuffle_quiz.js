const fs = require('fs');

function shuffleOptions(content) {
    // We will look for blocks that have options and correctIndex.
    // Example:
    // options: [
    //   "A",
    //   "B",
    //   "C",
    //   "D"
    // ],
    // correctIndex: 0,
    
    // A robust way is to use regex with match and replace
    const regex = /options:\s*\[([\s\S]*?)\]\s*,\s*correctIndex:\s*(\d+)/g;
    
    return content.replace(regex, (match, optionsStr, indexStr) => {
        // Parse the options inside the brackets
        // Split by comma, but be careful with strings containing commas
        // Since it's simple strings, we can just split by lines and filter
        
        let lines = optionsStr.split('\n');
        let options = [];
        let optionRegex = /"([^"]+)"|'([^']+)'/g;
        
        // Actually, just find all strings
        let matches = [...optionsStr.matchAll(/"([^"]+)"|'([^']+)'/g)];
        if (matches.length === 0) return match; // fallback
        
        let parsedOptions = matches.map(m => m[0]);
        let oldCorrectIndex = parseInt(indexStr);
        let correctOption = parsedOptions[oldCorrectIndex];
        
        // Shuffle the parsedOptions
        for (let i = parsedOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [parsedOptions[i], parsedOptions[j]] = [parsedOptions[j], parsedOptions[i]];
        }
        
        let newCorrectIndex = parsedOptions.indexOf(correctOption);
        
        // Reconstruct the options string
        let newOptionsStr = parsedOptions.map(opt => `                  ${opt}`).join(',\n');
        
        return `options: [\n${newOptionsStr}\n            ],\n            correctIndex: ${newCorrectIndex}`;
    });
}

['../data/scenarios1.ts', '../data/scenarios2.ts', '../data/reviews.ts'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let newContent = shuffleOptions(content);
        fs.writeFileSync(file, newContent);
        console.log(`Processed ${file}`);
    }
});
