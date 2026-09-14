const fs = require('fs');

const b1Replacements = {
  // --- Casa 2 ---
  "Mop the floor": { en: "He mopped the floor because he spilled coffee.", pt: "Ele passou pano no chão porque derramou café." },
  "Fold the laundry": { en: "She folded the laundry while watching television.", pt: "Ela dobrou a roupa enquanto assistia televisão." },
  "Dining room": { en: "We ate a huge dinner in the dining room.", pt: "Nós comemos um jantar enorme na sala de jantar." },
  "Hallway": { en: "The long hallway connects all the bedrooms.", pt: "O longo corredor conecta todos os quartos." },
  "Ceiling": { en: "They painted the ceiling white to brighten the room.", pt: "Eles pintaram o teto de branco para iluminar o cômodo." },
  "Wall": { en: "He hung a beautiful painting on the empty wall.", pt: "Ele pendurou um lindo quadro na parede vazia." },
  "Balcony": { en: "We stood on the balcony and watched the sunset.", pt: "Nós ficamos na varanda e assistimos ao pôr do sol." },
  "Basement": { en: "They stored their old boxes in the dark basement.", pt: "Eles guardaram suas caixas antigas no porão escuro." },
  "Attic": { en: "He found an old photograph hidden in the attic.", pt: "Ele encontrou uma fotografia antiga escondida no sótão." },
  "Furniture": { en: "She bought elegant furniture for her new apartment.", pt: "Ela comprou móveis elegantes para o seu novo apartamento." },
  "Couch / Sofa": { en: "He fell asleep on the comfortable couch.", pt: "Ele adormeceu no sofá confortável." },
  "Wash the windows": { en: "They washed the windows to see the garden clearly.", pt: "Eles lavaram as janelas para ver o jardim com clareza." },
  "Mow the lawn": { en: "He mowed the lawn on Saturday morning.", pt: "Ele cortou a grama no sábado de manhã." },
  "Water the plants": { en: "She watered the plants because it didn't rain.", pt: "Ela regou as plantas porque não choveu." },
  "Set the table": { en: "The children set the table before dinner.", pt: "As crianças arrumaram a mesa antes do jantar." },
  "Clear the table": { en: "He cleared the table quickly after they finished eating.", pt: "Ele limpou a mesa rapidamente depois que terminaram de comer." },
  "Sink": { en: "She washed her hands in the kitchen sink.", pt: "Ela lavou as mãos na pia da cozinha." },
  "Faucet": { en: "The broken faucet leaked water all night.", pt: "A torneira quebrada vazou água a noite toda." },
  "Closet": { en: "He organized all his winter clothes in the closet.", pt: "Ele organizou todas as suas roupas de inverno no guarda-roupa." },
  "Wipe the counter": { en: "She wiped the counter after preparing the meal.", pt: "Ela limpou o balcão depois de preparar a refeição." },

  // --- Hobbies ---
  "Read a book": { en: "He read an interesting book about ancient history.", pt: "Ele leu um livro interessante sobre história antiga." },
  "Play guitar": { en: "She played the guitar beautifully at the concert.", pt: "Ela tocou violão lindamente no show." },
  "Listen to music": { en: "I listened to classical music to relax.", pt: "Eu escutei música clássica para relaxar." },
  "Watch movies": { en: "We watched scary movies on Halloween.", pt: "Nós assistimos a filmes de terror no Halloween." },
  "Draw / Paint": { en: "He painted a stunning landscape using watercolors.", pt: "Ele pintou uma paisagem deslumbrante usando aquarelas." },
  "Travel": { en: "They traveled to Europe during their summer vacation.", pt: "Eles viajaram para a Europa durante as férias de verão." },
  "Play video games": { en: "He played video games with his friends all night.", pt: "Ele jogou videogames com seus amigos a noite toda." },
  "Take photos": { en: "She took amazing photos of the mountains.", pt: "Ela tirou fotos incríveis das montanhas." },
  "Dance": { en: "We danced all night at the wedding reception.", pt: "Nós dançamos a noite toda na festa de casamento." },
  "Sing": { en: "He sang his favorite song in the shower.", pt: "Ele cantou sua música favorita no chuveiro." },
  "Cook": { en: "She cooked a special dinner for her anniversary.", pt: "Ela cozinhou um jantar especial para o seu aniversário." },
  "Go hiking": { en: "They went hiking in the national park yesterday.", pt: "Eles fizeram trilha no parque nacional ontem." },
  "Camp": { en: "We camped near a beautiful lake last weekend.", pt: "Nós acampamos perto de um lago lindo no final de semana passado." },
  "Knit": { en: "My grandmother knitted a warm sweater for me.", pt: "Minha avó tricotou um suéter quente para mim." },
  "Collect": { en: "He collected rare coins from different countries.", pt: "Ele colecionava moedas raras de diferentes países." },
  "Write": { en: "She wrote a long letter to her best friend.", pt: "Ela escreveu uma longa carta para sua melhor amiga." },
  "Garden": { en: "He spent his weekend gardening in the backyard.", pt: "Ele passou o fim de semana trabalhando no jardim no quintal." },
  "Surf the internet": { en: "I surfed the internet looking for interesting articles.", pt: "Eu naveguei na internet procurando artigos interessantes." },
  "Workout": { en: "She worked out at the gym every morning.", pt: "Ela malhava na academia toda manhã." },
  "Play board games": { en: "We played strategic board games on Saturday.", pt: "Nós jogamos jogos de tabuleiro estratégicos no sábado." },

  // --- Esportes ---
  "Soccer / Football": { en: "He played professional soccer for ten years.", pt: "Ele jogou futebol profissional por dez anos." },
  "Basketball": { en: "They practiced basketball every day after school.", pt: "Eles praticavam basquete todo dia depois da escola." },
  "Swim": { en: "She swam in the ocean during her vacation.", pt: "Ela nadou no oceano durante suas férias." },
  "Run": { en: "He ran a marathon in under four hours.", pt: "Ele correu uma maratona em menos de quatro horas." },
  "Team": { en: "Our team won the championship last year.", pt: "Nosso time venceu o campeonato no ano passado." },
  "Match / Game": { en: "The intense match ended in a tie.", pt: "A partida intensa terminou em empate." },
  "Win": { en: "They won the gold medal at the Olympics.", pt: "Eles venceram a medalha de ouro nas Olimpíadas." },
  "Lose": { en: "Unfortunately, he lost the important tennis match.", pt: "Infelizmente, ele perdeu a importante partida de tênis." },
  "Ball": { en: "He threw the ball accurately across the field.", pt: "Ele jogou a bola com precisão pelo campo." },
  "Stadium": { en: "Thousands of fans cheered in the crowded stadium.", pt: "Milhares de torcedores comemoraram no estádio lotado." },
  "Tennis": { en: "She played tennis with her brother yesterday.", pt: "Ela jogou tênis com seu irmão ontem." },
  "Volleyball": { en: "We played volleyball on the beach until sunset.", pt: "Nós jogamos vôlei na praia até o pôr do sol." },
  "Cycling": { en: "He participated in a cycling race across the mountains.", pt: "Ele participou de uma corrida de ciclismo pelas montanhas." },
  "Gym": { en: "She went to the gym to lift heavy weights.", pt: "Ela foi à academia para levantar pesos pesados." },
  "Coach": { en: "The coach pushed the athletes to their limits.", pt: "O treinador levou os atletas aos seus limites." },
  "Referee": { en: "The referee penalized the player for aggressive behavior.", pt: "O árbitro penalizou o jogador por comportamento agressivo." },
  "Score": { en: "They checked the score at the end of the game.", pt: "Eles verificaram o placar no final do jogo." },
  "Tournament": { en: "She entered a prestigious chess tournament last month.", pt: "Ela entrou em um torneio de xadrez de prestígio no mês passado." },
  "Medal": { en: "He proudly displayed his silver medal.", pt: "Ele exibiu orgulhosamente sua medalha de prata." },
  "Player": { en: "The professional player signed a new contract.", pt: "O jogador profissional assinou um novo contrato." },

  // --- Supermercado ---
  "Shopping cart": { en: "He pushed the heavy shopping cart down the aisle.", pt: "Ele empurrou o carrinho de compras pesado pelo corredor." },
  "Cashier": { en: "The friendly cashier scanned all the items quickly.", pt: "O caixa amigável escaneou todos os itens rapidamente." },
  "Aisle": { en: "She walked down the dairy aisle to find milk.", pt: "Ela andou pelo corredor de laticínios para encontrar leite." },
  "Receipt": { en: "He kept the receipt to track his expenses.", pt: "Ele guardou o recibo para rastrear suas despesas." },
  "Grocery list": { en: "I wrote a grocery list before I went shopping.", pt: "Eu escrevi uma lista de compras antes de ir às compras." },
  "Checkout": { en: "She paid for her groceries at the checkout.", pt: "Ela pagou por suas compras no caixa (checkout)." },
  "Bag": { en: "He carried the heavy bag of apples to the car.", pt: "Ele carregou a sacola pesada de maçãs até o carro." },
  "Price": { en: "She checked the price before adding the item to her cart.", pt: "Ela verificou o preço antes de adicionar o item ao seu carrinho." },
  "Discount": { en: "They offered a huge discount on fresh vegetables.", pt: "Eles ofereceram um enorme desconto em vegetais frescos." },
  "Pay": { en: "He paid the cashier and left the store.", pt: "Ele pagou ao caixa e saiu da loja." },
  "Credit card": { en: "She used her credit card to buy expensive groceries.", pt: "Ela usou seu cartão de crédito para comprar mantimentos caros." },
  "Cash": { en: "He always paid in cash to control his budget.", pt: "Ele sempre pagava em dinheiro para controlar seu orçamento." },
  "Change": { en: "The cashier gave him the correct change.", pt: "O caixa deu a ele o troco correto." },
  "Customer": { en: "The demanding customer asked to speak with the manager.", pt: "O cliente exigente pediu para falar com o gerente." },
  "Shelf": { en: "He grabbed the last box of cereal from the top shelf.", pt: "Ele pegou a última caixa de cereal da prateleira de cima." },
  "Basket": { en: "She carried a small basket because she only needed bread.", pt: "Ela carregou uma cesta pequena porque só precisava de pão." },
  "Fresh": { en: "They bought fresh strawberries from the local market.", pt: "Eles compraram morangos frescos no mercado local." },
  "Frozen": { en: "He bought frozen pizza for a quick dinner.", pt: "Ele comprou pizza congelada para um jantar rápido." },
  "Bakery": { en: "The bakery sold delicious chocolate cakes yesterday.", pt: "A padaria vendeu bolos de chocolate deliciosos ontem." },
  "Scale": { en: "She weighed the bananas on the electronic scale.", pt: "Ela pesou as bananas na balança eletrônica." }
};

const filePath = '../data/scenarios1.ts';
let content = fs.readFileSync(filePath, 'utf-8');

for (const [word, b1Replacement] of Object.entries(b1Replacements)) {
  const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(\`(english:\\s*["'\`]\\$\{escapedWord\}["'\`][\\s\\S]\{0,300\}?B1:\\s*\\{\\s*en:\\s*["'\`])[^"'\`]+(["'\`]\\s*,\\s*pt:\\s*["'\`])[^"'\`]+(["'\`]\\s*\\})\`, 'g');
  
  content = content.replace(regex, (match, prefix, mid, suffix) => {
    return `${prefix}${b1Replacement.en}${mid}${b1Replacement.pt}${suffix}`;
  });
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`Updated scenarios 5-8.`);
