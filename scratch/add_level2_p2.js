const fs = require('fs');

const data2 = {
  "compras": {
    tf_a1_p2: [
      { statement: "You try on shoes to see if they fit.", statementPt: "Você experimenta sapatos para ver se eles servem.", isTrue: true, explanation: "Try on means experimentar." },
      { statement: "A store is a place where you sleep.", statementPt: "Uma loja é um lugar onde você dorme.", isTrue: false, explanation: "Store is loja." },
      { statement: "Expensive clothes are cheap.", statementPt: "Roupas caras são baratas.", isTrue: false, explanation: "Expensive means it costs a lot." },
      { statement: "You go to a fitting room to try on clothes.", statementPt: "Você vai a um provador para experimentar roupas.", isTrue: true, explanation: "Fitting room is provador." },
      { statement: "A sale means things are more expensive.", statementPt: "Uma liquidação significa que as coisas estão mais caras.", isTrue: false, explanation: "Sale means promotion/discounts." },
      { statement: "A customer buys clothes.", statementPt: "Um cliente compra roupas.", isTrue: true, explanation: "Customer is cliente." }
    ],
    sp_a1_p2: [
      { question: "Do you like to go to a store?", translation: "Você gosta de ir a uma loja?" },
      { question: "Where is the fitting room?", translation: "Onde é o provador?" },
      { question: "Are these shoes expensive?", translation: "Estes sapatos são caros?" }
    ],
    tf_b1_p2: [
      { statement: "You wear a jacket when it is hot.", statementPt: "Você usa uma jaqueta quando está calor.", isTrue: false, explanation: "Jacket is used when it is cold." },
      { statement: "You keep money in your wallet.", statementPt: "Você guarda dinheiro na sua carteira.", isTrue: true, explanation: "Wallet is carteira." },
      { statement: "Cheap clothes are good when you want to save cash.", statementPt: "Roupas baratas são boas quando você quer economizar dinheiro.", isTrue: true, explanation: "Cheap means barato, cash means dinheiro." },
      { statement: "You pay with a credit card online.", statementPt: "Você paga com um cartão de crédito online.", isTrue: true, explanation: "Credit card is cartão de crédito." },
      { statement: "A wallet is something you wear on your head.", statementPt: "Uma carteira é algo que você usa na cabeça.", isTrue: false, explanation: "Wallet is for money/cards." },
      { statement: "You can pay with cash at the store.", statementPt: "Você pode pagar em dinheiro vivo na loja.", isTrue: true, explanation: "Cash means dinheiro físico." }
    ],
    sp_b1_p2: [
      { question: "Did you pay in cash or by credit card?", translation: "Você pagou em dinheiro ou cartão de crédito?" },
      { question: "Is your jacket cheap or expensive?", translation: "Sua jaqueta é barata ou cara?" },
      { question: "Where is your wallet?", translation: "Onde está a sua carteira?" }
    ]
  },
  "profissoes": {
    tf_a1_p2: [
      { statement: "A mechanic fixes cars.", statementPt: "Um mecânico conserta carros.", isTrue: true, explanation: "Mechanic means mecânico." },
      { statement: "A nurse helps a doctor.", statementPt: "Uma enfermeira ajuda um médico.", isTrue: true, explanation: "Nurse means enfermeiro(a)." },
      { statement: "A chef works in a school.", statementPt: "Um chef trabalha numa escola.", isTrue: false, explanation: "Chef works in a restaurant/kitchen." },
      { statement: "A lawyer helps people with the law.", statementPt: "Um advogado ajuda pessoas com a lei.", isTrue: true, explanation: "Lawyer is advogado." },
      { statement: "An engineer designs buildings.", statementPt: "Um engenheiro projeta prédios.", isTrue: true, explanation: "Engineer is engenheiro." },
      { statement: "You do your job at the office.", statementPt: "Você faz o seu trabalho no escritório.", isTrue: true, explanation: "Office is escritório." }
    ],
    sp_a1_p2: [
      { question: "Does a nurse work in a hospital?", translation: "Uma enfermeira trabalha num hospital?" },
      { question: "Do you want to be a chef or a mechanic?", translation: "Você quer ser um chef ou um mecânico?" },
      { question: "Who works in this office?", translation: "Quem trabalha neste escritório?" }
    ],
    tf_b1_p2: [
      { statement: "An artist flies an airplane.", statementPt: "Um artista voa num avião.", isTrue: false, explanation: "A pilot flies an airplane." },
      { statement: "A driver drives a bus or a car.", statementPt: "Um motorista dirige um ônibus ou carro.", isTrue: true, explanation: "Driver is motorista." },
      { statement: "A dentist checks your teeth.", statementPt: "Um dentista verifica os seus dentes.", isTrue: true, explanation: "Dentist is dentista." },
      { statement: "A firefighter puts out fires.", statementPt: "Um bombeiro apaga incêndios.", isTrue: true, explanation: "Firefighter is bombeiro." },
      { statement: "A pilot works in a hospital.", statementPt: "Um piloto trabalha num hospital.", isTrue: false, explanation: "Pilot works at an airport." },
      { statement: "An artist draws and paints.", statementPt: "Um artista desenha e pinta.", isTrue: true, explanation: "Artist means artista." }
    ],
    sp_b1_p2: [
      { question: "Do you visit the dentist every year?", translation: "Você visita o dentista todo ano?" },
      { question: "Does the pilot fly big airplanes?", translation: "O piloto voa em aviões grandes?" },
      { question: "Are you a good driver?", translation: "Você é um bom motorista?" }
    ]
  },
  "lugares": {
    tf_a1_p2: [
      { statement: "A street is where cars drive.", statementPt: "Uma rua é onde os carros dirigem.", isTrue: true, explanation: "Street is rua." },
      { statement: "You borrow books from a library.", statementPt: "Você pega livros emprestados em uma biblioteca.", isTrue: true, explanation: "Library is biblioteca." },
      { statement: "A hospital is a place for sick people.", statementPt: "Um hospital é um lugar para pessoas doentes.", isTrue: true, explanation: "Hospital is hospital." },
      { statement: "To turn left means to go straight.", statementPt: "Virar à esquerda significa seguir reto.", isTrue: false, explanation: "Turn left is virar à esquerda." },
      { statement: "You keep money in the bank.", statementPt: "Você guarda dinheiro no banco.", isTrue: true, explanation: "Bank is banco." },
      { statement: "You take the bus at the bus stop.", statementPt: "Você pega o ônibus no ponto de ônibus.", isTrue: true, explanation: "Bus stop is ponto de ônibus." }
    ],
    sp_a1_p2: [
      { question: "Is the bank near the hospital?", translation: "O banco é perto do hospital?" },
      { question: "Do I go straight to find the library?", translation: "Eu sigo reto para encontrar a biblioteca?" },
      { question: "Where is the nearest bus stop?", translation: "Onde é o ponto de ônibus mais próximo?" }
    ],
    tf_b1_p2: [
      { statement: "You fly on an airplane at the airport.", statementPt: "Você voa num avião no aeroporto.", isTrue: true, explanation: "Airport is aeroporto." },
      { statement: "A restaurant is a place where you buy medicine.", statementPt: "Um restaurante é um lugar onde você compra remédios.", isTrue: false, explanation: "You buy medicine at the pharmacy." },
      { statement: "A museum shows art and history.", statementPt: "Um museu mostra arte e história.", isTrue: true, explanation: "Museum is museu." },
      { statement: "A station is for trains or buses.", statementPt: "Uma estação é para trens ou ônibus.", isTrue: true, explanation: "Station is estação." },
      { statement: "You buy medicine at the pharmacy.", statementPt: "Você compra remédio na farmácia.", isTrue: true, explanation: "Pharmacy is farmácia." },
      { statement: "The airport is in the center of the city.", statementPt: "O aeroporto fica no centro da cidade.", isTrue: false, explanation: "Usually airports are outside the city center." }
    ],
    sp_b1_p2: [
      { question: "Do you want to eat at a restaurant?", translation: "Você quer comer num restaurante?" },
      { question: "How do I go to the airport from the station?", translation: "Como eu vou ao aeroporto a partir da estação?" },
      { question: "Did you visit the history museum?", translation: "Você visitou o museu de história?" }
    ]
  },
  "animais": {
    tf_a1_p2: [
      { statement: "A cow gives us milk.", statementPt: "Uma vaca nos dá leite.", isTrue: true, explanation: "Cow is vaca." },
      { statement: "A horse is a very small pet.", statementPt: "Um cavalo é um animal de estimação muito pequeno.", isTrue: false, explanation: "Horse is a large animal." },
      { statement: "You walk the dog every morning.", statementPt: "Você passeia com o cachorro toda manhã.", isTrue: true, explanation: "Walk the dog is passear com o cachorro." },
      { statement: "A vet is a doctor for animals.", statementPt: "Um veterinário é um médico para animais.", isTrue: true, explanation: "Vet is veterinário." },
      { statement: "You feed a fish with water.", statementPt: "Você alimenta um peixe com água.", isTrue: false, explanation: "You feed it with fish food." },
      { statement: "A bird can fly in the sky.", statementPt: "Um pássaro pode voar no céu.", isTrue: true, explanation: "Bird is pássaro." }
    ],
    sp_a1_p2: [
      { question: "Did you walk the dog today?", translation: "Você passeou com o cachorro hoje?" },
      { question: "Do you feed the birds?", translation: "Você alimenta os pássaros?" },
      { question: "Have you ever seen a horse or a cow?", translation: "Você já viu um cavalo ou uma vaca?" }
    ],
    tf_b1_p2: [
      { statement: "A tiger is a big wild cat.", statementPt: "Um tigre é um grande gato selvagem.", isTrue: true, explanation: "Tiger is tigre." },
      { statement: "A pig is an animal that lays eggs.", statementPt: "Um porco é um animal que bota ovos.", isTrue: false, explanation: "A chicken lays eggs." },
      { statement: "A rabbit likes to eat carrots.", statementPt: "Um coelho gosta de comer cenouras.", isTrue: true, explanation: "Rabbit is coelho." },
      { statement: "Lions live in the wild.", statementPt: "Leões vivem na selva.", isTrue: true, explanation: "Lion is leão." },
      { statement: "A chicken is a type of bird.", statementPt: "Uma galinha é um tipo de ave.", isTrue: true, explanation: "Chicken is galinha." },
      { statement: "Pigs have wings and can fly.", statementPt: "Porcos têm asas e podem voar.", isTrue: false, explanation: "Pigs cannot fly." }
    ],
    sp_b1_p2: [
      { question: "Do you have a rabbit in your house?", translation: "Você tem um coelho na sua casa?" },
      { question: "Is a lion stronger than a tiger?", translation: "Um leão é mais forte que um tigre?" },
      { question: "Did you see the pigs and chickens on the farm?", translation: "Você viu os porcos e galinhas na fazenda?" }
    ]
  },
  "culinaria": {
    tf_a1_p2: [
      { statement: "You boil water to make pasta.", statementPt: "Você ferve água para fazer macarrão.", isTrue: true, explanation: "Boil is ferver." },
      { statement: "You use a knife to cut things.", statementPt: "Você usa uma faca para cortar as coisas.", isTrue: true, explanation: "Knife is faca." },
      { statement: "You fry an egg in an oven.", statementPt: "Você frita um ovo em um forno.", isTrue: false, explanation: "You bake in an oven, fry in a pan." },
      { statement: "You chop vegetables with a spoon.", statementPt: "Você pica vegetais com uma colher.", isTrue: false, explanation: "Chop is with a knife." },
      { statement: "Ingredients are what you need for a recipe.", statementPt: "Ingredientes são o que você precisa para uma receita.", isTrue: true, explanation: "Ingredients and recipe go together." },
      { statement: "You bake a cake in the oven.", statementPt: "Você assa um bolo no forno.", isTrue: true, explanation: "Bake is assar, oven is forno." }
    ],
    sp_a1_p2: [
      { question: "Do you know how to boil an egg?", translation: "Você sabe como ferver um ovo?" },
      { question: "Do you use a knife to chop onions?", translation: "Você usa uma faca para picar cebolas?" },
      { question: "What is your favorite recipe to bake?", translation: "Qual é a sua receita favorita para assar?" }
    ],
    tf_b1_p2: [
      { statement: "You mix the salad in a bowl.", statementPt: "Você mistura a salada numa tigela.", isTrue: true, explanation: "Mix is misturar, bowl is tigela." },
      { statement: "You eat soup with a fork.", statementPt: "Você come sopa com um garfo.", isTrue: false, explanation: "Fork is garfo, you use a spoon for soup." },
      { statement: "You put food on a plate before eating.", statementPt: "Você coloca comida num prato antes de comer.", isTrue: true, explanation: "Plate is prato." },
      { statement: "You pour juice into a glass.", statementPt: "Você despeja suco em um copo.", isTrue: true, explanation: "Pour is despejar/servir líquido." },
      { statement: "A fork is used to cut meat.", statementPt: "Um garfo é usado para cortar carne.", isTrue: false, explanation: "Knife cuts, fork holds." },
      { statement: "You mix ingredients to make a cake.", statementPt: "Você mistura ingredientes para fazer um bolo.", isTrue: true, explanation: "Mix means misturar." }
    ],
    sp_b1_p2: [
      { question: "Can you pour some coffee for me?", translation: "Você pode me servir um pouco de café?" },
      { question: "Did you mix the soup in the bowl?", translation: "Você misturou a sopa na tigela?" },
      { question: "Do you need a plate and a fork?", translation: "Você precisa de um prato e um garfo?" }
    ]
  },
  "tecnologia": {
    tf_a1_p2: [
      { statement: "You type a password to log in.", statementPt: "Você digita uma senha para fazer login.", isTrue: true, explanation: "Password is senha." },
      { statement: "You look at the screen when using a smartphone.", statementPt: "Você olha para a tela ao usar um smartphone.", isTrue: true, explanation: "Screen is tela." },
      { statement: "You download a car.", statementPt: "Você baixa um carro.", isTrue: false, explanation: "You download an app." },
      { statement: "You use a mouse to play soccer.", statementPt: "Você usa um mouse para jogar futebol.", isTrue: false, explanation: "Mouse is for a computer." },
      { statement: "An app is used on your phone.", statementPt: "Um aplicativo é usado no seu telefone.", isTrue: true, explanation: "App is aplicativo." },
      { statement: "You plug the charger into the phone.", statementPt: "Você conecta o carregador no telefone.", isTrue: true, explanation: "Charger is carregador." }
    ],
    sp_a1_p2: [
      { question: "What app do you use the most?", translation: "Qual aplicativo você mais usa?" },
      { question: "Do you remember your email password?", translation: "Você se lembra da senha do seu email?" },
      { question: "Is the charger connected to the laptop?", translation: "O carregador está conectado ao laptop?" }
    ],
    tf_b1_p2: [
      { statement: "You upload photos to a website.", statementPt: "Você faz upload de fotos para um site.", isTrue: true, explanation: "Upload is enviar, website is site." },
      { statement: "A battery gives power to a phone.", statementPt: "Uma bateria dá energia a um telefone.", isTrue: true, explanation: "Battery is bateria." },
      { statement: "You click a link to visit a new page.", statementPt: "Você clica num link para visitar uma nova página.", isTrue: true, explanation: "Link connects pages." },
      { statement: "An email is a letter sent by the post office.", statementPt: "Um email é uma carta enviada pelo correio.", isTrue: false, explanation: "Email is sent through the internet." },
      { statement: "A website is built with code.", statementPt: "Um site é construído com código.", isTrue: true, explanation: "Website is site." },
      { statement: "When the battery dies, the phone turns off.", statementPt: "Quando a bateria acaba, o telefone desliga.", isTrue: true, explanation: "Battery dies means it runs out of power." }
    ],
    sp_b1_p2: [
      { question: "Did you click the link on the website?", translation: "Você clicou no link no site?" },
      { question: "How long does your phone battery last?", translation: "Quanto tempo dura a bateria do seu telefone?" },
      { question: "Can you upload that file and send me an email?", translation: "Você pode fazer o upload daquele arquivo e me enviar um email?" }
    ]
  },
  "redes-sociais": {
    tf_a1_p2: [
      { statement: "A follower is someone who sees your profile.", statementPt: "Um seguidor é alguém que vê o seu perfil.", isTrue: true, explanation: "Follower is seguidor." },
      { statement: "You write a comment on a post.", statementPt: "Você escreve um comentário num post.", isTrue: true, explanation: "Comment is comentário." },
      { statement: "A hashtag makes a post private.", statementPt: "Uma hashtag torna um post privado.", isTrue: false, explanation: "Hashtags are used to make posts public and findable." },
      { statement: "You send a message to talk privately.", statementPt: "Você envia uma mensagem para falar em particular.", isTrue: true, explanation: "Message is mensagem." },
      { statement: "To scroll means to break the phone.", statementPt: "Rolar a tela significa quebrar o telefone.", isTrue: false, explanation: "Scroll means rolar a tela." },
      { statement: "You follow people you like.", statementPt: "Você segue as pessoas de que gosta.", isTrue: true, explanation: "Follow is seguir." }
    ],
    sp_a1_p2: [
      { question: "Do you have a public profile?", translation: "Você tem um perfil público?" },
      { question: "How many followers do you have?", translation: "Quantos seguidores você tem?" },
      { question: "Do you use a hashtag in your post?", translation: "Você usa uma hashtag no seu post?" }
    ],
    tf_b1_p2: [
      { statement: "A viral video gets millions of views quickly.", statementPt: "Um vídeo viral recebe milhões de visualizações rapidamente.", isTrue: true, explanation: "Viral means popular." },
      { statement: "You tag a friend so they see the photo.", statementPt: "Você marca um amigo para que ele veja a foto.", isTrue: true, explanation: "Tag is marcar." },
      { statement: "An influencer has no followers.", statementPt: "Um influenciador não tem seguidores.", isTrue: false, explanation: "Influencers have many followers." },
      { statement: "A story disappears after 24 hours.", statementPt: "Um story desaparece depois de 24 horas.", isTrue: true, explanation: "Story usually lasts a day." },
      { statement: "Your feed shows posts from people you follow.", statementPt: "Seu feed mostra publicações de pessoas que você segue.", isTrue: true, explanation: "Feed is feed de notícias." },
      { statement: "You cannot tag an influencer in a story.", statementPt: "Você não pode marcar um influenciador em um story.", isTrue: false, explanation: "You can tag anyone." }
    ],
    sp_b1_p2: [
      { question: "Have you ever made a viral video?", translation: "Você já fez um vídeo viral?" },
      { question: "Did you tag the influencer in your story?", translation: "Você marcou o influenciador no seu story?" },
      { question: "What kind of posts do you see on your feed?", translation: "Que tipo de posts você vê no seu feed?" }
    ]
  }
};

function injectData(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const id in data2) {
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

      const d = data2[id];

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

injectData('../data/scenarios2.ts');
console.log("Done scenarios2.ts");
