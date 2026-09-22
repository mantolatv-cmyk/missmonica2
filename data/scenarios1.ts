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
    reading: {
      "level1": {
            "textEn": "My family is small, but we are very close to each other. I live in a comfortable house with my mother and my younger brother. My mother is a dedicated teacher, and she is always very kind and patient with everyone. She works at a local school during the week. My brother is ten years old, and he absolutely loves playing soccer with his friends in the neighborhood. We have a special family tradition that we never miss. Every Sunday afternoon, we travel to visit our grandmother who lives in the countryside. She always makes the best chocolate cake for us, and we spend the whole day talking and laughing together.",
            "textPt": "Minha família é pequena, mas somos muito próximos uns dos outros. Eu moro em uma casa confortável com minha mãe e meu irmão mais novo. Minha mãe é uma professora dedicada, e ela é sempre muito gentil e paciente com todos. Ela trabalha em uma escola local durante a semana. Meu irmão tem dez anos e ele adora absolutamente jogar futebol com os amigos dele no bairro. Nós temos uma tradição de família especial que nunca perdemos. Todo domingo à tarde, nós viajamos para visitar nossa avó que mora no interior. Ela sempre faz o melhor bolo de chocolate para nós, e passamos o dia todo conversando e rindo juntos.",
            "questions": [
                  {
                        "question": "Who does the author live with?",
                        "options": [
                              "Mother and brother",
                              "Father and sister",
                              "Grandmother only",
                              "Cousins"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text says 'I live in a comfortable house with my mother and my younger brother'."
                  },
                  {
                        "question": "What is the mother's profession?",
                        "options": [
                              "Teacher",
                              "Doctor",
                              "Engineer",
                              "Nurse"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text says 'My mother is a dedicated teacher'."
                  },
                  {
                        "question": "What does the brother love to do?",
                        "options": [
                              "Play soccer",
                              "Eat cake",
                              "Visit grandmother",
                              "Read books"
                        ],
                        "correctIndex": 0,
                        "explanation": "The brother 'absolutely loves playing soccer'."
                  },
                  {
                        "question": "When do they visit their grandmother?",
                        "options": [
                              "Every Sunday",
                              "Every Saturday",
                              "Once a month",
                              "On holidays"
                        ],
                        "correctIndex": 0,
                        "explanation": "They visit 'Every Sunday afternoon'."
                  }
            ]
      },
      "level2": {
            "textEn": "Family gatherings are a very important tradition in our culture, acting as a bridge between different generations. Every holiday, my extended family comes together at my uncle's large house near the lake. The preparation starts days in advance, with everyone contributing their signature dishes. I have a lot of cousins, and we always share funny stories about our childhood and update each other on our recent achievements. Last year was particularly memorable because my older sister got married in a beautiful outdoor ceremony, so now I have a brother-in-law who has become a great friend. It is truly amazing how fast our family is growing, and these gatherings remind us of the strong bonds we share despite living far apart.",
            "textPt": "Reuniões de família são uma tradição muito importante na nossa cultura, atuando como uma ponte entre diferentes gerações. Em todo feriado, minha família estendida se reúne na grande casa do meu tio perto do lago. A preparação começa dias antes, com cada um contribuindo com seus pratos especiais. Tenho muitos primos, e sempre compartilhamos histórias engraçadas sobre nossa infância e atualizamos uns aos outros sobre nossas conquistas recentes. O ano passado foi particularmente memorável porque minha irmã mais velha se casou em uma bela cerimônia ao ar livre, então agora tenho um cunhado que se tornou um grande amigo. É realmente incrível como nossa família está crescendo rápido, e essas reuniões nos lembram dos fortes laços que compartilhamos apesar de morarmos longe.",
            "questions": [
                  {
                        "question": "Where do the family gatherings happen?",
                        "options": [
                              "At the uncle's house",
                              "At the grandmother's house",
                              "At the author's house",
                              "In a restaurant"
                        ],
                        "correctIndex": 0,
                        "explanation": "They come together 'at my uncle's large house near the lake'."
                  },
                  {
                        "question": "What do the cousins usually do together?",
                        "options": [
                              "Share funny stories",
                              "Play soccer",
                              "Cook dinner",
                              "Watch movies"
                        ],
                        "correctIndex": 0,
                        "explanation": "They 'always share funny stories about our childhood'."
                  },
                  {
                        "question": "What happened to the older sister last year?",
                        "options": [
                              "She got married",
                              "She moved to another city",
                              "She had a baby",
                              "She bought a house"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text says 'my older sister got married in a beautiful outdoor ceremony'."
                  },
                  {
                        "question": "How does the author describe the family's growth?",
                        "options": [
                              "Amazing and fast",
                              "Slow and steady",
                              "Difficult to manage",
                              "Unexpected"
                        ],
                        "correctIndex": 0,
                        "explanation": "They say 'It is truly amazing how fast our family is growing'."
                  }
            ]
      }
},
    vocabulary: [
      { english: "Mother / Mom", portuguese: "Mãe",
          levels: { 
                        A1: { en: "My mother makes the best cake.", pt: "Minha mãe faz o melhor bolo." }, 
                        A2: { en: "My mother always supported our family during tough times.", pt: "Minha mãe sempre apoiou nossa família durante os momentos difíceis." }
                      }
    },
      { english: "Father / Dad", portuguese: "Pai",
          levels: { 
                        A1: { en: "My father works every day.", pt: "Meu pai trabalha todos os dias." }, 
                        A2: { en: "My father worked at the same hospital for twenty years.", pt: "Meu pai trabalhou no mesmo hospital por vinte anos." }
                      }
    },
      { english: "Brother", portuguese: "Irmão",
          levels: { 
                        A1: { en: "I share a room with my brother.", pt: "Eu divido o quarto com meu irmão." }, 
                        A2: { en: "My younger brother graduated from university with honors.", pt: "Meu irmão mais novo se formou na universidade com honras." }
                      }
    },
      { english: "Sister", portuguese: "Irmã",
          levels: { 
                        A1: { en: "My sister is older than me.", pt: "Minha irmã é mais velha que eu." }, 
                        A2: { en: "My sister studied abroad last semester.", pt: "Minha irmã estudou no exterior no semestre passado." }
                      }
    },
      { english: "Grandmother", portuguese: "Avó",
          levels: { 
                        A1: { en: "We visit my grandmother every Sunday.", pt: "Visitamos minha avó todo domingo." }, 
                        A2: { en: "We visited my grandmother every Sunday when I was a child.", pt: "Nós visitávamos minha avó todo domingo quando eu era criança." }
                      }
    },
      { english: "Grandfather", portuguese: "Avô",
          levels: { 
                        A1: { en: "My grandfather loves fishing.", pt: "Meu avô adora pescar." }, 
                        A2: { en: "My grandfather collected vintage stamps all his life.", pt: "Meu avô colecionou selos vintage a vida toda." }
                      }
    },
      { english: "Aunt", portuguese: "Tia",
          levels: { 
                        A1: { en: "My aunt lives in another city.", pt: "Minha tia mora em outra cidade." }, 
                        A2: { en: "My aunt lives in another city, so we rarely see her.", pt: "Minha tia mora em outra cidade, então raramente a vemos." }
                      }
    },
      { english: "Uncle", portuguese: "Tio",
          levels: { 
                        A1: { en: "My uncle buys a new car.", pt: "Meu tio compra um carro novo." }, 
                        A2: { en: "My uncle bought a new car and planned a road trip.", pt: "Meu tio comprou um carro novo e planejou uma viagem." }
                      }
    },
      { english: "Cousin", portuguese: "Primo(a)",
          levels: { 
                        A1: { en: "I play video games with my cousin.", pt: "Eu jogo videogame com meu primo." }, 
                        A2: { en: "I played video games with my cousin when we were teenagers.", pt: "Eu jogava videogame com meu primo quando éramos adolescentes." }
                      }
    },
      { english: "Parents", portuguese: "Pais",
          levels: { 
                        A1: { en: "My parents are very strict.", pt: "Meus pais são muito rigorosos." }, 
                        A2: { en: "My parents were always very strict regarding my academic performance.", pt: "Meus pais sempre foram muito rigorosos em relação ao meu desempenho acadêmico." }
                      }
    },
      { english: "Nephew", portuguese: "Sobrinho",
          levels: { 
                        A1: { en: "My nephew is three years old.", pt: "Meu sobrinho tem três anos." }, 
                        A2: { en: "My nephew grew so much that I hardly recognized him.", pt: "Meu sobrinho cresceu tanto que mal o reconheci." }
                      }
    },
      { english: "Niece", portuguese: "Sobrinha",
          levels: { 
                        A1: { en: "I buy toys for my niece.", pt: "Eu compro brinquedos para minha sobrinha." }, 
                        A2: { en: "I bought a beautiful educational toy for my niece's birthday.", pt: "Eu comprei um lindo brinquedo educativo para o aniversário da minha sobrinha." }
                      }
    },
      { english: "Grandson", portuguese: "Neto",
          levels: { 
                        A1: { en: "The grandfather plays with his grandson.", pt: "O avô brinca com seu neto." }, 
                        A2: { en: "The grandfather spent the entire afternoon playing board games with his grandson.", pt: "O avô passou a tarde inteira jogando jogos de tabuleiro com seu neto." }
                      }
    },
      { english: "Granddaughter", portuguese: "Neta",
          levels: { 
                        A1: { en: "She is their first granddaughter.", pt: "Ela é a primeira neta deles." }, 
                        A2: { en: "She became the very first granddaughter in our family.", pt: "Ela se tornou a primeira neta na nossa família." }
                      }
    },
      { english: "Wife", portuguese: "Esposa",
          levels: { 
                        A1: { en: "He buys flowers for his wife.", pt: "Ele compra flores para a esposa." }, 
                        A2: { en: "He bought beautiful red flowers for his wife.", pt: "Ele comprou lindas flores vermelhas para sua esposa." }
                      }
    },
      { english: "Husband", portuguese: "Marido",
          levels: { 
                        A1: { en: "Her husband is a doctor.", pt: "O marido dela é médico." }, 
                        A2: { en: "Her husband works as a leading doctor at the local clinic.", pt: "O marido dela trabalha como médico chefe na clínica local." }
                      }
    },
      { english: "Mother-in-law", portuguese: "Sogra",
          levels: { 
                        A1: { en: "My mother-in-law makes great food.", pt: "Minha sogra faz uma comida ótima." }, 
                        A2: { en: "My mother-in-law cooked an incredible feast for our gathering.", pt: "Minha sogra cozinhou um banquete incrível para a nossa reunião." }
                      }
    },
      { english: "Father-in-law", portuguese: "Sogro",
          levels: { 
                        A1: { en: "My father-in-law is very funny.", pt: "Meu sogro é muito engraçado." }, 
                        A2: { en: "My father-in-law always told the funniest jokes at dinners.", pt: "Meu sogro sempre contava as piadas mais engraçadas nos jantares." }
                      }
    },
      { english: "Get along", portuguese: "Se dar bem",
          levels: { 
                        B1: { en: "I get along very well with my older brother.", pt: "Eu me dou muito bem com meu irmão mais velho." } 
                      }
    },
      { english: "Take after", portuguese: "Puxar a / Parecer com",
          levels: { 
                        B1: { en: "She really takes after her mother in personality.", pt: "Ela realmente puxou a mãe em personalidade." } 
                      }
    },
      { english: "Bring up", portuguese: "Criar (um filho)",
          levels: { 
                        B1: { en: "His grandparents helped bring him up when he was young.", pt: "Os avós dele ajudaram a criá-lo quando ele era jovem." } 
                      }
    },
      { english: "Close-knit", portuguese: "Unida (família)",
          levels: { 
                        B1: { en: "They are a very close-knit family who always support each other.", pt: "Eles são uma família muito unida que sempre se apoia." } 
                      }
    },
      { english: "In-laws", portuguese: "Sogros / Cunhados",
          levels: { 
                        B1: { en: "We are visiting my in-laws for dinner this weekend.", pt: "Nós vamos visitar meus sogros para o jantar este fim de semana." } 
                      }
    },
      { english: "Extended family", portuguese: "Família estendida",
          levels: { 
                        B1: { en: "We invited our entire extended family to the wedding.", pt: "Nós convidamos toda a nossa família estendida para o casamento." } 
                      }
    },
      { english: "Only child", portuguese: "Filho(a) único(a)",
          levels: { 
                        B1: { en: "Being an only child means you never have to share your toys.", pt: "Ser filho único significa que você nunca tem que dividir seus brinquedos." } 
                      }
    },
      { english: "Relative", portuguese: "Parente",
          levels: { 
                        B1: { en: "A distant relative left him a small fortune.", pt: "Um parente distante deixou uma pequena fortuna para ele." } 
                      }
    },
      { english: "Son", portuguese: "Filho",
          levels: { 
                        A1: { en: "My son plays in the yard.", pt: "Meu filho brinca no quintal." }, 
                        A2: { en: "My youngest son started elementary school this year.", pt: "Meu filho mais novo começou o ensino fundamental este ano." }
                      }
    },
      { english: "Daughter", portuguese: "Filha",
          levels: { 
                        A1: { en: "She is my beautiful daughter.", pt: "Ela é minha linda filha." }, 
                        A2: { en: "His oldest daughter learned how to ride a bicycle.", pt: "A filha mais velha dele aprendeu a andar de bicicleta." }
                      }
    },
      { english: "Grow apart", portuguese: "Afastar-se (emocionalmente)",
          levels: { 
                        B1: { en: "As we got older, my brother and I started to grow apart.", pt: "Conforme fomos envelhecendo, meu irmão e eu começamos a nos afastar." } 
                      }
    },
      { english: "Look up to", portuguese: "Admirar / Espelhar-se",
          levels: { 
                        B1: { en: "I really look up to my grandfather because he is so wise.", pt: "Eu admiro muito o meu avô porque ele é muito sábio." } 
                      }
    },
      { english: "Settle down", portuguese: "Aquietar-se / Criar raízes",
          levels: { 
                        B1: { en: "After traveling for years, they finally decided to settle down and start a family.", pt: "Depois de viajar por anos, eles finalmente decidiram sossegar e formar uma família." } 
                      }
    },
      { english: "Gather", portuguese: "Reunir-se",
          levels: { 
                        B1: { en: "The whole family gathers at my parents' house every Thanksgiving.", pt: "A família inteira se reúne na casa dos meus pais todo Dia de Ação de Graças." } 
                      }
    },
      { english: "Sibling", portuguese: "Irmão / Irmã (Geral)",
          levels: { 
                        B1: { en: "Do you have any siblings, or are you an only child?", pt: "Você tem irmãos ou irmãs, ou é filho único?" } 
                      }
    },
      { english: "Upbringing", portuguese: "Criação / Educação (pelos pais)",
          levels: { 
                        B1: { en: "She had a very strict upbringing but turned out to be a wonderful person.", pt: "Ela teve uma criação muito rigorosa, mas se tornou uma pessoa maravilhosa." } 
                      }
    },
      { english: "Depend on", portuguese: "Depender de / Contar com",
          levels: { 
                        B1: { en: "You can always depend on your family when things go wrong.", pt: "Você sempre pode contar com sua família quando as coisas dão errado." } 
                      }
    },
      { english: "Tie the knot", portuguese: "Casar-se (Expressão)",
          levels: { 
                        B1: { en: "My cousin and his fiancee are going to tie the knot next spring.", pt: "Meu primo e sua noiva vão se casar na próxima primavera." } 
                      }
    },
      { english: "Spoil", portuguese: "Mimar",
          levels: { 
                        B1: { en: "Grandparents love to spoil their grandchildren with candies and toys.", pt: "Avós adoram mimar seus netos com doces e brinquedos." } 
                      }
    },
      { english: "Fall out", portuguese: "Desentender-se",
          levels: { 
                        B1: { en: "They fell out over a misunderstanding and haven't spoken since.", pt: "Eles se desentenderam por um mal-entendido e não se falam desde então." } 
                      }
    },
      { english: "Make up", portuguese: "Fazer as pazes",
          levels: { 
                        B1: { en: "It is important to apologize and make up after a family fight.", pt: "É importante pedir desculpas e fazer as pazes depois de uma briga de família." } 
                      }
    },
      { english: "Resemble", portuguese: "Assemelhar-se",
          levels: { 
                        B1: { en: "She strongly resembles her aunt from her father's side.", pt: "Ela se assemelha fortemente à tia por parte de pai." } 
                      }
    }
      ],
      flashcardsA2: [
          {
              "english": "My nephew grew so much that I hardly recognized him.",
              "portuguese": "Meu sobrinho cresceu tanto que mal o reconheci.",
              "example": "Palavra-chave: Nephew"
          },
          {
              "english": "My mother always supported our family during tough times.",
              "portuguese": "Minha mãe sempre apoiou nossa família durante os momentos difíceis.",
              "example": "Palavra-chave: Mother / Mom"
          },
          {
              "english": "My father worked at the same hospital for twenty years.",
              "portuguese": "Meu pai trabalhou no mesmo hospital por vinte anos.",
              "example": "Palavra-chave: Father / Dad"
          },
          {
              "english": "Her husband works as a leading doctor at the local clinic.",
              "portuguese": "O marido dela trabalha como médico chefe na clínica local.",
              "example": "Palavra-chave: Husband"
          },
          {
              "english": "The grandfather spent the entire afternoon playing board games with his grandson.",
              "portuguese": "O avô passou a tarde inteira jogando jogos de tabuleiro com seu neto.",
              "example": "Palavra-chave: Grandson"
          },
          {
              "english": "My parents were always very strict regarding my academic performance.",
              "portuguese": "Meus pais sempre foram muito rigorosos em relação ao meu desempenho acadêmico.",
              "example": "Palavra-chave: Parents"
          },
          {
              "english": "I bought a beautiful educational toy for my niece's birthday.",
              "portuguese": "Eu comprei um lindo brinquedo educativo para o aniversário da minha sobrinha.",
              "example": "Palavra-chave: Niece"
          },
          {
              "english": "My youngest son started elementary school this year.",
              "portuguese": "Meu filho mais novo começou o ensino fundamental este ano.",
              "example": "Palavra-chave: Son"
          },
          {
              "english": "My younger brother graduated from university with honors.",
              "portuguese": "Meu irmão mais novo se formou na universidade com honras.",
              "example": "Palavra-chave: Brother"
          },
          {
              "english": "His oldest daughter learned how to ride a bicycle.",
              "portuguese": "A filha mais velha dele aprendeu a andar de bicicleta.",
              "example": "Palavra-chave: Daughter"
          },
          {
              "english": "My sister studied abroad last semester.",
              "portuguese": "Minha irmã estudou no exterior no semestre passado.",
              "example": "Palavra-chave: Sister"
          },
          {
              "english": "She became the very first granddaughter in our family.",
              "portuguese": "Ela se tornou a primeira neta na nossa família.",
              "example": "Palavra-chave: Granddaughter"
          },
          {
              "english": "My father-in-law always told the funniest jokes at dinners.",
              "portuguese": "Meu sogro sempre contava as piadas mais engraçadas nos jantares.",
              "example": "Palavra-chave: Father-in-law"
          },
          {
              "english": "My mother-in-law cooked an incredible feast for our gathering.",
              "portuguese": "Minha sogra cozinhou um banquete incrível para a nossa reunião.",
              "example": "Palavra-chave: Mother-in-law"
          },
          {
              "english": "We visited my grandmother every Sunday when I was a child.",
              "portuguese": "Nós visitávamos minha avó todo domingo quando eu era criança.",
              "example": "Palavra-chave: Grandmother"
          },
          {
              "english": "I played video games with my cousin when we were teenagers.",
              "portuguese": "Eu jogava videogame com meu primo quando éramos adolescentes.",
              "example": "Palavra-chave: Cousin"
          },
          {
              "english": "My grandfather collected vintage stamps all his life.",
              "portuguese": "Meu avô colecionou selos vintage a vida toda.",
              "example": "Palavra-chave: Grandfather"
          },
          {
              "english": "He bought beautiful red flowers for his wife.",
              "portuguese": "Ele comprou lindas flores vermelhas para sua esposa.",
              "example": "Palavra-chave: Wife"
          },
          {
              "english": "My aunt lives in another city, so we rarely see her.",
              "portuguese": "Minha tia mora em outra cidade, então raramente a vemos.",
              "example": "Palavra-chave: Aunt"
          },
          {
              "english": "My uncle bought a new car and planned a road trip.",
              "portuguese": "Meu tio comprou um carro novo e planejou uma viagem.",
              "example": "Palavra-chave: Uncle"
          }
      ],
      flashcardsB1: [
          {
              "english": "I get along very well with my older brother.",
              "portuguese": "Eu me dou muito bem com meu irmão mais velho.",
              "example": "Palavra-chave: Get along"
          },
          {
              "english": "She really takes after her mother in personality.",
              "portuguese": "Ela realmente puxou a mãe em personalidade.",
              "example": "Palavra-chave: Take after"
          },
          {
              "english": "Do you have any siblings, or are you an only child?",
              "portuguese": "Você tem irmãos ou irmãs, ou é filho único?",
              "example": "Palavra-chave: Sibling"
          },
          {
              "english": "After traveling for years, they finally decided to settle down and start a family.",
              "portuguese": "Depois de viajar por anos, eles finalmente decidiram sossegar e formar uma família.",
              "example": "Palavra-chave: Settle down"
          },
          {
              "english": "She strongly resembles her aunt from her father's side.",
              "portuguese": "Ela se assemelha fortemente à tia por parte de pai.",
              "example": "Palavra-chave: Resemble"
          },
          {
              "english": "It is important to apologize and make up after a family fight.",
              "portuguese": "É importante pedir desculpas e fazer as pazes depois de uma briga de família.",
              "example": "Palavra-chave: Make up"
          },
          {
              "english": "She had a very strict upbringing but turned out to be a wonderful person.",
              "portuguese": "Ela teve uma criação muito rigorosa, mas se tornou uma pessoa maravilhosa.",
              "example": "Palavra-chave: Upbringing"
          },
          {
              "english": "As we got older, my brother and I started to grow apart.",
              "portuguese": "Conforme fomos envelhecendo, meu irmão e eu começamos a nos afastar.",
              "example": "Palavra-chave: Grow apart"
          },
          {
              "english": "His grandparents helped bring him up when he was young.",
              "portuguese": "Os avós dele ajudaram a criá-lo quando ele era jovem.",
              "example": "Palavra-chave: Bring up"
          },
          {
              "english": "They are a very close-knit family who always support each other.",
              "portuguese": "Eles são uma família muito unida que sempre se apoia.",
              "example": "Palavra-chave: Close-knit"
          },
          {
              "english": "The whole family gathers at my parents' house every Thanksgiving.",
              "portuguese": "A família inteira se reúne na casa dos meus pais todo Dia de Ação de Graças.",
              "example": "Palavra-chave: Gather"
          },
          {
              "english": "We are visiting my in-laws for dinner this weekend.",
              "portuguese": "Nós vamos visitar meus sogros para o jantar este fim de semana.",
              "example": "Palavra-chave: In-laws"
          },
          {
              "english": "We invited our entire extended family to the wedding.",
              "portuguese": "Nós convidamos toda a nossa família estendida para o casamento.",
              "example": "Palavra-chave: Extended family"
          },
          {
              "english": "Grandparents love to spoil their grandchildren with candies and toys.",
              "portuguese": "Avós adoram mimar seus netos com doces e brinquedos.",
              "example": "Palavra-chave: Spoil"
          },
          {
              "english": "My cousin and his fiancee are going to tie the knot next spring.",
              "portuguese": "Meu primo e sua noiva vão se casar na próxima primavera.",
              "example": "Palavra-chave: Tie the knot"
          },
          {
              "english": "Being an only child means you never have to share your toys.",
              "portuguese": "Ser filho único significa que você nunca tem que dividir seus brinquedos.",
              "example": "Palavra-chave: Only child"
          },
          {
              "english": "I really look up to my grandfather because he is so wise.",
              "portuguese": "Eu admiro muito o meu avô porque ele é muito sábio.",
              "example": "Palavra-chave: Look up to"
          },
          {
              "english": "They fell out over a misunderstanding and haven't spoken since.",
              "portuguese": "Eles se desentenderam por um mal-entendido e não se falam desde então.",
              "example": "Palavra-chave: Fall out"
          },
          {
              "english": "A distant relative left him a small fortune.",
              "portuguese": "Um parente distante deixou uma pequena fortuna para ele.",
              "example": "Palavra-chave: Relative"
          },
          {
              "english": "You can always depend on your family when things go wrong.",
              "portuguese": "Você sempre pode contar com sua família quando as coisas dão errado.",
              "example": "Palavra-chave: Depend on"
          }
      ],
      quizA2: [
          {
              "question": "Traduza a frase: \"Eu comprei um lindo brinquedo educativo para o aniversário da minha sobrinha.\"",
              "options": [
                  "My sister studied abroad last semester.",
                  "My younger brother graduated from university with honors.",
                  "He bought beautiful red flowers for his wife.",
                  "I bought a beautiful educational toy for my niece's birthday."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"I bought a beautiful educational toy for my niece's birthday.\", que significa \"Eu comprei um lindo brinquedo educativo para o aniversário da minha sobrinha.\"."
          },
          {
              "question": "Complete a frase: \"His oldest ______ learned how to ride a bicycle.\"",
              "options": [
                  "Daughter",
                  "Uncle",
                  "Niece",
                  "Sibling"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"His oldest daughter learned how to ride a bicycle.\", que significa \"A filha mais velha dele aprendeu a andar de bicicleta.\"."
          },
          {
              "question": "Complete a frase: \"The grandfather spent the entire afternoon playing board games with his ______.\"",
              "options": [
                  "In-laws",
                  "Cousin",
                  "Only child",
                  "Grandson"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"The grandfather spent the entire afternoon playing board games with his grandson.\", que significa \"O avô passou a tarde inteira jogando jogos de tabuleiro com seu neto.\"."
          },
          {
              "question": "Traduza a frase: \"Nós visitávamos minha avó todo domingo quando eu era criança.\"",
              "options": [
                  "She became the very first granddaughter in our family.",
                  "We visited my grandmother every Sunday when I was a child.",
                  "My sister studied abroad last semester.",
                  "His oldest daughter learned how to ride a bicycle."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"We visited my grandmother every Sunday when I was a child.\", que significa \"Nós visitávamos minha avó todo domingo quando eu era criança.\"."
          },
          {
              "question": "Complete a frase: \"My ______ were always very strict regarding my academic performance.\"",
              "options": [
                  "Granddaughter",
                  "Nephew",
                  "Father / Dad",
                  "Parents"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"My parents were always very strict regarding my academic performance.\", que significa \"Meus pais sempre foram muito rigorosos em relação ao meu desempenho acadêmico.\"."
          },
          {
              "question": "Complete a frase: \"He bought beautiful red flowers for his ______.\"",
              "options": [
                  "Wife",
                  "Husband",
                  "Aunt",
                  "Look up to"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He bought beautiful red flowers for his wife.\", que significa \"Ele comprou lindas flores vermelhas para sua esposa.\"."
          },
          {
              "question": "Traduza a frase: \"Minha tia mora em outra cidade, então raramente a vemos.\"",
              "options": [
                  "My sister studied abroad last semester.",
                  "My aunt lives in another city, so we rarely see her.",
                  "We visited my grandmother every Sunday when I was a child.",
                  "The grandfather spent the entire afternoon playing board games with his grandson."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"My aunt lives in another city, so we rarely see her.\", que significa \"Minha tia mora em outra cidade, então raramente a vemos.\"."
          },
          {
              "question": "Complete a frase: \"My ______ grew so much that I hardly recognized him.\"",
              "options": [
                  "Nephew",
                  "Sister",
                  "Mother-in-law",
                  "Upbringing"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"My nephew grew so much that I hardly recognized him.\", que significa \"Meu sobrinho cresceu tanto que mal o reconheci.\"."
          },
          {
              "question": "Complete a frase: \"Her ______ works as a leading doctor at the local clinic.\"",
              "options": [
                  "Uncle",
                  "Husband",
                  "Brother",
                  "Spoil"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"Her husband works as a leading doctor at the local clinic.\", que significa \"O marido dela trabalha como médico chefe na clínica local.\"."
          },
          {
              "question": "Complete a frase: \"My youngest ______ started elementary school this year.\"",
              "options": [
                  "Son",
                  "Get along",
                  "Father-in-law",
                  "Upbringing"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"My youngest son started elementary school this year.\", que significa \"Meu filho mais novo começou o ensino fundamental este ano.\"."
          }
      ],
      quizB1: [
          {
              "question": "Complete a frase: \"Grandparents love to ______ their grandchildren with candies and toys.\"",
              "options": [
                  "Grandmother",
                  "Mother / Mom",
                  "Spoil",
                  "Grandson"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"Grandparents love to spoil their grandchildren with candies and toys.\", que significa \"Avós adoram mimar seus netos com doces e brinquedos.\"."
          },
          {
              "question": "Traduza a frase: \"Ser filho único significa que você nunca tem que dividir seus brinquedos.\"",
              "options": [
                  "Being an only child means you never have to share your toys.",
                  "They fell out over a misunderstanding and haven't spoken since.",
                  "We are visiting my in-laws for dinner this weekend.",
                  "I really look up to my grandfather because he is so wise."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"Being an only child means you never have to share your toys.\", que significa \"Ser filho único significa que você nunca tem que dividir seus brinquedos.\"."
          },
          {
              "question": "Traduza a frase: \"É importante pedir desculpas e fazer as pazes depois de uma briga de família.\"",
              "options": [
                  "It is important to apologize and make up after a family fight.",
                  "A distant relative left him a small fortune.",
                  "They are a very close-knit family who always support each other.",
                  "Do you have any siblings, or are you an only child?"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"It is important to apologize and make up after a family fight.\", que significa \"É importante pedir desculpas e fazer as pazes depois de uma briga de família.\"."
          },
          {
              "question": "Complete a frase: \"A distant ______ left him a small fortune.\"",
              "options": [
                  "Relative",
                  "Uncle",
                  "Daughter",
                  "Grandfather"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"A distant relative left him a small fortune.\", que significa \"Um parente distante deixou uma pequena fortuna para ele.\"."
          },
          {
              "question": "O que significa a frase: \"They fell out over a misunderstanding and haven't spoken since.\"?",
              "options": [
                  "Nós vamos visitar meus sogros para o jantar este fim de semana.",
                  "Eu admiro muito o meu avô porque ele é muito sábio.",
                  "Eles se desentenderam por um mal-entendido e não se falam desde então.",
                  "Ela se assemelha fortemente à tia por parte de pai."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"They fell out over a misunderstanding and haven't spoken since.\", que significa \"Eles se desentenderam por um mal-entendido e não se falam desde então.\"."
          },
          {
              "question": "Traduza a frase: \"Eu admiro muito o meu avô porque ele é muito sábio.\"",
              "options": [
                  "Do you have any siblings, or are you an only child?",
                  "My cousin and his fiancee are going to tie the knot next spring.",
                  "I really look up to my grandfather because he is so wise.",
                  "We invited our entire extended family to the wedding."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"I really look up to my grandfather because he is so wise.\", que significa \"Eu admiro muito o meu avô porque ele é muito sábio.\"."
          },
          {
              "question": "Traduza a frase: \"A família inteira se reúne na casa dos meus pais todo Dia de Ação de Graças.\"",
              "options": [
                  "I really look up to my grandfather because he is so wise.",
                  "She strongly resembles her aunt from her father's side.",
                  "The whole family gathers at my parents' house every Thanksgiving.",
                  "Do you have any siblings, or are you an only child?"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"The whole family gathers at my parents' house every Thanksgiving.\", que significa \"A família inteira se reúne na casa dos meus pais todo Dia de Ação de Graças.\"."
          },
          {
              "question": "Complete a frase: \"You can always ______ your family when things go wrong.\"",
              "options": [
                  "Depend on",
                  "Take after",
                  "Aunt",
                  "Close-knit"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"You can always depend on your family when things go wrong.\", que significa \"Você sempre pode contar com sua família quando as coisas dão errado.\"."
          },
          {
              "question": "O que significa a frase: \"She really takes after her mother in personality.\"?",
              "options": [
                  "Ela realmente puxou a mãe em personalidade.",
                  "Meu primo e sua noiva vão se casar na próxima primavera.",
                  "Eu admiro muito o meu avô porque ele é muito sábio.",
                  "Você tem irmãos ou irmãs, ou é filho único?"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"She really takes after her mother in personality.\", que significa \"Ela realmente puxou a mãe em personalidade.\"."
          },
          {
              "question": "Complete a frase: \"They are a very ______ family who always support each other.\"",
              "options": [
                  "Extended family",
                  "Granddaughter",
                  "Uncle",
                  "Close-knit"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"They are a very close-knit family who always support each other.\", que significa \"Eles são uma família muito unida que sempre se apoia.\"."
          }
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
      { speaker: "John", english: "A baby in the family brings so much joy. Tell your brother I said congratulations.", portuguese: "Um bebê na família traz tanta alegria. Diga ao seu irmão que mandei parabéns.", isPrimary: true }],
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
      { english: "I am an only child.", portuguese: "Eu sou filho(a) único(a)." }],
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
      { question: 'How do you say "Irmão mais velho"?', options: ["Big cousin", "Older brother", "New brother", "Tall brother"], correctIndex: 1, explanation: '"Older" means "mais velho".' }],
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
    speakingPractice: { part1: [ { question: "What is a valuable lesson your mother taught you?", translation: "Qual é uma lição valiosa que sua mãe lhe ensinou?" }, { question: "How often do you ask your father for advice?", translation: "Com que frequência você pede conselhos ao seu pai?" }, { question: "Do you and your brother share any hobbies?", translation: "Você e seu irmão compartilham algum hobby?" }, { question: "What is your favorite memory with your sister?", translation: "Qual é a sua lembrança favorita com sua irmã?" }, { question: "Does your grandmother cook traditional food for you?", translation: "Sua avó cozinha comida tradicional para você?" }, { question: "What stories does your grandfather usually tell?", translation: "Quais histórias seu avô costuma contar?" }, { question: "Are you close to your favorite aunt?", translation: "Você é próximo da sua tia favorita?" }, { question: "Did your uncle ever teach you a new skill?", translation: "Seu tio já lhe ensinou uma nova habilidade?" }, { question: "Do you regularly talk or hang out with your cousin?", translation: "Você conversa ou sai regularmente com seu primo(a)?" }, { question: "How do your parents support your decisions?", translation: "Como seus pais apoiam suas decisões?" } ], part2: [ { question: "What is the best gift you have given to your nephew?", translation: "Qual é o melhor presente que você já deu ao seu sobrinho?" }, { question: "Does your niece enjoy playing with you?", translation: "Sua sobrinha gosta de brincar com você?" }, { question: "What activities do you think a grandson would enjoy?", translation: "Quais atividades você acha que um neto aproveitaria?" }, { question: "How would you spoil your granddaughter?", translation: "Como você mimaria sua neta?" }, { question: "What do you admire most about your wife?", translation: "O que você mais admira na sua esposa?" }, { question: "How did you meet your husband?", translation: "Como você conheceu seu marido?" }, { question: "Do you usually have dinner with your mother-in-law?", translation: "Você costuma jantar com sua sogra?" }, { question: "What interests does your father-in-law have?", translation: "Quais interesses seu sogro tem?" }, { question: "Who do you get along with best in your family?", translation: "Com quem você se dá melhor na sua família?" }, { question: "Do you take after your mother or your father?", translation: "Você puxou a sua mãe ou o seu pai?" } ] },
      buildSentence: { level1: [ { english: "My grandmother always tells amazing stories about her youth.", portuguese: "Minha avó sempre conta histórias incríveis sobre sua juventude." }, { english: "They were playing outside with their young nephew.", portuguese: "Eles estavam brincando lá fora com o sobrinho jovem deles." }, { english: "My new sister-in-law gets along well with everyone.", portuguese: "Minha nova cunhada se dá bem com todo mundo." }, { english: "The entire family celebrated my uncle's fiftieth birthday.", portuguese: "Toda a família celebrou o quinquagésimo aniversário do meu tio." }, { english: "People say that I take after my father.", portuguese: "As pessoas dizem que eu puxo ao meu pai." }, { english: "His wife is painting a beautiful landscape right now.", portuguese: "A esposa dele está pintando uma bela paisagem agora mesmo." } ], level2: [ { english: "They settled down and raised their close-knit family here.", portuguese: "Eles sossegaram e criaram sua família unida aqui." }, { english: "The two stubborn siblings were falling out over money.", portuguese: "Os dois irmãos teimosos estavam se desentendendo por causa de dinheiro." }, { english: "Our extended family gathers together every single Christmas.", portuguese: "Nossa família estendida se reúne em todo santo Natal." }, { english: "She strongly resembles the relatives from her mother's side.", portuguese: "Ela se assemelha fortemente aos parentes do lado da mãe dela." }, { english: "Growing up as an only child gave him a unique upbringing.", portuguese: "Crescer como filho único deu a ele uma criação única." }, { english: "They made up quickly after a terrible argument yesterday.", portuguese: "Eles fizeram as pazes rapidamente após uma terrível discussão ontem." } ] },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Mother / Mom means Mãe.", statementPt: "Mother / Mom significa Mãe.", isTrue: true, explanation: "Yes, Mother / Mom means Mãe." }, { statement: "Father / Dad means a type of car.", statementPt: "Father / Dad significa um tipo de carro.", isTrue: false, explanation: "No, Father / Dad means Pai." }, { statement: "Brother means Irmão.", statementPt: "Brother significa Irmão.", isTrue: true, explanation: "Yes, Brother means Irmão." }, { statement: "Sister means a type of car.", statementPt: "Sister significa um tipo de carro.", isTrue: false, explanation: "No, Sister means Irmã." }, { statement: "Grandmother means Avó.", statementPt: "Grandmother significa Avó.", isTrue: true, explanation: "Yes, Grandmother means Avó." }, { statement: "Grandfather means a type of car.", statementPt: "Grandfather significa um tipo de carro.", isTrue: false, explanation: "No, Grandfather means Avô." }, { statement: "Aunt means Tia.", statementPt: "Aunt significa Tia.", isTrue: true, explanation: "Yes, Aunt means Tia." }, { statement: "Uncle means a type of car.", statementPt: "Uncle significa um tipo de carro.", isTrue: false, explanation: "No, Uncle means Tio." }, { statement: "Cousin means Primo(a).", statementPt: "Cousin significa Primo(a).", isTrue: true, explanation: "Yes, Cousin means Primo(a)." }, { statement: "Parents means a type of car.", statementPt: "Parents significa um tipo de carro.", isTrue: false, explanation: "No, Parents means Pais." } ],
                    part2: [ { statement: "Nephew means Sobrinho.", statementPt: "Nephew significa Sobrinho.", isTrue: true, explanation: "Yes, Nephew means Sobrinho." }, { statement: "Niece means a type of car.", statementPt: "Niece significa um tipo de carro.", isTrue: false, explanation: "No, Niece means Sobrinha." }, { statement: "Grandson means Neto.", statementPt: "Grandson significa Neto.", isTrue: true, explanation: "Yes, Grandson means Neto." }, { statement: "Granddaughter means a type of car.", statementPt: "Granddaughter significa um tipo de carro.", isTrue: false, explanation: "No, Granddaughter means Neta." }, { statement: "Wife means Esposa.", statementPt: "Wife significa Esposa.", isTrue: true, explanation: "Yes, Wife means Esposa." }, { statement: "Husband means a type of car.", statementPt: "Husband significa um tipo de carro.", isTrue: false, explanation: "No, Husband means Marido." }, { statement: "Mother-in-law means Sogra.", statementPt: "Mother-in-law significa Sogra.", isTrue: true, explanation: "Yes, Mother-in-law means Sogra." }, { statement: "Father-in-law means a type of car.", statementPt: "Father-in-law significa um tipo de carro.", isTrue: false, explanation: "No, Father-in-law means Sogro." }, { statement: "Stepmother means Madrasta.", statementPt: "Stepmother significa Madrasta.", isTrue: true, explanation: "Yes, Stepmother means Madrasta." }, { statement: "Stepfather means a type of car.", statementPt: "Stepfather significa um tipo de carro.", isTrue: false, explanation: "No, Stepfather means Padrasto." } ]
                  },
      speakingPracticeLevel2: { part1: [ { question: "Who helped bring you up when you were a child?", translation: "Quem ajudou a criar você quando você era criança?" }, { question: "Do you come from a close-knit family?", translation: "Você vem de uma família muito unida?" }, { question: "How often do you visit your in-laws?", translation: "Com que frequência você visita seus sogros/cunhados?" }, { question: "Do you invite your extended family to your birthday parties?", translation: "Você convida sua família estendida para as suas festas de aniversário?" }, { question: "Did you ever wish you were an only child?", translation: "Você já desejou ser filho único?" }, { question: "Which relative lives the furthest away from you?", translation: "Qual parente mora mais longe de você?" }, { question: "How many children do you want, a son or a daughter?", translation: "Quantos filhos você quer ter, um filho ou uma filha?" }, { question: "Does your daughter enjoy studying at school?", translation: "A sua filha gosta de estudar na escola?" }, { question: "Is it normal for siblings to grow apart as they age?", translation: "É normal que os irmãos se afastem à medida que envelhecem?" }, { question: "Who do you look up to the most in your family?", translation: "Quem você mais admira na sua família?" } ], part2: [ { question: "Where do you plan to settle down in the future?", translation: "Onde você planeja sossegar/criar raízes no futuro?" }, { question: "Does your family gather every Christmas?", translation: "Sua família se reúne em todo Natal?" }, { question: "Which sibling are you the closest to?", translation: "De qual irmão/irmã você é mais próximo?" }, { question: "Do you think you had a strict upbringing?", translation: "Você acha que teve uma criação rigorosa?" }, { question: "Can you depend on your family when you are in trouble?", translation: "Você pode contar com sua família quando está em apuros?" }, { question: "When did your parents tie the knot?", translation: "Quando seus pais se casaram?" }, { question: "Do you like to spoil your younger relatives?", translation: "Você gosta de mimar seus parentes mais novos?" }, { question: "Have you ever fallen out with a close family member?", translation: "Você já se desentendeu com um familiar próximo?" }, { question: "Is it easy for you to make up after a family fight?", translation: "É fácil para você fazer as pazes depois de uma briga em família?" }, { question: "Do you strongly resemble your mother or father?", translation: "Você se assemelha fortemente à sua mãe ou ao seu pai?" } ] },
      imageDescription: {
                  imagePath: "/images/scenarios/scenario_familia_1789410479958.jpg",
                  keywords: [
                    { english: "A family sitting together on a blue sofa", portuguese: "Uma família sentada junta em um sofá azul" },
                    { english: "Drinking orange juice and coffee", portuguese: "Bebendo suco de laranja e café" },
                    { english: "Cozy living room with a fireplace", portuguese: "Sala de estar aconchegante com lareira" },
                    { english: "Bookshelves full of books and photos", portuguese: "Estantes cheias de livros e fotos" }
                  ]
                },

      wouldYouRather: [
        { optionA: { english: "Have a big family gathering every weekend", portuguese: "Ter uma grande reunião de família todo fim de semana" }, optionB: { english: "Have a quiet weekend alone", portuguese: "Ter um fim de semana tranquilo sozinho" } },
        { optionA: { english: "Live close to your parents", portuguese: "Morar perto dos seus pais" }, optionB: { english: "Live in another country", portuguese: "Morar em outro país" } },
        { optionA: { english: "Have three brothers", portuguese: "Ter três irmãos" }, optionB: { english: "Have three sisters", portuguese: "Ter três irmãs" } },
        { optionA: { english: "Cook dinner for the family", portuguese: "Fazer o jantar para a família" }, optionB: { english: "Wash all the dishes", portuguese: "Lavar toda a louça" } },
        { optionA: { english: "Share a room with a sibling", portuguese: "Dividir o quarto com um irmão" }, optionB: { english: "Have your own small room", portuguese: "Ter o seu próprio quarto pequeno" } },
        { optionA: { english: "Go on a family vacation to the beach", portuguese: "Férias em família na praia" }, optionB: { english: "Go on a family vacation to the mountains", portuguese: "Férias em família nas montanhas" } },
        { optionA: { english: "Have a strict but caring family", portuguese: "Ter uma família rígida mas carinhosa" }, optionB: { english: "Have a very relaxed family", portuguese: "Ter uma família muito relaxada" } }
      ]
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
    reading: {
      "level1": {
            "textEn": "I have a great group of friends, and they are very important in my life. My best friend is Anna. She is always happy and ready to help anyone. We like to meet up at the big park in our city on weekends. Sometimes, we invite other friends from our neighborhood and have a large picnic under the tall trees. We bring a lot of snacks to share. We talk for hours, eat delicious sandwiches, and have a lot of fun together playing simple games. Having good friends definitely makes life much better and more exciting.",
            "textPt": "Eu tenho um ótimo grupo de amigos, e eles são muito importantes na minha vida. Minha melhor amiga é a Anna. Ela está sempre feliz e pronta para ajudar qualquer um. Nós gostamos de nos encontrar no grande parque da nossa cidade nos fins de semana. Às vezes, convidamos outros amigos do nosso bairro e fazemos um grande piquenique debaixo das árvores altas. Trazemos muitos lanches para compartilhar. Nós conversamos por horas, comemos sanduíches deliciosos e nos divertimos muito juntos jogando jogos simples. Ter bons amigos definitivamente torna a vida muito melhor e mais emocionante.",
            "questions": [
                  {
                        "question": "Who is the author's best friend?",
                        "options": [
                              "Anna",
                              "Maria",
                              "John",
                              "Sarah"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text says 'My best friend is Anna'."
                  },
                  {
                        "question": "Where do they usually meet up?",
                        "options": [
                              "At the park",
                              "At the mall",
                              "At school",
                              "At a cafe"
                        ],
                        "correctIndex": 0,
                        "explanation": "They 'meet up at the big park in our city'."
                  },
                  {
                        "question": "What do they eat during the picnic?",
                        "options": [
                              "Sandwiches",
                              "Pizza",
                              "Cake",
                              "Fruit"
                        ],
                        "correctIndex": 0,
                        "explanation": "They 'eat delicious sandwiches'."
                  },
                  {
                        "question": "What is the final message of the text?",
                        "options": [
                              "Good friends make life better",
                              "Picnics are fun",
                              "Weekends are for sleeping",
                              "You should invite everyone"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text ends by saying 'Having good friends definitely makes life much better'."
                  }
            ]
      },
      "level2": {
            "textEn": "Friendship is a complex relationship that requires mutual trust, patience, and honesty over the years. It is perfectly normal to have disagreements from time to time. When I argue with my friends, I always try to step back, apologize if I am wrong, and genuinely understand their point of view before the situation escalates. Furthermore, it is absolutely essential to keep your friends' secrets safe and to step in to help out when someone is going through a hard time. While acquaintances might be there for the celebrations, a true friend will consistently support you through your worst moments and greatest challenges.",
            "textPt": "A amizade é um relacionamento complexo que exige confiança mútua, paciência e honestidade ao longo dos anos. É perfeitamente normal ter desentendimentos de tempos em tempos. Quando discuto com meus amigos, sempre tento recuar, pedir desculpas se estiver errado e genuinamente entender o ponto de vista deles antes que a situação se agrave. Além disso, é absolutamente essencial manter os segredos dos seus amigos seguros e intervir para ajudar quando alguém está passando por um momento difícil. Enquanto os conhecidos podem estar lá para as celebrações, um verdadeiro amigo apoiará você consistentemente nos seus piores momentos e maiores desafios.",
            "questions": [
                  {
                        "question": "What does friendship require, according to the text?",
                        "options": [
                              "Trust and honesty",
                              "Money and time",
                              "Similar hobbies",
                              "Living close to each other"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text states it requires 'mutual trust, patience, and honesty'."
                  },
                  {
                        "question": "What does the author do after an argument?",
                        "options": [
                              "Apologizes and tries to understand",
                              "Ignores the friend",
                              "Waits for the friend to apologize",
                              "Stops talking to them"
                        ],
                        "correctIndex": 0,
                        "explanation": "They 'apologize if I am wrong, and genuinely understand their point of view'."
                  },
                  {
                        "question": "What is considered essential in a friendship?",
                        "options": [
                              "Keeping secrets and helping out",
                              "Going to parties together",
                              "Agreeing on everything",
                              "Buying expensive gifts"
                        ],
                        "correctIndex": 0,
                        "explanation": "It is 'absolutely essential to keep your friends' secrets safe and to step in to help out'."
                  },
                  {
                        "question": "When will a true friend support you?",
                        "options": [
                              "Through your worst moments",
                              "Only when you are happy",
                              "Only when you have money",
                              "Only at school"
                        ],
                        "correctIndex": 0,
                        "explanation": "A true friend will consistently support you 'through your worst moments'."
                  }
            ]
      }
},
    vocabulary: [
      { english: "Friend", portuguese: "Amigo(a)",
          levels: { 
                        A1: { en: "He is a good friend.", pt: "Ele é um bom amigo." }, 
                        A2: { en: "He was a supportive friend who always helped me overcome challenges.", pt: "Ele foi um amigo apoiador que sempre me ajudou a superar desafios." }
                      }
    },
      { english: "Best friend", portuguese: "Melhor amigo(a)",
          levels: { 
                        A1: { en: "She is my best friend since childhood.", pt: "Ela é minha melhor amiga desde a infância." }, 
                        A2: { en: "She was my most trusted best friend in elementary school.", pt: "Ela era minha melhor amiga de maior confiança no ensino fundamental." }
                      }
    },
      { english: "Hang out", portuguese: "Sair para passear",
          levels: { 
                        A1: { en: "Lets hang out this weekend.", pt: "Vamos sair neste fim de semana." }, 
                        A2: { en: "We rarely hung out because everyone was busy with work.", pt: "Nós raramente saíamos porque todos estavam ocupados com o trabalho." },
              B1: { en: "We usually hang out at the mall on Saturday afternoons.", pt: "Nós geralmente passamos o tempo no shopping nas tardes de sábado." }
        }
    },
      { english: "Meet up", portuguese: "Encontrar-se",
          levels: { 
                        A1: { en: "We can meet up at the cafe.", pt: "Podemos nos encontrar no café." }, 
                        A2: { en: "We agreed to meet up at the downtown cafe right after our shift.", pt: "Nós concordamos em nos encontrar no café do centro logo após o nosso turno." }
                      }
    },
      { english: "Chat", portuguese: "Bater papo",
          levels: { 
                        A1: { en: "I like chatting with you.", pt: "Gosto de bater papo com você." }, 
                        A2: { en: "I really enjoyed chatting with you about our future plans.", pt: "Eu gostei muito de bater papo com você sobre nossos planos futuros." }
                      }
    },
      { english: "Fun", portuguese: "Diversão / Divertido",
          levels: { 
                        A1: { en: "The party was really fun.", pt: "A festa foi muito divertida." }, 
                        A2: { en: "The surprise party at your house was the most fun event of the year.", pt: "A festa surpresa na sua casa foi o evento mais divertido do ano." }
                      }
    },
      { english: "Invite", portuguese: "Convidar",
          levels: { 
                        A1: { en: "I invite them to my house.", pt: "Eu os convido para minha casa." }, 
                        A2: { en: "I invited all my closest friends to celebrate at my house.", pt: "Eu convidei todos os meus amigos mais próximos para celebrar na minha casa." }
                      }
    },
      { english: "Party", portuguese: "Festa",
          levels: { 
                        A1: { en: "Do you go to parties?", pt: "Você vai a festas?" }, 
                        A2: { en: "Did you attend the graduation party last night?", pt: "Você compareceu à festa de formatura ontem à noite?" }
                      }
    },
      { english: "Group", portuguese: "Grupo",
          levels: { 
                        A1: { en: "Our friend group stays together.", pt: "Nosso grupo de amigos fica junto." }, 
                        A2: { en: "Our friend group remained incredibly united despite the distance.", pt: "Nosso grupo de amigos permaneceu incrivelmente unido apesar da distância." }
                      }
    },
      { english: "Share", portuguese: "Compartilhar",
          levels: { 
                        A1: { en: "We share our secrets.", pt: "Nós compartilhamos nossos segredos." }, 
                        A2: { en: "They shared the funny video with all their friends.", pt: "Eles compartilharam o vídeo engraçado com todos os seus amigos." }
                      }
    },
      { english: "Trust", portuguese: "Confiar",
          levels: { 
                        A1: { en: "I trust my friends completely.", pt: "Eu confio nos meus amigos completamente." }, 
                        A2: { en: "I trusted my friends completely with this sensitive information.", pt: "Eu confiei nos meus amigos completamente com essa informação delicada." }
                      }
    },
      { english: "Keep a secret", portuguese: "Guardar segredo",
          levels: { 
                        A1: { en: "Can you keep a secret?", pt: "Você consegue guardar segredo?" }, 
                        A2: { en: "Did you keep the major secret about the surprise party?", pt: "Você guardou o grande segredo sobre a festa surpresa?" }
                      }
    },
      { english: "Argue", portuguese: "Discutir",
          levels: { 
                        A1: { en: "Sometimes we argue, but we fix it.", pt: "Às vezes discutimos, mas nos resolvemos." }, 
                        A2: { en: "We argued a few times in the past, but we fixed things.", pt: "Nós discutimos algumas vezes no passado, mas consertamos as coisas." }
                      }
    },
      { english: "Apologize", portuguese: "Pedir desculpas",
          levels: { 
                        A1: { en: "He apologizes for the delay.", pt: "Ele pede desculpas pelo atraso." }, 
                        A2: { en: "He finally apologized for being late to the important meeting.", pt: "Ele finalmente pediu desculpas por se atrasar para a reunião importante." }
                      }
    },
      { english: "Help out", portuguese: "Ajudar",
          levels: { 
                        A1: { en: "Friends always help out.", pt: "Amigos sempre ajudam." }, 
                        A2: { en: "True friends always helped out when someone faced a tough phase.", pt: "Verdadeiros amigos sempre ajudavam quando alguém enfrentava uma fase difícil." }
                      }
    },
      { english: "Joke", portuguese: "Piada / Brincadeira",
          levels: { 
                        A1: { en: "He always tells funny jokes.", pt: "Ele sempre conta piadas engraçadas." }, 
                        A2: { en: "He told one of the most hilarious jokes I ever heard.", pt: "Ele contou uma das piadas mais hilárias que já ouvi." }
                      }
    },
      { english: "Support", portuguese: "Apoiar",
          levels: { 
                        A1: { en: "Good friends support you in bad times.", pt: "Bons amigos apoiam você nos momentos difíceis." }, 
                        A2: { en: "Good friends always supported each other unconditionally during hard times.", pt: "Bons amigos sempre se apoiavam incondicionalmente durante tempos difíceis." }
                      }
    },
      { english: "Advice", portuguese: "Conselho",
          levels: { 
                        A1: { en: "Can you give me some advice?", pt: "Você pode me dar um conselho?" }, 
                        A2: { en: "I asked him to give me some professional advice about my career.", pt: "Eu pedi a ele que me desse um conselho profissional sobre minha carreira." }
                      }
    },
      { english: "Get along", portuguese: "Se dar bem",
          levels: { 
                        A1: { en: "They get along very well.", pt: "Eles se dão muito bem." }, 
                        A2: { en: "They got along surprisingly well on their first day at school.", pt: "Eles se deram surpreendentemente bem no primeiro dia na escola." }
                      }
    },
      { english: "Introductions", portuguese: "Apresentações",
          levels: { 
                        A1: { en: "I do the introductions.", pt: "Eu faço as apresentações." }, 
                        A2: { en: "I did the introductions so that everyone felt comfortable.", pt: "Eu fiz as apresentações para que todos se sentissem confortáveis." }
                      }
    },
      { english: "Keep in touch", portuguese: "Manter contato",
          levels: { 
                        B1: { en: "Even though she moved away, we still keep in touch.", pt: "Mesmo que ela tenha se mudado, nós ainda mantemos contato." } 
                      }
    },
      { english: "Fall out", portuguese: "Brigar / Desentender-se",
          levels: { 
                        B1: { en: "They fell out over a silly argument and stopped talking.", pt: "Eles brigaram por causa de uma discussão boba e pararam de se falar." } 
                      }
    },
      { english: "Rely on", portuguese: "Contar com / Confiar em",
          levels: { 
                        B1: { en: "You can always rely on me if you need any help.", pt: "Você sempre pode contar comigo se precisar de alguma ajuda." } 
                      }
    },
      { english: "Trustworthy", portuguese: "Confiável",
          levels: { 
                        B1: { en: "He is a highly trustworthy friend who keeps secrets well.", pt: "Ele é um amigo altamente confiável que guarda bem segredos." } 
                      }
    },
      { english: "Acquaintance", portuguese: "Conhecido(a)",
          levels: { 
                        B1: { en: "She is not a close friend, just an acquaintance from work.", pt: "Ela não é uma amiga íntima, apenas uma conhecida do trabalho." } 
                      }
    },
      { english: "Get together", portuguese: "Reunir-se / Encontrar-se",
          levels: { 
                        B1: { en: "Let's get together for a coffee sometime next week.", pt: "Vamos nos encontrar para um café em algum momento da próxima semana." } 
                      }
    },
      { english: "Mate", portuguese: "Amigo / Colega (UK)",
          levels: { 
                        B1: { en: "He went to the pub to watch the game with his mates.", pt: "Ele foi ao pub para assistir ao jogo com os amigos." } 
                      }
    },
      { english: "Catch up", portuguese: "Colocar o papo em dia",
          levels: { 
                        B1: { en: "Let's grab a coffee this weekend and catch up on everything.", pt: "Vamos tomar um café neste final de semana e colocar o papo em dia sobre tudo." } 
                      }
    },
      { english: "Let down", portuguese: "Decepcionar",
          levels: { 
                        B1: { en: "I trust him completely because he has never let me down.", pt: "Eu confio nele completamente porque ele nunca me decepcionou." } 
                      }
    },
      { english: "Turn to", portuguese: "Recorrer a (alguém)",
          levels: { 
                        B1: { en: "When I have a problem, she is the first person I turn to.", pt: "Quando tenho um problema, ela é a primeira pessoa a quem recorro." } 
                      }
    },
      { english: "Stand by", portuguese: "Apoiar / Estar ao lado",
          levels: { 
                        B1: { en: "A true friend will stand by you during the toughest times.", pt: "Um amigo verdadeiro estará ao seu lado durante os momentos mais difíceis." } 
                      }
    },
      { english: "Hit it off", portuguese: "Dar-se bem logo de cara",
          levels: { 
                        B1: { en: "We met at a party and completely hit it off immediately.", pt: "Nos conhecemos em uma festa e nos demos muito bem logo de cara." } 
                      }
    },
      { english: "Count on", portuguese: "Contar com",
          levels: { 
                        B1: { en: "You can count on me to help you move to your new apartment.", pt: "Você pode contar comigo para te ajudar a mudar para o seu apartamento novo." } 
                      }
    },
      { english: "Back up", portuguese: "Apoiar / Dar cobertura",
          levels: { 
                        B1: { en: "I will back you up if the boss asks what happened.", pt: "Eu te darei cobertura se o chefe perguntar o que aconteceu." } 
                      }
    },
      { english: "Put up with", portuguese: "Tolerar / Suportar",
          levels: { 
                        B1: { en: "I don't know how you put up with his annoying complaints all the time.", pt: "Eu não sei como você suporta as reclamações irritantes dele o tempo todo." } 
                      }
    },
      { english: "Cheer up", portuguese: "Animar-se / Alegrar",
          levels: { 
                        B1: { en: "We bought her flowers to cheer her up after the bad news.", pt: "Nós compramos flores para ela para animá-la depois da má notícia." } 
                      }
    },
      { english: "Bond", portuguese: "Criar laço afetivo",
          levels: { 
                        B1: { en: "They bonded over their shared love for classic movies.", pt: "Eles criaram um laço devido ao amor compartilhado por filmes clássicos." } 
                      }
    },
      { english: "Drift apart", portuguese: "Afastar-se (aos poucos)",
          levels: { 
                        B1: { en: "After high school, we slowly began to drift apart.", pt: "Depois do ensino médio, nós começamos a nos afastar lentamente." } 
                      }
    },
      { english: "Show up", portuguese: "Aparecer / Chegar",
          levels: { 
                        B1: { en: "I invited twenty people, but only ten showed up to the dinner.", pt: "Eu convidei vinte pessoas, mas apenas dez apareceram para o jantar." } 
                      }
    }
      ],
      flashcardsA2: [
          {
              "english": "Did you keep the major secret about the surprise party?",
              "portuguese": "Você guardou o grande segredo sobre a festa surpresa?",
              "example": "Palavra-chave: Keep a secret"
          },
          {
              "english": "We argued a few times in the past, but we fixed things.",
              "portuguese": "Nós discutimos algumas vezes no passado, mas consertamos as coisas.",
              "example": "Palavra-chave: Argue"
          },
          {
              "english": "She was my most trusted best friend in elementary school.",
              "portuguese": "Ela era minha melhor amiga de maior confiança no ensino fundamental.",
              "example": "Palavra-chave: Best friend"
          },
          {
              "english": "They got along surprisingly well on their first day at school.",
              "portuguese": "Eles se deram surpreendentemente bem no primeiro dia na escola.",
              "example": "Palavra-chave: Get along"
          },
          {
              "english": "We rarely hung out because everyone was busy with work.",
              "portuguese": "Nós raramente saíamos porque todos estavam ocupados com o trabalho.",
              "example": "Palavra-chave: Hang out"
          },
          {
              "english": "We agreed to meet up at the downtown cafe right after our shift.",
              "portuguese": "Nós concordamos em nos encontrar no café do centro logo após o nosso turno.",
              "example": "Palavra-chave: Meet up"
          },
          {
              "english": "I invited all my closest friends to celebrate at my house.",
              "portuguese": "Eu convidei todos os meus amigos mais próximos para celebrar na minha casa.",
              "example": "Palavra-chave: Invite"
          },
          {
              "english": "Good friends always supported each other unconditionally during hard times.",
              "portuguese": "Bons amigos sempre se apoiavam incondicionalmente durante tempos difíceis.",
              "example": "Palavra-chave: Support"
          },
          {
              "english": "Our friend group remained incredibly united despite the distance.",
              "portuguese": "Nosso grupo de amigos permaneceu incrivelmente unido apesar da distância.",
              "example": "Palavra-chave: Group"
          },
          {
              "english": "I asked him to give me some professional advice about my career.",
              "portuguese": "Eu pedi a ele que me desse um conselho profissional sobre minha carreira.",
              "example": "Palavra-chave: Advice"
          },
          {
              "english": "I did the introductions so that everyone felt comfortable.",
              "portuguese": "Eu fiz as apresentações para que todos se sentissem confortáveis.",
              "example": "Palavra-chave: Introductions"
          },
          {
              "english": "He finally apologized for being late to the important meeting.",
              "portuguese": "Ele finalmente pediu desculpas por se atrasar para a reunião importante.",
              "example": "Palavra-chave: Apologize"
          },
          {
              "english": "They shared the funny video with all their friends.",
              "portuguese": "Eles compartilharam o vídeo engraçado com todos os seus amigos.",
              "example": "Palavra-chave: Share"
          },
          {
              "english": "The surprise party at your house was the most fun event of the year.",
              "portuguese": "A festa surpresa na sua casa foi o evento mais divertido do ano.",
              "example": "Palavra-chave: Fun"
          },
          {
              "english": "True friends always helped out when someone faced a tough phase.",
              "portuguese": "Verdadeiros amigos sempre ajudavam quando alguém enfrentava uma fase difícil.",
              "example": "Palavra-chave: Help out"
          },
          {
              "english": "He was a supportive friend who always helped me overcome challenges.",
              "portuguese": "Ele foi um amigo apoiador que sempre me ajudou a superar desafios.",
              "example": "Palavra-chave: Friend"
          },
          {
              "english": "I really enjoyed chatting with you about our future plans.",
              "portuguese": "Eu gostei muito de bater papo com você sobre nossos planos futuros.",
              "example": "Palavra-chave: Chat"
          },
          {
              "english": "Did you attend the graduation party last night?",
              "portuguese": "Você compareceu à festa de formatura ontem à noite?",
              "example": "Palavra-chave: Party"
          },
          {
              "english": "I trusted my friends completely with this sensitive information.",
              "portuguese": "Eu confiei nos meus amigos completamente com essa informação delicada.",
              "example": "Palavra-chave: Trust"
          },
          {
              "english": "He told one of the most hilarious jokes I ever heard.",
              "portuguese": "Ele contou uma das piadas mais hilárias que já ouvi.",
              "example": "Palavra-chave: Joke"
          }
      ],
      flashcardsB1: [
          {
              "english": "They fell out over a silly argument and stopped talking.",
              "portuguese": "Eles brigaram por causa de uma discussão boba e pararam de se falar.",
              "example": "Palavra-chave: Fall out"
          },
          {
              "english": "You can always rely on me if you need any help.",
              "portuguese": "Você sempre pode contar comigo se precisar de alguma ajuda.",
              "example": "Palavra-chave: Rely on"
          },
          {
              "english": "When I have a problem, she is the first person I turn to.",
              "portuguese": "Quando tenho um problema, ela é a primeira pessoa a quem recorro.",
              "example": "Palavra-chave: Turn to"
          },
          {
              "english": "Even though she moved away, we still keep in touch.",
              "portuguese": "Mesmo que ela tenha se mudado, nós ainda mantemos contato.",
              "example": "Palavra-chave: Keep in touch"
          },
          {
              "english": "After high school, we slowly began to drift apart.",
              "portuguese": "Depois do ensino médio, nós começamos a nos afastar lentamente.",
              "example": "Palavra-chave: Drift apart"
          },
          {
              "english": "We bought her flowers to cheer her up after the bad news.",
              "portuguese": "Nós compramos flores para ela para animá-la depois da má notícia.",
              "example": "Palavra-chave: Cheer up"
          },
          {
              "english": "They bonded over their shared love for classic movies.",
              "portuguese": "Eles criaram um laço devido ao amor compartilhado por filmes clássicos.",
              "example": "Palavra-chave: Bond"
          },
          {
              "english": "I invited twenty people, but only ten showed up to the dinner.",
              "portuguese": "Eu convidei vinte pessoas, mas apenas dez apareceram para o jantar.",
              "example": "Palavra-chave: Show up"
          },
          {
              "english": "He is a highly trustworthy friend who keeps secrets well.",
              "portuguese": "Ele é um amigo altamente confiável que guarda bem segredos.",
              "example": "Palavra-chave: Trustworthy"
          },
          {
              "english": "Let's grab a coffee this weekend and catch up on everything.",
              "portuguese": "Vamos tomar um café neste final de semana e colocar o papo em dia sobre tudo.",
              "example": "Palavra-chave: Catch up"
          },
          {
              "english": "You can count on me to help you move to your new apartment.",
              "portuguese": "Você pode contar comigo para te ajudar a mudar para o seu apartamento novo.",
              "example": "Palavra-chave: Count on"
          },
          {
              "english": "We usually hang out at the mall on Saturday afternoons.",
              "portuguese": "Nós geralmente passamos o tempo no shopping nas tardes de sábado.",
              "example": "Palavra-chave: Hang out"
          },
          {
              "english": "Let's get together for a coffee sometime next week.",
              "portuguese": "Vamos nos encontrar para um café em algum momento da próxima semana.",
              "example": "Palavra-chave: Get together"
          },
          {
              "english": "A true friend will stand by you during the toughest times.",
              "portuguese": "Um amigo verdadeiro estará ao seu lado durante os momentos mais difíceis.",
              "example": "Palavra-chave: Stand by"
          },
          {
              "english": "I will back you up if the boss asks what happened.",
              "portuguese": "Eu te darei cobertura se o chefe perguntar o que aconteceu.",
              "example": "Palavra-chave: Back up"
          },
          {
              "english": "We met at a party and completely hit it off immediately.",
              "portuguese": "Nos conhecemos em uma festa e nos demos muito bem logo de cara.",
              "example": "Palavra-chave: Hit it off"
          },
          {
              "english": "He went to the pub to watch the game with his mates.",
              "portuguese": "Ele foi ao pub para assistir ao jogo com os amigos.",
              "example": "Palavra-chave: Mate"
          },
          {
              "english": "I don't know how you put up with his annoying complaints all the time.",
              "portuguese": "Eu não sei como você suporta as reclamações irritantes dele o tempo todo.",
              "example": "Palavra-chave: Put up with"
          },
          {
              "english": "I trust him completely because he has never let me down.",
              "portuguese": "Eu confio nele completamente porque ele nunca me decepcionou.",
              "example": "Palavra-chave: Let down"
          },
          {
              "english": "She is not a close friend, just an acquaintance from work.",
              "portuguese": "Ela não é uma amiga íntima, apenas uma conhecida do trabalho.",
              "example": "Palavra-chave: Acquaintance"
          }
      ],
      quizA2: [
          {
              "question": "Complete a frase: \"He was a supportive ______ who always helped me overcome challenges.\"",
              "options": [
                  "Friend",
                  "Hang out",
                  "Hang out",
                  "Keep a secret"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He was a supportive friend who always helped me overcome challenges.\", que significa \"Ele foi um amigo apoiador que sempre me ajudou a superar desafios.\"."
          },
          {
              "question": "Complete a frase: \"We agreed to ______ at the downtown cafe right after our shift.\"",
              "options": [
                  "Invite",
                  "Chat",
                  "Meet up",
                  "Turn to"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"We agreed to meet up at the downtown cafe right after our shift.\", que significa \"Nós concordamos em nos encontrar no café do centro logo após o nosso turno.\"."
          },
          {
              "question": "O que significa a frase: \"They got along surprisingly well on their first day at school.\"?",
              "options": [
                  "Você guardou o grande segredo sobre a festa surpresa?",
                  "Eles se deram surpreendentemente bem no primeiro dia na escola.",
                  "Você compareceu à festa de formatura ontem à noite?",
                  "Eles compartilharam o vídeo engraçado com todos os seus amigos."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"They got along surprisingly well on their first day at school.\", que significa \"Eles se deram surpreendentemente bem no primeiro dia na escola.\"."
          },
          {
              "question": "Traduza a frase: \"Você compareceu à festa de formatura ontem à noite?\"",
              "options": [
                  "Did you keep the major secret about the surprise party?",
                  "Did you attend the graduation party last night?",
                  "We argued a few times in the past, but we fixed things.",
                  "I trusted my friends completely with this sensitive information."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"Did you attend the graduation party last night?\", que significa \"Você compareceu à festa de formatura ontem à noite?\"."
          },
          {
              "question": "Traduza a frase: \"A festa surpresa na sua casa foi o evento mais divertido do ano.\"",
              "options": [
                  "The surprise party at your house was the most fun event of the year.",
                  "True friends always helped out when someone faced a tough phase.",
                  "Did you attend the graduation party last night?",
                  "He was a supportive friend who always helped me overcome challenges."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"The surprise party at your house was the most fun event of the year.\", que significa \"A festa surpresa na sua casa foi o evento mais divertido do ano.\"."
          },
          {
              "question": "Complete a frase: \"I asked him to give me some professional ______ about my career.\"",
              "options": [
                  "Advice",
                  "Turn to",
                  "Joke",
                  "Let down"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"I asked him to give me some professional advice about my career.\", que significa \"Eu pedi a ele que me desse um conselho profissional sobre minha carreira.\"."
          },
          {
              "question": "O que significa a frase: \"He told one of the most hilarious jokes I ever heard.\"?",
              "options": [
                  "Você compareceu à festa de formatura ontem à noite?",
                  "Ele contou uma das piadas mais hilárias que já ouvi.",
                  "Ele foi um amigo apoiador que sempre me ajudou a superar desafios.",
                  "Ela era minha melhor amiga de maior confiança no ensino fundamental."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He told one of the most hilarious jokes I ever heard.\", que significa \"Ele contou uma das piadas mais hilárias que já ouvi.\"."
          },
          {
              "question": "Traduza a frase: \"Nós discutimos algumas vezes no passado, mas consertamos as coisas.\"",
              "options": [
                  "He was a supportive friend who always helped me overcome challenges.",
                  "We argued a few times in the past, but we fixed things.",
                  "I invited all my closest friends to celebrate at my house.",
                  "I asked him to give me some professional advice about my career."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"We argued a few times in the past, but we fixed things.\", que significa \"Nós discutimos algumas vezes no passado, mas consertamos as coisas.\"."
          },
          {
              "question": "Traduza a frase: \"Eles compartilharam o vídeo engraçado com todos os seus amigos.\"",
              "options": [
                  "True friends always helped out when someone faced a tough phase.",
                  "They shared the funny video with all their friends.",
                  "I trusted my friends completely with this sensitive information.",
                  "We agreed to meet up at the downtown cafe right after our shift."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"They shared the funny video with all their friends.\", que significa \"Eles compartilharam o vídeo engraçado com todos os seus amigos.\"."
          },
          {
              "question": "O que significa a frase: \"True friends always helped out when someone faced a tough phase.\"?",
              "options": [
                  "Ele foi um amigo apoiador que sempre me ajudou a superar desafios.",
                  "Bons amigos sempre se apoiavam incondicionalmente durante tempos difíceis.",
                  "Verdadeiros amigos sempre ajudavam quando alguém enfrentava uma fase difícil.",
                  "Ela era minha melhor amiga de maior confiança no ensino fundamental."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"True friends always helped out when someone faced a tough phase.\", que significa \"Verdadeiros amigos sempre ajudavam quando alguém enfrentava uma fase difícil.\"."
          }
      ],
      quizB1: [
          {
              "question": "Traduza a frase: \"Nós geralmente passamos o tempo no shopping nas tardes de sábado.\"",
              "options": [
                  "We usually hang out at the mall on Saturday afternoons.",
                  "He is a highly trustworthy friend who keeps secrets well.",
                  "After high school, we slowly began to drift apart.",
                  "Even though she moved away, we still keep in touch."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"We usually hang out at the mall on Saturday afternoons.\", que significa \"Nós geralmente passamos o tempo no shopping nas tardes de sábado.\"."
          },
          {
              "question": "Complete a frase: \"Even though she moved away, we still ______.\"",
              "options": [
                  "Mate",
                  "Keep in touch",
                  "Joke",
                  "Put up with"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"Even though she moved away, we still keep in touch.\", que significa \"Mesmo que ela tenha se mudado, nós ainda mantemos contato.\"."
          },
          {
              "question": "Complete a frase: \"A true friend will ______ you during the toughest times.\"",
              "options": [
                  "Stand by",
                  "Trustworthy",
                  "Let down",
                  "Joke"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"A true friend will stand by you during the toughest times.\", que significa \"Um amigo verdadeiro estará ao seu lado durante os momentos mais difíceis.\"."
          },
          {
              "question": "Traduza a frase: \"Quando tenho um problema, ela é a primeira pessoa a quem recorro.\"",
              "options": [
                  "You can always rely on me if you need any help.",
                  "We usually hang out at the mall on Saturday afternoons.",
                  "They fell out over a silly argument and stopped talking.",
                  "When I have a problem, she is the first person I turn to."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"When I have a problem, she is the first person I turn to.\", que significa \"Quando tenho um problema, ela é a primeira pessoa a quem recorro.\"."
          },
          {
              "question": "Complete a frase: \"She is not a close friend, just an ______ from work.\"",
              "options": [
                  "Stand by",
                  "Acquaintance",
                  "Trustworthy",
                  "Friend"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"She is not a close friend, just an acquaintance from work.\", que significa \"Ela não é uma amiga íntima, apenas uma conhecida do trabalho.\"."
          },
          {
              "question": "O que significa a frase: \"I invited twenty people, but only ten showed up to the dinner.\"?",
              "options": [
                  "Eu não sei como você suporta as reclamações irritantes dele o tempo todo.",
                  "Eles brigaram por causa de uma discussão boba e pararam de se falar.",
                  "Mesmo que ela tenha se mudado, nós ainda mantemos contato.",
                  "Eu convidei vinte pessoas, mas apenas dez apareceram para o jantar."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"I invited twenty people, but only ten showed up to the dinner.\", que significa \"Eu convidei vinte pessoas, mas apenas dez apareceram para o jantar.\"."
          },
          {
              "question": "Traduza a frase: \"Eu confio nele completamente porque ele nunca me decepcionou.\"",
              "options": [
                  "A true friend will stand by you during the toughest times.",
                  "I trust him completely because he has never let me down.",
                  "He is a highly trustworthy friend who keeps secrets well.",
                  "You can always rely on me if you need any help."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"I trust him completely because he has never let me down.\", que significa \"Eu confio nele completamente porque ele nunca me decepcionou.\"."
          },
          {
              "question": "Traduza a frase: \"Você sempre pode contar comigo se precisar de alguma ajuda.\"",
              "options": [
                  "I don't know how you put up with his annoying complaints all the time.",
                  "You can count on me to help you move to your new apartment.",
                  "You can always rely on me if you need any help.",
                  "We bought her flowers to cheer her up after the bad news."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"You can always rely on me if you need any help.\", que significa \"Você sempre pode contar comigo se precisar de alguma ajuda.\"."
          },
          {
              "question": "Complete a frase: \"He is a highly ______ friend who keeps secrets well.\"",
              "options": [
                  "Drift apart",
                  "Cheer up",
                  "Trustworthy",
                  "Turn to"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"He is a highly trustworthy friend who keeps secrets well.\", que significa \"Ele é um amigo altamente confiável que guarda bem segredos.\"."
          },
          {
              "question": "Traduza a frase: \"Vamos nos encontrar para um café em algum momento da próxima semana.\"",
              "options": [
                  "We usually hang out at the mall on Saturday afternoons.",
                  "Let's get together for a coffee sometime next week.",
                  "We met at a party and completely hit it off immediately.",
                  "Even though she moved away, we still keep in touch."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"Let's get together for a coffee sometime next week.\", que significa \"Vamos nos encontrar para um café em algum momento da próxima semana.\"."
          }
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
      { speaker: "Mark", english: "I can't wait. See you on Saturday, Anna!", portuguese: "Mal posso esperar. Te vejo no sábado, Anna!", isPrimary: true }],
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
      { english: "Friends help each other.", portuguese: "Amigos ajudam uns aos outros." }],
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
      { question: 'What does "Sure!" mean in a conversation?', options: ["Não!", "Talvez!", "Claro!", "Nunca!"], correctIndex: 2, explanation: '"Sure!" is a friendly way to say yes or agree (Claro!).' }],
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
    speakingPractice: { part1: [ { question: "Who is your oldest friend and how did you meet?", translation: "Quem é seu amigo mais antigo e como vocês se conheceram?" }, { question: "What makes someone your best friend?", translation: "O que faz de alguém seu melhor amigo?" }, { question: "Where do you usually hang out on weekends?", translation: "Onde você costuma sair nos fins de semana?" }, { question: "When did you last meet up with your childhood friends?", translation: "Quando foi a última vez que você se encontrou com seus amigos de infância?" }, { question: "Do you prefer to chat online or in person?", translation: "Você prefere bater papo online ou pessoalmente?" }, { question: "What is the most fun activity you do with your group?", translation: "Qual é a atividade mais divertida que você faz com seu grupo?" }, { question: "Who did you invite to your last birthday dinner?", translation: "Quem você convidou para o seu último jantar de aniversário?" }, { question: "Do you enjoy throwing a big party at your house?", translation: "Você gosta de dar uma grande festa na sua casa?" }, { question: "Are you part of a close group of friends?", translation: "Você faz parte de um grupo unido de amigos?" }, { question: "Do you often share your personal goals with others?", translation: "Você costuma compartilhar seus objetivos pessoais com os outros?" } ], part2: [ { question: "Who do you trust with your deepest secrets?", translation: "Em quem você confia seus segredos mais profundos?" }, { question: "Is it hard for you to keep a secret?", translation: "É difícil para você guardar um segredo?" }, { question: "Do you often argue with your friends over silly things?", translation: "Você costuma discutir com seus amigos sobre coisas bobas?" }, { question: "When was the last time you had to apologize to someone?", translation: "Quando foi a última vez que você teve que pedir desculpas a alguém?" }, { question: "How do you usually help out a friend in need?", translation: "Como você costuma ajudar um amigo que precisa?" }, { question: "Can you tell a really good joke?", translation: "Você sabe contar uma piada muito boa?" }, { question: "How do your friends support you when you are sad?", translation: "Como seus amigos te apoiam quando você está triste?" }, { question: "Who gives the best advice in your life?", translation: "Quem dá os melhores conselhos na sua vida?" }, { question: "Do you get along easily with new people?", translation: "Você se dá bem facilmente com pessoas novas?" }, { question: "Are you good at making introductions at a party?", translation: "Você é bom em fazer apresentações em uma festa?" } ] },
      buildSentence: { level1: [ { english: "We invited our closest friends to the weekend party.", portuguese: "Nós convidamos nossos amigos mais próximos para a festa de fim de semana." }, { english: "He apologized because he made a terrible mistake.", portuguese: "Ele pediu desculpas porque cometeu um erro terrível." }, { english: "My best friend gives me some really excellent advice.", portuguese: "Meu melhor amigo me dá alguns conselhos realmente excelentes." }, { english: "They are hanging out at the mall this Saturday.", portuguese: "Eles estão saindo no shopping neste sábado." }, { english: "She never reveals a secret from a good friend.", portuguese: "Ela nunca revela um segredo de um bom amigo." }, { english: "We were arguing a lot about silly little things.", portuguese: "Nós estávamos discutindo muito sobre pequenas coisas bobas." } ], level2: [ { english: "We keep in touch even though we live far apart.", portuguese: "Nós mantemos contato mesmo morando longe." }, { english: "She relied on a trustworthy mate during difficult times.", portuguese: "Ela contou com um parceiro confiável durante momentos difíceis." }, { english: "They drifted apart after they graduated from high school.", portuguese: "Eles se distanciaram depois que se formaram no ensino médio." }, { english: "I always stand by you when you need help.", portuguese: "Eu sempre fico ao seu lado quando você precisa de ajuda." }, { english: "She put up with his terrible behavior for years.", portuguese: "Ela tolerou o comportamento terrível dele por anos." }, { english: "They were hitting it off when they first met.", portuguese: "Eles estavam se dando bem logo que se conheceram." } ] },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Friend means Amigo(a).", statementPt: "Friend significa Amigo(a).", isTrue: true, explanation: "Yes, Friend means Amigo(a)." }, { statement: "Best friend means a type of car.", statementPt: "Best friend significa um tipo de carro.", isTrue: false, explanation: "No, Best friend means Melhor amigo(a)." }, { statement: "Hang out means Sair para passear.", statementPt: "Hang out significa Sair para passear.", isTrue: true, explanation: "Yes, Hang out means Sair para passear." }, { statement: "Meet up means a type of car.", statementPt: "Meet up significa um tipo de carro.", isTrue: false, explanation: "No, Meet up means Encontrar-se." }, { statement: "Chat means Bater papo.", statementPt: "Chat significa Bater papo.", isTrue: true, explanation: "Yes, Chat means Bater papo." }, { statement: "Fun means a type of car.", statementPt: "Fun significa um tipo de carro.", isTrue: false, explanation: "No, Fun means Diversão / Divertido." }, { statement: "Invite means Convidar.", statementPt: "Invite significa Convidar.", isTrue: true, explanation: "Yes, Invite means Convidar." }, { statement: "Party means a type of car.", statementPt: "Party significa um tipo de carro.", isTrue: false, explanation: "No, Party means Festa." }, { statement: "Group means Grupo.", statementPt: "Group significa Grupo.", isTrue: true, explanation: "Yes, Group means Grupo." }, { statement: "Share means a type of car.", statementPt: "Share significa um tipo de carro.", isTrue: false, explanation: "No, Share means Compartilhar." } ],
                    part2: [ { statement: "Trust means Confiar.", statementPt: "Trust significa Confiar.", isTrue: true, explanation: "Yes, Trust means Confiar." }, { statement: "Keep a secret means a type of car.", statementPt: "Keep a secret significa um tipo de carro.", isTrue: false, explanation: "No, Keep a secret means Guardar segredo." }, { statement: "Argue means Discutir.", statementPt: "Argue significa Discutir.", isTrue: true, explanation: "Yes, Argue means Discutir." }, { statement: "Apologize means a type of car.", statementPt: "Apologize significa um tipo de carro.", isTrue: false, explanation: "No, Apologize means Pedir desculpas." }, { statement: "Help out means Ajudar.", statementPt: "Help out significa Ajudar.", isTrue: true, explanation: "Yes, Help out means Ajudar." }, { statement: "Joke means a type of car.", statementPt: "Joke significa um tipo de carro.", isTrue: false, explanation: "No, Joke means Piada / Brincadeira." }, { statement: "Support means Apoiar.", statementPt: "Support significa Apoiar.", isTrue: true, explanation: "Yes, Support means Apoiar." }, { statement: "Advice means a type of car.", statementPt: "Advice significa um tipo de carro.", isTrue: false, explanation: "No, Advice means Conselho." }, { statement: "Get along means Se dar bem.", statementPt: "Get along significa Se dar bem.", isTrue: true, explanation: "Yes, Get along means Se dar bem." }, { statement: "Introductions means a type of car.", statementPt: "Introductions significa um tipo de carro.", isTrue: false, explanation: "No, Introductions means Apresentações." } ]
                  },
      speakingPracticeLevel2: { part1: [ { question: "How do you keep in touch with old friends?", translation: "Como você mantém contato com velhos amigos?" }, { question: "Why did you fall out with your childhood friend?", translation: "Por que você se desentendeu com seu amigo de infância?" }, { question: "Can you always rely on your best friend for help?", translation: "Você pode sempre contar com seu melhor amigo para pedir ajuda?" }, { question: "Do you consider yourself a trustworthy person?", translation: "Você se considera uma pessoa confiável?" }, { question: "Is there an acquaintance you want to get to know better?", translation: "Há algum conhecido que você queira conhecer melhor?" }, { question: "When did you last get together with your classmates?", translation: "Quando foi a última vez que você se reuniu com seus colegas de classe?" }, { question: "Do you usually call your friends 'mate'?", translation: "Você costuma chamar seus amigos de 'mate' (parceiro/cara)?" }, { question: "Would you like to catch up over coffee this weekend?", translation: "Você gostaria de colocar o papo em dia tomando um café neste final de semana?" }, { question: "Have you ever let down a friend who needed you?", translation: "Você já decepcionou um amigo que precisava de você?" }, { question: "Who do you turn to when you have a big problem?", translation: "A quem você recorre quando tem um grande problema?" } ], part2: [ { question: "Will your friends stand by you in a crisis?", translation: "Seus amigos ficarão ao seu lado em uma crise?" }, { question: "Did you hit it off immediately with your best friend?", translation: "Vocês se deram bem de imediato com o seu melhor amigo?" }, { question: "Can I count on you to keep a secret?", translation: "Posso contar com você para guardar um segredo?" }, { question: "Do your friends usually back you up in an argument?", translation: "Seus amigos costumam te apoiar/dar cobertura em uma discussão?" }, { question: "What is the hardest habit of your friend to put up with?", translation: "Qual é o hábito mais difícil do seu amigo de tolerar?" }, { question: "How do you cheer up someone who is crying?", translation: "Como você anima alguém que está chorando?" }, { question: "Do you bond easily with people at a party?", translation: "Você cria laços/se conecta facilmente com as pessoas em uma festa?" }, { question: "Why do some good friends drift apart over time?", translation: "Por que alguns bons amigos se distanciam com o tempo?" }, { question: "Did everyone show up at your last birthday dinner?", translation: "Todo mundo apareceu no seu último jantar de aniversário?" } ] },
      imageDescription: {
                  imagePath: "/images/scenarios/scenario_amigos_1789410489902.jpg",
                  keywords: [
                    { english: "Six friends having a picnic in the park", portuguese: "Seis amigos fazendo um piquenique no parque" },
                    { english: "Sitting on a checkered picnic blanket", portuguese: "Sentados em uma toalha de piquenique xadrez" },
                    { english: "Eating sandwiches and having fun", portuguese: "Comendo sanduíches e se divertindo" },
                    { english: "Wicker picnic basket on the grass", portuguese: "Cesta de piquenique de vime na grama" }
                  ]
                },

      wouldYouRather: [
        { optionA: { english: "Have one best friend", portuguese: "Ter um melhor amigo" }, optionB: { english: "Have many good friends", portuguese: "Ter muitos bons amigos" } },
        { optionA: { english: "Travel with friends", portuguese: "Viajar com amigos" }, optionB: { english: "Travel alone", portuguese: "Viajar sozinho" } },
        { optionA: { english: "Go to a loud party", portuguese: "Ir a uma festa barulhenta" }, optionB: { english: "Have a picnic in the park", portuguese: "Fazer um piquenique no parque" } },
        { optionA: { english: "Lend money to a friend", portuguese: "Emprestar dinheiro a um amigo" }, optionB: { english: "Borrow money from a friend", portuguese: "Pegar dinheiro emprestado de um amigo" } },
        { optionA: { english: "Keep a secret for a friend", portuguese: "Guardar um segredo de um amigo" }, optionB: { english: "Tell them the hard truth", portuguese: "Dizer a eles a dura verdade" } },
        { optionA: { english: "Host a dinner party for friends", portuguese: "Dar um jantar para os amigos" }, optionB: { english: "Be a guest at a friend's party", portuguese: "Ser convidado na festa de um amigo" } },
        { optionA: { english: "Forgive a friend who lied", portuguese: "Perdoar um amigo que mentiu" }, optionB: { english: "Stop talking to them", portuguese: "Parar de falar com eles" } }
      ]
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
    reading: {
      "level1": {
            "textEn": "I use my body every single day to do many wonderful things. My body allows me to explore the world around me. I use my eyes to see beautiful colors in the sky and read my favorite books. I use my strong legs to walk to school and run in the park with my friends. My hands are very useful because they help me hold my books, draw pictures, and write my name. Because our bodies do so much for us, it is highly important to take good care of them. You must wash your hands before eating and brush your teeth twice a day to keep your body healthy and clean.",
            "textPt": "Eu uso meu corpo todos os dias para fazer muitas coisas maravilhosas. Meu corpo me permite explorar o mundo ao meu redor. Uso meus olhos para ver cores bonitas no céu e ler meus livros favoritos. Uso minhas pernas fortes para caminhar até a escola e correr no parque com meus amigos. Minhas mãos são muito úteis porque me ajudam a segurar meus livros, desenhar e escrever meu nome. Como nossos corpos fazem tanto por nós, é altamente importante cuidar bem deles. Você deve lavar as mãos antes de comer e escovar os dentes duas vezes ao dia para manter seu corpo saudável e limpo.",
            "questions": [
                  {
                        "question": "What does the author use to see colors?",
                        "options": [
                              "Eyes",
                              "Ears",
                              "Nose",
                              "Mouth"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text says 'I use my eyes to see beautiful colors'."
                  },
                  {
                        "question": "How does the author go to school?",
                        "options": [
                              "By walking",
                              "By bus",
                              "By car",
                              "By bicycle"
                        ],
                        "correctIndex": 0,
                        "explanation": "They say 'I use my strong legs to walk to school'."
                  },
                  {
                        "question": "What do the hands help the author do?",
                        "options": [
                              "Hold books and write",
                              "Eat and drink",
                              "Play sports",
                              "Clean the house"
                        ],
                        "correctIndex": 0,
                        "explanation": "Hands help them 'hold my books, draw pictures, and write'."
                  },
                  {
                        "question": "What should you do to keep your body healthy?",
                        "options": [
                              "Wash hands and brush teeth",
                              "Sleep all day",
                              "Eat candy",
                              "Never go outside"
                        ],
                        "correctIndex": 0,
                        "explanation": "You must 'wash your hands before eating and brush your teeth'."
                  }
            ]
      },
      "level2": {
            "textEn": "Taking care of your physical health is vital for ensuring a long, happy, and active life. In today's modern society, many people experience chronic back or shoulder pain simply because they sit staring at a desk all day without moving. To effectively prevent this type of discomfort, you should make it a habit to stretch your muscles regularly and take short walking breaks. Furthermore, if you accidentally hurt your knee or ankle while exercising, you must not ignore it. You should rest the affected area and apply ice to reduce the swelling. Ultimately, listening to your body's signals is the best way to avoid serious injuries.",
            "textPt": "Cuidar da sua saúde física é vital para garantir uma vida longa, feliz e ativa. Na sociedade moderna de hoje, muitas pessoas sentem dores crônicas nas costas ou nos ombros simplesmente porque ficam sentadas olhando para uma mesa o dia todo sem se mexer. Para evitar efetivamente esse tipo de desconforto, você deve criar o hábito de alongar os músculos regularmente e fazer pausas curtas para caminhar. Além disso, se você machucar acidentalmente o joelho ou o tornozelo durante o exercício, não deve ignorar. Você deve descansar a área afetada e aplicar gelo para reduzir o inchaço. Por fim, ouvir os sinais do seu corpo é a melhor maneira de evitar lesões graves.",
            "questions": [
                  {
                        "question": "Why do many people experience back or shoulder pain?",
                        "options": [
                              "Because they sit at a desk all day",
                              "Because they exercise too much",
                              "Because they sleep poorly",
                              "Because they lift heavy things"
                        ],
                        "correctIndex": 0,
                        "explanation": "They have pain 'because they sit staring at a desk all day without moving'."
                  },
                  {
                        "question": "How can you prevent muscle pain at work?",
                        "options": [
                              "Stretch your muscles regularly",
                              "Drink lots of coffee",
                              "Buy a new chair",
                              "Work standing up"
                        ],
                        "correctIndex": 0,
                        "explanation": "You should 'stretch your muscles regularly and take short walking breaks'."
                  },
                  {
                        "question": "What should you do if you hurt your knee?",
                        "options": [
                              "Rest and apply ice",
                              "Keep running",
                              "Take a hot shower",
                              "Go to sleep"
                        ],
                        "correctIndex": 0,
                        "explanation": "You should 'rest the affected area and apply ice'."
                  },
                  {
                        "question": "What is the best way to avoid serious injuries?",
                        "options": [
                              "Listening to your body",
                              "Never exercising",
                              "Running every day",
                              "Eating healthy food"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text concludes 'listening to your body's signals is the best way to avoid serious injuries'."
                  }
            ]
      }
},
    vocabulary: [
      { english: "Head", portuguese: "Cabeça",
          levels: { 
                        A1: { en: "My head hurts.", pt: "Minha cabeça dói." }, 
                        A2: { en: "He bumped his head on the low ceiling yesterday.", pt: "Ele bateu a cabeça no teto baixo ontem." }
                      }
    },
      { english: "Arm", portuguese: "Braço",
          levels: { 
                        A1: { en: "He has a broken arm.", pt: "Ele tem um braço quebrado." }, 
                        A2: { en: "She broke her arm while playing basketball.", pt: "Ela quebrou o braço enquanto jogava basquete." }
                      }
    },
      { english: "Leg", portuguese: "Perna",
          levels: { 
                        A1: { en: "My legs are tired after the run.", pt: "Minhas pernas estão cansadas após a corrida." }, 
                        A2: { en: "He injured his leg during the marathon.", pt: "Ele machucou a perna durante a maratona." }
                      }
    },
      { english: "Hand", portuguese: "Mão",
          levels: { 
                        A1: { en: "Please, wash your hands.", pt: "Por favor, lave suas mãos." }, 
                        A2: { en: "She washed her hands before dinner.", pt: "Ela lavou as mãos antes do jantar." }
                      }
    },
      { english: "Foot / Feet", portuguese: "Pé / Pés",
          levels: { 
                        A1: { en: "My feet are cold.", pt: "Meus pés estão frios." }, 
                        A2: { en: "His feet hurt after a long day of walking.", pt: "Os pés dele doíam após um longo dia caminhando." }
                      }
    },
      { english: "Eyes", portuguese: "Olhos",
          levels: { 
                        A1: { en: "She has blue eyes.", pt: "Ela tem olhos azuis." }, 
                        A2: { en: "She closed her eyes and fell asleep.", pt: "Ela fechou os olhos e adormeceu." }
                      }
    },
      { english: "Hair", portuguese: "Cabelo",
          levels: { 
                        A1: { en: "Her hair is very long.", pt: "O cabelo dela é muito longo." }, 
                        A2: { en: "He cut his hair very short last week.", pt: "Ele cortou o cabelo bem curto semana passada." }
                      }
    },
      { english: "Mouth", portuguese: "Boca",
          levels: { 
                        A1: { en: "Open your mouth for the dentist.", pt: "Abra sua boca para o dentista." }, 
                        A2: { en: "The dentist asked him to open his mouth.", pt: "O dentista pediu a ele que abrisse a boca." }
                      }
    },
      { english: "Nose", portuguese: "Nariz",
          levels: { 
                        A1: { en: "My nose bleeds sometimes.", pt: "Meu nariz sangra às vezes." }, 
                        A2: { en: "Her nose bled after she fell down.", pt: "O nariz dela sangrou depois que ela caiu." }
                      }
    },
      { english: "Ears", portuguese: "Orelhas",
          levels: { 
                        A1: { en: "Elephants have big ears.", pt: "Elefantes têm orelhas grandes." }, 
                        A2: { en: "He covered his ears because of the loud noise.", pt: "Ele cobriu as orelhas por causa do barulho alto." }
                      }
    },
      { english: "Shoulder", portuguese: "Ombro",
          levels: { 
                        A1: { en: "My shoulder is sore.", pt: "Meu ombro está dolorido." }, 
                        A2: { en: "She carried the heavy bag on her shoulder.", pt: "Ela carregou a bolsa pesada no ombro." }
                      }
    },
      { english: "Knee", portuguese: "Joelho",
          levels: { 
                        A1: { en: "He falls and scrapes his knee.", pt: "Ele cai e rala o joelho." }, 
                        A2: { en: "He scraped his knee when he tripped on the sidewalk.", pt: "Ele ralou o joelho quando tropeçou na calçada." }
                      }
    },
      { english: "Fingers", portuguese: "Dedos da mão",
          levels: { 
                        A1: { en: "Humans have ten fingers.", pt: "Humanos têm dez dedos." }, 
                        A2: { en: "She burned her fingers on the hot stove.", pt: "Ela queimou os dedos no fogão quente." }
                      }
    },
      { english: "Toes", portuguese: "Dedos do pé",
          levels: { 
                        A1: { en: "I hurt my toe.", pt: "Eu machuco meu dedo do pé." }, 
                        A2: { en: "He stubbed his toes on the wooden door.", pt: "Ele bateu os dedos dos pés na porta de madeira." }
                      }
    },
      { english: "Stomach", portuguese: "Estômago",
          levels: { 
                        A1: { en: "My stomach is full.", pt: "Meu estômago está cheio." }, 
                        A2: { en: "His stomach ached after he ate too much spicy food.", pt: "O estômago dele doeu depois que ele comeu muita comida apimentada." }
                      }
    },
      { english: "Back", portuguese: "Costas",
          levels: { 
                        A1: { en: "I have a terrible back pain.", pt: "Estou com uma dor terrível nas costas." }, 
                        A2: { en: "She injured her back lifting heavy boxes.", pt: "Ela machucou as costas levantando caixas pesadas." }
                      }
    },
      { english: "Neck", portuguese: "Pescoço",
          levels: { 
                        A1: { en: "Wear a scarf around your neck.", pt: "Use um cachecol no pescoço." }, 
                        A2: { en: "He wore a thick scarf around his neck during winter.", pt: "Ele usou um cachecol grosso no pescoço durante o inverno." }
                      }
    },
      { english: "Teeth", portuguese: "Dentes",
          levels: { 
                        A1: { en: "Brush your teeth every day.", pt: "Escove os dentes todos os dias." }, 
                        A2: { en: "She brushed her teeth twice every day.", pt: "Ela escovava os dentes duas vezes todos os dias." }
                      }
    },
      { english: "Tongue", portuguese: "Língua",
          levels: { 
                        A1: { en: "I burnt my tongue with hot tea.", pt: "Queimei a língua com chá quente." }, 
                        A2: { en: "He accidentally bit his tongue while chewing.", pt: "Ele acidentalmente mordeu a língua enquanto mastigava." }
                      }
    },
      { english: "Lips", portuguese: "Lábios",
          levels: { 
                        A1: { en: "Her lips are dry.", pt: "Os lábios dela estão secos." }, 
                        A2: { en: "Her lips felt dry in the cold weather.", pt: "Os lábios dela ficaram secos no clima frio." }
                      }
    },
      { english: "Forehead", portuguese: "Testa",
          levels: { 
                        B1: { en: "He wiped the sweat from his forehead after running.", pt: "Ele enxugou o suor da testa depois de correr." } 
                      }
    },
      { english: "Wrist", portuguese: "Pulso",
          levels: { 
                        B1: { en: "She wore a silver bracelet around her left wrist.", pt: "Ela usava uma pulseira de prata ao redor do pulso esquerdo." } 
                      }
    },
      { english: "Ankle", portuguese: "Tornozelo",
          levels: { 
                        B1: { en: "He twisted his ankle while playing football yesterday.", pt: "Ele torceu o tornozelo enquanto jogava futebol ontem." } 
                      }
    },
      { english: "Thumb", portuguese: "Polegar",
          levels: { 
                        B1: { en: "He hit his thumb with the hammer by accident.", pt: "Ele bateu no polegar com o martelo por acidente." } 
                      }
    },
      { english: "Waist", portuguese: "Cintura",
          levels: { 
                        B1: { en: "He tied his jacket around his waist because it was warm.", pt: "Ele amarrou a jaqueta na cintura porque estava quente." } 
                      }
    },
      { english: "Heel", portuguese: "Calcanhar",
          levels: { 
                        B1: { en: "My new shoes are rubbing against my heel.", pt: "Meus sapatos novos estão esfregando no meu calcanhar." } 
                      }
    },
      { english: "Chest", portuguese: "Peito / Tórax",
          levels: { 
                        B1: { en: "He felt a sharp pain in his chest and called a doctor.", pt: "Ele sentiu uma dor aguda no peito e chamou um médico." } 
                      }
    },
      { english: "Jaw", portuguese: "Mandíbula",
          levels: { 
                        B1: { en: "The boxer received a heavy punch directly to the jaw.", pt: "O boxeador recebeu um soco pesado direto na mandíbula." } 
                      }
    },
      { english: "Work out", portuguese: "Malhar / Exercitar-se",
          levels: { 
                        B1: { en: "I try to work out at the gym at least three times a week.", pt: "Eu tento malhar na academia pelo menos três vezes por semana." } 
                      }
    },
      { english: "Recover", portuguese: "Recuperar-se",
          levels: { 
                        B1: { en: "It took him a whole month to recover from the surgery.", pt: "Levou um mês inteiro para ele se recuperar da cirurgia." } 
                      }
    },
      { english: "Throw up", portuguese: "Vomitar",
          levels: { 
                        B1: { en: "He ate some bad seafood and threw up all night.", pt: "Ele comeu frutos do mar estragados e vomitou a noite toda." } 
                      }
    },
      { english: "Pass out", portuguese: "Desmaiar",
          levels: { 
                        B1: { en: "It was so hot inside the crowded room that she almost passed out.", pt: "Estava tão quente dentro da sala lotada que ela quase desmaiou." } 
                      }
    },
      { english: "Get over", portuguese: "Superar / Curar-se",
          levels: { 
                        B1: { en: "I finally got over that terrible cold I had last week.", pt: "Eu finalmente me curei daquele resfriado terrível que tive semana passada." } 
                      }
    },
      { english: "Sneeze", portuguese: "Espirrar",
          levels: { 
                        B1: { en: "The dust in this old room is making me sneeze constantly.", pt: "A poeira neste quarto velho está me fazendo espirrar constantemente." } 
                      }
    },
      { english: "Cough", portuguese: "Tossir",
          levels: { 
                        B1: { en: "Please cover your mouth when you cough so you don't spread germs.", pt: "Por favor, cubra sua boca quando tossir para não espalhar germes." } 
                      }
    },
      { english: "Bleed", portuguese: "Sangrar",
          levels: { 
                        B1: { en: "I cut my finger while chopping onions and it started to bleed.", pt: "Eu cortei meu dedo enquanto picava cebolas e começou a sangrar." } 
                      }
    },
      { english: "Swallow", portuguese: "Engolir",
          levels: { 
                        B1: { en: "My throat hurts so much that it is painful to swallow water.", pt: "Minha garganta dói tanto que é doloroso engolir água." } 
                      }
    },
      { english: "Breathe", portuguese: "Respirar",
          levels: { 
                        B1: { en: "Take a deep breath and try to relax before the presentation.", pt: "Respire fundo e tente relaxar antes da apresentação." } 
                      }
    },
      { english: "Sweat", portuguese: "Suar",
          levels: { 
                        B1: { en: "I always sweat a lot when I go running in the summer.", pt: "Eu sempre suo muito quando vou correr no verão." } 
                      }
    },
      { english: "Shiver", portuguese: "Tremer (de frio/medo)",
          levels: { 
                        B1: { en: "He stood in the freezing snow and began to shiver uncontrollably.", pt: "Ele ficou na neve congelante e começou a tremer incontrolavelmente." } 
                      }
    }
      ],
      flashcardsA2: [
          {
              "english": "She injured her back lifting heavy boxes.",
              "portuguese": "Ela machucou as costas levantando caixas pesadas.",
              "example": "Palavra-chave: Back"
          },
          {
              "english": "He cut his hair very short last week.",
              "portuguese": "Ele cortou o cabelo bem curto semana passada.",
              "example": "Palavra-chave: Hair"
          },
          {
              "english": "His feet hurt after a long day of walking.",
              "portuguese": "Os pés dele doíam após um longo dia caminhando.",
              "example": "Palavra-chave: Foot / Feet"
          },
          {
              "english": "He bumped his head on the low ceiling yesterday.",
              "portuguese": "Ele bateu a cabeça no teto baixo ontem.",
              "example": "Palavra-chave: Head"
          },
          {
              "english": "Her lips felt dry in the cold weather.",
              "portuguese": "Os lábios dela ficaram secos no clima frio.",
              "example": "Palavra-chave: Lips"
          },
          {
              "english": "He accidentally bit his tongue while chewing.",
              "portuguese": "Ele acidentalmente mordeu a língua enquanto mastigava.",
              "example": "Palavra-chave: Tongue"
          },
          {
              "english": "She broke her arm while playing basketball.",
              "portuguese": "Ela quebrou o braço enquanto jogava basquete.",
              "example": "Palavra-chave: Arm"
          },
          {
              "english": "She washed her hands before dinner.",
              "portuguese": "Ela lavou as mãos antes do jantar.",
              "example": "Palavra-chave: Hand"
          },
          {
              "english": "He injured his leg during the marathon.",
              "portuguese": "Ele machucou a perna durante a maratona.",
              "example": "Palavra-chave: Leg"
          },
          {
              "english": "He stubbed his toes on the wooden door.",
              "portuguese": "Ele bateu os dedos dos pés na porta de madeira.",
              "example": "Palavra-chave: Toes"
          },
          {
              "english": "She closed her eyes and fell asleep.",
              "portuguese": "Ela fechou os olhos e adormeceu.",
              "example": "Palavra-chave: Eyes"
          },
          {
              "english": "Her nose bled after she fell down.",
              "portuguese": "O nariz dela sangrou depois que ela caiu.",
              "example": "Palavra-chave: Nose"
          },
          {
              "english": "She carried the heavy bag on her shoulder.",
              "portuguese": "Ela carregou a bolsa pesada no ombro.",
              "example": "Palavra-chave: Shoulder"
          },
          {
              "english": "He covered his ears because of the loud noise.",
              "portuguese": "Ele cobriu as orelhas por causa do barulho alto.",
              "example": "Palavra-chave: Ears"
          },
          {
              "english": "She brushed her teeth twice every day.",
              "portuguese": "Ela escovava os dentes duas vezes todos os dias.",
              "example": "Palavra-chave: Teeth"
          },
          {
              "english": "She burned her fingers on the hot stove.",
              "portuguese": "Ela queimou os dedos no fogão quente.",
              "example": "Palavra-chave: Fingers"
          },
          {
              "english": "The dentist asked him to open his mouth.",
              "portuguese": "O dentista pediu a ele que abrisse a boca.",
              "example": "Palavra-chave: Mouth"
          },
          {
              "english": "He scraped his knee when he tripped on the sidewalk.",
              "portuguese": "Ele ralou o joelho quando tropeçou na calçada.",
              "example": "Palavra-chave: Knee"
          },
          {
              "english": "His stomach ached after he ate too much spicy food.",
              "portuguese": "O estômago dele doeu depois que ele comeu muita comida apimentada.",
              "example": "Palavra-chave: Stomach"
          },
          {
              "english": "He wore a thick scarf around his neck during winter.",
              "portuguese": "Ele usou um cachecol grosso no pescoço durante o inverno.",
              "example": "Palavra-chave: Neck"
          }
      ],
      flashcardsB1: [
          {
              "english": "The boxer received a heavy punch directly to the jaw.",
              "portuguese": "O boxeador recebeu um soco pesado direto na mandíbula.",
              "example": "Palavra-chave: Jaw"
          },
          {
              "english": "He hit his thumb with the hammer by accident.",
              "portuguese": "Ele bateu no polegar com o martelo por acidente.",
              "example": "Palavra-chave: Thumb"
          },
          {
              "english": "I always sweat a lot when I go running in the summer.",
              "portuguese": "Eu sempre suo muito quando vou correr no verão.",
              "example": "Palavra-chave: Sweat"
          },
          {
              "english": "I try to work out at the gym at least three times a week.",
              "portuguese": "Eu tento malhar na academia pelo menos três vezes por semana.",
              "example": "Palavra-chave: Work out"
          },
          {
              "english": "He stood in the freezing snow and began to shiver uncontrollably.",
              "portuguese": "Ele ficou na neve congelante e começou a tremer incontrolavelmente.",
              "example": "Palavra-chave: Shiver"
          },
          {
              "english": "My throat hurts so much that it is painful to swallow water.",
              "portuguese": "Minha garganta dói tanto que é doloroso engolir água.",
              "example": "Palavra-chave: Swallow"
          },
          {
              "english": "I finally got over that terrible cold I had last week.",
              "portuguese": "Eu finalmente me curei daquele resfriado terrível que tive semana passada.",
              "example": "Palavra-chave: Get over"
          },
          {
              "english": "He twisted his ankle while playing football yesterday.",
              "portuguese": "Ele torceu o tornozelo enquanto jogava futebol ontem.",
              "example": "Palavra-chave: Ankle"
          },
          {
              "english": "He tied his jacket around his waist because it was warm.",
              "portuguese": "Ele amarrou a jaqueta na cintura porque estava quente.",
              "example": "Palavra-chave: Waist"
          },
          {
              "english": "The dust in this old room is making me sneeze constantly.",
              "portuguese": "A poeira neste quarto velho está me fazendo espirrar constantemente.",
              "example": "Palavra-chave: Sneeze"
          },
          {
              "english": "She wore a silver bracelet around her left wrist.",
              "portuguese": "Ela usava uma pulseira de prata ao redor do pulso esquerdo.",
              "example": "Palavra-chave: Wrist"
          },
          {
              "english": "I cut my finger while chopping onions and it started to bleed.",
              "portuguese": "Eu cortei meu dedo enquanto picava cebolas e começou a sangrar.",
              "example": "Palavra-chave: Bleed"
          },
          {
              "english": "He ate some bad seafood and threw up all night.",
              "portuguese": "Ele comeu frutos do mar estragados e vomitou a noite toda.",
              "example": "Palavra-chave: Throw up"
          },
          {
              "english": "He wiped the sweat from his forehead after running.",
              "portuguese": "Ele enxugou o suor da testa depois de correr.",
              "example": "Palavra-chave: Forehead"
          },
          {
              "english": "It took him a whole month to recover from the surgery.",
              "portuguese": "Levou um mês inteiro para ele se recuperar da cirurgia.",
              "example": "Palavra-chave: Recover"
          },
          {
              "english": "Please cover your mouth when you cough so you don't spread germs.",
              "portuguese": "Por favor, cubra sua boca quando tossir para não espalhar germes.",
              "example": "Palavra-chave: Cough"
          },
          {
              "english": "My new shoes are rubbing against my heel.",
              "portuguese": "Meus sapatos novos estão esfregando no meu calcanhar.",
              "example": "Palavra-chave: Heel"
          },
          {
              "english": "Take a deep breath and try to relax before the presentation.",
              "portuguese": "Respire fundo e tente relaxar antes da apresentação.",
              "example": "Palavra-chave: Breathe"
          },
          {
              "english": "He felt a sharp pain in his chest and called a doctor.",
              "portuguese": "Ele sentiu uma dor aguda no peito e chamou um médico.",
              "example": "Palavra-chave: Chest"
          },
          {
              "english": "It was so hot inside the crowded room that she almost passed out.",
              "portuguese": "Estava tão quente dentro da sala lotada que ela quase desmaiou.",
              "example": "Palavra-chave: Pass out"
          }
      ],
      quizA2: [
          {
              "question": "Complete a frase: \"He scraped his ______ when he tripped on the sidewalk.\"",
              "options": [
                  "Swallow",
                  "Knee",
                  "Sweat",
                  "Shoulder"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He scraped his knee when he tripped on the sidewalk.\", que significa \"Ele ralou o joelho quando tropeçou na calçada.\"."
          },
          {
              "question": "Complete a frase: \"She broke her ______ while playing basketball.\"",
              "options": [
                  "Stomach",
                  "Cough",
                  "Arm",
                  "Neck"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"She broke her arm while playing basketball.\", que significa \"Ela quebrou o braço enquanto jogava basquete.\"."
          },
          {
              "question": "Complete a frase: \"She closed her ______ and fell asleep.\"",
              "options": [
                  "Eyes",
                  "Recover",
                  "Pass out",
                  "Leg"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"She closed her eyes and fell asleep.\", que significa \"Ela fechou os olhos e adormeceu.\"."
          },
          {
              "question": "Complete a frase: \"She brushed her ______ twice every day.\"",
              "options": [
                  "Ankle",
                  "Sweat",
                  "Teeth",
                  "Head"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"She brushed her teeth twice every day.\", que significa \"Ela escovava os dentes duas vezes todos os dias.\"."
          },
          {
              "question": "Traduza a frase: \"Ele usou um cachecol grosso no pescoço durante o inverno.\"",
              "options": [
                  "Her lips felt dry in the cold weather.",
                  "His feet hurt after a long day of walking.",
                  "He accidentally bit his tongue while chewing.",
                  "He wore a thick scarf around his neck during winter."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"He wore a thick scarf around his neck during winter.\", que significa \"Ele usou um cachecol grosso no pescoço durante o inverno.\"."
          },
          {
              "question": "Traduza a frase: \"O estômago dele doeu depois que ele comeu muita comida apimentada.\"",
              "options": [
                  "She washed her hands before dinner.",
                  "He bumped his head on the low ceiling yesterday.",
                  "His stomach ached after he ate too much spicy food.",
                  "She carried the heavy bag on her shoulder."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"His stomach ached after he ate too much spicy food.\", que significa \"O estômago dele doeu depois que ele comeu muita comida apimentada.\"."
          },
          {
              "question": "Complete a frase: \"He accidentally bit his ______ while chewing.\"",
              "options": [
                  "Hair",
                  "Ankle",
                  "Foot / Feet",
                  "Tongue"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"He accidentally bit his tongue while chewing.\", que significa \"Ele acidentalmente mordeu a língua enquanto mastigava.\"."
          },
          {
              "question": "O que significa a frase: \"She washed her hands before dinner.\"?",
              "options": [
                  "Ele bateu a cabeça no teto baixo ontem.",
                  "Os pés dele doíam após um longo dia caminhando.",
                  "Ela lavou as mãos antes do jantar.",
                  "Ele cobriu as orelhas por causa do barulho alto."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"She washed her hands before dinner.\", que significa \"Ela lavou as mãos antes do jantar.\"."
          },
          {
              "question": "Complete a frase: \"The dentist asked him to open his ______.\"",
              "options": [
                  "Mouth",
                  "Bleed",
                  "Hand",
                  "Breathe"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"The dentist asked him to open his mouth.\", que significa \"O dentista pediu a ele que abrisse a boca.\"."
          },
          {
              "question": "Traduza a frase: \"Ele cortou o cabelo bem curto semana passada.\"",
              "options": [
                  "He cut his hair very short last week.",
                  "She carried the heavy bag on her shoulder.",
                  "She closed her eyes and fell asleep.",
                  "The dentist asked him to open his mouth."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He cut his hair very short last week.\", que significa \"Ele cortou o cabelo bem curto semana passada.\"."
          }
      ],
      quizB1: [
          {
              "question": "Traduza a frase: \"Ele bateu no polegar com o martelo por acidente.\"",
              "options": [
                  "Take a deep breath and try to relax before the presentation.",
                  "He hit his thumb with the hammer by accident.",
                  "I try to work out at the gym at least three times a week.",
                  "Please cover your mouth when you cough so you don't spread germs."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He hit his thumb with the hammer by accident.\", que significa \"Ele bateu no polegar com o martelo por acidente.\"."
          },
          {
              "question": "Traduza a frase: \"Ele enxugou o suor da testa depois de correr.\"",
              "options": [
                  "He twisted his ankle while playing football yesterday.",
                  "The boxer received a heavy punch directly to the jaw.",
                  "He wiped the sweat from his forehead after running.",
                  "He tied his jacket around his waist because it was warm."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"He wiped the sweat from his forehead after running.\", que significa \"Ele enxugou o suor da testa depois de correr.\"."
          },
          {
              "question": "Complete a frase: \"The dust in this old room is making me ______ constantly.\"",
              "options": [
                  "Teeth",
                  "Recover",
                  "Ankle",
                  "Sneeze"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"The dust in this old room is making me sneeze constantly.\", que significa \"A poeira neste quarto velho está me fazendo espirrar constantemente.\"."
          },
          {
              "question": "Complete a frase: \"My throat hurts so much that it is painful to ______ water.\"",
              "options": [
                  "Swallow",
                  "Ankle",
                  "Tongue",
                  "Forehead"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"My throat hurts so much that it is painful to swallow water.\", que significa \"Minha garganta dói tanto que é doloroso engolir água.\"."
          },
          {
              "question": "Complete a frase: \"He stood in the freezing snow and began to ______ uncontrollably.\"",
              "options": [
                  "Fingers",
                  "Hand",
                  "Foot / Feet",
                  "Shiver"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"He stood in the freezing snow and began to shiver uncontrollably.\", que significa \"Ele ficou na neve congelante e começou a tremer incontrolavelmente.\"."
          },
          {
              "question": "Traduza a frase: \"Meus sapatos novos estão esfregando no meu calcanhar.\"",
              "options": [
                  "The dust in this old room is making me sneeze constantly.",
                  "My new shoes are rubbing against my heel.",
                  "He ate some bad seafood and threw up all night.",
                  "My throat hurts so much that it is painful to swallow water."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"My new shoes are rubbing against my heel.\", que significa \"Meus sapatos novos estão esfregando no meu calcanhar.\"."
          },
          {
              "question": "Traduza a frase: \"Ele amarrou a jaqueta na cintura porque estava quente.\"",
              "options": [
                  "He tied his jacket around his waist because it was warm.",
                  "He hit his thumb with the hammer by accident.",
                  "The boxer received a heavy punch directly to the jaw.",
                  "Take a deep breath and try to relax before the presentation."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He tied his jacket around his waist because it was warm.\", que significa \"Ele amarrou a jaqueta na cintura porque estava quente.\"."
          },
          {
              "question": "Traduza a frase: \"Ele sentiu uma dor aguda no peito e chamou um médico.\"",
              "options": [
                  "He stood in the freezing snow and began to shiver uncontrollably.",
                  "He felt a sharp pain in his chest and called a doctor.",
                  "The boxer received a heavy punch directly to the jaw.",
                  "My new shoes are rubbing against my heel."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He felt a sharp pain in his chest and called a doctor.\", que significa \"Ele sentiu uma dor aguda no peito e chamou um médico.\"."
          },
          {
              "question": "Traduza a frase: \"Eu cortei meu dedo enquanto picava cebolas e começou a sangrar.\"",
              "options": [
                  "He ate some bad seafood and threw up all night.",
                  "I cut my finger while chopping onions and it started to bleed.",
                  "Take a deep breath and try to relax before the presentation.",
                  "He hit his thumb with the hammer by accident."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"I cut my finger while chopping onions and it started to bleed.\", que significa \"Eu cortei meu dedo enquanto picava cebolas e começou a sangrar.\"."
          },
          {
              "question": "Complete a frase: \"She wore a silver bracelet around her left ______.\"",
              "options": [
                  "Mouth",
                  "Wrist",
                  "Arm",
                  "Waist"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"She wore a silver bracelet around her left wrist.\", que significa \"Ela usava uma pulseira de prata ao redor do pulso esquerdo.\"."
          }
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
      { speaker: "Doctor", english: "Drink plenty of water. Take care of yourself.", portuguese: "Beba muita água. Cuide de si mesmo.", isPrimary: false }],
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
      { english: "She hurt her shoulder.", portuguese: "Ela machucou o ombro." }],
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
      { question: 'How do you say "Minha cabeça dói"?', options: ["My arm is bad.", "My head hurts.", "My eye is red.", "My leg is broken."], correctIndex: 1, explanation: '"Head" is cabeça, and "hurts" means dói.' }],
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
      buildSentence: { level1: [ { english: "I hurt my right shoulder while I was carrying heavy bags.", portuguese: "Eu machuquei meu ombro direito enquanto carregava sacolas pesadas." }, { english: "He broke his leg when he jumped from a wall.", portuguese: "Ele quebrou a perna quando pulou de um muro." }, { english: "She has long beautiful hair and striking green eyes.", portuguese: "Ela tem longos cabelos bonitos e marcantes olhos verdes." }, { english: "My stomach hurts slightly after eating all that spicy food.", portuguese: "Meu estômago dói levemente depois de comer toda aquela comida apimentada." }, { english: "He burned his fingers while he was cooking dinner.", portuguese: "Ele queimou os dedos enquanto estava cozinhando o jantar." }, { english: "The happy baby touches his cute little hands and feet.", portuguese: "O bebê feliz toca suas mãozinhas e pezinhos fofos." } ], level2: [ { english: "The athlete injured his ankle and recovers at home now.", portuguese: "O atleta machucou o tornozelo e se recupera em casa agora." }, { english: "She felt dizzy and suddenly passed out in the heat.", portuguese: "Ela se sentiu tonta e desmaiou de repente no calor." }, { english: "The sick patient breathes deeply and stops shivering.", portuguese: "O paciente doente respira fundo e para de tremer." }, { english: "He finally got over that terrible flu last week.", portuguese: "Ele finalmente superou aquela terrível gripe na semana passada." }, { english: "He hit his forehead and his nose bled heavily.", portuguese: "Ele bateu a testa e o nariz dele sangrou muito." }, { english: "I always sweat a lot when I work out intensively.", portuguese: "Eu sempre suo muito quando malho intensamente." } ] },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Head means Cabeça.", statementPt: "Head significa Cabeça.", isTrue: true, explanation: "Yes, Head means Cabeça." }, { statement: "Arm means a type of car.", statementPt: "Arm significa um tipo de carro.", isTrue: false, explanation: "No, Arm means Braço." }, { statement: "Leg means Perna.", statementPt: "Leg significa Perna.", isTrue: true, explanation: "Yes, Leg means Perna." }, { statement: "Hand means a type of car.", statementPt: "Hand significa um tipo de carro.", isTrue: false, explanation: "No, Hand means Mão." }, { statement: "Foot / Feet means Pé / Pés.", statementPt: "Foot / Feet significa Pé / Pés.", isTrue: true, explanation: "Yes, Foot / Feet means Pé / Pés." }, { statement: "Eyes means a type of car.", statementPt: "Eyes significa um tipo de carro.", isTrue: false, explanation: "No, Eyes means Olhos." }, { statement: "Hair means Cabelo.", statementPt: "Hair significa Cabelo.", isTrue: true, explanation: "Yes, Hair means Cabelo." }, { statement: "Mouth means a type of car.", statementPt: "Mouth significa um tipo de carro.", isTrue: false, explanation: "No, Mouth means Boca." }, { statement: "Nose means Nariz.", statementPt: "Nose significa Nariz.", isTrue: true, explanation: "Yes, Nose means Nariz." }, { statement: "Ears means a type of car.", statementPt: "Ears significa um tipo de carro.", isTrue: false, explanation: "No, Ears means Orelhas." } ],
                    part2: [ { statement: "Shoulder means Ombro.", statementPt: "Shoulder significa Ombro.", isTrue: true, explanation: "Yes, Shoulder means Ombro." }, { statement: "Knee means a type of car.", statementPt: "Knee significa um tipo de carro.", isTrue: false, explanation: "No, Knee means Joelho." }, { statement: "Fingers means Dedos da mão.", statementPt: "Fingers significa Dedos da mão.", isTrue: true, explanation: "Yes, Fingers means Dedos da mão." }, { statement: "Toes means a type of car.", statementPt: "Toes significa um tipo de carro.", isTrue: false, explanation: "No, Toes means Dedos do pé." }, { statement: "Stomach means Estômago.", statementPt: "Stomach significa Estômago.", isTrue: true, explanation: "Yes, Stomach means Estômago." }, { statement: "Back means a type of car.", statementPt: "Back significa um tipo de carro.", isTrue: false, explanation: "No, Back means Costas." }, { statement: "Neck means Pescoço.", statementPt: "Neck significa Pescoço.", isTrue: true, explanation: "Yes, Neck means Pescoço." }, { statement: "Teeth means a type of car.", statementPt: "Teeth significa um tipo de carro.", isTrue: false, explanation: "No, Teeth means Dentes." }, { statement: "Tongue means Língua.", statementPt: "Tongue significa Língua.", isTrue: true, explanation: "Yes, Tongue means Língua." }, { statement: "Lips means a type of car.", statementPt: "Lips significa um tipo de carro.", isTrue: false, explanation: "No, Lips means Lábios." } ]
                  },
      speakingPracticeLevel2: {
                    part1: [ { question: "Did your head hurt after working out?", translation: "Seu/sua head doeu depois de malhar?" }, { question: "Did your arm hurt after working out?", translation: "Seu/sua arm doeu depois de malhar?" }, { question: "Did your leg hurt after working out?", translation: "Seu/sua leg doeu depois de malhar?" }, { question: "Did your hand hurt after working out?", translation: "Seu/sua hand doeu depois de malhar?" }, { question: "Did your foot / feet hurt after working out?", translation: "Seu/sua foot / feet doeu depois de malhar?" }, { question: "Did your eyes hurt after working out?", translation: "Seu/sua eyes doeu depois de malhar?" }, { question: "Did you wash your hair this morning?", translation: "Você lavou seu cabelo hoje de manhã?" }, { question: "Did your mouth hurt after working out?", translation: "Seu/sua mouth doeu depois de malhar?" }, { question: "Did your nose hurt after working out?", translation: "Seu/sua nose doeu depois de malhar?" }, { question: "Did your ears hurt after working out?", translation: "Seu/sua ears doeu depois de malhar?" } ],
                    part2: [ { question: "Did your shoulder hurt after working out?", translation: "Seu/sua shoulder doeu depois de malhar?" }, { question: "Did your knee hurt after working out?", translation: "Seu/sua knee doeu depois de malhar?" }, { question: "Did your fingers hurt after working out?", translation: "Seu/sua fingers doeu depois de malhar?" }, { question: "Did your toes hurt after working out?", translation: "Seu/sua toes doeu depois de malhar?" }, { question: "Did your stomach hurt after working out?", translation: "Seu/sua stomach doeu depois de malhar?" }, { question: "Did your back hurt after working out?", translation: "Seu/sua back doeu depois de malhar?" }, { question: "Did your neck hurt after working out?", translation: "Seu/sua neck doeu depois de malhar?" }, { question: "Did you brush your teeth after lunch?", translation: "Você escovou os dentes depois do almoço?" }, { question: "Did your tongue hurt after working out?", translation: "Seu/sua tongue doeu depois de malhar?" }, { question: "Did your lips hurt after working out?", translation: "Seu/sua lips doeu depois de malhar?" } ]
                  },
      imageDescription: {
                  imagePath: "/images/scenarios/scenario_corpo_1789410497176.jpg",
                  keywords: [
                    { english: "People working out at the gym", portuguese: "Pessoas malhando na academia" },
                    { english: "Stretching on yoga mats", portuguese: "Alongando-se em tapetes de yoga" },
                    { english: "A man doing bicep curls with a barbell", portuguese: "Um homem fazendo rosca bíceps com uma barra" },
                    { english: "Strength and balance written on the wall", portuguese: "Força e equilíbrio escrito na parede" }
                  ]
                },

      wouldYouRather: [
        { optionA: { english: "Work out in a gym", portuguese: "Malhar em uma academia" }, optionB: { english: "Run in the park", portuguese: "Correr no parque" } },
        { optionA: { english: "Have very strong arms", portuguese: "Ter braços muito fortes" }, optionB: { english: "Have very fast legs", portuguese: "Ter pernas muito rápidas" } },
        { optionA: { english: "Wake up early to exercise", portuguese: "Acordar cedo para se exercitar" }, optionB: { english: "Exercise late at night", portuguese: "Se exercitar tarde da noite" } },
        { optionA: { english: "Be very tall", portuguese: "Ser muito alto" }, optionB: { english: "Be very flexible", portuguese: "Ser muito flexível" } },
        { optionA: { english: "Never get tired when running", portuguese: "Nunca se cansar ao correr" }, optionB: { english: "Never feel pain when lifting weights", portuguese: "Nunca sentir dor ao levantar peso" } },
        { optionA: { english: "Eat anything without gaining weight", portuguese: "Comer de tudo sem ganhar peso" }, optionB: { english: "Need only 4 hours of sleep", portuguese: "Precisar de apenas 4 horas de sono" } },
        { optionA: { english: "Have perfect vision", portuguese: "Ter visão perfeita" }, optionB: { english: "Have perfect hearing", portuguese: "Ter audição perfeita" } }
      ]
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
    reading: {
      "level1": {
            "textEn": "My house is small, but it is very comfortable and perfect for my family. It has two bright bedrooms, a spacious kitchen, and a cozy living room. I sleep in my own bedroom, and I always make sure to make my bed every single morning before breakfast. My family usually gathers to eat dinner together in the kitchen, where we talk about our day. Keeping the house clean is a team effort. On Sundays, I always help my mother sweep the floor, dust the shelves, and take out the trash so we can start the new week with a clean home.",
            "textPt": "Minha casa é pequena, mas é muito confortável e perfeita para minha família. Tem dois quartos bem iluminados, uma cozinha espaçosa e uma sala de estar aconchegante. Eu durmo no meu próprio quarto, e sempre me certifico de arrumar minha cama todas as manhãs antes do café da manhã. Minha família geralmente se reúne para jantar juntos na cozinha, onde conversamos sobre o nosso dia. Manter a casa limpa é um esforço de equipe. Aos domingos, eu sempre ajudo minha mãe a varrer o chão, tirar o pó das prateleiras e tirar o lixo para podermos começar a nova semana com a casa limpa.",
            "questions": [
                  {
                        "question": "How many bedrooms does the house have?",
                        "options": [
                              "Two",
                              "Three",
                              "One",
                              "Four"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text says 'It has two bright bedrooms'."
                  },
                  {
                        "question": "What does the author do every morning?",
                        "options": [
                              "Makes the bed",
                              "Cooks breakfast",
                              "Washes the dishes",
                              "Sweeps the floor"
                        ],
                        "correctIndex": 0,
                        "explanation": "They say they 'make my bed every single morning'."
                  },
                  {
                        "question": "Where does the family eat dinner?",
                        "options": [
                              "In the kitchen",
                              "In the living room",
                              "In the garden",
                              "In the bedroom"
                        ],
                        "correctIndex": 0,
                        "explanation": "They gather to eat dinner 'in the kitchen'."
                  },
                  {
                        "question": "What chores does the author do on Sundays?",
                        "options": [
                              "Sweep the floor and take out the trash",
                              "Clean the windows",
                              "Wash the car",
                              "Iron the clothes"
                        ],
                        "correctIndex": 0,
                        "explanation": "They help 'sweep the floor, dust the shelves, and take out the trash'."
                  }
            ]
      },
      "level2": {
            "textEn": "Maintaining a clean and welcoming home requires consistent dedication and teamwork from everyone living there. Every spring, we dedicate an entire weekend to do a deep cleaning of the entire house, from the attic down to the basement. I am usually responsible for vacuuming the heavy carpets and carefully dusting the delicate furniture in the living room. On the other hand, my sister prefers to handle the laundry; she likes to iron the clothes and fold them neatly into the drawers. Furthermore, having a designated garage helps keep our outdoor space and tools organized, while our beautiful green garden provides a much-needed relaxing area for us to unwind on the weekends.",
            "textPt": "Manter uma casa limpa e acolhedora exige dedicação consistente e trabalho em equipe de todos que moram lá. Toda primavera, dedicamos um fim de semana inteiro para fazer uma limpeza profunda na casa inteira, do sótão até o porão. Geralmente sou responsável por aspirar os tapetes pesados e tirar o pó cuidadosamente dos móveis delicados na sala de estar. Por outro lado, minha irmã prefere cuidar da lavanderia; ela gosta de passar as roupas e dobrá-las ordenadamente nas gavetas. Além disso, ter uma garagem designada ajuda a manter nosso espaço externo e ferramentas organizados, enquanto nosso lindo jardim verde proporciona uma área relaxante muito necessária para descansarmos nos fins de semana.",
            "questions": [
                  {
                        "question": "When does the family do a deep cleaning?",
                        "options": [
                              "Every spring",
                              "Every winter",
                              "Once a month",
                              "Every weekend"
                        ],
                        "correctIndex": 0,
                        "explanation": "They dedicate an entire weekend to deep cleaning 'Every spring'."
                  },
                  {
                        "question": "What chores does the author usually do?",
                        "options": [
                              "Vacuum the carpets and dust the furniture",
                              "Iron and fold clothes",
                              "Mow the lawn",
                              "Wash the dishes"
                        ],
                        "correctIndex": 0,
                        "explanation": "They are responsible for 'vacuuming the heavy carpets and carefully dusting the delicate furniture'."
                  },
                  {
                        "question": "What does the sister prefer to do?",
                        "options": [
                              "Iron the clothes and fold the laundry",
                              "Clean the windows",
                              "Cook dinner",
                              "Water the plants"
                        ],
                        "correctIndex": 0,
                        "explanation": "She prefers 'to handle the laundry; she likes to iron the clothes and fold them'."
                  },
                  {
                        "question": "What provides a relaxing area for weekends?",
                        "options": [
                              "The garden",
                              "The living room",
                              "The balcony",
                              "The garage"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text says 'our beautiful green garden provides a much-needed relaxing area'."
                  }
            ]
      }
},
    vocabulary: [
      { english: "Living room", portuguese: "Sala de estar",
          levels: { 
                        A1: { en: "The TV is in the living room.", pt: "A TV está na sala de estar." }, 
                        A2: { en: "We watched movies in the living room every Friday.", pt: "Nós assistíamos a filmes na sala de estar toda sexta-feira." }
                      }
    },
      { english: "Kitchen", portuguese: "Cozinha",
          levels: { 
                        A1: { en: "I cook in the kitchen.", pt: "Eu cozinho na cozinha." }, 
                        A2: { en: "She cooked a delicious meal in the kitchen.", pt: "Ela cozinhou uma refeição deliciosa na cozinha." }
                      }
    },
      { english: "Bedroom", portuguese: "Quarto",
          levels: { 
                        A1: { en: "My bedroom is very quiet.", pt: "Meu quarto é muito silencioso." }, 
                        A2: { en: "He cleaned his bedroom before guests arrived.", pt: "Ele limpou seu quarto antes de os convidados chegarem." }
                      }
    },
      { english: "Bathroom", portuguese: "Banheiro",
          levels: { 
                        A1: { en: "Where is the bathroom?", pt: "Onde fica o banheiro?" }, 
                        A2: { en: "She took a long shower in the bathroom.", pt: "Ela tomou um banho longo no banheiro." }
                      }
    },
      { english: "Sweep the floor", portuguese: "Varrer o chão",
          levels: { 
                        A1: { en: "Please sweep the floor, its dirty.", pt: "Por favor, varra o chão, está sujo." }, 
                        A2: { en: "He swept the floor after the party ended.", pt: "Ele varreu o chão depois que a festa acabou." }
                      }
    },
      { english: "Do the dishes", portuguese: "Lavar a louça",
          levels: { 
                        A1: { en: "I do the dishes every night.", pt: "Eu lavo a louça toda noite." }, 
                        A2: { en: "She did the dishes while he dried them.", pt: "Ela lavou a louça enquanto ele as secava." }
                      }
    },
      { english: "Make the bed", portuguese: "Arrumar a cama",
          levels: { 
                        A1: { en: "Always make your bed in the morning.", pt: "Sempre arrume sua cama de manhã." }, 
                        A2: { en: "I made the bed as soon as I woke up.", pt: "Eu arrumei a cama assim que acordei." }
                      }
    },
      { english: "Take out the trash", portuguese: "Tirar o lixo",
          levels: { 
                        A1: { en: "Dont forget to take out the trash.", pt: "Não se esqueça de tirar o lixo." }, 
                        A2: { en: "He took out the trash before going to work.", pt: "Ele tirou o lixo antes de ir para o trabalho." }
                      }
    },
      { english: "Clean", portuguese: "Limpar",
          levels: { 
                        A1: { en: "We need to clean the house.", pt: "Nós precisamos limpar a casa." }, 
                        A2: { en: "They cleaned the entire house on Saturday morning.", pt: "Eles limparam a casa inteira no sábado de manhã." }
                      }
    },
      { english: "Laundry", portuguese: "Lavar roupa",
          levels: { 
                        A1: { en: "I do the laundry.", pt: "Eu lavo a roupa." }, 
                        A2: { en: "She did the laundry because she needed clean clothes.", pt: "Ela lavou as roupas porque precisava de roupas limpas." }
                      }
    },
      { english: "Iron the clothes", portuguese: "Passar a roupa",
          levels: { 
                        A1: { en: "I need to iron my shirt.", pt: "Preciso passar minha camisa." }, 
                        A2: { en: "He ironed his clothes for the important meeting.", pt: "Ele passou suas roupas para a reunião importante." }
                      }
    },
      { english: "Dust the furniture", portuguese: "Tirar o pó dos móveis",
          levels: { 
                        A1: { en: "She dusts the table.", pt: "Ela tira o pó da mesa." }, 
                        A2: { en: "She dusted the furniture to keep the house neat.", pt: "Ela tirou o pó dos móveis para manter a casa arrumada." }
                      }
    },
      { english: "Vacuum", portuguese: "Passar aspirador",
          levels: { 
                        A1: { en: "I vacuum the carpet.", pt: "Eu passo o aspirador no tapete." }, 
                        A2: { en: "He vacuumed the carpets to remove all the dirt.", pt: "Ele aspirou os tapetes para remover toda a sujeira." }
                      }
    },
      { english: "Garage", portuguese: "Garagem",
          levels: { 
                        A1: { en: "The car is in the garage.", pt: "O carro está na garagem." }, 
                        A2: { en: "He parked his new car in the garage.", pt: "Ele estacionou seu carro novo na garagem." }
                      }
    },
      { english: "Garden / Yard", portuguese: "Jardim / Quintal",
          levels: { 
                        A1: { en: "The kids play in the yard.", pt: "As crianças brincam no quintal." }, 
                        A2: { en: "She planted beautiful roses in the garden last spring.", pt: "Ela plantou lindas rosas no jardim na primavera passada." }
                      }
    },
      { english: "Window", portuguese: "Janela",
          levels: { 
                        A1: { en: "Open the window, please.", pt: "Abra a janela, por favor." }, 
                        A2: { en: "He opened the window to let fresh air inside.", pt: "Ele abriu a janela para deixar o ar fresco entrar." }
                      }
    },
      { english: "Door", portuguese: "Porta",
          levels: { 
                        A1: { en: "Lock the front door.", pt: "Tranque a porta da frente." }, 
                        A2: { en: "She locked the front door before going to bed.", pt: "Ela trancou a porta da frente antes de ir para a cama." }
                      }
    },
      { english: "Roof", portuguese: "Telhado",
          levels: { 
                        A1: { en: "The bird is on the roof.", pt: "O pássaro está no telhado." }, 
                        A2: { en: "The storm severely damaged the roof of our house.", pt: "A tempestade danificou severamente o telhado da nossa casa." }
                      }
    },
      { english: "Stairs", portuguese: "Escadas",
          levels: { 
                        A1: { en: "Be careful on the stairs.", pt: "Cuidado nas escadas." }, 
                        A2: { en: "He ran up the stairs to grab his forgotten keys.", pt: "Ele correu pelas escadas para pegar as chaves esquecidas." }
                      }
    },
      { english: "Mirror", portuguese: "Espelho",
          levels: { 
                        A1: { en: "Look at yourself in the mirror.", pt: "Olhe para si mesmo no espelho." }, 
                        A2: { en: "She looked at herself in the mirror before leaving.", pt: "Ela olhou para si mesma no espelho antes de sair." }
                      }
    },
      { english: "Landlord", portuguese: "Senhorio / Dono (do imóvel)",
          levels: { 
                        B1: { en: "Our landlord increases the rent a little bit every year.", pt: "Nosso senhorio aumenta o aluguel um pouquinho todo ano." } 
                      }
    },
      { english: "Rent", portuguese: "Alugar / Aluguel",
          levels: { 
                        B1: { en: "They can barely afford to pay the rent this month.", pt: "Eles mal conseguem pagar o aluguel este mês." } 
                      }
    },
      { english: "Furniture", portuguese: "Móveis / Mobília",
          levels: { 
                        B1: { en: "They bought beautiful wooden furniture for the living room.", pt: "Eles compraram móveis de madeira lindos para a sala de estar." } 
                      }
    },
      { english: "Appliance", portuguese: "Eletrodoméstico",
          levels: { 
                        B1: { en: "The kitchen is equipped with modern stainless steel appliances.", pt: "A cozinha está equipada com eletrodomésticos modernos de aço inoxidável." } 
                      }
    },
      { english: "Cozy", portuguese: "Aconchegante",
          levels: { 
                        B1: { en: "It is a small but very cozy apartment in the city center.", pt: "É um apartamento pequeno, mas muito aconchegante no centro da cidade." } 
                      }
    },
      { english: "Spacious", portuguese: "Espaçoso",
          levels: { 
                        B1: { en: "The new house is much more spacious than our old flat.", pt: "A casa nova é muito mais espaçosa que nosso apartamento antigo." } 
                      }
    },
      { english: "Move in", portuguese: "Mudar-se (para dentro)",
          levels: { 
                        B1: { en: "We signed the contract and we will move in on Friday.", pt: "Nós assinamos o contrato e vamos nos mudar na sexta-feira." } 
                      }
    },
      { english: "Neighborhood", portuguese: "Vizinhança / Bairro",
          levels: { 
                        B1: { en: "They live in a quiet and safe neighborhood near the school.", pt: "Eles moram em uma vizinhança tranquila e segura perto da escola." } 
                      }
    },
      { english: "Move out", portuguese: "Mudar-se (sair)",
          levels: { 
                        B1: { en: "My roommate decided to move out because he got a job in another city.", pt: "Meu colega de quarto decidiu se mudar porque conseguiu um emprego em outra cidade." } 
                      }
    },
      { english: "Settle in", portuguese: "Acomodar-se / Instalar-se",
          levels: { 
                        B1: { en: "It takes a few weeks to unpack and really settle in after moving.", pt: "Leva algumas semanas para desempacotar e realmente se instalar depois de mudar." } 
                      }
    },
      { english: "Tidy up", portuguese: "Arrumar / Organizar",
          levels: { 
                        B1: { en: "I need to tidy up the living room before our guests arrive.", pt: "Eu preciso arrumar a sala de estar antes dos nossos convidados chegarem." } 
                      }
    },
      { english: "Clean up", portuguese: "Limpar",
          levels: { 
                        B1: { en: "Please clean up the mess you made in the kitchen right now.", pt: "Por favor, limpe a bagunça que você fez na cozinha agora mesmo." } 
                      }
    },
      { english: "Put away", portuguese: "Guardar (no lugar certo)",
          levels: { 
                        B1: { en: "After washing the dishes, you should put them away in the cupboard.", pt: "Depois de lavar a louça, você deve guardá-las no armário." } 
                      }
    },
      { english: "Decorate", portuguese: "Decorar",
          levels: { 
                        B1: { en: "They hired a professional to decorate the interior of their new house.", pt: "Eles contrataram um profissional para decorar o interior da casa nova deles." } 
                      }
    },
      { english: "Renovate", portuguese: "Reformar",
          levels: { 
                        B1: { en: "We plan to renovate the bathroom next year to modernize it.", pt: "Nós planejamos reformar o banheiro no ano que vem para modernizá-lo." } 
                      }
    },
      { english: "Lease", portuguese: "Contrato de aluguel",
          levels: { 
                        B1: { en: "Before renting the place, you have to sign a one-year lease.", pt: "Antes de alugar o lugar, você tem que assinar um contrato de aluguel de um ano." } 
                      }
    },
      { english: "Evict", portuguese: "Despejar",
          levels: { 
                        B1: { en: "The landlord threatened to evict the tenants if they didn't pay the rent.", pt: "O senhorio ameaçou despejar os inquilinos se eles não pagassem o aluguel." } 
                      }
    },
      { english: "Mortgage", portuguese: "Hipoteca",
          levels: { 
                        B1: { en: "They finally paid off their twenty-year mortgage on the house.", pt: "Eles finalmente terminaram de pagar a hipoteca de vinte anos da casa." } 
                      }
    },
      { english: "Fix up", portuguese: "Consertar / Restaurar",
          levels: { 
                        B1: { en: "He bought an old car and spent the summer trying to fix it up.", pt: "Ele comprou um carro velho e passou o verão tentando consertá-lo." } 
                      }
    }
      ],
      flashcardsA2: [
          {
              "english": "I made the bed as soon as I woke up.",
              "portuguese": "Eu arrumei a cama assim que acordei.",
              "example": "Palavra-chave: Make the bed"
          },
          {
              "english": "She took a long shower in the bathroom.",
              "portuguese": "Ela tomou um banho longo no banheiro.",
              "example": "Palavra-chave: Bathroom"
          },
          {
              "english": "She locked the front door before going to bed.",
              "portuguese": "Ela trancou a porta da frente antes de ir para a cama.",
              "example": "Palavra-chave: Door"
          },
          {
              "english": "He cleaned his bedroom before guests arrived.",
              "portuguese": "Ele limpou seu quarto antes de os convidados chegarem.",
              "example": "Palavra-chave: Bedroom"
          },
          {
              "english": "She looked at herself in the mirror before leaving.",
              "portuguese": "Ela olhou para si mesma no espelho antes de sair.",
              "example": "Palavra-chave: Mirror"
          },
          {
              "english": "The storm severely damaged the roof of our house.",
              "portuguese": "A tempestade danificou severamente o telhado da nossa casa.",
              "example": "Palavra-chave: Roof"
          },
          {
              "english": "She did the laundry because she needed clean clothes.",
              "portuguese": "Ela lavou as roupas porque precisava de roupas limpas.",
              "example": "Palavra-chave: Laundry"
          },
          {
              "english": "She planted beautiful roses in the garden last spring.",
              "portuguese": "Ela plantou lindas rosas no jardim na primavera passada.",
              "example": "Palavra-chave: Garden / Yard"
          },
          {
              "english": "They cleaned the entire house on Saturday morning.",
              "portuguese": "Eles limparam a casa inteira no sábado de manhã.",
              "example": "Palavra-chave: Clean"
          },
          {
              "english": "She cooked a delicious meal in the kitchen.",
              "portuguese": "Ela cozinhou uma refeição deliciosa na cozinha.",
              "example": "Palavra-chave: Kitchen"
          },
          {
              "english": "He ran up the stairs to grab his forgotten keys.",
              "portuguese": "Ele correu pelas escadas para pegar as chaves esquecidas.",
              "example": "Palavra-chave: Stairs"
          },
          {
              "english": "He opened the window to let fresh air inside.",
              "portuguese": "Ele abriu a janela para deixar o ar fresco entrar.",
              "example": "Palavra-chave: Window"
          },
          {
              "english": "He vacuumed the carpets to remove all the dirt.",
              "portuguese": "Ele aspirou os tapetes para remover toda a sujeira.",
              "example": "Palavra-chave: Vacuum"
          },
          {
              "english": "We watched movies in the living room every Friday.",
              "portuguese": "Nós assistíamos a filmes na sala de estar toda sexta-feira.",
              "example": "Palavra-chave: Living room"
          },
          {
              "english": "She dusted the furniture to keep the house neat.",
              "portuguese": "Ela tirou o pó dos móveis para manter a casa arrumada.",
              "example": "Palavra-chave: Dust the furniture"
          },
          {
              "english": "He swept the floor after the party ended.",
              "portuguese": "Ele varreu o chão depois que a festa acabou.",
              "example": "Palavra-chave: Sweep the floor"
          },
          {
              "english": "He ironed his clothes for the important meeting.",
              "portuguese": "Ele passou suas roupas para a reunião importante.",
              "example": "Palavra-chave: Iron the clothes"
          },
          {
              "english": "He took out the trash before going to work.",
              "portuguese": "Ele tirou o lixo antes de ir para o trabalho.",
              "example": "Palavra-chave: Take out the trash"
          },
          {
              "english": "She did the dishes while he dried them.",
              "portuguese": "Ela lavou a louça enquanto ele as secava.",
              "example": "Palavra-chave: Do the dishes"
          },
          {
              "english": "He parked his new car in the garage.",
              "portuguese": "Ele estacionou seu carro novo na garagem.",
              "example": "Palavra-chave: Garage"
          }
      ],
      flashcardsB1: [
          {
              "english": "My roommate decided to move out because he got a job in another city.",
              "portuguese": "Meu colega de quarto decidiu se mudar porque conseguiu um emprego em outra cidade.",
              "example": "Palavra-chave: Move out"
          },
          {
              "english": "After washing the dishes, you should put them away in the cupboard.",
              "portuguese": "Depois de lavar a louça, você deve guardá-las no armário.",
              "example": "Palavra-chave: Put away"
          },
          {
              "english": "They finally paid off their twenty-year mortgage on the house.",
              "portuguese": "Eles finalmente terminaram de pagar a hipoteca de vinte anos da casa.",
              "example": "Palavra-chave: Mortgage"
          },
          {
              "english": "Our landlord increases the rent a little bit every year.",
              "portuguese": "Nosso senhorio aumenta o aluguel um pouquinho todo ano.",
              "example": "Palavra-chave: Landlord"
          },
          {
              "english": "They bought beautiful wooden furniture for the living room.",
              "portuguese": "Eles compraram móveis de madeira lindos para a sala de estar.",
              "example": "Palavra-chave: Furniture"
          },
          {
              "english": "Before renting the place, you have to sign a one-year lease.",
              "portuguese": "Antes de alugar o lugar, você tem que assinar um contrato de aluguel de um ano.",
              "example": "Palavra-chave: Lease"
          },
          {
              "english": "They live in a quiet and safe neighborhood near the school.",
              "portuguese": "Eles moram em uma vizinhança tranquila e segura perto da escola.",
              "example": "Palavra-chave: Neighborhood"
          },
          {
              "english": "The kitchen is equipped with modern stainless steel appliances.",
              "portuguese": "A cozinha está equipada com eletrodomésticos modernos de aço inoxidável.",
              "example": "Palavra-chave: Appliance"
          },
          {
              "english": "It is a small but very cozy apartment in the city center.",
              "portuguese": "É um apartamento pequeno, mas muito aconchegante no centro da cidade.",
              "example": "Palavra-chave: Cozy"
          },
          {
              "english": "The landlord threatened to evict the tenants if they didn't pay the rent.",
              "portuguese": "O senhorio ameaçou despejar os inquilinos se eles não pagassem o aluguel.",
              "example": "Palavra-chave: Evict"
          },
          {
              "english": "Please clean up the mess you made in the kitchen right now.",
              "portuguese": "Por favor, limpe a bagunça que você fez na cozinha agora mesmo.",
              "example": "Palavra-chave: Clean up"
          },
          {
              "english": "They hired a professional to decorate the interior of their new house.",
              "portuguese": "Eles contrataram um profissional para decorar o interior da casa nova deles.",
              "example": "Palavra-chave: Decorate"
          },
          {
              "english": "They can barely afford to pay the rent this month.",
              "portuguese": "Eles mal conseguem pagar o aluguel este mês.",
              "example": "Palavra-chave: Rent"
          },
          {
              "english": "The new house is much more spacious than our old flat.",
              "portuguese": "A casa nova é muito mais espaçosa que nosso apartamento antigo.",
              "example": "Palavra-chave: Spacious"
          },
          {
              "english": "We are going to move in to our new apartment next Saturday.",
              "portuguese": "Nós vamos nos mudar para o nosso apartamento novo no próximo sábado.",
              "example": "Palavra-chave: Move in"
          },
          {
              "english": "We plan to renovate the bathroom next year to modernize it.",
              "portuguese": "Nós planejamos reformar o banheiro no ano que vem para modernizá-lo.",
              "example": "Palavra-chave: Renovate"
          },
          {
              "english": "We signed the contract and we will move in on Friday.",
              "portuguese": "Nós assinamos o contrato e vamos nos mudar na sexta-feira.",
              "example": "Palavra-chave: Move in"
          },
          {
              "english": "He bought an old car and spent the summer trying to fix it up.",
              "portuguese": "Ele comprou um carro velho e passou o verão tentando consertá-lo.",
              "example": "Palavra-chave: Fix up"
          },
          {
              "english": "It takes a few weeks to unpack and really settle in after moving.",
              "portuguese": "Leva algumas semanas para desempacotar e realmente se instalar depois de mudar.",
              "example": "Palavra-chave: Settle in"
          },
          {
              "english": "I need to tidy up the living room before our guests arrive.",
              "portuguese": "Eu preciso arrumar a sala de estar antes dos nossos convidados chegarem.",
              "example": "Palavra-chave: Tidy up"
          }
      ],
      quizA2: [
          {
              "question": "Complete a frase: \"He parked his new car in the ______.\"",
              "options": [
                  "Lease",
                  "Vacuum",
                  "Make the bed",
                  "Garage"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"He parked his new car in the garage.\", que significa \"Ele estacionou seu carro novo na garagem.\"."
          },
          {
              "question": "O que significa a frase: \"She dusted the furniture to keep the house neat.\"?",
              "options": [
                  "Ela tirou o pó dos móveis para manter a casa arrumada.",
                  "Ela lavou a louça enquanto ele as secava.",
                  "Ela olhou para si mesma no espelho antes de sair.",
                  "Ela plantou lindas rosas no jardim na primavera passada."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"She dusted the furniture to keep the house neat.\", que significa \"Ela tirou o pó dos móveis para manter a casa arrumada.\"."
          },
          {
              "question": "Traduza a frase: \"A tempestade danificou severamente o telhado da nossa casa.\"",
              "options": [
                  "They cleaned the entire house on Saturday morning.",
                  "He swept the floor after the party ended.",
                  "She locked the front door before going to bed.",
                  "The storm severely damaged the roof of our house."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"The storm severely damaged the roof of our house.\", que significa \"A tempestade danificou severamente o telhado da nossa casa.\"."
          },
          {
              "question": "Traduza a frase: \"Eu arrumei a cama assim que acordei.\"",
              "options": [
                  "He vacuumed the carpets to remove all the dirt.",
                  "He cleaned his bedroom before guests arrived.",
                  "She locked the front door before going to bed.",
                  "I made the bed as soon as I woke up."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"I made the bed as soon as I woke up.\", que significa \"Eu arrumei a cama assim que acordei.\"."
          },
          {
              "question": "Traduza a frase: \"Ele varreu o chão depois que a festa acabou.\"",
              "options": [
                  "I made the bed as soon as I woke up.",
                  "He swept the floor after the party ended.",
                  "She looked at herself in the mirror before leaving.",
                  "She took a long shower in the bathroom."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He swept the floor after the party ended.\", que significa \"Ele varreu o chão depois que a festa acabou.\"."
          },
          {
              "question": "O que significa a frase: \"They cleaned the entire house on Saturday morning.\"?",
              "options": [
                  "Ele correu pelas escadas para pegar as chaves esquecidas.",
                  "Eles limparam a casa inteira no sábado de manhã.",
                  "Ele aspirou os tapetes para remover toda a sujeira.",
                  "Ela tomou um banho longo no banheiro."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"They cleaned the entire house on Saturday morning.\", que significa \"Eles limparam a casa inteira no sábado de manhã.\"."
          },
          {
              "question": "Complete a frase: \"She did the ______ because she needed clean clothes.\"",
              "options": [
                  "Window",
                  "Laundry",
                  "Move in",
                  "Lease"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"She did the laundry because she needed clean clothes.\", que significa \"Ela lavou as roupas porque precisava de roupas limpas.\"."
          },
          {
              "question": "Complete a frase: \"She cooked a delicious meal in the ______.\"",
              "options": [
                  "Kitchen",
                  "Dust the furniture",
                  "Window",
                  "Spacious"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"She cooked a delicious meal in the kitchen.\", que significa \"Ela cozinhou uma refeição deliciosa na cozinha.\"."
          },
          {
              "question": "O que significa a frase: \"He vacuumed the carpets to remove all the dirt.\"?",
              "options": [
                  "Ela tomou um banho longo no banheiro.",
                  "Ele aspirou os tapetes para remover toda a sujeira.",
                  "Ele tirou o lixo antes de ir para o trabalho.",
                  "Eu arrumei a cama assim que acordei."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He vacuumed the carpets to remove all the dirt.\", que significa \"Ele aspirou os tapetes para remover toda a sujeira.\"."
          },
          {
              "question": "Complete a frase: \"She took a long shower in the ______.\"",
              "options": [
                  "Settle in",
                  "Bathroom",
                  "Door",
                  "Evict"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"She took a long shower in the bathroom.\", que significa \"Ela tomou um banho longo no banheiro.\"."
          }
      ],
      quizB1: [
          {
              "question": "Complete a frase: \"It takes a few weeks to unpack and really ______ after moving.\"",
              "options": [
                  "Settle in",
                  "Renovate",
                  "Garden / Yard",
                  "Appliance"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"It takes a few weeks to unpack and really settle in after moving.\", que significa \"Leva algumas semanas para desempacotar e realmente se instalar depois de mudar.\"."
          },
          {
              "question": "Complete a frase: \"I need to ______ the living room before our guests arrive.\"",
              "options": [
                  "Tidy up",
                  "Living room",
                  "Laundry",
                  "Dust the furniture"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"I need to tidy up the living room before our guests arrive.\", que significa \"Eu preciso arrumar a sala de estar antes dos nossos convidados chegarem.\"."
          },
          {
              "question": "Traduza a frase: \"Eles contrataram um profissional para decorar o interior da casa nova deles.\"",
              "options": [
                  "After washing the dishes, you should put them away in the cupboard.",
                  "They can barely afford to pay the rent this month.",
                  "They hired a professional to decorate the interior of their new house.",
                  "Our landlord increases the rent a little bit every year."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"They hired a professional to decorate the interior of their new house.\", que significa \"Eles contrataram um profissional para decorar o interior da casa nova deles.\"."
          },
          {
              "question": "Traduza a frase: \"Nós planejamos reformar o banheiro no ano que vem para modernizá-lo.\"",
              "options": [
                  "Before renting the place, you have to sign a one-year lease.",
                  "They hired a professional to decorate the interior of their new house.",
                  "We plan to renovate the bathroom next year to modernize it.",
                  "The new house is much more spacious than our old flat."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"We plan to renovate the bathroom next year to modernize it.\", que significa \"Nós planejamos reformar o banheiro no ano que vem para modernizá-lo.\"."
          },
          {
              "question": "Traduza a frase: \"Meu colega de quarto decidiu se mudar porque conseguiu um emprego em outra cidade.\"",
              "options": [
                  "They finally paid off their twenty-year mortgage on the house.",
                  "I need to tidy up the living room before our guests arrive.",
                  "My roommate decided to move out because he got a job in another city.",
                  "Our landlord increases the rent a little bit every year."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"My roommate decided to move out because he got a job in another city.\", que significa \"Meu colega de quarto decidiu se mudar porque conseguiu um emprego em outra cidade.\"."
          },
          {
              "question": "Complete a frase: \"They bought beautiful wooden ______ for the living room.\"",
              "options": [
                  "Iron the clothes",
                  "Make the bed",
                  "Furniture",
                  "Move in"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"They bought beautiful wooden furniture for the living room.\", que significa \"Eles compraram móveis de madeira lindos para a sala de estar.\"."
          },
          {
              "question": "Traduza a frase: \"Nós assinamos o contrato e vamos nos mudar na sexta-feira.\"",
              "options": [
                  "They can barely afford to pay the rent this month.",
                  "We signed the contract and we will move in on Friday.",
                  "They finally paid off their twenty-year mortgage on the house.",
                  "They live in a quiet and safe neighborhood near the school."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"We signed the contract and we will move in on Friday.\", que significa \"Nós assinamos o contrato e vamos nos mudar na sexta-feira.\"."
          },
          {
              "question": "Traduza a frase: \"Depois de lavar a louça, você deve guardá-las no armário.\"",
              "options": [
                  "My roommate decided to move out because he got a job in another city.",
                  "After washing the dishes, you should put them away in the cupboard.",
                  "It is a small but very cozy apartment in the city center.",
                  "We signed the contract and we will move in on Friday."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"After washing the dishes, you should put them away in the cupboard.\", que significa \"Depois de lavar a louça, você deve guardá-las no armário.\"."
          },
          {
              "question": "Complete a frase: \"They can barely afford to pay the ______ this month.\"",
              "options": [
                  "Rent",
                  "Kitchen",
                  "Living room",
                  "Cozy"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"They can barely afford to pay the rent this month.\", que significa \"Eles mal conseguem pagar o aluguel este mês.\"."
          },
          {
              "question": "O que significa a frase: \"He bought an old car and spent the summer trying to fix it up.\"?",
              "options": [
                  "Ele comprou um carro velho e passou o verão tentando consertá-lo.",
                  "Leva algumas semanas para desempacotar e realmente se instalar depois de mudar.",
                  "Antes de alugar o lugar, você tem que assinar um contrato de aluguel de um ano.",
                  "Depois de lavar a louça, você deve guardá-las no armário."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He bought an old car and spent the summer trying to fix it up.\", que significa \"Ele comprou um carro velho e passou o verão tentando consertá-lo.\"."
          }
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
      { speaker: "Mom", english: "Perfect. We want the house clean for our guests tonight.", portuguese: "Perfeito. Queremos a casa limpa para nossos convidados hoje à noite.", isPrimary: false }],
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
      { english: "Look in the mirror.", portuguese: "Olhe no espelho." }],
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
      { question: 'What does "Clean" mean?', options: ["Sujo", "Cozinhar", "Limpar", "Dormir"], correctIndex: 2, explanation: '"Clean" can be a verb meaning limpar or an adjective meaning limpo.' }],
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
    speakingPractice: { part1: [ { question: "What is your favorite furniture piece in your living room?", translation: "Qual é a sua peça de mobília favorita na sua sala de estar?" }, { question: "Who usually cooks in your kitchen at home?", translation: "Quem costuma cozinhar na sua cozinha em casa?" }, { question: "Is your bedroom always tidy and organized?", translation: "O seu quarto é sempre arrumado e organizado?" }, { question: "How long does it take you to get ready in the bathroom?", translation: "Quanto tempo você leva para se arrumar no banheiro?" }, { question: "How often do you sweep the floor during the week?", translation: "Com que frequência você varre o chão durante a semana?" }, { question: "Do you prefer to do the dishes or dry them?", translation: "Você prefere lavar a louça ou secá-la?" }, { question: "Do you make the bed as soon as you wake up?", translation: "Você arruma a cama assim que acorda?" }, { question: "Who is responsible to take out the trash in your house?", translation: "Quem é responsável por tirar o lixo na sua casa?" }, { question: "What day of the week do you usually clean your home?", translation: "Em que dia da semana você costuma limpar a sua casa?" }, { question: "Do you do the laundry on weekends or weekdays?", translation: "Você lava roupa nos fins de semana ou dias de semana?" } ], part2: [ { question: "Do you iron the clothes yourself?", translation: "Você mesmo(a) passa as roupas?" }, { question: "How frequently do you dust the furniture?", translation: "Com que frequência você tira o pó dos móveis?" }, { question: "Is it annoying to vacuum the house?", translation: "É chato passar o aspirador de pó na casa?" }, { question: "What do you keep in your garage besides a car?", translation: "O que você guarda na sua garagem além de um carro?" }, { question: "Do you have any plants in your garden or yard?", translation: "Você tem alguma planta no seu jardim ou quintal?" }, { question: "Do you sleep with your bedroom window open?", translation: "Você dorme com a janela do quarto aberta?" }, { question: "Do you always lock the front door at night?", translation: "Você sempre tranca a porta da frente à noite?" }, { question: "Have you ever had to fix the roof of your house?", translation: "Você já teve que consertar o telhado da sua casa?" }, { question: "Do you prefer a house with stairs or a single floor?", translation: "Você prefere uma casa com escadas ou de um andar só?" }, { question: "How long do you look in the mirror before leaving?", translation: "Quanto tempo você se olha no espelho antes de sair?" } ] },
      buildSentence: { level1: [ { english: "I sweep the floor and take out the trash daily.", portuguese: "Eu varro o chão e tiro o lixo diariamente." }, { english: "They bought a comfortable couch for their new living room.", portuguese: "Eles compraram um sofá confortável para a nova sala de estar deles." }, { english: "She is doing the dishes in the kitchen right now.", portuguese: "Ela está lavando a louça na cozinha agora mesmo." }, { english: "She makes the bed immediately after waking up.", portuguese: "Ela arruma a cama imediatamente após acordar." }, { english: "He left his muddy shoes near the front door.", portuguese: "Ele deixou os sapatos sujos de lama dele perto da porta da frente." }, { english: "The garden looks beautiful with all the blooming flowers.", portuguese: "O jardim parece lindo com todas as flores desabrochando." } ], level2: [ { english: "Our landlord renovates the old apartment every ten years.", portuguese: "Nosso proprietário reforma o apartamento antigo a cada dez anos." }, { english: "They took out a huge mortgage for their spacious house.", portuguese: "Eles fizeram uma enorme hipoteca para a espaçosa casa deles." }, { english: "He is tidying up the place before the guests arrive.", portuguese: "Ele está arrumando o lugar antes dos convidados chegarem." }, { english: "We just moved in and we need new appliances.", portuguese: "Nós acabamos de nos mudar e precisamos de eletrodomésticos novos." }, { english: "He signed the lease and rented a cozy house.", portuguese: "Ele assinou o contrato e alugou uma casa aconchegante." }, { english: "The landlord evicted them because they ignored the rent.", portuguese: "O proprietário os despejou porque eles ignoraram o aluguel." } ] },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Living room means Sala de estar.", statementPt: "Living room significa Sala de estar.", isTrue: true, explanation: "Yes, Living room means Sala de estar." }, { statement: "Kitchen means a type of car.", statementPt: "Kitchen significa um tipo de carro.", isTrue: false, explanation: "No, Kitchen means Cozinha." }, { statement: "Bedroom means Quarto.", statementPt: "Bedroom significa Quarto.", isTrue: true, explanation: "Yes, Bedroom means Quarto." }, { statement: "Bathroom means a type of car.", statementPt: "Bathroom significa um tipo de carro.", isTrue: false, explanation: "No, Bathroom means Banheiro." }, { statement: "Sweep the floor means Varrer o chão.", statementPt: "Sweep the floor significa Varrer o chão.", isTrue: true, explanation: "Yes, Sweep the floor means Varrer o chão." }, { statement: "Do the dishes means a type of car.", statementPt: "Do the dishes significa um tipo de carro.", isTrue: false, explanation: "No, Do the dishes means Lavar a louça." }, { statement: "Make the bed means Arrumar a cama.", statementPt: "Make the bed significa Arrumar a cama.", isTrue: true, explanation: "Yes, Make the bed means Arrumar a cama." }, { statement: "Take out the trash means a type of car.", statementPt: "Take out the trash significa um tipo de carro.", isTrue: false, explanation: "No, Take out the trash means Tirar o lixo." }, { statement: "Clean means Limpar.", statementPt: "Clean significa Limpar.", isTrue: true, explanation: "Yes, Clean means Limpar." }, { statement: "Laundry means a type of car.", statementPt: "Laundry significa um tipo de carro.", isTrue: false, explanation: "No, Laundry means Lavar roupa." } ],
                    part2: [ { statement: "Iron the clothes means Passar a roupa.", statementPt: "Iron the clothes significa Passar a roupa.", isTrue: true, explanation: "Yes, Iron the clothes means Passar a roupa." }, { statement: "Dust the furniture means a type of car.", statementPt: "Dust the furniture significa um tipo de carro.", isTrue: false, explanation: "No, Dust the furniture means Tirar o pó dos móveis." }, { statement: "Vacuum means Passar aspirador.", statementPt: "Vacuum significa Passar aspirador.", isTrue: true, explanation: "Yes, Vacuum means Passar aspirador." }, { statement: "Garage means a type of car.", statementPt: "Garage significa um tipo de carro.", isTrue: false, explanation: "No, Garage means Garagem." }, { statement: "Garden / Yard means Jardim / Quintal.", statementPt: "Garden / Yard significa Jardim / Quintal.", isTrue: true, explanation: "Yes, Garden / Yard means Jardim / Quintal." }, { statement: "Window means a type of car.", statementPt: "Window significa um tipo de carro.", isTrue: false, explanation: "No, Window means Janela." }, { statement: "Door means Porta.", statementPt: "Door significa Porta.", isTrue: true, explanation: "Yes, Door means Porta." }, { statement: "Roof means a type of car.", statementPt: "Roof significa um tipo de carro.", isTrue: false, explanation: "No, Roof means Telhado." }, { statement: "Stairs means Escadas.", statementPt: "Stairs significa Escadas.", isTrue: true, explanation: "Yes, Stairs means Escadas." }, { statement: "Mirror means a type of car.", statementPt: "Mirror significa um tipo de carro.", isTrue: false, explanation: "No, Mirror means Espelho." } ]
                  },
      speakingPracticeLevel2: { part1: [ { question: "Is your landlord a friendly or strict person?", translation: "O proprietário da sua casa é uma pessoa amigável ou rigorosa?" }, { question: "Do you pay your rent at the beginning of the month?", translation: "Você paga o seu aluguel no início do mês?" }, { question: "Did you buy all the furniture for your house new?", translation: "Você comprou todos os móveis para sua casa novos?" }, { question: "What is the most expensive appliance in your kitchen?", translation: "Qual é o eletrodoméstico mais caro na sua cozinha?" }, { question: "Do you think your living room is cozy in winter?", translation: "Você acha que sua sala de estar é aconchegante no inverno?" }, { question: "Is your current apartment spacious enough for you?", translation: "O seu apartamento atual é espaçoso o suficiente para você?" }, { question: "When did you officially move in to your house?", translation: "Quando você se mudou oficialmente para sua casa?" }, { question: "Do you like the neighborhood you currently live in?", translation: "Você gosta do bairro em que mora atualmente?" }, { question: "Are you planning to move out anytime soon?", translation: "Você planeja se mudar em breve?" }, { question: "How long did it take to settle in to your new place?", translation: "Quanto tempo demorou para você se acomodar na sua casa nova?" } ], part2: [ { question: "Do you usually tidy up your desk before working?", translation: "Você costuma arrumar sua mesa antes de trabalhar?" }, { question: "Who will clean up the mess after the party?", translation: "Quem vai limpar a bagunça depois da festa?" }, { question: "Do you put away your clothes as soon as they are washed?", translation: "Você guarda suas roupas assim que são lavadas?" }, { question: "Did you decorate your bedroom yourself?", translation: "Você decorou o seu quarto você mesmo?" }, { question: "Would you like to renovate your bathroom next year?", translation: "Você gostaria de reformar o seu banheiro no ano que vem?" }, { question: "Did you sign a one-year lease for your apartment?", translation: "Você assinou um contrato de aluguel de um ano para o seu apartamento?" }, { question: "Have you ever seen a landlord evict a bad tenant?", translation: "Você já viu um proprietário despejar um inquilino ruim?" }, { question: "Is it hard to get a mortgage from the bank?", translation: "É difícil conseguir um financiamento imobiliário no banco?" }, { question: "Are you going to fix up the old house before selling it?", translation: "Você vai consertar/reformar a casa velha antes de vendê-la?" } ] },
      imageDescription: {
                  imagePath: "/images/scenarios/scenario_casa_1789410507520.jpg",
                  keywords: [
                    { english: "Cozy rustic living room and kitchen", portuguese: "Sala de estar e cozinha rústicas e aconchegantes" },
                    { english: "Green velvet sofa on a rug", portuguese: "Sofá de veludo verde em um tapete" },
                    { english: "Exposed brick wall in the background", portuguese: "Parede de tijolos expostos ao fundo" },
                    { english: "Wooden dining counter with stools", portuguese: "Balcão de jantar de madeira com banquetas" }
                  ]
                },

      wouldYouRather: [
        { optionA: { english: "Live in a big house", portuguese: "Morar em uma casa grande" }, optionB: { english: "Live in a modern apartment", portuguese: "Morar em um apartamento moderno" } },
        { optionA: { english: "Have a big garden", portuguese: "Ter um jardim grande" }, optionB: { english: "Have a large balcony", portuguese: "Ter uma varanda grande" } },
        { optionA: { english: "Clean the living room", portuguese: "Limpar a sala de estar" }, optionB: { english: "Organize the bedroom", portuguese: "Organizar o quarto" } },
        { optionA: { english: "Have a green velvet sofa", portuguese: "Ter um sofá de veludo verde" }, optionB: { english: "Have a black leather sofa", portuguese: "Ter um sofá de couro preto" } },
        { optionA: { english: "Have a swimming pool", portuguese: "Ter uma piscina" }, optionB: { english: "Have a home theater", portuguese: "Ter um cinema em casa" } },
        { optionA: { english: "Paint the walls bright colors", portuguese: "Pintar as paredes com cores vivas" }, optionB: { english: "Keep the walls neutral white", portuguese: "Manter as paredes brancas e neutras" } },
        { optionA: { english: "Live in a wooden cabin", portuguese: "Morar em uma cabana de madeira" }, optionB: { english: "Live in a glass house", portuguese: "Morar em uma casa de vidro" } }
      ]
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
    reading: {
      "level1": {
            "textEn": "My absolute favorite room in our entire house is the living room. We have a big blue couch that is incredibly soft, and a large flat-screen TV mounted on the wall. After dinner, I really like to sit on the couch, relax, and watch action movies with my family. Sometimes, my father mops the floor with a special cleaner to keep it looking shiny and new. We also have a small balcony connected to the living room. In the afternoons, we like to stand on the balcony because we can see the street and watch the cars drive by.",
            "textPt": "O meu cômodo favorito absoluto em toda a nossa casa é a sala de estar. Temos um grande sofá azul que é incrivelmente macio e uma grande TV de tela plana montada na parede. Depois do jantar, gosto muito de sentar no sofá, relaxar e assistir a filmes de ação com minha família. Às vezes, meu pai passa pano no chão com um limpador especial para mantê-lo brilhante e com aparência de novo. Também temos uma pequena varanda ligada à sala de estar. À tarde, gostamos de ficar na varanda porque podemos ver a rua e observar os carros passando.",
            "questions": [
                  {
                        "question": "What is the author's favorite room?",
                        "options": [
                              "The living room",
                              "The bedroom",
                              "The kitchen",
                              "The bathroom"
                        ],
                        "correctIndex": 0,
                        "explanation": "They state 'My absolute favorite room in our entire house is the living room'."
                  },
                  {
                        "question": "What color is the couch?",
                        "options": [
                              "Blue",
                              "Red",
                              "Black",
                              "White"
                        ],
                        "correctIndex": 0,
                        "explanation": "They have a 'big blue couch'."
                  },
                  {
                        "question": "What does the father do to the floor?",
                        "options": [
                              "He mops it",
                              "He sweeps it",
                              "He paints it",
                              "He ignores it"
                        ],
                        "correctIndex": 0,
                        "explanation": "The father 'mops the floor with a special cleaner'."
                  },
                  {
                        "question": "What can they see from the balcony?",
                        "options": [
                              "The street",
                              "The garden",
                              "The ocean",
                              "The neighbors"
                        ],
                        "correctIndex": 0,
                        "explanation": "From the balcony 'we can see the street and watch the cars drive by'."
                  }
            ]
      },
      "level2": {
            "textEn": "Effective household maintenance goes significantly beyond just doing the basic cleaning. As a homeowner, you have to constantly ensure that everything in the structure functions properly. For instance, yesterday I spent the entire afternoon washing the dirty exterior windows and carefully watering all the potted plants on our sunny balcony. Tomorrow, my father has a busy schedule: he will mow the front lawn and grab a ladder to check the wooden ceiling for any signs of water leaks before the rainy season starts. Consistently keeping up with these demanding chores prevents much bigger and more expensive problems from occurring in the future.",
            "textPt": "A manutenção doméstica eficaz vai significativamente além de apenas fazer a limpeza básica. Como proprietário, você precisa garantir constantemente que tudo na estrutura funcione corretamente. Por exemplo, ontem passei a tarde inteira lavando as janelas externas sujas e regando cuidadosamente todas as plantas em vasos na nossa varanda ensolarada. Amanhã, meu pai tem uma agenda lotada: ele vai cortar a grama da frente e pegar uma escada para verificar o teto de madeira em busca de sinais de vazamentos de água antes do início da estação das chuvas. Manter-se consistentemente em dia com essas tarefas exigentes evita que problemas muito maiores e mais caros ocorram no futuro.",
            "questions": [
                  {
                        "question": "What did the author do yesterday afternoon?",
                        "options": [
                              "Washed the windows and watered plants",
                              "Mowed the lawn",
                              "Fixed the ceiling",
                              "Painted the balcony"
                        ],
                        "correctIndex": 0,
                        "explanation": "They spent the afternoon 'washing the dirty exterior windows and carefully watering all the potted plants'."
                  },
                  {
                        "question": "What will the father do tomorrow?",
                        "options": [
                              "Mow the lawn and check the ceiling",
                              "Buy new plants",
                              "Clean the garage",
                              "Wash the car"
                        ],
                        "correctIndex": 0,
                        "explanation": "He will 'mow the front lawn and grab a ladder to check the wooden ceiling'."
                  },
                  {
                        "question": "What is the ceiling made of?",
                        "options": [
                              "Wood",
                              "Concrete",
                              "Glass",
                              "Metal"
                        ],
                        "correctIndex": 0,
                        "explanation": "It is described as a 'wooden ceiling'."
                  },
                  {
                        "question": "Why is keeping up with chores important?",
                        "options": [
                              "It prevents bigger problems in the future",
                              "It makes the neighbors happy",
                              "It is good exercise",
                              "It is required by law"
                        ],
                        "correctIndex": 0,
                        "explanation": "It 'prevents much bigger and more expensive problems from occurring in the future'."
                  }
            ]
      }
},
    vocabulary: [
      { english: "Mop the floor", portuguese: "Passar pano no chão",
          levels: { 
                        A1: { en: "I need to mop the floor.", pt: "Eu preciso passar pano no chão." }, 
                        A2: { en: "He mopped the floor because he spilled coffee.", pt: "Ele passou pano no chão porque derramou café." }
                      }
    },
      { english: "Fold the laundry", portuguese: "Dobrar a roupa",
          levels: { 
                        A1: { en: "Please fold the laundry.", pt: "Por favor, dobre a roupa." }, 
                        A2: { en: "She folded the laundry while watching television.", pt: "Ela dobrou a roupa enquanto assistia televisão." }
                      }
    },
      { english: "Dining room", portuguese: "Sala de jantar",
          levels: { 
                        A1: { en: "We eat in the dining room.", pt: "Nós comemos na sala de jantar." }, 
                        A2: { en: "We ate a huge dinner in the dining room.", pt: "Nós comemos um jantar enorme na sala de jantar." }
                      }
    },
      { english: "Hallway", portuguese: "Corredor",
          levels: { 
                        A1: { en: "The bathroom is down the hallway.", pt: "O banheiro fica no fim do corredor." }, 
                        A2: { en: "The long hallway connects all the bedrooms.", pt: "O longo corredor conecta todos os quartos." }
                      }
    },
      { english: "Ceiling", portuguese: "Teto",
          levels: { 
                        A1: { en: "Look up at the ceiling.", pt: "Olhe para cima para o teto." }, 
                        A2: { en: "They painted the ceiling white to brighten the room.", pt: "Eles pintaram o teto de branco para iluminar o cômodo." }
                      }
    },
      { english: "Wall", portuguese: "Parede",
          levels: { 
                        A1: { en: "The walls look blue.", pt: "As paredes parecem azuis." }, 
                        A2: { en: "He hung a beautiful painting on the empty wall.", pt: "Ele pendurou um lindo quadro na parede vazia." }
                      }
    },
      { english: "Balcony", portuguese: "Varanda / Sacada",
          levels: { 
                        A1: { en: "She stands on the balcony.", pt: "Ela fica na sacada." }, 
                        A2: { en: "We stood on the balcony and watched the sunset.", pt: "Nós ficamos na varanda e assistimos ao pôr do sol." }
                      }
    },
      { english: "Basement", portuguese: "Porão",
          levels: { 
                        A1: { en: "We keep old boxes in the basement.", pt: "Nós guardamos caixas velhas no porão." }, 
                        A2: { en: "They stored their old boxes in the dark basement.", pt: "Eles guardaram suas caixas antigas no porão escuro." }
                      }
    },
      { english: "Attic", portuguese: "Sótão",
          levels: { 
                        A1: { en: "The attic is very dusty.", pt: "O sótão está muito empoeirado." }, 
                        A2: { en: "He found an old photograph hidden in the attic.", pt: "Ele encontrou uma fotografia antiga escondida no sótão." }
                      }
    },
      { english: "Furniture", portuguese: "Móveis",
          levels: { 
                        A1: { en: "They buy new furniture.", pt: "Eles compram móveis novos." }, 
                        A2: { en: "She bought elegant furniture for her new apartment.", pt: "Ela comprou móveis elegantes para o seu novo apartamento." }
                      }
    },
      { english: "Couch / Sofa", portuguese: "Sofá",
          levels: { 
                        A1: { en: "I fall asleep on the couch.", pt: "Eu adormeço no sofá." }, 
                        A2: { en: "He fell asleep on the comfortable couch.", pt: "Ele adormeceu no sofá confortável." }
                      }
    },
      { english: "Wash the windows", portuguese: "Lavar as janelas",
          levels: { 
                        A1: { en: "We wash the windows.", pt: "Nós lavamos as janelas." }, 
                        A2: { en: "They washed the windows to see the garden clearly.", pt: "Eles lavaram as janelas para ver o jardim com clareza." }
                      }
    },
      { english: "Mow the lawn", portuguese: "Cortar a grama",
          levels: { 
                        A1: { en: "My father mows the lawn.", pt: "Meu pai corta a grama." }, 
                        A2: { en: "He mowed the lawn on Saturday morning.", pt: "Ele cortou a grama no sábado de manhã." }
                      }
    },
      { english: "Water the plants", portuguese: "Regar as plantas",
          levels: { 
                        A1: { en: "Dont forget to water the plants.", pt: "Não se esqueça de regar as plantas." }, 
                        A2: { en: "She watered the plants because it didn't rain.", pt: "Ela regou as plantas porque não choveu." }
                      }
    },
      { english: "Set the table", portuguese: "Arrumar a mesa",
          levels: { 
                        A1: { en: "Do you set the table for dinner?", pt: "Você arruma a mesa para o jantar?" }, 
                        A2: { en: "The children set the table before dinner.", pt: "As crianças arrumaram a mesa antes do jantar." }
                      }
    },
      { english: "Clear the table", portuguese: "Tirar a mesa",
          levels: { 
                        A1: { en: "I clear the table after dinner.", pt: "Eu tiro a mesa depois do jantar." }, 
                        A2: { en: "He cleared the table quickly after they finished eating.", pt: "Ele limpou a mesa rapidamente depois que terminaram de comer." }
                      }
    },
      { english: "Sink", portuguese: "Pia",
          levels: { 
                        A1: { en: "The sink is full of dishes.", pt: "A pia está cheia de louça." }, 
                        A2: { en: "She washed her hands in the kitchen sink.", pt: "Ela lavou as mãos na pia da cozinha." }
                      }
    },
      { english: "Faucet", portuguese: "Torneira",
          levels: { 
                        A1: { en: "Turn off the faucet to save water.", pt: "Feche a torneira para economizar água." }, 
                        A2: { en: "The broken faucet leaked water all night.", pt: "A torneira quebrada vazou água a noite toda." }
                      }
    },
      { english: "Closet", portuguese: "Guarda-roupa",
          levels: { 
                        A1: { en: "Hang your shirt in the closet.", pt: "Pendure sua camisa no guarda-roupa." }, 
                        A2: { en: "He organized all his winter clothes in the closet.", pt: "Ele organizou todas as suas roupas de inverno no guarda-roupa." }
                      }
    },
      { english: "Wipe the counter", portuguese: "Limpar a bancada",
          levels: { 
                        A1: { en: "Please wipe the counter after cooking.", pt: "Por favor, limpe a bancada após cozinhar." }, 
                        A2: { en: "She wiped the counter after preparing the meal.", pt: "Ela limpou o balcão depois de preparar a refeição." }
                      }
    },
      { english: "Vacuum", portuguese: "Passar aspirador",
          levels: { 
                        B1: { en: "I need to vacuum the carpets before the guests arrive.", pt: "Eu preciso passar aspirador nos tapetes antes que os convidados cheguem." } 
                      }
    },
      { english: "Do the laundry", portuguese: "Lavar a roupa",
          levels: { 
                        B1: { en: "She usually does the laundry on Sunday mornings.", pt: "Ela geralmente lava a roupa nos domingos de manhã." } 
                      }
    },
      { english: "Take out the trash", portuguese: "Levar o lixo para fora",
          levels: { 
                        B1: { en: "It is your turn to take out the trash tonight.", pt: "É a sua vez de levar o lixo para fora hoje à noite." } 
                      }
    },
      { english: "Wipe", portuguese: "Limpar / Passar um pano",
          levels: { 
                        B1: { en: "Could you wipe the kitchen table with a damp cloth?", pt: "Você poderia passar um pano na mesa da cozinha com um pano úmido?" } 
                      }
    },
      { english: "Dust", portuguese: "Tirar o pó",
          levels: { 
                        B1: { en: "He forgot to dust the bookshelves while cleaning the room.", pt: "Ele esqueceu de tirar o pó das prateleiras de livros ao limpar a sala." } 
                      }
    },
      { english: "Mop", portuguese: "Passar esfregão",
          levels: { 
                        B1: { en: "Someone spilled juice, so I had to mop the floor.", pt: "Alguém derramou suco, então eu tive que passar esfregão no chão." } 
                      }
    },
      { english: "Tidy up", portuguese: "Arrumar / Organizar",
          levels: { 
                        B1: { en: "Please tidy up your bedroom before going out to play.", pt: "Por favor, arrume seu quarto antes de sair para brincar." } 
                      }
    },
      { english: "Chores", portuguese: "Tarefas domésticas",
          levels: { 
                        B1: { en: "We share the household chores equally between everyone.", pt: "Nós dividimos as tarefas domésticas igualmente entre todos." } 
                      }
    },
      { english: "Sweep", portuguese: "Varrer",
          levels: { 
                        B1: { en: "Please sweep the floor before you wash it.", pt: "Por favor, varra o chão antes de lavá-lo." } 
                      }
    },
      { english: "Iron", portuguese: "Passar a ferro",
          levels: { 
                        B1: { en: "I need to iron my shirt before the job interview tomorrow.", pt: "Eu preciso passar a minha camisa antes da entrevista de emprego amanhã." } 
                      }
    },
      { english: "Fold", portuguese: "Dobrar",
          levels: { 
                        B1: { en: "After the clothes are dry, you should fold them neatly and put them away.", pt: "Depois que as roupas secarem, você deve dobrá-las cuidadosamente e guardá-las." } 
                      }
    },
      { english: "Scrub", portuguese: "Esfregar",
          levels: { 
                        B1: { en: "I had to scrub the bathtub for half an hour to remove the stains.", pt: "Eu tive que esfregar a banheira por meia hora para remover as manchas." } 
                      }
    },
      { english: "Plug in", portuguese: "Ligar na tomada",
          levels: { 
                        B1: { en: "Don't forget to plug in your phone charger before you go to sleep.", pt: "Não se esqueça de ligar o carregador do seu celular na tomada antes de dormir." } 
                      }
    },
      { english: "Unplug", portuguese: "Tirar da tomada",
          levels: { 
                        B1: { en: "Always unplug the iron when you are finished using it.", pt: "Sempre tire o ferro da tomada quando terminar de usá-lo." } 
                      }
    },
      { english: "Turn up", portuguese: "Aumentar (volume/temperatura)",
          levels: { 
                        B1: { en: "Can you turn up the heating? It is getting quite cold in here.", pt: "Você pode aumentar o aquecedor? Está ficando bem frio aqui dentro." } 
                      }
    }
      ],
      flashcardsA2: [
          {
              "english": "He found an old photograph hidden in the attic.",
              "portuguese": "Ele encontrou uma fotografia antiga escondida no sótão.",
              "example": "Palavra-chave: Attic"
          },
          {
              "english": "He cleared the table quickly after they finished eating.",
              "portuguese": "Ele limpou a mesa rapidamente depois que terminaram de comer.",
              "example": "Palavra-chave: Clear the table"
          },
          {
              "english": "She bought elegant furniture for her new apartment.",
              "portuguese": "Ela comprou móveis elegantes para o seu novo apartamento.",
              "example": "Palavra-chave: Furniture"
          },
          {
              "english": "They painted the ceiling white to brighten the room.",
              "portuguese": "Eles pintaram o teto de branco para iluminar o cômodo.",
              "example": "Palavra-chave: Ceiling"
          },
          {
              "english": "He hung a beautiful painting on the empty wall.",
              "portuguese": "Ele pendurou um lindo quadro na parede vazia.",
              "example": "Palavra-chave: Wall"
          },
          {
              "english": "He organized all his winter clothes in the closet.",
              "portuguese": "Ele organizou todas as suas roupas de inverno no guarda-roupa.",
              "example": "Palavra-chave: Closet"
          },
          {
              "english": "We stood on the balcony and watched the sunset.",
              "portuguese": "Nós ficamos na varanda e assistimos ao pôr do sol.",
              "example": "Palavra-chave: Balcony"
          },
          {
              "english": "The broken faucet leaked water all night.",
              "portuguese": "A torneira quebrada vazou água a noite toda.",
              "example": "Palavra-chave: Faucet"
          },
          {
              "english": "She washed her hands in the kitchen sink.",
              "portuguese": "Ela lavou as mãos na pia da cozinha.",
              "example": "Palavra-chave: Sink"
          },
          {
              "english": "The long hallway connects all the bedrooms.",
              "portuguese": "O longo corredor conecta todos os quartos.",
              "example": "Palavra-chave: Hallway"
          },
          {
              "english": "He mowed the lawn on Saturday morning.",
              "portuguese": "Ele cortou a grama no sábado de manhã.",
              "example": "Palavra-chave: Mow the lawn"
          },
          {
              "english": "He mopped the floor because he spilled coffee.",
              "portuguese": "Ele passou pano no chão porque derramou café.",
              "example": "Palavra-chave: Mop the floor"
          },
          {
              "english": "The children set the table before dinner.",
              "portuguese": "As crianças arrumaram a mesa antes do jantar.",
              "example": "Palavra-chave: Set the table"
          },
          {
              "english": "They stored their old boxes in the dark basement.",
              "portuguese": "Eles guardaram suas caixas antigas no porão escuro.",
              "example": "Palavra-chave: Basement"
          },
          {
              "english": "She folded the laundry while watching television.",
              "portuguese": "Ela dobrou a roupa enquanto assistia televisão.",
              "example": "Palavra-chave: Fold the laundry"
          },
          {
              "english": "She watered the plants because it didn't rain.",
              "portuguese": "Ela regou as plantas porque não choveu.",
              "example": "Palavra-chave: Water the plants"
          },
          {
              "english": "She wiped the counter after preparing the meal.",
              "portuguese": "Ela limpou o balcão depois de preparar a refeição.",
              "example": "Palavra-chave: Wipe the counter"
          },
          {
              "english": "We ate a huge dinner in the dining room.",
              "portuguese": "Nós comemos um jantar enorme na sala de jantar.",
              "example": "Palavra-chave: Dining room"
          },
          {
              "english": "They washed the windows to see the garden clearly.",
              "portuguese": "Eles lavaram as janelas para ver o jardim com clareza.",
              "example": "Palavra-chave: Wash the windows"
          },
          {
              "english": "He fell asleep on the comfortable couch.",
              "portuguese": "Ele adormeceu no sofá confortável.",
              "example": "Palavra-chave: Couch / Sofa"
          }
      ],
      flashcardsB1: [
          {
              "english": "I need to iron my shirt before the job interview tomorrow.",
              "portuguese": "Eu preciso passar a minha camisa antes da entrevista de emprego amanhã.",
              "example": "Palavra-chave: Iron"
          },
          {
              "english": "Could you wipe the kitchen table with a damp cloth?",
              "portuguese": "Você poderia passar um pano na mesa da cozinha com um pano úmido?",
              "example": "Palavra-chave: Wipe"
          },
          {
              "english": "Please sweep the floor before you wash it.",
              "portuguese": "Por favor, varra o chão antes de lavá-lo.",
              "example": "Palavra-chave: Sweep"
          },
          {
              "english": "We share the household chores equally between everyone.",
              "portuguese": "Nós dividimos as tarefas domésticas igualmente entre todos.",
              "example": "Palavra-chave: Chores"
          },
          {
              "english": "After the clothes are dry, you should fold them neatly and put them away.",
              "portuguese": "Depois que as roupas secarem, você deve dobrá-las cuidadosamente e guardá-las.",
              "example": "Palavra-chave: Fold"
          },
          {
              "english": "I usually do the laundry on Sunday mornings when I have free time.",
              "portuguese": "Eu costumo lavar as roupas nas manhãs de domingo quando tenho tempo livre.",
              "example": "Palavra-chave: Do the laundry"
          },
          {
              "english": "Can you turn up the heating? It is getting quite cold in here.",
              "portuguese": "Você pode aumentar o aquecedor? Está ficando bem frio aqui dentro.",
              "example": "Palavra-chave: Turn up"
          },
          {
              "english": "She usually does the laundry on Sunday mornings.",
              "portuguese": "Ela geralmente lava a roupa nos domingos de manhã.",
              "example": "Palavra-chave: Do the laundry"
          },
          {
              "english": "Can you wipe the kitchen counter with a damp cloth?",
              "portuguese": "Você pode limpar o balcão da cozinha com um pano úmido?",
              "example": "Palavra-chave: Wipe"
          },
          {
              "english": "Always unplug the iron when you are finished using it.",
              "portuguese": "Sempre tire o ferro da tomada quando terminar de usá-lo.",
              "example": "Palavra-chave: Unplug"
          },
          {
              "english": "Someone spilled juice, so I had to mop the floor.",
              "portuguese": "Alguém derramou suco, então eu tive que passar esfregão no chão.",
              "example": "Palavra-chave: Mop"
          },
          {
              "english": "He forgot to dust the bookshelves while cleaning the room.",
              "portuguese": "Ele esqueceu de tirar o pó das prateleiras de livros ao limpar a sala.",
              "example": "Palavra-chave: Dust"
          },
          {
              "english": "I had to scrub the bathtub for half an hour to remove the stains.",
              "portuguese": "Eu tive que esfregar a banheira por meia hora para remover as manchas.",
              "example": "Palavra-chave: Scrub"
          },
          {
              "english": "I need to vacuum the carpets before the guests arrive.",
              "portuguese": "Eu preciso passar aspirador nos tapetes antes que os convidados cheguem.",
              "example": "Palavra-chave: Vacuum"
          },
          {
              "english": "Don't forget to plug in your phone charger before you go to sleep.",
              "portuguese": "Não se esqueça de ligar o carregador do seu celular na tomada antes de dormir.",
              "example": "Palavra-chave: Plug in"
          },
          {
              "english": "Please tidy up your bedroom before going out to play.",
              "portuguese": "Por favor, arrume seu quarto antes de sair para brincar.",
              "example": "Palavra-chave: Tidy up"
          },
          {
              "english": "Someone spilled juice on the floor, so I had to mop it up.",
              "portuguese": "Alguém derramou suco no chão, então tive que passar pano.",
              "example": "Palavra-chave: Mop"
          },
          {
              "english": "It is your turn to take out the trash tonight.",
              "portuguese": "É a sua vez de levar o lixo para fora hoje à noite.",
              "example": "Palavra-chave: Take out the trash"
          },
          {
              "english": "It is your turn to take out the trash tonight.",
              "portuguese": "É a sua vez de levar o lixo para fora hoje à noite.",
              "example": "Palavra-chave: Take out the trash"
          },
          {
              "english": "You should dust the furniture regularly to avoid allergies.",
              "portuguese": "Você deve tirar o pó dos móveis regularmente para evitar alergias.",
              "example": "Palavra-chave: Dust"
          }
      ],
      quizA2: [
          {
              "question": "Traduza a frase: \"Ele passou pano no chão porque derramou café.\"",
              "options": [
                  "She wiped the counter after preparing the meal.",
                  "He mopped the floor because he spilled coffee.",
                  "She washed her hands in the kitchen sink.",
                  "They stored their old boxes in the dark basement."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He mopped the floor because he spilled coffee.\", que significa \"Ele passou pano no chão porque derramou café.\"."
          },
          {
              "question": "O que significa a frase: \"She folded the laundry while watching television.\"?",
              "options": [
                  "Ela dobrou a roupa enquanto assistia televisão.",
                  "As crianças arrumaram a mesa antes do jantar.",
                  "Nós comemos um jantar enorme na sala de jantar.",
                  "A torneira quebrada vazou água a noite toda."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"She folded the laundry while watching television.\", que significa \"Ela dobrou a roupa enquanto assistia televisão.\"."
          },
          {
              "question": "O que significa a frase: \"She wiped the counter after preparing the meal.\"?",
              "options": [
                  "Ela limpou o balcão depois de preparar a refeição.",
                  "O longo corredor conecta todos os quartos.",
                  "Ele limpou a mesa rapidamente depois que terminaram de comer.",
                  "Ela dobrou a roupa enquanto assistia televisão."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"She wiped the counter after preparing the meal.\", que significa \"Ela limpou o balcão depois de preparar a refeição.\"."
          },
          {
              "question": "Complete a frase: \"She bought elegant ______ for her new apartment.\"",
              "options": [
                  "Do the laundry",
                  "Attic",
                  "Take out the trash",
                  "Furniture"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"She bought elegant furniture for her new apartment.\", que significa \"Ela comprou móveis elegantes para o seu novo apartamento.\"."
          },
          {
              "question": "Complete a frase: \"He hung a beautiful painting on the empty ______.\"",
              "options": [
                  "Hallway",
                  "Clear the table",
                  "Faucet",
                  "Wall"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"He hung a beautiful painting on the empty wall.\", que significa \"Ele pendurou um lindo quadro na parede vazia.\"."
          },
          {
              "question": "O que significa a frase: \"He cleared the table quickly after they finished eating.\"?",
              "options": [
                  "Nós comemos um jantar enorme na sala de jantar.",
                  "Ele limpou a mesa rapidamente depois que terminaram de comer.",
                  "O longo corredor conecta todos os quartos.",
                  "Ele cortou a grama no sábado de manhã."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He cleared the table quickly after they finished eating.\", que significa \"Ele limpou a mesa rapidamente depois que terminaram de comer.\"."
          },
          {
              "question": "Complete a frase: \"They stored their old boxes in the dark ______.\"",
              "options": [
                  "Sweep",
                  "Wall",
                  "Unplug",
                  "Basement"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"They stored their old boxes in the dark basement.\", que significa \"Eles guardaram suas caixas antigas no porão escuro.\"."
          },
          {
              "question": "Traduza a frase: \"Ele cortou a grama no sábado de manhã.\"",
              "options": [
                  "She folded the laundry while watching television.",
                  "He mowed the lawn on Saturday morning.",
                  "He cleared the table quickly after they finished eating.",
                  "She bought elegant furniture for her new apartment."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He mowed the lawn on Saturday morning.\", que significa \"Ele cortou a grama no sábado de manhã.\"."
          },
          {
              "question": "Complete a frase: \"He fell asleep on the comfortable ______.\"",
              "options": [
                  "Couch / Sofa",
                  "Unplug",
                  "Iron",
                  "Mop the floor"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He fell asleep on the comfortable couch.\", que significa \"Ele adormeceu no sofá confortável.\"."
          },
          {
              "question": "Traduza a frase: \"Nós comemos um jantar enorme na sala de jantar.\"",
              "options": [
                  "They stored their old boxes in the dark basement.",
                  "He found an old photograph hidden in the attic.",
                  "She wiped the counter after preparing the meal.",
                  "We ate a huge dinner in the dining room."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"We ate a huge dinner in the dining room.\", que significa \"Nós comemos um jantar enorme na sala de jantar.\"."
          }
      ],
      quizB1: [
          {
              "question": "Traduza a frase: \"Eu tive que esfregar a banheira por meia hora para remover as manchas.\"",
              "options": [
                  "I had to scrub the bathtub for half an hour to remove the stains.",
                  "Could you wipe the kitchen table with a damp cloth?",
                  "I usually do the laundry on Sunday mornings when I have free time.",
                  "You should dust the furniture regularly to avoid allergies."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"I had to scrub the bathtub for half an hour to remove the stains.\", que significa \"Eu tive que esfregar a banheira por meia hora para remover as manchas.\"."
          },
          {
              "question": "Complete a frase: \"I need to ______ my shirt before the job interview tomorrow.\"",
              "options": [
                  "Dining room",
                  "Iron",
                  "Furniture",
                  "Wall"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"I need to iron my shirt before the job interview tomorrow.\", que significa \"Eu preciso passar a minha camisa antes da entrevista de emprego amanhã.\"."
          },
          {
              "question": "Complete a frase: \"I need to ______ the carpets before the guests arrive.\"",
              "options": [
                  "Mop",
                  "Vacuum",
                  "Take out the trash",
                  "Sweep"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"I need to vacuum the carpets before the guests arrive.\", que significa \"Eu preciso passar aspirador nos tapetes antes que os convidados cheguem.\"."
          },
          {
              "question": "Complete a frase: \"Can you ______ the heating? It is getting quite cold in here.\"",
              "options": [
                  "Turn up",
                  "Balcony",
                  "Attic",
                  "Chores"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"Can you turn up the heating? It is getting quite cold in here.\", que significa \"Você pode aumentar o aquecedor? Está ficando bem frio aqui dentro.\"."
          },
          {
              "question": "Traduza a frase: \"Você deve tirar o pó dos móveis regularmente para evitar alergias.\"",
              "options": [
                  "You should dust the furniture regularly to avoid allergies.",
                  "Always unplug the iron when you are finished using it.",
                  "I need to vacuum the carpets before the guests arrive.",
                  "Someone spilled juice on the floor, so I had to mop it up."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"You should dust the furniture regularly to avoid allergies.\", que significa \"Você deve tirar o pó dos móveis regularmente para evitar alergias.\"."
          },
          {
              "question": "Complete a frase: \"After the clothes are dry, you should ______ them neatly and put them away.\"",
              "options": [
                  "Mop",
                  "Wipe the counter",
                  "Do the laundry",
                  "Fold"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"After the clothes are dry, you should fold them neatly and put them away.\", que significa \"Depois que as roupas secarem, você deve dobrá-las cuidadosamente e guardá-las.\"."
          },
          {
              "question": "O que significa a frase: \"She usually does the laundry on Sunday mornings.\"?",
              "options": [
                  "Eu tive que esfregar a banheira por meia hora para remover as manchas.",
                  "É a sua vez de levar o lixo para fora hoje à noite.",
                  "Você pode limpar o balcão da cozinha com um pano úmido?",
                  "Ela geralmente lava a roupa nos domingos de manhã."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"She usually does the laundry on Sunday mornings.\", que significa \"Ela geralmente lava a roupa nos domingos de manhã.\"."
          },
          {
              "question": "Complete a frase: \"Please ______ your bedroom before going out to play.\"",
              "options": [
                  "Tidy up",
                  "Wall",
                  "Wipe the counter",
                  "Mow the lawn"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"Please tidy up your bedroom before going out to play.\", que significa \"Por favor, arrume seu quarto antes de sair para brincar.\"."
          },
          {
              "question": "Complete a frase: \"Someone spilled juice, so I had to ______ the floor.\"",
              "options": [
                  "Mop",
                  "Wipe",
                  "Basement",
                  "Unplug"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"Someone spilled juice, so I had to mop the floor.\", que significa \"Alguém derramou suco, então eu tive que passar esfregão no chão.\"."
          },
          {
              "question": "Complete a frase: \"It is your turn to ______ tonight.\"",
              "options": [
                  "Scrub",
                  "Clear the table",
                  "Hallway",
                  "Take out the trash"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"It is your turn to take out the trash tonight.\", que significa \"É a sua vez de levar o lixo para fora hoje à noite.\"."
          }
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
      { speaker: "Sarah", english: "Deal! Let's get to work.", portuguese: "Fechado! Mãos à obra.", isPrimary: false }],
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
      { english: "My closet is full.", portuguese: "Meu guarda-roupa está cheio." }],
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
      { question: 'What do you use to wash dishes?', options: ["The ceiling", "The couch", "The sink", "The wall"], correctIndex: 2, explanation: 'You wash dishes in the "Sink" (pia).' }],
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
    speakingPractice: { part1: [ { question: "Do you mop the floor with cold or warm water?", translation: "Você passa pano no chão com água fria ou morna?" }, { question: "Who usually helps fold the laundry in your family?", translation: "Quem costuma ajudar a dobrar a roupa na sua família?" }, { question: "Do you eat in the dining room or in front of the TV?", translation: "Você come na sala de jantar ou na frente da TV?" }, { question: "Is your hallway decorated with pictures?", translation: "O seu corredor é decorado com quadros?" }, { question: "What color is the ceiling in your bedroom?", translation: "Qual a cor do teto no seu quarto?" }, { question: "Do you have any posters on your wall?", translation: "Você tem algum pôster na sua parede?" }, { question: "Do you enjoy sitting on the balcony in the evening?", translation: "Você gosta de sentar na varanda à noite?" }, { question: "What do you keep hidden down in your basement?", translation: "O que você guarda escondido lá no seu porão?" }, { question: "Have you ever been inside a spooky attic?", translation: "Você já esteve dentro de um sótão assustador?" }, { question: "Where do you usually buy new furniture for your house?", translation: "Onde você costuma comprar móveis novos para sua casa?" } ], part2: [ { question: "Is your couch or sofa comfortable enough to sleep on?", translation: "O seu sofá é confortável o suficiente para dormir nele?" }, { question: "How often do you actually wash the windows?", translation: "Com que frequência você realmente lava as janelas?" }, { question: "Do you pay someone to mow the lawn?", translation: "Você paga alguém para cortar a grama?" }, { question: "Do you often forget to water the plants?", translation: "Você costuma esquecer de regar as plantas?" }, { question: "Whose turn is it to set the table tonight?", translation: "De quem é a vez de arrumar a mesa hoje à noite?" }, { question: "Do you clear the table immediately after eating?", translation: "Você limpa a mesa imediatamente após comer?" }, { question: "Is your kitchen sink full of dirty dishes right now?", translation: "A pia da sua cozinha está cheia de louça suja agora?" }, { question: "Does any faucet in your house leak water?", translation: "Alguma torneira na sua casa vaza água?" }, { question: "Is your clothes closet organized or a mess?", translation: "Seu guarda-roupa está organizado ou uma bagunça?" }, { question: "Do you always wipe the counter after cooking?", translation: "Você sempre limpa o balcão depois de cozinhar?" } ] },
      buildSentence: { level1: [ { english: "I completely forgot to water the plants on the balcony.", portuguese: "Eu esqueci completamente de regar as plantas na varanda." }, { english: "She cleared the table after they finished eating.", portuguese: "Ela limpou a mesa depois que eles terminaram de comer." }, { english: "The basement is extremely dark and slightly scary at night.", portuguese: "O porão é extremamente escuro e um pouco assustador à noite." }, { english: "We fixed the leaky faucet in the bathroom sink yesterday.", portuguese: "Nós consertamos a torneira vazando na pia do banheiro ontem." }, { english: "He is folding the laundry while I mop the floor.", portuguese: "Ele está dobrando a roupa lavada enquanto eu passo pano no chão." }, { english: "He painted the walls and the ceiling white.", portuguese: "Ele pintou as paredes e o teto de branco." } ], level2: [ { english: "She unplugs the television during a heavy thunderstorm.", portuguese: "Ela tira a televisão da tomada durante uma forte tempestade." }, { english: "She scrubbed the dirty kitchen tiles for three hours.", portuguese: "Ela esfregou os azulejos sujos da cozinha por três horas." }, { english: "He was dusting the wooden shelves when the phone rang.", portuguese: "Ele estava tirando o pó das prateleiras de madeira quando o telefone tocou." }, { english: "He turned up the heating because it was freezing here.", portuguese: "Ele aumentou o aquecimento porque estava congelando aqui." }, { english: "I really hate doing the laundry on my precious weekends.", portuguese: "Eu realmente odeio lavar roupa nos meus preciosos fins de semana." }, { english: "He carefully irons his expensive shirts every single morning.", portuguese: "Ele passa cuidadosamente as camisas caras dele toda santa manhã." } ] },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Mop the floor means Passar pano no chão.", statementPt: "Mop the floor significa Passar pano no chão.", isTrue: true, explanation: "Yes, Mop the floor means Passar pano no chão." }, { statement: "Fold the laundry means a type of car.", statementPt: "Fold the laundry significa um tipo de carro.", isTrue: false, explanation: "No, Fold the laundry means Dobrar a roupa." }, { statement: "Dining room means Sala de jantar.", statementPt: "Dining room significa Sala de jantar.", isTrue: true, explanation: "Yes, Dining room means Sala de jantar." }, { statement: "Hallway means a type of car.", statementPt: "Hallway significa um tipo de carro.", isTrue: false, explanation: "No, Hallway means Corredor." }, { statement: "Ceiling means Teto.", statementPt: "Ceiling significa Teto.", isTrue: true, explanation: "Yes, Ceiling means Teto." }, { statement: "Wall means a type of car.", statementPt: "Wall significa um tipo de carro.", isTrue: false, explanation: "No, Wall means Parede." }, { statement: "Balcony means Varanda / Sacada.", statementPt: "Balcony significa Varanda / Sacada.", isTrue: true, explanation: "Yes, Balcony means Varanda / Sacada." }, { statement: "Basement means a type of car.", statementPt: "Basement significa um tipo de carro.", isTrue: false, explanation: "No, Basement means Porão." }, { statement: "Attic means Sótão.", statementPt: "Attic significa Sótão.", isTrue: true, explanation: "Yes, Attic means Sótão." }, { statement: "Furniture means a type of car.", statementPt: "Furniture significa um tipo de carro.", isTrue: false, explanation: "No, Furniture means Móveis." } ],
                    part2: [ { statement: "Couch / Sofa means Sofá.", statementPt: "Couch / Sofa significa Sofá.", isTrue: true, explanation: "Yes, Couch / Sofa means Sofá." }, { statement: "Wash the windows means a type of car.", statementPt: "Wash the windows significa um tipo de carro.", isTrue: false, explanation: "No, Wash the windows means Lavar as janelas." }, { statement: "Mow the lawn means Cortar a grama.", statementPt: "Mow the lawn significa Cortar a grama.", isTrue: true, explanation: "Yes, Mow the lawn means Cortar a grama." }, { statement: "Water the plants means a type of car.", statementPt: "Water the plants significa um tipo de carro.", isTrue: false, explanation: "No, Water the plants means Regar as plantas." }, { statement: "Set the table means Arrumar a mesa.", statementPt: "Set the table significa Arrumar a mesa.", isTrue: true, explanation: "Yes, Set the table means Arrumar a mesa." }, { statement: "Clear the table means a type of car.", statementPt: "Clear the table significa um tipo de carro.", isTrue: false, explanation: "No, Clear the table means Tirar a mesa." }, { statement: "Sink means Pia.", statementPt: "Sink significa Pia.", isTrue: true, explanation: "Yes, Sink means Pia." }, { statement: "Faucet means a type of car.", statementPt: "Faucet significa um tipo de carro.", isTrue: false, explanation: "No, Faucet means Torneira." }, { statement: "Closet means Guarda-roupa.", statementPt: "Closet significa Guarda-roupa.", isTrue: true, explanation: "Yes, Closet means Guarda-roupa." }, { statement: "Wipe the counter means a type of car.", statementPt: "Wipe the counter significa um tipo de carro.", isTrue: false, explanation: "No, Wipe the counter means Limpar a bancada." } ]
                  },
      speakingPracticeLevel2: { part1: [ { question: "Do you vacuum the carpets every week?", translation: "Você passa aspirador de pó nos tapetes toda semana?" }, { question: "Do you do the laundry on Saturdays or Sundays?", translation: "Você lava a roupa aos sábados ou domingos?" }, { question: "Whose turn is it to take out the trash today?", translation: "De quem é a vez de tirar o lixo hoje?" }, { question: "Did you wipe the kitchen table after dinner?", translation: "Você limpou/passou pano na mesa da cozinha depois do jantar?" }, { question: "Do you sneeze when you dust the old shelves?", translation: "Você espirra quando tira o pó das prateleiras antigas?" }, { question: "Is it your job to mop the bathroom floor?", translation: "É o seu trabalho passar pano no chão do banheiro?" }, { question: "How long does it take you to tidy up your room?", translation: "Quanto tempo você leva para arrumar o seu quarto?" }, { question: "What are your least favorite chores around the house?", translation: "Quais são as tarefas domésticas que você menos gosta de fazer?" } ], part2: [ { question: "Did you sweep the kitchen before mopping it?", translation: "Você varreu a cozinha antes de passar pano nela?" }, { question: "Do you usually iron your clothes while watching TV?", translation: "Você costuma passar suas roupas enquanto assiste TV?" }, { question: "Do you fold your t-shirts or hang them up?", translation: "Você dobra suas camisetas ou as pendura?" }, { question: "Did you scrub the bathtub until it was perfectly clean?", translation: "Você esfregou a banheira até ela ficar perfeitamente limpa?" }, { question: "Did you plug in your phone charger near your bed?", translation: "Você conectou o carregador do seu celular perto da sua cama?" }, { question: "Do you unplug the TV during a thunderstorm?", translation: "Você tira a TV da tomada durante uma tempestade?" }, { question: "Do you turn up the volume when your favorite song plays?", translation: "Você aumenta o volume quando toca a sua música favorita?" } ] },
      imageDescription: {
                  imagePath: "/images/scenarios/scenario_casa2_1789410518274.jpg",
                  keywords: [
                    { english: "A sunny balcony overlooking the city", portuguese: "Uma varanda ensolarada com vista para a cidade" },
                    { english: "Potted green plants and pink flowers", portuguese: "Plantas verdes em vasos e flores rosas" },
                    { english: "Small round table with two chairs", portuguese: "Mesa redonda pequena com duas cadeiras" },
                    { english: "Cars parked on the street below", portuguese: "Carros estacionados na rua lá embaixo" }
                  ]
                },

      wouldYouRather: [
        { optionA: { english: "Cook in a modern kitchen", portuguese: "Cozinhar em uma cozinha moderna" }, optionB: { english: "Order food delivery", portuguese: "Pedir comida por delivery" } },
        { optionA: { english: "Wash the dishes by hand", portuguese: "Lavar a louça à mão" }, optionB: { english: "Take out the trash", portuguese: "Levar o lixo para fora" } },
        { optionA: { english: "Live in the city center", portuguese: "Morar no centro da cidade" }, optionB: { english: "Live in the quiet suburbs", portuguese: "Morar no subúrbio tranquilo" } },
        { optionA: { english: "Have a big refrigerator", portuguese: "Ter uma geladeira grande" }, optionB: { english: "Have a large dining table", portuguese: "Ter uma mesa de jantar grande" } },
        { optionA: { english: "Have a personal chef at home", portuguese: "Ter um chef particular em casa" }, optionB: { english: "Have a person to clean the house", portuguese: "Ter uma pessoa para limpar a casa" } },
        { optionA: { english: "Eat breakfast on the balcony", portuguese: "Tomar café da manhã na varanda" }, optionB: { english: "Eat breakfast in bed", portuguese: "Tomar café da manhã na cama" } },
        { optionA: { english: "Have an indoor garden", portuguese: "Ter um jardim interno" }, optionB: { english: "Have a large garage", portuguese: "Ter uma garagem grande" } }
      ]
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
    reading: {
      "level1": {
            "textEn": "On weekends, I usually have a lot of free time to do the things I really enjoy. I love to spend hours reading adventure books quietly in my room. My younger brother is very different; he likes to play loud video games in the living room with his friends online. Sometimes, when it is raining outside, we sit together and draw colorful pictures at the kitchen table. Having personal hobbies is a great way to relax your mind and playfully learn new skills without feeling any stress from school or work.",
            "textPt": "Nos fins de semana, geralmente tenho muito tempo livre para fazer as coisas que realmente gosto. Adoro passar horas lendo livros de aventura tranquilamente no meu quarto. Meu irmão mais novo é muito diferente; ele gosta de jogar videogames barulhentos na sala com seus amigos online. Às vezes, quando está chovendo lá fora, sentamos juntos e desenhamos imagens coloridas na mesa da cozinha. Ter hobbies pessoais é uma ótima maneira de relaxar a mente e aprender novas habilidades de forma lúdica, sem sentir o estresse da escola ou do trabalho.",
            "questions": [
                  {
                        "question": "What does the author love to do in their room?",
                        "options": [
                              "Read books",
                              "Play video games",
                              "Sleep",
                              "Listen to music"
                        ],
                        "correctIndex": 0,
                        "explanation": "They 'love to spend hours reading adventure books quietly in my room'."
                  },
                  {
                        "question": "What is the brother's hobby?",
                        "options": [
                              "Playing video games",
                              "Drawing pictures",
                              "Reading books",
                              "Playing soccer"
                        ],
                        "correctIndex": 0,
                        "explanation": "The brother 'likes to play loud video games'."
                  },
                  {
                        "question": "What do they do together at the table?",
                        "options": [
                              "Draw pictures",
                              "Eat dinner",
                              "Do homework",
                              "Play cards"
                        ],
                        "correctIndex": 0,
                        "explanation": "They 'draw colorful pictures at the kitchen table'."
                  },
                  {
                        "question": "According to the text, why are hobbies great?",
                        "options": [
                              "They help you relax and learn",
                              "They make you rich",
                              "They are competitive",
                              "They are mandatory"
                        ],
                        "correctIndex": 0,
                        "explanation": "Hobbies are a way to 'relax your mind and playfully learn new skills'."
                  }
            ]
      },
      "level2": {
            "textEn": "Developing a challenging and creative hobby can drastically improve your overall mental health and daily focus. A few years ago, after feeling burned out from work, I decided to take up knitting as a therapeutic activity. It was incredibly frustrating at first because I kept dropping stitches, but now I can confidently knit warm, intricate sweaters for my entire family. My best friend, on the other hand, is extremely keen on collecting rare historical stamps, a hobby which requires meticulous patience and deep historical research. Whatever interest you eventually choose to pursue, hobbies provide a highly valuable and necessary escape from our perpetually busy, digital-driven lives.",
            "textPt": "Desenvolver um hobby desafiador e criativo pode melhorar drasticamente sua saúde mental geral e seu foco diário. Alguns anos atrás, depois de me sentir esgotado do trabalho, decidi começar a tricotar como uma atividade terapêutica. Foi incrivelmente frustrante no começo porque eu continuava perdendo pontos, mas agora consigo tricotar suéteres quentes e complexos com confiança para toda a minha família. Meu melhor amigo, por outro lado, é extremamente apaixonado por colecionar selos históricos raros, um hobby que exige paciência meticulosa e profunda pesquisa histórica. Qualquer que seja o interesse que você acabe escolhendo seguir, os hobbies proporcionam uma fuga altamente valiosa e necessária de nossas vidas digitais e perpetuamente ocupadas.",
            "questions": [
                  {
                        "question": "What benefit can a creative hobby provide?",
                        "options": [
                              "It can improve your mental health",
                              "It can increase your salary",
                              "It makes you famous",
                              "It replaces physical exercise"
                        ],
                        "correctIndex": 0,
                        "explanation": "It can 'drastically improve your overall mental health and daily focus'."
                  },
                  {
                        "question": "What hobby did the author take up?",
                        "options": [
                              "Knitting",
                              "Stamp collecting",
                              "Painting",
                              "Gardening"
                        ],
                        "correctIndex": 0,
                        "explanation": "They decided to 'take up knitting as a therapeutic activity'."
                  },
                  {
                        "question": "What is the best friend keen on doing?",
                        "options": [
                              "Collecting rare stamps",
                              "Knitting sweaters",
                              "Playing video games",
                              "Traveling"
                        ],
                        "correctIndex": 0,
                        "explanation": "The friend is 'extremely keen on collecting rare historical stamps'."
                  },
                  {
                        "question": "What do hobbies provide an escape from?",
                        "options": [
                              "Our busy digital lives",
                              "Physical pain",
                              "Financial problems",
                              "Family gatherings"
                        ],
                        "correctIndex": 0,
                        "explanation": "They provide an escape 'from our perpetually busy, digital-driven lives'."
                  }
            ]
      }
},
    vocabulary: [
      { english: "Read a book", portuguese: "Ler um livro",
          levels: { 
                        A1: { en: "I read a book every night.", pt: "Eu leio um livro toda noite." }, 
                        A2: { en: "He read an interesting book about ancient history.", pt: "Ele leu um livro interessante sobre história antiga." }
                      }
    },
      { english: "Play guitar", portuguese: "Tocar violão",
          levels: { 
                        A1: { en: "He plays guitar in a band.", pt: "Ele toca violão em uma banda." }, 
                        A2: { en: "She played the guitar beautifully at the concert.", pt: "Ela tocou violão lindamente no show." }
                      }
    },
      { english: "Listen to music", portuguese: "Ouvir música",
          levels: { 
                        A1: { en: "I listen to music while running.", pt: "Eu ouço música enquanto corro." }, 
                        A2: { en: "I listened to classical music to relax.", pt: "Eu escutei música clássica para relaxar." }
                      }
    },
      { english: "Watch movies", portuguese: "Assistir a filmes",
          levels: { 
                        A1: { en: "Lets watch movies on Netflix.", pt: "Vamos assistir a filmes na Netflix." }, 
                        A2: { en: "We watched scary movies on Halloween.", pt: "Nós assistimos a filmes de terror no Halloween." }
                      }
    },
      { english: "Draw / Paint", portuguese: "Desenhar / Pintar",
          levels: { 
                        A1: { en: "She likes to paint landscapes.", pt: "Ela gosta de pintar paisagens." }, 
                        A2: { en: "He painted a stunning landscape using watercolors.", pt: "Ele pintou uma paisagem deslumbrante usando aquarelas." }
                      }
    },
      { english: "Travel", portuguese: "Viajar",
          levels: { 
                        A1: { en: "Traveling is my favorite hobby.", pt: "Viajar é meu hobby favorito." }, 
                        A2: { en: "They traveled to Europe during their summer vacation.", pt: "Eles viajaram para a Europa durante as férias de verão." }
                      }
    },
      { english: "Play video games", portuguese: "Jogar videogame",
          levels: { 
                        A1: { en: "Kids love playing video games.", pt: "As crianças adoram jogar videogame." }, 
                        A2: { en: "He played video games with his friends all night.", pt: "Ele jogou videogames com seus amigos a noite toda." }
                      }
    },
      { english: "Take photos", portuguese: "Tirar fotos",
          levels: { 
                        A1: { en: "I take photos with my camera.", pt: "Eu tiro fotos com minha câmera." }, 
                        A2: { en: "She took amazing photos of the mountains.", pt: "Ela tirou fotos incríveis das montanhas." }
                      }
    },
      { english: "Dance", portuguese: "Dançar",
          levels: { 
                        A1: { en: "We go out to dance on Fridays.", pt: "Nós saímos para dançar às sextas." }, 
                        A2: { en: "We danced all night at the wedding reception.", pt: "Nós dançamos a noite toda na festa de casamento." }
                      }
    },
      { english: "Sing", portuguese: "Cantar",
          levels: { 
                        A1: { en: "She sings in the shower.", pt: "Ela canta no chuveiro." }, 
                        A2: { en: "He sang his favorite song in the shower.", pt: "Ele cantou sua música favorita no chuveiro." }
                      }
    },
      { english: "Cook", portuguese: "Cozinhar",
          levels: { 
                        A1: { en: "Cooking new recipes is fun.", pt: "Cozinhar novas receitas é divertido." }, 
                        A2: { en: "She cooked a complex meal for her family yesterday.", pt: "Ela cozinhou uma refeição complexa para a família ontem." }
                      }
    },
      { english: "Go hiking", portuguese: "Fazer trilha",
          levels: { 
                        A1: { en: "We go hiking in the mountains.", pt: "Nós fazemos trilha nas montanhas." }, 
                        A2: { en: "They went hiking in the national park yesterday.", pt: "Eles fizeram trilha no parque nacional ontem." }
                      }
    },
      { english: "Camp", portuguese: "Acampar",
          levels: { 
                        A1: { en: "They camp in the forest every summer.", pt: "Eles acampam na floresta todo verão." }, 
                        A2: { en: "We camped near a beautiful lake last weekend.", pt: "Nós acampamos perto de um lago lindo no final de semana passado." }
                      }
    },
      { english: "Knit", portuguese: "Tricotar",
          levels: { 
                        A1: { en: "My grandmother likes to knit.", pt: "Minha avó gosta de tricotar." }, 
                        A2: { en: "My grandmother knitted a warm sweater for me.", pt: "Minha avó tricotou um suéter quente para mim." }
                      }
    },
      { english: "Collect", portuguese: "Colecionar",
          levels: { 
                        A1: { en: "He collects old coins.", pt: "Ele coleciona moedas antigas." }, 
                        A2: { en: "He collected rare coins from different countries.", pt: "Ele colecionava moedas raras de diferentes países." },
              B1: { en: "Since he was a little boy, he has always loved to collect vintage coins.", pt: "Desde que ele era um garotinho, ele sempre amou colecionar moedas antigas." }
        }
    },
      { english: "Write", portuguese: "Escrever",
          levels: { 
                        A1: { en: "I write poems in my free time.", pt: "Eu escrevo poemas no meu tempo livre." }, 
                        A2: { en: "She wrote a long letter to her best friend.", pt: "Ela escreveu uma longa carta para sua melhor amiga." }
                      }
    },
      { english: "Garden", portuguese: "Jardinar",
          levels: { 
                        A1: { en: "She loves gardening in the spring.", pt: "Ela adora jardinar na primavera." }, 
                        A2: { en: "He spent his weekend gardening in the backyard.", pt: "Ele passou o fim de semana trabalhando no jardim no quintal." }
                      }
    },
      { english: "Surf the internet", portuguese: "Navegar na internet",
          levels: { 
                        A1: { en: "I surf the internet to read news.", pt: "Navego na internet para ler notícias." }, 
                        A2: { en: "I surfed the internet looking for interesting articles.", pt: "Eu naveguei na internet procurando artigos interessantes." }
                      }
    },
      { english: "Workout", portuguese: "Malhar",
          levels: { 
                        A1: { en: "I workout at the gym daily.", pt: "Eu malho na academia diariamente." }, 
                        A2: { en: "She worked out at the gym every morning.", pt: "Ela malhava na academia toda manhã." }
                      }
    },
      { english: "Play board games", portuguese: "Jogar jogos de tabuleiro",
          levels: { 
                        A1: { en: "We play board games on Sundays.", pt: "Jogamos jogos de tabuleiro aos domingos." }, 
                        A2: { en: "We played strategic board games on Saturday.", pt: "Nós jogamos jogos de tabuleiro estratégicos no sábado." }
                      }
    },
      { english: "Keen on", portuguese: "Interessado em / Gostar muito",
          levels: { 
                        B1: { en: "He is really keen on playing the guitar recently.", pt: "Ele está realmente interessado em tocar violão recentemente." } 
                      }
    },
      { english: "Take up", portuguese: "Começar (um hobby/atividade)",
          levels: { 
                        B1: { en: "She decided to take up yoga to reduce stress.", pt: "Ela decidiu começar a fazer yoga para reduzir o estresse." } 
                      }
    },
      { english: "Give up", portuguese: "Desistir / Parar de fazer",
          levels: { 
                        B1: { en: "He had to give up playing football after his knee injury.", pt: "Ele teve que parar de jogar futebol depois da lesão no joelho." } 
                      }
    },
      { english: "Into", portuguese: "Gostar muito de algo",
          levels: { 
                        B1: { en: "I am really into science fiction movies right now.", pt: "Eu estou gostando muito de filmes de ficção científica agora." } 
                      }
    },
      { english: "Leisure", portuguese: "Lazer / Tempo livre",
          levels: { 
                        B1: { en: "What do you normally do in your leisure time?", pt: "O que você normalmente faz no seu tempo de lazer?" } 
                      }
    },
      { english: "Outdoors", portuguese: "Ao ar livre",
          levels: { 
                        B1: { en: "They love spending their weekends outdoors, hiking and camping.", pt: "Eles adoram passar os fins de semana ao ar livre, fazendo trilhas e acampando." } 
                      }
    },
      { english: "Join", portuguese: "Juntar-se / Inscrever-se",
          levels: { 
                        B1: { en: "I want to join the local chess club this year.", pt: "Eu quero me inscrever no clube de xadrez local este ano." } 
                      }
    },
      { english: "Skill", portuguese: "Habilidade",
          levels: { 
                        B1: { en: "Learning a new language is a very useful skill.", pt: "Aprender um novo idioma é uma habilidade muito útil." } 
                      }
    },
      { english: "Join in", portuguese: "Juntar-se / Participar",
          levels: { 
                        B1: { en: "We are playing a board game right now. Do you want to join in?", pt: "Nós estamos jogando um jogo de tabuleiro agora. Você quer participar?" } 
                      }
    },
      { english: "Hang out", portuguese: "Sair / Passar o tempo",
          levels: { 
                        B1: { en: "My favorite hobby is just hanging out with my friends at the park.", pt: "Meu hobby favorito é apenas passar o tempo com meus amigos no parque." } 
                      }
    },
      { english: "Perform", portuguese: "Apresentar-se / Atuar",
          levels: { 
                        B1: { en: "Her dream is to perform on a Broadway stage one day.", pt: "O sonho dela é se apresentar em um palco da Broadway um dia." } 
                      }
    },
      { english: "Rehearse", portuguese: "Ensaiar",
          levels: { 
                        B1: { en: "The band meets every Tuesday evening to rehearse their new songs.", pt: "A banda se encontra toda terça à noite para ensaiar suas novas músicas." } 
                      }
    },
      { english: "Craft", portuguese: "Artesanato / Criar manualmente",
          levels: { 
                        B1: { en: "She enjoys crafting beautiful jewelry out of silver and glass beads.", pt: "Ela gosta de fazer lindas joias artesanais de prata e contas de vidro." } 
                      }
    },
      { english: "Sign up", portuguese: "Inscrever-se",
          levels: { 
                        B1: { en: "I am going to sign up for a Spanish class this summer.", pt: "Vou me inscrever para uma aula de espanhol neste verão." } 
                      }
    },
      { english: "Look forward to", portuguese: "Aguardar ansiosamente",
          levels: { 
                        B1: { en: "I always look forward to my painting class at the end of the week.", pt: "Eu sempre aguardo ansiosamente pela minha aula de pintura no final da semana." } 
                      }
    },
      { english: "Chill out", portuguese: "Relaxar",
          levels: { 
                        B1: { en: "After a long week of work, I just want to sit on the couch and chill out.", pt: "Depois de uma longa semana de trabalho, eu só quero sentar no sofá e relaxar." } 
                      }
    }
      ],
      flashcardsA2: [
          {
              "english": "We camped near a beautiful lake last weekend.",
              "portuguese": "Nós acampamos perto de um lago lindo no final de semana passado.",
              "example": "Palavra-chave: Camp"
          },
          {
              "english": "We danced all night at the wedding reception.",
              "portuguese": "Nós dançamos a noite toda na festa de casamento.",
              "example": "Palavra-chave: Dance"
          },
          {
              "english": "She took amazing photos of the mountains.",
              "portuguese": "Ela tirou fotos incríveis das montanhas.",
              "example": "Palavra-chave: Take photos"
          },
          {
              "english": "They went hiking in the national park yesterday.",
              "portuguese": "Eles fizeram trilha no parque nacional ontem.",
              "example": "Palavra-chave: Go hiking"
          },
          {
              "english": "He collected rare coins from different countries.",
              "portuguese": "Ele colecionava moedas raras de diferentes países.",
              "example": "Palavra-chave: Collect"
          },
          {
              "english": "He played video games with his friends all night.",
              "portuguese": "Ele jogou videogames com seus amigos a noite toda.",
              "example": "Palavra-chave: Play video games"
          },
          {
              "english": "My grandmother knitted a warm sweater for me.",
              "portuguese": "Minha avó tricotou um suéter quente para mim.",
              "example": "Palavra-chave: Knit"
          },
          {
              "english": "She worked out at the gym every morning.",
              "portuguese": "Ela malhava na academia toda manhã.",
              "example": "Palavra-chave: Workout"
          },
          {
              "english": "They traveled to Europe during their summer vacation.",
              "portuguese": "Eles viajaram para a Europa durante as férias de verão.",
              "example": "Palavra-chave: Travel"
          },
          {
              "english": "He painted a stunning landscape using watercolors.",
              "portuguese": "Ele pintou uma paisagem deslumbrante usando aquarelas.",
              "example": "Palavra-chave: Draw / Paint"
          },
          {
              "english": "We watched scary movies on Halloween.",
              "portuguese": "Nós assistimos a filmes de terror no Halloween.",
              "example": "Palavra-chave: Watch movies"
          },
          {
              "english": "I listened to classical music to relax.",
              "portuguese": "Eu escutei música clássica para relaxar.",
              "example": "Palavra-chave: Listen to music"
          },
          {
              "english": "She played the guitar beautifully at the concert.",
              "portuguese": "Ela tocou violão lindamente no show.",
              "example": "Palavra-chave: Play guitar"
          },
          {
              "english": "I surfed the internet looking for interesting articles.",
              "portuguese": "Eu naveguei na internet procurando artigos interessantes.",
              "example": "Palavra-chave: Surf the internet"
          },
          {
              "english": "He spent his weekend gardening in the backyard.",
              "portuguese": "Ele passou o fim de semana trabalhando no jardim no quintal.",
              "example": "Palavra-chave: Garden"
          },
          {
              "english": "We played strategic board games on Saturday.",
              "portuguese": "Nós jogamos jogos de tabuleiro estratégicos no sábado.",
              "example": "Palavra-chave: Play board games"
          },
          {
              "english": "She wrote a long letter to her best friend.",
              "portuguese": "Ela escreveu uma longa carta para sua melhor amiga.",
              "example": "Palavra-chave: Write"
          },
          {
              "english": "She cooked a complex meal for her family yesterday.",
              "portuguese": "Ela cozinhou uma refeição complexa para a família ontem.",
              "example": "Palavra-chave: Cook"
          },
          {
              "english": "He read an interesting book about ancient history.",
              "portuguese": "Ele leu um livro interessante sobre história antiga.",
              "example": "Palavra-chave: Read a book"
          },
          {
              "english": "He sang his favorite song in the shower.",
              "portuguese": "Ele cantou sua música favorita no chuveiro.",
              "example": "Palavra-chave: Sing"
          }
      ],
      flashcardsB1: [
          {
              "english": "We are playing a board game right now. Do you want to join in?",
              "portuguese": "Nós estamos jogando um jogo de tabuleiro agora. Você quer participar?",
              "example": "Palavra-chave: Join in"
          },
          {
              "english": "The band meets every Tuesday evening to rehearse their new songs.",
              "portuguese": "A banda se encontra toda terça à noite para ensaiar suas novas músicas.",
              "example": "Palavra-chave: Rehearse"
          },
          {
              "english": "Her dream is to perform on a Broadway stage one day.",
              "portuguese": "O sonho dela é se apresentar em um palco da Broadway um dia.",
              "example": "Palavra-chave: Perform"
          },
          {
              "english": "She decided to take up yoga to reduce stress.",
              "portuguese": "Ela decidiu começar a fazer yoga para reduzir o estresse.",
              "example": "Palavra-chave: Take up"
          },
          {
              "english": "I am really into science fiction movies right now.",
              "portuguese": "Eu estou gostando muito de filmes de ficção científica agora.",
              "example": "Palavra-chave: Into"
          },
          {
              "english": "I decided to take up photography as a new hobby to relax on weekends.",
              "portuguese": "Eu decidi começar a praticar fotografia como um novo hobby para relaxar nos fins de semana.",
              "example": "Palavra-chave: Take up"
          },
          {
              "english": "After a long week of work, I just want to sit on the couch and chill out.",
              "portuguese": "Depois de uma longa semana de trabalho, eu só quero sentar no sofá e relaxar.",
              "example": "Palavra-chave: Chill out"
          },
          {
              "english": "I am going to sign up for a Spanish class this summer.",
              "portuguese": "Vou me inscrever para uma aula de espanhol neste verão.",
              "example": "Palavra-chave: Sign up"
          },
          {
              "english": "I want to join the local chess club this year.",
              "portuguese": "Eu quero me inscrever no clube de xadrez local este ano.",
              "example": "Palavra-chave: Join"
          },
          {
              "english": "My favorite hobby is just hanging out with my friends at the park.",
              "portuguese": "Meu hobby favorito é apenas passar o tempo com meus amigos no parque.",
              "example": "Palavra-chave: Hang out"
          },
          {
              "english": "He is really keen on playing the guitar recently.",
              "portuguese": "Ele está realmente interessado em tocar violão recentemente.",
              "example": "Palavra-chave: Keen on"
          },
          {
              "english": "He used to play the guitar, but he gave it up when he started university.",
              "portuguese": "Ele costumava tocar violão, mas parou quando começou a universidade.",
              "example": "Palavra-chave: Give up"
          },
          {
              "english": "What do you normally do in your leisure time?",
              "portuguese": "O que você normalmente faz no seu tempo de lazer?",
              "example": "Palavra-chave: Leisure"
          },
          {
              "english": "He had to give up playing football after his knee injury.",
              "portuguese": "Ele teve que parar de jogar futebol depois da lesão no joelho.",
              "example": "Palavra-chave: Give up"
          },
          {
              "english": "I'm not very keen on gardening, but I do love arranging flowers.",
              "portuguese": "Eu não sou muito fã de jardinagem, mas adoro arrumar flores.",
              "example": "Palavra-chave: Keen on"
          },
          {
              "english": "Since he was a little boy, he has always loved to collect vintage coins.",
              "portuguese": "Desde que ele era um garotinho, ele sempre amou colecionar moedas antigas.",
              "example": "Palavra-chave: Collect"
          },
          {
              "english": "Learning a new language is a very useful skill.",
              "portuguese": "Aprender um novo idioma é uma habilidade muito útil.",
              "example": "Palavra-chave: Skill"
          },
          {
              "english": "They love spending their weekends outdoors, hiking and camping.",
              "portuguese": "Eles adoram passar os fins de semana ao ar livre, fazendo trilhas e acampando.",
              "example": "Palavra-chave: Outdoors"
          },
          {
              "english": "I always look forward to my painting class at the end of the week.",
              "portuguese": "Eu sempre aguardo ansiosamente pela minha aula de pintura no final da semana.",
              "example": "Palavra-chave: Look forward to"
          },
          {
              "english": "She enjoys crafting beautiful jewelry out of silver and glass beads.",
              "portuguese": "Ela gosta de fazer lindas joias artesanais de prata e contas de vidro.",
              "example": "Palavra-chave: Craft"
          }
      ],
      quizA2: [
          {
              "question": "Traduza a frase: \"Nós acampamos perto de um lago lindo no final de semana passado.\"",
              "options": [
                  "She wrote a long letter to her best friend.",
                  "We played strategic board games on Saturday.",
                  "I surfed the internet looking for interesting articles.",
                  "We camped near a beautiful lake last weekend."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"We camped near a beautiful lake last weekend.\", que significa \"Nós acampamos perto de um lago lindo no final de semana passado.\"."
          },
          {
              "question": "O que significa a frase: \"He read an interesting book about ancient history.\"?",
              "options": [
                  "Ela malhava na academia toda manhã.",
                  "Ele leu um livro interessante sobre história antiga.",
                  "Ele pintou uma paisagem deslumbrante usando aquarelas.",
                  "Eles viajaram para a Europa durante as férias de verão."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He read an interesting book about ancient history.\", que significa \"Ele leu um livro interessante sobre história antiga.\"."
          },
          {
              "question": "O que significa a frase: \"He collected rare coins from different countries.\"?",
              "options": [
                  "Minha avó tricotou um suéter quente para mim.",
                  "Nós jogamos jogos de tabuleiro estratégicos no sábado.",
                  "Ele colecionava moedas raras de diferentes países.",
                  "Eu escutei música clássica para relaxar."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"He collected rare coins from different countries.\", que significa \"Ele colecionava moedas raras de diferentes países.\"."
          },
          {
              "question": "O que significa a frase: \"She wrote a long letter to her best friend.\"?",
              "options": [
                  "Nós assistimos a filmes de terror no Halloween.",
                  "Eu naveguei na internet procurando artigos interessantes.",
                  "Ela escreveu uma longa carta para sua melhor amiga.",
                  "Ele pintou uma paisagem deslumbrante usando aquarelas."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"She wrote a long letter to her best friend.\", que significa \"Ela escreveu uma longa carta para sua melhor amiga.\"."
          },
          {
              "question": "Traduza a frase: \"Ele passou o fim de semana trabalhando no jardim no quintal.\"",
              "options": [
                  "He spent his weekend gardening in the backyard.",
                  "He played video games with his friends all night.",
                  "They traveled to Europe during their summer vacation.",
                  "I surfed the internet looking for interesting articles."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He spent his weekend gardening in the backyard.\", que significa \"Ele passou o fim de semana trabalhando no jardim no quintal.\"."
          },
          {
              "question": "O que significa a frase: \"He painted a stunning landscape using watercolors.\"?",
              "options": [
                  "Ele colecionava moedas raras de diferentes países.",
                  "Minha avó tricotou um suéter quente para mim.",
                  "Ele pintou uma paisagem deslumbrante usando aquarelas.",
                  "Eu escutei música clássica para relaxar."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"He painted a stunning landscape using watercolors.\", que significa \"Ele pintou uma paisagem deslumbrante usando aquarelas.\"."
          },
          {
              "question": "O que significa a frase: \"She took amazing photos of the mountains.\"?",
              "options": [
                  "Ele pintou uma paisagem deslumbrante usando aquarelas.",
                  "Ela cozinhou uma refeição complexa para a família ontem.",
                  "Ela tirou fotos incríveis das montanhas.",
                  "Ele leu um livro interessante sobre história antiga."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"She took amazing photos of the mountains.\", que significa \"Ela tirou fotos incríveis das montanhas.\"."
          },
          {
              "question": "O que significa a frase: \"She played the guitar beautifully at the concert.\"?",
              "options": [
                  "Nós assistimos a filmes de terror no Halloween.",
                  "Nós dançamos a noite toda na festa de casamento.",
                  "Eu escutei música clássica para relaxar.",
                  "Ela tocou violão lindamente no show."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"She played the guitar beautifully at the concert.\", que significa \"Ela tocou violão lindamente no show.\"."
          },
          {
              "question": "O que significa a frase: \"She worked out at the gym every morning.\"?",
              "options": [
                  "Ele leu um livro interessante sobre história antiga.",
                  "Nós assistimos a filmes de terror no Halloween.",
                  "Eles fizeram trilha no parque nacional ontem.",
                  "Ela malhava na academia toda manhã."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"She worked out at the gym every morning.\", que significa \"Ela malhava na academia toda manhã.\"."
          },
          {
              "question": "Traduza a frase: \"Ele jogou videogames com seus amigos a noite toda.\"",
              "options": [
                  "He played video games with his friends all night.",
                  "He read an interesting book about ancient history.",
                  "I surfed the internet looking for interesting articles.",
                  "We played strategic board games on Saturday."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He played video games with his friends all night.\", que significa \"Ele jogou videogames com seus amigos a noite toda.\"."
          }
      ],
      quizB1: [
          {
              "question": "Complete a frase: \"I always ______ my painting class at the end of the week.\"",
              "options": [
                  "Dance",
                  "Look forward to",
                  "Skill",
                  "Watch movies"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"I always look forward to my painting class at the end of the week.\", que significa \"Eu sempre aguardo ansiosamente pela minha aula de pintura no final da semana.\"."
          },
          {
              "question": "Complete a frase: \"They love spending their weekends ______, hiking and camping.\"",
              "options": [
                  "Join in",
                  "Outdoors",
                  "Skill",
                  "Keen on"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"They love spending their weekends outdoors, hiking and camping.\", que significa \"Eles adoram passar os fins de semana ao ar livre, fazendo trilhas e acampando.\"."
          },
          {
              "question": "Traduza a frase: \"Meu hobby favorito é apenas passar o tempo com meus amigos no parque.\"",
              "options": [
                  "Learning a new language is a very useful skill.",
                  "The band meets every Tuesday evening to rehearse their new songs.",
                  "He is really keen on playing the guitar recently.",
                  "My favorite hobby is just hanging out with my friends at the park."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"My favorite hobby is just hanging out with my friends at the park.\", que significa \"Meu hobby favorito é apenas passar o tempo com meus amigos no parque.\"."
          },
          {
              "question": "Complete a frase: \"I am going to ______ for a Spanish class this summer.\"",
              "options": [
                  "Perform",
                  "Sign up",
                  "Play guitar",
                  "Craft"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"I am going to sign up for a Spanish class this summer.\", que significa \"Vou me inscrever para uma aula de espanhol neste verão.\"."
          },
          {
              "question": "Complete a frase: \"Since he was a little boy, he has always loved to ______ vintage coins.\"",
              "options": [
                  "Collect",
                  "Take up",
                  "Sign up",
                  "Draw / Paint"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"Since he was a little boy, he has always loved to collect vintage coins.\", que significa \"Desde que ele era um garotinho, ele sempre amou colecionar moedas antigas.\"."
          },
          {
              "question": "Traduza a frase: \"A banda se encontra toda terça à noite para ensaiar suas novas músicas.\"",
              "options": [
                  "I'm not very keen on gardening, but I do love arranging flowers.",
                  "Her dream is to perform on a Broadway stage one day.",
                  "The band meets every Tuesday evening to rehearse their new songs.",
                  "My favorite hobby is just hanging out with my friends at the park."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"The band meets every Tuesday evening to rehearse their new songs.\", que significa \"A banda se encontra toda terça à noite para ensaiar suas novas músicas.\"."
          },
          {
              "question": "O que significa a frase: \"He used to play the guitar, but he gave it up when he started university.\"?",
              "options": [
                  "Ele costumava tocar violão, mas parou quando começou a universidade.",
                  "O que você normalmente faz no seu tempo de lazer?",
                  "Ele está realmente interessado em tocar violão recentemente.",
                  "Eu quero me inscrever no clube de xadrez local este ano."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He used to play the guitar, but he gave it up when he started university.\", que significa \"Ele costumava tocar violão, mas parou quando começou a universidade.\"."
          },
          {
              "question": "Traduza a frase: \"Nós estamos jogando um jogo de tabuleiro agora. Você quer participar?\"",
              "options": [
                  "Her dream is to perform on a Broadway stage one day.",
                  "What do you normally do in your leisure time?",
                  "We are playing a board game right now. Do you want to join in?",
                  "The band meets every Tuesday evening to rehearse their new songs."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"We are playing a board game right now. Do you want to join in?\", que significa \"Nós estamos jogando um jogo de tabuleiro agora. Você quer participar?\"."
          },
          {
              "question": "Complete a frase: \"He had to ______ playing football after his knee injury.\"",
              "options": [
                  "Travel",
                  "Play guitar",
                  "Give up",
                  "Watch movies"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"He had to give up playing football after his knee injury.\", que significa \"Ele teve que parar de jogar futebol depois da lesão no joelho.\"."
          },
          {
              "question": "Complete a frase: \"Her dream is to ______ on a Broadway stage one day.\"",
              "options": [
                  "Skill",
                  "Hang out",
                  "Collect",
                  "Perform"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"Her dream is to perform on a Broadway stage one day.\", que significa \"O sonho dela é se apresentar em um palco da Broadway um dia.\"."
          }
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
      { speaker: "David", english: "Sunday is perfect. I will bring the chess board.", portuguese: "Domingo é perfeito. Eu levo o tabuleiro de xadrez.", isPrimary: true }],
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
      { english: "Gardening is relaxing.", portuguese: "Jardinar é relaxante." }],
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
      { question: 'Complete: "Let\'s _____ a movie tonight."', options: ["see", "look", "watch", "read"], correctIndex: 2, explanation: 'We use "watch" for movies and TV.' }],
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
    speakingPractice: { part1: [ { question: "What is the best way to read a book, physically or digitally?", translation: "Qual é a melhor maneira de ler um livro, fisicamente ou digitalmente?" }, { question: "Did you ever try to learn how to play guitar?", translation: "Você já tentou aprender a tocar violão?" }, { question: "What genre do you prefer when you listen to music?", translation: "Qual gênero você prefere quando ouve música?" }, { question: "How often do you watch movies at the cinema?", translation: "Com que frequência você assiste a filmes no cinema?" }, { question: "Are you talented enough to draw or paint?", translation: "Você é talentoso o suficiente para desenhar ou pintar?" }, { question: "Which country would you love to travel to next?", translation: "Para qual país você adoraria viajar em seguida?" }, { question: "Do you play video games to relax after work?", translation: "Você joga videogame para relaxar depois do trabalho?" }, { question: "What kind of subjects do you like to take photos of?", translation: "Que tipo de assuntos você gosta de tirar fotos?" }, { question: "Are you brave enough to dance in public?", translation: "Você é corajoso o suficiente para dançar em público?" }, { question: "Do you sing out loud in the shower?", translation: "Você canta em voz alta no chuveiro?" } ], part2: [ { question: "What is the most complicated dish you can cook?", translation: "Qual é o prato mais complicado que você consegue cozinhar?" }, { question: "Do you like to go hiking in the mountains?", translation: "Você gosta de fazer trilha nas montanhas?" }, { question: "Have you ever gone to camp in a forest?", translation: "Você já foi acampar em uma floresta?" }, { question: "Do you know anyone who can knit a sweater?", translation: "Você conhece alguém que saiba tricotar um suéter?" }, { question: "Did you collect anything special when you were a kid?", translation: "Você colecionava algo especial quando era criança?" }, { question: "Do you prefer to write with a pen or type on a keyboard?", translation: "Você prefere escrever com caneta ou digitar em um teclado?" }, { question: "Do you have the patience to garden on weekends?", translation: "Você tem paciência para cuidar do jardim nos fins de semana?" }, { question: "How many hours a day do you surf the internet?", translation: "Quantas horas por dia você navega na internet?" }, { question: "What is your favorite exercise when you workout?", translation: "Qual é o seu exercício favorito quando você malha?" }, { question: "Who usually wins when you play board games?", translation: "Quem costuma ganhar quando você joga jogos de tabuleiro?" } ] },
      buildSentence: { level1: [ { english: "I read a book while she surfs the internet.", portuguese: "Eu leio um livro enquanto ela navega na internet." }, { english: "They traveled across Europe and took beautiful photos.", portuguese: "Eles viajaram pela Europa e tiraram lindas fotos." }, { english: "She listens to music while she draws colorful landscapes.", portuguese: "Ela ouve música enquanto desenha paisagens coloridas." }, { english: "We watched classic movies together last Friday night.", portuguese: "Nós assistimos filmes clássicos juntos na última sexta-feira à noite." }, { english: "He plays guitar in a band during his free time.", portuguese: "Ele toca violão em uma banda durante seu tempo livre." }, { english: "They are hiking in the peaceful mountains right now.", portuguese: "Eles estão fazendo trilha nas montanhas tranquilas agora mesmo." } ], level2: [ { english: "He took up photography as a creative leisure activity.", portuguese: "Ele começou fotografia como uma atividade criativa de lazer." }, { english: "They signed up for a workshop and improved their crafting skills.", portuguese: "Eles se inscreveram para um workshop e melhoraram suas habilidades manuais." }, { english: "We are rehearsing the new play tonight at the theater.", portuguese: "Nós estamos ensaiando a nova peça hoje à noite no teatro." }, { english: "She is keen on exploring the great outdoors every weekend.", portuguese: "Ela gosta muito de explorar a natureza todo fim de semana." }, { english: "He never gives up his passions when he is busy.", portuguese: "Ele nunca desiste das paixões dele quando está ocupado." }, { english: "He is collecting vintage comic books at the moment.", portuguese: "Ele está colecionando gibis antigos no momento." } ] },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Read a book means Ler um livro.", statementPt: "Read a book significa Ler um livro.", isTrue: true, explanation: "Yes, Read a book means Ler um livro." }, { statement: "Play guitar means a type of car.", statementPt: "Play guitar significa um tipo de carro.", isTrue: false, explanation: "No, Play guitar means Tocar violão." }, { statement: "Listen to music means Ouvir música.", statementPt: "Listen to music significa Ouvir música.", isTrue: true, explanation: "Yes, Listen to music means Ouvir música." }, { statement: "Watch movies means a type of car.", statementPt: "Watch movies significa um tipo de carro.", isTrue: false, explanation: "No, Watch movies means Assistir a filmes." }, { statement: "Draw / Paint means Desenhar / Pintar.", statementPt: "Draw / Paint significa Desenhar / Pintar.", isTrue: true, explanation: "Yes, Draw / Paint means Desenhar / Pintar." }, { statement: "Travel means a type of car.", statementPt: "Travel significa um tipo de carro.", isTrue: false, explanation: "No, Travel means Viajar." }, { statement: "Play video games means Jogar videogame.", statementPt: "Play video games significa Jogar videogame.", isTrue: true, explanation: "Yes, Play video games means Jogar videogame." }, { statement: "Take photos means a type of car.", statementPt: "Take photos significa um tipo de carro.", isTrue: false, explanation: "No, Take photos means Tirar fotos." }, { statement: "Dance means Dançar.", statementPt: "Dance significa Dançar.", isTrue: true, explanation: "Yes, Dance means Dançar." }, { statement: "Sing means a type of car.", statementPt: "Sing significa um tipo de carro.", isTrue: false, explanation: "No, Sing means Cantar." } ],
                    part2: [ { statement: "Cook means Cozinhar.", statementPt: "Cook significa Cozinhar.", isTrue: true, explanation: "Yes, Cook means Cozinhar." }, { statement: "Go hiking means a type of car.", statementPt: "Go hiking significa um tipo de carro.", isTrue: false, explanation: "No, Go hiking means Fazer trilha." }, { statement: "Camp means Acampar.", statementPt: "Camp significa Acampar.", isTrue: true, explanation: "Yes, Camp means Acampar." }, { statement: "Knit means a type of car.", statementPt: "Knit significa um tipo de carro.", isTrue: false, explanation: "No, Knit means Tricotar." }, { statement: "Collect means Colecionar.", statementPt: "Collect significa Colecionar.", isTrue: true, explanation: "Yes, Collect means Colecionar." }, { statement: "Write means a type of car.", statementPt: "Write significa um tipo de carro.", isTrue: false, explanation: "No, Write means Escrever." }, { statement: "Garden means Jardinar.", statementPt: "Garden significa Jardinar.", isTrue: true, explanation: "Yes, Garden means Jardinar." }, { statement: "Surf the internet means a type of car.", statementPt: "Surf the internet significa um tipo de carro.", isTrue: false, explanation: "No, Surf the internet means Navegar na internet." }, { statement: "Workout means Malhar.", statementPt: "Workout significa Malhar.", isTrue: true, explanation: "Yes, Workout means Malhar." }, { statement: "Play board games means a type of car.", statementPt: "Play board games significa um tipo de carro.", isTrue: false, explanation: "No, Play board games means Jogar jogos de tabuleiro." } ]
                  },
      speakingPracticeLevel2: { part1: [ { question: "Are you really keen on reading science fiction books?", translation: "Você é muito entusiasmado com a leitura de livros de ficção científica?" }, { question: "Did you take up any new hobbies during the lockdown?", translation: "Você começou algum novo hobby durante o isolamento?" }, { question: "Have you ever had to give up a hobby because it was too expensive?", translation: "Você já teve que desistir de um hobby porque era muito caro?" }, { question: "Are you really into playing strategy video games?", translation: "Você gosta muito de jogar videogames de estratégia?" }, { question: "What do you usually do for leisure on a Sunday?", translation: "O que você geralmente faz de lazer em um domingo?" }, { question: "Do you prefer staying indoors or exploring the outdoors?", translation: "Você prefere ficar em lugares fechados ou explorar ao ar livre?" }, { question: "Did you join any sports clubs recently?", translation: "Você se juntou a algum clube esportivo recentemente?" }, { question: "What is a useful skill you learned from a hobby?", translation: "Qual é uma habilidade útil que você aprendeu com um hobby?" } ], part2: [ { question: "Do you usually join in when people start singing?", translation: "Você costuma participar/se juntar quando as pessoas começam a cantar?" }, { question: "Where do you like to hang out with your friends?", translation: "Onde você gosta de sair/passar o tempo com seus amigos?" }, { question: "Did you ever perform in a play at school?", translation: "Você já atuou em uma peça na escola?" }, { question: "How many times a week does your band rehearse?", translation: "Quantas vezes por semana a sua banda ensaia?" }, { question: "Do you enjoy making paper craft projects?", translation: "Você gosta de fazer projetos de artesanato em papel?" }, { question: "Did you sign up for the upcoming art workshop?", translation: "Você se inscreveu para o próximo workshop de arte?" }, { question: "Are you looking forward to the next long holiday?", translation: "Você está ansioso(a) para o próximo feriado prolongado?" }, { question: "How do you usually chill out after a busy week?", translation: "Como você costuma relaxar depois de uma semana agitada?" } ] },
      imageDescription: {
                  imagePath: "/images/scenarios/scenario_hobbies_1789410561252.jpg",
                  keywords: [
                    { english: "Three people doing hobbies in the living room", portuguese: "Três pessoas fazendo hobbies na sala de estar" },
                    { english: "A woman painting on a canvas", portuguese: "Uma mulher pintando em uma tela" },
                    { english: "A man playing an acoustic guitar", portuguese: "Um homem tocando um violão acústico" },
                    { english: "A woman reading a book on the armchair", portuguese: "Uma mulher lendo um livro na poltrona" }
                  ]
                },

      wouldYouRather: [
        { optionA: { english: "Play a musical instrument", portuguese: "Tocar um instrumento musical" }, optionB: { english: "Paint a beautiful picture", portuguese: "Pintar um quadro bonito" } },
        { optionA: { english: "Read books all day", portuguese: "Ler livros o dia todo" }, optionB: { english: "Watch movies all day", portuguese: "Assistir a filmes o dia todo" } },
        { optionA: { english: "Have a quiet hobby at home", portuguese: "Ter um hobby tranquilo em casa" }, optionB: { english: "Have an active outdoor hobby", portuguese: "Ter um hobby ativo ao ar livre" } },
        { optionA: { english: "Play the acoustic guitar", portuguese: "Tocar violão acústico" }, optionB: { english: "Play the piano", portuguese: "Tocar piano" } },
        { optionA: { english: "Be a famous painter", portuguese: "Ser um pintor famoso" }, optionB: { english: "Be a famous singer", portuguese: "Ser um cantor famoso" } },
        { optionA: { english: "Collect rare stamps", portuguese: "Colecionar selos raros" }, optionB: { english: "Collect vintage coins", portuguese: "Colecionar moedas antigas" } },
        { optionA: { english: "Take beautiful photographs", portuguese: "Tirar fotografias bonitas" }, optionB: { english: "Write a popular blog", portuguese: "Escrever um blog popular" } }
      ]
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
    reading: {
      "level1": {
            "textEn": "I love being active, so I play soccer with my friends every Tuesday evening. We practice a lot, and I think we have a really good team now. Running back and forth on the large green field is very tiring, but scoring a beautiful goal makes all of us feel incredibly happy and proud. After the long match finishes, we are usually very thirsty, so we sit together and drink a lot of cold water. Engaging in sports is an excellent way to have fun and is very good for your physical health.",
            "textPt": "Eu amo ser ativo, então jogo futebol com meus amigos toda terça-feira à noite. Praticamos muito e acho que temos um time muito bom agora. Correr de um lado para o outro no grande campo verde é muito cansativo, mas marcar um belo gol faz com que todos nos sintamos incrivelmente felizes e orgulhosos. Depois que a longa partida termina, geralmente estamos com muita sede, então sentamos juntos e bebemos muita água gelada. Praticar esportes é uma excelente maneira de se divertir e é muito bom para a saúde física.",
            "questions": [
                  {
                        "question": "When do they play soccer?",
                        "options": [
                              "Every Tuesday",
                              "Every weekend",
                              "Every Monday",
                              "Once a month"
                        ],
                        "correctIndex": 0,
                        "explanation": "They play 'every Tuesday evening'."
                  },
                  {
                        "question": "What makes them very happy?",
                        "options": [
                              "Scoring a goal",
                              "Running on the field",
                              "Drinking water",
                              "Winning a trophy"
                        ],
                        "correctIndex": 0,
                        "explanation": "Scoring a beautiful goal 'makes all of us feel incredibly happy'."
                  },
                  {
                        "question": "How do they feel after the match?",
                        "options": [
                              "Very thirsty",
                              "Very angry",
                              "Very bored",
                              "Very cold"
                        ],
                        "correctIndex": 0,
                        "explanation": "They are 'usually very thirsty'."
                  },
                  {
                        "question": "What is the conclusion about sports?",
                        "options": [
                              "They are good for your health",
                              "They are too tiring",
                              "They are only for professionals",
                              "They are dangerous"
                        ],
                        "correctIndex": 0,
                        "explanation": "The text states it 'is very good for your physical health'."
                  }
            ]
      },
      "level2": {
            "textEn": "Participating in professional sports requires not only raw talent but also intense daily discipline and the guidance of a great coach. To successfully perform at the highest possible competitive level, elite athletes must go to the gym daily and meticulously maintain a very strict, nutrient-rich diet. During a professional tennis match, for example, a certified referee is present to ensure that all the complex rules are followed fairly by both players. Even if an athlete ultimately loses a difficult match, the challenging experience builds deep emotional resilience and strong character. Ultimately, true champions are the ones who know how to analyze their mistakes and learn from failure.",
            "textPt": "Participar de esportes profissionais exige não apenas talento natural, mas também intensa disciplina diária e a orientação de um ótimo treinador. Para atuar com sucesso no mais alto nível competitivo possível, os atletas de elite devem ir à academia diariamente e manter meticulosamente uma dieta muito rigorosa e rica em nutrientes. Durante uma partida de tênis profissional, por exemplo, um árbitro certificado está presente para garantir que todas as regras complexas sejam seguidas de forma justa por ambos os jogadores. Mesmo que um atleta acabe perdendo uma partida difícil, a experiência desafiadora constrói profunda resiliência emocional e forte caráter. No final das contas, os verdadeiros campeões são aqueles que sabem analisar seus erros e aprender com o fracasso.",
            "questions": [
                  {
                        "question": "What do professional sports require?",
                        "options": [
                              "Intense discipline and a great coach",
                              "Only natural talent",
                              "A lot of free time",
                              "Expensive equipment"
                        ],
                        "correctIndex": 0,
                        "explanation": "They require 'intense daily discipline and the guidance of a great coach'."
                  },
                  {
                        "question": "What must athletes do to perform at the highest level?",
                        "options": [
                              "Go to the gym daily and maintain a strict diet",
                              "Rest constantly",
                              "Eat lots of sweets",
                              "Ignore the coach"
                        ],
                        "correctIndex": 0,
                        "explanation": "They must 'go to the gym daily and meticulously maintain a very strict, nutrient-rich diet'."
                  },
                  {
                        "question": "What is the role of the referee?",
                        "options": [
                              "To ensure rules are followed fairly",
                              "To coach the players",
                              "To sell tickets",
                              "To play in the match"
                        ],
                        "correctIndex": 0,
                        "explanation": "A referee ensures 'that all the complex rules are followed fairly'."
                  },
                  {
                        "question": "What do true champions know how to do?",
                        "options": [
                              "Learn from failure",
                              "Always win",
                              "Cheat the referee",
                              "Avoid the gym"
                        ],
                        "correctIndex": 0,
                        "explanation": "True champions are the ones who 'know how to analyze their mistakes and learn from failure'."
                  }
            ]
      }
},
    vocabulary: [
      { english: "Soccer / Football", portuguese: "Futebol",
          levels: { 
                        A1: { en: "Brazil loves soccer.", pt: "O Brasil ama futebol." }, 
                        A2: { en: "He played professional soccer for ten years.", pt: "Ele jogou futebol profissional por dez anos." }
                      }
    },
      { english: "Basketball", portuguese: "Basquete",
          levels: { 
                        A1: { en: "He plays basketball.", pt: "Ele joga basquete." }, 
                        A2: { en: "They practiced basketball every day after school.", pt: "Eles praticavam basquete todo dia depois da escola." }
                      }
    },
      { english: "Swim", portuguese: "Nadar / Natação",
          levels: { 
                        A1: { en: "I swim in the ocean.", pt: "Eu nado no oceano." }, 
                        A2: { en: "She swam in the ocean during her vacation.", pt: "Ela nadou no oceano durante suas férias." }
                      }
    },
      { english: "Run", portuguese: "Correr",
          levels: { 
                        A1: { en: "He runs 5km every morning.", pt: "Ele corre 5km toda manhã." }, 
                        A2: { en: "He ran a marathon in under four hours.", pt: "Ele correu uma maratona em menos de quatro horas." }
                      }
    },
      { english: "Team", portuguese: "Time / Equipe",
          levels: { 
                        A1: { en: "Our team is the best.", pt: "Nosso time é o melhor." }, 
                        A2: { en: "Our team won the championship last year.", pt: "Nosso time venceu o campeonato no ano passado." }
                      }
    },
      { english: "Match / Game", portuguese: "Partida / Jogo",
          levels: { 
                        A1: { en: "Do you watch the match?", pt: "Você assiste à partida?" }, 
                        A2: { en: "The intense match ended in a tie.", pt: "A partida intensa terminou em empate." }
                      }
    },
      { english: "Win", portuguese: "Vencer / Ganhar",
          levels: { 
                        A1: { en: "We want to win the cup.", pt: "Nós queremos vencer a copa." }, 
                        A2: { en: "They won the gold medal at the Olympics.", pt: "Eles venceram a medalha de ouro nas Olimpíadas." }
                      }
    },
      { english: "Lose", portuguese: "Perder",
          levels: { 
                        A1: { en: "Dont be sad if we lose.", pt: "Não fique triste se nós perdermos." }, 
                        A2: { en: "Unfortunately, he lost the important tennis match.", pt: "Infelizmente, ele perdeu a importante partida de tênis." }
                      }
    },
      { english: "Ball", portuguese: "Bola",
          levels: { 
                        A1: { en: "Pass the ball to me!", pt: "Passe a bola para mim!" }, 
                        A2: { en: "He threw the ball accurately across the field.", pt: "Ele jogou a bola com precisão pelo campo." }
                      }
    },
      { english: "Stadium", portuguese: "Estádio",
          levels: { 
                        A1: { en: "The stadium is full of fans.", pt: "O estádio está cheio de fãs." }, 
                        A2: { en: "Thousands of fans cheered in the crowded stadium.", pt: "Milhares de torcedores comemoraram no estádio lotado." }
                      }
    },
      { english: "Tennis", portuguese: "Tênis",
          levels: { 
                        A1: { en: "She plays tennis on weekends.", pt: "Ela joga tênis nos fins de semana." }, 
                        A2: { en: "She played tennis with her brother yesterday.", pt: "Ela jogou tênis com seu irmão ontem." }
                      }
    },
      { english: "Volleyball", portuguese: "Vôlei",
          levels: { 
                        A1: { en: "They play volleyball on the beach.", pt: "Eles jogam vôlei na praia." }, 
                        A2: { en: "We played volleyball on the beach until sunset.", pt: "Nós jogamos vôlei na praia até o pôr do sol." }
                      }
    },
      { english: "Cycling", portuguese: "Ciclismo",
          levels: { 
                        A1: { en: "Cycling is good for your health.", pt: "O ciclismo é bom para a sua saúde." }, 
                        A2: { en: "He participated in a cycling race across the mountains.", pt: "Ele participou de uma corrida de ciclismo pelas montanhas." }
                      }
    },
      { english: "Gym", portuguese: "Academia",
          levels: { 
                        A1: { en: "I go to the gym to get stronger.", pt: "Eu vou à academia para ficar mais forte." }, 
                        A2: { en: "She went to the gym to lift heavy weights.", pt: "Ela foi à academia para levantar pesos pesados." }
                      }
    },
      { english: "Coach", portuguese: "Treinador",
          levels: { 
                        A1: { en: "The coach yells at the players.", pt: "O treinador grita com os jogadores." }, 
                        A2: { en: "The coach pushed the athletes to their limits.", pt: "O treinador levou os atletas aos seus limites." },
              B1: { en: "The coach shouted instructions to the players on the field.", pt: "A treinadora gritou instruções para as jogadoras no campo." }
        }
    },
      { english: "Referee", portuguese: "Juiz / Árbitro",
          levels: { 
                        A1: { en: "The referee blew the whistle.", pt: "O árbitro soprou o apito." }, 
                        A2: { en: "The referee penalized the player for aggressive behavior.", pt: "O árbitro penalizou o jogador por comportamento agressivo." },
              B1: { en: "The referee blew the whistle to start the second half.", pt: "O árbitro apitou para começar o segundo tempo." }
        }
    },
      { english: "Score", portuguese: "Placar / Marcar ponto",
          levels: { 
                        A1: { en: "He scores a beautiful goal.", pt: "Ele marca um gol lindo." }, 
                        A2: { en: "They checked the score at the end of the game.", pt: "Eles verificaram o placar no final do jogo." },
              B1: { en: "The final score of the match was two to zero.", pt: "O placar final da partida foi dois a zero." }
        }
    },
      { english: "Work out", portuguese: "Malhar / Fazer exercício",
          levels: { 
                        B1: { en: "He goes to the gym to work out three times a week.", pt: "Ele vai à academia para malhar três vezes na semana." } 
                      }
    },
      { english: "Compete", portuguese: "Competir",
          levels: { 
                        B1: { en: "Over fifty athletes will compete in the final race.", pt: "Mais de cinquenta atletas vão competir na corrida final." } 
                      }
    },
      { english: "Match", portuguese: "Partida / Jogo",
          levels: { 
                        B1: { en: "We watched an exciting football match on television tonight.", pt: "Nós assistimos a uma partida de futebol emocionante na televisão hoje à noite." } 
                      }
    },
      { english: "Spectator", portuguese: "Espectador(a)",
          levels: { 
                        B1: { en: "The stadium was packed with thousands of enthusiastic spectators.", pt: "O estádio estava lotado com milhares de espectadores entusiasmados." } 
                      }
    },
      { english: "Cheer", portuguese: "Torcer / Animar",
          levels: { 
                        B1: { en: "The crowd started to cheer loudly when their team scored.", pt: "A multidão começou a torcer alto quando o time deles marcou." } 
                      }
    },
      { english: "Champion", portuguese: "Campeão",
          levels: { 
                        A1: { en: "He is the new champion.", pt: "Ele é o novo campeão." }, 
                        A2: { en: "Our team became the regional champion after a tough game.", pt: "Nosso time se tornou o campeão regional após um jogo difícil." }
                      }
    },
      { english: "Medal", portuguese: "Medalha",
          levels: { 
                        A1: { en: "She won a gold medal.", pt: "Ela ganhou uma medalha de ouro." }, 
                        A2: { en: "He proudly showed the silver medal he won at the competition.", pt: "Ele mostrou com orgulho a medalha de prata que ganhou na competição." }
                      }
    },
      { english: "Rule", portuguese: "Regra",
          levels: { 
                        A1: { en: "This is a simple rule.", pt: "Esta é uma regra simples." }, 
                        A2: { en: "The referee explained a new rule before the match started.", pt: "O árbitro explicou uma regra nova antes de a partida começar." }
                      }
    },
      { english: "Warm up", portuguese: "Aquecer-se",
          levels: { 
                        B1: { en: "It is essential to warm up properly before doing any intense physical activity.", pt: "É essencial se aquecer adequadamente antes de fazer qualquer atividade física intensa." } 
                      }
    },
      { english: "Cool down", portuguese: "Desaquecer / Esfriar o corpo",
          levels: { 
                        B1: { en: "Don't forget to cool down and stretch your legs after a long run.", pt: "Não se esqueça de desaquecer e alongar as pernas depois de uma longa corrida." } 
                      }
    },
      { english: "Knock out", portuguese: "Nocautear",
          levels: { 
                        B1: { en: "The boxer managed to knock out his opponent in the third round.", pt: "O boxeador conseguiu nocautear seu oponente no terceiro round." } 
                      }
    },
      { english: "Catch up", portuguese: "Alcançar (quem está na frente)",
          levels: { 
                        B1: { en: "He started the race late, but he ran fast to catch up with the leaders.", pt: "Ele começou a corrida tarde, mas correu rápido para alcançar os líderes." } 
                      }
    },
      { english: "Give up", portuguese: "Desistir",
          levels: { 
                        B1: { en: "Even though they were losing by three goals, the team refused to give up.", pt: "Mesmo perdendo por três gols, a equipe se recusou a desistir." } 
                      }
    },
      { english: "Join in", portuguese: "Participar",
          levels: { 
                        B1: { en: "We need one more player for the volleyball match, do you want to join in?", pt: "Nós precisamos de mais um jogador para a partida de vôlei, você quer participar?" } 
                      }
    },
      { english: "Drop out", portuguese: "Desistir (de uma competição)",
          levels: { 
                        B1: { en: "He injured his knee and was forced to drop out of the marathon.", pt: "Ele machucou o joelho e foi forçado a desistir da maratona." } 
                      }
    },
      { english: "Cheer on", portuguese: "Torcer por",
          levels: { 
                        B1: { en: "Thousands of fans gathered in the stadium to cheer on their national team.", pt: "Milhares de fãs se reuniram no estádio para torcer pela sua seleção nacional." } 
                      }
    },
      { english: "Tackle", portuguese: "Derrubar / Enfrentar",
          levels: { 
                        B1: { en: "The defender made a sliding tackle to stop the striker from scoring.", pt: "O zagueiro deu um carrinho para impedir o atacante de marcar." } 
                      }
    },
      { english: "Foul", portuguese: "Falta (no jogo)",
          levels: { 
                        B1: { en: "The referee blew the whistle and called a foul against the visiting team.", pt: "O árbitro apitou e marcou uma falta contra o time visitante." } 
                      }
    },
      { english: "Tie / Draw", portuguese: "Empate",
          levels: { 
                        B1: { en: "The exciting match ended in a 2-2 tie after an intense final ten minutes.", pt: "A emocionante partida terminou em um empate de 2 a 2 após dez minutos finais intensos." } 
                      }
    }
      ],
      flashcardsA2: [
          {
              "english": "He threw the ball accurately across the field.",
              "portuguese": "Ele jogou a bola com precisão pelo campo.",
              "example": "Palavra-chave: Ball"
          },
          {
              "english": "He played professional soccer for ten years.",
              "portuguese": "Ele jogou futebol profissional por dez anos.",
              "example": "Palavra-chave: Soccer / Football"
          },
          {
              "english": "We played volleyball on the beach until sunset.",
              "portuguese": "Nós jogamos vôlei na praia até o pôr do sol.",
              "example": "Palavra-chave: Volleyball"
          },
          {
              "english": "He proudly showed the silver medal he won at the competition.",
              "portuguese": "Ele mostrou com orgulho a medalha de prata que ganhou na competição.",
              "example": "Palavra-chave: Medal"
          },
          {
              "english": "Our team became the regional champion after a tough game.",
              "portuguese": "Nosso time se tornou o campeão regional após um jogo difícil.",
              "example": "Palavra-chave: Champion"
          },
          {
              "english": "He participated in a cycling race across the mountains.",
              "portuguese": "Ele participou de uma corrida de ciclismo pelas montanhas.",
              "example": "Palavra-chave: Cycling"
          },
          {
              "english": "He ran a marathon in under four hours.",
              "portuguese": "Ele correu uma maratona em menos de quatro horas.",
              "example": "Palavra-chave: Run"
          },
          {
              "english": "The referee penalized the player for aggressive behavior.",
              "portuguese": "O árbitro penalizou o jogador por comportamento agressivo.",
              "example": "Palavra-chave: Referee"
          },
          {
              "english": "They won the gold medal at the Olympics.",
              "portuguese": "Eles venceram a medalha de ouro nas Olimpíadas.",
              "example": "Palavra-chave: Win"
          },
          {
              "english": "The coach pushed the athletes to their limits.",
              "portuguese": "O treinador levou os atletas aos seus limites.",
              "example": "Palavra-chave: Coach"
          },
          {
              "english": "She swam in the ocean during her vacation.",
              "portuguese": "Ela nadou no oceano durante suas férias.",
              "example": "Palavra-chave: Swim"
          },
          {
              "english": "The intense match ended in a tie.",
              "portuguese": "A partida intensa terminou em empate.",
              "example": "Palavra-chave: Match / Game"
          },
          {
              "english": "Unfortunately, he lost the important tennis match.",
              "portuguese": "Infelizmente, ele perdeu a importante partida de tênis.",
              "example": "Palavra-chave: Lose"
          },
          {
              "english": "She played tennis with her brother yesterday.",
              "portuguese": "Ela jogou tênis com seu irmão ontem.",
              "example": "Palavra-chave: Tennis"
          },
          {
              "english": "They checked the score at the end of the game.",
              "portuguese": "Eles verificaram o placar no final do jogo.",
              "example": "Palavra-chave: Score"
          },
          {
              "english": "They practiced basketball every day after school.",
              "portuguese": "Eles praticavam basquete todo dia depois da escola.",
              "example": "Palavra-chave: Basketball"
          },
          {
              "english": "Our team won the championship last year.",
              "portuguese": "Nosso time venceu o campeonato no ano passado.",
              "example": "Palavra-chave: Team"
          },
          {
              "english": "Thousands of fans cheered in the crowded stadium.",
              "portuguese": "Milhares de torcedores comemoraram no estádio lotado.",
              "example": "Palavra-chave: Stadium"
          },
          {
              "english": "The referee explained a new rule before the match started.",
              "portuguese": "O árbitro explicou uma regra nova antes de a partida começar.",
              "example": "Palavra-chave: Rule"
          },
          {
              "english": "She went to the gym to lift heavy weights.",
              "portuguese": "Ela foi à academia para levantar pesos pesados.",
              "example": "Palavra-chave: Gym"
          }
      ],
      flashcardsB1: [
          {
              "english": "He injured his knee and was forced to drop out of the marathon.",
              "portuguese": "Ele machucou o joelho e foi forçado a desistir da maratona.",
              "example": "Palavra-chave: Drop out"
          },
          {
              "english": "The final score of the match was two to zero.",
              "portuguese": "O placar final da partida foi dois a zero.",
              "example": "Palavra-chave: Score"
          },
          {
              "english": "We watched an exciting football match on television tonight.",
              "portuguese": "Nós assistimos a uma partida de futebol emocionante na televisão hoje à noite.",
              "example": "Palavra-chave: Match"
          },
          {
              "english": "He goes to the gym to work out three times a week.",
              "portuguese": "Ele vai à academia para malhar três vezes na semana.",
              "example": "Palavra-chave: Work out"
          },
          {
              "english": "If you want to build muscle, you have to work out consistently.",
              "portuguese": "Se você quer construir músculos, você tem que malhar com consistência.",
              "example": "Palavra-chave: Work out"
          },
          {
              "english": "The exciting match ended in a 2-2 tie after an intense final ten minutes.",
              "portuguese": "A emocionante partida terminou em um empate de 2 a 2 após dez minutos finais intensos.",
              "example": "Palavra-chave: Tie / Draw"
          },
          {
              "english": "Thousands of fans gathered in the stadium to cheer on their national team.",
              "portuguese": "Milhares de fãs se reuniram no estádio para torcer pela sua seleção nacional.",
              "example": "Palavra-chave: Cheer on"
          },
          {
              "english": "Over fifty athletes will compete in the final race.",
              "portuguese": "Mais de cinquenta atletas vão competir na corrida final.",
              "example": "Palavra-chave: Compete"
          },
          {
              "english": "We need one more player for the volleyball match, do you want to join in?",
              "portuguese": "Nós precisamos de mais um jogador para a partida de vôlei, você quer participar?",
              "example": "Palavra-chave: Join in"
          },
          {
              "english": "The stadium was packed with thousands of enthusiastic spectators.",
              "portuguese": "O estádio estava lotado com milhares de espectadores entusiasmados.",
              "example": "Palavra-chave: Spectator"
          },
          {
              "english": "Even though they were losing by three goals, the team refused to give up.",
              "portuguese": "Mesmo perdendo por três gols, a equipe se recusou a desistir.",
              "example": "Palavra-chave: Give up"
          },
          {
              "english": "The defender made a sliding tackle to stop the striker from scoring.",
              "portuguese": "O zagueiro deu um carrinho para impedir o atacante de marcar.",
              "example": "Palavra-chave: Tackle"
          },
          {
              "english": "The referee blew the whistle to start the second half.",
              "portuguese": "O árbitro apitou para começar o segundo tempo.",
              "example": "Palavra-chave: Referee"
          },
          {
              "english": "He started the race late, but he ran fast to catch up with the leaders.",
              "portuguese": "Ele começou a corrida tarde, mas correu rápido para alcançar os líderes.",
              "example": "Palavra-chave: Catch up"
          },
          {
              "english": "The crowd started to cheer loudly when their team scored.",
              "portuguese": "A multidão começou a torcer alto quando o time deles marcou.",
              "example": "Palavra-chave: Cheer"
          },
          {
              "english": "Don't forget to cool down and stretch your legs after a long run.",
              "portuguese": "Não se esqueça de desaquecer e alongar as pernas depois de uma longa corrida.",
              "example": "Palavra-chave: Cool down"
          },
          {
              "english": "It is essential to warm up properly before doing any intense physical activity.",
              "portuguese": "É essencial se aquecer adequadamente antes de fazer qualquer atividade física intensa.",
              "example": "Palavra-chave: Warm up"
          },
          {
              "english": "The referee blew the whistle and called a foul against the visiting team.",
              "portuguese": "O árbitro apitou e marcou uma falta contra o time visitante.",
              "example": "Palavra-chave: Foul"
          },
          {
              "english": "The coach shouted instructions to the players on the field.",
              "portuguese": "A treinadora gritou instruções para as jogadoras no campo.",
              "example": "Palavra-chave: Coach"
          },
          {
              "english": "The boxer managed to knock out his opponent in the third round.",
              "portuguese": "O boxeador conseguiu nocautear seu oponente no terceiro round.",
              "example": "Palavra-chave: Knock out"
          }
      ],
      quizA2: [
          {
              "question": "Traduza a frase: \"O árbitro penalizou o jogador por comportamento agressivo.\"",
              "options": [
                  "He played professional soccer for ten years.",
                  "The referee penalized the player for aggressive behavior.",
                  "He participated in a cycling race across the mountains.",
                  "The referee explained a new rule before the match started."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"The referee penalized the player for aggressive behavior.\", que significa \"O árbitro penalizou o jogador por comportamento agressivo.\"."
          },
          {
              "question": "O que significa a frase: \"They won the gold medal at the Olympics.\"?",
              "options": [
                  "Ele jogou futebol profissional por dez anos.",
                  "Milhares de torcedores comemoraram no estádio lotado.",
                  "Ela foi à academia para levantar pesos pesados.",
                  "Eles venceram a medalha de ouro nas Olimpíadas."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"They won the gold medal at the Olympics.\", que significa \"Eles venceram a medalha de ouro nas Olimpíadas.\"."
          },
          {
              "question": "Complete a frase: \"They checked the ______ at the end of the game.\"",
              "options": [
                  "Gym",
                  "Medal",
                  "Ball",
                  "Score"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"They checked the score at the end of the game.\", que significa \"Eles verificaram o placar no final do jogo.\"."
          },
          {
              "question": "Complete a frase: \"She went to the ______ to lift heavy weights.\"",
              "options": [
                  "Win",
                  "Catch up",
                  "Cycling",
                  "Gym"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"She went to the gym to lift heavy weights.\", que significa \"Ela foi à academia para levantar pesos pesados.\"."
          },
          {
              "question": "Traduza a frase: \"Infelizmente, ele perdeu a importante partida de tênis.\"",
              "options": [
                  "He ran a marathon in under four hours.",
                  "The coach pushed the athletes to their limits.",
                  "Unfortunately, he lost the important tennis match.",
                  "Our team won the championship last year."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"Unfortunately, he lost the important tennis match.\", que significa \"Infelizmente, ele perdeu a importante partida de tênis.\"."
          },
          {
              "question": "Complete a frase: \"We played ______ on the beach until sunset.\"",
              "options": [
                  "Volleyball",
                  "Team",
                  "Soccer / Football",
                  "Champion"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"We played volleyball on the beach until sunset.\", que significa \"Nós jogamos vôlei na praia até o pôr do sol.\"."
          },
          {
              "question": "Complete a frase: \"The ______ pushed the athletes to their limits.\"",
              "options": [
                  "Spectator",
                  "Run",
                  "Coach",
                  "Team"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"The coach pushed the athletes to their limits.\", que significa \"O treinador levou os atletas aos seus limites.\"."
          },
          {
              "question": "Complete a frase: \"She played ______ with her brother yesterday.\"",
              "options": [
                  "Tennis",
                  "Referee",
                  "Match",
                  "Soccer / Football"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"She played tennis with her brother yesterday.\", que significa \"Ela jogou tênis com seu irmão ontem.\"."
          },
          {
              "question": "Complete a frase: \"The referee explained a new ______ before the match started.\"",
              "options": [
                  "Swim",
                  "Rule",
                  "Coach",
                  "Soccer / Football"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"The referee explained a new rule before the match started.\", que significa \"O árbitro explicou uma regra nova antes de a partida começar.\"."
          },
          {
              "question": "O que significa a frase: \"She swam in the ocean during her vacation.\"?",
              "options": [
                  "Infelizmente, ele perdeu a importante partida de tênis.",
                  "O treinador levou os atletas aos seus limites.",
                  "Ela nadou no oceano durante suas férias.",
                  "Ele mostrou com orgulho a medalha de prata que ganhou na competição."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"She swam in the ocean during her vacation.\", que significa \"Ela nadou no oceano durante suas férias.\"."
          }
      ],
      quizB1: [
          {
              "question": "Complete a frase: \"The defender made a sliding ______ to stop the striker from scoring.\"",
              "options": [
                  "Coach",
                  "Rule",
                  "Match",
                  "Tackle"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"The defender made a sliding tackle to stop the striker from scoring.\", que significa \"O zagueiro deu um carrinho para impedir o atacante de marcar.\"."
          },
          {
              "question": "Complete a frase: \"It is essential to ______ properly before doing any intense physical activity.\"",
              "options": [
                  "Gym",
                  "Catch up",
                  "Coach",
                  "Warm up"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"It is essential to warm up properly before doing any intense physical activity.\", que significa \"É essencial se aquecer adequadamente antes de fazer qualquer atividade física intensa.\"."
          },
          {
              "question": "Traduza a frase: \"Ele começou a corrida tarde, mas correu rápido para alcançar os líderes.\"",
              "options": [
                  "Over fifty athletes will compete in the final race.",
                  "Thousands of fans gathered in the stadium to cheer on their national team.",
                  "He started the race late, but he ran fast to catch up with the leaders.",
                  "He goes to the gym to work out three times a week."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"He started the race late, but he ran fast to catch up with the leaders.\", que significa \"Ele começou a corrida tarde, mas correu rápido para alcançar os líderes.\"."
          },
          {
              "question": "Complete a frase: \"The final ______ of the match was two to zero.\"",
              "options": [
                  "Cycling",
                  "Spectator",
                  "Score",
                  "Team"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"The final score of the match was two to zero.\", que significa \"O placar final da partida foi dois a zero.\"."
          },
          {
              "question": "Traduza a frase: \"Ele vai à academia para malhar três vezes na semana.\"",
              "options": [
                  "The crowd started to cheer loudly when their team scored.",
                  "The final score of the match was two to zero.",
                  "The defender made a sliding tackle to stop the striker from scoring.",
                  "He goes to the gym to work out three times a week."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"He goes to the gym to work out three times a week.\", que significa \"Ele vai à academia para malhar três vezes na semana.\"."
          },
          {
              "question": "Traduza a frase: \"A multidão começou a torcer alto quando o time deles marcou.\"",
              "options": [
                  "He injured his knee and was forced to drop out of the marathon.",
                  "The final score of the match was two to zero.",
                  "The crowd started to cheer loudly when their team scored.",
                  "The coach shouted instructions to the players on the field."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"The crowd started to cheer loudly when their team scored.\", que significa \"A multidão começou a torcer alto quando o time deles marcou.\"."
          },
          {
              "question": "Complete a frase: \"The ______ shouted instructions to the players on the field.\"",
              "options": [
                  "Lose",
                  "Run",
                  "Coach",
                  "Tennis"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"The coach shouted instructions to the players on the field.\", que significa \"A treinadora gritou instruções para as jogadoras no campo.\"."
          },
          {
              "question": "Complete a frase: \"Even though they were losing by three goals, the team refused to ______.\"",
              "options": [
                  "Stadium",
                  "Give up",
                  "Coach",
                  "Join in"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"Even though they were losing by three goals, the team refused to give up.\", que significa \"Mesmo perdendo por três gols, a equipe se recusou a desistir.\"."
          },
          {
              "question": "Traduza a frase: \"Se você quer construir músculos, você tem que malhar com consistência.\"",
              "options": [
                  "The coach shouted instructions to the players on the field.",
                  "It is essential to warm up properly before doing any intense physical activity.",
                  "The referee blew the whistle and called a foul against the visiting team.",
                  "If you want to build muscle, you have to work out consistently."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"If you want to build muscle, you have to work out consistently.\", que significa \"Se você quer construir músculos, você tem que malhar com consistência.\"."
          },
          {
              "question": "Complete a frase: \"Over fifty athletes will ______ in the final race.\"",
              "options": [
                  "Compete",
                  "Knock out",
                  "Referee",
                  "Ball"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"Over fifty athletes will compete in the final race.\", que significa \"Mais de cinquenta atletas vão competir na corrida final.\"."
          }
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
      { speaker: "Ben", english: "You should! Swimming is very relaxing after a long day.", portuguese: "Você deveria! Nadar é muito relaxante depois de um longo dia.", isPrimary: false }],
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
      { english: "She is the team coach.", portuguese: "Ela é a treinadora do time." }],
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
      { question: 'What sport uses a large orange ball and a hoop?', options: ["Soccer", "Tennis", "Basketball", "Golf"], correctIndex: 2, explanation: 'Basketball uses an orange ball thrown into a hoop.' }],
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
    speakingPractice: { part1: [ { question: "What is your favorite soccer or football team?", translation: "Qual é o seu time de futebol favorito?" }, { question: "Are you tall enough to play basketball professionally?", translation: "Você é alto o suficiente para jogar basquete profissionalmente?" }, { question: "How old were you when you learned to swim?", translation: "Quantos anos você tinha quando aprendeu a nadar?" }, { question: "Do you run marathons or just jog for fun?", translation: "Você corre maratonas ou apenas corre por diversão?" }, { question: "Are you currently part of any sports team?", translation: "Você faz parte de algum time esportivo atualmente?" }, { question: "What was the most exciting match or game you ever watched?", translation: "Qual foi a partida ou jogo mais emocionante que você já assistiu?" }, { question: "Does it bother you when you don't win?", translation: "Te incomoda quando você não vence?" }, { question: "How do you handle it when you lose a competition?", translation: "Como você lida quando perde uma competição?" }, { question: "Are you good at throwing a ball accurately?", translation: "Você é bom em arremessar uma bola com precisão?" }, { question: "Have you ever been inside a massive stadium?", translation: "Você já esteve dentro de um estádio gigantesco?" } ], part2: [ { question: "Do you prefer watching tennis or playing it?", translation: "Você prefere assistir tênis ou jogá-lo?" }, { question: "Have you ever played volleyball on the beach?", translation: "Você já jogou vôlei na praia?" }, { question: "Is cycling a popular sport in your city?", translation: "O ciclismo é um esporte popular na sua cidade?" }, { question: "How many days a week do you go to the gym?", translation: "Quantos dias por semana você vai à academia?" }, { question: "Did a coach ever change your life for the better?", translation: "Algum treinador já mudou sua vida para melhor?" }, { question: "Do you think being a referee is a difficult job?", translation: "Você acha que ser árbitro é um trabalho difícil?" }, { question: "Do you always check the score during a game?", translation: "Você sempre verifica o placar durante um jogo?" }, { question: "What time do you usually work out every day?", translation: "A que horas você costuma malhar todos os dias?" }, { question: "Do you like to compete against your friends?", translation: "Você gosta de competir contra seus amigos?" }, { question: "Are you planning to watch the next big sports match?", translation: "Você planeja assistir à próxima grande partida de esportes?" } ] },
      buildSentence: { level1: [ { english: "The local soccer team won the championship game last week.", portuguese: "O time de futebol local venceu o jogo do campeonato na semana passada." }, { english: "We play basketball at the large outdoor stadium often.", portuguese: "Nós jogamos basquete no grande estádio ao ar livre frequentemente." }, { english: "She runs five miles every morning and stays incredibly fit.", portuguese: "Ela corre cinco milhas toda manhã e fica incrivelmente em forma." }, { english: "He bought an expensive new ball and practiced his serves.", portuguese: "Ele comprou uma bola nova cara e praticou os saques dele." }, { english: "They lost the match even though they practiced so hard.", portuguese: "Eles perderam a partida mesmo que tenham treinado tão duro." }, { english: "They are swimming in the ocean during the hot summer.", portuguese: "Eles estão nadando no oceano durante o verão quente." } ], level2: [ { english: "The enthusiastic spectators cheered on the marathon runners.", portuguese: "Os espectadores entusiastas torceram pelos corredores da maratona." }, { english: "He dropped out of the race because of a foul.", portuguese: "Ele desistiu da corrida por causa de uma falta." }, { english: "He always warms up properly before he tackles anyone.", portuguese: "Ele sempre se aquece adequadamente antes de derrubar/dar uma rasteira em alguém." }, { english: "The incredibly tense final match ended in a surprising draw.", portuguese: "A partida final incrivelmente tensa terminou em um empate surpreendente." }, { english: "She refused defeat and eventually caught up with the leader.", portuguese: "Ela recusou a derrota e eventualmente alcançou o líder." }, { english: "The champion knocked out his opponent and raised his gold medal.", portuguese: "O campeão nocauteou o oponente dele e levantou a medalha de ouro dele." } ] },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Soccer / Football means Futebol.", statementPt: "Soccer / Football significa Futebol.", isTrue: true, explanation: "Yes, Soccer / Football means Futebol." }, { statement: "Basketball means a type of car.", statementPt: "Basketball significa um tipo de carro.", isTrue: false, explanation: "No, Basketball means Basquete." }, { statement: "Swim means Nadar / Natação.", statementPt: "Swim significa Nadar / Natação.", isTrue: true, explanation: "Yes, Swim means Nadar / Natação." }, { statement: "Run means a type of car.", statementPt: "Run significa um tipo de carro.", isTrue: false, explanation: "No, Run means Correr." }, { statement: "Team means Time / Equipe.", statementPt: "Team significa Time / Equipe.", isTrue: true, explanation: "Yes, Team means Time / Equipe." }, { statement: "Match / Game means a type of car.", statementPt: "Match / Game significa um tipo de carro.", isTrue: false, explanation: "No, Match / Game means Partida / Jogo." }, { statement: "Win means Vencer / Ganhar.", statementPt: "Win significa Vencer / Ganhar.", isTrue: true, explanation: "Yes, Win means Vencer / Ganhar." }, { statement: "Lose means a type of car.", statementPt: "Lose significa um tipo de carro.", isTrue: false, explanation: "No, Lose means Perder." }, { statement: "Ball means Bola.", statementPt: "Ball significa Bola.", isTrue: true, explanation: "Yes, Ball means Bola." }, { statement: "Stadium means a type of car.", statementPt: "Stadium significa um tipo de carro.", isTrue: false, explanation: "No, Stadium means Estádio." } ],
                    part2: [ { statement: "Tennis means Tênis.", statementPt: "Tennis significa Tênis.", isTrue: true, explanation: "Yes, Tennis means Tênis." }, { statement: "Volleyball means a type of car.", statementPt: "Volleyball significa um tipo de carro.", isTrue: false, explanation: "No, Volleyball means Vôlei." }, { statement: "Cycling means Ciclismo.", statementPt: "Cycling significa Ciclismo.", isTrue: true, explanation: "Yes, Cycling means Ciclismo." }, { statement: "Gym means a type of car.", statementPt: "Gym significa um tipo de carro.", isTrue: false, explanation: "No, Gym means Academia." }, { statement: "Coach means Treinador.", statementPt: "Coach significa Treinador.", isTrue: true, explanation: "Yes, Coach means Treinador." }, { statement: "Referee means a type of car.", statementPt: "Referee significa um tipo de carro.", isTrue: false, explanation: "No, Referee means Juiz / Árbitro." }, { statement: "Score means Placar / Marcar ponto.", statementPt: "Score significa Placar / Marcar ponto.", isTrue: true, explanation: "Yes, Score means Placar / Marcar ponto." }, { statement: "Tournament means a type of car.", statementPt: "Tournament significa um tipo de carro.", isTrue: false, explanation: "No, Tournament means Torneio." }, { statement: "Medal means Medalha.", statementPt: "Medal significa Medalha.", isTrue: true, explanation: "Yes, Medal means Medalha." }, { statement: "Player means a type of car.", statementPt: "Player significa um tipo de carro.", isTrue: false, explanation: "No, Player means Jogador(a)." } ]
                  },
      speakingPracticeLevel2: { part1: [ { question: "Do you prefer being a player or a spectator?", translation: "Você prefere ser um jogador ou um espectador?" }, { question: "Do you cheer loudly when your team scores a goal?", translation: "Você torce bem alto quando seu time marca um gol?" }, { question: "Do you think your team will become the next champion?", translation: "Você acha que o seu time se tornará o próximo campeão?" }, { question: "Have you ever won a gold medal in a competition?", translation: "Você já ganhou uma medalha de ouro em uma competição?" }, { question: "Is there any sport rule you completely disagree with?", translation: "Há alguma regra esportiva com a qual você não concorde de jeito nenhum?" }, { question: "Do you always warm up before a heavy workout?", translation: "Você sempre se aquece antes de um treino pesado?" }, { question: "Is it important to cool down after running a marathon?", translation: "É importante esfriar/desaquecer depois de correr uma maratona?" }, { question: "Have you ever seen a boxer knock out his opponent?", translation: "Você já viu um boxeador nocautear o oponente dele?" } ], part2: [ { question: "Is it hard for the trailing runner to catch up?", translation: "É difícil para o corredor de trás alcançar/recuperar o atraso?" }, { question: "Did you ever give up during a difficult match?", translation: "Você já desistiu durante uma partida difícil?" }, { question: "Will you join in the beach volleyball game tomorrow?", translation: "Você vai participar do jogo de vôlei de praia amanhã?" }, { question: "Did you drop out of the tournament because of an injury?", translation: "Você saiu (desistiu) do torneio devido a uma lesão?" }, { question: "Did the crowd cheer on the home team?", translation: "A multidão torceu/incentivou o time da casa?" }, { question: "Is it dangerous to tackle a player from behind?", translation: "É perigoso dar uma rasteira/derrubar um jogador por trás?" }, { question: "Did the referee ignore a clear foul?", translation: "O árbitro ignorou uma falta clara?" }, { question: "Did the exciting game end in a tie / draw?", translation: "O jogo emocionante terminou em empate?" } ] },
      imageDescription: {
                  imagePath: "/images/scenarios/scenario_esportes_1789410571759.jpg",
                  keywords: [
                    { english: "A mixed soccer game on a green field", portuguese: "Um jogo de futebol misto em um campo verde" },
                    { english: "A man and a woman competing for the ball", portuguese: "Um homem e uma mulher competindo pela bola" },
                    { english: "Players wearing green and blue jerseys", portuguese: "Jogadores vestindo camisas verdes e azuis" },
                    { english: "Mud flying from their cleats", portuguese: "Lama voando de suas chuteiras" }
                  ]
                },

      wouldYouRather: [
        { optionA: { english: "Play soccer in the rain", portuguese: "Jogar futebol na chuva" }, optionB: { english: "Play basketball indoors", portuguese: "Jogar basquete em local fechado" } },
        { optionA: { english: "Be a professional athlete", portuguese: "Ser um atleta profissional" }, optionB: { english: "Be a famous coach", portuguese: "Ser um treinador famoso" } },
        { optionA: { english: "Watch sports on TV", portuguese: "Assistir a esportes na TV" }, optionB: { english: "Go to the stadium", portuguese: "Ir ao estádio" } },
        { optionA: { english: "Win the race by one second", portuguese: "Vencer a corrida por um segundo" }, optionB: { english: "Help a teammate win", portuguese: "Ajudar um colega de equipe a vencer" } },
        { optionA: { english: "Play a team sport", portuguese: "Praticar um esporte de equipe" }, optionB: { english: "Play an individual sport", portuguese: "Praticar um esporte individual" } },
        { optionA: { english: "Win a gold medal at the Olympics", portuguese: "Ganhar uma medalha de ouro nas Olimpíadas" }, optionB: { english: "Win the World Cup", portuguese: "Ganhar a Copa do Mundo" } },
        { optionA: { english: "Score the winning goal", portuguese: "Marcar o gol da vitória" }, optionB: { english: "Make a perfect save as goalkeeper", portuguese: "Fazer uma defesa perfeita como goleiro" } }
      ]
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
    reading: {
      "level1": {
            "textEn": "Every Friday afternoon, I have a routine where I go to the large supermarket near my house. As soon as I arrive, I take a metal shopping cart and slowly walk down the bright aisles to find everything I need. I usually buy fresh bread, cold milk, and some sweet fruit like apples and bananas for the week. When my cart is finally full, I go straight to the cashier at the front of the store to pay for my items. Before leaving the store, I always check the paper receipt carefully to make sure the final price is absolutely correct.",
            "textPt": "Toda sexta-feira à tarde, tenho a rotina de ir ao grande supermercado perto da minha casa. Assim que chego, pego um carrinho de compras de metal e ando lentamente pelos corredores iluminados para encontrar tudo o que preciso. Costumo comprar pão fresco, leite frio e algumas frutas doces como maçãs e bananas para a semana. Quando meu carrinho finalmente está cheio, vou direto ao caixa na frente da loja para pagar meus itens. Antes de sair da loja, sempre verifico o recibo de papel com cuidado para ter certeza de que o preço final está absolutamente correto.",
            "questions": [
                  {
                        "question": "When does the author go to the supermarket?",
                        "options": [
                              "Every Friday",
                              "Every Sunday",
                              "Every morning",
                              "Once a month"
                        ],
                        "correctIndex": 0,
                        "explanation": "They go 'Every Friday afternoon'."
                  },
                  {
                        "question": "What items does the author mention buying?",
                        "options": [
                              "Bread, milk, and fruit",
                              "Meat and vegetables",
                              "Clothes and shoes",
                              "Candy and soda"
                        ],
                        "correctIndex": 0,
                        "explanation": "They buy 'fresh bread, cold milk, and some sweet fruit'."
                  },
                  {
                        "question": "Who does the author go to when the cart is full?",
                        "options": [
                              "The cashier",
                              "The manager",
                              "A security guard",
                              "A friend"
                        ],
                        "correctIndex": 0,
                        "explanation": "They go 'straight to the cashier at the front of the store to pay'."
                  },
                  {
                        "question": "Why do they check the receipt?",
                        "options": [
                              "To make sure the price is correct",
                              "To see if they won a prize",
                              "To find a discount code",
                              "To keep it for taxes"
                        ],
                        "correctIndex": 0,
                        "explanation": "They check the receipt 'to make sure the final price is absolutely correct'."
                  }
            ]
      },
      "level2": {
            "textEn": "Navigating through a massive modern grocery store can be extremely overwhelming if you don't take the time to write down a detailed list beforehand. Last weekend, I decided it was time to comprehensively stock up on healthy vegetables and various dairy products for my new diet. I confidently walked into the busy bakery section, only to discover that they had completely sold out of my absolute favorite whole-wheat bread. Because it was a Saturday, I unfortunately ended up waiting in a very long, slow-moving queue at the checkout counter. However, the wait was worth it because the friendly cashier found a great, unexpected discount bargain for some of my more expensive items. Ultimately, being meticulously organized before shopping saves you a significant amount of both time and money.",
            "textPt": "Navegar por um enorme supermercado moderno pode ser extremamente avassalador se você não reservar um tempo para escrever uma lista detalhada com antecedência. No fim de semana passado, decidi que era hora de fazer um estoque abrangente de vegetais saudáveis e vários laticínios para minha nova dieta. Entrei com confiança na movimentada seção da padaria, apenas para descobrir que o meu pão integral favorito havia esgotado completamente. Como era sábado, infelizmente acabei esperando em uma fila muito longa e lenta no caixa. No entanto, a espera valeu a pena porque o caixa simpático encontrou uma ótima pechincha de desconto inesperada para alguns dos meus itens mais caros. Em última análise, ser meticulosamente organizado antes de fazer compras economiza uma quantidade significativa de tempo e dinheiro.",
            "questions": [
                  {
                        "question": "What can make grocery shopping overwhelming?",
                        "options": [
                              "Not having a list",
                              "Buying too much bread",
                              "Going on a weekend",
                              "Using a shopping cart"
                        ],
                        "correctIndex": 0,
                        "explanation": "It can be overwhelming 'if you don't take the time to write down a detailed list'."
                  },
                  {
                        "question": "What did the author want to stock up on?",
                        "options": [
                              "Vegetables and dairy products",
                              "Meat and fish",
                              "Fruit and juice",
                              "Sweets and bread"
                        ],
                        "correctIndex": 0,
                        "explanation": "They wanted to stock up on 'healthy vegetables and various dairy products'."
                  },
                  {
                        "question": "What happened in the bakery section?",
                        "options": [
                              "They had sold out of the author's favorite bread",
                              "They found a great bargain",
                              "The line was too long",
                              "They bought a lot of cakes"
                        ],
                        "correctIndex": 0,
                        "explanation": "They discovered that they 'had completely sold out of my absolute favorite whole-wheat bread'."
                  },
                  {
                        "question": "What is the benefit of being organized?",
                        "options": [
                              "It saves time and money",
                              "It helps you find the bakery",
                              "It makes the queue shorter",
                              "It gets you free groceries"
                        ],
                        "correctIndex": 0,
                        "explanation": "Being meticulously organized 'saves you a significant amount of both time and money'."
                  }
            ]
      }
},
    vocabulary: [
      { english: "Shopping cart", portuguese: "Carrinho de compras",
          levels: { 
                        A1: { en: "Get a shopping cart, please.", pt: "Pegue um carrinho, por favor." }, 
                        A2: { en: "He pushed the heavy shopping cart down the aisle.", pt: "Ele empurrou o carrinho de compras pesado pelo corredor." }
                      }
    },
      { english: "Cashier", portuguese: "Caixa (pessoa)",
          levels: { 
                        A1: { en: "The cashier is very friendly.", pt: "O(a) caixa é muito amigável." }, 
                        A2: { en: "The friendly cashier scanned all the items quickly.", pt: "O caixa amigável escaneou todos os itens rapidamente." },
              B1: { en: "The friendly cashier scanned all my items very quickly.", pt: "A caixa amigável escaneou todos os meus itens muito rapidamente." }
        }
    },
      { english: "Grocery", portuguese: "Compras de mercado / Mantimentos",
          levels: { 
                        B1: { en: "I need to go to the store to get some groceries.", pt: "Eu preciso ir à loja para fazer algumas compras de mercado." } 
                      }
    },
      { english: "Aisle", portuguese: "Corredor (de supermercado)",
          levels: { 
                        B1: { en: "You will find the cereal in the second aisle on the right.", pt: "Você encontrará o cereal no segundo corredor à direita." } 
                      }
    },
      { english: "Receipt", portuguese: "Recibo / Nota fiscal",
          levels: { 
                        B1: { en: "Make sure you keep the receipt in case you need a refund.", pt: "Certifique-se de guardar o recibo caso você precise de um reembolso." },
              A1: { en: "Here is your receipt.", pt: "Aqui está o seu recibo." },
              A2: { en: "The cashier gave me the receipt and a friendly smile.", pt: "A caixa me deu o recibo e um sorriso amigável." }
        }
    },
      { english: "Discount", portuguese: "Desconto",
          levels: { 
                        B1: { en: "They offered a twenty percent discount on all dairy products.", pt: "Eles ofereceram vinte por cento de desconto em todos os laticínios." } 
                      }
    },
      { english: "Trolley", portuguese: "Carrinho de compras (UK)",
          levels: { 
                        B1: { en: "He put the heavy bags into the shopping trolley.", pt: "Ele colocou as sacolas pesadas no carrinho de compras." } 
                      }
    },
      { english: "Affordable", portuguese: "Acessível (preço) / Barato",
          levels: { 
                        B1: { en: "This supermarket has very affordable prices for fresh food.", pt: "Este supermercado tem preços muito acessíveis para comida fresca." } 
                      }
    },
      { english: "Queue", portuguese: "Fila (UK)",
          levels: { 
                        B1: { en: "We had to wait in a long queue to pay for our food.", pt: "Nós tivemos que esperar em uma longa fila para pagar nossa comida." } 
                      }
    },
      { english: "Supermarket", portuguese: "Supermercado",
          levels: { 
                        A1: { en: "I go to the supermarket.", pt: "Eu vou ao supermercado." }, 
                        A2: { en: "I went to the new supermarket near my house to buy milk.", pt: "Fui ao supermercado novo perto de casa para comprar leite." }
                      }
    },
      { english: "Bag", portuguese: "Sacola",
          levels: { 
                        A1: { en: "I need a plastic bag.", pt: "Eu preciso de uma sacola de plástico." }, 
                        A2: { en: "I always bring my reusable bag when I go shopping.", pt: "Eu sempre trago minha sacola reutilizável quando vou fazer compras." }
                      }
    },
      { english: "Shelf", portuguese: "Prateleira",
          levels: { 
                        A1: { en: "The bread is on the shelf.", pt: "O pão está na prateleira." }, 
                        A2: { en: "I found the imported cookies on the top shelf.", pt: "Encontrei os biscoitos importados na prateleira de cima." }
                      }
    },
      { english: "Cash", portuguese: "Dinheiro (em espécie)",
          levels: { 
                        A1: { en: "I pay with cash.", pt: "Eu pago em dinheiro." }, 
                        A2: { en: "I didn't have enough cash, so I used my credit card.", pt: "Eu não tinha dinheiro em espécie suficiente, então usei meu cartão de crédito." }
                      }
    },
      { english: "Credit card", portuguese: "Cartão de crédito",
          levels: { 
                        A1: { en: "Do you accept credit card?", pt: "Você aceita cartão de crédito?" }, 
                        A2: { en: "He inserted his credit card into the machine to pay.", pt: "Ele inseriu seu cartão de crédito na máquina para pagar." }
                      }
    },
      { english: "Price", portuguese: "Preço",
          levels: { 
                        A1: { en: "The price is very good.", pt: "O preço é muito bom." }, 
                        A2: { en: "I compared the price of two different brands of coffee.", pt: "Eu comparei o preço de duas marcas diferentes de café." }
                      }
    },
      { english: "Money", portuguese: "Dinheiro",
          levels: { 
                        A1: { en: "I do not have money today.", pt: "Eu não tenho dinheiro hoje." }, 
                        A2: { en: "She saved a lot of money to buy a new computer.", pt: "Ela economizou muito dinheiro para comprar um computador novo." }
                      }
    },
      { english: "Customer", portuguese: "Cliente",
          levels: { 
                        A1: { en: "The customer is always right.", pt: "O cliente tem sempre razão." }, 
                        A2: { en: "The store was full of happy customers during the holiday sale.", pt: "A loja estava cheia de clientes felizes durante a liquidação de feriado." }
                      }
    },
      { english: "Queue / Line", portuguese: "Fila",
          levels: { 
                        A1: { en: "The line is very long.", pt: "A fila está muito longa." }, 
                        A2: { en: "We waited in a long queue for almost twenty minutes.", pt: "Nós esperamos em uma longa fila por quase vinte minutos." }
                      }
    },
      { english: "Product", portuguese: "Produto",
          levels: { 
                        A1: { en: "This is a new product.", pt: "Este é um produto novo." }, 
                        A2: { en: "The supermarket introduced a new product in the dairy section.", pt: "O supermercado lançou um produto novo na seção de laticínios." }
                      }
    },
      { english: "Buy", portuguese: "Comprar",
          levels: { 
                        A1: { en: "I want to buy some apples.", pt: "Eu quero comprar algumas maçãs." }, 
                        A2: { en: "She bought a lot of snacks for the birthday party.", pt: "Ela comprou muitos salgadinhos para a festa de aniversário." }
                      }
    },
      { english: "Pay", portuguese: "Pagar",
          levels: { 
                        A1: { en: "I need to pay for this.", pt: "Eu preciso pagar por isso." }, 
                        A2: { en: "He paid for the groceries and carried the bags to his car.", pt: "Ele pagou pelas compras e levou as sacolas para o carro." }
                      }
    },
      { english: "Sale", portuguese: "Promoção / Liquidação",
          levels: { 
                        A1: { en: "This TV is on sale.", pt: "Esta TV está em promoção." }, 
                        A2: { en: "I bought these shoes because they were on a great sale.", pt: "Eu comprei estes sapatos porque eles estavam em uma ótima promoção." }
                      }
    },
      { english: "Fruit", portuguese: "Fruta",
          levels: { 
                        A1: { en: "I eat fresh fruit every day.", pt: "Eu como fruta fresca todos os dias." }, 
                        A2: { en: "They bought bananas, oranges, and some other tropical fruit.", pt: "Eles compraram bananas, laranjas e algumas outras frutas tropicais." }
                      }
    },
      { english: "Vegetables", portuguese: "Vegetais / Verduras",
          levels: { 
                        A1: { en: "Vegetables are good for you.", pt: "Vegetais são bons para você." }, 
                        A2: { en: "My mother prepared a healthy salad with fresh green vegetables.", pt: "Minha mãe preparou uma salada saudável com verduras frescas." }
                      }
    },
      { english: "Meat", portuguese: "Carne",
          levels: { 
                        A1: { en: "I do not eat meat.", pt: "Eu não como carne." }, 
                        A2: { en: "We bought some fresh meat to grill over the weekend.", pt: "Nós compramos carne fresca para grelhar no final de semana." }
                      }
    },
      { english: "Bakery", portuguese: "Padaria (seção)",
          levels: { 
                        A1: { en: "The bakery smells amazing.", pt: "A padaria cheira incrivelmente bem." }, 
                        A2: { en: "I stopped at the bakery section to get some warm bread.", pt: "Parei na seção da padaria para pegar um pão quentinho." }
                      }
    },
      { english: "Run out of", portuguese: "Ficar sem / Acabar",
          levels: { 
                        B1: { en: "We completely ran out of sugar, so I need to go to the store.", pt: "Nós ficamos completamente sem açúcar, então preciso ir à loja." } 
                      }
    },
      { english: "Stock up", portuguese: "Fazer estoque",
          levels: { 
                        B1: { en: "People usually stock up on water and canned food before a big storm.", pt: "As pessoas costumam fazer estoque de água e comida enlatada antes de uma grande tempestade." } 
                      }
    },
      { english: "Pick up", portuguese: "Pegar / Comprar (rapidamente)",
          levels: { 
                        B1: { en: "Could you pick up some milk on your way home from the office?", pt: "Você poderia comprar um pouco de leite a caminho de casa do escritório?" } 
                      }
    },
      { english: "Sell out", portuguese: "Esgotar",
          levels: { 
                        B1: { en: "The special offer was so popular that the item sold out in one hour.", pt: "A oferta especial era tão popular que o item esgotou em uma hora." } 
                      }
    },
      { english: "Queue up", portuguese: "Fazer fila",
          levels: { 
                        B1: { en: "Customers had to queue up outside the store before the doors opened.", pt: "Os clientes tiveram que fazer fila do lado de fora da loja antes de as portas abrirem." } 
                      }
    },
      { english: "Bargain", portuguese: "Pechincha / Barganha",
          levels: { 
                        B1: { en: "Getting three boxes of cereal for the price of one is a real bargain.", pt: "Conseguir três caixas de cereal pelo preço de uma é uma verdadeira pechincha." } 
                      }
    },
      { english: "Checkout", portuguese: "Caixa (para pagamento)",
          levels: { 
                        B1: { en: "Please proceed to the checkout area when you are ready to pay for your items.", pt: "Por favor, dirija-se à área do caixa quando estiver pronto para pagar pelos seus itens." } 
                      }
    },
      { english: "Afford", portuguese: "Ter condições de pagar",
          levels: { 
                        B1: { en: "I want the premium brand, but I can only afford the generic one right now.", pt: "Eu quero a marca premium, mas só tenho condições de pagar a genérica agora." } 
                      }
    },
      { english: "Rip off", portuguese: "Exploração / Preço abusivo",
          levels: { 
                        B1: { en: "Twenty dollars for a small bottle of water is a complete rip-off.", pt: "Vinte dólares por uma pequena garrafa de água é uma verdadeira exploração." } 
                      }
    },
      { english: "Refund", portuguese: "Reembolso",
          levels: { 
                        B1: { en: "The product was expired, so I went back to the store to ask for a refund.", pt: "O produto estava vencido, então voltei à loja para pedir um reembolso." } 
                      }
    }
      ],
      flashcardsA2: [
          {
              "english": "I stopped at the bakery section to get some warm bread.",
              "portuguese": "Parei na seção da padaria para pegar um pão quentinho.",
              "example": "Palavra-chave: Bakery"
          },
          {
              "english": "We waited in a long queue for almost twenty minutes.",
              "portuguese": "Nós esperamos em uma longa fila por quase vinte minutos.",
              "example": "Palavra-chave: Queue / Line"
          },
          {
              "english": "The cashier gave me the receipt and a friendly smile.",
              "portuguese": "A caixa me deu o recibo e um sorriso amigável.",
              "example": "Palavra-chave: Receipt"
          },
          {
              "english": "I didn't have enough cash, so I used my credit card.",
              "portuguese": "Eu não tinha dinheiro em espécie suficiente, então usei meu cartão de crédito.",
              "example": "Palavra-chave: Cash"
          },
          {
              "english": "He paid for the groceries and carried the bags to his car.",
              "portuguese": "Ele pagou pelas compras e levou as sacolas para o carro.",
              "example": "Palavra-chave: Pay"
          },
          {
              "english": "I compared the price of two different brands of coffee.",
              "portuguese": "Eu comparei o preço de duas marcas diferentes de café.",
              "example": "Palavra-chave: Price"
          },
          {
              "english": "I always bring my reusable bag when I go shopping.",
              "portuguese": "Eu sempre trago minha sacola reutilizável quando vou fazer compras.",
              "example": "Palavra-chave: Bag"
          },
          {
              "english": "My mother prepared a healthy salad with fresh green vegetables.",
              "portuguese": "Minha mãe preparou uma salada saudável com verduras frescas.",
              "example": "Palavra-chave: Vegetables"
          },
          {
              "english": "I went to the new supermarket near my house to buy milk.",
              "portuguese": "Fui ao supermercado novo perto de casa para comprar leite.",
              "example": "Palavra-chave: Supermarket"
          },
          {
              "english": "We bought some fresh meat to grill over the weekend.",
              "portuguese": "Nós compramos carne fresca para grelhar no final de semana.",
              "example": "Palavra-chave: Meat"
          },
          {
              "english": "The supermarket introduced a new product in the dairy section.",
              "portuguese": "O supermercado lançou um produto novo na seção de laticínios.",
              "example": "Palavra-chave: Product"
          },
          {
              "english": "The friendly cashier scanned all the items quickly.",
              "portuguese": "O caixa amigável escaneou todos os itens rapidamente.",
              "example": "Palavra-chave: Cashier"
          },
          {
              "english": "The store was full of happy customers during the holiday sale.",
              "portuguese": "A loja estava cheia de clientes felizes durante a liquidação de feriado.",
              "example": "Palavra-chave: Customer"
          },
          {
              "english": "I found the imported cookies on the top shelf.",
              "portuguese": "Encontrei os biscoitos importados na prateleira de cima.",
              "example": "Palavra-chave: Shelf"
          },
          {
              "english": "He pushed the heavy shopping cart down the aisle.",
              "portuguese": "Ele empurrou o carrinho de compras pesado pelo corredor.",
              "example": "Palavra-chave: Shopping cart"
          },
          {
              "english": "She bought a lot of snacks for the birthday party.",
              "portuguese": "Ela comprou muitos salgadinhos para a festa de aniversário.",
              "example": "Palavra-chave: Buy"
          },
          {
              "english": "I bought these shoes because they were on a great sale.",
              "portuguese": "Eu comprei estes sapatos porque eles estavam em uma ótima promoção.",
              "example": "Palavra-chave: Sale"
          },
          {
              "english": "He inserted his credit card into the machine to pay.",
              "portuguese": "Ele inseriu seu cartão de crédito na máquina para pagar.",
              "example": "Palavra-chave: Credit card"
          },
          {
              "english": "She saved a lot of money to buy a new computer.",
              "portuguese": "Ela economizou muito dinheiro para comprar um computador novo.",
              "example": "Palavra-chave: Money"
          },
          {
              "english": "They bought bananas, oranges, and some other tropical fruit.",
              "portuguese": "Eles compraram bananas, laranjas e algumas outras frutas tropicais.",
              "example": "Palavra-chave: Fruit"
          }
      ],
      flashcardsB1: [
          {
              "english": "The friendly cashier scanned all my items very quickly.",
              "portuguese": "A caixa amigável escaneou todos os meus itens muito rapidamente.",
              "example": "Palavra-chave: Cashier"
          },
          {
              "english": "The special offer was so popular that the item sold out in one hour.",
              "portuguese": "A oferta especial era tão popular que o item esgotou em uma hora.",
              "example": "Palavra-chave: Sell out"
          },
          {
              "english": "He pushed the heavy trolley through the store while looking for the bread.",
              "portuguese": "Ele empurrou o pesado carrinho de compras pela loja enquanto procurava pelo pão.",
              "example": "Palavra-chave: Trolley"
          },
          {
              "english": "The product was expired, so I went back to the store to ask for a refund.",
              "portuguese": "O produto estava vencido, então voltei à loja para pedir um reembolso.",
              "example": "Palavra-chave: Refund"
          },
          {
              "english": "Make sure you keep the receipt in case you need a refund.",
              "portuguese": "Certifique-se de guardar o recibo caso você precise de um reembolso.",
              "example": "Palavra-chave: Receipt"
          },
          {
              "english": "You will find the cereal in the second aisle on the right.",
              "portuguese": "Você encontrará o cereal no segundo corredor à direita.",
              "example": "Palavra-chave: Aisle"
          },
          {
              "english": "Could you pick up some milk on your way home from the office?",
              "portuguese": "Você poderia comprar um pouco de leite a caminho de casa do escritório?",
              "example": "Palavra-chave: Pick up"
          },
          {
              "english": "We completely ran out of sugar, so I need to go to the store.",
              "portuguese": "Nós ficamos completamente sem açúcar, então preciso ir à loja.",
              "example": "Palavra-chave: Run out of"
          },
          {
              "english": "They offered a twenty percent discount on all dairy products.",
              "portuguese": "Eles ofereceram vinte por cento de desconto em todos os laticínios.",
              "example": "Palavra-chave: Discount"
          },
          {
              "english": "I need to go to the store to get some groceries.",
              "portuguese": "Eu preciso ir à loja para fazer algumas compras de mercado.",
              "example": "Palavra-chave: Grocery"
          },
          {
              "english": "I want the premium brand, but I can only afford the generic one right now.",
              "portuguese": "Eu quero a marca premium, mas só tenho condições de pagar a genérica agora.",
              "example": "Palavra-chave: Afford"
          },
          {
              "english": "You can find all the cleaning supplies in the third aisle on your left.",
              "portuguese": "Você pode encontrar todos os produtos de limpeza no terceiro corredor à sua esquerda.",
              "example": "Palavra-chave: Aisle"
          },
          {
              "english": "We had to wait in a long queue to pay for our food.",
              "portuguese": "Nós tivemos que esperar em uma longa fila para pagar nossa comida.",
              "example": "Palavra-chave: Queue"
          },
          {
              "english": "Please proceed to the checkout area when you are ready to pay for your items.",
              "portuguese": "Por favor, dirija-se à área do caixa quando estiver pronto para pagar pelos seus itens.",
              "example": "Palavra-chave: Checkout"
          },
          {
              "english": "People usually stock up on water and canned food before a big storm.",
              "portuguese": "As pessoas costumam fazer estoque de água e comida enlatada antes de uma grande tempestade.",
              "example": "Palavra-chave: Stock up"
          },
          {
              "english": "Customers had to queue up outside the store before the doors opened.",
              "portuguese": "Os clientes tiveram que fazer fila do lado de fora da loja antes de as portas abrirem.",
              "example": "Palavra-chave: Queue up"
          },
          {
              "english": "He put the heavy bags into the shopping trolley.",
              "portuguese": "Ele colocou as sacolas pesadas no carrinho de compras.",
              "example": "Palavra-chave: Trolley"
          },
          {
              "english": "This supermarket has very affordable prices for fresh food.",
              "portuguese": "Este supermercado tem preços muito acessíveis para comida fresca.",
              "example": "Palavra-chave: Affordable"
          },
          {
              "english": "Getting three boxes of cereal for the price of one is a real bargain.",
              "portuguese": "Conseguir três caixas de cereal pelo preço de uma é uma verdadeira pechincha.",
              "example": "Palavra-chave: Bargain"
          },
          {
              "english": "Twenty dollars for a small bottle of water is a complete rip-off.",
              "portuguese": "Vinte dólares por uma pequena garrafa de água é uma verdadeira exploração.",
              "example": "Palavra-chave: Rip off"
          }
      ],
      quizA2: [
          {
              "question": "Traduza a frase: \"Eu sempre trago minha sacola reutilizável quando vou fazer compras.\"",
              "options": [
                  "I always bring my reusable bag when I go shopping.",
                  "We bought some fresh meat to grill over the weekend.",
                  "She saved a lot of money to buy a new computer.",
                  "The supermarket introduced a new product in the dairy section."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"I always bring my reusable bag when I go shopping.\", que significa \"Eu sempre trago minha sacola reutilizável quando vou fazer compras.\"."
          },
          {
              "question": "Complete a frase: \"I didn't have enough ______, so I used my credit card.\"",
              "options": [
                  "Bakery",
                  "Cash",
                  "Grocery",
                  "Customer"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"I didn't have enough cash, so I used my credit card.\", que significa \"Eu não tinha dinheiro em espécie suficiente, então usei meu cartão de crédito.\"."
          },
          {
              "question": "O que significa a frase: \"She bought a lot of snacks for the birthday party.\"?",
              "options": [
                  "Eles compraram bananas, laranjas e algumas outras frutas tropicais.",
                  "Ela comprou muitos salgadinhos para a festa de aniversário.",
                  "Ela economizou muito dinheiro para comprar um computador novo.",
                  "O supermercado lançou um produto novo na seção de laticínios."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"She bought a lot of snacks for the birthday party.\", que significa \"Ela comprou muitos salgadinhos para a festa de aniversário.\"."
          },
          {
              "question": "Traduza a frase: \"Minha mãe preparou uma salada saudável com verduras frescas.\"",
              "options": [
                  "My mother prepared a healthy salad with fresh green vegetables.",
                  "I went to the new supermarket near my house to buy milk.",
                  "We bought some fresh meat to grill over the weekend.",
                  "I bought these shoes because they were on a great sale."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"My mother prepared a healthy salad with fresh green vegetables.\", que significa \"Minha mãe preparou uma salada saudável com verduras frescas.\"."
          },
          {
              "question": "Complete a frase: \"The supermarket introduced a new ______ in the dairy section.\"",
              "options": [
                  "Shelf",
                  "Product",
                  "Afford",
                  "Supermarket"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"The supermarket introduced a new product in the dairy section.\", que significa \"O supermercado lançou um produto novo na seção de laticínios.\"."
          },
          {
              "question": "O que significa a frase: \"He paid for the groceries and carried the bags to his car.\"?",
              "options": [
                  "Parei na seção da padaria para pegar um pão quentinho.",
                  "Eu comparei o preço de duas marcas diferentes de café.",
                  "Ele pagou pelas compras e levou as sacolas para o carro.",
                  "O caixa amigável escaneou todos os itens rapidamente."
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"He paid for the groceries and carried the bags to his car.\", que significa \"Ele pagou pelas compras e levou as sacolas para o carro.\"."
          },
          {
              "question": "Traduza a frase: \"Nós esperamos em uma longa fila por quase vinte minutos.\"",
              "options": [
                  "My mother prepared a healthy salad with fresh green vegetables.",
                  "She saved a lot of money to buy a new computer.",
                  "I compared the price of two different brands of coffee.",
                  "We waited in a long queue for almost twenty minutes."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"We waited in a long queue for almost twenty minutes.\", que significa \"Nós esperamos em uma longa fila por quase vinte minutos.\"."
          },
          {
              "question": "Complete a frase: \"I stopped at the ______ section to get some warm bread.\"",
              "options": [
                  "Pay",
                  "Bakery",
                  "Queue / Line",
                  "Trolley"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"I stopped at the bakery section to get some warm bread.\", que significa \"Parei na seção da padaria para pegar um pão quentinho.\"."
          },
          {
              "question": "Traduza a frase: \"Ele inseriu seu cartão de crédito na máquina para pagar.\"",
              "options": [
                  "He inserted his credit card into the machine to pay.",
                  "I compared the price of two different brands of coffee.",
                  "The store was full of happy customers during the holiday sale.",
                  "I didn't have enough cash, so I used my credit card."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He inserted his credit card into the machine to pay.\", que significa \"Ele inseriu seu cartão de crédito na máquina para pagar.\"."
          },
          {
              "question": "Complete a frase: \"She saved a lot of ______ to buy a new computer.\"",
              "options": [
                  "Shelf",
                  "Vegetables",
                  "Money",
                  "Supermarket"
              ],
              "correctIndex": 2,
              "explanation": "A frase correta é \"She saved a lot of money to buy a new computer.\", que significa \"Ela economizou muito dinheiro para comprar um computador novo.\"."
          }
      ],
      quizB1: [
          {
              "question": "Traduza a frase: \"Ele colocou as sacolas pesadas no carrinho de compras.\"",
              "options": [
                  "We completely ran out of sugar, so I need to go to the store.",
                  "He put the heavy bags into the shopping trolley.",
                  "People usually stock up on water and canned food before a big storm.",
                  "The friendly cashier scanned all my items very quickly."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"He put the heavy bags into the shopping trolley.\", que significa \"Ele colocou as sacolas pesadas no carrinho de compras.\"."
          },
          {
              "question": "Complete a frase: \"People usually ______ on water and canned food before a big storm.\"",
              "options": [
                  "Price",
                  "Customer",
                  "Grocery",
                  "Stock up"
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"People usually stock up on water and canned food before a big storm.\", que significa \"As pessoas costumam fazer estoque de água e comida enlatada antes de uma grande tempestade.\"."
          },
          {
              "question": "Traduza a frase: \"A caixa amigável escaneou todos os meus itens muito rapidamente.\"",
              "options": [
                  "The friendly cashier scanned all my items very quickly.",
                  "You will find the cereal in the second aisle on the right.",
                  "You can find all the cleaning supplies in the third aisle on your left.",
                  "He pushed the heavy trolley through the store while looking for the bread."
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"The friendly cashier scanned all my items very quickly.\", que significa \"A caixa amigável escaneou todos os meus itens muito rapidamente.\"."
          },
          {
              "question": "Traduza a frase: \"Nós tivemos que esperar em uma longa fila para pagar nossa comida.\"",
              "options": [
                  "Twenty dollars for a small bottle of water is a complete rip-off.",
                  "We had to wait in a long queue to pay for our food.",
                  "I want the premium brand, but I can only afford the generic one right now.",
                  "He put the heavy bags into the shopping trolley."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"We had to wait in a long queue to pay for our food.\", que significa \"Nós tivemos que esperar em uma longa fila para pagar nossa comida.\"."
          },
          {
              "question": "Complete a frase: \"This supermarket has very ______ prices for fresh food.\"",
              "options": [
                  "Affordable",
                  "Receipt",
                  "Bakery",
                  "Money"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"This supermarket has very affordable prices for fresh food.\", que significa \"Este supermercado tem preços muito acessíveis para comida fresca.\"."
          },
          {
              "question": "Traduza a frase: \"Eu preciso ir à loja para fazer algumas compras de mercado.\"",
              "options": [
                  "We had to wait in a long queue to pay for our food.",
                  "Getting three boxes of cereal for the price of one is a real bargain.",
                  "We completely ran out of sugar, so I need to go to the store.",
                  "I need to go to the store to get some groceries."
              ],
              "correctIndex": 3,
              "explanation": "A frase correta é \"I need to go to the store to get some groceries.\", que significa \"Eu preciso ir à loja para fazer algumas compras de mercado.\"."
          },
          {
              "question": "Complete a frase: \"You will find the cereal in the second ______ on the right.\"",
              "options": [
                  "Product",
                  "Aisle",
                  "Sell out",
                  "Receipt"
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"You will find the cereal in the second aisle on the right.\", que significa \"Você encontrará o cereal no segundo corredor à direita.\"."
          },
          {
              "question": "Complete a frase: \"I want the premium brand, but I can only ______ the generic one right now.\"",
              "options": [
                  "Afford",
                  "Bag",
                  "Cashier",
                  "Aisle"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"I want the premium brand, but I can only afford the generic one right now.\", que significa \"Eu quero a marca premium, mas só tenho condições de pagar a genérica agora.\"."
          },
          {
              "question": "Traduza a frase: \"O produto estava vencido, então voltei à loja para pedir um reembolso.\"",
              "options": [
                  "Customers had to queue up outside the store before the doors opened.",
                  "The product was expired, so I went back to the store to ask for a refund.",
                  "He put the heavy bags into the shopping trolley.",
                  "This supermarket has very affordable prices for fresh food."
              ],
              "correctIndex": 1,
              "explanation": "A frase correta é \"The product was expired, so I went back to the store to ask for a refund.\", que significa \"O produto estava vencido, então voltei à loja para pedir um reembolso.\"."
          },
          {
              "question": "Complete a frase: \"He pushed the heavy ______ through the store while looking for the bread.\"",
              "options": [
                  "Trolley",
                  "Queue / Line",
                  "Pick up",
                  "Shopping cart"
              ],
              "correctIndex": 0,
              "explanation": "A frase correta é \"He pushed the heavy trolley through the store while looking for the bread.\", que significa \"Ele empurrou o pesado carrinho de compras pela loja enquanto procurava pelo pão.\"."
          }
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
      { speaker: "Employee", english: "Take your time! Let me know if you need help.", portuguese: "Vá no seu tempo! Me avise se precisar de ajuda.", isPrimary: false }],
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
      { english: "It is on the bottom shelf.", portuguese: "Fica na prateleira de baixo." }],
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
      { question: 'Complete: "How much does it _____?"', options: ["price", "cost", "pay", "money"], correctIndex: 1, explanation: '"How much does it cost?" is the standard way to ask for the price.' }],
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
    speakingPractice: { part1: [ { question: "Do you always use a shopping cart or just a basket?", translation: "Você sempre usa um carrinho de compras ou apenas uma cesta?" }, { question: "Are you usually friendly with the cashier?", translation: "Você costuma ser amigável com o caixa?" }, { question: "How often do you go grocery shopping every month?", translation: "Com que frequência você faz compras de supermercado todo mês?" }, { question: "Can you easily find the dairy aisle?", translation: "Você consegue encontrar facilmente o corredor de laticínios?" }, { question: "Do you always check your receipt before leaving?", translation: "Você sempre verifica seu recibo antes de sair?" }, { question: "Do you actively look for a discount on products?", translation: "Você procura ativamente por desconto em produtos?" }, { question: "Do you call it a shopping cart or a trolley?", translation: "Você chama isso de carrinho de compras (shopping cart) ou trolley?" }, { question: "Do you think organic food is affordable?", translation: "Você acha que comida orgânica é acessível (barata)?" }, { question: "Do you get annoyed when the queue is too long?", translation: "Você fica irritado quando a fila está muito longa?" }, { question: "What is your favorite local supermarket?", translation: "Qual é o seu supermercado local favorito?" } ], part2: [ { question: "Do you bring your own reusable bag to the store?", translation: "Você leva sua própria sacola reutilizável para a loja?" }, { question: "Can you reach the top shelf easily?", translation: "Você consegue alcançar a prateleira de cima facilmente?" }, { question: "Do you prefer to pay with cash or card?", translation: "Você prefere pagar com dinheiro ou cartão?" }, { question: "Have you ever lost your credit card?", translation: "Você já perdeu seu cartão de crédito?" }, { question: "Do you always check the price per kilogram?", translation: "Você sempre verifica o preço por quilo?" }, { question: "Do you try to save money when shopping for food?", translation: "Você tenta economizar dinheiro ao comprar comida?" }, { question: "Is the customer always right in your opinion?", translation: "O cliente tem sempre razão na sua opinião?" }, { question: "How long do you usually wait in the checkout line?", translation: "Quanto tempo você costuma esperar na fila do caixa?" }, { question: "What is the most expensive product you buy regularly?", translation: "Qual é o produto mais caro que você compra regularmente?" }, { question: "What items do you completely forget to buy sometimes?", translation: "Quais itens você esquece completamente de comprar às vezes?" } ] },
      buildSentence: { level1: [ { english: "I pushed the heavy shopping cart down the dairy aisle.", portuguese: "Eu empurrei o carrinho de compras pesado pelo corredor de laticínios." }, { english: "She checks her receipt to ensure the price is correct.", portuguese: "Ela verifica o recibo dela para garantir que o preço está correto." }, { english: "The friendly cashier applied a generous discount to our bill.", portuguese: "O caixa amigável aplicou um desconto generoso à nossa conta." }, { english: "We buy affordable vegetables at the local market every Sunday.", portuguese: "Nós compramos legumes acessíveis no mercado local todo domingo." }, { english: "I stood in a long queue and waited for my turn.", portuguese: "Eu fiquei numa longa fila e esperei minha vez." }, { english: "He handed his credit card to the cashier with a smile.", portuguese: "Ele entregou o cartão de crédito dele ao caixa com um sorriso." } ], level2: [ { english: "They ran out of fresh bakery bread this morning.", portuguese: "Eles ficaram sem pão fresco da padaria esta manhã." }, { english: "I stock up on snacks before the massive winter storm.", portuguese: "Eu faço estoque de lanches antes da enorme tempestade de inverno." }, { english: "We picked up some amazing items on a special sale.", portuguese: "Nós pegamos alguns itens incríveis numa promoção especial." }, { english: "The new supermarket charges too much and rips off customers.", portuguese: "O novo supermercado cobra demais e explora os clientes." }, { english: "She affords imported meat because she earns a good salary.", portuguese: "Ela tem condições de comprar carne importada porque ganha um bom salário." }, { english: "She received a full refund after she returned the spoiled fruit.", portuguese: "Ela recebeu um reembolso total depois que devolveu a fruta estragada." } ] },
      trueOrFalseLevel2: {
                    part1: [ { statement: "Shopping cart means Carrinho de compras.", statementPt: "Shopping cart significa Carrinho de compras.", isTrue: true, explanation: "Yes, Shopping cart means Carrinho de compras." }, { statement: "Cashier means a type of car.", statementPt: "Cashier significa um tipo de carro.", isTrue: false, explanation: "No, Cashier means Caixa (pessoa)." }, { statement: "Aisle means Corredor.", statementPt: "Aisle significa Corredor.", isTrue: true, explanation: "Yes, Aisle means Corredor." }, { statement: "Receipt means a type of car.", statementPt: "Receipt significa um tipo de carro.", isTrue: false, explanation: "No, Receipt means Recibo / Nota fiscal." }, { statement: "Grocery list means Lista de compras.", statementPt: "Grocery list significa Lista de compras.", isTrue: true, explanation: "Yes, Grocery list means Lista de compras." }, { statement: "Checkout means a type of car.", statementPt: "Checkout significa um tipo de carro.", isTrue: false, explanation: "No, Checkout means Caixa (pagamento)." }, { statement: "Bag means Sacola.", statementPt: "Bag significa Sacola.", isTrue: true, explanation: "Yes, Bag means Sacola." }, { statement: "Price means a type of car.", statementPt: "Price significa um tipo de carro.", isTrue: false, explanation: "No, Price means Preço." }, { statement: "Discount means Desconto.", statementPt: "Discount significa Desconto.", isTrue: true, explanation: "Yes, Discount means Desconto." }, { statement: "Pay means a type of car.", statementPt: "Pay significa um tipo de carro.", isTrue: false, explanation: "No, Pay means Pagar." } ],
                    part2: [ { statement: "Credit card means Cartão de crédito.", statementPt: "Credit card significa Cartão de crédito.", isTrue: true, explanation: "Yes, Credit card means Cartão de crédito." }, { statement: "Cash means a type of car.", statementPt: "Cash significa um tipo de carro.", isTrue: false, explanation: "No, Cash means Dinheiro (espécie)." }, { statement: "Change means Troco.", statementPt: "Change significa Troco.", isTrue: true, explanation: "Yes, Change means Troco." }, { statement: "Customer means a type of car.", statementPt: "Customer significa um tipo de carro.", isTrue: false, explanation: "No, Customer means Cliente." }, { statement: "Shelf means Prateleira.", statementPt: "Shelf significa Prateleira.", isTrue: true, explanation: "Yes, Shelf means Prateleira." }, { statement: "Basket means a type of car.", statementPt: "Basket significa um tipo de carro.", isTrue: false, explanation: "No, Basket means Cesta de compras." }, { statement: "Fresh means Fresco.", statementPt: "Fresh significa Fresco.", isTrue: true, explanation: "Yes, Fresh means Fresco." }, { statement: "Frozen means a type of car.", statementPt: "Frozen significa um tipo de carro.", isTrue: false, explanation: "No, Frozen means Congelado." }, { statement: "Bakery means Padaria (seção).", statementPt: "Bakery significa Padaria (seção).", isTrue: true, explanation: "Yes, Bakery means Padaria (seção)." }, { statement: "Scale means a type of car.", statementPt: "Scale significa um tipo de carro.", isTrue: false, explanation: "No, Scale means Balança." } ]
                  },
      speakingPracticeLevel2: { part1: [ { question: "Do you pay for your groceries with cash or credit?", translation: "Você paga suas compras de mercado com dinheiro ou crédito?" }, { question: "Did you buy these expensive items on sale?", translation: "Você comprou esses itens caros na liquidação?" }, { question: "What is your favorite tropical fruit to eat in summer?", translation: "Qual é a sua fruta tropical favorita para comer no verão?" }, { question: "Do you buy organic vegetables at the local market?", translation: "Você compra vegetais orgânicos no mercado local?" }, { question: "Do you eat red meat every day of the week?", translation: "Você come carne vermelha todos os dias da semana?" }, { question: "Do you usually buy fresh bread at the bakery?", translation: "Você costuma comprar pão fresco na padaria?" }, { question: "Did you run out of milk this morning?", translation: "Faltou/Acabou o seu leite esta manhã?" }, { question: "Do you stock up on snacks before a long trip?", translation: "Você faz estoque de lanches antes de uma viagem longa?" } ], part2: [ { question: "Can you pick up some apples on your way home?", translation: "Você pode pegar/comprar algumas maçãs no caminho para casa?" }, { question: "Did the store sell out of your favorite ice cream?", translation: "A loja esgotou o seu sorvete favorito?" }, { question: "Did you have to queue up to pay at the register?", translation: "Você teve que entrar na fila para pagar no caixa?" }, { question: "Did you find a good bargain at the supermarket?", translation: "Você encontrou uma boa pechincha no supermercado?" }, { question: "Is the checkout line always long on Saturdays?", translation: "A fila do caixa é sempre longa aos sábados?" }, { question: "Can you afford to buy imported chocolates?", translation: "Você tem condições de comprar chocolates importados?" }, { question: "Do you think paying that much for water is a rip off?", translation: "Você acha que pagar tanto por água é um roubo/exploração?" }, { question: "Did you get a refund for the spoiled yogurt?", translation: "Você conseguiu um reembolso pelo iogurte estragado?" } ] },
      imageDescription: {
                  imagePath: "/images/scenarios/scenario_supermercado_1789410581014.jpg",
                  keywords: [
                    { english: "A woman pushing a shopping cart", portuguese: "Uma mulher empurrando um carrinho de compras" },
                    { english: "Shopping in the produce and organics aisle", portuguese: "Fazendo compras no corredor de hortifrúti e orgânicos" },
                    { english: "Cart filled with fresh tomatoes and lettuce", portuguese: "Carrinho cheio de tomates frescos e alface" },
                    { english: "Looking at the groceries on the shelves", portuguese: "Olhando para os mantimentos nas prateleiras" }
                  ]
                },

      wouldYouRather: [
        { optionA: { english: "Go grocery shopping early", portuguese: "Fazer as compras do mercado cedo" }, optionB: { english: "Shop late at night", portuguese: "Fazer compras tarde da noite" } },
        { optionA: { english: "Buy fresh organic food", portuguese: "Comprar comida orgânica fresca" }, optionB: { english: "Buy cheap processed food", portuguese: "Comprar comida processada barata" } },
        { optionA: { english: "Push a heavy shopping cart", portuguese: "Empurrar um carrinho de compras pesado" }, optionB: { english: "Carry heavy shopping bags", portuguese: "Carregar sacolas de compras pesadas" } },
        { optionA: { english: "Wait in a long line", portuguese: "Esperar em uma fila longa" }, optionB: { english: "Use self-checkout", portuguese: "Usar o caixa de autoatendimento" } },
        { optionA: { english: "Never have to wait in line again", portuguese: "Nunca mais ter que esperar na fila" }, optionB: { english: "Always find your favorite item on sale", portuguese: "Sempre encontrar seu item favorito em promoção" } },
        { optionA: { english: "Carry one extremely heavy bag", portuguese: "Carregar uma sacola extremamente pesada" }, optionB: { english: "Carry ten small light bags", portuguese: "Carregar dez sacolas pequenas e leves" } },
        { optionA: { english: "Work as a cashier", portuguese: "Trabalhar como caixa" }, optionB: { english: "Work stocking the shelves", portuguese: "Trabalhar abastecendo as prateleiras" } }
      ]
}];
