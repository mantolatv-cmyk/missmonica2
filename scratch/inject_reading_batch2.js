const fs = require('fs');

const readingDataBatch2 = {
  "compras": {
    level1: {
      textEn: "I love shopping for new clothes, but I hate trying them on. Usually, I go to the mall on Saturday mornings because it is quiet. Last week, I found a beautiful jacket, but it was too expensive. I decided to buy a cheaper shirt and a pair of blue jeans instead. Saving money is important, so I always look for discounts and sales.",
      textPt: "Eu amo comprar roupas novas, mas odeio prová-las. Geralmente, vou ao shopping nas manhãs de sábado porque é tranquilo. Na semana passada, encontrei uma jaqueta linda, mas era muito cara. Decidi comprar uma camisa mais barata e uma calça jeans azul em vez disso. Economizar dinheiro é importante, então sempre procuro descontos e promoções.",
      questions: [
        {
          question: "Why does the author prefer to go to the mall on Saturday mornings?",
          options: ["Because the mall is not crowded and quiet", "Because that is when the new clothes arrive", "Because they work on Saturday afternoons", "Because the discounts are better in the morning"],
          correctIndex: 0,
          explanation: "They go on Saturday mornings 'because it is quiet'."
        },
        {
          question: "What does the author dislike about shopping?",
          options: ["Trying on the new clothes", "Finding a parking spot", "Walking in the mall", "Paying for the items"],
          correctIndex: 0,
          explanation: "The text says 'I hate trying them on'."
        },
        {
          question: "Why didn't the author buy the jacket?",
          options: ["It cost too much money", "It was the wrong color", "It did not fit well", "They preferred the shirt"],
          correctIndex: 0,
          explanation: "They didn't buy the jacket because 'it was too expensive'."
        },
        {
          question: "What did the author ultimately purchase?",
          options: ["A shirt and blue jeans", "Only a pair of blue jeans", "A jacket and a shirt", "Shoes and a shirt"],
          correctIndex: 0,
          explanation: "They decided to buy 'a cheaper shirt and a pair of blue jeans instead'."
        },
        {
          question: "What is the author's strategy for saving money?",
          options: ["Looking for discounts and sales", "Only shopping on Saturdays", "Never buying jackets", "Working at the mall"],
          correctIndex: 0,
          explanation: "They say 'I always look for discounts and sales'."
        }
      ]
    },
    level2: {
      textEn: "The retail industry relies heavily on seasonal trends to drive sales. Consumers are encouraged to update their wardrobes frequently, which leads to the phenomenon of fast fashion. Although finding a bargain is thrilling, we must consider the environmental impact of producing cheap garments. I recently discovered a vintage shop that sells high-quality leather goods. Investing in durable items is a more sustainable approach than constantly buying disposable clothes.",
      textPt: "O setor de varejo depende fortemente das tendências sazonais para impulsionar as vendas. Os consumidores são incentivados a atualizar seus guarda-roupas com frequência, o que leva ao fenômeno da moda rápida. Embora encontrar uma pechincha seja emocionante, devemos considerar o impacto ambiental da produção de peças baratas. Descobri recentemente um brechó que vende artigos de couro de alta qualidade. Investir em itens duráveis é uma abordagem mais sustentável do que comprar roupas descartáveis constantemente.",
      questions: [
        {
          question: "According to the text, what drives sales in the retail industry?",
          options: ["Seasonal trends and encouraging frequent updates", "Selling only high-quality leather", "Keeping prices as high as possible", "Selling vintage items exclusively"],
          correctIndex: 0,
          explanation: "The industry relies on 'seasonal trends' and encourages consumers to 'update their wardrobes frequently'."
        },
        {
          question: "What does the author think about the phenomenon of 'fast fashion'?",
          options: ["It has a negative environmental impact", "It is the best way to find high-quality goods", "It is a sustainable approach to shopping", "It encourages people to buy leather goods"],
          correctIndex: 0,
          explanation: "They mention we must 'consider the environmental impact of producing cheap garments'."
        },
        {
          question: "What does the word 'thrilling' most likely mean here?",
          options: ["Exciting and enjoyable", "Boring and repetitive", "Dangerous and scary", "Sad and depressing"],
          correctIndex: 0,
          explanation: "Finding a bargain is described as thrilling, meaning it's an exciting feeling."
        },
        {
          question: "Why does the author mention the vintage shop?",
          options: ["As an example of a place to buy durable, sustainable items", "Because they sell fast fashion there", "To complain about their high prices", "Because they only sell cheap garments"],
          correctIndex: 0,
          explanation: "They mention finding high-quality leather goods there, as part of 'investing in durable items'."
        },
        {
          question: "What is presented as a more sustainable approach to shopping?",
          options: ["Investing in durable, high-quality items", "Buying cheap clothes constantly", "Updating wardrobes frequently", "Shopping exclusively at the mall"],
          correctIndex: 0,
          explanation: "The text concludes 'Investing in durable items is a more sustainable approach'."
        }
      ]
    }
  },
  "profissoes": {
    level1: {
      textEn: "Choosing a career is a big decision for young people. I want to be a teacher because I like helping children learn new things. My brother works as a mechanic and fixes cars every day. He comes home with dirty hands, but he makes good money. Next week, my cousin has a job interview to become a nurse at the hospital. Everyone has different talents and goals.",
      textPt: "Escolher uma carreira é uma grande decisão para os jovens. Eu quero ser professor porque gosto de ajudar as crianças a aprender coisas novas. Meu irmão trabalha como mecânico e conserta carros todos os dias. Ele chega em casa com as mãos sujas, mas ganha um bom dinheiro. Na próxima semana, meu primo tem uma entrevista de emprego para se tornar enfermeiro no hospital. Cada um tem talentos e objetivos diferentes.",
      questions: [
        {
          question: "Why does the author want to be a teacher?",
          options: ["Because they enjoy helping children learn", "Because it pays a lot of money", "Because they want to work in a hospital", "Because they like working with their hands"],
          correctIndex: 0,
          explanation: "They want to be a teacher 'because I like helping children learn new things'."
        },
        {
          question: "What is the brother's profession?",
          options: ["Mechanic", "Teacher", "Nurse", "Driver"],
          correctIndex: 0,
          explanation: "The text says 'My brother works as a mechanic'."
        },
        {
          question: "What is a negative aspect of the brother's job mentioned in the text?",
          options: ["He gets his hands dirty", "He makes very little money", "He has to work with children", "He has to do job interviews every week"],
          correctIndex: 0,
          explanation: "The text mentions 'He comes home with dirty hands'."
        },
        {
          question: "What is the cousin preparing for?",
          options: ["A job interview to be a nurse", "A test to become a teacher", "Buying a new car", "Fixing cars at the hospital"],
          correctIndex: 0,
          explanation: "The cousin 'has a job interview to become a nurse'."
        },
        {
          question: "What is the main conclusion of the text?",
          options: ["People have different talents and goals", "Being a teacher is the best job", "Mechanics make the most money", "It is easy to choose a career"],
          correctIndex: 0,
          explanation: "The text concludes: 'Everyone has different talents and goals.'"
        }
      ]
    },
    level2: {
      textEn: "The modern workplace is evolving rapidly due to technological advancements. Employers now seek candidates who can manage complex projects and adapt to new software quickly. I recently interviewed a candidate from overseas, and their diverse perspective was an incredible ingredient for our team. Working remotely has also changed how we interact; instead of chatting by the water cooler, we hold virtual meetings. Flexibility is now considered a key professional skill.",
      textPt: "O local de trabalho moderno está evoluindo rapidamente devido aos avanços tecnológicos. Os empregadores agora buscam candidatos que possam gerenciar projetos complexos e se adaptar a novos softwares rapidamente. Recentemente, entrevistei um candidato do exterior, e sua perspectiva diversa foi um ingrediente incrível para nossa equipe. Trabalhar remotamente também mudou a forma como interagimos; em vez de conversar no bebedouro, realizamos reuniões virtuais. A flexibilidade agora é considerada uma habilidade profissional fundamental.",
      questions: [
        {
          question: "What is causing the modern workplace to evolve rapidly?",
          options: ["Technological advancements", "A lack of candidates", "People working from overseas", "Too many virtual meetings"],
          correctIndex: 0,
          explanation: "The text says it is evolving rapidly 'due to technological advancements'."
        },
        {
          question: "What skills do employers currently value in candidates?",
          options: ["The ability to manage projects and adapt quickly", "The ability to fix computers", "The ability to work without software", "The ability to travel overseas often"],
          correctIndex: 0,
          explanation: "They seek candidates who 'can manage complex projects and adapt to new software quickly'."
        },
        {
          question: "Why was the overseas candidate considered valuable to the team?",
          options: ["They brought a diverse perspective", "They were willing to work for less money", "They were an expert in building water coolers", "They did not want to work remotely"],
          correctIndex: 0,
          explanation: "Their 'diverse perspective was an incredible ingredient for our team'."
        },
        {
          question: "How has remote work changed employee interactions?",
          options: ["Interactions happen through virtual meetings instead of casual office chats", "Employees no longer interact at all", "Employees meet at the water cooler more often", "All interactions are now done overseas"],
          correctIndex: 0,
          explanation: "Instead of chatting by the water cooler, 'we hold virtual meetings'."
        },
        {
          question: "What is the final point made about professional skills?",
          options: ["Flexibility is now a key skill", "Knowing how to use a water cooler is important", "Interviewing is the hardest skill", "Technology is replacing all skills"],
          correctIndex: 0,
          explanation: "The text concludes 'Flexibility is now considered a key professional skill'."
        }
      ]
    }
  },
  "lugares": {
    level1: {
      textEn: "My town is small, but it has many interesting public places. The central square has a beautiful fountain where children play in the afternoon. Next to the square, there is a large library with thousands of books. On Fridays, I usually go to the movie theater with my friends. The only problem is that the bus station is very far from my house. We have to walk a lot to get there.",
      textPt: "Minha cidade é pequena, mas tem muitos lugares públicos interessantes. A praça central tem uma fonte linda onde as crianças brincam à tarde. Ao lado da praça, há uma grande biblioteca com milhares de livros. Às sextas-feiras, eu geralmente vou ao cinema com meus amigos. O único problema é que a rodoviária fica muito longe da minha casa. Temos que andar muito para chegar lá.",
      questions: [
        {
          question: "What can be found in the central square?",
          options: ["A beautiful fountain", "A large bus station", "A movie theater", "Thousands of books"],
          correctIndex: 0,
          explanation: "The text mentions 'The central square has a beautiful fountain'."
        },
        {
          question: "Where is the large library located?",
          options: ["Next to the central square", "Far from the author's house", "Inside the movie theater", "Next to the bus station"],
          correctIndex: 0,
          explanation: "The text says 'Next to the square, there is a large library'."
        },
        {
          question: "When does the author usually visit the movie theater?",
          options: ["On Fridays", "Every afternoon", "On weekends", "In the morning"],
          correctIndex: 0,
          explanation: "They say 'On Fridays, I usually go to the movie theater'."
        },
        {
          question: "What is the negative aspect of the town mentioned by the author?",
          options: ["The bus station is too far from their house", "The library doesn't have enough books", "The town is too noisy", "The fountain is broken"],
          correctIndex: 0,
          explanation: "The only problem is 'that the bus station is very far from my house'."
        },
        {
          question: "How do they reach the bus station?",
          options: ["By walking a lot", "By taking a taxi", "By riding a bicycle", "By driving a car"],
          correctIndex: 0,
          explanation: "The text states 'We have to walk a lot to get there'."
        }
      ]
    },
    level2: {
      textEn: "Navigating a busy metropolis requires patience and a good sense of direction. When traveling, I try not to ignore the architectural details of historical buildings. Last month, I visited an art exhibition downtown that was truly captivating. To get there, I had to walk miles around the city center because my flight was delayed, and the trains were not running precisely on schedule. Exploring public places on foot is tiring, but very rewarding.",
      textPt: "Navegar por uma metrópole movimentada exige paciência e um bom senso de direção. Ao viajar, tento não ignorar os detalhes arquitetônicos de edifícios históricos. No mês passado, visitei uma exposição de arte no centro da cidade que foi verdadeiramente cativante. Para chegar lá, tive que caminhar milhas ao redor do centro porque meu voo atrasou e os trens não estavam operando precisamente no horário. Explorar lugares públicos a pé é cansativo, mas muito gratificante.",
      questions: [
        {
          question: "What does the author believe is necessary for navigating a large city?",
          options: ["Patience and a good sense of direction", "A fast car and a map", "Living downtown", "Taking a flight"],
          correctIndex: 0,
          explanation: "Navigating a busy metropolis requires 'patience and a good sense of direction'."
        },
        {
          question: "What does the author try to pay attention to while traveling?",
          options: ["The architectural details of historical buildings", "The delays of trains", "The cost of flights", "The number of miles they walk"],
          correctIndex: 0,
          explanation: "They try not to ignore 'the architectural details of historical buildings'."
        },
        {
          question: "Why did the author have to walk miles around the city center?",
          options: ["Because the flight was delayed and trains weren't on time", "Because they wanted to exercise", "Because they couldn't afford a taxi", "Because the exhibition was closed"],
          correctIndex: 0,
          explanation: "They walked because 'my flight was delayed, and the trains were not running precisely on schedule'."
        },
        {
          question: "What does the word 'captivating' mean in the context of the exhibition?",
          options: ["Fascinating and capable of holding attention", "Boring and difficult to understand", "Expensive and crowded", "Historical and ancient"],
          correctIndex: 0,
          explanation: "A captivating exhibition is one that is fascinating and holds your attention."
        },
        {
          question: "How does the author summarize the experience of exploring on foot?",
          options: ["It is exhausting but ultimately rewarding", "It is a waste of time and energy", "It is only good if trains are on time", "It is better to ignore public places"],
          correctIndex: 0,
          explanation: "They state it is 'tiring, but very rewarding'."
        }
      ]
    }
  },
  "animais": {
    level1: {
      textEn: "Animals are fascinating creatures. My favorite animal is the dog because it is very loyal and friendly. My neighbor has a big dog that likes to bark at the mailman. Some people prefer cats because they are quiet and clean. Last summer, we went to the zoo and saw lions, elephants, and monkeys. The monkeys were very funny as they jumped from tree to tree.",
      textPt: "Animais são criaturas fascinantes. Meu animal favorito é o cachorro porque ele é muito leal e amigável. Meu vizinho tem um cachorro grande que gosta de latir para o carteiro. Algumas pessoas preferem gatos porque são quietos e limpos. No verão passado, fomos ao zoológico e vimos leões, elefantes e macacos. Os macacos eram muito engraçados enquanto pulavam de árvore em árvore.",
      questions: [
        {
          question: "Why does the author favor dogs?",
          options: ["Because they are loyal and friendly", "Because they are quiet and clean", "Because they jump from trees", "Because they bark a lot"],
          correctIndex: 0,
          explanation: "The author favors dogs 'because it is very loyal and friendly'."
        },
        {
          question: "Who does the neighbor's dog bark at?",
          options: ["The mailman", "The cats", "The author", "The monkeys"],
          correctIndex: 0,
          explanation: "The dog 'likes to bark at the mailman'."
        },
        {
          question: "According to the text, why do some people prefer cats?",
          options: ["Because they are quiet and clean", "Because they are loyal and friendly", "Because they are very big", "Because they like to bark"],
          correctIndex: 0,
          explanation: "People prefer cats 'because they are quiet and clean'."
        },
        {
          question: "Where did the author see lions and elephants?",
          options: ["At the zoo", "In the neighbor's yard", "At the park", "In the forest"],
          correctIndex: 0,
          explanation: "They went to the zoo and saw lions, elephants, etc."
        },
        {
          question: "What made the monkeys funny to watch?",
          options: ["They were jumping from tree to tree", "They were barking at the mailman", "They were sleeping all day", "They were eating bananas"],
          correctIndex: 0,
          explanation: "The monkeys were funny 'as they jumped from tree to tree'."
        }
      ]
    },
    level2: {
      textEn: "Wildlife conservation is essential for maintaining our planet's biodiversity. Since the industrial revolution, the timeline of species extinction has accelerated alarmingly. Last month, I visited an aquarium that focuses on rescuing marine animals. They had a fascinating exhibit about how sharks hunt softly and silently in the dark. Educating the public about these majestic creatures is the first step toward saving them from extinction.",
      textPt: "A conservação da vida selvagem é essencial para manter a biodiversidade do nosso planeta. Desde a revolução industrial, a linha do tempo da extinção de espécies acelerou de forma alarmante. No mês passado, visitei um aquário que foca no resgate de animais marinhos. Eles tinham uma exposição fascinante sobre como os tubarões caçam suave e silenciosamente no escuro. Educar o público sobre essas criaturas majestosas é o primeiro passo para salvá-las da extinção.",
      questions: [
        {
          question: "What is the primary reason given for wildlife conservation?",
          options: ["To maintain the planet's biodiversity", "To build more aquariums", "To prevent sharks from hunting", "To speed up species extinction"],
          correctIndex: 0,
          explanation: "It is 'essential for maintaining our planet's biodiversity'."
        },
        {
          question: "What has happened to species extinction since the industrial revolution?",
          options: ["It has accelerated alarmingly", "It has stopped completely", "It has slowed down", "It has remained exactly the same"],
          correctIndex: 0,
          explanation: "The timeline of species extinction 'has accelerated alarmingly'."
        },
        {
          question: "What was the focus of the aquarium the author visited?",
          options: ["Rescuing marine animals", "Training sharks to hunt", "Breeding lions and elephants", "Selling exotic fish"],
          correctIndex: 0,
          explanation: "The aquarium 'focuses on rescuing marine animals'."
        },
        {
          question: "How do sharks hunt, according to the aquarium exhibit?",
          options: ["Softly and silently in the dark", "Loudly and aggressively in the light", "By barking like dogs", "By jumping from rocks"],
          correctIndex: 0,
          explanation: "They 'hunt softly and silently in the dark'."
        },
        {
          question: "What is considered the first step toward saving these creatures?",
          options: ["Educating the public about them", "Stopping the industrial revolution", "Closing down aquariums", "Feeding them more often"],
          correctIndex: 0,
          explanation: "'Educating the public about these majestic creatures is the first step'."
        }
      ]
    }
  }
};

function injectReadingData(content, data) {
  let newContent = content;
  for (const [id, reading] of Object.entries(data)) {
    const scenarioStart = newContent.indexOf('id: "' + id + '"');
    if (scenarioStart === -1) continue;
    
    let nextId = newContent.indexOf("id: ", scenarioStart + 10);
    if (nextId === -1) nextId = newContent.length;
    
    if (newContent.indexOf("reading:", scenarioStart) !== -1 && newContent.indexOf("reading:", scenarioStart) < nextId) {
       console.log("Already has reading for " + id);
       continue;
    }

    const searchString = "available: true,";
    const insertPos = newContent.indexOf(searchString, scenarioStart);
    
    if (insertPos !== -1) {
      const readingStr = 'reading: ' + JSON.stringify(reading, null, 4) + ',\\n    ';
      newContent = newContent.slice(0, insertPos + searchString.length) + '\\n    ' + readingStr + newContent.slice(insertPos + searchString.length);
    }
  }
  return newContent;
}

const file2 = '../data/scenarios2.ts';
let c2 = fs.readFileSync(file2, 'utf8');

for (const sc in readingDataBatch2) {
  for (const lvl in readingDataBatch2[sc]) {
    for (let q of readingDataBatch2[sc][lvl].questions) {
      let correctOpt = q.options[q.correctIndex];
      for (let i = q.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
      }
      q.correctIndex = q.options.indexOf(correctOpt);
    }
  }
}

// Notice I had '\\n' in my inject string which should be '\n'
// I'll fix that.
function injectReadingDataCorrected(content, data) {
  let newContent = content;
  for (const [id, reading] of Object.entries(data)) {
    const scenarioStart = newContent.indexOf('id: "' + id + '"');
    if (scenarioStart === -1) continue;
    
    let nextId = newContent.indexOf("id: ", scenarioStart + 10);
    if (nextId === -1) nextId = newContent.length;
    
    if (newContent.indexOf("reading:", scenarioStart) !== -1 && newContent.indexOf("reading:", scenarioStart) < nextId) {
       console.log("Already has reading for " + id);
       continue;
    }

    const searchString = "available: true,";
    const insertPos = newContent.indexOf(searchString, scenarioStart);
    
    if (insertPos !== -1) {
      const readingStr = 'reading: ' + JSON.stringify(reading, null, 4) + ',\n    ';
      newContent = newContent.slice(0, insertPos + searchString.length) + '\n    ' + readingStr + newContent.slice(insertPos + searchString.length);
    }
  }
  return newContent;
}

fs.writeFileSync(file2, injectReadingDataCorrected(c2, readingDataBatch2));
console.log("Batch 2 injected.");
