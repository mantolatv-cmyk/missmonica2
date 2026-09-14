const fs = require('fs');

let content = fs.readFileSync('../data/reviews.ts', 'utf8');

const buildSentences = {
  'revisao-1': {
    level1: [
      { english: 'I have a big family and we live together.', portuguese: 'Eu tenho uma família grande e moramos juntos.' },
      { english: 'I hurt my shoulder while I was playing tennis.', portuguese: 'Eu machuquei meu ombro enquanto jogava tênis.' },
      { english: 'Please put the dirty clothes in the washing machine.', portuguese: 'Por favor coloque as roupas sujas na máquina de lavar.' }
    ],
    level2: [
      { english: 'Despite our differences I remain close to my relatives.', portuguese: 'Apesar de nossas diferenças, continuo próximo dos meus parentes.' },
      { english: 'They signed the lease for a fully furnished apartment.', portuguese: 'Eles assinaram o contrato de um apartamento totalmente mobiliado.' },
      { english: 'A fair-weather friend will abandon you when things get tough.', portuguese: 'Um amigo das horas boas te abandonará quando as coisas ficarem difíceis.' }
    ]
  },
  'revisao-2': {
    level1: [
      { english: 'When it rains we usually play board games together.', portuguese: 'Quando chove nós normalmente jogamos jogos de tabuleiro juntos.' },
      { english: 'We make a shopping list so we do not forget anything.', portuguese: 'Nós fazemos uma lista de compras para não esquecermos nada.' },
      { english: 'My brother works as a mechanic and fixes cars.', portuguese: 'Meu irmão trabalha como mecânico e conserta carros.' }
    ],
    level2: [
      { english: 'Engaging in creative hobbies can boost your cognitive flexibility.', portuguese: 'Envolver-se em hobbies criativos pode aumentar sua flexibilidade cognitiva.' },
      { english: 'Investing in durable items is a sustainable approach.', portuguese: 'Investir em itens duráveis é uma abordagem sustentável.' },
      { english: 'Supermarkets are strategically designed to influence consumer behavior.', portuguese: 'Supermercados são projetados estrategicamente para influenciar o comportamento do consumidor.' }
    ]
  },
  'revisao-3': {
    level1: [
      { english: 'The central square has a beautiful fountain.', portuguese: 'A praça central tem uma fonte linda.' },
      { english: 'First we mix everything in a big bowl.', portuguese: 'Primeiro nós misturamos tudo em uma tigela grande.' },
      { english: 'Sometimes the internet connection is very slow.', portuguese: 'Às vezes a conexão de internet é muito lenta.' }
    ],
    level2: [
      { english: 'Navigating a busy metropolis requires patience and good direction.', portuguese: 'Navegar em uma metrópole movimentada requer paciência e boa direção.' },
      { english: 'Wildlife conservation is essential for maintaining biodiversity.', portuguese: 'A conservação da vida selvagem é essencial para manter a biodiversidade.' },
      { english: 'As we become dependent on digital tools cybersecurity is critical.', portuguese: 'À medida que nos tornamos dependentes de ferramentas digitais a cibersegurança é crítica.' }
    ]
  }
};

for (const id in buildSentences) {
  const startIndex = content.indexOf('id: \"' + id + '\"');
  if (startIndex === -1) continue;
  
  let nextId = content.indexOf('id: \"revisao-', startIndex + 10);
  if (nextId === -1) nextId = content.length;

  const section = content.slice(startIndex, nextId);
  const bsStr = 'buildSentence: ' + JSON.stringify(buildSentences[id], null, 4) + ',\n    flashcards: [';
  
  const newSection = section.replace('flashcards: [', bsStr);
  content = content.slice(0, startIndex) + newSection + content.slice(nextId);
}

fs.writeFileSync('../data/reviews.ts', content);
console.log('Fixed reviews.ts');
