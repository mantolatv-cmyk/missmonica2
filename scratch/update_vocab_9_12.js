const fs = require('fs');

const b1Replacements = {
  // --- Compras ---
  "Clothes": { en: "She bought expensive clothes for the wedding.", pt: "Ela comprou roupas caras para o casamento." },
  "Shoes": { en: "He tried on new shoes at the mall.", pt: "Ele experimentou sapatos novos no shopping." },
  "Size": { en: "The clerk checked the correct size for the customer.", pt: "O balconista verificou o tamanho correto para o cliente." },
  "Try on": { en: "She tried on three different dresses.", pt: "Ela experimentou três vestidos diferentes." },
  "Store / Shop": { en: "They opened a new clothing store downtown.", pt: "Eles abriram uma nova loja de roupas no centro." },
  "Fitting room": { en: "He waited outside the fitting room for ten minutes.", pt: "Ele esperou do lado de fora do provador por dez minutos." },
  "Sale": { en: "I bought this jacket during the winter sale.", pt: "Eu comprei esta jaqueta durante a liquidação de inverno." },
  "Expensive": { en: "That luxury watch cost a lot because it was expensive.", pt: "Aquele relógio de luxo custou muito porque era caro." },
  "Cheap": { en: "He preferred cheap options to save money.", pt: "Ele preferia opções baratas para economizar dinheiro." },
  "Wallet": { en: "She lost her leather wallet yesterday.", pt: "Ela perdeu sua carteira de couro ontem." },
  "Jacket": { en: "He wore a thick jacket because of the cold wind.", pt: "Ele usou uma jaqueta grossa por causa do vento frio." },
  "Pants": { en: "She bought comfortable pants for the trip.", pt: "Ela comprou calças confortáveis para a viagem." },
  "Dress": { en: "She wore a stunning red dress to the party.", pt: "Ela usou um vestido vermelho deslumbrante na festa." },
  "Hat": { en: "He put on a hat to protect his face from the sun.", pt: "Ele colocou um chapéu para proteger o rosto do sol." },
  "Gift": { en: "They bought a special gift for their parents.", pt: "Eles compraram um presente especial para os pais deles." },

  // --- Profissoes ---
  "Doctor": { en: "The experienced doctor successfully treated the patient.", pt: "O médico experiente tratou o paciente com sucesso." },
  "Teacher": { en: "The dedicated teacher helped her students after class.", pt: "A professora dedicada ajudou seus alunos depois da aula." },
  "Engineer": { en: "The civil engineer designed a robust bridge.", pt: "O engenheiro civil projetou uma ponte robusta." },
  "Chef": { en: "The head chef prepared a complex gourmet dish.", pt: "O chef principal preparou um prato gourmet complexo." },
  "Police officer": { en: "The brave police officer stopped the thief.", pt: "O policial corajoso parou o ladrão." },
  "Work / Job": { en: "She started her new job at the international bank.", pt: "Ela começou seu novo emprego no banco internacional." },
  "Nurse": { en: "The nurse checked his blood pressure regularly.", pt: "O enfermeiro verificou a pressão arterial dele regularmente." },
  "Mechanic": { en: "The mechanic fixed the broken engine quickly.", pt: "O mecânico consertou o motor quebrado rapidamente." },
  "Lawyer": { en: "The corporate lawyer defended the company in court.", pt: "O advogado corporativo defendeu a empresa no tribunal." },
  "Office": { en: "He organized his desk in the modern office.", pt: "Ele organizou sua mesa no escritório moderno." },
  "Dentist": { en: "The dentist extracted the painful tooth carefully.", pt: "O dentista extraiu o dente dolorido com cuidado." },
  "Firefighter": { en: "The courageous firefighter rescued the family from the fire.", pt: "O bombeiro corajoso resgatou a família do incêndio." },
  "Driver": { en: "The skilled driver avoided a serious accident.", pt: "O motorista habilidoso evitou um acidente grave." },
  "Pilot": { en: "The commercial pilot landed the airplane safely.", pt: "O piloto comercial pousou o avião com segurança." },
  "Artist": { en: "The famous artist painted a beautiful mural.", pt: "O artista famoso pintou um lindo mural." },
  "Farmer": { en: "The hardworking farmer harvested the crops early in the morning.", pt: "O fazendeiro trabalhador colheu as safras de manhã cedo." },
  "Waiter": { en: "The polite waiter served the food with a smile.", pt: "O garçom educado serviu a comida com um sorriso." },
  "Company": { en: "The technology company launched a new software product.", pt: "A empresa de tecnologia lançou um novo produto de software." },
  "Boss": { en: "The demanding boss requested a detailed report.", pt: "O chefe exigente solicitou um relatório detalhado." },
  "Salary": { en: "She negotiated a higher salary during the interview.", pt: "Ela negociou um salário mais alto durante a entrevista." },

  // --- Lugares ---
  "Park": { en: "Children played happily in the public park.", pt: "As crianças brincaram alegremente no parque público." },
  "Hospital": { en: "The ambulance arrived at the emergency hospital.", pt: "A ambulância chegou ao hospital de emergência." },
  "School": { en: "The local school received new computers for the students.", pt: "A escola local recebeu novos computadores para os alunos." },
  "Bus stop": { en: "We waited for the bus at the bus stop for an hour.", pt: "Nós esperamos pelo ônibus no ponto de ônibus por uma hora." },
  "Street": { en: "They walked down the busy street during rush hour.", pt: "Eles andaram pela rua movimentada durante a hora do rush." },
  "Turn left / right": { en: "He turned left at the intersection to avoid traffic.", pt: "Ele virou à esquerda no cruzamento para evitar o trânsito." },
  "Library": { en: "She borrowed three classic novels from the library.", pt: "Ela pegou três romances clássicos emprestados na biblioteca." },
  "Bank": { en: "He deposited his entire paycheck at the bank.", pt: "Ele depositou todo o seu pagamento no banco." },
  "Go straight": { en: "They went straight until they reached the museum.", pt: "Eles seguiram reto até chegarem ao museu." },
  "Near": { en: "They bought a house near the beautiful lake.", pt: "Eles compraram uma casa perto do lindo lago." },
  "Pharmacy": { en: "He bought essential medicine at the nearby pharmacy.", pt: "Ele comprou remédios essenciais na farmácia próxima." },
  "Restaurant": { en: "We ate a delicious dinner at the Italian restaurant.", pt: "Nós comemos um jantar delicioso no restaurante italiano." },
  "Airport": { en: "She arrived at the international airport two hours early.", pt: "Ela chegou ao aeroporto internacional duas horas adiantada." },
  "Station": { en: "They caught the early train at the central station.", pt: "Eles pegaram o trem cedo na estação central." },
  "Museum": { en: "The historical museum exhibited ancient artifacts.", pt: "O museu histórico exibiu artefatos antigos." },
  "Far": { en: "He drove a far distance to visit his relatives.", pt: "Ele dirigiu uma longa distância para visitar seus parentes." },
  "Corner": { en: "The coffee shop opened on the corner of the busy street.", pt: "A cafeteria abriu na esquina da rua movimentada." },
  "Block": { en: "They walked around the block to get some exercise.", pt: "Eles deram uma volta no quarteirão para fazer algum exercício." },
  "Traffic light": { en: "He stopped the car immediately when the traffic light turned red.", pt: "Ele parou o carro imediatamente quando o semáforo ficou vermelho." },
  "Bridge": { en: "The heavy truck crossed the old wooden bridge safely.", pt: "O caminhão pesado cruzou a velha ponte de madeira com segurança." },

  // --- Animais ---
  "Dog": { en: "The energetic dog fetched the ball multiple times.", pt: "O cachorro enérgico buscou a bola várias vezes." },
  "Cat": { en: "The stray cat slept peacefully on the porch.", pt: "O gato de rua dormiu pacificamente na varanda." },
  "Bird": { en: "The rare bird flew high above the dense forest.", pt: "O pássaro raro voou alto sobre a floresta densa." },
  "Fish": { en: "The colorful fish swam quickly around the large tank.", pt: "O peixe colorido nadou rapidamente ao redor do aquário grande." },
  "Pet": { en: "She adopted a rescued pet from the local animal shelter.", pt: "Ela adotou um animal de estimação resgatado no abrigo de animais local." },
  "Walk the dog": { en: "He walked the dog around the park every evening.", pt: "Ele passeava com o cachorro pelo parque toda noite." },
  "Feed": { en: "They fed the hungry animals at the farm early in the morning.", pt: "Eles alimentaram os animais famintos na fazenda de manhã cedo." },
  "Horse": { en: "The majestic horse galloped swiftly across the open field.", pt: "O cavalo majestoso galopou velozmente pelo campo aberto." },
  "Cow": { en: "The gentle cow grazed calmly in the green pasture.", pt: "A vaca dócil pastou calmamente no pasto verde." },
  "Vet": { en: "The dedicated vet examined the injured puppy thoroughly.", pt: "O veterinário dedicado examinou o filhote ferido minuciosamente." },
  "Pig": { en: "The heavy pig rolled around in the wet mud to stay cool.", pt: "O porco pesado rolou na lama molhada para se manter fresco." },
  "Chicken": { en: "The farmer collected fresh eggs from the chicken coop.", pt: "O fazendeiro colheu ovos frescos do galinheiro." },
  "Rabbit": { en: "The fast rabbit hid behind the bushes to avoid predators.", pt: "O coelho veloz se escondeu atrás dos arbustos para evitar predadores." },
  "Lion": { en: "The fierce lion roared loudly, intimidating the other animals.", pt: "O leão feroz rugiu alto, intimidando os outros animais." },
  "Tiger": { en: "The wild tiger stalked its prey silently in the jungle.", pt: "O tigre selvagem perseguiu sua presa silenciosamente na selva." },
  "Monkey": { en: "The clever monkey swung effortlessly from branch to branch.", pt: "O macaco esperto balançou sem esforço de galho em galho." },
  "Elephant": { en: "The enormous elephant grabbed the peanuts with its long trunk.", pt: "O elefante enorme pegou os amendoins com sua longa tromba." },
  "Bark": { en: "The guard dog barked aggressively at the unknown intruder.", pt: "O cão de guarda latiu agressivamente para o intruso desconhecido." },
  "Meow": { en: "The tiny kitten meowed constantly until she received her milk.", pt: "O gatinho minúsculo miou constantemente até receber seu leite." },
  "Bite": { en: "The frightened dog bit the stranger's hand unexpectedly.", pt: "O cachorro assustado mordeu a mão do estranho inesperadamente." }
};

const filePath = '../data/scenarios2.ts';
let content = fs.readFileSync(filePath, 'utf-8');

for (const [word, b1Replacement] of Object.entries(b1Replacements)) {
  const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(\`(english:\\s*["'\`]\\$\{escapedWord\}["'\`][\\s\\S]\{0,300\}?B1:\\s*\\{\\s*en:\\s*["'\`])[^"'\`]+(["'\`]\\s*,\\s*pt:\\s*["'\`])[^"'\`]+(["'\`]\\s*\\})\`, 'g');
  
  content = content.replace(regex, (match, prefix, mid, suffix) => {
    return `${prefix}${b1Replacement.en}${mid}${b1Replacement.pt}${suffix}`;
  });
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`Updated scenarios 9-12.`);
