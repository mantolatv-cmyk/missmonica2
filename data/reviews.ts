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
      { english: "Mother / Mom", portuguese: "Mãe" },
      { english: "Friend", portuguese: "Amigo" },
      { english: "Eyes", portuguese: "Olhos" },
      { english: "Bedroom", portuguese: "Quarto" },
      { english: "Chair", portuguese: "Cadeira" },
      { english: "Father / Dad", portuguese: "Pai" },
      { english: "Trust", portuguese: "Confiar" },
      { english: "Mouth", portuguese: "Boca" },
      { english: "Bathroom", portuguese: "Banheiro" },
      { english: "Window", portuguese: "Janela" },
      { english: "Husband", portuguese: "Marido" },
      { english: "Secret", portuguese: "Segredo" },
      { english: "Finger", portuguese: "Dedo da mão" },
      { english: "Broom", portuguese: "Vassoura" },
      { english: "Mirror", portuguese: "Espelho" },
      { english: "Grandmother", portuguese: "Avó" },
      { english: "Apologize", portuguese: "Pedir desculpas" },
      { english: "Knee", portuguese: "Joelho" },
      { english: "Kitchen", portuguese: "Cozinha" },
      { english: "Sofa", portuguese: "Sofá" }
    ],
    flashcards: [
      { english: "Mother / Mom", portuguese: "Mãe" },
      { english: "Friend", portuguese: "Amigo" },
      { english: "Eyes", portuguese: "Olhos" },
      { english: "Bedroom", portuguese: "Quarto" },
      { english: "Chair", portuguese: "Cadeira" },
      { english: "Father / Dad", portuguese: "Pai" },
      { english: "Trust", portuguese: "Confiar" },
      { english: "Mouth", portuguese: "Boca" },
      { english: "Bathroom", portuguese: "Banheiro" },
      { english: "Window", portuguese: "Janela" },
      { english: "Husband", portuguese: "Marido" },
      { english: "Secret", portuguese: "Segredo" },
      { english: "Finger", portuguese: "Dedo da mão" },
      { english: "Broom", portuguese: "Vassoura" },
      { english: "Mirror", portuguese: "Espelho" },
      { english: "Grandmother", portuguese: "Avó" },
      { english: "Apologize", portuguese: "Pedir desculpas" },
      { english: "Knee", portuguese: "Joelho" },
      { english: "Kitchen", portuguese: "Cozinha" },
      { english: "Sofa", portuguese: "Sofá" }
    ],
    quiz: [
      { question: 'What is the correct translation for "Mãe"?', options: ["Friend", "Mother", "Father", "Grandmother"], correctIndex: 1, explanation: '"Mother" is the translation for "Mãe".' },
      { question: 'Where do you sleep?', options: ["Bathroom", "Kitchen", "Window", "Bedroom"], correctIndex: 3, explanation: 'You sleep in the "Bedroom".' },
      { question: 'Which body part do you use to see?', options: ["Eyes", "Mouth", "Finger", "Knee"], correctIndex: 0, explanation: 'You see with your "Eyes".' },
      { question: 'What do you use to clean the floor?', options: ["Chair", "Mirror", "Broom", "Sofa"], correctIndex: 2, explanation: 'You use a "Broom" to sweep the floor.' },
      { question: 'How do you say "Marido"?', options: ["Father", "Friend", "Husband", "Brother"], correctIndex: 2, explanation: '"Marido" is "Husband".' },
      { question: 'What is a "Secret"?', options: ["A family member", "Something hidden", "A room in the house", "A piece of furniture"], correctIndex: 1, explanation: 'A "Secret" is something hidden from others.' },
      { question: 'What do you do when you make a mistake?', options: ["Trust", "Apologize", "Sleep", "Cook"], correctIndex: 1, explanation: 'You "Apologize" (pedir desculpas) when you make a mistake.' },
      { question: 'Which of these is furniture?', options: ["Sofa", "Knee", "Mouth", "Friend"], correctIndex: 0, explanation: 'A "Sofa" is a piece of furniture.' },
      { question: 'Where do you cook food?', options: ["Bathroom", "Kitchen", "Bedroom", "Window"], correctIndex: 1, explanation: 'You cook in the "Kitchen".' },
      { question: 'What do you look at to see your own face?', options: ["Chair", "Broom", "Mirror", "Knee"], correctIndex: 2, explanation: 'You look in the "Mirror" to see yourself.' }
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
      { english: "Book", portuguese: "Livro" },
      { english: "Team", portuguese: "Time" },
      { english: "Shopping cart", portuguese: "Carrinho de compras" },
      { english: "Wallet", portuguese: "Carteira" },
      { english: "Job / Work", portuguese: "Trabalho" },
      { english: "Music", portuguese: "Música" },
      { english: "Player", portuguese: "Jogador" },
      { english: "Price", portuguese: "Preço" },
      { english: "Store", portuguese: "Loja" },
      { english: "Teacher", portuguese: "Professor(a)" },
      { english: "Travel", portuguese: "Viajar" },
      { english: "Swimming", portuguese: "Natação / Nadar" },
      { english: "Meat", portuguese: "Carne" },
      { english: "Credit card", portuguese: "Cartão de crédito" },
      { english: "Engineer", portuguese: "Engenheiro(a)" },
      { english: "Camera", portuguese: "Câmera" },
      { english: "Jump", portuguese: "Pular" },
      { english: "Frozen", portuguese: "Congelado" },
      { english: "On sale", portuguese: "Na promoção" },
      { english: "Meeting", portuguese: "Reunião" }
    ],
    flashcards: [
      { english: "Book", portuguese: "Livro" },
      { english: "Team", portuguese: "Time" },
      { english: "Shopping cart", portuguese: "Carrinho de compras" },
      { english: "Wallet", portuguese: "Carteira" },
      { english: "Job / Work", portuguese: "Trabalho" },
      { english: "Music", portuguese: "Música" },
      { english: "Player", portuguese: "Jogador" },
      { english: "Price", portuguese: "Preço" },
      { english: "Store", portuguese: "Loja" },
      { english: "Teacher", portuguese: "Professor(a)" },
      { english: "Travel", portuguese: "Viajar" },
      { english: "Swimming", portuguese: "Natação / Nadar" },
      { english: "Meat", portuguese: "Carne" },
      { english: "Credit card", portuguese: "Cartão de crédito" },
      { english: "Engineer", portuguese: "Engenheiro(a)" },
      { english: "Camera", portuguese: "Câmera" },
      { english: "Jump", portuguese: "Pular" },
      { english: "Frozen", portuguese: "Congelado" },
      { english: "On sale", portuguese: "Na promoção" },
      { english: "Meeting", portuguese: "Reunião" }
    ],
    quiz: [
      { question: 'What do you use to buy things?', options: ["Music", "Wallet", "Jump", "Teacher"], correctIndex: 1, explanation: 'You keep your money in a "Wallet" to buy things.' },
      { question: 'Who works in a school?', options: ["Engineer", "Player", "Teacher", "Store"], correctIndex: 2, explanation: 'A "Teacher" works in a school.' },
      { question: 'What do you use to take photos?', options: ["Camera", "Credit card", "Book", "Meat"], correctIndex: 0, explanation: 'You use a "Camera" to take photos.' },
      { question: 'What do you put your food in at the supermarket?', options: ["Team", "Meeting", "Shopping cart", "Wallet"], correctIndex: 2, explanation: 'You put your food in a "Shopping cart".' },
      { question: 'What is the translation for "Viajar"?', options: ["Swimming", "Travel", "Jump", "Job"], correctIndex: 1, explanation: '"Viajar" is "Travel".' },
      { question: 'Where do you go to buy clothes?', options: ["Store", "Meeting", "Team", "Music"], correctIndex: 0, explanation: 'You buy clothes at a "Store".' },
      { question: 'Which of these is a sport?', options: ["Engineer", "Book", "Swimming", "Price"], correctIndex: 2, explanation: '"Swimming" is a sport.' },
      { question: 'What does "On sale" mean?', options: ["Congelado", "Preço", "Na promoção", "Trabalho"], correctIndex: 2, explanation: '"On sale" means "Na promoção".' },
      { question: 'Who designs buildings or machines?', options: ["Teacher", "Player", "Engineer", "Credit card"], correctIndex: 2, explanation: 'An "Engineer" designs buildings and machines.' },
      { question: 'What do you do when you hear good music?', options: ["Jump", "Frozen", "Meat", "Price"], correctIndex: 0, explanation: 'You might "Jump" (pular) when you hear good music.' }
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
      { english: "City", portuguese: "Cidade" },
      { english: "Dog", portuguese: "Cachorro" },
      { english: "Pan", portuguese: "Panela" },
      { english: "Smartphone", portuguese: "Celular" },
      { english: "Message", portuguese: "Mensagem" },
      { english: "Hospital", portuguese: "Hospital" },
      { english: "Bird", portuguese: "Pássaro" },
      { english: "Plate", portuguese: "Prato" },
      { english: "Internet", portuguese: "Internet" },
      { english: "Like", portuguese: "Curtir / Gostar" },
      { english: "Airport", portuguese: "Aeroporto" },
      { english: "Vet", portuguese: "Veterinário" },
      { english: "Sweet", portuguese: "Doce" },
      { english: "Password", portuguese: "Senha" },
      { english: "Influencer", portuguese: "Influenciador(a)" },
      { english: "Hotel", portuguese: "Hotel" },
      { english: "Bite", portuguese: "Morder / Picar" },
      { english: "Bake", portuguese: "Assar" },
      { english: "Delete", portuguese: "Apagar" },
      { english: "Notification", portuguese: "Notificação" }
    ],
    flashcards: [
      { english: "City", portuguese: "Cidade" },
      { english: "Dog", portuguese: "Cachorro" },
      { english: "Pan", portuguese: "Panela" },
      { english: "Smartphone", portuguese: "Celular" },
      { english: "Message", portuguese: "Mensagem" },
      { english: "Hospital", portuguese: "Hospital" },
      { english: "Bird", portuguese: "Pássaro" },
      { english: "Plate", portuguese: "Prato" },
      { english: "Internet", portuguese: "Internet" },
      { english: "Like", portuguese: "Curtir / Gostar" },
      { english: "Airport", portuguese: "Aeroporto" },
      { english: "Vet", portuguese: "Veterinário" },
      { english: "Sweet", portuguese: "Doce" },
      { english: "Password", portuguese: "Senha" },
      { english: "Influencer", portuguese: "Influenciador(a)" },
      { english: "Hotel", portuguese: "Hotel" },
      { english: "Bite", portuguese: "Morder / Picar" },
      { english: "Bake", portuguese: "Assar" },
      { english: "Delete", portuguese: "Apagar" },
      { english: "Notification", portuguese: "Notificação" }
    ],
    quiz: [
      { question: 'What is a "Dog"?', options: ["A machine", "An animal", "A food", "A city"], correctIndex: 1, explanation: 'A "Dog" is an animal.' },
      { question: 'Where do you go when you are sick?', options: ["Airport", "Pan", "Hospital", "Hotel"], correctIndex: 2, explanation: 'You go to a "Hospital" when sick.' },
      { question: 'What do you use to fry food?', options: ["Smartphone", "Pan", "Internet", "Vet"], correctIndex: 1, explanation: 'You use a "Pan" to fry food.' },
      { question: 'How do you say "Mensagem" in English?', options: ["Message", "Like", "Bird", "Sweet"], correctIndex: 0, explanation: '"Mensagem" is "Message".' },
      { question: 'What do planes use to take off?', options: ["Hotel", "Internet", "Airport", "Password"], correctIndex: 2, explanation: 'Planes use an "Airport".' },
      { question: 'What is a "Vet"?', options: ["An animal doctor", "A type of food", "A social media post", "A building"], correctIndex: 0, explanation: 'A "Vet" is an animal doctor.' },
      { question: 'What do you do when you "Bake"?', options: ["Morder", "Assar", "Apagar", "Curtir"], correctIndex: 1, explanation: '"Bake" means "Assar".' },
      { question: 'What protects your digital accounts?', options: ["Notification", "Password", "Influencer", "Message"], correctIndex: 1, explanation: 'A "Password" protects your accounts.' },
      { question: 'What do you serve food on?', options: ["Plate", "Smartphone", "City", "Hotel"], correctIndex: 0, explanation: 'You serve food on a "Plate".' },
      { question: 'If you remove a file, what do you do?', options: ["Like", "Bite", "Delete", "Bake"], correctIndex: 2, explanation: 'To remove a file is to "Delete" it.' }
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
    ]
  }
];
