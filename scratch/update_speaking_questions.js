const fs = require('fs');

const newQuestions = {
  "Family": {
    part1: [
      { question: "What is a valuable lesson your mother taught you?", translation: "Qual é uma lição valiosa que sua mãe lhe ensinou?" },
      { question: "How often do you ask your father for advice?", translation: "Com que frequência você pede conselhos ao seu pai?" },
      { question: "Do you and your brother share any hobbies?", translation: "Você e seu irmão compartilham algum hobby?" },
      { question: "What is your favorite memory with your sister?", translation: "Qual é a sua lembrança favorita com sua irmã?" },
      { question: "Does your grandmother cook traditional food for you?", translation: "Sua avó cozinha comida tradicional para você?" },
      { question: "What stories does your grandfather usually tell?", translation: "Quais histórias seu avô costuma contar?" },
      { question: "Are you close to your favorite aunt?", translation: "Você é próximo da sua tia favorita?" },
      { question: "Did your uncle ever teach you a new skill?", translation: "Seu tio já lhe ensinou uma nova habilidade?" },
      { question: "Do you regularly talk or hang out with your cousin?", translation: "Você conversa ou sai regularmente com seu primo(a)?" },
      { question: "How do your parents support your decisions?", translation: "Como seus pais apoiam suas decisões?" }
    ],
    part2: [
      { question: "What is the best gift you have given to your nephew?", translation: "Qual é o melhor presente que você já deu ao seu sobrinho?" },
      { question: "Does your niece enjoy playing with you?", translation: "Sua sobrinha gosta de brincar com você?" },
      { question: "What activities do you think a grandson would enjoy?", translation: "Quais atividades você acha que um neto aproveitaria?" },
      { question: "How would you spoil your granddaughter?", translation: "Como você mimaria sua neta?" },
      { question: "What do you admire most about your wife?", translation: "O que você mais admira na sua esposa?" },
      { question: "How did you meet your husband?", translation: "Como você conheceu seu marido?" },
      { question: "Do you usually have dinner with your mother-in-law?", translation: "Você costuma jantar com sua sogra?" },
      { question: "What interests does your father-in-law have?", translation: "Quais interesses seu sogro tem?" },
      { question: "Who do you get along with best in your family?", translation: "Com quem você se dá melhor na sua família?" },
      { question: "Do you take after your mother or your father?", translation: "Você puxou a sua mãe ou o seu pai?" }
    ]
  },
  "Friends": {
    part1: [
      { question: "Who is your oldest friend and how did you meet?", translation: "Quem é seu amigo mais antigo e como vocês se conheceram?" },
      { question: "What makes someone your best friend?", translation: "O que faz de alguém seu melhor amigo?" },
      { question: "Where do you usually hang out on weekends?", translation: "Onde você costuma sair nos fins de semana?" },
      { question: "When did you last meet up with your childhood friends?", translation: "Quando foi a última vez que você se encontrou com seus amigos de infância?" },
      { question: "Do you prefer to chat online or in person?", translation: "Você prefere bater papo online ou pessoalmente?" },
      { question: "What is the most fun activity you do with your group?", translation: "Qual é a atividade mais divertida que você faz com seu grupo?" },
      { question: "Who did you invite to your last birthday dinner?", translation: "Quem você convidou para o seu último jantar de aniversário?" },
      { question: "Do you enjoy throwing a big party at your house?", translation: "Você gosta de dar uma grande festa na sua casa?" },
      { question: "Are you part of a close group of friends?", translation: "Você faz parte de um grupo unido de amigos?" },
      { question: "Do you often share your personal goals with others?", translation: "Você costuma compartilhar seus objetivos pessoais com os outros?" }
    ],
    part2: [
      { question: "Who do you trust with your deepest secrets?", translation: "Em quem você confia seus segredos mais profundos?" },
      { question: "Is it hard for you to keep a secret?", translation: "É difícil para você guardar um segredo?" },
      { question: "Do you often argue with your friends over silly things?", translation: "Você costuma discutir com seus amigos sobre coisas bobas?" },
      { question: "When was the last time you had to apologize to someone?", translation: "Quando foi a última vez que você teve que pedir desculpas a alguém?" },
      { question: "How do you usually help out a friend in need?", translation: "Como você costuma ajudar um amigo que precisa?" },
      { question: "Can you tell a really good joke?", translation: "Você sabe contar uma piada muito boa?" },
      { question: "How do your friends support you when you are sad?", translation: "Como seus amigos te apoiam quando você está triste?" },
      { question: "Who gives the best advice in your life?", translation: "Quem dá os melhores conselhos na sua vida?" },
      { question: "Do you get along easily with new people?", translation: "Você se dá bem facilmente com pessoas novas?" },
      { question: "Are you good at making introductions at a party?", translation: "Você é bom em fazer apresentações em uma festa?" }
    ]
  },
  "Body": {
    part1: [
      { question: "Do you often get a pain in your head when you are stressed?", translation: "Você costuma sentir dor na cabeça quando está estressado?" },
      { question: "Have you ever broken your arm?", translation: "Você já quebrou o braço alguma vez?" },
      { question: "Do your leg muscles ache after running?", translation: "Os músculos da sua perna doem depois de correr?" },
      { question: "Are you right-handed or left-handed?", translation: "Você é destro ou canhoto (usa a mão direita ou esquerda)?" },
      { question: "Do your foot or feet hurt when wearing high heels?", translation: "Seu pé ou seus pés doem ao usar salto alto?" },
      { question: "What color are your eyes?", translation: "Qual a cor dos seus olhos?" },
      { question: "How often do you cut your hair?", translation: "Com que frequência você corta o seu cabelo?" },
      { question: "Do you breathe more through your mouth or nose?", translation: "Você respira mais pela boca ou pelo nariz?" },
      { question: "Have you ever broken your nose?", translation: "Você já quebrou o seu nariz alguma vez?" },
      { question: "Do your ears hurt when you fly on a plane?", translation: "Suas orelhas doem quando você viaja de avião?" }
    ],
    part2: [
      { question: "Do you carry tension in your shoulder?", translation: "Você acumula tensão no seu ombro?" },
      { question: "Have you ever injured your knee?", translation: "Você já machucou o seu joelho alguma vez?" },
      { question: "Can you snap your fingers loudly?", translation: "Você consegue estalar os dedos bem alto?" },
      { question: "Can you touch your toes without bending your knees?", translation: "Você consegue tocar os dedos dos pés sem dobrar os joelhos?" },
      { question: "Does your stomach hurt when you eat spicy food?", translation: "Seu estômago dói quando você come comida apimentada?" },
      { question: "Do you ever experience lower back pain?", translation: "Você já teve dor na parte inferior das costas?" },
      { question: "Do you wear a scarf around your neck in winter?", translation: "Você usa um cachecol no pescoço no inverno?" },
      { question: "How many times a day do you brush your teeth?", translation: "Quantas vezes por dia você escova os dentes?" },
      { question: "Have you ever bitten your tongue accidentally?", translation: "Você já mordeu a língua acidentalmente?" },
      { question: "Do your lips get dry in the cold weather?", translation: "Seus lábios ficam ressecados no clima frio?" }
    ]
  },
  "Home & Chores": {
    part1: [
      { question: "What is your favorite furniture piece in your living room?", translation: "Qual é a sua peça de mobília favorita na sua sala de estar?" },
      { question: "Who usually cooks in your kitchen at home?", translation: "Quem costuma cozinhar na sua cozinha em casa?" },
      { question: "Is your bedroom always tidy and organized?", translation: "O seu quarto é sempre arrumado e organizado?" },
      { question: "How long does it take you to get ready in the bathroom?", translation: "Quanto tempo você leva para se arrumar no banheiro?" },
      { question: "How often do you sweep the floor during the week?", translation: "Com que frequência você varre o chão durante a semana?" },
      { question: "Do you prefer to do the dishes or dry them?", translation: "Você prefere lavar a louça ou secá-la?" },
      { question: "Do you make the bed as soon as you wake up?", translation: "Você arruma a cama assim que acorda?" },
      { question: "Who is responsible to take out the trash in your house?", translation: "Quem é responsável por tirar o lixo na sua casa?" },
      { question: "What day of the week do you usually clean your home?", translation: "Em que dia da semana você costuma limpar a sua casa?" },
      { question: "Do you do the laundry on weekends or weekdays?", translation: "Você lava roupa nos fins de semana ou dias de semana?" }
    ],
    part2: [
      { question: "Do you iron the clothes yourself?", translation: "Você mesmo(a) passa as roupas?" },
      { question: "How frequently do you dust the furniture?", translation: "Com que frequência você tira o pó dos móveis?" },
      { question: "Is it annoying to vacuum the house?", translation: "É chato passar o aspirador de pó na casa?" },
      { question: "What do you keep in your garage besides a car?", translation: "O que você guarda na sua garagem além de um carro?" },
      { question: "Do you have any plants in your garden or yard?", translation: "Você tem alguma planta no seu jardim ou quintal?" },
      { question: "Do you sleep with your bedroom window open?", translation: "Você dorme com a janela do quarto aberta?" },
      { question: "Do you always lock the front door at night?", translation: "Você sempre tranca a porta da frente à noite?" },
      { question: "Have you ever had to fix the roof of your house?", translation: "Você já teve que consertar o telhado da sua casa?" },
      { question: "Do you prefer a house with stairs or a single floor?", translation: "Você prefere uma casa com escadas ou de um andar só?" },
      { question: "How long do you look in the mirror before leaving?", translation: "Quanto tempo você se olha no espelho antes de sair?" }
    ]
  },
  "Home & Chores 2": {
    part1: [
      { question: "Do you mop the floor with cold or warm water?", translation: "Você passa pano no chão com água fria ou morna?" },
      { question: "Who usually helps fold the laundry in your family?", translation: "Quem costuma ajudar a dobrar a roupa na sua família?" },
      { question: "Do you eat in the dining room or in front of the TV?", translation: "Você come na sala de jantar ou na frente da TV?" },
      { question: "Is your hallway decorated with pictures?", translation: "O seu corredor é decorado com quadros?" },
      { question: "What color is the ceiling in your bedroom?", translation: "Qual a cor do teto no seu quarto?" },
      { question: "Do you have any posters on your wall?", translation: "Você tem algum pôster na sua parede?" },
      { question: "Do you enjoy sitting on the balcony in the evening?", translation: "Você gosta de sentar na varanda à noite?" },
      { question: "What do you keep hidden down in your basement?", translation: "O que você guarda escondido lá no seu porão?" },
      { question: "Have you ever been inside a spooky attic?", translation: "Você já esteve dentro de um sótão assustador?" },
      { question: "Where do you usually buy new furniture for your house?", translation: "Onde você costuma comprar móveis novos para sua casa?" }
    ],
    part2: [
      { question: "Is your couch or sofa comfortable enough to sleep on?", translation: "O seu sofá é confortável o suficiente para dormir nele?" },
      { question: "How often do you actually wash the windows?", translation: "Com que frequência você realmente lava as janelas?" },
      { question: "Do you pay someone to mow the lawn?", translation: "Você paga alguém para cortar a grama?" },
      { question: "Do you often forget to water the plants?", translation: "Você costuma esquecer de regar as plantas?" },
      { question: "Whose turn is it to set the table tonight?", translation: "De quem é a vez de arrumar a mesa hoje à noite?" },
      { question: "Do you clear the table immediately after eating?", translation: "Você limpa a mesa imediatamente após comer?" },
      { question: "Is your kitchen sink full of dirty dishes right now?", translation: "A pia da sua cozinha está cheia de louça suja agora?" },
      { question: "Does any faucet in your house leak water?", translation: "Alguma torneira na sua casa vaza água?" },
      { question: "Is your clothes closet organized or a mess?", translation: "Seu guarda-roupa está organizado ou uma bagunça?" },
      { question: "Do you always wipe the counter after cooking?", translation: "Você sempre limpa o balcão depois de cozinhar?" }
    ]
  },
  "Hobbies": {
    part1: [
      { question: "What is the best way to read a book, physically or digitally?", translation: "Qual é a melhor maneira de ler um livro, fisicamente ou digitalmente?" },
      { question: "Did you ever try to learn how to play guitar?", translation: "Você já tentou aprender a tocar violão?" },
      { question: "What genre do you prefer when you listen to music?", translation: "Qual gênero você prefere quando ouve música?" },
      { question: "How often do you watch movies at the cinema?", translation: "Com que frequência você assiste a filmes no cinema?" },
      { question: "Are you talented enough to draw or paint?", translation: "Você é talentoso o suficiente para desenhar ou pintar?" },
      { question: "Which country would you love to travel to next?", translation: "Para qual país você adoraria viajar em seguida?" },
      { question: "Do you play video games to relax after work?", translation: "Você joga videogame para relaxar depois do trabalho?" },
      { question: "What kind of subjects do you like to take photos of?", translation: "Que tipo de assuntos você gosta de tirar fotos?" },
      { question: "Are you brave enough to dance in public?", translation: "Você é corajoso o suficiente para dançar em público?" },
      { question: "Do you sing out loud in the shower?", translation: "Você canta em voz alta no chuveiro?" }
    ],
    part2: [
      { question: "What is the most complicated dish you can cook?", translation: "Qual é o prato mais complicado que você consegue cozinhar?" },
      { question: "Do you like to go hiking in the mountains?", translation: "Você gosta de fazer trilha nas montanhas?" },
      { question: "Have you ever gone to camp in a forest?", translation: "Você já foi acampar em uma floresta?" },
      { question: "Do you know anyone who can knit a sweater?", translation: "Você conhece alguém que saiba tricotar um suéter?" },
      { question: "Did you collect anything special when you were a kid?", translation: "Você colecionava algo especial quando era criança?" },
      { question: "Do you prefer to write with a pen or type on a keyboard?", translation: "Você prefere escrever com caneta ou digitar em um teclado?" },
      { question: "Do you have the patience to garden on weekends?", translation: "Você tem paciência para cuidar do jardim nos fins de semana?" },
      { question: "How many hours a day do you surf the internet?", translation: "Quantas horas por dia você navega na internet?" },
      { question: "What is your favorite exercise when you workout?", translation: "Qual é o seu exercício favorito quando você malha?" },
      { question: "Who usually wins when you play board games?", translation: "Quem costuma ganhar quando você joga jogos de tabuleiro?" }
    ]
  },
  "Sports": {
    part1: [
      { question: "What is your favorite soccer or football team?", translation: "Qual é o seu time de futebol favorito?" },
      { question: "Are you tall enough to play basketball professionally?", translation: "Você é alto o suficiente para jogar basquete profissionalmente?" },
      { question: "How old were you when you learned to swim?", translation: "Quantos anos você tinha quando aprendeu a nadar?" },
      { question: "Do you run marathons or just jog for fun?", translation: "Você corre maratonas ou apenas corre por diversão?" },
      { question: "Are you currently part of any sports team?", translation: "Você faz parte de algum time esportivo atualmente?" },
      { question: "What was the most exciting match or game you ever watched?", translation: "Qual foi a partida ou jogo mais emocionante que você já assistiu?" },
      { question: "Does it bother you when you don't win?", translation: "Te incomoda quando você não vence?" },
      { question: "How do you handle it when you lose a competition?", translation: "Como você lida quando perde uma competição?" },
      { question: "Are you good at throwing a ball accurately?", translation: "Você é bom em arremessar uma bola com precisão?" },
      { question: "Have you ever been inside a massive stadium?", translation: "Você já esteve dentro de um estádio gigantesco?" }
    ],
    part2: [
      { question: "Do you prefer watching tennis or playing it?", translation: "Você prefere assistir tênis ou jogá-lo?" },
      { question: "Have you ever played volleyball on the beach?", translation: "Você já jogou vôlei na praia?" },
      { question: "Is cycling a popular sport in your city?", translation: "O ciclismo é um esporte popular na sua cidade?" },
      { question: "How many days a week do you go to the gym?", translation: "Quantos dias por semana você vai à academia?" },
      { question: "Did a coach ever change your life for the better?", translation: "Algum treinador já mudou sua vida para melhor?" },
      { question: "Do you think being a referee is a difficult job?", translation: "Você acha que ser árbitro é um trabalho difícil?" },
      { question: "Do you always check the score during a game?", translation: "Você sempre verifica o placar durante um jogo?" },
      { question: "What time do you usually work out every day?", translation: "A que horas você costuma malhar todos os dias?" },
      { question: "Do you like to compete against your friends?", translation: "Você gosta de competir contra seus amigos?" },
      { question: "Are you planning to watch the next big sports match?", translation: "Você planeja assistir à próxima grande partida de esportes?" }
    ]
  },
  "Supermarket": {
    part1: [
      { question: "Do you always use a shopping cart or just a basket?", translation: "Você sempre usa um carrinho de compras ou apenas uma cesta?" },
      { question: "Are you usually friendly with the cashier?", translation: "Você costuma ser amigável com o caixa?" },
      { question: "How often do you go grocery shopping every month?", translation: "Com que frequência você faz compras de supermercado todo mês?" },
      { question: "Can you easily find the dairy aisle?", translation: "Você consegue encontrar facilmente o corredor de laticínios?" },
      { question: "Do you always check your receipt before leaving?", translation: "Você sempre verifica seu recibo antes de sair?" },
      { question: "Do you actively look for a discount on products?", translation: "Você procura ativamente por desconto em produtos?" },
      { question: "Do you call it a shopping cart or a trolley?", translation: "Você chama isso de carrinho de compras (shopping cart) ou trolley?" },
      { question: "Do you think organic food is affordable?", translation: "Você acha que comida orgânica é acessível (barata)?" },
      { question: "Do you get annoyed when the queue is too long?", translation: "Você fica irritado quando a fila está muito longa?" },
      { question: "What is your favorite local supermarket?", translation: "Qual é o seu supermercado local favorito?" }
    ],
    part2: [
      { question: "Do you bring your own reusable bag to the store?", translation: "Você leva sua própria sacola reutilizável para a loja?" },
      { question: "Can you reach the top shelf easily?", translation: "Você consegue alcançar a prateleira de cima facilmente?" },
      { question: "Do you prefer to pay with cash or card?", translation: "Você prefere pagar com dinheiro ou cartão?" },
      { question: "Have you ever lost your credit card?", translation: "Você já perdeu seu cartão de crédito?" },
      { question: "Do you always check the price per kilogram?", translation: "Você sempre verifica o preço por quilo?" },
      { question: "Do you try to save money when shopping for food?", translation: "Você tenta economizar dinheiro ao comprar comida?" },
      { question: "Is the customer always right in your opinion?", translation: "O cliente tem sempre razão na sua opinião?" },
      { question: "How long do you usually wait in the checkout line?", translation: "Quanto tempo você costuma esperar na fila do caixa?" },
      { question: "What is the most expensive product you buy regularly?", translation: "Qual é o produto mais caro que você compra regularmente?" },
      { question: "What items do you completely forget to buy sometimes?", translation: "Quais itens você esquece completamente de comprar às vezes?" }
    ]
  }
};

const newQuestions2 = {
  "Shopping": {
    part1: [
      { question: "Where do you usually buy your clothes?", translation: "Onde você costuma comprar suas roupas?" },
      { question: "How many pairs of shoes do you own?", translation: "Quantos pares de sapatos você tem?" },
      { question: "Do you struggle to find your exact size?", translation: "Você tem dificuldade de encontrar o seu tamanho exato?" },
      { question: "Does the price matter more than the brand?", translation: "O preço importa mais do que a marca?" },
      { question: "Do you always try on clothes before buying them?", translation: "Você sempre experimenta roupas antes de comprá-las?" },
      { question: "What is your favorite retail store or shop?", translation: "Qual é a sua loja de varejo favorita?" },
      { question: "Do you feel uncomfortable in a small fitting room?", translation: "Você se sente desconfortável em um provador pequeno?" },
      { question: "Do you wait for a sale to buy expensive items?", translation: "Você espera por uma liquidação para comprar itens caros?" },
      { question: "Have you ever worked as a customer service agent?", translation: "Você já trabalhou como agente de atendimento ao cliente?" },
      { question: "What is the most expensive thing you wear?", translation: "Qual é a coisa mais cara que você veste?" }
    ],
    part2: [
      { question: "Do you think cheap clothes lack quality?", translation: "Você acha que roupas baratas não têm qualidade?" },
      { question: "Have you ever left your wallet at home accidentally?", translation: "Você já esqueceu sua carteira em casa acidentalmente?" },
      { question: "Do you use a credit card for online shopping?", translation: "Você usa cartão de crédito para compras online?" },
      { question: "Do you carry a lot of cash in your pocket?", translation: "Você carrega muito dinheiro no bolso?" },
      { question: "Do you prefer wearing a leather jacket in winter?", translation: "Você prefere usar uma jaqueta de couro no inverno?" },
      { question: "What color pants do you wear the most?", translation: "Que cor de calça você mais usa?" },
      { question: "Would you wear a formal dress to a casual party?", translation: "Você usaria um vestido formal em uma festa casual?" },
      { question: "Do you ever wear a hat to protect your face from the sun?", translation: "Você costuma usar chapéu para proteger o rosto do sol?" },
      { question: "Do you look at yourself in every mirror you pass?", translation: "Você se olha em todo espelho por que passa?" },
      { question: "What is the best gift you have ever received?", translation: "Qual é o melhor presente que você já recebeu?" }
    ]
  },
  "Professions": {
    part1: [
      { question: "Would you like to work as a doctor?", translation: "Você gostaria de trabalhar como médico(a)?" },
      { question: "What qualities make a good teacher?", translation: "Quais qualidades fazem um bom professor(a)?" },
      { question: "Is it difficult to become a successful engineer?", translation: "É difícil se tornar um engenheiro(a) de sucesso?" },
      { question: "Do you know any professional chef personally?", translation: "Você conhece algum chef profissional pessoalmente?" },
      { question: "Would you feel scared being a police officer?", translation: "Você sentiria medo sendo um policial?" },
      { question: "Are you satisfied with your current work or job?", translation: "Você está satisfeito com seu atual trabalho ou emprego?" },
      { question: "Do you think a nurse works harder than a doctor?", translation: "Você acha que um enfermeiro(a) trabalha mais do que um médico(a)?" },
      { question: "Have you ever hired a mechanic to fix your car?", translation: "Você já contratou um mecânico para consertar seu carro?" },
      { question: "Why do you think being a lawyer is stressful?", translation: "Por que você acha que ser advogado(a) é estressante?" },
      { question: "Do you prefer to work in a quiet office?", translation: "Você prefere trabalhar em um escritório silencioso?" }
    ],
    part2: [
      { question: "Are you afraid of going to the dentist?", translation: "Você tem medo de ir ao dentista?" },
      { question: "Do you admire what a firefighter does for the city?", translation: "Você admira o que um bombeiro faz pela cidade?" },
      { question: "Would you enjoy working as a truck driver?", translation: "Você gostaria de trabalhar como motorista de caminhão?" },
      { question: "Do you think a pilot gets tired of flying?", translation: "Você acha que um piloto se cansa de voar?" },
      { question: "Is it hard to make money as an independent artist?", translation: "É difícil ganhar dinheiro como um artista independente?" },
      { question: "Have you ever visited a farmer in the countryside?", translation: "Você já visitou um fazendeiro no interior?" },
      { question: "Do you usually tip the waiter generously?", translation: "Você costuma dar gorjeta ao garçom generosamente?" },
      { question: "What company would you love to work for?", translation: "Para qual empresa você adoraria trabalhar?" },
      { question: "Do you get along well with your current boss?", translation: "Você se dá bem com seu atual chefe?" },
      { question: "Is a high salary more important than loving your job?", translation: "Um salário alto é mais importante do que amar seu emprego?" }
    ]
  },
  "Public Places": {
    part1: [
      { question: "How often do you go for a walk in the park?", translation: "Com que frequência você vai dar uma caminhada no parque?" },
      { question: "When was the last time you visited a hospital?", translation: "Quando foi a última vez que você visitou um hospital?" },
      { question: "Did you enjoy going to school when you were a kid?", translation: "Você gostava de ir à escola quando era criança?" },
      { question: "Is there a bus stop conveniently near your house?", translation: "Há um ponto de ônibus convenientemente perto da sua casa?" },
      { question: "Is your street quiet or noisy at night?", translation: "A sua rua é silenciosa ou barulhenta à noite?" },
      { question: "Do you usually turn left or right when you exit your house?", translation: "Você costuma virar à esquerda ou à direita quando sai de casa?" },
      { question: "Do you prefer studying at home or in the library?", translation: "Você prefere estudar em casa ou na biblioteca?" },
      { question: "Do you use a digital app instead of going to the bank?", translation: "Você usa um aplicativo digital em vez de ir ao banco?" },
      { question: "Do you need to go straight to get to the city center?", translation: "Você precisa ir reto para chegar ao centro da cidade?" },
      { question: "Is there a good coffee shop near your workplace?", translation: "Há uma boa cafeteria perto do seu local de trabalho?" }
    ],
    part2: [
      { question: "Do you buy your medicine at the local pharmacy?", translation: "Você compra seus remédios na farmácia local?" },
      { question: "What is your favorite restaurant in your town?", translation: "Qual é o seu restaurante favorito na sua cidade?" },
      { question: "Do you get anxious when you arrive at the airport?", translation: "Você fica ansioso quando chega ao aeroporto?" },
      { question: "Have you ever taken a train from the main station?", translation: "Você já pegou um trem da estação principal?" },
      { question: "Do you enjoy visiting a historical museum on weekends?", translation: "Você gosta de visitar um museu histórico nos finais de semana?" },
      { question: "Is your hometown far from the capital city?", translation: "A sua cidade natal é longe da capital?" },
      { question: "Is there a grocery store around the corner?", translation: "Há uma mercearia virando a esquina?" },
      { question: "Can you run around the block without getting tired?", translation: "Você consegue correr ao redor do quarteirão sem se cansar?" },
      { question: "Have you ever run a red traffic light by mistake?", translation: "Você já ultrapassou um semáforo vermelho por engano?" },
      { question: "Have you ever walked across a really long bridge?", translation: "Você já caminhou por uma ponte muito longa?" }
    ]
  },
  "Animals": {
    part1: [
      { question: "Did you ever own a pet dog?", translation: "Você já teve um cachorro de estimação?" },
      { question: "Do you prefer a lazy cat over an energetic dog?", translation: "Você prefere um gato preguiçoso a um cachorro enérgico?" },
      { question: "Would you keep a bird in a cage inside your house?", translation: "Você manteria um pássaro em uma gaiola dentro da sua casa?" },
      { question: "Is a fish a boring or relaxing pet to have?", translation: "Um peixe é um animal de estimação chato ou relaxante de se ter?" },
      { question: "What is the most unusual pet you have ever seen?", translation: "Qual é o animal de estimação mais incomum que você já viu?" },
      { question: "Whose responsibility is it to walk the dog in your family?", translation: "De quem é a responsabilidade de passear com o cachorro na sua família?" },
      { question: "Do you always remember to feed your pets on time?", translation: "Você sempre se lembra de alimentar seus animais na hora certa?" },
      { question: "Have you ever ridden a horse on a farm?", translation: "Você já andou a cavalo em uma fazenda?" },
      { question: "Have you ever milked a cow in real life?", translation: "Você já tirou leite de uma vaca na vida real?" },
      { question: "Do you take your pets to the vet regularly?", translation: "Você leva seus animais de estimação ao veterinário regularmente?" }
    ],
    part2: [
      { question: "Do you think a pig is actually a smart animal?", translation: "Você acha que um porco é realmente um animal inteligente?" },
      { question: "Have you ever chased a chicken in a backyard?", translation: "Você já correu atrás de uma galinha num quintal?" },
      { question: "Would you let a rabbit roam free in your living room?", translation: "Você deixaria um coelho andar solto pela sua sala?" },
      { question: "Have you ever seen a wild lion in a zoo?", translation: "Você já viu um leão selvagem em um zoológico?" },
      { question: "Do you think a tiger is more dangerous than a lion?", translation: "Você acha que um tigre é mais perigoso que um leão?" },
      { question: "Have you ever fed a monkey during a trip?", translation: "Você já alimentou um macaco durante uma viagem?" },
      { question: "Would you like to ride a massive elephant?", translation: "Você gostaria de montar em um elefante gigante?" },
      { question: "Does your neighbor's dog bark all night long?", translation: "O cachorro do seu vizinho late a noite toda?" },
      { question: "Does your cat meow loudly when it is hungry?", translation: "Seu gato mia alto quando está com fome?" },
      { question: "Have you ever experienced a painful bug bite?", translation: "Você já experimentou uma mordida de inseto dolorosa?" }
    ]
  },
  "Cooking": {
    part1: [
      { question: "Do you usually cook dinner for your family?", translation: "Você costuma cozinhar o jantar para sua família?" },
      { question: "Did you ever try to bake a cake from scratch?", translation: "Você já tentou assar um bolo do zero?" },
      { question: "Do you follow a recipe or just guess the amounts?", translation: "Você segue uma receita ou apenas adivinha as quantidades?" },
      { question: "Do you always buy fresh ingredients for your meals?", translation: "Você sempre compra ingredientes frescos para suas refeições?" },
      { question: "Are you careful when using a sharp knife?", translation: "Você tem cuidado ao usar uma faca afiada?" },
      { question: "Have you ever forgotten something inside the hot oven?", translation: "Você já esqueceu algo dentro do forno quente?" },
      { question: "Do you know how to perfectly boil an egg?", translation: "Você sabe como ferver um ovo perfeitamente?" },
      { question: "Do you fry your food or prefer it baked?", translation: "Você frita sua comida ou prefere ela assada?" },
      { question: "Can you chop onions without crying?", translation: "Você consegue picar cebolas sem chorar?" },
      { question: "Do you eat ice cream with a big or small spoon?", translation: "Você come sorvete com uma colher grande ou pequena?" }
    ],
    part2: [
      { question: "Do you eat pasta with a fork or a spoon?", translation: "Você come macarrão com um garfo ou uma colher?" },
      { question: "Do you clear your plate completely when you eat out?", translation: "Você limpa completamente o seu prato quando come fora?" },
      { question: "Do you prefer eating cereal out of a large bowl?", translation: "Você prefere comer cereal de uma tigela grande?" },
      { question: "Do you know how to mix cocktails for a party?", translation: "Você sabe como misturar coquetéis para uma festa?" },
      { question: "Can you pour wine without spilling a drop?", translation: "Você consegue derramar vinho sem derramar uma gota?" },
      { question: "Do you always taste the soup while making it?", translation: "Você sempre prova a sopa enquanto a faz?" },
      { question: "Do you enjoy eating extremely spicy Mexican food?", translation: "Você gosta de comer comida mexicana extremamente apimentada?" },
      { question: "Do you prefer a sweet dessert or a savory snack?", translation: "Você prefere uma sobremesa doce ou um lanche salgado?" },
      { question: "Do you think fast food is way too salty?", translation: "Você acha que fast food é salgado demais?" },
      { question: "Do you clean the frying pan immediately after cooking?", translation: "Você limpa a frigideira imediatamente após cozinhar?" }
    ]
  },
  "Basic Technology": {
    part1: [
      { question: "Do you carry your laptop with you everywhere?", translation: "Você carrega o seu laptop com você para todos os lugares?" },
      { question: "What is the first thing you check on your smartphone?", translation: "Qual é a primeira coisa que você checa no seu smartphone?" },
      { question: "Could you live a week without the internet?", translation: "Você conseguiria viver uma semana sem a internet?" },
      { question: "Are you fast at typing on a mechanical keyboard?", translation: "Você é rápido ao digitar em um teclado mecânico?" },
      { question: "Do you spend too much time staring at a screen?", translation: "Você passa tempo demais olhando para uma tela?" },
      { question: "How often do you download new games to your PC?", translation: "Com que frequência você baixa jogos novos no seu PC?" },
      { question: "Do you use the same password for all your accounts?", translation: "Você usa a mesma senha para todas as suas contas?" },
      { question: "Do you always carry a phone charger in your bag?", translation: "Você sempre carrega um carregador de celular na bolsa?" },
      { question: "What is your most used app on your tablet?", translation: "Qual é o seu aplicativo mais usado no tablet?" },
      { question: "Do you prefer using a wireless mouse or a touchpad?", translation: "Você prefere usar um mouse sem fio ou um touchpad?" }
    ],
    part2: [
      { question: "How often do you upload photos to the cloud?", translation: "Com que frequência você faz upload de fotos para a nuvem?" },
      { question: "Does your phone battery usually last the whole day?", translation: "A bateria do seu celular costuma durar o dia todo?" },
      { question: "How many unread messages are in your email inbox?", translation: "Quantas mensagens não lidas há na sua caixa de entrada de e-mail?" },
      { question: "What is your favorite website to read the news?", translation: "Qual é o seu site favorito para ler as notícias?" },
      { question: "Do you always verify a link before clicking it?", translation: "Você sempre verifica um link antes de clicar nele?" },
      { question: "Do you regularly save a backup of your important files?", translation: "Você salva regularmente um backup dos seus arquivos importantes?" },
      { question: "Have you ever accidentally had to delete an important document?", translation: "Você já teve que excluir um documento importante acidentalmente?" },
      { question: "Do you organize your computer desktop into a specific folder?", translation: "Você organiza a área de trabalho do seu computador em uma pasta específica?" },
      { question: "Do you listen to podcasts using noise-canceling headphones?", translation: "Você ouve podcasts usando fones de ouvido com cancelamento de ruído?" },
      { question: "Do you always plug in your phone before going to sleep?", translation: "Você sempre conecta (na tomada) o seu telefone antes de dormir?" }
    ]
  },
  "Social Media": {
    part1: [
      { question: "How many times a day do you like a picture on Instagram?", translation: "Quantas vezes por dia você curte uma foto no Instagram?" },
      { question: "Do you follow any famous celebrities on Twitter?", translation: "Você segue alguma celebridade famosa no Twitter?" },
      { question: "When did you last post a photo of yourself?", translation: "Quando foi a última vez que você postou uma foto sua?" },
      { question: "Do you often share funny videos with your best friend?", translation: "Você costuma compartilhar vídeos engraçados com seu melhor amigo?" },
      { question: "Is your social media profile private or public?", translation: "O seu perfil nas redes sociais é privado ou público?" },
      { question: "Do you prefer to text or send a voice message?", translation: "Você prefere mandar mensagem de texto ou de voz?" },
      { question: "Do you always read every comment on a controversial video?", translation: "Você sempre lê cada comentário em um vídeo polêmico?" },
      { question: "Do you ever use a trending hashtag in your captions?", translation: "Você já usou uma hashtag em alta nas suas legendas?" },
      { question: "How much time do you spend just trying to scroll endlessly?", translation: "Quanto tempo você passa apenas tentando rolar a tela infinitamente?" },
      { question: "Do you care about having a huge follower count?", translation: "Você se importa em ter uma grande contagem de seguidores?" }
    ],
    part2: [
      { question: "Does your news feed show mostly memes or news?", translation: "O seu feed de notícias mostra principalmente memes ou notícias?" },
      { question: "Do you always tag your friends in your vacation photos?", translation: "Você sempre marca seus amigos nas suas fotos de férias?" },
      { question: "Do you watch every story uploaded by your connections?", translation: "Você assiste a cada story enviado pelas suas conexões?" },
      { question: "Have you ever made a video that went completely viral?", translation: "Você já fez um vídeo que se tornou completamente viral?" },
      { question: "Do you often upload high-quality pictures of your food?", translation: "Você costuma fazer upload de fotos de alta qualidade da sua comida?" },
      { question: "Do you frequently update the privacy settings on your accounts?", translation: "Você atualiza frequentemente as configurações de privacidade nas suas contas?" },
      { question: "Have you ever had to block a toxic person online?", translation: "Você já teve que bloquear uma pessoa tóxica online?" },
      { question: "Do you immediately delete embarrassing photos of yourself?", translation: "Você deleta imediatamente fotos embaraçosas suas?" },
      { question: "Are you always online late at night?", translation: "Você está sempre online tarde da noite?" },
      { question: "Do you use a strong password for your banking apps?", translation: "Você usa uma senha forte para os seus aplicativos bancários?" }
    ]
  }
};

const allQuestions = { ...newQuestions, ...newQuestions2 };

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Simple string replace or regex
  // We need to replace speakingPracticeLevel2 or speakingPractice for each scenario
  for (const [scenarioName, parts] of Object.entries(allQuestions)) {
    // Find the scenario block by title
    const titleRegex = new RegExp(`title:\\s*["']${scenarioName}["']`, 'g');
    const titleMatch = titleRegex.exec(content);
    if (!titleMatch) continue;

    const startIdx = titleMatch.index;
    
    // Find next scenario block or end of file
    const nextTitleMatch = new RegExp(`title:\\s*["'].+?["']`, 'g');
    nextTitleMatch.lastIndex = startIdx + 10;
    const nextTitle = nextTitleMatch.exec(content);
    const endIdx = nextTitle ? nextTitle.index : content.length;

    let scenarioBlock = content.substring(startIdx, endIdx);

    // We replace speakingPracticeLevel2 first, if it exists
    if (scenarioBlock.includes('speakingPracticeLevel2:')) {
      const spRegex = /speakingPracticeLevel2:\s*\{\s*part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/g;
      
      const newPart1 = parts.part1.map(p => `{ question: "${p.question}", translation: "${p.translation}" }`).join(', ');
      const newPart2 = parts.part2.map(p => `{ question: "${p.question}", translation: "${p.translation}" }`).join(', ');
      
      scenarioBlock = scenarioBlock.replace(spRegex, `speakingPracticeLevel2: { part1: [ ${newPart1} ], part2: [ ${newPart2} ] }`);
    } else if (scenarioBlock.includes('speakingPractice:')) {
      // Try speakingPractice if Level 2 is not there
      const spRegex = /speakingPractice:\s*\{\s*part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/g;
      
      const newPart1 = parts.part1.map(p => `{ question: "${p.question}", translation: "${p.translation}" }`).join(', ');
      const newPart2 = parts.part2.map(p => `{ question: "${p.question}", translation: "${p.translation}" }`).join(', ');
      
      scenarioBlock = scenarioBlock.replace(spRegex, `speakingPractice: { part1: [ ${newPart1} ], part2: [ ${newPart2} ] }`);
    }

    content = content.substring(0, startIdx) + scenarioBlock + content.substring(endIdx);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('../data/scenarios1.ts');
updateFile('../data/scenarios2.ts');
console.log('Update complete.');
