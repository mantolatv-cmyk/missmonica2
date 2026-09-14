const fs = require('fs');

const data = {
  "familia": {
    trueOrFalse: {
      part1: [
        { statement: "Your mother's sister is your aunt.", statementPt: "A irmã da sua mãe é sua tia.", isTrue: true, explanation: "Aunt means tia." },
        { statement: "Parents means relatives like cousins and uncles.", statementPt: "Parents significa parentes como primos e tios.", isTrue: false, explanation: "Parents means pais (mother and father)." },
        { statement: "Your mother's mother is your grandmother.", statementPt: "A mãe da sua mãe é sua avó.", isTrue: true, explanation: "Grandmother means avó." },
        { statement: "A brother is your female sibling.", statementPt: "Um irmão é a sua irmã do sexo feminino.", isTrue: false, explanation: "Sister means irmã. Brother is irmão." },
        { statement: "Your father's brother is your uncle.", statementPt: "O irmão do seu pai é seu tio.", isTrue: true, explanation: "Uncle means tio." },
        { statement: "A cousin is the child of your aunt or uncle.", statementPt: "Um primo é filho da sua tia ou tio.", isTrue: true, explanation: "Cousin means primo/prima." }
      ],
      part2: [
        { statement: "Your brother's daughter is your niece.", statementPt: "A filha do seu irmão é sua sobrinha.", isTrue: true, explanation: "Niece means sobrinha." },
        { statement: "Your sister's son is your nephew.", statementPt: "O filho da sua irmã é seu sobrinho.", isTrue: true, explanation: "Nephew means sobrinho." },
        { statement: "Your son's son is your grandson.", statementPt: "O filho do seu filho é seu neto.", isTrue: true, explanation: "Grandson means neto." },
        { statement: "A husband is a female spouse.", statementPt: "Um marido é uma esposa do sexo feminino.", isTrue: false, explanation: "Husband is a male spouse. Wife is female." },
        { statement: "Your daughter's daughter is your granddaughter.", statementPt: "A filha da sua filha é sua neta.", isTrue: true, explanation: "Granddaughter means neta." },
        { statement: "A married man has a wife.", statementPt: "Um homem casado tem uma esposa.", isTrue: true, explanation: "Wife means esposa." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you live with your parents?", translation: "Você mora com seus pais?" },
        { question: "How old is your grandmother?", translation: "Quantos anos tem sua avó?" },
        { question: "Do you have any cousins?", translation: "Você tem algum primo?" }
      ],
      part2: [
        { question: "Do you have a nephew or a niece?", translation: "Você tem um sobrinho ou sobrinha?" },
        { question: "What is the name of your grandson?", translation: "Qual é o nome do seu neto?" },
        { question: "Does your uncle have a wife?", translation: "Seu tio tem uma esposa?" }
      ]
    }
  },
  "amigos": {
    trueOrFalse: {
      part1: [
        { statement: "You usually invite friends to a party.", statementPt: "Você normalmente convida amigos para uma festa.", isTrue: true, explanation: "Invite means convidar, party means festa." },
        { statement: "A group of friends means only one person.", statementPt: "Um grupo de amigos significa apenas uma pessoa.", isTrue: false, explanation: "Group means mais de uma pessoa." },
        { statement: "When you chat, you talk with someone.", statementPt: "Quando você conversa, você fala com alguém.", isTrue: true, explanation: "Chat means conversar." },
        { statement: "Best friend means a person you don't like.", statementPt: "Best friend significa uma pessoa que você não gosta.", isTrue: false, explanation: "Best friend is seu melhor amigo." },
        { statement: "It is fun to hang out with friends.", statementPt: "É divertido sair com amigos.", isTrue: true, explanation: "Hang out means sair/passar o tempo." },
        { statement: "You meet up at the school alone.", statementPt: "Você se encontra na escola sozinho.", isTrue: false, explanation: "Meet up involves finding someone else." }
      ],
      part2: [
        { statement: "If you argue with a friend, you need to apologize.", statementPt: "Se você discutir com um amigo, você precisa se desculpar.", isTrue: true, explanation: "Argue means discutir, apologize means pedir desculpas." },
        { statement: "To trust someone means you can keep a secret.", statementPt: "Confiar em alguém significa que você pode guardar um segredo.", isTrue: true, explanation: "Trust means confiar, keep a secret is guardar um segredo." },
        { statement: "Friends never help out when you are in trouble.", statementPt: "Amigos nunca ajudam quando você está em apuros.", isTrue: false, explanation: "Good friends help out." },
        { statement: "When you share a secret, you tell everyone.", statementPt: "Quando você compartilha um segredo, você conta para todos.", isTrue: false, explanation: "A secret is not for everyone." },
        { statement: "You apologize when you do something wrong.", statementPt: "Você pede desculpas quando faz algo errado.", isTrue: true, explanation: "Apologize is pedir desculpas." },
        { statement: "It is hard to trust a person who tells your secrets.", statementPt: "É difícil confiar em uma pessoa que conta seus segredos.", isTrue: true, explanation: "Trust requires keeping secrets." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Who is your best friend?", translation: "Quem é o seu melhor amigo?" },
        { question: "Do you like to invite friends to a party?", translation: "Você gosta de convidar amigos para uma festa?" },
        { question: "Where do you meet up with your group?", translation: "Onde você se encontra com seu grupo?" }
      ],
      part2: [
        { question: "Can you keep a secret?", translation: "Você consegue guardar um segredo?" },
        { question: "Do you usually argue with your friends?", translation: "Você costuma discutir com seus amigos?" },
        { question: "How often do you help out a friend?", translation: "Com que frequência você ajuda um amigo?" }
      ]
    }
  },
  "corpo": {
    trueOrFalse: {
      part1: [
        { statement: "You have two eyes and two ears.", statementPt: "Você tem dois olhos e duas orelhas.", isTrue: true, explanation: "Eyes means olhos, ears means orelhas." },
        { statement: "You wear shoes on your hands.", statementPt: "Você usa sapatos nas mãos.", isTrue: false, explanation: "Shoes go on your feet, not hands." },
        { statement: "Your nose is on your leg.", statementPt: "Seu nariz fica na sua perna.", isTrue: false, explanation: "Nose is on the head/face." },
        { statement: "You use your mouth to eat and talk.", statementPt: "Você usa a boca para comer e falar.", isTrue: true, explanation: "Mouth is boca." },
        { statement: "Hair grows on top of your head.", statementPt: "Cabelo cresce no topo da sua cabeça.", isTrue: true, explanation: "Hair is cabelo, head is cabeça." },
        { statement: "You walk using your arms.", statementPt: "Você anda usando seus braços.", isTrue: false, explanation: "You walk using your legs." }
      ],
      part2: [
        { statement: "Your knee is in the middle of your leg.", statementPt: "Seu joelho fica no meio da perna.", isTrue: true, explanation: "Knee means joelho." },
        { statement: "Your stomach is in your head.", statementPt: "Seu estômago fica na sua cabeça.", isTrue: false, explanation: "Stomach is in your torso." },
        { statement: "You have five toes on each foot.", statementPt: "Você tem cinco dedos no pé em cada pé.", isTrue: true, explanation: "Toes are dedos do pé." },
        { statement: "Your shoulder connects your arm to your body.", statementPt: "Seu ombro conecta seu braço ao seu corpo.", isTrue: true, explanation: "Shoulder is ombro." },
        { statement: "You have fingers on your feet.", statementPt: "Você tem dedos da mão nos seus pés.", isTrue: false, explanation: "Fingers are on hands, toes are on feet." },
        { statement: "Food goes to your stomach after you eat.", statementPt: "A comida vai para o seu estômago depois que você come.", isTrue: true, explanation: "Stomach means estômago." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "What color is your hair?", translation: "Qual a cor do seu cabelo?" },
        { question: "Do your legs hurt after you run?", translation: "Suas pernas doem depois de você correr?" },
        { question: "Do you wash your hands before eating?", translation: "Você lava as mãos antes de comer?" }
      ],
      part2: [
        { question: "Does your stomach hurt?", translation: "Seu estômago dói?" },
        { question: "Can you touch your toes?", translation: "Você consegue tocar os dedos dos seus pés?" },
        { question: "Did you hurt your knee or your shoulder?", translation: "Você machucou seu joelho ou seu ombro?" }
      ]
    }
  },
  "casa": {
    trueOrFalse: {
      part1: [
        { statement: "You sleep in the kitchen.", statementPt: "Você dorme na cozinha.", isTrue: false, explanation: "Kitchen is for cooking. Bedroom is for sleeping." },
        { statement: "You take a shower in the bathroom.", statementPt: "Você toma banho no banheiro.", isTrue: true, explanation: "Bathroom is banheiro." },
        { statement: "To sweep the floor means to make it dirty.", statementPt: "Varrer o chão significa deixá-lo sujo.", isTrue: false, explanation: "Sweep the floor is a cleaning task." },
        { statement: "You do the dishes after dinner.", statementPt: "Você lava a louça depois do jantar.", isTrue: true, explanation: "Do the dishes means lavar a louça." },
        { statement: "You make the bed in the bedroom.", statementPt: "Você arruma a cama no quarto.", isTrue: true, explanation: "Make the bed is arrumar a cama." },
        { statement: "Taking out the trash means cleaning your clothes.", statementPt: "Tirar o lixo significa limpar suas roupas.", isTrue: false, explanation: "Laundry is cleaning clothes." }
      ],
      part2: [
        { statement: "You park your car in the garden.", statementPt: "Você estaciona o seu carro no jardim.", isTrue: false, explanation: "You park the car in the garage." },
        { statement: "You iron the clothes to make them look neat.", statementPt: "Você passa as roupas para deixá-las arrumadas.", isTrue: true, explanation: "Iron the clothes is passar as roupas." },
        { statement: "Dusting the furniture cleans the dust off tables and chairs.", statementPt: "Tirar o pó dos móveis limpa a poeira de mesas e cadeiras.", isTrue: true, explanation: "Dust the furniture means limpar o pó." },
        { statement: "You use a vacuum to clean carpets.", statementPt: "Você usa um aspirador de pó para limpar tapetes.", isTrue: true, explanation: "Vacuum means aspirar o pó." },
        { statement: "A garden is inside the bedroom.", statementPt: "Um jardim fica dentro do quarto.", isTrue: false, explanation: "Garden is outside the house." },
        { statement: "The garage is a place for your car.", statementPt: "A garagem é um lugar para o seu carro.", isTrue: true, explanation: "Garage means garagem." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you clean the living room?", translation: "Você limpa a sala de estar?" },
        { question: "Who takes out the trash in your house?", translation: "Quem tira o lixo na sua casa?" },
        { question: "Do you make the bed in the morning?", translation: "Você arruma a cama de manhã?" }
      ],
      part2: [
        { question: "Do you prefer to vacuum or dust the furniture?", translation: "Você prefere aspirar ou tirar o pó dos móveis?" },
        { question: "Who irons the clothes in your family?", translation: "Quem passa a roupa na sua família?" },
        { question: "Do you have a big garden or a garage?", translation: "Você tem um grande jardim ou uma garagem?" }
      ]
    }
  },
  "casa2": {
    trueOrFalse: {
      part1: [
        { statement: "You eat dinner in the dining room.", statementPt: "Você come o jantar na sala de jantar.", isTrue: true, explanation: "Dining room is sala de jantar." },
        { statement: "The ceiling is above you.", statementPt: "O teto fica em cima de você.", isTrue: true, explanation: "Ceiling is teto." },
        { statement: "A balcony is underground.", statementPt: "Uma varanda fica debaixo da terra.", isTrue: false, explanation: "Basement is underground. Balcony is varanda." },
        { statement: "You walk through the hallway to reach other rooms.", statementPt: "Você anda pelo corredor para chegar a outros quartos.", isTrue: true, explanation: "Hallway is corredor." },
        { statement: "You mop the floor to make it dry and dirty.", statementPt: "Você passa pano no chão para deixá-lo seco e sujo.", isTrue: false, explanation: "Mop the floor makes it clean." },
        { statement: "You fold the laundry after washing it.", statementPt: "Você dobra a roupa depois de lavá-la.", isTrue: true, explanation: "Fold the laundry is dobrar a roupa." }
      ],
      part2: [
        { statement: "You sit on the couch in the living room.", statementPt: "Você senta no sofá na sala de estar.", isTrue: true, explanation: "Couch is sofá." },
        { statement: "You mow the lawn inside the house.", statementPt: "Você corta a grama dentro de casa.", isTrue: false, explanation: "Mow the lawn happens in the garden." },
        { statement: "You wash the windows to see outside clearly.", statementPt: "Você lava as janelas para ver lá fora com clareza.", isTrue: true, explanation: "Wash the windows is lavar as janelas." },
        { statement: "Watering the plants keeps them alive.", statementPt: "Regar as plantas as mantém vivas.", isTrue: true, explanation: "Water the plants is regar as plantas." },
        { statement: "You set the table after everyone is finished eating.", statementPt: "Você arruma a mesa depois que todos terminam de comer.", isTrue: false, explanation: "Set the table is done before eating." },
        { statement: "A couch is a piece of furniture.", statementPt: "Um sofá é uma peça de mobiliário.", isTrue: true, explanation: "Furniture means móveis." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you have an attic or a basement?", translation: "Você tem um sótão ou um porão?" },
        { question: "Do you fold the laundry?", translation: "Você dobra a roupa?" },
        { question: "Is your dining room big?", translation: "Sua sala de jantar é grande?" }
      ],
      part2: [
        { question: "Do you sit on the couch every evening?", translation: "Você senta no sofá toda noite?" },
        { question: "Who sets the table for dinner?", translation: "Quem arruma a mesa para o jantar?" },
        { question: "Do you wash the windows or mow the lawn?", translation: "Você lava as janelas ou corta a grama?" }
      ]
    }
  },
  "hobbies": {
    trueOrFalse: {
      part1: [
        { statement: "You need a book to read a book.", statementPt: "Você precisa de um livro para ler um livro.", isTrue: true, explanation: "Read a book is ler um livro." },
        { statement: "You play video games with a guitar.", statementPt: "Você joga videogames com um violão.", isTrue: false, explanation: "Guitar is for music." },
        { statement: "When you travel, you visit new places.", statementPt: "Quando você viaja, você visita lugares novos.", isTrue: true, explanation: "Travel means viajar." },
        { statement: "You take photos with a camera.", statementPt: "Você tira fotos com uma câmera.", isTrue: true, explanation: "Take photos means tirar fotos." },
        { statement: "You sing without opening your mouth.", statementPt: "Você canta sem abrir a boca.", isTrue: false, explanation: "Singing requires opening your mouth." },
        { statement: "Drawing and painting use colors.", statementPt: "Desenhar e pintar usam cores.", isTrue: true, explanation: "Draw/Paint involves colors." }
      ],
      part2: [
        { statement: "You knit with your fingers and some wool.", statementPt: "Você tricota com seus dedos e um pouco de lã.", isTrue: true, explanation: "Knit means tricotar." },
        { statement: "You camp inside the city museum.", statementPt: "Você acampa dentro do museu da cidade.", isTrue: false, explanation: "Camp means acampar, usually in nature." },
        { statement: "Going hiking involves walking in nature.", statementPt: "Fazer trilha envolve andar na natureza.", isTrue: true, explanation: "Go hiking means fazer trilha." },
        { statement: "You cook to prepare food.", statementPt: "Você cozinha para preparar comida.", isTrue: true, explanation: "Cook means cozinhar." },
        { statement: "Collecting items means throwing them away.", statementPt: "Colecionar itens significa jogá-los fora.", isTrue: false, explanation: "Collect means colecionar, keep things." },
        { statement: "Many people cook and bake at home.", statementPt: "Muitas pessoas cozinham e assam em casa.", isTrue: true, explanation: "Cook is a common hobby." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you like to read a book or watch movies?", translation: "Você gosta de ler um livro ou assistir filmes?" },
        { question: "Can you play guitar or sing?", translation: "Você sabe tocar violão ou cantar?" },
        { question: "Do you travel every year?", translation: "Você viaja todo ano?" }
      ],
      part2: [
        { question: "Do you know how to knit or cook?", translation: "Você sabe tricotar ou cozinhar?" },
        { question: "Do you prefer to go hiking or camp?", translation: "Você prefere fazer trilha ou acampar?" },
        { question: "What do you collect?", translation: "O que você coleciona?" }
      ]
    }
  },
  "esportes": {
    trueOrFalse: {
      part1: [
        { statement: "You play soccer with a basketball.", statementPt: "Você joga futebol com uma bola de basquete.", isTrue: false, explanation: "Soccer uses a soccer ball." },
        { statement: "You need to run in basketball.", statementPt: "Você precisa correr no basquete.", isTrue: true, explanation: "Basketball involves running." },
        { statement: "You swim in a stadium.", statementPt: "Você nada em um estádio.", isTrue: false, explanation: "You swim in a pool." },
        { statement: "A team works together to win.", statementPt: "Uma equipe trabalha junto para vencer.", isTrue: true, explanation: "Team means equipe/time." },
        { statement: "When you lose, you get a trophy.", statementPt: "Quando você perde, você ganha um troféu.", isTrue: false, explanation: "Lose means perder." },
        { statement: "A match is a game between two teams.", statementPt: "Uma partida é um jogo entre duas equipes.", isTrue: true, explanation: "Match/Game means partida/jogo." }
      ],
      part2: [
        { statement: "You play tennis with a racket.", statementPt: "Você joga tênis com uma raquete.", isTrue: true, explanation: "Tennis uses a racket." },
        { statement: "A coach helps the team to win.", statementPt: "Um treinador ajuda a equipe a vencer.", isTrue: true, explanation: "Coach means treinador." },
        { statement: "Cycling means walking very fast.", statementPt: "Ciclismo significa andar muito rápido.", isTrue: false, explanation: "Cycling involves a bicycle." },
        { statement: "You go to the gym to do exercises.", statementPt: "Você vai à academia para fazer exercícios.", isTrue: true, explanation: "Gym is academia." },
        { statement: "Volleyball is played without a ball.", statementPt: "Vôlei é jogado sem bola.", isTrue: false, explanation: "Volleyball uses a ball." },
        { statement: "The coach trains the volleyball team.", statementPt: "O treinador treina o time de vôlei.", isTrue: true, explanation: "Coach and Volleyball go together." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you like to play soccer or basketball?", translation: "Você gosta de jogar futebol ou basquete?" },
        { question: "Do you prefer to run or swim?", translation: "Você prefere correr ou nadar?" },
        { question: "Did your team win the match?", translation: "Seu time venceu a partida?" }
      ],
      part2: [
        { question: "Do you play tennis or volleyball?", translation: "Você joga tênis ou vôlei?" },
        { question: "Do you go to the gym every week?", translation: "Você vai à academia toda semana?" },
        { question: "What does the coach do?", translation: "O que o treinador faz?" }
      ]
    }
  }
};

function injectData(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const id in data) {
    if (content.indexOf(`id: "${id}"`) === -1) continue;

    const startIndex = content.indexOf(`id: "${id}"`);
    let nextId = content.indexOf('id: "', startIndex + 10);
    if (nextId === -1) nextId = content.length;
    let section = content.slice(startIndex, nextId);

    // Replace trueOrFalse
    const tfRegex = /trueOrFalse:\s*\{[\s\S]*?part2:\s*\[[\s\S]*?\]\n\s*\}/;
    if (tfRegex.test(section)) {
      section = section.replace(tfRegex, 'trueOrFalse: ' + JSON.stringify(data[id].trueOrFalse, null, 6));
    }

    // Replace speakingPractice
    const spRegex = /speakingPractice:\s*\{[\s\S]*?part2:\s*\[[\s\S]*?\]\n\s*\}/;
    if (spRegex.test(section)) {
      section = section.replace(spRegex, 'speakingPractice: ' + JSON.stringify(data[id].speakingPractice, null, 6));
    }

    content = content.slice(0, startIndex) + section + content.slice(nextId);
  }

  fs.writeFileSync(filePath, content);
}

injectData('./data/scenarios1.ts');
console.log("Injected into scenarios1.ts");
