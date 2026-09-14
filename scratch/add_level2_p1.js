const fs = require('fs');

const data1 = {
  "familia": {
    tf_a1_p2: [
      { statement: "Your father's father is your grandfather.", statementPt: "O pai do seu pai é seu avô.", isTrue: true, explanation: "Grandfather means avô." },
      { statement: "A mother and a father are parents.", statementPt: "Uma mãe e um pai são pais.", isTrue: true, explanation: "Parents means mãe e pai." },
      { statement: "An uncle is a woman.", statementPt: "Um tio é uma mulher.", isTrue: false, explanation: "Uncle is a man. Aunt is a woman." },
      { statement: "Your sister's brother is your cousin.", statementPt: "O irmão da sua irmã é seu primo.", isTrue: false, explanation: "He is also your brother." },
      { statement: "A family with 10 brothers is a big family.", statementPt: "Uma família com 10 irmãos é uma família grande.", isTrue: true, explanation: "Big family means muitos parentes." },
      { statement: "A grandmother is usually older than a mother.", statementPt: "Uma avó é normalmente mais velha que uma mãe.", isTrue: true, explanation: "Grandmother is the mother of the mother." }
    ],
    sp_a1_p2: [
      { question: "Is your family big or small?", translation: "Sua família é grande ou pequena?" },
      { question: "Do you have an older sister?", translation: "Você tem uma irmã mais velha?" },
      { question: "Where does your grandfather live?", translation: "Onde o seu avô mora?" }
    ],
    tf_b1_p2: [
      { statement: "A man's wife is his female spouse.", statementPt: "A esposa de um homem é seu cônjuge do sexo feminino.", isTrue: true, explanation: "Wife means esposa, spouse is cônjuge." },
      { statement: "Your son's daughter is your niece.", statementPt: "A filha do seu filho é sua sobrinha.", isTrue: false, explanation: "She is your granddaughter." },
      { statement: "A grandfather has a grandson or a granddaughter.", statementPt: "Um avô tem um neto ou uma neta.", isTrue: true, explanation: "Grandson and granddaughter." },
      { statement: "A nephew is the son of your sister or brother.", statementPt: "Um sobrinho é o filho da sua irmã ou irmão.", isTrue: true, explanation: "Nephew is sobrinho." },
      { statement: "A wife cannot be a mother.", statementPt: "Uma esposa não pode ser mãe.", isTrue: false, explanation: "A wife can be a mother." },
      { statement: "Your niece is a girl.", statementPt: "Sua sobrinha é uma menina.", isTrue: true, explanation: "Niece means sobrinha." }
    ],
    sp_b1_p2: [
      { question: "Does your brother have a wife?", translation: "Seu irmão tem uma esposa?" },
      { question: "How many nephews do you have?", translation: "Quantos sobrinhos você tem?" },
      { question: "Is she your niece or your granddaughter?", translation: "Ela é sua sobrinha ou sua neta?" }
    ]
  },
  "amigos": {
    tf_a1_p2: [
      { statement: "You go to a party to have fun.", statementPt: "Você vai a uma festa para se divertir.", isTrue: true, explanation: "Party and fun go together." },
      { statement: "A best friend is someone you talk to every day.", statementPt: "Um melhor amigo é alguém com quem você conversa todo dia.", isTrue: true, explanation: "Best friend means melhor amigo." },
      { statement: "To chat means to play a sport.", statementPt: "Conversar significa jogar um esporte.", isTrue: false, explanation: "Chat means conversar." },
      { statement: "A group is only two people.", statementPt: "Um grupo são apenas duas pessoas.", isTrue: false, explanation: "A group is usually more than two people." },
      { statement: "You invite friends to your house.", statementPt: "Você convida amigos para sua casa.", isTrue: true, explanation: "Invite is convidar." },
      { statement: "When you share, you give something to a friend.", statementPt: "Quando você compartilha, você dá algo para um amigo.", isTrue: true, explanation: "Share means compartilhar." }
    ],
    sp_a1_p2: [
      { question: "Do you chat with your friends a lot?", translation: "Você conversa muito com seus amigos?" },
      { question: "How many friends are in your group?", translation: "Quantos amigos estão no seu grupo?" },
      { question: "Did you have fun at the party?", translation: "Você se divertiu na festa?" }
    ],
    tf_b1_p2: [
      { statement: "Good friends never argue.", statementPt: "Bons amigos nunca discutem.", isTrue: false, explanation: "Argue means discutir, even good friends argue sometimes." },
      { statement: "If you trust someone, you tell them secrets.", statementPt: "Se você confia em alguém, você conta segredos a eles.", isTrue: true, explanation: "Trust is confiar." },
      { statement: "You apologize when you are happy.", statementPt: "Você pede desculpas quando está feliz.", isTrue: false, explanation: "Apologize is when you are sorry." },
      { statement: "Keeping a secret means telling your other friends.", statementPt: "Guardar um segredo significa contar aos seus outros amigos.", isTrue: false, explanation: "Keep a secret means not telling anyone." },
      { statement: "You should help out a friend who has a problem.", statementPt: "Você deve ajudar um amigo que tem um problema.", isTrue: true, explanation: "Help out means ajudar." },
      { statement: "Trust is very important in a friendship.", statementPt: "A confiança é muito importante em uma amizade.", isTrue: true, explanation: "Trust means confiança." }
    ],
    sp_b1_p2: [
      { question: "Why is it important to trust your friends?", translation: "Por que é importante confiar nos seus amigos?" },
      { question: "Do you find it hard to keep a secret?", translation: "Você acha difícil guardar um segredo?" },
      { question: "When did you last apologize to a friend?", translation: "Quando foi a última vez que você pediu desculpas a um amigo?" }
    ]
  },
  "corpo": {
    tf_a1_p2: [
      { statement: "You use your legs to run.", statementPt: "Você usa suas pernas para correr.", isTrue: true, explanation: "Legs are for running and walking." },
      { statement: "Your hand is connected to your arm.", statementPt: "Sua mão está conectada ao seu braço.", isTrue: true, explanation: "Arm and hand are connected." },
      { statement: "You see with your ears.", statementPt: "Você vê com suas orelhas.", isTrue: false, explanation: "You see with your eyes." },
      { statement: "Your nose is below your mouth.", statementPt: "Seu nariz fica abaixo da sua boca.", isTrue: false, explanation: "Nose is above the mouth." },
      { statement: "Some people have long hair.", statementPt: "Algumas pessoas têm cabelo longo.", isTrue: true, explanation: "Hair can be long or short." },
      { statement: "Your foot is at the bottom of your leg.", statementPt: "Seu pé fica na parte inferior da sua perna.", isTrue: true, explanation: "Foot is pé." }
    ],
    sp_a1_p2: [
      { question: "Do you have long or short hair?", translation: "Você tem cabelo longo ou curto?" },
      { question: "Can you touch your head with your hand?", translation: "Você consegue tocar sua cabeça com a sua mão?" },
      { question: "Are your eyes blue or brown?", translation: "Seus olhos são azuis ou castanhos?" }
    ],
    tf_b1_p2: [
      { statement: "Your stomach digests the food you eat.", statementPt: "Seu estômago digere a comida que você come.", isTrue: true, explanation: "Stomach is estômago." },
      { statement: "You have ten fingers on your hands.", statementPt: "Você tem dez dedos nas mãos.", isTrue: true, explanation: "Fingers are dedos da mão." },
      { statement: "Your knee is part of your arm.", statementPt: "Seu joelho é parte do seu braço.", isTrue: false, explanation: "Knee is part of the leg." },
      { statement: "The shoulder is between the neck and the arm.", statementPt: "O ombro fica entre o pescoço e o braço.", isTrue: true, explanation: "Shoulder is ombro." },
      { statement: "Toes are located on your hands.", statementPt: "Os dedos dos pés ficam nas suas mãos.", isTrue: false, explanation: "Toes are on the feet." },
      { statement: "If you eat too much, your stomach might hurt.", statementPt: "Se você comer demais, seu estômago pode doer.", isTrue: true, explanation: "Stomach hurts." }
    ],
    sp_b1_p2: [
      { question: "How many fingers do you have?", translation: "Quantos dedos da mão você tem?" },
      { question: "Did you ever hurt your shoulder?", translation: "Você já machucou seu ombro?" },
      { question: "Why does your stomach hurt sometimes?", translation: "Por que seu estômago dói às vezes?" }
    ]
  },
  "casa": {
    tf_a1_p2: [
      { statement: "You watch TV in the living room.", statementPt: "Você assiste TV na sala de estar.", isTrue: true, explanation: "Living room is sala de estar." },
      { statement: "You cook meals in the bedroom.", statementPt: "Você cozinha refeições no quarto.", isTrue: false, explanation: "You cook in the kitchen." },
      { statement: "Cleaning the house is an everyday task.", statementPt: "Limpar a casa é uma tarefa diária.", isTrue: true, explanation: "Clean means limpar." },
      { statement: "You wash your hands in the bathroom.", statementPt: "Você lava suas mãos no banheiro.", isTrue: true, explanation: "Bathroom is banheiro." },
      { statement: "Taking out the trash keeps the house smelling bad.", statementPt: "Tirar o lixo mantém a casa cheirando mal.", isTrue: false, explanation: "It prevents bad smells." },
      { statement: "Laundry means washing dirty clothes.", statementPt: "Lavanderia/lavar a roupa significa lavar roupas sujas.", isTrue: true, explanation: "Laundry is roupa suja/lavar roupa." }
    ],
    sp_a1_p2: [
      { question: "Do you make the bed every day?", translation: "Você arruma a cama todos os dias?" },
      { question: "Who does the dishes in your house?", translation: "Quem lava a louça na sua casa?" },
      { question: "Is your living room big?", translation: "A sua sala de estar é grande?" }
    ],
    tf_b1_p2: [
      { statement: "You use an iron to vacuum the floor.", statementPt: "Você usa um ferro para aspirar o chão.", isTrue: false, explanation: "You iron the clothes. You vacuum the floor." },
      { statement: "Dusting the furniture keeps the house clean.", statementPt: "Tirar o pó dos móveis mantém a casa limpa.", isTrue: true, explanation: "Dust the furniture is tirar o pó." },
      { statement: "A beautiful garden has many flowers.", statementPt: "Um belo jardim tem muitas flores.", isTrue: true, explanation: "Garden is jardim." },
      { statement: "The garage is usually outside or next to the house.", statementPt: "A garagem geralmente fica do lado de fora ou ao lado da casa.", isTrue: true, explanation: "Garage is garagem." },
      { statement: "You vacuum the garden.", statementPt: "Você aspira o jardim.", isTrue: false, explanation: "You vacuum carpets or floors indoors." },
      { statement: "Ironing clothes removes wrinkles from them.", statementPt: "Passar roupas remove os amassados delas.", isTrue: true, explanation: "Iron the clothes is passar roupa." }
    ],
    sp_b1_p2: [
      { question: "Do you prefer to vacuum or dust the furniture?", translation: "Você prefere aspirar ou tirar o pó dos móveis?" },
      { question: "Is your car in the garage?", translation: "O seu carro está na garagem?" },
      { question: "Do you like to iron your clothes?", translation: "Você gosta de passar suas roupas?" }
    ]
  },
  "casa2": {
    tf_a1_p2: [
      { statement: "A hallway connects different rooms.", statementPt: "Um corredor conecta diferentes quartos.", isTrue: true, explanation: "Hallway is corredor." },
      { statement: "You mop the floor with water.", statementPt: "Você passa pano no chão com água.", isTrue: true, explanation: "Mop the floor uses water." },
      { statement: "The attic is under the house.", statementPt: "O sótão fica embaixo da casa.", isTrue: false, explanation: "Basement is under. Attic is on top." },
      { statement: "You look up to see the ceiling.", statementPt: "Você olha para cima para ver o teto.", isTrue: true, explanation: "Ceiling is teto." },
      { statement: "A wall separates the rooms.", statementPt: "Uma parede separa os quartos.", isTrue: true, explanation: "Wall is parede." },
      { statement: "You fold the laundry before you wash it.", statementPt: "Você dobra a roupa antes de lavá-la.", isTrue: false, explanation: "You fold it after washing." }
    ],
    sp_a1_p2: [
      { question: "Do you have a balcony?", translation: "Você tem uma varanda?" },
      { question: "Who mops the floor in your house?", translation: "Quem passa o pano no chão na sua casa?" },
      { question: "What color is the wall in your bedroom?", translation: "Que cor é a parede do seu quarto?" }
    ],
    tf_b1_p2: [
      { statement: "A couch is usually in the living room.", statementPt: "Um sofá geralmente fica na sala de estar.", isTrue: true, explanation: "Couch is sofá." },
      { statement: "You mow the lawn with a lawnmower.", statementPt: "Você corta a grama com um cortador de grama.", isTrue: true, explanation: "Mow the lawn is cortar a grama." },
      { statement: "Watering the plants helps them grow.", statementPt: "Regar as plantas ajuda-as a crescer.", isTrue: true, explanation: "Water the plants is regar as plantas." },
      { statement: "Washing the windows makes them dirty.", statementPt: "Lavar as janelas as deixa sujas.", isTrue: false, explanation: "Washing makes them clean." },
      { statement: "You set the table before eating dinner.", statementPt: "Você arruma a mesa antes de comer o jantar.", isTrue: true, explanation: "Set the table is colocar pratos, talheres, etc." },
      { statement: "A couch is not a piece of furniture.", statementPt: "Um sofá não é uma peça de mobília.", isTrue: false, explanation: "Couch is furniture." }
    ],
    sp_b1_p2: [
      { question: "Do you mow the lawn on weekends?", translation: "Você corta a grama nos finais de semana?" },
      { question: "Is there a comfortable couch in your house?", translation: "Tem um sofá confortável na sua casa?" },
      { question: "How often do you water the plants?", translation: "Com que frequência você rega as plantas?" }
    ]
  },
  "hobbies": {
    tf_a1_p2: [
      { statement: "You listen to music with your ears.", statementPt: "Você escuta música com as orelhas.", isTrue: true, explanation: "Listen to music is escutar música." },
      { statement: "You need a TV or computer to watch movies.", statementPt: "Você precisa de uma TV ou computador para assistir a filmes.", isTrue: true, explanation: "Watch movies is assistir filmes." },
      { statement: "Dancing requires moving your body.", statementPt: "Dançar requer mover o seu corpo.", isTrue: true, explanation: "Dance is dançar." },
      { statement: "You play video games outside in the park.", statementPt: "Você joga videogames lá fora no parque.", isTrue: false, explanation: "Usually played indoors on a screen." },
      { statement: "You draw with a pen or pencil.", statementPt: "Você desenha com uma caneta ou lápis.", isTrue: true, explanation: "Draw means desenhar." },
      { statement: "Reading a book makes a lot of noise.", statementPt: "Ler um livro faz muito barulho.", isTrue: false, explanation: "Reading is quiet." }
    ],
    sp_a1_p2: [
      { question: "Do you like to take photos?", translation: "Você gosta de tirar fotos?" },
      { question: "Do you sing when you take a shower?", translation: "Você canta quando toma banho?" },
      { question: "What video games do you play?", translation: "Quais videogames você joga?" }
    ],
    tf_b1_p2: [
      { statement: "You knit using yarn and needles.", statementPt: "Você tricota usando fio e agulhas.", isTrue: true, explanation: "Knit is tricotar." },
      { statement: "Going hiking is an indoor activity.", statementPt: "Fazer trilha é uma atividade interna.", isTrue: false, explanation: "Hiking is outdoors." },
      { statement: "Cooking can be a fun and delicious hobby.", statementPt: "Cozinhar pode ser um hobby divertido e delicioso.", isTrue: true, explanation: "Cook is cozinhar." },
      { statement: "You camp in a tent in nature.", statementPt: "Você acampa em uma barraca na natureza.", isTrue: true, explanation: "Camp means acampar." },
      { statement: "Collecting items means throwing them all away.", statementPt: "Colecionar itens significa jogar todos fora.", isTrue: false, explanation: "Collect is guardar." },
      { statement: "Knitting is a common hobby for winter clothes.", statementPt: "Tricotar é um hobby comum para roupas de inverno.", isTrue: true, explanation: "Knit means tricotar." }
    ],
    sp_b1_p2: [
      { question: "Do you want to learn how to knit?", translation: "Você quer aprender a tricotar?" },
      { question: "Have you ever gone hiking in the mountains?", translation: "Você já fez trilha nas montanhas?" },
      { question: "Do you collect anything, like coins or stamps?", translation: "Você coleciona alguma coisa, como moedas ou selos?" }
    ]
  },
  "esportes": {
    tf_a1_p2: [
      { statement: "You run when you play basketball.", statementPt: "Você corre quando joga basquete.", isTrue: true, explanation: "Run is correr." },
      { statement: "You use a ball to swim.", statementPt: "Você usa uma bola para nadar.", isTrue: false, explanation: "Swim is nadar, no ball needed." },
      { statement: "A team has many players.", statementPt: "Uma equipe tem muitos jogadores.", isTrue: true, explanation: "Team is equipe." },
      { statement: "A stadium is very small.", statementPt: "Um estádio é muito pequeno.", isTrue: false, explanation: "Stadium is large." },
      { statement: "When you win, you are happy.", statementPt: "Quando você vence, você fica feliz.", isTrue: true, explanation: "Win means vencer." },
      { statement: "Soccer is played with a ball.", statementPt: "O futebol é jogado com uma bola.", isTrue: true, explanation: "Soccer uses a ball." }
    ],
    sp_a1_p2: [
      { question: "Do you like to run in the park?", translation: "Você gosta de correr no parque?" },
      { question: "Have you ever been to a stadium?", translation: "Você já foi a um estádio?" },
      { question: "Do you play in a soccer team?", translation: "Você joga num time de futebol?" }
    ],
    tf_b1_p2: [
      { statement: "Tennis is played with a racket and a net.", statementPt: "Tênis é jogado com uma raquete e uma rede.", isTrue: true, explanation: "Tennis uses a racket." },
      { statement: "A coach trains the players.", statementPt: "Um treinador treina os jogadores.", isTrue: true, explanation: "Coach is treinador." },
      { statement: "Cycling is swimming in the pool.", statementPt: "Ciclismo é nadar na piscina.", isTrue: false, explanation: "Cycling is riding a bicycle." },
      { statement: "You go to the gym to lift weights.", statementPt: "Você vai à academia para levantar pesos.", isTrue: true, explanation: "Gym is academia." },
      { statement: "Volleyball uses a ball.", statementPt: "O vôlei usa uma bola.", isTrue: true, explanation: "Volleyball means vôlei." },
      { statement: "A coach never talks to the team.", statementPt: "Um treinador nunca fala com a equipe.", isTrue: false, explanation: "The coach must guide the team." }
    ],
    sp_b1_p2: [
      { question: "Do you prefer tennis or cycling?", translation: "Você prefere tênis ou ciclismo?" },
      { question: "Who is the coach of your favorite team?", translation: "Quem é o treinador do seu time favorito?" },
      { question: "Do you go to the gym often?", translation: "Você vai à academia com frequência?" }
    ]
  },
  "supermercado": {
    tf_a1_p2: [
      { statement: "A checkout is where you pay.", statementPt: "O caixa/saída é onde você paga.", isTrue: true, explanation: "Checkout is a área do caixa." },
      { statement: "A discount makes the price higher.", statementPt: "Um desconto deixa o preço mais alto.", isTrue: false, explanation: "Discount makes it cheaper." },
      { statement: "An aisle is a corridor between shelves.", statementPt: "Um corredor é uma passagem entre prateleiras.", isTrue: true, explanation: "Aisle means corredor." },
      { statement: "You pay before you enter the store.", statementPt: "Você paga antes de entrar na loja.", isTrue: false, explanation: "You pay after choosing." },
      { statement: "A receipt shows what you bought.", statementPt: "Um recibo mostra o que você comprou.", isTrue: true, explanation: "Receipt is recibo." },
      { statement: "You put bags into your shopping cart.", statementPt: "Você coloca sacolas dentro do seu carrinho de compras.", isTrue: true, explanation: "Shopping cart is carrinho." }
    ],
    sp_a1_p2: [
      { question: "Do you look for a discount when shopping?", translation: "Você procura por um desconto ao fazer compras?" },
      { question: "Do you check the price before buying?", translation: "Você verifica o preço antes de comprar?" },
      { question: "Which aisle has the milk?", translation: "Qual corredor tem o leite?" }
    ],
    tf_b1_p2: [
      { statement: "You can pay with cash or credit card.", statementPt: "Você pode pagar com dinheiro vivo ou cartão de crédito.", isTrue: true, explanation: "Cash means dinheiro vivo." },
      { statement: "A customer sells things to the store.", statementPt: "Um cliente vende coisas para a loja.", isTrue: false, explanation: "Customer buys." },
      { statement: "A shelf holds the products in the store.", statementPt: "Uma prateleira segura os produtos na loja.", isTrue: true, explanation: "Shelf means prateleira." },
      { statement: "If you pay more, you receive change.", statementPt: "Se você pagar a mais, você recebe troco.", isTrue: true, explanation: "Change means troco." },
      { statement: "Credit cards are made of paper.", statementPt: "Cartões de crédito são feitos de papel.", isTrue: false, explanation: "Credit cards are plastic/metal." },
      { statement: "A customer walks down the aisle to look at the shelves.", statementPt: "Um cliente anda pelo corredor para olhar as prateleiras.", isTrue: true, explanation: "Customer, aisle, shelves." }
    ],
    sp_b1_p2: [
      { question: "Do you prefer to pay with cash or credit card?", translation: "Você prefere pagar com dinheiro ou cartão de crédito?" },
      { question: "Did you check the products on the top shelf?", translation: "Você verificou os produtos na prateleira de cima?" },
      { question: "Do you always count your change?", translation: "Você sempre conta o seu troco?" }
    ]
  }
};

function injectData(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const id in data1) {
    if (content.indexOf(`id: "${id}"`) === -1) continue;

    const startIndex = content.indexOf(`id: "${id}"`);
    let nextId = content.indexOf('id: "', startIndex + 10);
    if (nextId === -1) nextId = content.length;
    let section = content.slice(startIndex, nextId);

    const tfRegex = /trueOrFalse:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;
    const spRegex = /speakingPractice:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;

    const tfMatch = section.match(tfRegex);
    const spMatch = section.match(spRegex);

    if (tfMatch && spMatch) {
      const oldTfP1 = tfMatch[1];
      const oldTfP2 = tfMatch[2];
      
      const oldSpP1 = spMatch[1];
      const oldSpP2 = spMatch[2];

      const d = data1[id];

      const newTfP1Str = `[\n${oldTfP1}\n      ]`;
      const newTfP2Str = JSON.stringify(d.tf_a1_p2, null, 8).replace(/\]$/, '      ]');
      
      const newTfLevel2P1Str = `[\n${oldTfP2}\n      ]`;
      const newTfLevel2P2Str = JSON.stringify(d.tf_b1_p2, null, 8).replace(/\]$/, '      ]');

      const tfStr = `trueOrFalse: {
      part1: ${newTfP1Str},
      part2: ${newTfP2Str}
    },
    trueOrFalseLevel2: {
      part1: ${newTfLevel2P1Str},
      part2: ${newTfLevel2P2Str}
    }`;

      const newSpP1Str = `[\n${oldSpP1}\n      ]`;
      const newSpP2Str = JSON.stringify(d.sp_a1_p2, null, 8).replace(/\]$/, '      ]');

      const newSpLevel2P1Str = `[\n${oldSpP2}\n      ]`;
      const newSpLevel2P2Str = JSON.stringify(d.sp_b1_p2, null, 8).replace(/\]$/, '      ]');

      const spStr = `speakingPractice: {
      part1: ${newSpP1Str},
      part2: ${newSpP2Str}
    },
    speakingPracticeLevel2: {
      part1: ${newSpLevel2P1Str},
      part2: ${newSpLevel2P2Str}
    }`;

      section = section.replace(tfRegex, tfStr);
      section = section.replace(spRegex, spStr);

      content = content.slice(0, startIndex) + section + content.slice(nextId);
      console.log(`Updated scenario ${id}`);
    } else {
      console.log(`Failed to match regex for ${id}`);
    }
  }

  fs.writeFileSync(filePath, content);
}

injectData('../data/scenarios1.ts');
console.log("Done scenarios1.ts");
