import type { Scenario } from "./types";

export const scenarios2: Scenario[] = [
  {
    id: "compras",
    title: "Shopping",
    titlePt: "Compras",
    description: "Shop for clothes, shoes and accessories.",
    descriptionPt: "Compre roupas, sapatos e acessórios.",
    icon: "ShoppingBag",
    image: "/images/compras.png",
    color: "sky",
    available: true,
    vocabulary: [
      { english: "Clothes", portuguese: "Roupas",
          levels: { 
                        A1: { en: "I need to buy new clothes.", pt: "Preciso comprar roupas novas." }, 
                        A2: { en: "She bought expensive clothes for the wedding.", pt: "Ela comprou roupas caras para o casamento." }
                      }
    },
      { english: "Shoes", portuguese: "Sapatos",
          levels: { 
                        A1: { en: "These shoes are very comfortable.", pt: "Estes sapatos são muito confortáveis." }, 
                        A2: { en: "He tried on new shoes at the mall.", pt: "Ele experimentou sapatos novos no shopping." }
                      }
    },
      { english: "Size", portuguese: "Tamanho",
          levels: { 
                        A1: { en: "What is your size?", pt: "Qual é o seu tamanho?" }, 
                        A2: { en: "The clerk checked the correct size for the customer.", pt: "O balconista verificou o tamanho correto para o cliente." }
                      }
    },
      { english: "Price", portuguese: "Preço",
          levels: { 
                        A1: { en: "The price is too high.", pt: "O preço está muito alto." }, 
                        A2: { en: "The price is too high.", pt: "O preço está muito alto." }, 
                        B1: { en: "She checked the price before adding the item to her cart.", pt: "Ela verificou o preço antes de adicionar o item ao seu carrinho." } 
                      }
    },
      { english: "Try on", portuguese: "Experimentar",
          levels: { 
                        A1: { en: "Can I try this on?", pt: "Posso experimentar isto?" }, 
                        A2: { en: "She tried on three different dresses.", pt: "Ela experimentou três vestidos diferentes." }
                      }
    },
      { english: "Store / Shop", portuguese: "Loja",
          levels: { 
                        A1: { en: "The store opens at 9 AM.", pt: "A loja abre às 9 da manhã." }, 
                        A2: { en: "They opened a new clothing store downtown.", pt: "Eles abriram uma nova loja de roupas no centro." }
                      }
    },
      { english: "Fitting room", portuguese: "Provador",
          levels: { 
                        A1: { en: "The fitting room is over there.", pt: "O provador é ali." }, 
                        A2: { en: "He waited outside the fitting room for ten minutes.", pt: "Ele esperou do lado de fora do provador por dez minutos." }
                      }
    },
      { english: "Sale", portuguese: "Promoção / Liquidação",
          levels: { 
                        A1: { en: "Everything is on sale today.", pt: "Tudo está em promoção hoje." }, 
                        A2: { en: "I bought this jacket during the winter sale.", pt: "Eu comprei esta jaqueta durante a liquidação de inverno." }
                      }
    },
      { english: "Customer", portuguese: "Cliente",
          levels: { 
                        A1: { en: "The customer is always right.", pt: "O cliente tem sempre razão." }, 
                        A2: { en: "The customer is always right.", pt: "O cliente tem sempre razão." }, 
                        B1: { en: "The demanding customer asked to speak with the manager.", pt: "O cliente exigente pediu para falar com o gerente." } 
                      }
    },
      { english: "Expensive", portuguese: "Caro",
          levels: { 
                        A1: { en: "This watch is too expensive.", pt: "Este relógio é muito caro." }, 
                        A2: { en: "That luxury watch cost a lot because it was expensive.", pt: "Aquele relógio de luxo custou muito porque era caro." }
                      }
    },
      { english: "Cheap", portuguese: "Barato",
          levels: { 
                        A1: { en: "I find a very cheap shirt.", pt: "Eu encontro uma camisa muito barata." }, 
                        A2: { en: "He preferred cheap options to save money.", pt: "Ele preferia opções baratas para economizar dinheiro." }
                      }
    },
      { english: "Wallet", portuguese: "Carteira",
          levels: { 
                        A1: { en: "I leave my wallet at home.", pt: "Eu deixo minha carteira em casa." }, 
                        A2: { en: "She lost her leather wallet yesterday.", pt: "Ela perdeu sua carteira de couro ontem." }
                      }
    },
      { english: "Credit card", portuguese: "Cartão de crédito",
          levels: { 
                        A1: { en: "Do you accept credit card?", pt: "Você aceita cartão de crédito?" }, 
                        A2: { en: "Do you accept credit card?", pt: "Você aceita cartão de crédito?" }, 
                        B1: { en: "She used her credit card to buy expensive groceries.", pt: "Ela usou seu cartão de crédito para comprar mantimentos caros." } 
                      }
    },
      { english: "Cash", portuguese: "Dinheiro (espécie)",
          levels: { 
                        A1: { en: "I only have cash.", pt: "Eu só tenho dinheiro." }, 
                        A2: { en: "I only have cash.", pt: "Eu só tenho dinheiro." }, 
                        B1: { en: "He always paid in cash to control his budget.", pt: "Ele sempre pagava em dinheiro para controlar seu orçamento." } 
                      }
    },
      { english: "Jacket", portuguese: "Jaqueta",
          levels: { 
                        A1: { en: "It is cold, put on a jacket.", pt: "Está frio, coloque uma jaqueta." }, 
                        A2: { en: "He wore a thick jacket because of the cold wind.", pt: "Ele usou uma jaqueta grossa por causa do vento frio." }
                      }
    },
      { english: "Pants", portuguese: "Calças",
          levels: { 
                        A1: { en: "I look for black pants.", pt: "Eu procuro por calças pretas." }, 
                        A2: { en: "She bought comfortable pants for the trip.", pt: "Ela comprou calças confortáveis para a viagem." }
                      }
    },
      { english: "Dress", portuguese: "Vestido",
          levels: { 
                        A1: { en: "She bought a red dress.", pt: "Ela comprou um vestido vermelho." }, 
                        A2: { en: "She wore a stunning red dress to the party.", pt: "Ela usou um vestido vermelho deslumbrante na festa." }
                      }
    },
      { english: "Hat", portuguese: "Chapéu / Boné",
          levels: { 
                        A1: { en: "Dont forget your hat.", pt: "Não esqueça o seu chapéu." }, 
                        A2: { en: "He put on a hat to protect his face from the sun.", pt: "Ele colocou um chapéu para proteger o rosto do sol." }
                      }
    },
      { english: "Mirror", portuguese: "Espelho",
          levels: { 
                        A1: { en: "Look in the mirror.", pt: "Olhe no espelho." }, 
                        A2: { en: "Look in the mirror.", pt: "Olhe no espelho." }, 
                        B1: { en: "She looked at herself in the mirror before leaving.", pt: "Ela olhou para si mesma no espelho antes de sair." } 
                      }
    },
      { english: "Gift", portuguese: "Presente",
          levels: { 
                        A1: { en: "This is a gift for you.", pt: "Isto é um presente para você." }, 
                        A2: { en: "They bought a special gift for their parents.", pt: "Eles compraram um presente especial para os pais deles." }
                      }
    },
      { english: "Try on", portuguese: "Experimentar (roupas)",
          levels: { 
                        B1: { en: "Can I try on these shoes in a bigger size?", pt: "Posso experimentar estes sapatos em um tamanho maior?" } 
                      }
    },
      { english: "Fit", portuguese: "Servir / Caber (tamanho)",
          levels: { 
                        B1: { en: "This jacket doesn't fit me anymore; it's too tight.", pt: "Esta jaqueta não me serve mais; está muito apertada." } 
                      }
    },
      { english: "Suit", portuguese: "Cair bem / Combinar (estilo)",
          levels: { 
                        B1: { en: "That blue dress really suits you perfectly.", pt: "Aquele vestido azul realmente te cai perfeitamente." } 
                      }
    },
      { english: "Refund", portuguese: "Reembolso",
          levels: { 
                        B1: { en: "If the product is broken, you can ask for a full refund.", pt: "Se o produto estiver quebrado, você pode pedir um reembolso total." } 
                      }
    },
      { english: "Brand", portuguese: "Marca",
          levels: { 
                        B1: { en: "She only buys clothes from that expensive Italian brand.", pt: "Ela só compra roupas daquela marca italiana cara." } 
                      }
    },
      { english: "Out of stock", portuguese: "Esgotado / Sem estoque",
          levels: { 
                        B1: { en: "I'm sorry, but that specific model is currently out of stock.", pt: "Sinto muito, mas aquele modelo específico está atualmente esgotado." } 
                      }
    },
      { english: "Bargain", portuguese: "Pechincha",
          levels: { 
                        B1: { en: "Buying this laptop for half the price was a real bargain.", pt: "Comprar este laptop pela metade do preço foi uma verdadeira pechincha." } 
                      }
    },
      { english: "Customer", portuguese: "Cliente",
          levels: { 
                        B1: { en: "The store manager apologized to the angry customer.", pt: "O gerente da loja pediu desculpas ao cliente irritado." } 
                      }
    },
      { english: "Try on", portuguese: "Experimentar (roupa)",
          levels: { 
                        B1: { en: "You should try on those jeans before buying them.", pt: "Você deveria experimentar essa calça jeans antes de comprá-la." } 
                      }
    },
      { english: "Fit", portuguese: "Servir / Caber",
          levels: { 
                        B1: { en: "These shoes don't fit me very well, they are too tight.", pt: "Estes sapatos não me servem muito bem, eles estão muito apertados." } 
                      }
    },
      { english: "Suit", portuguese: "Cair bem / Combinar",
          levels: { 
                        B1: { en: "That dark blue jacket really suits your eye color.", pt: "Aquela jaqueta azul escura realmente combina com a cor dos seus olhos." } 
                      }
    },
      { english: "Take back", portuguese: "Devolver (na loja)",
          levels: { 
                        B1: { en: "The shirt had a hole in it, so I had to take it back to the store.", pt: "A camisa tinha um buraco, então tive que devolvê-la na loja." } 
                      }
    },
      { english: "Wrap up", portuguese: "Embrulhar",
          levels: { 
                        B1: { en: "Could you please wrap this up as a birthday gift?", pt: "Você poderia embrulhar isso como um presente de aniversário, por favor?" } 
                      }
    },
      { english: "Shop around", portuguese: "Pesquisar preços",
          levels: { 
                        B1: { en: "It's always a good idea to shop around before buying an expensive laptop.", pt: "É sempre uma boa ideia pesquisar preços antes de comprar um notebook caro." } 
                      }
    },
      { english: "Window shopping", portuguese: "Olhar vitrines",
          levels: { 
                        B1: { en: "We didn't have much money, so we just went window shopping.", pt: "Nós não tínhamos muito dinheiro, então fomos apenas olhar vitrines." } 
                      }
    }
      ],
    dialogue: [
      { speaker: "Customer", english: "Excuse me, how much is this shirt?", portuguese: "Com licença, quanto custa esta camisa?", isPrimary: true },
      { speaker: "Seller", english: "It is twenty-five dollars.", portuguese: "Custa vinte e cinco dólares.", isPrimary: false },
      { speaker: "Customer", english: "Do you have it in size medium?", portuguese: "Você tem no tamanho médio?", isPrimary: true },
      { speaker: "Seller", english: "Let me check... Yes, here it is.", portuguese: "Deixe-me checar... Sim, aqui está.", isPrimary: false },
      { speaker: "Customer", english: "Great! Can I try it on?", portuguese: "Ótimo! Posso experimentar?", isPrimary: true },
      { speaker: "Seller", english: "Of course. The fitting rooms are in the back.", portuguese: "Claro. Os provadores ficam lá atrás.", isPrimary: false },
      { speaker: "Customer", english: "It fits perfectly. I will take it.", portuguese: "Serviu perfeitamente. Eu vou levar.", isPrimary: true },
      { speaker: "Seller", english: "Excellent. How would you like to pay?", portuguese: "Excelente. Como você gostaria de pagar?", isPrimary: false },
      { speaker: "Customer", english: "I will pay with a credit card, please.", portuguese: "Vou pagar com cartão de crédito, por favor.", isPrimary: true },
      { speaker: "Seller", english: "No problem. Just insert your card here.", portuguese: "Sem problema. Apenas insira seu cartão aqui.", isPrimary: false },
      { speaker: "Customer", english: "Can you put it in a bag? It's a gift.", portuguese: "Você pode colocar em uma sacola? É um presente.", isPrimary: true },
      { speaker: "Seller", english: "Sure thing! Have a wonderful day.", portuguese: "Com certeza! Tenha um dia maravilhoso.", isPrimary: false }],
    flashcards: [
      { english: "I want to buy clothes.", portuguese: "Eu quero comprar roupas." },
      { english: "These shoes are nice.", portuguese: "Esses sapatos são bonitos." },
      { english: "What is your size?", portuguese: "Qual é o seu tamanho?" },
      { english: "The price is too high.", portuguese: "O preço está muito alto." },
      { english: "Can I try this on?", portuguese: "Posso experimentar isso?" },
      { english: "The store closes at 9 PM.", portuguese: "A loja fecha às 21h." },
      { english: "Do you accept credit card?", portuguese: "Vocês aceitam cartão de crédito?" },
      { english: "The jacket is very cheap.", portuguese: "A jaqueta está muito barata." },
      { english: "Where is the fitting room?", portuguese: "Onde fica o provador?" },
      { english: "I will pay with cash.", portuguese: "Eu vou pagar em dinheiro." },
      { english: "This dress is on sale.", portuguese: "Este vestido está em promoção." },
      { english: "I need to buy a gift.", portuguese: "Preciso comprar um presente." }],
    quiz: [
      { question: 'How do you ask to try a shirt on?', options: ["Can I use this?", "Can I try this on?", "Can I wear now?", "Can I put on?"], correctIndex: 1, explanation: '"Try on" is the phrasal verb for testing clothes for fit.' },
      { question: 'Translate: "Qual é o seu tamanho?"', options: ["What is your number?", "What is your height?", "What is your size?", "What is your price?"], correctIndex: 2, explanation: '"Tamanho" translates to "Size".' },
      { question: 'What does "Price" mean?', options: ["Prêmio", "Preço", "Prato", "Presente"], correctIndex: 1, explanation: '"Price" is the amount of money expected in payment ("Preço").' },
      { question: 'Where do you go to try on clothes in a store?', options: ["Bathroom", "Checkout", "Fitting room", "Aisle"], correctIndex: 2, explanation: 'You use the "Fitting room" (provador).' },
      { question: 'What is the opposite of "Expensive"?', options: ["Cheap", "Costly", "High", "Sale"], correctIndex: 0, explanation: '"Cheap" means barato, the opposite of expensive (caro).' },
      { question: 'How do you say "Promoção"?', options: ["Promotion", "Sale", "Price", "Buy"], correctIndex: 1, explanation: 'In retail, a "Sale" means items are discounted.' },
      { question: 'Complete: "I need to buy new _____ for the party."', options: ["clothes", "cloths", "clothing", "clothe"], correctIndex: 0, explanation: '"Clothes" is the plural noun for garments (roupas).' },
      { question: 'Translate "Cliente".', options: ["Seller", "Owner", "Customer", "Manager"], correctIndex: 2, explanation: '"Customer" translates to Cliente.' },
      { question: 'What do you wear on your feet?', options: ["Gloves", "Hats", "Shirts", "Shoes"], correctIndex: 3, explanation: 'You wear Shoes (sapatos) on your feet.' },
      { question: 'How do you say "Quanto custa?"', options: ["How many is it?", "How much is it?", "What price?", "How to pay?"], correctIndex: 1, explanation: '"How much is it?" is the most natural way to ask the price.' }],
    trueOrFalse: {
      part1: [
        { statement: "You use a fitting room to eat.", statementPt: "Você usa um provador para comer.", isTrue: false, explanation: "You use a fitting room to try on clothes (experimentar roupas)." },
      { statement: "A wallet is where you keep your money.", statementPt: "Uma carteira é onde você guarda seu dinheiro.", isTrue: true, explanation: "Wallet means carteira." },
      { statement: "When something is on sale, it is usually cheaper.", statementPt: "Quando algo está em promoção, geralmente é mais barato.", isTrue: true, explanation: "Sale means promoção, cheap means barato." },
      { statement: "A customer sells things in the store.", statementPt: "Um cliente vende coisas na loja.", isTrue: false, explanation: "A customer (cliente) buys things. The seller (vendedor) sells them." },
      { statement: "You wear shoes on your feet.", statementPt: "Você usa sapatos nos seus pés.", isTrue: true, explanation: "Shoes means sapatos." },
        { statement: "A cashier is the person you pay.", statementPt: "O caixa é a pessoa que você paga.", isTrue: true, explanation: "Cashier means caixa (pessoa)." }
      ],
      part2: [
        { statement: "A wallet is where you keep money.", statementPt: "Uma carteira é onde você guarda dinheiro.", isTrue: true, explanation: "Wallet means carteira." },
        { statement: "A credit card is made of paper.", statementPt: "Um cartão de crédito é feito de papel.", isTrue: false, explanation: "Credit cards are made of plastic." },
        { statement: "A receipt is proof you paid.", statementPt: "Um recibo é a prova de que você pagou.", isTrue: true, explanation: "Receipt means recibo." },
        { statement: "You wear a medium size if you are very big.", statementPt: "Você usa tamanho médio se você é muito grande.", isTrue: false, explanation: "Large is for big sizes, medium is in the middle." },
        { statement: "A fitting room is where you eat in a store.", statementPt: "Um provador é onde você come na loja.", isTrue: false, explanation: "A fitting room is where you try on clothes." },
        { statement: "When something is on sale, it is cheaper.", statementPt: "Quando algo está na promoção, é mais barato.", isTrue: true, explanation: "On sale means na promoção." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you go to the shopping mall often?", translation: "Você vai ao shopping frequentemente?" },
        { question: "Do you like to buy cheap or expensive things?", translation: "Você gosta de comprar coisas baratas ou caras?" },
        { question: "Do you usually ask for a discount when you buy something?", translation: "Você costuma pedir um desconto quando compra algo?" },
        { question: "Where do you pay for your items in a store?", translation: "Onde você paga pelos seus itens em uma loja?" },
        { question: "Do you often visit the store near your house?", translation: "Você visita frequentemente a loja perto da sua casa?" },
        { question: "Do you think food is expensive in your city?", translation: "Você acha que a comida é cara na sua cidade?" },
        { question: "Do you know anyone who works as a cashier?", translation: "Você conhece alguém que trabalha como caixa?" }
      ],
      part2: [
        { question: "Do you use a credit card or a wallet?", translation: "Você usa cartão de crédito ou carteira?" },
        { question: "What size clothes do you usually wear: small, medium, or large?", translation: "Que tamanho de roupa você costuma usar: pequeno, médio ou grande?" },
        { question: "Do you always use the fitting room before buying clothes?", translation: "Você sempre usa o provador antes de comprar roupas?" },
        { question: "Do you like buying clothes when they are on sale?", translation: "Você gosta de comprar roupas quando estão na promoção?" },
        { question: "Do you ever forget your wallet at home?", translation: "Você já esqueceu sua carteira em casa?" },
        { question: "Do you prefer small or large bags?", translation: "Você prefere bolsas pequenas ou grandes?" },
        { question: "Do you keep the receipt when you buy shoes?", translation: "Você guarda o recibo quando compra sapatos?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "I need to buy new clothes.", portuguese: "Preciso comprar roupas novas." }, { english: "Can I try this on?", portuguese: "Posso experimentar isto?" }, { english: "The customer is always right.", portuguese: "O cliente tem sempre razão." }, { english: "I found a very cheap shirt.", portuguese: "Encontrei uma camisa muito barata." }, { english: "It is cold, put on a jacket.", portuguese: "Está frio, coloque uma jaqueta." }, { english: "Look in the mirror.", portuguese: "Olhe no espelho." } ],
                    level2: [ { english: "She bought expensive clothes for the wedding.", portuguese: "Ela comprou roupas caras para o casamento." }, { english: "She tried on three different dresses.", portuguese: "Ela experimentou três vestidos diferentes." }, { english: "The demanding customer asked to speak with the manager.", portuguese: "O cliente exigente pediu para falar com o gerente." }, { english: "He preferred cheap options to save money.", portuguese: "Ele preferia opções baratas para economizar dinheiro." }, { english: "He wore a thick jacket because of the cold wind.", portuguese: "Ele usou uma jaqueta grossa por causa do vento frio." }, { english: "She looked at herself in the mirror before leaving.", portuguese: "Ela olhou para si mesma no espelho antes de sair." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Clothes means Roupas.", statementPt: "Clothes significa Roupas.", isTrue: true, explanation: "Yes, Clothes means Roupas." }, { statement: "Shoes means a type of car.", statementPt: "Shoes significa um tipo de carro.", isTrue: false, explanation: "No, Shoes means Sapatos." }, { statement: "Size means Tamanho.", statementPt: "Size significa Tamanho.", isTrue: true, explanation: "Yes, Size means Tamanho." }, { statement: "Price means a type of car.", statementPt: "Price significa um tipo de carro.", isTrue: false, explanation: "No, Price means Preço." }, { statement: "Try on means Experimentar.", statementPt: "Try on significa Experimentar.", isTrue: true, explanation: "Yes, Try on means Experimentar." }, { statement: "Store / Shop means a type of car.", statementPt: "Store / Shop significa um tipo de carro.", isTrue: false, explanation: "No, Store / Shop means Loja." }, { statement: "Fitting room means Provador.", statementPt: "Fitting room significa Provador.", isTrue: true, explanation: "Yes, Fitting room means Provador." }, { statement: "Sale means a type of car.", statementPt: "Sale significa um tipo de carro.", isTrue: false, explanation: "No, Sale means Promoção / Liquidação." }, { statement: "Customer means Cliente.", statementPt: "Customer significa Cliente.", isTrue: true, explanation: "Yes, Customer means Cliente." }, { statement: "Expensive means a type of car.", statementPt: "Expensive significa um tipo de carro.", isTrue: false, explanation: "No, Expensive means Caro." } ],
                    part2: [ { statement: "Cheap means Barato.", statementPt: "Cheap significa Barato.", isTrue: true, explanation: "Yes, Cheap means Barato." }, { statement: "Wallet means a type of car.", statementPt: "Wallet significa um tipo de carro.", isTrue: false, explanation: "No, Wallet means Carteira." }, { statement: "Credit card means Cartão de crédito.", statementPt: "Credit card significa Cartão de crédito.", isTrue: true, explanation: "Yes, Credit card means Cartão de crédito." }, { statement: "Cash means a type of car.", statementPt: "Cash significa um tipo de carro.", isTrue: false, explanation: "No, Cash means Dinheiro (espécie)." }, { statement: "Jacket means Jaqueta.", statementPt: "Jacket significa Jaqueta.", isTrue: true, explanation: "Yes, Jacket means Jaqueta." }, { statement: "Pants means a type of car.", statementPt: "Pants significa um tipo de carro.", isTrue: false, explanation: "No, Pants means Calças." }, { statement: "Dress means Vestido.", statementPt: "Dress significa Vestido.", isTrue: true, explanation: "Yes, Dress means Vestido." }, { statement: "Hat means a type of car.", statementPt: "Hat significa um tipo de carro.", isTrue: false, explanation: "No, Hat means Chapéu / Boné." }, { statement: "Mirror means Espelho.", statementPt: "Mirror significa Espelho.", isTrue: true, explanation: "Yes, Mirror means Espelho." }, { statement: "Gift means a type of car.", statementPt: "Gift significa um tipo de carro.", isTrue: false, explanation: "No, Gift means Presente." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Clothes\" in a sentence in the past simple?", translation: "Você consegue usar \"Clothes\" em uma frase no passado simples?" }, { question: "Can you use \"Shoes\" in a sentence in the past simple?", translation: "Você consegue usar \"Shoes\" em uma frase no passado simples?" }, { question: "Can you use \"Size\" in a sentence in the past simple?", translation: "Você consegue usar \"Size\" em uma frase no passado simples?" }, { question: "Can you use \"Price\" in a sentence in the past simple?", translation: "Você consegue usar \"Price\" em uma frase no passado simples?" }, { question: "Can you use \"Try on\" in a sentence in the past simple?", translation: "Você consegue usar \"Try on\" em uma frase no passado simples?" }, { question: "Can you use \"Store / Shop\" in a sentence in the past simple?", translation: "Você consegue usar \"Store / Shop\" em uma frase no passado simples?" }, { question: "Can you use \"Fitting room\" in a sentence in the past simple?", translation: "Você consegue usar \"Fitting room\" em uma frase no passado simples?" }, { question: "Can you use \"Sale\" in a sentence in the past simple?", translation: "Você consegue usar \"Sale\" em uma frase no passado simples?" }, { question: "Can you use \"Customer\" in a sentence in the past simple?", translation: "Você consegue usar \"Customer\" em uma frase no passado simples?" }, { question: "Can you use \"Expensive\" in a sentence in the past simple?", translation: "Você consegue usar \"Expensive\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Cheap\" in a sentence in the past simple?", translation: "Você consegue usar \"Cheap\" em uma frase no passado simples?" }, { question: "Can you use \"Wallet\" in a sentence in the past simple?", translation: "Você consegue usar \"Wallet\" em uma frase no passado simples?" }, { question: "Can you use \"Credit card\" in a sentence in the past simple?", translation: "Você consegue usar \"Credit card\" em uma frase no passado simples?" }, { question: "Can you use \"Cash\" in a sentence in the past simple?", translation: "Você consegue usar \"Cash\" em uma frase no passado simples?" }, { question: "Can you use \"Jacket\" in a sentence in the past simple?", translation: "Você consegue usar \"Jacket\" em uma frase no passado simples?" }, { question: "Can you use \"Pants\" in a sentence in the past simple?", translation: "Você consegue usar \"Pants\" em uma frase no passado simples?" }, { question: "Can you use \"Dress\" in a sentence in the past simple?", translation: "Você consegue usar \"Dress\" em uma frase no passado simples?" }, { question: "Can you use \"Hat\" in a sentence in the past simple?", translation: "Você consegue usar \"Hat\" em uma frase no passado simples?" }, { question: "Can you use \"Mirror\" in a sentence in the past simple?", translation: "Você consegue usar \"Mirror\" em uma frase no passado simples?" }, { question: "Can you use \"Gift\" in a sentence in the past simple?", translation: "Você consegue usar \"Gift\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "profissoes",
    title: "Professions",
    titlePt: "Profissões",
    description: "Learn about different jobs and professions.",
    descriptionPt: "Aprenda sobre diferentes trabalhos e profissões.",
    icon: "Briefcase",
    image: "/images/profissoes.png",
    color: "indigo",
    available: true,
    vocabulary: [
      { english: "Doctor", portuguese: "Médico(a)",
          levels: { 
                        A1: { en: "The doctor checks the patient.", pt: "O médico checa o paciente." }, 
                        A2: { en: "The experienced doctor successfully treated the patient.", pt: "O médico experiente tratou o paciente com sucesso." }
                      }
    },
      { english: "Teacher", portuguese: "Professor(a)",
          levels: { 
                        A1: { en: "My teacher is very smart.", pt: "Meu professor é muito inteligente." }, 
                        A2: { en: "The dedicated teacher helped her students after class.", pt: "A professora dedicada ajudou seus alunos depois da aula." }
                      }
    },
      { english: "Engineer", portuguese: "Engenheiro(a)",
          levels: { 
                        A1: { en: "The engineer builds a bridge.", pt: "O engenheiro constrói uma ponte." }, 
                        A2: { en: "The civil engineer designed a robust bridge.", pt: "O engenheiro civil projetou uma ponte robusta." }
                      }
    },
      { english: "Chef", portuguese: "Chefe de cozinha",
          levels: { 
                        A1: { en: "The chef makes delicious food.", pt: "O chefe faz comida deliciosa." }, 
                        A2: { en: "The head chef prepared a complex gourmet dish.", pt: "O chef principal preparou um prato gourmet complexo." }
                      }
    },
      { english: "Police officer", portuguese: "Policial",
          levels: { 
                        A1: { en: "The police officer helps us.", pt: "O policial nos ajuda." }, 
                        A2: { en: "The brave police officer stopped the thief.", pt: "O policial corajoso parou o ladrão." }
                      }
    },
      { english: "Work / Job", portuguese: "Trabalho / Emprego",
          levels: { 
                        A1: { en: "I love my new job.", pt: "Eu amo meu novo emprego." }, 
                        A2: { en: "She started her new job at the international bank.", pt: "Ela começou seu novo emprego no banco internacional." }
                      }
    },
      { english: "Nurse", portuguese: "Enfermeiro(a)",
          levels: { 
                        A1: { en: "The nurse is very kind.", pt: "A enfermeira é muito gentil." }, 
                        A2: { en: "The nurse checked his blood pressure regularly.", pt: "O enfermeiro verificou a pressão arterial dele regularmente." }
                      }
    },
      { english: "Mechanic", portuguese: "Mecânico",
          levels: { 
                        A1: { en: "The mechanic fixes my car.", pt: "O mecânico conserta meu carro." }, 
                        A2: { en: "The mechanic fixed the broken engine quickly.", pt: "O mecânico consertou o motor quebrado rapidamente." }
                      }
    },
      { english: "Lawyer", portuguese: "Advogado(a)",
          levels: { 
                        A1: { en: "She is a famous lawyer.", pt: "Ela é uma advogada famosa." }, 
                        A2: { en: "The corporate lawyer defended the company in court.", pt: "O advogado corporativo defendeu a empresa no tribunal." }
                      }
    },
      { english: "Office", portuguese: "Escritório",
          levels: { 
                        A1: { en: "I work in an office.", pt: "Eu trabalho em um escritório." }, 
                        A2: { en: "He organized his desk in the modern office.", pt: "Ele organizou sua mesa no escritório moderno." }
                      }
    },
      { english: "Dentist", portuguese: "Dentista",
          levels: { 
                        A1: { en: "The dentist cleans my teeth.", pt: "O dentista limpa meus dentes." }, 
                        A2: { en: "The dentist extracted the painful tooth carefully.", pt: "O dentista extraiu o dente dolorido com cuidado." }
                      }
    },
      { english: "Firefighter", portuguese: "Bombeiro",
          levels: { 
                        A1: { en: "The firefighter saves the cat.", pt: "O bombeiro salva o gato." }, 
                        A2: { en: "The courageous firefighter rescued the family from the fire.", pt: "O bombeiro corajoso resgatou a família do incêndio." }
                      }
    },
      { english: "Driver", portuguese: "Motorista",
          levels: { 
                        A1: { en: "The bus driver is very polite.", pt: "O motorista do ônibus é muito educado." }, 
                        A2: { en: "The skilled driver avoided a serious accident.", pt: "O motorista habilidoso evitou um acidente grave." }
                      }
    },
      { english: "Pilot", portuguese: "Piloto",
          levels: { 
                        A1: { en: "The pilot flies the airplane.", pt: "O piloto voa o avião." }, 
                        A2: { en: "The commercial pilot landed the airplane safely.", pt: "O piloto comercial pousou o avião com segurança." }
                      }
    },
      { english: "Artist", portuguese: "Artista",
          levels: { 
                        A1: { en: "He is a talented artist.", pt: "Ele é um artista talentoso." }, 
                        A2: { en: "The famous artist painted a beautiful mural.", pt: "O artista famoso pintou um lindo mural." }
                      }
    },
      { english: "Farmer", portuguese: "Fazendeiro",
          levels: { 
                        A1: { en: "The farmer works early in the morning.", pt: "O fazendeiro trabalha de manhã cedo." }, 
                        A2: { en: "The hardworking farmer harvested the crops early in the morning.", pt: "O fazendeiro trabalhador colheu as safras de manhã cedo." }
                      }
    },
      { english: "Waiter", portuguese: "Garçom",
          levels: { 
                        A1: { en: "The waiter brings our food.", pt: "O garçom traz nossa comida." }, 
                        A2: { en: "The polite waiter served the food with a smile.", pt: "O garçom educado serviu a comida com um sorriso." }
                      }
    },
      { english: "Company", portuguese: "Empresa",
          levels: { 
                        A1: { en: "She works for a big company.", pt: "Ela trabalha para uma grande empresa." }, 
                        A2: { en: "The technology company launched a new software product.", pt: "A empresa de tecnologia lançou um novo produto de software." }
                      }
    },
      { english: "Boss", portuguese: "Chefe (trabalho)",
          levels: { 
                        A1: { en: "My boss is a fair person.", pt: "Meu chefe é uma pessoa justa." }, 
                        A2: { en: "The demanding boss requested a detailed report.", pt: "O chefe exigente solicitou um relatório detalhado." }
                      }
    },
      { english: "Salary", portuguese: "Salário",
          levels: { 
                        A1: { en: "He gets a good salary.", pt: "Ele recebe um bom salário." }, 
                        A2: { en: "She negotiated a higher salary during the interview.", pt: "Ela negociou um salário mais alto durante a entrevista." }
                      }
    },
      { english: "Apply for", portuguese: "Candidatar-se a",
          levels: { 
                        B1: { en: "She decided to apply for the manager position in the company.", pt: "Ela decidiu se candidatar à vaga de gerente na empresa." } 
                      }
    },
      { english: "Hire", portuguese: "Contratar",
          levels: { 
                        B1: { en: "They want to hire five new developers by the end of the year.", pt: "Eles querem contratar cinco novos desenvolvedores até o final do ano." } 
                      }
    },
      { english: "Fire / Sack", portuguese: "Demitir",
          levels: { 
                        B1: { en: "He was fired because he was constantly late for work.", pt: "Ele foi demitido porque chegava constantemente atrasado no trabalho." } 
                      }
    },
      { english: "Promotion", portuguese: "Promoção (no trabalho)",
          levels: { 
                        B1: { en: "She received a well-deserved promotion after working hard all year.", pt: "Ela recebeu uma promoção merecida após trabalhar duro o ano todo." } 
                      }
    },
      { english: "Salary", portuguese: "Salário",
          levels: { 
                        B1: { en: "He accepted the job offer because the salary was excellent.", pt: "Ele aceitou a oferta de emprego porque o salário era excelente." } 
                      }
    },
      { english: "Colleague", portuguese: "Colega de trabalho",
          levels: { 
                        B1: { en: "I had lunch with a colleague from the marketing department.", pt: "Eu almocei com uma colega de trabalho do departamento de marketing." } 
                      }
    },
      { english: "Shift", portuguese: "Turno (de trabalho)",
          levels: { 
                        B1: { en: "The nurse works the night shift at the local hospital.", pt: "A enfermeira trabalha no turno da noite no hospital local." } 
                      }
    },
      { english: "Quit / Resign", portuguese: "Pedir demissão",
          levels: { 
                        B1: { en: "He decided to quit his job and travel around the world.", pt: "Ele decidiu pedir demissão do seu emprego e viajar pelo mundo." } 
                      }
    },
      { english: "Apply for", portuguese: "Candidatar-se a",
          levels: { 
                        B1: { en: "I am going to apply for the marketing manager position tomorrow.", pt: "Vou me candidatar para a vaga de gerente de marketing amanhã." } 
                      }
    },
      { english: "Hire", portuguese: "Contratar",
          levels: { 
                        B1: { en: "The company plans to hire fifty new engineers by the end of the year.", pt: "A empresa planeja contratar cinquenta novos engenheiros até o final do ano." } 
                      }
    },
      { english: "Fire", portuguese: "Demitir",
          levels: { 
                        B1: { en: "They had to fire him because he was consistently late for work.", pt: "Eles tiveram que demiti-lo porque ele estava consistentemente atrasado para o trabalho." } 
                      }
    },
      { english: "Resign", portuguese: "Pedir demissão",
          levels: { 
                        B1: { en: "She decided to resign from her job due to high stress levels.", pt: "Ela decidiu pedir demissão do emprego devido aos altos níveis de estresse." } 
                      }
    },
      { english: "Promote", portuguese: "Promover",
          levels: { 
                        B1: { en: "After three years of hard work, he was finally promoted to supervisor.", pt: "Depois de três anos de trabalho duro, ele finalmente foi promovido a supervisor." } 
                      }
    },
      { english: "Take over", portuguese: "Assumir (um cargo/tarefa)",
          levels: { 
                        B1: { en: "When the boss retires next month, I will take over his responsibilities.", pt: "Quando o chefe se aposentar no mês que vem, eu assumirei as responsabilidades dele." } 
                      }
    },
      { english: "Lay off", portuguese: "Demitir (por corte de gastos)",
          levels: { 
                        B1: { en: "The factory had to lay off hundreds of workers during the economic crisis.", pt: "A fábrica teve que demitir centenas de trabalhadores durante a crise econômica." } 
                      }
    },
      { english: "Work out", portuguese: "Dar certo / Resolver-se",
          levels: { 
                        B1: { en: "Don't worry about the project, everything will work out fine in the end.", pt: "Não se preocupe com o projeto, tudo dará certo no final." } 
                      }
    },
      { english: "Shift", portuguese: "Turno",
          levels: { 
                        B1: { en: "Nurses often have to work long night shifts at the hospital.", pt: "Enfermeiras frequentemente têm que trabalhar em longos turnos da noite no hospital." } 
                      }
    },
      { english: "Commute", portuguese: "Trajeto casa-trabalho",
          levels: { 
                        B1: { en: "My daily commute to the office takes almost an hour by train.", pt: "Meu trajeto diário para o escritório leva quase uma hora de trem." } 
                      }
    },
      { english: "Wage", portuguese: "Salário (pago por hora/dia)",
          levels: { 
                        B1: { en: "Many students work part-time jobs trying to earn a minimum wage.", pt: "Muitos estudantes trabalham em empregos de meio período tentando ganhar um salário mínimo." } 
                      }
    },
      { english: "Retire", portuguese: "Aposentar-se",
          levels: { 
                        B1: { en: "My grandfather plans to retire and move to the countryside next year.", pt: "Meu avô planeja se aposentar e se mudar para o interior no ano que vem." } 
                      }
    }
      ],
    dialogue: [
      { speaker: "Sarah", english: "What do you do for a living, Paul?", portuguese: "O que você faz da vida, Paul?", isPrimary: false },
      { speaker: "Paul", english: "I am an engineer. I build software. What about you?", portuguese: "Eu sou engenheiro. Eu construo software. E você?", isPrimary: true },
      { speaker: "Sarah", english: "I work as a teacher in a high school.", portuguese: "Eu trabalho como professora em uma escola de ensino médio.", isPrimary: false },
      { speaker: "Paul", english: "That sounds like a hard job!", portuguese: "Isso parece um trabalho difícil!", isPrimary: true },
      { speaker: "Sarah", english: "It is, but I love my students. My brother is a firefighter.", portuguese: "É, mas eu amo meus alunos. Meu irmão é bombeiro.", isPrimary: false },
      { speaker: "Paul", english: "Wow, that is very dangerous. Does he like his job?", portuguese: "Uau, isso é muito perigoso. Ele gosta do emprego dele?", isPrimary: true },
      { speaker: "Sarah", english: "Yes, he loves helping people. And my father is a dentist.", portuguese: "Sim, ele ama ajudar as pessoas. E meu pai é dentista.", isPrimary: false },
      { speaker: "Paul", english: "You have a family of heroes! I just sit in an office.", portuguese: "Você tem uma família de heróis! Eu apenas sento em um escritório.", isPrimary: true },
      { speaker: "Sarah", english: "Building software is important too. Every job has its value.", portuguese: "Construir software é importante também. Todo trabalho tem seu valor.", isPrimary: false },
      { speaker: "Paul", english: "Thank you, Sarah. You are completely right.", portuguese: "Obrigado, Sarah. Você está completamente certa.", isPrimary: true }],
    flashcards: [
      { english: "She is a good doctor.", portuguese: "Ela é uma boa médica." },
      { english: "My teacher is very patient.", portuguese: "Meu professor é muito paciente." },
      { english: "He works as an engineer.", portuguese: "Ele trabalha como engenheiro." },
      { english: "The chef cooked a great meal.", portuguese: "O chefe preparou uma ótima refeição." },
      { english: "The police officer helped me.", portuguese: "O policial me ajudou." },
      { english: "I love my job.", portuguese: "Eu amo meu emprego." },
      { english: "My boss is very nice.", portuguese: "Meu chefe é muito legal." },
      { english: "The dentist is fixing my tooth.", portuguese: "O dentista está arrumando meu dente." },
      { english: "He is a bus driver.", portuguese: "Ele é um motorista de ônibus." },
      { english: "The company pays a good salary.", portuguese: "A empresa paga um bom salário." },
      { english: "The firefighter was brave.", portuguese: "O bombeiro foi corajoso." },
      { english: "The waiter is coming.", portuguese: "O garçom está vindo." }],
    quiz: [
      { question: 'Which profession works in a school?', options: ["Doctor", "Engineer", "Chef", "Teacher"], correctIndex: 3, explanation: 'A "Teacher" (Professor) works in a school.' },
      { question: 'How do you say "Trabalho" in English?', options: ["Work / Job", "Play", "Study", "Travel"], correctIndex: 0, explanation: '"Work" or "Job" mean "Trabalho" or "Emprego".' },
      { question: 'Translate: "Ele trabalha como engenheiro."', options: ["He is engineering.", "He works as an engineer.", "He likes engineers.", "He makes engines."], correctIndex: 1, explanation: '"Trabalhar como" is "work as".' },
      { question: 'Who fixes broken cars?', options: ["Doctor", "Mechanic", "Lawyer", "Nurse"], correctIndex: 1, explanation: 'A "Mechanic" fixes cars.' },
      { question: 'How do you ask "O que você faz da vida?"', options: ["What do you do?", "What are you making?", "What is your life?", "Who are you?"], correctIndex: 0, explanation: '"What do you do?" or "What do you do for a living?" are standard ways to ask about someone\'s profession.' },
      { question: 'What does a "Lawyer" do?', options: ["Cooks food", "Fights fires", "Defends clients in court", "Teaches kids"], correctIndex: 2, explanation: 'A Lawyer is an advogado, who works with the law.' },
      { question: 'Where do many administrative people work?', options: ["Hospital", "Restaurant", "Office", "Street"], correctIndex: 2, explanation: '"Office" means escritório.' },
      { question: 'Translate "Enfermeira".', options: ["Doctor", "Nurse", "Chef", "Pilot"], correctIndex: 1, explanation: '"Nurse" translates to enfermeira/enfermeiro.' },
      { question: 'Who protects the citizens and enforces laws?', options: ["Teacher", "Police officer", "Mechanic", "Engineer"], correctIndex: 1, explanation: 'The "Police officer" (Policial) protects citizens.' },
      { question: 'Complete: "She is a very good _____."', options: ["cooker", "chef", "cooking", "cooked"], correctIndex: 1, explanation: 'A professional cook is often called a "Chef".' }],
    trueOrFalse: {
      part1: [
        { statement: "A mechanic fixes cars.", statementPt: "Um mecânico conserta carros.", isTrue: true, explanation: "Mechanic means mecânico." },
      { statement: "A pilot works in a hospital.", statementPt: "Um piloto trabalha em um hospital.", isTrue: false, explanation: "A pilot flies airplanes. A doctor or nurse works in a hospital." },
      { statement: "Your boss is the person who manages you at work.", statementPt: "Seu chefe é a pessoa que te gerencia no trabalho.", isTrue: true, explanation: "Boss means chefe." },
      { statement: "A lawyer cooks food in a restaurant.", statementPt: "Um advogado cozinha comida em um restaurante.", isTrue: false, explanation: "A chef cooks food. A lawyer (advogado) works with the law." },
      { statement: "Salary is the money you get for your job.", statementPt: "Salário é o dinheiro que você recebe pelo seu trabalho.", isTrue: true, explanation: "Salary means salário." },
        { statement: "A doctor helps sick people.", statementPt: "Um médico ajuda pessoas doentes.", isTrue: true, explanation: "Doctor means médico." }
      ],
      part2: [
        { statement: "An engineer builds things.", statementPt: "Um engenheiro constrói coisas.", isTrue: true, explanation: "Engineer means engenheiro." },
        { statement: "A pilot works in a hospital.", statementPt: "Um piloto trabalha em um hospital.", isTrue: false, explanation: "A pilot works in airplanes." },
        { statement: "A boss is the person in charge.", statementPt: "Um chefe é a pessoa no comando.", isTrue: true, explanation: "Boss means chefe." },
        { statement: "An employee works for a boss.", statementPt: "Um empregado trabalha para um chefe.", isTrue: true, explanation: "Employee means empregado." },
        { statement: "A lawyer fixes cars.", statementPt: "Um advogado conserta carros.", isTrue: false, explanation: "A mechanic fixes cars." },
        { statement: "A meeting is when people talk about work.", statementPt: "Uma reunião é quando as pessoas falam sobre o trabalho.", isTrue: true, explanation: "Meeting means reunião." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "What is your job?", translation: "Qual é o seu trabalho?" },
        { question: "Do you know any good doctors or nurses?", translation: "Você conhece bons médicos ou enfermeiros?" },
        { question: "Do you think it is hard to be a police officer?", translation: "Você acha que é difícil ser policial?" },
        { question: "Have you ever worked as a waiter or waitress?", translation: "Você já trabalhou como garçom ou garçonete?" },
        { question: "Did you have a favorite teacher when you were a student?", translation: "Você tinha um professor favorito quando era estudante?" },
        { question: "Do you think firefighters are brave?", translation: "Você acha que os bombeiros são corajosos?" },
        { question: "Are you a good driver?", translation: "Você é um bom motorista?" }
      ],
      part2: [
        { question: "Do you like your boss?", translation: "Você gosta do seu chefe?" },
        { question: "Do you work in an office?", translation: "Você trabalha em um escritório?" },
        { question: "Is having a high salary important to you?", translation: "Ter um salário alto é importante para você?" },
        { question: "Do you have many meetings at work?", translation: "Você tem muitas reuniões no trabalho?" },
        { question: "Do you know any engineers or mechanics?", translation: "Você conhece algum engenheiro ou mecânico?" },
        { question: "Would you like to be a pilot?", translation: "Você gostaria de ser um piloto?" },
        { question: "Do you think employees should get a higher salary?", translation: "Você acha que os empregados deveriam receber um salário maior?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "The doctor is checking the patient.", portuguese: "O médico está checando o paciente." }, { english: "The police officer helped us.", portuguese: "O policial nos ajudou." }, { english: "She is a famous lawyer.", portuguese: "Ela é uma advogada famosa." }, { english: "The dentist cleaned my teeth.", portuguese: "O dentista limpou meus dentes." }, { english: "He is a talented artist.", portuguese: "Ele é um artista talentoso." }, { english: "My boss is a fair person.", portuguese: "Meu chefe é uma pessoa justa." } ],
                    level2: [ { english: "The experienced doctor successfully treated the patient.", portuguese: "O médico experiente tratou o paciente com sucesso." }, { english: "The brave police officer stopped the thief.", portuguese: "O policial corajoso parou o ladrão." }, { english: "The corporate lawyer defended the company in court.", portuguese: "O advogado corporativo defendeu a empresa no tribunal." }, { english: "The dentist extracted the painful tooth carefully.", portuguese: "O dentista extraiu o dente dolorido com cuidado." }, { english: "The famous artist painted a beautiful mural.", portuguese: "O artista famoso pintou um lindo mural." }, { english: "The demanding boss requested a detailed report.", portuguese: "O chefe exigente solicitou um relatório detalhado." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Doctor means Médico(a).", statementPt: "Doctor significa Médico(a).", isTrue: true, explanation: "Yes, Doctor means Médico(a)." }, { statement: "Teacher means a type of car.", statementPt: "Teacher significa um tipo de carro.", isTrue: false, explanation: "No, Teacher means Professor(a)." }, { statement: "Engineer means Engenheiro(a).", statementPt: "Engineer significa Engenheiro(a).", isTrue: true, explanation: "Yes, Engineer means Engenheiro(a)." }, { statement: "Chef means a type of car.", statementPt: "Chef significa um tipo de carro.", isTrue: false, explanation: "No, Chef means Chefe de cozinha." }, { statement: "Police officer means Policial.", statementPt: "Police officer significa Policial.", isTrue: true, explanation: "Yes, Police officer means Policial." }, { statement: "Work / Job means a type of car.", statementPt: "Work / Job significa um tipo de carro.", isTrue: false, explanation: "No, Work / Job means Trabalho / Emprego." }, { statement: "Nurse means Enfermeiro(a).", statementPt: "Nurse significa Enfermeiro(a).", isTrue: true, explanation: "Yes, Nurse means Enfermeiro(a)." }, { statement: "Mechanic means a type of car.", statementPt: "Mechanic significa um tipo de carro.", isTrue: false, explanation: "No, Mechanic means Mecânico." }, { statement: "Lawyer means Advogado(a).", statementPt: "Lawyer significa Advogado(a).", isTrue: true, explanation: "Yes, Lawyer means Advogado(a)." }, { statement: "Office means a type of car.", statementPt: "Office significa um tipo de carro.", isTrue: false, explanation: "No, Office means Escritório." } ],
                    part2: [ { statement: "Dentist means Dentista.", statementPt: "Dentist significa Dentista.", isTrue: true, explanation: "Yes, Dentist means Dentista." }, { statement: "Firefighter means a type of car.", statementPt: "Firefighter significa um tipo de carro.", isTrue: false, explanation: "No, Firefighter means Bombeiro." }, { statement: "Driver means Motorista.", statementPt: "Driver significa Motorista.", isTrue: true, explanation: "Yes, Driver means Motorista." }, { statement: "Pilot means a type of car.", statementPt: "Pilot significa um tipo de carro.", isTrue: false, explanation: "No, Pilot means Piloto." }, { statement: "Artist means Artista.", statementPt: "Artist significa Artista.", isTrue: true, explanation: "Yes, Artist means Artista." }, { statement: "Farmer means a type of car.", statementPt: "Farmer significa um tipo de carro.", isTrue: false, explanation: "No, Farmer means Fazendeiro." }, { statement: "Waiter means Garçom.", statementPt: "Waiter significa Garçom.", isTrue: true, explanation: "Yes, Waiter means Garçom." }, { statement: "Company means a type of car.", statementPt: "Company significa um tipo de carro.", isTrue: false, explanation: "No, Company means Empresa." }, { statement: "Boss means Chefe (trabalho).", statementPt: "Boss significa Chefe (trabalho).", isTrue: true, explanation: "Yes, Boss means Chefe (trabalho)." }, { statement: "Salary means a type of car.", statementPt: "Salary significa um tipo de carro.", isTrue: false, explanation: "No, Salary means Salário." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Doctor\" in a sentence in the past simple?", translation: "Você consegue usar \"Doctor\" em uma frase no passado simples?" }, { question: "Can you use \"Teacher\" in a sentence in the past simple?", translation: "Você consegue usar \"Teacher\" em uma frase no passado simples?" }, { question: "Can you use \"Engineer\" in a sentence in the past simple?", translation: "Você consegue usar \"Engineer\" em uma frase no passado simples?" }, { question: "Can you use \"Chef\" in a sentence in the past simple?", translation: "Você consegue usar \"Chef\" em uma frase no passado simples?" }, { question: "Can you use \"Police officer\" in a sentence in the past simple?", translation: "Você consegue usar \"Police officer\" em uma frase no passado simples?" }, { question: "Can you use \"Work / Job\" in a sentence in the past simple?", translation: "Você consegue usar \"Work / Job\" em uma frase no passado simples?" }, { question: "Can you use \"Nurse\" in a sentence in the past simple?", translation: "Você consegue usar \"Nurse\" em uma frase no passado simples?" }, { question: "Can you use \"Mechanic\" in a sentence in the past simple?", translation: "Você consegue usar \"Mechanic\" em uma frase no passado simples?" }, { question: "Can you use \"Lawyer\" in a sentence in the past simple?", translation: "Você consegue usar \"Lawyer\" em uma frase no passado simples?" }, { question: "Can you use \"Office\" in a sentence in the past simple?", translation: "Você consegue usar \"Office\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Dentist\" in a sentence in the past simple?", translation: "Você consegue usar \"Dentist\" em uma frase no passado simples?" }, { question: "Can you use \"Firefighter\" in a sentence in the past simple?", translation: "Você consegue usar \"Firefighter\" em uma frase no passado simples?" }, { question: "Can you use \"Driver\" in a sentence in the past simple?", translation: "Você consegue usar \"Driver\" em uma frase no passado simples?" }, { question: "Can you use \"Pilot\" in a sentence in the past simple?", translation: "Você consegue usar \"Pilot\" em uma frase no passado simples?" }, { question: "Can you use \"Artist\" in a sentence in the past simple?", translation: "Você consegue usar \"Artist\" em uma frase no passado simples?" }, { question: "Can you use \"Farmer\" in a sentence in the past simple?", translation: "Você consegue usar \"Farmer\" em uma frase no passado simples?" }, { question: "Can you use \"Waiter\" in a sentence in the past simple?", translation: "Você consegue usar \"Waiter\" em uma frase no passado simples?" }, { question: "Can you use \"Company\" in a sentence in the past simple?", translation: "Você consegue usar \"Company\" em uma frase no passado simples?" }, { question: "Can you use \"Boss\" in a sentence in the past simple?", translation: "Você consegue usar \"Boss\" em uma frase no passado simples?" }, { question: "Can you use \"Salary\" in a sentence in the past simple?", translation: "Você consegue usar \"Salary\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "lugares",
    title: "Public Places",
    titlePt: "Lugares Públicos",
    description: "Navigate public places and ask for directions.",
    descriptionPt: "Navegue por lugares públicos e peça direções.",
    icon: "MapPin",
    image: "/images/lugares.png",
    color: "cyan",
    available: true,
    vocabulary: [
      { english: "Park", portuguese: "Parque",
          levels: { 
                        A1: { en: "Lets walk in the park.", pt: "Vamos caminhar no parque." }, 
                        A2: { en: "Children played happily in the public park.", pt: "As crianças brincaram alegremente no parque público." }
                      }
    },
      { english: "Hospital", portuguese: "Hospital",
          levels: { 
                        A1: { en: "The hospital is down the street.", pt: "O hospital fica no final da rua." }, 
                        A2: { en: "The ambulance arrived at the emergency hospital.", pt: "A ambulância chegou ao hospital de emergência." }
                      }
    },
      { english: "School", portuguese: "Escola",
          levels: { 
                        A1: { en: "My kids are at school.", pt: "Meus filhos estão na escola." }, 
                        A2: { en: "The local school received new computers for the students.", pt: "A escola local recebeu novos computadores para os alunos." }
                      }
    },
      { english: "Bus stop", portuguese: "Ponto de ônibus",
          levels: { 
                        A1: { en: "Wait at the bus stop.", pt: "Espere no ponto de ônibus." }, 
                        A2: { en: "We waited for the bus at the bus stop for an hour.", pt: "Nós esperamos pelo ônibus no ponto de ônibus por uma hora." }
                      }
    },
      { english: "Street", portuguese: "Rua",
          levels: { 
                        A1: { en: "This street is very busy.", pt: "Esta rua é muito movimentada." }, 
                        A2: { en: "They walked down the busy street during rush hour.", pt: "Eles andaram pela rua movimentada durante a hora do rush." }
                      }
    },
      { english: "Turn left / right", portuguese: "Vire à esquerda / direita",
          levels: { 
                        A1: { en: "Turn left at the next corner.", pt: "Vire à esquerda na próxima esquina." }, 
                        A2: { en: "He turned left at the intersection to avoid traffic.", pt: "Ele virou à esquerda no cruzamento para evitar o trânsito." }
                      }
    },
      { english: "Library", portuguese: "Biblioteca",
          levels: { 
                        A1: { en: "I study at the library.", pt: "Eu estudo na biblioteca." }, 
                        A2: { en: "She borrowed three classic novels from the library.", pt: "Ela pegou três romances clássicos emprestados na biblioteca." }
                      }
    },
      { english: "Bank", portuguese: "Banco",
          levels: { 
                        A1: { en: "I need to go to the bank.", pt: "Eu preciso ir ao banco." }, 
                        A2: { en: "He deposited his entire paycheck at the bank.", pt: "Ele depositou todo o seu pagamento no banco." }
                      }
    },
      { english: "Go straight", portuguese: "Siga em frente",
          levels: { 
                        A1: { en: "Go straight for two blocks.", pt: "Siga em frente por dois quarteirões." }, 
                        A2: { en: "They went straight until they reached the museum.", pt: "Eles seguiram reto até chegarem ao museu." }
                      }
    },
      { english: "Near", portuguese: "Perto",
          levels: { 
                        A1: { en: "Is there a pharmacy near here?", pt: "Tem alguma farmácia perto daqui?" }, 
                        A2: { en: "They bought a house near the beautiful lake.", pt: "Eles compraram uma casa perto do lindo lago." }
                      }
    },
      { english: "Pharmacy", portuguese: "Farmácia",
          levels: { 
                        A1: { en: "I buy medicine at the pharmacy.", pt: "Eu compro remédio na farmácia." }, 
                        A2: { en: "He bought essential medicine at the nearby pharmacy.", pt: "Ele comprou remédios essenciais na farmácia próxima." }
                      }
    },
      { english: "Restaurant", portuguese: "Restaurante",
          levels: { 
                        A1: { en: "Lets eat at a restaurant tonight.", pt: "Vamos comer em um restaurante hoje." }, 
                        A2: { en: "We ate a delicious dinner at the Italian restaurant.", pt: "Nós comemos um jantar delicioso no restaurante italiano." }
                      }
    },
      { english: "Airport", portuguese: "Aeroporto",
          levels: { 
                        A1: { en: "We arrive at the airport early.", pt: "Nós chegamos no aeroporto cedo." }, 
                        A2: { en: "She arrived at the international airport two hours early.", pt: "Ela chegou ao aeroporto internacional duas horas adiantada." }
                      }
    },
      { english: "Station", portuguese: "Estação",
          levels: { 
                        A1: { en: "The train station is crowded.", pt: "A estação de trem está lotada." }, 
                        A2: { en: "They caught the early train at the central station.", pt: "Eles pegaram o trem cedo na estação central." }
                      }
    },
      { english: "Museum", portuguese: "Museu",
          levels: { 
                        A1: { en: "The museum has old paintings.", pt: "O museu tem pinturas antigas." }, 
                        A2: { en: "The historical museum exhibited ancient artifacts.", pt: "O museu histórico exibiu artefatos antigos." }
                      }
    },
      { english: "Far", portuguese: "Longe",
          levels: { 
                        A1: { en: "The airport is far from here.", pt: "O aeroporto é longe daqui." }, 
                        A2: { en: "He drove a far distance to visit his relatives.", pt: "Ele dirigiu uma longa distância para visitar seus parentes." }
                      }
    },
      { english: "Corner", portuguese: "Esquina",
          levels: { 
                        A1: { en: "Turn right at the corner.", pt: "Vire à direita na esquina." }, 
                        A2: { en: "The coffee shop opened on the corner of the busy street.", pt: "A cafeteria abriu na esquina da rua movimentada." }
                      }
    },
      { english: "Block", portuguese: "Quarteirão",
          levels: { 
                        A1: { en: "Walk three blocks and stop.", pt: "Caminhe três quarteirões e pare." }, 
                        A2: { en: "She blocked the rude user to protect her privacy.", pt: "Ela bloqueou o usuário rude para proteger sua privacidade." }
                      }
    },
      { english: "Traffic light", portuguese: "Semáforo",
          levels: { 
                        A1: { en: "Stop at the red traffic light.", pt: "Pare no semáforo vermelho." }, 
                        A2: { en: "He stopped the car immediately when the traffic light turned red.", pt: "Ele parou o carro imediatamente quando o semáforo ficou vermelho." }
                      }
    },
      { english: "Bridge", portuguese: "Ponte",
          levels: { 
                        A1: { en: "Drive over the bridge.", pt: "Dirija por cima da ponte." }, 
                        A2: { en: "The heavy truck crossed the old wooden bridge safely.", pt: "O caminhão pesado cruzou a velha ponte de madeira com segurança." }
                      }
    },
      { english: "Sightseeing", portuguese: "Passeio turístico",
          levels: { 
                        B1: { en: "We spent the whole day sightseeing in central London.", pt: "Nós passamos o dia inteiro fazendo turismo no centro de Londres." } 
                      }
    },
      { english: "Crowded", portuguese: "Lotado",
          levels: { 
                        B1: { en: "The subway is always extremely crowded during rush hour.", pt: "O metrô está sempre extremamente lotado durante a hora do rush." } 
                      }
    },
      { english: "Accommodation", portuguese: "Acomodação / Hospedagem",
          levels: { 
                        B1: { en: "We need to book our accommodation before buying the flights.", pt: "Precisamos reservar nossa acomodação antes de comprar os voos." } 
                      }
    },
      { english: "Abroad", portuguese: "No exterior",
          levels: { 
                        B1: { en: "She wants to study abroad when she finishes high school.", pt: "Ela quer estudar no exterior quando terminar o ensino médio." } 
                      }
    },
      { english: "Landmark", portuguese: "Ponto de referência histórico",
          levels: { 
                        B1: { en: "The Eiffel Tower is the most famous landmark in Paris.", pt: "A Torre Eiffel é o ponto de referência mais famoso de Paris." } 
                      }
    },
      { english: "Border", portuguese: "Fronteira",
          levels: { 
                        B1: { en: "They crossed the border between France and Spain by train.", pt: "Eles cruzaram a fronteira entre a França e a Espanha de trem." } 
                      }
    },
      { english: "Guide", portuguese: "Guia turístico",
          levels: { 
                        B1: { en: "The tour guide explained the fascinating history of the castle.", pt: "O guia turístico explicou a fascinante história do castelo." } 
                      }
    },
      { english: "Get lost", portuguese: "Perder-se",
          levels: { 
                        B1: { en: "Make sure you use the map so you don't get lost.", pt: "Certifique-se de usar o mapa para não se perder." } 
                      }
    },
      { english: "Show around", portuguese: "Mostrar o lugar (para alguém)",
          levels: { 
                        B1: { en: "When you visit London, I would be happy to show you around.", pt: "Quando você visitar Londres, eu ficaria feliz em te mostrar o lugar." } 
                      }
    },
      { english: "Get lost", portuguese: "Perder-se",
          levels: { 
                        B1: { en: "We forgot our map and ended up getting lost in the forest.", pt: "Nós esquecemos o mapa e acabamos nos perdendo na floresta." } 
                      }
    },
      { english: "Head for", portuguese: "Ir em direção a",
          levels: { 
                        B1: { en: "It is getting late, so we should probably head for home.", pt: "Está ficando tarde, então nós provavelmente deveríamos ir para casa." } 
                      }
    },
      { english: "Set off", portuguese: "Partir / Iniciar viagem",
          levels: { 
                        B1: { en: "They set off early in the morning to avoid the heavy traffic.", pt: "Eles partiram de manhã cedo para evitar o trânsito pesado." } 
                      }
    },
      { english: "Drop off", portuguese: "Deixar (alguém/algo) em algum lugar",
          levels: { 
                        B1: { en: "Could you please drop me off at the airport at six o'clock?", pt: "Você poderia por favor me deixar no aeroporto às seis horas?" } 
                      }
    },
      { english: "Pick up", portuguese: "Buscar (alguém/algo)",
          levels: { 
                        B1: { en: "I need to pick up my sister from the train station tonight.", pt: "Eu preciso buscar minha irmã na estação de trem hoje à noite." } 
                      }
    },
      { english: "Check in", portuguese: "Fazer check-in",
          levels: { 
                        B1: { en: "We arrived at the hotel and immediately went to the reception to check in.", pt: "Chegamos ao hotel e fomos imediatamente para a recepção fazer o check-in." } 
                      }
    },
      { english: "Look out", portuguese: "Ter cuidado / Ficar atento",
          levels: { 
                        B1: { en: "Look out! There is a car coming very fast around the corner.", pt: "Cuidado! Há um carro vindo muito rápido na curva." } 
                      }
    },
      { english: "Settle down", portuguese: "Acomodar-se (em um novo lugar)",
          levels: { 
                        B1: { en: "After moving to the new city, it took her a while to settle down.", pt: "Depois de se mudar para a cidade nova, levou um tempo para ela se acomodar." } 
                      }
    },
      { english: "Stop over", portuguese: "Fazer uma parada (em viagem)",
          levels: { 
                        B1: { en: "We are flying to Japan, but we will stop over in Dubai for one night.", pt: "Nós estamos voando para o Japão, mas faremos uma parada em Dubai por uma noite." } 
                      }
    },
      { english: "Explore", portuguese: "Explorar",
          levels: { 
                        B1: { en: "We rented bicycles to explore the beautiful ancient ruins.", pt: "Nós alugamos bicicletas para explorar as lindas ruínas antigas." } 
                      }
    },
      { english: "Wander", portuguese: "Vagar / Andar sem rumo",
          levels: { 
                        B1: { en: "They spent the afternoon wandering through the charming streets of Paris.", pt: "Eles passaram a tarde vagando pelas charmosas ruas de Paris." } 
                      }
    }
      ],
    dialogue: [
      { speaker: "Tourist", english: "Excuse me, can you help me?", portuguese: "Com licença, você pode me ajudar?", isPrimary: true },
      { speaker: "Local", english: "Yes, of course. What do you need?", portuguese: "Sim, claro. O que você precisa?", isPrimary: false },
      { speaker: "Tourist", english: "Where is the nearest bank?", portuguese: "Onde fica o banco mais próximo?", isPrimary: true },
      { speaker: "Local", english: "Go straight, then turn left at the hospital. It's on your right.", portuguese: "Siga em frente, então vire à esquerda no hospital. Fica à sua direita.", isPrimary: false },
      { speaker: "Tourist", english: "Is it far from here?", portuguese: "Fica longe daqui?", isPrimary: true },
      { speaker: "Local", english: "No, it is very near. Just two blocks away.", portuguese: "Não, é muito perto. Apenas dois quarteirões de distância.", isPrimary: false },
      { speaker: "Tourist", english: "Perfect. And is there a good restaurant around there?", portuguese: "Perfeito. E tem algum bom restaurante por lá?", isPrimary: true },
      { speaker: "Local", english: "Yes! There is an Italian restaurant next to the bank.", portuguese: "Sim! Tem um restaurante italiano ao lado do banco.", isPrimary: false },
      { speaker: "Tourist", english: "That sounds delicious. Thank you so much for your help!", portuguese: "Isso parece delicioso. Muito obrigado pela sua ajuda!", isPrimary: true },
      { speaker: "Local", english: "You are welcome. Enjoy your meal!", portuguese: "De nada. Aproveite a sua refeição!", isPrimary: false }],
    flashcards: [
      { english: "Let's walk in the park.", portuguese: "Vamos caminhar no parque." },
      { english: "The hospital is nearby.", portuguese: "O hospital é aqui perto." },
      { english: "Kids are at school.", portuguese: "As crianças estão na escola." },
      { english: "Wait at the bus stop.", portuguese: "Espere no ponto de ônibus." },
      { english: "Cross the street carefully.", portuguese: "Atravesse a rua com cuidado." },
      { english: "Turn left at the corner.", portuguese: "Vire à esquerda na esquina." },
      { english: "The museum is very old.", portuguese: "O museu é muito antigo." },
      { english: "Go straight for two blocks.", portuguese: "Siga em frente por dois quarteirões." },
      { english: "Stop at the traffic light.", portuguese: "Pare no semáforo." },
      { english: "I am going to the pharmacy.", portuguese: "Eu estou indo para a farmácia." },
      { english: "The train station is big.", portuguese: "A estação de trem é grande." },
      { english: "We are at the airport.", portuguese: "Nós estamos no aeroporto." }],
    quiz: [
      { question: 'How do you say "Vire à direita"?', options: ["Turn left", "Go straight", "Turn right", "Stop"], correctIndex: 2, explanation: '"Right" means "direita" and "Left" means "esquerda".' },
      { question: 'Where do you wait for a bus?', options: ["Hospital", "Bus stop", "School", "Park"], correctIndex: 1, explanation: 'You wait at a "Bus stop".' },
      { question: 'Translate: "A escola é aqui perto."', options: ["The school is far.", "The school is big.", "The school is nearby.", "The school is closed."], correctIndex: 2, explanation: '"Nearby" or "near" means "aqui perto" or "nas proximidades".' },
      { question: 'How do you tell someone to "Siga em frente"?', options: ["Turn back", "Turn right", "Go straight", "Walk slow"], correctIndex: 2, explanation: '"Go straight" means siga em frente.' },
      { question: 'Where can you borrow books?', options: ["Bank", "Hospital", "Library", "Street"], correctIndex: 2, explanation: 'A "Library" (biblioteca) is where you borrow books.' },
      { question: 'What does "Near" mean?', options: ["Longe", "Perto", "Rápido", "Frio"], correctIndex: 1, explanation: '"Near" translates to Perto.' },
      { question: 'Translate: "O banco é na esquina."', options: ["The bank is on the corner.", "The bank is on the street.", "The bank is straight.", "The bank is left."], correctIndex: 0, explanation: '"Corner" means esquina.' },
      { question: 'How do you ask for directions?', options: ["Where are you?", "Excuse me, where is the...?", "What is this?", "When do we go?"], correctIndex: 1, explanation: '"Where is the..." is the standard way to ask for a location.' },
      { question: 'What does "Street" mean?', options: ["Parque", "Cidade", "Rua", "Avenida"], correctIndex: 2, explanation: '"Street" translates to Rua.' },
      { question: 'Complete: "Turn _____ at the next traffic light."', options: ["straight", "front", "left", "walk"], correctIndex: 2, explanation: 'You can "turn left" or "turn right".' }],
    trueOrFalse: {
      part1: [
        { statement: "You go to a library to buy shoes.", statementPt: "Você vai a uma biblioteca para comprar sapatos.", isTrue: false, explanation: "You go to a library to read or borrow books." },
      { statement: "A bridge helps you cross a river or road.", statementPt: "Uma ponte te ajuda a cruzar um rio ou estrada.", isTrue: true, explanation: "Bridge means ponte." },
      { statement: "When the traffic light is red, you must stop.", statementPt: "Quando o semáforo está vermelho, você deve parar.", isTrue: true, explanation: "Traffic light is semáforo, and red means stop." },
      { statement: "A pharmacy is a place to eat pizza.", statementPt: "Uma farmácia é um lugar para comer pizza.", isTrue: false, explanation: "You buy medicine at a pharmacy. You eat pizza at a restaurant." },
      { statement: "If a place is near, it is close to you.", statementPt: "Se um lugar é 'near' (perto), ele é próximo de você.", isTrue: true, explanation: "Near means perto." },
        { statement: "A street is where cars drive.", statementPt: "Uma rua é onde os carros andam.", isTrue: true, explanation: "Street means rua." }
      ],
      part2: [
        { statement: "A library is a place to borrow books.", statementPt: "Uma biblioteca é um lugar para emprestar livros.", isTrue: true, explanation: "Library means biblioteca." },
        { statement: "You sleep in a museum.", statementPt: "Você dorme em um museu.", isTrue: false, explanation: "You sleep in a hotel." },
        { statement: "An airport is where planes land and take off.", statementPt: "Um aeroporto é onde os aviões pousam e decolam.", isTrue: true, explanation: "Airport means aeroporto." },
        { statement: "A pharmacy is where you buy food.", statementPt: "Uma farmácia é onde você compra comida.", isTrue: false, explanation: "You buy medicine at a pharmacy." },
        { statement: "A bridge goes over a river.", statementPt: "Uma ponte passa por cima de um rio.", isTrue: true, explanation: "Bridge means ponte." },
        { statement: "You must stop at a red traffic light.", statementPt: "Você deve parar no semáforo vermelho.", isTrue: true, explanation: "Traffic light means semáforo." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you live in a city or a small town?", translation: "Você mora em uma cidade grande ou uma cidade pequena?" },
        { question: "Is there a park near your house?", translation: "Tem um parque perto da sua casa?" },
        { question: "How often do you go to a restaurant?", translation: "Com que frequência você vai a um restaurante?" },
        { question: "When was the last time you went to the bank?", translation: "Quando foi a última vez que você foi ao banco?" },
        { question: "Do you prefer living in a city or a small town?", translation: "Você prefere morar em uma cidade ou em uma cidadezinha?" },
        { question: "Is your school or hospital far from here?", translation: "Sua escola ou hospital é longe daqui?" },
        { question: "Have you ever been to the post office this year?", translation: "Você já foi ao correio este ano?" }
      ],
      part2: [
        { question: "Do you go to the library to study?", translation: "Você vai à biblioteca para estudar?" },
        { question: "Is there a good museum in your city?", translation: "Tem um bom museu na sua cidade?" },
        { question: "Are there many traffic lights on your street?", translation: "Tem muitos semáforos na sua rua?" },
        { question: "Do you like staying in hotels when you travel?", translation: "Você gosta de ficar em hotéis quando viaja?" },
        { question: "Is there a pharmacy on the corner of your street?", translation: "Tem uma farmácia na esquina da sua rua?" },
        { question: "Have you ever slept in a hotel at the airport?", translation: "Você já dormiu em um hotel no aeroporto?" },
        { question: "Do you always stop at the red traffic light?", translation: "Você sempre para no semáforo vermelho?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "Lets walk in the park.", portuguese: "Vamos caminhar no parque." }, { english: "This street is very busy.", portuguese: "Esta rua é muito movimentada." }, { english: "Go straight for two blocks.", portuguese: "Siga em frente por dois quarteirões." }, { english: "I bought medicine at the pharmacy.", portuguese: "Comprei remédio na farmácia." }, { english: "The museum has old paintings.", portuguese: "O museu tem pinturas antigas." }, { english: "Stop at the red traffic light.", portuguese: "Pare no semáforo vermelho." } ],
                    level2: [ { english: "Children played happily in the public park.", portuguese: "As crianças brincaram alegremente no parque público." }, { english: "They walked down the busy street during rush hour.", portuguese: "Eles andaram pela rua movimentada durante a hora do rush." }, { english: "They went straight until they reached the museum.", portuguese: "Eles seguiram reto até chegarem ao museu." }, { english: "He bought essential medicine at the nearby pharmacy.", portuguese: "Ele comprou remédios essenciais na farmácia próxima." }, { english: "The historical museum exhibited ancient artifacts.", portuguese: "O museu histórico exibiu artefatos antigos." }, { english: "He stopped the car immediately when the traffic light turned red.", portuguese: "Ele parou o carro imediatamente quando o semáforo ficou vermelho." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Park means Parque.", statementPt: "Park significa Parque.", isTrue: true, explanation: "Yes, Park means Parque." }, { statement: "Hospital means a type of car.", statementPt: "Hospital significa um tipo de carro.", isTrue: false, explanation: "No, Hospital means Hospital." }, { statement: "School means Escola.", statementPt: "School significa Escola.", isTrue: true, explanation: "Yes, School means Escola." }, { statement: "Bus stop means a type of car.", statementPt: "Bus stop significa um tipo de carro.", isTrue: false, explanation: "No, Bus stop means Ponto de ônibus." }, { statement: "Street means Rua.", statementPt: "Street significa Rua.", isTrue: true, explanation: "Yes, Street means Rua." }, { statement: "Turn left / right means a type of car.", statementPt: "Turn left / right significa um tipo de carro.", isTrue: false, explanation: "No, Turn left / right means Vire à esquerda / direita." }, { statement: "Library means Biblioteca.", statementPt: "Library significa Biblioteca.", isTrue: true, explanation: "Yes, Library means Biblioteca." }, { statement: "Bank means a type of car.", statementPt: "Bank significa um tipo de carro.", isTrue: false, explanation: "No, Bank means Banco." }, { statement: "Go straight means Siga em frente.", statementPt: "Go straight significa Siga em frente.", isTrue: true, explanation: "Yes, Go straight means Siga em frente." }, { statement: "Near means a type of car.", statementPt: "Near significa um tipo de carro.", isTrue: false, explanation: "No, Near means Perto." } ],
                    part2: [ { statement: "Pharmacy means Farmácia.", statementPt: "Pharmacy significa Farmácia.", isTrue: true, explanation: "Yes, Pharmacy means Farmácia." }, { statement: "Restaurant means a type of car.", statementPt: "Restaurant significa um tipo de carro.", isTrue: false, explanation: "No, Restaurant means Restaurante." }, { statement: "Airport means Aeroporto.", statementPt: "Airport significa Aeroporto.", isTrue: true, explanation: "Yes, Airport means Aeroporto." }, { statement: "Station means a type of car.", statementPt: "Station significa um tipo de carro.", isTrue: false, explanation: "No, Station means Estação." }, { statement: "Museum means Museu.", statementPt: "Museum significa Museu.", isTrue: true, explanation: "Yes, Museum means Museu." }, { statement: "Far means a type of car.", statementPt: "Far significa um tipo de carro.", isTrue: false, explanation: "No, Far means Longe." }, { statement: "Corner means Esquina.", statementPt: "Corner significa Esquina.", isTrue: true, explanation: "Yes, Corner means Esquina." }, { statement: "Block means a type of car.", statementPt: "Block significa um tipo de carro.", isTrue: false, explanation: "No, Block means Quarteirão." }, { statement: "Traffic light means Semáforo.", statementPt: "Traffic light significa Semáforo.", isTrue: true, explanation: "Yes, Traffic light means Semáforo." }, { statement: "Bridge means a type of car.", statementPt: "Bridge significa um tipo de carro.", isTrue: false, explanation: "No, Bridge means Ponte." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Park\" in a sentence in the past simple?", translation: "Você consegue usar \"Park\" em uma frase no passado simples?" }, { question: "Can you use \"Hospital\" in a sentence in the past simple?", translation: "Você consegue usar \"Hospital\" em uma frase no passado simples?" }, { question: "Can you use \"School\" in a sentence in the past simple?", translation: "Você consegue usar \"School\" em uma frase no passado simples?" }, { question: "Can you use \"Bus stop\" in a sentence in the past simple?", translation: "Você consegue usar \"Bus stop\" em uma frase no passado simples?" }, { question: "Can you use \"Street\" in a sentence in the past simple?", translation: "Você consegue usar \"Street\" em uma frase no passado simples?" }, { question: "Can you use \"Turn left / right\" in a sentence in the past simple?", translation: "Você consegue usar \"Turn left / right\" em uma frase no passado simples?" }, { question: "Can you use \"Library\" in a sentence in the past simple?", translation: "Você consegue usar \"Library\" em uma frase no passado simples?" }, { question: "Can you use \"Bank\" in a sentence in the past simple?", translation: "Você consegue usar \"Bank\" em uma frase no passado simples?" }, { question: "Can you use \"Go straight\" in a sentence in the past simple?", translation: "Você consegue usar \"Go straight\" em uma frase no passado simples?" }, { question: "Can you use \"Near\" in a sentence in the past simple?", translation: "Você consegue usar \"Near\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Pharmacy\" in a sentence in the past simple?", translation: "Você consegue usar \"Pharmacy\" em uma frase no passado simples?" }, { question: "Can you use \"Restaurant\" in a sentence in the past simple?", translation: "Você consegue usar \"Restaurant\" em uma frase no passado simples?" }, { question: "Can you use \"Airport\" in a sentence in the past simple?", translation: "Você consegue usar \"Airport\" em uma frase no passado simples?" }, { question: "Can you use \"Station\" in a sentence in the past simple?", translation: "Você consegue usar \"Station\" em uma frase no passado simples?" }, { question: "Can you use \"Museum\" in a sentence in the past simple?", translation: "Você consegue usar \"Museum\" em uma frase no passado simples?" }, { question: "Can you use \"Far\" in a sentence in the past simple?", translation: "Você consegue usar \"Far\" em uma frase no passado simples?" }, { question: "Can you use \"Corner\" in a sentence in the past simple?", translation: "Você consegue usar \"Corner\" em uma frase no passado simples?" }, { question: "Can you use \"Block\" in a sentence in the past simple?", translation: "Você consegue usar \"Block\" em uma frase no passado simples?" }, { question: "Can you use \"Traffic light\" in a sentence in the past simple?", translation: "Você consegue usar \"Traffic light\" em uma frase no passado simples?" }, { question: "Can you use \"Bridge\" in a sentence in the past simple?", translation: "Você consegue usar \"Bridge\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "animais",
    title: "Animals",
    titlePt: "Animais",
    description: "Learn animal names and related vocabulary.",
    descriptionPt: "Aprenda nomes de animais e vocabulário relacionado.",
    icon: "PawPrint",
    image: "/images/animais.png",
    color: "stone",
    available: true,
    vocabulary: [
      { english: "Dog", portuguese: "Cachorro",
          levels: { 
                        A1: { en: "My dog loves to run.", pt: "Meu cachorro ama correr." }, 
                        A2: { en: "The energetic dog fetched the ball multiple times.", pt: "O cachorro enérgico buscou a bola várias vezes." }
                      }
    },
      { english: "Cat", portuguese: "Gato",
          levels: { 
                        A1: { en: "The cat sleeps on the bed.", pt: "O gato dorme na cama." }, 
                        A2: { en: "The stray cat slept peacefully on the porch.", pt: "O gato de rua dormiu pacificamente na varanda." }
                      }
    },
      { english: "Bird", portuguese: "Pássaro",
          levels: { 
                        A1: { en: "I hear a bird.", pt: "Eu ouço um pássaro." }, 
                        A2: { en: "The rare bird flew high above the dense forest.", pt: "O pássaro raro voou alto sobre a floresta densa." }
                      }
    },
      { english: "Fish", portuguese: "Peixe",
          levels: { 
                        A1: { en: "I have a fish tank.", pt: "Eu tenho um aquário." }, 
                        A2: { en: "The colorful fish swam quickly around the large tank.", pt: "O peixe colorido nadou rapidamente ao redor do aquário grande." }
                      }
    },
      { english: "Pet", portuguese: "Animal de estimação",
          levels: { 
                        A1: { en: "Do you have any pets?", pt: "Você tem animais de estimação?" }, 
                        A2: { en: "She adopted a rescued pet from the local animal shelter.", pt: "Ela adotou um animal de estimação resgatado no abrigo de animais local." }
                      }
    },
      { english: "Walk the dog", portuguese: "Passear com o cachorro",
          levels: { 
                        A1: { en: "I need to walk the dog now.", pt: "Eu preciso passear com o cachorro agora." }, 
                        A2: { en: "He walked the dog around the park every evening.", pt: "Ele passeava com o cachorro pelo parque toda noite." }
                      }
    },
      { english: "Feed", portuguese: "Alimentar",
          levels: { 
                        A1: { en: "Dont forget to feed the cat.", pt: "Não esqueça de alimentar o gato." }, 
                        A2: { en: "She checked her feed every morning to read the news.", pt: "Ela verificava o seu feed toda manhã para ler as notícias." }
                      }
    },
      { english: "Horse", portuguese: "Cavalo",
          levels: { 
                        A1: { en: "She knows how to ride a horse.", pt: "Ela sabe andar a cavalo." }, 
                        A2: { en: "The majestic horse galloped swiftly across the open field.", pt: "O cavalo majestoso galopou velozmente pelo campo aberto." }
                      }
    },
      { english: "Cow", portuguese: "Vaca",
          levels: { 
                        A1: { en: "Cows give us milk.", pt: "Vacas nos dão leite." }, 
                        A2: { en: "The gentle cow grazed calmly in the green pasture.", pt: "A vaca dócil pastou calmamente no pasto verde." }
                      }
    },
      { english: "Vet", portuguese: "Veterinário(a)",
          levels: { 
                        A1: { en: "I take my dog to the vet.", pt: "Eu levo meu cachorro ao veterinário." }, 
                        A2: { en: "The dedicated vet examined the injured puppy thoroughly.", pt: "O veterinário dedicado examinou o filhote ferido minuciosamente." }
                      }
    },
      { english: "Pig", portuguese: "Porco",
          levels: { 
                        A1: { en: "Pigs live on the farm.", pt: "Porcos vivem na fazenda." }, 
                        A2: { en: "The heavy pig rolled around in the wet mud to stay cool.", pt: "O porco pesado rolou na lama molhada para se manter fresco." }
                      }
    },
      { english: "Chicken", portuguese: "Galinha / Frango",
          levels: { 
                        A1: { en: "The chicken laid an egg.", pt: "A galinha botou um ovo." }, 
                        A2: { en: "The farmer collected fresh eggs from the chicken coop.", pt: "O fazendeiro colheu ovos frescos do galinheiro." }
                      }
    },
      { english: "Rabbit", portuguese: "Coelho",
          levels: { 
                        A1: { en: "The rabbit eats a carrot.", pt: "O coelho come uma cenoura." }, 
                        A2: { en: "The fast rabbit hid behind the bushes to avoid predators.", pt: "O coelho veloz se escondeu atrás dos arbustos para evitar predadores." }
                      }
    },
      { english: "Lion", portuguese: "Leão",
          levels: { 
                        A1: { en: "The lion is the king of the jungle.", pt: "O leão é o rei da selva." }, 
                        A2: { en: "The fierce lion roared loudly, intimidating the other animals.", pt: "O leão feroz rugiu alto, intimidando os outros animais." }
                      }
    },
      { english: "Tiger", portuguese: "Tigre",
          levels: { 
                        A1: { en: "I see a tiger at the zoo.", pt: "Eu vejo um tigre no zoológico." }, 
                        A2: { en: "The wild tiger stalked its prey silently in the jungle.", pt: "O tigre selvagem perseguiu sua presa silenciosamente na selva." }
                      }
    },
      { english: "Monkey", portuguese: "Macaco",
          levels: { 
                        A1: { en: "The monkey climbs the tree.", pt: "O macaco sobe na árvore." }, 
                        A2: { en: "The clever monkey swung effortlessly from branch to branch.", pt: "O macaco esperto balançou sem esforço de galho em galho." }
                      }
    },
      { english: "Elephant", portuguese: "Elefante",
          levels: { 
                        A1: { en: "Elephants are very large animals.", pt: "Elefantes são animais muito grandes." }, 
                        A2: { en: "The enormous elephant grabbed the peanuts with its long trunk.", pt: "O elefante enorme pegou os amendoins com sua longa tromba." }
                      }
    },
      { english: "Bark", portuguese: "Latir",
          levels: { 
                        A1: { en: "The dog barks loudly.", pt: "O cachorro late alto." }, 
                        A2: { en: "The guard dog barked aggressively at the unknown intruder.", pt: "O cão de guarda latiu agressivamente para o intruso desconhecido." }
                      }
    },
      { english: "Meow", portuguese: "Miar",
          levels: { 
                        A1: { en: "The cat meows when it is hungry.", pt: "O gato mia quando está com fome." }, 
                        A2: { en: "The tiny kitten meowed constantly until she received her milk.", pt: "O gatinho minúsculo miou constantemente até receber seu leite." }
                      }
    },
      { english: "Bite", portuguese: "Morder",
          levels: { 
                        A1: { en: "Be careful, the dog might bite.", pt: "Cuidado, o cachorro pode morder." }, 
                        A2: { en: "The frightened dog bit the stranger's hand unexpectedly.", pt: "O cachorro assustado mordeu a mão do estranho inesperadamente." }
                      }
    },
      { english: "Wildlife", portuguese: "Vida selvagem",
          levels: { 
                        B1: { en: "The documentary showed incredible footage of African wildlife.", pt: "O documentário mostrou imagens incríveis da vida selvagem africana." } 
                      }
    },
      { english: "Endangered", portuguese: "Em risco de extinção",
          levels: { 
                        B1: { en: "The giant panda is a famous example of an endangered species.", pt: "O panda gigante é um famoso exemplo de uma espécie em risco de extinção." } 
                      }
    },
      { english: "Habitat", portuguese: "Habitat",
          levels: { 
                        B1: { en: "Deforestation is destroying the natural habitat of many birds.", pt: "O desmatamento está destruindo o habitat natural de muitos pássaros." } 
                      }
    },
      { english: "Furry", portuguese: "Peludo",
          levels: { 
                        B1: { en: "They adopted a cute, furry little kitten from the shelter.", pt: "Eles adotaram um gatinho pequeno e peludo do abrigo." } 
                      }
    },
      { english: "Bark", portuguese: "Latir",
          levels: { 
                        B1: { en: "The dog started to bark loudly when the postman arrived.", pt: "O cachorro começou a latir alto quando o carteiro chegou." } 
                      }
    },
      { english: "Bite", portuguese: "Morder",
          levels: { 
                        B1: { en: "Be careful with that wild animal, it might bite you.", pt: "Tenha cuidado com aquele animal selvagem, ele pode te morder." } 
                      }
    },
      { english: "Protect", portuguese: "Proteger",
          levels: { 
                        B1: { en: "It is our responsibility to protect these vulnerable animals.", pt: "É nossa responsabilidade proteger esses animais vulneráveis." } 
                      }
    },
      { english: "Shelter", portuguese: "Abrigo (de animais)",
          levels: { 
                        B1: { en: "We volunteer at the local animal shelter every weekend.", pt: "Nós somos voluntários no abrigo de animais local todo fim de semana." } 
                      }
    },
      { english: "Look after", portuguese: "Cuidar de",
          levels: { 
                        B1: { en: "Could you look after my cat while I am on vacation?", pt: "Você poderia cuidar do meu gato enquanto estou de férias?" } 
                      }
    },
      { english: "Run away", portuguese: "Fugir",
          levels: { 
                        B1: { en: "The scared dog managed to jump the fence and run away.", pt: "O cachorro assustado conseguiu pular a cerca e fugir." } 
                      }
    },
      { english: "Bark", portuguese: "Latir",
          levels: { 
                        B1: { en: "My neighbor's dog barks loudly every time someone knocks on the door.", pt: "O cachorro do meu vizinho late alto toda vez que alguém bate na porta." } 
                      }
    },
      { english: "Bite", portuguese: "Morder",
          levels: { 
                        B1: { en: "Be careful with that wild animal, it might bite you if you get too close.", pt: "Cuidado com esse animal selvagem, ele pode te morder se você chegar muito perto." } 
                      }
    },
      { english: "Feed", portuguese: "Alimentar",
          levels: { 
                        B1: { en: "Don't forget to feed the fish twice a day with these special flakes.", pt: "Não se esqueça de alimentar os peixes duas vezes ao dia com estes flocos especiais." } 
                      }
    },
      { english: "Tame", portuguese: "Domar / Domesticar",
          levels: { 
                        B1: { en: "It takes a lot of patience to tame a wild horse.", pt: "É preciso muita paciência para domar um cavalo selvagem." } 
                      }
    },
      { english: "Breed", portuguese: "Criar (para reprodução)",
          levels: { 
                        B1: { en: "Some farmers breed specific types of sheep for their high-quality wool.", pt: "Alguns fazendeiros criam tipos específicos de ovelha pela sua lã de alta qualidade." } 
                      }
    },
      { english: "Hunt", portuguese: "Caçar",
          levels: { 
                        B1: { en: "Lions usually hunt for their food during the early hours of the morning.", pt: "Leões geralmente caçam por sua comida durante as primeiras horas da manhã." } 
                      }
    },
      { english: "Stroke", portuguese: "Acariciar",
          levels: { 
                        B1: { en: "The cat started purring softly as soon as I began to stroke its back.", pt: "O gato começou a ronronar suavemente assim que comecei a acariciar suas costas." } 
                      }
    },
      { english: "Protect", portuguese: "Proteger",
          levels: { 
                        B1: { en: "Many organizations are fighting to protect endangered species from extinction.", pt: "Muitas organizações estão lutando para proteger espécies ameaçadas da extinção." } 
                      }
    },
      { english: "Adopt", portuguese: "Adotar",
          levels: { 
                        B1: { en: "We decided to adopt a rescue dog instead of buying a puppy from a store.", pt: "Nós decidimos adotar um cachorro resgatado em vez de comprar um filhote de uma loja." } 
                      }
    },
      { english: "Roam", portuguese: "Vagar / Andar livremente",
          levels: { 
                        B1: { en: "Elephants need vast areas of land where they can roam freely.", pt: "Elefantes precisam de vastas áreas de terra onde possam vagar livremente." } 
                      }
    }
      ],
    dialogue: [
      { speaker: "Emma", english: "Oh, what a cute dog! What is his name?", portuguese: "Ah, que cachorro fofo! Qual o nome dele?", isPrimary: false },
      { speaker: "Leo", english: "His name is Max. He is very friendly.", portuguese: "O nome dele é Max. Ele é muito amigável.", isPrimary: true },
      { speaker: "Emma", english: "I love dogs. I have a cat at home.", portuguese: "Eu amo cachorros. Eu tenho um gato em casa.", isPrimary: false },
      { speaker: "Leo", english: "That's nice. Did you feed your cat today?", portuguese: "Que legal. Você alimentou seu gato hoje?", isPrimary: true },
      { speaker: "Emma", english: "Yes, I gave her food this morning. She was meowing a lot.", portuguese: "Sim, eu dei comida a ela hoje de manhã. Ela estava miando muito.", isPrimary: false },
      { speaker: "Leo", english: "Max barks when he is hungry. Usually around this time.", portuguese: "O Max late quando está com fome. Geralmente por volta dessa hora.", isPrimary: true },
      { speaker: "Emma", english: "Do you take him to the vet often?", portuguese: "Você o leva ao veterinário com frequência?", isPrimary: false },
      { speaker: "Leo", english: "Only once a year for his vaccines. He is very healthy.", portuguese: "Apenas uma vez ao ano para as vacinas. Ele é muito saudável.", isPrimary: true },
      { speaker: "Emma", english: "That is great. Well, I have to go walk my neighbor's rabbit now.", portuguese: "Isso é ótimo. Bom, eu tenho que ir passear com o coelho do meu vizinho agora.", isPrimary: false },
      { speaker: "Leo", english: "A rabbit? That is unusual! Have fun!", portuguese: "Um coelho? Isso é incomum! Divirta-se!", isPrimary: true }],
    flashcards: [
      { english: "My dog loves to play.", portuguese: "Meu cachorro ama brincar." },
      { english: "The cat is sleeping.", portuguese: "O gato está dormindo." },
      { english: "I heard a bird singing.", portuguese: "Eu ouvi um pássaro cantando." },
      { english: "Fish live in water.", portuguese: "Peixes vivem na água." },
      { english: "Do you have any pets?", portuguese: "Você tem algum animal de estimação?" },
      { english: "I need to walk the dog.", portuguese: "Eu preciso passear com o cachorro." },
      { english: "The lion is big and strong.", portuguese: "O leão é grande e forte." },
      { english: "Rabbits eat carrots.", portuguese: "Coelhos comem cenouras." },
      { english: "The monkey is in the tree.", portuguese: "O macaco está na árvore." },
      { english: "Be careful, it bites.", portuguese: "Cuidado, ele morde." },
      { english: "I feed the chickens.", portuguese: "Eu alimento as galinhas." },
      { english: "The elephant is drinking water.", portuguese: "O elefante está bebendo água." }],
    quiz: [
      { question: 'How do you say "Animal de estimação"?', options: ["Wild animal", "Pet", "Dog", "Creature"], correctIndex: 1, explanation: 'A domesticated animal kept for companionship is a "Pet".' },
      { question: 'Translate: "O gato está dormindo."', options: ["The dog is eating.", "The cat is sleeping.", "The bird is flying.", "The cat is jumping."], correctIndex: 1, explanation: '"Gato" is "Cat" and "Dormindo" is "Sleeping".' },
      { question: 'Complete: "I need to _____ the dog."', options: ["run", "wash", "walk", "see"], correctIndex: 2, explanation: '"Walk the dog" is the standard phrase for "Passear com o cachorro".' },
      { question: 'How do you say "Alimentar"?', options: ["Give", "Eat", "Food", "Feed"], correctIndex: 3, explanation: '"Feed" means dar comida/alimentar.' },
      { question: 'What animal gives us milk?', options: ["Horse", "Dog", "Cow", "Bird"], correctIndex: 2, explanation: 'Cows (vacas) give us milk.' },
      { question: 'Who is the doctor for animals?', options: ["Chef", "Teacher", "Vet", "Police"], correctIndex: 2, explanation: '"Vet" is short for Veterinarian (veterinário).' },
      { question: 'Translate: "Pássaro".', options: ["Fish", "Bird", "Cat", "Horse"], correctIndex: 1, explanation: '"Pássaro" is Bird.' },
      { question: 'What does a fish do?', options: ["Flies", "Runs", "Swims", "Barks"], correctIndex: 2, explanation: 'A fish swims (nada).' },
      { question: 'How do you say "Andar a cavalo"?', options: ["Drive a horse", "Ride a horse", "Walk a horse", "Play a horse"], correctIndex: 1, explanation: 'We use the verb "Ride" for horses and bikes.' },
      { question: 'Complete: "Max is a very _____ dog."', options: ["friend", "friendly", "friendship", "friends"], correctIndex: 1, explanation: '"Friendly" is the adjective meaning amigável.' }],
    trueOrFalse: {
      part1: [
        { statement: "A horse is a very small animal.", statementPt: "Um cavalo é um animal muito pequeno.", isTrue: false, explanation: "A horse (cavalo) is a large animal." },
      { statement: "Birds can fly in the sky.", statementPt: "Pássaros podem voar no céu.", isTrue: true, explanation: "Bird means pássaro." },
      { statement: "A vet is a doctor for animals.", statementPt: "Um veterinário é um médico para animais.", isTrue: true, explanation: "Vet is short for veterinarian." },
      { statement: "Tigers live in the ocean.", statementPt: "Tigres vivem no oceano.", isTrue: false, explanation: "Tigers live on land. Fish live in the ocean." },
      { statement: "When a dog barks, it makes a sound.", statementPt: "Quando um cachorro late, ele faz um som.", isTrue: true, explanation: "Bark means latir." },
        { statement: "A cat is a popular pet.", statementPt: "O gato é um animal de estimação popular.", isTrue: true, explanation: "Cat means gato." }
      ],
      part2: [
        { statement: "A lion is called the king of the jungle.", statementPt: "O leão é chamado de rei da selva.", isTrue: true, explanation: "Lion means leão." },
        { statement: "A spider has six legs.", statementPt: "Uma aranha tem seis pernas.", isTrue: false, explanation: "Spiders have eight legs. Insects have six." },
        { statement: "A snake has no legs.", statementPt: "Uma cobra não tem pernas.", isTrue: true, explanation: "Snake means cobra." },
        { statement: "An elephant is a very small animal.", statementPt: "Um elefante é um animal muito pequeno.", isTrue: false, explanation: "An elephant is very big." },
        { statement: "A monkey likes to climb trees.", statementPt: "Um macaco gosta de subir em árvores.", isTrue: true, explanation: "Monkey means macaco." },
        { statement: "A vet is a doctor for animals.", statementPt: "Um veterinário é um médico para animais.", isTrue: true, explanation: "Vet means veterinário." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you have any pets?", translation: "Você tem animais de estimação?" },
        { question: "Do you prefer dogs or cats?", translation: "Você prefere cachorros ou gatos?" },
        { question: "Have you ever ridden a horse?", translation: "Você já andou a cavalo?" },
        { question: "Do you like to watch birds?", translation: "Você gosta de observar pássaros?" },
        { question: "Have you ever seen a pig or a cow on a farm?", translation: "Você já viu um porco ou uma vaca em uma fazenda?" },
        { question: "Are you afraid of seeing a mouse in your house?", translation: "Você tem medo de ver um rato na sua casa?" },
        { question: "Do you like eating fish?", translation: "Você gosta de comer peixe?" }
      ],
      part2: [
        { question: "Are you afraid of spiders or snakes?", translation: "Você tem medo de aranhas ou cobras?" },
        { question: "What is your favorite wild animal: a lion, tiger, or elephant?", translation: "Qual é o seu animal selvagem favorito: um leão, tigre ou elefante?" },
        { question: "Have you ever taken your pet to the vet?", translation: "Você já levou seu animal de estimação ao veterinário?" },
        { question: "Does your dog bark a lot?", translation: "O seu cachorro late muito?" },
        { question: "Did a mosquito ever bite you?", translation: "Um mosquito já te picou?" },
        { question: "Have you seen a monkey in the zoo?", translation: "Você já viu um macaco no zoológico?" },
        { question: "Do you kill an insect when you see one?", translation: "Você mata um inseto quando vê um?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "My dog loves to run.", portuguese: "Meu cachorro ama correr." }, { english: "Do you have any pets?", portuguese: "Você tem animais de estimação?" }, { english: "Cows give us milk.", portuguese: "Vacas nos dão leite." }, { english: "Pigs live on the farm.", portuguese: "Porcos vivem na fazenda." }, { english: "I saw a tiger at the zoo.", portuguese: "Eu vi um tigre no zoológico." }, { english: "The cat meows when it is hungry.", portuguese: "O gato mia quando está com fome." } ],
                    level2: [ { english: "The energetic dog fetched the ball multiple times.", portuguese: "O cachorro enérgico buscou a bola várias vezes." }, { english: "She adopted a rescued pet from the local animal shelter.", portuguese: "Ela adotou um animal de estimação resgatado no abrigo de animais local." }, { english: "The gentle cow grazed calmly in the green pasture.", portuguese: "A vaca dócil pastou calmamente no pasto verde." }, { english: "The heavy pig rolled around in the wet mud to stay cool.", portuguese: "O porco pesado rolou na lama molhada para se manter fresco." }, { english: "The wild tiger stalked its prey silently in the jungle.", portuguese: "O tigre selvagem perseguiu sua presa silenciosamente na selva." }, { english: "The tiny kitten meowed constantly until she received her milk.", portuguese: "O gatinho minúsculo miou constantemente até receber seu leite." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Dog means Cachorro.", statementPt: "Dog significa Cachorro.", isTrue: true, explanation: "Yes, Dog means Cachorro." }, { statement: "Cat means a type of car.", statementPt: "Cat significa um tipo de carro.", isTrue: false, explanation: "No, Cat means Gato." }, { statement: "Bird means Pássaro.", statementPt: "Bird significa Pássaro.", isTrue: true, explanation: "Yes, Bird means Pássaro." }, { statement: "Fish means a type of car.", statementPt: "Fish significa um tipo de carro.", isTrue: false, explanation: "No, Fish means Peixe." }, { statement: "Pet means Animal de estimação.", statementPt: "Pet significa Animal de estimação.", isTrue: true, explanation: "Yes, Pet means Animal de estimação." }, { statement: "Walk the dog means a type of car.", statementPt: "Walk the dog significa um tipo de carro.", isTrue: false, explanation: "No, Walk the dog means Passear com o cachorro." }, { statement: "Feed means Alimentar.", statementPt: "Feed significa Alimentar.", isTrue: true, explanation: "Yes, Feed means Alimentar." }, { statement: "Horse means a type of car.", statementPt: "Horse significa um tipo de carro.", isTrue: false, explanation: "No, Horse means Cavalo." }, { statement: "Cow means Vaca.", statementPt: "Cow significa Vaca.", isTrue: true, explanation: "Yes, Cow means Vaca." }, { statement: "Vet means a type of car.", statementPt: "Vet significa um tipo de carro.", isTrue: false, explanation: "No, Vet means Veterinário(a)." } ],
                    part2: [ { statement: "Pig means Porco.", statementPt: "Pig significa Porco.", isTrue: true, explanation: "Yes, Pig means Porco." }, { statement: "Chicken means a type of car.", statementPt: "Chicken significa um tipo de carro.", isTrue: false, explanation: "No, Chicken means Galinha / Frango." }, { statement: "Rabbit means Coelho.", statementPt: "Rabbit significa Coelho.", isTrue: true, explanation: "Yes, Rabbit means Coelho." }, { statement: "Lion means a type of car.", statementPt: "Lion significa um tipo de carro.", isTrue: false, explanation: "No, Lion means Leão." }, { statement: "Tiger means Tigre.", statementPt: "Tiger significa Tigre.", isTrue: true, explanation: "Yes, Tiger means Tigre." }, { statement: "Monkey means a type of car.", statementPt: "Monkey significa um tipo de carro.", isTrue: false, explanation: "No, Monkey means Macaco." }, { statement: "Elephant means Elefante.", statementPt: "Elephant significa Elefante.", isTrue: true, explanation: "Yes, Elephant means Elefante." }, { statement: "Bark means a type of car.", statementPt: "Bark significa um tipo de carro.", isTrue: false, explanation: "No, Bark means Latir." }, { statement: "Meow means Miar.", statementPt: "Meow significa Miar.", isTrue: true, explanation: "Yes, Meow means Miar." }, { statement: "Bite means a type of car.", statementPt: "Bite significa um tipo de carro.", isTrue: false, explanation: "No, Bite means Morder." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Dog\" in a sentence in the past simple?", translation: "Você consegue usar \"Dog\" em uma frase no passado simples?" }, { question: "Can you use \"Cat\" in a sentence in the past simple?", translation: "Você consegue usar \"Cat\" em uma frase no passado simples?" }, { question: "Can you use \"Bird\" in a sentence in the past simple?", translation: "Você consegue usar \"Bird\" em uma frase no passado simples?" }, { question: "Can you use \"Fish\" in a sentence in the past simple?", translation: "Você consegue usar \"Fish\" em uma frase no passado simples?" }, { question: "Can you use \"Pet\" in a sentence in the past simple?", translation: "Você consegue usar \"Pet\" em uma frase no passado simples?" }, { question: "Can you use \"Walk the dog\" in a sentence in the past simple?", translation: "Você consegue usar \"Walk the dog\" em uma frase no passado simples?" }, { question: "Can you use \"Feed\" in a sentence in the past simple?", translation: "Você consegue usar \"Feed\" em uma frase no passado simples?" }, { question: "Can you use \"Horse\" in a sentence in the past simple?", translation: "Você consegue usar \"Horse\" em uma frase no passado simples?" }, { question: "Can you use \"Cow\" in a sentence in the past simple?", translation: "Você consegue usar \"Cow\" em uma frase no passado simples?" }, { question: "Can you use \"Vet\" in a sentence in the past simple?", translation: "Você consegue usar \"Vet\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Pig\" in a sentence in the past simple?", translation: "Você consegue usar \"Pig\" em uma frase no passado simples?" }, { question: "Can you use \"Chicken\" in a sentence in the past simple?", translation: "Você consegue usar \"Chicken\" em uma frase no passado simples?" }, { question: "Can you use \"Rabbit\" in a sentence in the past simple?", translation: "Você consegue usar \"Rabbit\" em uma frase no passado simples?" }, { question: "Can you use \"Lion\" in a sentence in the past simple?", translation: "Você consegue usar \"Lion\" em uma frase no passado simples?" }, { question: "Can you use \"Tiger\" in a sentence in the past simple?", translation: "Você consegue usar \"Tiger\" em uma frase no passado simples?" }, { question: "Can you use \"Monkey\" in a sentence in the past simple?", translation: "Você consegue usar \"Monkey\" em uma frase no passado simples?" }, { question: "Can you use \"Elephant\" in a sentence in the past simple?", translation: "Você consegue usar \"Elephant\" em uma frase no passado simples?" }, { question: "Can you use \"Bark\" in a sentence in the past simple?", translation: "Você consegue usar \"Bark\" em uma frase no passado simples?" }, { question: "Can you use \"Meow\" in a sentence in the past simple?", translation: "Você consegue usar \"Meow\" em uma frase no passado simples?" }, { question: "Can you use \"Bite\" in a sentence in the past simple?", translation: "Você consegue usar \"Bite\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "culinaria",
    title: "Cooking",
    titlePt: "Culinária",
    description: "Kitchen vocabulary, recipes and cooking actions.",
    descriptionPt: "Vocabulário de cozinha, receitas e ações culinárias.",
    icon: "ChefHat",
    image: "/images/culinaria.png",
    color: "red",
    available: true,
    vocabulary: [
      { english: "Cook", portuguese: "Cozinhar",
          levels: { 
                        A1: { en: "I love to cook Italian food.", pt: "Amo cozinhar comida italiana." }, 
                        A2: { en: "She cooked a complex meal for her family yesterday.", pt: "Ela cozinhou uma refeição complexa para a família ontem." }
                      }
    },
      { english: "Bake", portuguese: "Assar (bolos/pães)",
          levels: { 
                        A1: { en: "We bake chocolate chip cookies.", pt: "Nós assamos cookies de chocolate." }, 
                        A2: { en: "He baked a delicious chocolate cake for the party.", pt: "Ele assou um bolo de chocolate delicioso para a festa." }
                      }
    },
      { english: "Recipe", portuguese: "Receita",
          levels: { 
                        A1: { en: "This is my grandmothers recipe.", pt: "Esta é a receita da minha avó." }, 
                        A2: { en: "They followed the traditional recipe step by step.", pt: "Eles seguiram a receita tradicional passo a passo." }
                      }
    },
      { english: "Ingredients", portuguese: "Ingredientes",
          levels: { 
                        A1: { en: "We need five ingredients for this.", pt: "Precisamos de cinco ingredientes para isto." }, 
                        A2: { en: "She bought all the fresh ingredients at the local market.", pt: "Ela comprou todos os ingredientes frescos no mercado local." }
                      }
    },
      { english: "Knife", portuguese: "Faca",
          levels: { 
                        A1: { en: "Be careful with that sharp knife.", pt: "Cuidado com essa faca afiada." }, 
                        A2: { en: "The chef sharpened his knife before preparing the vegetables.", pt: "O chef afiou a faca antes de preparar os vegetais." }
                      }
    },
      { english: "Oven", portuguese: "Forno",
          levels: { 
                        A1: { en: "Preheat the oven to 180 degrees.", pt: "Preaqueça o forno a 180 graus." }, 
                        A2: { en: "He placed the lasagna in the hot oven for an hour.", pt: "Ele colocou a lasanha no forno quente por uma hora." }
                      }
    },
      { english: "Boil", portuguese: "Ferver",
          levels: { 
                        A1: { en: "Boil the water before adding pasta.", pt: "Ferva a água antes de adicionar o macarrão." }, 
                        A2: { en: "She boiled the water before adding the pasta.", pt: "Ela ferveu a água antes de adicionar o macarrão." }
                      }
    },
      { english: "Fry", portuguese: "Fritar",
          levels: { 
                        A1: { en: "Do you want to fry the eggs?", pt: "Você quer fritar os ovos?" }, 
                        A2: { en: "He fried the potatoes until they were crispy.", pt: "Ele fritou as batatas até ficarem crocantes." }
                      }
    },
      { english: "Chop", portuguese: "Picar / Cortar",
          levels: { 
                        A1: { en: "Please chop the onions.", pt: "Por favor, pique as cebolas." }, 
                        A2: { en: "She chopped the onions and garlic very quickly.", pt: "Ela picou as cebolas e o alho muito rápido." }
                      }
    },
      { english: "Spoon", portuguese: "Colher",
          levels: { 
                        A1: { en: "Use a spoon to mix everything.", pt: "Use uma colher para misturar tudo." }, 
                        A2: { en: "He stirred the soup carefully with a large wooden spoon.", pt: "Ele mexeu a sopa cuidadosamente com uma colher de pau grande." }
                      }
    },
      { english: "Fork", portuguese: "Garfo",
          levels: { 
                        A1: { en: "Eat your salad with a fork.", pt: "Coma sua salada com um garfo." }, 
                        A2: { en: "She ate the salad using a silver fork.", pt: "Ela comeu a salada usando um garfo de prata." }
                      }
    },
      { english: "Plate", portuguese: "Prato",
          levels: { 
                        A1: { en: "Put the food on the plate.", pt: "Coloque a comida no prato." }, 
                        A2: { en: "He arranged the food beautifully on the white plate.", pt: "Ele arrumou a comida lindamente no prato branco." }
                      }
    },
      { english: "Bowl", portuguese: "Tigela",
          levels: { 
                        A1: { en: "I eat soup in a bowl.", pt: "Eu tomo sopa em uma tigela." }, 
                        A2: { en: "She mixed the salad dressing in a small bowl.", pt: "Ela misturou o molho de salada em uma tigela pequena." }
                      }
    },
      { english: "Mix", portuguese: "Misturar",
          levels: { 
                        A1: { en: "Mix the flour and sugar.", pt: "Misture a farinha e o açúcar." }, 
                        A2: { en: "He mixed the flour and sugar to create the dough.", pt: "Ele misturou a farinha e o açúcar para criar a massa." }
                      }
    },
      { english: "Pour", portuguese: "Despejar",
          levels: { 
                        A1: { en: "Pour the milk into the glass.", pt: "Despeje o leite no copo." }, 
                        A2: { en: "She poured the hot tea into the delicate cups.", pt: "Ela despejou o chá quente nas xícaras delicadas." }
                      }
    },
      { english: "Taste", portuguese: "Provar / Gosto",
          levels: { 
                        A1: { en: "Taste the soup to see if it is good.", pt: "Prove a sopa para ver se está boa." }, 
                        A2: { en: "The chef tasted the sauce and added more salt.", pt: "O chef provou o molho e adicionou mais sal." }
                      }
    },
      { english: "Spicy", portuguese: "Apimentado",
          levels: { 
                        A1: { en: "Mexican food is often spicy.", pt: "Comida mexicana é frequentemente apimentada." }, 
                        A2: { en: "He loved the spicy food they served at the Indian restaurant.", pt: "Ele adorava a comida apimentada que serviam no restaurante indiano." }
                      }
    },
      { english: "Sweet", portuguese: "Doce",
          levels: { 
                        A1: { en: "This cake is very sweet.", pt: "Este bolo é muito doce." }, 
                        A2: { en: "She preferred sweet desserts over salty snacks.", pt: "Ela preferia sobremesas doces a lanches salgados." }
                      }
    },
      { english: "Salty", portuguese: "Salgado",
          levels: { 
                        A1: { en: "The fries are too salty.", pt: "As batatas fritas estão muito salgadas." }, 
                        A2: { en: "He complained that the soup tasted too salty.", pt: "Ele reclamou que a sopa estava com gosto muito salgado." }
                      }
    },
      { english: "Pan", portuguese: "Panela / Frigideira",
          levels: { 
                        A1: { en: "Heat the oil in the pan.", pt: "Aqueça o óleo na panela." }, 
                        A2: { en: "She heated the oil in the frying pan before adding the eggs.", pt: "Ela aqueceu o óleo na frigideira antes de adicionar os ovos." }
                      }
    },
      { english: "Recipe", portuguese: "Receita (culinária)",
          levels: { 
                        B1: { en: "My grandmother gave me her secret recipe for chocolate cake.", pt: "Minha avó me deu a receita secreta dela de bolo de chocolate." } 
                      }
    },
      { english: "Ingredients", portuguese: "Ingredientes",
          levels: { 
                        B1: { en: "Make sure you have all the ingredients before you start cooking.", pt: "Certifique-se de ter todos os ingredientes antes de começar a cozinhar." } 
                      }
    },
      { english: "Spicy", portuguese: "Apimentado",
          levels: { 
                        B1: { en: "I can't eat this curry, it is way too spicy for me.", pt: "Não consigo comer esse curry, está apimentado demais para mim." } 
                      }
    },
      { english: "Tasty", portuguese: "Saboroso / Gostoso",
          levels: { 
                        B1: { en: "This soup is incredibly tasty, what did you put in it?", pt: "Esta sopa está incrivelmente saborosa, o que você colocou nela?" } 
                      }
    },
      { english: "Bake", portuguese: "Assar",
          levels: { 
                        B1: { en: "She likes to bake fresh bread early in the morning.", pt: "Ela gosta de assar pão fresco de manhã cedo." } 
                      }
    },
      { english: "Boil", portuguese: "Ferver",
          levels: { 
                        B1: { en: "First, boil some water in a large pot for the pasta.", pt: "Primeiro, ferva um pouco de água em uma panela grande para o macarrão." } 
                      }
    },
      { english: "Raw", portuguese: "Cru(a)",
          levels: { 
                        B1: { en: "Sushi is traditionally made with fresh raw fish.", pt: "Sushi é tradicionalmente feito com peixe cru fresco." } 
                      }
    },
      { english: "Diet", portuguese: "Dieta",
          levels: { 
                        B1: { en: "He decided to go on a strict diet to lose weight.", pt: "Ele decidiu fazer uma dieta rigorosa para perder peso." } 
                      }
    },
      { english: "Boil over", portuguese: "Derramar (ao ferver)",
          levels: { 
                        B1: { en: "Turn down the heat or the milk will boil over the pot.", pt: "Abaixe o fogo ou o leite vai derramar da panela." } 
                      }
    },
      { english: "Chop up", portuguese: "Picar / Cortar em pedaços",
          levels: { 
                        B1: { en: "Can you chop up some onions and garlic for the tomato sauce?", pt: "Você pode picar algumas cebolas e alho para o molho de tomate?" } 
                      }
    },
      { english: "Warm up", portuguese: "Esquentar (comida)",
          levels: { 
                        B1: { en: "I am going to warm up yesterday's pizza in the microwave.", pt: "Eu vou esquentar a pizza de ontem no micro-ondas." } 
                      }
    },
      { english: "Cut down on", portuguese: "Reduzir o consumo",
          levels: { 
                        B1: { en: "The doctor advised him to cut down on sugar and eat more vegetables.", pt: "O médico o aconselhou a reduzir o açúcar e comer mais vegetais." } 
                      }
    },
      { english: "Eat out", portuguese: "Comer fora",
          levels: { 
                        B1: { en: "We are too tired to cook tonight, so let's eat out at a restaurant.", pt: "Estamos muito cansados para cozinhar hoje, então vamos comer fora num restaurante." } 
                      }
    },
      { english: "Whip up", portuguese: "Preparar rápido (comida)",
          levels: { 
                        B1: { en: "If you are hungry, I can quickly whip up a sandwich for you.", pt: "Se você estiver com fome, eu posso preparar um sanduíche rapidamente para você." } 
                      }
    },
      { english: "Bake", portuguese: "Assar (bolos/pães)",
          levels: { 
                        B1: { en: "She decided to bake a chocolate cake for her friend's birthday party.", pt: "Ela decidiu assar um bolo de chocolate para a festa de aniversário do seu amigo." } 
                      }
    },
      { english: "Fry", portuguese: "Fritar",
          levels: { 
                        B1: { en: "They like to fry eggs and bacon for breakfast on Sunday mornings.", pt: "Eles gostam de fritar ovos e bacon para o café da manhã nos domingos." } 
                      }
    },
      { english: "Grill", portuguese: "Grelhar",
          levels: { 
                        B1: { en: "We should grill some chicken and vegetables on the barbecue tonight.", pt: "Nós deveríamos grelhar um pouco de frango e vegetais na churrasqueira hoje à noite." } 
                      }
    },
      { english: "Peel", portuguese: "Descascar",
          levels: { 
                        B1: { en: "You need to peel the potatoes before boiling them for the soup.", pt: "Você precisa descascar as batatas antes de fervê-las para a sopa." } 
                      }
    },
      { english: "Pour", portuguese: "Despejar / Servir (líquido)",
          levels: { 
                        B1: { en: "Could you please pour me a glass of cold water?", pt: "Você poderia, por favor, me servir um copo de água gelada?" } 
                      }
    },
      { english: "Stir", portuguese: "Mexer (a comida)",
          levels: { 
                        B1: { en: "Make sure you stir the soup constantly so it doesn't burn the bottom.", pt: "Certifique-se de mexer a sopa constantemente para não queimar o fundo." } 
                      }
    }
      ],
    dialogue: [
      { speaker: "Chef", english: "Today we are going to cook a special dinner.", portuguese: "Hoje nós vamos cozinhar um jantar especial.", isPrimary: true },
      { speaker: "Assistant", english: "Sounds great! Do we have all the ingredients?", portuguese: "Parece ótimo! Nós temos todos os ingredientes?", isPrimary: false },
      { speaker: "Chef", english: "Yes. First, chop the onions and boil some water.", portuguese: "Sim. Primeiro, pique as cebolas e ferva um pouco de água.", isPrimary: true },
      { speaker: "Assistant", english: "Okay. Should I turn on the oven?", portuguese: "Ok. Devo ligar o forno?", isPrimary: false },
      { speaker: "Chef", english: "Yes, we need to bake the potatoes later.", portuguese: "Sim, nós precisamos assar as batatas depois.", isPrimary: true },
      { speaker: "Assistant", english: "Alright. Is the meat spicy?", portuguese: "Certo. A carne é apimentada?", isPrimary: false },
      { speaker: "Chef", english: "Just a little bit. Taste it later when it's done.", portuguese: "Só um pouco. Prove depois quando estiver pronto.", isPrimary: true },
      { speaker: "Assistant", english: "I will. Now I am going to fry the eggs in the pan.", portuguese: "Vou provar. Agora vou fritar os ovos na frigideira.", isPrimary: false },
      { speaker: "Chef", english: "Be careful not to make them too salty.", portuguese: "Tenha cuidado para não deixá-los muito salgados.", isPrimary: true },
      { speaker: "Assistant", english: "Don't worry, chef. I will use the right amount of salt.", portuguese: "Não se preocupe, chef. Vou usar a quantidade certa de sal.", isPrimary: false }],
    flashcards: [
      { english: "I like to cook dinner.", portuguese: "Eu gosto de cozinhar o jantar." },
      { english: "Let's bake a cake.", portuguese: "Vamos assar um bolo." },
      { english: "This recipe is easy.", portuguese: "Esta receita é fácil." },
      { english: "Mix the ingredients.", portuguese: "Misture os ingredientes." },
      { english: "Use a sharp knife.", portuguese: "Use uma faca afiada." },
      { english: "Put it in the oven.", portuguese: "Coloque no forno." },
      { english: "Eat with a fork and knife.", portuguese: "Coma com garfo e faca." },
      { english: "The soup is in the bowl.", portuguese: "A sopa está na tigela." },
      { english: "This food is very spicy.", portuguese: "Esta comida é muito apimentada." },
      { english: "Pour the water slowly.", portuguese: "Despeje a água lentamente." },
      { english: "The cake is too sweet.", portuguese: "O bolo está muito doce." },
      { english: "Fry the eggs in the pan.", portuguese: "Frite os ovos na panela." }],
    quiz: [
      { question: 'What is the difference between "Cook" and "Bake"?', options: ["Bake is for meat only", "Cook is for cold food", "Bake means cooking using dry heat in an oven (like bread/cake)", "No difference"], correctIndex: 2, explanation: '"Bake" is specifically used for oven-based cooking of pastries, cakes, bread, etc.' },
      { question: 'Translate "Faca".', options: ["Spoon", "Fork", "Plate", "Knife"], correctIndex: 3, explanation: '"Faca" translates to "Knife" (remember the K is silent!).' },
      { question: 'Where do you bake a cake?', options: ["In the fridge", "In the oven", "In the sink", "On the table"], correctIndex: 1, explanation: 'You bake things inside an "Oven" (Forno).' },
      { question: 'What does "Boil" mean?', options: ["Ferver", "Fritar", "Congelar", "Assar"], correctIndex: 0, explanation: '"Boil" means aquecer a água até ela ferver.' },
      { question: 'Which word means "Receita"?', options: ["Receipt", "Food", "Menu", "Recipe"], correctIndex: 3, explanation: '"Recipe" is the instructions for cooking. (Receipt is for payment).' },
      { question: 'Translate: "Pique as cebolas."', options: ["Fry the onions.", "Boil the onions.", "Chop the onions.", "Bake the onions."], correctIndex: 2, explanation: '"Chop" means picar.' },
      { question: 'What do you use to mix a soup?', options: ["Knife", "Spoon", "Oven", "Plate"], correctIndex: 1, explanation: 'You use a Spoon (colher).' },
      { question: 'How do you say "Fritar"?', options: ["Bake", "Boil", "Fry", "Chop"], correctIndex: 2, explanation: '"Fry" means cozinhar em óleo quente (fritar).' },
      { question: 'Complete: "Do we have all the _____ for the cake?"', options: ["books", "ingredients", "spoons", "receipts"], correctIndex: 1, explanation: 'You need ingredients to make a cake.' },
      { question: 'Translate "Forno".', options: ["Stove", "Fridge", "Oven", "Microwave"], correctIndex: 2, explanation: '"Forno" translates to Oven.' }],
    trueOrFalse: {
      part1: [
        { statement: "You need ingredients to follow a recipe.", statementPt: "Você precisa de ingredientes para seguir uma receita.", isTrue: true, explanation: "Ingredients means ingredientes, recipe means receita." },
      { statement: "A fork is used to cut meat.", statementPt: "Um garfo é usado para cortar carne.", isTrue: false, explanation: "A knife (faca) is used to cut. A fork (garfo) is used to pick up food." },
      { statement: "To boil water, you need to make it very hot.", statementPt: "Para ferver água, você precisa deixá-la muito quente.", isTrue: true, explanation: "Boil means ferver." },
      { statement: "Sweet food has a lot of salt in it.", statementPt: "Comida doce tem muito sal nela.", isTrue: false, explanation: "Sweet (doce) food has sugar. Salty (salgada) food has salt." },
      { statement: "You bake a cake in the oven.", statementPt: "Você assa um bolo no forno.", isTrue: true, explanation: "Bake means assar, oven means forno." },
        { statement: "You eat soup with a spoon.", statementPt: "Você come sopa com uma colher.", isTrue: true, explanation: "Spoon means colher." }
      ],
      part2: [
        { statement: "You bake food in the fridge.", statementPt: "Você assa a comida na geladeira.", isTrue: false, explanation: "You bake food in the oven (forno)." },
        { statement: "To fry means to cook in oil.", statementPt: "Fritar significa cozinhar em óleo.", isTrue: true, explanation: "Fry means fritar." },
        { statement: "Sweet food has a lot of sugar.", statementPt: "Comida doce tem muito açúcar.", isTrue: true, explanation: "Sweet means doce." },
        { statement: "To boil water, you need heat.", statementPt: "Para ferver água, você precisa de calor.", isTrue: true, explanation: "Boil means ferver." },
        { statement: "You cut food with a spoon.", statementPt: "Você corta a comida com uma colher.", isTrue: false, explanation: "You cut with a knife (faca)." },
        { statement: "To mix is to combine ingredients.", statementPt: "Misturar é combinar ingredientes.", isTrue: true, explanation: "Mix means misturar." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you use a recipe when you cook?", translation: "Você usa uma receita quando cozinha?" },
        { question: "What ingredients do you need to make a sandwich?", translation: "Quais ingredientes você precisa para fazer um sanduíche?" },
        { question: "Do you eat pizza with your hands or with a knife and fork?", translation: "Você come pizza com as mãos ou com faca e garfo?" },
        { question: "How many plates do you have in your kitchen?", translation: "Quantos pratos você tem na sua cozinha?" },
        { question: "Do you drink water from a glass or a bottle?", translation: "Você bebe água de um copo ou de uma garrafa?" },
        { question: "Do you have a large bowl for salads?", translation: "Você tem uma tigela grande para saladas?" },
        { question: "Do you wash the pans and pots after cooking?", translation: "Você lava as panelas e caçarolas depois de cozinhar?" }
      ],
      part2: [
        { question: "Do you prefer sweet or salty food?", translation: "Você prefere comida doce ou salgada?" },
        { question: "Do you know how to bake a cake?", translation: "Você sabe assar um bolo?" },
        { question: "Do you fry or boil your eggs?", translation: "Você frita ou cozinha seus ovos?" },
        { question: "Is your fridge full of food right now?", translation: "Sua geladeira está cheia de comida agora?" },
        { question: "Do you often clean your stove?", translation: "Você costuma limpar seu fogão?" },
        { question: "Can you mix the ingredients quickly?", translation: "Você consegue misturar os ingredientes rapidamente?" },
        { question: "Do you like the smell of food when you bake something?", translation: "Você gosta do cheiro da comida quando assa algo?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "I love to cook Italian food.", portuguese: "Amo cozinhar comida italiana." }, { english: "Be careful with that sharp knife.", portuguese: "Cuidado com essa faca afiada." }, { english: "Please chop the onions.", portuguese: "Por favor, pique as cebolas." }, { english: "Eat your salad with a fork.", portuguese: "Coma sua salada com um garfo." }, { english: "Pour the milk into the glass.", portuguese: "Despeje o leite no copo." }, { english: "The fries are too salty.", portuguese: "As batatas fritas estão muito salgadas." } ],
                    level2: [ { english: "She cooked a complex meal for her family yesterday.", portuguese: "Ela cozinhou uma refeição complexa para a família ontem." }, { english: "The chef sharpened his knife before preparing the vegetables.", portuguese: "O chef afiou a faca antes de preparar os vegetais." }, { english: "She chopped the onions and garlic very quickly.", portuguese: "Ela picou as cebolas e o alho muito rápido." }, { english: "She ate the salad using a silver fork.", portuguese: "Ela comeu a salada usando um garfo de prata." }, { english: "She poured the hot tea into the delicate cups.", portuguese: "Ela despejou o chá quente nas xícaras delicadas." }, { english: "He complained that the soup tasted too salty.", portuguese: "Ele reclamou que a sopa estava com gosto muito salgado." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Cook means Cozinhar.", statementPt: "Cook significa Cozinhar.", isTrue: true, explanation: "Yes, Cook means Cozinhar." }, { statement: "Bake means a type of car.", statementPt: "Bake significa um tipo de carro.", isTrue: false, explanation: "No, Bake means Assar (bolos/pães)." }, { statement: "Recipe means Receita.", statementPt: "Recipe significa Receita.", isTrue: true, explanation: "Yes, Recipe means Receita." }, { statement: "Ingredients means a type of car.", statementPt: "Ingredients significa um tipo de carro.", isTrue: false, explanation: "No, Ingredients means Ingredientes." }, { statement: "Knife means Faca.", statementPt: "Knife significa Faca.", isTrue: true, explanation: "Yes, Knife means Faca." }, { statement: "Oven means a type of car.", statementPt: "Oven significa um tipo de carro.", isTrue: false, explanation: "No, Oven means Forno." }, { statement: "Boil means Ferver.", statementPt: "Boil significa Ferver.", isTrue: true, explanation: "Yes, Boil means Ferver." }, { statement: "Fry means a type of car.", statementPt: "Fry significa um tipo de carro.", isTrue: false, explanation: "No, Fry means Fritar." }, { statement: "Chop means Picar / Cortar.", statementPt: "Chop significa Picar / Cortar.", isTrue: true, explanation: "Yes, Chop means Picar / Cortar." }, { statement: "Spoon means a type of car.", statementPt: "Spoon significa um tipo de carro.", isTrue: false, explanation: "No, Spoon means Colher." } ],
                    part2: [ { statement: "Fork means Garfo.", statementPt: "Fork significa Garfo.", isTrue: true, explanation: "Yes, Fork means Garfo." }, { statement: "Plate means a type of car.", statementPt: "Plate significa um tipo de carro.", isTrue: false, explanation: "No, Plate means Prato." }, { statement: "Bowl means Tigela.", statementPt: "Bowl significa Tigela.", isTrue: true, explanation: "Yes, Bowl means Tigela." }, { statement: "Mix means a type of car.", statementPt: "Mix significa um tipo de carro.", isTrue: false, explanation: "No, Mix means Misturar." }, { statement: "Pour means Despejar.", statementPt: "Pour significa Despejar.", isTrue: true, explanation: "Yes, Pour means Despejar." }, { statement: "Taste means a type of car.", statementPt: "Taste significa um tipo de carro.", isTrue: false, explanation: "No, Taste means Provar / Gosto." }, { statement: "Spicy means Apimentado.", statementPt: "Spicy significa Apimentado.", isTrue: true, explanation: "Yes, Spicy means Apimentado." }, { statement: "Sweet means a type of car.", statementPt: "Sweet significa um tipo de carro.", isTrue: false, explanation: "No, Sweet means Doce." }, { statement: "Salty means Salgado.", statementPt: "Salty significa Salgado.", isTrue: true, explanation: "Yes, Salty means Salgado." }, { statement: "Pan means a type of car.", statementPt: "Pan significa um tipo de carro.", isTrue: false, explanation: "No, Pan means Panela / Frigideira." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Cook\" in a sentence in the past simple?", translation: "Você consegue usar \"Cook\" em uma frase no passado simples?" }, { question: "Can you use \"Bake\" in a sentence in the past simple?", translation: "Você consegue usar \"Bake\" em uma frase no passado simples?" }, { question: "Can you use \"Recipe\" in a sentence in the past simple?", translation: "Você consegue usar \"Recipe\" em uma frase no passado simples?" }, { question: "Can you use \"Ingredients\" in a sentence in the past simple?", translation: "Você consegue usar \"Ingredients\" em uma frase no passado simples?" }, { question: "Can you use \"Knife\" in a sentence in the past simple?", translation: "Você consegue usar \"Knife\" em uma frase no passado simples?" }, { question: "Can you use \"Oven\" in a sentence in the past simple?", translation: "Você consegue usar \"Oven\" em uma frase no passado simples?" }, { question: "Can you use \"Boil\" in a sentence in the past simple?", translation: "Você consegue usar \"Boil\" em uma frase no passado simples?" }, { question: "Can you use \"Fry\" in a sentence in the past simple?", translation: "Você consegue usar \"Fry\" em uma frase no passado simples?" }, { question: "Can you use \"Chop\" in a sentence in the past simple?", translation: "Você consegue usar \"Chop\" em uma frase no passado simples?" }, { question: "Can you use \"Spoon\" in a sentence in the past simple?", translation: "Você consegue usar \"Spoon\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Fork\" in a sentence in the past simple?", translation: "Você consegue usar \"Fork\" em uma frase no passado simples?" }, { question: "Can you use \"Plate\" in a sentence in the past simple?", translation: "Você consegue usar \"Plate\" em uma frase no passado simples?" }, { question: "Can you use \"Bowl\" in a sentence in the past simple?", translation: "Você consegue usar \"Bowl\" em uma frase no passado simples?" }, { question: "Can you use \"Mix\" in a sentence in the past simple?", translation: "Você consegue usar \"Mix\" em uma frase no passado simples?" }, { question: "Can you use \"Pour\" in a sentence in the past simple?", translation: "Você consegue usar \"Pour\" em uma frase no passado simples?" }, { question: "Can you use \"Taste\" in a sentence in the past simple?", translation: "Você consegue usar \"Taste\" em uma frase no passado simples?" }, { question: "Can you use \"Spicy\" in a sentence in the past simple?", translation: "Você consegue usar \"Spicy\" em uma frase no passado simples?" }, { question: "Can you use \"Sweet\" in a sentence in the past simple?", translation: "Você consegue usar \"Sweet\" em uma frase no passado simples?" }, { question: "Can you use \"Salty\" in a sentence in the past simple?", translation: "Você consegue usar \"Salty\" em uma frase no passado simples?" }, { question: "Can you use \"Pan\" in a sentence in the past simple?", translation: "Você consegue usar \"Pan\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "tecnologia",
    title: "Basic Technology",
    titlePt: "Tecnologia Básica",
    description: "Essential tech vocabulary for everyday life.",
    descriptionPt: "Vocabulário essencial de tecnologia para o dia a dia.",
    icon: "Laptop",
    image: "/images/tecnologia.png",
    color: "slate",
    available: true,
    vocabulary: [
      { english: "Laptop", portuguese: "Notebook / PC",
          levels: { 
                        A1: { en: "I use my laptop for work.", pt: "Eu uso meu notebook para trabalhar." }, 
                        A2: { en: "He connected his laptop to the office network yesterday.", pt: "Ele conectou o laptop dele à rede do escritório ontem." }
                      }
    },
      { english: "Smartphone", portuguese: "Celular",
          levels: { 
                        A1: { en: "Where is my smartphone?", pt: "Onde está meu celular?" }, 
                        A2: { en: "She bought a new smartphone with a better camera.", pt: "Ela comprou um smartphone novo com uma câmera melhor." }
                      }
    },
      { english: "Internet", portuguese: "Internet",
          levels: { 
                        A1: { en: "The internet connection is slow.", pt: "A conexão de internet está lenta." }, 
                        A2: { en: "The internet connection dropped several times during the meeting.", pt: "A conexão com a internet caiu várias vezes durante a reunião." }
                      }
    },
      { english: "Keyboard", portuguese: "Teclado",
          levels: { 
                        A1: { en: "My keyboard is broken.", pt: "Meu teclado está quebrado." }, 
                        A2: { en: "He typed the long document using a mechanical keyboard.", pt: "Ele digitou o longo documento usando um teclado mecânico." }
                      }
    },
      { english: "Screen", portuguese: "Tela",
          levels: { 
                        A1: { en: "Dont touch the screen.", pt: "Não toque na tela." }, 
                        A2: { en: "She cracked her phone screen when it fell on the floor.", pt: "Ela rachou a tela do telefone quando ele caiu no chão." }
                      }
    },
      { english: "Download", portuguese: "Baixar",
          levels: { 
                        A1: { en: "I download the file.", pt: "Eu baixo o arquivo." }, 
                        A2: { en: "He downloaded the important files before the flight.", pt: "Ele baixou os arquivos importantes antes do voo." }
                      }
    },
      { english: "Password", portuguese: "Senha",
          levels: { 
                        A1: { en: "I forgot my password.", pt: "Esqueci minha senha." }, 
                        A2: { en: "She forgot her password and locked her account.", pt: "Ela esqueceu sua senha e bloqueou sua conta." }
                      }
    },
      { english: "Charger", portuguese: "Carregador",
          levels: { 
                        A1: { en: "Do you have a phone charger?", pt: "Você tem um carregador de celular?" }, 
                        A2: { en: "He plugged his phone into the charger all night.", pt: "Ele conectou o telefone ao carregador a noite toda." }
                      }
    },
      { english: "App", portuguese: "Aplicativo",
          levels: { 
                        A1: { en: "This app is very useful.", pt: "Este aplicativo é muito útil." }, 
                        A2: { en: "The developer updated the app to fix some bugs.", pt: "O desenvolvedor atualizou o aplicativo para corrigir alguns bugs." }
                      }
    },
      { english: "Mouse", portuguese: "Mouse",
          levels: { 
                        A1: { en: "Click the left button on the mouse.", pt: "Clique no botão esquerdo do mouse." }, 
                        A2: { en: "She clicked the mouse twice to open the application.", pt: "Ela clicou no mouse duas vezes para abrir o aplicativo." }
                      }
    },
      { english: "Upload", portuguese: "Fazer upload / Enviar",
          levels: { 
                        A1: { en: "I need to upload my homework.", pt: "Preciso enviar meu dever de casa." }, 
                        A2: { en: "He uploaded the heavy video file to the server.", pt: "Ele enviou (fez upload) o arquivo de vídeo pesado para o servidor." }
                      }
    },
      { english: "Battery", portuguese: "Bateria",
          levels: { 
                        A1: { en: "My battery is low.", pt: "Minha bateria está fraca." }, 
                        A2: { en: "The phone battery died completely during the long trip.", pt: "A bateria do telefone acabou completamente durante a longa viagem." }
                      }
    },
      { english: "Email", portuguese: "E-mail",
          levels: { 
                        A1: { en: "Send me an email later.", pt: "Me envie um e-mail mais tarde." }, 
                        A2: { en: "She received an urgent email from her boss this morning.", pt: "Ela recebeu um email urgente do seu chefe esta manhã." }
                      }
    },
      { english: "Website", portuguese: "Site",
          levels: { 
                        A1: { en: "This website has great information.", pt: "Este site tem ótimas informações." }, 
                        A2: { en: "The company launched a new website to attract more clients.", pt: "A empresa lançou um novo site para atrair mais clientes." }
                      }
    },
      { english: "Link", portuguese: "Link",
          levels: { 
                        A1: { en: "Click on this link.", pt: "Clique neste link." }, 
                        A2: { en: "He clicked the secure link to reset his password.", pt: "Ele clicou no link seguro para redefinir sua senha." }
                      }
    },
      { english: "Save", portuguese: "Salvar",
          levels: { 
                        A1: { en: "Always save your work.", pt: "Sempre salve o seu trabalho." }, 
                        A2: { en: "She saved all her important documents on a portable drive.", pt: "Ela salvou todos os seus documentos importantes num drive portátil." }
                      }
    },
      { english: "Delete", portuguese: "Apagar",
          levels: { 
                        A1: { en: "Delete that picture, please.", pt: "Apague aquela foto, por favor." }, 
                        A2: { en: "He deleted the old files to free up space on his computer.", pt: "Ele apagou os arquivos antigos para liberar espaço no seu computador." }
                      }
    },
      { english: "Folder", portuguese: "Pasta (arquivos)",
          levels: { 
                        A1: { en: "Put the document in the new folder.", pt: "Coloque o documento na pasta nova." }, 
                        A2: { en: "She organized her digital photos in a specific folder.", pt: "Ela organizou suas fotos digitais numa pasta específica." }
                      }
    },
      { english: "Headphones", portuguese: "Fones de ouvido",
          levels: { 
                        A1: { en: "I listen to music with headphones.", pt: "Eu ouço música com fones de ouvido." }, 
                        A2: { en: "He wore noise-canceling headphones to concentrate at work.", pt: "Ele usou fones de ouvido com cancelamento de ruído para se concentrar no trabalho." }
                      }
    },
      { english: "Plug in", portuguese: "Conectar na tomada",
          levels: { 
                        A1: { en: "Plug in the charger first.", pt: "Conecte o carregador na tomada primeiro." }, 
                        A2: { en: "She plugged in her laptop before starting the presentation.", pt: "Ela conectou (na tomada) o laptop antes de começar a apresentação." }
                      }
    },
      { english: "Download", portuguese: "Baixar (download)",
          levels: { 
                        B1: { en: "You can download the application directly from their website.", pt: "Você pode baixar o aplicativo diretamente do site deles." } 
                      }
    },
      { english: "Password", portuguese: "Senha",
          levels: { 
                        B1: { en: "Make sure you choose a strong password for your email account.", pt: "Certifique-se de escolher uma senha forte para sua conta de e-mail." } 
                      }
    },
      { english: "Delete", portuguese: "Apagar / Deletar",
          levels: { 
                        B1: { en: "I accidentally deleted all the important photos from my phone.", pt: "Eu apaguei acidentalmente todas as fotos importantes do meu telefone." } 
                      }
    },
      { english: "Folder", portuguese: "Pasta (computador)",
          levels: { 
                        B1: { en: "I organized all the project files into a single folder.", pt: "Eu organizei todos os arquivos do projeto em uma única pasta." } 
                      }
    },
      { english: "Screen", portuguese: "Tela",
          levels: { 
                        B1: { en: "She dropped her phone and cracked the screen completely.", pt: "Ela derrubou o telefone e rachou a tela completamente." } 
                      }
    },
      { english: "Keyboard", portuguese: "Teclado",
          levels: { 
                        B1: { en: "He spilled coffee on his laptop keyboard this morning.", pt: "Ele derramou café no teclado do laptop esta manhã." } 
                      }
    },
      { english: "Update", portuguese: "Atualizar",
          levels: { 
                        B1: { en: "Your computer will restart automatically after it updates.", pt: "Seu computador irá reiniciar automaticamente após atualizar." } 
                      }
    },
      { english: "Crash", portuguese: "Travar (sistema)",
          levels: { 
                        B1: { en: "The system tends to crash if you open too many programs.", pt: "O sistema tende a travar se você abrir programas demais." } 
                      }
    },
      { english: "Log in", portuguese: "Fazer login / Entrar",
          levels: { 
                        B1: { en: "You must log in with your email and password to access the platform.", pt: "Você deve fazer login com seu e-mail e senha para acessar a plataforma." } 
                      }
    },
      { english: "Set up", portuguese: "Configurar / Instalar",
          levels: { 
                        B1: { en: "It took me three hours to set up my new computer and install the software.", pt: "Levei três horas para configurar meu computador novo e instalar o software." } 
                      }
    },
      { english: "Turn on", portuguese: "Ligar (aparelho)",
          levels: { 
                        B1: { en: "Press the red button on the remote control to turn on the television.", pt: "Pressione o botão vermelho no controle remoto para ligar a televisão." } 
                      }
    },
      { english: "Shut down", portuguese: "Desligar / Encerrar (sistema)",
          levels: { 
                        B1: { en: "Please make sure to save your files before you shut down the laptop.", pt: "Por favor, certifique-se de salvar seus arquivos antes de desligar o notebook." } 
                      }
    },
      { english: "Back up", portuguese: "Fazer backup / Cópia de segurança",
          levels: { 
                        B1: { en: "It is very important to back up your photos to a cloud service.", pt: "É muito importante fazer o backup das suas fotos em um serviço de nuvem." } 
                      }
    },
      { english: "Scroll down", portuguese: "Rolar a página para baixo",
          levels: { 
                        B1: { en: "If you scroll down to the bottom of the page, you will find the contact form.", pt: "Se você rolar até o final da página, encontrará o formulário de contato." } 
                      }
    },
      { english: "Click on", portuguese: "Clicar em",
          levels: { 
                        B1: { en: "Click on the blue link to verify your email address.", pt: "Clique no link azul para verificar seu endereço de e-mail." } 
                      }
    },
      { english: "Plug in", portuguese: "Ligar na tomada / Conectar",
          levels: { 
                        B1: { en: "The battery is almost dead, I need to plug in my charger right away.", pt: "A bateria está quase acabando, eu preciso conectar meu carregador imediatamente." } 
                      }
    },
      { english: "Hack into", portuguese: "Hackear / Invadir (sistema)",
          levels: { 
                        B1: { en: "Cybercriminals managed to hack into the bank's secure database.", pt: "Cibercriminosos conseguiram hackear o banco de dados seguro do banco." } 
                      }
    },
      { english: "Go offline", portuguese: "Ficar offline",
          levels: { 
                        B1: { en: "The server went offline for maintenance during the night.", pt: "O servidor ficou offline para manutenção durante a noite." } 
                      }
    },
      { english: "Update", portuguese: "Atualizar",
          levels: { 
                        B1: { en: "Your phone will remind you when it is time to update the operating system.", pt: "Seu telefone o lembrará quando for a hora de atualizar o sistema operacional." } 
                      }
    },
      { english: "Download", portuguese: "Baixar (arquivo)",
          levels: { 
                        B1: { en: "You can download the full report in PDF format from our main website.", pt: "Você pode baixar o relatório completo em formato PDF no nosso site principal." } 
                      }
    }
      ],
    dialogue: [
      { speaker: "Mark", english: "Hey, can I borrow your phone charger?", portuguese: "Ei, posso pegar seu carregador de celular emprestado?", isPrimary: true },
      { speaker: "Lucy", english: "Sure. Is your smartphone battery dead?", portuguese: "Claro. A bateria do seu celular acabou?", isPrimary: false },
      { speaker: "Mark", english: "Yes. I also need to use your laptop to check my email.", portuguese: "Sim. Eu também preciso usar seu notebook para checar meu email.", isPrimary: true },
      { speaker: "Lucy", english: "Go ahead. But you will need the Wi-Fi password to connect to the internet.", portuguese: "Vá em frente. Mas você vai precisar da senha do Wi-Fi para conectar à internet.", isPrimary: false },
      { speaker: "Mark", english: "Great, what is the password?", portuguese: "Ótimo, qual é a senha?", isPrimary: true },
      { speaker: "Lucy", english: "It is written on the back of the router.", portuguese: "Está escrito atrás do roteador.", isPrimary: false },
      { speaker: "Mark", english: "Got it. By the way, do you have headphones?", portuguese: "Entendi. A propósito, você tem fones de ouvido?", isPrimary: true },
      { speaker: "Lucy", english: "Yes, they are in the folder on the desk.", portuguese: "Sim, estão na pasta em cima da mesa.", isPrimary: false },
      { speaker: "Mark", english: "Thanks. I need to download a video file for my project.", portuguese: "Obrigado. Eu preciso baixar um arquivo de vídeo para meu projeto.", isPrimary: true },
      { speaker: "Lucy", english: "Don't forget to save it before you close the app.", portuguese: "Não esqueça de salvar antes de fechar o aplicativo.", isPrimary: false }],
    flashcards: [
      { english: "My laptop is new.", portuguese: "Meu notebook é novo." },
      { english: "Look at your smartphone.", portuguese: "Olhe para o seu celular." },
      { english: "The internet is slow.", portuguese: "A internet está lenta." },
      { english: "The keyboard is broken.", portuguese: "O teclado está quebrado." },
      { english: "The screen is bright.", portuguese: "A tela está brilhante." },
      { english: "I need to download the app.", portuguese: "Preciso baixar o aplicativo." },
      { english: "My battery is dying.", portuguese: "Minha bateria está acabando." },
      { english: "Save the file in the folder.", portuguese: "Salve o arquivo na pasta." },
      { english: "Did you delete the photo?", portuguese: "Você apagou a foto?" },
      { english: "Put on your headphones.", portuguese: "Coloque seus fones de ouvido." },
      { english: "Click on the link.", portuguese: "Clique no link." },
      { english: "Upload the video to the website.", portuguese: "Faça upload do vídeo no site." }],
    quiz: [
      { question: 'How do you say "Teclado" in English?', options: ["Mouse", "Monitor", "Keyboard", "Screen"], correctIndex: 2, explanation: '"Teclado" translates to "Keyboard" (key = tecla, board = placa/tabuleiro).' },
      { question: 'What does "Download" mean?', options: ["Enviar arquivo", "Baixar arquivo", "Apagar arquivo", "Salvar arquivo"], correctIndex: 1, explanation: '"Download" means to transfer data to your local device (Baixar).' },
      { question: 'Translate: "Meu notebook é novo."', options: ["My laptop is old.", "My smartphone is new.", "My laptop is new.", "My screen is broken."], correctIndex: 2, explanation: 'In English, "notebook" (computer) is usually called "laptop".' },
      { question: 'How do you say "Senha"?', options: ["Keyword", "Passport", "Passcode", "Password"], correctIndex: 3, explanation: '"Senha" translates to Password.' },
      { question: 'What gives power to your phone?', options: ["Screen", "Mouse", "Charger", "Keyboard"], correctIndex: 2, explanation: 'A Charger (carregador) charges the battery.' },
      { question: 'Translate "Tela".', options: ["Mouse", "Screen", "App", "Internet"], correctIndex: 1, explanation: '"Tela" translates to Screen.' },
      { question: 'What is short for "Application"?', options: ["App", "Apl", "Ipad", "Pro"], correctIndex: 0, explanation: '"App" is short for Application (Aplicativo).' },
      { question: 'What device do you use to click things on a computer?', options: ["Keyboard", "Mouse", "Charger", "Screen"], correctIndex: 1, explanation: 'You click using a Mouse.' },
      { question: 'Complete: "I forgot my Wi-Fi _____."', options: ["app", "charger", "password", "screen"], correctIndex: 2, explanation: 'You need a password to access private Wi-Fi.' },
      { question: 'How do you ask for a charger?', options: ["Where is your laptop?", "Do you have a charger?", "Is the internet slow?", "What is the app?"], correctIndex: 1, explanation: '"Do you have a charger?" asks if the person possesses one.' }],
    trueOrFalse: {
      part1: [
        { statement: "You use a keyboard to type words.", statementPt: "Você usa um teclado para digitar palavras.", isTrue: true, explanation: "Keyboard means teclado." },
      { statement: "A screen is where you hear sounds.", statementPt: "Uma tela é onde você ouve sons.", isTrue: false, explanation: "A screen (tela) is for seeing images. You hear sounds with headphones or speakers." },
      { statement: "You need a charger when your battery is low.", statementPt: "Você precisa de um carregador quando sua bateria está fraca.", isTrue: true, explanation: "Charger means carregador." },
      { statement: "To delete a file means to save it forever.", statementPt: "Apagar um arquivo significa salvá-lo para sempre.", isTrue: false, explanation: "Delete means apagar/remover." },
      { statement: "A password protects your account.", statementPt: "Uma senha protege sua conta.", isTrue: true, explanation: "Password means senha." },
        { statement: "A charger gives battery to your phone.", statementPt: "Um carregador dá bateria ao seu celular.", isTrue: true, explanation: "Charger means carregador." }
      ],
      part2: [
        { statement: "You use a password to lock your house.", statementPt: "Você usa uma senha para trancar sua casa.", isTrue: false, explanation: "You use a key. A password is for accounts." },
        { statement: "A website is on the internet.", statementPt: "Um site está na internet.", isTrue: true, explanation: "Website means site." },
        { statement: "You use an app on your smartphone.", statementPt: "Você usa um aplicativo no seu celular.", isTrue: true, explanation: "App means aplicativo." },
        { statement: "To download means to send a file to the internet.", statementPt: "Fazer o download significa enviar um arquivo para a internet.", isTrue: false, explanation: "Download means to get a file. Upload is to send." },
        { statement: "A folder helps you organize files.", statementPt: "Uma pasta ajuda você a organizar arquivos.", isTrue: true, explanation: "Folder means pasta." },
        { statement: "To delete a file means to remove it.", statementPt: "Apagar um arquivo significa removê-lo.", isTrue: true, explanation: "Delete means apagar." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you use a laptop or a desktop computer at home?", translation: "Você usa um notebook ou computador de mesa em casa?" },
        { question: "Is your smartphone screen big or small?", translation: "A tela do seu celular é grande ou pequena?" },
        { question: "Do you always carry your phone charger with you?", translation: "Você sempre leva seu carregador de celular com você?" },
        { question: "Is your internet connection fast?", translation: "Sua conexão de internet é rápida?" },
        { question: "Do you use a tablet to watch videos?", translation: "Você usa um tablet para assistir vídeos?" },
        { question: "Is your smartphone battery good?", translation: "A bateria do seu celular é boa?" },
        { question: "Do you know how to type fast on the keyboard?", translation: "Você sabe digitar rápido no teclado?" }
      ],
      part2: [
        { question: "Do you remember all your passwords?", translation: "Você lembra de todas as suas senhas?" },
        { question: "How many apps do you have on your phone?", translation: "Quantos aplicativos você tem no seu celular?" },
        { question: "Do you check your email every day?", translation: "Você checa seu email todo dia?" },
        { question: "Do you often download movies or music?", translation: "Você baixa filmes ou música com frequência?" },
        { question: "Do you always delete old photos from your phone?", translation: "Você sempre apaga fotos antigas do seu celular?" },
        { question: "Do you have a special folder for your documents?", translation: "Você tem uma pasta especial para seus documentos?" },
        { question: "Do you visit many websites every day?", translation: "Você visita muitos sites todos os dias?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "I use my laptop for work.", portuguese: "Eu uso meu notebook para trabalhar." }, { english: "Dont touch the screen.", portuguese: "Não toque na tela." }, { english: "This app is very useful.", portuguese: "Este aplicativo é muito útil." }, { english: "I need to upload my homework.", portuguese: "Preciso enviar meu dever de casa." }, { english: "Click on this link.", portuguese: "Clique neste link." }, { english: "I am listening to music with headphones.", portuguese: "Estou ouvindo música com fones de ouvido." } ],
                    level2: [ { english: "He connected his laptop to the office network yesterday.", portuguese: "Ele conectou o laptop dele à rede do escritório ontem." }, { english: "She cracked her phone screen when it fell on the floor.", portuguese: "Ela rachou a tela do telefone quando ele caiu no chão." }, { english: "The developer updated the app to fix some bugs.", portuguese: "O desenvolvedor atualizou o aplicativo para corrigir alguns bugs." }, { english: "He uploaded the heavy video file to the server.", portuguese: "Ele enviou (fez upload) o arquivo de vídeo pesado para o servidor." }, { english: "He clicked the secure link to reset his password.", portuguese: "Ele clicou no link seguro para redefinir sua senha." }, { english: "He wore noise-canceling headphones to concentrate at work.", portuguese: "Ele usou fones de ouvido com cancelamento de ruído para se concentrar no trabalho." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Laptop means Notebook / PC.", statementPt: "Laptop significa Notebook / PC.", isTrue: true, explanation: "Yes, Laptop means Notebook / PC." }, { statement: "Smartphone means a type of car.", statementPt: "Smartphone significa um tipo de carro.", isTrue: false, explanation: "No, Smartphone means Celular." }, { statement: "Internet means Internet.", statementPt: "Internet significa Internet.", isTrue: true, explanation: "Yes, Internet means Internet." }, { statement: "Keyboard means a type of car.", statementPt: "Keyboard significa um tipo de carro.", isTrue: false, explanation: "No, Keyboard means Teclado." }, { statement: "Screen means Tela.", statementPt: "Screen significa Tela.", isTrue: true, explanation: "Yes, Screen means Tela." }, { statement: "Download means a type of car.", statementPt: "Download significa um tipo de carro.", isTrue: false, explanation: "No, Download means Baixar." }, { statement: "Password means Senha.", statementPt: "Password significa Senha.", isTrue: true, explanation: "Yes, Password means Senha." }, { statement: "Charger means a type of car.", statementPt: "Charger significa um tipo de carro.", isTrue: false, explanation: "No, Charger means Carregador." }, { statement: "App means Aplicativo.", statementPt: "App significa Aplicativo.", isTrue: true, explanation: "Yes, App means Aplicativo." }, { statement: "Mouse means a type of car.", statementPt: "Mouse significa um tipo de carro.", isTrue: false, explanation: "No, Mouse means Mouse." } ],
                    part2: [ { statement: "Upload means Fazer upload / Enviar.", statementPt: "Upload significa Fazer upload / Enviar.", isTrue: true, explanation: "Yes, Upload means Fazer upload / Enviar." }, { statement: "Battery means a type of car.", statementPt: "Battery significa um tipo de carro.", isTrue: false, explanation: "No, Battery means Bateria." }, { statement: "Email means E-mail.", statementPt: "Email significa E-mail.", isTrue: true, explanation: "Yes, Email means E-mail." }, { statement: "Website means a type of car.", statementPt: "Website significa um tipo de carro.", isTrue: false, explanation: "No, Website means Site." }, { statement: "Link means Link.", statementPt: "Link significa Link.", isTrue: true, explanation: "Yes, Link means Link." }, { statement: "Save means a type of car.", statementPt: "Save significa um tipo de carro.", isTrue: false, explanation: "No, Save means Salvar." }, { statement: "Delete means Apagar.", statementPt: "Delete significa Apagar.", isTrue: true, explanation: "Yes, Delete means Apagar." }, { statement: "Folder means a type of car.", statementPt: "Folder significa um tipo de carro.", isTrue: false, explanation: "No, Folder means Pasta (arquivos)." }, { statement: "Headphones means Fones de ouvido.", statementPt: "Headphones significa Fones de ouvido.", isTrue: true, explanation: "Yes, Headphones means Fones de ouvido." }, { statement: "Plug in means a type of car.", statementPt: "Plug in significa um tipo de carro.", isTrue: false, explanation: "No, Plug in means Conectar na tomada." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Laptop\" in a sentence in the past simple?", translation: "Você consegue usar \"Laptop\" em uma frase no passado simples?" }, { question: "Can you use \"Smartphone\" in a sentence in the past simple?", translation: "Você consegue usar \"Smartphone\" em uma frase no passado simples?" }, { question: "Can you use \"Internet\" in a sentence in the past simple?", translation: "Você consegue usar \"Internet\" em uma frase no passado simples?" }, { question: "Can you use \"Keyboard\" in a sentence in the past simple?", translation: "Você consegue usar \"Keyboard\" em uma frase no passado simples?" }, { question: "Can you use \"Screen\" in a sentence in the past simple?", translation: "Você consegue usar \"Screen\" em uma frase no passado simples?" }, { question: "Can you use \"Download\" in a sentence in the past simple?", translation: "Você consegue usar \"Download\" em uma frase no passado simples?" }, { question: "Can you use \"Password\" in a sentence in the past simple?", translation: "Você consegue usar \"Password\" em uma frase no passado simples?" }, { question: "Can you use \"Charger\" in a sentence in the past simple?", translation: "Você consegue usar \"Charger\" em uma frase no passado simples?" }, { question: "Can you use \"App\" in a sentence in the past simple?", translation: "Você consegue usar \"App\" em uma frase no passado simples?" }, { question: "Can you use \"Mouse\" in a sentence in the past simple?", translation: "Você consegue usar \"Mouse\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Upload\" in a sentence in the past simple?", translation: "Você consegue usar \"Upload\" em uma frase no passado simples?" }, { question: "Can you use \"Battery\" in a sentence in the past simple?", translation: "Você consegue usar \"Battery\" em uma frase no passado simples?" }, { question: "Can you use \"Email\" in a sentence in the past simple?", translation: "Você consegue usar \"Email\" em uma frase no passado simples?" }, { question: "Can you use \"Website\" in a sentence in the past simple?", translation: "Você consegue usar \"Website\" em uma frase no passado simples?" }, { question: "Can you use \"Link\" in a sentence in the past simple?", translation: "Você consegue usar \"Link\" em uma frase no passado simples?" }, { question: "Can you use \"Save\" in a sentence in the past simple?", translation: "Você consegue usar \"Save\" em uma frase no passado simples?" }, { question: "Can you use \"Delete\" in a sentence in the past simple?", translation: "Você consegue usar \"Delete\" em uma frase no passado simples?" }, { question: "Can you use \"Folder\" in a sentence in the past simple?", translation: "Você consegue usar \"Folder\" em uma frase no passado simples?" }, { question: "Can you use \"Headphones\" in a sentence in the past simple?", translation: "Você consegue usar \"Headphones\" em uma frase no passado simples?" }, { question: "Can you use \"Plug in\" in a sentence in the past simple?", translation: "Você consegue usar \"Plug in\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "redes-sociais",
    title: "Social Media",
    titlePt: "Redes Sociais",
    description: "Social media terms and online communication.",
    descriptionPt: "Termos de redes sociais e comunicação online.",
    icon: "Share2",
    image: "/images/redes-sociais.png",
    color: "violet",
    available: true,
    vocabulary: [
      { english: "Like", portuguese: "Curtir",
          levels: { 
                        A1: { en: "Do you like my photo?", pt: "Você curte minha foto?" }, 
                        A2: { en: "Thousands of people liked her post about the trip.", pt: "Milhares de pessoas curtiram a postagem dela sobre a viagem." }
                      }
    },
      { english: "Follow", portuguese: "Seguir",
          levels: { 
                        A1: { en: "I follow many famous people.", pt: "Eu sigo muitas pessoas famosas." }, 
                        A2: { en: "He followed many educational channels to learn new skills.", pt: "Ele seguia muitos canais educacionais para aprender novas habilidades." }
                      }
    },
      { english: "Post", portuguese: "Publicar",
          levels: { 
                        A1: { en: "I post a video every week.", pt: "Eu publico um vídeo toda semana." }, 
                        A2: { en: "She posted a beautiful picture of the sunset on her profile.", pt: "Ela postou uma foto linda do pôr do sol no seu perfil." }
                      }
    },
      { english: "Share", portuguese: "Compartilhar",
          levels: { 
                        A1: { en: "Share this post with your friends.", pt: "Compartilhe esta publicação com seus amigos." }, 
                        A2: { en: "They shared the funny video with all their friends.", pt: "Eles compartilharam o vídeo engraçado com todos os seus amigos." }
                      }
    },
      { english: "Profile", portuguese: "Perfil",
          levels: { 
                        A1: { en: "Your profile picture is nice.", pt: "Sua foto de perfil é bonita." }, 
                        A2: { en: "He updated his professional profile to find a better job.", pt: "Ele atualizou seu perfil profissional para encontrar um emprego melhor." }
                      }
    },
      { english: "Message", portuguese: "Mensagem",
          levels: { 
                        A1: { en: "Send me a direct message.", pt: "Envie-me uma mensagem direta." }, 
                        A2: { en: "She sent a direct message to ask about the event details.", pt: "Ela enviou uma mensagem direta para perguntar sobre os detalhes do evento." }
                      }
    },
      { english: "Comment", portuguese: "Comentar / Comentário",
          levels: { 
                        A1: { en: "Leave a comment below.", pt: "Deixe um comentário abaixo." }, 
                        A2: { en: "He left a positive comment on her recent photo.", pt: "Ele deixou um comentário positivo na foto recente dela." }
                      }
    },
      { english: "Hashtag", portuguese: "Hashtag (#)",
          levels: { 
                        A1: { en: "Use the hashtag #vacation.", pt: "Use a hashtag #vacation." }, 
                        A2: { en: "She used a popular hashtag to make her post visible.", pt: "Ela usou uma hashtag popular para tornar sua postagem visível." }
                      }
    },
      { english: "Scroll", portuguese: "Rolar (a tela)",
          levels: { 
                        A1: { en: "I spend hours scrolling my feed.", pt: "Passo horas rolando meu feed." }, 
                        A2: { en: "He scrolled through his feed for hours without realizing it.", pt: "Ele rolou a tela pelo seu feed por horas sem perceber." }
                      }
    },
      { english: "Follower", portuguese: "Seguidor",
          levels: { 
                        A1: { en: "She has one million followers.", pt: "Ela tem um milhão de seguidores." }, 
                        A2: { en: "The influencer gained a new follower every minute.", pt: "O influenciador ganhava um novo seguidor a cada minuto." }
                      }
    },
      { english: "Feed", portuguese: "Feed / Linha do tempo",
          levels: { 
                        A1: { en: "My feed is full of cats.", pt: "Meu feed está cheio de gatos." }, 
                        A2: { en: "She checked her feed every morning to read the news.", pt: "Ela verificava o seu feed toda manhã para ler as notícias." }
                      }
    },
      { english: "Tag", portuguese: "Marcar (alguém)",
          levels: { 
                        A1: { en: "Tag me in the photo.", pt: "Me marque na foto." }, 
                        A2: { en: "He tagged his best friend in the hilarious meme.", pt: "Ele marcou seu melhor amigo no meme hilário." }
                      }
    },
      { english: "Story", portuguese: "Story (história temporária)",
          levels: { 
                        A1: { en: "I post a story at the beach.", pt: "Posto um story na praia." }, 
                        A2: { en: "She uploaded a quick update to her story yesterday.", pt: "Ela enviou uma atualização rápida para seu story ontem." }
                      }
    },
      { english: "Follower", portuguese: "Seguidor",
          levels: { 
                        B1: { en: "She gained thousands of followers after her video went viral.", pt: "Ela ganhou milhares de seguidores depois que o vídeo dela viralizou." } 
                      }
    },
      { english: "Share", portuguese: "Compartilhar",
          levels: { 
                        B1: { en: "Please share this important message with your friends.", pt: "Por favor, compartilhe esta mensagem importante com seus amigos." } 
                      }
    },
      { english: "Viral", portuguese: "Viral",
          levels: { 
                        B1: { en: "It is very hard to predict which videos will go viral.", pt: "É muito difícil prever quais vídeos vão se tornar virais." } 
                      }
    },
      { english: "Upload", portuguese: "Fazer upload / Enviar",
          levels: { 
                        B1: { en: "It took ten minutes to upload the heavy video file.", pt: "Levou dez minutos para fazer o upload do arquivo de vídeo pesado." } 
                      }
    },
      { english: "Tag", portuguese: "Marcar (alguém)",
          levels: { 
                        B1: { en: "Don't forget to tag me in the photos from the party.", pt: "Não se esqueça de me marcar nas fotos da festa." } 
                      }
    },
      { english: "Post", portuguese: "Postar / Publicar",
          levels: { 
                        B1: { en: "He usually posts an update about his travels every week.", pt: "Ele geralmente posta uma atualização sobre suas viagens toda semana." } 
                      }
    },
      { english: "Settings", portuguese: "Configurações",
          levels: { 
                        B1: { en: "You can change your privacy preferences in the settings menu.", pt: "Você pode alterar suas preferências de privacidade no menu de configurações." } 
                      }
    },
      { english: "Profile", portuguese: "Perfil",
          levels: { 
                        B1: { en: "He updated his professional profile to look for a new job.", pt: "Ele atualizou seu perfil profissional para procurar um emprego novo." } 
                      }
    },
      { english: "Block", portuguese: "Bloquear",
          levels: { 
                        A1: { en: "I had to block him.", pt: "Eu tive que bloqueá-lo." }, 
                        A2: { en: "She blocked the user because he was sending rude messages.", pt: "Ela bloqueou o usuário porque ele estava enviando mensagens rudes." }
                      }
    },
      { english: "Delete", portuguese: "Apagar",
          levels: { 
                        A1: { en: "Delete this photo please.", pt: "Apague esta foto por favor." }, 
                        A2: { en: "I accidentally deleted my favorite picture from the album.", pt: "Eu apaguei acidentalmente a minha foto favorita do álbum." }
                      }
    },
      { english: "Online", portuguese: "Online / Conectado",
          levels: { 
                        A1: { en: "Are you online right now?", pt: "Você está online agora?" }, 
                        A2: { en: "I usually stay online late at night to chat with friends.", pt: "Eu geralmente fico online até tarde da noite para conversar com amigos." }
                      }
    },
      { english: "Password", portuguese: "Senha",
          levels: { 
                        A1: { en: "I forgot my password.", pt: "Eu esqueci a minha senha." }, 
                        A2: { en: "You should create a strong password to protect your account.", pt: "Você deve criar uma senha forte para proteger sua conta." }
                      }
    },
      { english: "Log in", portuguese: "Entrar / Fazer login",
          levels: { 
                        A1: { en: "I need to log in first.", pt: "Eu preciso fazer login primeiro." }, 
                        A2: { en: "He tried to log in, but he couldn't remember his email.", pt: "Ele tentou fazer login, mas não conseguiu lembrar do seu e-mail." }
                      }
    },
      { english: "Log out", portuguese: "Sair / Fazer logoff",
          levels: { 
                        A1: { en: "Don't forget to log out.", pt: "Não se esqueça de sair." }, 
                        A2: { en: "I always log out from my account when I use a public computer.", pt: "Eu sempre saio da minha conta quando uso um computador público." }
                      }
    },
      { english: "App", portuguese: "Aplicativo",
          levels: { 
                        A1: { en: "This app is very useful.", pt: "Este aplicativo é muito útil." }, 
                        A2: { en: "She downloaded a new messaging app to talk to her family.", pt: "Ela baixou um novo aplicativo de mensagens para falar com a família." }
                      }
    },
      { english: "Catch up on", portuguese: "Atualizar-se sobre",
          levels: { 
                        B1: { en: "I spent the morning scrolling through my feed to catch up on the news.", pt: "Passei a manhã rolando o meu feed para me atualizar sobre as notícias." } 
                      }
    },
      { english: "Filter out", portuguese: "Filtrar / Bloquear (conteúdo)",
          levels: { 
                        B1: { en: "You can change your settings to filter out offensive comments.", pt: "Você pode alterar suas configurações para filtrar comentários ofensivos." } 
                      }
    },
      { english: "Log off", portuguese: "Sair / Desconectar-se",
          levels: { 
                        B1: { en: "After checking my messages, I usually log off to focus on work.", pt: "Depois de verificar minhas mensagens, eu geralmente me desconecto para focar no trabalho." } 
                      }
    },
      { english: "Go viral", portuguese: "Viralizar",
          levels: { 
                        B1: { en: "His funny dance video went viral and got millions of views overnight.", pt: "O vídeo de dança engraçado dele viralizou e conseguiu milhões de visualizações da noite para o dia." } 
                      }
    },
      { english: "Troll", portuguese: "Provocar / Pessoa que provoca online",
          levels: { 
                        B1: { en: "Don't pay attention to those mean comments, they are just internet trolls.", pt: "Não preste atenção naqueles comentários maldosos, eles são apenas trolls da internet." } 
                      }
    },
      { english: "Subscribe", portuguese: "Inscrever-se (canal/lista)",
          levels: { 
                        B1: { en: "If you like my videos, please subscribe to my channel for more content.", pt: "Se você gosta dos meus vídeos, por favor inscreva-se no meu canal para mais conteúdo." } 
                      }
    },
      { english: "Mute", portuguese: "Silenciar",
          levels: { 
                        B1: { en: "I had to mute the group chat because I was receiving too many notifications.", pt: "Eu tive que silenciar o chat em grupo porque estava recebendo notificações demais." } 
                      }
    },
      { english: "Unfollow", portuguese: "Deixar de seguir",
          levels: { 
                        B1: { en: "She decided to unfollow him after he started posting too much political content.", pt: "Ela decidiu deixar de segui-lo depois que ele começou a postar muito conteúdo político." } 
                      }
    },
      { english: "Influencer", portuguese: "Influenciador digital",
          levels: { 
                        B1: { en: "Many brands pay influencers to promote their products on social media.", pt: "Muitas marcas pagam influenciadores para promover seus produtos nas redes sociais." } 
                      }
    },
      { english: "Engage", portuguese: "Engajar-se / Interagir",
          levels: { 
                        B1: { en: "It is important for companies to engage with their followers by replying to comments.", pt: "É importante para as empresas interagir com seus seguidores respondendo a comentários." } 
                      }
    },
      { english: "Caption", portuguese: "Legenda (foto/post)",
          levels: { 
                        B1: { en: "She wrote a very inspiring caption under her latest vacation photo.", pt: "Ela escreveu uma legenda muito inspiradora debaixo da sua última foto de férias." } 
                      }
    },
      { english: "Trend", portuguese: "Tendência / Assunto do momento",
          levels: { 
                        B1: { en: "That challenge became a huge trend, and everyone is doing it online.", pt: "Esse desafio se tornou uma enorme tendência e todo mundo está fazendo online." } 
                      }
    }
      ],
    dialogue: [
      { speaker: "John", english: "Hey, did you see the picture I posted today?", portuguese: "Ei, você viu a foto que publiquei hoje?", isPrimary: true },
      { speaker: "Anna", english: "No, I didn't. Let me check your profile.", portuguese: "Não, não vi. Deixe-me checar seu perfil.", isPrimary: false },
      { speaker: "John", english: "I got a lot of likes and comments on it.", portuguese: "Eu recebi muitas curtidas e comentários nela.", isPrimary: true },
      { speaker: "Anna", english: "Oh, it's beautiful! I will share it on my feed and tag you.", portuguese: "Ah, é linda! Eu vou compartilhar no meu feed e marcar você.", isPrimary: false },
      { speaker: "John", english: "Thanks! Don't forget to use the hashtag #friends.", portuguese: "Obrigado! Não esqueça de usar a hashtag #friends.", isPrimary: true },
      { speaker: "Anna", english: "Done! Now I will post a story too.", portuguese: "Feito! Agora eu vou postar um story também.", isPrimary: false },
      { speaker: "John", english: "Great. Did you see that funny meme I sent you in a message?", portuguese: "Ótimo. Você viu aquele meme engraçado que te mandei por mensagem?", isPrimary: true },
      { speaker: "Anna", english: "Not yet, I have too many notifications. I will scroll and find it.", portuguese: "Ainda não, eu tenho notificações demais. Eu vou rolar a tela e encontrá-lo.", isPrimary: false },
      { speaker: "John", english: "It went viral yesterday.", portuguese: "Ele viralizou ontem.", isPrimary: true },
      { speaker: "Anna", english: "Haha, I see it now. So funny!", portuguese: "Haha, estou vendo agora. Muito engraçado!", isPrimary: false }],
    flashcards: [
      { english: "Please like my photo.", portuguese: "Por favor, curta minha foto." },
      { english: "I follow many pages.", portuguese: "Eu sigo muitas páginas." },
      { english: "Did you see my post?", portuguese: "Você viu minha publicação?" },
      { english: "Share this video.", portuguese: "Compartilhe este vídeo." },
      { english: "Your profile looks great.", portuguese: "Seu perfil está ótimo." },
      { english: "Send me a message.", portuguese: "Me envie uma mensagem." },
      { english: "Tag your friends below.", portuguese: "Marque seus amigos abaixo." },
      { english: "That video went viral.", portuguese: "Aquele vídeo viralizou." },
      { english: "I got a new notification.", portuguese: "Eu recebi uma notificação nova." },
      { english: "He is a big influencer.", portuguese: "Ele é um grande influenciador." },
      { english: "My account is private.", portuguese: "Minha conta é privada." },
      { english: "Don't scroll too much.", portuguese: "Não role a tela demais." }],
    quiz: [
      { question: 'How do you say "Compartilhar" in English?', options: ["Share", "Like", "Send", "Post"], correctIndex: 0, explanation: '"Share" means to distribute or let others see something (Compartilhar).' },
      { question: 'Translate: "Por favor, curta minha foto."', options: ["Please share my photo.", "Please follow my photo.", "Please like my photo.", "Please message my photo."], correctIndex: 2, explanation: '"Curtir" on social media translates to "Like".' },
      { question: 'What is a "Profile"?', options: ["Senha", "Perfil", "Comentário", "Página inicial"], correctIndex: 1, explanation: '"Profile" refers to the user\'s personal page/identity (Perfil).' },
      { question: 'What does "Scroll" mean?', options: ["Escrever", "Rolar a tela", "Curtir tudo", "Apagar"], correctIndex: 1, explanation: '"Scroll" is the action of moving the screen up or down.' },
      { question: 'Translate "Seguidor".', options: ["Following", "Follow", "Follower", "Follows"], correctIndex: 2, explanation: '"Follower" is someone who follows you.' },
      { question: 'Complete: "Leave a _____ on my video."', options: ["message", "like", "share", "comment"], correctIndex: 3, explanation: 'You leave a comment (comentário).' },
      { question: 'What do we call the # symbol in social media?', options: ["Number", "Hashtag", "Pound", "Tag"], correctIndex: 1, explanation: 'It is commonly called a Hashtag.' },
      { question: 'How do you say "Mensagem Direta"?', options: ["Direct Message", "Fast Message", "Private Chat", "Secret Text"], correctIndex: 0, explanation: '"Direct Message" (often abbreviated as DM) is the correct term.' },
      { question: 'What is the action of uploading a picture to your feed?', options: ["Download", "Post", "Like", "Scroll"], correctIndex: 1, explanation: 'To upload and display a picture is to "Post".' },
      { question: 'Translate: "Eu sigo ela."', options: ["I see her.", "I follow her.", "I like her.", "I share her."], correctIndex: 1, explanation: '"Follow" means seguir.' }],
    trueOrFalse: {
      part1: [
        { statement: "You scroll your feed to see new posts.", statementPt: "Você rola seu feed para ver novas publicações.", isTrue: true, explanation: "Scroll means rolar a tela, feed is linha do tempo." },
      { statement: "When a video goes viral, nobody watches it.", statementPt: "Quando um vídeo viraliza, ninguém o assiste.", isTrue: false, explanation: "Viral means many people watch and share it." },
      { statement: "A follower is someone who sees your posts.", statementPt: "Um seguidor é alguém que vê suas publicações.", isTrue: true, explanation: "Follower means seguidor." },
      { statement: "You use a hashtag to send a private message.", statementPt: "Você usa uma hashtag para enviar uma mensagem privada.", isTrue: false, explanation: "You use a direct message (DM) for private messages." },
      { statement: "To tag someone is to link their profile in a post.", statementPt: "Marcar alguém é linkar o perfil dela em uma publicação.", isTrue: true, explanation: "Tag means marcar." },
        { statement: "You share a post to show it to friends.", statementPt: "Você compartilha um post para mostrá-lo aos amigos.", isTrue: true, explanation: "Share means compartilhar." }
      ],
      part2: [
        { statement: "A story is a post that disappears after 24 hours.", statementPt: "Um story é um post que desaparece após 24 horas.", isTrue: true, explanation: "Story means história." },
        { statement: "An influencer is someone with no followers.", statementPt: "Um influenciador é alguém sem seguidores.", isTrue: false, explanation: "An influencer has many followers." },
        { statement: "A meme is usually funny.", statementPt: "Um meme geralmente é engraçado.", isTrue: true, explanation: "Meme means meme." },
        { statement: "If a video goes viral, many people watch it.", statementPt: "Se um vídeo viraliza, muitas pessoas assistem.", isTrue: true, explanation: "Viral means viral." },
        { statement: "To block someone means you want to see more of them.", statementPt: "Bloquear alguém significa que você quer ver mais da pessoa.", isTrue: false, explanation: "Block means you don't want to see them anymore." },
        { statement: "A notification tells you about a new message.", statementPt: "Uma notificação avisa você sobre uma nova mensagem.", isTrue: true, explanation: "Notification means notificação." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you follow many famous people online?", translation: "Você segue muitas pessoas famosas online?" },
        { question: "How many followers do you have on your profile?", translation: "Quantos seguidores você tem no seu perfil?" },
        { question: "Do you always like and share your friends' posts?", translation: "Você sempre curte e compartilha as publicações dos seus amigos?" },
        { question: "Do you spend a lot of time scrolling your feed?", translation: "Você passa muito tempo rolando o seu feed?" },
        { question: "Do you always read the comments on a post?", translation: "Você sempre lê os comentários em uma publicação?" },
        { question: "Do you prefer sending a message or calling?", translation: "Você prefere enviar uma mensagem ou ligar?" },
        { question: "Have you ever used a funny hashtag?", translation: "Você já usou uma hashtag engraçada?" }
      ],
      part2: [
        { question: "Do you often post stories?", translation: "Você posta stories com frequência?" },
        { question: "Is your account public or private?", translation: "Sua conta é pública ou privada?" },
        { question: "Do you receive many notifications on your phone?", translation: "Você recebe muitas notificações no celular?" },
        { question: "Have you ever blocked someone?", translation: "Você já bloqueou alguém?" },
        { question: "Do you laugh at memes on the internet?", translation: "Você ri de memes na internet?" },
        { question: "Do you follow any digital influencer?", translation: "Você segue algum influenciador digital?" },
        { question: "Do you keep your phone on silent to avoid notifications?", translation: "Você deixa seu celular no silencioso para evitar notificações?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "Did you like my photo?", portuguese: "Você curtiu minha foto?" }, { english: "Your profile picture is nice.", portuguese: "Sua foto de perfil é bonita." }, { english: "I spend hours scrolling my feed.", portuguese: "Passo horas rolando meu feed." }, { english: "My feed is full of cats.", portuguese: "Meu feed está cheio de gatos." }, { english: "The video went viral.", portuguese: "O vídeo viralizou." }, { english: "I need to update my status.", portuguese: "Preciso atualizar meu status." } ],
                    level2: [ { english: "Thousands of people liked her post about the trip.", portuguese: "Milhares de pessoas curtiram a postagem dela sobre a viagem." }, { english: "He updated his professional profile to find a better job.", portuguese: "Ele atualizou seu perfil profissional para encontrar um emprego melhor." }, { english: "He scrolled through his feed for hours without realizing it.", portuguese: "Ele rolou a tela pelo seu feed por horas sem perceber." }, { english: "She checked her feed every morning to read the news.", portuguese: "Ela verificava o seu feed toda manhã para ler as notícias." }, { english: "The dancing video went completely viral overnight.", portuguese: "O vídeo de dança se tornou completamente viral da noite para o dia." }, { english: "The application updated automatically during the night.", portuguese: "O aplicativo atualizou automaticamente durante a noite." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Like means Curtir.", statementPt: "Like significa Curtir.", isTrue: true, explanation: "Yes, Like means Curtir." }, { statement: "Follow means a type of car.", statementPt: "Follow significa um tipo de carro.", isTrue: false, explanation: "No, Follow means Seguir." }, { statement: "Post means Publicar.", statementPt: "Post significa Publicar.", isTrue: true, explanation: "Yes, Post means Publicar." }, { statement: "Share means a type of car.", statementPt: "Share significa um tipo de carro.", isTrue: false, explanation: "No, Share means Compartilhar." }, { statement: "Profile means Perfil.", statementPt: "Profile significa Perfil.", isTrue: true, explanation: "Yes, Profile means Perfil." }, { statement: "Message means a type of car.", statementPt: "Message significa um tipo de carro.", isTrue: false, explanation: "No, Message means Mensagem." }, { statement: "Comment means Comentar / Comentário.", statementPt: "Comment significa Comentar / Comentário.", isTrue: true, explanation: "Yes, Comment means Comentar / Comentário." }, { statement: "Hashtag means a type of car.", statementPt: "Hashtag significa um tipo de carro.", isTrue: false, explanation: "No, Hashtag means Hashtag (#)." }, { statement: "Scroll means Rolar (a tela).", statementPt: "Scroll significa Rolar (a tela).", isTrue: true, explanation: "Yes, Scroll means Rolar (a tela)." }, { statement: "Follower means a type of car.", statementPt: "Follower significa um tipo de carro.", isTrue: false, explanation: "No, Follower means Seguidor." } ],
                    part2: [ { statement: "Feed means Feed / Linha do tempo.", statementPt: "Feed significa Feed / Linha do tempo.", isTrue: true, explanation: "Yes, Feed means Feed / Linha do tempo." }, { statement: "Tag means a type of car.", statementPt: "Tag significa um tipo de carro.", isTrue: false, explanation: "No, Tag means Marcar (alguém)." }, { statement: "Story means Story (história temporária).", statementPt: "Story significa Story (história temporária).", isTrue: true, explanation: "Yes, Story means Story (história temporária)." }, { statement: "Influencer means a type of car.", statementPt: "Influencer significa um tipo de carro.", isTrue: false, explanation: "No, Influencer means Influenciador." }, { statement: "Viral means Viral.", statementPt: "Viral significa Viral.", isTrue: true, explanation: "Yes, Viral means Viral." }, { statement: "Meme means a type of car.", statementPt: "Meme significa um tipo de carro.", isTrue: false, explanation: "No, Meme means Meme." }, { statement: "Block means Bloquear.", statementPt: "Block significa Bloquear.", isTrue: true, explanation: "Yes, Block means Bloquear." }, { statement: "Notification means a type of car.", statementPt: "Notification significa um tipo de carro.", isTrue: false, explanation: "No, Notification means Notificação." }, { statement: "Update means Atualizar.", statementPt: "Update significa Atualizar.", isTrue: true, explanation: "Yes, Update means Atualizar." }, { statement: "Account means a type of car.", statementPt: "Account significa um tipo de carro.", isTrue: false, explanation: "No, Account means Conta (perfil)." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Like\" in a sentence in the past simple?", translation: "Você consegue usar \"Like\" em uma frase no passado simples?" }, { question: "Can you use \"Follow\" in a sentence in the past simple?", translation: "Você consegue usar \"Follow\" em uma frase no passado simples?" }, { question: "Can you use \"Post\" in a sentence in the past simple?", translation: "Você consegue usar \"Post\" em uma frase no passado simples?" }, { question: "Can you use \"Share\" in a sentence in the past simple?", translation: "Você consegue usar \"Share\" em uma frase no passado simples?" }, { question: "Can you use \"Profile\" in a sentence in the past simple?", translation: "Você consegue usar \"Profile\" em uma frase no passado simples?" }, { question: "Can you use \"Message\" in a sentence in the past simple?", translation: "Você consegue usar \"Message\" em uma frase no passado simples?" }, { question: "Can you use \"Comment\" in a sentence in the past simple?", translation: "Você consegue usar \"Comment\" em uma frase no passado simples?" }, { question: "Can you use \"Hashtag\" in a sentence in the past simple?", translation: "Você consegue usar \"Hashtag\" em uma frase no passado simples?" }, { question: "Can you use \"Scroll\" in a sentence in the past simple?", translation: "Você consegue usar \"Scroll\" em uma frase no passado simples?" }, { question: "Can you use \"Follower\" in a sentence in the past simple?", translation: "Você consegue usar \"Follower\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Feed\" in a sentence in the past simple?", translation: "Você consegue usar \"Feed\" em uma frase no passado simples?" }, { question: "Can you use \"Tag\" in a sentence in the past simple?", translation: "Você consegue usar \"Tag\" em uma frase no passado simples?" }, { question: "Can you use \"Story\" in a sentence in the past simple?", translation: "Você consegue usar \"Story\" em uma frase no passado simples?" }, { question: "Can you use \"Influencer\" in a sentence in the past simple?", translation: "Você consegue usar \"Influencer\" em uma frase no passado simples?" }, { question: "Can you use \"Viral\" in a sentence in the past simple?", translation: "Você consegue usar \"Viral\" em uma frase no passado simples?" }, { question: "Can you use \"Meme\" in a sentence in the past simple?", translation: "Você consegue usar \"Meme\" em uma frase no passado simples?" }, { question: "Can you use \"Block\" in a sentence in the past simple?", translation: "Você consegue usar \"Block\" em uma frase no passado simples?" }, { question: "Can you use \"Notification\" in a sentence in the past simple?", translation: "Você consegue usar \"Notification\" em uma frase no passado simples?" }, { question: "Can you use \"Update\" in a sentence in the past simple?", translation: "Você consegue usar \"Update\" em uma frase no passado simples?" }, { question: "Can you use \"Account\" in a sentence in the past simple?", translation: "Você consegue usar \"Account\" em uma frase no passado simples?" } ]
                  }
}];
