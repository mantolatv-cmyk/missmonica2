const fs = require('fs');

const data1 = {
  "compras": {
    tf_a1_p1: [
      { statement: "You wear clothes every day.", statementPt: "Você usa roupas todo dia.", isTrue: true, explanation: "Clothes is roupas." },
      { statement: "Shoes go on your hands.", statementPt: "Sapatos vão nas suas mãos.", isTrue: false, explanation: "Shoes go on your feet." },
      { statement: "Size means how big or small something is.", statementPt: "Tamanho significa quão grande ou pequeno algo é.", isTrue: true, explanation: "Size is tamanho." },
      { statement: "You try on clothes in the kitchen.", statementPt: "Você experimenta roupas na cozinha.", isTrue: false, explanation: "You try on clothes in the fitting room." },
      { statement: "A store is a place to buy things.", statementPt: "Uma loja é um lugar para comprar coisas.", isTrue: true, explanation: "Store is loja." },
      { statement: "A customer buys items.", statementPt: "Um cliente compra itens.", isTrue: true, explanation: "Customer is cliente." }
    ],
    sp_a1_p1: [
      { question: "What size are your shoes?", translation: "Qual é o tamanho dos seus sapatos?" },
      { question: "Do you like to go to the store?", translation: "Você gosta de ir à loja?" },
      { question: "Are these clothes expensive?", translation: "Estas roupas são caras?" }
    ],
    tf_a1_p2: [
      { statement: "A jacket keeps you warm.", statementPt: "Uma jaqueta te mantém aquecido.", isTrue: true, explanation: "Jacket is jaqueta." },
      { statement: "You wear pants on your head.", statementPt: "Você usa calças na sua cabeça.", isTrue: false, explanation: "You wear pants on your legs." },
      { statement: "A dress is a type of clothing.", statementPt: "Um vestido é um tipo de roupa.", isTrue: true, explanation: "Dress is vestido." },
      { statement: "You put money in a wallet.", statementPt: "Você guarda dinheiro numa carteira.", isTrue: true, explanation: "Wallet is carteira." },
      { statement: "A hat goes on your feet.", statementPt: "Um chapéu vai nos seus pés.", isTrue: false, explanation: "Hat goes on your head." },
      { statement: "Cheap means it costs a lot of money.", statementPt: "Barato significa que custa muito dinheiro.", isTrue: false, explanation: "Cheap means it doesn't cost much." }
    ],
    sp_a1_p2: [
      { question: "Do you wear a hat in the summer?", translation: "Você usa um chapéu no verão?" },
      { question: "Is your jacket cheap or expensive?", translation: "A sua jaqueta é barata ou cara?" },
      { question: "Do you have a wallet?", translation: "Você tem uma carteira?" }
    ],
    tf_b1_p1: [
      { statement: "Purchasing designer clothes often requires a significant financial investment.", statementPt: "Comprar roupas de grife muitas vezes requer um investimento financeiro significativo.", isTrue: true, explanation: "Clothes is roupas." },
      { statement: "Finding comfortable shoes is essential for people who stand all day.", statementPt: "Encontrar sapatos confortáveis é essencial para pessoas que ficam em pé o dia todo.", isTrue: true, explanation: "Shoes is sapatos." },
      { statement: "A fitting room provides a private space to try on different garments.", statementPt: "Um provador oferece um espaço privado para experimentar diferentes peças de roupa.", isTrue: true, explanation: "Fitting room is provador, try on is experimentar." },
      { statement: "A highly priced item is universally guaranteed to have the best quality.", statementPt: "Um item de preço alto é universalmente garantido de ter a melhor qualidade.", isTrue: false, explanation: "Price does not always guarantee quality." },
      { statement: "During a seasonal sale, customers can find significant discounts.", statementPt: "Durante uma liquidação sazonal, os clientes podem encontrar descontos significativos.", isTrue: true, explanation: "Sale is liquidação." },
      { statement: "An expensive luxury car is affordable for an average customer.", statementPt: "Um carro de luxo caro é acessível para um cliente médio.", isTrue: false, explanation: "Expensive means caro." }
    ],
    sp_b1_p1: [
      { question: "How important is it to try on clothes before buying them online?", translation: "Quão importante é experimentar roupas antes de comprá-las online?" },
      { question: "What strategies do you use to find the best price during a massive sale?", translation: "Quais estratégias você usa para encontrar o melhor preço durante uma grande liquidação?" },
      { question: "Have you ever regretted buying something extremely expensive?", translation: "Você já se arrependeu de comprar algo extremamente caro?" }
    ],
    tf_b1_p2: [
      { statement: "A leather wallet is known for its durability and elegant appearance.", statementPt: "Uma carteira de couro é conhecida por sua durabilidade e aparência elegante.", isTrue: true, explanation: "Wallet is carteira." },
      { statement: "Credit card fraud is a major concern when purchasing items internationally.", statementPt: "A fraude de cartão de crédito é uma grande preocupação ao comprar itens internacionalmente.", isTrue: true, explanation: "Credit card is cartão de crédito." },
      { statement: "Wearing a thick jacket is completely unnecessary during a freezing winter.", statementPt: "Usar uma jaqueta grossa é completamente desnecessário durante um inverno congelante.", isTrue: false, explanation: "Jacket is jaqueta, it is necessary." },
      { statement: "A luxurious dress is typically reserved for formal and special occasions.", statementPt: "Um vestido luxuoso é tipicamente reservado para ocasiões formais e especiais.", isTrue: true, explanation: "Dress is vestido." },
      { statement: "A wide-brimmed hat provides excellent protection from the sun's harsh rays.", statementPt: "Um chapéu de abas largas oferece excelente proteção contra os raios severos do sol.", isTrue: true, explanation: "Hat is chapéu." },
      { statement: "Paying with cash is completely obsolete in modern retail stores.", statementPt: "Pagar com dinheiro vivo está completamente obsoleto nas lojas de varejo modernas.", isTrue: false, explanation: "Cash is dinheiro vivo, still used." }
    ],
    sp_b1_p2: [
      { question: "What are the security advantages of using a credit card over carrying cash?", translation: "Quais são as vantagens de segurança de usar um cartão de crédito em vez de carregar dinheiro?" },
      { question: "Why do some people prefer wearing comfortable pants instead of a formal dress?", translation: "Por que algumas pessoas preferem usar calças confortáveis em vez de um vestido formal?" },
      { question: "Do you believe it is better to buy a cheap gift or something personalized?", translation: "Você acredita que é melhor comprar um presente barato ou algo personalizado?" }
    ]
  },
  "profissoes": {
    tf_a1_p1: [
      { statement: "A doctor helps sick people.", statementPt: "Um médico ajuda pessoas doentes.", isTrue: true, explanation: "Doctor is médico." },
      { statement: "A teacher works in a school.", statementPt: "Um professor trabalha em uma escola.", isTrue: true, explanation: "Teacher is professor." },
      { statement: "A chef fixes cars.", statementPt: "Um chef conserta carros.", isTrue: false, explanation: "A chef cooks food." },
      { statement: "A police officer keeps people safe.", statementPt: "Um policial mantém as pessoas seguras.", isTrue: true, explanation: "Police officer is policial." },
      { statement: "A mechanic works in a hospital.", statementPt: "Um mecânico trabalha em um hospital.", isTrue: false, explanation: "A mechanic works with cars." },
      { statement: "A lawyer helps with the law.", statementPt: "Um advogado ajuda com a lei.", isTrue: true, explanation: "Lawyer is advogado." }
    ],
    sp_a1_p1: [
      { question: "Is your father a doctor?", translation: "O seu pai é um médico?" },
      { question: "Do you want to be a teacher?", translation: "Você quer ser professor(a)?" },
      { question: "Does a mechanic work in an office?", translation: "Um mecânico trabalha em um escritório?" }
    ],
    tf_a1_p2: [
      { statement: "A dentist looks at your teeth.", statementPt: "Um dentista olha os seus dentes.", isTrue: true, explanation: "Dentist is dentista." },
      { statement: "A firefighter stops fires.", statementPt: "Um bombeiro para incêndios.", isTrue: true, explanation: "Firefighter is bombeiro." },
      { statement: "A pilot flies an airplane.", statementPt: "Um piloto voa em um avião.", isTrue: true, explanation: "Pilot is piloto." },
      { statement: "An artist drives a bus.", statementPt: "Um artista dirige um ônibus.", isTrue: false, explanation: "An artist makes art." },
      { statement: "A farmer grows food.", statementPt: "Um fazendeiro cultiva alimentos.", isTrue: true, explanation: "Farmer is fazendeiro." },
      { statement: "A boss is the leader of a company.", statementPt: "Um chefe é o líder de uma empresa.", isTrue: true, explanation: "Boss is chefe." }
    ],
    sp_a1_p2: [
      { question: "Have you ever been to a dentist?", translation: "Você já foi a um dentista?" },
      { question: "Do you want to be a pilot?", translation: "Você quer ser um piloto?" },
      { question: "Is your boss nice?", translation: "Seu chefe é legal?" }
    ],
    tf_b1_p1: [
      { statement: "A skilled doctor must continually update their medical knowledge.", statementPt: "Um médico habilidoso deve atualizar continuamente seus conhecimentos médicos.", isTrue: true, explanation: "Doctor is médico." },
      { statement: "An experienced engineer is essential for constructing complex bridges.", statementPt: "Um engenheiro experiente é essencial para construir pontes complexas.", isTrue: true, explanation: "Engineer is engenheiro." },
      { statement: "A corporate lawyer spends most of their time patrolling the streets.", statementPt: "Um advogado corporativo passa a maior parte do seu tempo patrulhando as ruas.", isTrue: false, explanation: "Lawyer is advogado, police officers patrol." },
      { statement: "Managing a successful restaurant requires a talented and organized chef.", statementPt: "Gerenciar um restaurante de sucesso requer um chef talentoso e organizado.", isTrue: true, explanation: "Chef is chef de cozinha." },
      { statement: "A dedicated nurse plays a vital role in patient recovery.", statementPt: "Um enfermeiro dedicado desempenha um papel vital na recuperação do paciente.", isTrue: true, explanation: "Nurse is enfermeiro." },
      { statement: "Working in an office environment completely eliminates the chance of stress.", statementPt: "Trabalhar em um ambiente de escritório elimina completamente a chance de estresse.", isTrue: false, explanation: "Office environments can be stressful." }
    ],
    sp_b1_p1: [
      { question: "What challenges does a dedicated teacher face in modern education?", translation: "Quais desafios um professor dedicado enfrenta na educação moderna?" },
      { question: "Why is the job of a police officer considered highly stressful?", translation: "Por que o trabalho de um policial é considerado altamente estressante?" },
      { question: "How does a mechanic diagnose complex problems in modern vehicles?", translation: "Como um mecânico diagnostica problemas complexos em veículos modernos?" }
    ],
    tf_b1_p2: [
      { statement: "A courageous firefighter often risks their life to rescue others in danger.", statementPt: "Um bombeiro corajoso frequentemente arrisca sua vida para resgatar outros em perigo.", isTrue: true, explanation: "Firefighter is bombeiro." },
      { statement: "A commercial pilot is responsible for the safety of hundreds of passengers.", statementPt: "Um piloto comercial é responsável pela segurança de centenas de passageiros.", isTrue: true, explanation: "Pilot is piloto." },
      { statement: "A successful artist only creates paintings and never explores other mediums.", statementPt: "Um artista de sucesso apenas cria pinturas e nunca explora outros meios.", isTrue: false, explanation: "Artists explore many mediums." },
      { statement: "A dedicated farmer must adapt to unpredictable weather patterns to succeed.", statementPt: "Um fazendeiro dedicado deve se adaptar a padrões climáticos imprevisíveis para ter sucesso.", isTrue: true, explanation: "Farmer is fazendeiro." },
      { statement: "Negotiating a fair salary is a crucial step when joining a new company.", statementPt: "Negociar um salário justo é um passo crucial ao entrar em uma nova empresa.", isTrue: true, explanation: "Salary is salário, company is empresa." },
      { statement: "A competent boss ignores the feedback and concerns of their employees.", statementPt: "Um chefe competente ignora o feedback e as preocupações de seus funcionários.", isTrue: false, explanation: "A competent boss listens to them." }
    ],
    sp_b1_p2: [
      { question: "How demanding is the daily routine of a professional dentist?", translation: "Quão exigente é a rotina diária de um dentista profissional?" },
      { question: "What makes a waiter provide outstanding customer service?", translation: "O que faz um garçom fornecer um atendimento ao cliente excepcional?" },
      { question: "How would you negotiate your salary with a demanding boss?", translation: "Como você negociaria seu salário com um chefe exigente?" }
    ]
  },
  "lugares": {
    tf_a1_p1: [
      { statement: "You play outside in a park.", statementPt: "Você brinca lá fora em um parque.", isTrue: true, explanation: "Park is parque." },
      { statement: "A hospital is a place to buy toys.", statementPt: "Um hospital é um lugar para comprar brinquedos.", isTrue: false, explanation: "Hospital is for sick people." },
      { statement: "Students learn in a school.", statementPt: "Alunos aprendem em uma escola.", isTrue: true, explanation: "School is escola." },
      { statement: "You read books in a library.", statementPt: "Você lê livros em uma biblioteca.", isTrue: true, explanation: "Library is biblioteca." },
      { statement: "Cars drive on the street.", statementPt: "Carros dirigem na rua.", isTrue: true, explanation: "Street is rua." },
      { statement: "You get money from a bank.", statementPt: "Você pega dinheiro de um banco.", isTrue: true, explanation: "Bank is banco." }
    ],
    sp_a1_p1: [
      { question: "Is the school near your house?", translation: "A escola é perto da sua casa?" },
      { question: "Do you wait at the bus stop?", translation: "Você espera no ponto de ônibus?" },
      { question: "Do you like to go to the park?", translation: "Você gosta de ir ao parque?" }
    ],
    tf_a1_p2: [
      { statement: "You eat at a restaurant.", statementPt: "Você come em um restaurante.", isTrue: true, explanation: "Restaurant is restaurante." },
      { statement: "A pharmacy sells medicine.", statementPt: "Uma farmácia vende remédio.", isTrue: true, explanation: "Pharmacy is farmácia." },
      { statement: "You take a flight from the airport.", statementPt: "Você pega um voo no aeroporto.", isTrue: true, explanation: "Airport is aeroporto." },
      { statement: "A museum is where you watch movies.", statementPt: "Um museu é onde você assiste a filmes.", isTrue: false, explanation: "Museum is museu (for history/art)." },
      { statement: "A bridge goes over the water.", statementPt: "Uma ponte passa por cima da água.", isTrue: true, explanation: "Bridge is ponte." },
      { statement: "Far means very close.", statementPt: "Longe significa muito perto.", isTrue: false, explanation: "Far is the opposite of close." }
    ],
    sp_a1_p2: [
      { question: "Is the airport far?", translation: "O aeroporto é longe?" },
      { question: "Have you been to a museum?", translation: "Você já foi a um museu?" },
      { question: "Do you see the traffic light?", translation: "Você vê o semáforo?" }
    ],
    tf_b1_p1: [
      { statement: "A well-maintained park provides a tranquil escape from urban chaos.", statementPt: "Um parque bem conservado oferece um refúgio tranquilo do caos urbano.", isTrue: true, explanation: "Park is parque." },
      { statement: "Modern hospitals are equipped with advanced technology for complex surgeries.", statementPt: "Hospitais modernos são equipados com tecnologia avançada para cirurgias complexas.", isTrue: true, explanation: "Hospital is hospital." },
      { statement: "A comprehensive public library offers access to extensive digital archives.", statementPt: "Uma biblioteca pública abrangente oferece acesso a extensos arquivos digitais.", isTrue: true, explanation: "Library is biblioteca." },
      { statement: "Going straight is always the best strategy to avoid navigating a busy street.", statementPt: "Seguir reto é sempre a melhor estratégia para evitar navegar em uma rua movimentada.", isTrue: false, explanation: "Sometimes you need to turn." },
      { statement: "A reliable bank guarantees the security of your financial assets.", statementPt: "Um banco confiável garante a segurança dos seus ativos financeiros.", isTrue: true, explanation: "Bank is banco." },
      { statement: "A school's infrastructure has no impact on a student's academic performance.", statementPt: "A infraestrutura de uma escola não tem impacto no desempenho acadêmico de um aluno.", isTrue: false, explanation: "It usually has an impact." }
    ],
    sp_b1_p1: [
      { question: "How does investing in a public park improve the local community?", translation: "Como o investimento em um parque público melhora a comunidade local?" },
      { question: "Why is it crucial to have a reliable bank near your business?", translation: "Por que é crucial ter um banco confiável perto do seu negócio?" },
      { question: "What challenges do students face when commuting to a distant school?", translation: "Que desafios os alunos enfrentam ao se deslocarem para uma escola distante?" }
    ],
    tf_b1_p2: [
      { statement: "An upscale restaurant often features exquisite dishes prepared by renowned chefs.", statementPt: "Um restaurante sofisticado muitas vezes apresenta pratos requintados preparados por chefs renomados.", isTrue: true, explanation: "Restaurant is restaurante." },
      { statement: "Navigating through a bustling airport requires patience and organization.", statementPt: "Navegar por um aeroporto movimentado exige paciência e organização.", isTrue: true, explanation: "Airport is aeroporto." },
      { statement: "A historical museum preserves artifacts that tell the story of ancient civilizations.", statementPt: "Um museu histórico preserva artefatos que contam a história de civilizações antigas.", isTrue: true, explanation: "Museum is museu." },
      { statement: "Ignoring a red traffic light can lead to severe and fatal accidents.", statementPt: "Ignorar um semáforo vermelho pode levar a acidentes graves e fatais.", isTrue: true, explanation: "Traffic light is semáforo." },
      { statement: "A sturdy bridge is exclusively built for pedestrians to cross small rivers.", statementPt: "Uma ponte resistente é construída exclusivamente para pedestres cruzarem pequenos rios.", isTrue: false, explanation: "Bridges are for cars and trains too." },
      { statement: "A local pharmacy is vital for dispensing prescribed medications safely.", statementPt: "Uma farmácia local é vital para dispensar medicamentos prescritos com segurança.", isTrue: true, explanation: "Pharmacy is farmácia." }
    ],
    sp_b1_p2: [
      { question: "What defines an unforgettable dining experience at a high-end restaurant?", translation: "O que define uma experiência gastronômica inesquecível em um restaurante de alto padrão?" },
      { question: "How has the architecture of modern museums evolved over the decades?", translation: "Como a arquitetura de museus modernos evoluiu ao longo das décadas?" },
      { question: "Why is it important to follow the traffic light signals at a busy corner?", translation: "Por que é importante seguir os sinais de trânsito em uma esquina movimentada?" }
    ]
  },
  "animais": {
    tf_a1_p1: [
      { statement: "A dog is a common pet.", statementPt: "Um cachorro é um animal de estimação comum.", isTrue: true, explanation: "Dog is cachorro, pet is animal de estimação." },
      { statement: "A bird swims in the sea.", statementPt: "Um pássaro nada no mar.", isTrue: false, explanation: "A bird flies." },
      { statement: "A cow gives us milk.", statementPt: "Uma vaca nos dá leite.", isTrue: true, explanation: "Cow is vaca." },
      { statement: "You feed a fish every day.", statementPt: "Você alimenta um peixe todos os dias.", isTrue: true, explanation: "Feed is alimentar, fish is peixe." },
      { statement: "A horse is a very small animal.", statementPt: "Um cavalo é um animal muito pequeno.", isTrue: false, explanation: "Horse is large." },
      { statement: "A vet is a doctor for animals.", statementPt: "Um veterinário é um médico para animais.", isTrue: true, explanation: "Vet is veterinário." }
    ],
    sp_a1_p1: [
      { question: "Do you have a pet?", translation: "Você tem um animal de estimação?" },
      { question: "Did you walk the dog today?", translation: "Você passeou com o cachorro hoje?" },
      { question: "Do you like cats or dogs?", translation: "Você gosta de gatos ou cachorros?" }
    ],
    tf_a1_p2: [
      { statement: "A chicken gives us eggs.", statementPt: "Uma galinha nos dá ovos.", isTrue: true, explanation: "Chicken is galinha." },
      { statement: "A lion is the king of the jungle.", statementPt: "Um leão é o rei da selva.", isTrue: true, explanation: "Lion is leão." },
      { statement: "A monkey has a long trunk.", statementPt: "Um macaco tem uma tromba longa.", isTrue: false, explanation: "An elephant has a trunk." },
      { statement: "A tiger has stripes.", statementPt: "Um tigre tem listras.", isTrue: true, explanation: "Tiger is tigre." },
      { statement: "Pigs like to play in the mud.", statementPt: "Porcos gostam de brincar na lama.", isTrue: true, explanation: "Pig is porco." },
      { statement: "An elephant is a small animal.", statementPt: "Um elefante é um animal pequeno.", isTrue: false, explanation: "Elephant is a large animal." }
    ],
    sp_a1_p2: [
      { question: "Have you ever seen a lion?", translation: "Você já viu um leão?" },
      { question: "Is the elephant very big?", translation: "O elefante é muito grande?" },
      { question: "Do you hear the dog bark?", translation: "Você ouve o cachorro latir?" }
    ],
    tf_b1_p1: [
      { statement: "Adopting a rescued dog requires commitment and boundless patience.", statementPt: "Adotar um cachorro resgatado exige comprometimento e paciência infinita.", isTrue: true, explanation: "Dog is cachorro." },
      { statement: "Observing a rare bird in its natural habitat is an exhilarating experience.", statementPt: "Observar um pássaro raro em seu habitat natural é uma experiência emocionante.", isTrue: true, explanation: "Bird is pássaro." },
      { statement: "A qualified vet is trained to perform complex surgeries on endangered species.", statementPt: "Um veterinário qualificado é treinado para realizar cirurgias complexas em espécies ameaçadas.", isTrue: true, explanation: "Vet is veterinário." },
      { statement: "Taking time to walk the dog drastically diminishes an owner's well-being.", statementPt: "Tirar tempo para passear com o cachorro diminui drasticamente o bem-estar do dono.", isTrue: false, explanation: "Walk the dog is passear com o cachorro, it improves well-being." },
      { statement: "Owning a majestic horse implies substantial financial and emotional responsibilities.", statementPt: "Possuir um cavalo majestoso implica responsabilidades financeiras e emocionais substanciais.", isTrue: true, explanation: "Horse is cavalo." },
      { statement: "Feeding a wild animal is highly recommended to domesticate it instantly.", statementPt: "Alimentar um animal selvagem é altamente recomendado para domesticá-lo instantaneamente.", isTrue: false, explanation: "Feed is alimentar, but feeding wild animals is dangerous." }
    ],
    sp_b1_p1: [
      { question: "What are the ethical responsibilities of owning a domestic pet?", translation: "Quais são as responsabilidades éticas de possuir um animal de estimação doméstico?" },
      { question: "How does a specialized vet handle an unexpected medical emergency?", translation: "Como um veterinário especializado lida com uma emergência médica inesperada?" },
      { question: "Why is it vital to consistently feed and nurture farm animals like a cow?", translation: "Por que é vital alimentar e nutrir consistentemente animais de fazenda como uma vaca?" }
    ],
    tf_b1_p2: [
      { statement: "An adult elephant is known for its remarkable intelligence and strong memory.", statementPt: "Um elefante adulto é conhecido por sua notável inteligência e memória forte.", isTrue: true, explanation: "Elephant is elefante." },
      { statement: "A fierce lion primarily hunts during the scorching heat of the afternoon.", statementPt: "Um leão feroz caça principalmente durante o calor escaldante da tarde.", isTrue: false, explanation: "Lion is leão, they often hunt at night or early morning." },
      { statement: "The tiger is considered a critically endangered species in several regions.", statementPt: "O tigre é considerado uma espécie criticamente ameaçada em várias regiões.", isTrue: true, explanation: "Tiger is tigre." },
      { statement: "A monkey can utilize basic tools to extract food from its environment.", statementPt: "Um macaco pode utilizar ferramentas básicas para extrair comida de seu ambiente.", isTrue: true, explanation: "Monkey is macaco." },
      { statement: "Raising a pig in an industrial farm presents significant environmental challenges.", statementPt: "Criar um porco em uma fazenda industrial apresenta desafios ambientais significativos.", isTrue: true, explanation: "Pig is porco." },
      { statement: "A dog's aggressive bite is perfectly harmless and requires no medical attention.", statementPt: "A mordida agressiva de um cachorro é perfeitamente inofensiva e não requer atenção médica.", isTrue: false, explanation: "Bite is mordida, it can be dangerous." }
    ],
    sp_b1_p2: [
      { question: "How does the destruction of habitats threaten animals like the tiger or the lion?", translation: "Como a destruição de habitats ameaça animais como o tigre ou o leão?" },
      { question: "What cognitive traits make an elephant uniquely different from other mammals?", translation: "Quais características cognitivas tornam um elefante singularmente diferente de outros mamíferos?" },
      { question: "Why is it crucial to treat an animal bite immediately and properly?", translation: "Por que é crucial tratar a mordida de um animal imediatamente e adequadamente?" }
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

    section = section.replace(tfRegex, `trueOrFalse: {\n      part1: ${JSON.stringify(d.tf_a1_p1, null, 8).replace(/\]$/, '      ]')},\n      part2: ${JSON.stringify(d.tf_a1_p2, null, 8).replace(/\]$/, '      ]')}\n    }`);
    section = section.replace(tfL2Regex, `trueOrFalseLevel2: {\n      part1: ${JSON.stringify(d.tf_b1_p1, null, 8).replace(/\]$/, '      ]')},\n      part2: ${JSON.stringify(d.tf_b1_p2, null, 8).replace(/\]$/, '      ]')}\n    }`);
    section = section.replace(spRegex, `speakingPractice: {\n      part1: ${JSON.stringify(d.sp_a1_p1, null, 8).replace(/\]$/, '      ]')},\n      part2: ${JSON.stringify(d.sp_a1_p2, null, 8).replace(/\]$/, '      ]')}\n    }`);
    section = section.replace(spL2Regex, `speakingPracticeLevel2: {\n      part1: ${JSON.stringify(d.sp_b1_p1, null, 8).replace(/\]$/, '      ]')},\n      part2: ${JSON.stringify(d.sp_b1_p2, null, 8).replace(/\]$/, '      ]')}\n    }`);

    content = content.slice(0, startIndex) + section + content.slice(nextId);
    console.log(`Updated scenario ${id} in ${targetFile}`);
  }
  fs.writeFileSync(targetFile, content);
}

processScenarios(data1, '../data/scenarios2.ts');
console.log("Done part 3.");
