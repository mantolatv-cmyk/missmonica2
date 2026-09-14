const { Project, SyntaxKind } = require("ts-morph");

const project = new Project();
const filePath = "c:/Users/martm/Documents/Arquivos do Antigravity/MissMonicaDay/english-everyday/data/reviews.ts";
const sourceFile = project.addSourceFileAtPath(filePath);
const scenarioArray = sourceFile.getVariableDeclarationOrThrow("reviewScenarios").getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

const newQuizzes = {
  "revisao-1": [
    { question: 'Translate: "Meu pai está limpando a cozinha com a vassoura."', options: ["My father is cleaning the bathroom with a mop.", "My father is cleaning the kitchen with a broom.", "My brother is cleaning the kitchen with a broom.", "My husband is cleaning the bedroom with a broom."], correctIndex: 1, explanation: '"Kitchen" is cozinha, and "Broom" is vassoura.' },
    { question: 'Translate: "Minha mãe e minha avó estão conversando no sofá."', options: ["My mother and my aunt are talking on the chair.", "My grandmother and my friend are sitting on the sofa.", "My mother and my grandmother are talking on the sofa.", "My father and my grandfather are talking on the sofa."], correctIndex: 2, explanation: '"Mother" is mãe, "Grandmother" is avó, and "Sofa" is sofá.' },
    { question: 'Fill in the blank: "I look at myself in the ________ every morning."', options: ["window", "broom", "kitchen", "mirror"], correctIndex: 3, explanation: 'You look at yourself in a "mirror" (espelho).' },
    { question: 'Translate: "Você consegue guardar um segredo?"', options: ["Can you keep a secret?", "Can you keep a friend?", "Do you have a secret?", "Can you apologize?"], correctIndex: 0, explanation: '"Secret" is segredo.' },
    { question: 'Which sentence is logically correct?', options: ["I eat with my eyes and see with my mouth.", "I see with my eyes and eat with my mouth.", "I walk with my mouth and eat with my knee.", "I see with my finger and eat with my knee."], correctIndex: 1, explanation: 'You use "eyes" (olhos) to see, and "mouth" (boca) to eat.' },
    { question: 'Fill in the blank: "He fell and hurt his ________."', options: ["chair", "sofa", "knee", "window"], correctIndex: 2, explanation: 'He hurt his "knee" (joelho).' },
    { question: 'Translate: "Por favor, abra a janela do quarto."', options: ["Please open the window of the bathroom.", "Please close the window of the bedroom.", "Please open the door of the bedroom.", "Please open the window of the bedroom."], correctIndex: 3, explanation: '"Window" is janela, and "Bedroom" is quarto.' },
    { question: 'Complete the dialogue:\nA: "I broke your favorite cup."\nB: "You should..."', options: ["apologize.", "trust me.", "sit on the chair.", "go to the kitchen."], correctIndex: 0, explanation: 'When you break something, you should "apologize" (pedir desculpas).' },
    { question: 'Fill in the blank: "My sister\'s husband is a good ________."', options: ["friend", "grandmother", "bathroom", "broom"], correctIndex: 0, explanation: 'A husband can be a good "friend" (amigo).' },
    { question: 'Which sentence correctly uses the word "trust"?', options: ["I trust my broom to cook dinner.", "I trust my best friend completely.", "I trust my knee to open the window.", "I trust the sofa to clean the house."], correctIndex: 1, explanation: '"Trust" means confiar. You trust a friend.' }
  ],
  "revisao-2": [
    { question: 'Translate: "O carrinho de compras está cheio de carne congelada."', options: ["The shopping cart is full of fresh meat.", "The shopping cart is full of frozen meat.", "The shopping cart is full of frozen vegetables.", "The wallet is full of frozen meat."], correctIndex: 1, explanation: '"Shopping cart" is carrinho de compras, "frozen" is congelada, and "meat" is carne.' },
    { question: 'Fill in the blank: "The ________ designed a new building for the city."', options: ["teacher", "player", "engineer", "shopping cart"], correctIndex: 2, explanation: 'An "engineer" (engenheiro) designs buildings.' },
    { question: 'Translate: "Esses sapatos estão na promoção, mas o preço ainda é alto."', options: ["Those shoes are on sale, but the price is still high.", "Those shoes are cheap, but the price is high.", "Those shoes are on sale, but the credit card is full.", "That book is on sale, but the price is high."], correctIndex: 0, explanation: '"On sale" is na promoção, and "price" is preço.' },
    { question: 'Which sentence describes a "Teacher"?', options: ["Someone who cooks meat at a restaurant.", "Someone who helps students learn new things.", "Someone who plays on a sports team.", "Someone who fixes cameras and wallets."], correctIndex: 1, explanation: 'A "Teacher" (professor) helps students learn.' },
    { question: 'Fill in the blank: "I forgot my ________, so I can\'t pay for the food."', options: ["music", "meeting", "wallet", "jump"], correctIndex: 2, explanation: 'You keep money in your "wallet" (carteira).' },
    { question: 'Translate: "Nós vamos viajar para outro país para uma reunião."', options: ["We will travel to another country for a meeting.", "We will go to the store for a meeting.", "We will jump to another country for a meeting.", "We will travel to another country for swimming."], correctIndex: 0, explanation: '"Travel" is viajar, and "meeting" is reunião.' },
    { question: 'Which sentence correctly uses the word "Camera"?', options: ["I used my camera to buy frozen food.", "I used my camera to listen to music.", "I used my camera to take pictures of our team.", "I used my camera to pay with a credit card."], correctIndex: 2, explanation: 'You use a "camera" (câmera) to take pictures.' },
    { question: 'Complete the sentence: "The basketball ________ can ________ very high."', options: ["teacher / travel", "engineer / swim", "player / jump", "meeting / jump"], correctIndex: 2, explanation: 'A basketball "player" (jogador) can "jump" (pular).' },
    { question: 'Translate: "Posso pagar com cartão de crédito nesta loja?"', options: ["Can I pay with money in this store?", "Can I pay with credit card in this meeting?", "Can I pay with credit card in this store?", "Can I buy meat with cash in this store?"], correctIndex: 2, explanation: '"Credit card" is cartão de crédito, and "store" is loja.' },
    { question: 'Fill in the blank: "Reading a good ________ and listening to ________ relaxes me."', options: ["wallet / meetings", "book / music", "shopping cart / players", "camera / swimming"], correctIndex: 1, explanation: 'You read a "book" (livro) and listen to "music" (música).' }
  ],
  "revisao-3": [
    { question: 'Translate: "Nós fomos para o hospital na cidade grande."', options: ["We went to the hotel in the small city.", "We went to the airport in the big city.", "We went to the hospital in the big city.", "We went to the vet in the big city."], correctIndex: 2, explanation: '"Hospital" is hospital, and "city" is cidade.' },
    { question: 'Which sentence is logically correct?', options: ["A dog can bite, and a bird can fly.", "A bird can bite, and a dog can fly.", "A hospital can bite, and a city can fly.", "A pan can bite, and a plate can fly."], correctIndex: 0, explanation: 'A "dog" (cachorro) can "bite" (morder), and a "bird" (pássaro) can fly.' },
    { question: 'Fill in the blank: "I received a ________ on my ________."', options: ["pan / plate", "notification / smartphone", "vet / hospital", "password / internet"], correctIndex: 1, explanation: 'You receive a "notification" (notificação) on a "smartphone" (celular).' },
    { question: 'Translate: "Por favor, apague a mensagem e mude sua senha."', options: ["Please delete the message and change your password.", "Please delete the notification and change your smartphone.", "Please like the message and change your password.", "Please send the message and change your password."], correctIndex: 0, explanation: '"Delete" is apagar, "message" is mensagem, and "password" is senha.' },
    { question: 'What does a "Vet" do?', options: ["Bakes sweet food in the hospital.", "Treats sick animals like dogs and birds.", "Deletes passwords on the internet.", "Flies airplanes at the airport."], correctIndex: 1, explanation: 'A "vet" (veterinário) treats animals.' },
    { question: 'Fill in the blank: "The famous ________ stayed at a luxury ________."', options: ["influencer / hotel", "dog / pan", "vet / plate", "password / smartphone"], correctIndex: 0, explanation: 'An "influencer" (influenciador) stays at a "hotel" (hotel).' },
    { question: 'Translate: "Eu vou assar um bolo doce na panela."', options: ["I am going to bake a sweet cake in the pan.", "I am going to bite a sweet cake in the pan.", "I am going to delete a sweet cake in the pan.", "I am going to bake a sweet cake in the city."], correctIndex: 0, explanation: '"Bake" is assar, "sweet" is doce, and "pan" is panela.' },
    { question: 'Complete the dialogue:\nA: "Is there free Wi-Fi?"\nB: "Yes, you need the ________ to connect to the ________."', options: ["password / internet", "message / smartphone", "notification / vet", "plate / airport"], correctIndex: 0, explanation: 'You need a "password" (senha) for the "internet" (internet).' },
    { question: 'Translate: "Eu curti o vídeo do influenciador na internet."', options: ["I liked the influencer's video on the internet.", "I deleted the influencer's video on the internet.", "I baked the influencer's video on the internet.", "I bit the influencer's video on the internet."], correctIndex: 0, explanation: '"Like" is curtir, and "internet" is internet.' },
    { question: 'Fill in the blank: "We must arrive at the ________ early for our flight."', options: ["hospital", "hotel", "airport", "city"], correctIndex: 2, explanation: 'You go to the "airport" (aeroporto) to catch a flight.' }
  ]
};

for (const element of scenarioArray.getElements()) {
  if (element.getKind() !== SyntaxKind.ObjectLiteralExpression) continue;
  
  const idProp = element.getProperty("id");
  if (!idProp) continue;
  
  const idStr = idProp.getInitializer().getText().replace(/['"]/g, '');
  const quizProp = element.getProperty("quiz");
  
  if (quizProp && newQuizzes[idStr]) {
    quizProp.remove();
    
    let quizArrayString = "[\n";
    for (const q of newQuizzes[idStr]) {
      quizArrayString += `  { question: '${q.question.replace(/'/g, "\\'")}', options: [${q.options.map(opt => `"${opt.replace(/"/g, '\\"')}"`).join(", ")}], correctIndex: ${q.correctIndex}, explanation: '${q.explanation.replace(/'/g, "\\'")}' },\n`;
    }
    quizArrayString += "]";
    
    element.addPropertyAssignment({
      name: "quiz",
      initializer: quizArrayString
    });
  }
}

sourceFile.saveSync();
console.log("Updated quizzes in reviews.ts successfully!");
