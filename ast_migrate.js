const { Project, SyntaxKind } = require("ts-morph");
const fs = require("fs");
const path = require("path");

const project = new Project();
const b1Replacements = {
  // Family
  "Mother": { en: "She called her mother to wish her a happy birthday.", pt: "Ela ligou para sua mãe para desejar-lhe feliz aniversário." },
  "Father": { en: "His father worked as a mechanical engineer for years.", pt: "O pai dele trabalhou como engenheiro mecânico por anos." },
  "Brother": { en: "My brother fixed my broken laptop yesterday.", pt: "Meu irmão consertou meu notebook quebrado ontem." },
  "Sister": { en: "Her sister currently lives in a small apartment in Paris.", pt: "A irmã dela mora atualmente em um pequeno apartamento em Paris." },
  "Grandmother": { en: "My grandmother baked delicious cookies every Sunday.", pt: "Minha avó assava biscoitos deliciosos todo domingo." },
  "Grandfather": { en: "He always listens to his grandfather's fascinating stories.", pt: "Ele sempre ouve as histórias fascinantes do seu avô." },
  "Aunt": { en: "My aunt traveled across Europe last summer.", pt: "Minha tia viajou pela Europa no verão passado." },
  "Uncle": { en: "His uncle taught him how to play the acoustic guitar.", pt: "O tio dele ensinou ele a tocar violão." },
  "Cousin": { en: "I visited my cousin during the winter holidays.", pt: "Eu visitei meu primo durante as férias de inverno." },
  "Nephew": { en: "She bought a colorful toy for her young nephew.", pt: "Ela comprou um brinquedo colorido para seu jovem sobrinho." },
  "Niece": { en: "His niece started kindergarten two weeks ago.", pt: "A sobrinha dele começou o jardim de infância há duas semanas." },
  "Husband": { en: "Her husband surprised her with a romantic dinner.", pt: "O marido dela a surpreendeu com um jantar romântico." },
  "Wife": { en: "His wife works as a senior manager in a tech company.", pt: "A esposa dele trabalha como gerente sênior em uma empresa de tecnologia." },
  "Son": { en: "Their son graduated from the university with top honors.", pt: "O filho deles se formou na universidade com honras máximas." },
  "Daughter": { en: "My daughter usually finishes her homework before dinner.", pt: "Minha filha normalmente termina a lição de casa antes do jantar." },
  "Parents": { en: "His parents supported his decision to change careers.", pt: "Os pais dele apoiaram a decisão dele de mudar de carreira." },
  "Grandchildren": { en: "They love spending quality time with their grandchildren.", pt: "Eles amam passar tempo de qualidade com seus netos." },
  "Relatives": { en: "Many distant relatives attended the massive family reunion.", pt: "Muitos parentes distantes compareceram à imensa reunião de família." },
  "Twins": { en: "The twins always wore identical clothes when they were kids.", pt: "Os gêmeos sempre vestiam roupas idênticas quando eram crianças." },
  "In-laws": { en: "We invited our in-laws for a barbecue on Sunday.", pt: "Nós convidamos nossos sogros/cunhados para um churrasco no domingo." },

  // Directions
  "Go straight": { en: "They went straight until they reached the main square.", pt: "Eles foram reto até chegarem à praça principal." },
  "Turn left": { en: "She turned left at the second traffic light.", pt: "Ela virou à esquerda no segundo semáforo." },
  "Turn right": { en: "He turned right because the main road was blocked.", pt: "Ele virou à direita porque a estrada principal estava bloqueada." },
  "Next to": { en: "The new bakery is located next to the pharmacy.", pt: "A nova padaria fica localizada ao lado da farmácia." },
  "Between": { en: "He parked his car perfectly between the two white vans.", pt: "Ele estacionou o carro perfeitamente entre as duas vans brancas." },
  "Opposite / Across from": { en: "She sat opposite him during the long train ride.", pt: "Ela sentou de frente para ele durante a longa viagem de trem." },
  "Corner": { en: "The street musician played his guitar on the corner.", pt: "O músico de rua tocou seu violão na esquina." },
  "Block": { en: "They walked one more block to find a good restaurant.", pt: "Eles andaram mais um quarteirão para encontrar um bom restaurante." },
  "Traffic light": { en: "The driver stopped abruptly at the red traffic light.", pt: "O motorista parou bruscamente no semáforo vermelho." },
  "Crossroad / Intersection": { en: "An accident happened at the busy intersection yesterday.", pt: "Um acidente aconteceu no cruzamento movimentado ontem." },
  "Crosswalk": { en: "The pedestrians used the crosswalk to get to the other side.", pt: "Os pedestres usaram a faixa de pedestres para chegar ao outro lado." },
  "Roundabout": { en: "Take the second exit at the large roundabout.", pt: "Pegue a segunda saída na rotatória grande." },
  "Sign": { en: "He ignored the warning sign and got a heavy fine.", pt: "Ele ignorou a placa de aviso e tomou uma multa alta." },
  "Map": { en: "She checked the digital map on her phone to find the museum.", pt: "Ela verificou o mapa digital no celular para encontrar o museu." },
  "North": { en: "They drove north for three hours to reach the cabin.", pt: "Eles dirigiram para o norte por três horas para chegar à cabana." },
  "South": { en: "Many birds fly south before the harsh winter begins.", pt: "Muitos pássaros voam para o sul antes do inverno rigoroso começar." },
  "East": { en: "The sun rises in the east and sets in the west.", pt: "O sol nasce no leste e se põe no oeste." },
  "West": { en: "He traveled west to explore the beautiful coastline.", pt: "Ele viajou para o oeste para explorar a bela costa." },
  "Lost": { en: "We got lost in the forest because it was too dark.", pt: "Nós nos perdemos na floresta porque estava muito escuro." },
  "Address": { en: "She wrote the correct address on the envelope.", pt: "Ela escreveu o endereço correto no envelope." },

  // Hotel
  "Reservation": { en: "I made a reservation online two months ago.", pt: "Eu fiz uma reserva online dois meses atrás." },
  "Reception / Front desk": { en: "The guest complained at the front desk about the noise.", pt: "O hóspede reclamou na recepção sobre o barulho." },
  "Key card": { en: "He lost his key card and requested a new one.", pt: "Ele perdeu seu cartão-chave e solicitou um novo." },
  "Single room": { en: "She booked a single room for her quick business trip.", pt: "Ela reservou um quarto de solteiro para sua viagem rápida de negócios." },
  "Double room": { en: "They asked for a double room with a beautiful ocean view.", pt: "Eles pediram um quarto de casal com uma bela vista para o oceano." },
  "Check-in": { en: "We arrived late and did our check-in at midnight.", pt: "Nós chegamos tarde e fizemos nosso check-in à meia-noite." },
  "Check-out": { en: "He paid the final bill during the check-out process.", pt: "Ele pagou a conta final durante o processo de check-out." },
  "Luggage / Baggage": { en: "The porter carried my heavy luggage to the elevator.", pt: "O porteiro carregou minha bagagem pesada até o elevador." },
  "Elevator / Lift": { en: "The old elevator broke down yesterday morning.", pt: "O elevador antigo quebrou ontem de manhã." },
  "Stairs": { en: "She took the stairs because the elevator was full.", pt: "Ela foi pelas escadas porque o elevador estava cheio." },
  "Breakfast": { en: "The hotel provided a complimentary continental breakfast.", pt: "O hotel forneceu um café da manhã continental de cortesia." },
  "Towel": { en: "The maid brought a clean towel to the bathroom.", pt: "A camareira trouxe uma toalha limpa para o banheiro." },
  "Pillow": { en: "He requested an extra firm pillow for his sore neck.", pt: "Ele pediu um travesseiro extra firme para seu pescoço dolorido." },
  "Blanket": { en: "It was freezing, so she asked for another thick blanket.", pt: "Estava congelando, então ela pediu outro cobertor grosso." },
  "Air conditioning": { en: "The air conditioning stopped working in the middle of the night.", pt: "O ar condicionado parou de funcionar no meio da noite." },
  "Heating": { en: "The central heating kept the room comfortably warm.", pt: "O aquecimento central manteve o quarto confortavelmente quente." },
  "Pool": { en: "They relaxed by the outdoor pool all afternoon.", pt: "Eles relaxaram perto da piscina externa a tarde toda." },
  "Gym": { en: "He visited the hotel gym to do his daily workout.", pt: "Ele visitou a academia do hotel para fazer seu treino diário." },
  "Room service": { en: "We ordered delicious pizza through room service.", pt: "Nós pedimos uma pizza deliciosa pelo serviço de quarto." },
  "Bill": { en: "The manager reviewed the detailed bill before giving it to the guest.", pt: "O gerente revisou a conta detalhada antes de entregá-la ao hóspede." },

  // Restaurant
  "Menu": { en: "The waiter handed me the menu as soon as I sat down.", pt: "O garçom me entregou o cardápio assim que me sentei." },
  "Waiter / Waitress": { en: "The friendly waitress recommended the daily special.", pt: "A garçonete simpática recomendou o prato do dia." },
  "Order": { en: "He ordered a medium-rare steak with roasted potatoes.", pt: "Ele pediu um bife ao ponto para mal passado com batatas assadas." },
  "Appetizer": { en: "We shared a delicious garlic bread appetizer.", pt: "Nós dividimos um delicioso pão de alho como entrada." },
  "Main course": { en: "She chose the grilled salmon as her main course.", pt: "Ela escolheu o salmão grelhado como seu prato principal." },
  "Dessert": { en: "They ate chocolate cake for dessert.", pt: "Eles comeram bolo de chocolate como sobremesa." },
  "Beverage / Drink": { en: "He poured a cold beverage into his glass.", pt: "Ele serviu uma bebida gelada no copo dele." },
  "Water": { en: "The waiter brought sparkling water to our table.", pt: "O garçom trouxe água com gás para a nossa mesa." },
  "Bill / Check": { en: "I asked for the bill after we finished our coffees.", pt: "Eu pedi a conta depois que terminamos nossos cafés." },
  "Tip": { en: "She left a generous tip because the service was excellent.", pt: "Ela deixou uma gorjeta generosa porque o serviço foi excelente." },
  "Table": { en: "We reserved a table near the large window.", pt: "Nós reservamos uma mesa perto da janela grande." },
  "Chair": { en: "He pulled out the chair for his date.", pt: "Ele puxou a cadeira para a acompanhante dele." },
  "Napkin": { en: "She wiped her mouth with a cloth napkin.", pt: "Ela limpou a boca com um guardanapo de pano." },
  "Fork": { en: "He dropped his fork and asked the waiter for a clean one.", pt: "Ele deixou o garfo cair e pediu um limpo ao garçom." },
  "Knife": { en: "The chef used a sharp knife to slice the vegetables.", pt: "O chef usou uma faca afiada para fatiar os vegetais." },
  "Spoon": { en: "She ate the hot soup with a silver spoon.", pt: "Ela tomou a sopa quente com uma colher de prata." },
  "Plate": { en: "The server placed the hot plate carefully on the table.", pt: "O garçom colocou o prato quente cuidadosamente na mesa." },
  "Glass": { en: "He accidentally spilled his glass of red wine.", pt: "Ele acidentalmente derramou sua taça de vinho tinto." },
  "Delicious": { en: "The homemade pasta was incredibly delicious.", pt: "A massa caseira estava incrivelmente deliciosa." },
  "Spicy": { en: "He coughed because the curry was too spicy.", pt: "Ele tossiu porque o curry estava muito apimentado." },

  // Work
  "Job / Work": { en: "He found a new job in a multinational company last month.", pt: "Ele encontrou um novo emprego em uma empresa multinacional no mês passado." },
  "Office": { en: "She decorated her new office with modern paintings.", pt: "Ela decorou seu novo escritório com pinturas modernas." },
  "Boss / Manager": { en: "The manager approved my vacation request yesterday.", pt: "O gerente aprovou meu pedido de férias ontem." },
  "Employee": { en: "The company hired fifty new employees this year.", pt: "A empresa contratou cinquenta novos funcionários este ano." },
  "Colleague / Coworker": { en: "My colleague helped me finish the difficult project.", pt: "Meu colega me ajudou a terminar o projeto difícil." },
  "Meeting": { en: "The board meeting lasted for over three hours.", pt: "A reunião da diretoria durou mais de três horas." },
  "Desk": { en: "He organized the chaotic papers on his wooden desk.", pt: "Ele organizou os papéis caóticos na sua mesa de madeira." },
  "Computer": { en: "The IT department fixed my slow computer.", pt: "O departamento de TI consertou meu computador lento." },
  "Email": { en: "She sent an urgent email to all department heads.", pt: "Ela enviou um e-mail urgente para todos os chefes de departamento." },
  "Schedule": { en: "He updated his busy schedule for the upcoming week.", pt: "Ele atualizou sua agenda lotada para a próxima semana." },
  "Salary": { en: "The company offered him a highly competitive salary.", pt: "A empresa ofereceu a ele um salário altamente competitivo." },
  "Interview": { en: "She answered all the difficult questions during the interview.", pt: "Ela respondeu todas as perguntas difíceis durante a entrevista." },
  "Resume / CV": { en: "He completely updated his resume before applying for the job.", pt: "Ele atualizou completamente seu currículo antes de se candidatar à vaga." },
  "Task": { en: "The supervisor assigned a complicated task to the new intern.", pt: "O supervisor atribuiu uma tarefa complicada ao novo estagiário." },
  "Deadline": { en: "The entire team worked overtime to meet the strict deadline.", pt: "A equipe inteira fez hora extra para cumprir o prazo rigoroso." },
  "Project": { en: "She managed a highly successful marketing project.", pt: "Ela gerenciou um projeto de marketing muito bem-sucedido." },
  "Client / Customer": { en: "The angry client canceled the expensive contract.", pt: "O cliente irritado cancelou o contrato caro." },
  "Contract": { en: "They signed a lucrative contract with a foreign supplier.", pt: "Eles assinaram um contrato lucrativo com um fornecedor estrangeiro." },
  "Break": { en: "We took a short coffee break in the afternoon.", pt: "Nós fizemos uma pausa curta para o café à tarde." },
  "Promotion": { en: "He received a well-deserved promotion after two years of hard work.", pt: "Ele recebeu uma promoção bem merecida após dois anos de trabalho duro." },

  // Daily Routine
  "Wake up": { en: "I woke up very early to catch the first train.", pt: "Eu acordei muito cedo para pegar o primeiro trem." },
  "Get up": { en: "She finally got up after hitting the snooze button three times.", pt: "Ela finalmente se levantou depois de apertar o botão soneca três vezes." },
  "Take a shower": { en: "He took a quick cold shower after his intense workout.", pt: "Ele tomou um banho frio rápido depois do seu treino intenso." },
  "Brush teeth": { en: "The dentist told him he brushed his teeth incorrectly.", pt: "O dentista disse a ele que ele escovou os dentes incorretamente." },
  "Get dressed": { en: "She got dressed quickly for the important job interview.", pt: "Ela se vestiu rapidamente para a importante entrevista de emprego." },
  "Have breakfast": { en: "We had a heavy breakfast before our long hike.", pt: "Nós tomamos um café da manhã reforçado antes da nossa longa trilha." },
  "Go to work/school": { en: "He went to work despite feeling slightly ill.", pt: "Ele foi para o trabalho apesar de se sentir um pouco doente." },
  "Start work": { en: "The team started work precisely at 9 AM.", pt: "A equipe começou a trabalhar exatamente às 9 da manhã." },
  "Have lunch": { en: "They had lunch at a fancy Italian restaurant today.", pt: "Eles almoçaram em um restaurante italiano chique hoje." },
  "Finish work": { en: "She finished work late because of the tight deadline.", pt: "Ela terminou o trabalho tarde por causa do prazo apertado." },
  "Go home": { en: "He went home immediately after the tiring meeting.", pt: "Ele foi para casa imediatamente após a reunião cansativa." },
  "Have dinner": { en: "We had a delicious homemade dinner together.", pt: "Nós tivemos um delicioso jantar caseiro juntos." },
  "Watch TV": { en: "I watched an interesting documentary on TV last night.", pt: "Eu assisti a um documentário interessante na TV ontem à noite." },
  "Read a book": { en: "She read an inspiring book during her vacation.", pt: "Ela leu um livro inspirador durante suas férias." },
  "Go to bed": { en: "The exhausted children went to bed right after dinner.", pt: "As crianças exaustas foram para a cama logo após o jantar." },
  "Sleep": { en: "He slept peacefully through the loud thunderstorm.", pt: "Ele dormiu tranquilamente durante a forte tempestade." },
  "Exercise": { en: "They exercised at the local gym twice a week.", pt: "Eles se exercitaram na academia local duas vezes por semana." },
  "Clean the house": { en: "We cleaned the entire house before the guests arrived.", pt: "Nós limpamos a casa inteira antes dos convidados chegarem." },
  "Do the laundry": { en: "He did the laundry on Sunday afternoon.", pt: "Ele lavou a roupa no domingo à tarde." },
  "Cook": { en: "She cooked a complicated recipe she found online.", pt: "Ela cozinhou uma receita complicada que encontrou online." },

  // Health
  "Doctor": { en: "The experienced doctor successfully performed the delicate surgery.", pt: "O médico experiente realizou com sucesso a cirurgia delicada." },
  "Nurse": { en: "The kind nurse checked my blood pressure every hour.", pt: "A enfermeira gentil verificou minha pressão arterial a cada hora." },
  "Hospital": { en: "They rushed the injured man to the nearest hospital.", pt: "Eles correram com o homem ferido para o hospital mais próximo." },
  "Medicine / Pill": { en: "She took a strong medicine to cure her severe infection.", pt: "Ela tomou um remédio forte para curar sua infecção grave." },
  "Pain": { en: "He felt a sharp pain in his lower back.", pt: "Ele sentiu uma dor aguda na parte inferior das costas." },
  "Fever": { en: "The child developed a high fever during the night.", pt: "A criança desenvolveu febre alta durante a noite." },
  "Cough": { en: "He coughed violently because of the thick smoke.", pt: "Ele tossiu violentamente por causa da fumaça espessa." },
  "Cold": { en: "I caught a terrible cold after walking in the freezing rain.", pt: "Eu peguei um resfriado terrível depois de andar na chuva congelante." },
  "Headache": { en: "She suffered from a splitting headache all day.", pt: "Ela sofreu de uma dor de cabeça muito forte o dia todo." },
  "Stomachache": { en: "He got a severe stomachache after eating spoiled food.", pt: "Ele teve uma dor de estômago severa após comer comida estragada." },
  "Pharmacy / Drugstore": { en: "The pharmacy sold him the antibiotics he needed.", pt: "A farmácia vendeu a ele os antibióticos que ele precisava." },
  "Prescription": { en: "The specialist wrote a prescription for strong painkillers.", pt: "O especialista escreveu uma receita para analgésicos fortes." },
  "Appointment": { en: "She scheduled an urgent appointment with the cardiologist.", pt: "Ela agendou uma consulta urgente com o cardiologista." },
  "Symptom": { en: "The strange symptom confused the medical team.", pt: "O sintoma estranho confundiu a equipe médica." },
  "Treatment": { en: "He completed his physical therapy treatment last month.", pt: "Ele concluiu seu tratamento de fisioterapia no mês passado." },
  "Bandage": { en: "The paramedic applied a tight bandage to stop the bleeding.", pt: "O paramédico aplicou um curativo apertado para parar o sangramento." },
  "Blood": { en: "He donated blood at the local clinic yesterday.", pt: "Ele doou sangue na clínica local ontem." },
  "Heart": { en: "His heart beat rapidly during the final exam.", pt: "Seu coração bateu rapidamente durante o exame final." },
  "Brain": { en: "The complex puzzle stimulated her active brain.", pt: "O quebra-cabeça complexo estimulou o cérebro ativo dela." },
  "Bones": { en: "He unfortunately broke two bones in the car accident.", pt: "Ele infelizmente quebrou dois ossos no acidente de carro." },

  // Shopping
  "Store / Shop": { en: "The vintage store sold unique leather jackets.", pt: "A loja vintage vendia jaquetas de couro exclusivas." },
  "Mall / Shopping center": { en: "They spent the whole Saturday exploring the enormous mall.", pt: "Eles passaram o sábado inteiro explorando o enorme shopping." },
  "Clothes": { en: "She donated all her old clothes to charity.", pt: "Ela doou todas as suas roupas velhas para a caridade." },
  "Shoes": { en: "He bought expensive running shoes for the marathon.", pt: "Ele comprou tênis de corrida caros para a maratona." },
  "Size": { en: "The clerk checked the back room for my size.", pt: "O balconista verificou o estoque (quarto dos fundos) pelo meu tamanho." },
  "Price": { en: "The price tag dropped significantly during the winter sale.", pt: "O preço na etiqueta caiu significativamente durante a liquidação de inverno." },
  "Sale": { en: "I found this amazing dress on sale yesterday.", pt: "Eu encontre esse vestido incrível na promoção ontem." },
  "Discount": { en: "The manager offered a 20% discount on the damaged item.", pt: "O gerente ofereceu um desconto de 20% no item danificado." },
  "Fitting room": { en: "She tried on the elegant gown in the fitting room.", pt: "Ela experimentou o vestido elegante no provador." },
  "Cash register": { en: "The line at the cash register moved very slowly.", pt: "A fila no caixa andou muito devagar." },
  "Customer": { en: "The polite customer patiently waited for assistance.", pt: "O cliente educado esperou pacientemente por atendimento." },
  "Salesperson": { en: "The persistent salesperson convinced me to buy the upgraded model.", pt: "O vendedor persistente me convenceu a comprar o modelo superior." },
  "Try on": { en: "He tried on several suits before making a decision.", pt: "Ele experimentou vários ternos antes de tomar uma decisão." },
  "Buy / Purchase": { en: "She purchased a modern laptop for her remote job.", pt: "Ela purchased um notebook moderno para seu trabalho remoto." },
  "Pay": { en: "He paid for the groceries using his smartphone.", pt: "Ele pagou pelas compras usando seu smartphone." },
  "Credit card": { en: "Her credit card got declined at the expensive restaurant.", pt: "O cartão de crédito dela foi recusado no restaurante caro." },
  "Cash": { en: "The small vendor only accepted cash payments.", pt: "O pequeno vendedor só aceitava pagamentos em dinheiro." },
  "Receipt": { en: "She showed the receipt to return the defective shoes.", pt: "Ela mostrou o recibo para devolver os sapatos com defeito." },
  "Return": { en: "He returned the tight pants and got a full refund.", pt: "Ele devolveu a calça apertada e conseguiu um reembolso total." },
  "Refund": { en: "The store processed my refund within two business days.", pt: "A loja processou meu reembolso em dois dias úteis." },

  // House
  "Living room": { en: "We painted the living room walls a bright yellow.", pt: "Nós pintamos as paredes da sala de estar de um amarelo brilhante." },
  "Bedroom": { en: "He placed a new carpet in his cozy bedroom.", pt: "Ele colocou um tapete novo em seu quarto aconchegante." },
  "Kitchen": { en: "She completely renovated her old kitchen last year.", pt: "Ela reformou completamente sua cozinha velha no ano passado." },
  "Bathroom": { en: "The plumber fixed the leaking pipe in the bathroom.", pt: "O encanador consertou o cano vazando no banheiro." },
  "Dining room": { en: "They hosted a fancy dinner party in the dining room.", pt: "Eles deram um jantar chique na sala de jantar." },
  "Garden": { en: "He planted beautiful roses in the front garden.", pt: "Ele plantou lindas rosas no jardim da frente." },
  "Garage": { en: "She cleaned out the messy garage on Sunday.", pt: "Ela limpou a garagem bagunçada no domingo." },
  "Door": { en: "He accidentally locked the front door from the inside.", pt: "Ele acidentalmente trancou a porta da frente por dentro." },
  "Window": { en: "The strong wind broke the fragile glass window.", pt: "O vento forte quebrou a frágil janela de vidro." },
  "Wall": { en: "She hung colorful paintings on the blank white wall.", pt: "Ela pendurou pinturas coloridas na parede branca vazia." },
  "Floor": { en: "He swept and mopped the dirty wooden floor.", pt: "Ele varreu e passou pano no chão de madeira sujo." },
  "Ceiling": { en: "The water leaked through the damaged ceiling.", pt: "A água vazou pelo teto danificado." },
  "Roof": { en: "The heavy storm destroyed part of the roof.", pt: "A forte tempestade destruiu parte do telhado." },
  "Furniture": { en: "They bought expensive antique furniture for their new house.", pt: "Eles compraram móveis antigos caros para a casa nova deles." },
  "Sofa / Couch": { en: "I fell asleep on the comfortable leather couch.", pt: "Eu adormeci no confortável sofá de couro." },
  "Bed": { en: "She made the bed immediately after waking up.", pt: "Ela arrumou a cama imediatamente após acordar." },
  "Table": { en: "He built a sturdy oak table from scratch.", pt: "Ele construiu uma mesa de carvalho resistente do zero." },
  "Chair": { en: "The antique wooden chair broke when he sat down.", pt: "A cadeira de madeira antiga quebrou quando ele se sentou." },
  "Lamp": { en: "She turned off the reading lamp before sleeping.", pt: "Ela desligou a lâmpada de leitura antes de dormir." },
  "Rug / Carpet": { en: "He spilled dark coffee on the expensive Persian rug.", pt: "Ele derramou café escuro no caro tapete persa." },

  // Transportation
  "Car": { en: "He parked his new car in the underground garage.", pt: "Ele estacionou seu carro novo na garagem subterrânea." },
  "Bus": { en: "She missed the morning bus because she overslept.", pt: "Ela perdeu o ônibus da manhã porque dormiu demais." },
  "Train": { en: "They took the high-speed train to reach Tokyo.", pt: "Eles pegaram o trem de alta velocidade para chegar a Tóquio." },
  "Subway / Underground": { en: "The crowded subway broke down during rush hour.", pt: "O metrô lotado quebrou durante a hora do rush." },
  "Bicycle / Bike": { en: "He rode his mountain bike up the steep hill.", pt: "Ele andou com sua mountain bike morro acima." },
  "Motorcycle": { en: "She bought a powerful motorcycle for her road trip.", pt: "Ela comprou uma moto potente para sua viagem de estrada." },
  "Airplane / Plane": { en: "The massive plane took off despite the heavy rain.", pt: "O avião enorme decolou apesar da chuva forte." },
  "Boat": { en: "We rented a small wooden boat to cross the lake.", pt: "Nós alugamos um pequeno barco de madeira para cruzar o lago." },
  "Ship": { en: "The enormous cargo ship arrived safely at the port.", pt: "O enorme navio de carga chegou em segurança ao porto." },
  "Taxi / Cab": { en: "He hailed a yellow cab in the middle of New York.", pt: "Ele chamou um táxi amarelo no meio de Nova York." },
  "Driver": { en: "The aggressive driver honked loudly at the pedestrians.", pt: "O motorista agressivo buzinou alto para os pedestres." },
  "Passenger": { en: "The nervous passenger gripped the seat tightly during turbulence.", pt: "O passageiro nervoso apertou o assento com força durante a turbulência." },
  "Ticket": { en: "She purchased a round-trip ticket to Paris.", pt: "Ela comprou uma passagem de ida e volta para Paris." },
  "Station": { en: "They met at the central train station at noon.", pt: "Eles se encontraram na estação central de trens ao meio-dia." },
  "Airport": { en: "He arrived at the busy airport three hours early.", pt: "Ele chegou no aeroporto movimentado três horas antes." },
  "Flight": { en: "The long-haul flight delayed for over five hours.", pt: "O voo de longa duração atrasou por mais de cinco horas." },
  "Traffic": { en: "Terrible traffic caused him to miss his important meeting.", pt: "O trânsito terrível fez ele perder sua reunião importante." },
  "Street": { en: "They paved the old broken street last week.", pt: "Eles pavimentaram a velha rua quebrada na semana passada." },
  "Road": { en: "We drove down the scenic coastal road.", pt: "Nós dirigimos pela cênica estrada costeira." },
  "Highway": { en: "The police stopped him for speeding on the highway.", pt: "A polícia o parou por excesso de velocidade na rodovia." },

  // Weather
  "Sun": { en: "The bright sun burned my sensitive skin yesterday.", pt: "O sol forte queimou minha pele sensível ontem." },
  "Rain": { en: "Heavy rain flooded the entire basement.", pt: "A chuva forte inundou o porão inteiro." },
  "Cloud": { en: "Dark, menacing clouds gathered before the massive storm.", pt: "Nuvens escuras e ameaçadoras se formaram antes da enorme tempestade." },
  "Wind": { en: "The strong wind blew away the patio umbrella.", pt: "O vento forte levou embora o guarda-sol do pátio." },
  "Snow": { en: "Thick snow covered the mountains overnight.", pt: "A neve espessa cobriu as montanhas durante a noite." },
  "Storm": { en: "A violent storm destroyed several houses in the valley.", pt: "Uma tempestade violenta destruiu várias casas no vale." },
  "Lightning": { en: "Bright lightning struck the old oak tree.", pt: "Um raio brilhante atingiu o velho carvalho." },
  "Thunder": { en: "Loud thunder scared the poor dog hiding under the bed.", pt: "O trovão alto assustou o pobre cachorro se escondendo debaixo da cama." },
  "Temperature": { en: "The temperature dropped drastically during the night.", pt: "A temperatura caiu drasticamente durante a noite." },
  "Hot": { en: "It felt extremely hot in the crowded, unventilated room.", pt: "Fez muito calor na sala lotada e sem ventilação." },
  "Cold": { en: "I drank hot tea because I felt bitterly cold outside.", pt: "Eu tomei chá quente porque senti muito frio lá fora." },
  "Warm": { en: "The warm breeze made the evening perfectly pleasant.", pt: "A brisa morna tornou a noite perfeitamente agradável." },
  "Cool": { en: "A cool breeze relieved us from the intense heat.", pt: "Uma brisa fresca nos aliviou do calor intenso." },
  "Sunny": { en: "They enjoyed a beautiful sunny day at the crowded beach.", pt: "Eles aproveitaram um lindo dia ensolarado na praia lotada." },
  "Rainy": { en: "He completely ruined his suede shoes on that rainy afternoon.", pt: "Ele arruinou completamente seus sapatos de camurça naquela tarde chuvosa." },
  "Cloudy": { en: "The cloudy sky ruined our plans to watch the stars.", pt: "O céu nublado arruinou nossos planos de ver as estrelas." },
  "Windy": { en: "The windy weather made it difficult to ride a bicycle.", pt: "O tempo ventoso tornou difícil andar de bicicleta." },
  "Snowy": { en: "They drove carefully on the dangerous snowy roads.", pt: "Eles dirigiram com cuidado nas estradas perigosas e nevadas." },
  "Fog": { en: "Dense fog caused several accidents on the highway.", pt: "A neblina densa causou vários acidentes na rodovia." },
  "Ice": { en: "He slipped on the black ice and hurt his knee.", pt: "Ele escorregou no gelo negro e machucou o joelho." },

  // Hobbies
  "Read": { en: "She read a thrilling mystery novel over the weekend.", pt: "Ela leu um romance de mistério emocionante no fim de semana." },
  "Watch movies": { en: "They watched classic movies on a vintage projector.", pt: "Eles assistiram a filmes clássicos em um projetor vintage." },
  "Listen to music": { en: "He listened to classical music while studying for his exams.", pt: "Ele ouvia música clássica enquanto estudava para os exames." },
  "Play sports": { en: "We played competitive sports in high school.", pt: "Nós praticávamos esportes competitivos no ensino médio." },
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

  // Sports
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

  // Supermarket
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

function generateTrueOrFalse(word, wordPt, isTrue) {
  if (isTrue) {
    return {
      statement: `${word} means ${wordPt}.`,
      statementPt: `${word} significa ${wordPt}.`,
      isTrue: true,
      explanation: `Yes, ${word} means ${wordPt}.`
    };
  } else {
    return {
      statement: `${word} means a type of car.`,
      statementPt: `${word} significa um tipo de carro.`,
      isTrue: false,
      explanation: `No, ${word} means ${wordPt}.`
    };
  }
}

function processFile(filePath, varName) {
  const sourceFile = project.addSourceFileAtPath(filePath);
  const scenarioArray = sourceFile.getVariableDeclarationOrThrow(varName).getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
  
  for (const element of scenarioArray.getElements()) {
    if (element.getKind() !== SyntaxKind.ObjectLiteralExpression) continue;
    
    const vocabProp = element.getProperty("vocabulary");
    if (!vocabProp) continue;
    
    const vocabArray = vocabProp.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    const vocabItems = vocabArray.getElements();
    
    let buildSentenceLevel1Part1 = [];
    let buildSentenceLevel1Part2 = [];
    let buildSentenceLevel2Part1 = [];
    let buildSentenceLevel2Part2 = [];
    let trueOrFalseLevel2Part1 = [];
    let trueOrFalseLevel2Part2 = [];
    let speakingLevel2Part1 = [];
    let speakingLevel2Part2 = [];

    vocabItems.forEach((vocabNode, index) => {
      const engProp = vocabNode.getProperty("english");
      const ptProp = vocabNode.getProperty("portuguese");
      const exEnProp = vocabNode.getProperty("exampleEn");
      const exPtProp = vocabNode.getProperty("examplePt");

      if (!engProp || !ptProp || !exEnProp || !exPtProp) return;

      const english = engProp.getInitializer().getText().replace(/['"]/g, '');
      const portuguese = ptProp.getInitializer().getText().replace(/['"]/g, '');
      const exEn = exEnProp.getInitializer().getText().replace(/['"]/g, '');
      const exPt = exPtProp.getInitializer().getText().replace(/['"]/g, '');

      const b1Data = b1Replacements[english];
      const b1En = b1Data ? b1Data.en : `I have a ${english}`;
      const b1Pt = b1Data ? b1Data.pt : `Eu tenho um ${portuguese}`;

      // Update vocab property
      exEnProp.remove();
      exPtProp.remove();
      
      vocabNode.addPropertyAssignment({
        name: "levels",
        initializer: `{ 
          A1: { en: "${exEn}", pt: "${exPt}" }, 
          A2: { en: "${exEn}", pt: "${exPt}" }, 
          B1: { en: "${b1En}", pt: "${b1Pt}" } 
        }`
      });

      if (index === 0 || index === 4 || index === 8) {
        buildSentenceLevel1Part1.push(`{ english: "${exEn}", portuguese: "${exPt}" }`);
        buildSentenceLevel2Part1.push(`{ english: "${b1En}", portuguese: "${b1Pt}" }`);
      }
      if (index === 10 || index === 14 || index === 18) {
        buildSentenceLevel1Part2.push(`{ english: "${exEn}", portuguese: "${exPt}" }`);
        buildSentenceLevel2Part2.push(`{ english: "${b1En}", portuguese: "${b1Pt}" }`);
      }

      const isTrue = index % 2 === 0;
      const tf = generateTrueOrFalse(english, portuguese, isTrue);
      
      const tfObjStr = `{ statement: "${tf.statement}", statementPt: "${tf.statementPt}", isTrue: ${tf.isTrue}, explanation: "${tf.explanation}" }`;
      const speakObjStr = `{ question: "Can you use \\"${english}\\" in a sentence in the past simple?", translation: "Você consegue usar \\"${english}\\" em uma frase no passado simples?" }`;

      if (index < 10) {
        trueOrFalseLevel2Part1.push(tfObjStr);
        speakingLevel2Part1.push(speakObjStr);
      } else {
        trueOrFalseLevel2Part2.push(tfObjStr);
        speakingLevel2Part2.push(speakObjStr);
      }
    });

    element.addPropertyAssignments([
      {
        name: "buildSentence",
        initializer: `{
          level1: [ ${[...buildSentenceLevel1Part1, ...buildSentenceLevel1Part2].join(', ')} ],
          level2: [ ${[...buildSentenceLevel2Part1, ...buildSentenceLevel2Part2].join(', ')} ]
        }`
      },
      {
        name: "trueOrFalseLevel2",
        initializer: `{
          part1: [ ${trueOrFalseLevel2Part1.join(', ')} ],
          part2: [ ${trueOrFalseLevel2Part2.join(', ')} ]
        }`
      },
      {
        name: "speakingPracticeLevel2",
        initializer: `{
          part1: [ ${speakingLevel2Part1.join(', ')} ],
          part2: [ ${speakingLevel2Part2.join(', ')} ]
        }`
      }
    ]);
  }

  sourceFile.saveSync();
  console.log(`Processed ${filePath}`);
}

processFile("c:/Users/martm/Documents/Arquivos do Antigravity/MissMonicaDay/english-everyday/data/scenarios1.ts", "scenarios1");
