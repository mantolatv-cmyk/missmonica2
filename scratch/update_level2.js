const fs = require('fs');

const allQuestionsLevel2 = {
  "Family": {
    part1: [
      { question: "Who helped bring you up when you were a child?", translation: "Quem ajudou a criar você quando você era criança?" },
      { question: "Do you come from a close-knit family?", translation: "Você vem de uma família muito unida?" },
      { question: "How often do you visit your in-laws?", translation: "Com que frequência você visita seus sogros/cunhados?" },
      { question: "Do you invite your extended family to your birthday parties?", translation: "Você convida sua família estendida para as suas festas de aniversário?" },
      { question: "Did you ever wish you were an only child?", translation: "Você já desejou ser filho único?" },
      { question: "Which relative lives the furthest away from you?", translation: "Qual parente mora mais longe de você?" },
      { question: "How many children do you want, a son or a daughter?", translation: "Quantos filhos você quer ter, um filho ou uma filha?" },
      { question: "Does your daughter enjoy studying at school?", translation: "A sua filha gosta de estudar na escola?" },
      { question: "Is it normal for siblings to grow apart as they age?", translation: "É normal que os irmãos se afastem à medida que envelhecem?" },
      { question: "Who do you look up to the most in your family?", translation: "Quem você mais admira na sua família?" }
    ],
    part2: [
      { question: "Where do you plan to settle down in the future?", translation: "Onde você planeja sossegar/criar raízes no futuro?" },
      { question: "Does your family gather every Christmas?", translation: "Sua família se reúne em todo Natal?" },
      { question: "Which sibling are you the closest to?", translation: "De qual irmão/irmã você é mais próximo?" },
      { question: "Do you think you had a strict upbringing?", translation: "Você acha que teve uma criação rigorosa?" },
      { question: "Can you depend on your family when you are in trouble?", translation: "Você pode contar com sua família quando está em apuros?" },
      { question: "When did your parents tie the knot?", translation: "Quando seus pais se casaram?" },
      { question: "Do you like to spoil your younger relatives?", translation: "Você gosta de mimar seus parentes mais novos?" },
      { question: "Have you ever fallen out with a close family member?", translation: "Você já se desentendeu com um familiar próximo?" },
      { question: "Is it easy for you to make up after a family fight?", translation: "É fácil para você fazer as pazes depois de uma briga em família?" },
      { question: "Do you strongly resemble your mother or father?", translation: "Você se assemelha fortemente à sua mãe ou ao seu pai?" }
    ]
  },
  "Friends": {
    part1: [
      { question: "How do you keep in touch with old friends?", translation: "Como você mantém contato com velhos amigos?" },
      { question: "Why did you fall out with your childhood friend?", translation: "Por que você se desentendeu com seu amigo de infância?" },
      { question: "Can you always rely on your best friend for help?", translation: "Você pode sempre contar com seu melhor amigo para pedir ajuda?" },
      { question: "Do you consider yourself a trustworthy person?", translation: "Você se considera uma pessoa confiável?" },
      { question: "Is there an acquaintance you want to get to know better?", translation: "Há algum conhecido que você queira conhecer melhor?" },
      { question: "When did you last get together with your classmates?", translation: "Quando foi a última vez que você se reuniu com seus colegas de classe?" },
      { question: "Do you usually call your friends 'mate'?", translation: "Você costuma chamar seus amigos de 'mate' (parceiro/cara)?" },
      { question: "Would you like to catch up over coffee this weekend?", translation: "Você gostaria de colocar o papo em dia tomando um café neste final de semana?" },
      { question: "Have you ever let down a friend who needed you?", translation: "Você já decepcionou um amigo que precisava de você?" },
      { question: "Who do you turn to when you have a big problem?", translation: "A quem você recorre quando tem um grande problema?" }
    ],
    part2: [
      { question: "Will your friends stand by you in a crisis?", translation: "Seus amigos ficarão ao seu lado em uma crise?" },
      { question: "Did you hit it off immediately with your best friend?", translation: "Vocês se deram bem de imediato com o seu melhor amigo?" },
      { question: "Can I count on you to keep a secret?", translation: "Posso contar com você para guardar um segredo?" },
      { question: "Do your friends usually back you up in an argument?", translation: "Seus amigos costumam te apoiar/dar cobertura em uma discussão?" },
      { question: "What is the hardest habit of your friend to put up with?", translation: "Qual é o hábito mais difícil do seu amigo de tolerar?" },
      { question: "How do you cheer up someone who is crying?", translation: "Como você anima alguém que está chorando?" },
      { question: "Do you bond easily with people at a party?", translation: "Você cria laços/se conecta facilmente com as pessoas em uma festa?" },
      { question: "Why do some good friends drift apart over time?", translation: "Por que alguns bons amigos se distanciam com o tempo?" },
      { question: "Did everyone show up at your last birthday dinner?", translation: "Todo mundo apareceu no seu último jantar de aniversário?" }
    ]
  },
  "Body Parts": {
    part1: [
      { question: "Did you ever hit your forehead on a low door?", translation: "Você já bateu a testa em uma porta baixa?" },
      { question: "Have you ever sprained your wrist while playing sports?", translation: "Você já torceu o pulso jogando esportes?" },
      { question: "How long does it take for a twisted ankle to heal?", translation: "Quanto tempo leva para um tornozelo torcido curar?" },
      { question: "Do you use your thumb a lot while texting?", translation: "Você usa muito o polegar enquanto digita mensagens?" },
      { question: "Did you measure your waist for new pants?", translation: "Você mediu sua cintura para calças novas?" },
      { question: "Do your shoes hurt your heel when walking?", translation: "Seus sapatos machucam seu calcanhar ao caminhar?" },
      { question: "Do you have any pain in your chest today?", translation: "Você tem alguma dor no peito hoje?" },
      { question: "Does your jaw hurt when you chew tough food?", translation: "Seu maxilar dói quando você mastiga comida dura?" },
      { question: "How many times a week do you work out?", translation: "Quantas vezes por semana você malha/faz exercícios?" },
      { question: "Did you fully recover from your last cold?", translation: "Você se recuperou totalmente do seu último resfriado?" }
    ],
    part2: [
      { question: "Did you throw up after eating that strange food?", translation: "Você vomitou depois de comer aquela comida estranha?" },
      { question: "Have you ever passed out from extreme heat?", translation: "Você já desmaiou de calor extremo?" },
      { question: "How long did it take you to get over the flu?", translation: "Quanto tempo você demorou para se curar (superar) da gripe?" },
      { question: "Do you sneeze a lot during springtime?", translation: "Você espirra muito durante a primavera?" },
      { question: "Did you cough all night long?", translation: "Você tossiu a noite toda?" },
      { question: "Did your nose bleed yesterday morning?", translation: "Seu nariz sangrou ontem de manhã?" },
      { question: "Is it difficult for you to swallow pills?", translation: "É difícil para você engolir pílulas?" },
      { question: "Can you breathe easily in high altitudes?", translation: "Você consegue respirar facilmente em grandes altitudes?" },
      { question: "Do you sweat a lot when you play soccer?", translation: "Você transpira muito quando joga futebol?" },
      { question: "Do you shiver when you step out of a warm shower?", translation: "Você treme (de frio) quando sai de um banho quente?" }
    ]
  },
  "Home & Chores": {
    part1: [
      { question: "Is your landlord a friendly or strict person?", translation: "O proprietário da sua casa é uma pessoa amigável ou rigorosa?" },
      { question: "Do you pay your rent at the beginning of the month?", translation: "Você paga o seu aluguel no início do mês?" },
      { question: "Did you buy all the furniture for your house new?", translation: "Você comprou todos os móveis para sua casa novos?" },
      { question: "What is the most expensive appliance in your kitchen?", translation: "Qual é o eletrodoméstico mais caro na sua cozinha?" },
      { question: "Do you think your living room is cozy in winter?", translation: "Você acha que sua sala de estar é aconchegante no inverno?" },
      { question: "Is your current apartment spacious enough for you?", translation: "O seu apartamento atual é espaçoso o suficiente para você?" },
      { question: "When did you officially move in to your house?", translation: "Quando você se mudou oficialmente para sua casa?" },
      { question: "Do you like the neighborhood you currently live in?", translation: "Você gosta do bairro em que mora atualmente?" },
      { question: "Are you planning to move out anytime soon?", translation: "Você planeja se mudar em breve?" },
      { question: "How long did it take to settle in to your new place?", translation: "Quanto tempo demorou para você se acomodar na sua casa nova?" }
    ],
    part2: [
      { question: "Do you usually tidy up your desk before working?", translation: "Você costuma arrumar sua mesa antes de trabalhar?" },
      { question: "Who will clean up the mess after the party?", translation: "Quem vai limpar a bagunça depois da festa?" },
      { question: "Do you put away your clothes as soon as they are washed?", translation: "Você guarda suas roupas assim que são lavadas?" },
      { question: "Did you decorate your bedroom yourself?", translation: "Você decorou o seu quarto você mesmo?" },
      { question: "Would you like to renovate your bathroom next year?", translation: "Você gostaria de reformar o seu banheiro no ano que vem?" },
      { question: "Did you sign a one-year lease for your apartment?", translation: "Você assinou um contrato de aluguel de um ano para o seu apartamento?" },
      { question: "Have you ever seen a landlord evict a bad tenant?", translation: "Você já viu um proprietário despejar um inquilino ruim?" },
      { question: "Is it hard to get a mortgage from the bank?", translation: "É difícil conseguir um financiamento imobiliário no banco?" },
      { question: "Are you going to fix up the old house before selling it?", translation: "Você vai consertar/reformar a casa velha antes de vendê-la?" }
    ]
  },
  "Home & Chores 2": {
    part1: [
      { question: "Do you vacuum the carpets every week?", translation: "Você passa aspirador de pó nos tapetes toda semana?" },
      { question: "Do you do the laundry on Saturdays or Sundays?", translation: "Você lava a roupa aos sábados ou domingos?" },
      { question: "Whose turn is it to take out the trash today?", translation: "De quem é a vez de tirar o lixo hoje?" },
      { question: "Did you wipe the kitchen table after dinner?", translation: "Você limpou/passou pano na mesa da cozinha depois do jantar?" },
      { question: "Do you sneeze when you dust the old shelves?", translation: "Você espirra quando tira o pó das prateleiras antigas?" },
      { question: "Is it your job to mop the bathroom floor?", translation: "É o seu trabalho passar pano no chão do banheiro?" },
      { question: "How long does it take you to tidy up your room?", translation: "Quanto tempo você leva para arrumar o seu quarto?" },
      { question: "What are your least favorite chores around the house?", translation: "Quais são as tarefas domésticas que você menos gosta de fazer?" }
    ],
    part2: [
      { question: "Did you sweep the kitchen before mopping it?", translation: "Você varreu a cozinha antes de passar pano nela?" },
      { question: "Do you usually iron your clothes while watching TV?", translation: "Você costuma passar suas roupas enquanto assiste TV?" },
      { question: "Do you fold your t-shirts or hang them up?", translation: "Você dobra suas camisetas ou as pendura?" },
      { question: "Did you scrub the bathtub until it was perfectly clean?", translation: "Você esfregou a banheira até ela ficar perfeitamente limpa?" },
      { question: "Did you plug in your phone charger near your bed?", translation: "Você conectou o carregador do seu celular perto da sua cama?" },
      { question: "Do you unplug the TV during a thunderstorm?", translation: "Você tira a TV da tomada durante uma tempestade?" },
      { question: "Do you turn up the volume when your favorite song plays?", translation: "Você aumenta o volume quando toca a sua música favorita?" }
    ]
  },
  "Hobbies": {
    part1: [
      { question: "Are you really keen on reading science fiction books?", translation: "Você é muito entusiasmado com a leitura de livros de ficção científica?" },
      { question: "Did you take up any new hobbies during the lockdown?", translation: "Você começou algum novo hobby durante o isolamento?" },
      { question: "Have you ever had to give up a hobby because it was too expensive?", translation: "Você já teve que desistir de um hobby porque era muito caro?" },
      { question: "Are you really into playing strategy video games?", translation: "Você gosta muito de jogar videogames de estratégia?" },
      { question: "What do you usually do for leisure on a Sunday?", translation: "O que você geralmente faz de lazer em um domingo?" },
      { question: "Do you prefer staying indoors or exploring the outdoors?", translation: "Você prefere ficar em lugares fechados ou explorar ao ar livre?" },
      { question: "Did you join any sports clubs recently?", translation: "Você se juntou a algum clube esportivo recentemente?" },
      { question: "What is a useful skill you learned from a hobby?", translation: "Qual é uma habilidade útil que você aprendeu com um hobby?" }
    ],
    part2: [
      { question: "Do you usually join in when people start singing?", translation: "Você costuma participar/se juntar quando as pessoas começam a cantar?" },
      { question: "Where do you like to hang out with your friends?", translation: "Onde você gosta de sair/passar o tempo com seus amigos?" },
      { question: "Did you ever perform in a play at school?", translation: "Você já atuou em uma peça na escola?" },
      { question: "How many times a week does your band rehearse?", translation: "Quantas vezes por semana a sua banda ensaia?" },
      { question: "Do you enjoy making paper craft projects?", translation: "Você gosta de fazer projetos de artesanato em papel?" },
      { question: "Did you sign up for the upcoming art workshop?", translation: "Você se inscreveu para o próximo workshop de arte?" },
      { question: "Are you looking forward to the next long holiday?", translation: "Você está ansioso(a) para o próximo feriado prolongado?" },
      { question: "How do you usually chill out after a busy week?", translation: "Como você costuma relaxar depois de uma semana agitada?" }
    ]
  },
  "Sports": {
    part1: [
      { question: "Do you prefer being a player or a spectator?", translation: "Você prefere ser um jogador ou um espectador?" },
      { question: "Do you cheer loudly when your team scores a goal?", translation: "Você torce bem alto quando seu time marca um gol?" },
      { question: "Do you think your team will become the next champion?", translation: "Você acha que o seu time se tornará o próximo campeão?" },
      { question: "Have you ever won a gold medal in a competition?", translation: "Você já ganhou uma medalha de ouro em uma competição?" },
      { question: "Is there any sport rule you completely disagree with?", translation: "Há alguma regra esportiva com a qual você não concorde de jeito nenhum?" },
      { question: "Do you always warm up before a heavy workout?", translation: "Você sempre se aquece antes de um treino pesado?" },
      { question: "Is it important to cool down after running a marathon?", translation: "É importante esfriar/desaquecer depois de correr uma maratona?" },
      { question: "Have you ever seen a boxer knock out his opponent?", translation: "Você já viu um boxeador nocautear o oponente dele?" }
    ],
    part2: [
      { question: "Is it hard for the trailing runner to catch up?", translation: "É difícil para o corredor de trás alcançar/recuperar o atraso?" },
      { question: "Did you ever give up during a difficult match?", translation: "Você já desistiu durante uma partida difícil?" },
      { question: "Will you join in the beach volleyball game tomorrow?", translation: "Você vai participar do jogo de vôlei de praia amanhã?" },
      { question: "Did you drop out of the tournament because of an injury?", translation: "Você saiu (desistiu) do torneio devido a uma lesão?" },
      { question: "Did the crowd cheer on the home team?", translation: "A multidão torceu/incentivou o time da casa?" },
      { question: "Is it dangerous to tackle a player from behind?", translation: "É perigoso dar uma rasteira/derrubar um jogador por trás?" },
      { question: "Did the referee ignore a clear foul?", translation: "O árbitro ignorou uma falta clara?" },
      { question: "Did the exciting game end in a tie / draw?", translation: "O jogo emocionante terminou em empate?" }
    ]
  },
  "Supermarket": {
    part1: [
      { question: "Do you pay for your groceries with cash or credit?", translation: "Você paga suas compras de mercado com dinheiro ou crédito?" },
      { question: "Did you buy these expensive items on sale?", translation: "Você comprou esses itens caros na liquidação?" },
      { question: "What is your favorite tropical fruit to eat in summer?", translation: "Qual é a sua fruta tropical favorita para comer no verão?" },
      { question: "Do you buy organic vegetables at the local market?", translation: "Você compra vegetais orgânicos no mercado local?" },
      { question: "Do you eat red meat every day of the week?", translation: "Você come carne vermelha todos os dias da semana?" },
      { question: "Do you usually buy fresh bread at the bakery?", translation: "Você costuma comprar pão fresco na padaria?" },
      { question: "Did you run out of milk this morning?", translation: "Faltou/Acabou o seu leite esta manhã?" },
      { question: "Do you stock up on snacks before a long trip?", translation: "Você faz estoque de lanches antes de uma viagem longa?" }
    ],
    part2: [
      { question: "Can you pick up some apples on your way home?", translation: "Você pode pegar/comprar algumas maçãs no caminho para casa?" },
      { question: "Did the store sell out of your favorite ice cream?", translation: "A loja esgotou o seu sorvete favorito?" },
      { question: "Did you have to queue up to pay at the register?", translation: "Você teve que entrar na fila para pagar no caixa?" },
      { question: "Did you find a good bargain at the supermarket?", translation: "Você encontrou uma boa pechincha no supermercado?" },
      { question: "Is the checkout line always long on Saturdays?", translation: "A fila do caixa é sempre longa aos sábados?" },
      { question: "Can you afford to buy imported chocolates?", translation: "Você tem condições de comprar chocolates importados?" },
      { question: "Do you think paying that much for water is a rip off?", translation: "Você acha que pagar tanto por água é um roubo/exploração?" },
      { question: "Did you get a refund for the spoiled yogurt?", translation: "Você conseguiu um reembolso pelo iogurte estragado?" }
    ]
  },
  "Shopping": {
    part1: [
      { question: "Does this new jacket fit you perfectly?", translation: "Essa jaqueta nova serve/cabe perfeitamente em você?" },
      { question: "Does that bright color suit your style?", translation: "Essa cor brilhante combina com o seu estilo?" },
      { question: "Can I get a refund if the shoes don't fit?", translation: "Posso receber um reembolso se os sapatos não servirem?" },
      { question: "Do you only buy clothes from a famous brand?", translation: "Você só compra roupas de uma marca famosa?" },
      { question: "Were your favorite sneakers out of stock again?", translation: "Os seus tênis favoritos estavam esgotados (fora de estoque) de novo?" }
    ],
    part2: [
      { question: "Did you manage to find a real bargain online?", translation: "Você conseguiu encontrar uma verdadeira pechincha online?" },
      { question: "Did you take back the broken laptop to the store?", translation: "Você devolveu o laptop quebrado para a loja?" },
      { question: "Can you wrap up this gift for me, please?", translation: "Você pode embrulhar este presente para mim, por favor?" },
      { question: "Do you usually shop around before buying a phone?", translation: "Você costuma pesquisar os preços antes de comprar um celular?" },
      { question: "Do you enjoy window shopping without spending money?", translation: "Você gosta de olhar as vitrines sem gastar dinheiro?" }
    ]
  },
  "Professions": {
    part1: [
      { question: "Did you apply for the manager position?", translation: "Você se candidatou à vaga de gerente?" },
      { question: "Did the company hire any new engineers this month?", translation: "A empresa contratou algum novo engenheiro este mês?" },
      { question: "Is it true they will fire / sack the lazy worker?", translation: "É verdade que eles vão demitir o funcionário preguiçoso?" },
      { question: "Are you hoping to get a promotion next year?", translation: "Você está esperando conseguir uma promoção no ano que vem?" },
      { question: "Do you get along well with your annoying colleague?", translation: "Você se dá bem com o seu colega irritante?" },
      { question: "Do you work the morning or the night shift?", translation: "Você trabalha no turno da manhã ou da noite?" },
      { question: "Did he quit / resign because of the low salary?", translation: "Ele pediu demissão por causa do salário baixo?" },
      { question: "Did the boss fire someone today?", translation: "O chefe demitiu alguém hoje?" }
    ],
    part2: [
      { question: "Why did you resign from your previous job?", translation: "Por que você pediu demissão do seu emprego anterior?" },
      { question: "Did they promote you to senior analyst?", translation: "Eles te promoveram a analista sênior?" },
      { question: "Who will take over the project when you leave?", translation: "Quem assumirá o projeto quando você sair?" },
      { question: "Did the factory lay off many workers last week?", translation: "A fábrica demitiu muitos trabalhadores na semana passada?" },
      { question: "Did everything work out perfectly in the meeting?", translation: "Deu tudo certo/funcionou perfeitamente na reunião?" },
      { question: "How long is your daily commute to the office?", translation: "Qual é a duração do seu trajeto diário para o escritório?" },
      { question: "Do you think the minimum wage is too low?", translation: "Você acha que o salário mínimo é muito baixo?" },
      { question: "At what age do you plan to retire?", translation: "Com que idade você planeja se aposentar?" }
    ]
  },
  "Public Places": {
    part1: [
      { question: "Do you enjoy sightseeing when you travel to Europe?", translation: "Você gosta de fazer turismo quando viaja para a Europa?" },
      { question: "Was the subway station too crowded this morning?", translation: "A estação de metrô estava muito lotada esta manhã?" },
      { question: "Did you book cheap accommodation for your trip?", translation: "Você reservou uma acomodação barata para a sua viagem?" },
      { question: "Have you ever traveled abroad for a summer vacation?", translation: "Você já viajou para o exterior em umas férias de verão?" },
      { question: "What is the most famous historical landmark in your city?", translation: "Qual é o marco histórico mais famoso da sua cidade?" },
      { question: "Did the police stop your car at the border?", translation: "A polícia parou o seu carro na fronteira?" },
      { question: "Did you hire a tour guide in Rome?", translation: "Você contratou um guia turístico em Roma?" },
      { question: "Is it easy to get lost in Tokyo without a map?", translation: "É fácil se perder em Tóquio sem um mapa?" },
      { question: "Can you show me around your beautiful neighborhood?", translation: "Você pode me mostrar o seu lindo bairro?" },
      { question: "What time did you head for the airport yesterday?", translation: "A que horas você foi em direção ao aeroporto ontem?" }
    ],
    part2: [
      { question: "What time do you need to set off on your journey?", translation: "A que horas você precisa partir na sua jornada?" },
      { question: "Can you drop me off at the nearest train station?", translation: "Você pode me deixar na estação de trem mais próxima?" },
      { question: "Will you pick me up after the concert finishes?", translation: "Você vai me buscar depois que o show terminar?" },
      { question: "What time do we have to check in at the hotel?", translation: "A que horas nós temos que fazer o check-in no hotel?" },
      { question: "Did he tell you to look out for the hidden stairs?", translation: "Ele disse para você tomar cuidado com as escadas escondidas?" },
      { question: "Do you want to settle down after traveling for a year?", translation: "Você quer se estabelecer depois de viajar por um ano?" },
      { question: "Will you stop over in Paris before flying to London?", translation: "Você fará uma parada em Paris antes de voar para Londres?" },
      { question: "Do you like to explore abandoned buildings?", translation: "Você gosta de explorar prédios abandonados?" },
      { question: "Do you often wander aimlessly around the city center?", translation: "Você costuma vagar sem rumo pelo centro da cidade?" }
    ]
  },
  "Animals": {
    part1: [
      { question: "Do you enjoy watching documentaries about wildlife?", translation: "Você gosta de assistir documentários sobre vida selvagem?" },
      { question: "What should we do to save endangered species?", translation: "O que devemos fazer para salvar espécies ameaçadas?" },
      { question: "Is the jungle a dangerous natural habitat?", translation: "A selva é um habitat natural perigoso?" },
      { question: "Is your pet dog very furry and soft?", translation: "O seu cachorro de estimação é muito peludo e macio?" },
      { question: "Do you think we should protect sharks in the ocean?", translation: "Você acha que devemos proteger os tubarões no oceano?" },
      { question: "Did you adopt your cat from an animal shelter?", translation: "Você adotou o seu gato de um abrigo de animais?" },
      { question: "Is it difficult to look after a sick puppy?", translation: "É difícil cuidar de um filhote doente?" }
    ],
    part2: [
      { question: "Did your pet bird ever run away from home?", translation: "O seu pássaro de estimação já fugiu de casa alguma vez?" },
      { question: "Is it possible to tame a wild wolf?", translation: "É possível domar um lobo selvagem?" },
      { question: "Do they breed race horses on that farm?", translation: "Eles criam/reproduzem cavalos de corrida naquela fazenda?" },
      { question: "Is it illegal to hunt elephants in Africa?", translation: "É ilegal caçar elefantes na África?" },
      { question: "Does your cat purr when you stroke its back?", translation: "O seu gato ronrona quando você faz carinho nas costas dele?" },
      { question: "Are you planning to adopt a stray dog?", translation: "Você está planejando adotar um cachorro de rua?" },
      { question: "Do wild lions roam freely in the national park?", translation: "Os leões selvagens vagam livremente no parque nacional?" }
    ]
  },
  "Cooking": {
    part1: [
      { question: "Is this homemade pizza incredibly tasty?", translation: "Essa pizza caseira é incrivelmente saborosa?" },
      { question: "Do you like eating raw fish like sushi?", translation: "Você gosta de comer peixe cru como sushi?" },
      { question: "Are you on a strict diet right now?", translation: "Você está em uma dieta rigorosa agora?" },
      { question: "Did the hot soup boil over on the stove?", translation: "A sopa quente transbordou (ao ferver) no fogão?" },
      { question: "Can you chop up these onions for the salad?", translation: "Você pode picar essas cebolas para a salada?" },
      { question: "Did you warm up the leftover pizza in the microwave?", translation: "Você esquentou a pizza que sobrou no micro-ondas?" }
    ],
    part2: [
      { question: "Are you trying to cut down on eating too much sugar?", translation: "Você está tentando reduzir o consumo de muito açúcar?" },
      { question: "How often do you eat out at a fancy restaurant?", translation: "Com que frequência você come fora em um restaurante chique?" },
      { question: "Can you whip up a quick meal in ten minutes?", translation: "Você consegue preparar uma refeição rápida em dez minutos?" },
      { question: "Do you usually grill the steak outside on Sundays?", translation: "Você costuma grelhar o bife lá fora aos domingos?" },
      { question: "Did you peel the potatoes before boiling them?", translation: "Você descascou as batatas antes de fervê-las?" },
      { question: "Did you remember to stir the soup slowly?", translation: "Você se lembrou de mexer a sopa lentamente?" }
    ]
  },
  "Basic Technology": {
    part1: [
      { question: "Did you update your smartphone operating system?", translation: "Você atualizou o sistema operacional do seu smartphone?" },
      { question: "Did your computer crash while you were playing a game?", translation: "O seu computador travou/crashou enquanto você estava jogando um jogo?" },
      { question: "Did you log in to your email account securely?", translation: "Você fez o login na sua conta de e-mail de forma segura?" },
      { question: "Can you help me set up my new smart TV?", translation: "Você pode me ajudar a configurar minha nova smart TV?" },
      { question: "Did you turn on the Wi-Fi router this morning?", translation: "Você ligou o roteador Wi-Fi hoje de manhã?" },
      { question: "Do you shut down your laptop every single night?", translation: "Você desliga o seu laptop toda santa noite?" }
    ],
    part2: [
      { question: "How often do you back up your important photos?", translation: "Com que frequência você faz backup das suas fotos importantes?" },
      { question: "Did you scroll down to the bottom of the webpage?", translation: "Você rolou para baixo até o final da página web?" },
      { question: "Did you click on that suspicious link?", translation: "Você clicou naquele link suspeito?" },
      { question: "Did someone try to hack into your bank account?", translation: "Alguém tentou hackear a sua conta bancária?" },
      { question: "Does your favorite game require you to go offline sometimes?", translation: "O seu jogo favorito exige que você fique offline às vezes?" }
    ]
  },
  "Social Media": {
    part1: [
      { question: "Do you log in to Instagram as soon as you wake up?", translation: "Você faz o login no Instagram assim que acorda?" },
      { question: "Do you always log out of your email on public computers?", translation: "Você sempre faz logoff do seu e-mail em computadores públicos?" },
      { question: "What is your favorite messaging app on your phone?", translation: "Qual é o seu aplicativo de mensagens favorito no celular?" },
      { question: "Do you use Twitter to catch up on the daily news?", translation: "Você usa o Twitter para se atualizar sobre as notícias do dia?" },
      { question: "Do you filter out negative comments on your profile?", translation: "Você filtra comentários negativos no seu perfil?" },
      { question: "When did you last log off entirely for a weekend?", translation: "Quando foi a última vez que você se desconectou (log off) inteiramente num fim de semana?" },
      { question: "Did your funny video go viral on the internet?", translation: "O seu vídeo engraçado viralizou na internet?" },
      { question: "Have you ever had an argument with an internet troll?", translation: "Você já discutiu com um troll na internet?" }
    ],
    part2: [
      { question: "Did you subscribe to that amazing YouTube channel?", translation: "Você se inscreveu naquele canal incrível do YouTube?" },
      { question: "Did you mute that noisy group chat yesterday?", translation: "Você silenciou aquele chat em grupo barulhento ontem?" },
      { question: "Why did you unfollow him on social media?", translation: "Por que você deixou de segui-lo nas redes sociais?" },
      { question: "Do you trust the products promoted by that influencer?", translation: "Você confia nos produtos promovidos por aquele influenciador?" },
      { question: "Do you engage with your followers by replying to comments?", translation: "Você interage (engaja) com seus seguidores respondendo aos comentários?" },
      { question: "Did you write a funny caption for your new photo?", translation: "Você escreveu uma legenda engraçada para a sua nova foto?" },
      { question: "Is this new dance challenge currently a trend?", translation: "Esse novo desafio de dança é atualmente uma tendência?" }
    ]
  }
};

const originalScriptFile = 'update_speaking_questions.js';
const originalContent = fs.readFileSync(originalScriptFile, 'utf8');
const jsonMatch = originalContent.match(/const allQuestions = (\{[\s\S]*?\}|.*);/);
let allQuestionsLevel1 = {};
if (jsonMatch) {
  // It's a combination of newQuestions and newQuestions2 in that file.
  // We can just regex the original objects
  const q1Match = originalContent.match(/const newQuestions = (\{[\s\S]+?\});\n\nconst newQuestions2/);
  const q2Match = originalContent.match(/const newQuestions2 = (\{[\s\S]+?\});\n\nconst allQuestions/);
  
  if (q1Match && q2Match) {
    const q1 = eval('(' + q1Match[1] + ')');
    const q2 = eval('(' + q2Match[1] + ')');
    allQuestionsLevel1 = { ...q1, ...q2 };
  }
}

// We'll write the patching function inside the same file to be safe
function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to find each scenario block
  for (const scenarioName of Object.keys(allQuestionsLevel1)) {
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

    // Patch speakingPractice (Level 1)
    if (allQuestionsLevel1[scenarioName] && scenarioBlock.includes('speakingPractice:')) {
      const spRegex = /speakingPractice:\s*\{\s*part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/g;
      const parts = allQuestionsLevel1[scenarioName];
      const newPart1 = parts.part1.map(p => `{ question: "${p.question}", translation: "${p.translation}" }`).join(', ');
      const newPart2 = parts.part2.map(p => `{ question: "${p.question}", translation: "${p.translation}" }`).join(', ');
      
      scenarioBlock = scenarioBlock.replace(spRegex, `speakingPractice: { part1: [ ${newPart1} ], part2: [ ${newPart2} ] }`);
    }

    // Patch speakingPracticeLevel2 (Level 2)
    if (allQuestionsLevel2[scenarioName] && scenarioBlock.includes('speakingPracticeLevel2:')) {
      const spRegex = /speakingPracticeLevel2:\s*\{\s*part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/g;
      const parts = allQuestionsLevel2[scenarioName];
      const newPart1 = parts.part1.map(p => `{ question: "${p.question}", translation: "${p.translation}" }`).join(', ');
      const newPart2 = parts.part2.map(p => `{ question: "${p.question}", translation: "${p.translation}" }`).join(', ');
      
      scenarioBlock = scenarioBlock.replace(spRegex, `speakingPracticeLevel2: { part1: [ ${newPart1} ], part2: [ ${newPart2} ] }`);
    }

    content = content.substring(0, startIdx) + scenarioBlock + content.substring(endIdx);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('../data/scenarios1.ts');
updateFile('../data/scenarios2.ts');
console.log('Level 2 update complete.');
