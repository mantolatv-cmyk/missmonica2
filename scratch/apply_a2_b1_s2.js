const fs = require('fs');

const b1Replacements = {
  // --- Compras ---
  "Clothes": { en: "She bought expensive clothes for the wedding.", pt: "Ela comprou roupas caras para o casamento." },
  "Shoes": { en: "He tried on new shoes at the mall.", pt: "Ele experimentou sapatos novos no shopping." },
  "Size": { en: "The clerk checked the correct size for the customer.", pt: "O balconista verificou o tamanho correto para o cliente." },
  "Try on": { en: "She tried on three different dresses.", pt: "Ela experimentou três vestidos diferentes." },
  "Store / Shop": { en: "They opened a new clothing store downtown.", pt: "Eles abriram uma nova loja de roupas no centro." },
  "Fitting room": { en: "He waited outside the fitting room for ten minutes.", pt: "Ele esperou do lado de fora do provador por dez minutos." },
  "Sale": { en: "I bought this jacket during the winter sale.", pt: "Eu comprei esta jaqueta durante a liquidação de inverno." },
  "Expensive": { en: "That luxury watch cost a lot because it was expensive.", pt: "Aquele relógio de luxo custou muito porque era caro." },
  "Cheap": { en: "He preferred cheap options to save money.", pt: "Ele preferia opções baratas para economizar dinheiro." },
  "Wallet": { en: "She lost her leather wallet yesterday.", pt: "Ela perdeu sua carteira de couro ontem." },
  "Jacket": { en: "He wore a thick jacket because of the cold wind.", pt: "Ele usou uma jaqueta grossa por causa do vento frio." },
  "Pants": { en: "She bought comfortable pants for the trip.", pt: "Ela comprou calças confortáveis para a viagem." },
  "Dress": { en: "She wore a stunning red dress to the party.", pt: "Ela usou um vestido vermelho deslumbrante na festa." },
  "Hat": { en: "He put on a hat to protect his face from the sun.", pt: "Ele colocou um chapéu para proteger o rosto do sol." },
  "Gift": { en: "They bought a special gift for their parents.", pt: "Eles compraram um presente especial para os pais deles." },

  // --- Profissoes ---
  "Doctor": { en: "The experienced doctor successfully treated the patient.", pt: "O médico experiente tratou o paciente com sucesso." },
  "Teacher": { en: "The dedicated teacher helped her students after class.", pt: "A professora dedicada ajudou seus alunos depois da aula." },
  "Engineer": { en: "The civil engineer designed a robust bridge.", pt: "O engenheiro civil projetou uma ponte robusta." },
  "Chef": { en: "The head chef prepared a complex gourmet dish.", pt: "O chef principal preparou um prato gourmet complexo." },
  "Police officer": { en: "The brave police officer stopped the thief.", pt: "O policial corajoso parou o ladrão." },
  "Work / Job": { en: "She started her new job at the international bank.", pt: "Ela começou seu novo emprego no banco internacional." },
  "Nurse": { en: "The nurse checked his blood pressure regularly.", pt: "O enfermeiro verificou a pressão arterial dele regularmente." },
  "Mechanic": { en: "The mechanic fixed the broken engine quickly.", pt: "O mecânico consertou o motor quebrado rapidamente." },
  "Lawyer": { en: "The corporate lawyer defended the company in court.", pt: "O advogado corporativo defendeu a empresa no tribunal." },
  "Office": { en: "He organized his desk in the modern office.", pt: "Ele organizou sua mesa no escritório moderno." },
  "Dentist": { en: "The dentist extracted the painful tooth carefully.", pt: "O dentista extraiu o dente dolorido com cuidado." },
  "Firefighter": { en: "The courageous firefighter rescued the family from the fire.", pt: "O bombeiro corajoso resgatou a família do incêndio." },
  "Driver": { en: "The skilled driver avoided a serious accident.", pt: "O motorista habilidoso evitou um acidente grave." },
  "Pilot": { en: "The commercial pilot landed the airplane safely.", pt: "O piloto comercial pousou o avião com segurança." },
  "Artist": { en: "The famous artist painted a beautiful mural.", pt: "O artista famoso pintou um lindo mural." },
  "Farmer": { en: "The hardworking farmer harvested the crops early in the morning.", pt: "O fazendeiro trabalhador colheu as safras de manhã cedo." },
  "Waiter": { en: "The polite waiter served the food with a smile.", pt: "O garçom educado serviu a comida com um sorriso." },
  "Company": { en: "The technology company launched a new software product.", pt: "A empresa de tecnologia lançou um novo produto de software." },
  "Boss": { en: "The demanding boss requested a detailed report.", pt: "O chefe exigente solicitou um relatório detalhado." },
  "Salary": { en: "She negotiated a higher salary during the interview.", pt: "Ela negociou um salário mais alto durante a entrevista." },

  // --- Lugares ---
  "Park": { en: "Children played happily in the public park.", pt: "As crianças brincaram alegremente no parque público." },
  "Hospital": { en: "The ambulance arrived at the emergency hospital.", pt: "A ambulância chegou ao hospital de emergência." },
  "School": { en: "The local school received new computers for the students.", pt: "A escola local recebeu novos computadores para os alunos." },
  "Bus stop": { en: "We waited for the bus at the bus stop for an hour.", pt: "Nós esperamos pelo ônibus no ponto de ônibus por uma hora." },
  "Street": { en: "They walked down the busy street during rush hour.", pt: "Eles andaram pela rua movimentada durante a hora do rush." },
  "Turn left / right": { en: "He turned left at the intersection to avoid traffic.", pt: "Ele virou à esquerda no cruzamento para evitar o trânsito." },
  "Library": { en: "She borrowed three classic novels from the library.", pt: "Ela pegou três romances clássicos emprestados na biblioteca." },
  "Bank": { en: "He deposited his entire paycheck at the bank.", pt: "Ele depositou todo o seu pagamento no banco." },
  "Go straight": { en: "They went straight until they reached the museum.", pt: "Eles seguiram reto até chegarem ao museu." },
  "Near": { en: "They bought a house near the beautiful lake.", pt: "Eles compraram uma casa perto do lindo lago." },
  "Pharmacy": { en: "He bought essential medicine at the nearby pharmacy.", pt: "Ele comprou remédios essenciais na farmácia próxima." },
  "Restaurant": { en: "We ate a delicious dinner at the Italian restaurant.", pt: "Nós comemos um jantar delicioso no restaurante italiano." },
  "Airport": { en: "She arrived at the international airport two hours early.", pt: "Ela chegou ao aeroporto internacional duas horas adiantada." },
  "Station": { en: "They caught the early train at the central station.", pt: "Eles pegaram o trem cedo na estação central." },
  "Museum": { en: "The historical museum exhibited ancient artifacts.", pt: "O museu histórico exibiu artefatos antigos." },
  "Far": { en: "He drove a far distance to visit his relatives.", pt: "Ele dirigiu uma longa distância para visitar seus parentes." },
  "Corner": { en: "The coffee shop opened on the corner of the busy street.", pt: "A cafeteria abriu na esquina da rua movimentada." },
  "Block": { en: "They walked around the block to get some exercise.", pt: "Eles deram uma volta no quarteirão para fazer algum exercício." },
  "Traffic light": { en: "He stopped the car immediately when the traffic light turned red.", pt: "Ele parou o carro imediatamente quando o semáforo ficou vermelho." },
  "Bridge": { en: "The heavy truck crossed the old wooden bridge safely.", pt: "O caminhão pesado cruzou a velha ponte de madeira com segurança." },

  // --- Animais ---
  "Dog": { en: "The energetic dog fetched the ball multiple times.", pt: "O cachorro enérgico buscou a bola várias vezes." },
  "Cat": { en: "The stray cat slept peacefully on the porch.", pt: "O gato de rua dormiu pacificamente na varanda." },
  "Bird": { en: "The rare bird flew high above the dense forest.", pt: "O pássaro raro voou alto sobre a floresta densa." },
  "Fish": { en: "The colorful fish swam quickly around the large tank.", pt: "O peixe colorido nadou rapidamente ao redor do aquário grande." },
  "Pet": { en: "She adopted a rescued pet from the local animal shelter.", pt: "Ela adotou um animal de estimação resgatado no abrigo de animais local." },
  "Walk the dog": { en: "He walked the dog around the park every evening.", pt: "Ele passeava com o cachorro pelo parque toda noite." },
  "Feed": { en: "They fed the hungry animals at the farm early in the morning.", pt: "Eles alimentaram os animais famintos na fazenda de manhã cedo." },
  "Horse": { en: "The majestic horse galloped swiftly across the open field.", pt: "O cavalo majestoso galopou velozmente pelo campo aberto." },
  "Cow": { en: "The gentle cow grazed calmly in the green pasture.", pt: "A vaca dócil pastou calmamente no pasto verde." },
  "Vet": { en: "The dedicated vet examined the injured puppy thoroughly.", pt: "O veterinário dedicado examinou o filhote ferido minuciosamente." },
  "Pig": { en: "The heavy pig rolled around in the wet mud to stay cool.", pt: "O porco pesado rolou na lama molhada para se manter fresco." },
  "Chicken": { en: "The farmer collected fresh eggs from the chicken coop.", pt: "O fazendeiro colheu ovos frescos do galinheiro." },
  "Rabbit": { en: "The fast rabbit hid behind the bushes to avoid predators.", pt: "O coelho veloz se escondeu atrás dos arbustos para evitar predadores." },
  "Lion": { en: "The fierce lion roared loudly, intimidating the other animals.", pt: "O leão feroz rugiu alto, intimidando os outros animais." },
  "Tiger": { en: "The wild tiger stalked its prey silently in the jungle.", pt: "O tigre selvagem perseguiu sua presa silenciosamente na selva." },
  "Monkey": { en: "The clever monkey swung effortlessly from branch to branch.", pt: "O macaco esperto balançou sem esforço de galho em galho." },
  "Elephant": { en: "The enormous elephant grabbed the peanuts with its long trunk.", pt: "O elefante enorme pegou os amendoins com sua longa tromba." },
  "Bark": { en: "The guard dog barked aggressively at the unknown intruder.", pt: "O cão de guarda latiu agressivamente para o intruso desconhecido." },
  "Meow": { en: "The tiny kitten meowed constantly until she received her milk.", pt: "O gatinho minúsculo miou constantemente até receber seu leite." },
  "Bite": { en: "The frightened dog bit the stranger's hand unexpectedly.", pt: "O cachorro assustado mordeu a mão do estranho inesperadamente." },

  // --- Culinaria ---
  "Cook": { en: "She cooked a complex meal for her family yesterday.", pt: "Ela cozinhou uma refeição complexa para a família ontem." },
  "Bake": { en: "He baked a delicious chocolate cake for the party.", pt: "Ele assou um bolo de chocolate delicioso para a festa." },
  "Recipe": { en: "They followed the traditional recipe step by step.", pt: "Eles seguiram a receita tradicional passo a passo." },
  "Ingredients": { en: "She bought all the fresh ingredients at the local market.", pt: "Ela comprou todos os ingredientes frescos no mercado local." },
  "Knife": { en: "The chef sharpened his knife before preparing the vegetables.", pt: "O chef afiou a faca antes de preparar os vegetais." },
  "Oven": { en: "He placed the lasagna in the hot oven for an hour.", pt: "Ele colocou a lasanha no forno quente por uma hora." },
  "Boil": { en: "She boiled the water before adding the pasta.", pt: "Ela ferveu a água antes de adicionar o macarrão." },
  "Fry": { en: "He fried the potatoes until they were crispy.", pt: "Ele fritou as batatas até ficarem crocantes." },
  "Chop": { en: "She chopped the onions and garlic very quickly.", pt: "Ela picou as cebolas e o alho muito rápido." },
  "Spoon": { en: "He stirred the soup carefully with a large wooden spoon.", pt: "Ele mexeu a sopa cuidadosamente com uma colher de pau grande." },
  "Fork": { en: "She ate the salad using a silver fork.", pt: "Ela comeu a salada usando um garfo de prata." },
  "Plate": { en: "He arranged the food beautifully on the white plate.", pt: "Ele arrumou a comida lindamente no prato branco." },
  "Bowl": { en: "She mixed the salad dressing in a small bowl.", pt: "Ela misturou o molho de salada em uma tigela pequena." },
  "Mix": { en: "He mixed the flour and sugar to create the dough.", pt: "Ele misturou a farinha e o açúcar para criar a massa." },
  "Pour": { en: "She poured the hot tea into the delicate cups.", pt: "Ela despejou o chá quente nas xícaras delicadas." },
  "Taste": { en: "The chef tasted the sauce and added more salt.", pt: "O chef provou o molho e adicionou mais sal." },
  "Spicy": { en: "He loved the spicy food they served at the Indian restaurant.", pt: "Ele adorava a comida apimentada que serviam no restaurante indiano." },
  "Sweet": { en: "She preferred sweet desserts over salty snacks.", pt: "Ela preferia sobremesas doces a lanches salgados." },
  "Salty": { en: "He complained that the soup tasted too salty.", pt: "Ele reclamou que a sopa estava com gosto muito salgado." },
  "Pan": { en: "She heated the oil in the frying pan before adding the eggs.", pt: "Ela aqueceu o óleo na frigideira antes de adicionar os ovos." },

  // --- Tecnologia ---
  "Laptop": { en: "He connected his laptop to the office network yesterday.", pt: "Ele conectou o laptop dele à rede do escritório ontem." },
  "Smartphone": { en: "She bought a new smartphone with a better camera.", pt: "Ela comprou um smartphone novo com uma câmera melhor." },
  "Internet": { en: "The internet connection dropped several times during the meeting.", pt: "A conexão com a internet caiu várias vezes durante a reunião." },
  "Keyboard": { en: "He typed the long document using a mechanical keyboard.", pt: "Ele digitou o longo documento usando um teclado mecânico." },
  "Screen": { en: "She cracked her phone screen when it fell on the floor.", pt: "Ela rachou a tela do telefone quando ele caiu no chão." },
  "Download": { en: "He downloaded the important files before the flight.", pt: "Ele baixou os arquivos importantes antes do voo." },
  "Password": { en: "She forgot her password and locked her account.", pt: "Ela esqueceu sua senha e bloqueou sua conta." },
  "Charger": { en: "He plugged his phone into the charger all night.", pt: "Ele conectou o telefone ao carregador a noite toda." },
  "App": { en: "The developer updated the app to fix some bugs.", pt: "O desenvolvedor atualizou o aplicativo para corrigir alguns bugs." },
  "Mouse": { en: "She clicked the mouse twice to open the application.", pt: "Ela clicou no mouse duas vezes para abrir o aplicativo." },
  "Upload": { en: "He uploaded the heavy video file to the server.", pt: "Ele enviou (fez upload) o arquivo de vídeo pesado para o servidor." },
  "Battery": { en: "The phone battery died completely during the long trip.", pt: "A bateria do telefone acabou completamente durante a longa viagem." },
  "Email": { en: "She received an urgent email from her boss this morning.", pt: "Ela recebeu um email urgente do seu chefe esta manhã." },
  "Website": { en: "The company launched a new website to attract more clients.", pt: "A empresa lançou um novo site para atrair mais clientes." },
  "Link": { en: "He clicked the secure link to reset his password.", pt: "Ele clicou no link seguro para redefinir sua senha." },
  "Save": { en: "She saved all her important documents on a portable drive.", pt: "Ela salvou todos os seus documentos importantes num drive portátil." },
  "Delete": { en: "He deleted the old files to free up space on his computer.", pt: "Ele apagou os arquivos antigos para liberar espaço no seu computador." },
  "Folder": { en: "She organized her digital photos in a specific folder.", pt: "Ela organizou suas fotos digitais numa pasta específica." },
  "Headphones": { en: "He wore noise-canceling headphones to concentrate at work.", pt: "Ele usou fones de ouvido com cancelamento de ruído para se concentrar no trabalho." },
  "Plug in": { en: "She plugged in her laptop before starting the presentation.", pt: "Ela conectou (na tomada) o laptop antes de começar a apresentação." },

  // --- Redes Sociais ---
  "Like": { en: "Thousands of people liked her post about the trip.", pt: "Milhares de pessoas curtiram a postagem dela sobre a viagem." },
  "Follow": { en: "He followed many educational channels to learn new skills.", pt: "Ele seguia muitos canais educacionais para aprender novas habilidades." },
  "Post": { en: "She posted a beautiful picture of the sunset on her profile.", pt: "Ela postou uma foto linda do pôr do sol no seu perfil." },
  "Share": { en: "They shared the funny video with all their friends.", pt: "Eles compartilharam o vídeo engraçado com todos os seus amigos." },
  "Profile": { en: "He updated his professional profile to find a better job.", pt: "Ele atualizou seu perfil profissional para encontrar um emprego melhor." },
  "Message": { en: "She sent a direct message to ask about the event details.", pt: "Ela enviou uma mensagem direta para perguntar sobre os detalhes do evento." },
  "Comment": { en: "He left a positive comment on her recent photo.", pt: "Ele deixou um comentário positivo na foto recente dela." },
  "Hashtag": { en: "She used a popular hashtag to make her post visible.", pt: "Ela usou uma hashtag popular para tornar sua postagem visível." },
  "Scroll": { en: "He scrolled through his feed for hours without realizing it.", pt: "Ele rolou a tela pelo seu feed por horas sem perceber." },
  "Follower": { en: "The influencer gained a new follower every minute.", pt: "O influenciador ganhava um novo seguidor a cada minuto." },
  "Feed": { en: "She checked her feed every morning to read the news.", pt: "Ela verificava o seu feed toda manhã para ler as notícias." },
  "Tag": { en: "He tagged his best friend in the hilarious meme.", pt: "Ele marcou seu melhor amigo no meme hilário." },
  "Story": { en: "She uploaded a quick update to her story yesterday.", pt: "Ela enviou uma atualização rápida para seu story ontem." },
  "Influencer": { en: "The famous influencer promoted a new clothing brand.", pt: "O influenciador famoso promoveu uma nova marca de roupas." },
  "Viral": { en: "The dancing video went completely viral overnight.", pt: "O vídeo de dança se tornou completamente viral da noite para o dia." },
  "Meme": { en: "They laughed at the funny meme they saw online.", pt: "Eles riram do meme engraçado que viram online." },
  "Block": { en: "She blocked the rude user to protect her privacy.", pt: "Ela bloqueou o usuário rude para proteger sua privacidade." },
  "Notification": { en: "He received a notification when someone liked his photo.", pt: "Ele recebeu uma notificação quando alguém curtiu a foto dele." },
  "Update": { en: "The application updated automatically during the night.", pt: "O aplicativo atualizou automaticamente durante a noite." },
  "Account": { en: "He created a new account to keep his personal life private.", pt: "Ele criou uma nova conta para manter sua vida pessoal privada." }
};

const b1NewVocab = {
  "compras": [
    { english: "Boutique", portuguese: "Boutique", levels: { B1: { en: "She bought an elegant dress from a luxury boutique.", pt: "Ela comprou um vestido elegante de uma boutique de luxo." } } },
    { english: "Retail", portuguese: "Varejo", levels: { B1: { en: "He has worked in the retail industry for years.", pt: "Ele trabalhou na indústria de varejo por anos." } } },
    { english: "Consumer", portuguese: "Consumidor", levels: { B1: { en: "The average consumer expects high quality at low prices.", pt: "O consumidor médio espera alta qualidade a preços baixos." } } },
    { english: "Purchase", portuguese: "Compra / Adquirir", levels: { B1: { en: "He made a significant purchase using his credit card.", pt: "Ele fez uma compra significativa usando seu cartão de crédito." } } },
    { english: "Refund", portuguese: "Reembolso", levels: { B1: { en: "She demanded a full refund for the defective product.", pt: "Ela exigiu um reembolso total pelo produto com defeito." } } },
    { english: "Bargain", portuguese: "Pechincha", levels: { B1: { en: "That designer coat was a fantastic bargain at the outlet.", pt: "Aquele casaco de grife foi uma pechincha fantástica no outlet." } } },
    { english: "Wardrobe", portuguese: "Guarda-roupa (roupas)", levels: { B1: { en: "She entirely updated her winter wardrobe last month.", pt: "Ela atualizou inteiramente seu guarda-roupa de inverno no mês passado." } } },
    { english: "Accessory", portuguese: "Acessório", levels: { B1: { en: "A nice watch is the perfect accessory for this outfit.", pt: "Um belo relógio é o acessório perfeito para esta roupa." } } }
  ],
  "profissoes": [
    { english: "Career", portuguese: "Carreira", levels: { B1: { en: "He decided to pursue a demanding career in law.", pt: "Ele decidiu seguir uma carreira exigente na área de direito." } } },
    { english: "Occupation", portuguese: "Ocupação", levels: { B1: { en: "Please state your name and current occupation clearly.", pt: "Por favor, declare seu nome e ocupação atual claramente." } } },
    { english: "Vocation", portuguese: "Vocação", levels: { B1: { en: "Teaching children is truly her passion and vocation.", pt: "Ensinar crianças é verdadeiramente sua paixão e vocação." } } },
    { english: "Profession", portuguese: "Profissão", levels: { B1: { en: "Medicine is an incredibly rewarding and challenging profession.", pt: "A medicina é uma profissão incrivelmente gratificante e desafiadora." } } },
    { english: "Employee", portuguese: "Funcionário / Empregado", levels: { B1: { en: "The diligent employee received a promotion this year.", pt: "O funcionário diligente recebeu uma promoção este ano." } } },
    { english: "Employer", portuguese: "Empregador", levels: { B1: { en: "Her previous employer provided excellent health benefits.", pt: "O empregador anterior dela forneceu excelentes benefícios de saúde." } } },
    { english: "Colleague", portuguese: "Colega de trabalho", levels: { B1: { en: "My colleague helped me finish the complex presentation.", pt: "Meu colega de trabalho me ajudou a terminar a apresentação complexa." } } },
    { english: "Resume / CV", portuguese: "Currículo", levels: { B1: { en: "She sent her updated resume to several large companies.", pt: "Ela enviou seu currículo atualizado para várias grandes empresas." } } }
  ],
  "lugares": [
    { english: "Destination", portuguese: "Destino", levels: { B1: { en: "Paris is a popular tourist destination during the spring.", pt: "Paris é um destino turístico popular durante a primavera." } } },
    { english: "Location", portuguese: "Localização", levels: { B1: { en: "The restaurant is situated in a prime downtown location.", pt: "O restaurante está situado numa localização privilegiada no centro." } } },
    { english: "Venue", portuguese: "Local (de evento)", levels: { B1: { en: "They booked a beautiful outdoor venue for their wedding.", pt: "Eles reservaram um lindo local ao ar livre para o casamento." } } },
    { english: "Surroundings", portuguese: "Arredores", levels: { B1: { en: "The hotel beautifully blends with its natural surroundings.", pt: "O hotel se mistura lindamente com seus arredores naturais." } } },
    { english: "Neighborhood", portuguese: "Vizinhança / Bairro", levels: { B1: { en: "It is a quiet and friendly neighborhood for families.", pt: "É uma vizinhança tranquila e amigável para famílias." } } },
    { english: "Suburb", portuguese: "Subúrbio", levels: { B1: { en: "They moved to the suburb to escape the noise.", pt: "Eles se mudaram para o subúrbio para escapar do barulho." } } },
    { english: "Downtown", portuguese: "Centro da cidade", levels: { B1: { en: "The lively downtown area is full of great restaurants.", pt: "A animada área do centro da cidade é cheia de ótimos restaurantes." } } },
    { english: "Landmark", portuguese: "Ponto de referência", levels: { B1: { en: "The ancient clock tower is a famous historical landmark.", pt: "A antiga torre do relógio é um famoso ponto de referência histórico." } } }
  ],
  "animais": [
    { english: "Wildlife", portuguese: "Vida selvagem", levels: { B1: { en: "The documentary beautifully captured the amazing African wildlife.", pt: "O documentário capturou lindamente a incrível vida selvagem africana." } } },
    { english: "Mammal", portuguese: "Mamífero", levels: { B1: { en: "The blue whale is the largest mammal on Earth.", pt: "A baleia azul é o maior mamífero da Terra." } } },
    { english: "Predator", portuguese: "Predador", levels: { B1: { en: "The lion is an apex predator in the savanna.", pt: "O leão é um predador no topo da cadeia na savana." } } },
    { english: "Prey", portuguese: "Presa", levels: { B1: { en: "The fast cheetah chased its prey across the grass.", pt: "A chita veloz perseguiu sua presa pela grama." } } },
    { english: "Habitat", portuguese: "Habitat", levels: { B1: { en: "Deforestation is severely threatening the natural habitat of monkeys.", pt: "O desmatamento está ameaçando severamente o habitat natural dos macacos." } } },
    { english: "Species", portuguese: "Espécie", levels: { B1: { en: "Scientists discovered a completely new species of butterfly recently.", pt: "Cientistas descobriram uma espécie de borboleta completamente nova recentemente." } } },
    { english: "Breed", portuguese: "Raça (animais)", levels: { B1: { en: "The Golden Retriever is a highly intelligent dog breed.", pt: "O Golden Retriever é uma raça de cachorro altamente inteligente." } } },
    { english: "Veterinary", portuguese: "Veterinário(a) (clínica)", levels: { B1: { en: "She took her sick pet to the veterinary clinic.", pt: "Ela levou seu animal de estimação doente à clínica veterinária." } } }
  ],
  "culinaria": [
    { english: "Cuisine", portuguese: "Culinária", levels: { B1: { en: "Italian cuisine is incredibly popular all over the world.", pt: "A culinária italiana é incrivelmente popular no mundo todo." } } },
    { english: "Ingredient", portuguese: "Ingrediente", levels: { B1: { en: "You need specific organic ingredients for this complex dish.", pt: "Você precisa de ingredientes orgânicos específicos para este prato complexo." } } },
    { english: "Flavor", portuguese: "Sabor", levels: { B1: { en: "The rich vanilla flavor is evident in this dessert.", pt: "O rico sabor de baunilha é evidente nesta sobremesa." } } },
    { english: "Aroma", portuguese: "Aroma", levels: { B1: { en: "The delicious aroma of fresh coffee filled the room.", pt: "O delicioso aroma de café fresco encheu a sala." } } },
    { english: "Seasoning", portuguese: "Tempero", levels: { B1: { en: "The chef added secret seasoning to enhance the taste.", pt: "O chef adicionou um tempero secreto para realçar o sabor." } } },
    { english: "Appetizer", portuguese: "Aperitivo / Entrada", levels: { B1: { en: "We ordered garlic bread as an appetizer before dinner.", pt: "Pedimos pão de alho como aperitivo antes do jantar." } } },
    { english: "Beverage", portuguese: "Bebida", levels: { B1: { en: "The restaurant offers a variety of alcoholic and non-alcoholic beverages.", pt: "O restaurante oferece uma variedade de bebidas alcoólicas e não alcoólicas." } } },
    { english: "Portion", portuguese: "Porção", levels: { B1: { en: "The restaurant serves huge portions of food to customers.", pt: "O restaurante serve enormes porções de comida aos clientes." } } }
  ],
  "tecnologia": [
    { english: "Device", portuguese: "Dispositivo", levels: { B1: { en: "This electronic device tracks your daily physical activities automatically.", pt: "Este dispositivo eletrônico rastreia suas atividades físicas diárias automaticamente." } } },
    { english: "Gadget", portuguese: "Aparelho / Engenhoca", levels: { B1: { en: "He always buys the latest tech gadget available online.", pt: "Ele sempre compra a última engenhoca tecnológica disponível online." } } },
    { english: "Software", portuguese: "Software", levels: { B1: { en: "The new software update fixed all the security issues.", pt: "A nova atualização de software corrigiu todos os problemas de segurança." } } },
    { english: "Hardware", portuguese: "Hardware", levels: { B1: { en: "You need powerful hardware to run this demanding game.", pt: "Você precisa de um hardware potente para rodar este jogo exigente." } } },
    { english: "Network", portuguese: "Rede", levels: { B1: { en: "The corporate network was down for maintenance all day.", pt: "A rede corporativa esteve inativa para manutenção o dia todo." } } },
    { english: "Database", portuguese: "Banco de dados", levels: { B1: { en: "Customer information is stored securely in the central database.", pt: "As informações do cliente são armazenadas com segurança no banco de dados central." } } },
    { english: "Algorithm", portuguese: "Algoritmo", levels: { B1: { en: "The search algorithm prioritizes highly relevant and recent content.", pt: "O algoritmo de busca prioriza conteúdo altamente relevante e recente." } } },
    { english: "Innovation", portuguese: "Inovação", levels: { B1: { en: "Technological innovation has completely transformed the modern banking sector.", pt: "A inovação tecnológica transformou completamente o setor bancário moderno." } } }
  ],
  "redes-sociais": [
    { english: "Platform", portuguese: "Plataforma", levels: { B1: { en: "This social media platform connects professionals worldwide.", pt: "Esta plataforma de mídia social conecta profissionais no mundo todo." } } },
    { english: "Influencer", portuguese: "Influenciador", levels: { B1: { en: "The famous influencer partnered with an international beauty brand.", pt: "O famoso influenciador fez parceria com uma marca de beleza internacional." } } },
    { english: "Viral", portuguese: "Viral", levels: { B1: { en: "His humorous video went completely viral across multiple platforms.", pt: "Seu vídeo humorístico se tornou completamente viral em várias plataformas." } } },
    { english: "Trending", portuguese: "Em alta / Tendência", levels: { B1: { en: "The news about the election is trending on Twitter.", pt: "As notícias sobre a eleição estão em alta no Twitter." } } },
    { english: "Engagement", portuguese: "Engajamento", levels: { B1: { en: "Interactive posts usually generate much higher user engagement.", pt: "Postagens interativas geralmente geram um engajamento do usuário muito maior." } } },
    { english: "Notification", portuguese: "Notificação", levels: { B1: { en: "I turned off the annoying notification sounds on my phone.", pt: "Eu desliguei os sons irritantes de notificação no meu telefone." } } },
    { english: "Content", portuguese: "Conteúdo", levels: { B1: { en: "Creators must constantly produce engaging content for their audience.", pt: "Os criadores devem produzir constantemente conteúdo envolvente para seu público." } } },
    { english: "Troll", portuguese: "Troll (internet)", levels: { B1: { en: "The anonymous troll left offensive comments on her profile.", pt: "O troll anônimo deixou comentários ofensivos no perfil dela." } } }
  ]
};

const path2 = './data/scenarios2.ts';
let content = fs.readFileSync(path2, 'utf-8');

let changedCount = 0;

for (const [word, updates] of Object.entries(b1Replacements)) {
  const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  
  // Find the word block and remove B1
  const blockRegex = new RegExp(`(\\{\\s*english:\\s*["'\`]${escapedWord}["'\`][\\s\\S]*?)(B1:\\s*\\{[^}]*\\}\\s*,?\\s*)(\\})`, 'g');
  content = content.replace(blockRegex, (match, beforeB1, b1Block, afterB1) => {
    return beforeB1.trim().replace(/,\s*$/, '') + "\n                      " + afterB1;
  });

  // Now replace A2
  const a2Regex = new RegExp(`(english:\\s*["'\`]${escapedWord}["'\`][\\s\\S]*?A2:\\s*\\{\\s*en:\\s*["'\`])[^"'\`]+(["'\`]\\s*,\\s*pt:\\s*["'\`])[^"'\`]+(["'\`]\\s*\\})`, 'g');
  
  content = content.replace(a2Regex, (match, prefix, mid, suffix) => {
    changedCount++;
    return `${prefix}${updates.en}${mid}${updates.pt}${suffix}`;
  });
}

for (const [scenarioId, words] of Object.entries(b1NewVocab)) {
  const vocabEndRegex = new RegExp(`(id:\\s*["']${scenarioId}["'][\\s\\S]*?vocabulary:\\s*\\[[\\s\\S]*?)(?=\\s*],\\s*(?:flashcards|quiz|dialogue|trueOrFalse|speakingPractice|usefulExpressions))`);
  content = content.replace(vocabEndRegex, (match, prefix) => {
    let b1String = '';
    for (const item of words) {
      b1String += `,\n      { english: "${item.english}", portuguese: "${item.portuguese}",\n          levels: { \n                        B1: { en: "${item.levels.B1.en}", pt: "${item.levels.B1.pt}" } \n                      }\n    }`;
    }
    return prefix + b1String;
  });
}

fs.writeFileSync(path2, content, 'utf-8');
console.log(`Updated ${changedCount} A2 items and injected B1 words for scenarios2.ts.`);
