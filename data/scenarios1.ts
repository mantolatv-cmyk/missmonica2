import type { Scenario } from "./types";

export const scenarios1: Scenario[] = [
  {
    id: "familia",
    title: "Family",
    titlePt: "Família",
    description: "Learn vocabulary about family members and relationships.",
    descriptionPt: "Aprenda vocabulário sobre membros da família e relacionamentos.",
    icon: "Users",
    image: "/images/familia.png",
    color: "rose",
    available: true,
    vocabulary: [
      { english: "Mother / Mom", portuguese: "Mãe",
          levels: { 
                        A1: { en: "My mother makes the best cake.", pt: "Minha mãe faz o melhor bolo." }, 
                        A2: { en: "My mother makes the best cake.", pt: "Minha mãe faz o melhor bolo." }, 
                        B1: { en: "I have a Mother / Mom", pt: "Eu tenho um Mãe" } 
                      }
    },
      { english: "Father / Dad", portuguese: "Pai",
          levels: { 
                        A1: { en: "My father is working today.", pt: "Meu pai está trabalhando hoje." }, 
                        A2: { en: "My father is working today.", pt: "Meu pai está trabalhando hoje." }, 
                        B1: { en: "I have a Father / Dad", pt: "Eu tenho um Pai" } 
                      }
    },
      { english: "Brother", portuguese: "Irmão",
          levels: { 
                        A1: { en: "I share a room with my brother.", pt: "Eu divido o quarto com meu irmão." }, 
                        A2: { en: "I share a room with my brother.", pt: "Eu divido o quarto com meu irmão." }, 
                        B1: { en: "My brother fixed my broken laptop yesterday.", pt: "Meu irmão consertou meu notebook quebrado ontem." } 
                      }
    },
      { english: "Sister", portuguese: "Irmã",
          levels: { 
                        A1: { en: "My sister is older than me.", pt: "Minha irmã é mais velha que eu." }, 
                        A2: { en: "My sister is older than me.", pt: "Minha irmã é mais velha que eu." }, 
                        B1: { en: "Her sister currently lives in a small apartment in Paris.", pt: "A irmã dela mora atualmente em um pequeno apartamento em Paris." } 
                      }
    },
      { english: "Grandmother", portuguese: "Avó",
          levels: { 
                        A1: { en: "We visit my grandmother every Sunday.", pt: "Visitamos minha avó todo domingo." }, 
                        A2: { en: "We visit my grandmother every Sunday.", pt: "Visitamos minha avó todo domingo." }, 
                        B1: { en: "My grandmother baked delicious cookies every Sunday.", pt: "Minha avó assava biscoitos deliciosos todo domingo." } 
                      }
    },
      { english: "Grandfather", portuguese: "Avô",
          levels: { 
                        A1: { en: "My grandfather loves fishing.", pt: "Meu avô adora pescar." }, 
                        A2: { en: "My grandfather loves fishing.", pt: "Meu avô adora pescar." }, 
                        B1: { en: "He always listens to his grandfather's fascinating stories.", pt: "Ele sempre ouve as histórias fascinantes do seu avô." } 
                      }
    },
      { english: "Aunt", portuguese: "Tia",
          levels: { 
                        A1: { en: "My aunt lives in another city.", pt: "Minha tia mora em outra cidade." }, 
                        A2: { en: "My aunt lives in another city.", pt: "Minha tia mora em outra cidade." }, 
                        B1: { en: "My aunt traveled across Europe last summer.", pt: "Minha tia viajou pela Europa no verão passado." } 
                      }
    },
      { english: "Uncle", portuguese: "Tio",
          levels: { 
                        A1: { en: "My uncle bought a new car.", pt: "Meu tio comprou um carro novo." }, 
                        A2: { en: "My uncle bought a new car.", pt: "Meu tio comprou um carro novo." }, 
                        B1: { en: "His uncle taught him how to play the acoustic guitar.", pt: "O tio dele ensinou ele a tocar violão." } 
                      }
    },
      { english: "Cousin", portuguese: "Primo(a)",
          levels: { 
                        A1: { en: "I played video games with my cousin.", pt: "Joguei videogame com meu primo." }, 
                        A2: { en: "I played video games with my cousin.", pt: "Joguei videogame com meu primo." }, 
                        B1: { en: "I visited my cousin during the winter holidays.", pt: "Eu visitei meu primo durante as férias de inverno." } 
                      }
    },
      { english: "Parents", portuguese: "Pais",
          levels: { 
                        A1: { en: "My parents are very strict.", pt: "Meus pais são muito rigorosos." }, 
                        A2: { en: "My parents are very strict.", pt: "Meus pais são muito rigorosos." }, 
                        B1: { en: "His parents supported his decision to change careers.", pt: "Os pais dele apoiaram a decisão dele de mudar de carreira." } 
                      }
    },
      { english: "Nephew", portuguese: "Sobrinho",
          levels: { 
                        A1: { en: "My nephew is three years old.", pt: "Meu sobrinho tem três anos." }, 
                        A2: { en: "My nephew is three years old.", pt: "Meu sobrinho tem três anos." }, 
                        B1: { en: "She bought a colorful toy for her young nephew.", pt: "Ela comprou um brinquedo colorido para seu jovem sobrinho." } 
                      }
    },
      { english: "Niece", portuguese: "Sobrinha",
          levels: { 
                        A1: { en: "I bought a toy for my niece.", pt: "Comprei um brinquedo para minha sobrinha." }, 
                        A2: { en: "I bought a toy for my niece.", pt: "Comprei um brinquedo para minha sobrinha." }, 
                        B1: { en: "His niece started kindergarten two weeks ago.", pt: "A sobrinha dele começou o jardim de infância há duas semanas." } 
                      }
    },
      { english: "Grandson", portuguese: "Neto",
          levels: { 
                        A1: { en: "The grandfather is playing with his grandson.", pt: "O avô está brincando com seu neto." }, 
                        A2: { en: "The grandfather is playing with his grandson.", pt: "O avô está brincando com seu neto." }, 
                        B1: { en: "I have a Grandson", pt: "Eu tenho um Neto" } 
                      }
    },
      { english: "Granddaughter", portuguese: "Neta",
          levels: { 
                        A1: { en: "She is their first granddaughter.", pt: "Ela é a primeira neta deles." }, 
                        A2: { en: "She is their first granddaughter.", pt: "Ela é a primeira neta deles." }, 
                        B1: { en: "I have a Granddaughter", pt: "Eu tenho um Neta" } 
                      }
    },
      { english: "Wife", portuguese: "Esposa",
          levels: { 
                        A1: { en: "He bought flowers for his wife.", pt: "Ele comprou flores para a esposa." }, 
                        A2: { en: "He bought flowers for his wife.", pt: "Ele comprou flores para a esposa." }, 
                        B1: { en: "His wife works as a senior manager in a tech company.", pt: "A esposa dele trabalha como gerente sênior em uma empresa de tecnologia." } 
                      }
    },
      { english: "Husband", portuguese: "Marido",
          levels: { 
                        A1: { en: "Her husband is a doctor.", pt: "O marido dela é médico." }, 
                        A2: { en: "Her husband is a doctor.", pt: "O marido dela é médico." }, 
                        B1: { en: "Her husband surprised her with a romantic dinner.", pt: "O marido dela a surpreendeu com um jantar romântico." } 
                      }
    },
      { english: "Mother-in-law", portuguese: "Sogra",
          levels: { 
                        A1: { en: "My mother-in-law makes great food.", pt: "Minha sogra faz uma comida ótima." }, 
                        A2: { en: "My mother-in-law makes great food.", pt: "Minha sogra faz uma comida ótima." }, 
                        B1: { en: "I have a Mother-in-law", pt: "Eu tenho um Sogra" } 
                      }
    },
      { english: "Father-in-law", portuguese: "Sogro",
          levels: { 
                        A1: { en: "My father-in-law is very funny.", pt: "Meu sogro é muito engraçado." }, 
                        A2: { en: "My father-in-law is very funny.", pt: "Meu sogro é muito engraçado." }, 
                        B1: { en: "I have a Father-in-law", pt: "Eu tenho um Sogro" } 
                      }
    },
      { english: "Stepmother", portuguese: "Madrasta",
          levels: { 
                        A1: { en: "His stepmother is very kind.", pt: "A madrasta dele é muito gentil." }, 
                        A2: { en: "His stepmother is very kind.", pt: "A madrasta dele é muito gentil." }, 
                        B1: { en: "I have a Stepmother", pt: "Eu tenho um Madrasta" } 
                      }
    },
      { english: "Stepfather", portuguese: "Padrasto",
          levels: { 
                        A1: { en: "My stepfather taught me how to drive.", pt: "Meu padrasto me ensinou a dirigir." }, 
                        A2: { en: "My stepfather taught me how to drive.", pt: "Meu padrasto me ensinou a dirigir." }, 
                        B1: { en: "I have a Stepfather", pt: "Eu tenho um Padrasto" } 
                      }
    },
    ],
    dialogue: [
      { speaker: "John", english: "Hi Maria! Who is that in the picture?", portuguese: "Oi Maria! Quem é esse na foto?", isPrimary: true },
      { speaker: "Maria", english: "Hi John. This is my older brother, Lucas.", portuguese: "Oi John. Este é meu irmão mais velho, Lucas.", isPrimary: false },
      { speaker: "John", english: "Oh, he looks very tall! Does he live with your parents?", portuguese: "Ah, ele parece muito alto! Ele mora com seus pais?", isPrimary: true },
      { speaker: "Maria", english: "No, he lives with our aunt in New York.", portuguese: "Não, ele mora com nossa tia em Nova York.", isPrimary: false },
      { speaker: "John", english: "That's cool. I have three cousins living there too.", portuguese: "Que legal. Eu tenho três primos morando lá também.", isPrimary: true },
      { speaker: "Maria", english: "Wow, it's a big family! Do you visit them often?", portuguese: "Uau, é uma família grande! Você os visita com frequência?", isPrimary: false },
      { speaker: "John", english: "Only on Thanksgiving. My uncle always cooks the turkey.", portuguese: "Só no Dia de Ação de Graças. Meu tio sempre cozinha o peru.", isPrimary: true },
      { speaker: "Maria", english: "That sounds wonderful. Family gatherings are the best.", portuguese: "Isso parece maravilhoso. Reuniões de família são as melhores.", isPrimary: false },
      { speaker: "John", english: "I agree. My grandmother also bakes her famous pie.", portuguese: "Eu concordo. Minha avó também assa a sua torta famosa.", isPrimary: true },
      { speaker: "Maria", english: "I love pie. Are your parents going this year?", portuguese: "Eu amo torta. Seus pais vão este ano?", isPrimary: false },
      { speaker: "John", english: "Yes, and my sister is bringing her new husband.", portuguese: "Sim, e minha irmã vai trazer o novo marido dela.", isPrimary: true },
      { speaker: "Maria", english: "That is exciting! My nephew was born last month, so we will celebrate together.", portuguese: "Isso é empolgante! Meu sobrinho nasceu mês passado, então vamos celebrar juntos.", isPrimary: false },
      { speaker: "John", english: "A baby in the family brings so much joy. Tell your brother I said congratulations.", portuguese: "Um bebê na família traz tanta alegria. Diga ao seu irmão que mandei parabéns.", isPrimary: true },
    ],
    flashcards: [
      { english: "My mother is very kind.", portuguese: "Minha mãe é muito gentil." },
      { english: "I have two brothers.", portuguese: "Eu tenho dois irmãos." },
      { english: "My grandmother makes cookies.", portuguese: "Minha avó faz biscoitos." },
      { english: "My father works at a hospital.", portuguese: "Meu pai trabalha em um hospital." },
      { english: "We are a big family.", portuguese: "Nós somos uma família grande." },
      { english: "My grandfather tells stories.", portuguese: "Meu avô conta histórias." },
      { english: "She is my younger sister.", portuguese: "Ela é minha irmã mais nova." },
      { english: "He loves his niece.", portuguese: "Ele ama a sobrinha dele." },
      { english: "They are married.", portuguese: "Eles são casados." },
      { english: "We visit our grandparents on weekends.", portuguese: "Nós visitamos nossos avós nos fins de semana." },
      { english: "His uncle is very rich.", portuguese: "O tio dele é muito rico." },
      { english: "I am an only child.", portuguese: "Eu sou filho(a) único(a)." },
    ],
    quiz: [
      { question: 'How do you say "Mãe" in English?', options: ["Sister", "Mother", "Daughter", "Aunt"], correctIndex: 1, explanation: '"Mãe" in English is "Mother".' },
      { question: 'What does "Grandfather" mean?', options: ["Tio", "Primo", "Avô", "Padrinho"], correctIndex: 2, explanation: '"Grandfather" means "Avô".' },
      { question: 'Complete: "I have two _____."', options: ["fathers", "brothers", "uncles", "cousins"], correctIndex: 1, explanation: 'The correct answer is "brothers" (irmãos).' },
      { question: 'Who are your "Parents"?', options: ["Tios", "Primos", "Pais", "Irmãos"], correctIndex: 2, explanation: '"Parents" is a false cognate. It means "Pais", not "Parentes".' },
      { question: 'Translate: "Minha tia mora em outra cidade."', options: ["My cousin lives in another city.", "My aunt lives in another city.", "My uncle lives in another city.", "My mother lives in another city."], correctIndex: 1, explanation: '"Tia" translates to "Aunt".' },
      { question: 'What is the female version of "Brother"?', options: ["Aunt", "Mother", "Sister", "Cousin"], correctIndex: 2, explanation: '"Sister" is the female sibling.' },
      { question: 'Which word means "Primo(a)"?', options: ["Uncle", "Nephew", "Niece", "Cousin"], correctIndex: 3, explanation: '"Cousin" is used for both male and female cousins.' },
      { question: 'Complete the sentence: "My mother and father are my ______."', options: ["children", "siblings", "parents", "relatives"], correctIndex: 2, explanation: 'Mother and father together are called "parents".' },
      { question: 'What do you call your father\'s brother?', options: ["Grandfather", "Uncle", "Cousin", "Aunt"], correctIndex: 1, explanation: 'Your father\'s brother is your "Uncle" (tio).' },
      { question: 'How do you say "Irmão mais velho"?', options: ["Big cousin", "Older brother", "New brother", "Tall brother"], correctIndex: 1, explanation: '"Older" means "mais velho".' },
    ],
    trueOrFalse: {
      part1: [
        { statement: "Your mother's sister is your aunt.", statementPt: "A irmã da sua mãe é sua tia.", isTrue: true, explanation: "Aunt means tia." },
      { statement: "A nephew is a girl.", statementPt: "Um sobrinho é uma menina.", isTrue: false, explanation: "Nephew is a boy (sobrinho), niece is a girl (sobrinha)." },
      { statement: "Parents means relatives.", statementPt: "Parents significa parentes.", isTrue: false, explanation: "Parents means pais (mother and father)." },
      { statement: "Your mother's mother is your grandmother.", statementPt: "A mãe da sua mãe é sua avó.", isTrue: true, explanation: "Grandmother means avó." },
      { statement: "A single person has a wife.", statementPt: "Uma pessoa solteira tem uma esposa.", isTrue: false, explanation: "A wife (esposa) means the person is married." },
        { statement: "A sister is your female sibling.", statementPt: "Uma irmã é a sua irmã do sexo feminino.", isTrue: true, explanation: "Sister means irmã." }
      ],
      part2: [
        { statement: "A husband is a female spouse.", statementPt: "Um marido é uma esposa do sexo feminino.", isTrue: false, explanation: "Husband is a male spouse (marido)." },
        { statement: "Your sister's son is your nephew.", statementPt: "O filho da sua irmã é seu sobrinho.", isTrue: true, explanation: "Nephew means sobrinho." },
        { statement: "Your brother's daughter is your niece.", statementPt: "A filha do seu irmão é sua sobrinha.", isTrue: true, explanation: "Niece means sobrinha." },
        { statement: "A daughter is a male child.", statementPt: "Uma filha é uma criança do sexo masculino.", isTrue: false, explanation: "Daughter is a female child (filha)." },
        { statement: "Your son's son is your grandson.", statementPt: "O filho do seu filho é seu neto.", isTrue: true, explanation: "Grandson means neto." },
        { statement: "Relatives are people in your family.", statementPt: "Parentes são pessoas da sua família.", isTrue: true, explanation: "Relatives means parentes." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you have any brothers or sisters?", translation: "Você tem irmãos ou irmãs?" },
        { question: "What is your mother's name?", translation: "Qual é o nome da sua mãe?" },
        { question: "How many cousins do you have?", translation: "Quantos primos você tem?" },
        { question: "Do your grandparents live near you?", translation: "Seus avós moram perto de você?" },
        { question: "Do your parents work every day?", translation: "Seus pais trabalham todos os dias?" },
        { question: "Who is the youngest brother or sister in your family?", translation: "Quem é o irmão ou irmã mais novo(a) na sua família?" },
        { question: "Do you look like your father or your mother?", translation: "Você se parece com seu pai ou com sua mãe?" }
      ],
      part2: [
        { question: "Are you single or married?", translation: "Você é solteiro ou casado?" },
        { question: "Do you have any nephews or nieces?", translation: "Você tem sobrinhos ou sobrinhas?" },
        { question: "How often do you visit your relatives?", translation: "Com que frequência você visita seus parentes?" },
        { question: "Do you have a husband or a wife?", translation: "Você tem marido ou esposa?" },
        { question: "Do you have a big family with many relatives?", translation: "Você tem uma família grande com muitos parentes?" },
        { question: "How old is your oldest son or daughter?", translation: "Quantos anos tem o seu filho ou filha mais velho(a)?" },
        { question: "Do you know anyone who just got a new grandson?", translation: "Você conhece alguém que acabou de ter um novo neto?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "My mother makes the best cake.", portuguese: "Minha mãe faz o melhor bolo." }, { english: "We visit my grandmother every Sunday.", portuguese: "Visitamos minha avó todo domingo." }, { english: "I played video games with my cousin.", portuguese: "Joguei videogame com meu primo." }, { english: "My nephew is three years old.", portuguese: "Meu sobrinho tem três anos." }, { english: "He bought flowers for his wife.", portuguese: "Ele comprou flores para a esposa." }, { english: "His stepmother is very kind.", portuguese: "A madrasta dele é muito gentil." } ],
                    level2: [ { english: "I have a Mother / Mom", portuguese: "Eu tenho um Mãe" }, { english: "My grandmother baked delicious cookies every Sunday.", portuguese: "Minha avó assava biscoitos deliciosos todo domingo." }, { english: "I visited my cousin during the winter holidays.", portuguese: "Eu visitei meu primo durante as férias de inverno." }, { english: "She bought a colorful toy for her young nephew.", portuguese: "Ela comprou um brinquedo colorido para seu jovem sobrinho." }, { english: "His wife works as a senior manager in a tech company.", portuguese: "A esposa dele trabalha como gerente sênior em uma empresa de tecnologia." }, { english: "I have a Stepmother", portuguese: "Eu tenho um Madrasta" } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Mother / Mom means Mãe.", statementPt: "Mother / Mom significa Mãe.", isTrue: true, explanation: "Yes, Mother / Mom means Mãe." }, { statement: "Father / Dad means a type of car.", statementPt: "Father / Dad significa um tipo de carro.", isTrue: false, explanation: "No, Father / Dad means Pai." }, { statement: "Brother means Irmão.", statementPt: "Brother significa Irmão.", isTrue: true, explanation: "Yes, Brother means Irmão." }, { statement: "Sister means a type of car.", statementPt: "Sister significa um tipo de carro.", isTrue: false, explanation: "No, Sister means Irmã." }, { statement: "Grandmother means Avó.", statementPt: "Grandmother significa Avó.", isTrue: true, explanation: "Yes, Grandmother means Avó." }, { statement: "Grandfather means a type of car.", statementPt: "Grandfather significa um tipo de carro.", isTrue: false, explanation: "No, Grandfather means Avô." }, { statement: "Aunt means Tia.", statementPt: "Aunt significa Tia.", isTrue: true, explanation: "Yes, Aunt means Tia." }, { statement: "Uncle means a type of car.", statementPt: "Uncle significa um tipo de carro.", isTrue: false, explanation: "No, Uncle means Tio." }, { statement: "Cousin means Primo(a).", statementPt: "Cousin significa Primo(a).", isTrue: true, explanation: "Yes, Cousin means Primo(a)." }, { statement: "Parents means a type of car.", statementPt: "Parents significa um tipo de carro.", isTrue: false, explanation: "No, Parents means Pais." } ],
                    part2: [ { statement: "Nephew means Sobrinho.", statementPt: "Nephew significa Sobrinho.", isTrue: true, explanation: "Yes, Nephew means Sobrinho." }, { statement: "Niece means a type of car.", statementPt: "Niece significa um tipo de carro.", isTrue: false, explanation: "No, Niece means Sobrinha." }, { statement: "Grandson means Neto.", statementPt: "Grandson significa Neto.", isTrue: true, explanation: "Yes, Grandson means Neto." }, { statement: "Granddaughter means a type of car.", statementPt: "Granddaughter significa um tipo de carro.", isTrue: false, explanation: "No, Granddaughter means Neta." }, { statement: "Wife means Esposa.", statementPt: "Wife significa Esposa.", isTrue: true, explanation: "Yes, Wife means Esposa." }, { statement: "Husband means a type of car.", statementPt: "Husband significa um tipo de carro.", isTrue: false, explanation: "No, Husband means Marido." }, { statement: "Mother-in-law means Sogra.", statementPt: "Mother-in-law significa Sogra.", isTrue: true, explanation: "Yes, Mother-in-law means Sogra." }, { statement: "Father-in-law means a type of car.", statementPt: "Father-in-law significa um tipo de carro.", isTrue: false, explanation: "No, Father-in-law means Sogro." }, { statement: "Stepmother means Madrasta.", statementPt: "Stepmother significa Madrasta.", isTrue: true, explanation: "Yes, Stepmother means Madrasta." }, { statement: "Stepfather means a type of car.", statementPt: "Stepfather significa um tipo de carro.", isTrue: false, explanation: "No, Stepfather means Padrasto." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Mother / Mom\" in a sentence in the past simple?", translation: "Você consegue usar \"Mother / Mom\" em uma frase no passado simples?" }, { question: "Can you use \"Father / Dad\" in a sentence in the past simple?", translation: "Você consegue usar \"Father / Dad\" em uma frase no passado simples?" }, { question: "Can you use \"Brother\" in a sentence in the past simple?", translation: "Você consegue usar \"Brother\" em uma frase no passado simples?" }, { question: "Can you use \"Sister\" in a sentence in the past simple?", translation: "Você consegue usar \"Sister\" em uma frase no passado simples?" }, { question: "Can you use \"Grandmother\" in a sentence in the past simple?", translation: "Você consegue usar \"Grandmother\" em uma frase no passado simples?" }, { question: "Can you use \"Grandfather\" in a sentence in the past simple?", translation: "Você consegue usar \"Grandfather\" em uma frase no passado simples?" }, { question: "Can you use \"Aunt\" in a sentence in the past simple?", translation: "Você consegue usar \"Aunt\" em uma frase no passado simples?" }, { question: "Can you use \"Uncle\" in a sentence in the past simple?", translation: "Você consegue usar \"Uncle\" em uma frase no passado simples?" }, { question: "Can you use \"Cousin\" in a sentence in the past simple?", translation: "Você consegue usar \"Cousin\" em uma frase no passado simples?" }, { question: "Can you use \"Parents\" in a sentence in the past simple?", translation: "Você consegue usar \"Parents\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Nephew\" in a sentence in the past simple?", translation: "Você consegue usar \"Nephew\" em uma frase no passado simples?" }, { question: "Can you use \"Niece\" in a sentence in the past simple?", translation: "Você consegue usar \"Niece\" em uma frase no passado simples?" }, { question: "Can you use \"Grandson\" in a sentence in the past simple?", translation: "Você consegue usar \"Grandson\" em uma frase no passado simples?" }, { question: "Can you use \"Granddaughter\" in a sentence in the past simple?", translation: "Você consegue usar \"Granddaughter\" em uma frase no passado simples?" }, { question: "Can you use \"Wife\" in a sentence in the past simple?", translation: "Você consegue usar \"Wife\" em uma frase no passado simples?" }, { question: "Can you use \"Husband\" in a sentence in the past simple?", translation: "Você consegue usar \"Husband\" em uma frase no passado simples?" }, { question: "Can you use \"Mother-in-law\" in a sentence in the past simple?", translation: "Você consegue usar \"Mother-in-law\" em uma frase no passado simples?" }, { question: "Can you use \"Father-in-law\" in a sentence in the past simple?", translation: "Você consegue usar \"Father-in-law\" em uma frase no passado simples?" }, { question: "Can you use \"Stepmother\" in a sentence in the past simple?", translation: "Você consegue usar \"Stepmother\" em uma frase no passado simples?" }, { question: "Can you use \"Stepfather\" in a sentence in the past simple?", translation: "Você consegue usar \"Stepfather\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "amigos",
    title: "Friends",
    titlePt: "Amigos",
    description: "Talk about friendships and social activities.",
    descriptionPt: "Fale sobre amizades e atividades sociais.",
    icon: "UserPlus",
    image: "/images/amigos.png",
    color: "lavender",
    available: true,
    vocabulary: [
      { english: "Friend", portuguese: "Amigo(a)",
          levels: { 
                        A1: { en: "He is a good friend.", pt: "Ele é um bom amigo." }, 
                        A2: { en: "He is a good friend.", pt: "Ele é um bom amigo." }, 
                        B1: { en: "I have a Friend", pt: "Eu tenho um Amigo(a)" } 
                      }
    },
      { english: "Best friend", portuguese: "Melhor amigo(a)",
          levels: { 
                        A1: { en: "She is my best friend since childhood.", pt: "Ela é minha melhor amiga desde a infância." }, 
                        A2: { en: "She is my best friend since childhood.", pt: "Ela é minha melhor amiga desde a infância." }, 
                        B1: { en: "I have a Best friend", pt: "Eu tenho um Melhor amigo(a)" } 
                      }
    },
      { english: "Hang out", portuguese: "Sair para passear",
          levels: { 
                        A1: { en: "Lets hang out this weekend.", pt: "Vamos sair neste fim de semana." }, 
                        A2: { en: "Lets hang out this weekend.", pt: "Vamos sair neste fim de semana." }, 
                        B1: { en: "I have a Hang out", pt: "Eu tenho um Sair para passear" } 
                      }
    },
      { english: "Meet up", portuguese: "Encontrar-se",
          levels: { 
                        A1: { en: "We can meet up at the cafe.", pt: "Podemos nos encontrar no café." }, 
                        A2: { en: "We can meet up at the cafe.", pt: "Podemos nos encontrar no café." }, 
                        B1: { en: "I have a Meet up", pt: "Eu tenho um Encontrar-se" } 
                      }
    },
      { english: "Chat", portuguese: "Bater papo",
          levels: { 
                        A1: { en: "I like chatting with you.", pt: "Gosto de bater papo com você." }, 
                        A2: { en: "I like chatting with you.", pt: "Gosto de bater papo com você." }, 
                        B1: { en: "I have a Chat", pt: "Eu tenho um Bater papo" } 
                      }
    },
      { english: "Fun", portuguese: "Diversão / Divertido",
          levels: { 
                        A1: { en: "The party was really fun.", pt: "A festa foi muito divertida." }, 
                        A2: { en: "The party was really fun.", pt: "A festa foi muito divertida." }, 
                        B1: { en: "I have a Fun", pt: "Eu tenho um Diversão / Divertido" } 
                      }
    },
      { english: "Invite", portuguese: "Convidar",
          levels: { 
                        A1: { en: "I will invite them to my house.", pt: "Vou convidá-los para minha casa." }, 
                        A2: { en: "I will invite them to my house.", pt: "Vou convidá-los para minha casa." }, 
                        B1: { en: "I have a Invite", pt: "Eu tenho um Convidar" } 
                      }
    },
      { english: "Party", portuguese: "Festa",
          levels: { 
                        A1: { en: "Are you going to the party tonight?", pt: "Você vai à festa hoje à noite?" }, 
                        A2: { en: "Are you going to the party tonight?", pt: "Você vai à festa hoje à noite?" }, 
                        B1: { en: "I have a Party", pt: "Eu tenho um Festa" } 
                      }
    },
      { english: "Group", portuguese: "Grupo",
          levels: { 
                        A1: { en: "Our friend group is very united.", pt: "Nosso grupo de amigos é muito unido." }, 
                        A2: { en: "Our friend group is very united.", pt: "Nosso grupo de amigos é muito unido." }, 
                        B1: { en: "I have a Group", pt: "Eu tenho um Grupo" } 
                      }
    },
      { english: "Share", portuguese: "Compartilhar",
          levels: { 
                        A1: { en: "We share our secrets.", pt: "Nós compartilhamos nossos segredos." }, 
                        A2: { en: "We share our secrets.", pt: "Nós compartilhamos nossos segredos." }, 
                        B1: { en: "I have a Share", pt: "Eu tenho um Compartilhar" } 
                      }
    },
      { english: "Trust", portuguese: "Confiar",
          levels: { 
                        A1: { en: "I trust my friends completely.", pt: "Eu confio nos meus amigos completamente." }, 
                        A2: { en: "I trust my friends completely.", pt: "Eu confio nos meus amigos completamente." }, 
                        B1: { en: "I have a Trust", pt: "Eu tenho um Confiar" } 
                      }
    },
      { english: "Keep a secret", portuguese: "Guardar segredo",
          levels: { 
                        A1: { en: "Can you keep a secret?", pt: "Você consegue guardar segredo?" }, 
                        A2: { en: "Can you keep a secret?", pt: "Você consegue guardar segredo?" }, 
                        B1: { en: "I have a Keep a secret", pt: "Eu tenho um Guardar segredo" } 
                      }
    },
      { english: "Argue", portuguese: "Discutir",
          levels: { 
                        A1: { en: "Sometimes we argue, but we fix it.", pt: "Às vezes discutimos, mas nos resolvemos." }, 
                        A2: { en: "Sometimes we argue, but we fix it.", pt: "Às vezes discutimos, mas nos resolvemos." }, 
                        B1: { en: "I have a Argue", pt: "Eu tenho um Discutir" } 
                      }
    },
      { english: "Apologize", portuguese: "Pedir desculpas",
          levels: { 
                        A1: { en: "He apologized for being late.", pt: "Ele pediu desculpas por chegar atrasado." }, 
                        A2: { en: "He apologized for being late.", pt: "Ele pediu desculpas por chegar atrasado." }, 
                        B1: { en: "I have a Apologize", pt: "Eu tenho um Pedir desculpas" } 
                      }
    },
      { english: "Help out", portuguese: "Ajudar",
          levels: { 
                        A1: { en: "Friends always help out when needed.", pt: "Amigos sempre ajudam quando necessário." }, 
                        A2: { en: "Friends always help out when needed.", pt: "Amigos sempre ajudam quando necessário." }, 
                        B1: { en: "I have a Help out", pt: "Eu tenho um Ajudar" } 
                      }
    },
      { english: "Joke", portuguese: "Piada / Brincadeira",
          levels: { 
                        A1: { en: "He always tells funny jokes.", pt: "Ele sempre conta piadas engraçadas." }, 
                        A2: { en: "He always tells funny jokes.", pt: "Ele sempre conta piadas engraçadas." }, 
                        B1: { en: "I have a Joke", pt: "Eu tenho um Piada / Brincadeira" } 
                      }
    },
      { english: "Support", portuguese: "Apoiar",
          levels: { 
                        A1: { en: "Good friends support you in bad times.", pt: "Bons amigos apoiam você nos momentos difíceis." }, 
                        A2: { en: "Good friends support you in bad times.", pt: "Bons amigos apoiam você nos momentos difíceis." }, 
                        B1: { en: "I have a Support", pt: "Eu tenho um Apoiar" } 
                      }
    },
      { english: "Advice", portuguese: "Conselho",
          levels: { 
                        A1: { en: "Can you give me some advice?", pt: "Você pode me dar um conselho?" }, 
                        A2: { en: "Can you give me some advice?", pt: "Você pode me dar um conselho?" }, 
                        B1: { en: "I have a Advice", pt: "Eu tenho um Conselho" } 
                      }
    },
      { english: "Get along", portuguese: "Se dar bem",
          levels: { 
                        A1: { en: "They get along very well.", pt: "Eles se dão muito bem." }, 
                        A2: { en: "They get along very well.", pt: "Eles se dão muito bem." }, 
                        B1: { en: "I have a Get along", pt: "Eu tenho um Se dar bem" } 
                      }
    },
      { english: "Introductions", portuguese: "Apresentações",
          levels: { 
                        A1: { en: "Let me do the introductions.", pt: "Deixe-me fazer as apresentações." }, 
                        A2: { en: "Let me do the introductions.", pt: "Deixe-me fazer as apresentações." }, 
                        B1: { en: "I have a Introductions", pt: "Eu tenho um Apresentações" } 
                      }
    },
    ],
    dialogue: [
      { speaker: "Anna", english: "Hey Mark! Do you want to hang out this Saturday?", portuguese: "Oi Mark! Você quer sair neste sábado?", isPrimary: false },
      { speaker: "Mark", english: "Sure! What are we doing?", portuguese: "Claro! O que vamos fazer?", isPrimary: true },
      { speaker: "Anna", english: "I was thinking of meeting up at the mall, then going to a party.", portuguese: "Eu estava pensando em nos encontrarmos no shopping e depois irmos a uma festa.", isPrimary: false },
      { speaker: "Mark", english: "Sounds fun! Can I invite my cousin too?", portuguese: "Parece divertido! Posso convidar meu primo também?", isPrimary: true },
      { speaker: "Anna", english: "Of course! The more, the merrier. Is he friendly?", portuguese: "Claro! Quanto mais, melhor. Ele é amigável?", isPrimary: false },
      { speaker: "Mark", english: "Yes, you will get along with him. He tells the best jokes.", portuguese: "Sim, você vai se dar bem com ele. Ele conta as melhores piadas.", isPrimary: true },
      { speaker: "Anna", english: "Great! I'll text you the address. Should we grab food before?", portuguese: "Ótimo! Eu te mando o endereço por mensagem. Devemos comer algo antes?", isPrimary: false },
      { speaker: "Mark", english: "Yes, we can eat pizza. Are any other friends coming?", portuguese: "Sim, podemos comer pizza. Mais algum amigo vem?", isPrimary: true },
      { speaker: "Anna", english: "Just our main group from school. Lucy and Peter.", portuguese: "Apenas nosso grupo principal da escola. Lucy e Peter.", isPrimary: false },
      { speaker: "Mark", english: "Perfect. I haven't seen Peter in weeks.", portuguese: "Perfeito. Eu não vejo o Peter há semanas.", isPrimary: true },
      { speaker: "Anna", english: "He was traveling, but now he is back. It will be a nice reunion.", portuguese: "Ele estava viajando, mas agora ele voltou. Será um bom reencontro.", isPrimary: false },
      { speaker: "Mark", english: "I can't wait. See you on Saturday, Anna!", portuguese: "Mal posso esperar. Te vejo no sábado, Anna!", isPrimary: true },
    ],
    flashcards: [
      { english: "She is my best friend.", portuguese: "Ela é minha melhor amiga." },
      { english: "Let's hang out this weekend.", portuguese: "Vamos sair este final de semana." },
      { english: "I like chatting with you.", portuguese: "Eu gosto de bater papo com você." },
      { english: "We are meeting up at the cafe.", portuguese: "Nós vamos nos encontrar no café." },
      { english: "They had a lot of fun.", portuguese: "Eles se divertiram muito." },
      { english: "He is a good friend.", portuguese: "Ele é um bom amigo." },
      { english: "Do you want to come to my party?", portuguese: "Você quer vir à minha festa?" },
      { english: "I can always trust him.", portuguese: "Eu sempre posso confiar nele." },
      { english: "We get along really well.", portuguese: "Nós nos damos super bem." },
      { english: "Thank you for the advice.", portuguese: "Obrigado pelo conselho." },
      { english: "I am sorry, I apologize.", portuguese: "Sinto muito, peço desculpas." },
      { english: "Friends help each other.", portuguese: "Amigos ajudam uns aos outros." },
    ],
    quiz: [
      { question: 'What does "Hang out" mean?', options: ["Ficar em casa", "Sair para passear", "Dormir", "Estudar"], correctIndex: 1, explanation: '"Hang out" is an informal way to say spend time relaxing or socializing.' },
      { question: 'How do you say "Melhor amigo" in English?', options: ["Good friend", "Old friend", "Best friend", "New friend"], correctIndex: 2, explanation: '"Melhor amigo" is translated to "Best friend".' },
      { question: 'Complete: "Let\'s _____ up at the park."', options: ["meet", "see", "go", "chat"], correctIndex: 0, explanation: 'The phrasal verb is "meet up" (encontrar-se).' },
      { question: 'What is the english word for "Convidar"?', options: ["Invite", "Join", "Leave", "Party"], correctIndex: 0, explanation: '"Invite" means convidar.' },
      { question: 'Translate: "The party was fun."', options: ["A festa foi chata.", "A festa foi grande.", "A festa foi divertida.", "A festa acabou."], correctIndex: 2, explanation: '"Fun" means divertido/diversão.' },
      { question: 'Complete: "I want to _____ my pizza with you."', options: ["party", "invite", "group", "share"], correctIndex: 3, explanation: '"Share" means compartilhar ou dividir.' },
      { question: 'What does "Chat" mean?', options: ["Chorar", "Gritar", "Bater papo", "Cantar"], correctIndex: 2, explanation: '"Chat" is an informal conversation (Bater papo).' },
      { question: 'Which word means "Grupo"?', options: ["Group", "Team", "Band", "Crowd"], correctIndex: 0, explanation: '"Group" translates to grupo.' },
      { question: 'How do you say "A festa é hoje"?', options: ["The party is tomorrow.", "The party is today.", "The party is nice.", "The party is late."], correctIndex: 1, explanation: '"Today" is hoje.' },
      { question: 'What does "Sure!" mean in a conversation?', options: ["Não!", "Talvez!", "Claro!", "Nunca!"], correctIndex: 2, explanation: '"Sure!" is a friendly way to say yes or agree (Claro!).' },
    ],
    trueOrFalse: {
      part1: [
        { statement: "When you argue with a friend, you are happy.", statementPt: "Quando você discute com um amigo, você está feliz.", isTrue: false, explanation: "Argue means discutir/brigar, which usually makes people sad or angry." },
      { statement: "A secret is something you tell everyone.", statementPt: "Um segredo é algo que você conta para todo mundo.", isTrue: false, explanation: "A secret is something you keep and don't share." },
      { statement: "If you trust someone, you believe in them.", statementPt: "Se você confia em alguém, você acredita nela.", isTrue: true, explanation: "Trust means confiar." },
      { statement: "A joke is supposed to be funny.", statementPt: "Uma piada deve ser engraçada.", isTrue: true, explanation: "Joke means piada." },
      { statement: "When you apologize, you say 'I am sorry'.", statementPt: "Quando você pede desculpas, você diz 'me desculpe'.", isTrue: true, explanation: "Apologize means pedir desculpas." },
        { statement: "To meet someone means to see them for the first time.", statementPt: "Encontrar alguém significa ver pela primeira vez.", isTrue: true, explanation: "Meet means conhecer ou encontrar." }
      ],
      part2: [
        { statement: "To argue means to agree with someone.", statementPt: "Discutir (argue) significa concordar com alguém.", isTrue: false, explanation: "Argue means to disagree or fight with words." },
        { statement: "When you forgive someone, you stop being angry.", statementPt: "Quando você perdoa alguém, você para de ficar com raiva.", isTrue: true, explanation: "Forgive means perdoar." },
        { statement: "A secret is something everyone knows.", statementPt: "Um segredo é algo que todo mundo sabe.", isTrue: false, explanation: "A secret is something hidden from others." },
        { statement: "A promise is something you say you will definitely do.", statementPt: "Uma promessa é algo que você diz que definitivamente fará.", isTrue: true, explanation: "Promise means promessa." },
        { statement: "An honest person tells lies.", statementPt: "Uma pessoa honesta conta mentiras.", isTrue: false, explanation: "An honest person tells the truth." },
        { statement: "If you miss someone, you feel sad they are not here.", statementPt: "Se você sente falta de alguém, você fica triste que a pessoa não está aqui.", isTrue: true, explanation: "Miss means sentir falta." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Who is your best friend?", translation: "Quem é o seu melhor amigo?" },
        { question: "Where do you usually hang out with your friends?", translation: "Onde você costuma sair com seus amigos?" },
        { question: "Do you share your secrets with your friends?", translation: "Você compartilha seus segredos com seus amigos?" },
        { question: "What makes you laugh and smile?", translation: "O que faz você rir e sorrir?" },
        { question: "Do you talk to your friends every day?", translation: "Você conversa com seus amigos todos os dias?" },
        { question: "Who is the funniest friend you have?", translation: "Quem é o amigo mais engraçado que você tem?" },
        { question: "Have you ever helped a friend with a problem?", translation: "Você já ajudou um amigo com um problema?" }
      ],
      part2: [
        { question: "Are you always honest with your friends?", translation: "Você é sempre honesto com seus amigos?" },
        { question: "Do you easily forgive people when they apologize?", translation: "Você perdoa facilmente as pessoas quando elas pedem desculpas?" },
        { question: "Can you keep a secret?", translation: "Você consegue guardar um segredo?" },
        { question: "Tell me a joke!", translation: "Me conte uma piada!" },
        { question: "Do you miss any friend who lives far away?", translation: "Você sente falta de algum amigo que mora longe?" },
        { question: "Have you ever broken a promise to a friend?", translation: "Você já quebrou uma promessa para um amigo?" },
        { question: "Do you support your friends when they are sad?", translation: "Você apoia seus amigos quando eles estão tristes?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "He is a good friend.", portuguese: "Ele é um bom amigo." }, { english: "I like chatting with you.", portuguese: "Gosto de bater papo com você." }, { english: "Our friend group is very united.", portuguese: "Nosso grupo de amigos é muito unido." }, { english: "I trust my friends completely.", portuguese: "Eu confio nos meus amigos completamente." }, { english: "Friends always help out when needed.", portuguese: "Amigos sempre ajudam quando necessário." }, { english: "They get along very well.", portuguese: "Eles se dão muito bem." } ],
                    level2: [ { english: "I have a Friend", portuguese: "Eu tenho um Amigo(a)" }, { english: "I have a Chat", portuguese: "Eu tenho um Bater papo" }, { english: "I have a Group", portuguese: "Eu tenho um Grupo" }, { english: "I have a Trust", portuguese: "Eu tenho um Confiar" }, { english: "I have a Help out", portuguese: "Eu tenho um Ajudar" }, { english: "I have a Get along", portuguese: "Eu tenho um Se dar bem" } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Friend means Amigo(a).", statementPt: "Friend significa Amigo(a).", isTrue: true, explanation: "Yes, Friend means Amigo(a)." }, { statement: "Best friend means a type of car.", statementPt: "Best friend significa um tipo de carro.", isTrue: false, explanation: "No, Best friend means Melhor amigo(a)." }, { statement: "Hang out means Sair para passear.", statementPt: "Hang out significa Sair para passear.", isTrue: true, explanation: "Yes, Hang out means Sair para passear." }, { statement: "Meet up means a type of car.", statementPt: "Meet up significa um tipo de carro.", isTrue: false, explanation: "No, Meet up means Encontrar-se." }, { statement: "Chat means Bater papo.", statementPt: "Chat significa Bater papo.", isTrue: true, explanation: "Yes, Chat means Bater papo." }, { statement: "Fun means a type of car.", statementPt: "Fun significa um tipo de carro.", isTrue: false, explanation: "No, Fun means Diversão / Divertido." }, { statement: "Invite means Convidar.", statementPt: "Invite significa Convidar.", isTrue: true, explanation: "Yes, Invite means Convidar." }, { statement: "Party means a type of car.", statementPt: "Party significa um tipo de carro.", isTrue: false, explanation: "No, Party means Festa." }, { statement: "Group means Grupo.", statementPt: "Group significa Grupo.", isTrue: true, explanation: "Yes, Group means Grupo." }, { statement: "Share means a type of car.", statementPt: "Share significa um tipo de carro.", isTrue: false, explanation: "No, Share means Compartilhar." } ],
                    part2: [ { statement: "Trust means Confiar.", statementPt: "Trust significa Confiar.", isTrue: true, explanation: "Yes, Trust means Confiar." }, { statement: "Keep a secret means a type of car.", statementPt: "Keep a secret significa um tipo de carro.", isTrue: false, explanation: "No, Keep a secret means Guardar segredo." }, { statement: "Argue means Discutir.", statementPt: "Argue significa Discutir.", isTrue: true, explanation: "Yes, Argue means Discutir." }, { statement: "Apologize means a type of car.", statementPt: "Apologize significa um tipo de carro.", isTrue: false, explanation: "No, Apologize means Pedir desculpas." }, { statement: "Help out means Ajudar.", statementPt: "Help out significa Ajudar.", isTrue: true, explanation: "Yes, Help out means Ajudar." }, { statement: "Joke means a type of car.", statementPt: "Joke significa um tipo de carro.", isTrue: false, explanation: "No, Joke means Piada / Brincadeira." }, { statement: "Support means Apoiar.", statementPt: "Support significa Apoiar.", isTrue: true, explanation: "Yes, Support means Apoiar." }, { statement: "Advice means a type of car.", statementPt: "Advice significa um tipo de carro.", isTrue: false, explanation: "No, Advice means Conselho." }, { statement: "Get along means Se dar bem.", statementPt: "Get along significa Se dar bem.", isTrue: true, explanation: "Yes, Get along means Se dar bem." }, { statement: "Introductions means a type of car.", statementPt: "Introductions significa um tipo de carro.", isTrue: false, explanation: "No, Introductions means Apresentações." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Friend\" in a sentence in the past simple?", translation: "Você consegue usar \"Friend\" em uma frase no passado simples?" }, { question: "Can you use \"Best friend\" in a sentence in the past simple?", translation: "Você consegue usar \"Best friend\" em uma frase no passado simples?" }, { question: "Can you use \"Hang out\" in a sentence in the past simple?", translation: "Você consegue usar \"Hang out\" em uma frase no passado simples?" }, { question: "Can you use \"Meet up\" in a sentence in the past simple?", translation: "Você consegue usar \"Meet up\" em uma frase no passado simples?" }, { question: "Can you use \"Chat\" in a sentence in the past simple?", translation: "Você consegue usar \"Chat\" em uma frase no passado simples?" }, { question: "Can you use \"Fun\" in a sentence in the past simple?", translation: "Você consegue usar \"Fun\" em uma frase no passado simples?" }, { question: "Can you use \"Invite\" in a sentence in the past simple?", translation: "Você consegue usar \"Invite\" em uma frase no passado simples?" }, { question: "Can you use \"Party\" in a sentence in the past simple?", translation: "Você consegue usar \"Party\" em uma frase no passado simples?" }, { question: "Can you use \"Group\" in a sentence in the past simple?", translation: "Você consegue usar \"Group\" em uma frase no passado simples?" }, { question: "Can you use \"Share\" in a sentence in the past simple?", translation: "Você consegue usar \"Share\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Trust\" in a sentence in the past simple?", translation: "Você consegue usar \"Trust\" em uma frase no passado simples?" }, { question: "Can you use \"Keep a secret\" in a sentence in the past simple?", translation: "Você consegue usar \"Keep a secret\" em uma frase no passado simples?" }, { question: "Can you use \"Argue\" in a sentence in the past simple?", translation: "Você consegue usar \"Argue\" em uma frase no passado simples?" }, { question: "Can you use \"Apologize\" in a sentence in the past simple?", translation: "Você consegue usar \"Apologize\" em uma frase no passado simples?" }, { question: "Can you use \"Help out\" in a sentence in the past simple?", translation: "Você consegue usar \"Help out\" em uma frase no passado simples?" }, { question: "Can you use \"Joke\" in a sentence in the past simple?", translation: "Você consegue usar \"Joke\" em uma frase no passado simples?" }, { question: "Can you use \"Support\" in a sentence in the past simple?", translation: "Você consegue usar \"Support\" em uma frase no passado simples?" }, { question: "Can you use \"Advice\" in a sentence in the past simple?", translation: "Você consegue usar \"Advice\" em uma frase no passado simples?" }, { question: "Can you use \"Get along\" in a sentence in the past simple?", translation: "Você consegue usar \"Get along\" em uma frase no passado simples?" }, { question: "Can you use \"Introductions\" in a sentence in the past simple?", translation: "Você consegue usar \"Introductions\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "corpo",
    title: "Body Parts",
    titlePt: "Partes do Corpo",
    description: "Learn the names of body parts in English.",
    descriptionPt: "Aprenda os nomes das partes do corpo em inglês.",
    icon: "Accessibility",
    image: "/images/corpo.png",
    color: "peach",
    available: true,
    vocabulary: [
      { english: "Head", portuguese: "Cabeça",
          levels: { 
                        A1: { en: "My head hurts.", pt: "Minha cabeça dói." }, 
                        A2: { en: "My head hurts.", pt: "Minha cabeça dói." }, 
                        B1: { en: "I have a Head", pt: "Eu tenho um Cabeça" } 
                      }
    },
      { english: "Arm", portuguese: "Braço",
          levels: { 
                        A1: { en: "He broke his arm.", pt: "Ele quebrou o braço." }, 
                        A2: { en: "He broke his arm.", pt: "Ele quebrou o braço." }, 
                        B1: { en: "I have a Arm", pt: "Eu tenho um Braço" } 
                      }
    },
      { english: "Leg", portuguese: "Perna",
          levels: { 
                        A1: { en: "My legs are tired after the run.", pt: "Minhas pernas estão cansadas após a corrida." }, 
                        A2: { en: "My legs are tired after the run.", pt: "Minhas pernas estão cansadas após a corrida." }, 
                        B1: { en: "I have a Leg", pt: "Eu tenho um Perna" } 
                      }
    },
      { english: "Hand", portuguese: "Mão",
          levels: { 
                        A1: { en: "Please, wash your hands.", pt: "Por favor, lave suas mãos." }, 
                        A2: { en: "Please, wash your hands.", pt: "Por favor, lave suas mãos." }, 
                        B1: { en: "I have a Hand", pt: "Eu tenho um Mão" } 
                      }
    },
      { english: "Foot / Feet", portuguese: "Pé / Pés",
          levels: { 
                        A1: { en: "My feet are cold.", pt: "Meus pés estão frios." }, 
                        A2: { en: "My feet are cold.", pt: "Meus pés estão frios." }, 
                        B1: { en: "I have a Foot / Feet", pt: "Eu tenho um Pé / Pés" } 
                      }
    },
      { english: "Eyes", portuguese: "Olhos",
          levels: { 
                        A1: { en: "She has blue eyes.", pt: "Ela tem olhos azuis." }, 
                        A2: { en: "She has blue eyes.", pt: "Ela tem olhos azuis." }, 
                        B1: { en: "I have a Eyes", pt: "Eu tenho um Olhos" } 
                      }
    },
      { english: "Hair", portuguese: "Cabelo",
          levels: { 
                        A1: { en: "Her hair is very long.", pt: "O cabelo dela é muito longo." }, 
                        A2: { en: "Her hair is very long.", pt: "O cabelo dela é muito longo." }, 
                        B1: { en: "I have a Hair", pt: "Eu tenho um Cabelo" } 
                      }
    },
      { english: "Mouth", portuguese: "Boca",
          levels: { 
                        A1: { en: "Open your mouth for the dentist.", pt: "Abra sua boca para o dentista." }, 
                        A2: { en: "Open your mouth for the dentist.", pt: "Abra sua boca para o dentista." }, 
                        B1: { en: "I have a Mouth", pt: "Eu tenho um Boca" } 
                      }
    },
      { english: "Nose", portuguese: "Nariz",
          levels: { 
                        A1: { en: "My nose is bleeding.", pt: "Meu nariz está sangrando." }, 
                        A2: { en: "My nose is bleeding.", pt: "Meu nariz está sangrando." }, 
                        B1: { en: "I have a Nose", pt: "Eu tenho um Nariz" } 
                      }
    },
      { english: "Ears", portuguese: "Orelhas",
          levels: { 
                        A1: { en: "Elephants have big ears.", pt: "Elefantes têm orelhas grandes." }, 
                        A2: { en: "Elephants have big ears.", pt: "Elefantes têm orelhas grandes." }, 
                        B1: { en: "I have a Ears", pt: "Eu tenho um Orelhas" } 
                      }
    },
      { english: "Shoulder", portuguese: "Ombro",
          levels: { 
                        A1: { en: "My shoulder is sore.", pt: "Meu ombro está dolorido." }, 
                        A2: { en: "My shoulder is sore.", pt: "Meu ombro está dolorido." }, 
                        B1: { en: "I have a Shoulder", pt: "Eu tenho um Ombro" } 
                      }
    },
      { english: "Knee", portuguese: "Joelho",
          levels: { 
                        A1: { en: "He fell and scraped his knee.", pt: "Ele caiu e ralou o joelho." }, 
                        A2: { en: "He fell and scraped his knee.", pt: "Ele caiu e ralou o joelho." }, 
                        B1: { en: "I have a Knee", pt: "Eu tenho um Joelho" } 
                      }
    },
      { english: "Fingers", portuguese: "Dedos da mão",
          levels: { 
                        A1: { en: "Humans have ten fingers.", pt: "Humanos têm dez dedos." }, 
                        A2: { en: "Humans have ten fingers.", pt: "Humanos têm dez dedos." }, 
                        B1: { en: "I have a Fingers", pt: "Eu tenho um Dedos da mão" } 
                      }
    },
      { english: "Toes", portuguese: "Dedos do pé",
          levels: { 
                        A1: { en: "I stubbed my toe.", pt: "Bati o dedo do pé." }, 
                        A2: { en: "I stubbed my toe.", pt: "Bati o dedo do pé." }, 
                        B1: { en: "I have a Toes", pt: "Eu tenho um Dedos do pé" } 
                      }
    },
      { english: "Stomach", portuguese: "Estômago",
          levels: { 
                        A1: { en: "My stomach is full.", pt: "Meu estômago está cheio." }, 
                        A2: { en: "My stomach is full.", pt: "Meu estômago está cheio." }, 
                        B1: { en: "I have a Stomach", pt: "Eu tenho um Estômago" } 
                      }
    },
      { english: "Back", portuguese: "Costas",
          levels: { 
                        A1: { en: "I have a terrible back pain.", pt: "Estou com uma dor terrível nas costas." }, 
                        A2: { en: "I have a terrible back pain.", pt: "Estou com uma dor terrível nas costas." }, 
                        B1: { en: "I have a Back", pt: "Eu tenho um Costas" } 
                      }
    },
      { english: "Neck", portuguese: "Pescoço",
          levels: { 
                        A1: { en: "Wear a scarf around your neck.", pt: "Use um cachecol no pescoço." }, 
                        A2: { en: "Wear a scarf around your neck.", pt: "Use um cachecol no pescoço." }, 
                        B1: { en: "I have a Neck", pt: "Eu tenho um Pescoço" } 
                      }
    },
      { english: "Teeth", portuguese: "Dentes",
          levels: { 
                        A1: { en: "Brush your teeth every day.", pt: "Escove os dentes todos os dias." }, 
                        A2: { en: "Brush your teeth every day.", pt: "Escove os dentes todos os dias." }, 
                        B1: { en: "I have a Teeth", pt: "Eu tenho um Dentes" } 
                      }
    },
      { english: "Tongue", portuguese: "Língua",
          levels: { 
                        A1: { en: "I burnt my tongue with hot tea.", pt: "Queimei a língua com chá quente." }, 
                        A2: { en: "I burnt my tongue with hot tea.", pt: "Queimei a língua com chá quente." }, 
                        B1: { en: "I have a Tongue", pt: "Eu tenho um Língua" } 
                      }
    },
      { english: "Lips", portuguese: "Lábios",
          levels: { 
                        A1: { en: "Her lips are dry.", pt: "Os lábios dela estão secos." }, 
                        A2: { en: "Her lips are dry.", pt: "Os lábios dela estão secos." }, 
                        B1: { en: "I have a Lips", pt: "Eu tenho um Lábios" } 
                      }
    },
    ],
    dialogue: [
      { speaker: "Doctor", english: "Hello. What seems to be the problem?", portuguese: "Olá. Qual parece ser o problema?", isPrimary: false },
      { speaker: "Patient", english: "My head hurts a lot and my eyes are tired.", portuguese: "Minha cabeça dói muito e meus olhos estão cansados.", isPrimary: true },
      { speaker: "Doctor", english: "Let me check. Does your ear hurt too?", portuguese: "Deixe-me checar. Sua orelha dói também?", isPrimary: false },
      { speaker: "Patient", english: "No, just my head. I also feel pain in my legs and knees.", portuguese: "Não, apenas minha cabeça. Também sinto dor nas pernas e joelhos.", isPrimary: true },
      { speaker: "Doctor", english: "I see. Does your back hurt when you bend over?", portuguese: "Entendo. Suas costas doem quando você se curva?", isPrimary: false },
      { speaker: "Patient", english: "Yes, a little bit. And my right arm feels weak.", portuguese: "Sim, um pouco. E meu braço direito parece fraco.", isPrimary: true },
      { speaker: "Doctor", english: "It looks like you have a strong flu. You need some rest.", portuguese: "Parece que você tem uma gripe forte. Você precisa de descanso.", isPrimary: false },
      { speaker: "Patient", english: "Should I take any medicine for my stomach?", portuguese: "Devo tomar algum remédio para meu estômago?", isPrimary: true },
      { speaker: "Doctor", english: "Yes, I will give you a prescription for your stomach and your head.", portuguese: "Sim, vou lhe dar uma receita para o seu estômago e sua cabeça.", isPrimary: false },
      { speaker: "Patient", english: "Thank you, doctor. I will go home and sleep.", portuguese: "Obrigado, doutor. Vou para casa dormir.", isPrimary: true },
      { speaker: "Doctor", english: "Drink plenty of water. Take care of yourself.", portuguese: "Beba muita água. Cuide de si mesmo.", isPrimary: false },
    ],
    flashcards: [
      { english: "My head hurts.", portuguese: "Minha cabeça dói." },
      { english: "She has blue eyes.", portuguese: "Ela tem olhos azuis." },
      { english: "Wash your hands.", portuguese: "Lave suas mãos." },
      { english: "My legs are tired.", portuguese: "Minhas pernas estão cansadas." },
      { english: "He broke his arm.", portuguese: "Ele quebrou o braço." },
      { english: "My feet are cold.", portuguese: "Meus pés estão frios." },
      { english: "Brush your teeth after meals.", portuguese: "Escove seus dentes após as refeições." },
      { english: "I have pain in my back.", portuguese: "Estou com dor nas costas." },
      { english: "Touch your toes.", portuguese: "Toque seus dedos dos pés." },
      { english: "He has a long neck.", portuguese: "Ele tem um pescoço longo." },
      { english: "My stomach aches.", portuguese: "Meu estômago dói." },
      { english: "She hurt her shoulder.", portuguese: "Ela machucou o ombro." },
    ],
    quiz: [
      { question: 'What is the plural of "Foot"?', options: ["Foots", "Feet", "Footes", "Feets"], correctIndex: 1, explanation: '"Foot" has an irregular plural form: "Feet".' },
      { question: 'How do you say "Olhos" in English?', options: ["Ears", "Nose", "Mouth", "Eyes"], correctIndex: 3, explanation: '"Olhos" are "Eyes" in English.' },
      { question: 'Translate: "Lave suas mãos."', options: ["Clean your arms.", "Wash your feet.", "Wash your hands.", "Wash your head."], correctIndex: 2, explanation: '"Lavar" is "Wash" and "Mãos" is "Hands".' },
      { question: 'Where is your "Nose"?', options: ["On your arm", "On your face", "On your leg", "On your foot"], correctIndex: 1, explanation: 'The nose is located on the face.' },
      { question: 'What does "Hair" mean?', options: ["Orelha", "Cabelo", "Pele", "Olho"], correctIndex: 1, explanation: '"Hair" translates to Cabelo.' },
      { question: 'Which body part is used for walking?', options: ["Ears", "Arms", "Legs", "Mouth"], correctIndex: 2, explanation: 'You use your legs (pernas) and feet to walk.' },
      { question: 'Complete: "She is listening with her _____."', options: ["eyes", "nose", "ears", "hair"], correctIndex: 2, explanation: 'You listen with your ears.' },
      { question: 'Translate "Braço".', options: ["Leg", "Foot", "Arm", "Hand"], correctIndex: 2, explanation: '"Braço" translates to "Arm".' },
      { question: 'What do you use to eat food?', options: ["Mouth", "Eye", "Nose", "Ear"], correctIndex: 0, explanation: 'You put food in your mouth (boca).' },
      { question: 'How do you say "Minha cabeça dói"?', options: ["My arm is bad.", "My head hurts.", "My eye is red.", "My leg is broken."], correctIndex: 1, explanation: '"Head" is cabeça, and "hurts" means dói.' },
    ],
    trueOrFalse: {
      part1: [
        { statement: "You have ten toes in total.", statementPt: "Você tem dez dedos dos pés no total.", isTrue: true, explanation: "Toes are the fingers of your feet, and humans usually have 10." },
      { statement: "The stomach is located in your head.", statementPt: "O estômago está localizado na sua cabeça.", isTrue: false, explanation: "The stomach is in your belly/abdomen, not your head." },
      { statement: "You use your ears to see.", statementPt: "Você usa suas orelhas para ver.", isTrue: false, explanation: "You use your eyes (olhos) to see." },
      { statement: "Your teeth are inside your mouth.", statementPt: "Seus dentes ficam dentro da sua boca.", isTrue: true, explanation: "Teeth (dentes) are in the mouth." },
      { statement: "The neck connects the head to the body.", statementPt: "O pescoço conecta a cabeça ao corpo.", isTrue: true, explanation: "Neck means pescoço." },
        { statement: "You smell with your nose.", statementPt: "Você cheira com o seu nariz.", isTrue: true, explanation: "Nose means nariz." }
      ],
      part2: [
        { statement: "Your hand has five fingers.", statementPt: "Sua mão tem cinco dedos.", isTrue: true, explanation: "Finger means dedo da mão." },
        { statement: "You walk using your arms.", statementPt: "Você caminha usando os seus braços.", isTrue: false, explanation: "You walk with your legs." },
        { statement: "Your knee is part of your leg.", statementPt: "Seu joelho faz parte da sua perna.", isTrue: true, explanation: "Knee means joelho." },
        { statement: "You wear shoes on your hands.", statementPt: "Você usa sapatos nas mãos.", isTrue: false, explanation: "You wear shoes on your feet." },
        { statement: "Your chest is located on your back.", statementPt: "Seu peito fica localizado nas suas costas.", isTrue: false, explanation: "Chest (peito) is on the front. Back (costas) is on the back." },
        { statement: "The toes are the fingers on your foot.", statementPt: "Os \'toes\' são os dedos do seu pé.", isTrue: true, explanation: "Toe means dedo do pé." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "What color are your eyes?", translation: "De que cor são seus olhos?" },
        { question: "Is your hair short or long?", translation: "Seu cabelo é curto ou longo?" },
        { question: "How many teeth do you have?", translation: "Quantos dentes você tem?" },
        { question: "Do your shoulders hurt after working?", translation: "Seus ombros doem depois de trabalhar?" },
        { question: "Do you have a big or small nose?", translation: "Você tem um nariz grande ou pequeno?" },
        { question: "Do you wash your face every morning?", translation: "Você lava seu rosto todas as manhãs?" },
        { question: "Are your ears sensitive to cold?", translation: "Suas orelhas são sensíveis ao frio?" }
      ],
      part2: [
        { question: "Does your back hurt?", translation: "Sua costa dói?" },
        { question: "How many fingers are on your left hand?", translation: "Quantos dedos tem na sua mão esquerda?" },
        { question: "Do you use your legs a lot during the day?", translation: "Você usa muito suas pernas durante o dia?" },
        { question: "Can you touch your toes?", translation: "Você consegue tocar os dedos dos pés?" },
        { question: "Do you have strong arms?", translation: "Você tem braços fortes?" },
        { question: "Does your stomach hurt when you eat too much?", translation: "Seu estômago dói quando você come demais?" },
        { question: "Do your knees hurt when it rains?", translation: "Seus joelhos doem quando chove?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "My head hurts.", portuguese: "Minha cabeça dói." }, { english: "My feet are cold.", portuguese: "Meus pés estão frios." }, { english: "My nose is bleeding.", portuguese: "Meu nariz está sangrando." }, { english: "My shoulder is sore.", portuguese: "Meu ombro está dolorido." }, { english: "My stomach is full.", portuguese: "Meu estômago está cheio." }, { english: "I burnt my tongue with hot tea.", portuguese: "Queimei a língua com chá quente." } ],
                    level2: [ { english: "I have a Head", portuguese: "Eu tenho um Cabeça" }, { english: "I have a Foot / Feet", portuguese: "Eu tenho um Pé / Pés" }, { english: "I have a Nose", portuguese: "Eu tenho um Nariz" }, { english: "I have a Shoulder", portuguese: "Eu tenho um Ombro" }, { english: "I have a Stomach", portuguese: "Eu tenho um Estômago" }, { english: "I have a Tongue", portuguese: "Eu tenho um Língua" } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Head means Cabeça.", statementPt: "Head significa Cabeça.", isTrue: true, explanation: "Yes, Head means Cabeça." }, { statement: "Arm means a type of car.", statementPt: "Arm significa um tipo de carro.", isTrue: false, explanation: "No, Arm means Braço." }, { statement: "Leg means Perna.", statementPt: "Leg significa Perna.", isTrue: true, explanation: "Yes, Leg means Perna." }, { statement: "Hand means a type of car.", statementPt: "Hand significa um tipo de carro.", isTrue: false, explanation: "No, Hand means Mão." }, { statement: "Foot / Feet means Pé / Pés.", statementPt: "Foot / Feet significa Pé / Pés.", isTrue: true, explanation: "Yes, Foot / Feet means Pé / Pés." }, { statement: "Eyes means a type of car.", statementPt: "Eyes significa um tipo de carro.", isTrue: false, explanation: "No, Eyes means Olhos." }, { statement: "Hair means Cabelo.", statementPt: "Hair significa Cabelo.", isTrue: true, explanation: "Yes, Hair means Cabelo." }, { statement: "Mouth means a type of car.", statementPt: "Mouth significa um tipo de carro.", isTrue: false, explanation: "No, Mouth means Boca." }, { statement: "Nose means Nariz.", statementPt: "Nose significa Nariz.", isTrue: true, explanation: "Yes, Nose means Nariz." }, { statement: "Ears means a type of car.", statementPt: "Ears significa um tipo de carro.", isTrue: false, explanation: "No, Ears means Orelhas." } ],
                    part2: [ { statement: "Shoulder means Ombro.", statementPt: "Shoulder significa Ombro.", isTrue: true, explanation: "Yes, Shoulder means Ombro." }, { statement: "Knee means a type of car.", statementPt: "Knee significa um tipo de carro.", isTrue: false, explanation: "No, Knee means Joelho." }, { statement: "Fingers means Dedos da mão.", statementPt: "Fingers significa Dedos da mão.", isTrue: true, explanation: "Yes, Fingers means Dedos da mão." }, { statement: "Toes means a type of car.", statementPt: "Toes significa um tipo de carro.", isTrue: false, explanation: "No, Toes means Dedos do pé." }, { statement: "Stomach means Estômago.", statementPt: "Stomach significa Estômago.", isTrue: true, explanation: "Yes, Stomach means Estômago." }, { statement: "Back means a type of car.", statementPt: "Back significa um tipo de carro.", isTrue: false, explanation: "No, Back means Costas." }, { statement: "Neck means Pescoço.", statementPt: "Neck significa Pescoço.", isTrue: true, explanation: "Yes, Neck means Pescoço." }, { statement: "Teeth means a type of car.", statementPt: "Teeth significa um tipo de carro.", isTrue: false, explanation: "No, Teeth means Dentes." }, { statement: "Tongue means Língua.", statementPt: "Tongue significa Língua.", isTrue: true, explanation: "Yes, Tongue means Língua." }, { statement: "Lips means a type of car.", statementPt: "Lips significa um tipo de carro.", isTrue: false, explanation: "No, Lips means Lábios." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Head\" in a sentence in the past simple?", translation: "Você consegue usar \"Head\" em uma frase no passado simples?" }, { question: "Can you use \"Arm\" in a sentence in the past simple?", translation: "Você consegue usar \"Arm\" em uma frase no passado simples?" }, { question: "Can you use \"Leg\" in a sentence in the past simple?", translation: "Você consegue usar \"Leg\" em uma frase no passado simples?" }, { question: "Can you use \"Hand\" in a sentence in the past simple?", translation: "Você consegue usar \"Hand\" em uma frase no passado simples?" }, { question: "Can you use \"Foot / Feet\" in a sentence in the past simple?", translation: "Você consegue usar \"Foot / Feet\" em uma frase no passado simples?" }, { question: "Can you use \"Eyes\" in a sentence in the past simple?", translation: "Você consegue usar \"Eyes\" em uma frase no passado simples?" }, { question: "Can you use \"Hair\" in a sentence in the past simple?", translation: "Você consegue usar \"Hair\" em uma frase no passado simples?" }, { question: "Can you use \"Mouth\" in a sentence in the past simple?", translation: "Você consegue usar \"Mouth\" em uma frase no passado simples?" }, { question: "Can you use \"Nose\" in a sentence in the past simple?", translation: "Você consegue usar \"Nose\" em uma frase no passado simples?" }, { question: "Can you use \"Ears\" in a sentence in the past simple?", translation: "Você consegue usar \"Ears\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Shoulder\" in a sentence in the past simple?", translation: "Você consegue usar \"Shoulder\" em uma frase no passado simples?" }, { question: "Can you use \"Knee\" in a sentence in the past simple?", translation: "Você consegue usar \"Knee\" em uma frase no passado simples?" }, { question: "Can you use \"Fingers\" in a sentence in the past simple?", translation: "Você consegue usar \"Fingers\" em uma frase no passado simples?" }, { question: "Can you use \"Toes\" in a sentence in the past simple?", translation: "Você consegue usar \"Toes\" em uma frase no passado simples?" }, { question: "Can you use \"Stomach\" in a sentence in the past simple?", translation: "Você consegue usar \"Stomach\" em uma frase no passado simples?" }, { question: "Can you use \"Back\" in a sentence in the past simple?", translation: "Você consegue usar \"Back\" em uma frase no passado simples?" }, { question: "Can you use \"Neck\" in a sentence in the past simple?", translation: "Você consegue usar \"Neck\" em uma frase no passado simples?" }, { question: "Can you use \"Teeth\" in a sentence in the past simple?", translation: "Você consegue usar \"Teeth\" em uma frase no passado simples?" }, { question: "Can you use \"Tongue\" in a sentence in the past simple?", translation: "Você consegue usar \"Tongue\" em uma frase no passado simples?" }, { question: "Can you use \"Lips\" in a sentence in the past simple?", translation: "Você consegue usar \"Lips\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "casa",
    title: "Home & Chores",
    titlePt: "Casa e Tarefas Domésticas",
    description: "Vocabulary about home, rooms and household chores.",
    descriptionPt: "Vocabulário sobre casa, cômodos e tarefas domésticas.",
    icon: "Home",
    image: "/images/casa.png",
    color: "mint",
    available: true,
    vocabulary: [
      { english: "Living room", portuguese: "Sala de estar",
          levels: { 
                        A1: { en: "The TV is in the living room.", pt: "A TV está na sala de estar." }, 
                        A2: { en: "The TV is in the living room.", pt: "A TV está na sala de estar." }, 
                        B1: { en: "We painted the living room walls a bright yellow.", pt: "Nós pintamos as paredes da sala de estar de um amarelo brilhante." } 
                      }
    },
      { english: "Kitchen", portuguese: "Cozinha",
          levels: { 
                        A1: { en: "I am cooking in the kitchen.", pt: "Estou cozinhando na cozinha." }, 
                        A2: { en: "I am cooking in the kitchen.", pt: "Estou cozinhando na cozinha." }, 
                        B1: { en: "She completely renovated her old kitchen last year.", pt: "Ela reformou completamente sua cozinha velha no ano passado." } 
                      }
    },
      { english: "Bedroom", portuguese: "Quarto",
          levels: { 
                        A1: { en: "My bedroom is very quiet.", pt: "Meu quarto é muito silencioso." }, 
                        A2: { en: "My bedroom is very quiet.", pt: "Meu quarto é muito silencioso." }, 
                        B1: { en: "He placed a new carpet in his cozy bedroom.", pt: "Ele colocou um tapete novo em seu quarto aconchegante." } 
                      }
    },
      { english: "Bathroom", portuguese: "Banheiro",
          levels: { 
                        A1: { en: "Where is the bathroom?", pt: "Onde fica o banheiro?" }, 
                        A2: { en: "Where is the bathroom?", pt: "Onde fica o banheiro?" }, 
                        B1: { en: "The plumber fixed the leaking pipe in the bathroom.", pt: "O encanador consertou o cano vazando no banheiro." } 
                      }
    },
      { english: "Sweep the floor", portuguese: "Varrer o chão",
          levels: { 
                        A1: { en: "Please sweep the floor, its dirty.", pt: "Por favor, varra o chão, está sujo." }, 
                        A2: { en: "Please sweep the floor, its dirty.", pt: "Por favor, varra o chão, está sujo." }, 
                        B1: { en: "I have a Sweep the floor", pt: "Eu tenho um Varrer o chão" } 
                      }
    },
      { english: "Do the dishes", portuguese: "Lavar a louça",
          levels: { 
                        A1: { en: "I will do the dishes tonight.", pt: "Eu lavarei a louça esta noite." }, 
                        A2: { en: "I will do the dishes tonight.", pt: "Eu lavarei a louça esta noite." }, 
                        B1: { en: "I have a Do the dishes", pt: "Eu tenho um Lavar a louça" } 
                      }
    },
      { english: "Make the bed", portuguese: "Arrumar a cama",
          levels: { 
                        A1: { en: "Always make your bed in the morning.", pt: "Sempre arrume sua cama de manhã." }, 
                        A2: { en: "Always make your bed in the morning.", pt: "Sempre arrume sua cama de manhã." }, 
                        B1: { en: "I have a Make the bed", pt: "Eu tenho um Arrumar a cama" } 
                      }
    },
      { english: "Take out the trash", portuguese: "Tirar o lixo",
          levels: { 
                        A1: { en: "Dont forget to take out the trash.", pt: "Não se esqueça de tirar o lixo." }, 
                        A2: { en: "Dont forget to take out the trash.", pt: "Não se esqueça de tirar o lixo." }, 
                        B1: { en: "I have a Take out the trash", pt: "Eu tenho um Tirar o lixo" } 
                      }
    },
      { english: "Clean", portuguese: "Limpar",
          levels: { 
                        A1: { en: "We need to clean the house.", pt: "Nós precisamos limpar a casa." }, 
                        A2: { en: "We need to clean the house.", pt: "Nós precisamos limpar a casa." }, 
                        B1: { en: "I have a Clean", pt: "Eu tenho um Limpar" } 
                      }
    },
      { english: "Laundry", portuguese: "Lavar roupa",
          levels: { 
                        A1: { en: "I am doing the laundry.", pt: "Estou lavando a roupa." }, 
                        A2: { en: "I am doing the laundry.", pt: "Estou lavando a roupa." }, 
                        B1: { en: "I have a Laundry", pt: "Eu tenho um Lavar roupa" } 
                      }
    },
      { english: "Iron the clothes", portuguese: "Passar a roupa",
          levels: { 
                        A1: { en: "I need to iron my shirt.", pt: "Preciso passar minha camisa." }, 
                        A2: { en: "I need to iron my shirt.", pt: "Preciso passar minha camisa." }, 
                        B1: { en: "I have a Iron the clothes", pt: "Eu tenho um Passar a roupa" } 
                      }
    },
      { english: "Dust the furniture", portuguese: "Tirar o pó dos móveis",
          levels: { 
                        A1: { en: "She is dusting the table.", pt: "Ela está tirando o pó da mesa." }, 
                        A2: { en: "She is dusting the table.", pt: "Ela está tirando o pó da mesa." }, 
                        B1: { en: "I have a Dust the furniture", pt: "Eu tenho um Tirar o pó dos móveis" } 
                      }
    },
      { english: "Vacuum", portuguese: "Passar aspirador",
          levels: { 
                        A1: { en: "I will vacuum the carpet.", pt: "Vou passar o aspirador no tapete." }, 
                        A2: { en: "I will vacuum the carpet.", pt: "Vou passar o aspirador no tapete." }, 
                        B1: { en: "I have a Vacuum", pt: "Eu tenho um Passar aspirador" } 
                      }
    },
      { english: "Garage", portuguese: "Garagem",
          levels: { 
                        A1: { en: "The car is in the garage.", pt: "O carro está na garagem." }, 
                        A2: { en: "The car is in the garage.", pt: "O carro está na garagem." }, 
                        B1: { en: "She cleaned out the messy garage on Sunday.", pt: "Ela limpou a garagem bagunçada no domingo." } 
                      }
    },
      { english: "Garden / Yard", portuguese: "Jardim / Quintal",
          levels: { 
                        A1: { en: "The kids are playing in the yard.", pt: "As crianças estão brincando no quintal." }, 
                        A2: { en: "The kids are playing in the yard.", pt: "As crianças estão brincando no quintal." }, 
                        B1: { en: "I have a Garden / Yard", pt: "Eu tenho um Jardim / Quintal" } 
                      }
    },
      { english: "Window", portuguese: "Janela",
          levels: { 
                        A1: { en: "Open the window, please.", pt: "Abra a janela, por favor." }, 
                        A2: { en: "Open the window, please.", pt: "Abra a janela, por favor." }, 
                        B1: { en: "The strong wind broke the fragile glass window.", pt: "O vento forte quebrou a frágil janela de vidro." } 
                      }
    },
      { english: "Door", portuguese: "Porta",
          levels: { 
                        A1: { en: "Lock the front door.", pt: "Tranque a porta da frente." }, 
                        A2: { en: "Lock the front door.", pt: "Tranque a porta da frente." }, 
                        B1: { en: "He accidentally locked the front door from the inside.", pt: "Ele acidentalmente trancou a porta da frente por dentro." } 
                      }
    },
      { english: "Roof", portuguese: "Telhado",
          levels: { 
                        A1: { en: "The bird is on the roof.", pt: "O pássaro está no telhado." }, 
                        A2: { en: "The bird is on the roof.", pt: "O pássaro está no telhado." }, 
                        B1: { en: "The heavy storm destroyed part of the roof.", pt: "A forte tempestade destruiu parte do telhado." } 
                      }
    },
      { english: "Stairs", portuguese: "Escadas",
          levels: { 
                        A1: { en: "Be careful on the stairs.", pt: "Cuidado nas escadas." }, 
                        A2: { en: "Be careful on the stairs.", pt: "Cuidado nas escadas." }, 
                        B1: { en: "She took the stairs because the elevator was full.", pt: "Ela foi pelas escadas porque o elevador estava cheio." } 
                      }
    },
      { english: "Mirror", portuguese: "Espelho",
          levels: { 
                        A1: { en: "Look at yourself in the mirror.", pt: "Olhe para si mesmo no espelho." }, 
                        A2: { en: "Look at yourself in the mirror.", pt: "Olhe para si mesmo no espelho." }, 
                        B1: { en: "I have a Mirror", pt: "Eu tenho um Espelho" } 
                      }
    },
    ],
    dialogue: [
      { speaker: "Mom", english: "Tom, can you help me clean the house?", portuguese: "Tom, você pode me ajudar a limpar a casa?", isPrimary: false },
      { speaker: "Tom", english: "Sure, Mom. What should I do?", portuguese: "Claro, mãe. O que devo fazer?", isPrimary: true },
      { speaker: "Mom", english: "First, make your bed. Then, take out the trash.", portuguese: "Primeiro, arrume sua cama. Depois, tire o lixo.", isPrimary: false },
      { speaker: "Tom", english: "Okay. Who is going to do the dishes?", portuguese: "Ok. Quem vai lavar a louça?", isPrimary: true },
      { speaker: "Mom", english: "Your sister is doing the dishes in the kitchen.", portuguese: "Sua irmã está lavando a louça na cozinha.", isPrimary: false },
      { speaker: "Tom", english: "Alright. After that, I will vacuum the living room.", portuguese: "Certo. Depois disso, eu vou passar aspirador na sala.", isPrimary: true },
      { speaker: "Mom", english: "Thank you! Can you also wipe the windows?", portuguese: "Obrigada! Você pode limpar as janelas também?", isPrimary: false },
      { speaker: "Tom", english: "The windows in the living room?", portuguese: "As janelas da sala de estar?", isPrimary: true },
      { speaker: "Mom", english: "Yes, and close the front door when you finish.", portuguese: "Sim, e feche a porta da frente quando você terminar.", isPrimary: false },
      { speaker: "Tom", english: "Got it. I will start right now.", portuguese: "Entendi. Vou começar agora mesmo.", isPrimary: true },
      { speaker: "Mom", english: "Perfect. We want the house clean for our guests tonight.", portuguese: "Perfeito. Queremos a casa limpa para nossos convidados hoje à noite.", isPrimary: false },
    ],
    flashcards: [
      { english: "I am in the living room.", portuguese: "Eu estou na sala de estar." },
      { english: "Can you do the dishes?", portuguese: "Você pode lavar a louça?" },
      { english: "Always make your bed.", portuguese: "Sempre arrume sua cama." },
      { english: "The kitchen is clean.", portuguese: "A cozinha está limpa." },
      { english: "I need to sweep the floor.", portuguese: "Eu preciso varrer o chão." },
      { english: "My bedroom is small.", portuguese: "Meu quarto é pequeno." },
      { english: "I have to do the laundry today.", portuguese: "Eu tenho que lavar roupa hoje." },
      { english: "Please, iron my shirt.", portuguese: "Por favor, passe a minha camisa." },
      { english: "The car is in the garage.", portuguese: "O carro está na garagem." },
      { english: "Close the window, it is cold.", portuguese: "Feche a janela, está frio." },
      { english: "They are playing in the garden.", portuguese: "Eles estão brincando no jardim." },
      { english: "Look in the mirror.", portuguese: "Olhe no espelho." },
    ],
    quiz: [
      { question: 'What does "Do the dishes" mean?', options: ["Cozinhar", "Lavar a louça", "Comer", "Fazer pratos"], correctIndex: 1, explanation: 'It is a common expression for washing the dirty plates and utensils.' },
      { question: 'Where do you usually sleep?', options: ["Kitchen", "Bathroom", "Living room", "Bedroom"], correctIndex: 3, explanation: 'You sleep in the "Bedroom" (Quarto).' },
      { question: 'Translate "Varrer o chão".', options: ["Clean the window", "Make the bed", "Sweep the floor", "Do the laundry"], correctIndex: 2, explanation: '"Varrer" is "Sweep" and "chão" is "floor".' },
      { question: 'Which room has a shower and toilet?', options: ["Kitchen", "Bedroom", "Bathroom", "Living room"], correctIndex: 2, explanation: '"Bathroom" translates to Banheiro.' },
      { question: 'What does "Take out the trash" mean?', options: ["Varrer o lixo", "Tirar o lixo", "Guardar a comida", "Lavar a roupa"], correctIndex: 1, explanation: '"Trash" is lixo, and "Take out" means levar para fora.' },
      { question: 'Where do you cook food?', options: ["Bedroom", "Bathroom", "Living room", "Kitchen"], correctIndex: 3, explanation: 'You cook in the kitchen (cozinha).' },
      { question: 'Complete: "I need to do the _____ because my clothes are dirty."', options: ["dishes", "laundry", "trash", "bed"], correctIndex: 1, explanation: '"Laundry" refers to clothes that need to be washed.' },
      { question: 'How do you say "Arrumar a cama"?', options: ["Clean the bed", "Fix the bed", "Make the bed", "Do the bed"], correctIndex: 2, explanation: 'In English, we say "Make the bed".' },
      { question: 'Translate "Sala de estar".', options: ["Living room", "Dining room", "Rest room", "Bed room"], correctIndex: 0, explanation: '"Living room" is where people sit and relax.' },
      { question: 'What does "Clean" mean?', options: ["Sujo", "Cozinhar", "Limpar", "Dormir"], correctIndex: 2, explanation: '"Clean" can be a verb meaning limpar or an adjective meaning limpo.' },
    ],
    trueOrFalse: {
      part1: [
        { statement: "You sleep in the kitchen.", statementPt: "Você dorme na cozinha.", isTrue: false, explanation: "You sleep in the bedroom. The kitchen is for cooking." },
      { statement: "You sweep the floor when it is dirty.", statementPt: "Você varre o chão quando ele está sujo.", isTrue: true, explanation: "Sweep the floor means varrer o chão." },
      { statement: "A mirror shows your reflection.", statementPt: "Um espelho mostra o seu reflexo.", isTrue: true, explanation: "Mirror means espelho." },
      { statement: "You do the laundry to clean your dishes.", statementPt: "Você lava a roupa para limpar seus pratos.", isTrue: false, explanation: "Doing the laundry is for clothes. You do the dishes to clean plates." },
      { statement: "A garage is a place for your car.", statementPt: "Uma garagem é um lugar para o seu carro.", isTrue: true, explanation: "Garage means garagem." },
        { statement: "An apartment is a type of home.", statementPt: "Um apartamento é um tipo de moradia.", isTrue: true, explanation: "Apartment means apartamento." }
      ],
      part2: [
        { statement: "You use an iron to cook food.", statementPt: "Você usa um ferro de passar para cozinhar comida.", isTrue: false, explanation: "You use an iron to press clothes." },
        { statement: "You sweep the floor with a broom.", statementPt: "Você varre o chão com uma vassoura.", isTrue: true, explanation: "Sweep means varrer." },
        { statement: "To take out the trash means to put garbage outside.", statementPt: "Levar o lixo para fora significa colocar o lixo na rua.", isTrue: true, explanation: "Take out the trash means tirar o lixo." },
        { statement: "You make the bed before you go to sleep.", statementPt: "Você arruma a cama antes de dormir.", isTrue: false, explanation: "Usually, you make the bed in the morning, after sleeping." },
        { statement: "When you cook, you make food.", statementPt: "Quando você cozinha, você faz comida.", isTrue: true, explanation: "Cook means cozinhar." },
        { statement: "A vacuum is used to clean floors and carpets.", statementPt: "Um aspirador é usado para limpar o chão e tapetes.", isTrue: true, explanation: "Vacuum means aspirar." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you live in a house or an apartment?", translation: "Você mora numa casa ou apartamento?" },
        { question: "How many bedrooms are in your house?", translation: "Quantos quartos tem na sua casa?" },
        { question: "Do you have a garage or a garden?", translation: "Você tem garagem ou jardim?" },
        { question: "What do you do in the living room?", translation: "O que você faz na sala de estar?" },
        { question: "Do you spend a lot of time in your bedroom?", translation: "Você passa muito tempo no seu quarto?" },
        { question: "Is your kitchen big enough to cook for many people?", translation: "Sua cozinha é grande o suficiente para cozinhar para muitas pessoas?" },
        { question: "How many bathrooms are in your house?", translation: "Quantos banheiros tem na sua casa?" }
      ],
      part2: [
        { question: "Who does the laundry in your house?", translation: "Quem lava a roupa na sua casa?" },
        { question: "How many times a week do you take out the trash?", translation: "Quantas vezes por semana você tira o lixo?" },
        { question: "Do you make your bed every morning?", translation: "Você arruma sua cama toda manhã?" },
        { question: "Do you like to cook?", translation: "Você gosta de cozinhar?" },
        { question: "Do you iron your clothes before going out?", translation: "Você passa suas roupas antes de sair?" },
        { question: "Who vacuums the floor in your house?", translation: "Quem passa aspirador no chão da sua casa?" },
        { question: "Do you know how to fix a broken chair?", translation: "Você sabe como consertar uma cadeira quebrada?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "The TV is in the living room.", portuguese: "A TV está na sala de estar." }, { english: "Please sweep the floor, its dirty.", portuguese: "Por favor, varra o chão, está sujo." }, { english: "We need to clean the house.", portuguese: "Nós precisamos limpar a casa." }, { english: "I need to iron my shirt.", portuguese: "Preciso passar minha camisa." }, { english: "The kids are playing in the yard.", portuguese: "As crianças estão brincando no quintal." }, { english: "Be careful on the stairs.", portuguese: "Cuidado nas escadas." } ],
                    level2: [ { english: "We painted the living room walls a bright yellow.", portuguese: "Nós pintamos as paredes da sala de estar de um amarelo brilhante." }, { english: "I have a Sweep the floor", portuguese: "Eu tenho um Varrer o chão" }, { english: "I have a Clean", portuguese: "Eu tenho um Limpar" }, { english: "I have a Iron the clothes", portuguese: "Eu tenho um Passar a roupa" }, { english: "I have a Garden / Yard", portuguese: "Eu tenho um Jardim / Quintal" }, { english: "She took the stairs because the elevator was full.", portuguese: "Ela foi pelas escadas porque o elevador estava cheio." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Living room means Sala de estar.", statementPt: "Living room significa Sala de estar.", isTrue: true, explanation: "Yes, Living room means Sala de estar." }, { statement: "Kitchen means a type of car.", statementPt: "Kitchen significa um tipo de carro.", isTrue: false, explanation: "No, Kitchen means Cozinha." }, { statement: "Bedroom means Quarto.", statementPt: "Bedroom significa Quarto.", isTrue: true, explanation: "Yes, Bedroom means Quarto." }, { statement: "Bathroom means a type of car.", statementPt: "Bathroom significa um tipo de carro.", isTrue: false, explanation: "No, Bathroom means Banheiro." }, { statement: "Sweep the floor means Varrer o chão.", statementPt: "Sweep the floor significa Varrer o chão.", isTrue: true, explanation: "Yes, Sweep the floor means Varrer o chão." }, { statement: "Do the dishes means a type of car.", statementPt: "Do the dishes significa um tipo de carro.", isTrue: false, explanation: "No, Do the dishes means Lavar a louça." }, { statement: "Make the bed means Arrumar a cama.", statementPt: "Make the bed significa Arrumar a cama.", isTrue: true, explanation: "Yes, Make the bed means Arrumar a cama." }, { statement: "Take out the trash means a type of car.", statementPt: "Take out the trash significa um tipo de carro.", isTrue: false, explanation: "No, Take out the trash means Tirar o lixo." }, { statement: "Clean means Limpar.", statementPt: "Clean significa Limpar.", isTrue: true, explanation: "Yes, Clean means Limpar." }, { statement: "Laundry means a type of car.", statementPt: "Laundry significa um tipo de carro.", isTrue: false, explanation: "No, Laundry means Lavar roupa." } ],
                    part2: [ { statement: "Iron the clothes means Passar a roupa.", statementPt: "Iron the clothes significa Passar a roupa.", isTrue: true, explanation: "Yes, Iron the clothes means Passar a roupa." }, { statement: "Dust the furniture means a type of car.", statementPt: "Dust the furniture significa um tipo de carro.", isTrue: false, explanation: "No, Dust the furniture means Tirar o pó dos móveis." }, { statement: "Vacuum means Passar aspirador.", statementPt: "Vacuum significa Passar aspirador.", isTrue: true, explanation: "Yes, Vacuum means Passar aspirador." }, { statement: "Garage means a type of car.", statementPt: "Garage significa um tipo de carro.", isTrue: false, explanation: "No, Garage means Garagem." }, { statement: "Garden / Yard means Jardim / Quintal.", statementPt: "Garden / Yard significa Jardim / Quintal.", isTrue: true, explanation: "Yes, Garden / Yard means Jardim / Quintal." }, { statement: "Window means a type of car.", statementPt: "Window significa um tipo de carro.", isTrue: false, explanation: "No, Window means Janela." }, { statement: "Door means Porta.", statementPt: "Door significa Porta.", isTrue: true, explanation: "Yes, Door means Porta." }, { statement: "Roof means a type of car.", statementPt: "Roof significa um tipo de carro.", isTrue: false, explanation: "No, Roof means Telhado." }, { statement: "Stairs means Escadas.", statementPt: "Stairs significa Escadas.", isTrue: true, explanation: "Yes, Stairs means Escadas." }, { statement: "Mirror means a type of car.", statementPt: "Mirror significa um tipo de carro.", isTrue: false, explanation: "No, Mirror means Espelho." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Living room\" in a sentence in the past simple?", translation: "Você consegue usar \"Living room\" em uma frase no passado simples?" }, { question: "Can you use \"Kitchen\" in a sentence in the past simple?", translation: "Você consegue usar \"Kitchen\" em uma frase no passado simples?" }, { question: "Can you use \"Bedroom\" in a sentence in the past simple?", translation: "Você consegue usar \"Bedroom\" em uma frase no passado simples?" }, { question: "Can you use \"Bathroom\" in a sentence in the past simple?", translation: "Você consegue usar \"Bathroom\" em uma frase no passado simples?" }, { question: "Can you use \"Sweep the floor\" in a sentence in the past simple?", translation: "Você consegue usar \"Sweep the floor\" em uma frase no passado simples?" }, { question: "Can you use \"Do the dishes\" in a sentence in the past simple?", translation: "Você consegue usar \"Do the dishes\" em uma frase no passado simples?" }, { question: "Can you use \"Make the bed\" in a sentence in the past simple?", translation: "Você consegue usar \"Make the bed\" em uma frase no passado simples?" }, { question: "Can you use \"Take out the trash\" in a sentence in the past simple?", translation: "Você consegue usar \"Take out the trash\" em uma frase no passado simples?" }, { question: "Can you use \"Clean\" in a sentence in the past simple?", translation: "Você consegue usar \"Clean\" em uma frase no passado simples?" }, { question: "Can you use \"Laundry\" in a sentence in the past simple?", translation: "Você consegue usar \"Laundry\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Iron the clothes\" in a sentence in the past simple?", translation: "Você consegue usar \"Iron the clothes\" em uma frase no passado simples?" }, { question: "Can you use \"Dust the furniture\" in a sentence in the past simple?", translation: "Você consegue usar \"Dust the furniture\" em uma frase no passado simples?" }, { question: "Can you use \"Vacuum\" in a sentence in the past simple?", translation: "Você consegue usar \"Vacuum\" em uma frase no passado simples?" }, { question: "Can you use \"Garage\" in a sentence in the past simple?", translation: "Você consegue usar \"Garage\" em uma frase no passado simples?" }, { question: "Can you use \"Garden / Yard\" in a sentence in the past simple?", translation: "Você consegue usar \"Garden / Yard\" em uma frase no passado simples?" }, { question: "Can you use \"Window\" in a sentence in the past simple?", translation: "Você consegue usar \"Window\" em uma frase no passado simples?" }, { question: "Can you use \"Door\" in a sentence in the past simple?", translation: "Você consegue usar \"Door\" em uma frase no passado simples?" }, { question: "Can you use \"Roof\" in a sentence in the past simple?", translation: "Você consegue usar \"Roof\" em uma frase no passado simples?" }, { question: "Can you use \"Stairs\" in a sentence in the past simple?", translation: "Você consegue usar \"Stairs\" em uma frase no passado simples?" }, { question: "Can you use \"Mirror\" in a sentence in the past simple?", translation: "Você consegue usar \"Mirror\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "casa2",
    title: "Home & Chores 2",
    titlePt: "Casa e Tarefas 2",
    description: "More vocabulary about home, rooms and household chores.",
    descriptionPt: "Mais vocabulário sobre a casa, cômodos e tarefas.",
    icon: "Sparkles",
    image: "/images/casa.png",
    color: "emerald",
    available: true,
    vocabulary: [
      { english: "Mop the floor", portuguese: "Passar pano no chão",
          levels: { 
                        A1: { en: "I need to mop the floor.", pt: "Eu preciso passar pano no chão." }, 
                        A2: { en: "I need to mop the floor.", pt: "Eu preciso passar pano no chão." }, 
                        B1: { en: "I have a Mop the floor", pt: "Eu tenho um Passar pano no chão" } 
                      }
    },
      { english: "Fold the laundry", portuguese: "Dobrar a roupa",
          levels: { 
                        A1: { en: "Please fold the laundry.", pt: "Por favor, dobre a roupa." }, 
                        A2: { en: "Please fold the laundry.", pt: "Por favor, dobre a roupa." }, 
                        B1: { en: "I have a Fold the laundry", pt: "Eu tenho um Dobrar a roupa" } 
                      }
    },
      { english: "Dining room", portuguese: "Sala de jantar",
          levels: { 
                        A1: { en: "We eat in the dining room.", pt: "Nós comemos na sala de jantar." }, 
                        A2: { en: "We eat in the dining room.", pt: "Nós comemos na sala de jantar." }, 
                        B1: { en: "They hosted a fancy dinner party in the dining room.", pt: "Eles deram um jantar chique na sala de jantar." } 
                      }
    },
      { english: "Hallway", portuguese: "Corredor",
          levels: { 
                        A1: { en: "The bathroom is down the hallway.", pt: "O banheiro fica no fim do corredor." }, 
                        A2: { en: "The bathroom is down the hallway.", pt: "O banheiro fica no fim do corredor." }, 
                        B1: { en: "I have a Hallway", pt: "Eu tenho um Corredor" } 
                      }
    },
      { english: "Ceiling", portuguese: "Teto",
          levels: { 
                        A1: { en: "Look up at the ceiling.", pt: "Olhe para cima para o teto." }, 
                        A2: { en: "Look up at the ceiling.", pt: "Olhe para cima para o teto." }, 
                        B1: { en: "The water leaked through the damaged ceiling.", pt: "A água vazou pelo teto danificado." } 
                      }
    },
      { english: "Wall", portuguese: "Parede",
          levels: { 
                        A1: { en: "The walls are painted blue.", pt: "As paredes são pintadas de azul." }, 
                        A2: { en: "The walls are painted blue.", pt: "As paredes são pintadas de azul." }, 
                        B1: { en: "She hung colorful paintings on the blank white wall.", pt: "Ela pendurou pinturas coloridas na parede branca vazia." } 
                      }
    },
      { english: "Balcony", portuguese: "Varanda / Sacada",
          levels: { 
                        A1: { en: "She is standing on the balcony.", pt: "Ela está de pé na sacada." }, 
                        A2: { en: "She is standing on the balcony.", pt: "Ela está de pé na sacada." }, 
                        B1: { en: "I have a Balcony", pt: "Eu tenho um Varanda / Sacada" } 
                      }
    },
      { english: "Basement", portuguese: "Porão",
          levels: { 
                        A1: { en: "We keep old boxes in the basement.", pt: "Nós guardamos caixas velhas no porão." }, 
                        A2: { en: "We keep old boxes in the basement.", pt: "Nós guardamos caixas velhas no porão." }, 
                        B1: { en: "I have a Basement", pt: "Eu tenho um Porão" } 
                      }
    },
      { english: "Attic", portuguese: "Sótão",
          levels: { 
                        A1: { en: "The attic is very dusty.", pt: "O sótão está muito empoeirado." }, 
                        A2: { en: "The attic is very dusty.", pt: "O sótão está muito empoeirado." }, 
                        B1: { en: "I have a Attic", pt: "Eu tenho um Sótão" } 
                      }
    },
      { english: "Furniture", portuguese: "Móveis",
          levels: { 
                        A1: { en: "They bought new furniture.", pt: "Eles compraram móveis novos." }, 
                        A2: { en: "They bought new furniture.", pt: "Eles compraram móveis novos." }, 
                        B1: { en: "They bought expensive antique furniture for their new house.", pt: "Eles compraram móveis antigos caros para a casa nova deles." } 
                      }
    },
      { english: "Couch / Sofa", portuguese: "Sofá",
          levels: { 
                        A1: { en: "I fell asleep on the couch.", pt: "Eu adormeci no sofá." }, 
                        A2: { en: "I fell asleep on the couch.", pt: "Eu adormeci no sofá." }, 
                        B1: { en: "I have a Couch / Sofa", pt: "Eu tenho um Sofá" } 
                      }
    },
      { english: "Wash the windows", portuguese: "Lavar as janelas",
          levels: { 
                        A1: { en: "We should wash the windows today.", pt: "Nós deveríamos lavar as janelas hoje." }, 
                        A2: { en: "We should wash the windows today.", pt: "Nós deveríamos lavar as janelas hoje." }, 
                        B1: { en: "I have a Wash the windows", pt: "Eu tenho um Lavar as janelas" } 
                      }
    },
      { english: "Mow the lawn", portuguese: "Cortar a grama",
          levels: { 
                        A1: { en: "My father is mowing the lawn.", pt: "Meu pai está cortando a grama." }, 
                        A2: { en: "My father is mowing the lawn.", pt: "Meu pai está cortando a grama." }, 
                        B1: { en: "I have a Mow the lawn", pt: "Eu tenho um Cortar a grama" } 
                      }
    },
      { english: "Water the plants", portuguese: "Regar as plantas",
          levels: { 
                        A1: { en: "Dont forget to water the plants.", pt: "Não se esqueça de regar as plantas." }, 
                        A2: { en: "Dont forget to water the plants.", pt: "Não se esqueça de regar as plantas." }, 
                        B1: { en: "I have a Water the plants", pt: "Eu tenho um Regar as plantas" } 
                      }
    },
      { english: "Set the table", portuguese: "Arrumar a mesa",
          levels: { 
                        A1: { en: "Can you set the table for dinner?", pt: "Você pode arrumar a mesa para o jantar?" }, 
                        A2: { en: "Can you set the table for dinner?", pt: "Você pode arrumar a mesa para o jantar?" }, 
                        B1: { en: "I have a Set the table", pt: "Eu tenho um Arrumar a mesa" } 
                      }
    },
      { english: "Clear the table", portuguese: "Tirar a mesa",
          levels: { 
                        A1: { en: "I will clear the table after we eat.", pt: "Eu vou tirar a mesa depois de comermos." }, 
                        A2: { en: "I will clear the table after we eat.", pt: "Eu vou tirar a mesa depois de comermos." }, 
                        B1: { en: "I have a Clear the table", pt: "Eu tenho um Tirar a mesa" } 
                      }
    },
      { english: "Sink", portuguese: "Pia",
          levels: { 
                        A1: { en: "The sink is full of dishes.", pt: "A pia está cheia de louça." }, 
                        A2: { en: "The sink is full of dishes.", pt: "A pia está cheia de louça." }, 
                        B1: { en: "I have a Sink", pt: "Eu tenho um Pia" } 
                      }
    },
      { english: "Faucet", portuguese: "Torneira",
          levels: { 
                        A1: { en: "Turn off the faucet to save water.", pt: "Feche a torneira para economizar água." }, 
                        A2: { en: "Turn off the faucet to save water.", pt: "Feche a torneira para economizar água." }, 
                        B1: { en: "I have a Faucet", pt: "Eu tenho um Torneira" } 
                      }
    },
      { english: "Closet", portuguese: "Guarda-roupa",
          levels: { 
                        A1: { en: "Hang your shirt in the closet.", pt: "Pendure sua camisa no guarda-roupa." }, 
                        A2: { en: "Hang your shirt in the closet.", pt: "Pendure sua camisa no guarda-roupa." }, 
                        B1: { en: "I have a Closet", pt: "Eu tenho um Guarda-roupa" } 
                      }
    },
      { english: "Wipe the counter", portuguese: "Limpar a bancada",
          levels: { 
                        A1: { en: "Please wipe the counter after cooking.", pt: "Por favor, limpe a bancada após cozinhar." }, 
                        A2: { en: "Please wipe the counter after cooking.", pt: "Por favor, limpe a bancada após cozinhar." }, 
                        B1: { en: "I have a Wipe the counter", pt: "Eu tenho um Limpar a bancada" } 
                      }
    },
    ],
    dialogue: [
      { speaker: "John", english: "Hey Sarah, the house is a mess. We need to clean.", portuguese: "Ei Sarah, a casa está uma bagunça. Nós precisamos limpar.", isPrimary: true },
      { speaker: "Sarah", english: "You are right. I will start by folding the laundry.", portuguese: "Você tem razão. Eu vou começar dobrando a roupa.", isPrimary: false },
      { speaker: "John", english: "Good idea. I will mop the floor in the dining room.", portuguese: "Boa ideia. Eu vou passar pano no chão da sala de jantar.", isPrimary: true },
      { speaker: "Sarah", english: "Can you also wipe the kitchen counter?", portuguese: "Você pode também limpar a bancada da cozinha?", isPrimary: false },
      { speaker: "John", english: "Sure. Have you watered the plants on the balcony?", portuguese: "Claro. Você regou as plantas na varanda?", isPrimary: true },
      { speaker: "Sarah", english: "Not yet. I'll do that after I organize my closet.", portuguese: "Ainda não. Eu farei isso depois de organizar meu guarda-roupa.", isPrimary: false },
      { speaker: "John", english: "Okay. Later, I need to go to the basement to find some tools.", portuguese: "Ok. Mais tarde, preciso ir ao porão para achar ferramentas.", isPrimary: true },
      { speaker: "Sarah", english: "Are you going to fix the leaky faucet in the bathroom?", portuguese: "Você vai consertar a torneira pingando no banheiro?", isPrimary: false },
      { speaker: "John", english: "Yes, it is driving me crazy! Then I will rest on the couch.", portuguese: "Sim, está me deixando louco! Depois eu vou descansar no sofá.", isPrimary: true },
      { speaker: "Sarah", english: "Deal! Let's get to work.", portuguese: "Fechado! Mãos à obra.", isPrimary: false },
    ],
    flashcards: [
      { english: "I need to mop the floor.", portuguese: "Eu preciso passar pano no chão." },
      { english: "She is folding the laundry.", portuguese: "Ela está dobrando a roupa." },
      { english: "We eat in the dining room.", portuguese: "Nós comemos na sala de jantar." },
      { english: "Look up at the ceiling.", portuguese: "Olhe para cima para o teto." },
      { english: "The furniture is expensive.", portuguese: "Os móveis são caros." },
      { english: "Sit on the couch.", portuguese: "Sente no sofá." },
      { english: "I will mow the lawn tomorrow.", portuguese: "Vou cortar a grama amanhã." },
      { english: "Water the plants, please.", portuguese: "Regue as plantas, por favor." },
      { english: "Can you set the table?", portuguese: "Você pode arrumar a mesa?" },
      { english: "The sink is broken.", portuguese: "A pia está quebrada." },
      { english: "Turn off the faucet.", portuguese: "Feche a torneira." },
      { english: "My closet is full.", portuguese: "Meu guarda-roupa está cheio." },
    ],
    quiz: [
      { question: 'What does "Mop the floor" mean?', options: ["Varrer o chão", "Passar pano no chão", "Lavar o tapete", "Limpar a parede"], correctIndex: 1, explanation: '"Mop" is the tool (esfregão) and the action of cleaning the floor with water.' },
      { question: 'Where do you usually eat formal meals?', options: ["Kitchen", "Hallway", "Dining room", "Basement"], correctIndex: 2, explanation: '"Dining room" is the sala de jantar.' },
      { question: 'Translate: "Dobrar a roupa".', options: ["Fold the laundry", "Do the laundry", "Iron the laundry", "Wash the clothes"], correctIndex: 0, explanation: '"Fold" means dobrar.' },
      { question: 'What do you call the room under a house?', options: ["Attic", "Balcony", "Garage", "Basement"], correctIndex: 3, explanation: '"Basement" is the porão.' },
      { question: 'Complete: "Turn off the _____ to save water."', options: ["sink", "faucet", "couch", "closet"], correctIndex: 1, explanation: '"Faucet" (or tap) is torneira.' },
      { question: 'How do you say "Sofá" in English?', options: ["Chair", "Table", "Couch", "Bed"], correctIndex: 2, explanation: '"Couch" (or Sofa) is where you sit in the living room.' },
      { question: 'Translate "Regar as plantas".', options: ["Wash the plants", "Water the plants", "Give plants", "Clean the plants"], correctIndex: 1, explanation: '"Water" can be a verb meaning regar.' },
      { question: 'What does "Set the table" mean?', options: ["Comprar a mesa", "Tirar a mesa", "Arrumar a mesa", "Limpar a mesa"], correctIndex: 2, explanation: 'It means preparing the table with plates and utensils for a meal.' },
      { question: 'Where do you hang your clothes?', options: ["In the closet", "In the sink", "In the attic", "In the hallway"], correctIndex: 0, explanation: 'You hang clothes in a "Closet" (guarda-roupa/armário).' },
      { question: 'What do you use to wash dishes?', options: ["The ceiling", "The couch", "The sink", "The wall"], correctIndex: 2, explanation: 'You wash dishes in the "Sink" (pia).' },
    ],
    trueOrFalse: {
      part1: [
        { statement: "The ceiling is below your feet.", statementPt: "O teto fica abaixo dos seus pés.", isTrue: false, explanation: "The ceiling (teto) is above your head. The floor is below your feet." },
      { statement: "You use a mop to clean the floor with water.", statementPt: "Você usa um esfregão/pano para limpar o chão com água.", isTrue: true, explanation: "Mop means passar pano/esfregão." },
      { statement: "A basement is at the top of the house.", statementPt: "Um porão fica no topo da casa.", isTrue: false, explanation: "The basement (porão) is under the house. The attic (sótão) is at the top." },
      { statement: "You set the table before you eat.", statementPt: "Você arruma a mesa antes de comer.", isTrue: true, explanation: "Set the table means arrumar a mesa." },
      { statement: "A closet is used to keep clothes.", statementPt: "Um guarda-roupa é usado para guardar roupas.", isTrue: true, explanation: "Closet means guarda-roupa." },
        { statement: "You use stairs to go up or down.", statementPt: "Você usa as escadas para subir ou descer.", isTrue: true, explanation: "Stairs means escadas." }
      ],
      part2: [
        { statement: "A sofa is usually in the bathroom.", statementPt: "Um sofá geralmente fica no banheiro.", isTrue: false, explanation: "A sofa is usually in the living room." },
        { statement: "You look at yourself in a mirror.", statementPt: "Você olha para si mesmo em um espelho.", isTrue: true, explanation: "Mirror means espelho." },
        { statement: "A sink is used to wash hands.", statementPt: "Uma pia é usada para lavar as mãos.", isTrue: true, explanation: "Sink means pia." },
        { statement: "You sleep on a toilet.", statementPt: "Você dorme em um vaso sanitário.", isTrue: false, explanation: "You sleep on a bed." },
        { statement: "A shower is where you bathe.", statementPt: "Um chuveiro é onde você toma banho.", isTrue: true, explanation: "Shower means chuveiro/ducha." },
        { statement: "A bed is a piece of furniture.", statementPt: "Uma cama é um móvel.", isTrue: true, explanation: "Furniture means móvel(is)." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "What color are the walls in your bedroom?", translation: "Que cor são as paredes do seu quarto?" },
        { question: "Does your house have an attic or a basement?", translation: "Sua casa tem sótão ou porão?" },
        { question: "Do you need to use stairs to enter your house?", translation: "Você precisa usar escadas para entrar na sua casa?" },
        { question: "How many windows are in your living room?", translation: "Quantas janelas tem na sua sala de estar?" },
        { question: "Do you clean the floor every day?", translation: "Você limpa o chão todos os dias?" },
        { question: "Is your front door made of wood?", translation: "Sua porta da frente é feita de madeira?" },
        { question: "Do you have a long hallway in your home?", translation: "Você tem um corredor longo na sua casa?" }
      ],
      part2: [
        { question: "Is your bed big or small?", translation: "Sua cama é grande ou pequena?" },
        { question: "Do you have a big mirror in your bathroom?", translation: "Você tem um espelho grande no seu banheiro?" },
        { question: "What is on your table right now?", translation: "O que tem na sua mesa agora?" },
        { question: "Where do you usually sit? On a chair or on the couch?", translation: "Onde você costuma sentar? Numa cadeira ou no sofá?" },
        { question: "Do you like the furniture in your house?", translation: "Você gosta dos móveis da sua casa?" },
        { question: "Do you have a comfortable couch in your living room?", translation: "Você tem um sofá confortável na sua sala de estar?" },
        { question: "Do you take a long shower in the morning?", translation: "Você toma um banho demorado de manhã?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "I need to mop the floor.", portuguese: "Eu preciso passar pano no chão." }, { english: "Look up at the ceiling.", portuguese: "Olhe para cima para o teto." }, { english: "The attic is very dusty.", portuguese: "O sótão está muito empoeirado." }, { english: "I fell asleep on the couch.", portuguese: "Eu adormeci no sofá." }, { english: "Can you set the table for dinner?", portuguese: "Você pode arrumar a mesa para o jantar?" }, { english: "Hang your shirt in the closet.", portuguese: "Pendure sua camisa no guarda-roupa." } ],
                    level2: [ { english: "I have a Mop the floor", portuguese: "Eu tenho um Passar pano no chão" }, { english: "The water leaked through the damaged ceiling.", portuguese: "A água vazou pelo teto danificado." }, { english: "I have a Attic", portuguese: "Eu tenho um Sótão" }, { english: "I have a Couch / Sofa", portuguese: "Eu tenho um Sofá" }, { english: "I have a Set the table", portuguese: "Eu tenho um Arrumar a mesa" }, { english: "I have a Closet", portuguese: "Eu tenho um Guarda-roupa" } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Mop the floor means Passar pano no chão.", statementPt: "Mop the floor significa Passar pano no chão.", isTrue: true, explanation: "Yes, Mop the floor means Passar pano no chão." }, { statement: "Fold the laundry means a type of car.", statementPt: "Fold the laundry significa um tipo de carro.", isTrue: false, explanation: "No, Fold the laundry means Dobrar a roupa." }, { statement: "Dining room means Sala de jantar.", statementPt: "Dining room significa Sala de jantar.", isTrue: true, explanation: "Yes, Dining room means Sala de jantar." }, { statement: "Hallway means a type of car.", statementPt: "Hallway significa um tipo de carro.", isTrue: false, explanation: "No, Hallway means Corredor." }, { statement: "Ceiling means Teto.", statementPt: "Ceiling significa Teto.", isTrue: true, explanation: "Yes, Ceiling means Teto." }, { statement: "Wall means a type of car.", statementPt: "Wall significa um tipo de carro.", isTrue: false, explanation: "No, Wall means Parede." }, { statement: "Balcony means Varanda / Sacada.", statementPt: "Balcony significa Varanda / Sacada.", isTrue: true, explanation: "Yes, Balcony means Varanda / Sacada." }, { statement: "Basement means a type of car.", statementPt: "Basement significa um tipo de carro.", isTrue: false, explanation: "No, Basement means Porão." }, { statement: "Attic means Sótão.", statementPt: "Attic significa Sótão.", isTrue: true, explanation: "Yes, Attic means Sótão." }, { statement: "Furniture means a type of car.", statementPt: "Furniture significa um tipo de carro.", isTrue: false, explanation: "No, Furniture means Móveis." } ],
                    part2: [ { statement: "Couch / Sofa means Sofá.", statementPt: "Couch / Sofa significa Sofá.", isTrue: true, explanation: "Yes, Couch / Sofa means Sofá." }, { statement: "Wash the windows means a type of car.", statementPt: "Wash the windows significa um tipo de carro.", isTrue: false, explanation: "No, Wash the windows means Lavar as janelas." }, { statement: "Mow the lawn means Cortar a grama.", statementPt: "Mow the lawn significa Cortar a grama.", isTrue: true, explanation: "Yes, Mow the lawn means Cortar a grama." }, { statement: "Water the plants means a type of car.", statementPt: "Water the plants significa um tipo de carro.", isTrue: false, explanation: "No, Water the plants means Regar as plantas." }, { statement: "Set the table means Arrumar a mesa.", statementPt: "Set the table significa Arrumar a mesa.", isTrue: true, explanation: "Yes, Set the table means Arrumar a mesa." }, { statement: "Clear the table means a type of car.", statementPt: "Clear the table significa um tipo de carro.", isTrue: false, explanation: "No, Clear the table means Tirar a mesa." }, { statement: "Sink means Pia.", statementPt: "Sink significa Pia.", isTrue: true, explanation: "Yes, Sink means Pia." }, { statement: "Faucet means a type of car.", statementPt: "Faucet significa um tipo de carro.", isTrue: false, explanation: "No, Faucet means Torneira." }, { statement: "Closet means Guarda-roupa.", statementPt: "Closet significa Guarda-roupa.", isTrue: true, explanation: "Yes, Closet means Guarda-roupa." }, { statement: "Wipe the counter means a type of car.", statementPt: "Wipe the counter significa um tipo de carro.", isTrue: false, explanation: "No, Wipe the counter means Limpar a bancada." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Mop the floor\" in a sentence in the past simple?", translation: "Você consegue usar \"Mop the floor\" em uma frase no passado simples?" }, { question: "Can you use \"Fold the laundry\" in a sentence in the past simple?", translation: "Você consegue usar \"Fold the laundry\" em uma frase no passado simples?" }, { question: "Can you use \"Dining room\" in a sentence in the past simple?", translation: "Você consegue usar \"Dining room\" em uma frase no passado simples?" }, { question: "Can you use \"Hallway\" in a sentence in the past simple?", translation: "Você consegue usar \"Hallway\" em uma frase no passado simples?" }, { question: "Can you use \"Ceiling\" in a sentence in the past simple?", translation: "Você consegue usar \"Ceiling\" em uma frase no passado simples?" }, { question: "Can you use \"Wall\" in a sentence in the past simple?", translation: "Você consegue usar \"Wall\" em uma frase no passado simples?" }, { question: "Can you use \"Balcony\" in a sentence in the past simple?", translation: "Você consegue usar \"Balcony\" em uma frase no passado simples?" }, { question: "Can you use \"Basement\" in a sentence in the past simple?", translation: "Você consegue usar \"Basement\" em uma frase no passado simples?" }, { question: "Can you use \"Attic\" in a sentence in the past simple?", translation: "Você consegue usar \"Attic\" em uma frase no passado simples?" }, { question: "Can you use \"Furniture\" in a sentence in the past simple?", translation: "Você consegue usar \"Furniture\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Couch / Sofa\" in a sentence in the past simple?", translation: "Você consegue usar \"Couch / Sofa\" em uma frase no passado simples?" }, { question: "Can you use \"Wash the windows\" in a sentence in the past simple?", translation: "Você consegue usar \"Wash the windows\" em uma frase no passado simples?" }, { question: "Can you use \"Mow the lawn\" in a sentence in the past simple?", translation: "Você consegue usar \"Mow the lawn\" em uma frase no passado simples?" }, { question: "Can you use \"Water the plants\" in a sentence in the past simple?", translation: "Você consegue usar \"Water the plants\" em uma frase no passado simples?" }, { question: "Can you use \"Set the table\" in a sentence in the past simple?", translation: "Você consegue usar \"Set the table\" em uma frase no passado simples?" }, { question: "Can you use \"Clear the table\" in a sentence in the past simple?", translation: "Você consegue usar \"Clear the table\" em uma frase no passado simples?" }, { question: "Can you use \"Sink\" in a sentence in the past simple?", translation: "Você consegue usar \"Sink\" em uma frase no passado simples?" }, { question: "Can you use \"Faucet\" in a sentence in the past simple?", translation: "Você consegue usar \"Faucet\" em uma frase no passado simples?" }, { question: "Can you use \"Closet\" in a sentence in the past simple?", translation: "Você consegue usar \"Closet\" em uma frase no passado simples?" }, { question: "Can you use \"Wipe the counter\" in a sentence in the past simple?", translation: "Você consegue usar \"Wipe the counter\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "hobbies",
    title: "Hobbies",
    titlePt: "Hobbies",
    description: "Express your hobbies and leisure activities.",
    descriptionPt: "Expresse seus hobbies e atividades de lazer.",
    icon: "Palette",
    image: "/images/hobbies.png",
    color: "amber",
    available: true,
    vocabulary: [
      { english: "Read a book", portuguese: "Ler um livro",
          levels: { 
                        A1: { en: "I read a book every night.", pt: "Eu leio um livro toda noite." }, 
                        A2: { en: "I read a book every night.", pt: "Eu leio um livro toda noite." }, 
                        B1: { en: "She read an inspiring book during her vacation.", pt: "Ela leu um livro inspirador durante suas férias." } 
                      }
    },
      { english: "Play guitar", portuguese: "Tocar violão",
          levels: { 
                        A1: { en: "He plays guitar in a band.", pt: "Ele toca violão em uma banda." }, 
                        A2: { en: "He plays guitar in a band.", pt: "Ele toca violão em uma banda." }, 
                        B1: { en: "I have a Play guitar", pt: "Eu tenho um Tocar violão" } 
                      }
    },
      { english: "Listen to music", portuguese: "Ouvir música",
          levels: { 
                        A1: { en: "I listen to music while running.", pt: "Eu ouço música enquanto corro." }, 
                        A2: { en: "I listen to music while running.", pt: "Eu ouço música enquanto corro." }, 
                        B1: { en: "He listened to classical music while studying for his exams.", pt: "Ele ouvia música clássica enquanto estudava para os exames." } 
                      }
    },
      { english: "Watch movies", portuguese: "Assistir a filmes",
          levels: { 
                        A1: { en: "Lets watch movies on Netflix.", pt: "Vamos assistir a filmes na Netflix." }, 
                        A2: { en: "Lets watch movies on Netflix.", pt: "Vamos assistir a filmes na Netflix." }, 
                        B1: { en: "They watched classic movies on a vintage projector.", pt: "Eles assistiram a filmes clássicos em um projetor vintage." } 
                      }
    },
      { english: "Draw / Paint", portuguese: "Desenhar / Pintar",
          levels: { 
                        A1: { en: "She likes to paint landscapes.", pt: "Ela gosta de pintar paisagens." }, 
                        A2: { en: "She likes to paint landscapes.", pt: "Ela gosta de pintar paisagens." }, 
                        B1: { en: "He painted a stunning landscape using watercolors.", pt: "Ele pintou uma paisagem deslumbrante usando aquarelas." } 
                      }
    },
      { english: "Travel", portuguese: "Viajar",
          levels: { 
                        A1: { en: "Traveling is my favorite hobby.", pt: "Viajar é meu hobby favorito." }, 
                        A2: { en: "Traveling is my favorite hobby.", pt: "Viajar é meu hobby favorito." }, 
                        B1: { en: "They traveled to Europe during their summer vacation.", pt: "Eles viajaram para a Europa durante as férias de verão." } 
                      }
    },
      { english: "Play video games", portuguese: "Jogar videogame",
          levels: { 
                        A1: { en: "Kids love playing video games.", pt: "As crianças adoram jogar videogame." }, 
                        A2: { en: "Kids love playing video games.", pt: "As crianças adoram jogar videogame." }, 
                        B1: { en: "He played video games with his friends all night.", pt: "Ele jogou videogames com seus amigos a noite toda." } 
                      }
    },
      { english: "Take photos", portuguese: "Tirar fotos",
          levels: { 
                        A1: { en: "I take photos with my camera.", pt: "Eu tiro fotos com minha câmera." }, 
                        A2: { en: "I take photos with my camera.", pt: "Eu tiro fotos com minha câmera." }, 
                        B1: { en: "She took amazing photos of the mountains.", pt: "Ela tirou fotos incríveis das montanhas." } 
                      }
    },
      { english: "Dance", portuguese: "Dançar",
          levels: { 
                        A1: { en: "We go out to dance on Fridays.", pt: "Nós saímos para dançar às sextas." }, 
                        A2: { en: "We go out to dance on Fridays.", pt: "Nós saímos para dançar às sextas." }, 
                        B1: { en: "We danced all night at the wedding reception.", pt: "Nós dançamos a noite toda na festa de casamento." } 
                      }
    },
      { english: "Sing", portuguese: "Cantar",
          levels: { 
                        A1: { en: "She sings in the shower.", pt: "Ela canta no chuveiro." }, 
                        A2: { en: "She sings in the shower.", pt: "Ela canta no chuveiro." }, 
                        B1: { en: "He sang his favorite song in the shower.", pt: "Ele cantou sua música favorita no chuveiro." } 
                      }
    },
      { english: "Cook", portuguese: "Cozinhar",
          levels: { 
                        A1: { en: "Cooking new recipes is fun.", pt: "Cozinhar novas receitas é divertido." }, 
                        A2: { en: "Cooking new recipes is fun.", pt: "Cozinhar novas receitas é divertido." }, 
                        B1: { en: "She cooked a special dinner for her anniversary.", pt: "Ela cozinhou um jantar especial para o seu aniversário." } 
                      }
    },
      { english: "Go hiking", portuguese: "Fazer trilha",
          levels: { 
                        A1: { en: "We go hiking in the mountains.", pt: "Nós fazemos trilha nas montanhas." }, 
                        A2: { en: "We go hiking in the mountains.", pt: "Nós fazemos trilha nas montanhas." }, 
                        B1: { en: "They went hiking in the national park yesterday.", pt: "Eles fizeram trilha no parque nacional ontem." } 
                      }
    },
      { english: "Camp", portuguese: "Acampar",
          levels: { 
                        A1: { en: "They camp in the forest every summer.", pt: "Eles acampam na floresta todo verão." }, 
                        A2: { en: "They camp in the forest every summer.", pt: "Eles acampam na floresta todo verão." }, 
                        B1: { en: "We camped near a beautiful lake last weekend.", pt: "Nós acampamos perto de um lago lindo no final de semana passado." } 
                      }
    },
      { english: "Knit", portuguese: "Tricotar",
          levels: { 
                        A1: { en: "My grandmother likes to knit.", pt: "Minha avó gosta de tricotar." }, 
                        A2: { en: "My grandmother likes to knit.", pt: "Minha avó gosta de tricotar." }, 
                        B1: { en: "My grandmother knitted a warm sweater for me.", pt: "Minha avó tricotou um suéter quente para mim." } 
                      }
    },
      { english: "Collect", portuguese: "Colecionar",
          levels: { 
                        A1: { en: "He collects old coins.", pt: "Ele coleciona moedas antigas." }, 
                        A2: { en: "He collects old coins.", pt: "Ele coleciona moedas antigas." }, 
                        B1: { en: "He collected rare coins from different countries.", pt: "Ele colecionava moedas raras de diferentes países." } 
                      }
    },
      { english: "Write", portuguese: "Escrever",
          levels: { 
                        A1: { en: "I write poems in my free time.", pt: "Eu escrevo poemas no meu tempo livre." }, 
                        A2: { en: "I write poems in my free time.", pt: "Eu escrevo poemas no meu tempo livre." }, 
                        B1: { en: "She wrote a long letter to her best friend.", pt: "Ela escreveu uma longa carta para sua melhor amiga." } 
                      }
    },
      { english: "Garden", portuguese: "Jardinar",
          levels: { 
                        A1: { en: "She loves gardening in the spring.", pt: "Ela adora jardinar na primavera." }, 
                        A2: { en: "She loves gardening in the spring.", pt: "Ela adora jardinar na primavera." }, 
                        B1: { en: "He spent his weekend gardening in the backyard.", pt: "Ele passou o fim de semana trabalhando no jardim no quintal." } 
                      }
    },
      { english: "Surf the internet", portuguese: "Navegar na internet",
          levels: { 
                        A1: { en: "I surf the internet to read news.", pt: "Navego na internet para ler notícias." }, 
                        A2: { en: "I surf the internet to read news.", pt: "Navego na internet para ler notícias." }, 
                        B1: { en: "I surfed the internet looking for interesting articles.", pt: "Eu naveguei na internet procurando artigos interessantes." } 
                      }
    },
      { english: "Workout", portuguese: "Malhar",
          levels: { 
                        A1: { en: "I workout at the gym daily.", pt: "Eu malho na academia diariamente." }, 
                        A2: { en: "I workout at the gym daily.", pt: "Eu malho na academia diariamente." }, 
                        B1: { en: "She worked out at the gym every morning.", pt: "Ela malhava na academia toda manhã." } 
                      }
    },
      { english: "Play board games", portuguese: "Jogar jogos de tabuleiro",
          levels: { 
                        A1: { en: "We play board games on Sundays.", pt: "Jogamos jogos de tabuleiro aos domingos." }, 
                        A2: { en: "We play board games on Sundays.", pt: "Jogamos jogos de tabuleiro aos domingos." }, 
                        B1: { en: "We played strategic board games on Saturday.", pt: "Nós jogamos jogos de tabuleiro estratégicos no sábado." } 
                      }
    },
    ],
    dialogue: [
      { speaker: "Lisa", english: "What do you do in your free time, David?", portuguese: "O que você faz no seu tempo livre, David?", isPrimary: false },
      { speaker: "David", english: "I love to play the guitar and listen to music. What about you?", portuguese: "Eu amo tocar violão e ouvir música. E você?", isPrimary: true },
      { speaker: "Lisa", english: "I really enjoy drawing and watching movies. I also like gardening.", portuguese: "Eu realmente gosto de desenhar e assistir filmes. Eu também gosto de jardinar.", isPrimary: false },
      { speaker: "David", english: "That's cool! Do you like to read books too?", portuguese: "Que legal! Você gosta de ler livros também?", isPrimary: true },
      { speaker: "Lisa", english: "Yes, reading is my favorite hobby. What kind of music do you play?", portuguese: "Sim, ler é o meu hobby favorito. Que tipo de música você toca?", isPrimary: false },
      { speaker: "David", english: "Mostly rock and pop. We should play a board game sometime!", portuguese: "Principalmente rock e pop. Nós deveríamos jogar um jogo de tabuleiro qualquer dia!", isPrimary: true },
      { speaker: "Lisa", english: "I would love that. Do you like chess or monopoly?", portuguese: "Eu adoraria. Você gosta de xadrez ou banco imobiliário?", isPrimary: false },
      { speaker: "David", english: "Chess is great. It makes you think.", portuguese: "Xadrez é ótimo. Faz você pensar.", isPrimary: true },
      { speaker: "Lisa", english: "Agreed. Let's do it this Sunday afternoon.", portuguese: "Concordo. Vamos fazer isso neste domingo à tarde.", isPrimary: false },
      { speaker: "David", english: "Sunday is perfect. I will bring the chess board.", portuguese: "Domingo é perfeito. Eu levo o tabuleiro de xadrez.", isPrimary: true },
    ],
    flashcards: [
      { english: "I love reading books.", portuguese: "Eu amo ler livros." },
      { english: "He plays the guitar well.", portuguese: "Ele toca violão bem." },
      { english: "Do you like listening to music?", portuguese: "Você gosta de ouvir música?" },
      { english: "We watch movies on Friday.", portuguese: "Nós assistimos filmes na sexta." },
      { english: "She likes to draw.", portuguese: "Ela gosta de desenhar." },
      { english: "Traveling is my hobby.", portuguese: "Viajar é meu hobby." },
      { english: "I take photos of nature.", portuguese: "Eu tiro fotos da natureza." },
      { english: "We go hiking on weekends.", portuguese: "Nós fazemos trilha nos fins de semana." },
      { english: "She writes poems.", portuguese: "Ela escreve poemas." },
      { english: "They collect stamps.", portuguese: "Eles colecionam selos." },
      { english: "I workout every day.", portuguese: "Eu malho todos os dias." },
      { english: "Gardening is relaxing.", portuguese: "Jardinar é relaxante." },
    ],
    quiz: [
      { question: 'How do you say "Tocar violão" in English?', options: ["Play the piano", "Play the guitar", "Play the violin", "Play music"], correctIndex: 1, explanation: 'In English, "violão" and "guitarra elétrica" are both called "guitar".' },
      { question: 'Complete: "I like to _____ to music."', options: ["hear", "listen", "play", "make"], correctIndex: 1, explanation: 'We use "listen to" when paying attention to sounds like music.' },
      { question: 'What does "Travel" mean?', options: ["Trabalhar", "Estudar", "Viajar", "Treinar"], correctIndex: 2, explanation: '"Travel" translates to "Viajar".' },
      { question: 'How do you say "Tirar fotos"?', options: ["Make photos", "Take photos", "Do photos", "See photos"], correctIndex: 1, explanation: 'In English, we say "Take photos".' },
      { question: 'Translate: "Ela gosta de pintar."', options: ["She likes to dance.", "She likes to sing.", "She likes to paint.", "She likes to draw."], correctIndex: 2, explanation: '"Pintar" translates to "Paint".' },
      { question: 'What does a person do with a book?', options: ["Eat", "Play", "Read", "Listen"], correctIndex: 2, explanation: 'You read (ler) a book.' },
      { question: 'Which word means "Cantar"?', options: ["Dance", "Draw", "Sing", "Read"], correctIndex: 2, explanation: '"Sing" translates to Cantar.' },
      { question: 'What are you doing when you are using a PlayStation?', options: ["Watching movies", "Playing video games", "Listening to music", "Reading"], correctIndex: 1, explanation: 'You are playing video games.' },
      { question: 'How do you say "Tempo livre"?', options: ["Free time", "Good time", "Play time", "Rest time"], correctIndex: 0, explanation: '"Tempo livre" is "Free time".' },
      { question: 'Complete: "Let\'s _____ a movie tonight."', options: ["see", "look", "watch", "read"], correctIndex: 2, explanation: 'We use "watch" for movies and TV.' },
    ],
    trueOrFalse: {
      part1: [
        { statement: "When you listen to music, you use a book.", statementPt: "Quando você ouve música, você usa um livro.", isTrue: false, explanation: "You use a book to read, not to listen to music." },
      { statement: "Hiking is usually done in nature.", statementPt: "Fazer trilha é geralmente feito na natureza.", isTrue: true, explanation: "Hiking means caminhar na natureza/trilha." },
      { statement: "If you like to draw, you might need a pencil.", statementPt: "Se você gosta de desenhar, você pode precisar de um lápis.", isTrue: true, explanation: "Draw means desenhar." },
      { statement: "Gardening involves working with plants.", statementPt: "Jardinar envolve trabalhar com plantas.", isTrue: true, explanation: "Gardening means jardinar." },
      { statement: "To play video games, you only need a kitchen.", statementPt: "Para jogar videogame, você só precisa de uma cozinha.", isTrue: false, explanation: "You need a console or PC, not a kitchen." },
        { statement: "When you paint, you use colors.", statementPt: "Quando você pinta, você usa cores.", isTrue: true, explanation: "Paint means pintar." }
      ],
      part2: [
        { statement: "You play the guitar with your feet.", statementPt: "Você toca violão com seus pés.", isTrue: false, explanation: "You play the guitar with your hands." },
        { statement: "To travel means to visit different places.", statementPt: "Viajar significa visitar lugares diferentes.", isTrue: true, explanation: "Travel means viajar." },
        { statement: "When you camp, you usually sleep in a tent.", statementPt: "Quando você acampa, geralmente dorme em uma barraca.", isTrue: true, explanation: "Camp means acampar." },
        { statement: "Fishing is catching birds in the sky.", statementPt: "Pescar é pegar pássaros no céu.", isTrue: false, explanation: "Fishing is catching fish in the water." },
        { statement: "Hiking involves walking in nature.", statementPt: "Fazer trilha envolve caminhar na natureza.", isTrue: true, explanation: "Hike means fazer trilha/caminhada." },
        { statement: "You use a camera to take photos.", statementPt: "Você usa uma câmera para tirar fotos.", isTrue: true, explanation: "Take photos means tirar fotos." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "What do you do in your free time?", translation: "O que você faz no seu tempo livre?" },
        { question: "Do you like to read books or watch movies?", translation: "Você gosta de ler livros ou assistir filmes?" },
        { question: "Can you sing or dance well?", translation: "Você canta ou dança bem?" },
        { question: "What kind of music do you listen to?", translation: "Que tipo de música você escuta?" },
        { question: "Do you have a favorite hobby?", translation: "Você tem um hobby favorito?" },
        { question: "Do you ever paint pictures?", translation: "Você costuma pintar quadros?" },
        { question: "Do you write in a journal?", translation: "Você escreve em um diário?" }
      ],
      part2: [
        { question: "Do you play any video games?", translation: "Você joga algum videogame?" },
        { question: "Do you prefer to travel to the beach or the mountains?", translation: "Você prefere viajar para a praia ou para as montanhas?" },
        { question: "Have you ever gone camping?", translation: "Você já foi acampar?" },
        { question: "Do you like taking photos of nature?", translation: "Você gosta de tirar fotos da natureza?" },
        { question: "Do you know how to play the guitar?", translation: "Você sabe tocar violão?" },
        { question: "Do you ever go fishing on the weekends?", translation: "Você costuma pescar nos fins de semana?" },
        { question: "Do you prefer to cook or garden?", translation: "Você prefere cozinhar ou cuidar do jardim?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "I read a book every night.", portuguese: "Eu leio um livro toda noite." }, { english: "She likes to paint landscapes.", portuguese: "Ela gosta de pintar paisagens." }, { english: "We go out to dance on Fridays.", portuguese: "Nós saímos para dançar às sextas." }, { english: "Cooking new recipes is fun.", portuguese: "Cozinhar novas receitas é divertido." }, { english: "He collects old coins.", portuguese: "Ele coleciona moedas antigas." }, { english: "I workout at the gym daily.", portuguese: "Eu malho na academia diariamente." } ],
                    level2: [ { english: "She read an inspiring book during her vacation.", portuguese: "Ela leu um livro inspirador durante suas férias." }, { english: "He painted a stunning landscape using watercolors.", portuguese: "Ele pintou uma paisagem deslumbrante usando aquarelas." }, { english: "We danced all night at the wedding reception.", portuguese: "Nós dançamos a noite toda na festa de casamento." }, { english: "She cooked a special dinner for her anniversary.", portuguese: "Ela cozinhou um jantar especial para o seu aniversário." }, { english: "He collected rare coins from different countries.", portuguese: "Ele colecionava moedas raras de diferentes países." }, { english: "She worked out at the gym every morning.", portuguese: "Ela malhava na academia toda manhã." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Read a book means Ler um livro.", statementPt: "Read a book significa Ler um livro.", isTrue: true, explanation: "Yes, Read a book means Ler um livro." }, { statement: "Play guitar means a type of car.", statementPt: "Play guitar significa um tipo de carro.", isTrue: false, explanation: "No, Play guitar means Tocar violão." }, { statement: "Listen to music means Ouvir música.", statementPt: "Listen to music significa Ouvir música.", isTrue: true, explanation: "Yes, Listen to music means Ouvir música." }, { statement: "Watch movies means a type of car.", statementPt: "Watch movies significa um tipo de carro.", isTrue: false, explanation: "No, Watch movies means Assistir a filmes." }, { statement: "Draw / Paint means Desenhar / Pintar.", statementPt: "Draw / Paint significa Desenhar / Pintar.", isTrue: true, explanation: "Yes, Draw / Paint means Desenhar / Pintar." }, { statement: "Travel means a type of car.", statementPt: "Travel significa um tipo de carro.", isTrue: false, explanation: "No, Travel means Viajar." }, { statement: "Play video games means Jogar videogame.", statementPt: "Play video games significa Jogar videogame.", isTrue: true, explanation: "Yes, Play video games means Jogar videogame." }, { statement: "Take photos means a type of car.", statementPt: "Take photos significa um tipo de carro.", isTrue: false, explanation: "No, Take photos means Tirar fotos." }, { statement: "Dance means Dançar.", statementPt: "Dance significa Dançar.", isTrue: true, explanation: "Yes, Dance means Dançar." }, { statement: "Sing means a type of car.", statementPt: "Sing significa um tipo de carro.", isTrue: false, explanation: "No, Sing means Cantar." } ],
                    part2: [ { statement: "Cook means Cozinhar.", statementPt: "Cook significa Cozinhar.", isTrue: true, explanation: "Yes, Cook means Cozinhar." }, { statement: "Go hiking means a type of car.", statementPt: "Go hiking significa um tipo de carro.", isTrue: false, explanation: "No, Go hiking means Fazer trilha." }, { statement: "Camp means Acampar.", statementPt: "Camp significa Acampar.", isTrue: true, explanation: "Yes, Camp means Acampar." }, { statement: "Knit means a type of car.", statementPt: "Knit significa um tipo de carro.", isTrue: false, explanation: "No, Knit means Tricotar." }, { statement: "Collect means Colecionar.", statementPt: "Collect significa Colecionar.", isTrue: true, explanation: "Yes, Collect means Colecionar." }, { statement: "Write means a type of car.", statementPt: "Write significa um tipo de carro.", isTrue: false, explanation: "No, Write means Escrever." }, { statement: "Garden means Jardinar.", statementPt: "Garden significa Jardinar.", isTrue: true, explanation: "Yes, Garden means Jardinar." }, { statement: "Surf the internet means a type of car.", statementPt: "Surf the internet significa um tipo de carro.", isTrue: false, explanation: "No, Surf the internet means Navegar na internet." }, { statement: "Workout means Malhar.", statementPt: "Workout significa Malhar.", isTrue: true, explanation: "Yes, Workout means Malhar." }, { statement: "Play board games means a type of car.", statementPt: "Play board games significa um tipo de carro.", isTrue: false, explanation: "No, Play board games means Jogar jogos de tabuleiro." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Read a book\" in a sentence in the past simple?", translation: "Você consegue usar \"Read a book\" em uma frase no passado simples?" }, { question: "Can you use \"Play guitar\" in a sentence in the past simple?", translation: "Você consegue usar \"Play guitar\" em uma frase no passado simples?" }, { question: "Can you use \"Listen to music\" in a sentence in the past simple?", translation: "Você consegue usar \"Listen to music\" em uma frase no passado simples?" }, { question: "Can you use \"Watch movies\" in a sentence in the past simple?", translation: "Você consegue usar \"Watch movies\" em uma frase no passado simples?" }, { question: "Can you use \"Draw / Paint\" in a sentence in the past simple?", translation: "Você consegue usar \"Draw / Paint\" em uma frase no passado simples?" }, { question: "Can you use \"Travel\" in a sentence in the past simple?", translation: "Você consegue usar \"Travel\" em uma frase no passado simples?" }, { question: "Can you use \"Play video games\" in a sentence in the past simple?", translation: "Você consegue usar \"Play video games\" em uma frase no passado simples?" }, { question: "Can you use \"Take photos\" in a sentence in the past simple?", translation: "Você consegue usar \"Take photos\" em uma frase no passado simples?" }, { question: "Can you use \"Dance\" in a sentence in the past simple?", translation: "Você consegue usar \"Dance\" em uma frase no passado simples?" }, { question: "Can you use \"Sing\" in a sentence in the past simple?", translation: "Você consegue usar \"Sing\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Cook\" in a sentence in the past simple?", translation: "Você consegue usar \"Cook\" em uma frase no passado simples?" }, { question: "Can you use \"Go hiking\" in a sentence in the past simple?", translation: "Você consegue usar \"Go hiking\" em uma frase no passado simples?" }, { question: "Can you use \"Camp\" in a sentence in the past simple?", translation: "Você consegue usar \"Camp\" em uma frase no passado simples?" }, { question: "Can you use \"Knit\" in a sentence in the past simple?", translation: "Você consegue usar \"Knit\" em uma frase no passado simples?" }, { question: "Can you use \"Collect\" in a sentence in the past simple?", translation: "Você consegue usar \"Collect\" em uma frase no passado simples?" }, { question: "Can you use \"Write\" in a sentence in the past simple?", translation: "Você consegue usar \"Write\" em uma frase no passado simples?" }, { question: "Can you use \"Garden\" in a sentence in the past simple?", translation: "Você consegue usar \"Garden\" em uma frase no passado simples?" }, { question: "Can you use \"Surf the internet\" in a sentence in the past simple?", translation: "Você consegue usar \"Surf the internet\" em uma frase no passado simples?" }, { question: "Can you use \"Workout\" in a sentence in the past simple?", translation: "Você consegue usar \"Workout\" em uma frase no passado simples?" }, { question: "Can you use \"Play board games\" in a sentence in the past simple?", translation: "Você consegue usar \"Play board games\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "esportes",
    title: "Sports",
    titlePt: "Esportes",
    description: "Learn sports vocabulary and game expressions.",
    descriptionPt: "Aprenda vocabulário de esportes e expressões de jogo.",
    icon: "Trophy",
    image: "/images/esportes.png",
    color: "orange",
    available: true,
    vocabulary: [
      { english: "Soccer / Football", portuguese: "Futebol",
          levels: { 
                        A1: { en: "Brazil loves soccer.", pt: "O Brasil ama futebol." }, 
                        A2: { en: "Brazil loves soccer.", pt: "O Brasil ama futebol." }, 
                        B1: { en: "He played professional soccer for ten years.", pt: "Ele jogou futebol profissional por dez anos." } 
                      }
    },
      { english: "Basketball", portuguese: "Basquete",
          levels: { 
                        A1: { en: "Michael Jordan played basketball.", pt: "Michael Jordan jogou basquete." }, 
                        A2: { en: "Michael Jordan played basketball.", pt: "Michael Jordan jogou basquete." }, 
                        B1: { en: "They practiced basketball every day after school.", pt: "Eles praticavam basquete todo dia depois da escola." } 
                      }
    },
      { english: "Swim", portuguese: "Nadar / Natação",
          levels: { 
                        A1: { en: "I swim in the ocean.", pt: "Eu nado no oceano." }, 
                        A2: { en: "I swim in the ocean.", pt: "Eu nado no oceano." }, 
                        B1: { en: "She swam in the ocean during her vacation.", pt: "Ela nadou no oceano durante suas férias." } 
                      }
    },
      { english: "Run", portuguese: "Correr",
          levels: { 
                        A1: { en: "He runs 5km every morning.", pt: "Ele corre 5km toda manhã." }, 
                        A2: { en: "He runs 5km every morning.", pt: "Ele corre 5km toda manhã." }, 
                        B1: { en: "He ran a marathon in under four hours.", pt: "Ele correu uma maratona em menos de quatro horas." } 
                      }
    },
      { english: "Team", portuguese: "Time / Equipe",
          levels: { 
                        A1: { en: "Our team is the best.", pt: "Nosso time é o melhor." }, 
                        A2: { en: "Our team is the best.", pt: "Nosso time é o melhor." }, 
                        B1: { en: "Our team won the championship last year.", pt: "Nosso time venceu o campeonato no ano passado." } 
                      }
    },
      { english: "Match / Game", portuguese: "Partida / Jogo",
          levels: { 
                        A1: { en: "Did you watch the match?", pt: "Você assistiu à partida?" }, 
                        A2: { en: "Did you watch the match?", pt: "Você assistiu à partida?" }, 
                        B1: { en: "The intense match ended in a tie.", pt: "A partida intensa terminou em empate." } 
                      }
    },
      { english: "Win", portuguese: "Vencer / Ganhar",
          levels: { 
                        A1: { en: "We want to win the cup.", pt: "Nós queremos vencer a copa." }, 
                        A2: { en: "We want to win the cup.", pt: "Nós queremos vencer a copa." }, 
                        B1: { en: "They won the gold medal at the Olympics.", pt: "Eles venceram a medalha de ouro nas Olimpíadas." } 
                      }
    },
      { english: "Lose", portuguese: "Perder",
          levels: { 
                        A1: { en: "Dont be sad if we lose.", pt: "Não fique triste se nós perdermos." }, 
                        A2: { en: "Dont be sad if we lose.", pt: "Não fique triste se nós perdermos." }, 
                        B1: { en: "Unfortunately, he lost the important tennis match.", pt: "Infelizmente, ele perdeu a importante partida de tênis." } 
                      }
    },
      { english: "Ball", portuguese: "Bola",
          levels: { 
                        A1: { en: "Pass the ball to me!", pt: "Passe a bola para mim!" }, 
                        A2: { en: "Pass the ball to me!", pt: "Passe a bola para mim!" }, 
                        B1: { en: "He threw the ball accurately across the field.", pt: "Ele jogou a bola com precisão pelo campo." } 
                      }
    },
      { english: "Stadium", portuguese: "Estádio",
          levels: { 
                        A1: { en: "The stadium is full of fans.", pt: "O estádio está cheio de fãs." }, 
                        A2: { en: "The stadium is full of fans.", pt: "O estádio está cheio de fãs." }, 
                        B1: { en: "Thousands of fans cheered in the crowded stadium.", pt: "Milhares de torcedores comemoraram no estádio lotado." } 
                      }
    },
      { english: "Tennis", portuguese: "Tênis",
          levels: { 
                        A1: { en: "She plays tennis on weekends.", pt: "Ela joga tênis nos fins de semana." }, 
                        A2: { en: "She plays tennis on weekends.", pt: "Ela joga tênis nos fins de semana." }, 
                        B1: { en: "She played tennis with her brother yesterday.", pt: "Ela jogou tênis com seu irmão ontem." } 
                      }
    },
      { english: "Volleyball", portuguese: "Vôlei",
          levels: { 
                        A1: { en: "They are playing volleyball on the beach.", pt: "Eles estão jogando vôlei na praia." }, 
                        A2: { en: "They are playing volleyball on the beach.", pt: "Eles estão jogando vôlei na praia." }, 
                        B1: { en: "We played volleyball on the beach until sunset.", pt: "Nós jogamos vôlei na praia até o pôr do sol." } 
                      }
    },
      { english: "Cycling", portuguese: "Ciclismo",
          levels: { 
                        A1: { en: "Cycling is good for your health.", pt: "O ciclismo é bom para a sua saúde." }, 
                        A2: { en: "Cycling is good for your health.", pt: "O ciclismo é bom para a sua saúde." }, 
                        B1: { en: "He participated in a cycling race across the mountains.", pt: "Ele participou de uma corrida de ciclismo pelas montanhas." } 
                      }
    },
      { english: "Gym", portuguese: "Academia",
          levels: { 
                        A1: { en: "I go to the gym to get stronger.", pt: "Eu vou à academia para ficar mais forte." }, 
                        A2: { en: "I go to the gym to get stronger.", pt: "Eu vou à academia para ficar mais forte." }, 
                        B1: { en: "She went to the gym to lift heavy weights.", pt: "Ela foi à academia para levantar pesos pesados." } 
                      }
    },
      { english: "Coach", portuguese: "Treinador",
          levels: { 
                        A1: { en: "The coach is yelling at the players.", pt: "O treinador está gritando com os jogadores." }, 
                        A2: { en: "The coach is yelling at the players.", pt: "O treinador está gritando com os jogadores." }, 
                        B1: { en: "The coach pushed the athletes to their limits.", pt: "O treinador levou os atletas aos seus limites." } 
                      }
    },
      { english: "Referee", portuguese: "Juiz / Árbitro",
          levels: { 
                        A1: { en: "The referee blew the whistle.", pt: "O árbitro soprou o apito." }, 
                        A2: { en: "The referee blew the whistle.", pt: "O árbitro soprou o apito." }, 
                        B1: { en: "The referee penalized the player for aggressive behavior.", pt: "O árbitro penalizou o jogador por comportamento agressivo." } 
                      }
    },
      { english: "Score", portuguese: "Placar / Marcar ponto",
          levels: { 
                        A1: { en: "He scored a beautiful goal.", pt: "Ele marcou um gol lindo." }, 
                        A2: { en: "He scored a beautiful goal.", pt: "Ele marcou um gol lindo." }, 
                        B1: { en: "They checked the score at the end of the game.", pt: "Eles verificaram o placar no final do jogo." } 
                      }
    },
      { english: "Tournament", portuguese: "Torneio",
          levels: { 
                        A1: { en: "We are in the final tournament.", pt: "Nós estamos no torneio final." }, 
                        A2: { en: "We are in the final tournament.", pt: "Nós estamos no torneio final." }, 
                        B1: { en: "She entered a prestigious chess tournament last month.", pt: "Ela entrou em um torneio de xadrez de prestígio no mês passado." } 
                      }
    },
      { english: "Medal", portuguese: "Medalha",
          levels: { 
                        A1: { en: "She won a gold medal.", pt: "Ela ganhou uma medalha de ouro." }, 
                        A2: { en: "She won a gold medal.", pt: "Ela ganhou uma medalha de ouro." }, 
                        B1: { en: "He proudly displayed his silver medal.", pt: "Ele exibiu orgulhosamente sua medalha de prata." } 
                      }
    },
      { english: "Player", portuguese: "Jogador(a)",
          levels: { 
                        A1: { en: "He is the best player on the team.", pt: "Ele é o melhor jogador do time." }, 
                        A2: { en: "He is the best player on the team.", pt: "Ele é o melhor jogador do time." }, 
                        B1: { en: "The professional player signed a new contract.", pt: "O jogador profissional assinou um novo contrato." } 
                      }
    },
    ],
    dialogue: [
      { speaker: "Alex", english: "Did you watch the soccer game last night?", portuguese: "Você assistiu ao jogo de futebol ontem à noite?", isPrimary: true },
      { speaker: "Ben", english: "Yes! It was a great match. Our team played well.", portuguese: "Sim! Foi uma ótima partida. Nosso time jogou bem.", isPrimary: false },
      { speaker: "Alex", english: "I was so happy when we won. The score was 3-1.", portuguese: "Fiquei tão feliz quando nós ganhamos. O placar foi 3 a 1.", isPrimary: true },
      { speaker: "Ben", english: "Me too. The stadium was crazy! Did you see the coach?", portuguese: "Eu também. O estádio estava uma loucura! Você viu o treinador?", isPrimary: false },
      { speaker: "Alex", english: "He was jumping! Anyway, do you want to play basketball tomorrow?", portuguese: "Ele estava pulando! Enfim, você quer jogar basquete amanhã?", isPrimary: true },
      { speaker: "Ben", english: "I can't, I am going to swim.", portuguese: "Eu não posso, eu vou nadar.", isPrimary: false },
      { speaker: "Alex", english: "Ah, swimming is a great exercise. Where do you swim?", portuguese: "Ah, nadar é um ótimo exercício. Onde você nada?", isPrimary: true },
      { speaker: "Ben", english: "At the new gym downtown. They have an Olympic pool.", portuguese: "Na nova academia no centro. Eles têm uma piscina olímpica.", isPrimary: false },
      { speaker: "Alex", english: "Wow, that is nice. Maybe I will join you next week.", portuguese: "Uau, isso é legal. Talvez eu me junte a você na próxima semana.", isPrimary: true },
      { speaker: "Ben", english: "You should! Swimming is very relaxing after a long day.", portuguese: "Você deveria! Nadar é muito relaxante depois de um longo dia.", isPrimary: false },
    ],
    flashcards: [
      { english: "I play soccer every week.", portuguese: "Eu jogo futebol toda semana." },
      { english: "She is a fast runner.", portuguese: "Ela é uma corredora rápida." },
      { english: "He plays basketball.", portuguese: "Ele joga basquete." },
      { english: "I like to swim in the pool.", portuguese: "Eu gosto de nadar na piscina." },
      { english: "Our team won the match.", portuguese: "Nosso time venceu a partida." },
      { english: "Did you watch the game?", portuguese: "Você assistiu ao jogo?" },
      { english: "The score is tied.", portuguese: "O placar está empatado." },
      { english: "He is a famous tennis player.", portuguese: "Ele é um jogador de tênis famoso." },
      { english: "They won the gold medal.", portuguese: "Eles ganharam a medalha de ouro." },
      { english: "I need to go to the gym.", portuguese: "Eu preciso ir para a academia." },
      { english: "The referee stopped the game.", portuguese: "O árbitro parou o jogo." },
      { english: "She is the team coach.", portuguese: "Ela é a treinadora do time." },
    ],
    quiz: [
      { question: 'What is the American English word for "Futebol"?', options: ["Football", "Soccer", "Rugby", "Handball"], correctIndex: 1, explanation: 'In the US, it is called "Soccer", while in the UK it is "Football".' },
      { question: 'Translate "Nosso time".', options: ["Our game", "Our player", "Our team", "Our match"], correctIndex: 2, explanation: '"Time" is "Team" in English.' },
      { question: 'What sport is played in a pool?', options: ["Basketball", "Running", "Soccer", "Swimming"], correctIndex: 3, explanation: '"Swimming" is done in a pool.' },
      { question: 'What is the opposite of "Win"?', options: ["Draw", "Lose", "Play", "Run"], correctIndex: 1, explanation: 'The opposite of Win (Vencer) is Lose (Perder).' },
      { question: 'How do you say "Estádio" in English?', options: ["Field", "Court", "Stadium", "Gym"], correctIndex: 2, explanation: '"Estádio" is Stadium.' },
      { question: 'Translate "Bola".', options: ["Goal", "Net", "Bat", "Ball"], correctIndex: 3, explanation: '"Bola" is Ball.' },
      { question: 'Complete: "He likes to _____ 10 kilometers every day."', options: ["swim", "run", "play", "win"], correctIndex: 1, explanation: 'You run (correr) distances like kilometers.' },
      { question: 'Which word means "Partida"?', options: ["Match", "Team", "Player", "Score"], correctIndex: 0, explanation: '"Match" or "Game" mean Partida/Jogo.' },
      { question: 'How do you ask "Você ganhou?"', options: ["Did you lose?", "Did you play?", "Did you win?", "Did you run?"], correctIndex: 2, explanation: '"Win" means ganhar/vencer.' },
      { question: 'What sport uses a large orange ball and a hoop?', options: ["Soccer", "Tennis", "Basketball", "Golf"], correctIndex: 2, explanation: 'Basketball uses an orange ball thrown into a hoop.' },
    ],
    trueOrFalse: {
      part1: [
        { statement: "You need a ball to play swimming.", statementPt: "Você precisa de uma bola para jogar natação.", isTrue: false, explanation: "Swimming (natação) is done in the water without a ball." },
      { statement: "A coach helps the players to improve.", statementPt: "Um treinador ajuda os jogadores a melhorar.", isTrue: true, explanation: "Coach means treinador." },
      { statement: "If you score a goal in soccer, you get points.", statementPt: "Se você marcar um gol no futebol, você ganha pontos.", isTrue: true, explanation: "Score means marcar pontos/gols." },
      { statement: "A stadium is usually a small room.", statementPt: "Um estádio é geralmente um quarto pequeno.", isTrue: false, explanation: "A stadium (estádio) is a very large place for many people." },
      { statement: "The referee controls the game.", statementPt: "O árbitro controla o jogo.", isTrue: true, explanation: "Referee means árbitro/juiz." },
        { statement: "The coach helps the players train.", statementPt: "O treinador ajuda os jogadores a treinar.", isTrue: true, explanation: "Coach means treinador." }
      ],
      part2: [
        { statement: "Soccer is played with the hands.", statementPt: "Futebol é jogado com as mãos.", isTrue: false, explanation: "Soccer is played mainly with the feet." },
        { statement: "You swim in a pool.", statementPt: "Você nada em uma piscina.", isTrue: true, explanation: "Swimming means natação/nadar." },
        { statement: "Tennis is played with a racket.", statementPt: "Tênis é jogado com uma raquete.", isTrue: true, explanation: "Tennis is a sport with rackets." },
        { statement: "To jump means to stay close to the ground.", statementPt: "Pular significa ficar perto do chão.", isTrue: false, explanation: "Jump means ir para o ar, pular." },
        { statement: "When you catch a ball, you grab it with your hands.", statementPt: "Quando você pega/agarra uma bola, você a segura com as mãos.", isTrue: true, explanation: "Catch means pegar/agarrar." },
        { statement: "You throw the ball to pass it.", statementPt: "Você arremessa a bola para passá-la.", isTrue: true, explanation: "Throw means arremessar/jogar." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "What is your favorite sport?", translation: "Qual é o seu esporte favorito?" },
        { question: "Do you play on any team?", translation: "Você joga em algum time?" },
        { question: "Are you a big fan of a specific player?", translation: "Você é muito fã de um jogador específico?" },
        { question: "Do you prefer to win or is playing more important?", translation: "Você prefere ganhar ou jogar é mais importante?" },
        { question: "Do you feel sad when your team loses?", translation: "Você se sente triste quando o seu time perde?" },
        { question: "Do you watch sports matches on TV?", translation: "Você assiste partidas de esportes na TV?" },
        { question: "Are you a fan of any famous player?", translation: "Você é fã de algum jogador famoso?" }
      ],
      part2: [
        { question: "Do you like to watch soccer games?", translation: "Você gosta de assistir jogos de futebol?" },
        { question: "Can you swim?", translation: "Você sabe nadar?" },
        { question: "How often do you run or jump?", translation: "Com que frequência você corre ou pula?" },
        { question: "Have you ever played tennis?", translation: "Você já jogou tênis?" },
        { question: "Can you throw a ball very far?", translation: "Você consegue jogar uma bola muito longe?" },
        { question: "Have you ever played volleyball?", translation: "Você já jogou vôlei?" },
        { question: "Do you know how to kick a ball properly?", translation: "Você sabe chutar uma bola corretamente?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "Brazil loves soccer.", portuguese: "O Brasil ama futebol." }, { english: "Our team is the best.", portuguese: "Nosso time é o melhor." }, { english: "Pass the ball to me!", portuguese: "Passe a bola para mim!" }, { english: "She plays tennis on weekends.", portuguese: "Ela joga tênis nos fins de semana." }, { english: "The coach is yelling at the players.", portuguese: "O treinador está gritando com os jogadores." }, { english: "She won a gold medal.", portuguese: "Ela ganhou uma medalha de ouro." } ],
                    level2: [ { english: "He played professional soccer for ten years.", portuguese: "Ele jogou futebol profissional por dez anos." }, { english: "Our team won the championship last year.", portuguese: "Nosso time venceu o campeonato no ano passado." }, { english: "He threw the ball accurately across the field.", portuguese: "Ele jogou a bola com precisão pelo campo." }, { english: "She played tennis with her brother yesterday.", portuguese: "Ela jogou tênis com seu irmão ontem." }, { english: "The coach pushed the athletes to their limits.", portuguese: "O treinador levou os atletas aos seus limites." }, { english: "He proudly displayed his silver medal.", portuguese: "Ele exibiu orgulhosamente sua medalha de prata." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Soccer / Football means Futebol.", statementPt: "Soccer / Football significa Futebol.", isTrue: true, explanation: "Yes, Soccer / Football means Futebol." }, { statement: "Basketball means a type of car.", statementPt: "Basketball significa um tipo de carro.", isTrue: false, explanation: "No, Basketball means Basquete." }, { statement: "Swim means Nadar / Natação.", statementPt: "Swim significa Nadar / Natação.", isTrue: true, explanation: "Yes, Swim means Nadar / Natação." }, { statement: "Run means a type of car.", statementPt: "Run significa um tipo de carro.", isTrue: false, explanation: "No, Run means Correr." }, { statement: "Team means Time / Equipe.", statementPt: "Team significa Time / Equipe.", isTrue: true, explanation: "Yes, Team means Time / Equipe." }, { statement: "Match / Game means a type of car.", statementPt: "Match / Game significa um tipo de carro.", isTrue: false, explanation: "No, Match / Game means Partida / Jogo." }, { statement: "Win means Vencer / Ganhar.", statementPt: "Win significa Vencer / Ganhar.", isTrue: true, explanation: "Yes, Win means Vencer / Ganhar." }, { statement: "Lose means a type of car.", statementPt: "Lose significa um tipo de carro.", isTrue: false, explanation: "No, Lose means Perder." }, { statement: "Ball means Bola.", statementPt: "Ball significa Bola.", isTrue: true, explanation: "Yes, Ball means Bola." }, { statement: "Stadium means a type of car.", statementPt: "Stadium significa um tipo de carro.", isTrue: false, explanation: "No, Stadium means Estádio." } ],
                    part2: [ { statement: "Tennis means Tênis.", statementPt: "Tennis significa Tênis.", isTrue: true, explanation: "Yes, Tennis means Tênis." }, { statement: "Volleyball means a type of car.", statementPt: "Volleyball significa um tipo de carro.", isTrue: false, explanation: "No, Volleyball means Vôlei." }, { statement: "Cycling means Ciclismo.", statementPt: "Cycling significa Ciclismo.", isTrue: true, explanation: "Yes, Cycling means Ciclismo." }, { statement: "Gym means a type of car.", statementPt: "Gym significa um tipo de carro.", isTrue: false, explanation: "No, Gym means Academia." }, { statement: "Coach means Treinador.", statementPt: "Coach significa Treinador.", isTrue: true, explanation: "Yes, Coach means Treinador." }, { statement: "Referee means a type of car.", statementPt: "Referee significa um tipo de carro.", isTrue: false, explanation: "No, Referee means Juiz / Árbitro." }, { statement: "Score means Placar / Marcar ponto.", statementPt: "Score significa Placar / Marcar ponto.", isTrue: true, explanation: "Yes, Score means Placar / Marcar ponto." }, { statement: "Tournament means a type of car.", statementPt: "Tournament significa um tipo de carro.", isTrue: false, explanation: "No, Tournament means Torneio." }, { statement: "Medal means Medalha.", statementPt: "Medal significa Medalha.", isTrue: true, explanation: "Yes, Medal means Medalha." }, { statement: "Player means a type of car.", statementPt: "Player significa um tipo de carro.", isTrue: false, explanation: "No, Player means Jogador(a)." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Soccer / Football\" in a sentence in the past simple?", translation: "Você consegue usar \"Soccer / Football\" em uma frase no passado simples?" }, { question: "Can you use \"Basketball\" in a sentence in the past simple?", translation: "Você consegue usar \"Basketball\" em uma frase no passado simples?" }, { question: "Can you use \"Swim\" in a sentence in the past simple?", translation: "Você consegue usar \"Swim\" em uma frase no passado simples?" }, { question: "Can you use \"Run\" in a sentence in the past simple?", translation: "Você consegue usar \"Run\" em uma frase no passado simples?" }, { question: "Can you use \"Team\" in a sentence in the past simple?", translation: "Você consegue usar \"Team\" em uma frase no passado simples?" }, { question: "Can you use \"Match / Game\" in a sentence in the past simple?", translation: "Você consegue usar \"Match / Game\" em uma frase no passado simples?" }, { question: "Can you use \"Win\" in a sentence in the past simple?", translation: "Você consegue usar \"Win\" em uma frase no passado simples?" }, { question: "Can you use \"Lose\" in a sentence in the past simple?", translation: "Você consegue usar \"Lose\" em uma frase no passado simples?" }, { question: "Can you use \"Ball\" in a sentence in the past simple?", translation: "Você consegue usar \"Ball\" em uma frase no passado simples?" }, { question: "Can you use \"Stadium\" in a sentence in the past simple?", translation: "Você consegue usar \"Stadium\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Tennis\" in a sentence in the past simple?", translation: "Você consegue usar \"Tennis\" em uma frase no passado simples?" }, { question: "Can you use \"Volleyball\" in a sentence in the past simple?", translation: "Você consegue usar \"Volleyball\" em uma frase no passado simples?" }, { question: "Can you use \"Cycling\" in a sentence in the past simple?", translation: "Você consegue usar \"Cycling\" em uma frase no passado simples?" }, { question: "Can you use \"Gym\" in a sentence in the past simple?", translation: "Você consegue usar \"Gym\" em uma frase no passado simples?" }, { question: "Can you use \"Coach\" in a sentence in the past simple?", translation: "Você consegue usar \"Coach\" em uma frase no passado simples?" }, { question: "Can you use \"Referee\" in a sentence in the past simple?", translation: "Você consegue usar \"Referee\" em uma frase no passado simples?" }, { question: "Can you use \"Score\" in a sentence in the past simple?", translation: "Você consegue usar \"Score\" em uma frase no passado simples?" }, { question: "Can you use \"Tournament\" in a sentence in the past simple?", translation: "Você consegue usar \"Tournament\" em uma frase no passado simples?" }, { question: "Can you use \"Medal\" in a sentence in the past simple?", translation: "Você consegue usar \"Medal\" em uma frase no passado simples?" }, { question: "Can you use \"Player\" in a sentence in the past simple?", translation: "Você consegue usar \"Player\" em uma frase no passado simples?" } ]
                  }
},
  {
    id: "supermercado",
    title: "Supermarket",
    titlePt: "Supermercado",
    description: "Navigate the supermarket and do your grocery shopping.",
    descriptionPt: "Navegue pelo supermercado e faça suas compras.",
    icon: "ShoppingCart",
    image: "/images/supermercado.png",
    color: "emerald",
    available: true,
    vocabulary: [
      { english: "Shopping cart", portuguese: "Carrinho de compras",
          levels: { 
                        A1: { en: "Get a shopping cart, please.", pt: "Pegue um carrinho, por favor." }, 
                        A2: { en: "Get a shopping cart, please.", pt: "Pegue um carrinho, por favor." }, 
                        B1: { en: "He pushed the heavy shopping cart down the aisle.", pt: "Ele empurrou o carrinho de compras pesado pelo corredor." } 
                      }
    },
      { english: "Cashier", portuguese: "Caixa (pessoa)",
          levels: { 
                        A1: { en: "The cashier is very friendly.", pt: "O(a) caixa é muito amigável." }, 
                        A2: { en: "The cashier is very friendly.", pt: "O(a) caixa é muito amigável." }, 
                        B1: { en: "The friendly cashier scanned all the items quickly.", pt: "O caixa amigável escaneou todos os itens rapidamente." } 
                      }
    },
      { english: "Aisle", portuguese: "Corredor",
          levels: { 
                        A1: { en: "Milk is in aisle four.", pt: "O leite está no corredor quatro." }, 
                        A2: { en: "Milk is in aisle four.", pt: "O leite está no corredor quatro." }, 
                        B1: { en: "She walked down the dairy aisle to find milk.", pt: "Ela andou pelo corredor de laticínios para encontrar leite." } 
                      }
    },
      { english: "Receipt", portuguese: "Recibo / Nota fiscal",
          levels: { 
                        A1: { en: "Do you need the receipt?", pt: "Você precisa da nota fiscal?" }, 
                        A2: { en: "Do you need the receipt?", pt: "Você precisa da nota fiscal?" }, 
                        B1: { en: "He kept the receipt to track his expenses.", pt: "Ele guardou o recibo para rastrear suas despesas." } 
                      }
    },
      { english: "Grocery list", portuguese: "Lista de compras",
          levels: { 
                        A1: { en: "I forgot my grocery list.", pt: "Esqueci minha lista de compras." }, 
                        A2: { en: "I forgot my grocery list.", pt: "Esqueci minha lista de compras." }, 
                        B1: { en: "I wrote a grocery list before I went shopping.", pt: "Eu escrevi uma lista de compras antes de ir às compras." } 
                      }
    },
      { english: "Checkout", portuguese: "Caixa (pagamento)",
          levels: { 
                        A1: { en: "Lets go to the checkout.", pt: "Vamos para o caixa." }, 
                        A2: { en: "Lets go to the checkout.", pt: "Vamos para o caixa." }, 
                        B1: { en: "She paid for her groceries at the checkout.", pt: "Ela pagou por suas compras no caixa (checkout)." } 
                      }
    },
      { english: "Bag", portuguese: "Sacola",
          levels: { 
                        A1: { en: "I brought my own bags.", pt: "Eu trouxe minhas próprias sacolas." }, 
                        A2: { en: "I brought my own bags.", pt: "Eu trouxe minhas próprias sacolas." }, 
                        B1: { en: "He carried the heavy bag of apples to the car.", pt: "Ele carregou a sacola pesada de maçãs até o carro." } 
                      }
    },
      { english: "Price", portuguese: "Preço",
          levels: { 
                        A1: { en: "What is the price of this?", pt: "Qual é o preço disso?" }, 
                        A2: { en: "What is the price of this?", pt: "Qual é o preço disso?" }, 
                        B1: { en: "She checked the price before adding the item to her cart.", pt: "Ela verificou o preço antes de adicionar o item ao seu carrinho." } 
                      }
    },
      { english: "Discount", portuguese: "Desconto",
          levels: { 
                        A1: { en: "There is a 50% discount.", pt: "Há um desconto de 50%." }, 
                        A2: { en: "There is a 50% discount.", pt: "Há um desconto de 50%." }, 
                        B1: { en: "They offered a huge discount on fresh vegetables.", pt: "Eles ofereceram um enorme desconto em vegetais frescos." } 
                      }
    },
      { english: "Pay", portuguese: "Pagar",
          levels: { 
                        A1: { en: "I will pay with cash.", pt: "Vou pagar em dinheiro." }, 
                        A2: { en: "I will pay with cash.", pt: "Vou pagar em dinheiro." }, 
                        B1: { en: "He paid the cashier and left the store.", pt: "Ele pagou ao caixa e saiu da loja." } 
                      }
    },
      { english: "Credit card", portuguese: "Cartão de crédito",
          levels: { 
                        A1: { en: "Do you accept credit cards?", pt: "Vocês aceitam cartões de crédito?" }, 
                        A2: { en: "Do you accept credit cards?", pt: "Vocês aceitam cartões de crédito?" }, 
                        B1: { en: "She used her credit card to buy expensive groceries.", pt: "Ela usou seu cartão de crédito para comprar mantimentos caros." } 
                      }
    },
      { english: "Cash", portuguese: "Dinheiro (espécie)",
          levels: { 
                        A1: { en: "I dont have enough cash.", pt: "Eu não tenho dinheiro suficiente." }, 
                        A2: { en: "I dont have enough cash.", pt: "Eu não tenho dinheiro suficiente." }, 
                        B1: { en: "He always paid in cash to control his budget.", pt: "Ele sempre pagava em dinheiro para controlar seu orçamento." } 
                      }
    },
      { english: "Change", portuguese: "Troco",
          levels: { 
                        A1: { en: "Keep the change.", pt: "Fique com o troco." }, 
                        A2: { en: "Keep the change.", pt: "Fique com o troco." }, 
                        B1: { en: "The cashier gave him the correct change.", pt: "O caixa deu a ele o troco correto." } 
                      }
    },
      { english: "Customer", portuguese: "Cliente",
          levels: { 
                        A1: { en: "There is a customer waiting.", pt: "Há um cliente esperando." }, 
                        A2: { en: "There is a customer waiting.", pt: "Há um cliente esperando." }, 
                        B1: { en: "The demanding customer asked to speak with the manager.", pt: "O cliente exigente pediu para falar com o gerente." } 
                      }
    },
      { english: "Shelf", portuguese: "Prateleira",
          levels: { 
                        A1: { en: "The sugar is on the top shelf.", pt: "O açúcar está na prateleira de cima." }, 
                        A2: { en: "The sugar is on the top shelf.", pt: "O açúcar está na prateleira de cima." }, 
                        B1: { en: "He grabbed the last box of cereal from the top shelf.", pt: "Ele pegou a última caixa de cereal da prateleira de cima." } 
                      }
    },
      { english: "Basket", portuguese: "Cesta de compras",
          levels: { 
                        A1: { en: "I only need a basket, not a cart.", pt: "Só preciso de uma cesta, não um carrinho." }, 
                        A2: { en: "I only need a basket, not a cart.", pt: "Só preciso de uma cesta, não um carrinho." }, 
                        B1: { en: "She carried a small basket because she only needed bread.", pt: "Ela carregou uma cesta pequena porque só precisava de pão." } 
                      }
    },
      { english: "Fresh", portuguese: "Fresco",
          levels: { 
                        A1: { en: "Are these vegetables fresh?", pt: "Estes vegetais estão frescos?" }, 
                        A2: { en: "Are these vegetables fresh?", pt: "Estes vegetais estão frescos?" }, 
                        B1: { en: "They bought fresh strawberries from the local market.", pt: "Eles compraram morangos frescos no mercado local." } 
                      }
    },
      { english: "Frozen", portuguese: "Congelado",
          levels: { 
                        A1: { en: "The frozen pizza is in aisle two.", pt: "A pizza congelada está no corredor dois." }, 
                        A2: { en: "The frozen pizza is in aisle two.", pt: "A pizza congelada está no corredor dois." }, 
                        B1: { en: "He bought frozen pizza for a quick dinner.", pt: "Ele comprou pizza congelada para um jantar rápido." } 
                      }
    },
      { english: "Bakery", portuguese: "Padaria (seção)",
          levels: { 
                        A1: { en: "I smell fresh bread from the bakery.", pt: "Sinto o cheiro de pão fresco da padaria." }, 
                        A2: { en: "I smell fresh bread from the bakery.", pt: "Sinto o cheiro de pão fresco da padaria." }, 
                        B1: { en: "The bakery sold delicious chocolate cakes yesterday.", pt: "A padaria vendeu bolos de chocolate deliciosos ontem." } 
                      }
    },
      { english: "Scale", portuguese: "Balança",
          levels: { 
                        A1: { en: "We need to weigh the fruits on the scale.", pt: "Precisamos pesar as frutas na balança." }, 
                        A2: { en: "We need to weigh the fruits on the scale.", pt: "Precisamos pesar as frutas na balança." }, 
                        B1: { en: "She weighed the bananas on the electronic scale.", pt: "Ela pesou as bananas na balança eletrônica." } 
                      }
    },
    ],
    dialogue: [
      { speaker: "Customer", english: "Excuse me, where can I find the milk?", portuguese: "Com licença, onde posso encontrar o leite?", isPrimary: true },
      { speaker: "Employee", english: "It's in aisle four, next to the eggs.", portuguese: "Fica no corredor quatro, perto dos ovos.", isPrimary: false },
      { speaker: "Customer", english: "Thank you. And where is the checkout?", portuguese: "Obrigado. E onde fica o caixa?", isPrimary: true },
      { speaker: "Employee", english: "It's right at the front of the store.", portuguese: "Fica bem na frente da loja.", isPrimary: false },
      { speaker: "Customer", english: "Great. Can I pay with a credit card?", portuguese: "Ótimo. Posso pagar com cartão de crédito?", isPrimary: true },
      { speaker: "Employee", english: "Yes, of course. Do you need any bags?", portuguese: "Sim, claro. Você precisa de sacolas?", isPrimary: false },
      { speaker: "Customer", english: "No, thanks. I brought my own.", portuguese: "Não, obrigado. Eu trouxe as minhas.", isPrimary: true },
      { speaker: "Employee", english: "Perfect. Have a good day!", portuguese: "Perfeito. Tenha um bom dia!", isPrimary: false },
      { speaker: "Customer", english: "Wait, one more question. Do you have fresh bread?", portuguese: "Espere, mais uma pergunta. Vocês têm pão fresco?", isPrimary: true },
      { speaker: "Employee", english: "Yes, our bakery is just around the corner.", portuguese: "Sim, nossa padaria é logo ali na esquina.", isPrimary: false },
      { speaker: "Customer", english: "Awesome! I will grab some bread before paying.", portuguese: "Incrível! Vou pegar um pão antes de pagar.", isPrimary: true },
      { speaker: "Employee", english: "Take your time! Let me know if you need help.", portuguese: "Vá no seu tempo! Me avise se precisar de ajuda.", isPrimary: false },
    ],
    flashcards: [
      { english: "Where is the dairy aisle?", portuguese: "Onde é o corredor de laticínios?" },
      { english: "I need a shopping cart.", portuguese: "Eu preciso de um carrinho." },
      { english: "How much does this cost?", portuguese: "Quanto custa isso?" },
      { english: "Can I pay with card?", portuguese: "Posso pagar com cartão?" },
      { english: "The checkout line is long.", portuguese: "A fila do caixa está longa." },
      { english: "Don't forget the receipt.", portuguese: "Não esqueça o recibo." },
      { english: "The vegetables are very fresh.", portuguese: "Os vegetais estão muito frescos." },
      { english: "I only have cash.", portuguese: "Eu só tenho dinheiro em espécie." },
      { english: "Here is your change.", portuguese: "Aqui está o seu troco." },
      { english: "Put the items in the basket.", portuguese: "Coloque os itens na cesta." },
      { english: "I am buying frozen food.", portuguese: "Estou comprando comida congelada." },
      { english: "It is on the bottom shelf.", portuguese: "Fica na prateleira de baixo." },
    ],
    quiz: [
      { question: 'What does "Shopping cart" mean?', options: ["Lista de compras", "Carrinho de compras", "Sacola", "Centro de compras"], correctIndex: 1, explanation: '"Shopping cart" means "Carrinho de compras".' },
      { question: 'How do you say "Corredor" in English?', options: ["Hall", "Aisle", "Lane", "Path"], correctIndex: 1, explanation: '"Corredor" in a supermarket is called "Aisle".' },
      { question: 'Complete: "Can I pay at the _____, please?"', options: ["aisle", "entrance", "checkout", "parking lot"], correctIndex: 2, explanation: 'You pay at the "checkout".' },
      { question: 'What is a "Receipt"?', options: ["Receita médica", "Nota fiscal / Recibo", "Receita de bolo", "Sacola"], correctIndex: 1, explanation: '"Receipt" is the paper proving you paid (Recibo).' },
      { question: 'How do you ask for a discount?', options: ["Is there a discount?", "What is the discount?", "Where is the discount?", "Who is the discount?"], correctIndex: 0, explanation: '"Is there a discount?" translates to "Tem algum desconto?".' },
      { question: 'What do you use to carry groceries home?', options: ["Cart", "Aisle", "Bag", "List"], correctIndex: 2, explanation: 'You use a Bag (sacola).' },
      { question: 'Translate: "Onde está a lista de compras?"', options: ["Where is the receipt?", "Where is the grocery list?", "Where is the checkout?", "Where is the cart?"], correctIndex: 1, explanation: '"Lista de compras" is "Grocery list".' },
      { question: 'How do you say "Eu vou pagar em dinheiro"?', options: ["I will pay with card.", "I will pay with cash.", "I will pay with paper.", "I will pay now."], correctIndex: 1, explanation: '"Dinheiro (em espécie)" is "Cash".' },
      { question: 'What does the "Cashier" do?', options: ["Cleans the floor", "Cooks food", "Receives the payment", "Drives the bus"], correctIndex: 2, explanation: 'The cashier is the person who receives your payment at the checkout.' },
      { question: 'Complete: "How much does it _____?"', options: ["price", "cost", "pay", "money"], correctIndex: 1, explanation: '"How much does it cost?" is the standard way to ask for the price.' },
    ],
    trueOrFalse: {
      part1: [
        { statement: "You put your groceries in a shopping cart.", statementPt: "Você coloca suas compras em um carrinho de compras.", isTrue: true, explanation: "Shopping cart means carrinho de compras." },
      { statement: "Frozen food is very hot.", statementPt: "Comida congelada é muito quente.", isTrue: false, explanation: "Frozen means congelado (very cold)." },
      { statement: "You get a receipt after you pay.", statementPt: "Você recebe um recibo depois de pagar.", isTrue: true, explanation: "Receipt is nota fiscal/recibo." },
      { statement: "A bakery is where you buy fresh bread.", statementPt: "Uma padaria é onde você compra pão fresco.", isTrue: true, explanation: "Bakery means padaria." },
      { statement: "You use a scale to cut your vegetables.", statementPt: "Você usa uma balança para cortar seus vegetais.", isTrue: false, explanation: "A scale (balança) is used to weigh things, not cut them." },
        { statement: "Products are placed on shelves.", statementPt: "Os produtos são colocados em prateleiras.", isTrue: true, explanation: "Shelf (plural: shelves) means prateleira." }
      ],
      part2: [
        { statement: "Fresh food is usually old.", statementPt: "Comida fresca geralmente é velha.", isTrue: false, explanation: "Fresh means fresca/nova." },
        { statement: "Frozen food is very cold.", statementPt: "Comida congelada é muito fria.", isTrue: true, explanation: "Frozen means congelada." },
        { statement: "Meat comes from animals.", statementPt: "A carne vem dos animais.", isTrue: true, explanation: "Meat means carne." },
        { statement: "Dairy products include milk and cheese.", statementPt: "Laticínios incluem leite e queijo.", isTrue: true, explanation: "Dairy means laticínios." },
        { statement: "You pay with cash using coins and bills.", statementPt: "Você paga com \'cash\' usando moedas e notas.", isTrue: true, explanation: "Cash means dinheiro em espécie." },
        { statement: "Change is the money the cashier keeps as a tip.", statementPt: "\'Change\' (troco) é o dinheiro que o caixa guarda como gorjeta.", isTrue: false, explanation: "Change is the money given back to you." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you use a shopping cart or a basket at the supermarket?", translation: "Você usa um carrinho ou uma cesta no supermercado?" },
        { question: "Do you always check the price of things?", translation: "Você sempre checa o preço das coisas?" },
        { question: "Do you usually bring your own bag?", translation: "Você costuma levar sua própria sacola?" },
        { question: "Are there many aisles in the supermarket near your house?", translation: "Tem muitos corredores no supermercado perto da sua casa?" },
        { question: "Do you use a basket when you buy only a few things?", translation: "Você usa uma cesta quando compra poucas coisas?" },
        { question: "Can you easily reach the top shelf in the supermarket?", translation: "Você consegue alcançar facilmente a prateleira de cima no supermercado?" },
        { question: "Do you always keep your receipt after you buy?", translation: "Você sempre guarda o seu recibo depois que compra?" }
      ],
      part2: [
        { question: "Do you buy a lot of fresh vegetables?", translation: "Você compra muitos vegetais frescos?" },
        { question: "Do you prefer to pay in cash or by credit card?", translation: "Você prefere pagar em dinheiro ou no cartão de crédito?" },
        { question: "Do you buy your bread at the bakery?", translation: "Você compra o seu pão na padaria?" },
        { question: "How often do you eat frozen food?", translation: "Com que frequência você come comida congelada?" },
        { question: "Do you eat a lot of fresh fruits?", translation: "Você come muitas frutas frescas?" },
        { question: "Do you always check if you get the right change?", translation: "Você sempre checa se recebeu o troco certo?" },
        { question: "Do you buy meat at the supermarket or the butcher?", translation: "Você compra carne no supermercado ou no açougue?" }
      ]
    },
      buildSentence: {
                    level1: [ { english: "Get a shopping cart, please.", portuguese: "Pegue um carrinho, por favor." }, { english: "I forgot my grocery list.", portuguese: "Esqueci minha lista de compras." }, { english: "There is a 50% discount.", portuguese: "Há um desconto de 50%." }, { english: "Do you accept credit cards?", portuguese: "Vocês aceitam cartões de crédito?" }, { english: "The sugar is on the top shelf.", portuguese: "O açúcar está na prateleira de cima." }, { english: "I smell fresh bread from the bakery.", portuguese: "Sinto o cheiro de pão fresco da padaria." } ],
                    level2: [ { english: "He pushed the heavy shopping cart down the aisle.", portuguese: "Ele empurrou o carrinho de compras pesado pelo corredor." }, { english: "I wrote a grocery list before I went shopping.", portuguese: "Eu escrevi uma lista de compras antes de ir às compras." }, { english: "They offered a huge discount on fresh vegetables.", portuguese: "Eles ofereceram um enorme desconto em vegetais frescos." }, { english: "She used her credit card to buy expensive groceries.", portuguese: "Ela usou seu cartão de crédito para comprar mantimentos caros." }, { english: "He grabbed the last box of cereal from the top shelf.", portuguese: "Ele pegou a última caixa de cereal da prateleira de cima." }, { english: "The bakery sold delicious chocolate cakes yesterday.", portuguese: "A padaria vendeu bolos de chocolate deliciosos ontem." } ]
                  },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Shopping cart means Carrinho de compras.", statementPt: "Shopping cart significa Carrinho de compras.", isTrue: true, explanation: "Yes, Shopping cart means Carrinho de compras." }, { statement: "Cashier means a type of car.", statementPt: "Cashier significa um tipo de carro.", isTrue: false, explanation: "No, Cashier means Caixa (pessoa)." }, { statement: "Aisle means Corredor.", statementPt: "Aisle significa Corredor.", isTrue: true, explanation: "Yes, Aisle means Corredor." }, { statement: "Receipt means a type of car.", statementPt: "Receipt significa um tipo de carro.", isTrue: false, explanation: "No, Receipt means Recibo / Nota fiscal." }, { statement: "Grocery list means Lista de compras.", statementPt: "Grocery list significa Lista de compras.", isTrue: true, explanation: "Yes, Grocery list means Lista de compras." }, { statement: "Checkout means a type of car.", statementPt: "Checkout significa um tipo de carro.", isTrue: false, explanation: "No, Checkout means Caixa (pagamento)." }, { statement: "Bag means Sacola.", statementPt: "Bag significa Sacola.", isTrue: true, explanation: "Yes, Bag means Sacola." }, { statement: "Price means a type of car.", statementPt: "Price significa um tipo de carro.", isTrue: false, explanation: "No, Price means Preço." }, { statement: "Discount means Desconto.", statementPt: "Discount significa Desconto.", isTrue: true, explanation: "Yes, Discount means Desconto." }, { statement: "Pay means a type of car.", statementPt: "Pay significa um tipo de carro.", isTrue: false, explanation: "No, Pay means Pagar." } ],
                    part2: [ { statement: "Credit card means Cartão de crédito.", statementPt: "Credit card significa Cartão de crédito.", isTrue: true, explanation: "Yes, Credit card means Cartão de crédito." }, { statement: "Cash means a type of car.", statementPt: "Cash significa um tipo de carro.", isTrue: false, explanation: "No, Cash means Dinheiro (espécie)." }, { statement: "Change means Troco.", statementPt: "Change significa Troco.", isTrue: true, explanation: "Yes, Change means Troco." }, { statement: "Customer means a type of car.", statementPt: "Customer significa um tipo de carro.", isTrue: false, explanation: "No, Customer means Cliente." }, { statement: "Shelf means Prateleira.", statementPt: "Shelf significa Prateleira.", isTrue: true, explanation: "Yes, Shelf means Prateleira." }, { statement: "Basket means a type of car.", statementPt: "Basket significa um tipo de carro.", isTrue: false, explanation: "No, Basket means Cesta de compras." }, { statement: "Fresh means Fresco.", statementPt: "Fresh significa Fresco.", isTrue: true, explanation: "Yes, Fresh means Fresco." }, { statement: "Frozen means a type of car.", statementPt: "Frozen significa um tipo de carro.", isTrue: false, explanation: "No, Frozen means Congelado." }, { statement: "Bakery means Padaria (seção).", statementPt: "Bakery significa Padaria (seção).", isTrue: true, explanation: "Yes, Bakery means Padaria (seção)." }, { statement: "Scale means a type of car.", statementPt: "Scale significa um tipo de carro.", isTrue: false, explanation: "No, Scale means Balança." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Can you use \"Shopping cart\" in a sentence in the past simple?", translation: "Você consegue usar \"Shopping cart\" em uma frase no passado simples?" }, { question: "Can you use \"Cashier\" in a sentence in the past simple?", translation: "Você consegue usar \"Cashier\" em uma frase no passado simples?" }, { question: "Can you use \"Aisle\" in a sentence in the past simple?", translation: "Você consegue usar \"Aisle\" em uma frase no passado simples?" }, { question: "Can you use \"Receipt\" in a sentence in the past simple?", translation: "Você consegue usar \"Receipt\" em uma frase no passado simples?" }, { question: "Can you use \"Grocery list\" in a sentence in the past simple?", translation: "Você consegue usar \"Grocery list\" em uma frase no passado simples?" }, { question: "Can you use \"Checkout\" in a sentence in the past simple?", translation: "Você consegue usar \"Checkout\" em uma frase no passado simples?" }, { question: "Can you use \"Bag\" in a sentence in the past simple?", translation: "Você consegue usar \"Bag\" em uma frase no passado simples?" }, { question: "Can you use \"Price\" in a sentence in the past simple?", translation: "Você consegue usar \"Price\" em uma frase no passado simples?" }, { question: "Can you use \"Discount\" in a sentence in the past simple?", translation: "Você consegue usar \"Discount\" em uma frase no passado simples?" }, { question: "Can you use \"Pay\" in a sentence in the past simple?", translation: "Você consegue usar \"Pay\" em uma frase no passado simples?" } ],
                    part2: [ { question: "Can you use \"Credit card\" in a sentence in the past simple?", translation: "Você consegue usar \"Credit card\" em uma frase no passado simples?" }, { question: "Can you use \"Cash\" in a sentence in the past simple?", translation: "Você consegue usar \"Cash\" em uma frase no passado simples?" }, { question: "Can you use \"Change\" in a sentence in the past simple?", translation: "Você consegue usar \"Change\" em uma frase no passado simples?" }, { question: "Can you use \"Customer\" in a sentence in the past simple?", translation: "Você consegue usar \"Customer\" em uma frase no passado simples?" }, { question: "Can you use \"Shelf\" in a sentence in the past simple?", translation: "Você consegue usar \"Shelf\" em uma frase no passado simples?" }, { question: "Can you use \"Basket\" in a sentence in the past simple?", translation: "Você consegue usar \"Basket\" em uma frase no passado simples?" }, { question: "Can you use \"Fresh\" in a sentence in the past simple?", translation: "Você consegue usar \"Fresh\" em uma frase no passado simples?" }, { question: "Can you use \"Frozen\" in a sentence in the past simple?", translation: "Você consegue usar \"Frozen\" em uma frase no passado simples?" }, { question: "Can you use \"Bakery\" in a sentence in the past simple?", translation: "Você consegue usar \"Bakery\" em uma frase no passado simples?" }, { question: "Can you use \"Scale\" in a sentence in the past simple?", translation: "Você consegue usar \"Scale\" em uma frase no passado simples?" } ]
                  }
},
];
