const fs = require('fs');

const b1Replacements = {
  // --- Familia ---
  "Mother / Mom": { en: "My mother always supported our family during tough times.", pt: "Minha mãe sempre apoiou nossa família durante os momentos difíceis." },
  "Father / Dad": { en: "My father worked at the same hospital for twenty years.", pt: "Meu pai trabalhou no mesmo hospital por vinte anos." },
  "Brother": { en: "My younger brother graduated from university with honors.", pt: "Meu irmão mais novo se formou na universidade com honras." },
  "Sister": { en: "My sister studied abroad last semester.", pt: "Minha irmã estudou no exterior no semestre passado." },
  "Grandmother": { en: "We visited my grandmother every Sunday when I was a child.", pt: "Nós visitávamos minha avó todo domingo quando eu era criança." },
  "Grandfather": { en: "My grandfather collected vintage stamps all his life.", pt: "Meu avô colecionou selos vintage a vida toda." },
  "Aunt": { en: "My aunt lives in another city, so we rarely see her.", pt: "Minha tia mora em outra cidade, então raramente a vemos." },
  "Uncle": { en: "My uncle bought a new car and planned a road trip.", pt: "Meu tio comprou um carro novo e planejou uma viagem." },
  "Cousin": { en: "I played video games with my cousin when we were teenagers.", pt: "Eu jogava videogame com meu primo quando éramos adolescentes." },
  "Parents": { en: "My parents were always very strict regarding my academic performance.", pt: "Meus pais sempre foram muito rigorosos em relação ao meu desempenho acadêmico." },
  "Nephew": { en: "My nephew grew so much that I hardly recognized him.", pt: "Meu sobrinho cresceu tanto que mal o reconheci." },
  "Niece": { en: "I bought a beautiful educational toy for my niece's birthday.", pt: "Eu comprei um lindo brinquedo educativo para o aniversário da minha sobrinha." },
  "Grandson": { en: "The grandfather spent the entire afternoon playing board games with his grandson.", pt: "O avô passou a tarde inteira jogando jogos de tabuleiro com seu neto." },
  "Granddaughter": { en: "She became the very first granddaughter in our family.", pt: "Ela se tornou a primeira neta na nossa família." },
  "Wife": { en: "He bought beautiful red flowers for his wife.", pt: "Ele comprou lindas flores vermelhas para sua esposa." },
  "Husband": { en: "Her husband works as a leading doctor at the local clinic.", pt: "O marido dela trabalha como médico chefe na clínica local." },
  "Mother-in-law": { en: "My mother-in-law cooked an incredible feast for our gathering.", pt: "Minha sogra cozinhou um banquete incrível para a nossa reunião." },
  "Father-in-law": { en: "My father-in-law always told the funniest jokes at dinners.", pt: "Meu sogro sempre contava as piadas mais engraçadas nos jantares." },
  "Stepmother": { en: "His stepmother supported him a lot when she joined our family.", pt: "A madrasta dele o apoiou muito quando se juntou à nossa família." },
  "Stepfather": { en: "My stepfather taught me how to drive safely.", pt: "Meu padrasto me ensinou a dirigir com segurança." },

  // --- Amigos ---
  "Friend": { en: "He was a supportive friend who always helped me overcome challenges.", pt: "Ele foi um amigo apoiador que sempre me ajudou a superar desafios." },
  "Best friend": { en: "She was my most trusted best friend in elementary school.", pt: "Ela era minha melhor amiga de maior confiança no ensino fundamental." },
  "Hang out": { en: "We rarely hung out because everyone was busy with work.", pt: "Nós raramente saíamos porque todos estavam ocupados com o trabalho." },
  "Meet up": { en: "We agreed to meet up at the downtown cafe right after our shift.", pt: "Nós concordamos em nos encontrar no café do centro logo após o nosso turno." },
  "Chat": { en: "I really enjoyed chatting with you about our future plans.", pt: "Eu gostei muito de bater papo com você sobre nossos planos futuros." },
  "Fun": { en: "The surprise party at your house was the most fun event of the year.", pt: "A festa surpresa na sua casa foi o evento mais divertido do ano." },
  "Invite": { en: "I invited all my closest friends to celebrate at my house.", pt: "Eu convidei todos os meus amigos mais próximos para celebrar na minha casa." },
  "Party": { en: "Did you attend the graduation party last night?", pt: "Você compareceu à festa de formatura ontem à noite?" },
  "Group": { en: "Our friend group remained incredibly united despite the distance.", pt: "Nosso grupo de amigos permaneceu incrivelmente unido apesar da distância." },
  "Share": { en: "We always shared our deepest secrets with each other.", pt: "Nós sempre compartilhávamos nossos segredos mais profundos uns com os outros." },
  "Trust": { en: "I trusted my friends completely with this sensitive information.", pt: "Eu confiei nos meus amigos completamente com essa informação delicada." },
  "Keep a secret": { en: "Did you keep the major secret about the surprise party?", pt: "Você guardou o grande segredo sobre a festa surpresa?" },
  "Argue": { en: "We argued a few times in the past, but we fixed things.", pt: "Nós discutimos algumas vezes no passado, mas consertamos as coisas." },
  "Apologize": { en: "He finally apologized for being late to the important meeting.", pt: "Ele finalmente pediu desculpas por se atrasar para a reunião importante." },
  "Help out": { en: "True friends always helped out when someone faced a tough phase.", pt: "Verdadeiros amigos sempre ajudavam quando alguém enfrentava uma fase difícil." },
  "Joke": { en: "He told one of the most hilarious jokes I ever heard.", pt: "Ele contou uma das piadas mais hilárias que já ouvi." },
  "Support": { en: "Good friends always supported each other unconditionally during hard times.", pt: "Bons amigos sempre se apoiavam incondicionalmente durante tempos difíceis." },
  "Advice": { en: "I asked him to give me some professional advice about my career.", pt: "Eu pedi a ele que me desse um conselho profissional sobre minha carreira." },
  "Get along": { en: "They got along surprisingly well on their first day at school.", pt: "Eles se deram surpreendentemente bem no primeiro dia na escola." },
  "Introductions": { en: "I did the introductions so that everyone felt comfortable.", pt: "Eu fiz as apresentações para que todos se sentissem confortáveis." },

  // --- Corpo ---
  "Head": { en: "He bumped his head on the low ceiling yesterday.", pt: "Ele bateu a cabeça no teto baixo ontem." },
  "Arm": { en: "She broke her arm while playing basketball.", pt: "Ela quebrou o braço enquanto jogava basquete." },
  "Leg": { en: "He injured his leg during the marathon.", pt: "Ele machucou a perna durante a maratona." },
  "Hand": { en: "She washed her hands before dinner.", pt: "Ela lavou as mãos antes do jantar." },
  "Foot / Feet": { en: "His feet hurt after a long day of walking.", pt: "Os pés dele doíam após um longo dia caminhando." },
  "Eyes": { en: "She closed her eyes and fell asleep.", pt: "Ela fechou os olhos e adormeceu." },
  "Hair": { en: "He cut his hair very short last week.", pt: "Ele cortou o cabelo bem curto semana passada." },
  "Mouth": { en: "The dentist asked him to open his mouth.", pt: "O dentista pediu a ele que abrisse a boca." },
  "Nose": { en: "Her nose bled after she fell down.", pt: "O nariz dela sangrou depois que ela caiu." },
  "Ears": { en: "He covered his ears because of the loud noise.", pt: "Ele cobriu as orelhas por causa do barulho alto." },
  "Shoulder": { en: "She carried the heavy bag on her shoulder.", pt: "Ela carregou a bolsa pesada no ombro." },
  "Knee": { en: "He scraped his knee when he tripped on the sidewalk.", pt: "Ele ralou o joelho quando tropeçou na calçada." },
  "Fingers": { en: "She burned her fingers on the hot stove.", pt: "Ela queimou os dedos no fogão quente." },
  "Toes": { en: "He stubbed his toes on the wooden door.", pt: "Ele bateu os dedos dos pés na porta de madeira." },
  "Stomach": { en: "His stomach ached after he ate too much spicy food.", pt: "O estômago dele doeu depois que ele comeu muita comida apimentada." },
  "Back": { en: "She injured her back lifting heavy boxes.", pt: "Ela machucou as costas levantando caixas pesadas." },
  "Neck": { en: "He wore a thick scarf around his neck during winter.", pt: "Ele usou um cachecol grosso no pescoço durante o inverno." },
  "Teeth": { en: "She brushed her teeth twice every day.", pt: "Ela escovava os dentes duas vezes todos os dias." },
  "Tongue": { en: "He accidentally bit his tongue while chewing.", pt: "Ele acidentalmente mordeu a língua enquanto mastigava." },
  "Lips": { en: "Her lips felt dry in the cold weather.", pt: "Os lábios dela ficaram secos no clima frio." },

  // --- Casa ---
  "Living room": { en: "We watched movies in the living room every Friday.", pt: "Nós assistíamos a filmes na sala de estar toda sexta-feira." },
  "Kitchen": { en: "She cooked a delicious meal in the kitchen.", pt: "Ela cozinhou uma refeição deliciosa na cozinha." },
  "Bedroom": { en: "He cleaned his bedroom before guests arrived.", pt: "Ele limpou seu quarto antes de os convidados chegarem." },
  "Bathroom": { en: "She took a long shower in the bathroom.", pt: "Ela tomou um banho longo no banheiro." },
  "Sweep the floor": { en: "He swept the floor after the party ended.", pt: "Ele varreu o chão depois que a festa acabou." },
  "Do the dishes": { en: "She did the dishes while he dried them.", pt: "Ela lavou a louça enquanto ele as secava." },
  "Make the bed": { en: "I made the bed as soon as I woke up.", pt: "Eu arrumei a cama assim que acordei." },
  "Take out the trash": { en: "He took out the trash before going to work.", pt: "Ele tirou o lixo antes de ir para o trabalho." },
  "Clean": { en: "They cleaned the entire house on Saturday morning.", pt: "Eles limparam a casa inteira no sábado de manhã." },
  "Laundry": { en: "She did the laundry because she needed clean clothes.", pt: "Ela lavou as roupas porque precisava de roupas limpas." },
  "Iron the clothes": { en: "He ironed his clothes for the important meeting.", pt: "Ele passou suas roupas para a reunião importante." },
  "Dust the furniture": { en: "She dusted the furniture to keep the house neat.", pt: "Ela tirou o pó dos móveis para manter a casa arrumada." },
  "Vacuum": { en: "He vacuumed the carpets to remove all the dirt.", pt: "Ele aspirou os tapetes para remover toda a sujeira." },
  "Garage": { en: "He parked his new car in the garage.", pt: "Ele estacionou seu carro novo na garagem." },
  "Garden / Yard": { en: "She planted beautiful roses in the garden last spring.", pt: "Ela plantou lindas rosas no jardim na primavera passada." },
  "Window": { en: "He opened the window to let fresh air inside.", pt: "Ele abriu a janela para deixar o ar fresco entrar." },
  "Door": { en: "She locked the front door before going to bed.", pt: "Ela trancou a porta da frente antes de ir para a cama." },
  "Roof": { en: "The storm severely damaged the roof of our house.", pt: "A tempestade danificou severamente o telhado da nossa casa." },
  "Stairs": { en: "He ran up the stairs to grab his forgotten keys.", pt: "Ele correu pelas escadas para pegar as chaves esquecidas." },
  "Mirror": { en: "She looked at herself in the mirror before leaving.", pt: "Ela olhou para si mesma no espelho antes de sair." },
  
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
  "Scale": { en: "She weighed the bananas on the electronic scale.", pt: "Ela pesou as bananas na balança eletrônica." },

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
  "Bite": { en: "The frightened dog bit the stranger's hand unexpectedly.", pt: "O cachorro assustado mordeu a mão do estranho inesperadamente." },

  // --- Culinaria ---
  "Cook": { en: "She cooked a complex meal for her family yesterday.", pt: "Ela cozinhou uma refeição complexa para a família ontem." },
  "Bake": { en: "He baked a delicious chocolate cake for the party.", pt: "Ele assou um bolo de chocolate delicioso para a festa." },
  "Recipe": { en: "They followed the traditional recipe step by step.", pt: "Eles seguiram a receita tradicional passo a passo." },
  "Ingredients": { en: "She bought all the fresh ingredients at the local market.", pt: "Ela comprou todos os ingredientes frescos no mercado local." },
  "Knife": { en: "The chef sharpened his knife before preparing the vegetables.", pt: "O chef afiou a faca antes de preparar os vegetais." },
  "Oven": { en: "He placed the lasagna in the hot oven for an hour.", pt: "Ele colocou a lasanha no forno quente por uma hora." },
  "Boil": { en: "She boiled the water before adding the pasta.", pt: "Ela ferveu a água antes de adicionar o macarrão." },
  "Fry": { en: "He fried the potatoes until they were crispy.", pt: "Ele fritou as batatas até ficarem crocantes." },
  "Chop": { en: "She chopped the onions and garlic very quickly.", pt: "Ela picou as cebolas e o alho muito rápido." },
  "Spoon": { en: "He stirred the soup carefully with a large wooden spoon.", pt: "Ele mexeu a sopa cuidadosamente com uma colher de pau grande." },
  "Fork": { en: "She ate the salad using a silver fork.", pt: "Ela comeu a salada usando um garfo de prata." },
  "Plate": { en: "He arranged the food beautifully on the white plate.", pt: "Ele arrumou a comida lindamente no prato branco." },
  "Bowl": { en: "She mixed the salad dressing in a small bowl.", pt: "Ela misturou o molho de salada em uma tigela pequena." },
  "Mix": { en: "He mixed the flour and sugar to create the dough.", pt: "Ele misturou a farinha e o açúcar para criar a massa." },
  "Pour": { en: "She poured the hot tea into the delicate cups.", pt: "Ela despejou o chá quente nas xícaras delicadas." },
  "Taste": { en: "The chef tasted the sauce and added more salt.", pt: "O chef provou o molho e adicionou mais sal." },
  "Spicy": { en: "He loved the spicy food they served at the Indian restaurant.", pt: "Ele adorava a comida apimentada que serviam no restaurante indiano." },
  "Sweet": { en: "She preferred sweet desserts over salty snacks.", pt: "Ela preferia sobremesas doces a lanches salgados." },
  "Salty": { en: "He complained that the soup tasted too salty.", pt: "Ele reclamou que a sopa estava com gosto muito salgado." },
  "Pan": { en: "She heated the oil in the frying pan before adding the eggs.", pt: "Ela aqueceu o óleo na frigideira antes de adicionar os ovos." },

  // --- Tecnologia ---
  "Laptop": { en: "He connected his laptop to the office network yesterday.", pt: "Ele conectou o laptop dele à rede do escritório ontem." },
  "Smartphone": { en: "She bought a new smartphone with a better camera.", pt: "Ela comprou um smartphone novo com uma câmera melhor." },
  "Internet": { en: "The internet connection dropped several times during the meeting.", pt: "A conexão com a internet caiu várias vezes durante a reunião." },
  "Keyboard": { en: "He typed the long document using a mechanical keyboard.", pt: "Ele digitou o longo documento usando um teclado mecânico." },
  "Screen": { en: "She cracked her phone screen when it fell on the floor.", pt: "Ela rachou a tela do telefone quando ele caiu no chão." },
  "Download": { en: "He downloaded the important files before the flight.", pt: "Ele baixou os arquivos importantes antes do voo." },
  "Password": { en: "She forgot her password and locked her account.", pt: "Ela esqueceu sua senha e bloqueou sua conta." },
  "Charger": { en: "He plugged his phone into the charger all night.", pt: "Ele conectou o telefone ao carregador a noite toda." },
  "App": { en: "The developer updated the app to fix some bugs.", pt: "O desenvolvedor atualizou o aplicativo para corrigir alguns bugs." },
  "Mouse": { en: "She clicked the mouse twice to open the application.", pt: "Ela clicou no mouse duas vezes para abrir o aplicativo." },
  "Upload": { en: "He uploaded the heavy video file to the server.", pt: "Ele enviou (fez upload) o arquivo de vídeo pesado para o servidor." },
  "Battery": { en: "The phone battery died completely during the long trip.", pt: "A bateria do telefone acabou completamente durante a longa viagem." },
  "Email": { en: "She received an urgent email from her boss this morning.", pt: "Ela recebeu um email urgente do seu chefe esta manhã." },
  "Website": { en: "The company launched a new website to attract more clients.", pt: "A empresa lançou um novo site para atrair mais clientes." },
  "Link": { en: "He clicked the secure link to reset his password.", pt: "Ele clicou no link seguro para redefinir sua senha." },
  "Save": { en: "She saved all her important documents on a portable drive.", pt: "Ela salvou todos os seus documentos importantes num drive portátil." },
  "Delete": { en: "He deleted the old files to free up space on his computer.", pt: "Ele apagou os arquivos antigos para liberar espaço no seu computador." },
  "Folder": { en: "She organized her digital photos in a specific folder.", pt: "Ela organizou suas fotos digitais numa pasta específica." },
  "Headphones": { en: "He wore noise-canceling headphones to concentrate at work.", pt: "Ele usou fones de ouvido com cancelamento de ruído para se concentrar no trabalho." },
  "Plug in": { en: "She plugged in her laptop before starting the presentation.", pt: "Ela conectou (na tomada) o laptop antes de começar a apresentação." },

  // --- Redes Sociais ---
  "Like": { en: "Thousands of people liked her post about the trip.", pt: "Milhares de pessoas curtiram a postagem dela sobre a viagem." },
  "Follow": { en: "He followed many educational channels to learn new skills.", pt: "Ele seguia muitos canais educacionais para aprender novas habilidades." },
  "Post": { en: "She posted a beautiful picture of the sunset on her profile.", pt: "Ela postou uma foto linda do pôr do sol no seu perfil." },
  "Share": { en: "They shared the funny video with all their friends.", pt: "Eles compartilharam o vídeo engraçado com todos os seus amigos." },
  "Profile": { en: "He updated his professional profile to find a better job.", pt: "Ele atualizou seu perfil profissional para encontrar um emprego melhor." },
  "Message": { en: "She sent a direct message to ask about the event details.", pt: "Ela enviou uma mensagem direta para perguntar sobre os detalhes do evento." },
  "Comment": { en: "He left a positive comment on her recent photo.", pt: "Ele deixou um comentário positivo na foto recente dela." },
  "Hashtag": { en: "She used a popular hashtag to make her post visible.", pt: "Ela usou uma hashtag popular para tornar sua postagem visível." },
  "Scroll": { en: "He scrolled through his feed for hours without realizing it.", pt: "Ele rolou a tela pelo seu feed por horas sem perceber." },
  "Follower": { en: "The influencer gained a new follower every minute.", pt: "O influenciador ganhava um novo seguidor a cada minuto." },
  "Feed": { en: "She checked her feed every morning to read the news.", pt: "Ela verificava o seu feed toda manhã para ler as notícias." },
  "Tag": { en: "He tagged his best friend in the hilarious meme.", pt: "Ele marcou seu melhor amigo no meme hilário." },
  "Story": { en: "She uploaded a quick update to her story yesterday.", pt: "Ela enviou uma atualização rápida para seu story ontem." },
  "Influencer": { en: "The famous influencer promoted a new clothing brand.", pt: "O influenciador famoso promoveu uma nova marca de roupas." },
  "Viral": { en: "The dancing video went completely viral overnight.", pt: "O vídeo de dança se tornou completamente viral da noite para o dia." },
  "Meme": { en: "They laughed at the funny meme they saw online.", pt: "Eles riram do meme engraçado que viram online." },
  "Block": { en: "She blocked the rude user to protect her privacy.", pt: "Ela bloqueou o usuário rude para proteger sua privacidade." },
  "Notification": { en: "He received a notification when someone liked his photo.", pt: "Ele recebeu uma notificação quando alguém curtiu a foto dele." },
  "Update": { en: "The application updated automatically during the night.", pt: "O aplicativo atualizou automaticamente durante a noite." },
  "Account": { en: "He created a new account to keep his personal life private.", pt: "Ele criou uma nova conta para manter sua vida pessoal privada." }
};

const b1NewVocab = {
  "familia": [
    { english: "Sibling", portuguese: "Irmão/Irmã (Geral)", levels: { B1: { en: "I have two siblings who currently live abroad.", pt: "Tenho dois irmãos que atualmente moram no exterior." } } },
    { english: "Relatives", portuguese: "Parentes", levels: { B1: { en: "During the holidays, all my relatives gather at my house.", pt: "Durante os feriados, todos os meus parentes se reúnem na minha casa." } } },
    { english: "Upbringing", portuguese: "Criação familiar", levels: { B1: { en: "She had a strict upbringing but it made her very disciplined.", pt: "Ela teve uma criação rigorosa, mas isso a tornou muito disciplinada." } } },
    { english: "Ancestors", portuguese: "Antepassados", levels: { B1: { en: "Our ancestors migrated to this country over a century ago.", pt: "Nossos antepassados migraram para este país há mais de um século." } } },
    { english: "Offspring", portuguese: "Descendentes / Prole", levels: { B1: { en: "The parents are highly protective of their offspring.", pt: "Os pais são altamente protetores com sua prole." } } },
    { english: "Foster child", portuguese: "Filho(a) adotivo(a)", levels: { B1: { en: "They welcomed a foster child into their loving home.", pt: "Eles acolheram um filho adotivo em seu lar amoroso." } } },
    { english: "Godfather", portuguese: "Padrinho", levels: { B1: { en: "My godfather always gives me the best advice.", pt: "Meu padrinho sempre me dá os melhores conselhos." } } },
    { english: "Godmother", portuguese: "Madrinha", levels: { B1: { en: "My godmother attended my graduation ceremony last week.", pt: "Minha madrinha compareceu à minha cerimônia de formatura na semana passada." } } }
  ],
  "amigos": [
    { english: "Acquaintance", portuguese: "Conhecido(a)", levels: { B1: { en: "He is just an acquaintance from my previous job.", pt: "Ele é apenas um conhecido do meu emprego anterior." } } },
    { english: "Companion", portuguese: "Companheiro(a)", levels: { B1: { en: "My dog has been my loyal companion for years.", pt: "Meu cachorro tem sido meu companheiro leal há anos." } } },
    { english: "Peer", portuguese: "Colega (do mesmo nível)", levels: { B1: { en: "He is highly respected by his academic peers.", pt: "Ele é muito respeitado pelos seus colegas acadêmicos." } } },
    { english: "Ally", portuguese: "Aliado(a)", levels: { B1: { en: "She was a strong ally during the tough negotiations.", pt: "Ela foi uma forte aliada durante as negociações difíceis." } } },
    { english: "Confidant", portuguese: "Confidente", levels: { B1: { en: "My sister is my closest confidant when I need advice.", pt: "Minha irmã é minha confidente mais próxima quando preciso de conselhos." } } },
    { english: "Comrade", portuguese: "Camarada", levels: { B1: { en: "The soldiers fought bravely alongside their comrades.", pt: "Os soldados lutaram bravamente ao lado de seus camaradas." } } },
    { english: "Friendship", portuguese: "Amizade", levels: { B1: { en: "Their friendship survived many difficult challenges.", pt: "A amizade deles sobreviveu a muitos desafios difíceis." } } },
    { english: "Circle", portuguese: "Círculo (de amigos)", levels: { B1: { en: "She has a very small and tight-knit social circle.", pt: "Ela tem um círculo social muito pequeno e unido." } } }
  ],
  "corpo": [
    { english: "Posture", portuguese: "Postura", levels: { B1: { en: "Maintaining good posture is essential for a healthy back.", pt: "Manter uma boa postura é essencial para uma coluna saudável." } } },
    { english: "Physique", portuguese: "Físico / Porte", levels: { B1: { en: "He has the strong physique of a professional athlete.", pt: "Ele tem o físico forte de um atleta profissional." } } },
    { english: "Complexion", portuguese: "Pele (do rosto) / Cútis", levels: { B1: { en: "Drinking water can improve your facial complexion.", pt: "Beber água pode melhorar a pele do seu rosto." } } },
    { english: "Skeleton", portuguese: "Esqueleto", levels: { B1: { en: "The human skeleton provides structure to our bodies.", pt: "O esqueleto humano fornece estrutura aos nossos corpos." } } },
    { english: "Muscle", portuguese: "Músculo", levels: { B1: { en: "He pulled a muscle while lifting heavy boxes.", pt: "Ele distendeu um músculo ao levantar caixas pesadas." } } },
    { english: "Tissue", portuguese: "Tecido (biológico)", levels: { B1: { en: "The scar tissue formed slowly over the wound.", pt: "O tecido da cicatriz se formou lentamente sobre o ferimento." } } },
    { english: "Organ", portuguese: "Órgão", levels: { B1: { en: "The heart is a vital organ that pumps blood.", pt: "O coração é um órgão vital que bombeia sangue." } } },
    { english: "Vein", portuguese: "Veia", levels: { B1: { en: "You could see the blue vein on his arm clearly.", pt: "Você podia ver a veia azul no braço dele claramente." } } }
  ],
  "casa": [
    { english: "Residence", portuguese: "Residência", levels: { B1: { en: "Their primary residence is located in the suburbs.", pt: "A residência principal deles está localizada no subúrbio." } } },
    { english: "Dwelling", portuguese: "Habitação / Morada", levels: { B1: { en: "The ancient dwelling was completely built of stone.", pt: "A habitação antiga foi completamente construída de pedra." } } },
    { english: "Property", portuguese: "Propriedade", levels: { B1: { en: "They purchased a large property near the lake.", pt: "Eles compraram uma grande propriedade perto do lago." } } },
    { english: "Mortgage", portuguese: "Hipoteca", levels: { B1: { en: "They finally paid off their mortgage last month.", pt: "Eles finalmente quitaram a hipoteca deles no mês passado." } } },
    { english: "Estate", portuguese: "Propriedade rural / Fazenda", levels: { B1: { en: "The wealthy family owned a huge country estate.", pt: "A família rica possuía uma enorme propriedade no campo." } } },
    { english: "Mansion", portuguese: "Mansão", levels: { B1: { en: "The celebrity bought a luxurious mansion in Hollywood.", pt: "A celebridade comprou uma luxuosa mansão em Hollywood." } } },
    { english: "Architecture", portuguese: "Arquitetura", levels: { B1: { en: "The architecture of this building is truly modern.", pt: "A arquitetura deste prédio é verdadeiramente moderna." } } },
    { english: "Renovation", portuguese: "Reforma", levels: { B1: { en: "The house needs an extensive renovation before moving in.", pt: "A casa precisa de uma reforma extensa antes de mudar." } } }
  ],
  "casa2": [
    { english: "Chore", portuguese: "Tarefa doméstica", levels: { B1: { en: "Washing dishes is my least favorite daily chore.", pt: "Lavar louça é minha tarefa doméstica diária menos favorita." } } },
    { english: "Maintenance", portuguese: "Manutenção", levels: { B1: { en: "Regular maintenance keeps the house in perfect condition.", pt: "A manutenção regular mantém a casa em perfeitas condições." } } },
    { english: "Plumber", portuguese: "Encanador", levels: { B1: { en: "We called a plumber to fix the leaking pipe.", pt: "Nós chamamos um encanador para consertar o cano vazando." } } },
    { english: "Electrician", portuguese: "Eletricista", levels: { B1: { en: "The electrician installed the new lighting system safely.", pt: "O eletricista instalou o novo sistema de iluminação com segurança." } } },
    { english: "Appliance", portuguese: "Eletrodoméstico", levels: { B1: { en: "She bought a modern kitchen appliance to save time.", pt: "Ela comprou um eletrodoméstico de cozinha moderno para economizar tempo." } } },
    { english: "Utensil", portuguese: "Utensílio", levels: { B1: { en: "He used a sharp utensil to cut the tough meat.", pt: "Ele usou um utensílio afiado para cortar a carne dura." } } },
    { english: "Detergent", portuguese: "Detergente", levels: { B1: { en: "You need a stronger detergent to remove this stain.", pt: "Você precisa de um detergente mais forte para remover essa mancha." } } },
    { english: "Broom", portuguese: "Vassoura", levels: { B1: { en: "She swept the dusty porch with a traditional broom.", pt: "Ela varreu a varanda empoeirada com uma vassoura tradicional." } } }
  ],
  "hobbies": [
    { english: "Pastime", portuguese: "Passatempo", levels: { B1: { en: "Reading historical novels is her favorite pastime.", pt: "Ler romances históricos é o passatempo favorito dela." } } },
    { english: "Leisure", portuguese: "Lazer", levels: { B1: { en: "He spends his leisure time painting beautiful landscapes.", pt: "Ele passa seu tempo de lazer pintando belas paisagens." } } },
    { english: "Recreation", portuguese: "Recreação", levels: { B1: { en: "The park provides numerous opportunities for outdoor recreation.", pt: "O parque oferece inúmeras oportunidades para recreação ao ar livre." } } },
    { english: "Amusement", portuguese: "Diversão / Entretenimento", levels: { B1: { en: "They went to the amusement park for the weekend.", pt: "Eles foram ao parque de diversões no fim de semana." } } },
    { english: "Pursuit", portuguese: "Busca / Atividade", levels: { B1: { en: "Photography is a creative pursuit that requires patience.", pt: "A fotografia é uma atividade criativa que requer paciência." } } },
    { english: "Enthusiasm", portuguese: "Entusiasmo", levels: { B1: { en: "She showed great enthusiasm for her new pottery class.", pt: "Ela mostrou grande entusiasmo pela sua nova aula de cerâmica." } } },
    { english: "Passion", portuguese: "Paixão", levels: { B1: { en: "His true passion in life is playing the piano.", pt: "Sua verdadeira paixão na vida é tocar piano." } } },
    { english: "Amateur", portuguese: "Amador", levels: { B1: { en: "Even as an amateur, his artistic skills are impressive.", pt: "Mesmo como um amador, suas habilidades artísticas são impressionantes." } } }
  ],
  "esportes": [
    { english: "Athletics", portuguese: "Atletismo", levels: { B1: { en: "She competed in athletics during her university years.", pt: "Ela competiu no atletismo durante seus anos de universidade." } } },
    { english: "Tournament", portuguese: "Torneio", levels: { B1: { en: "The international tennis tournament will start next month.", pt: "O torneio internacional de tênis começará no mês que vem." } } },
    { english: "Championship", portuguese: "Campeonato", levels: { B1: { en: "Our team won the national championship last Sunday.", pt: "Nosso time venceu o campeonato nacional no último domingo." } } },
    { english: "Opponent", portuguese: "Oponente", levels: { B1: { en: "He shook hands with his opponent after the match.", pt: "Ele apertou a mão de seu oponente após a partida." } } },
    { english: "Rival", portuguese: "Rival", levels: { B1: { en: "The intense match between the two rival teams ended.", pt: "A partida intensa entre as duas equipes rivais terminou." } } },
    { english: "Spectator", portuguese: "Espectador", levels: { B1: { en: "Thousands of excited spectators cheered in the stadium.", pt: "Milhares de espectadores animados aplaudiram no estádio." } } },
    { english: "Umpire", portuguese: "Árbitro (tênis/beisebol)", levels: { B1: { en: "The umpire made a controversial decision during the game.", pt: "O árbitro tomou uma decisão controversa durante o jogo." } } },
    { english: "Strategy", portuguese: "Estratégia", levels: { B1: { en: "The coach devised a brilliant strategy for the finals.", pt: "O técnico elaborou uma estratégia brilhante para as finais." } } }
  ],
  "supermercado": [
    { english: "Grocery", portuguese: "Mantimentos", levels: { B1: { en: "I bought all my weekly grocery items on Friday.", pt: "Eu comprei todos os meus itens de supermercado da semana na sexta-feira." } } },
    { english: "Aisle", portuguese: "Corredor", levels: { B1: { en: "You can find the pasta in the third aisle.", pt: "Você pode encontrar a massa no terceiro corredor." } } },
    { english: "Checkout", portuguese: "Caixa (pagamento)", levels: { B1: { en: "There was a massive line at the checkout today.", pt: "Havia uma fila enorme no caixa hoje." } } },
    { english: "Trolley", portuguese: "Carrinho (UK)", levels: { B1: { en: "He pushed the loaded trolley across the parking lot.", pt: "Ele empurrou o carrinho carregado pelo estacionamento." } } },
    { english: "Produce", portuguese: "Hortifruti", levels: { B1: { en: "The fresh produce section is located near the entrance.", pt: "A seção de hortifruti fresco fica perto da entrada." } } },
    { english: "Dairy", portuguese: "Laticínios", levels: { B1: { en: "She went to the dairy aisle to buy milk.", pt: "Ela foi ao corredor de laticínios para comprar leite." } } },
    { english: "Inventory", portuguese: "Estoque", levels: { B1: { en: "The store updates its inventory every single night.", pt: "A loja atualiza seu estoque toda santa noite." } } },
    { english: "Retailer", portuguese: "Varejista", levels: { B1: { en: "They are the largest food retailer in the country.", pt: "Eles são a maior varejista de alimentos do país." } } }
  ],
  "compras": [
    { english: "Boutique", portuguese: "Boutique", levels: { B1: { en: "She bought an elegant dress from a luxury boutique.", pt: "Ela comprou um vestido elegante de uma boutique de luxo." } } },
    { english: "Retail", portuguese: "Varejo", levels: { B1: { en: "He has worked in the retail industry for years.", pt: "Ele trabalhou na indústria de varejo por anos." } } },
    { english: "Consumer", portuguese: "Consumidor", levels: { B1: { en: "The average consumer expects high quality at low prices.", pt: "O consumidor médio espera alta qualidade a preços baixos." } } },
    { english: "Purchase", portuguese: "Compra / Adquirir", levels: { B1: { en: "He made a significant purchase using his credit card.", pt: "Ele fez uma compra significativa usando seu cartão de crédito." } } },
    { english: "Refund", portuguese: "Reembolso", levels: { B1: { en: "She demanded a full refund for the defective product.", pt: "Ela exigiu um reembolso total pelo produto com defeito." } } },
    { english: "Bargain", portuguese: "Pechincha", levels: { B1: { en: "That designer coat was a fantastic bargain at the outlet.", pt: "Aquele casaco de grife foi uma pechincha fantástica no outlet." } } },
    { english: "Wardrobe", portuguese: "Guarda-roupa (roupas)", levels: { B1: { en: "She entirely updated her winter wardrobe last month.", pt: "Ela atualizou inteiramente seu guarda-roupa de inverno no mês passado." } } },
    { english: "Accessory", portuguese: "Acessório", levels: { B1: { en: "A nice watch is the perfect accessory for this outfit.", pt: "Um belo relógio é o acessório perfeito para esta roupa." } } }
  ],
  "profissoes": [
    { english: "Career", portuguese: "Carreira", levels: { B1: { en: "He decided to pursue a demanding career in law.", pt: "Ele decidiu seguir uma carreira exigente na área de direito." } } },
    { english: "Occupation", portuguese: "Ocupação", levels: { B1: { en: "Please state your name and current occupation clearly.", pt: "Por favor, declare seu nome e ocupação atual claramente." } } },
    { english: "Vocation", portuguese: "Vocação", levels: { B1: { en: "Teaching children is truly her passion and vocation.", pt: "Ensinar crianças é verdadeiramente sua paixão e vocação." } } },
    { english: "Profession", portuguese: "Profissão", levels: { B1: { en: "Medicine is an incredibly rewarding and challenging profession.", pt: "A medicina é uma profissão incrivelmente gratificante e desafiadora." } } },
    { english: "Employee", portuguese: "Funcionário / Empregado", levels: { B1: { en: "The diligent employee received a promotion this year.", pt: "O funcionário diligente recebeu uma promoção este ano." } } },
    { english: "Employer", portuguese: "Empregador", levels: { B1: { en: "Her previous employer provided excellent health benefits.", pt: "O empregador anterior dela forneceu excelentes benefícios de saúde." } } },
    { english: "Colleague", portuguese: "Colega de trabalho", levels: { B1: { en: "My colleague helped me finish the complex presentation.", pt: "Meu colega de trabalho me ajudou a terminar a apresentação complexa." } } },
    { english: "Resume / CV", portuguese: "Currículo", levels: { B1: { en: "She sent her updated resume to several large companies.", pt: "Ela enviou seu currículo atualizado para várias grandes empresas." } } }
  ],
  "lugares": [
    { english: "Destination", portuguese: "Destino", levels: { B1: { en: "Paris is a popular tourist destination during the spring.", pt: "Paris é um destino turístico popular durante a primavera." } } },
    { english: "Location", portuguese: "Localização", levels: { B1: { en: "The restaurant is situated in a prime downtown location.", pt: "O restaurante está situado numa localização privilegiada no centro." } } },
    { english: "Venue", portuguese: "Local (de evento)", levels: { B1: { en: "They booked a beautiful outdoor venue for their wedding.", pt: "Eles reservaram um lindo local ao ar livre para o casamento." } } },
    { english: "Surroundings", portuguese: "Arredores", levels: { B1: { en: "The hotel beautifully blends with its natural surroundings.", pt: "O hotel se mistura lindamente com seus arredores naturais." } } },
    { english: "Neighborhood", portuguese: "Vizinhança / Bairro", levels: { B1: { en: "It is a quiet and friendly neighborhood for families.", pt: "É uma vizinhança tranquila e amigável para famílias." } } },
    { english: "Suburb", portuguese: "Subúrbio", levels: { B1: { en: "They moved to the suburb to escape the noise.", pt: "Eles se mudaram para o subúrbio para escapar do barulho." } } },
    { english: "Downtown", portuguese: "Centro da cidade", levels: { B1: { en: "The lively downtown area is full of great restaurants.", pt: "A animada área do centro da cidade é cheia de ótimos restaurantes." } } },
    { english: "Landmark", portuguese: "Ponto de referência", levels: { B1: { en: "The ancient clock tower is a famous historical landmark.", pt: "A antiga torre do relógio é um famoso ponto de referência histórico." } } }
  ],
  "animais": [
    { english: "Wildlife", portuguese: "Vida selvagem", levels: { B1: { en: "The documentary beautifully captured the amazing African wildlife.", pt: "O documentário capturou lindamente a incrível vida selvagem africana." } } },
    { english: "Mammal", portuguese: "Mamífero", levels: { B1: { en: "The blue whale is the largest mammal on Earth.", pt: "A baleia azul é o maior mamífero da Terra." } } },
    { english: "Predator", portuguese: "Predador", levels: { B1: { en: "The lion is an apex predator in the savanna.", pt: "O leão é um predador no topo da cadeia na savana." } } },
    { english: "Prey", portuguese: "Presa", levels: { B1: { en: "The fast cheetah chased its prey across the grass.", pt: "A chita veloz perseguiu sua presa pela grama." } } },
    { english: "Habitat", portuguese: "Habitat", levels: { B1: { en: "Deforestation is severely threatening the natural habitat of monkeys.", pt: "O desmatamento está ameaçando severamente o habitat natural dos macacos." } } },
    { english: "Species", portuguese: "Espécie", levels: { B1: { en: "Scientists discovered a completely new species of butterfly recently.", pt: "Cientistas descobrirrram uma espécie de borboleta completamente nova recentemente." } } },
    { english: "Breed", portuguese: "Raça (animais)", levels: { B1: { en: "The Golden Retriever is a highly intelligent dog breed.", pt: "O Golden Retriever é uma raça de cachorro altamente inteligente." } } },
    { english: "Veterinary", portuguese: "Veterinário(a) (clínica)", levels: { B1: { en: "She took her sick pet to the veterinary clinic.", pt: "Ela levou seu animal de estimação doente à clínica veterinária." } } }
  ],
  "culinaria": [
    { english: "Cuisine", portuguese: "Culinária", levels: { B1: { en: "Italian cuisine is incredibly popular all over the world.", pt: "A culinária italiana é incrivelmente popular no mundo todo." } } },
    { english: "Ingredient", portuguese: "Ingrediente", levels: { B1: { en: "You need specific organic ingredients for this complex dish.", pt: "Você precisa de ingredientes orgânicos específicos para este prato complexo." } } },
    { english: "Flavor", portuguese: "Sabor", levels: { B1: { en: "The rich vanilla flavor is evident in this dessert.", pt: "O rico sabor de baunilha é evidente nesta sobremesa." } } },
    { english: "Aroma", portuguese: "Aroma", levels: { B1: { en: "The delicious aroma of fresh coffee filled the room.", pt: "O delicioso aroma de café fresco encheu a sala." } } },
    { english: "Seasoning", portuguese: "Tempero", levels: { B1: { en: "The chef added secret seasoning to enhance the taste.", pt: "O chef adicionou um tempero secreto para realçar o sabor." } } },
    { english: "Appetizer", portuguese: "Aperitivo / Entrada", levels: { B1: { en: "We ordered garlic bread as an appetizer before dinner.", pt: "Pedimos pão de alho como aperitivo antes do jantar." } } },
    { english: "Beverage", portuguese: "Bebida", levels: { B1: { en: "The restaurant offers a variety of alcoholic and non-alcoholic beverages.", pt: "O restaurante oferece uma variedade de bebidas alcoólicas e não alcoólicas." } } },
    { english: "Portion", portuguese: "Porção", levels: { B1: { en: "The restaurant serves huge portions of food to customers.", pt: "O restaurante serve enormes porções de comida aos clientes." } } }
  ],
  "tecnologia": [
    { english: "Device", portuguese: "Dispositivo", levels: { B1: { en: "This electronic device tracks your daily physical activities automatically.", pt: "Este dispositivo eletrônico rastreia suas atividades físicas diárias automaticamente." } } },
    { english: "Gadget", portuguese: "Aparelho / Engenhoca", levels: { B1: { en: "He always buys the latest tech gadget available online.", pt: "Ele sempre compra a última engenhoca tecnológica disponível online." } } },
    { english: "Software", portuguese: "Software", levels: { B1: { en: "The new software update fixed all the security issues.", pt: "A nova atualização de software corrigiu todos os problemas de segurança." } } },
    { english: "Hardware", portuguese: "Hardware", levels: { B1: { en: "You need powerful hardware to run this demanding game.", pt: "Você precisa de um hardware potente para rodar este jogo exigente." } } },
    { english: "Network", portuguese: "Rede", levels: { B1: { en: "The corporate network was down for maintenance all day.", pt: "A rede corporativa esteve inativa para manutenção o dia todo." } } },
    { english: "Database", portuguese: "Banco de dados", levels: { B1: { en: "Customer information is stored securely in the central database.", pt: "As informações do cliente são armazenadas com segurança no banco de dados central." } } },
    { english: "Algorithm", portuguese: "Algoritmo", levels: { B1: { en: "The search algorithm prioritizes highly relevant and recent content.", pt: "O algoritmo de busca prioriza conteúdo altamente relevante e recente." } } },
    { english: "Innovation", portuguese: "Inovação", levels: { B1: { en: "Technological innovation has completely transformed the modern banking sector.", pt: "A inovação tecnológica transformou completamente o setor bancário moderno." } } }
  ],
  "redes_sociais": [
    { english: "Platform", portuguese: "Plataforma", levels: { B1: { en: "This social media platform connects professionals worldwide.", pt: "Esta plataforma de mídia social conecta profissionais no mundo todo." } } },
    { english: "Influencer", portuguese: "Influenciador", levels: { B1: { en: "The famous influencer partnered with an international beauty brand.", pt: "O famoso influenciador fez parceria com uma marca de beleza internacional." } } },
    { english: "Viral", portuguese: "Viral", levels: { B1: { en: "His humorous video went completely viral across multiple platforms.", pt: "Seu vídeo humorístico se tornou completamente viral em várias plataformas." } } },
    { english: "Trending", portuguese: "Em alta / Tendência", levels: { B1: { en: "The news about the election is trending on Twitter.", pt: "As notícias sobre a eleição estão em alta no Twitter." } } },
    { english: "Engagement", portuguese: "Engajamento", levels: { B1: { en: "Interactive posts usually generate much higher user engagement.", pt: "Postagens interativas geralmente geram um engajamento do usuário muito maior." } } },
    { english: "Notification", portuguese: "Notificação", levels: { B1: { en: "I turned off the annoying notification sounds on my phone.", pt: "Eu desliguei os sons irritantes de notificação no meu telefone." } } },
    { english: "Content", portuguese: "Conteúdo", levels: { B1: { en: "Creators must constantly produce engaging content for their audience.", pt: "Os criadores devem produzir constantemente conteúdo envolvente para seu público." } } },
    { english: "Troll", portuguese: "Troll (internet)", levels: { B1: { en: "The anonymous troll left offensive comments on her profile.", pt: "O troll anônimo deixou comentários ofensivos no perfil dela." } } }
  ]
};

const path1 = './data/scenarios1.ts';
let content = fs.readFileSync(path1, 'utf-8');

let changedCount = 0;

for (const [word, updates] of Object.entries(b1Replacements)) {
  const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  
  // Find the word block and remove B1
  const blockRegex = new RegExp(`(\\{\\s*english:\\s*["'\`]${escapedWord}["'\`][\\s\\S]*?)(B1:\\s*\\{[^}]*\\}\\s*,?\\s*)(\\})`, 'g');
  content = content.replace(blockRegex, (match, beforeB1, b1Block, afterB1) => {
    return beforeB1.trim().replace(/,\s*$/, '') + "\n                      " + afterB1;
  });

  // Now replace A2
  const a2Regex = new RegExp(`(english:\\s*["'\`]${escapedWord}["'\`][\\s\\S]*?A2:\\s*\\{\\s*en:\\s*["'\`])[^"'\`]+(["'\`]\\s*,\\s*pt:\\s*["'\`])[^"'\`]+(["'\`]\\s*\\})`, 'g');
  
  content = content.replace(a2Regex, (match, prefix, mid, suffix) => {
    changedCount++;
    return `${prefix}${updates.en}${mid}${updates.pt}${suffix}`;
  });
}

for (const [scenarioId, words] of Object.entries(b1NewVocab)) {
  const vocabEndRegex = new RegExp(`(id:\\s*["']${scenarioId}["'][\\s\\S]*?vocabulary:\\s*\\[[\\s\\S]*?)(?=\\s*],\\s*(?:flashcards|quiz|dialogue|trueOrFalse|speakingPractice|usefulExpressions))`);
  content = content.replace(vocabEndRegex, (match, prefix) => {
    let b1String = '';
    for (const item of words) {
      b1String += `,\n      { english: "${item.english}", portuguese: "${item.portuguese}",\n          levels: { \n                        B1: { en: "${item.levels.B1.en}", pt: "${item.levels.B1.pt}" } \n                      }\n    }`;
    }
    return prefix + b1String;
  });
}

fs.writeFileSync(path1, content, 'utf-8');
console.log(`Updated ${changedCount} A2 items and injected B1 words for scenarios1.ts.`);
