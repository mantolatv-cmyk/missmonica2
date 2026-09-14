const fs = require('fs');

const extraQuestions1 = {
  "amigos": {
    q: `                  {
                    question: "Are you and your best friend a good 'match'?",
                    translation: "Você e seu melhor amigo(a) são uma boa 'combinação' (match)?"
                  }`,
  },
  "corpo": {
    q: `                  {
                    question: "When did you last visit the 'dentist' because you couldn't 'breathe' well?",
                    translation: "Quando foi a última vez que você visitou o 'dentista' (dentist) porque não conseguia 'respirar' (breathe) direito?"
                  }`,
  },
  "casa": {
    q: `                  {
                    question: "How do you 'arrange' the books on the 'bookshelf' of your master 'suite'?",
                    translation: "Como você 'organiza' (arrange) os livros na 'estante' (bookshelf) da sua 'suíte' (suite) principal?"
                  }`,
  },
  "casa2": {
    q: `                  {
                    question: "Did you use a 'lamp' to decorate the 'banquet' table?",
                    translation: "Você usou uma 'lâmpada' (lamp) para decorar a mesa do 'banquete' (banquet)?"
                  }`
  }
};

const extraQuestions2 = {
  "profissoes": {
    q: `                  {
                    question: "What is the most important 'ingredient' to work 'overseas'?",
                    translation: "Qual é o 'ingrediente' (ingredient) mais importante para trabalhar no 'exterior' (overseas)?"
                  }`
  },
  "lugares": {
    q: `                  {
                    question: "Did you 'ignore' the noise on a 'flight' that flew 'miles' 'around' the world 'precisely' on time?",
                    translation: "Você 'ignorou' (ignore) o barulho em um 'voo' (flight) que voou 'milhas' (miles) 'ao redor' (around) do mundo 'precisamente' (precisely) no horário?"
                  }`
  },
  "animais": {
    q: `                  {
                    question: "Did the 'mailman' feed the 'aquarium' fish a 'carrot' 'softly' 'since' the beginning of the 'timeline'?",
                    translation: "O 'carteiro' (mailman) alimentou os peixes do 'aquário' (aquarium) com uma 'cenoura' (carrot) 'suavemente' (softly) 'desde' (since) o início da 'linha do tempo' (timeline)?"
                  }`
  },
  "culinaria": {
    q: `                  {
                    question: "Do you 'slightly' adapt a 'tiny' 'dish' 'recipe' when 'baking' in another 'culture'?",
                    translation: "Você adapta 'levemente' (slightly) a 'receita' (recipe) de um 'prato' (dish) 'minúsculo' (tiny) ao 'assar' (baking) em outra 'cultura' (culture)?"
                  }`
  },
  "tecnologia": {
    q: `                  {
                    question: "Did you 'misplace' your 'mobile' device in a 'trap'?",
                    translation: "Você 'perdeu' (misplace) seu dispositivo 'móvel' (mobile) em uma 'armadilha' (trap)?"
                  }`
  },
  "redes-sociais": {
    q: `                  {
                    question: "Do you 'mindlessly' 'divide' your 'timeline' with 'embarrassing' or 'inspiring' posts 'overnight'?",
                    translation: "Você 'distraidamente' (mindlessly) 'divide' (divide) sua 'linha do tempo' (timeline) com posts 'embaraçosos' (embarrassing) ou 'inspiradores' (inspiring) da 'noite para o dia' (overnight)?"
                  }`
  }
};

function injectExtra(content, extraObj) {
  let newContent = content;
  for (const [id, extra] of Object.entries(extraObj)) {
    // Find the scenario by id
    const scenarioStart = newContent.indexOf(`id: "${id}"`);
    if (scenarioStart === -1) continue;

    // Find speakingPracticeLevel2 part2 array end inside this scenario
    const speakingStart = newContent.indexOf("speakingPracticeLevel2", scenarioStart);
    const part2Start = newContent.indexOf("part2:", speakingStart);
    const part2End = newContent.indexOf("]", part2Start);

    // Insert extra question before the closing bracket
    newContent = newContent.slice(0, part2End) + ",\n" + extra.q + "\n      " + newContent.slice(part2End);
  }
  return newContent;
}

const c1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');
fs.writeFileSync('../data/scenarios1.ts', injectExtra(c1, extraQuestions1));

const c2 = fs.readFileSync('../data/scenarios2.ts', 'utf8');
fs.writeFileSync('../data/scenarios2.ts', injectExtra(c2, extraQuestions2));

console.log("Injection completed");
