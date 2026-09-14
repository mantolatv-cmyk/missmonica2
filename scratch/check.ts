import * as fs from 'fs';
import * as path from 'path';

// read both files, just use regex to extract titles and check B1 words
function checkFile(filename: string) {
    const content = fs.readFileSync(filename, 'utf8');
    const scenarios = content.split('id: "').slice(1);
    
    for (const scenario of scenarios) {
        const id = scenario.split('"')[0];
        const titleMatch = scenario.match(/title: "(.*?)"/);
        const title = titleMatch ? titleMatch[1] : id;
        
        // Find B1 words
        const b1Words = [];
        const regex = /wordEn: "(.*?)"/g;
        let match;
        while ((match = regex.exec(scenario)) !== null) {
            b1Words.push(match[1].toLowerCase());
        }
        
        // Check quizLevel2, trueOrFalseLevel2, speakingPracticeLevel2
        const quizLevel2Match = scenario.match(/quizLevel2: \[([\s\S]*?)\]/);
        const quizLevel2 = quizLevel2Match ? quizLevel2Match[1] : "";
        
        const trueOrFalseMatch = scenario.match(/trueOrFalseLevel2: \{([\s\S]*?)\}/);
        const trueOrFalse = trueOrFalseMatch ? trueOrFalseMatch[1] : "";
        
        const speakingMatch = scenario.match(/speakingPracticeLevel2: \{([\s\S]*?)\}/);
        const speaking = speakingMatch ? speakingMatch[1] : "";
        
        const allLevel2Text = (quizLevel2 + " " + trueOrFalse + " " + speaking).toLowerCase();
        
        // Which B1 words are missing in Level 2 text?
        const missingWords = b1Words.filter(word => {
            // handle multiple words like "fit / caber", though wordEn is just "fit"
            const mainWord = word.split(" / ")[0].trim();
            return !allLevel2Text.includes(mainWord);
        });
        
        console.log(`Scenario: ${title} (${id})`);
        console.log(`  B1 words: ${b1Words.length}`);
        console.log(`  Missing in Level 2: ${missingWords.length === 0 ? "None" : missingWords.join(", ")}`);
    }
}

checkFile('../data/scenarios1.ts');
checkFile('../data/scenarios2.ts');
