const fs = require('fs');

const buildSentencesData = {
  "Family": {
    level1: [
      { english: "My grandmother always tells amazing stories about her youth.", portuguese: "Minha avó sempre conta histórias incríveis sobre sua juventude." },
      { english: "They were playing outside with their young nephew.", portuguese: "Eles estavam brincando lá fora com o sobrinho jovem deles." },
      { english: "My new sister-in-law gets along well with everyone.", portuguese: "Minha nova cunhada se dá bem com todo mundo." },
      { english: "The entire family celebrated my uncle's fiftieth birthday.", portuguese: "Toda a família celebrou o quinquagésimo aniversário do meu tio." },
      { english: "People say that I take after my father.", portuguese: "As pessoas dizem que eu puxo ao meu pai." },
      { english: "His wife is painting a beautiful landscape right now.", portuguese: "A esposa dele está pintando uma bela paisagem agora mesmo." }
    ],
    level2: [
      { english: "They settled down and raised their close-knit family here.", portuguese: "Eles sossegaram e criaram sua família unida aqui." },
      { english: "The two stubborn siblings were falling out over money.", portuguese: "Os dois irmãos teimosos estavam se desentendendo por causa de dinheiro." },
      { english: "Our extended family gathers together every single Christmas.", portuguese: "Nossa família estendida se reúne em todo santo Natal." },
      { english: "She strongly resembles the relatives from her mother's side.", portuguese: "Ela se assemelha fortemente aos parentes do lado da mãe dela." },
      { english: "Growing up as an only child gave him a unique upbringing.", portuguese: "Crescer como filho único deu a ele uma criação única." },
      { english: "They made up quickly after a terrible argument yesterday.", portuguese: "Eles fizeram as pazes rapidamente após uma terrível discussão ontem." }
    ]
  },
  "Friends": {
    level1: [
      { english: "We invited our closest friends to the weekend party.", portuguese: "Nós convidamos nossos amigos mais próximos para a festa de fim de semana." },
      { english: "He apologized because he made a terrible mistake.", portuguese: "Ele pediu desculpas porque cometeu um erro terrível." },
      { english: "My best friend gives me some really excellent advice.", portuguese: "Meu melhor amigo me dá alguns conselhos realmente excelentes." },
      { english: "They are hanging out at the mall this Saturday.", portuguese: "Eles estão saindo no shopping neste sábado." },
      { english: "She never reveals a secret from a good friend.", portuguese: "Ela nunca revela um segredo de um bom amigo." },
      { english: "We were arguing a lot about silly little things.", portuguese: "Nós estávamos discutindo muito sobre pequenas coisas bobas." }
    ],
    level2: [
      { english: "We keep in touch even though we live far apart.", portuguese: "Nós mantemos contato mesmo morando longe." },
      { english: "She relied on a trustworthy mate during difficult times.", portuguese: "Ela contou com um parceiro confiável durante momentos difíceis." },
      { english: "They drifted apart after they graduated from high school.", portuguese: "Eles se distanciaram depois que se formaram no ensino médio." },
      { english: "I always stand by you when you need help.", portuguese: "Eu sempre fico ao seu lado quando você precisa de ajuda." },
      { english: "She put up with his terrible behavior for years.", portuguese: "Ela tolerou o comportamento terrível dele por anos." },
      { english: "They were hitting it off when they first met.", portuguese: "Eles estavam se dando bem logo que se conheceram." }
    ]
  },
  "Body Parts": {
    level1: [
      { english: "I hurt my right shoulder while I was carrying heavy bags.", portuguese: "Eu machuquei meu ombro direito enquanto carregava sacolas pesadas." },
      { english: "He broke his leg when he jumped from a wall.", portuguese: "Ele quebrou a perna quando pulou de um muro." },
      { english: "She has long beautiful hair and striking green eyes.", portuguese: "Ela tem longos cabelos bonitos e marcantes olhos verdes." },
      { english: "My stomach hurts slightly after eating all that spicy food.", portuguese: "Meu estômago dói levemente depois de comer toda aquela comida apimentada." },
      { english: "He burned his fingers while he was cooking dinner.", portuguese: "Ele queimou os dedos enquanto estava cozinhando o jantar." },
      { english: "The happy baby touches his cute little hands and feet.", portuguese: "O bebê feliz toca suas mãozinhas e pezinhos fofos." }
    ],
    level2: [
      { english: "The athlete injured his ankle and recovers at home now.", portuguese: "O atleta machucou o tornozelo e se recupera em casa agora." },
      { english: "She felt dizzy and suddenly passed out in the heat.", portuguese: "Ela se sentiu tonta e desmaiou de repente no calor." },
      { english: "The sick patient breathes deeply and stops shivering.", portuguese: "O paciente doente respira fundo e para de tremer." },
      { english: "He finally got over that terrible flu last week.", portuguese: "Ele finalmente superou aquela terrível gripe na semana passada." },
      { english: "He hit his forehead and his nose bled heavily.", portuguese: "Ele bateu a testa e o nariz dele sangrou muito." },
      { english: "I always sweat a lot when I work out intensively.", portuguese: "Eu sempre suo muito quando malho intensamente." }
    ]
  },
  "Home & Chores": {
    level1: [
      { english: "I sweep the floor and take out the trash daily.", portuguese: "Eu varro o chão e tiro o lixo diariamente." },
      { english: "They bought a comfortable couch for their new living room.", portuguese: "Eles compraram um sofá confortável para a nova sala de estar deles." },
      { english: "She is doing the dishes in the kitchen right now.", portuguese: "Ela está lavando a louça na cozinha agora mesmo." },
      { english: "She makes the bed immediately after waking up.", portuguese: "Ela arruma a cama imediatamente após acordar." },
      { english: "He left his muddy shoes near the front door.", portuguese: "Ele deixou os sapatos sujos de lama dele perto da porta da frente." },
      { english: "The garden looks beautiful with all the blooming flowers.", portuguese: "O jardim parece lindo com todas as flores desabrochando." }
    ],
    level2: [
      { english: "Our landlord renovates the old apartment every ten years.", portuguese: "Nosso proprietário reforma o apartamento antigo a cada dez anos." },
      { english: "They took out a huge mortgage for their spacious house.", portuguese: "Eles fizeram uma enorme hipoteca para a espaçosa casa deles." },
      { english: "He is tidying up the place before the guests arrive.", portuguese: "Ele está arrumando o lugar antes dos convidados chegarem." },
      { english: "We just moved in and we need new appliances.", portuguese: "Nós acabamos de nos mudar e precisamos de eletrodomésticos novos." },
      { english: "He signed the lease and rented a cozy house.", portuguese: "Ele assinou o contrato e alugou uma casa aconchegante." },
      { english: "The landlord evicted them because they ignored the rent.", portuguese: "O proprietário os despejou porque eles ignoraram o aluguel." }
    ]
  },
  "Home & Chores 2": {
    level1: [
      { english: "I completely forgot to water the plants on the balcony.", portuguese: "Eu esqueci completamente de regar as plantas na varanda." },
      { english: "She cleared the table after they finished eating.", portuguese: "Ela limpou a mesa depois que eles terminaram de comer." },
      { english: "The basement is extremely dark and slightly scary at night.", portuguese: "O porão é extremamente escuro e um pouco assustador à noite." },
      { english: "We fixed the leaky faucet in the bathroom sink yesterday.", portuguese: "Nós consertamos a torneira vazando na pia do banheiro ontem." },
      { english: "He is folding the laundry while I mop the floor.", portuguese: "Ele está dobrando a roupa lavada enquanto eu passo pano no chão." },
      { english: "He painted the walls and the ceiling white.", portuguese: "Ele pintou as paredes e o teto de branco." }
    ],
    level2: [
      { english: "She unplugs the television during a heavy thunderstorm.", portuguese: "Ela tira a televisão da tomada durante uma forte tempestade." },
      { english: "She scrubbed the dirty kitchen tiles for three hours.", portuguese: "Ela esfregou os azulejos sujos da cozinha por três horas." },
      { english: "He was dusting the wooden shelves when the phone rang.", portuguese: "Ele estava tirando o pó das prateleiras de madeira quando o telefone tocou." },
      { english: "He turned up the heating because it was freezing here.", portuguese: "Ele aumentou o aquecimento porque estava congelando aqui." },
      { english: "I really hate doing the laundry on my precious weekends.", portuguese: "Eu realmente odeio lavar roupa nos meus preciosos fins de semana." },
      { english: "He carefully irons his expensive shirts every single morning.", portuguese: "Ele passa cuidadosamente as camisas caras dele toda santa manhã." }
    ]
  },
  "Hobbies": {
    level1: [
      { english: "I read a book while she surfs the internet.", portuguese: "Eu leio um livro enquanto ela navega na internet." },
      { english: "They traveled across Europe and took beautiful photos.", portuguese: "Eles viajaram pela Europa e tiraram lindas fotos." },
      { english: "She listens to music while she draws colorful landscapes.", portuguese: "Ela ouve música enquanto desenha paisagens coloridas." },
      { english: "We watched classic movies together last Friday night.", portuguese: "Nós assistimos filmes clássicos juntos na última sexta-feira à noite." },
      { english: "He plays guitar in a band during his free time.", portuguese: "Ele toca violão em uma banda durante seu tempo livre." },
      { english: "They are hiking in the peaceful mountains right now.", portuguese: "Eles estão fazendo trilha nas montanhas tranquilas agora mesmo." }
    ],
    level2: [
      { english: "He took up photography as a creative leisure activity.", portuguese: "Ele começou fotografia como uma atividade criativa de lazer." },
      { english: "They signed up for a workshop and improved their crafting skills.", portuguese: "Eles se inscreveram para um workshop e melhoraram suas habilidades manuais." },
      { english: "We are rehearsing the new play tonight at the theater.", portuguese: "Nós estamos ensaiando a nova peça hoje à noite no teatro." },
      { english: "She is keen on exploring the great outdoors every weekend.", portuguese: "Ela gosta muito de explorar a natureza todo fim de semana." },
      { english: "He never gives up his passions when he is busy.", portuguese: "Ele nunca desiste das paixões dele quando está ocupado." },
      { english: "He is collecting vintage comic books at the moment.", portuguese: "Ele está colecionando gibis antigos no momento." }
    ]
  },
  "Sports": {
    level1: [
      { english: "The local soccer team won the championship game last week.", portuguese: "O time de futebol local venceu o jogo do campeonato na semana passada." },
      { english: "We play basketball at the large outdoor stadium often.", portuguese: "Nós jogamos basquete no grande estádio ao ar livre frequentemente." },
      { english: "She runs five miles every morning and stays incredibly fit.", portuguese: "Ela corre cinco milhas toda manhã e fica incrivelmente em forma." },
      { english: "He bought an expensive new ball and practiced his serves.", portuguese: "Ele comprou uma bola nova cara e praticou os saques dele." },
      { english: "They lost the match even though they practiced so hard.", portuguese: "Eles perderam a partida mesmo que tenham treinado tão duro." },
      { english: "They are swimming in the ocean during the hot summer.", portuguese: "Eles estão nadando no oceano durante o verão quente." }
    ],
    level2: [
      { english: "The enthusiastic spectators cheered on the marathon runners.", portuguese: "Os espectadores entusiastas torceram pelos corredores da maratona." },
      { english: "He dropped out of the race because of a foul.", portuguese: "Ele desistiu da corrida por causa de uma falta." },
      { english: "He always warms up properly before he tackles anyone.", portuguese: "Ele sempre se aquece adequadamente antes de derrubar/dar uma rasteira em alguém." },
      { english: "The incredibly tense final match ended in a surprising draw.", portuguese: "A partida final incrivelmente tensa terminou em um empate surpreendente." },
      { english: "She refused defeat and eventually caught up with the leader.", portuguese: "Ela recusou a derrota e eventualmente alcançou o líder." },
      { english: "The champion knocked out his opponent and raised his gold medal.", portuguese: "O campeão nocauteou o oponente dele e levantou a medalha de ouro dele." }
    ]
  },
  "Supermarket": {
    level1: [
      { english: "I pushed the heavy shopping cart down the dairy aisle.", portuguese: "Eu empurrei o carrinho de compras pesado pelo corredor de laticínios." },
      { english: "She checks her receipt to ensure the price is correct.", portuguese: "Ela verifica o recibo dela para garantir que o preço está correto." },
      { english: "The friendly cashier applied a generous discount to our bill.", portuguese: "O caixa amigável aplicou um desconto generoso à nossa conta." },
      { english: "We buy affordable vegetables at the local market every Sunday.", portuguese: "Nós compramos legumes acessíveis no mercado local todo domingo." },
      { english: "I stood in a long queue and waited for my turn.", portuguese: "Eu fiquei numa longa fila e esperei minha vez." },
      { english: "He handed his credit card to the cashier with a smile.", portuguese: "Ele entregou o cartão de crédito dele ao caixa com um sorriso." }
    ],
    level2: [
      { english: "They ran out of fresh bakery bread this morning.", portuguese: "Eles ficaram sem pão fresco da padaria esta manhã." },
      { english: "I stock up on snacks before the massive winter storm.", portuguese: "Eu faço estoque de lanches antes da enorme tempestade de inverno." },
      { english: "We picked up some amazing items on a special sale.", portuguese: "Nós pegamos alguns itens incríveis numa promoção especial." },
      { english: "The new supermarket charges too much and rips off customers.", portuguese: "O novo supermercado cobra demais e explora os clientes." },
      { english: "She affords imported meat because she earns a good salary.", portuguese: "Ela tem condições de comprar carne importada porque ganha um bom salário." },
      { english: "She received a full refund after she returned the spoiled fruit.", portuguese: "Ela recebeu um reembolso total depois que devolveu a fruta estragada." }
    ]
  },
  "Shopping": {
    level1: [
      { english: "She is trying on expensive clothes in the fitting room.", portuguese: "Ela está experimentando roupas caras no provador." },
      { english: "He bought a brand new pair of shoes yesterday.", portuguese: "Ele comprou um par de sapatos novos ontem." },
      { english: "I found a beautiful red dress on sale.", portuguese: "Eu encontrei um lindo vestido vermelho em liquidação." },
      { english: "The customer complained because the leather jacket was ridiculously expensive.", portuguese: "O cliente reclamou porque a jaqueta de couro era ridiculamente cara." },
      { english: "I pay with my credit card instead of carrying cash.", portuguese: "Eu pago com meu cartão de crédito em vez de carregar dinheiro." },
      { english: "We forgot our wallet and left the shop empty-handed.", portuguese: "Nós esquecemos nossa carteira e saímos da loja de mãos vazias." }
    ],
    level2: [
      { english: "This stylish suit fits me perfectly around the shoulders.", portuguese: "Este terno estiloso me serve perfeitamente nos ombros." },
      { english: "She shops around and finds the absolute best bargain available.", portuguese: "Ela pesquisa os preços e encontra a melhor pechincha disponível." },
      { english: "I wanted that specific brand but it was out of stock.", portuguese: "Eu queria aquela marca específica mas estava fora de estoque." },
      { english: "She enjoys window shopping when she has absolutely no money.", portuguese: "Ela gosta de olhar as vitrines quando não tem absolutamente nenhum dinheiro." },
      { english: "The assistant wrapped up this fragile gift carefully for me.", portuguese: "O assistente embrulhou este presente frágil cuidadosamente para mim." },
      { english: "He took back the defective electronics and got a refund.", portuguese: "Ele devolveu os eletrônicos defeituosos e conseguiu um reembolso." }
    ]
  },
  "Professions": {
    level1: [
      { english: "The dedicated teacher helps the young student pass his exam.", portuguese: "O professor dedicado ajuda o jovem aluno a passar no exame dele." },
      { english: "She works as a successful lawyer at a corporate office.", portuguese: "Ela trabalha como uma advogada de sucesso em um escritório corporativo." },
      { english: "The clever mechanic fixed the complicated engine of my car.", portuguese: "O mecânico inteligente consertou o motor complicado do meu carro." },
      { english: "We hired a professional chef and he cooked a luxurious dinner.", portuguese: "Nós contratamos um chef profissional e ele cozinhou um jantar luxuoso." },
      { english: "The brave police officer rescued a frightened kitten.", portuguese: "O policial corajoso resgatou um gatinho assustado." },
      { english: "He earns a high salary and works as an engineer.", portuguese: "Ele ganha um salário alto e trabalha como engenheiro." }
    ],
    level2: [
      { english: "She quit her demanding shift and applied for a better role.", portuguese: "Ela largou o turno exigente dela e se candidatou a um cargo melhor." },
      { english: "The manager hires three new colleagues after every promotion season.", portuguese: "O gerente contrata três novos colegas após cada temporada de promoções." },
      { english: "They laid off hundreds of workers due to financial issues.", portuguese: "Eles demitiram centenas de trabalhadores devido a problemas financeiros." },
      { english: "He commutes for two hours every single day.", portuguese: "Ele viaja (comuta) por duas horas todo santo dia." },
      { english: "He retired last year and handed over the business.", portuguese: "Ele se aposentou no ano passado e passou o negócio adiante." },
      { english: "Things worked out well after you resigned from your stressful job.", portuguese: "As coisas deram certo depois que você pediu demissão do seu emprego estressante." }
    ]
  },
  "Public Places": {
    level1: [
      { english: "We walked to the local hospital and visited our sick neighbor.", portuguese: "Nós caminhamos até o hospital local e visitamos nosso vizinho doente." },
      { english: "You turn left at the corner and reach the public library.", portuguese: "Você vira à esquerda na esquina e chega à biblioteca pública." },
      { english: "They waited nervously at the bus stop on the dark street.", portuguese: "Eles esperaram nervosamente no ponto de ônibus na rua escura." },
      { english: "He parked his car near the famous historical museum.", portuguese: "Ele estacionou o carro dele perto do famoso museu histórico." },
      { english: "She always buys medicine at the small pharmacy across the bridge.", portuguese: "Ela sempre compra remédios na pequena farmácia do outro lado da ponte." },
      { english: "The tourists are going straight ahead toward the large bank.", portuguese: "Os turistas estão indo direto em frente em direção ao banco grande." }
    ],
    level2: [
      { english: "We set off early and went sightseeing around the crowded landmarks.", portuguese: "Nós partimos cedo e fomos fazer turismo pelos pontos turísticos lotados." },
      { english: "He dropped me off near the affordable accommodation we booked.", portuguese: "Ele me deixou perto da acomodação acessível que nós reservamos." },
      { english: "They got lost while they were wandering through the beautiful streets.", portuguese: "Eles se perderam enquanto estavam vagando pelas belas ruas." },
      { english: "We checked in quickly before we headed for the border.", portuguese: "Nós fizemos check-in rapidamente antes de irmos para a fronteira." },
      { english: "The friendly tour guide shows us around the city center.", portuguese: "O simpático guia turístico nos mostra o centro da cidade." },
      { english: "We look out for scammers when we explore unfamiliar territories.", portuguese: "Nós prestamos atenção aos golpistas quando exploramos territórios desconhecidos." }
    ]
  },
  "Animals": {
    level1: [
      { english: "He walks the dog in the park every morning.", portuguese: "Ele passeia com o cachorro no parque todas as manhãs." },
      { english: "The noisy bird sang loudly right outside my window.", portuguese: "O pássaro barulhento cantou alto bem na minha janela." },
      { english: "We took our sick cat to the local vet immediately.", portuguese: "Nós levamos nosso gato doente ao veterinário local imediatamente." },
      { english: "A large tiger escaped from the zoo and terrified everyone.", portuguese: "Um grande tigre escapou do zoológico e aterrorizou todo mundo." },
      { english: "The mischievous monkey stole a banana from the unsuspecting tourist.", portuguese: "O macaco travesso roubou uma banana do turista desprevenido." },
      { english: "She feeds her lovely pets before she leaves the house.", portuguese: "Ela alimenta os adoráveis pets dela antes de sair de casa." }
    ],
    level2: [
      { english: "We protect the endangered wildlife habitats from destructive human activities.", portuguese: "Nós protegemos os habitats de vida selvagem ameaçados das atividades humanas destrutivas." },
      { english: "The terrified rabbit ran away from the hunting wolves.", portuguese: "O coelho aterrorizado fugiu dos lobos caçadores." },
      { english: "They breed specific types of farm animals and look after them.", portuguese: "Eles criam tipos específicos de animais de fazenda e cuidam deles." },
      { english: "She adopted a beautiful furry cat from the local animal shelter.", portuguese: "Ela adotou um lindo gato peludo do abrigo de animais local." },
      { english: "The brave man tames wild creatures that roam free.", portuguese: "O homem corajoso doma criaturas selvagens que vagam livremente." },
      { english: "The horse calmed down while I was stroking its neck.", portuguese: "O cavalo se acalmou enquanto eu acariciava o pescoço dele." }
    ]
  },
  "Cooking": {
    level1: [
      { english: "She read the recipe carefully before she baked the cake.", portuguese: "Ela leu a receita com cuidado antes de assar o bolo." },
      { english: "You chop these hard vegetables with a very sharp knife.", portuguese: "Você pica esses vegetais duros com uma faca muito afiada." },
      { english: "He fries eggs in a large pan for his breakfast.", portuguese: "Ele frita ovos numa panela grande para o café da manhã dele." },
      { english: "He mixes all the fresh ingredients in a large bowl.", portuguese: "Ele mistura todos os ingredientes frescos numa tigela grande." },
      { english: "I accidentally added too much spicy pepper to the soup.", portuguese: "Eu acidentalmente adicionei muita pimenta picante à sopa." },
      { english: "She is pouring some sweet juice into my empty glass.", portuguese: "Ela está derramando um pouco de suco doce no meu copo vazio." }
    ],
    level2: [
      { english: "I cut down on junk food and improved my diet.", portuguese: "Eu reduzi o junk food e melhorei minha dieta." },
      { english: "She whips up an incredibly tasty meal in minutes.", portuguese: "Ela prepara uma refeição incrivelmente saborosa em minutos." },
      { english: "The boiling water boils over and spills on the stove.", portuguese: "A água fervente transborda e derrama no fogão." },
      { english: "We eat out on weekends rather than cook at home.", portuguese: "Nós comemos fora nos fins de semana em vez de cozinhar em casa." },
      { english: "I peeled the potatoes and chopped them up for the grill.", portuguese: "Eu descasquei as batatas e piquei-as para a grelha." },
      { english: "He constantly stirs the sauce and prevents it from burning.", portuguese: "Ele mexe o molho constantemente e evita que ele queime." }
    ]
  },
  "Basic Technology": {
    level1: [
      { english: "He dropped his expensive smartphone and shattered the screen.", portuguese: "Ele derrubou o smartphone caro dele e estilhaçou a tela." },
      { english: "He shares his secret password over the public internet constantly.", portuguese: "Ele compartilha a senha secreta dele na internet pública constantemente." },
      { english: "I downloaded a helpful app on my brand new laptop.", portuguese: "Eu baixei um aplicativo útil no meu laptop novinho em folha." },
      { english: "She is typing the long email using her mechanical keyboard.", portuguese: "Ela está digitando o longo e-mail usando o teclado mecânico dela." },
      { english: "I forgot the charger and my battery died quickly.", portuguese: "Eu esqueci o carregador e minha bateria descarregou rapidamente." },
      { english: "He saves the important document inside this specific secure folder.", portuguese: "Ele salva o documento importante dentro desta pasta segura específica." }
    ],
    level2: [
      { english: "He backs up his critical files before the system crashes.", portuguese: "Ele faz backup dos arquivos críticos dele antes que o sistema trave." },
      { english: "You log in and set up the software successfully.", portuguese: "Você faz login e configura o software com sucesso." },
      { english: "Someone hacked into her private account when she went offline.", portuguese: "Alguém hackeou a conta privada dela quando ela ficou offline." },
      { english: "She scrolled down the webpage and clicked on the bright button.", portuguese: "Ela rolou a página web para baixo e clicou no botão brilhante." },
      { english: "He shut down the device while he was installing the update.", portuguese: "Ele desligou o dispositivo enquanto instalava a atualização." },
      { english: "She turned on the mysterious machine without a manual.", portuguese: "Ela ligou a máquina misteriosa sem um manual." }
    ]
  },
  "Social Media": {
    level1: [
      { english: "She posted a beautiful picture on her public profile.", portuguese: "Ela postou uma linda foto no perfil público dela." },
      { english: "He left a funny comment on the viral video.", portuguese: "Ele deixou um comentário engraçado no vídeo viral." },
      { english: "I received a strange direct message from an unknown follower.", portuguese: "Eu recebi uma mensagem direta estranha de um seguidor desconhecido." },
      { english: "He uses an engaging hashtag when he uploads a story.", portuguese: "Ele usa uma hashtag envolvente quando posta um story." },
      { english: "She completely deleted all offensive posts from her online page.", portuguese: "Ela excluiu completamente todas as postagens ofensivas da página online dela." },
      { english: "He spends hours and blindly scrolls through the endless feed.", portuguese: "Ele passa horas e rola cegamente pelo feed interminável." }
    ],
    level2: [
      { english: "The famous influencer engages thousands of loyal fans effortlessly.", portuguese: "O influenciador famoso engaja milhares de fãs leais sem esforço." },
      { english: "I muted the annoying troll and filtered out negative opinions.", portuguese: "Eu silenciei o troll irritante e filtrei opiniões negativas." },
      { english: "She catches up on the latest trends using this app.", portuguese: "Ela se atualiza sobre as últimas tendências usando este aplicativo." },
      { english: "He wrote an inspiring caption and his new video went viral.", portuguese: "Ele escreveu uma legenda inspiradora e o novo vídeo dele viralizou." },
      { english: "He always logs off securely when he uses public computers.", portuguese: "Ele sempre faz logoff com segurança quando usa computadores públicos." },
      { english: "She aggressively unfollows accounts that post irrelevant content constantly.", portuguese: "Ela para de seguir agressivamente contas que postam conteúdo irrelevante constantemente." }
    ]
  }
};

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const [scenarioName, levels] of Object.entries(buildSentencesData)) {
    const titleRegex = new RegExp(`title:\\s*["']${scenarioName}["']`, 'g');
    const titleMatch = titleRegex.exec(content);
    if (!titleMatch) continue;

    const startIdx = titleMatch.index;
    
    const nextTitleMatch = new RegExp(`title:\\s*["'].+?["']`, 'g');
    nextTitleMatch.lastIndex = startIdx + 10;
    const nextTitle = nextTitleMatch.exec(content);
    const endIdx = nextTitle ? nextTitle.index : content.length;

    let scenarioBlock = content.substring(startIdx, endIdx);

    const bsRegex = /buildSentence:\s*\{\s*level1:\s*\[([\s\S]*?)\],\s*level2:\s*\[([\s\S]*?)\]\s*\}/g;

    const newLevel1 = levels.level1.map(p => `{ english: "${p.english}", portuguese: "${p.portuguese}" }`).join(', ');
    const newLevel2 = levels.level2.map(p => `{ english: "${p.english}", portuguese: "${p.portuguese}" }`).join(', ');

    if (scenarioBlock.match(bsRegex)) {
      scenarioBlock = scenarioBlock.replace(bsRegex, `buildSentence: { level1: [ ${newLevel1} ], level2: [ ${newLevel2} ] }`);
      content = content.substring(0, startIdx) + scenarioBlock + content.substring(endIdx);
    } else {
      console.log(`Could not find buildSentence array properly in ${scenarioName} in file ${filePath}`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('../data/scenarios1.ts');
updateFile('../data/scenarios2.ts');
console.log('Build Sentence Tenses update complete.');
