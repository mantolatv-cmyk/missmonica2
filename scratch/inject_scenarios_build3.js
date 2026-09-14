const fs = require('fs');

const sentenceData = {
  // Scenarios 1
  "familia": {
    level1: [
      { english: "My mother is very beautiful and kind.", portuguese: "Minha mãe é muito bonita e gentil." },
      { english: "I have two brothers and one sister.", portuguese: "Eu tenho dois irmãos e uma irmã." },
      { english: "We always eat dinner together at night.", portuguese: "Nós sempre jantamos juntos à noite." }
    ],
    level2: [
      { english: "Despite our differences, I remain close to my relatives.", portuguese: "Apesar de nossas diferenças, continuo próximo dos meus parentes." },
      { english: "My extended family gathers every holiday to celebrate.", portuguese: "Minha família estendida se reúne todo feriado para celebrar." },
      { english: "She always supports me when I need help.", portuguese: "Ela sempre me apoia quando eu preciso de ajuda." }
    ]
  },
  "amigos": {
    level1: [
      { english: "She is my best friend from school.", portuguese: "Ela é minha melhor amiga da escola." },
      { english: "We share many secrets and play games.", portuguese: "Nós compartilhamos muitos segredos e jogamos jogos." },
      { english: "I like to talk with my friends.", portuguese: "Eu gosto de conversar com meus amigos." }
    ],
    level2: [
      { english: "We hit it off immediately when we first met.", portuguese: "Nós nos demos bem imediatamente quando nos conhecemos." },
      { english: "True friends will not abandon you during hard times.", portuguese: "Amigos verdadeiros não vão te abandonar durante tempos difíceis." },
      { english: "We slowly drifted apart after we finished high school.", portuguese: "Nós nos afastamos lentamente depois que terminamos o ensino médio." }
    ]
  },
  "corpo": {
    level1: [
      { english: "I wash my hands before eating lunch.", portuguese: "Eu lavo minhas mãos antes de almoçar." },
      { english: "My eyes are brown and my hair is short.", portuguese: "Meus olhos são castanhos e meu cabelo é curto." },
      { english: "She has a stomachache because she ate too much.", portuguese: "Ela está com dor de estômago porque comeu muito." }
    ],
    level2: [
      { english: "I hurt my shoulder while I was playing tennis.", portuguese: "Eu machuquei meu ombro enquanto eu estava jogando tênis." },
      { english: "It takes time to fully recover from a sprained ankle.", portuguese: "Leva tempo para se recuperar totalmente de um tornozelo torcido." },
      { english: "Regular exercise maintains a healthy cardiovascular system.", portuguese: "O exercício regular mantém um sistema cardiovascular saudável." }
    ]
  },
  "casa": {
    level1: [
      { english: "The kitchen is very modern and has new appliances.", portuguese: "A cozinha é muito moderna e tem eletrodomésticos novos." },
      { english: "I sleep in my bedroom every single night.", portuguese: "Eu durmo no meu quarto toda santa noite." },
      { english: "Please clean the bathroom and vacuum the carpet.", portuguese: "Por favor, limpe o banheiro e aspire o tapete." }
    ],
    level2: [
      { english: "They signed the lease for a fully furnished apartment.", portuguese: "Eles assinaram o contrato de um apartamento totalmente mobiliado." },
      { english: "We decided to knock down a wall to create space.", portuguese: "Decidimos derrubar uma parede para criar espaço." },
      { english: "The master suite looks absolutely stunning after the renovation.", portuguese: "A suíte principal está absolutamente deslumbrante após a reforma." }
    ]
  },
  "casa2": {
    level1: [
      { english: "I make my bed every morning after I wake up.", portuguese: "Eu arrumo minha cama toda manhã depois que acordo." },
      { english: "She needs to do the laundry on weekends.", portuguese: "Ela precisa lavar a roupa nos fins de semana." },
      { english: "He sweeps the floor and takes out the trash.", portuguese: "Ele varre o chão e tira o lixo." }
    ],
    level2: [
      { english: "Managing household chores requires a proper daily routine.", portuguese: "Gerenciar as tarefas domésticas exige uma rotina diária adequada." },
      { english: "Many teenagers rebel against their guardians' strict rules.", portuguese: "Muitos adolescentes se rebelam contra as regras rígidas de seus responsáveis." },
      { english: "I apologize for being late to the important meeting.", portuguese: "Peço desculpas por me atrasar para a reunião importante." }
    ]
  },
  
  "hobbies": {
    level1: [
      { english: "I prefer outdoor activities like riding my bicycle.", portuguese: "Eu prefiro atividades ao ar livre como andar de bicicleta." },
      { english: "When it rains we play board games together.", portuguese: "Quando chove nós jogamos jogos de tabuleiro juntos." },
      { english: "He likes to read books in his free time.", portuguese: "Ele gosta de ler livros no tempo livre dele." }
    ],
    level2: [
      { english: "Engaging in creative hobbies can boost your cognitive flexibility.", portuguese: "Envolver-se em hobbies criativos pode aumentar sua flexibilidade cognitiva." },
      { english: "Photography changes how you perceive the world around you.", portuguese: "A fotografia muda como você percebe o mundo ao seu redor." },
      { english: "I find collecting vintage stamps absolutely fascinating.", portuguese: "Eu acho colecionar selos vintage absolutamente fascinante." }
    ]
  },
  "esportes": {
    level1: [
      { english: "We run a lot and try to score goals.", portuguese: "Nós corremos muito e tentamos marcar gols." },
      { english: "Winning is nice but playing as a team is important.", portuguese: "Vencer é legal mas jogar em equipe é importante." },
      { english: "I watch tennis matches on television every Sunday.", portuguese: "Eu assisto partidas de tênis na televisão todo domingo." }
    ],
    level2: [
      { english: "Mental resilience is crucial during high pressure championships.", portuguese: "A resiliência mental é crucial durante campeonatos de alta pressão." },
      { english: "Coaches analyze opponent strategies to gain a competitive edge.", portuguese: "Os técnicos analisam as estratégias adversárias para ganhar vantagem competitiva." },
      { english: "Athletes undergo intense physical conditioning to prevent injuries.", portuguese: "Atletas passam por intenso condicionamento físico para prevenir lesões." }
    ]
  },
  "supermercado": {
    level1: [
      { english: "We make a shopping list so we do not forget.", portuguese: "Nós fazemos uma lista de compras para não esquecer." },
      { english: "Finally we wait in line at the cashier.", portuguese: "Finalmente nós esperamos na fila do caixa." },
      { english: "I look for milk and cheese in the dairy aisle.", portuguese: "Eu procuro leite e queijo no corredor de laticínios." }
    ],
    level2: [
      { english: "Supermarkets are strategically designed to influence consumer behavior.", portuguese: "Supermercados são projetados estrategicamente para influenciar o comportamento do consumidor." },
      { english: "The smell of baked goods triggers impulse purchases.", portuguese: "O cheiro de produtos assados provoca compras por impulso." },
      { english: "Understanding marketing tactics helps you stick to your budget.", portuguese: "Entender táticas de marketing te ajuda a manter o orçamento." }
    ]
  },

  // Scenarios 2
  "compras": {
    level1: [
      { english: "Saving money is important so I look for discounts.", portuguese: "Economizar dinheiro é importante então eu procuro descontos." },
      { english: "I decided to buy a cheaper shirt today.", portuguese: "Eu decidi comprar uma camisa mais barata hoje." },
      { english: "The blue jeans are too expensive for me.", portuguese: "A calça jeans azul é muito cara para mim." }
    ],
    level2: [
      { english: "The retail industry relies heavily on seasonal trends.", portuguese: "A indústria de varejo depende muito das tendências sazonais." },
      { english: "Investing in durable items is a sustainable approach.", portuguese: "Investir em itens duráveis é uma abordagem sustentável." },
      { english: "Finding a bargain is thrilling especially during sales.", portuguese: "Encontrar uma pechincha é emocionante especialmente durante promoções." }
    ]
  },
  "profissoes": {
    level1: [
      { english: "My brother works as a mechanic and fixes cars.", portuguese: "Meu irmão trabalha como mecânico e conserta carros." },
      { english: "My cousin has a job interview to become a nurse.", portuguese: "Meu primo tem uma entrevista de emprego para ser enfermeiro." },
      { english: "I want to be a teacher to help children.", portuguese: "Eu quero ser professor para ajudar as crianças." }
    ],
    level2: [
      { english: "Employers seek candidates who can manage complex projects.", portuguese: "Empregadores buscam candidatos que podem gerenciar projetos complexos." },
      { english: "Working remotely has changed how we interact.", portuguese: "Trabalhar remotamente mudou como interagimos." },
      { english: "Everyone has different talents and career goals.", portuguese: "Todos têm talentos e objetivos de carreira diferentes." }
    ]
  },
  "lugares": {
    level1: [
      { english: "The central square has a beautiful fountain.", portuguese: "A praça central tem uma fonte linda." },
      { english: "The bus station is very far from my house.", portuguese: "A rodoviária fica muito longe da minha casa." },
      { english: "I like to visit the large library downtown.", portuguese: "Eu gosto de visitar a grande biblioteca no centro." }
    ],
    level2: [
      { english: "Navigating a busy metropolis requires a good sense of direction.", portuguese: "Navegar em uma metrópole movimentada requer bom senso de direção." },
      { english: "Exploring public places on foot is tiring but rewarding.", portuguese: "Explorar lugares públicos a pé é cansativo mas recompensador." },
      { english: "I visited an art exhibition that was truly captivating.", portuguese: "Eu visitei uma exposição de arte que foi verdadeiramente cativante." }
    ]
  },
  "animais": {
    level1: [
      { english: "My favorite animal is the dog because it is loyal.", portuguese: "Meu animal favorito é o cachorro porque ele é leal." },
      { english: "The monkeys were very funny jumping from tree to tree.", portuguese: "Os macacos eram muito engraçados pulando de árvore em árvore." },
      { english: "Some people prefer cats because they are quiet.", portuguese: "Algumas pessoas preferem gatos porque eles são quietos." }
    ],
    level2: [
      { english: "Wildlife conservation is essential for maintaining our planet biodiversity.", portuguese: "A conservação da vida selvagem é essencial para manter a biodiversidade do planeta." },
      { english: "Educating the public is the first step toward saving them.", portuguese: "Educar o público é o primeiro passo para salvá-los." },
      { english: "The timeline of species extinction has accelerated alarmingly.", portuguese: "A linha do tempo da extinção das espécies acelerou de forma alarmante." }
    ]
  },
  "culinaria": {
    level1: [
      { english: "Every Friday night my mother and I bake a cake.", portuguese: "Toda sexta à noite minha mãe e eu assamos um bolo." },
      { english: "First we mix everything in a big bowl.", portuguese: "Primeiro nós misturamos tudo em uma tigela grande." },
      { english: "The kitchen smells delicious when the cake is ready.", portuguese: "A cozinha cheira delicioso quando o bolo está pronto." }
    ],
    level2: [
      { english: "Preparing a complex dish requires precise timing.", portuguese: "Preparar um prato complexo requer precisão de tempo." },
      { english: "Baking is like chemistry because mistakes ruin the texture.", portuguese: "Assar é como química porque erros estragam a textura." },
      { english: "Authentic recipes are passed down through generations.", portuguese: "Receitas autênticas são passadas através de gerações." }
    ]
  },
  "tecnologia": {
    level1: [
      { english: "I use my smartphone every day to send messages.", portuguese: "Eu uso meu smartphone todos os dias para enviar mensagens." },
      { english: "Sometimes the internet connection is very slow.", portuguese: "Às vezes a conexão de internet é muito lenta." },
      { english: "It is important to charge our devices at night.", portuguese: "É importante carregar nossos dispositivos à noite." }
    ],
    level2: [
      { english: "As we become dependent on digital tools cybersecurity is critical.", portuguese: "À medida que nos tornamos dependentes de ferramentas digitais a cibersegurança é crítica." },
      { english: "Many users trap their devices with malware unintentionally.", portuguese: "Muitos usuários prendem seus dispositivos com malware sem intenção." },
      { english: "It is vital to use strong passwords for safety.", portuguese: "É vital usar senhas fortes para segurança." }
    ]
  },
  "redes-sociais": {
    level1: [
      { english: "I try not to spend too much time online.", portuguese: "Eu tento não passar muito tempo online." },
      { english: "Every evening I scroll through my feed.", portuguese: "Toda noite eu rolo o meu feed." },
      { english: "I use Instagram to post pictures of my pets.", portuguese: "Eu uso o Instagram para postar fotos dos meus animais." }
    ],
    level2: [
      { english: "Finding a healthy balance with digital engagement is a challenge.", portuguese: "Encontrar um equilíbrio saudável com engajamento digital é um desafio." },
      { english: "Social media platforms have drastically altered our reality.", portuguese: "Plataformas de mídia social alteraram drasticamente nossa realidade." },
      { english: "An embarrassing mistake can go viral and damage your reputation.", portuguese: "Um erro constrangedor pode viralizar e danificar sua reputação." }
    ]
  }
};

function injectIntoFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const id in sentenceData) {
    if (content.indexOf(`id: "${id}"`) === -1) continue;
    
    // Skip if already has buildSentence
    if (content.indexOf(`buildSentence:`, content.indexOf(`id: "${id}"`)) !== -1 && 
        content.indexOf(`buildSentence:`, content.indexOf(`id: "${id}"`)) < (content.indexOf(`id: "`, content.indexOf(`id: "${id}"`) + 10) === -1 ? content.length : content.indexOf(`id: "`, content.indexOf(`id: "${id}"`) + 10))) {
      console.log(`Already has buildSentence: ${id}`);
      continue;
    }

    const startIndex = content.indexOf(`id: "${id}"`);
    let nextId = content.indexOf('id: "', startIndex + 10);
    if (nextId === -1) nextId = content.length;

    const section = content.slice(startIndex, nextId);
    
    const bsStr = 'buildSentence: ' + JSON.stringify(sentenceData[id], null, 4) + ',\n  flashcards: [';
    
    if (section.includes('flashcards: [')) {
      const newSection = section.replace('flashcards: [', bsStr);
      content = content.slice(0, startIndex) + newSection + content.slice(nextId);
      console.log(`Successfully injected into ${id}`);
    } else {
      console.log(`Could not find flashcards in ${id}`);
    }
  }

  fs.writeFileSync(filePath, content);
}

injectIntoFile('../data/scenarios1.ts');
injectIntoFile('../data/scenarios2.ts');

console.log("Fixed scenarios!");
