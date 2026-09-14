const fs = require('fs');

const sentenceData = {
  "familia": {
    level1: [
      { english: "My mother is very beautiful and kind.", portuguese: "Minha mãe é muito bonita e gentil." },
      { english: "I have two brothers and one sister.", portuguese: "Eu tenho dois irmãos e uma irmã." },
      { english: "We always eat dinner together at night.", portuguese: "Nós sempre jantamos juntos à noite." },
      { english: "My grandmother makes the best chocolate cake.", portuguese: "Minha avó faz o melhor bolo de chocolate." },
      { english: "My father works hard every single day.", portuguese: "Meu pai trabalha duro todo santo dia." },
      { english: "I love spending time with my family.", portuguese: "Eu amo passar tempo com minha família." }
    ],
    level2: [
      { english: "Despite our differences, I remain close to my relatives.", portuguese: "Apesar de nossas diferenças, continuo próximo dos meus parentes." },
      { english: "My extended family gathers every holiday to celebrate.", portuguese: "Minha família estendida se reúne todo feriado para celebrar." },
      { english: "She always supports me when I need help.", portuguese: "Ela sempre me apoia quando eu preciso de ajuda." },
      { english: "My parents are very strict about my homework.", portuguese: "Meus pais são muito rigorosos com meu dever de casa." },
      { english: "Building strong family bonds takes time and effort.", portuguese: "Construir fortes laços familiares exige tempo e esforço." },
      { english: "I admire my grandfather for his remarkable resilience.", portuguese: "Eu admiro meu avô por sua notável resiliência." }
    ]
  },
  "amigos": {
    level1: [
      { english: "She is my best friend from school.", portuguese: "Ela é minha melhor amiga da escola." },
      { english: "We share many secrets and play games.", portuguese: "Nós compartilhamos muitos segredos e jogamos jogos." },
      { english: "I like to talk with my friends.", portuguese: "Eu gosto de conversar com meus amigos." },
      { english: "He helps me with my math homework.", portuguese: "Ele me ajuda com meu dever de matemática." },
      { english: "We go to the park every Saturday.", portuguese: "Nós vamos ao parque todo sábado." },
      { english: "My friends always make me laugh loudly.", portuguese: "Meus amigos sempre me fazem rir alto." }
    ],
    level2: [
      { english: "We hit it off immediately when we first met.", portuguese: "Nós nos demos bem imediatamente quando nos conhecemos." },
      { english: "True friends will not abandon you during hard times.", portuguese: "Amigos verdadeiros não vão te abandonar durante tempos difíceis." },
      { english: "We slowly drifted apart after we finished high school.", portuguese: "Nós nos afastamos lentamente depois que terminamos o ensino médio." },
      { english: "A fair-weather friend is never there when you struggle.", portuguese: "Um amigo das horas boas nunca está presente quando você luta." },
      { english: "Maintaining friendships requires continuous mutual understanding and respect.", portuguese: "Manter amizades requer entendimento mútuo e respeito contínuos." },
      { english: "We support each other through thick and thin.", portuguese: "Nós apoiamos um ao outro nos bons e maus momentos." }
    ]
  },
  "corpo": {
    level1: [
      { english: "I wash my hands before eating lunch.", portuguese: "Eu lavo minhas mãos antes de almoçar." },
      { english: "My eyes are brown and my hair is short.", portuguese: "Meus olhos são castanhos e meu cabelo é curto." },
      { english: "She has a stomachache because she ate too much.", portuguese: "Ela está com dor de estômago porque comeu muito." },
      { english: "I brush my teeth twice a day.", portuguese: "Eu escovo meus dentes duas vezes ao dia." },
      { english: "He broke his arm falling from the tree.", portuguese: "Ele quebrou o braço caindo da árvore." },
      { english: "My feet hurt after walking all afternoon.", portuguese: "Meus pés doem depois de andar a tarde toda." }
    ],
    level2: [
      { english: "I hurt my shoulder while I was playing tennis.", portuguese: "Eu machuquei meu ombro enquanto eu estava jogando tênis." },
      { english: "It takes time to fully recover from a sprained ankle.", portuguese: "Leva tempo para se recuperar totalmente de um tornozelo torcido." },
      { english: "Regular exercise maintains a healthy cardiovascular system.", portuguese: "O exercício regular mantém um sistema cardiovascular saudável." },
      { english: "Maintaining a balanced diet is crucial for your immune system.", portuguese: "Manter uma dieta equilibrada é crucial para o seu sistema imunológico." },
      { english: "Chronic pain can severely affect your overall quality of life.", portuguese: "A dor crônica pode afetar severamente sua qualidade de vida geral." },
      { english: "Physical therapy helped him regain full mobility after the accident.", portuguese: "A fisioterapia o ajudou a recuperar a mobilidade total após o acidente." }
    ]
  },
  "casa": {
    level1: [
      { english: "The kitchen is very modern and has new appliances.", portuguese: "A cozinha é muito moderna e tem eletrodomésticos novos." },
      { english: "I sleep in my bedroom every single night.", portuguese: "Eu durmo no meu quarto toda santa noite." },
      { english: "Please clean the bathroom and vacuum the carpet.", portuguese: "Por favor, limpe o banheiro e aspire o tapete." },
      { english: "We watch movies on the comfortable living room sofa.", portuguese: "Nós assistimos filmes no sofá confortável da sala de estar." },
      { english: "There is a beautiful garden behind the house.", portuguese: "Há um belo jardim atrás da casa." },
      { english: "My brother forgot to lock the front door.", portuguese: "Meu irmão esqueceu de trancar a porta da frente." }
    ],
    level2: [
      { english: "They signed the lease for a fully furnished apartment.", portuguese: "Eles assinaram o contrato de um apartamento totalmente mobiliado." },
      { english: "We decided to knock down a wall to create space.", portuguese: "Decidimos derrubar uma parede para criar espaço." },
      { english: "The master suite looks absolutely stunning after the renovation.", portuguese: "A suíte principal está absolutamente deslumbrante após a reforma." },
      { english: "Homeownership brings both financial benefits and significant responsibilities.", portuguese: "Ser dono de casa traz tanto benefícios financeiros quanto responsabilidades significativas." },
      { english: "They installed solar panels to make the property more energy-efficient.", portuguese: "Eles instalaram painéis solares para tornar a propriedade mais eficiente em termos de energia." },
      { english: "A well-designed living area dramatically improves your domestic comfort.", portuguese: "Uma área de estar bem projetada melhora drasticamente seu conforto doméstico." }
    ]
  },
  "casa2": {
    level1: [
      { english: "I make my bed every morning after I wake up.", portuguese: "Eu arrumo minha cama toda manhã depois que acordo." },
      { english: "She needs to do the laundry on weekends.", portuguese: "Ela precisa lavar a roupa nos fins de semana." },
      { english: "He sweeps the floor and takes out the trash.", portuguese: "Ele varre o chão e tira o lixo." },
      { english: "I have breakfast at seven o'clock every day.", portuguese: "Eu tomo café da manhã às sete horas todos os dias." },
      { english: "We go to sleep very early on weekdays.", portuguese: "Nós vamos dormir muito cedo nos dias de semana." },
      { english: "My mother cooks dinner while I do my homework.", portuguese: "Minha mãe cozinha o jantar enquanto eu faço meu dever de casa." }
    ],
    level2: [
      { english: "Managing household chores requires a proper daily routine.", portuguese: "Gerenciar as tarefas domésticas exige uma rotina diária adequada." },
      { english: "Many teenagers rebel against their guardians' strict rules.", portuguese: "Muitos adolescentes se rebelam contra as regras rígidas de seus responsáveis." },
      { english: "I apologize for being late to the important meeting.", portuguese: "Peço desculpas por me atrasar para a reunião importante." },
      { english: "Procrastination often leads to overwhelming stress and missed deadlines.", portuguese: "A procrastinação frequentemente leva a um estresse esmagador e prazos perdidos." },
      { english: "Establishing a consistent morning habit can boost your daily productivity.", portuguese: "Estabelecer um hábito matinal consistente pode aumentar sua produtividade diária." },
      { english: "Balancing work commitments with personal time is a modern necessity.", portuguese: "Equilibrar compromissos de trabalho com tempo pessoal é uma necessidade moderna." }
    ]
  },
  "hobbies": {
    level1: [
      { english: "I prefer outdoor activities like riding my bicycle.", portuguese: "Eu prefiro atividades ao ar livre como andar de bicicleta." },
      { english: "When it rains we play board games together.", portuguese: "Quando chove nós jogamos jogos de tabuleiro juntos." },
      { english: "He likes to read books in his free time.", portuguese: "Ele gosta de ler livros no tempo livre dele." },
      { english: "My sister plays the piano very well.", portuguese: "Minha irmã toca piano muito bem." },
      { english: "We listen to music while we clean the house.", portuguese: "Nós ouvimos música enquanto limpamos a casa." },
      { english: "Painting is a very relaxing hobby for me.", portuguese: "Pintar é um hobby muito relaxante para mim." }
    ],
    level2: [
      { english: "Engaging in creative hobbies can boost your cognitive flexibility.", portuguese: "Envolver-se em hobbies criativos pode aumentar sua flexibilidade cognitiva." },
      { english: "Photography changes how you perceive the world around you.", portuguese: "A fotografia muda como você percebe o mundo ao seu redor." },
      { english: "I find collecting vintage stamps absolutely fascinating.", portuguese: "Eu acho colecionar selos vintage absolutamente fascinante." },
      { english: "Learning a musical instrument requires immense patience and dedication.", portuguese: "Aprender um instrumento musical exige imensa paciência e dedicação." },
      { english: "Creative pursuits provide a therapeutic escape from daily stressors.", portuguese: "Buscas criativas fornecem um escape terapêutico dos estressores diários." },
      { english: "Many people turn their passionate hobbies into profitable side businesses.", portuguese: "Muitas pessoas transformam seus hobbies apaixonados em negócios paralelos lucrativos." }
    ]
  },
  "esportes": {
    level1: [
      { english: "We run a lot and try to score goals.", portuguese: "Nós corremos muito e tentamos marcar gols." },
      { english: "Winning is nice but playing as a team is important.", portuguese: "Vencer é legal mas jogar em equipe é importante." },
      { english: "I watch tennis matches on television every Sunday.", portuguese: "Eu assisto partidas de tênis na televisão todo domingo." },
      { english: "He swims in the pool during the summer.", portuguese: "Ele nada na piscina durante o verão." },
      { english: "Basketball is a very fast and exciting sport.", portuguese: "Basquete é um esporte muito rápido e emocionante." },
      { english: "My brother rides his bike to stay healthy.", portuguese: "Meu irmão anda de bicicleta para se manter saudável." }
    ],
    level2: [
      { english: "Mental resilience is crucial during high pressure championships.", portuguese: "A resiliência mental é crucial durante campeonatos de alta pressão." },
      { english: "Coaches analyze opponent strategies to gain a competitive edge.", portuguese: "Os técnicos analisam as estratégias adversárias para ganhar vantagem competitiva." },
      { english: "Athletes undergo intense physical conditioning to prevent injuries.", portuguese: "Atletas passam por intenso condicionamento físico para prevenir lesões." },
      { english: "The spirit of sportsmanship is more valuable than winning a medal.", portuguese: "O espírito de esportividade é mais valioso do que ganhar uma medalha." },
      { english: "Endurance training drastically improves your overall stamina and health.", portuguese: "O treinamento de resistência melhora drasticamente sua vitalidade e saúde gerais." },
      { english: "Professional sports require a strict diet and disciplined lifestyle.", portuguese: "Esportes profissionais requerem uma dieta rigorosa e estilo de vida disciplinado." }
    ]
  },
  "supermercado": {
    level1: [
      { english: "We make a shopping list so we do not forget.", portuguese: "Nós fazemos uma lista de compras para não esquecer." },
      { english: "Finally we wait in line at the cashier.", portuguese: "Finalmente nós esperamos na fila do caixa." },
      { english: "I look for milk and cheese in the dairy aisle.", portuguese: "Eu procuro leite e queijo no corredor de laticínios." },
      { english: "Apples and bananas are in the fruit section.", portuguese: "Maçãs e bananas estão na seção de frutas." },
      { english: "We need a cart to carry all these groceries.", portuguese: "Precisamos de um carrinho para carregar todas essas compras." },
      { english: "The bread is very fresh and warm today.", portuguese: "O pão está muito fresco e quente hoje." }
    ],
    level2: [
      { english: "Supermarkets are strategically designed to influence consumer behavior.", portuguese: "Supermercados são projetados estrategicamente para influenciar o comportamento do consumidor." },
      { english: "The smell of baked goods triggers impulse purchases.", portuguese: "O cheiro de produtos assados provoca compras por impulso." },
      { english: "Understanding marketing tactics helps you stick to your budget.", portuguese: "Entender táticas de marketing te ajuda a manter o orçamento." },
      { english: "Comparing unit prices is a smart strategy to save money.", portuguese: "Comparar preços unitários é uma estratégia inteligente para economizar dinheiro." },
      { english: "Many consumers are now demanding ethically sourced organic products.", portuguese: "Muitos consumidores estão agora exigindo produtos orgânicos de origem ética." },
      { english: "Store layouts are deliberately crafted to maximize your browsing time.", portuguese: "Os layouts das lojas são deliberadamente criados para maximizar seu tempo de navegação." }
    ]
  },
  "compras": {
    level1: [
      { english: "Saving money is important so I look for discounts.", portuguese: "Economizar dinheiro é importante então eu procuro descontos." },
      { english: "I decided to buy a cheaper shirt today.", portuguese: "Eu decidi comprar uma camisa mais barata hoje." },
      { english: "The blue jeans are too expensive for me.", portuguese: "A calça jeans azul é muito cara para mim." },
      { english: "She likes to try on clothes before buying them.", portuguese: "Ela gosta de provar roupas antes de comprá-las." },
      { english: "Can I pay with my credit card here?", portuguese: "Posso pagar com meu cartão de crédito aqui?" },
      { english: "The shopping mall is very crowded on weekends.", portuguese: "O shopping center fica muito lotado nos fins de semana." }
    ],
    level2: [
      { english: "The retail industry relies heavily on seasonal trends.", portuguese: "A indústria de varejo depende muito das tendências sazonais." },
      { english: "Investing in durable items is a sustainable approach.", portuguese: "Investir em itens duráveis é uma abordagem sustentável." },
      { english: "Finding a bargain is thrilling especially during sales.", portuguese: "Encontrar uma pechincha é emocionante especialmente durante promoções." },
      { english: "Fast fashion contributes significantly to global environmental pollution.", portuguese: "A moda rápida contribui significativamente para a poluição ambiental global." },
      { english: "Consumerism often drives people to buy unnecessary luxurious goods.", portuguese: "O consumismo frequentemente impulsiona as pessoas a comprar bens luxuosos desnecessários." },
      { english: "Online shopping has revolutionized the way we acquire everyday goods.", portuguese: "As compras online revolucionaram a maneira como adquirimos bens do dia a dia." }
    ]
  },
  "profissoes": {
    level1: [
      { english: "My brother works as a mechanic and fixes cars.", portuguese: "Meu irmão trabalha como mecânico e conserta carros." },
      { english: "My cousin has a job interview to become a nurse.", portuguese: "Meu primo tem uma entrevista de emprego para ser enfermeiro." },
      { english: "I want to be a teacher to help children.", portuguese: "Eu quero ser professor para ajudar as crianças." },
      { english: "The doctor works in a very big hospital.", portuguese: "O médico trabalha em um hospital muito grande." },
      { english: "She is an engineer and builds tall bridges.", portuguese: "Ela é engenheira e constrói pontes altas." },
      { english: "He loves his job because he meets new people.", portuguese: "Ele ama seu trabalho porque conhece novas pessoas." }
    ],
    level2: [
      { english: "Employers seek candidates who can manage complex projects.", portuguese: "Empregadores buscam candidatos que podem gerenciar projetos complexos." },
      { english: "Working remotely has changed how we interact.", portuguese: "Trabalhar remotamente mudou como interagimos." },
      { english: "Everyone has different talents and career goals.", portuguese: "Todos têm talentos e objetivos de carreira diferentes." },
      { english: "Continuous professional development is essential in a competitive job market.", portuguese: "O desenvolvimento profissional contínuo é essencial em um mercado de trabalho competitivo." },
      { english: "Networking provides invaluable opportunities for career advancement and mentorship.", portuguese: "Fazer networking fornece oportunidades inestimáveis para avanço na carreira e mentoria." },
      { english: "Many employees prioritize a healthy work-life balance over high salaries.", portuguese: "Muitos funcionários priorizam um equilíbrio saudável entre vida pessoal e trabalho em vez de salários altos." }
    ]
  },
  "lugares": {
    level1: [
      { english: "The central square has a beautiful fountain.", portuguese: "A praça central tem uma fonte linda." },
      { english: "The bus station is very far from my house.", portuguese: "A rodoviária fica muito longe da minha casa." },
      { english: "I like to visit the large library downtown.", portuguese: "Eu gosto de visitar a grande biblioteca no centro." },
      { english: "We watched a movie at the new cinema.", portuguese: "Nós assistimos a um filme no novo cinema." },
      { english: "The museum exhibits very old dinosaur bones.", portuguese: "O museu exibe ossos de dinossauros muito antigos." },
      { english: "They walk their dogs in the public park.", portuguese: "Eles passeiam com seus cães no parque público." }
    ],
    level2: [
      { english: "Navigating a busy metropolis requires a good sense of direction.", portuguese: "Navegar em uma metrópole movimentada requer bom senso de direção." },
      { english: "Exploring public places on foot is tiring but rewarding.", portuguese: "Explorar lugares públicos a pé é cansativo mas recompensador." },
      { english: "I visited an art exhibition that was truly captivating.", portuguese: "Eu visitei uma exposição de arte que foi verdadeiramente cativante." },
      { english: "Urban planning profoundly affects the quality of city life.", portuguese: "O planejamento urbano afeta profundamente a qualidade de vida na cidade." },
      { english: "Historical landmarks preserve the cultural heritage of our ancient society.", portuguese: "Marcos históricos preservam a herança cultural da nossa sociedade antiga." },
      { english: "Efficient public transportation is vital for reducing urban traffic congestion.", portuguese: "O transporte público eficiente é vital para reduzir o congestionamento de tráfego urbano." }
    ]
  },
  "animais": {
    level1: [
      { english: "My favorite animal is the dog because it is loyal.", portuguese: "Meu animal favorito é o cachorro porque ele é leal." },
      { english: "The monkeys were very funny jumping from tree to tree.", portuguese: "Os macacos eram muito engraçados pulando de árvore em árvore." },
      { english: "Some people prefer cats because they are quiet.", portuguese: "Algumas pessoas preferem gatos porque eles são quietos." },
      { english: "Birds sing beautiful songs in the morning.", portuguese: "Os pássaros cantam canções bonitas de manhã." },
      { english: "Elephants are the largest animals on land.", portuguese: "Os elefantes são os maiores animais terrestres." },
      { english: "Fish swim freely in the blue ocean.", portuguese: "Os peixes nadam livremente no oceano azul." }
    ],
    level2: [
      { english: "Wildlife conservation is essential for maintaining our planet biodiversity.", portuguese: "A conservação da vida selvagem é essencial para manter a biodiversidade do planeta." },
      { english: "Educating the public is the first step toward saving them.", portuguese: "Educar o público é o primeiro passo para salvá-los." },
      { english: "The timeline of species extinction has accelerated alarmingly.", portuguese: "A linha do tempo da extinção das espécies acelerou de forma alarmante." },
      { english: "Habitat destruction poses the greatest threat to endangered animal populations.", portuguese: "A destruição do habitat representa a maior ameaça para as populações de animais ameaçados." },
      { english: "Marine biologists study complex ecosystems hidden beneath the ocean surface.", portuguese: "Os biólogos marinhos estudam ecossistemas complexos escondidos abaixo da superfície do oceano." },
      { english: "Sanctuaries provide a safe haven for rescued and vulnerable wildlife.", portuguese: "Santuários fornecem um refúgio seguro para a vida selvagem resgatada e vulnerável." }
    ]
  },
  "culinaria": {
    level1: [
      { english: "Every Friday night my mother and I bake a cake.", portuguese: "Toda sexta à noite minha mãe e eu assamos um bolo." },
      { english: "First we mix everything in a big bowl.", portuguese: "Primeiro nós misturamos tudo em uma tigela grande." },
      { english: "The kitchen smells delicious when the cake is ready.", portuguese: "A cozinha cheira delicioso quando o bolo está pronto." },
      { english: "I need sugar and eggs for this recipe.", portuguese: "Eu preciso de açúcar e ovos para esta receita." },
      { english: "We eat hot soup when the weather is cold.", portuguese: "Nós comemos sopa quente quando o tempo está frio." },
      { english: "She cuts the vegetables carefully with a knife.", portuguese: "Ela corta os vegetais cuidadosamente com uma faca." }
    ],
    level2: [
      { english: "Preparing a complex dish requires precise timing.", portuguese: "Preparar um prato complexo requer precisão de tempo." },
      { english: "Baking is like chemistry because mistakes ruin the texture.", portuguese: "Assar é como química porque erros estragam a textura." },
      { english: "Authentic recipes are passed down through generations.", portuguese: "Receitas autênticas são passadas através de gerações." },
      { english: "Gastronomy is a beautiful reflection of regional culture and history.", portuguese: "A gastronomia é um belo reflexo da cultura e história regionais." },
      { english: "Fermentation adds a profound depth of flavor to various ingredients.", portuguese: "A fermentação adiciona uma profunda intensidade de sabor a vários ingredientes." },
      { english: "Mastering culinary arts demands rigorous practice and an adventurous palate.", portuguese: "Dominar as artes culinárias exige prática rigorosa e um paladar aventureiro." }
    ]
  },
  "tecnologia": {
    level1: [
      { english: "I use my smartphone every day to send messages.", portuguese: "Eu uso meu smartphone todos os dias para enviar mensagens." },
      { english: "Sometimes the internet connection is very slow.", portuguese: "Às vezes a conexão de internet é muito lenta." },
      { english: "It is important to charge our devices at night.", portuguese: "É importante carregar nossos dispositivos à noite." },
      { english: "He bought a new laptop for his college classes.", portuguese: "Ele comprou um laptop novo para as aulas da faculdade." },
      { english: "My grandmother does not know how to use computers.", portuguese: "Minha avó não sabe como usar computadores." },
      { english: "We play video games on the big screen.", portuguese: "Nós jogamos videogames na tela grande." }
    ],
    level2: [
      { english: "As we become dependent on digital tools cybersecurity is critical.", portuguese: "À medida que nos tornamos dependentes de ferramentas digitais a cibersegurança é crítica." },
      { english: "Many users trap their devices with malware unintentionally.", portuguese: "Muitos usuários prendem seus dispositivos com malware sem intenção." },
      { english: "It is vital to use strong passwords for safety.", portuguese: "É vital usar senhas fortes para segurança." },
      { english: "Artificial intelligence has rapidly transformed multiple industrial sectors globally.", portuguese: "A inteligência artificial transformou rapidamente vários setores industriais globalmente." },
      { english: "Cloud computing allows seamless data access from virtually any remote location.", portuguese: "A computação em nuvem permite acesso contínuo a dados de praticamente qualquer local remoto." },
      { english: "Software updates frequently patch vulnerabilities that hackers might exploit maliciously.", portuguese: "Atualizações de software frequentemente corrigem vulnerabilidades que hackers poderiam explorar maliciosamente." }
    ]
  },
  "redes-sociais": {
    level1: [
      { english: "I try not to spend too much time online.", portuguese: "Eu tento não passar muito tempo online." },
      { english: "Every evening I scroll through my feed.", portuguese: "Toda noite eu rolo o meu feed." },
      { english: "I use Instagram to post pictures of my pets.", portuguese: "Eu uso o Instagram para postar fotos dos meus animais." },
      { english: "She likes to leave nice comments on my photos.", portuguese: "Ela gosta de deixar comentários amáveis nas minhas fotos." },
      { english: "We share funny videos with our friends.", portuguese: "Nós compartilhamos vídeos engraçados com nossos amigos." },
      { english: "I have many followers on my social media account.", portuguese: "Eu tenho muitos seguidores na minha conta de rede social." }
    ],
    level2: [
      { english: "Finding a healthy balance with digital engagement is a challenge.", portuguese: "Encontrar um equilíbrio saudável com engajamento digital é um desafio." },
      { english: "Social media platforms have drastically altered our reality.", portuguese: "Plataformas de mídia social alteraram drasticamente nossa realidade." },
      { english: "An embarrassing mistake can go viral and damage your reputation.", portuguese: "Um erro constrangedor pode viralizar e danificar sua reputação." },
      { english: "Algorithms are designed to maximize user retention and continuous engagement.", portuguese: "Algoritmos são projetados para maximizar a retenção do usuário e engajamento contínuo." },
      { english: "Constant comparison can detrimentally affect an individual's mental well-being.", portuguese: "A comparação constante pode afetar negativamente o bem-estar mental de um indivíduo." },
      { english: "Digital detox periods are increasingly recommended by health professionals worldwide.", portuguese: "Períodos de desintoxicação digital são cada vez mais recomendados por profissionais de saúde em todo o mundo." }
    ]
  },
  "revisao-1": {
    level1: [
      { english: "I have a big family and we live together.", portuguese: "Eu tenho uma família grande e moramos juntos." },
      { english: "I hurt my shoulder while I was playing tennis.", portuguese: "Eu machuquei meu ombro enquanto jogava tênis." },
      { english: "Please put the dirty clothes in the washing machine.", portuguese: "Por favor coloque as roupas sujas na máquina de lavar." },
      { english: "We go to sleep very early on weekdays.", portuguese: "Nós vamos dormir muito cedo nos dias de semana." },
      { english: "She is my best friend from school.", portuguese: "Ela é minha melhor amiga da escola." },
      { english: "My father works hard every single day.", portuguese: "Meu pai trabalha duro todo santo dia." }
    ],
    level2: [
      { english: "Despite our differences I remain close to my relatives.", portuguese: "Apesar de nossas diferenças, continuo próximo dos meus parentes." },
      { english: "They signed the lease for a fully furnished apartment.", portuguese: "Eles assinaram o contrato de um apartamento totalmente mobiliado." },
      { english: "A fair-weather friend will abandon you when things get tough.", portuguese: "Um amigo das horas boas te abandonará quando as coisas ficarem difíceis." },
      { english: "Establishing a consistent morning habit can boost your daily productivity.", portuguese: "Estabelecer um hábito matinal consistente pode aumentar sua produtividade diária." },
      { english: "Chronic pain can severely affect your overall quality of life.", portuguese: "A dor crônica pode afetar severamente sua qualidade de vida geral." },
      { english: "Building strong family bonds takes time and effort.", portuguese: "Construir fortes laços familiares exige tempo e esforço." }
    ]
  },
  "revisao-2": {
    level1: [
      { english: "When it rains we usually play board games together.", portuguese: "Quando chove nós normalmente jogamos jogos de tabuleiro juntos." },
      { english: "We make a shopping list so we do not forget anything.", portuguese: "Nós fazemos uma lista de compras para não esquecermos nada." },
      { english: "My brother works as a mechanic and fixes cars.", portuguese: "Meu irmão trabalha como mecânico e conserta carros." },
      { english: "I decided to buy a cheaper shirt today.", portuguese: "Eu decidi comprar uma camisa mais barata hoje." },
      { english: "The doctor works in a very big hospital.", portuguese: "O médico trabalha em um hospital muito grande." },
      { english: "We run a lot and try to score goals.", portuguese: "Nós corremos muito e tentamos marcar gols." }
    ],
    level2: [
      { english: "Engaging in creative hobbies can boost your cognitive flexibility.", portuguese: "Envolver-se em hobbies criativos pode aumentar sua flexibilidade cognitiva." },
      { english: "Investing in durable items is a sustainable approach.", portuguese: "Investir em itens duráveis é uma abordagem sustentável." },
      { english: "Supermarkets are strategically designed to influence consumer behavior.", portuguese: "Supermercados são projetados estrategicamente para influenciar o comportamento do consumidor." },
      { english: "Continuous professional development is essential in a competitive job market.", portuguese: "O desenvolvimento profissional contínuo é essencial em um mercado de trabalho competitivo." },
      { english: "Endurance training drastically improves your overall stamina and health.", portuguese: "O treinamento de resistência melhora drasticamente sua vitalidade e saúde gerais." },
      { english: "Fast fashion contributes significantly to global environmental pollution.", portuguese: "A moda rápida contribui significativamente para a poluição ambiental global." }
    ]
  },
  "revisao-3": {
    level1: [
      { english: "The central square has a beautiful fountain.", portuguese: "A praça central tem uma fonte linda." },
      { english: "First we mix everything in a big bowl.", portuguese: "Primeiro nós misturamos tudo em uma tigela grande." },
      { english: "Sometimes the internet connection is very slow.", portuguese: "Às vezes a conexão de internet é muito lenta." },
      { english: "Elephants are the largest animals on land.", portuguese: "Os elefantes são os maiores animais terrestres." },
      { english: "I use Instagram to post pictures of my pets.", portuguese: "Eu uso o Instagram para postar fotos dos meus animais." },
      { english: "They walk their dogs in the public park.", portuguese: "Eles passeiam com seus cães no parque público." }
    ],
    level2: [
      { english: "Navigating a busy metropolis requires patience and good direction.", portuguese: "Navegar em uma metrópole movimentada requer paciência e boa direção." },
      { english: "Wildlife conservation is essential for maintaining biodiversity.", portuguese: "A conservação da vida selvagem é essencial para manter a biodiversidade." },
      { english: "As we become dependent on digital tools cybersecurity is critical.", portuguese: "À medida que nos tornamos dependentes de ferramentas digitais a cibersegurança é crítica." },
      { english: "Gastronomy is a beautiful reflection of regional culture and history.", portuguese: "A gastronomia é um belo reflexo da cultura e história regionais." },
      { english: "Constant comparison can detrimentally affect an individual's mental well-being.", portuguese: "A comparação constante pode afetar negativamente o bem-estar mental de um indivíduo." },
      { english: "Habitat destruction poses the greatest threat to endangered animal populations.", portuguese: "A destruição do habitat representa a maior ameaça para as populações de animais ameaçados." }
    ]
  }
};

function overwriteFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const id in sentenceData) {
    if (content.indexOf(`id: "${id}"`) === -1) continue;
    
    const bsRegex = /buildSentence:\s*\{[\s\S]*?\]\n\s*\}/;
    const startIndex = content.indexOf(`id: "${id}"`);
    let nextId = content.indexOf('id: "', startIndex + 10);
    if (nextId === -1) nextId = content.length;

    let section = content.slice(startIndex, nextId);
    
    const bsStr = 'buildSentence: ' + JSON.stringify(sentenceData[id], null, 4);
    
    if (bsRegex.test(section)) {
      section = section.replace(bsRegex, bsStr);
      content = content.slice(0, startIndex) + section + content.slice(nextId);
      console.log(`Updated 6 sentences for ${id}`);
    } else {
      console.log(`buildSentence not found in ${id}!`);
    }
  }

  fs.writeFileSync(filePath, content);
}

overwriteFile('../data/scenarios1.ts');
overwriteFile('../data/scenarios2.ts');
overwriteFile('../data/reviews.ts');

console.log("All sentences expanded to 6!");
