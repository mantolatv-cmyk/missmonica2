import type { Scenario } from "./types";

export const reviewScenarios: Scenario[] = [
  {
    id: "revisao-1",
    title: "Review 1",
    titlePt: "Revisão 1",
    description: "Review of the first 5 topics.",
    descriptionPt: "Revisão dos primeiros 5 tópicos.",
    icon: "Star",
    image: "/images/review.png",
    color: "amber",
    available: true,
    vocabulary: [
      { english: "Son", portuguese: "Filho", levels: { A1: { en: "My son plays in the yard.", pt: "Meu filho brinca no quintal." }, A2: { en: "My youngest son started elementary school this year.", pt: "Meu filho mais novo começou o ensino fundamental este ano." } } },
      { english: "Only child", portuguese: "Filho(a) único(a)", levels: { B1: { en: "Being an only child means you never have to share your toys.", pt: "Ser filho único significa que você nunca tem que dividir seus brinquedos." } } },
      { english: "Dust", portuguese: "Tirar o pó", levels: { B1: { en: "He forgot to dust the bookshelves while cleaning the room.", pt: "Ele esqueceu de tirar o pó das prateleiras de livros ao limpar a sala." } } },
      { english: "Fold the laundry", portuguese: "Dobrar a roupa", levels: { A1: { en: "Please fold the laundry.", pt: "Por favor, dobre a roupa." }, A2: { en: "She folded the laundry while watching television.", pt: "Ela dobrou a roupa enquanto assistia televisão." } } },
      { english: "Shoulder", portuguese: "Ombro", levels: { A1: { en: "My shoulder is sore.", pt: "Meu ombro está dolorido." }, A2: { en: "She carried the heavy bag on her shoulder.", pt: "Ela carregou a bolsa pesada no ombro." } } },
      { english: "Fix up", portuguese: "Consertar / Restaurar", levels: { B1: { en: "He bought an old car and spent the summer trying to fix it up.", pt: "Ele comprou um carro velho e passou o verão tentando consertá-lo." } } },
      { english: "Spacious", portuguese: "Espaçoso", levels: { B1: { en: "The new house is much more spacious than our old flat.", pt: "A casa nova é muito mais espaçosa que nosso apartamento antigo." } } },
      { english: "Keep in touch", portuguese: "Manter contato", levels: { B1: { en: "Even though she moved away, we still keep in touch.", pt: "Mesmo que ela tenha se mudado, nós ainda mantemos contato." } } },
      { english: "Window", portuguese: "Janela", levels: { A1: { en: "Open the window, please.", pt: "Abra a janela, por favor." }, A2: { en: "He opened the window to let fresh air inside.", pt: "Ele abriu a janela para deixar o ar fresco entrar." } } },
      { english: "Landlord", portuguese: "Senhorio / Dono (do imóvel)", levels: { B1: { en: "Our landlord increases the rent a little bit every year.", pt: "Nosso senhorio aumenta o aluguel um pouquinho todo ano." } } },
      { english: "Attic", portuguese: "Sótão", levels: { A1: { en: "The attic is very dusty.", pt: "O sótão está muito empoeirado." }, A2: { en: "He found an old photograph hidden in the attic.", pt: "Ele encontrou uma fotografia antiga escondida no sótão." } } },
      { english: "Fall out", portuguese: "Brigar / Desentender-se", levels: { B1: { en: "They fell out over a silly argument and stopped talking.", pt: "Eles brigaram por causa de uma discussão boba e pararam de se falar." } } },
      { english: "Make up", portuguese: "Fazer as pazes", levels: { B1: { en: "It is important to apologize and make up after a family fight.", pt: "É importante pedir desculpas e fazer as pazes depois de uma briga de família." } } },
      { english: "Neck", portuguese: "Pescoço", levels: { A1: { en: "Wear a scarf around your neck.", pt: "Use um cachecol no pescoço." }, A2: { en: "He wore a thick scarf around his neck during winter.", pt: "Ele usou um cachecol grosso no pescoço durante o inverno." } } },
      { english: "Turn up", portuguese: "Aumentar (volume/temperatura)", levels: { B1: { en: "Can you turn up the heating? It is getting quite cold in here.", pt: "Você pode aumentar o aquecedor? Está ficando bem frio aqui dentro." } } },
      { english: "Foot / Feet", portuguese: "Pé / Pés", levels: { A1: { en: "My feet are cold.", pt: "Meus pés estão frios." }, A2: { en: "His feet hurt after a long day of walking.", pt: "Os pés dele doíam após um longo dia caminhando." } } },
      { english: "Sink", portuguese: "Pia", levels: { A1: { en: "The sink is full of dishes.", pt: "A pia está cheia de louça." }, A2: { en: "She washed her hands in the kitchen sink.", pt: "Ela lavou as mãos na pia da cozinha." } } },
      { english: "Grandfather", portuguese: "Avô", levels: { A1: { en: "My grandfather loves fishing.", pt: "Meu avô adora pescar." }, A2: { en: "My grandfather collected vintage stamps all his life.", pt: "Meu avô colecionou selos vintage a vida toda." } } },
      { english: "Faucet", portuguese: "Torneira", levels: { A1: { en: "Turn off the faucet to save water.", pt: "Feche a torneira para economizar água." }, A2: { en: "The broken faucet leaked water all night.", pt: "A torneira quebrada vazou água a noite toda." } } },
      { english: "Garden / Yard", portuguese: "Jardim / Quintal", levels: { A1: { en: "The kids play in the yard.", pt: "As crianças brincam no quintal." }, A2: { en: "She planted beautiful roses in the garden last spring.", pt: "Ela plantou lindas rosas no jardim na primavera passada." } } },
      { english: "Throw up", portuguese: "Vomitar", levels: { B1: { en: "He ate some bad seafood and threw up all night.", pt: "Ele comeu frutos do mar estragados e vomitou a noite toda." } } },
      { english: "Fall out", portuguese: "Desentender-se", levels: { B1: { en: "They fell out over a misunderstanding and haven't spoken since.", pt: "Eles se desentenderam por um mal-entendido e não se falam desde então." } } },
      { english: "Chat", portuguese: "Bater papo", levels: { A1: { en: "I like chatting with you.", pt: "Gosto de bater papo com você." }, A2: { en: "I really enjoyed chatting with you about our future plans.", pt: "Eu gostei muito de bater papo com você sobre nossos planos futuros." } } },
      { english: "Hair", portuguese: "Cabelo", levels: { A1: { en: "Her hair is very long.", pt: "O cabelo dela é muito longo." }, A2: { en: "He cut his hair very short last week.", pt: "Ele cortou o cabelo bem curto semana passada." } } },
      { english: "Extended family", portuguese: "Família estendida", levels: { B1: { en: "We invited our entire extended family to the wedding.", pt: "Nós convidamos toda a nossa família estendida para o casamento." } } },
      { english: "Move in", portuguese: "Mudar-se (para dentro)", levels: { B1: { en: "We are going to move in to our new apartment next Saturday.", pt: "Nós vamos nos mudar para o nosso apartamento novo no próximo sábado." } } },
      { english: "Rely on", portuguese: "Contar com / Confiar em", levels: { B1: { en: "You can always rely on me if you need any help.", pt: "Você sempre pode contar comigo se precisar de alguma ajuda." } } },
      { english: "Jaw", portuguese: "Mandíbula", levels: { B1: { en: "The boxer received a heavy punch directly to the jaw.", pt: "O boxeador recebeu um soco pesado direto na mandíbula." } } },
      { english: "Daughter", portuguese: "Filha", levels: { A1: { en: "She is my beautiful daughter.", pt: "Ela é minha linda filha." }, A2: { en: "His oldest daughter learned how to ride a bicycle.", pt: "A filha mais velha dele aprendeu a andar de bicicleta." } } },
      { english: "Best friend", portuguese: "Melhor amigo(a)", levels: { A1: { en: "She is my best friend since childhood.", pt: "Ela é minha melhor amiga desde a infância." }, A2: { en: "She was my most trusted best friend in elementary school.", pt: "Ela era minha melhor amiga de maior confiança no ensino fundamental." } } },
      { english: "Trustworthy", portuguese: "Confiável", levels: { B1: { en: "He is a highly trustworthy friend who keeps secrets well.", pt: "Ele é um amigo altamente confiável que guarda bem segredos." } } },
      { english: "Unplug", portuguese: "Tirar da tomada", levels: { B1: { en: "Always unplug the iron when you are finished using it.", pt: "Sempre tire o ferro da tomada quando terminar de usá-lo." } } },
      { english: "Door", portuguese: "Porta", levels: { A1: { en: "Lock the front door.", pt: "Tranque a porta da frente." }, A2: { en: "She locked the front door before going to bed.", pt: "Ela trancou a porta da frente antes de ir para a cama." } } },
      { english: "Wipe", portuguese: "Limpar / Passar um pano", levels: { B1: { en: "Could you wipe the kitchen table with a damp cloth?", pt: "Você poderia passar um pano na mesa da cozinha com um pano úmido?" } } },
      { english: "Help out", portuguese: "Ajudar", levels: { A1: { en: "Friends always help out.", pt: "Amigos sempre ajudam." }, A2: { en: "True friends always helped out when someone faced a tough phase.", pt: "Verdadeiros amigos sempre ajudavam quando alguém enfrentava uma fase difícil." } } },
      { english: "Swallow", portuguese: "Engolir", levels: { B1: { en: "My throat hurts so much that it is painful to swallow water.", pt: "Minha garganta dói tanto que é doloroso engolir água." } } },
      { english: "Ankle", portuguese: "Tornozelo", levels: { B1: { en: "He twisted his ankle while playing football yesterday.", pt: "Ele torceu o tornozelo enquanto jogava futebol ontem." } } },
      { english: "Joke", portuguese: "Piada / Brincadeira", levels: { A1: { en: "He always tells funny jokes.", pt: "Ele sempre conta piadas engraçadas." }, A2: { en: "He told one of the most hilarious jokes I ever heard.", pt: "Ele contou uma das piadas mais hilárias que já ouvi." } } },
      { english: "Father / Dad", portuguese: "Pai", levels: { A1: { en: "My father works every day.", pt: "Meu pai trabalha todos os dias." }, A2: { en: "My father worked at the same hospital for twenty years.", pt: "Meu pai trabalhou no mesmo hospital por vinte anos." } } },
      { english: "Kitchen", portuguese: "Cozinha", levels: { A1: { en: "I cook in the kitchen.", pt: "Eu cozinho na cozinha." }, A2: { en: "She cooked a delicious meal in the kitchen.", pt: "Ela cozinhou uma refeição deliciosa na cozinha." } } }
    ],
    flashcards: [
      { english: "My mom bakes a cake for me every year.", portuguese: "Minha mãe assa um bolo para mim todos os anos." },
      { english: "A true friend is hard to find.", portuguese: "Um verdadeiro amigo é difícil de encontrar." },
      { english: "She has beautiful green eyes.", portuguese: "Ela tem lindos olhos verdes." },
      { english: "The bedroom is very cold in the morning.", portuguese: "O quarto é muito frio de manhã." },
      { english: "Please sit in the wooden chair.", portuguese: "Por favor, sente-se na cadeira de madeira." },
      { english: "My dad works hard to support our family.", portuguese: "Meu pai trabalha duro para sustentar nossa família." },
      { english: "I trust you completely with this task.", portuguese: "Eu confio em você completamente com esta tarefa." },
      { english: "Keep your mouth closed when you chew.", portuguese: "Mantenha sua boca fechada quando você mastiga." },
      { english: "The bathroom is at the end of the hall.", portuguese: "O banheiro fica no final do corredor." },
      { english: "Open the window to let some fresh air in.", portuguese: "Abra a janela para deixar um ar fresco entrar." },
      { english: "Her husband is a talented musician.", portuguese: "O marido dela é um músico talentoso." },
      { english: "Can you keep a secret from him?", portuguese: "Você consegue guardar um segredo dele?" },
      { english: "He cut his finger while cooking.", portuguese: "Ele cortou o dedo da mão enquanto cozinhava." },
      { english: "Use the broom to sweep the floor.", portuguese: "Use a vassoura para varrer o chão." },
      { english: "Look in the mirror before you leave.", portuguese: "Olhe no espelho antes de sair." },
      { english: "My grandmother tells the best stories.", portuguese: "Minha avó conta as melhores histórias." },
      { english: "I apologize for being late today.", portuguese: "Eu peço desculpas por me atrasar hoje." },
      { english: "He hurt his knee playing soccer.", portuguese: "Ele machucou o joelho jogando futebol." },
      { english: "The kitchen smells like fresh bread.", portuguese: "A cozinha cheira a pão fresco." },
      { english: "We bought a new comfortable sofa.", portuguese: "Nós compramos um novo sofá confortável." }
    ],

    flashcardsA2: [
      { english: "A2 Example Card 1", portuguese: "Exemplo A2 1", example: "This is an A2 level example." },
      { english: "A2 Example Card 2", portuguese: "Exemplo A2 2", example: "Keep practicing at A2 level." },
      { english: "A2 Example Card 3", portuguese: "Exemplo A2 3", example: "You are doing great." }
    ],

    flashcardsB1: [
      { english: "B1 Example Card 1", portuguese: "Exemplo B1 1", example: "This is a B1 level example, representing intermediate proficiency." },
      { english: "B1 Example Card 2", portuguese: "Exemplo B1 2", example: "Furthermore, B1 requires more complex vocabulary." },
      { english: "B1 Example Card 3", portuguese: "Exemplo B1 3", example: "Therefore, keep up the excellent work." }
    ],
    dialogue: [
      { speaker: "A", english: "Mom, where is my friend?", portuguese: "Mãe, onde está meu amigo?", isPrimary: true },
      { speaker: "B", english: "He is in the living room, sitting on the sofa.", portuguese: "Ele está na sala de estar, sentado no sofá.", isPrimary: false },
      { speaker: "A", english: "Oh, I see. I was cleaning the bedroom with the broom.", portuguese: "Ah, entendi. Eu estava limpando o quarto com a vassoura.", isPrimary: true },
      { speaker: "B", english: "Did you wash your hands? Use the bathroom sink.", portuguese: "Você lavou as mãos? Use a pia do banheiro.", isPrimary: false },
      { speaker: "A", english: "Yes, I washed my hands and my fingers. I trust it is clean.", portuguese: "Sim, lavei minhas mãos e meus dedos. Confio que está limpo.", isPrimary: true },
      { speaker: "B", english: "Good. Your grandmother is in the kitchen.", portuguese: "Bom. Sua avó está na cozinha.", isPrimary: false },
      { speaker: "A", english: "I will go see her. I have a secret to tell her.", portuguese: "Vou lá vê-la. Tenho um segredo para contar a ela.", isPrimary: true },
      { speaker: "B", english: "Don't bump your knee on that chair!", portuguese: "Não bata seu joelho naquela cadeira!", isPrimary: false }
    ],
    trueOrFalse: {
      part1: [
        { statement: "You sleep in the bathroom.", statementPt: "Você dorme no banheiro.", isTrue: false, explanation: "You sleep in the bedroom." },
        { statement: "Your father is a male parent.", statementPt: "Seu pai é um genitor masculino.", isTrue: true, explanation: "Father means pai." },
        { statement: "You eat with your mouth.", statementPt: "Você come com a sua boca.", isTrue: true, explanation: "Mouth means boca." },
        { statement: "You sit on a window.", statementPt: "Você senta em uma janela.", isTrue: false, explanation: "You sit on a chair or sofa." },
        { statement: "A friend is someone you trust.", statementPt: "Um amigo é alguém em quem você confia.", isTrue: true, explanation: "Trust means confiar." },
        { statement: "You use your eyes to see.", statementPt: "Você usa seus olhos para ver.", isTrue: true, explanation: "Eyes means olhos." }
      ],
      part2: [
        { statement: "A husband is a female spouse.", statementPt: "Um marido é uma esposa do sexo feminino.", isTrue: false, explanation: "Husband means marido (male spouse)." },
        { statement: "You cook in the kitchen.", statementPt: "Você cozinha na cozinha.", isTrue: true, explanation: "Kitchen means cozinha." },
        { statement: "A mirror is used to clean the floor.", statementPt: "Um espelho é usado para limpar o chão.", isTrue: false, explanation: "A broom is used to clean the floor. A mirror is to see yourself." },
        { statement: "Your knee is part of your arm.", statementPt: "Seu joelho faz parte do seu braço.", isTrue: false, explanation: "Knee is part of your leg." },
        { statement: "When you do something wrong, you apologize.", statementPt: "Quando você faz algo errado, você pede desculpas.", isTrue: true, explanation: "Apologize means pedir desculpas." },
        { statement: "Your grandmother is the mother of your parent.", statementPt: "Sua avó é a mãe do seu genitor.", isTrue: true, explanation: "Grandmother means avó." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Does your mother cook every day?", translation: "Sua mãe cozinha todos os dias?" },
        { question: "Do you have a best friend?", translation: "Você tem um melhor amigo?" },
        { question: "What color are your eyes?", translation: "Qual a cor dos seus olhos?" },
        { question: "Is your bedroom big or small?", translation: "Seu quarto é grande ou pequeno?" },
        { question: "Do you trust your friends?", translation: "Você confia nos seus amigos?" },
        { question: "Are there many chairs in your house?", translation: "Tem muitas cadeiras na sua casa?" },
        { question: "Do you open the window in the morning?", translation: "Você abre a janela de manhã?" }
      ],
      part2: [
        { question: "Do you have a husband or wife?", translation: "Você tem marido ou esposa?" },
        { question: "Are you good at keeping a secret?", translation: "Você é bom em guardar segredo?" },
        { question: "Do you look in the mirror every day?", translation: "Você olha no espelho todos os dias?" },
        { question: "Do you use a broom to clean your house?", translation: "Você usa uma vassoura para limpar sua casa?" },
        { question: "Does your grandmother live with you?", translation: "Sua avó mora com você?" },
        { question: "Is it easy for you to apologize?", translation: "É fácil para você pedir desculpas?" },
        { question: "Do you have a comfortable sofa?", translation: "Você tem um sofá confortável?" }
      ]
    },
    usefulExpressions: [
      { expressionPt: "Como está a sua família?", translationEn: "How is your family?" },
      { expressionPt: "Eu preciso limpar o meu quarto.", translationEn: "I need to clean my bedroom." },
      { expressionPt: "Você tem algum segredo?", translationEn: "Do you have any secrets?" },
      { expressionPt: "Meu joelho está doendo muito.", translationEn: "My knee is hurting a lot." },
      { expressionPt: "Eu confio no meu melhor amigo.", translationEn: "I trust my best friend." },
      { expressionPt: "A vassoura está na cozinha.", translationEn: "The broom is in the kitchen." },
      { expressionPt: "Me desculpe por quebrar o espelho.", translationEn: "I apologize for breaking the mirror." }
    ],
      quiz: [
            { question: 'Translate: "Meu pai está limpando a cozinha com a vassoura."', options: ["My father is cleaning the bathroom with a mop.", "My father is cleaning the kitchen with a broom.", "My brother is cleaning the kitchen with a broom.", "My husband is cleaning the bedroom with a broom."], correctIndex: 1, explanation: '"Kitchen" is cozinha, and "Broom" is vassoura.' },
            { question: 'Translate: "Minha mãe e minha avó estão conversando no sofá."', options: ["My mother and my aunt are talking on the chair.", "My grandmother and my friend are sitting on the sofa.", "My mother and my grandmother are talking on the sofa.", "My father and my grandfather are talking on the sofa."], correctIndex: 2, explanation: '"Mother" is mãe, "Grandmother" is avó, and "Sofa" is sofá.' },
            { question: 'Fill in the blank: "I look at myself in the ________ every morning."', options: ["window", "broom", "kitchen", "mirror"], correctIndex: 3, explanation: 'You look at yourself in a "mirror" (espelho).' },
            { question: 'Translate: "Você consegue guardar um segredo?"', options: ["Can you keep a secret?", "Can you keep a friend?", "Do you have a secret?", "Can you apologize?"], correctIndex: 0, explanation: '"Secret" is segredo.' },
            { question: 'Which sentence is logically correct?', options: ["I eat with my eyes and see with my mouth.", "I see with my eyes and eat with my mouth.", "I walk with my mouth and eat with my knee.", "I see with my finger and eat with my knee."], correctIndex: 1, explanation: 'You use "eyes" (olhos) to see, and "mouth" (boca) to eat.' },
            { question: 'Fill in the blank: "He fell and hurt his ________."', options: ["chair", "sofa", "knee", "window"], correctIndex: 2, explanation: 'He hurt his "knee" (joelho).' },
            { question: 'Translate: "Por favor, abra a janela do quarto."', options: ["Please open the window of the bathroom.", "Please close the window of the bedroom.", "Please open the door of the bedroom.", "Please open the window of the bedroom."], correctIndex: 3, explanation: '"Window" is janela, and "Bedroom" is quarto.' },
            { question: 'Complete the dialogue:\\nA: "I broke your favorite cup."\\nB: "You should..."', options: ["apologize.", "trust me.", "sit on the chair.", "go to the kitchen."], correctIndex: 0, explanation: 'When you break something, you should "apologize" (pedir desculpas).' },
            { question: 'Fill in the blank: "My sister\'s husband is a good ________."', options: ["friend", "grandmother", "bathroom", "broom"], correctIndex: 0, explanation: 'A husband can be a good "friend" (amigo).' },
            { question: 'Which sentence correctly uses the word "trust"?', options: ["I trust my broom to cook dinner.", "I trust my best friend completely.", "I trust my knee to open the window.", "I trust the sofa to clean the house."], correctIndex: 1, explanation: '"Trust" means confiar. You trust a friend.' },
          ]
},
  {
    id: "revisao-2",
    title: "Review 2",
    titlePt: "Revisão 2",
    description: "Review of topics 6 to 10.",
    descriptionPt: "Revisão dos tópicos 6 ao 10.",
    icon: "Star",
    image: "/images/review.png",
    color: "amber",
    available: true,
    vocabulary: [
      { english: "Go hiking", portuguese: "Fazer trilha", levels: { A1: { en: "We go hiking in the mountains.", pt: "Nós fazemos trilha nas montanhas." }, A2: { en: "They went hiking in the national park yesterday.", pt: "Eles fizeram trilha no parque nacional ontem." } } },
      { english: "Cheer", portuguese: "Torcer / Animar", levels: { B1: { en: "The crowd started to cheer loudly when their team scored.", pt: "A multidão começou a torcer alto quando o time deles marcou." } } },
      { english: "Tennis", portuguese: "Tênis", levels: { A1: { en: "She plays tennis on weekends.", pt: "Ela joga tênis nos fins de semana." }, A2: { en: "She played tennis with her brother yesterday.", pt: "Ela jogou tênis com seu irmão ontem." } } },
      { english: "Product", portuguese: "Produto", levels: { A1: { en: "This is a new product.", pt: "Este é um produto novo." }, A2: { en: "The supermarket introduced a new product in the dairy section.", pt: "O supermercado lançou um produto novo na seção de laticínios." } } },
      { english: "Afford", portuguese: "Ter condições de pagar", levels: { B1: { en: "I want the premium brand, but I can only afford the generic one right now.", pt: "Eu quero a marca premium, mas só tenho condições de pagar a genérica agora." } } },
      { english: "Play guitar", portuguese: "Tocar violão", levels: { A1: { en: "He plays guitar in a band.", pt: "Ele toca violão em uma banda." }, A2: { en: "She played the guitar beautifully at the concert.", pt: "Ela tocou violão lindamente no show." } } },
      { english: "Basketball", portuguese: "Basquete", levels: { A1: { en: "He plays basketball.", pt: "Ele joga basquete." }, A2: { en: "They practiced basketball every day after school.", pt: "Eles praticavam basquete todo dia depois da escola." } } },
      { english: "Price", portuguese: "Preço", levels: { A1: { en: "The price is too high.", pt: "O preço está muito alto." }, A2: { en: "The price is too high.", pt: "O preço está muito alto." }, B1: { en: "She checked the price before adding the item to her cart.", pt: "Ela verificou o preço antes de adicionar o item ao seu carrinho." } } },
      { english: "Gift", portuguese: "Presente", levels: { A1: { en: "This is a gift for you.", pt: "Isto é um presente para você." }, A2: { en: "They bought a special gift for their parents.", pt: "Eles compraram um presente especial para os pais deles." } } },
      { english: "Out of stock", portuguese: "Esgotado / Sem estoque", levels: { B1: { en: "I'm sorry, but that specific model is currently out of stock.", pt: "Sinto muito, mas aquele modelo específico está atualmente esgotado." } } },
      { english: "Suit", portuguese: "Cair bem / Combinar (estilo)", levels: { B1: { en: "That blue dress really suits you perfectly.", pt: "Aquele vestido azul realmente te cai perfeitamente." } } },
      { english: "Apply for", portuguese: "Candidatar-se a", levels: { B1: { en: "She decided to apply for the manager position in the company.", pt: "Ela decidiu se candidatar à vaga de gerente na empresa." } } },
      { english: "Into", portuguese: "Gostar muito de algo", levels: { B1: { en: "I am really into science fiction movies right now.", pt: "Eu estou gostando muito de filmes de ficção científica agora." } } },
      { english: "Fire", portuguese: "Demitir", levels: { B1: { en: "They had to fire him because he was consistently late for work.", pt: "Eles tiveram que demiti-lo porque ele estava consistentemente atrasado para o trabalho." } } },
      { english: "Win", portuguese: "Vencer / Ganhar", levels: { A1: { en: "We want to win the cup.", pt: "Nós queremos vencer a copa." }, A2: { en: "They won the gold medal at the Olympics.", pt: "Eles venceram a medalha de ouro nas Olimpíadas." } } },
      { english: "Hire", portuguese: "Contratar", levels: { B1: { en: "They want to hire five new developers by the end of the year.", pt: "Eles querem contratar cinco novos desenvolvedores até o final do ano." } } },
      { english: "Shopping cart", portuguese: "Carrinho de compras", levels: { A1: { en: "Get a shopping cart, please.", pt: "Pegue um carrinho, por favor." }, A2: { en: "He pushed the heavy shopping cart down the aisle.", pt: "Ele empurrou o carrinho de compras pesado pelo corredor." } } },
      { english: "Cash", portuguese: "Dinheiro (em espécie)", levels: { A1: { en: "I pay with cash.", pt: "Eu pago em dinheiro." }, A2: { en: "I didn't have enough cash, so I used my credit card.", pt: "Eu não tinha dinheiro em espécie suficiente, então usei meu cartão de crédito." } } },
      { english: "Rule", portuguese: "Regra", levels: { A1: { en: "This is a simple rule.", pt: "Esta é uma regra simples." }, A2: { en: "The referee explained a new rule before the match started.", pt: "O árbitro explicou uma regra nova antes de a partida começar." } } },
      { english: "Give up", portuguese: "Desistir", levels: { B1: { en: "Even though they were losing by three goals, the team refused to give up.", pt: "Mesmo perdendo por três gols, a equipe se recusou a desistir." } } },
      { english: "Dress", portuguese: "Vestido", levels: { A1: { en: "She bought a red dress.", pt: "Ela comprou um vestido vermelho." }, A2: { en: "She wore a stunning red dress to the party.", pt: "Ela usou um vestido vermelho deslumbrante na festa." } } },
      { english: "Receipt", portuguese: "Recibo / Nota fiscal", levels: { A1: { en: "Here is your receipt.", pt: "Aqui está o seu recibo." }, A2: { en: "The cashier gave me the receipt and a friendly smile.", pt: "A caixa me deu o recibo e um sorriso amigável." } } },
      { english: "Dance", portuguese: "Dançar", levels: { A1: { en: "We go out to dance on Fridays.", pt: "Nós saímos para dançar às sextas." }, A2: { en: "We danced all night at the wedding reception.", pt: "Nós dançamos a noite toda na festa de casamento." } } },
      { english: "Knit", portuguese: "Tricotar", levels: { A1: { en: "My grandmother likes to knit.", pt: "Minha avó gosta de tricotar." }, A2: { en: "My grandmother knitted a warm sweater for me.", pt: "Minha avó tricotou um suéter quente para mim." } } },
      { english: "Fitting room", portuguese: "Provador", levels: { A1: { en: "The fitting room is over there.", pt: "O provador é ali." }, A2: { en: "He waited outside the fitting room for ten minutes.", pt: "Ele esperou do lado de fora do provador por dez minutos." } } },
      { english: "Waiter", portuguese: "Garçom", levels: { A1: { en: "The waiter brings our food.", pt: "O garçom traz nossa comida." }, A2: { en: "The polite waiter served the food with a smile.", pt: "O garçom educado serviu a comida com um sorriso." } } },
      { english: "Promote", portuguese: "Promover", levels: { B1: { en: "After three years of hard work, he was finally promoted to supervisor.", pt: "Depois de três anos de trabalho duro, ele finalmente foi promovido a supervisor." } } },
      { english: "Give up", portuguese: "Desistir / Parar de fazer", levels: { B1: { en: "He used to play the guitar, but he gave it up when he started university.", pt: "Ele costumava tocar violão, mas parou quando começou a universidade." } } },
      { english: "Compete", portuguese: "Competir", levels: { B1: { en: "Over fifty athletes will compete in the final race.", pt: "Mais de cinquenta atletas vão competir na corrida final." } } },
      { english: "Wrap up", portuguese: "Embrulhar", levels: { B1: { en: "Could you please wrap this up as a birthday gift?", pt: "Você poderia embrulhar isso como um presente de aniversário, por favor?" } } },
      { english: "Perform", portuguese: "Apresentar-se / Atuar", levels: { B1: { en: "Her dream is to perform on a Broadway stage one day.", pt: "O sonho dela é se apresentar em um palco da Broadway um dia." } } },
      { english: "Police officer", portuguese: "Policial", levels: { A1: { en: "The police officer helps us.", pt: "O policial nos ajuda." }, A2: { en: "The brave police officer stopped the thief.", pt: "O policial corajoso parou o ladrão." } } },
      { english: "Doctor", portuguese: "Médico(a)", levels: { A1: { en: "The doctor checks the patient.", pt: "O médico checa o paciente." }, A2: { en: "The experienced doctor successfully treated the patient.", pt: "O médico experiente tratou o paciente com sucesso." } } },
      { english: "Work out", portuguese: "Malhar / Fazer exercício", levels: { B1: { en: "He goes to the gym to work out three times a week.", pt: "Ele vai à academia para malhar três vezes na semana." } } },
      { english: "Fit", portuguese: "Servir / Caber (tamanho)", levels: { B1: { en: "This jacket doesn't fit me anymore; it's too tight.", pt: "Esta jaqueta não me serve mais; está muito apertada." } } },
      { english: "Refund", portuguese: "Reembolso", levels: { B1: { en: "The product was expired, so I went back to the store to ask for a refund.", pt: "O produto estava vencido, então voltei à loja para pedir um reembolso." } } },
      { english: "Company", portuguese: "Empresa", levels: { A1: { en: "She works for a big company.", pt: "Ela trabalha para uma grande empresa." }, A2: { en: "The technology company launched a new software product.", pt: "A empresa de tecnologia lançou um novo produto de software." } } },
      { english: "Discount", portuguese: "Desconto", levels: { B1: { en: "They offered a twenty percent discount on all dairy products.", pt: "Eles ofereceram vinte por cento de desconto em todos os laticínios." } } },
      { english: "Rip off", portuguese: "Exploração / Preço abusivo", levels: { B1: { en: "Twenty dollars for a small bottle of water is a complete rip-off.", pt: "Vinte dólares por uma pequena garrafa de água é uma verdadeira exploração." } } },
      { english: "Skill", portuguese: "Habilidade", levels: { B1: { en: "Learning a new language is a very useful skill.", pt: "Aprender um novo idioma é uma habilidade muito útil." } } }
    ],

    quizA2: [
      { question: "A2 Dummy Question 1?", options: ["Option A", "Option B", "Option C"], correctIndex: 0, explanation: "A2 Explanation 1" },
      { question: "A2 Dummy Question 2?", options: ["Option A", "Option B", "Option C"], correctIndex: 1, explanation: "A2 Explanation 2" }
    ],

    quizB1: [
      { question: "B1 Dummy Question 1 (Intermediate)?", options: ["Option A", "Option B", "Option C"], correctIndex: 0, explanation: "B1 Explanation 1" },
      { question: "B1 Dummy Question 2 (Intermediate)?", options: ["Option A", "Option B", "Option C"], correctIndex: 1, explanation: "B1 Explanation 2" }
    ],
    flashcards: [
      { english: "Reading a good book relaxes my mind.", portuguese: "Ler um bom livro relaxa minha mente." },
      { english: "Our team won the championship this year.", portuguese: "Nosso time ganhou o campeonato este ano." },
      { english: "The shopping cart is full of groceries.", portuguese: "O carrinho de compras está cheio de mantimentos." },
      { english: "I lost my leather wallet yesterday.", portuguese: "Eu perdi minha carteira de couro ontem." },
      { english: "Finding a new job can be stressful.", portuguese: "Encontrar um novo trabalho pode ser estressante." },
      { english: "Listening to music helps me concentrate.", portuguese: "Ouvir música me ajuda a concentrar." },
      { english: "He is the best player on the field.", portuguese: "Ele é o melhor jogador no campo." },
      { english: "The price of this car is too high.", portuguese: "O preço deste carro é muito alto." },
      { english: "The store closes at nine o'clock.", portuguese: "A loja fecha às nove horas." },
      { english: "The teacher explained the lesson clearly.", portuguese: "A professora explicou a lição claramente." },
      { english: "I want to travel around the world.", portuguese: "Eu quero viajar pelo mundo." },
      { english: "Swimming is an excellent exercise.", portuguese: "Natação é um exercício excelente." },
      { english: "I prefer eating vegetables instead of meat.", portuguese: "Eu prefiro comer vegetais em vez de carne." },
      { english: "Do you accept credit card payments?", portuguese: "Vocês aceitam pagamentos com cartão de crédito?" },
      { english: "The engineer designed a safe bridge.", portuguese: "O engenheiro projetou uma ponte segura." },
      { english: "He bought a professional camera for his trip.", portuguese: "Ele comprou uma câmera profissional para sua viagem." },
      { english: "The cat can jump over the tall fence.", portuguese: "O gato consegue pular por cima da cerca alta." },
      { english: "I put the frozen pizza in the oven.", portuguese: "Eu coloquei a pizza congelada no forno." },
      { english: "Those shoes are on sale right now.", portuguese: "Aqueles sapatos estão na promoção agora mesmo." },
      { english: "The meeting will start in ten minutes.", portuguese: "A reunião vai começar em dez minutos." }
    ],

    flashcardsA2: [
      { english: "A2 Example Card 1", portuguese: "Exemplo A2 1", example: "This is an A2 level example." },
      { english: "A2 Example Card 2", portuguese: "Exemplo A2 2", example: "Keep practicing at A2 level." },
      { english: "A2 Example Card 3", portuguese: "Exemplo A2 3", example: "You are doing great." }
    ],

    flashcardsB1: [
      { english: "B1 Example Card 1", portuguese: "Exemplo B1 1", example: "This is a B1 level example, representing intermediate proficiency." },
      { english: "B1 Example Card 2", portuguese: "Exemplo B1 2", example: "Furthermore, B1 requires more complex vocabulary." },
      { english: "B1 Example Card 3", portuguese: "Exemplo B1 3", example: "Therefore, keep up the excellent work." }
    ],
    dialogue: [
      { speaker: "A", english: "Are you ready for the meeting with the engineer?", portuguese: "Você está pronto para a reunião com o engenheiro?", isPrimary: true },
      { speaker: "B", english: "Yes, but I need to go to the store first. I left my wallet in the car.", portuguese: "Sim, mas eu preciso ir na loja primeiro. Deixei minha carteira no carro.", isPrimary: false },
      { speaker: "A", english: "Did you buy the book about travel?", portuguese: "Você comprou o livro sobre viagem?", isPrimary: true },
      { speaker: "B", english: "Yes, it was on sale. The price was very good.", portuguese: "Sim, estava na promoção. O preço estava muito bom.", isPrimary: false },
      { speaker: "A", english: "Great. After work, my soccer team has a game.", portuguese: "Ótimo. Depois do trabalho, meu time de futebol tem um jogo.", isPrimary: true },
      { speaker: "B", english: "I hope your best player can jump high! I will go swimming instead.", portuguese: "Espero que seu melhor jogador consiga pular alto! Eu vou nadar em vez disso.", isPrimary: false },
      { speaker: "A", english: "Don't forget to buy meat at the supermarket. Use the shopping cart.", portuguese: "Não se esqueça de comprar carne no supermercado. Use o carrinho de compras.", isPrimary: true },
      { speaker: "B", english: "I will use my credit card to buy frozen food too. See you later!", portuguese: "Vou usar meu cartão de crédito para comprar comida congelada também. Até mais!", isPrimary: false }
    ],
    trueOrFalse: {
      part1: [
        { statement: "You read a book.", statementPt: "Você lê um livro.", isTrue: true, explanation: "Book means livro." },
        { statement: "A team plays against itself.", statementPt: "Um time joga contra si mesmo.", isTrue: false, explanation: "A team plays against another team." },
        { statement: "You keep money in a wallet.", statementPt: "Você guarda dinheiro numa carteira.", isTrue: true, explanation: "Wallet means carteira." },
        { statement: "A teacher goes to a hospital to work.", statementPt: "Um professor vai a um hospital para trabalhar.", isTrue: false, explanation: "A teacher works at a school." },
        { statement: "You use a shopping cart at the supermarket.", statementPt: "Você usa um carrinho de compras no supermercado.", isTrue: true, explanation: "Shopping cart means carrinho de compras." },
        { statement: "Music is something you eat.", statementPt: "Música é algo que você come.", isTrue: false, explanation: "You listen to music. You don't eat it." }
      ],
      part2: [
        { statement: "You need a passport to travel to another country.", statementPt: "Você precisa de um passaporte para viajar para outro país.", isTrue: true, explanation: "Travel means viajar." },
        { statement: "An engineer studies medicine.", statementPt: "Um engenheiro estuda medicina.", isTrue: false, explanation: "An engineer builds and designs things. A doctor studies medicine." },
        { statement: "You use a credit card to pay for things.", statementPt: "Você usa um cartão de crédito para pagar pelas coisas.", isTrue: true, explanation: "Credit card means cartão de crédito." },
        { statement: "Meat is a type of vegetable.", statementPt: "A carne é um tipo de vegetal.", isTrue: false, explanation: "Meat comes from animals." },
        { statement: "When items are on sale, they are more expensive.", statementPt: "Quando os itens estão em promoção, eles são mais caros.", isTrue: false, explanation: "On sale means they are cheaper." },
        { statement: "You have a meeting with your boss.", statementPt: "Você tem uma reunião com o seu chefe.", isTrue: true, explanation: "Meeting means reunião." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "What is your favorite book?", translation: "Qual é o seu livro favorito?" },
        { question: "Do you have a job you like?", translation: "Você tem um trabalho que você gosta?" },
        { question: "Do you always use a shopping cart?", translation: "Você sempre usa um carrinho de compras?" },
        { question: "Do you keep your wallet in your pocket or your bag?", translation: "Você guarda sua carteira no bolso ou na bolsa?" },
        { question: "Who was your favorite teacher?", translation: "Quem foi o seu professor favorito?" },
        { question: "What kind of music do you like?", translation: "Que tipo de música você gosta?" },
        { question: "Do you play in any sports team?", translation: "Você joga em algum time de esportes?" }
      ],
      part2: [
        { question: "Do you prefer to travel by car or plane?", translation: "Você prefere viajar de carro ou avião?" },
        { question: "Have you ever used a credit card?", translation: "Você já usou um cartão de crédito?" },
        { question: "Do you know how to use a professional camera?", translation: "Você sabe usar uma câmera profissional?" },
        { question: "Do you like to eat meat?", translation: "Você gosta de comer carne?" },
        { question: "Do you think an engineer makes a lot of money?", translation: "Você acha que um engenheiro ganha muito dinheiro?" },
        { question: "Do you have many meetings at work?", translation: "Você tem muitas reuniões no trabalho?" },
        { question: "Do you always buy things when they are on sale?", translation: "Você sempre compra coisas quando estão na promoção?" }
      ]
    },
    usefulExpressions: [
      { expressionPt: "Quanto custa este livro?", translationEn: "How much does this book cost?" },
      { expressionPt: "Eu adoro viajar e nadar no mar.", translationEn: "I love to travel and swim in the sea." },
      { expressionPt: "Onde fica o carrinho de compras?", translationEn: "Where is the shopping cart?" },
      { expressionPt: "A carne está na promoção hoje.", translationEn: "The meat is on sale today." },
      { expressionPt: "O engenheiro tem uma reunião importante.", translationEn: "The engineer has an important meeting." },
      { expressionPt: "Posso pagar com cartão de crédito?", translationEn: "Can I pay with a credit card?" },
      { expressionPt: "O time jogou muito bem.", translationEn: "The team played very well." }
    ],
      quiz: [
            { question: 'Translate: "O carrinho de compras está cheio de carne congelada."', options: ["The shopping cart is full of fresh meat.", "The shopping cart is full of frozen meat.", "The shopping cart is full of frozen vegetables.", "The wallet is full of frozen meat."], correctIndex: 1, explanation: '"Shopping cart" is carrinho de compras, "frozen" is congelada, and "meat" is carne.' },
            { question: 'Fill in the blank: "The ________ designed a new building for the city."', options: ["teacher", "player", "engineer", "shopping cart"], correctIndex: 2, explanation: 'An "engineer" (engenheiro) designs buildings.' },
            { question: 'Translate: "Esses sapatos estão na promoção, mas o preço ainda é alto."', options: ["Those shoes are on sale, but the price is still high.", "Those shoes are cheap, but the price is high.", "Those shoes are on sale, but the credit card is full.", "That book is on sale, but the price is high."], correctIndex: 0, explanation: '"On sale" is na promoção, and "price" is preço.' },
            { question: 'Which sentence describes a "Teacher"?', options: ["Someone who cooks meat at a restaurant.", "Someone who helps students learn new things.", "Someone who plays on a sports team.", "Someone who fixes cameras and wallets."], correctIndex: 1, explanation: 'A "Teacher" (professor) helps students learn.' },
            { question: 'Fill in the blank: "I forgot my ________, so I can\'t pay for the food."', options: ["music", "meeting", "wallet", "jump"], correctIndex: 2, explanation: 'You keep money in your "wallet" (carteira).' },
            { question: 'Translate: "Nós vamos viajar para outro país para uma reunião."', options: ["We will travel to another country for a meeting.", "We will go to the store for a meeting.", "We will jump to another country for a meeting.", "We will travel to another country for swimming."], correctIndex: 0, explanation: '"Travel" is viajar, and "meeting" is reunião.' },
            { question: 'Which sentence correctly uses the word "Camera"?', options: ["I used my camera to buy frozen food.", "I used my camera to listen to music.", "I used my camera to take pictures of our team.", "I used my camera to pay with a credit card."], correctIndex: 2, explanation: 'You use a "camera" (câmera) to take pictures.' },
            { question: 'Complete the sentence: "The basketball ________ can ________ very high."', options: ["teacher / travel", "engineer / swim", "player / jump", "meeting / jump"], correctIndex: 2, explanation: 'A basketball "player" (jogador) can "jump" (pular).' },
            { question: 'Translate: "Posso pagar com cartão de crédito nesta loja?"', options: ["Can I pay with money in this store?", "Can I pay with credit card in this meeting?", "Can I pay with credit card in this store?", "Can I buy meat with cash in this store?"], correctIndex: 2, explanation: '"Credit card" is cartão de crédito, and "store" is loja.' },
            { question: 'Fill in the blank: "Reading a good ________ and listening to ________ relaxes me."', options: ["wallet / meetings", "book / music", "shopping cart / players", "camera / swimming"], correctIndex: 1, explanation: 'You read a "book" (livro) and listen to "music" (música).' },
          ]
},
  {
    id: "revisao-3",
    title: "Review 3",
    titlePt: "Revisão 3",
    description: "Review of topics 11 to 15.",
    descriptionPt: "Revisão dos tópicos 11 ao 15.",
    icon: "Star",
    image: "/images/review.png",
    color: "amber",
    available: true,
    vocabulary: [
      { english: "Bird", portuguese: "Pássaro", levels: { A1: { en: "I hear a bird.", pt: "Eu ouço um pássaro." }, A2: { en: "The rare bird flew high above the dense forest.", pt: "O pássaro raro voou alto sobre a floresta densa." } } },
      { english: "Ingredients", portuguese: "Ingredientes", levels: { B1: { en: "Make sure you have all the ingredients before you start cooking.", pt: "Certifique-se de ter todos os ingredientes antes de começar a cozinhar." } } },
      { english: "Log in", portuguese: "Entrar / Fazer login", levels: { A1: { en: "I need to log in first.", pt: "Eu preciso fazer login primeiro." }, A2: { en: "He tried to log in, but he couldn't remember his email.", pt: "Ele tentou fazer login, mas não conseguiu lembrar do seu e-mail." } } },
      { english: "Bake", portuguese: "Assar (bolos/pães)", levels: { A1: { en: "We bake chocolate chip cookies.", pt: "Nós assamos cookies de chocolate." }, A2: { en: "He baked a delicious chocolate cake for the party.", pt: "Ele assou um bolo de chocolate delicioso para a festa." } } },
      { english: "Monkey", portuguese: "Macaco", levels: { A1: { en: "The monkey climbs the tree.", pt: "O macaco sobe na árvore." }, A2: { en: "The clever monkey swung effortlessly from branch to branch.", pt: "O macaco esperto balançou sem esforço de galho em galho." } } },
      { english: "Corner", portuguese: "Esquina", levels: { A1: { en: "Turn right at the corner.", pt: "Vire à direita na esquina." }, A2: { en: "The coffee shop opened on the corner of the busy street.", pt: "A cafeteria abriu na esquina da rua movimentada." } } },
      { english: "Feed", portuguese: "Alimentar", levels: { B1: { en: "Don't forget to feed the fish twice a day with these special flakes.", pt: "Não se esqueça de alimentar os peixes duas vezes ao dia com estes flocos especiais." } } },
      { english: "Drop off", portuguese: "Deixar (alguém/algo) em algum lugar", levels: { B1: { en: "Could you please drop me off at the airport at six o'clock?", pt: "Você poderia por favor me deixar no aeroporto às seis horas?" } } },
      { english: "Walk the dog", portuguese: "Passear com o cachorro", levels: { A1: { en: "I need to walk the dog now.", pt: "Eu preciso passear com o cachorro agora." }, A2: { en: "He walked the dog around the park every evening.", pt: "Ele passeava com o cachorro pelo parque toda noite." } } },
      { english: "Bite", portuguese: "Morder", levels: { A1: { en: "Be careful, the dog might bite.", pt: "Cuidado, o cachorro pode morder." }, A2: { en: "The frightened dog bit the stranger's hand unexpectedly.", pt: "O cachorro assustado mordeu a mão do estranho inesperadamente." } } },
      { english: "Wildlife", portuguese: "Vida selvagem", levels: { B1: { en: "The documentary showed incredible footage of African wildlife.", pt: "O documentário mostrou imagens incríveis da vida selvagem africana." } } },
      { english: "Password", portuguese: "Senha", levels: { A1: { en: "I forgot my password.", pt: "Eu esqueci a minha senha." }, A2: { en: "You should create a strong password to protect your account.", pt: "Você deve criar uma senha forte para proteger sua conta." } } },
      { english: "Tag", portuguese: "Marcar (alguém)", levels: { A1: { en: "Tag me in the photo.", pt: "Me marque na foto." }, A2: { en: "He tagged his best friend in the hilarious meme.", pt: "Ele marcou seu melhor amigo no meme hilário." } } },
      { english: "Log off", portuguese: "Sair / Desconectar-se", levels: { B1: { en: "After checking my messages, I usually log off to focus on work.", pt: "Depois de verificar minhas mensagens, eu geralmente me desconecto para focar no trabalho." } } },
      { english: "Mouse", portuguese: "Mouse", levels: { A1: { en: "Click the left button on the mouse.", pt: "Clique no botão esquerdo do mouse." }, A2: { en: "She clicked the mouse twice to open the application.", pt: "Ela clicou no mouse duas vezes para abrir o aplicativo." } } },
      { english: "Settings", portuguese: "Configurações", levels: { B1: { en: "You can change your privacy preferences in the settings menu.", pt: "Você pode alterar suas preferências de privacidade no menu de configurações." } } },
      { english: "Cook", portuguese: "Cozinhar", levels: { A1: { en: "I love to cook Italian food.", pt: "Amo cozinhar comida italiana." }, A2: { en: "She cooked a complex meal for her family yesterday.", pt: "Ela cozinhou uma refeição complexa para a família ontem." } } },
      { english: "Hack into", portuguese: "Hackear / Invadir (sistema)", levels: { B1: { en: "Cybercriminals managed to hack into the bank's secure database.", pt: "Cibercriminosos conseguiram hackear o banco de dados seguro do banco." } } },
      { english: "Landmark", portuguese: "Ponto de referência histórico", levels: { B1: { en: "The Eiffel Tower is the most famous landmark in Paris.", pt: "A Torre Eiffel é o ponto de referência mais famoso de Paris." } } },
      { english: "Password", portuguese: "Senha", levels: { A1: { en: "I forgot my password.", pt: "Esqueci minha senha." }, A2: { en: "She forgot her password and locked her account.", pt: "Ela esqueceu sua senha e bloqueou sua conta." } } },
      { english: "Turn on", portuguese: "Ligar (aparelho)", levels: { B1: { en: "Press the red button on the remote control to turn on the television.", pt: "Pressione o botão vermelho no controle remoto para ligar a televisão." } } },
      { english: "Street", portuguese: "Rua", levels: { A1: { en: "This street is very busy.", pt: "Esta rua é muito movimentada." }, A2: { en: "They walked down the busy street during rush hour.", pt: "Eles andaram pela rua movimentada durante a hora do rush." } } },
      { english: "Recipe", portuguese: "Receita", levels: { A1: { en: "This is my grandmothers recipe.", pt: "Esta é a receita da minha avó." }, A2: { en: "They followed the traditional recipe step by step.", pt: "Eles seguiram a receita tradicional passo a passo." } } },
      { english: "Border", portuguese: "Fronteira", levels: { B1: { en: "They crossed the border between France and Spain by train.", pt: "Eles cruzaram a fronteira entre a França e a Espanha de trem." } } },
      { english: "Share", portuguese: "Compartilhar", levels: { B1: { en: "Please share this important message with your friends.", pt: "Por favor, compartilhe esta mensagem importante com seus amigos." } } },
      { english: "Check in", portuguese: "Fazer check-in", levels: { B1: { en: "We arrived at the hotel and immediately went to the reception to check in.", pt: "Chegamos ao hotel e fomos imediatamente para a recepção fazer o check-in." } } },
      { english: "Eat out", portuguese: "Comer fora", levels: { B1: { en: "We are too tired to cook tonight, so let's eat out at a restaurant.", pt: "Estamos muito cansados para cozinhar hoje, então vamos comer fora num restaurante." } } },
      { english: "Bite", portuguese: "Morder", levels: { B1: { en: "Be careful with that wild animal, it might bite you if you get too close.", pt: "Cuidado com esse animal selvagem, ele pode te morder se você chegar muito perto." } } },
      { english: "Catch up on", portuguese: "Atualizar-se sobre", levels: { B1: { en: "I spent the morning scrolling through my feed to catch up on the news.", pt: "Passei a manhã rolando o meu feed para me atualizar sobre as notícias." } } },
      { english: "Comment", portuguese: "Comentar / Comentário", levels: { A1: { en: "Leave a comment below.", pt: "Deixe um comentário abaixo." }, A2: { en: "He left a positive comment on her recent photo.", pt: "Ele deixou um comentário positivo na foto recente dela." } } },
      { english: "Far", portuguese: "Longe", levels: { A1: { en: "The airport is far from here.", pt: "O aeroporto é longe daqui." }, A2: { en: "He drove a far distance to visit his relatives.", pt: "Ele dirigiu uma longa distância para visitar seus parentes." } } },
      { english: "Download", portuguese: "Baixar", levels: { A1: { en: "I download the file.", pt: "Eu baixo o arquivo." }, A2: { en: "He downloaded the important files before the flight.", pt: "Ele baixou os arquivos importantes antes do voo." } } },
      { english: "Spicy", portuguese: "Apimentado", levels: { A1: { en: "Mexican food is often spicy.", pt: "Comida mexicana é frequentemente apimentada." }, A2: { en: "He loved the spicy food they served at the Indian restaurant.", pt: "Ele adorava a comida apimentada que serviam no restaurante indiano." } } },
      { english: "Grill", portuguese: "Grelhar", levels: { B1: { en: "We should grill some chicken and vegetables on the barbecue tonight.", pt: "Nós deveríamos grelhar um pouco de frango e vegetais na churrasqueira hoje à noite." } } },
      { english: "Recipe", portuguese: "Receita (culinária)", levels: { B1: { en: "My grandmother gave me her secret recipe for chocolate cake.", pt: "Minha avó me deu a receita secreta dela de bolo de chocolate." } } },
      { english: "Crash", portuguese: "Travar (sistema)", levels: { B1: { en: "The system tends to crash if you open too many programs.", pt: "O sistema tende a travar se você abrir programas demais." } } },
      { english: "School", portuguese: "Escola", levels: { A1: { en: "My kids are at school.", pt: "Meus filhos estão na escola." }, A2: { en: "The local school received new computers for the students.", pt: "A escola local recebeu novos computadores para os alunos." } } },
      { english: "Adopt", portuguese: "Adotar", levels: { B1: { en: "We decided to adopt a rescue dog instead of buying a puppy from a store.", pt: "Nós decidimos adotar um cachorro resgatado em vez de comprar um filhote de uma loja." } } },
      { english: "Smartphone", portuguese: "Celular", levels: { A1: { en: "Where is my smartphone?", pt: "Onde está meu celular?" }, A2: { en: "She bought a new smartphone with a better camera.", pt: "Ela comprou um smartphone novo com uma câmera melhor." } } },
      { english: "Log in", portuguese: "Fazer login / Entrar", levels: { B1: { en: "You must log in with your email and password to access the platform.", pt: "Você deve fazer login com seu e-mail e senha para acessar a plataforma." } } }
    ],

    quizA2: [
      { question: "A2 Dummy Question 1?", options: ["Option A", "Option B", "Option C"], correctIndex: 0, explanation: "A2 Explanation 1" },
      { question: "A2 Dummy Question 2?", options: ["Option A", "Option B", "Option C"], correctIndex: 1, explanation: "A2 Explanation 2" }
    ],

    quizB1: [
      { question: "B1 Dummy Question 1 (Intermediate)?", options: ["Option A", "Option B", "Option C"], correctIndex: 0, explanation: "B1 Explanation 1" },
      { question: "B1 Dummy Question 2 (Intermediate)?", options: ["Option A", "Option B", "Option C"], correctIndex: 1, explanation: "B1 Explanation 2" }
    ],
    flashcards: [
      { english: "This city never sleeps at night.", portuguese: "Esta cidade nunca dorme à noite." },
      { english: "The dog barked loudly at the stranger.", portuguese: "O cachorro latiu alto para o estranho." },
      { english: "Use a non-stick pan to fry the eggs.", portuguese: "Use uma panela antiaderente para fritar os ovos." },
      { english: "I check my smartphone too often.", portuguese: "Eu checo meu celular com muita frequência." },
      { english: "She sent a long message to her boss.", portuguese: "Ela enviou uma mensagem longa para seu chefe." },
      { english: "The new hospital has modern equipment.", portuguese: "O novo hospital tem equipamentos modernos." },
      { english: "A beautiful bird landed on the tree.", portuguese: "Um lindo pássaro pousou na árvore." },
      { english: "Put the food on the clean plate.", portuguese: "Coloque a comida no prato limpo." },
      { english: "The internet connection is very slow here.", portuguese: "A conexão de internet é muito lenta aqui." },
      { english: "I like spending time with my family.", portuguese: "Eu gosto de passar tempo com minha família." },
      { english: "We arrived at the airport two hours early.", portuguese: "Nós chegamos ao aeroporto duas horas mais cedo." },
      { english: "The vet examined the sick kitten carefully.", portuguese: "O veterinário examinou o gatinho doente cuidadosamente." },
      { english: "This dessert is too sweet for me.", portuguese: "Esta sobremesa é muito doce para mim." },
      { english: "Never share your password with anyone.", portuguese: "Nunca compartilhe sua senha com ninguém." },
      { english: "The influencer posted a new travel video.", portuguese: "O influenciador postou um novo vídeo de viagem." },
      { english: "We stayed at a luxury hotel near the beach.", portuguese: "Nós ficamos em um hotel de luxo perto da praia." },
      { english: "Be careful, the snake might bite you.", portuguese: "Tenha cuidado, a cobra pode te picar." },
      { english: "I am going to bake some chocolate cookies.", portuguese: "Eu vou assar alguns biscoitos de chocolate." },
      { english: "Please delete those old files from your computer.", portuguese: "Por favor, apague aqueles arquivos velhos do seu computador." },
      { english: "I got a notification about the meeting.", portuguese: "Eu recebi uma notificação sobre a reunião." }
    ],

    flashcardsA2: [
      { english: "A2 Example Card 1", portuguese: "Exemplo A2 1", example: "This is an A2 level example." },
      { english: "A2 Example Card 2", portuguese: "Exemplo A2 2", example: "Keep practicing at A2 level." },
      { english: "A2 Example Card 3", portuguese: "Exemplo A2 3", example: "You are doing great." }
    ],

    flashcardsB1: [
      { english: "B1 Example Card 1", portuguese: "Exemplo B1 1", example: "This is a B1 level example, representing intermediate proficiency." },
      { english: "B1 Example Card 2", portuguese: "Exemplo B1 2", example: "Furthermore, B1 requires more complex vocabulary." },
      { english: "B1 Example Card 3", portuguese: "Exemplo B1 3", example: "Therefore, keep up the excellent work." }
    ],
    dialogue: [
      { speaker: "A", english: "Did you see that influencer's new video on the internet?", portuguese: "Você viu o novo vídeo daquele influenciador na internet?", isPrimary: true },
      { speaker: "B", english: "No, my smartphone is broken. I missed the notification.", portuguese: "Não, meu celular está quebrado. Eu perdi a notificação.", isPrimary: false },
      { speaker: "A", english: "Oh no! I will send you a message with the link.", portuguese: "Ah, não! Vou te mandar uma mensagem com o link.", isPrimary: true },
      { speaker: "B", english: "Thanks. I was at the vet all day. My dog tried to bite a bird.", portuguese: "Obrigado. Eu estive no veterinário o dia todo. Meu cachorro tentou morder um pássaro.", isPrimary: false },
      { speaker: "A", english: "Is he okay? Do you need to go to an animal hospital?", portuguese: "Ele está bem? Você precisa ir a um hospital de animais?", isPrimary: true },
      { speaker: "B", english: "He is fine. After that, I went to a hotel near the airport.", portuguese: "Ele está bem. Depois disso, fui a um hotel perto do aeroporto.", isPrimary: false },
      { speaker: "A", english: "Wow, what a busy day! Let's bake a sweet cake.", portuguese: "Uau, que dia agitado! Vamos assar um bolo doce.", isPrimary: true },
      { speaker: "B", english: "Yes! Grab the pan and a plate for us.", portuguese: "Sim! Pegue a panela e um prato para nós.", isPrimary: false }
    ],
    trueOrFalse: {
      part1: [
        { statement: "A dog is a pet.", statementPt: "Um cachorro é um animal de estimação.", isTrue: true, explanation: "Dog means cachorro." },
        { statement: "You use a pan to wash clothes.", statementPt: "Você usa uma panela para lavar roupas.", isTrue: false, explanation: "You use a pan to cook food." },
        { statement: "A smartphone is a small computer.", statementPt: "Um celular é um computador pequeno.", isTrue: true, explanation: "Smartphone means celular inteligente." },
        { statement: "You go to a hospital to eat dinner.", statementPt: "Você vai a um hospital para jantar.", isTrue: false, explanation: "You go to a restaurant to eat dinner." },
        { statement: "A bird can usually fly.", statementPt: "Um pássaro geralmente pode voar.", isTrue: true, explanation: "Bird means pássaro." },
        { statement: "When you like a post, you show you enjoy it.", statementPt: "Quando você curte um post, você mostra que gostou dele.", isTrue: true, explanation: "Like means curtir." }
      ],
      part2: [
        { statement: "An airport is where boats stop.", statementPt: "Um aeroporto é onde os barcos param.", isTrue: false, explanation: "An airport is for planes. Boats use a port." },
        { statement: "A vet helps sick animals.", statementPt: "Um veterinário ajuda animais doentes.", isTrue: true, explanation: "Vet means veterinário." },
        { statement: "A password should be a secret.", statementPt: "Uma senha deve ser um segredo.", isTrue: true, explanation: "Password means senha." },
        { statement: "An influencer is someone with no social media presence.", statementPt: "Um influenciador é alguém sem presença nas redes sociais.", isTrue: false, explanation: "An influencer has many followers on social media." },
        { statement: "To bake means to freeze food.", statementPt: "Assar significa congelar comida.", isTrue: false, explanation: "To bake means to cook in an oven." },
        { statement: "A notification alerts you on your phone.", statementPt: "Uma notificação alerta você no seu celular.", isTrue: true, explanation: "Notification means notificação." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you live in a big city?", translation: "Você mora em uma cidade grande?" },
        { question: "Do you have a pet dog?", translation: "Você tem um cachorro de estimação?" },
        { question: "How often do you use a frying pan?", translation: "Com que frequência você usa uma frigideira?" },
        { question: "Do you spend a lot of time on your smartphone?", translation: "Você passa muito tempo no seu celular?" },
        { question: "Do you send many messages every day?", translation: "Você envia muitas mensagens todos os dias?" },
        { question: "Is there a good hospital in your city?", translation: "Existe um bom hospital na sua cidade?" },
        { question: "Do you need the internet for your job?", translation: "Você precisa da internet para o seu trabalho?" }
      ],
      part2: [
        { question: "Is the airport far from your house?", translation: "O aeroporto é longe da sua casa?" },
        { question: "Do you take your pets to the vet?", translation: "Você leva seus animais de estimação ao veterinário?" },
        { question: "Do you prefer sweet or salty food?", translation: "Você prefere comida doce ou salgada?" },
        { question: "Do you use a difficult password?", translation: "Você usa uma senha difícil?" },
        { question: "Do you follow any famous influencer?", translation: "Você segue algum influenciador famoso?" },
        { question: "Have you ever stayed in a luxury hotel?", translation: "Você já ficou em um hotel de luxo?" },
        { question: "Do you often bake cakes?", translation: "Você costuma assar bolos?" }
      ]
    },
    usefulExpressions: [
      { expressionPt: "Que horas o avião chega no aeroporto?", translationEn: "What time does the plane arrive at the airport?" },
      { expressionPt: "Eu esqueci a minha senha do celular.", translationEn: "I forgot my smartphone password." },
      { expressionPt: "Nós precisamos levar o cachorro ao veterinário.", translationEn: "We need to take the dog to the vet." },
      { expressionPt: "Você gosta de fazer bolos doces?", translationEn: "Do you like to bake sweet cakes?" },
      { expressionPt: "Eu recebi uma mensagem daquele influenciador.", translationEn: "I received a message from that influencer." },
      { expressionPt: "Onde fica o hospital mais próximo?", translationEn: "Where is the nearest hospital?" },
      { expressionPt: "Por favor, não apague este arquivo importante.", translationEn: "Please do not delete this important file." }
    ],
      quiz: [
            { question: 'Translate: "Nós fomos para o hospital na cidade grande."', options: ["We went to the hotel in the small city.", "We went to the airport in the big city.", "We went to the hospital in the big city.", "We went to the vet in the big city."], correctIndex: 2, explanation: '"Hospital" is hospital, and "city" is cidade.' },
            { question: 'Which sentence is logically correct?', options: ["A dog can bite, and a bird can fly.", "A bird can bite, and a dog can fly.", "A hospital can bite, and a city can fly.", "A pan can bite, and a plate can fly."], correctIndex: 0, explanation: 'A "dog" (cachorro) can "bite" (morder), and a "bird" (pássaro) can fly.' },
            { question: 'Fill in the blank: "I received a ________ on my ________."', options: ["pan / plate", "notification / smartphone", "vet / hospital", "password / internet"], correctIndex: 1, explanation: 'You receive a "notification" (notificação) on a "smartphone" (celular).' },
            { question: 'Translate: "Por favor, apague a mensagem e mude sua senha."', options: ["Please delete the message and change your password.", "Please delete the notification and change your smartphone.", "Please like the message and change your password.", "Please send the message and change your password."], correctIndex: 0, explanation: '"Delete" is apagar, "message" is mensagem, and "password" is senha.' },
            { question: 'What does a "Vet" do?', options: ["Bakes sweet food in the hospital.", "Treats sick animals like dogs and birds.", "Deletes passwords on the internet.", "Flies airplanes at the airport."], correctIndex: 1, explanation: 'A "vet" (veterinário) treats animals.' },
            { question: 'Fill in the blank: "The famous ________ stayed at a luxury ________."', options: ["influencer / hotel", "dog / pan", "vet / plate", "password / smartphone"], correctIndex: 0, explanation: 'An "influencer" (influenciador) stays at a "hotel" (hotel).' },
            { question: 'Translate: "Eu vou assar um bolo doce na panela."', options: ["I am going to bake a sweet cake in the pan.", "I am going to bite a sweet cake in the pan.", "I am going to delete a sweet cake in the pan.", "I am going to bake a sweet cake in the city."], correctIndex: 0, explanation: '"Bake" is assar, "sweet" is doce, and "pan" is panela.' },
            { question: 'Complete the dialogue:\\nA: "Is there free Wi-Fi?"\\nB: "Yes, you need the ________ to connect to the ________."', options: ["password / internet", "message / smartphone", "notification / vet", "plate / airport"], correctIndex: 0, explanation: 'You need a "password" (senha) for the "internet" (internet).' },
            { question: 'Translate: "Eu curti o vídeo do influenciador na internet."', options: ["I liked the influencer's video on the internet.", "I deleted the influencer's video on the internet.", "I baked the influencer's video on the internet.", "I bit the influencer's video on the internet."], correctIndex: 0, explanation: '"Like" is curtir, and "internet" is internet.' },
            { question: 'Fill in the blank: "We must arrive at the ________ early for our flight."', options: ["hospital", "hotel", "airport", "city"], correctIndex: 2, explanation: 'You go to the "airport" (aeroporto) to catch a flight.' },
          ]
}
];
