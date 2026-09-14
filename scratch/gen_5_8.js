const fs = require('fs');

const data1 = {
  "casa2": {
    tf_a1_p1: [
      { statement: "You fold the laundry to make it neat.", statementPt: "Você dobra a roupa para deixá-la arrumada.", isTrue: true, explanation: "Fold means dobrar." },
      { statement: "You mop the floor to make it dirty.", statementPt: "Você passa pano no chão para deixá-lo sujo.", isTrue: false, explanation: "You mop to clean." },
      { statement: "A hallway connects the rooms.", statementPt: "Um corredor conecta os quartos.", isTrue: true, explanation: "Hallway is corredor." },
      { statement: "The dining room is where you sleep.", statementPt: "A sala de jantar é onde você dorme.", isTrue: false, explanation: "You eat in the dining room." },
      { statement: "You look up to see the ceiling.", statementPt: "Você olha para cima para ver o teto.", isTrue: true, explanation: "Ceiling is teto." },
      { statement: "Furniture means things like beds and chairs.", statementPt: "Móveis significam coisas como camas e cadeiras.", isTrue: true, explanation: "Furniture is móveis." }
    ],
    sp_a1_p1: [
      { question: "Who mops the floor in your house?", translation: "Quem passa o pano no chão na sua casa?" },
      { question: "Is your dining room big?", translation: "A sua sala de jantar é grande?" },
      { question: "Do you have an attic or a basement?", translation: "Você tem um sótão ou um porão?" }
    ],
    tf_a1_p2: [
      { statement: "A couch is for sitting.", statementPt: "Um sofá é para sentar.", isTrue: true, explanation: "Couch is sofá." },
      { statement: "You wash the windows to see outside clearly.", statementPt: "Você lava as janelas para ver lá fora com clareza.", isTrue: true, explanation: "Wash the windows is lavar as janelas." },
      { statement: "You mow the lawn in the living room.", statementPt: "Você corta a grama na sala de estar.", isTrue: false, explanation: "You mow the lawn in the garden." },
      { statement: "Plants need water to live.", statementPt: "Plantas precisam de água para viver.", isTrue: true, explanation: "Water the plants is regar as plantas." },
      { statement: "You set the table before you eat.", statementPt: "Você arruma a mesa antes de comer.", isTrue: true, explanation: "Set the table is arrumar a mesa." },
      { statement: "A closet is where you cook.", statementPt: "Um armário/guarda-roupa é onde você cozinha.", isTrue: false, explanation: "Closet is for clothes." }
    ],
    sp_a1_p2: [
      { question: "Do you water the plants?", translation: "Você rega as plantas?" },
      { question: "Is there a comfortable couch in your house?", translation: "Há um sofá confortável na sua casa?" },
      { question: "Who sets the table for dinner?", translation: "Quem arruma a mesa para o jantar?" }
    ],
    tf_b1_p1: [
      { statement: "A well-lit hallway creates a welcoming atmosphere in a modern house.", statementPt: "Um corredor bem iluminado cria uma atmosfera acolhedora em uma casa moderna.", isTrue: true, explanation: "Hallway is corredor." },
      { statement: "Mopping the floor requires combining hot water with strong detergents.", statementPt: "Passar pano no chão requer combinar água quente com detergentes fortes.", isTrue: true, explanation: "Mop the floor is passar o pano." },
      { statement: "Most basements are naturally filled with bright sunlight all day.", statementPt: "A maioria dos porões está naturalmente cheia de luz solar brilhante o dia todo.", isTrue: false, explanation: "Basements are underground and dark." },
      { statement: "Selecting the right furniture can completely transform a room's aesthetic.", statementPt: "Selecionar os móveis certos pode transformar completamente a estética de um cômodo.", isTrue: true, explanation: "Furniture is móveis." },
      { statement: "A dining room is usually intended exclusively for large family gatherings.", statementPt: "Uma sala de jantar é geralmente destinada exclusivamente a grandes reuniões de família.", isTrue: false, explanation: "It can be used for daily meals." },
      { statement: "Ceilings in historic buildings often feature intricate designs and paintings.", statementPt: "Tetos em edifícios históricos muitas vezes apresentam designs e pinturas intrincadas.", isTrue: true, explanation: "Ceiling is teto." }
    ],
    sp_b1_p1: [
      { question: "How would you arrange the furniture to maximize space in your living room?", translation: "Como você organizaria os móveis para maximizar o espaço na sua sala de estar?" },
      { question: "What are the common uses for an attic or a basement in your culture?", translation: "Quais são os usos comuns para um sótão ou porão na sua cultura?" },
      { question: "Why do some people prefer dining rooms instead of eating in the kitchen?", translation: "Por que algumas pessoas preferem salas de jantar em vez de comer na cozinha?" }
    ],
    tf_b1_p2: [
      { statement: "Mowing the lawn regularly promotes thicker and healthier grass growth.", statementPt: "Cortar a grama regularmente promove o crescimento mais espesso e saudável da grama.", isTrue: true, explanation: "Mow the lawn is cortar a grama." },
      { statement: "You wipe the counter to spread bacteria around the kitchen.", statementPt: "Você limpa o balcão para espalhar bactérias pela cozinha.", isTrue: false, explanation: "You wipe to remove bacteria." },
      { statement: "A leaky faucet can significantly increase your monthly water bill.", statementPt: "Uma torneira vazando pode aumentar significativamente a sua conta de água mensal.", isTrue: true, explanation: "Faucet is torneira." },
      { statement: "Setting the table elegantly requires understanding the placement of cutlery.", statementPt: "Arrumar a mesa com elegância exige entender a disposição dos talheres.", isTrue: true, explanation: "Set the table is arrumar a mesa." },
      { statement: "A couch is a small wooden stool used exclusively in the garden.", statementPt: "Um sofá é um pequeno banco de madeira usado exclusivamente no jardim.", isTrue: false, explanation: "Couch is a soft, large seat indoors." },
      { statement: "Clearing the table promptly after dinner helps maintain a tidy environment.", statementPt: "Limpar a mesa prontamente após o jantar ajuda a manter um ambiente arrumado.", isTrue: true, explanation: "Clear the table is tirar a mesa." }
    ],
    sp_b1_p2: [
      { question: "How to fix a dripping faucet if you don't have professional tools?", translation: "Como consertar uma torneira pingando se você não tem ferramentas profissionais?" },
      { question: "Why is watering the plants crucial during the summer season?", translation: "Por que regar as plantas é crucial durante a estação de verão?" },
      { question: "What items do you usually organize inside your bedroom closet?", translation: "Que itens você costuma organizar dentro do guarda-roupa do seu quarto?" }
    ]
  },
  "hobbies": {
    tf_a1_p1: [
      { statement: "You read a book to learn a story.", statementPt: "Você lê um livro para aprender uma história.", isTrue: true, explanation: "Read a book is ler um livro." },
      { statement: "You play guitar with your feet.", statementPt: "Você toca violão com os pés.", isTrue: false, explanation: "You use your hands." },
      { statement: "When you travel, you visit new places.", statementPt: "Quando você viaja, você visita lugares novos.", isTrue: true, explanation: "Travel is viajar." },
      { statement: "You listen to music in silence.", statementPt: "Você escuta música em silêncio.", isTrue: false, explanation: "Music makes sound." },
      { statement: "Dancing involves moving your body to a rhythm.", statementPt: "Dançar envolve mover seu corpo em um ritmo.", isTrue: true, explanation: "Dance is dançar." },
      { statement: "You use a camera to take photos.", statementPt: "Você usa uma câmera para tirar fotos.", isTrue: true, explanation: "Take photos is tirar fotos." }
    ],
    sp_a1_p1: [
      { question: "Do you like to play video games?", translation: "Você gosta de jogar videogames?" },
      { question: "What is your favorite book to read?", translation: "Qual é o seu livro favorito para ler?" },
      { question: "Do you travel every year?", translation: "Você viaja todo ano?" }
    ],
    tf_a1_p2: [
      { statement: "You cook food in the kitchen.", statementPt: "Você cozinha comida na cozinha.", isTrue: true, explanation: "Cook is cozinhar." },
      { statement: "You go hiking inside a house.", statementPt: "Você faz trilha dentro de uma casa.", isTrue: false, explanation: "Hiking is outdoors." },
      { statement: "When you camp, you sleep in a tent.", statementPt: "Quando você acampa, você dorme em uma barraca.", isTrue: true, explanation: "Camp is acampar." },
      { statement: "You knit using yarn and needles.", statementPt: "Você tricota usando fios e agulhas.", isTrue: true, explanation: "Knit is tricotar." },
      { statement: "Collecting means you throw things away.", statementPt: "Colecionar significa que você joga as coisas fora.", isTrue: false, explanation: "Collect is keep." },
      { statement: "You surf the internet on a computer.", statementPt: "Você navega na internet em um computador.", isTrue: true, explanation: "Surf the internet is navegar." }
    ],
    sp_a1_p2: [
      { question: "Do you like to cook?", translation: "Você gosta de cozinhar?" },
      { question: "Have you ever gone camping?", translation: "Você já foi acampar?" },
      { question: "Do you collect anything?", translation: "Você coleciona alguma coisa?" }
    ],
    tf_b1_p1: [
      { statement: "Playing guitar daily can significantly improve your finger dexterity.", statementPt: "Tocar violão diariamente pode melhorar significativamente a destreza dos seus dedos.", isTrue: true, explanation: "Play guitar is tocar violão." },
      { statement: "Traveling abroad exposes individuals to a diverse range of cultures.", statementPt: "Viajar para o exterior expõe os indivíduos a uma gama diversificada de culturas.", isTrue: true, explanation: "Travel is viajar." },
      { statement: "Drawing and painting restrict creative thinking and imagination.", statementPt: "Desenhar e pintar restringem o pensamento criativo e a imaginação.", isTrue: false, explanation: "They improve creativity." },
      { statement: "Listening to music has been proven to alleviate symptoms of stress.", statementPt: "Ouvir música provou aliviar sintomas de estresse.", isTrue: true, explanation: "Listen to music is escutar música." },
      { statement: "Singing in a choir requires excellent vocal coordination among members.", statementPt: "Cantar em um coral requer excelente coordenação vocal entre os membros.", isTrue: true, explanation: "Sing is cantar." },
      { statement: "Reading a book is an entirely physical activity that builds muscle.", statementPt: "Ler um livro é uma atividade totalmente física que constrói músculos.", isTrue: false, explanation: "Reading is a mental activity." }
    ],
    sp_b1_p1: [
      { question: "How does traveling influence a person's perspective on global issues?", translation: "Como viajar influencia a perspectiva de uma pessoa sobre questões globais?" },
      { question: "What are the cognitive benefits of playing video games?", translation: "Quais são os benefícios cognitivos de jogar videogames?" },
      { question: "Why do some individuals prefer to draw or paint in solitude?", translation: "Por que alguns indivíduos preferem desenhar ou pintar na solidão?" }
    ],
    tf_b1_p2: [
      { statement: "Surfing the internet aimlessly can consume hours of productive time.", statementPt: "Navegar na internet sem rumo pode consumir horas de tempo produtivo.", isTrue: true, explanation: "Surf the internet is navegar na internet." },
      { statement: "Working out regularly is detrimental to your cardiovascular health.", statementPt: "Fazer exercícios regularmente é prejudicial à sua saúde cardiovascular.", isTrue: false, explanation: "Working out is beneficial." },
      { statement: "Going hiking in steep mountains demands a high level of physical stamina.", statementPt: "Fazer trilha em montanhas íngremes exige um alto nível de resistência física.", isTrue: true, explanation: "Go hiking is fazer trilha." },
      { statement: "Knitting a complex sweater requires precision, patience, and skill.", statementPt: "Tricotar um suéter complexo exige precisão, paciência e habilidade.", isTrue: true, explanation: "Knit is tricotar." },
      { statement: "Playing board games fosters strategic thinking and social interaction.", statementPt: "Jogar jogos de tabuleiro fomenta o pensamento estratégico e a interação social.", isTrue: true, explanation: "Play board games is jogar jogos de tabuleiro." },
      { statement: "Writing a novel is a quick hobby that anyone can finish in an hour.", statementPt: "Escrever um romance é um hobby rápido que qualquer um pode terminar em uma hora.", isTrue: false, explanation: "Writing a novel takes months or years." }
    ],
    sp_b1_p2: [
      { question: "What motivates someone to collect vintage items or rare objects?", translation: "O que motiva alguém a colecionar itens antigos ou objetos raros?" },
      { question: "How challenging is it to camp in extreme weather conditions?", translation: "Quão desafiador é acampar em condições climáticas extremas?" },
      { question: "What strategies do you use when you play strategic board games?", translation: "Quais estratégias você usa quando joga jogos de tabuleiro estratégicos?" }
    ]
  },
  "esportes": {
    tf_a1_p1: [
      { statement: "You play soccer with a ball.", statementPt: "Você joga futebol com uma bola.", isTrue: true, explanation: "Soccer uses a ball." },
      { statement: "A match is a game between two teams.", statementPt: "Uma partida é um jogo entre dois times.", isTrue: true, explanation: "Match is partida." },
      { statement: "You swim in a stadium.", statementPt: "Você nada num estádio.", isTrue: false, explanation: "You swim in a pool." },
      { statement: "When you win, you are sad.", statementPt: "Quando você vence, você fica triste.", isTrue: false, explanation: "You are happy." },
      { statement: "You run when you play basketball.", statementPt: "Você corre quando joga basquete.", isTrue: true, explanation: "Basketball involves running." },
      { statement: "A team works together.", statementPt: "Uma equipe trabalha junto.", isTrue: true, explanation: "Team is equipe." }
    ],
    sp_a1_p1: [
      { question: "Do you like soccer or basketball?", translation: "Você gosta de futebol ou basquete?" },
      { question: "Have you ever been to a stadium?", translation: "Você já foi a um estádio?" },
      { question: "Did your team win the match?", translation: "Seu time venceu a partida?" }
    ],
    tf_a1_p2: [
      { statement: "You play tennis with a racket.", statementPt: "Você joga tênis com uma raquete.", isTrue: true, explanation: "Tennis uses a racket." },
      { statement: "Cycling means riding a bicycle.", statementPt: "Ciclismo significa andar de bicicleta.", isTrue: true, explanation: "Cycling is andar de bicicleta." },
      { statement: "You go to the gym to sleep.", statementPt: "Você vai à academia para dormir.", isTrue: false, explanation: "You go to the gym to exercise." },
      { statement: "A coach helps the players.", statementPt: "Um treinador ajuda os jogadores.", isTrue: true, explanation: "Coach is treinador." },
      { statement: "A player plays the game.", statementPt: "Um jogador joga o jogo.", isTrue: true, explanation: "Player is jogador." },
      { statement: "You get a medal when you lose a tournament.", statementPt: "Você ganha uma medalha quando perde um torneio.", isTrue: false, explanation: "You get it when you win." }
    ],
    sp_a1_p2: [
      { question: "Do you like to play tennis?", translation: "Você gosta de jogar tênis?" },
      { question: "Have you ever won a medal?", translation: "Você já ganhou uma medalha?" },
      { question: "Who is your favorite player?", translation: "Quem é o seu jogador favorito?" }
    ],
    tf_b1_p1: [
      { statement: "A professional soccer match demands rigorous stamina and tactical awareness.", statementPt: "Uma partida de futebol profissional exige resistência rigorosa e consciência tática.", isTrue: true, explanation: "Soccer match is partida de futebol." },
      { statement: "Swimming is an excellent cardiovascular exercise that engages the whole body.", statementPt: "Natação é um excelente exercício cardiovascular que envolve o corpo inteiro.", isTrue: true, explanation: "Swim is nadar." },
      { statement: "Losing a game is the only goal of a competitive sports team.", statementPt: "Perder um jogo é o único objetivo de uma equipe esportiva competitiva.", isTrue: false, explanation: "Lose is perder, the goal is to win." },
      { statement: "A massive stadium can host thousands of passionate supporters.", statementPt: "Um estádio gigantesco pode sediar milhares de torcedores apaixonados.", isTrue: true, explanation: "Stadium is estádio." },
      { statement: "Basketball is a slow-paced game with absolutely no physical contact.", statementPt: "O basquete é um jogo de ritmo lento com absolutamente nenhum contato físico.", isTrue: false, explanation: "Basketball is fast and physical." },
      { statement: "Winning an international championship requires years of dedication.", statementPt: "Vencer um campeonato internacional exige anos de dedicação.", isTrue: true, explanation: "Win is vencer." }
    ],
    sp_b1_p1: [
      { question: "How does participating in a team shape an individual's character?", translation: "Como participar de uma equipe molda o caráter de um indivíduo?" },
      { question: "Why do some athletes struggle to cope with losing a crucial match?", translation: "Por que alguns atletas têm dificuldade em lidar com a perda de uma partida crucial?" },
      { question: "What is the economic impact of building a massive stadium in a city?", translation: "Qual é o impacto econômico da construção de um estádio enorme em uma cidade?" }
    ],
    tf_b1_p2: [
      { statement: "The referee has the authority to penalize players for aggressive behavior.", statementPt: "O árbitro tem a autoridade para penalizar jogadores por comportamento agressivo.", isTrue: true, explanation: "Referee is árbitro." },
      { statement: "A strict coach pushes athletes to surpass their own limitations.", statementPt: "Um treinador rigoroso incentiva os atletas a superar suas próprias limitações.", isTrue: true, explanation: "Coach is treinador." },
      { statement: "Winning a gold medal in the Olympics is an insignificant achievement.", statementPt: "Ganhar uma medalha de ouro nas Olimpíadas é uma conquista insignificante.", isTrue: false, explanation: "Medal is medalha, it is highly significant." },
      { statement: "A prestigious tournament usually attracts the most talented players globally.", statementPt: "Um torneio de prestígio geralmente atrai os jogadores mais talentosos globalmente.", isTrue: true, explanation: "Tournament is torneio." },
      { statement: "Cycling requires a finely tuned bicycle to achieve optimal performance.", statementPt: "O ciclismo requer uma bicicleta finamente ajustada para alcançar o desempenho ideal.", isTrue: true, explanation: "Cycling is ciclismo." },
      { statement: "You increase the score when your opponent commits a foul in volleyball.", statementPt: "Você aumenta a pontuação quando seu oponente comete uma falta no vôlei.", isTrue: true, explanation: "Score is pontuação." }
    ],
    sp_b1_p2: [
      { question: "How does an impartial referee maintain fairness during a heated match?", translation: "Como um árbitro imparcial mantém a justiça durante uma partida acalorada?" },
      { question: "What psychological pressure do players face in a high-stakes tournament?", translation: "Que pressão psicológica os jogadores enfrentam em um torneio de alto risco?" },
      { question: "Is going to the gym an effective way to improve mental resilience?", translation: "Ir à academia é uma maneira eficaz de melhorar a resiliência mental?" }
    ]
  },
  "supermercado": {
    tf_a1_p1: [
      { statement: "You put food in a shopping cart.", statementPt: "Você coloca comida em um carrinho de compras.", isTrue: true, explanation: "Shopping cart is carrinho." },
      { statement: "A cashier takes your money.", statementPt: "Um caixa pega seu dinheiro.", isTrue: true, explanation: "Cashier is caixa." },
      { statement: "You look for a discount to pay more.", statementPt: "Você procura um desconto para pagar mais.", isTrue: false, explanation: "Discount means less." },
      { statement: "A grocery list helps you remember what to buy.", statementPt: "Uma lista de compras te ajuda a lembrar o que comprar.", isTrue: true, explanation: "Grocery list is lista de compras." },
      { statement: "You carry your items in a bag.", statementPt: "Você carrega seus itens em uma sacola.", isTrue: true, explanation: "Bag is sacola." },
      { statement: "The price tells you the weight.", statementPt: "O preço te diz o peso.", isTrue: false, explanation: "Price is money." }
    ],
    sp_a1_p1: [
      { question: "Do you use a shopping cart?", translation: "Você usa um carrinho de compras?" },
      { question: "Do you write a grocery list?", translation: "Você escreve uma lista de compras?" },
      { question: "Did you pay the cashier?", translation: "Você pagou o caixa?" }
    ],
    tf_a1_p2: [
      { statement: "You pay with cash or a credit card.", statementPt: "Você paga com dinheiro ou cartão de crédito.", isTrue: true, explanation: "Cash is dinheiro." },
      { statement: "A customer sells things in the store.", statementPt: "Um cliente vende coisas na loja.", isTrue: false, explanation: "Customer buys." },
      { statement: "You get change if you pay more than the price.", statementPt: "Você recebe troco se pagar mais que o preço.", isTrue: true, explanation: "Change is troco." },
      { statement: "Products are on the shelf.", statementPt: "Os produtos estão na prateleira.", isTrue: true, explanation: "Shelf is prateleira." },
      { statement: "You weigh fruits on a scale.", statementPt: "Você pesa frutas em uma balança.", isTrue: true, explanation: "Scale is balança." },
      { statement: "A basket is bigger than a shopping cart.", statementPt: "Uma cesta é maior que um carrinho de compras.", isTrue: false, explanation: "Basket is smaller." }
    ],
    sp_a1_p2: [
      { question: "Do you pay with cash or a credit card?", translation: "Você paga com dinheiro ou cartão de crédito?" },
      { question: "Is the fruit fresh or frozen?", translation: "A fruta é fresca ou congelada?" },
      { question: "Did you get your change?", translation: "Você pegou o seu troco?" }
    ],
    tf_b1_p1: [
      { statement: "An observant cashier can efficiently process a long queue of buyers.", statementPt: "Um caixa observador pode processar eficientemente uma longa fila de compradores.", isTrue: true, explanation: "Cashier is caixa." },
      { statement: "Wandering aimlessly through the aisle can lead to impulsive purchases.", statementPt: "Vagar sem rumo pelo corredor pode levar a compras impulsivas.", isTrue: true, explanation: "Aisle is corredor." },
      { statement: "A substantial discount is often applied to items nearing expiration.", statementPt: "Um desconto substancial é frequentemente aplicado a itens próximos da validade.", isTrue: true, explanation: "Discount is desconto." },
      { statement: "Organizing a grocery list systematically reduces the time spent shopping.", statementPt: "Organizar uma lista de compras sistematicamente reduz o tempo gasto fazendo compras.", isTrue: true, explanation: "Grocery list is lista de compras." },
      { statement: "The checkout process is entirely manual in all modern supermarkets.", statementPt: "O processo de finalização de compra é totalmente manual em todos os supermercados modernos.", isTrue: false, explanation: "Self-checkout is common." },
      { statement: "A shopping cart has a massive engine to move around.", statementPt: "Um carrinho de compras tem um motor enorme para se locomover.", isTrue: false, explanation: "Shopping carts are pushed manually." }
    ],
    sp_b1_p1: [
      { question: "How do fluctuating prices affect the shopping habits of average consumers?", translation: "Como a flutuação de preços afeta os hábitos de compra dos consumidores médios?" },
      { question: "Why is the layout of aisles strategically designed in supermarkets?", translation: "Por que a disposição dos corredores é projetada estrategicamente nos supermercados?" },
      { question: "What are the benefits of requesting a digital receipt over a printed one?", translation: "Quais são os benefícios de solicitar um recibo digital em vez de um impresso?" }
    ],
    tf_b1_p2: [
      { statement: "Using a credit card responsibly allows you to accumulate reward points.", statementPt: "Usar um cartão de crédito com responsabilidade permite acumular pontos de recompensa.", isTrue: true, explanation: "Credit card is cartão de crédito." },
      { statement: "A demanding customer might complain about the lack of fresh produce.", statementPt: "Um cliente exigente pode reclamar da falta de produtos frescos.", isTrue: true, explanation: "Customer is cliente, fresh is fresco." },
      { statement: "Calculating the exact change mentally stimulates the brain.", statementPt: "Calcular o troco exato mentalmente estimula o cérebro.", isTrue: true, explanation: "Change is troco." },
      { statement: "Frozen vegetables are generally harvested and preserved at their peak ripeness.", statementPt: "Vegetais congelados são geralmente colhidos e preservados em seu pico de maturidade.", isTrue: true, explanation: "Frozen is congelado." },
      { statement: "A high-precision scale guarantees accurate pricing for loose items.", statementPt: "Uma balança de alta precisão garante preços precisos para itens a granel.", isTrue: true, explanation: "Scale is balança." },
      { statement: "The bakery section is characterized by the smell of raw meat.", statementPt: "A seção de padaria é caracterizada pelo cheiro de carne crua.", isTrue: false, explanation: "Bakery smells like bread/sweets." }
    ],
    sp_b1_p2: [
      { question: "Is paying with cash becoming obsolete in the digital age?", translation: "Pagar com dinheiro físico está se tornando obsoleto na era digital?" },
      { question: "What are the health differences between consuming fresh versus frozen foods?", translation: "Quais são as diferenças de saúde entre consumir alimentos frescos versus congelados?" },
      { question: "How does the organization of products on a shelf influence buyer behavior?", translation: "Como a organização dos produtos em uma prateleira influencia o comportamento do comprador?" }
    ]
  }
};

function processScenarios(dataObj, targetFile) {
  let content = fs.readFileSync(targetFile, 'utf8');

  for (const id in dataObj) {
    if (content.indexOf(`id: "${id}"`) === -1) continue;

    const startIndex = content.indexOf(`id: "${id}"`);
    let nextId = content.indexOf('id: "', startIndex + 10);
    if (nextId === -1) nextId = content.length;
    let section = content.slice(startIndex, nextId);

    const tfRegex = /trueOrFalse:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;
    const tfL2Regex = /trueOrFalseLevel2:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;
    const spRegex = /speakingPractice:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;
    const spL2Regex = /speakingPracticeLevel2:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;

    const d = dataObj[id];

    const newTfStr = `trueOrFalse: {
      part1: ${JSON.stringify(d.tf_a1_p1, null, 8).replace(/\]$/, '      ]')},
      part2: ${JSON.stringify(d.tf_a1_p2, null, 8).replace(/\]$/, '      ]')}
    }`;
    section = section.replace(tfRegex, newTfStr);

    const newTfL2Str = `trueOrFalseLevel2: {
      part1: ${JSON.stringify(d.tf_b1_p1, null, 8).replace(/\]$/, '      ]')},
      part2: ${JSON.stringify(d.tf_b1_p2, null, 8).replace(/\]$/, '      ]')}
    }`;
    section = section.replace(tfL2Regex, newTfL2Str);

    const newSpStr = `speakingPractice: {
      part1: ${JSON.stringify(d.sp_a1_p1, null, 8).replace(/\]$/, '      ]')},
      part2: ${JSON.stringify(d.sp_a1_p2, null, 8).replace(/\]$/, '      ]')}
    }`;
    section = section.replace(spRegex, newSpStr);

    const newSpL2Str = `speakingPracticeLevel2: {
      part1: ${JSON.stringify(d.sp_b1_p1, null, 8).replace(/\]$/, '      ]')},
      part2: ${JSON.stringify(d.sp_b1_p2, null, 8).replace(/\]$/, '      ]')}
    }`;
    section = section.replace(spL2Regex, newSpL2Str);

    content = content.slice(0, startIndex) + section + content.slice(nextId);
    console.log(`Updated scenario ${id} in ${targetFile}`);
  }

  fs.writeFileSync(targetFile, content);
}

processScenarios(data1, '../data/scenarios1.ts');
console.log("Done part 2.");
