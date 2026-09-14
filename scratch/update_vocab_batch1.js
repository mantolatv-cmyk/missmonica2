const fs = require('fs');

const path1 = '../data/scenarios1.ts';
let content = fs.readFileSync(path1, 'utf-8');

// We will use regex to find the vocabulary array for specific scenarios and replace the items.
// However, parsing the entire AST or using regex for such complex structures is tricky.
// Let's read scenarios1.js if it exists, or just use a simple regex replacing loop.

// Actually, since scenarios1.ts is a TS file, replacing via regex might break.
// But we can do specific replaces.

const familiaUpdates = {
  "Mother / Mom": { a2: { en: "My mother makes the best cake for my birthday every year.", pt: "Minha mãe faz o melhor bolo para o meu aniversário todos os anos." } },
  "Father / Dad": { a2: { en: "My father is working late today because of a project.", pt: "Meu pai está trabalhando até tarde hoje por causa de um projeto." } },
  "Brother": { a2: { en: "I share a large room with my younger brother.", pt: "Eu divido um quarto grande com meu irmão mais novo." } },
  "Sister": { a2: { en: "My sister is older than me and she goes to college.", pt: "Minha irmã é mais velha que eu e ela vai para a faculdade." } },
  "Grandmother": { a2: { en: "We visit my lovely grandmother every Sunday afternoon.", pt: "Visitamos minha adorável avó todo domingo à tarde." } },
  "Grandfather": { a2: { en: "My grandfather loves fishing at the lake near his house.", pt: "Meu avô adora pescar no lago perto da casa dele." } },
  "Aunt": { a2: { en: "My aunt lives in another city, so we rarely visit her.", pt: "Minha tia mora em outra cidade, então raramente a visitamos." } },
  "Uncle": { a2: { en: "My uncle bought a new car and gave me a ride.", pt: "Meu tio comprou um carro novo e me deu uma carona." } },
  "Cousin": { a2: { en: "I played video games with my cousin all day long.", pt: "Joguei videogame com meu primo o dia todo." } },
  "Parents": { a2: { en: "My parents are very strict about my school grades.", pt: "Meus pais são muito rigorosos com minhas notas da escola." } },
  "Nephew": { a2: { en: "My nephew is three years old and very energetic.", pt: "Meu sobrinho tem três anos e é muito enérgico." } },
  "Niece": { a2: { en: "I bought a colorful toy for my little niece.", pt: "Comprei um brinquedo colorido para minha sobrinha." } },
  "Grandson": { a2: { en: "The grandfather is happily playing with his young grandson.", pt: "O avô está brincando feliz com seu jovem neto." } },
  "Granddaughter": { a2: { en: "She is their first granddaughter and they love her very much.", pt: "Ela é a primeira neta deles e eles a amam muito." } },
  "Wife": { a2: { en: "He bought beautiful flowers for his wife on their anniversary.", pt: "Ele comprou flores lindas para a esposa no aniversário deles." } },
  "Husband": { a2: { en: "Her husband is a doctor at the local hospital.", pt: "O marido dela é médico no hospital local." } },
  "Mother-in-law": { a2: { en: "My mother-in-law makes great food for family dinners.", pt: "Minha sogra faz uma comida ótima para os jantares de família." } },
  "Father-in-law": { a2: { en: "My father-in-law is very funny and tells great stories.", pt: "Meu sogro é muito engraçado e conta ótimas histórias." } },
  "Stepmother": { a2: { en: "His stepmother is very kind and helps him study.", pt: "A madrasta dele é muito gentil e o ajuda a estudar." } },
  "Stepfather": { a2: { en: "My stepfather taught me how to drive his old car.", pt: "Meu padrasto me ensinou a dirigir seu carro velho." } },
};

const familiaB1 = [
  { english: "Sibling", portuguese: "Irmão/Irmã (Geral)", levels: { B1: { en: "I have two siblings who currently live abroad.", pt: "Tenho dois irmãos que atualmente moram no exterior." } } },
  { english: "Relatives", portuguese: "Parentes", levels: { B1: { en: "During the holidays, all my relatives gather at my house.", pt: "Durante os feriados, todos os meus parentes se reúnem na minha casa." } } },
  { english: "Upbringing", portuguese: "Criação / Educação familiar", levels: { B1: { en: "She had a strict upbringing but it made her very disciplined.", pt: "Ela teve uma criação rigorosa, mas isso a tornou muito disciplinada." } } },
  { english: "Ancestors", portuguese: "Antepassados", levels: { B1: { en: "Our ancestors migrated to this country over a century ago.", pt: "Nossos antepassados migraram para este país há mais de um século." } } },
  { english: "Offspring", portuguese: "Prole / Descendentes", levels: { B1: { en: "The parents are highly protective of their offspring.", pt: "Os pais são altamente protetores com sua prole." } } },
  { english: "Foster child", portuguese: "Filho(a) adotivo(a)", levels: { B1: { en: "They welcomed a foster child into their loving home.", pt: "Eles acolheram um filho adotivo em seu lar amoroso." } } },
  { english: "Godfather", portuguese: "Padrinho", levels: { B1: { en: "My godfather always gives me the best advice.", pt: "Meu padrinho sempre me dá os melhores conselhos." } } },
  { english: "Godmother", portuguese: "Madrinha", levels: { B1: { en: "My godmother attended my graduation ceremony last week.", pt: "Minha madrinha compareceu à minha cerimônia de formatura na semana passada." } } }
];

let changedCount = 0;

for (const [word, updates] of Object.entries(familiaUpdates)) {
  const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  
  // Find the word block
  const blockRegex = new RegExp(`(\\{\\s*english:\\s*["'\`]${escapedWord}["'\`][\\s\\S]*?)(B1:\\s*\\{[^}]*\\}\\s*,?\\s*)(\\})`, 'g');
  
  content = content.replace(blockRegex, (match, beforeB1, b1Block, afterB1) => {
    // Remove B1 block
    return beforeB1.trim().replace(/,\s*$/, '') + "\n                      " + afterB1;
  });

  // Now replace A2
  const a2Regex = new RegExp(`(english:\\s*["'\`]${escapedWord}["'\`][\\s\\S]*?A2:\\s*\\{\\s*en:\\s*["'\`])[^"'\`]+(["'\`]\\s*,\\s*pt:\\s*["'\`])[^"'\`]+(["'\`]\\s*\\})`, 'g');
  
  content = content.replace(a2Regex, (match, prefix, mid, suffix) => {
    changedCount++;
    return `${prefix}${updates.a2.en}${mid}${updates.a2.pt}${suffix}`;
  });
}

// Now append B1 words to familia vocabulary array
// Find the end of familia vocabulary array
const familiaVocabEndRegex = /(id:\s*["']familia["'][\s\S]*?vocabulary:\s*\[[\s\S]*?)(?=],\s*flashcards)/;
content = content.replace(familiaVocabEndRegex, (match, prefix) => {
  let b1String = '';
  for (const item of familiaB1) {
    b1String += `,\n      { english: "${item.english}", portuguese: "${item.portuguese}",\n          levels: { \n                        B1: { en: "${item.levels.B1.en}", pt: "${item.levels.B1.pt}" } \n                      }\n    }`;
  }
  return prefix + b1String;
});

fs.writeFileSync(path1, content, 'utf-8');
console.log(`Updated ${changedCount} A2 items and injected B1 words for Familia.`);
