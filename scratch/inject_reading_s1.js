const fs = require('fs');

const data = {
  "familia": {
    level1: {
      textEn: "My family is small, but we are very close to each other. I live in a comfortable house with my mother and my younger brother. My mother is a dedicated teacher, and she is always very kind and patient with everyone. She works at a local school during the week. My brother is ten years old, and he absolutely loves playing soccer with his friends in the neighborhood. We have a special family tradition that we never miss. Every Sunday afternoon, we travel to visit our grandmother who lives in the countryside. She always makes the best chocolate cake for us, and we spend the whole day talking and laughing together.",
      textPt: "Minha família é pequena, mas somos muito próximos uns dos outros. Eu moro em uma casa confortável com minha mãe e meu irmão mais novo. Minha mãe é uma professora dedicada, e ela é sempre muito gentil e paciente com todos. Ela trabalha em uma escola local durante a semana. Meu irmão tem dez anos e ele adora absolutamente jogar futebol com os amigos dele no bairro. Nós temos uma tradição de família especial que nunca perdemos. Todo domingo à tarde, nós viajamos para visitar nossa avó que mora no interior. Ela sempre faz o melhor bolo de chocolate para nós, e passamos o dia todo conversando e rindo juntos.",
      questions: [
        { question: "Who does the author live with?", options: ["Mother and brother", "Father and sister", "Grandmother only", "Cousins"], correctIndex: 0, explanation: "The text says 'I live in a comfortable house with my mother and my younger brother'." },
        { question: "What is the mother's profession?", options: ["Teacher", "Doctor", "Engineer", "Nurse"], correctIndex: 0, explanation: "The text says 'My mother is a dedicated teacher'." },
        { question: "What does the brother love to do?", options: ["Play soccer", "Eat cake", "Visit grandmother", "Read books"], correctIndex: 0, explanation: "The brother 'absolutely loves playing soccer'." },
        { question: "When do they visit their grandmother?", options: ["Every Sunday", "Every Saturday", "Once a month", "On holidays"], correctIndex: 0, explanation: "They visit 'Every Sunday afternoon'." }
      ]
    },
    level2: {
      textEn: "Family gatherings are a very important tradition in our culture, acting as a bridge between different generations. Every holiday, my extended family comes together at my uncle's large house near the lake. The preparation starts days in advance, with everyone contributing their signature dishes. I have a lot of cousins, and we always share funny stories about our childhood and update each other on our recent achievements. Last year was particularly memorable because my older sister got married in a beautiful outdoor ceremony, so now I have a brother-in-law who has become a great friend. It is truly amazing how fast our family is growing, and these gatherings remind us of the strong bonds we share despite living far apart.",
      textPt: "Reuniões de família são uma tradição muito importante na nossa cultura, atuando como uma ponte entre diferentes gerações. Em todo feriado, minha família estendida se reúne na grande casa do meu tio perto do lago. A preparação começa dias antes, com cada um contribuindo com seus pratos especiais. Tenho muitos primos, e sempre compartilhamos histórias engraçadas sobre nossa infância e atualizamos uns aos outros sobre nossas conquistas recentes. O ano passado foi particularmente memorável porque minha irmã mais velha se casou em uma bela cerimônia ao ar livre, então agora tenho um cunhado que se tornou um grande amigo. É realmente incrível como nossa família está crescendo rápido, e essas reuniões nos lembram dos fortes laços que compartilhamos apesar de morarmos longe.",
      questions: [
        { question: "Where do the family gatherings happen?", options: ["At the uncle's house", "At the grandmother's house", "At the author's house", "In a restaurant"], correctIndex: 0, explanation: "They come together 'at my uncle's large house near the lake'." },
        { question: "What do the cousins usually do together?", options: ["Share funny stories", "Play soccer", "Cook dinner", "Watch movies"], correctIndex: 0, explanation: "They 'always share funny stories about our childhood'." },
        { question: "What happened to the older sister last year?", options: ["She got married", "She moved to another city", "She had a baby", "She bought a house"], correctIndex: 0, explanation: "The text says 'my older sister got married in a beautiful outdoor ceremony'." },
        { question: "How does the author describe the family's growth?", options: ["Amazing and fast", "Slow and steady", "Difficult to manage", "Unexpected"], correctIndex: 0, explanation: "They say 'It is truly amazing how fast our family is growing'." }
      ]
    }
  },
  "amigos": {
    level1: {
      textEn: "I have a great group of friends, and they are very important in my life. My best friend is Anna. She is always happy and ready to help anyone. We like to meet up at the big park in our city on weekends. Sometimes, we invite other friends from our neighborhood and have a large picnic under the tall trees. We bring a lot of snacks to share. We talk for hours, eat delicious sandwiches, and have a lot of fun together playing simple games. Having good friends definitely makes life much better and more exciting.",
      textPt: "Eu tenho um ótimo grupo de amigos, e eles são muito importantes na minha vida. Minha melhor amiga é a Anna. Ela está sempre feliz e pronta para ajudar qualquer um. Nós gostamos de nos encontrar no grande parque da nossa cidade nos fins de semana. Às vezes, convidamos outros amigos do nosso bairro e fazemos um grande piquenique debaixo das árvores altas. Trazemos muitos lanches para compartilhar. Nós conversamos por horas, comemos sanduíches deliciosos e nos divertimos muito juntos jogando jogos simples. Ter bons amigos definitivamente torna a vida muito melhor e mais emocionante.",
      questions: [
        { question: "Who is the author's best friend?", options: ["Anna", "Maria", "John", "Sarah"], correctIndex: 0, explanation: "The text says 'My best friend is Anna'." },
        { question: "Where do they usually meet up?", options: ["At the park", "At the mall", "At school", "At a cafe"], correctIndex: 0, explanation: "They 'meet up at the big park in our city'." },
        { question: "What do they eat during the picnic?", options: ["Sandwiches", "Pizza", "Cake", "Fruit"], correctIndex: 0, explanation: "They 'eat delicious sandwiches'." },
        { question: "What is the final message of the text?", options: ["Good friends make life better", "Picnics are fun", "Weekends are for sleeping", "You should invite everyone"], correctIndex: 0, explanation: "The text ends by saying 'Having good friends definitely makes life much better'." }
      ]
    },
    level2: {
      textEn: "Friendship is a complex relationship that requires mutual trust, patience, and honesty over the years. It is perfectly normal to have disagreements from time to time. When I argue with my friends, I always try to step back, apologize if I am wrong, and genuinely understand their point of view before the situation escalates. Furthermore, it is absolutely essential to keep your friends' secrets safe and to step in to help out when someone is going through a hard time. While acquaintances might be there for the celebrations, a true friend will consistently support you through your worst moments and greatest challenges.",
      textPt: "A amizade é um relacionamento complexo que exige confiança mútua, paciência e honestidade ao longo dos anos. É perfeitamente normal ter desentendimentos de tempos em tempos. Quando discuto com meus amigos, sempre tento recuar, pedir desculpas se estiver errado e genuinamente entender o ponto de vista deles antes que a situação se agrave. Além disso, é absolutamente essencial manter os segredos dos seus amigos seguros e intervir para ajudar quando alguém está passando por um momento difícil. Enquanto os conhecidos podem estar lá para as celebrações, um verdadeiro amigo apoiará você consistentemente nos seus piores momentos e maiores desafios.",
      questions: [
        { question: "What does friendship require, according to the text?", options: ["Trust and honesty", "Money and time", "Similar hobbies", "Living close to each other"], correctIndex: 0, explanation: "The text states it requires 'mutual trust, patience, and honesty'." },
        { question: "What does the author do after an argument?", options: ["Apologizes and tries to understand", "Ignores the friend", "Waits for the friend to apologize", "Stops talking to them"], correctIndex: 0, explanation: "They 'apologize if I am wrong, and genuinely understand their point of view'." },
        { question: "What is considered essential in a friendship?", options: ["Keeping secrets and helping out", "Going to parties together", "Agreeing on everything", "Buying expensive gifts"], correctIndex: 0, explanation: "It is 'absolutely essential to keep your friends' secrets safe and to step in to help out'." },
        { question: "When will a true friend support you?", options: ["Through your worst moments", "Only when you are happy", "Only when you have money", "Only at school"], correctIndex: 0, explanation: "A true friend will consistently support you 'through your worst moments'." }
      ]
    }
  },
  "corpo": {
    level1: {
      textEn: "I use my body every single day to do many wonderful things. My body allows me to explore the world around me. I use my eyes to see beautiful colors in the sky and read my favorite books. I use my strong legs to walk to school and run in the park with my friends. My hands are very useful because they help me hold my books, draw pictures, and write my name. Because our bodies do so much for us, it is highly important to take good care of them. You must wash your hands before eating and brush your teeth twice a day to keep your body healthy and clean.",
      textPt: "Eu uso meu corpo todos os dias para fazer muitas coisas maravilhosas. Meu corpo me permite explorar o mundo ao meu redor. Uso meus olhos para ver cores bonitas no céu e ler meus livros favoritos. Uso minhas pernas fortes para caminhar até a escola e correr no parque com meus amigos. Minhas mãos são muito úteis porque me ajudam a segurar meus livros, desenhar e escrever meu nome. Como nossos corpos fazem tanto por nós, é altamente importante cuidar bem deles. Você deve lavar as mãos antes de comer e escovar os dentes duas vezes ao dia para manter seu corpo saudável e limpo.",
      questions: [
        { question: "What does the author use to see colors?", options: ["Eyes", "Ears", "Nose", "Mouth"], correctIndex: 0, explanation: "The text says 'I use my eyes to see beautiful colors'." },
        { question: "How does the author go to school?", options: ["By walking", "By bus", "By car", "By bicycle"], correctIndex: 0, explanation: "They say 'I use my strong legs to walk to school'." },
        { question: "What do the hands help the author do?", options: ["Hold books and write", "Eat and drink", "Play sports", "Clean the house"], correctIndex: 0, explanation: "Hands help them 'hold my books, draw pictures, and write'." },
        { question: "What should you do to keep your body healthy?", options: ["Wash hands and brush teeth", "Sleep all day", "Eat candy", "Never go outside"], correctIndex: 0, explanation: "You must 'wash your hands before eating and brush your teeth'." }
      ]
    },
    level2: {
      textEn: "Taking care of your physical health is vital for ensuring a long, happy, and active life. In today's modern society, many people experience chronic back or shoulder pain simply because they sit staring at a desk all day without moving. To effectively prevent this type of discomfort, you should make it a habit to stretch your muscles regularly and take short walking breaks. Furthermore, if you accidentally hurt your knee or ankle while exercising, you must not ignore it. You should rest the affected area and apply ice to reduce the swelling. Ultimately, listening to your body's signals is the best way to avoid serious injuries.",
      textPt: "Cuidar da sua saúde física é vital para garantir uma vida longa, feliz e ativa. Na sociedade moderna de hoje, muitas pessoas sentem dores crônicas nas costas ou nos ombros simplesmente porque ficam sentadas olhando para uma mesa o dia todo sem se mexer. Para evitar efetivamente esse tipo de desconforto, você deve criar o hábito de alongar os músculos regularmente e fazer pausas curtas para caminhar. Além disso, se você machucar acidentalmente o joelho ou o tornozelo durante o exercício, não deve ignorar. Você deve descansar a área afetada e aplicar gelo para reduzir o inchaço. Por fim, ouvir os sinais do seu corpo é a melhor maneira de evitar lesões graves.",
      questions: [
        { question: "Why do many people experience back or shoulder pain?", options: ["Because they sit at a desk all day", "Because they exercise too much", "Because they sleep poorly", "Because they lift heavy things"], correctIndex: 0, explanation: "They have pain 'because they sit staring at a desk all day without moving'." },
        { question: "How can you prevent muscle pain at work?", options: ["Stretch your muscles regularly", "Drink lots of coffee", "Buy a new chair", "Work standing up"], correctIndex: 0, explanation: "You should 'stretch your muscles regularly and take short walking breaks'." },
        { question: "What should you do if you hurt your knee?", options: ["Rest and apply ice", "Keep running", "Take a hot shower", "Go to sleep"], correctIndex: 0, explanation: "You should 'rest the affected area and apply ice'." },
        { question: "What is the best way to avoid serious injuries?", options: ["Listening to your body", "Never exercising", "Running every day", "Eating healthy food"], correctIndex: 0, explanation: "The text concludes 'listening to your body's signals is the best way to avoid serious injuries'." }
      ]
    }
  },
  "casa": {
    level1: {
      textEn: "My house is small, but it is very comfortable and perfect for my family. It has two bright bedrooms, a spacious kitchen, and a cozy living room. I sleep in my own bedroom, and I always make sure to make my bed every single morning before breakfast. My family usually gathers to eat dinner together in the kitchen, where we talk about our day. Keeping the house clean is a team effort. On Sundays, I always help my mother sweep the floor, dust the shelves, and take out the trash so we can start the new week with a clean home.",
      textPt: "Minha casa é pequena, mas é muito confortável e perfeita para minha família. Tem dois quartos bem iluminados, uma cozinha espaçosa e uma sala de estar aconchegante. Eu durmo no meu próprio quarto, e sempre me certifico de arrumar minha cama todas as manhãs antes do café da manhã. Minha família geralmente se reúne para jantar juntos na cozinha, onde conversamos sobre o nosso dia. Manter a casa limpa é um esforço de equipe. Aos domingos, eu sempre ajudo minha mãe a varrer o chão, tirar o pó das prateleiras e tirar o lixo para podermos começar a nova semana com a casa limpa.",
      questions: [
        { question: "How many bedrooms does the house have?", options: ["Two", "Three", "One", "Four"], correctIndex: 0, explanation: "The text says 'It has two bright bedrooms'." },
        { question: "What does the author do every morning?", options: ["Makes the bed", "Cooks breakfast", "Washes the dishes", "Sweeps the floor"], correctIndex: 0, explanation: "They say they 'make my bed every single morning'." },
        { question: "Where does the family eat dinner?", options: ["In the kitchen", "In the living room", "In the garden", "In the bedroom"], correctIndex: 0, explanation: "They gather to eat dinner 'in the kitchen'." },
        { question: "What chores does the author do on Sundays?", options: ["Sweep the floor and take out the trash", "Clean the windows", "Wash the car", "Iron the clothes"], correctIndex: 0, explanation: "They help 'sweep the floor, dust the shelves, and take out the trash'." }
      ]
    },
    level2: {
      textEn: "Maintaining a clean and welcoming home requires consistent dedication and teamwork from everyone living there. Every spring, we dedicate an entire weekend to do a deep cleaning of the entire house, from the attic down to the basement. I am usually responsible for vacuuming the heavy carpets and carefully dusting the delicate furniture in the living room. On the other hand, my sister prefers to handle the laundry; she likes to iron the clothes and fold them neatly into the drawers. Furthermore, having a designated garage helps keep our outdoor space and tools organized, while our beautiful green garden provides a much-needed relaxing area for us to unwind on the weekends.",
      textPt: "Manter uma casa limpa e acolhedora exige dedicação consistente e trabalho em equipe de todos que moram lá. Toda primavera, dedicamos um fim de semana inteiro para fazer uma limpeza profunda na casa inteira, do sótão até o porão. Geralmente sou responsável por aspirar os tapetes pesados e tirar o pó cuidadosamente dos móveis delicados na sala de estar. Por outro lado, minha irmã prefere cuidar da lavanderia; ela gosta de passar as roupas e dobrá-las ordenadamente nas gavetas. Além disso, ter uma garagem designada ajuda a manter nosso espaço externo e ferramentas organizados, enquanto nosso lindo jardim verde proporciona uma área relaxante muito necessária para descansarmos nos fins de semana.",
      questions: [
        { question: "When does the family do a deep cleaning?", options: ["Every spring", "Every winter", "Once a month", "Every weekend"], correctIndex: 0, explanation: "They dedicate an entire weekend to deep cleaning 'Every spring'." },
        { question: "What chores does the author usually do?", options: ["Vacuum the carpets and dust the furniture", "Iron and fold clothes", "Mow the lawn", "Wash the dishes"], correctIndex: 0, explanation: "They are responsible for 'vacuuming the heavy carpets and carefully dusting the delicate furniture'." },
        { question: "What does the sister prefer to do?", options: ["Iron the clothes and fold the laundry", "Clean the windows", "Cook dinner", "Water the plants"], correctIndex: 0, explanation: "She prefers 'to handle the laundry; she likes to iron the clothes and fold them'." },
        { question: "What provides a relaxing area for weekends?", options: ["The garden", "The living room", "The balcony", "The garage"], correctIndex: 0, explanation: "The text says 'our beautiful green garden provides a much-needed relaxing area'." }
      ]
    }
  },
  "casa2": {
    level1: {
      textEn: "My absolute favorite room in our entire house is the living room. We have a big blue couch that is incredibly soft, and a large flat-screen TV mounted on the wall. After dinner, I really like to sit on the couch, relax, and watch action movies with my family. Sometimes, my father mops the floor with a special cleaner to keep it looking shiny and new. We also have a small balcony connected to the living room. In the afternoons, we like to stand on the balcony because we can see the street and watch the cars drive by.",
      textPt: "O meu cômodo favorito absoluto em toda a nossa casa é a sala de estar. Temos um grande sofá azul que é incrivelmente macio e uma grande TV de tela plana montada na parede. Depois do jantar, gosto muito de sentar no sofá, relaxar e assistir a filmes de ação com minha família. Às vezes, meu pai passa pano no chão com um limpador especial para mantê-lo brilhante e com aparência de novo. Também temos uma pequena varanda ligada à sala de estar. À tarde, gostamos de ficar na varanda porque podemos ver a rua e observar os carros passando.",
      questions: [
        { question: "What is the author's favorite room?", options: ["The living room", "The bedroom", "The kitchen", "The bathroom"], correctIndex: 0, explanation: "They state 'My absolute favorite room in our entire house is the living room'." },
        { question: "What color is the couch?", options: ["Blue", "Red", "Black", "White"], correctIndex: 0, explanation: "They have a 'big blue couch'." },
        { question: "What does the father do to the floor?", options: ["He mops it", "He sweeps it", "He paints it", "He ignores it"], correctIndex: 0, explanation: "The father 'mops the floor with a special cleaner'." },
        { question: "What can they see from the balcony?", options: ["The street", "The garden", "The ocean", "The neighbors"], correctIndex: 0, explanation: "From the balcony 'we can see the street and watch the cars drive by'." }
      ]
    },
    level2: {
      textEn: "Effective household maintenance goes significantly beyond just doing the basic cleaning. As a homeowner, you have to constantly ensure that everything in the structure functions properly. For instance, yesterday I spent the entire afternoon washing the dirty exterior windows and carefully watering all the potted plants on our sunny balcony. Tomorrow, my father has a busy schedule: he will mow the front lawn and grab a ladder to check the wooden ceiling for any signs of water leaks before the rainy season starts. Consistently keeping up with these demanding chores prevents much bigger and more expensive problems from occurring in the future.",
      textPt: "A manutenção doméstica eficaz vai significativamente além de apenas fazer a limpeza básica. Como proprietário, você precisa garantir constantemente que tudo na estrutura funcione corretamente. Por exemplo, ontem passei a tarde inteira lavando as janelas externas sujas e regando cuidadosamente todas as plantas em vasos na nossa varanda ensolarada. Amanhã, meu pai tem uma agenda lotada: ele vai cortar a grama da frente e pegar uma escada para verificar o teto de madeira em busca de sinais de vazamentos de água antes do início da estação das chuvas. Manter-se consistentemente em dia com essas tarefas exigentes evita que problemas muito maiores e mais caros ocorram no futuro.",
      questions: [
        { question: "What did the author do yesterday afternoon?", options: ["Washed the windows and watered plants", "Mowed the lawn", "Fixed the ceiling", "Painted the balcony"], correctIndex: 0, explanation: "They spent the afternoon 'washing the dirty exterior windows and carefully watering all the potted plants'." },
        { question: "What will the father do tomorrow?", options: ["Mow the lawn and check the ceiling", "Buy new plants", "Clean the garage", "Wash the car"], correctIndex: 0, explanation: "He will 'mow the front lawn and grab a ladder to check the wooden ceiling'." },
        { question: "What is the ceiling made of?", options: ["Wood", "Concrete", "Glass", "Metal"], correctIndex: 0, explanation: "It is described as a 'wooden ceiling'." },
        { question: "Why is keeping up with chores important?", options: ["It prevents bigger problems in the future", "It makes the neighbors happy", "It is good exercise", "It is required by law"], correctIndex: 0, explanation: "It 'prevents much bigger and more expensive problems from occurring in the future'." }
      ]
    }
  },
  "hobbies": {
    level1: {
      textEn: "On weekends, I usually have a lot of free time to do the things I really enjoy. I love to spend hours reading adventure books quietly in my room. My younger brother is very different; he likes to play loud video games in the living room with his friends online. Sometimes, when it is raining outside, we sit together and draw colorful pictures at the kitchen table. Having personal hobbies is a great way to relax your mind and playfully learn new skills without feeling any stress from school or work.",
      textPt: "Nos fins de semana, geralmente tenho muito tempo livre para fazer as coisas que realmente gosto. Adoro passar horas lendo livros de aventura tranquilamente no meu quarto. Meu irmão mais novo é muito diferente; ele gosta de jogar videogames barulhentos na sala com seus amigos online. Às vezes, quando está chovendo lá fora, sentamos juntos e desenhamos imagens coloridas na mesa da cozinha. Ter hobbies pessoais é uma ótima maneira de relaxar a mente e aprender novas habilidades de forma lúdica, sem sentir o estresse da escola ou do trabalho.",
      questions: [
        { question: "What does the author love to do in their room?", options: ["Read books", "Play video games", "Sleep", "Listen to music"], correctIndex: 0, explanation: "They 'love to spend hours reading adventure books quietly in my room'." },
        { question: "What is the brother's hobby?", options: ["Playing video games", "Drawing pictures", "Reading books", "Playing soccer"], correctIndex: 0, explanation: "The brother 'likes to play loud video games'." },
        { question: "What do they do together at the table?", options: ["Draw pictures", "Eat dinner", "Do homework", "Play cards"], correctIndex: 0, explanation: "They 'draw colorful pictures at the kitchen table'." },
        { question: "According to the text, why are hobbies great?", options: ["They help you relax and learn", "They make you rich", "They are competitive", "They are mandatory"], correctIndex: 0, explanation: "Hobbies are a way to 'relax your mind and playfully learn new skills'." }
      ]
    },
    level2: {
      textEn: "Developing a challenging and creative hobby can drastically improve your overall mental health and daily focus. A few years ago, after feeling burned out from work, I decided to take up knitting as a therapeutic activity. It was incredibly frustrating at first because I kept dropping stitches, but now I can confidently knit warm, intricate sweaters for my entire family. My best friend, on the other hand, is extremely keen on collecting rare historical stamps, a hobby which requires meticulous patience and deep historical research. Whatever interest you eventually choose to pursue, hobbies provide a highly valuable and necessary escape from our perpetually busy, digital-driven lives.",
      textPt: "Desenvolver um hobby desafiador e criativo pode melhorar drasticamente sua saúde mental geral e seu foco diário. Alguns anos atrás, depois de me sentir esgotado do trabalho, decidi começar a tricotar como uma atividade terapêutica. Foi incrivelmente frustrante no começo porque eu continuava perdendo pontos, mas agora consigo tricotar suéteres quentes e complexos com confiança para toda a minha família. Meu melhor amigo, por outro lado, é extremamente apaixonado por colecionar selos históricos raros, um hobby que exige paciência meticulosa e profunda pesquisa histórica. Qualquer que seja o interesse que você acabe escolhendo seguir, os hobbies proporcionam uma fuga altamente valiosa e necessária de nossas vidas digitais e perpetuamente ocupadas.",
      questions: [
        { question: "What benefit can a creative hobby provide?", options: ["It can improve your mental health", "It can increase your salary", "It makes you famous", "It replaces physical exercise"], correctIndex: 0, explanation: "It can 'drastically improve your overall mental health and daily focus'." },
        { question: "What hobby did the author take up?", options: ["Knitting", "Stamp collecting", "Painting", "Gardening"], correctIndex: 0, explanation: "They decided to 'take up knitting as a therapeutic activity'." },
        { question: "What is the best friend keen on doing?", options: ["Collecting rare stamps", "Knitting sweaters", "Playing video games", "Traveling"], correctIndex: 0, explanation: "The friend is 'extremely keen on collecting rare historical stamps'." },
        { question: "What do hobbies provide an escape from?", options: ["Our busy digital lives", "Physical pain", "Financial problems", "Family gatherings"], correctIndex: 0, explanation: "They provide an escape 'from our perpetually busy, digital-driven lives'." }
      ]
    }
  },
  "esportes": {
    level1: {
      textEn: "I love being active, so I play soccer with my friends every Tuesday evening. We practice a lot, and I think we have a really good team now. Running back and forth on the large green field is very tiring, but scoring a beautiful goal makes all of us feel incredibly happy and proud. After the long match finishes, we are usually very thirsty, so we sit together and drink a lot of cold water. Engaging in sports is an excellent way to have fun and is very good for your physical health.",
      textPt: "Eu amo ser ativo, então jogo futebol com meus amigos toda terça-feira à noite. Praticamos muito e acho que temos um time muito bom agora. Correr de um lado para o outro no grande campo verde é muito cansativo, mas marcar um belo gol faz com que todos nos sintamos incrivelmente felizes e orgulhosos. Depois que a longa partida termina, geralmente estamos com muita sede, então sentamos juntos e bebemos muita água gelada. Praticar esportes é uma excelente maneira de se divertir e é muito bom para a saúde física.",
      questions: [
        { question: "When do they play soccer?", options: ["Every Tuesday", "Every weekend", "Every Monday", "Once a month"], correctIndex: 0, explanation: "They play 'every Tuesday evening'." },
        { question: "What makes them very happy?", options: ["Scoring a goal", "Running on the field", "Drinking water", "Winning a trophy"], correctIndex: 0, explanation: "Scoring a beautiful goal 'makes all of us feel incredibly happy'." },
        { question: "How do they feel after the match?", options: ["Very thirsty", "Very angry", "Very bored", "Very cold"], correctIndex: 0, explanation: "They are 'usually very thirsty'." },
        { question: "What is the conclusion about sports?", options: ["They are good for your health", "They are too tiring", "They are only for professionals", "They are dangerous"], correctIndex: 0, explanation: "The text states it 'is very good for your physical health'." }
      ]
    },
    level2: {
      textEn: "Participating in professional sports requires not only raw talent but also intense daily discipline and the guidance of a great coach. To successfully perform at the highest possible competitive level, elite athletes must go to the gym daily and meticulously maintain a very strict, nutrient-rich diet. During a professional tennis match, for example, a certified referee is present to ensure that all the complex rules are followed fairly by both players. Even if an athlete ultimately loses a difficult match, the challenging experience builds deep emotional resilience and strong character. Ultimately, true champions are the ones who know how to analyze their mistakes and learn from failure.",
      textPt: "Participar de esportes profissionais exige não apenas talento natural, mas também intensa disciplina diária e a orientação de um ótimo treinador. Para atuar com sucesso no mais alto nível competitivo possível, os atletas de elite devem ir à academia diariamente e manter meticulosamente uma dieta muito rigorosa e rica em nutrientes. Durante uma partida de tênis profissional, por exemplo, um árbitro certificado está presente para garantir que todas as regras complexas sejam seguidas de forma justa por ambos os jogadores. Mesmo que um atleta acabe perdendo uma partida difícil, a experiência desafiadora constrói profunda resiliência emocional e forte caráter. No final das contas, os verdadeiros campeões são aqueles que sabem analisar seus erros e aprender com o fracasso.",
      questions: [
        { question: "What do professional sports require?", options: ["Intense discipline and a great coach", "Only natural talent", "A lot of free time", "Expensive equipment"], correctIndex: 0, explanation: "They require 'intense daily discipline and the guidance of a great coach'." },
        { question: "What must athletes do to perform at the highest level?", options: ["Go to the gym daily and maintain a strict diet", "Rest constantly", "Eat lots of sweets", "Ignore the coach"], correctIndex: 0, explanation: "They must 'go to the gym daily and meticulously maintain a very strict, nutrient-rich diet'." },
        { question: "What is the role of the referee?", options: ["To ensure rules are followed fairly", "To coach the players", "To sell tickets", "To play in the match"], correctIndex: 0, explanation: "A referee ensures 'that all the complex rules are followed fairly'." },
        { question: "What do true champions know how to do?", options: ["Learn from failure", "Always win", "Cheat the referee", "Avoid the gym"], correctIndex: 0, explanation: "True champions are the ones who 'know how to analyze their mistakes and learn from failure'." }
      ]
    }
  },
  "supermercado": {
    level1: {
      textEn: "Every Friday afternoon, I have a routine where I go to the large supermarket near my house. As soon as I arrive, I take a metal shopping cart and slowly walk down the bright aisles to find everything I need. I usually buy fresh bread, cold milk, and some sweet fruit like apples and bananas for the week. When my cart is finally full, I go straight to the cashier at the front of the store to pay for my items. Before leaving the store, I always check the paper receipt carefully to make sure the final price is absolutely correct.",
      textPt: "Toda sexta-feira à tarde, tenho a rotina de ir ao grande supermercado perto da minha casa. Assim que chego, pego um carrinho de compras de metal e ando lentamente pelos corredores iluminados para encontrar tudo o que preciso. Costumo comprar pão fresco, leite frio e algumas frutas doces como maçãs e bananas para a semana. Quando meu carrinho finalmente está cheio, vou direto ao caixa na frente da loja para pagar meus itens. Antes de sair da loja, sempre verifico o recibo de papel com cuidado para ter certeza de que o preço final está absolutamente correto.",
      questions: [
        { question: "When does the author go to the supermarket?", options: ["Every Friday", "Every Sunday", "Every morning", "Once a month"], correctIndex: 0, explanation: "They go 'Every Friday afternoon'." },
        { question: "What items does the author mention buying?", options: ["Bread, milk, and fruit", "Meat and vegetables", "Clothes and shoes", "Candy and soda"], correctIndex: 0, explanation: "They buy 'fresh bread, cold milk, and some sweet fruit'." },
        { question: "Who does the author go to when the cart is full?", options: ["The cashier", "The manager", "A security guard", "A friend"], correctIndex: 0, explanation: "They go 'straight to the cashier at the front of the store to pay'." },
        { question: "Why do they check the receipt?", options: ["To make sure the price is correct", "To see if they won a prize", "To find a discount code", "To keep it for taxes"], correctIndex: 0, explanation: "They check the receipt 'to make sure the final price is absolutely correct'." }
      ]
    },
    level2: {
      textEn: "Navigating through a massive modern grocery store can be extremely overwhelming if you don't take the time to write down a detailed list beforehand. Last weekend, I decided it was time to comprehensively stock up on healthy vegetables and various dairy products for my new diet. I confidently walked into the busy bakery section, only to discover that they had completely sold out of my absolute favorite whole-wheat bread. Because it was a Saturday, I unfortunately ended up waiting in a very long, slow-moving queue at the checkout counter. However, the wait was worth it because the friendly cashier found a great, unexpected discount bargain for some of my more expensive items. Ultimately, being meticulously organized before shopping saves you a significant amount of both time and money.",
      textPt: "Navegar por um enorme supermercado moderno pode ser extremamente avassalador se você não reservar um tempo para escrever uma lista detalhada com antecedência. No fim de semana passado, decidi que era hora de fazer um estoque abrangente de vegetais saudáveis e vários laticínios para minha nova dieta. Entrei com confiança na movimentada seção da padaria, apenas para descobrir que o meu pão integral favorito havia esgotado completamente. Como era sábado, infelizmente acabei esperando em uma fila muito longa e lenta no caixa. No entanto, a espera valeu a pena porque o caixa simpático encontrou uma ótima pechincha de desconto inesperada para alguns dos meus itens mais caros. Em última análise, ser meticulosamente organizado antes de fazer compras economiza uma quantidade significativa de tempo e dinheiro.",
      questions: [
        { question: "What can make grocery shopping overwhelming?", options: ["Not having a list", "Buying too much bread", "Going on a weekend", "Using a shopping cart"], correctIndex: 0, explanation: "It can be overwhelming 'if you don't take the time to write down a detailed list'." },
        { question: "What did the author want to stock up on?", options: ["Vegetables and dairy products", "Meat and fish", "Fruit and juice", "Sweets and bread"], correctIndex: 0, explanation: "They wanted to stock up on 'healthy vegetables and various dairy products'." },
        { question: "What happened in the bakery section?", options: ["They had sold out of the author's favorite bread", "They found a great bargain", "The line was too long", "They bought a lot of cakes"], correctIndex: 0, explanation: "They discovered that they 'had completely sold out of my absolute favorite whole-wheat bread'." },
        { question: "What is the benefit of being organized?", options: ["It saves time and money", "It helps you find the bakery", "It makes the queue shorter", "It gets you free groceries"], correctIndex: 0, explanation: "Being meticulously organized 'saves you a significant amount of both time and money'." }
      ]
    }
  }
};

function injectData(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const [id, reading] of Object.entries(data)) {
    const scenarioStart = content.indexOf(`id: "${id}"`);
    if (scenarioStart === -1) continue;

    let nextId = content.indexOf('id: "', scenarioStart + 10);
    if (nextId === -1) nextId = content.length;
    let section = content.slice(scenarioStart, nextId);

    const readingStr = 'reading: ' + JSON.stringify(reading, null, 6);
    const readingStart = section.indexOf('    reading: {');
    const vocabStart = section.indexOf('    vocabulary: [');
    
    if (readingStart !== -1 && vocabStart !== -1 && vocabStart > readingStart) {
      section = section.slice(0, readingStart) + '    ' + readingStr + ',\n' + section.slice(vocabStart);
    }

    content = content.slice(0, scenarioStart) + section + content.slice(nextId);
  }

  fs.writeFileSync(filePath, content);
}

injectData('./data/scenarios1.ts');
console.log("Injected MEDIUM Extended Reading into scenarios1.ts");
