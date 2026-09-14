const fs = require('fs');

const a1a2NewVocab = {
  "familia": [
    { english: "Son", portuguese: "Filho", levels: { A1: { en: "My son is playing in the yard.", pt: "Meu filho está brincando no quintal." }, A2: { en: "My youngest son started elementary school this year.", pt: "Meu filho mais novo começou o ensino fundamental este ano." } } },
    { english: "Daughter", portuguese: "Filha", levels: { A1: { en: "She is my beautiful daughter.", pt: "Ela é minha linda filha." }, A2: { en: "His oldest daughter learned how to ride a bicycle.", pt: "A filha mais velha dele aprendeu a andar de bicicleta." } } }
  ],
  "esportes": [
    { english: "Champion", portuguese: "Campeão", levels: { A1: { en: "He is the new champion.", pt: "Ele é o novo campeão." }, A2: { en: "Our team became the regional champion after a tough game.", pt: "Nosso time se tornou o campeão regional após um jogo difícil." } } },
    { english: "Medal", portuguese: "Medalha", levels: { A1: { en: "She won a gold medal.", pt: "Ela ganhou uma medalha de ouro." }, A2: { en: "He proudly showed the silver medal he won at the competition.", pt: "Ele mostrou com orgulho a medalha de prata que ganhou na competição." } } },
    { english: "Rule", portuguese: "Regra", levels: { A1: { en: "This is a simple rule.", pt: "Esta é uma regra simples." }, A2: { en: "The referee explained a new rule before the match started.", pt: "O árbitro explicou uma regra nova antes de a partida começar." } } }
  ],
  "supermercado": [
    { english: "Supermarket", portuguese: "Supermercado", levels: { A1: { en: "I go to the supermarket.", pt: "Eu vou ao supermercado." }, A2: { en: "I went to the new supermarket near my house to buy milk.", pt: "Fui ao supermercado novo perto de casa para comprar leite." } } },
    { english: "Bag", portuguese: "Sacola", levels: { A1: { en: "I need a plastic bag.", pt: "Eu preciso de uma sacola de plástico." }, A2: { en: "I always bring my reusable bag when I go shopping.", pt: "Eu sempre trago minha sacola reutilizável quando vou fazer compras." } } },
    { english: "Shelf", portuguese: "Prateleira", levels: { A1: { en: "The bread is on the shelf.", pt: "O pão está na prateleira." }, A2: { en: "I found the imported cookies on the top shelf.", pt: "Encontrei os biscoitos importados na prateleira de cima." } } },
    { english: "Cash", portuguese: "Dinheiro (em espécie)", levels: { A1: { en: "I will pay with cash.", pt: "Vou pagar em dinheiro." }, A2: { en: "I didn't have enough cash, so I used my credit card.", pt: "Eu não tinha dinheiro em espécie suficiente, então usei meu cartão de crédito." } } },
    { english: "Credit card", portuguese: "Cartão de crédito", levels: { A1: { en: "Do you accept credit card?", pt: "Você aceita cartão de crédito?" }, A2: { en: "He inserted his credit card into the machine to pay.", pt: "Ele inseriu seu cartão de crédito na máquina para pagar." } } },
    { english: "Price", portuguese: "Preço", levels: { A1: { en: "The price is very good.", pt: "O preço é muito bom." }, A2: { en: "I compared the price of two different brands of coffee.", pt: "Eu comparei o preço de duas marcas diferentes de café." } } },
    { english: "Money", portuguese: "Dinheiro", levels: { A1: { en: "I do not have money today.", pt: "Eu não tenho dinheiro hoje." }, A2: { en: "She saved a lot of money to buy a new computer.", pt: "Ela economizou muito dinheiro para comprar um computador novo." } } },
    { english: "Customer", portuguese: "Cliente", levels: { A1: { en: "The customer is always right.", pt: "O cliente tem sempre razão." }, A2: { en: "The store was full of happy customers during the holiday sale.", pt: "A loja estava cheia de clientes felizes durante a liquidação de feriado." } } },
    { english: "Queue / Line", portuguese: "Fila", levels: { A1: { en: "The line is very long.", pt: "A fila está muito longa." }, A2: { en: "We waited in a long queue for almost twenty minutes.", pt: "Nós esperamos em uma longa fila por quase vinte minutos." } } },
    { english: "Product", portuguese: "Produto", levels: { A1: { en: "This is a new product.", pt: "Este é um produto novo." }, A2: { en: "The supermarket introduced a new product in the dairy section.", pt: "O supermercado lançou um produto novo na seção de laticínios." } } },
    { english: "Buy", portuguese: "Comprar", levels: { A1: { en: "I want to buy some apples.", pt: "Eu quero comprar algumas maçãs." }, A2: { en: "She bought a lot of snacks for the birthday party.", pt: "Ela comprou muitos salgadinhos para a festa de aniversário." } } },
    { english: "Pay", portuguese: "Pagar", levels: { A1: { en: "I need to pay for this.", pt: "Eu preciso pagar por isso." }, A2: { en: "He paid for the groceries and carried the bags to his car.", pt: "Ele pagou pelas compras e levou as sacolas para o carro." } } },
    { english: "Sale", portuguese: "Promoção / Liquidação", levels: { A1: { en: "This TV is on sale.", pt: "Esta TV está em promoção." }, A2: { en: "I bought these shoes because they were on a great sale.", pt: "Eu comprei estes sapatos porque eles estavam em uma ótima promoção." } } },
    { english: "Receipt", portuguese: "Recibo / Nota fiscal", levels: { A1: { en: "Here is your receipt.", pt: "Aqui está o seu recibo." }, A2: { en: "The cashier gave me the receipt and a friendly smile.", pt: "A caixa me deu o recibo e um sorriso amigável." } } },
    { english: "Fruit", portuguese: "Fruta", levels: { A1: { en: "I eat fresh fruit every day.", pt: "Eu como fruta fresca todos os dias." }, A2: { en: "They bought bananas, oranges, and some other tropical fruit.", pt: "Eles compraram bananas, laranjas e algumas outras frutas tropicais." } } },
    { english: "Vegetables", portuguese: "Vegetais / Verduras", levels: { A1: { en: "Vegetables are good for you.", pt: "Vegetais são bons para você." }, A2: { en: "My mother prepared a healthy salad with fresh green vegetables.", pt: "Minha mãe preparou uma salada saudável com verduras frescas." } } },
    { english: "Meat", portuguese: "Carne", levels: { A1: { en: "I do not eat meat.", pt: "Eu não como carne." }, A2: { en: "We bought some fresh meat to grill over the weekend.", pt: "Nós compramos carne fresca para grelhar no final de semana." } } },
    { english: "Bakery", portuguese: "Padaria (seção)", levels: { A1: { en: "The bakery smells amazing.", pt: "A padaria cheira incrivelmente bem." }, A2: { en: "I stopped at the bakery section to get some warm bread.", pt: "Parei na seção da padaria para pegar um pão quentinho." } } }
  ],
  "redes-sociais": [
    { english: "Block", portuguese: "Bloquear", levels: { A1: { en: "I had to block him.", pt: "Eu tive que bloqueá-lo." }, A2: { en: "She blocked the user because he was sending rude messages.", pt: "Ela bloqueou o usuário porque ele estava enviando mensagens rudes." } } },
    { english: "Delete", portuguese: "Apagar", levels: { A1: { en: "Delete this photo please.", pt: "Apague esta foto por favor." }, A2: { en: "I accidentally deleted my favorite picture from the album.", pt: "Eu apaguei acidentalmente a minha foto favorita do álbum." } } },
    { english: "Online", portuguese: "Online / Conectado", levels: { A1: { en: "Are you online right now?", pt: "Você está online agora?" }, A2: { en: "I usually stay online late at night to chat with friends.", pt: "Eu geralmente fico online até tarde da noite para conversar com amigos." } } },
    { english: "Password", portuguese: "Senha", levels: { A1: { en: "I forgot my password.", pt: "Eu esqueci a minha senha." }, A2: { en: "You should create a strong password to protect your account.", pt: "Você deve criar uma senha forte para proteger sua conta." } } },
    { english: "Log in", portuguese: "Entrar / Fazer login", levels: { A1: { en: "I need to log in first.", pt: "Eu preciso fazer login primeiro." }, A2: { en: "He tried to log in, but he couldn't remember his email.", pt: "Ele tentou fazer login, mas não conseguiu lembrar do seu e-mail." } } },
    { english: "Log out", portuguese: "Sair / Fazer logoff", levels: { A1: { en: "Don't forget to log out.", pt: "Não se esqueça de sair." }, A2: { en: "I always log out from my account when I use a public computer.", pt: "Eu sempre saio da minha conta quando uso um computador público." } } },
    { english: "App", portuguese: "Aplicativo", levels: { A1: { en: "This app is very useful.", pt: "Este aplicativo é muito útil." }, A2: { en: "She downloaded a new messaging app to talk to her family.", pt: "Ela baixou um novo aplicativo de mensagens para falar com a família." } } }
  ]
};

function injectA1A2(filePath, vocabDict) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const [scenarioId, words] of Object.entries(vocabDict)) {
    // Check if scenario exists in this file
    const scenarioRegex = new RegExp(`id:\\s*["']${scenarioId}["'][\\s\\S]*?vocabulary:\\s*\\[[\\s\\S]*?(?=\\s*],\\s*(?:flashcards|quiz|dialogue|trueOrFalse|speakingPractice|usefulExpressions))`);
    if (!content.match(scenarioRegex)) continue;

    content = content.replace(scenarioRegex, (match) => {
      let injected = '';
      for (const item of words) {
        injected += `,\n      { english: "${item.english}", portuguese: "${item.portuguese}",\n          levels: { \n                        A1: { en: "${item.levels.A1.en}", pt: "${item.levels.A1.pt}" }, \n                        A2: { en: "${item.levels.A2.en}", pt: "${item.levels.A2.pt}" }\n                      }\n    }`;
      }
      return match + injected;
    });
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

injectA1A2('data/scenarios1.ts', a1a2NewVocab);
injectA1A2('data/scenarios2.ts', a1a2NewVocab);
