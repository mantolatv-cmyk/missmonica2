const fs = require('fs');

function fixScript(file) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the regex definition line
  const safeRegex = String.raw`const regex = new RegExp(\`(english:\\s*["'\`]\\$\{escapedWord\}["'\`][\\s\\S]\{0,300\}?B1:\\s*\\{\\s*en:\\s*["'\`])[^"'\`]+(["'\`]\\s*,\\s*pt:\\s*["'\`])[^"'\`]+(["'\`]\\s*\\})\`, 'g');`;
  
  content = content.replace(/const regex = new RegExp\(.*/, safeRegex);
  
  fs.writeFileSync(file, content);
  console.log('Fixed', file);
}

fixScript('update_vocab_1_v3.js');
fixScript('update_vocab_2_v3.js');
fixScript('update_vocab_13_15.js');
fixScript('update_vocab_1.js');
fixScript('update_vocab_1_4.js');
fixScript('update_vocab_5_8.js');
fixScript('update_vocab_9_12.js');
fixScript('update_vocab_1_v2.js');

