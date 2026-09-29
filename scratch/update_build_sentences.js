const fs = require('fs');

const buildSentencesData = {
  "Family": {
    level1: [
      { english: "My grandmother always tells amazing stories about her youth.", portuguese: "Minha avó sempre conta histórias incríveis sobre sua juventude." },
      { english: "They have a young nephew who loves playing outside.", portuguese: "Eles têm um sobrinho jovem que adora brincar lá fora." },
      { english: "I hope to get along well with my new sister-in-law.", portuguese: "Espero me dar bem com minha nova cunhada." },
      { english: "The entire family celebrated my uncle's fiftieth birthday.", portuguese: "Toda a família celebrou o quinquagésimo aniversário do meu tio." },
      { english: "People say that I take after my father completely.", portuguese: "As pessoas dizem que eu puxei completamente ao meu pai." },
      { english: "His wife is extremely talented at painting beautiful landscapes.", portuguese: "A esposa dele é extremamente talentosa em pintar belas paisagens." }
    ],
    level2: [
      { english: "They decided to settle down and raise their close-knit family.", portuguese: "Eles decidiram sossegar e criar sua família unida." },
      { english: "It is hard for siblings not to fall out sometimes.", portuguese: "É difícil para os irmãos não se desentenderem às vezes." },
      { english: "Our extended family usually gathers together every single Christmas.", portuguese: "Nossa família estendida costuma se reunir em todo santo Natal." },
      { english: "I strongly resemble the relatives from my mother's side.", portuguese: "Eu me assemelho fortemente aos parentes do lado da minha mãe." },
      { english: "Growing up as an only child gave me a unique upbringing.", portuguese: "Crescer como filho único me deu uma criação única." },
      { english: "They managed to make up soon after a terrible argument.", portuguese: "Eles conseguiram fazer as pazes logo após uma discussão terrível." }
    ]
  },
  "Friends": {
    level1: [
      { english: "We decided to invite our closest friends to the party.", portuguese: "Decidimos convidar nossos amigos mais próximos para a festa." },
      { english: "It is important to apologize when you make a mistake.", portuguese: "É importante pedir desculpas quando você comete um erro." },
      { english: "My best friend gave me some really excellent advice.", portuguese: "Meu melhor amigo me deu um conselho realmente excelente." },
      { english: "They love to hang out at the mall every Saturday.", portuguese: "Eles adoram sair no shopping todo sábado." },
      { english: "You should never reveal a secret you promised to keep.", portuguese: "Você nunca deve revelar um segredo que prometeu guardar." },
      { english: "We used to argue a lot about silly little things.", portuguese: "Nós costumávamos discutir muito sobre coisas pequenas e bobas." }
    ],
    level2: [
      { english: "We try to keep in touch even though we live far apart.", portuguese: "Nós tentamos manter contato mesmo morando longe." },
      { english: "You can always rely on a trustworthy mate during difficult times.", portuguese: "Você sempre pode contar com um parceiro confiável durante tempos difíceis." },
      { english: "They drifted apart after graduating from high school last year.", portuguese: "Eles se distanciaram depois de se formarem no ensino médio no ano passado." },
      { english: "I will absolutely stand by you no matter what happens.", portuguese: "Eu ficarei absolutamente ao seu lado não importa o que aconteça." },
      { english: "She could not put up with his terrible behavior anymore.", portuguese: "Ela não conseguia mais tolerar o comportamento terrível dele." },
      { english: "They immediately hit it off when they first met online.", portuguese: "Eles se deram bem imediatamente quando se conheceram online." }
    ]
  },
  "Body Parts": {
    level1: [
      { english: "I hurt my right shoulder while carrying heavy bags.", portuguese: "Eu machuquei meu ombro direito enquanto carregava sacolas pesadas." },
      { english: "He broke his leg jumping from a very high wall.", portuguese: "Ele quebrou a perna pulando de um muro muito alto." },
      { english: "She has long beautiful hair and striking green eyes.", portuguese: "Ela tem cabelos longos e bonitos e olhos verdes marcantes." },
      { english: "My stomach hurts slightly after eating all that spicy food.", portuguese: "Meu estômago dói um pouco depois de comer toda aquela comida apimentada." },
      { english: "He burned his fingers while trying to cook dinner quickly.", portuguese: "Ele queimou os dedos enquanto tentava cozinhar o jantar rapidamente." },
      { english: "The baby has such cute little hands and feet.", portuguese: "O bebê tem mãos e pés pequenos tão fofos." }
    ],
    level2: [
      { english: "The athlete injured his ankle and needs to recover properly.", portuguese: "O atleta machucou o tornozelo e precisa se recuperar adequadamente." },
      { english: "She felt dizzy and suddenly passed out in the heat.", portuguese: "Ela se sentiu tonta e desmaiou de repente no calor." },
      { english: "You must breathe deeply and try to stop shivering.", portuguese: "Você deve respirar profundamente e tentar parar de tremer." },
      { english: "It took him weeks to get over that terrible flu.", portuguese: "Levou semanas para ele superar aquela gripe terrível." },
      { english: "He hit his forehead and his nose started to bleed.", portuguese: "Ele bateu a testa e o nariz começou a sangrar." },
      { english: "I always sweat a lot when I work out intensively.", portuguese: "Eu sempre transpiro muito quando malho intensamente." }
    ]
  },
  "Home & Chores": {
    level1: [
      { english: "I need to sweep the floor and take out the trash.", portuguese: "Preciso varrer o chão e tirar o lixo." },
      { english: "They bought a comfortable couch for their new living room.", portuguese: "Eles compraram um sofá confortável para a nova sala de estar." },
      { english: "Could you please help me do the dishes tonight?", portuguese: "Você poderia por favor me ajudar a lavar a louça hoje à noite?" },
      { english: "She prefers to make the bed immediately after waking up.", portuguese: "Ela prefere arrumar a cama imediatamente após acordar." },
      { english: "He left his muddy shoes near the front door.", portuguese: "Ele deixou seus sapatos sujos de lama perto da porta da frente." },
      { english: "The garden looks beautiful with all the blooming flowers.", portuguese: "O jardim parece lindo com todas as flores desabrochando." }
    ],
    level2: [
      { english: "Our landlord plans to renovate the old apartment next month.", portuguese: "Nosso proprietário planeja reformar o apartamento antigo no mês que vem." },
      { english: "They had to take out a huge mortgage for their spacious house.", portuguese: "Eles tiveram que fazer uma hipoteca enorme para sua casa espaçosa." },
      { english: "It is important to tidy up the place before guests arrive.", portuguese: "É importante arrumar o lugar antes dos convidados chegarem." },
      { english: "We just moved in and we need to buy new appliances.", portuguese: "Nós acabamos de nos mudar e precisamos comprar eletrodomésticos novos." },
      { english: "He signed the lease to rent a cozy house in the suburbs.", portuguese: "Ele assinou o contrato de aluguel para alugar uma casa aconchegante no subúrbio." },
      { english: "They were evicted because they failed to pay the rent.", portuguese: "Eles foram despejados porque deixaram de pagar o aluguel." }
    ]
  },
  "Home & Chores 2": {
    level1: [
      { english: "I completely forgot to water the plants on the balcony.", portuguese: "Eu esqueci completamente de regar as plantas na varanda." },
      { english: "She asked him to clear the table after they finished eating.", portuguese: "Ela pediu para ele limpar a mesa depois que terminaram de comer." },
      { english: "The basement is extremely dark and slightly scary at night.", portuguese: "O porão é extremamente escuro e um pouco assustador à noite." },
      { english: "We need to fix the leaky faucet in the bathroom sink.", portuguese: "Precisamos consertar a torneira com vazamento na pia do banheiro." },
      { english: "Can you fold the laundry while I mop the floor?", portuguese: "Você pode dobrar a roupa enquanto eu passo pano no chão?" },
      { english: "He painted the walls and the ceiling white to brighten the room.", portuguese: "Ele pintou as paredes e o teto de branco para iluminar o cômodo." }
    ],
    level2: [
      { english: "You must unplug the television during a heavy thunderstorm.", portuguese: "Você deve tirar a televisão da tomada durante uma forte tempestade." },
      { english: "She spends hours trying to scrub the dirty kitchen tiles.", portuguese: "Ela passa horas tentando esfregar os azulejos sujos da cozinha." },
      { english: "It is incredibly boring to dust the wooden shelves manually.", portuguese: "É incrivelmente chato tirar o pó das prateleiras de madeira manualmente." },
      { english: "Could you turn up the heating because it is freezing here?", portuguese: "Você poderia aumentar o aquecimento porque está congelando aqui?" },
      { english: "I really hate doing the laundry on my precious weekends.", portuguese: "Eu realmente odeio lavar a roupa nos meus preciosos fins de semana." },
      { english: "He carefully irons his expensive shirts every single morning.", portuguese: "Ele passa cuidadosamente suas camisas caras toda santa manhã." }
    ]
  },
  "Hobbies": {
    level1: [
      { english: "I prefer to read a book rather than surf the internet.", portuguese: "Eu prefiro ler um livro em vez de navegar na internet." },
      { english: "They decided to travel across Europe to take beautiful photos.", portuguese: "Eles decidiram viajar pela Europa para tirar belas fotos." },
      { english: "She loves to listen to music while she draws colorful landscapes.", portuguese: "Ela adora ouvir música enquanto desenha paisagens coloridas." },
      { english: "We enjoy watching classic movies together on Friday nights.", portuguese: "Nós gostamos de assistir filmes clássicos juntos nas noites de sexta." },
      { english: "He plays guitar in a band during his free time.", portuguese: "Ele toca violão em uma banda durante seu tempo livre." },
      { english: "It is very relaxing to go hiking in the peaceful mountains.", portuguese: "É muito relaxante fazer trilha nas montanhas pacíficas." }
    ],
    level2: [
      { english: "He decided to take up photography as a creative leisure activity.", portuguese: "Ele decidiu começar a fotografia como uma atividade de lazer criativa." },
      { english: "They signed up for a workshop to improve their crafting skills.", portuguese: "Eles se inscreveram num workshop para melhorar suas habilidades de artesanato." },
      { english: "We are really looking forward to rehearsing the new play tonight.", portuguese: "Nós estamos realmente ansiosos para ensaiar a nova peça esta noite." },
      { english: "She is very keen on exploring the great outdoors every weekend.", portuguese: "Ela é muito entusiasmada em explorar a natureza a cada fim de semana." },
      { english: "You should not give up your passions just because you are busy.", portuguese: "Você não deve desistir de suas paixões só porque está ocupado." },
      { absolute: false, english: "He is completely into collecting vintage comic books right now.", portuguese: "Ele está totalmente focado em colecionar revistas em quadrinhos antigas agora." }
    ]
  },
  "Sports": {
    level1: [
      { english: "The local soccer team managed to win the championship game.", portuguese: "O time de futebol local conseguiu vencer o jogo do campeonato." },
      { english: "We often play basketball at the large outdoor stadium.", portuguese: "Nós costumamos jogar basquete no grande estádio ao ar livre." },
      { english: "She runs five miles every morning to stay incredibly fit.", portuguese: "Ela corre cinco milhas todas as manhãs para se manter incrivelmente em forma." },
      { english: "He bought an expensive new ball to practice his serves in tennis.", portuguese: "Ele comprou uma bola nova e cara para praticar seus saques no tênis." },
      { english: "It is disappointing to lose a match after practicing so hard.", portuguese: "É decepcionante perder uma partida depois de treinar tão duro." },
      { english: "They love to swim in the ocean during the hot summer.", portuguese: "Eles adoram nadar no oceano durante o verão quente." }
    ],
    level2: [
      { english: "The enthusiastic spectators cheered on the marathon runners passing by.", portuguese: "Os espectadores entusiastas torceram pelos corredores da maratona que passavam." },
      { english: "He had to drop out of the race because of a foul.", portuguese: "Ele teve que sair (desistir) da corrida por causa de uma falta." },
      { english: "It is crucial to warm up properly before you tackle anyone.", portuguese: "É crucial se aquecer adequadamente antes de dar uma rasteira/derrubar alguém." },
      { english: "The incredibly tense final match ended in a surprising draw.", portuguese: "A partida final incrivelmente tensa terminou em um empate surpreendente." },
      { english: "She refused to give up and eventually caught up with the leader.", portuguese: "Ela se recusou a desistir e eventualmente alcançou a líder." },
      { english: "The champion proudly raised his gold medal after knocking out his opponent.", portuguese: "O campeão ergueu com orgulho sua medalha de ouro após nocautear seu oponente." }
    ]
  },
  "Supermarket": {
    level1: [
      { english: "I pushed the heavy shopping cart down the dairy aisle.", portuguese: "Eu empurrei o carrinho de compras pesado pelo corredor de laticínios." },
      { english: "Always check your receipt to ensure the price was correct.", portuguese: "Sempre verifique seu recibo para garantir que o preço estava correto." },
      { english: "The friendly cashier applied a generous discount to our grocery bill.", portuguese: "O caixa amigável aplicou um desconto generoso à nossa conta de supermercado." },
      { english: "We prefer to buy affordable vegetables at the local market.", portuguese: "Preferimos comprar vegetais acessíveis no mercado local." },
      { english: "I stood in a long queue waiting to pay for my products.", portuguese: "Fiquei numa longa fila esperando para pagar pelos meus produtos." },
      { english: "He handed his credit card to the cashier with a smile.", portuguese: "Ele entregou seu cartão de crédito ao caixa com um sorriso." }
    ],
    level2: [
      { english: "They completely ran out of fresh bakery bread this morning.", portuguese: "Eles ficaram completamente sem pão fresco da padaria esta manhã." },
      { english: "I need to stock up on snacks before the massive winter storm.", portuguese: "Preciso fazer estoque de lanches antes da enorme tempestade de inverno." },
      { english: "We were lucky to pick up some items on a special sale.", portuguese: "Tivemos a sorte de pegar alguns itens numa promoção especial." },
      { english: "The new supermarket is so expensive that it feels like a rip off.", portuguese: "O novo supermercado é tão caro que parece um roubo/exploração." },
      { english: "Can you afford to buy imported meat at the checkout counter?", portuguese: "Você tem condições de comprar carne importada no caixa?" },
      { english: "She received a full refund after finding a spoiled fruit.", portuguese: "Ela recebeu um reembolso total após encontrar uma fruta estragada." }
    ]
  },
  "Shopping": {
    level1: [
      { english: "She loves to try on expensive clothes in the fitting room.", portuguese: "Ela adora experimentar roupas caras no provador." },
      { english: "He bought a brand new pair of shoes that are his exact size.", portuguese: "Ele comprou um par de sapatos novinhos em folha do seu tamanho exato." },
      { english: "I found a beautiful red dress on sale at the department store.", portuguese: "Encontrei um lindo vestido vermelho em liquidação na loja de departamentos." },
      { english: "The customer complained that the leather jacket was ridiculously expensive.", portuguese: "O cliente reclamou que a jaqueta de couro era ridiculamente cara." },
      { english: "I usually pay with my credit card instead of carrying cash.", portuguese: "Geralmente pago com meu cartão de crédito em vez de carregar dinheiro vivo." },
      { english: "We forgot our wallet and had to leave the shop empty-handed.", portuguese: "Esquecemos nossa carteira e tivemos que sair da loja de mãos vazias." }
    ],
    level2: [
      { english: "This stylish suit does not fit me perfectly around the shoulders.", portuguese: "Este terno elegante não me serve perfeitamente nos ombros." },
      { english: "You should shop around to find the absolute best bargain available.", portuguese: "Você deve pesquisar os preços para encontrar a melhor pechincha disponível." },
      { english: "I wanted to buy that specific brand but it was out of stock.", portuguese: "Eu queria comprar aquela marca específica, mas estava esgotada." },
      { english: "She enjoys window shopping when she has absolutely no money to spend.", portuguese: "Ela gosta de olhar as vitrines quando não tem absolutamente nenhum dinheiro para gastar." },
      { english: "Can you please wrap up this fragile gift carefully for me?", portuguese: "Você pode por favor embrulhar cuidadosamente este presente frágil para mim?" },
      { english: "He had to take back the defective electronics to get a refund.", portuguese: "Ele teve que devolver os eletrônicos defeituosos para obter um reembolso." }
    ]
  },
  "Professions": {
    level1: [
      { english: "The dedicated teacher helped the young student pass his difficult exam.", portuguese: "O professor dedicado ajudou o jovem aluno a passar no seu exame difícil." },
      { english: "She works as a successful lawyer at a prestigious corporate office.", portuguese: "Ela trabalha como uma advogada de sucesso em um prestigioso escritório corporativo." },
      { english: "The clever mechanic easily fixed the complicated engine of my car.", portuguese: "O mecânico inteligente consertou facilmente o motor complicado do meu carro." },
      { english: "We hired a professional chef to cook a luxurious dinner.", portuguese: "Nós contratamos um chef profissional para cozinhar um jantar luxuoso." },
      { english: "The brave police officer rescued a frightened kitten from a tree.", portuguese: "O bravo policial resgatou um gatinho assustado de uma árvore." },
      { english: "He earns a high salary working as an engineer for a big company.", portuguese: "Ele ganha um salário alto trabalhando como engenheiro para uma grande empresa." }
    ],
    level2: [
      { english: "She decided to quit her demanding shift and apply for a better role.", portuguese: "Ela decidiu largar seu turno exigente e se candidatar a um cargo melhor." },
      { english: "The manager plans to hire three new colleagues after the promotion.", portuguese: "O gerente planeja contratar três novos colegas após a promoção." },
      { english: "They had to lay off hundreds of workers due to financial issues.", portuguese: "Eles tiveram que demitir centenas de trabalhadores devido a problemas financeiros." },
      { english: "It is tiring to commute for two hours every single day.", portuguese: "É cansativo viajar (comutar) por duas horas todo santo dia." },
      { english: "He will formally retire next year and hand over the business.", portuguese: "Ele vai se aposentar formalmente no ano que vem e passar o negócio adiante." },
      { english: "I hope things work out well after you resign from your stressful job.", portuguese: "Espero que as coisas funcionem bem depois que você pedir demissão do seu emprego estressante." }
    ]
  },
  "Public Places": {
    level1: [
      { english: "We walked to the local hospital to visit our sick neighbor.", portuguese: "Nós caminhamos até o hospital local para visitar nosso vizinho doente." },
      { english: "You must turn left at the corner to reach the public library.", portuguese: "Você deve virar à esquerda na esquina para chegar à biblioteca pública." },
      { english: "They waited nervously at the bus stop on the dark street.", portuguese: "Eles esperaram nervosamente no ponto de ônibus na rua escura." },
      { english: "He parked his car near the famous historical museum.", portuguese: "Ele estacionou o carro perto do famoso museu histórico." },
      { english: "Go straight ahead until you see the large bank on your right.", portuguese: "Siga em frente até ver o grande banco à sua direita." },
      { english: "I always buy medicine at the small pharmacy across the bridge.", portuguese: "Eu sempre compro remédios na pequena farmácia do outro lado da ponte." }
    ],
    level2: [
      { english: "We set off early to go sightseeing around the crowded ancient landmarks.", portuguese: "Partimos cedo para fazer turismo pelos monumentos antigos e lotados." },
      { english: "Can you drop me off near the affordable accommodation we booked?", portuguese: "Você pode me deixar perto da acomodação acessível que reservamos?" },
      { english: "They got lost while wandering through the beautiful streets abroad.", portuguese: "Eles se perderam enquanto vagavam pelas belas ruas no exterior." },
      { english: "We need to check in quickly before heading for the border.", portuguese: "Precisamos fazer o check-in rapidamente antes de ir em direção à fronteira." },
      { english: "I asked the friendly tour guide to show us around the city center.", portuguese: "Eu pedi ao simpático guia turístico que nos mostrasse o centro da cidade." },
      { english: "Make sure to look out for scammers when exploring unfamiliar territories.", portuguese: "Certifique-se de tomar cuidado com golpistas ao explorar territórios desconhecidos." }
    ]
  },
  "Animals": {
    level1: [
      { english: "He loves to walk the dog in the park every morning.", portuguese: "Ele adora passear com o cachorro no parque todas as manhãs." },
      { english: "The noisy bird started singing loudly right outside my window.", portuguese: "O pássaro barulhento começou a cantar alto bem na minha janela." },
      { english: "We took our sick cat to the local vet immediately.", portuguese: "Levamos nosso gato doente ao veterinário local imediatamente." },
      { english: "A large tiger escaped from the zoo and terrified everyone.", portuguese: "Um grande tigre escapou do zoológico e aterrorizou a todos." },
      { english: "The mischievous monkey stole a banana from the unsuspecting tourist.", portuguese: "O macaco travesso roubou uma banana do turista desprevenido." },
      { english: "Make sure you feed your lovely pets before leaving the house.", portuguese: "Certifique-se de alimentar seus adoráveis ​​animais de estimação antes de sair de casa." }
    ],
    level2: [
      { english: "We must protect the endangered wildlife habitats from destructive human activities.", portuguese: "Devemos proteger os habitats de vida selvagem ameaçados das atividades humanas destrutivas." },
      { english: "The terrified rabbit managed to run away from the hunting wolves.", portuguese: "O coelho aterrorizado conseguiu fugir dos lobos caçadores." },
      { english: "They breed specific types of farm animals to look after them properly.", portuguese: "Eles criam/reproduzem tipos específicos de animais de fazenda para cuidar deles adequadamente." },
      { english: "She decided to adopt a beautiful furry cat from the local animal shelter.", portuguese: "Ela decidiu adotar um lindo gato peludo do abrigo de animais local." },
      { english: "It is incredibly difficult to tame a wild creature that roams free.", portuguese: "É incrivelmente difícil domar uma criatura selvagem que vagueia livremente." },
      { english: "The horse calmed down as soon as I started to stroke its neck softly.", portuguese: "O cavalo se acalmou assim que comecei a acariciar seu pescoço suavemente." }
    ]
  },
  "Cooking": {
    level1: [
      { english: "She carefully read the recipe before starting to bake the cake.", portuguese: "Ela leu cuidadosamente a receita antes de começar a assar o bolo." },
      { english: "You need a very sharp knife to chop these hard vegetables.", portuguese: "Você precisa de uma faca muito afiada para picar esses vegetais duros." },
      { english: "He likes to fry eggs in a large pan for his breakfast.", portuguese: "Ele gosta de fritar ovos em uma frigideira grande no café da manhã." },
      { english: "Mix all the fresh ingredients in a large bowl with a spoon.", portuguese: "Misture todos os ingredientes frescos em uma tigela grande com uma colher." },
      { english: "I accidentally added too much spicy pepper to the boiling soup.", portuguese: "Eu acidentalmente adicionei muita pimenta picante à sopa fervente." },
      { english: "Could you pour some sweet juice into my empty glass?", portuguese: "Você poderia derramar um pouco de suco doce no meu copo vazio?" }
    ],
    level2: [
      { english: "I am trying to cut down on junk food to improve my diet.", portuguese: "Estou tentando reduzir o consumo de junk food para melhorar minha dieta." },
      { english: "She can easily whip up an incredibly tasty meal in minutes.", portuguese: "Ela pode facilmente preparar uma refeição incrivelmente saborosa em minutos." },
      { english: "It is extremely dangerous if the boiling water starts to boil over.", portuguese: "É extremamente perigoso se a água fervente começar a transbordar." },
      { english: "We prefer to eat out on weekends rather than cook at home.", portuguese: "Preferimos comer fora aos finais de semana do que cozinhar em casa." },
      { english: "Please peel the potatoes and chop them up before you grill the meat.", portuguese: "Por favor descasque as batatas e pique-as antes de grelhar a carne." },
      { english: "You must constantly stir the sauce to prevent it from burning.", portuguese: "Você deve mexer constantemente o molho para evitar que ele queime." }
    ]
  },
  "Basic Technology": {
    level1: [
      { english: "He dropped his expensive smartphone and completely shattered the screen.", portuguese: "Ele derrubou seu smartphone caro e estilhaçou completamente a tela." },
      { english: "You should never share your secret password over the public internet.", portuguese: "Você nunca deve compartilhar sua senha secreta pela internet pública." },
      { english: "I need to download a helpful app on my brand new laptop.", portuguese: "Preciso baixar um aplicativo útil no meu laptop novinho em folha." },
      { english: "She typed the long email using her noisy mechanical keyboard.", portuguese: "Ela digitou o longo e-mail usando seu teclado mecânico barulhento." },
      { english: "I forgot to pack the charger and my battery died quickly.", portuguese: "Esqueci de levar o carregador e minha bateria acabou rapidamente." },
      { english: "You must save the important document inside this specific secure folder.", portuguese: "Você deve salvar o documento importante dentro desta pasta segura específica." }
    ],
    level2: [
      { english: "Make sure to back up your critical files before the system crashes.", portuguese: "Certifique-se de fazer backup de seus arquivos críticos antes que o sistema trave." },
      { english: "You need to log in to set up the software successfully.", portuguese: "Você precisa fazer login para configurar o software com sucesso." },
      { english: "Someone attempted to hack into her private account when she went offline.", portuguese: "Alguém tentou hackear a conta privada dela quando ela ficou offline." },
      { english: "Scroll down the webpage and click on the brightly colored button.", portuguese: "Role para baixo na página e clique no botão de cor brilhante." },
      { english: "It is highly recommended to shut down the device while installing the update.", portuguese: "É altamente recomendável desligar o dispositivo ao instalar a atualização." },
      { english: "She managed to turn on the mysterious machine without a manual.", portuguese: "Ela conseguiu ligar a misteriosa máquina sem um manual." }
    ]
  },
  "Social Media": {
    level1: [
      { english: "She decided to post a beautiful picture on her public profile.", portuguese: "Ela decidiu postar uma linda foto no seu perfil público." },
      { english: "He left a funny comment on the viral video shared by his friend.", portuguese: "Ele deixou um comentário engraçado no vídeo viral compartilhado pelo seu amigo." },
      { english: "I received a strange direct message from an unknown follower.", portuguese: "Recebi uma mensagem direta estranha de um seguidor desconhecido." },
      { english: "Make sure to use an engaging hashtag when you upload a story.", portuguese: "Certifique-se de usar uma hashtag atraente ao fazer upload de um story." },
      { english: "You should completely delete any offensive posts from your online page.", portuguese: "Você deve excluir completamente quaisquer postagens ofensivas de sua página online." },
      { english: "He spends hours trying to blindly scroll through the endless feed.", portuguese: "Ele passa horas tentando rolar cegamente pelo feed interminável." }
    ],
    level2: [
      { english: "The famous influencer managed to engage thousands of loyal fans effortlessly.", portuguese: "A influenciadora famosa conseguiu engajar milhares de fãs leais sem esforço." },
      { english: "I chose to mute the annoying troll and filter out negative opinions.", portuguese: "Eu escolhi silenciar o troll irritante e filtrar opiniões negativas." },
      { english: "You can easily catch up on the latest trends by using this app.", portuguese: "Você pode se atualizar facilmente sobre as últimas tendências usando este aplicativo." },
      { english: "He wrote an inspiring caption before his new video could go viral.", portuguese: "Ele escreveu uma legenda inspiradora antes de seu novo vídeo viralizar." },
      { english: "Do not forget to log off securely when using someone else's computer.", portuguese: "Não se esqueça de se desconectar (log off) com segurança ao usar o computador de outra pessoa." },
      { english: "She decided to aggressively unfollow accounts that post irrelevant content constantly.", portuguese: "Ela decidiu deixar de seguir (unfollow) agressivamente contas que postam conteúdo irrelevante constantemente." }
    ]
  }
};

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const [scenarioName, levels] of Object.entries(buildSentencesData)) {
    const titleRegex = new RegExp(`title:\\s*["']${scenarioName}["']`, 'g');
    const titleMatch = titleRegex.exec(content);
    if (!titleMatch) continue;

    const startIdx = titleMatch.index;
    
    const nextTitleMatch = new RegExp(`title:\\s*["'].+?["']`, 'g');
    nextTitleMatch.lastIndex = startIdx + 10;
    const nextTitle = nextTitleMatch.exec(content);
    const endIdx = nextTitle ? nextTitle.index : content.length;

    let scenarioBlock = content.substring(startIdx, endIdx);

    const bsRegex = /buildSentence:\s*\{\s*level1:\s*\[([\s\S]*?)\],\s*level2:\s*\[([\s\S]*?)\]\s*\}/g;

    const newLevel1 = levels.level1.map(p => `{ english: "${p.english}", portuguese: "${p.portuguese}" }`).join(', ');
    const newLevel2 = levels.level2.map(p => `{ english: "${p.english}", portuguese: "${p.portuguese}" }`).join(', ');

    if (scenarioBlock.match(bsRegex)) {
      scenarioBlock = scenarioBlock.replace(bsRegex, `buildSentence: { level1: [ ${newLevel1} ], level2: [ ${newLevel2} ] }`);
      content = content.substring(0, startIdx) + scenarioBlock + content.substring(endIdx);
    } else {
      console.log(`Could not find buildSentence array properly in ${scenarioName} in file ${filePath}`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('../data/scenarios1.ts');
updateFile('../data/scenarios2.ts');
console.log('Build Sentence update complete.');
