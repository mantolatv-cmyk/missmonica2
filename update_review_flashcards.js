const { Project, SyntaxKind } = require("ts-morph");

const project = new Project();
const filePath = "c:/Users/martm/Documents/Arquivos do Antigravity/MissMonicaDay/english-everyday/data/reviews.ts";
const sourceFile = project.addSourceFileAtPath(filePath);
const scenarioArray = sourceFile.getVariableDeclarationOrThrow("reviewScenarios").getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

const sentences = {
  "revisao-1": [
    { en: "My mom bakes a cake for me every year.", pt: "Minha mãe assa um bolo para mim todos os anos." },
    { en: "A true friend is hard to find.", pt: "Um verdadeiro amigo é difícil de encontrar." },
    { en: "She has beautiful green eyes.", pt: "Ela tem lindos olhos verdes." },
    { en: "The bedroom is very cold in the morning.", pt: "O quarto é muito frio de manhã." },
    { en: "Please sit in the wooden chair.", pt: "Por favor, sente-se na cadeira de madeira." },
    { en: "My dad works hard to support our family.", pt: "Meu pai trabalha duro para sustentar nossa família." },
    { en: "I trust you completely with this task.", pt: "Eu confio em você completamente com esta tarefa." },
    { en: "Keep your mouth closed when you chew.", pt: "Mantenha sua boca fechada quando você mastiga." },
    { en: "The bathroom is at the end of the hall.", pt: "O banheiro fica no final do corredor." },
    { en: "Open the window to let some fresh air in.", pt: "Abra a janela para deixar um ar fresco entrar." },
    { en: "Her husband is a talented musician.", pt: "O marido dela é um músico talentoso." },
    { en: "Can you keep a secret from him?", pt: "Você consegue guardar um segredo dele?" },
    { en: "He cut his finger while cooking.", pt: "Ele cortou o dedo da mão enquanto cozinhava." },
    { en: "Use the broom to sweep the floor.", pt: "Use a vassoura para varrer o chão." },
    { en: "Look in the mirror before you leave.", pt: "Olhe no espelho antes de sair." },
    { en: "My grandmother tells the best stories.", pt: "Minha avó conta as melhores histórias." },
    { en: "I apologize for being late today.", pt: "Eu peço desculpas por me atrasar hoje." },
    { en: "He hurt his knee playing soccer.", pt: "Ele machucou o joelho jogando futebol." },
    { en: "The kitchen smells like fresh bread.", pt: "A cozinha cheira a pão fresco." },
    { en: "We bought a new comfortable sofa.", pt: "Nós compramos um novo sofá confortável." }
  ],
  "revisao-2": [
    { en: "Reading a good book relaxes my mind.", pt: "Ler um bom livro relaxa minha mente." },
    { en: "Our team won the championship this year.", pt: "Nosso time ganhou o campeonato este ano." },
    { en: "The shopping cart is full of groceries.", pt: "O carrinho de compras está cheio de mantimentos." },
    { en: "I lost my leather wallet yesterday.", pt: "Eu perdi minha carteira de couro ontem." },
    { en: "Finding a new job can be stressful.", pt: "Encontrar um novo trabalho pode ser estressante." },
    { en: "Listening to music helps me concentrate.", pt: "Ouvir música me ajuda a concentrar." },
    { en: "He is the best player on the field.", pt: "Ele é o melhor jogador no campo." },
    { en: "The price of this car is too high.", pt: "O preço deste carro é muito alto." },
    { en: "The store closes at nine o'clock.", pt: "A loja fecha às nove horas." },
    { en: "The teacher explained the lesson clearly.", pt: "A professora explicou a lição claramente." },
    { en: "I want to travel around the world.", pt: "Eu quero viajar pelo mundo." },
    { en: "Swimming is an excellent exercise.", pt: "Natação é um exercício excelente." },
    { en: "I prefer eating vegetables instead of meat.", pt: "Eu prefiro comer vegetais em vez de carne." },
    { en: "Do you accept credit card payments?", pt: "Vocês aceitam pagamentos com cartão de crédito?" },
    { en: "The engineer designed a safe bridge.", pt: "O engenheiro projetou uma ponte segura." },
    { en: "He bought a professional camera for his trip.", pt: "Ele comprou uma câmera profissional para sua viagem." },
    { en: "The cat can jump over the tall fence.", pt: "O gato consegue pular por cima da cerca alta." },
    { en: "I put the frozen pizza in the oven.", pt: "Eu coloquei a pizza congelada no forno." },
    { en: "Those shoes are on sale right now.", pt: "Aqueles sapatos estão na promoção agora mesmo." },
    { en: "The meeting will start in ten minutes.", pt: "A reunião vai começar em dez minutos." }
  ],
  "revisao-3": [
    { en: "This city never sleeps at night.", pt: "Esta cidade nunca dorme à noite." },
    { en: "The dog barked loudly at the stranger.", pt: "O cachorro latiu alto para o estranho." },
    { en: "Use a non-stick pan to fry the eggs.", pt: "Use uma panela antiaderente para fritar os ovos." },
    { en: "I check my smartphone too often.", pt: "Eu checo meu celular com muita frequência." },
    { en: "She sent a long message to her boss.", pt: "Ela enviou uma mensagem longa para seu chefe." },
    { en: "The new hospital has modern equipment.", pt: "O novo hospital tem equipamentos modernos." },
    { en: "A beautiful bird landed on the tree.", pt: "Um lindo pássaro pousou na árvore." },
    { en: "Put the food on the clean plate.", pt: "Coloque a comida no prato limpo." },
    { en: "The internet connection is very slow here.", pt: "A conexão de internet é muito lenta aqui." },
    { en: "I like spending time with my family.", pt: "Eu gosto de passar tempo com minha família." },
    { en: "We arrived at the airport two hours early.", pt: "Nós chegamos ao aeroporto duas horas mais cedo." },
    { en: "The vet examined the sick kitten carefully.", pt: "O veterinário examinou o gatinho doente cuidadosamente." },
    { en: "This dessert is too sweet for me.", pt: "Esta sobremesa é muito doce para mim." },
    { en: "Never share your password with anyone.", pt: "Nunca compartilhe sua senha com ninguém." },
    { en: "The influencer posted a new travel video.", pt: "O influenciador postou um novo vídeo de viagem." },
    { en: "We stayed at a luxury hotel near the beach.", pt: "Nós ficamos em um hotel de luxo perto da praia." },
    { en: "Be careful, the snake might bite you.", pt: "Tenha cuidado, a cobra pode te picar." },
    { en: "I am going to bake some chocolate cookies.", pt: "Eu vou assar alguns biscoitos de chocolate." },
    { en: "Please delete those old files from your computer.", pt: "Por favor, apague aqueles arquivos velhos do seu computador." },
    { en: "I got a notification about the meeting.", pt: "Eu recebi uma notificação sobre a reunião." }
  ]
};

for (const element of scenarioArray.getElements()) {
  if (element.getKind() !== SyntaxKind.ObjectLiteralExpression) continue;
  
  const idProp = element.getProperty("id");
  if (!idProp) continue;
  
  const idStr = idProp.getInitializer().getText().replace(/['"]/g, '');
  const flashcardsProp = element.getProperty("flashcards");
  
  if (flashcardsProp && sentences[idStr]) {
    const flashcardsArray = flashcardsProp.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    const elements = flashcardsArray.getElements();
    
    for (let i = 0; i < elements.length; i++) {
      const card = elements[i];
      if (card.getKind() === SyntaxKind.ObjectLiteralExpression && sentences[idStr][i]) {
        const enProp = card.getProperty("english");
        const ptProp = card.getProperty("portuguese");
        
        enProp.setInitializer(`"${sentences[idStr][i].en}"`);
        ptProp.setInitializer(`"${sentences[idStr][i].pt}"`);
      }
    }
  }
}

sourceFile.saveSync();
console.log("Updated flashcards in reviews.ts successfully!");
