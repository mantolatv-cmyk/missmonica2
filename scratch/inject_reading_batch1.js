const fs = require('fs');

const readingDataBatch1 = {
  "casa": {
    level1: {
      textEn: "Keeping a house clean is a daily job. In the morning, I make my bed and open the windows. After breakfast, I wash the dishes and clean the table. On weekends, I usually sweep the floor and take out the trash. I don't like doing the laundry, but I love organizing my bookshelf. A tidy home makes me feel relaxed.",
      textPt: "Manter uma casa limpa é um trabalho diário. De manhã, eu arrumo minha cama e abro as janelas. Depois do café da manhã, eu lavo a louça e limpo a mesa. Nos fins de semana, geralmente varro o chão e levo o lixo para fora. Eu não gosto de lavar a roupa, mas adoro organizar minha estante. Um lar arrumado me faz sentir relaxado.",
      questions: [
        {
          question: "What does the author do immediately after breakfast?",
          options: ["Washes the dishes and cleans the table", "Makes the bed and opens windows", "Sweeps the floor", "Does the laundry"],
          correctIndex: 0,
          explanation: "The text says 'After breakfast, I wash the dishes and clean the table.'"
        },
        {
          question: "Which chore does the author dislike?",
          options: ["Doing the laundry", "Taking out the trash", "Sweeping the floor", "Making the bed"],
          correctIndex: 0,
          explanation: "The author explicitly states 'I don't like doing the laundry'."
        },
        {
          question: "How does a tidy home affect the author?",
          options: ["It brings a sense of relaxation", "It makes them feel tired", "It causes stress", "It makes them hungry"],
          correctIndex: 0,
          explanation: "The conclusion is 'A tidy home makes me feel relaxed.'"
        },
        {
          question: "What task is typically reserved for the weekends?",
          options: ["Taking out the trash and sweeping", "Organizing the bookshelf", "Washing the dishes", "Making the bed"],
          correctIndex: 0,
          explanation: "The text mentions 'On weekends, I usually sweep the floor and take out the trash.'"
        },
        {
          question: "What does the author enjoy organizing?",
          options: ["The bookshelf", "The wardrobe", "The kitchen cabinets", "The garage"],
          correctIndex: 0,
          explanation: "The author says 'I love organizing my bookshelf.'"
        }
      ]
    },
    level2: {
      textEn: "Managing household chores efficiently can completely transform your living environment. Some people prefer to tackle difficult tasks, like deep cleaning the bathroom, first thing in the morning. Others prefer to arrange their schedule to do a little bit every day. A well-designed master suite, for example, requires specific maintenance to keep its elegant look. No matter the strategy, creating a comfortable space is the ultimate goal.",
      textPt: "Gerenciar as tarefas domésticas de forma eficiente pode transformar completamente seu ambiente de convivência. Algumas pessoas preferem lidar com tarefas difíceis, como a limpeza pesada do banheiro, logo de manhã. Outras preferem organizar sua agenda para fazer um pouco todos os dias. Uma suíte master bem projetada, por exemplo, requer manutenção específica para manter sua aparência elegante. Não importa a estratégia, criar um espaço confortável é o objetivo final.",
      questions: [
        {
          question: "What is the main idea of the text?",
          options: ["Different strategies for managing chores lead to a comfortable home", "Deep cleaning the bathroom is the most important chore", "Everyone should clean their house in the morning", "A master suite is too difficult to maintain"],
          correctIndex: 0,
          explanation: "The text discusses different strategies for managing chores and concludes that creating a comfortable space is the goal."
        },
        {
          question: "What does 'tackle' mean in the context of the text?",
          options: ["To begin to deal with a problem or task", "To physically push someone down", "To ignore a difficult situation", "To complain about chores"],
          correctIndex: 0,
          explanation: "In this context, 'tackle' means to confront or start working on a difficult task."
        },
        {
          question: "How do some people prefer to handle their cleaning schedule?",
          options: ["By doing a small amount of work each day", "By cleaning only on weekends", "By hiring someone else to do it", "By ignoring the chores entirely"],
          correctIndex: 0,
          explanation: "The text states 'Others prefer to arrange their schedule to do a little bit every day.'"
        },
        {
          question: "Why is a master suite mentioned in the text?",
          options: ["As an example of a space requiring specific maintenance", "As the only room that needs daily cleaning", "Because it is the easiest room to arrange", "To show that big houses are hard to clean"],
          correctIndex: 0,
          explanation: "It is used as an example: 'A well-designed master suite, for example, requires specific maintenance...'"
        },
        {
          question: "What is the ultimate goal of these chore strategies?",
          options: ["To create a comfortable living space", "To finish cleaning as fast as possible", "To impress guests", "To avoid deep cleaning the bathroom"],
          correctIndex: 0,
          explanation: "The text concludes: 'creating a comfortable space is the ultimate goal.'"
        }
      ]
    }
  },
  "casa2": {
    level1: {
      textEn: "We recently moved to a new house. The living room is my favorite place. We bought a large sofa and a small glass table. In the evening, I turn on the lamp and read a good book. The kitchen is small but very practical for cooking. We also have a lovely garden where we can relax on sunny days.",
      textPt: "Nós nos mudamos recentemente para uma casa nova. A sala de estar é o meu lugar favorito. Nós compramos um sofá grande e uma pequena mesa de vidro. À noite, eu ligo a lâmpada e leio um bom livro. A cozinha é pequena, mas muito prática para cozinhar. Nós também temos um jardim adorável onde podemos relaxar em dias ensolarados.",
      questions: [
        {
          question: "Which room does the author like the most?",
          options: ["The living room", "The kitchen", "The garden", "The bedroom"],
          correctIndex: 0,
          explanation: "The text explicitly states 'The living room is my favorite place.'"
        },
        {
          question: "What furniture did they buy for the living room?",
          options: ["A large sofa and a glass table", "A wooden chair and a desk", "A big TV and a carpet", "A lamp and a bookshelf"],
          correctIndex: 0,
          explanation: "They bought 'a large sofa and a small glass table'."
        },
        {
          question: "What does the author do in the evening?",
          options: ["Reads a book with the lamp on", "Cooks dinner in the kitchen", "Relaxes in the garden", "Watches TV on the large sofa"],
          correctIndex: 0,
          explanation: "The author mentions 'In the evening, I turn on the lamp and read a good book.'"
        },
        {
          question: "How is the kitchen described?",
          options: ["Small but practical", "Large and modern", "Old and broken", "Beautiful but useless"],
          correctIndex: 0,
          explanation: "The kitchen is described as 'small but very practical for cooking'."
        },
        {
          question: "When does the family relax in the garden?",
          options: ["On sunny days", "Every evening", "Only on weekends", "During the winter"],
          correctIndex: 0,
          explanation: "They relax in the garden 'on sunny days'."
        }
      ]
    },
    level2: {
      textEn: "Renovating a house can be an exhausting but rewarding experience. We decided to knock down a wall to create an open-plan living area. Now, it is perfect for hosting a banquet with friends. We carefully selected an armchair for the corner, creating a cozy reading nook. The lighting was also upgraded; replacing the old fixtures with modern lamps changed the entire atmosphere of the home.",
      textPt: "Reformar uma casa pode ser uma experiência exaustiva, mas gratificante. Decidimos derrubar uma parede para criar uma área de estar em conceito aberto. Agora, é perfeito para oferecer um banquete para amigos. Nós selecionamos cuidadosamente uma poltrona para o canto, criando um cantinho de leitura aconchegante. A iluminação também foi atualizada; substituir as antigas luminárias por lâmpadas modernas mudou toda a atmosfera da casa.",
      questions: [
        {
          question: "How does the author describe the experience of renovating the house?",
          options: ["Tiring but ultimately satisfying", "Quick and inexpensive", "Boring and unnecessary", "Dangerous and stressful"],
          correctIndex: 0,
          explanation: "'Exhausting but rewarding' means it was tiring but satisfying."
        },
        {
          question: "Why did they knock down a wall?",
          options: ["To create an open-plan living area", "Because the wall was damaged", "To make room for a big sofa", "To build a new kitchen"],
          correctIndex: 0,
          explanation: "They knocked down a wall 'to create an open-plan living area'."
        },
        {
          question: "What is the new living area perfect for?",
          options: ["Hosting large meals or banquets with friends", "Sleeping during the day", "Working from home", "Watching movies in the dark"],
          correctIndex: 0,
          explanation: "It is 'perfect for hosting a banquet with friends'."
        },
        {
          question: "What does 'cozy' most likely mean in the phrase 'cozy reading nook'?",
          options: ["Comfortable, warm, and relaxing", "Large and empty", "Bright and loud", "Expensive and modern"],
          correctIndex: 0,
          explanation: "Cozy usually describes a small, comfortable, and warm space."
        },
        {
          question: "What had a major impact on the home's atmosphere?",
          options: ["Upgrading the lighting and modern lamps", "Buying a new armchair", "Painting the walls", "Hosting banquets"],
          correctIndex: 0,
          explanation: "The text says 'replacing the old fixtures with modern lamps changed the entire atmosphere'."
        }
      ]
    }
  },
  "hobbies": {
    level1: {
      textEn: "Having a hobby is a great way to use your free time. Some people like to collect stamps or coins. I prefer outdoor activities, like riding my bicycle in the park. My sister enjoys indoor hobbies; she loves painting and drawing. When it rains, we usually play board games together. Hobbies help us relax after a long week of work or study.",
      textPt: "Ter um hobby é uma ótima maneira de usar seu tempo livre. Algumas pessoas gostam de colecionar selos ou moedas. Eu prefiro atividades ao ar livre, como andar de bicicleta no parque. Minha irmã gosta de hobbies internos; ela ama pintar e desenhar. Quando chove, nós geralmente jogamos jogos de tabuleiro juntos. Hobbies nos ajudam a relaxar após uma longa semana de trabalho ou estudo.",
      questions: [
        {
          question: "What is the author's preferred type of hobby?",
          options: ["Outdoor activities like cycling", "Collecting stamps", "Painting and drawing", "Playing video games"],
          correctIndex: 0,
          explanation: "The author prefers 'outdoor activities, like riding my bicycle'."
        },
        {
          question: "What does the author's sister enjoy doing?",
          options: ["Indoor activities like painting", "Riding her bicycle", "Collecting coins", "Playing outdoor sports"],
          correctIndex: 0,
          explanation: "The sister 'loves painting and drawing'."
        },
        {
          question: "What do they do when the weather is bad?",
          options: ["They play board games", "They watch TV all day", "They sleep", "They go to the park anyway"],
          correctIndex: 0,
          explanation: "The text says 'When it rains, we usually play board games together'."
        },
        {
          question: "Why are hobbies important, according to the text?",
          options: ["They help people relax", "They help people make money", "They replace studying", "They keep people busy all the time"],
          correctIndex: 0,
          explanation: "Hobbies 'help us relax after a long week'."
        },
        {
          question: "Which of the following is NOT mentioned as a hobby in the text?",
          options: ["Listening to music", "Collecting stamps", "Drawing", "Riding a bicycle"],
          correctIndex: 0,
          explanation: "Music is never mentioned in the text."
        }
      ]
    },
    level2: {
      textEn: "Engaging in creative hobbies can significantly boost your mental health and cognitive flexibility. Activities like playing an instrument or mastering a new language require dedication and focus. Personally, I find photography fascinating because it changes how you perceive the world. You start noticing the intricate details of light and shadows. Sharing these captured moments with others also builds a sense of community.",
      textPt: "Envolver-se em hobbies criativos pode impulsionar significativamente sua saúde mental e flexibilidade cognitiva. Atividades como tocar um instrumento ou dominar um novo idioma exigem dedicação e foco. Pessoalmente, acho a fotografia fascinante porque muda como você percebe o mundo. Você começa a notar os detalhes intrincados de luz e sombras. Compartilhar esses momentos capturados com outros também constrói um senso de comunidade.",
      questions: [
        {
          question: "What is a main benefit of creative hobbies mentioned in the text?",
          options: ["They improve mental health and cognitive flexibility", "They are a good way to earn extra income", "They help you sleep longer hours", "They require very little effort"],
          correctIndex: 0,
          explanation: "The text states they 'boost your mental health and cognitive flexibility'."
        },
        {
          question: "According to the author, what do learning a language and playing an instrument have in common?",
          options: ["They both require focus and dedication", "They are both visual arts", "They can both be learned in a few days", "They are the most expensive hobbies"],
          correctIndex: 0,
          explanation: "These activities 'require dedication and focus'."
        },
        {
          question: "Why does the author find photography fascinating?",
          options: ["It alters their perception of the world", "It is very easy to learn", "It allows them to travel often", "It doesn't require any special equipment"],
          correctIndex: 0,
          explanation: "Photography is fascinating 'because it changes how you perceive the world'."
        },
        {
          question: "What does 'intricate' mean in the phrase 'intricate details'?",
          options: ["Very detailed and complex", "Large and obvious", "Boring and plain", "Colorful and bright"],
          correctIndex: 0,
          explanation: "Intricate means complex, complicated, or having many fine details."
        },
        {
          question: "How does photography help build a sense of community?",
          options: ["By sharing the captured moments with other people", "By taking pictures of crowds", "By joining a local photography club", "By selling photos online"],
          correctIndex: 0,
          explanation: "The text says 'Sharing these captured moments with others also builds a sense of community'."
        }
      ]
    }
  },
  "esportes": {
    level1: {
      textEn: "Sports are a fun way to stay healthy. I play soccer with my friends every Saturday. We run a lot and try to score goals. My brother prefers basketball because he is very tall. Sometimes we watch tennis matches on TV. In the summer, my favorite sport is swimming because the water is cool. Winning is nice, but playing as a team is more important.",
      textPt: "Esportes são uma maneira divertida de se manter saudável. Eu jogo futebol com meus amigos todo sábado. Nós corremos muito e tentamos marcar gols. Meu irmão prefere basquete porque ele é muito alto. Às vezes nós assistimos partidas de tênis na TV. No verão, meu esporte favorito é natação porque a água é fresca. Vencer é legal, mas jogar em equipe é mais importante.",
      questions: [
        {
          question: "When does the author play soccer?",
          options: ["On Saturdays", "Every day", "During the summer", "On Sundays"],
          correctIndex: 0,
          explanation: "The author says 'I play soccer with my friends every Saturday.'"
        },
        {
          question: "Why does the brother prefer basketball?",
          options: ["Because of his tall height", "Because he dislikes soccer", "Because he likes to run", "Because he plays on a team"],
          correctIndex: 0,
          explanation: "He prefers basketball 'because he is very tall'."
        },
        {
          question: "What sport do they watch on television?",
          options: ["Tennis", "Soccer", "Basketball", "Swimming"],
          correctIndex: 0,
          explanation: "The text states 'Sometimes we watch tennis matches on TV.'"
        },
        {
          question: "Why is swimming the author's favorite summer sport?",
          options: ["Because the cool water is refreshing", "Because it is easy to win", "Because they can swim fast", "Because it is a team sport"],
          correctIndex: 0,
          explanation: "Swimming is favorite in summer 'because the water is cool'."
        },
        {
          question: "What does the author value more than winning?",
          options: ["Teamwork and playing together", "Scoring many goals", "Being the tallest player", "Watching sports on TV"],
          correctIndex: 0,
          explanation: "The text concludes 'Winning is nice, but playing as a team is more important.'"
        }
      ]
    },
    level2: {
      textEn: "Professional sports demand rigorous training and an elite level of discipline. Athletes often undergo intense physical conditioning to prevent injuries and enhance their performance. Beyond physical strength, mental resilience is crucial during high-pressure championships. Coaches analyze statistics and opponent strategies to gain a competitive edge. Ultimately, the spirit of sportsmanship is what truly inspires the fans.",
      textPt: "Esportes profissionais exigem treinamento rigoroso e um nível de elite de disciplina. Atletas frequentemente passam por condicionamento físico intenso para prevenir lesões e melhorar seu desempenho. Além da força física, a resiliência mental é crucial durante campeonatos de alta pressão. Técnicos analisam estatísticas e estratégias dos oponentes para obter uma vantagem competitiva. No fim, o espírito de esportividade é o que realmente inspira os fãs.",
      questions: [
        {
          question: "What is necessary for professional sports besides rigorous training?",
          options: ["An elite level of discipline", "A lot of free time", "Expensive sports gear", "Being naturally tall"],
          correctIndex: 0,
          explanation: "The text says professional sports demand 'rigorous training and an elite level of discipline'."
        },
        {
          question: "Why do athletes undergo intense physical conditioning?",
          options: ["To prevent injuries and boost performance", "To impress their fans", "Because the coaches force them to", "To look better on television"],
          correctIndex: 0,
          explanation: "They undergo conditioning 'to prevent injuries and enhance their performance'."
        },
        {
          question: "During high-pressure championships, what is just as important as physical strength?",
          options: ["Mental resilience", "Statistical analysis", "Cheering fans", "A good coach"],
          correctIndex: 0,
          explanation: "The text notes that 'mental resilience is crucial during high-pressure championships'."
        },
        {
          question: "How do coaches try to gain an advantage over other teams?",
          options: ["By analyzing stats and opponent strategies", "By training harder than the athletes", "By playing in the games themselves", "By arguing with the referees"],
          correctIndex: 0,
          explanation: "Coaches 'analyze statistics and opponent strategies to gain a competitive edge'."
        },
        {
          question: "What does 'sportsmanship' mean in this context?",
          options: ["Fair play and respect for opponents", "The ability to win every game", "The physical strength of the team", "The money made by the athletes"],
          correctIndex: 0,
          explanation: "Sportsmanship refers to fair play, respect, and honorable behavior in sports, which inspires fans."
        }
      ]
    }
  },
  "supermercado": {
    level1: {
      textEn: "Going to the supermarket is a weekly task for my family. We make a shopping list so we do not forget anything. First, we go to the produce section to buy fresh apples and carrots. Then, we look for milk and cheese in the dairy aisle. I always ask my mom to buy my favorite chocolate cookies. Finally, we wait in line at the cashier to pay for our groceries.",
      textPt: "Ir ao supermercado é uma tarefa semanal para a minha família. Nós fazemos uma lista de compras para não esquecer nada. Primeiro, vamos à seção de hortifrúti comprar maçãs e cenouras frescas. Depois, procuramos leite e queijo no corredor de laticínios. Eu sempre peço para minha mãe comprar meus biscoitos de chocolate favoritos. Finalmente, esperamos na fila do caixa para pagar por nossas compras.",
      questions: [
        {
          question: "Why does the family make a shopping list?",
          options: ["To ensure they don't forget to buy anything", "Because the supermarket requires it", "To calculate the total price", "To find the aisles faster"],
          correctIndex: 0,
          explanation: "They make a list 'so we do not forget anything'."
        },
        {
          question: "What do they buy in the produce section?",
          options: ["Fresh fruits and vegetables", "Milk and cheese", "Chocolate cookies", "Cleaning supplies"],
          correctIndex: 0,
          explanation: "They buy 'fresh apples and carrots' (fruits and vegetables) in the produce section."
        },
        {
          question: "Where do they find milk and cheese?",
          options: ["In the dairy aisle", "In the bakery", "Near the cashier", "In the frozen section"],
          correctIndex: 0,
          explanation: "Milk and cheese are found 'in the dairy aisle'."
        },
        {
          question: "What special treat does the author ask for?",
          options: ["Chocolate cookies", "Fresh apples", "A new toy", "Ice cream"],
          correctIndex: 0,
          explanation: "The author asks for 'favorite chocolate cookies'."
        },
        {
          question: "What is the final step of their shopping trip?",
          options: ["Waiting in line to pay at the cashier", "Checking the shopping list again", "Putting the groceries in the car", "Eating the cookies"],
          correctIndex: 0,
          explanation: "The final step is 'we wait in line at the cashier to pay'."
        }
      ]
    },
    level2: {
      textEn: "Modern supermarkets are strategically designed to influence consumer behavior. Essential items like bread and milk are often placed at the back of the store, forcing shoppers to walk past numerous promotional displays. Additionally, the smell of freshly baked goods is used to stimulate appetite and trigger impulse purchases. Understanding these marketing tactics helps you stick to your budget and avoid unnecessary spending.",
      textPt: "Supermercados modernos são estrategicamente projetados para influenciar o comportamento do consumidor. Itens essenciais, como pão e leite, geralmente são colocados no fundo da loja, forçando os compradores a passar por várias vitrines promocionais. Além disso, o cheiro de produtos recém-assados é usado para estimular o apetite e desencadear compras por impulso. Entender essas táticas de marketing ajuda você a se manter no orçamento e evitar gastos desnecessários.",
      questions: [
        {
          question: "What is the main purpose of a supermarket's layout, according to the text?",
          options: ["To influence how consumers behave and shop", "To make shopping as fast as possible", "To help workers restock shelves easily", "To keep the store clean"],
          correctIndex: 0,
          explanation: "They are 'strategically designed to influence consumer behavior'."
        },
        {
          question: "Why are essential items placed at the back of the store?",
          options: ["To expose shoppers to more products and promotions", "Because they need special refrigeration", "To make them harder to steal", "Because the front of the store is too crowded"],
          correctIndex: 0,
          explanation: "It forces shoppers 'to walk past numerous promotional displays'."
        },
        {
          question: "How do supermarkets use smell to their advantage?",
          options: ["By using bakery scents to encourage impulse buying", "By spraying perfume on fruits", "By keeping the store smelling like fresh cleaning supplies", "By hiding bad odors"],
          correctIndex: 0,
          explanation: "The smell of baked goods is used 'to stimulate appetite and trigger impulse purchases'."
        },
        {
          question: "What does 'impulse purchases' mean in this context?",
          options: ["Buying things you didn't plan to buy", "Buying only necessary items", "Returning items you don't want", "Buying items in bulk"],
          correctIndex: 0,
          explanation: "Impulse purchases are sudden decisions to buy something you didn't originally plan for."
        },
        {
          question: "What is the benefit of understanding these supermarket tactics?",
          options: ["It helps shoppers stick to their budget", "It helps shoppers get a job at the supermarket", "It allows shoppers to get free food", "It makes shopping faster"],
          correctIndex: 0,
          explanation: "Understanding these tactics 'helps you stick to your budget and avoid unnecessary spending'."
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
    
    // Check if it already has reading
    let nextId = newContent.indexOf("id: ", scenarioStart + 10);
    if (nextId === -1) nextId = newContent.length;
    
    if (newContent.indexOf("reading:", scenarioStart) !== -1 && newContent.indexOf("reading:", scenarioStart) < nextId) {
       console.log("Already has reading for " + id);
       continue; // Skip if already there
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

const file = '../data/scenarios1.ts';
let c = fs.readFileSync(file, 'utf8');

for (const sc in readingDataBatch1) {
  for (const lvl in readingDataBatch1[sc]) {
    for (let q of readingDataBatch1[sc][lvl].questions) {
      let correctOpt = q.options[q.correctIndex];
      for (let i = q.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
      }
      q.correctIndex = q.options.indexOf(correctOpt);
    }
  }
}

fs.writeFileSync(file, injectReadingData(c, readingDataBatch1));
console.log("Batch 1 injected.");
