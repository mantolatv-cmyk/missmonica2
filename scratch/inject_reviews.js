const fs = require('fs');

const reviewsData = {
  "revisao-1": {
    quiz: [
      {
        question: "Which sentence correctly describes a common daily routine after waking up?",
        options: [
          "I make my bed and open the windows.",
          "I sleep in the bathroom all day.",
          "I wash the table before breakfast.",
          "I sweep the roof on weekends."
        ],
        correctIndex: 0,
        explanation: "'Making the bed' is a standard routine done after waking up in the morning."
      },
      {
        question: "How do you explain the purpose of doing the laundry?",
        options: [
          "It is the chore of washing dirty clothes.",
          "It is the act of cooking dinner in the kitchen.",
          "It is when you organize your bookshelf.",
          "It is how you repair a broken window."
        ],
        correctIndex: 0,
        explanation: "'Doing the laundry' means washing clothes."
      },
      {
        question: "Which phrase best describes an activity to keep your living room clean?",
        options: [
          "I usually sweep the floor and take out the trash.",
          "I turn on the lamp to read a book.",
          "I sleep on the comfortable sofa.",
          "I buy a small glass table."
        ],
        correctIndex: 0,
        explanation: "Sweeping the floor and taking out the trash are cleaning activities."
      },
      {
        question: "If your friend is sad, what is the best phrase to show your support?",
        options: [
          "I will always be here to support you.",
          "I don't share any secrets with you.",
          "I have a big extended family.",
          "My eyes are brown and my hair is short."
        ],
        correctIndex: 0,
        explanation: "Saying 'I will always be here to support you' is a direct way to show friendship and care."
      },
      {
        question: "Which sentence correctly explains the relationship with your siblings?",
        options: [
          "I have two brothers and we play together.",
          "My grandmother bakes delicious cookies.",
          "My father works at a big hospital.",
          "I need to clean my bedroom."
        ],
        correctIndex: 0,
        explanation: "Brothers are siblings, and playing together shows the relationship."
      },
      {
        question: "What sentence describes a physical injury during a sport?",
        options: [
          "I hurt my shoulder while I was playing tennis.",
          "I have brown eyes and short hair.",
          "I wash my hands before eating.",
          "I need to clean the table."
        ],
        correctIndex: 0,
        explanation: "Hurting a shoulder is a physical injury."
      },
      {
        question: "How do you describe an empty apartment that comes with beds, sofas, and tables?",
        options: [
          "It is a fully furnished apartment.",
          "It is an open-plan living area.",
          "It is a kitchen with modern appliances.",
          "It is a house with a small garden."
        ],
        correctIndex: 0,
        explanation: "An apartment that includes furniture is called a 'furnished apartment'."
      },
      {
        question: "Which of the following phrases is a common excuse for making a mistake?",
        options: [
          "I apologize for breaking the mirror.",
          "I trust my best friend completely.",
          "I sleep in my bedroom every night.",
          "My knee is hurting a lot today."
        ],
        correctIndex: 0,
        explanation: "'I apologize' is the correct phrase to say sorry for a mistake."
      },
      {
        question: "How would you describe the role of strict parents?",
        options: [
          "They are very strict about my homework and rules.",
          "They let me do whatever I want.",
          "They are my siblings.",
          "They live in another city."
        ],
        correctIndex: 0,
        explanation: "Strict parents enforce rules, such as being strict about homework."
      },
      {
        question: "Which sentence indicates a problem with your digestive system after eating?",
        options: [
          "She has a stomachache because she ate too much candy.",
          "He hurt his shoulder while playing tennis.",
          "My eyes are very tired from the screen.",
          "I broke my leg jumping off the wall."
        ],
        correctIndex: 0,
        explanation: "A stomachache is a pain in the stomach, often caused by eating too much."
      }
    ],
    quizLevel2: [
      {
        question: "What phrase would you use to describe a structural change in a house to create a larger space?",
        options: [
          "We knocked down a wall to create an open-plan living area.",
          "We bought a new glass table for the dining room.",
          "We arranged our schedule to do a little bit of cleaning every day.",
          "We rebelled against the guardians' rules."
        ],
        correctIndex: 0,
        explanation: "Knocking down a wall is a structural change that opens up the space."
      },
      {
        question: "Which sentence best describes a friend who only stays around during good times?",
        options: [
          "A fair-weather friend will abandon you when things get tough.",
          "We share many secrets and always help each other out.",
          "We hit it off immediately when we first met at college.",
          "Despite our differences, I remain very close to my relatives."
        ],
        correctIndex: 0,
        explanation: "A 'fair-weather friend' is someone who is only a friend when circumstances are pleasant."
      },
      {
        question: "How do you express the gradual loss of connection with childhood friends?",
        options: [
          "We slowly drifted apart after high school ended.",
          "We hit it off immediately when we first met.",
          "We share many secrets and always help each other.",
          "We knocked down a wall to create an open-plan area."
        ],
        correctIndex: 0,
        explanation: "To 'drift apart' means to slowly lose contact or closeness over time."
      },
      {
        question: "Which phrase indicates a teenager resisting authority?",
        options: [
          "Many teenagers eventually rebel against their guardians' rules.",
          "They signed the lease for a fully furnished apartment.",
          "We need to clean the bathroom and vacuum the carpet.",
          "It takes time to fully recover from a sprained ankle."
        ],
        correctIndex: 0,
        explanation: "To 'rebel against guardians' rules' is the act of resisting authority."
      },
      {
        question: "What is the correct way to describe a formal agreement to rent a house?",
        options: [
          "They just signed the lease for a fully furnished apartment.",
          "They bought a new glass table for the living room.",
          "They swept the floor and took out the trash.",
          "They knocked down a wall to create a master suite."
        ],
        correctIndex: 0,
        explanation: "Signing a lease is the formal process of renting property."
      },
      {
        question: "Which sentence effectively describes a severe joint injury requiring a long healing process?",
        options: [
          "It takes time to fully recover from a sprained ankle.",
          "I hurt my shoulder while I was playing tennis.",
          "She has a stomachache because she ate too much candy.",
          "Regular exercise is crucial for maintaining a healthy cardiovascular system."
        ],
        correctIndex: 0,
        explanation: "A 'sprained ankle' is a joint injury, and 'takes time to fully recover' indicates the healing process."
      },
      {
        question: "How do you explain the purpose of managing household chores efficiently?",
        options: [
          "It requires organizing a proper daily routine to transform your living environment.",
          "It means knocking down a wall to create an open-plan living area.",
          "It is when you rebel against your guardians' rules.",
          "It is the process of signing a lease for a furnished apartment."
        ],
        correctIndex: 0,
        explanation: "Managing chores efficiently requires a 'proper daily routine' and transforms the environment."
      },
      {
        question: "Which sentence indicates that people instantly connected and became friends?",
        options: [
          "We hit it off immediately when we first met at college.",
          "We slowly drifted apart after high school ended.",
          "A fair-weather friend will abandon you when things get tough.",
          "Despite our differences, I remain very close to my relatives."
        ],
        correctIndex: 0,
        explanation: "'Hit it off immediately' is an idiom meaning to quickly become good friends."
      },
      {
        question: "What is a major benefit of regular exercise mentioned in the advanced vocabulary?",
        options: [
          "It is crucial for maintaining a healthy cardiovascular system.",
          "It helps you sign the lease for an apartment.",
          "It allows you to knock down walls in your house.",
          "It prevents teenagers from rebelling against rules."
        ],
        correctIndex: 0,
        explanation: "Exercise maintains a 'healthy cardiovascular system'."
      },
      {
        question: "Which sentence shows that family members stay united even if they argue?",
        options: [
          "Despite our differences, I remain very close to my relatives.",
          "Many teenagers eventually rebel against their guardians.",
          "We slowly drifted apart after high school ended.",
          "A fair-weather friend will abandon you when things get tough."
        ],
        correctIndex: 0,
        explanation: "The phrase 'Despite our differences, I remain very close' shows unity despite arguments."
      }
    ],
    flashcards: [
      {
        english: "I have a big family and we live together.",
        portuguese: "Eu tenho uma família grande e moramos juntos.",
        levels: {
          A1: {
            en: "I have a big family and we live together.",
            pt: "Eu tenho uma família grande e moramos juntos."
          },
          B1: {
            en: "Despite our differences, I remain very close to my relatives.",
            pt: "Apesar de nossas diferenças, continuo muito próximo dos meus parentes."
          }
        }
      },
      {
        english: "She is my best friend.",
        portuguese: "Ela é minha melhor amiga.",
        levels: {
          A1: {
            en: "We share many secrets and always help each other.",
            pt: "Nós compartilhamos muitos segredos e sempre ajudamos um ao outro."
          },
          B1: {
            en: "We hit it off immediately when we first met at college.",
            pt: "Nós nos demos bem imediatamente quando nos conhecemos na faculdade."
          }
        }
      },
      {
        english: "I hurt my shoulder while I was playing tennis.",
        portuguese: "Eu machuquei meu ombro enquanto jogava tênis.",
        levels: {
          A1: {
            en: "I hurt my shoulder while I was playing tennis.",
            pt: "Eu machuquei meu ombro enquanto jogava tênis."
          },
          B1: {
            en: "It takes time to fully recover from a sprained ankle.",
            pt: "Leva tempo para se recuperar totalmente de um tornozelo torcido."
          }
        }
      },
      {
        english: "We need to clean the bathroom and vacuum the carpet.",
        portuguese: "Nós precisamos limpar o banheiro e aspirar o tapete.",
        levels: {
          A1: {
            en: "We need to clean the bathroom and vacuum the carpet.",
            pt: "Nós precisamos limpar o banheiro e aspirar o tapete."
          },
          B1: {
            en: "They just signed the lease for a fully furnished apartment downtown.",
            pt: "Eles acabaram de assinar o contrato de aluguel de um apartamento totalmente mobiliado no centro."
          }
        }
      },
      {
        english: "The kitchen is very modern and has new appliances.",
        portuguese: "A cozinha é muito moderna e tem eletrodomésticos novos.",
        levels: {
          A1: {
            en: "The kitchen is very modern and has new appliances.",
            pt: "A cozinha é muito moderna e tem eletrodomésticos novos."
          },
          B1: {
            en: "We decided to knock down a wall to create an open-plan living area.",
            pt: "Decidimos derrubar uma parede para criar uma área de estar em conceito aberto."
          }
        }
      },
      {
        english: "My parents are very strict about my homework.",
        portuguese: "Meus pais são muito rigorosos com meu dever de casa.",
        levels: {
          A1: {
            en: "My parents are very strict about my homework.",
            pt: "Meus pais são muito rigorosos com meu dever de casa."
          },
          B1: {
            en: "Many teenagers eventually rebel against their guardians' rules.",
            pt: "Muitos adolescentes eventualmente se rebelam contra as regras de seus responsáveis."
          }
        }
      },
      {
        english: "We always support each other during difficult times.",
        portuguese: "Nós sempre nos apoiamos durante os momentos difíceis.",
        levels: {
          A1: {
            en: "We always support each other during difficult times.",
            pt: "Nós sempre nos apoiamos durante os momentos difíceis."
          },
          B1: {
            en: "A fair-weather friend will abandon you when things get tough.",
            pt: "Um amigo das horas boas te abandonará quando as coisas ficarem difíceis."
          }
        }
      },
      {
        english: "She has a stomachache because she ate too much candy.",
        portuguese: "Ela está com dor de estômago porque comeu muito doce.",
        levels: {
          A1: {
            en: "She has a stomachache because she ate too much candy.",
            pt: "Ela está com dor de estômago porque comeu muito doce."
          },
          B1: {
            en: "Regular exercise is crucial for maintaining a healthy cardiovascular system.",
            pt: "O exercício regular é crucial para manter um sistema cardiovascular saudável."
          }
        }
      },
      {
        english: "Please put the dirty clothes in the washing machine.",
        portuguese: "Por favor, coloque as roupas sujas na máquina de lavar.",
        levels: {
          A1: {
            en: "Please put the dirty clothes in the washing machine.",
            pt: "Por favor, coloque as roupas sujas na máquina de lavar."
          },
          B1: {
            en: "Managing household chores requires organizing a proper daily routine.",
            pt: "Gerenciar as tarefas domésticas exige a organização de uma rotina diária adequada."
          }
        }
      },
      {
        english: "I prefer apartments that have a lot of natural light.",
        portuguese: "Eu prefiro apartamentos que tenham muita luz natural.",
        levels: {
          A1: {
            en: "I prefer apartments that have a lot of natural light.",
            pt: "Eu prefiro apartamentos que tenham muita luz natural."
          },
          B1: {
            en: "After the renovation, the master suite looks absolutely stunning.",
            pt: "Após a reforma, a suíte principal está absolutamente deslumbrante."
          }
        }
      }
    ]
  },
  "revisao-2": {
    quiz: [
      {
        question: "Which sentence indicates a popular outdoor activity during free time?",
        options: [
          "I prefer outdoor activities, like riding my bicycle in the park.",
          "I play video games in my bedroom all day.",
          "I work as a mechanic and fix cars.",
          "I sleep on the comfortable sofa."
        ],
        correctIndex: 0,
        explanation: "Riding a bicycle in the park is a popular outdoor hobby."
      },
      {
        question: "What is the best phrase to describe the action of scoring a point in a soccer match?",
        options: [
          "We run a lot and try to score goals.",
          "We hit a home run out of the park.",
          "We buy fresh apples and carrots.",
          "We look for discounts and sales."
        ],
        correctIndex: 0,
        explanation: "'To score goals' is the standard action to get points in soccer."
      },
      {
        question: "Which sentence correctly describes the final step of shopping at a supermarket?",
        options: [
          "Finally, we wait in line at the cashier to pay for our groceries.",
          "First, we go to the produce section to buy fresh apples.",
          "I always look for discounts and sales.",
          "I try not to spend too much time online."
        ],
        correctIndex: 0,
        explanation: "Waiting in line at the cashier to pay is the final step of shopping."
      },
      {
        question: "How do you explain the process of choosing a cheaper item over an expensive one?",
        options: [
          "I decided to buy a cheaper shirt instead of the expensive jacket.",
          "I only buy things that are fully furnished.",
          "I always pay with my credit card at the bakery.",
          "I never look at the prices when I shop."
        ],
        correctIndex: 0,
        explanation: "Buying a cheaper shirt instead of the expensive jacket is a money-saving choice."
      },
      {
        question: "Which phrase indicates someone is preparing to get a new profession?",
        options: [
          "Next week, my cousin has a job interview to become a nurse.",
          "My brother works as a mechanic and fixes cars every day.",
          "I want to be a teacher because I like helping children.",
          "I usually go to the mall on Saturday mornings."
        ],
        correctIndex: 0,
        explanation: "Having a job interview is a preparation step for a new profession."
      },
      {
        question: "What sentence describes a common indoor hobby when the weather is bad?",
        options: [
          "When it rains, we usually play board games together.",
          "I prefer outdoor activities, like riding my bicycle.",
          "Sometimes we watch tennis matches on TV.",
          "We go to the central square to see the fountain."
        ],
        correctIndex: 0,
        explanation: "Playing board games when it rains is an indoor hobby."
      },
      {
        question: "Which sentence emphasizes the importance of teamwork over personal victory?",
        options: [
          "Winning is nice, but playing as a team is more important.",
          "I prefer basketball because I am very tall.",
          "I play soccer with my friends every Saturday.",
          "I watch tennis matches on TV."
        ],
        correctIndex: 0,
        explanation: "The phrase explicitly states that playing as a team is more important than winning."
      },
      {
        question: "What phrase describes a smart strategy for saving money?",
        options: [
          "Saving money is important, so I always look for discounts and sales.",
          "I always buy my favorite chocolate cookies.",
          "I hate trying on new clothes.",
          "I decided to knock down a wall."
        ],
        correctIndex: 0,
        explanation: "Looking for discounts and sales is a strategy for saving money."
      },
      {
        question: "How would you describe the messy reality of a mechanic's job?",
        options: [
          "He comes home with dirty hands, but he makes good money.",
          "He works at a big hospital with doctors.",
          "He teaches children to learn new things.",
          "He has a job interview to become a nurse."
        ],
        correctIndex: 0,
        explanation: "Coming home with dirty hands is a messy reality of being a mechanic."
      },
      {
        question: "Which sentence explains the reason for making a shopping list?",
        options: [
          "We make a shopping list so we do not forget anything.",
          "We look for milk and cheese in the dairy aisle.",
          "We wait in line at the cashier.",
          "We buy a cheaper shirt and blue jeans."
        ],
        correctIndex: 0,
        explanation: "The reason is 'so we do not forget anything'."
      }
    ],
    quizLevel2: [
      {
        question: "What phrase accurately describes the mental benefits of creative hobbies?",
        options: [
          "Engaging in creative hobbies can significantly boost your cognitive flexibility.",
          "Hobbies are a fun way to use your free time.",
          "You start noticing the intricate details of light and shadows.",
          "Playing an instrument requires a lot of money."
        ],
        correctIndex: 0,
        explanation: "'Boost your cognitive flexibility' refers directly to mental benefits."
      },
      {
        question: "Which sentence explains the strategic layout of modern supermarkets?",
        options: [
          "Supermarkets are strategically designed to influence consumer behavior.",
          "We wait in line at the cashier to pay for our groceries.",
          "First, we go to the produce section to buy apples.",
          "The smell of baked goods triggers impulse purchases."
        ],
        correctIndex: 0,
        explanation: "The phrase explicitly mentions that supermarkets are designed to 'influence consumer behavior'."
      },
      {
        question: "How do you describe the intense preparation athletes undergo before a championship?",
        options: [
          "Athletes often undergo intense physical conditioning to prevent injuries.",
          "They play soccer every Saturday to stay healthy.",
          "Coaches analyze opponent strategies to gain a competitive edge.",
          "Winning is nice, but playing as a team is more important."
        ],
        correctIndex: 0,
        explanation: "'Intense physical conditioning' describes the rigorous preparation."
      },
      {
        question: "Which phrase indicates an environmentally conscious approach to fashion?",
        options: [
          "Investing in durable items is a more sustainable approach than buying disposable clothes.",
          "Finding a bargain is thrilling, especially during sales.",
          "The retail industry relies heavily on seasonal trends.",
          "I hate trying on new clothes at the mall."
        ],
        correctIndex: 0,
        explanation: "'Investing in durable items' and 'sustainable approach' indicate environmental consciousness."
      },
      {
        question: "What is the primary trait modern employers look for in candidates according to the advanced vocabulary?",
        options: [
          "Employers now seek candidates who can manage complex projects and adapt to new software.",
          "They look for candidates who come home with dirty hands.",
          "They want someone who has a job interview to become a nurse.",
          "They prefer people who only work from overseas."
        ],
        correctIndex: 0,
        explanation: "Managing complex projects and adapting to new software are key modern traits."
      },
      {
        question: "Which sentence explains the impact of remote work on office culture?",
        options: [
          "Instead of chatting by the water cooler, we hold virtual meetings.",
          "I want to be a teacher because I like helping children.",
          "My brother works as a mechanic and fixes cars every day.",
          "Everyone has different talents and goals."
        ],
        correctIndex: 0,
        explanation: "Moving from 'chatting by the water cooler' to 'virtual meetings' shows the cultural shift."
      },
      {
        question: "How do you describe sudden, unplanned buying decisions triggered by marketing?",
        options: [
          "The smell of freshly baked goods is used to stimulate appetite and trigger impulse purchases.",
          "We make a shopping list so we do not forget anything.",
          "I decided to buy a cheaper shirt and a pair of blue jeans.",
          "Understanding marketing tactics helps you stick to your budget."
        ],
        correctIndex: 0,
        explanation: "An 'impulse purchase' is a sudden, unplanned buying decision."
      },
      {
        question: "What phrase describes the importance of psychological strength in competitive environments?",
        options: [
          "Beyond physical strength, mental resilience is crucial during high-pressure championships.",
          "Athletes undergo physical conditioning to prevent injuries.",
          "Coaches analyze statistics and opponent strategies.",
          "The spirit of sportsmanship is what truly inspires the fans."
        ],
        correctIndex: 0,
        explanation: "'Mental resilience' refers directly to psychological strength."
      },
      {
        question: "Which sentence illustrates the negative consequences of 'fast fashion'?",
        options: [
          "We must consider the environmental impact of producing cheap, disposable garments.",
          "I found a beautiful jacket, but it was too expensive.",
          "I always look for discounts and sales.",
          "I recently discovered a vintage shop that sells high-quality goods."
        ],
        correctIndex: 0,
        explanation: "The environmental impact of producing cheap, disposable garments is the negative consequence."
      },
      {
        question: "How do coaches attempt to secure an advantage over rival teams?",
        options: [
          "Coaches analyze statistics and opponent strategies to gain a competitive edge.",
          "Athletes undergo intense physical conditioning.",
          "They rely on the spirit of sportsmanship.",
          "They score goals to win the game."
        ],
        correctIndex: 0,
        explanation: "Analyzing strategies 'to gain a competitive edge' means securing an advantage."
      }
    ],
    flashcards: [
      {
        english: "I prefer outdoor activities, like riding my bicycle in the park.",
        portuguese: "Eu prefiro atividades ao ar livre, como andar de bicicleta no parque.",
        levels: {
          A1: {
            en: "I prefer outdoor activities, like riding my bicycle in the park.",
            pt: "Eu prefiro atividades ao ar livre, como andar de bicicleta no parque."
          },
          B1: {
            en: "Engaging in creative hobbies can significantly boost your cognitive flexibility.",
            pt: "Envolver-se em hobbies criativos pode aumentar significativamente sua flexibilidade cognitiva."
          }
        }
      },
      {
        english: "Winning is nice, but playing as a team is more important.",
        portuguese: "Vencer é legal, mas jogar em equipe é mais importante.",
        levels: {
          A1: {
            en: "Winning is nice, but playing as a team is more important.",
            pt: "Vencer é legal, mas jogar em equipe é mais importante."
          },
          B1: {
            en: "Beyond physical strength, mental resilience is crucial during high-pressure championships.",
            pt: "Além da força física, a resiliência mental é crucial durante campeonatos de alta pressão."
          }
        }
      },
      {
        english: "We make a shopping list so we do not forget anything.",
        portuguese: "Nós fazemos uma lista de compras para não esquecer nada.",
        levels: {
          A1: {
            en: "We make a shopping list so we do not forget anything.",
            pt: "Nós fazemos uma lista de compras para não esquecer nada."
          },
          B1: {
            en: "Supermarkets are strategically designed to influence consumer behavior.",
            pt: "Supermercados são projetados estrategicamente para influenciar o comportamento do consumidor."
          }
        }
      },
      {
        english: "I decided to buy a cheaper shirt and a pair of blue jeans instead.",
        portuguese: "Decidi comprar uma camisa mais barata e uma calça jeans azul em vez disso.",
        levels: {
          A1: {
            en: "I decided to buy a cheaper shirt and a pair of blue jeans instead.",
            pt: "Decidi comprar uma camisa mais barata e uma calça jeans azul em vez disso."
          },
          B1: {
            en: "Investing in durable items is a more sustainable approach than buying disposable clothes.",
            pt: "Investir em itens duráveis é uma abordagem mais sustentável do que comprar roupas descartáveis."
          }
        }
      },
      {
        english: "My brother works as a mechanic and fixes cars every day.",
        portuguese: "Meu irmão trabalha como mecânico e conserta carros todos os dias.",
        levels: {
          A1: {
            en: "My brother works as a mechanic and fixes cars every day.",
            pt: "Meu irmão trabalha como mecânico e conserta carros todos os dias."
          },
          B1: {
            en: "Employers now seek candidates who can manage complex projects and adapt to new software quickly.",
            pt: "Os empregadores agora buscam candidatos que possam gerenciar projetos complexos e se adaptar a novos softwares rapidamente."
          }
        }
      },
      {
        english: "When it rains, we usually play board games together.",
        portuguese: "Quando chove, geralmente jogamos jogos de tabuleiro juntos.",
        levels: {
          A1: {
            en: "When it rains, we usually play board games together.",
            pt: "Quando chove, geralmente jogamos jogos de tabuleiro juntos."
          },
          B1: {
            en: "Personally, I find photography fascinating because it changes how you perceive the world.",
            pt: "Pessoalmente, acho a fotografia fascinante porque muda como você percebe o mundo."
          }
        }
      },
      {
        english: "We run a lot and try to score goals.",
        portuguese: "Nós corremos muito e tentamos marcar gols.",
        levels: {
          A1: {
            en: "We run a lot and try to score goals.",
            pt: "Nós corremos muito e tentamos marcar gols."
          },
          B1: {
            en: "Coaches analyze statistics and opponent strategies to gain a competitive edge.",
            pt: "Os técnicos analisam estatísticas e estratégias dos adversários para ganhar uma vantagem competitiva."
          }
        }
      },
      {
        english: "Finally, we wait in line at the cashier to pay for our groceries.",
        portuguese: "Finalmente, esperamos na fila do caixa para pagar por nossas compras.",
        levels: {
          A1: {
            en: "Finally, we wait in line at the cashier to pay for our groceries.",
            pt: "Finalmente, esperamos na fila do caixa para pagar por nossas compras."
          },
          B1: {
            en: "The smell of freshly baked goods is used to stimulate appetite and trigger impulse purchases.",
            pt: "O cheiro de produtos recém-assados é usado para estimular o apetite e provocar compras por impulso."
          }
        }
      },
      {
        english: "Saving money is important, so I always look for discounts and sales.",
        portuguese: "Economizar dinheiro é importante, então sempre procuro por descontos e promoções.",
        levels: {
          A1: {
            en: "Saving money is important, so I always look for discounts and sales.",
            pt: "Economizar dinheiro é importante, então sempre procuro por descontos e promoções."
          },
          B1: {
            en: "The retail industry relies heavily on seasonal trends to drive sales.",
            pt: "A indústria varejista depende fortemente das tendências sazonais para impulsionar as vendas."
          }
        }
      },
      {
        english: "Next week, my cousin has a job interview to become a nurse.",
        portuguese: "Na próxima semana, meu primo tem uma entrevista de emprego para se tornar enfermeiro.",
        levels: {
          A1: {
            en: "Next week, my cousin has a job interview to become a nurse.",
            pt: "Na próxima semana, meu primo tem uma entrevista de emprego para se tornar enfermeiro."
          },
          B1: {
            en: "Working remotely has also changed how we interact; instead of chatting by the water cooler, we hold virtual meetings.",
            pt: "Trabalhar remotamente também mudou a forma como interagimos; em vez de conversar no bebedouro, realizamos reuniões virtuais."
          }
        }
      }
    ]
  },
  "revisao-3": {
    quiz: [
      {
        question: "Which sentence best describes exploring a city's public spaces?",
        options: [
          "The central square has a beautiful fountain where children play.",
          "I use my smartphone every day to check the weather.",
          "I use Instagram to post pictures of my pets.",
          "My favorite animal is the dog because it is loyal."
        ],
        correctIndex: 0,
        explanation: "A central square with a fountain is a classic example of a city's public space."
      },
      {
        question: "What phrase indicates a problem with public transportation logistics?",
        options: [
          "The only problem is that the bus station is very far from my house.",
          "There is a large library with thousands of books.",
          "I always look for discounts and sales.",
          "We usually play board games together."
        ],
        correctIndex: 0,
        explanation: "A bus station being very far away is a logistical problem."
      },
      {
        question: "How do you describe an animal's funny behavior in a zoo?",
        options: [
          "The monkeys were very funny as they jumped from tree to tree.",
          "Some people prefer cats because they are quiet and clean.",
          "My neighbor has a big dog that likes to bark.",
          "They use flour, eggs, sugar, and cocoa powder."
        ],
        correctIndex: 0,
        explanation: "Monkeys jumping from tree to tree is a funny animal behavior."
      },
      {
        question: "Which phrase describes a family cooking routine?",
        options: [
          "Every Friday night, my mother and I bake a chocolate cake.",
          "I use my smartphone every day to send messages.",
          "I scroll through my feed for about thirty minutes.",
          "We wait in line at the cashier to pay."
        ],
        correctIndex: 0,
        explanation: "Baking a cake every Friday night is a cooking routine."
      },
      {
        question: "What is the final step described when making a cake?",
        options: [
          "Then, we put it in the oven for forty minutes.",
          "First, we mix everything in a big bowl.",
          "We use flour, eggs, sugar, and cocoa powder.",
          "The kitchen smells delicious when the cake is ready."
        ],
        correctIndex: 0,
        explanation: "Putting the mixture in the oven is the action step before baking is complete."
      },
      {
        question: "Which sentence shows a heavy reliance on a modern device?",
        options: [
          "I cannot imagine life without my mobile phone.",
          "My father uses his laptop to work from home.",
          "It is important to remember to charge our devices at night.",
          "Sometimes the internet connection is very slow."
        ],
        correctIndex: 0,
        explanation: "'Cannot imagine life without' shows heavy reliance."
      },
      {
        question: "What phrase describes a common internet issue?",
        options: [
          "Sometimes, the internet connection is very slow, and we cannot watch videos.",
          "I use my smartphone to check the weather.",
          "It is important to charge our devices at night.",
          "I like to leave nice comments on my friends' photos."
        ],
        correctIndex: 0,
        explanation: "A slow internet connection preventing video streaming is a common issue."
      },
      {
        question: "How do you explain a healthy boundary regarding social media?",
        options: [
          "I try not to spend too much time online because it can be bad for my eyes.",
          "I use Instagram to post pictures of my vacations.",
          "Every evening, I scroll through my feed.",
          "I like to leave nice comments on photos."
        ],
        correctIndex: 0,
        explanation: "Limiting online time to protect your eyes is a healthy boundary."
      },
      {
        question: "Which sentence expresses a preference for a calm pet?",
        options: [
          "Some people prefer cats because they are quiet and clean.",
          "My favorite animal is the dog because it is very loyal.",
          "The monkeys were very funny.",
          "We went to the zoo and saw lions and elephants."
        ],
        correctIndex: 0,
        explanation: "Preferring cats because they are quiet and clean indicates a preference for a calm pet."
      },
      {
        question: "What phrase is used to conclude that physical reality is more important than the digital world?",
        options: [
          "Real life is outside the screen.",
          "I try not to spend too much time online.",
          "Social media is a fun way to connect with friends.",
          "I use my smartphone every day to send messages."
        ],
        correctIndex: 0,
        explanation: "'Real life is outside the screen' is a direct conclusion about the physical world's importance."
      }
    ],
    quizLevel2: [
      {
        question: "Which sentence best captures the struggle of moving around a large city?",
        options: [
          "Navigating a busy metropolis requires patience and a good sense of direction.",
          "Exploring public places on foot is tiring, but very rewarding.",
          "I had to walk miles around the city center because my flight was delayed.",
          "I visited an art exhibition downtown that was truly captivating."
        ],
        correctIndex: 0,
        explanation: "The struggle of moving around is captured by 'navigating a busy metropolis requires patience'."
      },
      {
        question: "How do you describe the urgent need to protect animal habitats and species?",
        options: [
          "Wildlife conservation is essential for maintaining our planet's biodiversity.",
          "They had a fascinating exhibit about how sharks hunt softly and silently.",
          "Since the industrial revolution, the timeline of species extinction has accelerated.",
          "Educating the public about these majestic creatures is the first step."
        ],
        correctIndex: 0,
        explanation: "Protecting habitats and species is summarized by 'wildlife conservation is essential'."
      },
      {
        question: "What phrase illustrates the precision required in advanced cooking?",
        options: [
          "Preparing a complex dish requires precise timing and an understanding of how different flavors interact.",
          "Gastronomy is a beautiful reflection of a region's culture and history.",
          "Authentic recipes are often passed down through generations.",
          "Cooking isn't just about feeding people; it is an expression of love."
        ],
        correctIndex: 0,
        explanation: "'Precise timing and an understanding of flavors' illustrates the precision needed."
      },
      {
        question: "Which sentence highlights a major danger of downloading unknown software?",
        options: [
          "Many users unintentionally trap their devices with malware by downloading unverified software.",
          "As we become more dependent on digital tools, cybersecurity is increasingly critical.",
          "We often misplace our mobile devices, risking the exposure of sensitive data.",
          "It is vital to use strong passwords and enable two-factor authentication."
        ],
        correctIndex: 0,
        explanation: "Trapping devices with malware is the direct danger of unverified software."
      },
      {
        question: "How do you describe the deceptive nature of social media comparisons?",
        options: [
          "It is easy to mindlessly scroll, comparing your behind-the-scenes to someone else's highlight reel.",
          "Social media platforms have drastically altered how we perceive reality.",
          "An embarrassing mistake can go viral overnight, permanently damaging someone's reputation.",
          "Finding a healthy balance between digital engagement and authentic living is a challenge."
        ],
        correctIndex: 0,
        explanation: "Comparing 'behind-the-scenes' to a 'highlight reel' captures the deceptive comparison."
      },
      {
        question: "Which phrase indicates that a digital mistake can have long-lasting consequences?",
        options: [
          "An embarrassing mistake can go viral overnight, permanently damaging someone's reputation.",
          "We often misplace our mobile devices, risking the exposure of sensitive personal data.",
          "Many users unintentionally trap their devices with malware.",
          "Social media platforms have drastically altered how we perceive reality."
        ],
        correctIndex: 0,
        explanation: "'Permanently damaging someone's reputation' shows the long-lasting consequences."
      },
      {
        question: "What sentence describes the core goal of modern cybersecurity?",
        options: [
          "Educating yourself about these digital threats can prevent severe privacy breaches.",
          "It is vital to use strong passwords and enable two-factor authentication.",
          "As we become more dependent on digital tools, cybersecurity is increasingly critical.",
          "We often misplace our mobile devices."
        ],
        correctIndex: 0,
        explanation: "Preventing 'severe privacy breaches' is the core goal of these actions."
      },
      {
        question: "How do you explain that a recipe changes slightly over time?",
        options: [
          "Authentic recipes are often passed down through generations, evolving slightly with each new cook.",
          "Gastronomy is a beautiful reflection of a region's culture and history.",
          "Preparing a complex dish requires precise timing.",
          "Baking is more like chemistry because a tiny mistake can ruin the texture."
        ],
        correctIndex: 0,
        explanation: "'Evolving slightly with each new cook' explains the gradual change of recipes."
      },
      {
        question: "Which phrase emphasizes that walking around a city provides a satisfying experience despite the effort?",
        options: [
          "Exploring public places on foot is tiring, but very rewarding.",
          "Navigating a busy metropolis requires patience and a good sense of direction.",
          "To get there, I had to walk miles around the city center.",
          "I visited an art exhibition downtown that was truly captivating."
        ],
        correctIndex: 0,
        explanation: "'Tiring, but very rewarding' captures the effort and satisfaction."
      },
      {
        question: "What is described as the primary solution to save animals from disappearing forever?",
        options: [
          "Educating the public about these majestic creatures is the first step toward saving them from extinction.",
          "Wildlife conservation is essential for maintaining our planet's biodiversity.",
          "The timeline of species extinction has accelerated alarmingly.",
          "An aquarium focuses on rescuing marine animals."
        ],
        correctIndex: 0,
        explanation: "Educating the public is described as the 'first step toward saving them'."
      }
    ],
    flashcards: [
      {
        english: "The central square has a beautiful fountain where children play in the afternoon.",
        portuguese: "A praça central tem uma fonte linda onde as crianças brincam à tarde.",
        levels: {
          A1: {
            en: "The central square has a beautiful fountain where children play in the afternoon.",
            pt: "A praça central tem uma fonte linda onde as crianças brincam à tarde."
          },
          B1: {
            en: "Navigating a busy metropolis requires patience and a good sense of direction.",
            pt: "Navegar por uma metrópole movimentada exige paciência e um bom senso de direção."
          }
        }
      },
      {
        english: "My favorite animal is the dog because it is very loyal and friendly.",
        portuguese: "Meu animal favorito é o cachorro porque ele é muito leal e amigável.",
        levels: {
          A1: {
            en: "My favorite animal is the dog because it is very loyal and friendly.",
            pt: "Meu animal favorito é o cachorro porque ele é muito leal e amigável."
          },
          B1: {
            en: "Wildlife conservation is essential for maintaining our planet's biodiversity.",
            pt: "A conservação da vida selvagem é essencial para manter a biodiversidade do nosso planeta."
          }
        }
      },
      {
        english: "Every Friday night, my mother and I bake a chocolate cake.",
        portuguese: "Toda sexta-feira à noite, minha mãe e eu assamos um bolo de chocolate.",
        levels: {
          A1: {
            en: "Every Friday night, my mother and I bake a chocolate cake.",
            pt: "Toda sexta-feira à noite, minha mãe e eu assamos um bolo de chocolate."
          },
          B1: {
            en: "Preparing a complex dish requires precise timing and an understanding of how different flavors interact.",
            pt: "Preparar um prato complexo exige sincronismo preciso e compreensão de como diferentes sabores interagem."
          }
        }
      },
      {
        english: "I use my smartphone every day to send messages and check the weather.",
        portuguese: "Eu uso meu smartphone todos os dias para enviar mensagens e verificar o clima.",
        levels: {
          A1: {
            en: "I use my smartphone every day to send messages and check the weather.",
            pt: "Eu uso meu smartphone todos os dias para enviar mensagens e verificar o clima."
          },
          B1: {
            en: "As we become more dependent on digital tools, cybersecurity is increasingly critical.",
            pt: "À medida que nos tornamos mais dependentes de ferramentas digitais, a cibersegurança se torna cada vez mais crítica."
          }
        }
      },
      {
        english: "I try not to spend too much time online because it can be bad for my eyes.",
        portuguese: "Tento não passar muito tempo online porque pode fazer mal aos meus olhos.",
        levels: {
          A1: {
            en: "I try not to spend too much time online because it can be bad for my eyes.",
            pt: "Tento não passar muito tempo online porque pode fazer mal aos meus olhos."
          },
          B1: {
            en: "Finding a healthy balance between digital engagement and authentic living is the modern challenge.",
            pt: "Encontrar um equilíbrio saudável entre engajamento digital e vivência autêntica é o desafio moderno."
          }
        }
      },
      {
        english: "The only problem is that the bus station is very far from my house.",
        portuguese: "O único problema é que a rodoviária fica muito longe da minha casa.",
        levels: {
          A1: {
            en: "The only problem is that the bus station is very far from my house.",
            pt: "O único problema é que a rodoviária fica muito longe da minha casa."
          },
          B1: {
            en: "Exploring public places on foot is tiring, but very rewarding.",
            pt: "Explorar lugares públicos a pé é cansativo, mas muito gratificante."
          }
        }
      },
      {
        english: "The monkeys were very funny as they jumped from tree to tree.",
        portuguese: "Os macacos eram muito engraçados enquanto pulavam de árvore em árvore.",
        levels: {
          A1: {
            en: "The monkeys were very funny as they jumped from tree to tree.",
            pt: "Os macacos eram muito engraçados enquanto pulavam de árvore em árvore."
          },
          B1: {
            en: "Educating the public about these majestic creatures is the first step toward saving them from extinction.",
            pt: "Educar o público sobre essas criaturas majestosas é o primeiro passo para salvá-las da extinção."
          }
        }
      },
      {
        english: "First, we mix everything in a big bowl. Then, we put it in the oven.",
        portuguese: "Primeiro, misturamos tudo em uma tigela grande. Depois, colocamos no forno.",
        levels: {
          A1: {
            en: "First, we mix everything in a big bowl. Then, we put it in the oven.",
            pt: "Primeiro, misturamos tudo em uma tigela grande. Depois, colocamos no forno."
          },
          B1: {
            en: "Baking is more like chemistry because a tiny mistake in measurements can ruin the texture.",
            pt: "Assar é mais parecido com química, pois um pequeno erro nas medidas pode estragar a textura."
          }
        }
      },
      {
        english: "Sometimes, the internet connection is very slow, and we cannot watch videos.",
        portuguese: "Às vezes, a conexão com a internet é muito lenta e não conseguimos assistir a vídeos.",
        levels: {
          A1: {
            en: "Sometimes, the internet connection is very slow, and we cannot watch videos.",
            pt: "Às vezes, a conexão com a internet é muito lenta e não conseguimos assistir a vídeos."
          },
          B1: {
            en: "Many users unintentionally trap their devices with malware by downloading unverified software.",
            pt: "Muitos usuários prendem seus dispositivos acidentalmente em armadilhas de malware ao baixar softwares não verificados."
          }
        }
      },
      {
        english: "Every evening, I scroll through my feed for about thirty minutes.",
        portuguese: "Toda noite, eu rolo o meu feed por cerca de trinta minutos.",
        levels: {
          A1: {
            en: "Every evening, I scroll through my feed for about thirty minutes.",
            pt: "Toda noite, eu rolo o meu feed por cerca de trinta minutos."
          },
          B1: {
            en: "It is easy to mindlessly scroll through a timeline, comparing your behind-the-scenes to someone else's highlight reel.",
            pt: "É fácil rolar distraidamente por uma linha do tempo, comparando seus bastidores com os melhores momentos de outra pessoa."
          }
        }
      }
    ]
  }
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Pre-process quizzes to shuffle options
for (const reviewId in reviewsData) {
  const rev = reviewsData[reviewId];
  const quizzes = [...rev.quiz, ...rev.quizLevel2];
  for (const q of quizzes) {
    const correctOpt = q.options[q.correctIndex];
    shuffle(q.options);
    q.correctIndex = q.options.indexOf(correctOpt);
  }
}

let content = fs.readFileSync('../data/reviews.ts', 'utf8');

for (const reviewId in reviewsData) {
  const data = reviewsData[reviewId];
  const startIndex = content.indexOf(`id: "${reviewId}"`);
  if (startIndex === -1) continue;
  
  let nextId = content.indexOf('id: "revisao-', startIndex + 10);
  if (nextId === -1) nextId = content.length;
  
  const section = content.slice(startIndex, nextId);
  
  // Replace quiz
  const quizRegex = /quiz:\s*\[[\s\S]*?\],(?=\s*quizLevel2)/;
  const newQuizStr = `quiz: ${JSON.stringify(data.quiz, null, 4)},`;
  let newSection = section.replace(quizRegex, newQuizStr);
  
  // Replace quizLevel2
  const quizL2Regex = /quizLevel2:\s*\[[\s\S]*?\],(?=\s*flashcards)/;
  const newQuizL2Str = `quizLevel2: ${JSON.stringify(data.quizLevel2, null, 4)},`;
  newSection = newSection.replace(quizL2Regex, newQuizL2Str);
  
  // Replace flashcards
  const flashcardsRegex = /flashcards:\s*\[[\s\S]*?\](?=\s*\n\s*\}(,|\n))/;
  const newFlashcardsStr = `flashcards: ${JSON.stringify(data.flashcards, null, 4)}`;
  newSection = newSection.replace(flashcardsRegex, newFlashcardsStr);
  
  content = content.slice(0, startIndex) + newSection + content.slice(nextId);
}

fs.writeFileSync('../data/reviews.ts', content);
console.log("Reviews updated successfully!");
