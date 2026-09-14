const fs = require('fs');

const corrections = [
  { oldEn: "My father is working today.", newEn: "My father works every day.", newPt: "Meu pai trabalha todos os dias." },
  { oldEn: "My uncle bought a new car.", newEn: "My uncle buys a new car.", newPt: "Meu tio compra um carro novo." },
  { oldEn: "I played video games with my cousin.", newEn: "I play video games with my cousin.", newPt: "Eu jogo videogame com meu primo." },
  { oldEn: "I bought a toy for my niece.", newEn: "I buy toys for my niece.", newPt: "Eu compro brinquedos para minha sobrinha." },
  { oldEn: "The grandfather is playing with his grandson.", newEn: "The grandfather plays with his grandson.", newPt: "O avô brinca com seu neto." },
  { oldEn: "He bought flowers for his wife.", newEn: "He buys flowers for his wife.", newPt: "Ele compra flores para a esposa." },
  { oldEn: "My son is playing in the yard.", newEn: "My son plays in the yard.", newPt: "Meu filho brinca no quintal." },
  { oldEn: "I will invite them to my house.", newEn: "I invite them to my house.", newPt: "Eu os convido para minha casa." },
  { oldEn: "Are you going to the party tonight?", newEn: "Do you go to parties?", newPt: "Você vai a festas?" },
  { oldEn: "Our friend group is very united.", newEn: "Our friend group stays together.", newPt: "Nosso grupo de amigos fica junto." },
  { oldEn: "He apologized for being late.", newEn: "He apologizes for the delay.", newPt: "Ele pede desculpas pelo atraso." },
  { oldEn: "Friends always help out when needed.", newEn: "Friends always help out.", newPt: "Amigos sempre ajudam." },
  { oldEn: "Let me do the introductions.", newEn: "I do the introductions.", newPt: "Eu faço as apresentações." },
  { oldEn: "He broke his arm.", newEn: "He has a broken arm.", newPt: "Ele tem um braço quebrado." },
  { oldEn: "My nose is bleeding.", newEn: "My nose bleeds sometimes.", newPt: "Meu nariz sangra às vezes." },
  { oldEn: "He fell and scraped his knee.", newEn: "He falls and scrapes his knee.", newPt: "Ele cai e rala o joelho." },
  { oldEn: "I stubbed my toe.", newEn: "I hurt my toe.", newPt: "Eu machuco meu dedo do pé." },
  { oldEn: "I am cooking in the kitchen.", newEn: "I cook in the kitchen.", newPt: "Eu cozinho na cozinha." },
  { oldEn: "I will do the dishes tonight.", newEn: "I do the dishes every night.", newPt: "Eu lavo a louça toda noite." },
  { oldEn: "I am doing the laundry.", newEn: "I do the laundry.", newPt: "Eu lavo a roupa." },
  { oldEn: "She is dusting the table.", newEn: "She dusts the table.", newPt: "Ela tira o pó da mesa." },
  { oldEn: "I will vacuum the carpet.", newEn: "I vacuum the carpet.", newPt: "Eu passo o aspirador no tapete." },
  { oldEn: "The kids are playing in the yard.", newEn: "The kids play in the yard.", newPt: "As crianças brincam no quintal." },
  { oldEn: "The walls are painted blue.", newEn: "The walls look blue.", newPt: "As paredes parecem azuis." },
  { oldEn: "She is standing on the balcony.", newEn: "She stands on the balcony.", newPt: "Ela fica na sacada." },
  { oldEn: "They bought new furniture.", newEn: "They buy new furniture.", newPt: "Eles compram móveis novos." },
  { oldEn: "I fell asleep on the couch.", newEn: "I fall asleep on the couch.", newPt: "Eu adormeço no sofá." },
  { oldEn: "We should wash the windows today.", newEn: "We wash the windows.", newPt: "Nós lavamos as janelas." },
  { oldEn: "My father is mowing the lawn.", newEn: "My father mows the lawn.", newPt: "Meu pai corta a grama." },
  { oldEn: "Can you set the table for dinner?", newEn: "Do you set the table for dinner?", newPt: "Você arruma a mesa para o jantar?" },
  { oldEn: "I will clear the table after we eat.", newEn: "I clear the table after dinner.", newPt: "Eu tiro a mesa depois do jantar." },
  { oldEn: "Michael Jordan played basketball.", newEn: "He plays basketball.", newPt: "Ele joga basquete." },
  { oldEn: "Did you watch the match?", newEn: "Do you watch the match?", newPt: "Você assiste à partida?" },
  { oldEn: "They are playing volleyball on the beach.", newEn: "They play volleyball on the beach.", newPt: "Eles jogam vôlei na praia." },
  { oldEn: "The coach is yelling at the players.", newEn: "The coach yells at the players.", newPt: "O treinador grita com os jogadores." },
  { oldEn: "He scored a beautiful goal.", newEn: "He scores a beautiful goal.", newPt: "Ele marca um gol lindo." },
  { oldEn: "I will pay with cash.", newEn: "I pay with cash.", newPt: "Eu pago em dinheiro." },
  { oldEn: "I found a very cheap shirt.", newEn: "I find a very cheap shirt.", newPt: "Eu encontro uma camisa muito barata." },
  { oldEn: "I left my wallet at home.", newEn: "I leave my wallet at home.", newPt: "Eu deixo minha carteira em casa." },
  { oldEn: "I am looking for black pants.", newEn: "I look for black pants.", newPt: "Eu procuro por calças pretas." },
  { oldEn: "The doctor is checking the patient.", newEn: "The doctor checks the patient.", newPt: "O médico checa o paciente." },
  { oldEn: "The engineer is building a bridge.", newEn: "The engineer builds a bridge.", newPt: "O engenheiro constrói uma ponte." },
  { oldEn: "The police officer helped us.", newEn: "The police officer helps us.", newPt: "O policial nos ajuda." },
  { oldEn: "The mechanic fixed my car.", newEn: "The mechanic fixes my car.", newPt: "O mecânico conserta meu carro." },
  { oldEn: "The dentist cleaned my teeth.", newEn: "The dentist cleans my teeth.", newPt: "O dentista limpa meus dentes." },
  { oldEn: "The firefighter saved the cat.", newEn: "The firefighter saves the cat.", newPt: "O bombeiro salva o gato." },
  { oldEn: "The waiter brought our food.", newEn: "The waiter brings our food.", newPt: "O garçom traz nossa comida." },
  { oldEn: "I am studying at the library.", newEn: "I study at the library.", newPt: "Eu estudo na biblioteca." },
  { oldEn: "I bought medicine at the pharmacy.", newEn: "I buy medicine at the pharmacy.", newPt: "Eu compro remédio na farmácia." },
  { oldEn: "We arrived at the airport early.", newEn: "We arrive at the airport early.", newPt: "Nós chegamos no aeroporto cedo." },
  { oldEn: "The cat is sleeping on the bed.", newEn: "The cat sleeps on the bed.", newPt: "O gato dorme na cama." },
  { oldEn: "I heard a bird singing.", newEn: "I hear a bird.", newPt: "Eu ouço um pássaro." },
  { oldEn: "I am taking my dog to the vet.", newEn: "I take my dog to the vet.", newPt: "Eu levo meu cachorro ao veterinário." },
  { oldEn: "The rabbit is eating a carrot.", newEn: "The rabbit eats a carrot.", newPt: "O coelho come uma cenoura." },
  { oldEn: "I saw a tiger at the zoo.", newEn: "I see a tiger at the zoo.", newPt: "Eu vejo um tigre no zoológico." },
  { oldEn: "The monkey is climbing the tree.", newEn: "The monkey climbs the tree.", newPt: "O macaco sobe na árvore." },
  { oldEn: "We baked chocolate chip cookies.", newEn: "We bake chocolate chip cookies.", newPt: "Nós assamos cookies de chocolate." },
  { oldEn: "I will download the file.", newEn: "I download the file.", newPt: "Eu baixo o arquivo." },
  { oldEn: "I am listening to music with headphones.", newEn: "I listen to music with headphones.", newPt: "Eu ouço música com fones de ouvido." },
  { oldEn: "Did you like my photo?", newEn: "Do you like my photo?", newPt: "Você curte minha foto?" },
  { oldEn: "I will post a video tomorrow.", newEn: "I post a video every week.", newPt: "Eu publico um vídeo toda semana." },
  { oldEn: "I posted a story at the beach.", newEn: "I post a story at the beach.", newPt: "Posto um story na praia." }
];

function applyCorrections(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const c of corrections) {
    const oldRegex = new RegExp(`A1:\\s*\\{\\s*en:\\s*["']${c.oldEn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']\\s*,\\s*pt:\\s*["'][^"']+["']\\s*\\}`, 'g');
    const newStr = `A1: { en: "${c.newEn}", pt: "${c.newPt}" }`;
    content = content.replace(oldRegex, newStr);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

applyCorrections('data/scenarios1.ts');
applyCorrections('data/scenarios2.ts');
