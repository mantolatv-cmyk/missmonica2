const fs = require('fs');

const data1 = {
  "familia": {
    tf_a1_p1: [
      { statement: "Your mother's sister is your aunt.", statementPt: "A irmã da sua mãe é sua tia.", isTrue: true, explanation: "Aunt is tia." },
      { statement: "A father is a woman.", statementPt: "Um pai é uma mulher.", isTrue: false, explanation: "Father is a man." },
      { statement: "Your grandfather is your mother's or father's father.", statementPt: "Seu avô é o pai da sua mãe ou do seu pai.", isTrue: true, explanation: "Grandfather is avô." },
      { statement: "A brother is your female sibling.", statementPt: "Um irmão é a sua irmã do sexo feminino.", isTrue: false, explanation: "Sister is female. Brother is male." },
      { statement: "Your grandmother is older than you.", statementPt: "Sua avó é mais velha que você.", isTrue: true, explanation: "Grandmother is avó." },
      { statement: "Cousins are not part of your family.", statementPt: "Primos não são parte da sua família.", isTrue: false, explanation: "Cousins are relatives." }
    ],
    sp_a1_p1: [
      { question: "Do you have a brother or a sister?", translation: "Você tem um irmão ou uma irmã?" },
      { question: "What is your mother's name?", translation: "Qual é o nome da sua mãe?" },
      { question: "Where do your parents live?", translation: "Onde seus pais moram?" }
    ],
    tf_a1_p2: [
      { statement: "Your sister's son is your nephew.", statementPt: "O filho da sua irmã é seu sobrinho.", isTrue: true, explanation: "Nephew is sobrinho." },
      { statement: "A wife is a man.", statementPt: "Uma esposa é um homem.", isTrue: false, explanation: "Husband is man, wife is woman." },
      { statement: "Your son's son is your grandson.", statementPt: "O filho do seu filho é seu neto.", isTrue: true, explanation: "Grandson is neto." },
      { statement: "A mother-in-law is your husband's or wife's mother.", statementPt: "Uma sogra é a mãe do seu marido ou esposa.", isTrue: true, explanation: "Mother-in-law is sogra." },
      { statement: "A stepfather is your biological father.", statementPt: "Um padrasto é o seu pai biológico.", isTrue: false, explanation: "Stepfather is padrasto." },
      { statement: "Your brother's daughter is your niece.", statementPt: "A filha do seu irmão é sua sobrinha.", isTrue: true, explanation: "Niece is sobrinha." }
    ],
    sp_a1_p2: [
      { question: "Do you have a nephew or a niece?", translation: "Você tem um sobrinho ou uma sobrinha?" },
      { question: "Is your husband or wife tall?", translation: "Seu marido ou esposa é alto(a)?" },
      { question: "Do you like your mother-in-law?", translation: "Você gosta da sua sogra?" }
    ],
    tf_b1_p1: [
      { statement: "A dedicated mother often sacrifices her own free time for her children.", statementPt: "Uma mãe dedicada frequentemente sacrifica seu próprio tempo livre pelos filhos.", isTrue: true, explanation: "Mother means mãe." },
      { statement: "It is impossible for a cousin to become a close friend over the years.", statementPt: "É impossível para um primo se tornar um amigo íntimo com o passar dos anos.", isTrue: false, explanation: "Cousins can be close friends." },
      { statement: "An uncle can provide valuable guidance to his nephews.", statementPt: "Um tio pode fornecer conselhos valiosos aos seus sobrinhos.", isTrue: true, explanation: "Uncle means tio." },
      { statement: "Parents rarely care about the well-being of their offspring.", statementPt: "Os pais raramente se importam com o bem-estar da sua prole.", isTrue: false, explanation: "Parents usually care deeply." },
      { statement: "A grandmother often shares wise stories from her past experiences.", statementPt: "Uma avó frequentemente compartilha histórias sábias de suas experiências passadas.", isTrue: true, explanation: "Grandmother is avó." },
      { statement: "Having a supportive brother can make difficult times easier to endure.", statementPt: "Ter um irmão que apoia pode tornar tempos difíceis mais fáceis de suportar.", isTrue: true, explanation: "Brother is irmão." }
    ],
    sp_b1_p1: [
      { question: "How has your father influenced your major life decisions?", translation: "Como o seu pai influenciou suas decisões importantes de vida?" },
      { question: "Do you believe parents should be strict with their children?", translation: "Você acredita que os pais devem ser rigorosos com seus filhos?" },
      { question: "What is the most valuable lesson your grandmother taught you?", translation: "Qual foi a lição mais valiosa que sua avó lhe ensinou?" }
    ],
    tf_b1_p2: [
      { statement: "A supportive husband shares the household responsibilities equally.", statementPt: "Um marido prestativo compartilha as responsabilidades domésticas igualmente.", isTrue: true, explanation: "Husband is marido." },
      { statement: "Your father-in-law is legally related to you by marriage.", statementPt: "Seu sogro é legalmente parente seu por meio de casamento.", isTrue: true, explanation: "Father-in-law is sogro." },
      { statement: "A stepmother is always portrayed as a villain in modern society.", statementPt: "Uma madrasta é sempre retratada como vilã na sociedade moderna.", isTrue: false, explanation: "Stepmother is madrasta, not necessarily a villain." },
      { statement: "Watching a grandson grow up brings immense joy to grandparents.", statementPt: "Ver um neto crescer traz uma alegria imensa aos avós.", isTrue: true, explanation: "Grandson is neto." },
      { statement: "A niece is the son of your sibling.", statementPt: "Uma sobrinha é o filho do seu irmão(ã).", isTrue: false, explanation: "Niece is daughter (filha)." },
      { statement: "Maintaining a good relationship with a mother-in-law requires patience and respect.", statementPt: "Manter um bom relacionamento com uma sogra exige paciência e respeito.", isTrue: true, explanation: "Mother-in-law is sogra." }
    ],
    sp_b1_p2: [
      { question: "How would you handle a disagreement with your father-in-law?", translation: "Como você lidaria com uma discordância com seu sogro?" },
      { question: "What are the challenges of becoming a stepfather or stepmother?", translation: "Quais são os desafios de se tornar um padrasto ou madrasta?" },
      { question: "How does having a nephew or niece change your perspective on family?", translation: "Como ter um sobrinho ou sobrinha muda sua perspectiva sobre família?" }
    ]
  },
  "amigos": {
    tf_a1_p1: [
      { statement: "You hang out with your friends.", statementPt: "Você sai com os seus amigos.", isTrue: true, explanation: "Hang out means sair para passar tempo." },
      { statement: "A best friend is someone you don't like.", statementPt: "Um melhor amigo é alguém de quem você não gosta.", isTrue: false, explanation: "Best friend is seu melhor amigo." },
      { statement: "You go to a party to have fun.", statementPt: "Você vai a uma festa para se divertir.", isTrue: true, explanation: "Party is festa, fun is diversão." },
      { statement: "A group is only one person.", statementPt: "Um grupo é apenas uma pessoa.", isTrue: false, explanation: "Group means grupo (mais de um)." },
      { statement: "You invite people to your house.", statementPt: "Você convida pessoas para sua casa.", isTrue: true, explanation: "Invite is convidar." },
      { statement: "When you share, you give something to others.", statementPt: "Quando você compartilha, você dá algo para os outros.", isTrue: true, explanation: "Share is compartilhar." }
    ],
    sp_a1_p1: [
      { question: "Do you like to chat with your friends?", translation: "Você gosta de bater papo com seus amigos?" },
      { question: "When do you meet up with your group?", translation: "Quando você se encontra com seu grupo?" },
      { question: "Who is your best friend?", translation: "Quem é o seu melhor amigo?" }
    ],
    tf_a1_p2: [
      { statement: "You must trust your friends.", statementPt: "Você deve confiar nos seus amigos.", isTrue: true, explanation: "Trust means confiar." },
      { statement: "To apologize means to say you are happy.", statementPt: "Pedir desculpas significa dizer que você está feliz.", isTrue: false, explanation: "Apologize is pedir desculpas." },
      { statement: "Friends support each other.", statementPt: "Amigos se apoiam.", isTrue: true, explanation: "Support means apoiar." },
      { statement: "A joke makes people cry.", statementPt: "Uma piada faz as pessoas chorarem.", isTrue: false, explanation: "A joke makes people laugh." },
      { statement: "You get along with good friends.", statementPt: "Você se dá bem com bons amigos.", isTrue: true, explanation: "Get along is dar-se bem." },
      { statement: "Keeping a secret means you don't tell anyone.", statementPt: "Guardar um segredo significa que você não conta a ninguém.", isTrue: true, explanation: "Keep a secret is guardar segredo." }
    ],
    sp_a1_p2: [
      { question: "Can you keep a secret?", translation: "Você consegue guardar um segredo?" },
      { question: "Do you help out your friends?", translation: "Você ajuda os seus amigos?" },
      { question: "Do you always get along with people?", translation: "Você sempre se dá bem com as pessoas?" }
    ],
    tf_b1_p1: [
      { statement: "Hanging out with a diverse group can broaden your perspective.", statementPt: "Sair com um grupo diversificado pode ampliar sua perspectiva.", isTrue: true, explanation: "Hang out is sair, group is grupo." },
      { statement: "It is impossible to chat online and form a meaningful relationship.", statementPt: "É impossível bater papo online e formar um relacionamento significativo.", isTrue: false, explanation: "Chat is bater papo." },
      { statement: "A best friend is usually someone you can rely on during tough times.", statementPt: "Um melhor amigo é geralmente alguém com quem você pode contar em tempos difíceis.", isTrue: true, explanation: "Best friend is melhor amigo." },
      { statement: "Throwing a surprise party requires careful planning and coordination.", statementPt: "Dar uma festa surpresa requer planejamento cuidadoso e coordenação.", isTrue: true, explanation: "Party is festa." },
      { statement: "Sharing your personal space is always an easy and stress-free experience.", statementPt: "Compartilhar seu espaço pessoal é sempre uma experiência fácil e sem estresse.", isTrue: false, explanation: "Share is compartilhar." },
      { statement: "Meeting up with old acquaintances can bring back nostalgic memories.", statementPt: "Encontrar velhos conhecidos pode trazer memórias nostálgicas.", isTrue: true, explanation: "Meet up is encontrar." }
    ],
    sp_b1_p1: [
      { question: "How do you decide who to invite to an exclusive event?", translation: "Como você decide quem convidar para um evento exclusivo?" },
      { question: "What makes a group of individuals become true friends?", translation: "O que faz um grupo de indivíduos se tornarem verdadeiros amigos?" },
      { question: "Do you prefer to chat via messages or meet up in person?", translation: "Você prefere bater papo por mensagens ou se encontrar pessoalmente?" }
    ],
    tf_b1_p2: [
      { statement: "Mutual trust is the fundamental basis of any healthy relationship.", statementPt: "A confiança mútua é a base fundamental de qualquer relacionamento saudável.", isTrue: true, explanation: "Trust is confiar/confiança." },
      { statement: "Arguing with someone means the friendship is completely over.", statementPt: "Discutir com alguém significa que a amizade acabou completamente.", isTrue: false, explanation: "Argue is discutir." },
      { statement: "You should apologize sincerely when you realize you have made a mistake.", statementPt: "Você deve pedir desculpas sinceramente quando perceber que cometeu um erro.", isTrue: true, explanation: "Apologize is pedir desculpas." },
      { statement: "Giving constructive advice is a way to support your peers.", statementPt: "Dar um conselho construtivo é uma forma de apoiar seus colegas.", isTrue: true, explanation: "Advice is conselho, support is apoiar." },
      { statement: "Telling an inappropriate joke can ruin a formal introduction.", statementPt: "Contar uma piada inadequada pode arruinar uma apresentação formal.", isTrue: true, explanation: "Joke is piada, introductions are apresentações." },
      { statement: "Getting along with coworkers is unnecessary in a professional environment.", statementPt: "Dar-se bem com colegas de trabalho é desnecessário em um ambiente profissional.", isTrue: false, explanation: "Get along is dar-se bem." }
    ],
    sp_b1_p2: [
      { question: "How difficult is it for you to apologize after you argue with someone?", translation: "Quão difícil é para você pedir desculpas depois de discutir com alguém?" },
      { question: "What is the best piece of advice a friend has ever given you?", translation: "Qual foi o melhor conselho que um amigo já lhe deu?" },
      { question: "Why is it crucial to keep a secret when someone confides in you?", translation: "Por que é crucial guardar um segredo quando alguém confia em você?" }
    ]
  },
  "corpo": {
    tf_a1_p1: [
      { statement: "You have hair on your head.", statementPt: "Você tem cabelo na sua cabeça.", isTrue: true, explanation: "Hair is cabelo, head is cabeça." },
      { statement: "You use your ears to eat.", statementPt: "Você usa suas orelhas para comer.", isTrue: false, explanation: "Ears are for hearing." },
      { statement: "Your eyes are on your face.", statementPt: "Seus olhos estão no seu rosto.", isTrue: true, explanation: "Eyes is olhos." },
      { statement: "A human has four arms.", statementPt: "Um humano tem quatro braços.", isTrue: false, explanation: "Humans have two arms." },
      { statement: "You walk with your legs and feet.", statementPt: "Você anda com suas pernas e pés.", isTrue: true, explanation: "Leg is perna, foot is pé." },
      { statement: "Your nose is below your eyes.", statementPt: "Seu nariz fica abaixo dos seus olhos.", isTrue: true, explanation: "Nose is nariz." }
    ],
    sp_a1_p1: [
      { question: "What color are your eyes?", translation: "De que cor são os seus olhos?" },
      { question: "Is your hair long or short?", translation: "Seu cabelo é longo ou curto?" },
      { question: "Do you wash your hands every day?", translation: "Você lava suas mãos todos os dias?" }
    ],
    tf_a1_p2: [
      { statement: "You have teeth inside your mouth.", statementPt: "Você tem dentes dentro da sua boca.", isTrue: true, explanation: "Teeth is dentes." },
      { statement: "Your shoulder connects your arm to your body.", statementPt: "Seu ombro conecta seu braço ao seu corpo.", isTrue: true, explanation: "Shoulder is ombro." },
      { statement: "You have fingers on your feet.", statementPt: "Você tem dedos da mão nos seus pés.", isTrue: false, explanation: "Fingers are on the hands." },
      { statement: "Your stomach is in your back.", statementPt: "Seu estômago fica nas suas costas.", isTrue: false, explanation: "Stomach is estômago, back is costas." },
      { statement: "You have a neck below your head.", statementPt: "Você tem um pescoço abaixo da sua cabeça.", isTrue: true, explanation: "Neck is pescoço." },
      { statement: "Lips are part of your mouth.", statementPt: "Lábios são parte da sua boca.", isTrue: true, explanation: "Lips is lábios." }
    ],
    sp_a1_p2: [
      { question: "Does your back hurt?", translation: "Suas costas doem?" },
      { question: "How many fingers do you have?", translation: "Quantos dedos da mão você tem?" },
      { question: "Can you touch your toes?", translation: "Você consegue tocar os dedos dos pés?" }
    ],
    tf_b1_p1: [
      { statement: "Protecting your head with a helmet is essential when riding a motorcycle.", statementPt: "Proteger sua cabeça com um capacete é essencial ao andar de moto.", isTrue: true, explanation: "Head is cabeça." },
      { statement: "Regular exercise can strengthen the muscles in your legs and arms.", statementPt: "Exercício regular pode fortalecer os músculos de suas pernas e braços.", isTrue: true, explanation: "Legs and arms." },
      { statement: "It is impossible to communicate emotions using only your eyes.", statementPt: "É impossível comunicar emoções usando apenas os olhos.", isTrue: false, explanation: "Eyes express emotions." },
      { statement: "Washing your hands frequently helps prevent the spread of diseases.", statementPt: "Lavar as mãos frequentemente ajuda a prevenir a propagação de doenças.", isTrue: true, explanation: "Hand is mão." },
      { statement: "Your ears are responsible for maintaining your body's balance.", statementPt: "Suas orelhas são responsáveis por manter o equilíbrio do seu corpo.", isTrue: true, explanation: "The inner ear controls balance." },
      { statement: "A blocked nose can significantly reduce your ability to taste food.", statementPt: "Um nariz entupido pode reduzir significativamente sua capacidade de sentir o gosto da comida.", isTrue: true, explanation: "Nose is nariz." }
    ],
    sp_b1_p1: [
      { question: "How do you protect your eyes when you spend hours looking at a screen?", translation: "Como você protege seus olhos quando passa horas olhando para uma tela?" },
      { question: "Have you ever injured your foot or leg while playing a sport?", translation: "Você já machucou seu pé ou perna enquanto praticava um esporte?" },
      { question: "Why is it important to take care of your hair and skin?", translation: "Por que é importante cuidar do seu cabelo e pele?" }
    ],
    tf_b1_p2: [
      { statement: "Poor posture can lead to chronic pain in your back and neck.", statementPt: "A má postura pode levar à dor crônica em suas costas e pescoço.", isTrue: true, explanation: "Back is costas, neck is pescoço." },
      { statement: "Your stomach produces acids to digest the meals you consume.", statementPt: "Seu estômago produz ácidos para digerir as refeições que você consome.", isTrue: true, explanation: "Stomach is estômago." },
      { statement: "Brushing your teeth twice a day prevents painful cavities.", statementPt: "Escovar os dentes duas vezes ao dia previne cáries dolorosas.", isTrue: true, explanation: "Teeth is dentes." },
      { statement: "You use your tongue to hear high-pitched sounds.", statementPt: "Você usa sua língua para ouvir sons agudos.", isTrue: false, explanation: "Tongue is língua (for taste)." },
      { statement: "A dislocated shoulder requires immediate medical attention.", statementPt: "Um ombro deslocado requer atenção médica imediata.", isTrue: true, explanation: "Shoulder is ombro." },
      { statement: "Your knees are the joints that connect your fingers to your hands.", statementPt: "Seus joelhos são as articulações que conectam seus dedos às suas mãos.", isTrue: false, explanation: "Knee is joelho." }
    ],
    sp_b1_p2: [
      { question: "What kind of stretches do you do to relieve tension in your neck and shoulders?", translation: "Que tipo de alongamentos você faz para aliviar a tensão no pescoço e nos ombros?" },
      { question: "Have you ever experienced a severe stomach ache after eating spicy food?", translation: "Você já teve uma dor de estômago forte depois de comer comida apimentada?" },
      { question: "How crucial are healthy teeth for your overall well-being?", translation: "Quão cruciais são dentes saudáveis para o seu bem-estar geral?" }
    ]
  },
  "casa": {
    tf_a1_p1: [
      { statement: "You sleep in the bedroom.", statementPt: "Você dorme no quarto.", isTrue: true, explanation: "Bedroom is quarto." },
      { statement: "You cook in the bathroom.", statementPt: "Você cozinha no banheiro.", isTrue: false, explanation: "Kitchen is for cooking." },
      { statement: "You watch TV in the living room.", statementPt: "Você assiste TV na sala de estar.", isTrue: true, explanation: "Living room is sala." },
      { statement: "You take out the trash to keep the house clean.", statementPt: "Você tira o lixo para manter a casa limpa.", isTrue: true, explanation: "Take out the trash is tirar o lixo." },
      { statement: "Laundry means making food.", statementPt: "Lavanderia/lavar roupa significa fazer comida.", isTrue: false, explanation: "Laundry is lavar roupa." },
      { statement: "You do the dishes after you eat.", statementPt: "Você lava a louça depois de comer.", isTrue: true, explanation: "Do the dishes is lavar a louça." }
    ],
    sp_a1_p1: [
      { question: "Do you clean your bedroom?", translation: "Você limpa o seu quarto?" },
      { question: "Who does the dishes in your house?", translation: "Quem lava a louça na sua casa?" },
      { question: "Is your kitchen big or small?", translation: "Sua cozinha é grande ou pequena?" }
    ],
    tf_a1_p2: [
      { statement: "A garden has flowers and grass.", statementPt: "Um jardim tem flores e grama.", isTrue: true, explanation: "Garden is jardim." },
      { statement: "You park your car in the bathroom.", statementPt: "Você estaciona o seu carro no banheiro.", isTrue: false, explanation: "Car goes in the garage." },
      { statement: "You use a mirror to see your face.", statementPt: "Você usa um espelho para ver o seu rosto.", isTrue: true, explanation: "Mirror is espelho." },
      { statement: "A roof is on top of the house.", statementPt: "Um telhado fica no topo da casa.", isTrue: true, explanation: "Roof is telhado." },
      { statement: "You iron the clothes to make them dirty.", statementPt: "Você passa as roupas para deixá-las sujas.", isTrue: false, explanation: "Iron the clothes makes them smooth." },
      { statement: "You look outside through a window.", statementPt: "Você olha para fora através de uma janela.", isTrue: true, explanation: "Window is janela." }
    ],
    sp_a1_p2: [
      { question: "Do you have a garden?", translation: "Você tem um jardim?" },
      { question: "Who irons the clothes in your house?", translation: "Quem passa as roupas na sua casa?" },
      { question: "Is there a mirror in your room?", translation: "Tem um espelho no seu quarto?" }
    ],
    tf_b1_p1: [
      { statement: "Designing a spacious living room requires creativity and good taste.", statementPt: "Projetar uma sala de estar espaçosa requer criatividade e bom gosto.", isTrue: true, explanation: "Living room is sala de estar." },
      { statement: "A well-equipped kitchen can inspire people to prepare healthier meals.", statementPt: "Uma cozinha bem equipada pode inspirar as pessoas a preparar refeições mais saudáveis.", isTrue: true, explanation: "Kitchen is cozinha." },
      { statement: "Sweeping the floor is an outdated chore that no one does anymore.", statementPt: "Varrer o chão é uma tarefa ultrapassada que ninguém mais faz.", isTrue: false, explanation: "Sweep the floor is varrer o chão, still common." },
      { statement: "Keeping the bathroom sanitized is crucial for maintaining personal hygiene.", statementPt: "Manter o banheiro higienizado é crucial para manter a higiene pessoal.", isTrue: true, explanation: "Bathroom is banheiro." },
      { statement: "Doing the laundry is a weekly chore that requires sorting the clothes properly.", statementPt: "Lavar a roupa é uma tarefa semanal que exige separar as roupas adequadamente.", isTrue: true, explanation: "Laundry is lavar roupa." },
      { statement: "Taking out the trash should be avoided to attract wildlife.", statementPt: "Tirar o lixo deve ser evitado para atrair vida selvagem.", isTrue: false, explanation: "Take out the trash is tirar o lixo." }
    ],
    sp_b1_p1: [
      { question: "How do you organize your schedule to manage tasks like cleaning and doing the dishes?", translation: "Como você organiza sua agenda para gerenciar tarefas como limpar e lavar a louça?" },
      { question: "What are the most essential appliances in a modern kitchen?", translation: "Quais são os eletrodomésticos mais essenciais em uma cozinha moderna?" },
      { question: "Why is it important to make the bed and keep your bedroom organized?", translation: "Por que é importante arrumar a cama e manter seu quarto organizado?" }
    ],
    tf_b1_p2: [
      { statement: "Dusting the furniture regularly prevents the accumulation of allergens.", statementPt: "Tirar o pó dos móveis regularmente previne o acúmulo de alérgenos.", isTrue: true, explanation: "Dust the furniture is tirar o pó." },
      { statement: "A sturdy roof is essential to protect the house from harsh weather conditions.", statementPt: "Um telhado resistente é essencial para proteger a casa de condições climáticas severas.", isTrue: true, explanation: "Roof is telhado." },
      { statement: "Vacuuming the carpets is much faster than sweeping them with a broom.", statementPt: "Aspirar os tapetes é muito mais rápido do que varrê-los com uma vassoura.", isTrue: true, explanation: "Vacuum is aspirar." },
      { statement: "You should plant vegetables in the garage to receive maximum sunlight.", statementPt: "Você deve plantar vegetais na garagem para receber o máximo de luz solar.", isTrue: false, explanation: "Garden is for planting, not garage." },
      { statement: "Installing double-glazed windows can improve the energy efficiency of a house.", statementPt: "Instalar janelas com vidro duplo pode melhorar a eficiência energética de uma casa.", isTrue: true, explanation: "Window is janela." },
      { statement: "Ironing the clothes is a relaxing hobby for most teenagers.", statementPt: "Passar as roupas é um hobby relaxante para a maioria dos adolescentes.", isTrue: false, explanation: "Iron the clothes is passar roupa, usually a chore." }
    ],
    sp_b1_p2: [
      { question: "What are the advantages of having a large garden or yard?", translation: "Quais são as vantagens de ter um grande jardim ou quintal?" },
      { question: "Do you find it tedious to vacuum and dust the furniture?", translation: "Você acha entediante aspirar e tirar o pó dos móveis?" },
      { question: "How would you repair a broken door or window?", translation: "Como você consertaria uma porta ou janela quebrada?" }
    ]
  }
};

function processScenarios(dataObj, targetFile) {
  let content = fs.readFileSync(targetFile, 'utf8');

  for (const id in dataObj) {
    if (content.indexOf(`id: "${id}"`) === -1) continue;

    const startIndex = content.indexOf(`id: "${id}"`);
    let nextId = content.indexOf('id: "', startIndex + 10);
    if (nextId === -1) nextId = content.length;
    let section = content.slice(startIndex, nextId);

    const tfRegex = /trueOrFalse:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;
    const tfL2Regex = /trueOrFalseLevel2:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;
    const spRegex = /speakingPractice:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;
    const spL2Regex = /speakingPracticeLevel2:\s*\{[\s\S]*?part1:\s*\[([\s\S]*?)\],\s*part2:\s*\[([\s\S]*?)\]\s*\}/;

    const d = dataObj[id];

    // trueOrFalse Level 1
    const newTfStr = `trueOrFalse: {
      part1: ${JSON.stringify(d.tf_a1_p1, null, 8).replace(/\]$/, '      ]')},
      part2: ${JSON.stringify(d.tf_a1_p2, null, 8).replace(/\]$/, '      ]')}
    }`;
    section = section.replace(tfRegex, newTfStr);

    // trueOrFalse Level 2
    const newTfL2Str = `trueOrFalseLevel2: {
      part1: ${JSON.stringify(d.tf_b1_p1, null, 8).replace(/\]$/, '      ]')},
      part2: ${JSON.stringify(d.tf_b1_p2, null, 8).replace(/\]$/, '      ]')}
    }`;
    section = section.replace(tfL2Regex, newTfL2Str);

    // speakingPractice Level 1
    const newSpStr = `speakingPractice: {
      part1: ${JSON.stringify(d.sp_a1_p1, null, 8).replace(/\]$/, '      ]')},
      part2: ${JSON.stringify(d.sp_a1_p2, null, 8).replace(/\]$/, '      ]')}
    }`;
    section = section.replace(spRegex, newSpStr);

    // speakingPractice Level 2
    const newSpL2Str = `speakingPracticeLevel2: {
      part1: ${JSON.stringify(d.sp_b1_p1, null, 8).replace(/\]$/, '      ]')},
      part2: ${JSON.stringify(d.sp_b1_p2, null, 8).replace(/\]$/, '      ]')}
    }`;
    section = section.replace(spL2Regex, newSpL2Str);

    content = content.slice(0, startIndex) + section + content.slice(nextId);
    console.log(`Updated scenario ${id} in ${targetFile}`);
  }

  fs.writeFileSync(targetFile, content);
}

processScenarios(data1, '../data/scenarios1.ts');
console.log("Done part 1.");
