const fs = require('fs');

const b1NewVocab = {
  "compras": [
    { english: "Try on", portuguese: "Experimentar (roupa)", levels: { B1: { en: "You should try on those jeans before buying them.", pt: "Você deveria experimentar essa calça jeans antes de comprá-la." } } },
    { english: "Fit", portuguese: "Servir / Caber", levels: { B1: { en: "These shoes don't fit me very well, they are too tight.", pt: "Estes sapatos não me servem muito bem, eles estão muito apertados." } } },
    { english: "Suit", portuguese: "Cair bem / Combinar", levels: { B1: { en: "That dark blue jacket really suits your eye color.", pt: "Aquela jaqueta azul escura realmente combina com a cor dos seus olhos." } } },
    { english: "Take back", portuguese: "Devolver (na loja)", levels: { B1: { en: "The shirt had a hole in it, so I had to take it back to the store.", pt: "A camisa tinha um buraco, então tive que devolvê-la na loja." } } },
    { english: "Wrap up", portuguese: "Embrulhar", levels: { B1: { en: "Could you please wrap this up as a birthday gift?", pt: "Você poderia embrulhar isso como um presente de aniversário, por favor?" } } },
    { english: "Shop around", portuguese: "Pesquisar preços", levels: { B1: { en: "It's always a good idea to shop around before buying an expensive laptop.", pt: "É sempre uma boa ideia pesquisar preços antes de comprar um notebook caro." } } },
    { english: "Window shopping", portuguese: "Olhar vitrines", levels: { B1: { en: "We didn't have much money, so we just went window shopping.", pt: "Nós não tínhamos muito dinheiro, então fomos apenas olhar vitrines." } } }
  ],
  "profissoes": [
    { english: "Apply for", portuguese: "Candidatar-se a", levels: { B1: { en: "I am going to apply for the marketing manager position tomorrow.", pt: "Vou me candidatar para a vaga de gerente de marketing amanhã." } } },
    { english: "Hire", portuguese: "Contratar", levels: { B1: { en: "The company plans to hire fifty new engineers by the end of the year.", pt: "A empresa planeja contratar cinquenta novos engenheiros até o final do ano." } } },
    { english: "Fire", portuguese: "Demitir", levels: { B1: { en: "They had to fire him because he was consistently late for work.", pt: "Eles tiveram que demiti-lo porque ele estava consistentemente atrasado para o trabalho." } } },
    { english: "Resign", portuguese: "Pedir demissão", levels: { B1: { en: "She decided to resign from her job due to high stress levels.", pt: "Ela decidiu pedir demissão do emprego devido aos altos níveis de estresse." } } },
    { english: "Promote", portuguese: "Promover", levels: { B1: { en: "After three years of hard work, he was finally promoted to supervisor.", pt: "Depois de três anos de trabalho duro, ele finalmente foi promovido a supervisor." } } },
    { english: "Take over", portuguese: "Assumir (um cargo/tarefa)", levels: { B1: { en: "When the boss retires next month, I will take over his responsibilities.", pt: "Quando o chefe se aposentar no mês que vem, eu assumirei as responsabilidades dele." } } },
    { english: "Lay off", portuguese: "Demitir (por corte de gastos)", levels: { B1: { en: "The factory had to lay off hundreds of workers during the economic crisis.", pt: "A fábrica teve que demitir centenas de trabalhadores durante a crise econômica." } } },
    { english: "Work out", portuguese: "Dar certo / Resolver-se", levels: { B1: { en: "Don't worry about the project, everything will work out fine in the end.", pt: "Não se preocupe com o projeto, tudo dará certo no final." } } },
    { english: "Shift", portuguese: "Turno", levels: { B1: { en: "Nurses often have to work long night shifts at the hospital.", pt: "Enfermeiras frequentemente têm que trabalhar em longos turnos da noite no hospital." } } },
    { english: "Commute", portuguese: "Trajeto casa-trabalho", levels: { B1: { en: "My daily commute to the office takes almost an hour by train.", pt: "Meu trajeto diário para o escritório leva quase uma hora de trem." } } },
    { english: "Wage", portuguese: "Salário (pago por hora/dia)", levels: { B1: { en: "Many students work part-time jobs trying to earn a minimum wage.", pt: "Muitos estudantes trabalham em empregos de meio período tentando ganhar um salário mínimo." } } },
    { english: "Retire", portuguese: "Aposentar-se", levels: { B1: { en: "My grandfather plans to retire and move to the countryside next year.", pt: "Meu avô planeja se aposentar e se mudar para o interior no ano que vem." } } }
  ],
  "lugares": [
    { english: "Show around", portuguese: "Mostrar o lugar (para alguém)", levels: { B1: { en: "When you visit London, I would be happy to show you around.", pt: "Quando você visitar Londres, eu ficaria feliz em te mostrar o lugar." } } },
    { english: "Get lost", portuguese: "Perder-se", levels: { B1: { en: "We forgot our map and ended up getting lost in the forest.", pt: "Nós esquecemos o mapa e acabamos nos perdendo na floresta." } } },
    { english: "Head for", portuguese: "Ir em direção a", levels: { B1: { en: "It is getting late, so we should probably head for home.", pt: "Está ficando tarde, então nós provavelmente deveríamos ir para casa." } } },
    { english: "Set off", portuguese: "Partir / Iniciar viagem", levels: { B1: { en: "They set off early in the morning to avoid the heavy traffic.", pt: "Eles partiram de manhã cedo para evitar o trânsito pesado." } } },
    { english: "Drop off", portuguese: "Deixar (alguém/algo) em algum lugar", levels: { B1: { en: "Could you please drop me off at the airport at six o'clock?", pt: "Você poderia por favor me deixar no aeroporto às seis horas?" } } },
    { english: "Pick up", portuguese: "Buscar (alguém/algo)", levels: { B1: { en: "I need to pick up my sister from the train station tonight.", pt: "Eu preciso buscar minha irmã na estação de trem hoje à noite." } } },
    { english: "Check in", portuguese: "Fazer check-in", levels: { B1: { en: "We arrived at the hotel and immediately went to the reception to check in.", pt: "Chegamos ao hotel e fomos imediatamente para a recepção fazer o check-in." } } },
    { english: "Look out", portuguese: "Ter cuidado / Ficar atento", levels: { B1: { en: "Look out! There is a car coming very fast around the corner.", pt: "Cuidado! Há um carro vindo muito rápido na curva." } } },
    { english: "Settle down", portuguese: "Acomodar-se (em um novo lugar)", levels: { B1: { en: "After moving to the new city, it took her a while to settle down.", pt: "Depois de se mudar para a cidade nova, levou um tempo para ela se acomodar." } } },
    { english: "Stop over", portuguese: "Fazer uma parada (em viagem)", levels: { B1: { en: "We are flying to Japan, but we will stop over in Dubai for one night.", pt: "Nós estamos voando para o Japão, mas faremos uma parada em Dubai por uma noite." } } },
    { english: "Explore", portuguese: "Explorar", levels: { B1: { en: "We rented bicycles to explore the beautiful ancient ruins.", pt: "Nós alugamos bicicletas para explorar as lindas ruínas antigas." } } },
    { english: "Wander", portuguese: "Vagar / Andar sem rumo", levels: { B1: { en: "They spent the afternoon wandering through the charming streets of Paris.", pt: "Eles passaram a tarde vagando pelas charmosas ruas de Paris." } } }
  ],
  "animais": [
    { english: "Look after", portuguese: "Cuidar de", levels: { B1: { en: "Could you look after my cat while I am on vacation?", pt: "Você poderia cuidar do meu gato enquanto estou de férias?" } } },
    { english: "Run away", portuguese: "Fugir", levels: { B1: { en: "The scared dog managed to jump the fence and run away.", pt: "O cachorro assustado conseguiu pular a cerca e fugir." } } },
    { english: "Bark", portuguese: "Latir", levels: { B1: { en: "My neighbor's dog barks loudly every time someone knocks on the door.", pt: "O cachorro do meu vizinho late alto toda vez que alguém bate na porta." } } },
    { english: "Bite", portuguese: "Morder", levels: { B1: { en: "Be careful with that wild animal, it might bite you if you get too close.", pt: "Cuidado com esse animal selvagem, ele pode te morder se você chegar muito perto." } } },
    { english: "Feed", portuguese: "Alimentar", levels: { B1: { en: "Don't forget to feed the fish twice a day with these special flakes.", pt: "Não se esqueça de alimentar os peixes duas vezes ao dia com estes flocos especiais." } } },
    { english: "Tame", portuguese: "Domar / Domesticar", levels: { B1: { en: "It takes a lot of patience to tame a wild horse.", pt: "É preciso muita paciência para domar um cavalo selvagem." } } },
    { english: "Breed", portuguese: "Criar (para reprodução)", levels: { B1: { en: "Some farmers breed specific types of sheep for their high-quality wool.", pt: "Alguns fazendeiros criam tipos específicos de ovelha pela sua lã de alta qualidade." } } },
    { english: "Hunt", portuguese: "Caçar", levels: { B1: { en: "Lions usually hunt for their food during the early hours of the morning.", pt: "Leões geralmente caçam por sua comida durante as primeiras horas da manhã." } } },
    { english: "Stroke", portuguese: "Acariciar", levels: { B1: { en: "The cat started purring softly as soon as I began to stroke its back.", pt: "O gato começou a ronronar suavemente assim que comecei a acariciar suas costas." } } },
    { english: "Protect", portuguese: "Proteger", levels: { B1: { en: "Many organizations are fighting to protect endangered species from extinction.", pt: "Muitas organizações estão lutando para proteger espécies ameaçadas da extinção." } } },
    { english: "Adopt", portuguese: "Adotar", levels: { B1: { en: "We decided to adopt a rescue dog instead of buying a puppy from a store.", pt: "Nós decidimos adotar um cachorro resgatado em vez de comprar um filhote de uma loja." } } },
    { english: "Roam", portuguese: "Vagar / Andar livremente", levels: { B1: { en: "Elephants need vast areas of land where they can roam freely.", pt: "Elefantes precisam de vastas áreas de terra onde possam vagar livremente." } } }
  ],
  "culinaria": [
    { english: "Boil over", portuguese: "Derramar (ao ferver)", levels: { B1: { en: "Turn down the heat or the milk will boil over the pot.", pt: "Abaixe o fogo ou o leite vai derramar da panela." } } },
    { english: "Chop up", portuguese: "Picar / Cortar em pedaços", levels: { B1: { en: "Can you chop up some onions and garlic for the tomato sauce?", pt: "Você pode picar algumas cebolas e alho para o molho de tomate?" } } },
    { english: "Warm up", portuguese: "Esquentar (comida)", levels: { B1: { en: "I am going to warm up yesterday's pizza in the microwave.", pt: "Eu vou esquentar a pizza de ontem no micro-ondas." } } },
    { english: "Cut down on", portuguese: "Reduzir o consumo", levels: { B1: { en: "The doctor advised him to cut down on sugar and eat more vegetables.", pt: "O médico o aconselhou a reduzir o açúcar e comer mais vegetais." } } },
    { english: "Eat out", portuguese: "Comer fora", levels: { B1: { en: "We are too tired to cook tonight, so let's eat out at a restaurant.", pt: "Estamos muito cansados para cozinhar hoje, então vamos comer fora num restaurante." } } },
    { english: "Whip up", portuguese: "Preparar rápido (comida)", levels: { B1: { en: "If you are hungry, I can quickly whip up a sandwich for you.", pt: "Se você estiver com fome, eu posso preparar um sanduíche rapidamente para você." } } },
    { english: "Bake", portuguese: "Assar (bolos/pães)", levels: { B1: { en: "She decided to bake a chocolate cake for her friend's birthday party.", pt: "Ela decidiu assar um bolo de chocolate para a festa de aniversário do seu amigo." } } },
    { english: "Fry", portuguese: "Fritar", levels: { B1: { en: "They like to fry eggs and bacon for breakfast on Sunday mornings.", pt: "Eles gostam de fritar ovos e bacon para o café da manhã nos domingos." } } },
    { english: "Grill", portuguese: "Grelhar", levels: { B1: { en: "We should grill some chicken and vegetables on the barbecue tonight.", pt: "Nós deveríamos grelhar um pouco de frango e vegetais na churrasqueira hoje à noite." } } },
    { english: "Peel", portuguese: "Descascar", levels: { B1: { en: "You need to peel the potatoes before boiling them for the soup.", pt: "Você precisa descascar as batatas antes de fervê-las para a sopa." } } },
    { english: "Pour", portuguese: "Despejar / Servir (líquido)", levels: { B1: { en: "Could you please pour me a glass of cold water?", pt: "Você poderia, por favor, me servir um copo de água gelada?" } } },
    { english: "Stir", portuguese: "Mexer (a comida)", levels: { B1: { en: "Make sure you stir the soup constantly so it doesn't burn the bottom.", pt: "Certifique-se de mexer a sopa constantemente para não queimar o fundo." } } }
  ],
  "tecnologia": [
    { english: "Log in", portuguese: "Fazer login / Entrar", levels: { B1: { en: "You must log in with your email and password to access the platform.", pt: "Você deve fazer login com seu e-mail e senha para acessar a plataforma." } } },
    { english: "Set up", portuguese: "Configurar / Instalar", levels: { B1: { en: "It took me three hours to set up my new computer and install the software.", pt: "Levei três horas para configurar meu computador novo e instalar o software." } } },
    { english: "Turn on", portuguese: "Ligar (aparelho)", levels: { B1: { en: "Press the red button on the remote control to turn on the television.", pt: "Pressione o botão vermelho no controle remoto para ligar a televisão." } } },
    { english: "Shut down", portuguese: "Desligar / Encerrar (sistema)", levels: { B1: { en: "Please make sure to save your files before you shut down the laptop.", pt: "Por favor, certifique-se de salvar seus arquivos antes de desligar o notebook." } } },
    { english: "Back up", portuguese: "Fazer backup / Cópia de segurança", levels: { B1: { en: "It is very important to back up your photos to a cloud service.", pt: "É muito importante fazer o backup das suas fotos em um serviço de nuvem." } } },
    { english: "Scroll down", portuguese: "Rolar a página para baixo", levels: { B1: { en: "If you scroll down to the bottom of the page, you will find the contact form.", pt: "Se você rolar até o final da página, encontrará o formulário de contato." } } },
    { english: "Click on", portuguese: "Clicar em", levels: { B1: { en: "Click on the blue link to verify your email address.", pt: "Clique no link azul para verificar seu endereço de e-mail." } } },
    { english: "Plug in", portuguese: "Ligar na tomada / Conectar", levels: { B1: { en: "The battery is almost dead, I need to plug in my charger right away.", pt: "A bateria está quase acabando, eu preciso conectar meu carregador imediatamente." } } },
    { english: "Hack into", portuguese: "Hackear / Invadir (sistema)", levels: { B1: { en: "Cybercriminals managed to hack into the bank's secure database.", pt: "Cibercriminosos conseguiram hackear o banco de dados seguro do banco." } } },
    { english: "Go offline", portuguese: "Ficar offline", levels: { B1: { en: "The server went offline for maintenance during the night.", pt: "O servidor ficou offline para manutenção durante a noite." } } },
    { english: "Update", portuguese: "Atualizar", levels: { B1: { en: "Your phone will remind you when it is time to update the operating system.", pt: "Seu telefone o lembrará quando for a hora de atualizar o sistema operacional." } } },
    { english: "Download", portuguese: "Baixar (arquivo)", levels: { B1: { en: "You can download the full report in PDF format from our main website.", pt: "Você pode baixar o relatório completo em formato PDF no nosso site principal." } } }
  ],
  "redes-sociais": [
    { english: "Catch up on", portuguese: "Atualizar-se sobre", levels: { B1: { en: "I spent the morning scrolling through my feed to catch up on the news.", pt: "Passei a manhã rolando o meu feed para me atualizar sobre as notícias." } } },
    { english: "Filter out", portuguese: "Filtrar / Bloquear (conteúdo)", levels: { B1: { en: "You can change your settings to filter out offensive comments.", pt: "Você pode alterar suas configurações para filtrar comentários ofensivos." } } },
    { english: "Log off", portuguese: "Sair / Desconectar-se", levels: { B1: { en: "After checking my messages, I usually log off to focus on work.", pt: "Depois de verificar minhas mensagens, eu geralmente me desconecto para focar no trabalho." } } },
    { english: "Go viral", portuguese: "Viralizar", levels: { B1: { en: "His funny dance video went viral and got millions of views overnight.", pt: "O vídeo de dança engraçado dele viralizou e conseguiu milhões de visualizações da noite para o dia." } } },
    { english: "Troll", portuguese: "Provocar / Pessoa que provoca online", levels: { B1: { en: "Don't pay attention to those mean comments, they are just internet trolls.", pt: "Não preste atenção naqueles comentários maldosos, eles são apenas trolls da internet." } } },
    { english: "Subscribe", portuguese: "Inscrever-se (canal/lista)", levels: { B1: { en: "If you like my videos, please subscribe to my channel for more content.", pt: "Se você gosta dos meus vídeos, por favor inscreva-se no meu canal para mais conteúdo." } } },
    { english: "Mute", portuguese: "Silenciar", levels: { B1: { en: "I had to mute the group chat because I was receiving too many notifications.", pt: "Eu tive que silenciar o chat em grupo porque estava recebendo notificações demais." } } },
    { english: "Unfollow", portuguese: "Deixar de seguir", levels: { B1: { en: "She decided to unfollow him after he started posting too much political content.", pt: "Ela decidiu deixar de segui-lo depois que ele começou a postar muito conteúdo político." } } },
    { english: "Influencer", portuguese: "Influenciador digital", levels: { B1: { en: "Many brands pay influencers to promote their products on social media.", pt: "Muitas marcas pagam influenciadores para promover seus produtos nas redes sociais." } } },
    { english: "Engage", portuguese: "Engajar-se / Interagir", levels: { B1: { en: "It is important for companies to engage with their followers by replying to comments.", pt: "É importante para as empresas interagir com seus seguidores respondendo a comentários." } } },
    { english: "Caption", portuguese: "Legenda (foto/post)", levels: { B1: { en: "She wrote a very inspiring caption under her latest vacation photo.", pt: "Ela escreveu uma legenda muito inspiradora debaixo da sua última foto de férias." } } },
    { english: "Trend", portuguese: "Tendência / Assunto do momento", levels: { B1: { en: "That challenge became a huge trend, and everyone is doing it online.", pt: "Esse desafio se tornou uma enorme tendência e todo mundo está fazendo online." } } }
  ]
};

function injectB1(filePath, vocabDict) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const [scenarioId, words] of Object.entries(vocabDict)) {
    const scenarioRegex = new RegExp(`(id:\\s*["']${scenarioId}["'][\\s\\S]*?vocabulary:\\s*\\[[\\s\\S]*?)(?=\\s*],\\s*(?:flashcards|quiz|dialogue|trueOrFalse|speakingPractice|usefulExpressions))`);
    if (!content.match(scenarioRegex)) continue;

    content = content.replace(scenarioRegex, (match, prefix) => {
      let injected = '';
      for (const item of words) {
        injected += `,\n      { english: "${item.english}", portuguese: "${item.portuguese}",\n          levels: { \n                        B1: { en: "${item.levels.B1.en}", pt: "${item.levels.B1.pt}" } \n                      }\n    }`;
      }
      return prefix + injected;
    });
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

injectB1('data/scenarios1.ts', b1NewVocab);
injectB1('data/scenarios2.ts', b1NewVocab);

