const fs = require('fs');
const path = require('path');

const sentenceData = {
  // Reviews
  "revisao-1": {
    level1: [
      { english: "I have a big family and we live together.", portuguese: "Eu tenho uma família grande e moramos juntos." },
      { english: "I hurt my shoulder while I was playing tennis.", portuguese: "Eu machuquei meu ombro enquanto jogava tênis." },
      { english: "Please put the dirty clothes in the washing machine.", portuguese: "Por favor coloque as roupas sujas na máquina de lavar." }
    ],
    level2: [
      { english: "Despite our differences I remain close to my relatives.", portuguese: "Apesar de nossas diferenças, continuo próximo dos meus parentes." },
      { english: "They signed the lease for a fully furnished apartment.", portuguese: "Eles assinaram o contrato de um apartamento totalmente mobiliado." },
      { english: "A fair-weather friend will abandon you when things get tough.", portuguese: "Um amigo das horas boas te abandonará quando as coisas ficarem difíceis." }
    ]
  },
  "revisao-2": {
    level1: [
      { english: "When it rains we usually play board games together.", portuguese: "Quando chove nós normalmente jogamos jogos de tabuleiro juntos." },
      { english: "We make a shopping list so we do not forget anything.", portuguese: "Nós fazemos uma lista de compras para não esquecermos nada." },
      { english: "My brother works as a mechanic and fixes cars.", portuguese: "Meu irmão trabalha como mecânico e conserta carros." }
    ],
    level2: [
      { english: "Engaging in creative hobbies can boost your cognitive flexibility.", portuguese: "Envolver-se em hobbies criativos pode aumentar sua flexibilidade cognitiva." },
      { english: "Investing in durable items is a sustainable approach.", portuguese: "Investir em itens duráveis é uma abordagem sustentável." },
      { english: "Supermarkets are strategically designed to influence consumer behavior.", portuguese: "Supermercados são projetados estrategicamente para influenciar o comportamento do consumidor." }
    ]
  },
  "revisao-3": {
    level1: [
      { english: "The central square has a beautiful fountain.", portuguese: "A praça central tem uma fonte linda." },
      { english: "First we mix everything in a big bowl.", portuguese: "Primeiro nós misturamos tudo em uma tigela grande." },
      { english: "Sometimes the internet connection is very slow.", portuguese: "Às vezes a conexão de internet é muito lenta." }
    ],
    level2: [
      { english: "Navigating a busy metropolis requires patience and good direction.", portuguese: "Navegar em uma metrópole movimentada requer paciência e boa direção." },
      { english: "Wildlife conservation is essential for maintaining biodiversity.", portuguese: "A conservação da vida selvagem é essencial para manter a biodiversidade." },
      { english: "As we become dependent on digital tools cybersecurity is critical.", portuguese: "À medida que nos tornamos dependentes de ferramentas digitais a cibersegurança é crítica." }
    ]
  }
};

function injectIntoFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const id in sentenceData) {
    if (content.indexOf(`id: "${id}"`) === -1) continue;
    
    // Check if buildSentence already exists
    if (content.indexOf(`buildSentence:`, content.indexOf(`id: "${id}"`)) !== -1 && 
        content.indexOf(`buildSentence:`, content.indexOf(`id: "${id}"`)) < (content.indexOf(`id: "revisao-`, content.indexOf(`id: "${id}"`) + 10) === -1 ? content.length : content.indexOf(`id: "revisao-`, content.indexOf(`id: "${id}"`) + 10))) {
      console.log(`Already has buildSentence: ${id}`);
      continue;
    }
    
    const buildSentenceObj = {
      level1: sentenceData[id].level1,
      level2: sentenceData[id].level2
    };

    const startIndex = content.indexOf(`id: "${id}"`);
    let nextId = content.indexOf('id: "cenario-', startIndex + 10);
    if (nextId === -1) nextId = content.indexOf('id: "revisao-', startIndex + 10);
    if (nextId === -1) nextId = content.length;

    const section = content.slice(startIndex, nextId);
    const buildSentenceStr = `buildSentence: ${JSON.stringify(buildSentenceObj, null, 4)},\n  `;

    // Place before the end of the scenario definition which is "  }," or "  }\n]"
    const match = section.match(/\n\s*\}\s*,?\s*$/);
    if (match) {
      const endIndex = match.index;
      const newSection = section.slice(0, endIndex) + ',\n  ' + buildSentenceStr + section.slice(endIndex);
      content = content.slice(0, startIndex) + newSection + content.slice(nextId);
      console.log(`Successfully injected ${id}`);
    } else {
      console.log(`Could not find end of object in ${id}`);
    }
  }

  fs.writeFileSync(filePath, content);
}

injectIntoFile(path.join(__dirname, '../data/reviews.ts'));

console.log("Injection completed.");
