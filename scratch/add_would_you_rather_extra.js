const fs = require('fs');
const path = require('path');

const extraWouldYouRatherData = {
  "familia": [
    { optionA: { english: "Share a room with a sibling", portuguese: "Dividir o quarto com um irmão" }, optionB: { english: "Have your own small room", portuguese: "Ter o seu próprio quarto pequeno" } },
    { optionA: { english: "Go on a family vacation to the beach", portuguese: "Férias em família na praia" }, optionB: { english: "Go on a family vacation to the mountains", portuguese: "Férias em família nas montanhas" } },
    { optionA: { english: "Have a strict but caring family", portuguese: "Ter uma família rígida mas carinhosa" }, optionB: { english: "Have a very relaxed family", portuguese: "Ter uma família muito relaxada" } }
  ],
  "amigos": [
    { optionA: { english: "Keep a secret for a friend", portuguese: "Guardar um segredo de um amigo" }, optionB: { english: "Tell them the hard truth", portuguese: "Dizer a eles a dura verdade" } },
    { optionA: { english: "Host a dinner party for friends", portuguese: "Dar um jantar para os amigos" }, optionB: { english: "Be a guest at a friend's party", portuguese: "Ser convidado na festa de um amigo" } },
    { optionA: { english: "Forgive a friend who lied", portuguese: "Perdoar um amigo que mentiu" }, optionB: { english: "Stop talking to them", portuguese: "Parar de falar com eles" } }
  ],
  "corpo": [
    { optionA: { english: "Never get tired when running", portuguese: "Nunca se cansar ao correr" }, optionB: { english: "Never feel pain when lifting weights", portuguese: "Nunca sentir dor ao levantar peso" } },
    { optionA: { english: "Eat anything without gaining weight", portuguese: "Comer de tudo sem ganhar peso" }, optionB: { english: "Need only 4 hours of sleep", portuguese: "Precisar de apenas 4 horas de sono" } },
    { optionA: { english: "Have perfect vision", portuguese: "Ter visão perfeita" }, optionB: { english: "Have perfect hearing", portuguese: "Ter audição perfeita" } }
  ],
  "casa": [
    { optionA: { english: "Have a swimming pool", portuguese: "Ter uma piscina" }, optionB: { english: "Have a home theater", portuguese: "Ter um cinema em casa" } },
    { optionA: { english: "Paint the walls bright colors", portuguese: "Pintar as paredes com cores vivas" }, optionB: { english: "Keep the walls neutral white", portuguese: "Manter as paredes brancas e neutras" } },
    { optionA: { english: "Live in a wooden cabin", portuguese: "Morar em uma cabana de madeira" }, optionB: { english: "Live in a glass house", portuguese: "Morar em uma casa de vidro" } }
  ],
  "casa2": [
    { optionA: { english: "Have a personal chef at home", portuguese: "Ter um chef particular em casa" }, optionB: { english: "Have a person to clean the house", portuguese: "Ter uma pessoa para limpar a casa" } },
    { optionA: { english: "Eat breakfast on the balcony", portuguese: "Tomar café da manhã na varanda" }, optionB: { english: "Eat breakfast in bed", portuguese: "Tomar café da manhã na cama" } },
    { optionA: { english: "Have an indoor garden", portuguese: "Ter um jardim interno" }, optionB: { english: "Have a large garage", portuguese: "Ter uma garagem grande" } }
  ],
  "hobbies": [
    { optionA: { english: "Be a famous painter", portuguese: "Ser um pintor famoso" }, optionB: { english: "Be a famous singer", portuguese: "Ser um cantor famoso" } },
    { optionA: { english: "Collect rare stamps", portuguese: "Colecionar selos raros" }, optionB: { english: "Collect vintage coins", portuguese: "Colecionar moedas antigas" } },
    { optionA: { english: "Take beautiful photographs", portuguese: "Tirar fotografias bonitas" }, optionB: { english: "Write a popular blog", portuguese: "Escrever um blog popular" } }
  ],
  "esportes": [
    { optionA: { english: "Play a team sport", portuguese: "Praticar um esporte de equipe" }, optionB: { english: "Play an individual sport", portuguese: "Praticar um esporte individual" } },
    { optionA: { english: "Win a gold medal at the Olympics", portuguese: "Ganhar uma medalha de ouro nas Olimpíadas" }, optionB: { english: "Win the World Cup", portuguese: "Ganhar a Copa do Mundo" } },
    { optionA: { english: "Score the winning goal", portuguese: "Marcar o gol da vitória" }, optionB: { english: "Make a perfect save as goalkeeper", portuguese: "Fazer uma defesa perfeita como goleiro" } }
  ],
  "supermercado": [
    { optionA: { english: "Never have to wait in line again", portuguese: "Nunca mais ter que esperar na fila" }, optionB: { english: "Always find your favorite item on sale", portuguese: "Sempre encontrar seu item favorito em promoção" } },
    { optionA: { english: "Carry one extremely heavy bag", portuguese: "Carregar uma sacola extremamente pesada" }, optionB: { english: "Carry ten small light bags", portuguese: "Carregar dez sacolas pequenas e leves" } },
    { optionA: { english: "Work as a cashier", portuguese: "Trabalhar como caixa" }, optionB: { english: "Work stocking the shelves", portuguese: "Trabalhar abastecendo as prateleiras" } }
  ],
  "compras": [
    { optionA: { english: "Get 50% off everything you buy", portuguese: "Ter 50% de desconto em tudo que comprar" }, optionB: { english: "Get a $100 gift card every month", portuguese: "Ganhar um vale-presente de $100 todo mês" } },
    { optionA: { english: "Buy comfortable but ugly shoes", portuguese: "Comprar sapatos confortáveis mas feios" }, optionB: { english: "Buy beautiful but painful shoes", portuguese: "Comprar sapatos bonitos mas dolorosos" } },
    { optionA: { english: "Shop at a crowded mall", portuguese: "Fazer compras em um shopping lotado" }, optionB: { english: "Shop online and wait 3 weeks", portuguese: "Comprar online e esperar 3 semanas" } }
  ],
  "profissoes": [
    { optionA: { english: "Work 4 days a week for 10 hours", portuguese: "Trabalhar 4 dias por semana durante 10 horas" }, optionB: { english: "Work 5 days a week for 8 hours", portuguese: "Trabalhar 5 dias por semana durante 8 horas" } },
    { optionA: { english: "Have a boring job that pays very well", portuguese: "Ter um trabalho chato que paga muito bem" }, optionB: { english: "Have an exciting job that pays poorly", portuguese: "Ter um trabalho empolgante que paga mal" } },
    { optionA: { english: "Be a smart engineer", portuguese: "Ser um engenheiro inteligente" }, optionB: { english: "Be a creative designer", portuguese: "Ser um designer criativo" } }
  ],
  "lugares": [
    { optionA: { english: "Get lost in a foreign city", portuguese: "Se perder em uma cidade estrangeira" }, optionB: { english: "Use a map all the time", portuguese: "Usar um mapa o tempo todo" } },
    { optionA: { english: "Live near a beautiful beach", portuguese: "Morar perto de uma praia bonita" }, optionB: { english: "Live near a beautiful mountain", portuguese: "Morar perto de uma montanha bonita" } },
    { optionA: { english: "Travel by airplane", portuguese: "Viajar de avião" }, optionB: { english: "Travel by high-speed train", portuguese: "Viajar de trem de alta velocidade" } }
  ],
  "animais": [
    { optionA: { english: "Can talk to animals", portuguese: "Poder falar com animais" }, optionB: { english: "Can speak all human languages", portuguese: "Poder falar todas as línguas humanas" } },
    { optionA: { english: "Ride a horse", portuguese: "Andar a cavalo" }, optionB: { english: "Swim with dolphins", portuguese: "Nadar com golfinhos" } },
    { optionA: { english: "Have a pet tiger", portuguese: "Ter um tigre de estimação" }, optionB: { english: "Have a pet monkey", portuguese: "Ter um macaco de estimação" } }
  ],
  "culinaria": [
    { optionA: { english: "Never eat sugar again", portuguese: "Nunca mais comer açúcar" }, optionB: { english: "Never eat salt again", portuguese: "Nunca mais comer sal" } },
    { optionA: { english: "Burn the dinner", portuguese: "Queimar o jantar" }, optionB: { english: "Put too much salt in the food", portuguese: "Colocar muito sal na comida" } },
    { optionA: { english: "Eat pizza every day", portuguese: "Comer pizza todos os dias" }, optionB: { english: "Eat ice cream every day", portuguese: "Comer sorvete todos os dias" } }
  ],
  "tecnologia": [
    { optionA: { english: "Never use social media again", portuguese: "Nunca mais usar redes sociais" }, optionB: { english: "Never watch TV again", portuguese: "Nunca mais assistir TV" } },
    { optionA: { english: "Have a slow internet connection", portuguese: "Ter uma conexão de internet lenta" }, optionB: { english: "Have a fast internet that drops randomly", portuguese: "Ter uma internet rápida que cai aleatoriamente" } },
    { optionA: { english: "Lose your phone", portuguese: "Perder o seu telefone" }, optionB: { english: "Lose your laptop", portuguese: "Perder o seu notebook" } }
  ],
  "redes-sociais": [
    { optionA: { english: "Accidentally like your ex's old photo", portuguese: "Curtir sem querer a foto antiga do seu ex" }, optionB: { english: "Send a message to the wrong person", portuguese: "Enviar uma mensagem para a pessoa errada" } },
    { optionA: { english: "Delete all your photos", portuguese: "Apagar todas as suas fotos" }, optionB: { english: "Delete all your contacts", portuguese: "Apagar todos os seus contatos" } },
    { optionA: { english: "Become a famous influencer", portuguese: "Se tornar um influenciador famoso" }, optionB: { english: "Live a quiet offline life", portuguese: "Viver uma vida tranquila offline" } }
  ]
};

function objectToString(obj) {
  return `{ optionA: { english: "${obj.optionA.english}", portuguese: "${obj.optionA.portuguese}" }, optionB: { english: "${obj.optionB.english}", portuguese: "${obj.optionB.portuguese}" } }`;
}

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find wouldYouRather array for each scenario
  const regex = /(id:\s*"([^"]+)"[\s\S]*?wouldYouRather:\s*\[)([\s\S]*?)(\]\s*\n\s*\})/g;
  
  const newContent = content.replace(regex, (match, prefix, id, existingOptions, suffix) => {
    if (extraWouldYouRatherData[id]) {
      console.log('Adding extra wouldYouRather questions to scenario: ' + id);
      const extraOptionsString = extraWouldYouRatherData[id].map(objectToString).join(',\n        ');
      
      // existingOptions usually ends with spaces or newlines, we should append a comma if there isn't one at the end of the last item
      // But let's just make sure we join them cleanly
      let cleanExisting = existingOptions.trimRight();
      if (!cleanExisting.endsWith(',')) {
          cleanExisting += ',';
      }
      
      return prefix + cleanExisting + '\n        ' + extraOptionsString + '\n      ' + suffix;
    }
    return match;
  });
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
}

updateFile(path.join(__dirname, '../data/scenarios1.ts'));
updateFile(path.join(__dirname, '../data/scenarios2.ts'));

console.log('Successfully injected extra Would You Rather questions!');
