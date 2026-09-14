const fs = require('fs');

const b1NewVocab = {
  "familia": [
    { english: "Grow apart", portuguese: "Afastar-se (emocionalmente)", levels: { B1: { en: "As we got older, my brother and I started to grow apart.", pt: "Conforme fomos envelhecendo, meu irmão e eu começamos a nos afastar." } } },
    { english: "Look up to", portuguese: "Admirar / Espelhar-se", levels: { B1: { en: "I really look up to my grandfather because he is so wise.", pt: "Eu admiro muito o meu avô porque ele é muito sábio." } } },
    { english: "Settle down", portuguese: "Aquietar-se / Criar raízes", levels: { B1: { en: "After traveling for years, they finally decided to settle down and start a family.", pt: "Depois de viajar por anos, eles finalmente decidiram sossegar e formar uma família." } } },
    { english: "Gather", portuguese: "Reunir-se", levels: { B1: { en: "The whole family gathers at my parents' house every Thanksgiving.", pt: "A família inteira se reúne na casa dos meus pais todo Dia de Ação de Graças." } } },
    { english: "Sibling", portuguese: "Irmão / Irmã (Geral)", levels: { B1: { en: "Do you have any siblings, or are you an only child?", pt: "Você tem irmãos ou irmãs, ou é filho único?" } } },
    { english: "Upbringing", portuguese: "Criação / Educação (pelos pais)", levels: { B1: { en: "She had a very strict upbringing but turned out to be a wonderful person.", pt: "Ela teve uma criação muito rigorosa, mas se tornou uma pessoa maravilhosa." } } },
    { english: "Depend on", portuguese: "Depender de / Contar com", levels: { B1: { en: "You can always depend on your family when things go wrong.", pt: "Você sempre pode contar com sua família quando as coisas dão errado." } } },
    { english: "Tie the knot", portuguese: "Casar-se (Expressão)", levels: { B1: { en: "My cousin and his fiancee are going to tie the knot next spring.", pt: "Meu primo e sua noiva vão se casar na próxima primavera." } } },
    { english: "Spoil", portuguese: "Mimar", levels: { B1: { en: "Grandparents love to spoil their grandchildren with candies and toys.", pt: "Avós adoram mimar seus netos com doces e brinquedos." } } },
    { english: "Fall out", portuguese: "Desentender-se", levels: { B1: { en: "They fell out over a misunderstanding and haven't spoken since.", pt: "Eles se desentenderam por um mal-entendido e não se falam desde então." } } },
    { english: "Make up", portuguese: "Fazer as pazes", levels: { B1: { en: "It is important to apologize and make up after a family fight.", pt: "É importante pedir desculpas e fazer as pazes depois de uma briga de família." } } },
    { english: "Resemble", portuguese: "Assemelhar-se", levels: { B1: { en: "She strongly resembles her aunt from her father's side.", pt: "Ela se assemelha fortemente à tia por parte de pai." } } }
  ],
  "amigos": [
    { english: "Catch up", portuguese: "Colocar o papo em dia", levels: { B1: { en: "Let's grab a coffee this weekend and catch up on everything.", pt: "Vamos tomar um café neste final de semana e colocar o papo em dia sobre tudo." } } },
    { english: "Let down", portuguese: "Decepcionar", levels: { B1: { en: "I trust him completely because he has never let me down.", pt: "Eu confio nele completamente porque ele nunca me decepcionou." } } },
    { english: "Turn to", portuguese: "Recorrer a (alguém)", levels: { B1: { en: "When I have a problem, she is the first person I turn to.", pt: "Quando tenho um problema, ela é a primeira pessoa a quem recorro." } } },
    { english: "Stand by", portuguese: "Apoiar / Estar ao lado", levels: { B1: { en: "A true friend will stand by you during the toughest times.", pt: "Um amigo verdadeiro estará ao seu lado durante os momentos mais difíceis." } } },
    { english: "Hit it off", portuguese: "Dar-se bem logo de cara", levels: { B1: { en: "We met at a party and completely hit it off immediately.", pt: "Nos conhecemos em uma festa e nos demos muito bem logo de cara." } } },
    { english: "Count on", portuguese: "Contar com", levels: { B1: { en: "You can count on me to help you move to your new apartment.", pt: "Você pode contar comigo para te ajudar a mudar para o seu apartamento novo." } } },
    { english: "Back up", portuguese: "Apoiar / Dar cobertura", levels: { B1: { en: "I will back you up if the boss asks what happened.", pt: "Eu te darei cobertura se o chefe perguntar o que aconteceu." } } },
    { english: "Put up with", portuguese: "Tolerar / Suportar", levels: { B1: { en: "I don't know how you put up with his annoying complaints all the time.", pt: "Eu não sei como você suporta as reclamações irritantes dele o tempo todo." } } },
    { english: "Cheer up", portuguese: "Animar-se / Alegrar", levels: { B1: { en: "We bought her flowers to cheer her up after the bad news.", pt: "Nós compramos flores para ela para animá-la depois da má notícia." } } },
    { english: "Bond", portuguese: "Criar laço afetivo", levels: { B1: { en: "They bonded over their shared love for classic movies.", pt: "Eles criaram um laço devido ao amor compartilhado por filmes clássicos." } } },
    { english: "Drift apart", portuguese: "Afastar-se (aos poucos)", levels: { B1: { en: "After high school, we slowly began to drift apart.", pt: "Depois do ensino médio, nós começamos a nos afastar lentamente." } } },
    { english: "Show up", portuguese: "Aparecer / Chegar", levels: { B1: { en: "I invited twenty people, but only ten showed up to the dinner.", pt: "Eu convidei vinte pessoas, mas apenas dez apareceram para o jantar." } } }
  ],
  "corpo": [
    { english: "Work out", portuguese: "Malhar / Exercitar-se", levels: { B1: { en: "I try to work out at the gym at least three times a week.", pt: "Eu tento malhar na academia pelo menos três vezes por semana." } } },
    { english: "Recover", portuguese: "Recuperar-se", levels: { B1: { en: "It took him a whole month to recover from the surgery.", pt: "Levou um mês inteiro para ele se recuperar da cirurgia." } } },
    { english: "Throw up", portuguese: "Vomitar", levels: { B1: { en: "He ate some bad seafood and threw up all night.", pt: "Ele comeu frutos do mar estragados e vomitou a noite toda." } } },
    { english: "Pass out", portuguese: "Desmaiar", levels: { B1: { en: "It was so hot inside the crowded room that she almost passed out.", pt: "Estava tão quente dentro da sala lotada que ela quase desmaiou." } } },
    { english: "Get over", portuguese: "Superar / Curar-se", levels: { B1: { en: "I finally got over that terrible cold I had last week.", pt: "Eu finalmente me curei daquele resfriado terrível que tive semana passada." } } },
    { english: "Sneeze", portuguese: "Espirrar", levels: { B1: { en: "The dust in this old room is making me sneeze constantly.", pt: "A poeira neste quarto velho está me fazendo espirrar constantemente." } } },
    { english: "Cough", portuguese: "Tossir", levels: { B1: { en: "Please cover your mouth when you cough so you don't spread germs.", pt: "Por favor, cubra sua boca quando tossir para não espalhar germes." } } },
    { english: "Bleed", portuguese: "Sangrar", levels: { B1: { en: "I cut my finger while chopping onions and it started to bleed.", pt: "Eu cortei meu dedo enquanto picava cebolas e começou a sangrar." } } },
    { english: "Swallow", portuguese: "Engolir", levels: { B1: { en: "My throat hurts so much that it is painful to swallow water.", pt: "Minha garganta dói tanto que é doloroso engolir água." } } },
    { english: "Breathe", portuguese: "Respirar", levels: { B1: { en: "Take a deep breath and try to relax before the presentation.", pt: "Respire fundo e tente relaxar antes da apresentação." } } },
    { english: "Sweat", portuguese: "Suar", levels: { B1: { en: "I always sweat a lot when I go running in the summer.", pt: "Eu sempre suo muito quando vou correr no verão." } } },
    { english: "Shiver", portuguese: "Tremer (de frio/medo)", levels: { B1: { en: "He stood in the freezing snow and began to shiver uncontrollably.", pt: "Ele ficou na neve congelante e começou a tremer incontrolavelmente." } } }
  ],
  "casa": [
    { english: "Move in", portuguese: "Mudar-se (para dentro)", levels: { B1: { en: "We are going to move in to our new apartment next Saturday.", pt: "Nós vamos nos mudar para o nosso apartamento novo no próximo sábado." } } },
    { english: "Move out", portuguese: "Mudar-se (sair)", levels: { B1: { en: "My roommate decided to move out because he got a job in another city.", pt: "Meu colega de quarto decidiu se mudar porque conseguiu um emprego em outra cidade." } } },
    { english: "Settle in", portuguese: "Acomodar-se / Instalar-se", levels: { B1: { en: "It takes a few weeks to unpack and really settle in after moving.", pt: "Leva algumas semanas para desempacotar e realmente se instalar depois de mudar." } } },
    { english: "Tidy up", portuguese: "Arrumar / Organizar", levels: { B1: { en: "I need to tidy up the living room before our guests arrive.", pt: "Eu preciso arrumar a sala de estar antes dos nossos convidados chegarem." } } },
    { english: "Clean up", portuguese: "Limpar", levels: { B1: { en: "Please clean up the mess you made in the kitchen right now.", pt: "Por favor, limpe a bagunça que você fez na cozinha agora mesmo." } } },
    { english: "Put away", portuguese: "Guardar (no lugar certo)", levels: { B1: { en: "After washing the dishes, you should put them away in the cupboard.", pt: "Depois de lavar a louça, você deve guardá-las no armário." } } },
    { english: "Decorate", portuguese: "Decorar", levels: { B1: { en: "They hired a professional to decorate the interior of their new house.", pt: "Eles contrataram um profissional para decorar o interior da casa nova deles." } } },
    { english: "Renovate", portuguese: "Reformar", levels: { B1: { en: "We plan to renovate the bathroom next year to modernize it.", pt: "Nós planejamos reformar o banheiro no ano que vem para modernizá-lo." } } },
    { english: "Lease", portuguese: "Contrato de aluguel", levels: { B1: { en: "Before renting the place, you have to sign a one-year lease.", pt: "Antes de alugar o lugar, você tem que assinar um contrato de aluguel de um ano." } } },
    { english: "Evict", portuguese: "Despejar", levels: { B1: { en: "The landlord threatened to evict the tenants if they didn't pay the rent.", pt: "O senhorio ameaçou despejar os inquilinos se eles não pagassem o aluguel." } } },
    { english: "Mortgage", portuguese: "Hipoteca", levels: { B1: { en: "They finally paid off their twenty-year mortgage on the house.", pt: "Eles finalmente terminaram de pagar a hipoteca de vinte anos da casa." } } },
    { english: "Fix up", portuguese: "Consertar / Restaurar", levels: { B1: { en: "He bought an old car and spent the summer trying to fix it up.", pt: "Ele comprou um carro velho e passou o verão tentando consertá-lo." } } }
  ],
  "casa2": [
    { english: "Take out the trash", portuguese: "Levar o lixo para fora", levels: { B1: { en: "It is your turn to take out the trash tonight.", pt: "É a sua vez de levar o lixo para fora hoje à noite." } } },
    { english: "Do the laundry", portuguese: "Lavar as roupas", levels: { B1: { en: "I usually do the laundry on Sunday mornings when I have free time.", pt: "Eu costumo lavar as roupas nas manhãs de domingo quando tenho tempo livre." } } },
    { english: "Mop", portuguese: "Passar pano / Esfregão", levels: { B1: { en: "Someone spilled juice on the floor, so I had to mop it up.", pt: "Alguém derramou suco no chão, então tive que passar pano." } } },
    { english: "Sweep", portuguese: "Varrer", levels: { B1: { en: "Please sweep the floor before you wash it.", pt: "Por favor, varra o chão antes de lavá-lo." } } },
    { english: "Wipe", portuguese: "Limpar (passando um pano)", levels: { B1: { en: "Can you wipe the kitchen counter with a damp cloth?", pt: "Você pode limpar o balcão da cozinha com um pano úmido?" } } },
    { english: "Dust", portuguese: "Tirar o pó", levels: { B1: { en: "You should dust the furniture regularly to avoid allergies.", pt: "Você deve tirar o pó dos móveis regularmente para evitar alergias." } } },
    { english: "Iron", portuguese: "Passar a ferro", levels: { B1: { en: "I need to iron my shirt before the job interview tomorrow.", pt: "Eu preciso passar a minha camisa antes da entrevista de emprego amanhã." } } },
    { english: "Fold", portuguese: "Dobrar", levels: { B1: { en: "After the clothes are dry, you should fold them neatly and put them away.", pt: "Depois que as roupas secarem, você deve dobrá-las cuidadosamente e guardá-las." } } },
    { english: "Scrub", portuguese: "Esfregar", levels: { B1: { en: "I had to scrub the bathtub for half an hour to remove the stains.", pt: "Eu tive que esfregar a banheira por meia hora para remover as manchas." } } },
    { english: "Plug in", portuguese: "Ligar na tomada", levels: { B1: { en: "Don't forget to plug in your phone charger before you go to sleep.", pt: "Não se esqueça de ligar o carregador do seu celular na tomada antes de dormir." } } },
    { english: "Unplug", portuguese: "Tirar da tomada", levels: { B1: { en: "Always unplug the iron when you are finished using it.", pt: "Sempre tire o ferro da tomada quando terminar de usá-lo." } } },
    { english: "Turn up", portuguese: "Aumentar (volume/temperatura)", levels: { B1: { en: "Can you turn up the heating? It is getting quite cold in here.", pt: "Você pode aumentar o aquecedor? Está ficando bem frio aqui dentro." } } }
  ],
  "hobbies": [
    { english: "Take up", portuguese: "Começar (um novo hobby)", levels: { B1: { en: "I decided to take up photography as a new hobby to relax on weekends.", pt: "Eu decidi começar a praticar fotografia como um novo hobby para relaxar nos fins de semana." } } },
    { english: "Give up", portuguese: "Desistir / Parar de fazer", levels: { B1: { en: "He used to play the guitar, but he gave it up when he started university.", pt: "Ele costumava tocar violão, mas parou quando começou a universidade." } } },
    { english: "Join in", portuguese: "Juntar-se / Participar", levels: { B1: { en: "We are playing a board game right now. Do you want to join in?", pt: "Nós estamos jogando um jogo de tabuleiro agora. Você quer participar?" } } },
    { english: "Hang out", portuguese: "Sair / Passar o tempo", levels: { B1: { en: "My favorite hobby is just hanging out with my friends at the park.", pt: "Meu hobby favorito é apenas passar o tempo com meus amigos no parque." } } },
    { english: "Collect", portuguese: "Colecionar", levels: { B1: { en: "Since he was a little boy, he has always loved to collect vintage coins.", pt: "Desde que ele era um garotinho, ele sempre amou colecionar moedas antigas." } } },
    { english: "Perform", portuguese: "Apresentar-se / Atuar", levels: { B1: { en: "Her dream is to perform on a Broadway stage one day.", pt: "O sonho dela é se apresentar em um palco da Broadway um dia." } } },
    { english: "Rehearse", portuguese: "Ensaiar", levels: { B1: { en: "The band meets every Tuesday evening to rehearse their new songs.", pt: "A banda se encontra toda terça à noite para ensaiar suas novas músicas." } } },
    { english: "Craft", portuguese: "Artesanato / Criar manualmente", levels: { B1: { en: "She enjoys crafting beautiful jewelry out of silver and glass beads.", pt: "Ela gosta de fazer lindas joias artesanais de prata e contas de vidro." } } },
    { english: "Sign up", portuguese: "Inscrever-se", levels: { B1: { en: "I am going to sign up for a Spanish class this summer.", pt: "Vou me inscrever para uma aula de espanhol neste verão." } } },
    { english: "Look forward to", portuguese: "Aguardar ansiosamente", levels: { B1: { en: "I always look forward to my painting class at the end of the week.", pt: "Eu sempre aguardo ansiosamente pela minha aula de pintura no final da semana." } } },
    { english: "Keen on", portuguese: "Gostar muito / Ser fã de", levels: { B1: { en: "I'm not very keen on gardening, but I do love arranging flowers.", pt: "Eu não sou muito fã de jardinagem, mas adoro arrumar flores." } } },
    { english: "Chill out", portuguese: "Relaxar", levels: { B1: { en: "After a long week of work, I just want to sit on the couch and chill out.", pt: "Depois de uma longa semana de trabalho, eu só quero sentar no sofá e relaxar." } } }
  ],
  "esportes": [
    { english: "Work out", portuguese: "Malhar / Exercitar-se", levels: { B1: { en: "If you want to build muscle, you have to work out consistently.", pt: "Se você quer construir músculos, você tem que malhar com consistência." } } },
    { english: "Warm up", portuguese: "Aquecer-se", levels: { B1: { en: "It is essential to warm up properly before doing any intense physical activity.", pt: "É essencial se aquecer adequadamente antes de fazer qualquer atividade física intensa." } } },
    { english: "Cool down", portuguese: "Desaquecer / Esfriar o corpo", levels: { B1: { en: "Don't forget to cool down and stretch your legs after a long run.", pt: "Não se esqueça de desaquecer e alongar as pernas depois de uma longa corrida." } } },
    { english: "Knock out", portuguese: "Nocautear", levels: { B1: { en: "The boxer managed to knock out his opponent in the third round.", pt: "O boxeador conseguiu nocautear seu oponente no terceiro round." } } },
    { english: "Catch up", portuguese: "Alcançar (quem está na frente)", levels: { B1: { en: "He started the race late, but he ran fast to catch up with the leaders.", pt: "Ele começou a corrida tarde, mas correu rápido para alcançar os líderes." } } },
    { english: "Give up", portuguese: "Desistir", levels: { B1: { en: "Even though they were losing by three goals, the team refused to give up.", pt: "Mesmo perdendo por três gols, a equipe se recusou a desistir." } } },
    { english: "Join in", portuguese: "Participar", levels: { B1: { en: "We need one more player for the volleyball match, do you want to join in?", pt: "Nós precisamos de mais um jogador para a partida de vôlei, você quer participar?" } } },
    { english: "Drop out", portuguese: "Desistir (de uma competição)", levels: { B1: { en: "He injured his knee and was forced to drop out of the marathon.", pt: "Ele machucou o joelho e foi forçado a desistir da maratona." } } },
    { english: "Cheer on", portuguese: "Torcer por", levels: { B1: { en: "Thousands of fans gathered in the stadium to cheer on their national team.", pt: "Milhares de fãs se reuniram no estádio para torcer pela sua seleção nacional." } } },
    { english: "Tackle", portuguese: "Derrubar / Enfrentar", levels: { B1: { en: "The defender made a sliding tackle to stop the striker from scoring.", pt: "O zagueiro deu um carrinho para impedir o atacante de marcar." } } },
    { english: "Foul", portuguese: "Falta (no jogo)", levels: { B1: { en: "The referee blew the whistle and called a foul against the visiting team.", pt: "O árbitro apitou e marcou uma falta contra o time visitante." } } },
    { english: "Tie / Draw", portuguese: "Empate", levels: { B1: { en: "The exciting match ended in a 2-2 tie after an intense final ten minutes.", pt: "A emocionante partida terminou em um empate de 2 a 2 após dez minutos finais intensos." } } }
  ],
  "supermercado": [
    { english: "Run out of", portuguese: "Ficar sem / Acabar", levels: { B1: { en: "We completely ran out of sugar, so I need to go to the store.", pt: "Nós ficamos completamente sem açúcar, então preciso ir à loja." } } },
    { english: "Stock up", portuguese: "Fazer estoque", levels: { B1: { en: "People usually stock up on water and canned food before a big storm.", pt: "As pessoas costumam fazer estoque de água e comida enlatada antes de uma grande tempestade." } } },
    { english: "Pick up", portuguese: "Pegar / Comprar (rapidamente)", levels: { B1: { en: "Could you pick up some milk on your way home from the office?", pt: "Você poderia comprar um pouco de leite a caminho de casa do escritório?" } } },
    { english: "Sell out", portuguese: "Esgotar", levels: { B1: { en: "The special offer was so popular that the item sold out in one hour.", pt: "A oferta especial era tão popular que o item esgotou em uma hora." } } },
    { english: "Queue up", portuguese: "Fazer fila", levels: { B1: { en: "Customers had to queue up outside the store before the doors opened.", pt: "Os clientes tiveram que fazer fila do lado de fora da loja antes de as portas abrirem." } } },
    { english: "Aisle", portuguese: "Corredor (de supermercado/loja)", levels: { B1: { en: "You can find all the cleaning supplies in the third aisle on your left.", pt: "Você pode encontrar todos os produtos de limpeza no terceiro corredor à sua esquerda." } } },
    { english: "Bargain", portuguese: "Pechincha / Barganha", levels: { B1: { en: "Getting three boxes of cereal for the price of one is a real bargain.", pt: "Conseguir três caixas de cereal pelo preço de uma é uma verdadeira pechincha." } } },
    { english: "Checkout", portuguese: "Caixa (para pagamento)", levels: { B1: { en: "Please proceed to the checkout area when you are ready to pay for your items.", pt: "Por favor, dirija-se à área do caixa quando estiver pronto para pagar pelos seus itens." } } },
    { english: "Trolley", portuguese: "Carrinho de compras (UK)", levels: { B1: { en: "He pushed the heavy trolley through the store while looking for the bread.", pt: "Ele empurrou o pesado carrinho de compras pela loja enquanto procurava pelo pão." } } },
    { english: "Afford", portuguese: "Ter condições de pagar", levels: { B1: { en: "I want the premium brand, but I can only afford the generic one right now.", pt: "Eu quero a marca premium, mas só tenho condições de pagar a genérica agora." } } },
    { english: "Rip off", portuguese: "Exploração / Preço abusivo", levels: { B1: { en: "Twenty dollars for a small bottle of water is a complete rip-off.", pt: "Vinte dólares por uma pequena garrafa de água é uma verdadeira exploração." } } },
    { english: "Refund", portuguese: "Reembolso", levels: { B1: { en: "The product was expired, so I went back to the store to ask for a refund.", pt: "O produto estava vencido, então voltei à loja para pedir um reembolso." } } }
  ]
};

function injectB1(filePath, vocabDict) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const [scenarioId, words] of Object.entries(vocabDict)) {
    const scenarioRegex = new RegExp(`(id:\\s*["']${scenarioId}["'][\\s\\S]*?vocabulary:\\s*\\[[\\s\\S]*?)(?=\\s*],\\s*(?:flashcards|quiz|dialogue|trueOrFalse|speakingPractice|usefulExpressions))`);
    if (!content.match(scenarioRegex)) continue;

    content = content.replace(scenarioRegex, (match, prefix) => {
      let injected = '';
      for (const item of words) {
        injected += `,\n      { english: "${item.english}", portuguese: "${item.portuguese}",\n          levels: { \n                        B1: { en: "${item.levels.B1.en}", pt: "${item.levels.B1.pt}" } \n                      }\n    }`;
      }
      return prefix + injected;
    });
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

injectB1('data/scenarios1.ts', b1NewVocab);
injectB1('data/scenarios2.ts', b1NewVocab);
