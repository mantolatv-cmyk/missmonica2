const fs = require('fs');

const b1NewVocabS1 = {
  "familia": [
    { english: "Get along", portuguese: "Se dar bem", levels: { B1: { en: "I get along very well with my older brother.", pt: "Eu me dou muito bem com meu irmão mais velho." } } },
    { english: "Take after", portuguese: "Puxar a / Parecer com", levels: { B1: { en: "She really takes after her mother in personality.", pt: "Ela realmente puxou a mãe em personalidade." } } },
    { english: "Bring up", portuguese: "Criar (um filho)", levels: { B1: { en: "His grandparents helped bring him up when he was young.", pt: "Os avós dele ajudaram a criá-lo quando ele era jovem." } } },
    { english: "Close-knit", portuguese: "Unida (família)", levels: { B1: { en: "They are a very close-knit family who always support each other.", pt: "Eles são uma família muito unida que sempre se apoia." } } },
    { english: "In-laws", portuguese: "Sogros / Cunhados", levels: { B1: { en: "We are visiting my in-laws for dinner this weekend.", pt: "Nós vamos visitar meus sogros para o jantar este fim de semana." } } },
    { english: "Extended family", portuguese: "Família estendida", levels: { B1: { en: "We invited our entire extended family to the wedding.", pt: "Nós convidamos toda a nossa família estendida para o casamento." } } },
    { english: "Only child", portuguese: "Filho(a) único(a)", levels: { B1: { en: "Being an only child means you never have to share your toys.", pt: "Ser filho único significa que você nunca tem que dividir seus brinquedos." } } },
    { english: "Relative", portuguese: "Parente", levels: { B1: { en: "A distant relative left him a small fortune.", pt: "Um parente distante deixou uma pequena fortuna para ele." } } }
  ],
  "amigos": [
    { english: "Hang out", portuguese: "Passar o tempo (junto)", levels: { B1: { en: "We usually hang out at the mall on Saturday afternoons.", pt: "Nós geralmente passamos o tempo no shopping nas tardes de sábado." } } },
    { english: "Keep in touch", portuguese: "Manter contato", levels: { B1: { en: "Even though she moved away, we still keep in touch.", pt: "Mesmo que ela tenha se mudado, nós ainda mantemos contato." } } },
    { english: "Fall out", portuguese: "Brigar / Desentender-se", levels: { B1: { en: "They fell out over a silly argument and stopped talking.", pt: "Eles brigaram por causa de uma discussão boba e pararam de se falar." } } },
    { english: "Rely on", portuguese: "Contar com / Confiar em", levels: { B1: { en: "You can always rely on me if you need any help.", pt: "Você sempre pode contar comigo se precisar de alguma ajuda." } } },
    { english: "Trustworthy", portuguese: "Confiável", levels: { B1: { en: "He is a highly trustworthy friend who keeps secrets well.", pt: "Ele é um amigo altamente confiável que guarda bem segredos." } } },
    { english: "Acquaintance", portuguese: "Conhecido(a)", levels: { B1: { en: "She is not a close friend, just an acquaintance from work.", pt: "Ela não é uma amiga íntima, apenas uma conhecida do trabalho." } } },
    { english: "Get together", portuguese: "Reunir-se / Encontrar-se", levels: { B1: { en: "Let's get together for a coffee sometime next week.", pt: "Vamos nos encontrar para um café em algum momento da próxima semana." } } },
    { english: "Mate", portuguese: "Amigo / Colega (UK)", levels: { B1: { en: "He went to the pub to watch the game with his mates.", pt: "Ele foi ao pub para assistir ao jogo com os amigos." } } }
  ],
  "corpo": [
    { english: "Forehead", portuguese: "Testa", levels: { B1: { en: "He wiped the sweat from his forehead after running.", pt: "Ele enxugou o suor da testa depois de correr." } } },
    { english: "Wrist", portuguese: "Pulso", levels: { B1: { en: "She wore a silver bracelet around her left wrist.", pt: "Ela usava uma pulseira de prata ao redor do pulso esquerdo." } } },
    { english: "Ankle", portuguese: "Tornozelo", levels: { B1: { en: "He twisted his ankle while playing football yesterday.", pt: "Ele torceu o tornozelo enquanto jogava futebol ontem." } } },
    { english: "Thumb", portuguese: "Polegar", levels: { B1: { en: "He hit his thumb with the hammer by accident.", pt: "Ele bateu no polegar com o martelo por acidente." } } },
    { english: "Waist", portuguese: "Cintura", levels: { B1: { en: "He tied his jacket around his waist because it was warm.", pt: "Ele amarrou a jaqueta na cintura porque estava quente." } } },
    { english: "Heel", portuguese: "Calcanhar", levels: { B1: { en: "My new shoes are rubbing against my heel.", pt: "Meus sapatos novos estão esfregando no meu calcanhar." } } },
    { english: "Chest", portuguese: "Peito / Tórax", levels: { B1: { en: "He felt a sharp pain in his chest and called a doctor.", pt: "Ele sentiu uma dor aguda no peito e chamou um médico." } } },
    { english: "Jaw", portuguese: "Mandíbula", levels: { B1: { en: "The boxer received a heavy punch directly to the jaw.", pt: "O boxeador recebeu um soco pesado direto na mandíbula." } } }
  ],
  "casa": [
    { english: "Landlord", portuguese: "Senhorio / Dono (do imóvel)", levels: { B1: { en: "Our landlord increases the rent a little bit every year.", pt: "Nosso senhorio aumenta o aluguel um pouquinho todo ano." } } },
    { english: "Rent", portuguese: "Alugar / Aluguel", levels: { B1: { en: "They can barely afford to pay the rent this month.", pt: "Eles mal conseguem pagar o aluguel este mês." } } },
    { english: "Furniture", portuguese: "Móveis / Mobília", levels: { B1: { en: "They bought beautiful wooden furniture for the living room.", pt: "Eles compraram móveis de madeira lindos para a sala de estar." } } },
    { english: "Appliance", portuguese: "Eletrodoméstico", levels: { B1: { en: "The kitchen is equipped with modern stainless steel appliances.", pt: "A cozinha está equipada com eletrodomésticos modernos de aço inoxidável." } } },
    { english: "Cozy", portuguese: "Aconchegante", levels: { B1: { en: "It is a small but very cozy apartment in the city center.", pt: "É um apartamento pequeno, mas muito aconchegante no centro da cidade." } } },
    { english: "Spacious", portuguese: "Espaçoso", levels: { B1: { en: "The new house is much more spacious than our old flat.", pt: "A casa nova é muito mais espaçosa que nosso apartamento antigo." } } },
    { english: "Move in", portuguese: "Mudar-se (para dentro)", levels: { B1: { en: "We signed the contract and we will move in on Friday.", pt: "Nós assinamos o contrato e vamos nos mudar na sexta-feira." } } },
    { english: "Neighborhood", portuguese: "Vizinhança / Bairro", levels: { B1: { en: "They live in a quiet and safe neighborhood near the school.", pt: "Eles moram em uma vizinhança tranquila e segura perto da escola." } } }
  ],
  "casa2": [
    { english: "Vacuum", portuguese: "Passar aspirador", levels: { B1: { en: "I need to vacuum the carpets before the guests arrive.", pt: "Eu preciso passar aspirador nos tapetes antes que os convidados cheguem." } } },
    { english: "Do the laundry", portuguese: "Lavar a roupa", levels: { B1: { en: "She usually does the laundry on Sunday mornings.", pt: "Ela geralmente lava a roupa nos domingos de manhã." } } },
    { english: "Take out the trash", portuguese: "Levar o lixo para fora", levels: { B1: { en: "It is your turn to take out the trash tonight.", pt: "É a sua vez de levar o lixo para fora hoje à noite." } } },
    { english: "Wipe", portuguese: "Limpar / Passar um pano", levels: { B1: { en: "Could you wipe the kitchen table with a damp cloth?", pt: "Você poderia passar um pano na mesa da cozinha com um pano úmido?" } } },
    { english: "Dust", portuguese: "Tirar o pó", levels: { B1: { en: "He forgot to dust the bookshelves while cleaning the room.", pt: "Ele esqueceu de tirar o pó das prateleiras de livros ao limpar a sala." } } },
    { english: "Mop", portuguese: "Passar esfregão", levels: { B1: { en: "Someone spilled juice, so I had to mop the floor.", pt: "Alguém derramou suco, então eu tive que passar esfregão no chão." } } },
    { english: "Tidy up", portuguese: "Arrumar / Organizar", levels: { B1: { en: "Please tidy up your bedroom before going out to play.", pt: "Por favor, arrume seu quarto antes de sair para brincar." } } },
    { english: "Chores", portuguese: "Tarefas domésticas", levels: { B1: { en: "We share the household chores equally between everyone.", pt: "Nós dividimos as tarefas domésticas igualmente entre todos." } } }
  ],
  "hobbies": [
    { english: "Keen on", portuguese: "Interessado em / Gostar muito", levels: { B1: { en: "He is really keen on playing the guitar recently.", pt: "Ele está realmente interessado em tocar violão recentemente." } } },
    { english: "Take up", portuguese: "Começar (um hobby/atividade)", levels: { B1: { en: "She decided to take up yoga to reduce stress.", pt: "Ela decidiu começar a fazer yoga para reduzir o estresse." } } },
    { english: "Give up", portuguese: "Desistir / Parar de fazer", levels: { B1: { en: "He had to give up playing football after his knee injury.", pt: "Ele teve que parar de jogar futebol depois da lesão no joelho." } } },
    { english: "Into", portuguese: "Gostar muito de algo", levels: { B1: { en: "I am really into science fiction movies right now.", pt: "Eu estou gostando muito de filmes de ficção científica agora." } } },
    { english: "Leisure", portuguese: "Lazer / Tempo livre", levels: { B1: { en: "What do you normally do in your leisure time?", pt: "O que você normalmente faz no seu tempo de lazer?" } } },
    { english: "Outdoors", portuguese: "Ao ar livre", levels: { B1: { en: "They love spending their weekends outdoors, hiking and camping.", pt: "Eles adoram passar os fins de semana ao ar livre, fazendo trilhas e acampando." } } },
    { english: "Join", portuguese: "Juntar-se / Inscrever-se", levels: { B1: { en: "I want to join the local chess club this year.", pt: "Eu quero me inscrever no clube de xadrez local este ano." } } },
    { english: "Skill", portuguese: "Habilidade", levels: { B1: { en: "Learning a new language is a very useful skill.", pt: "Aprender um novo idioma é uma habilidade muito útil." } } }
  ],
  "esportes": [
    { english: "Work out", portuguese: "Malhar / Fazer exercício", levels: { B1: { en: "He goes to the gym to work out three times a week.", pt: "Ele vai à academia para malhar três vezes na semana." } } },
    { english: "Compete", portuguese: "Competir", levels: { B1: { en: "Over fifty athletes will compete in the final race.", pt: "Mais de cinquenta atletas vão competir na corrida final." } } },
    { english: "Referee", portuguese: "Árbitro / Juiz", levels: { B1: { en: "The referee blew the whistle to start the second half.", pt: "O árbitro apitou para começar o segundo tempo." } } },
    { english: "Score", portuguese: "Marcar ponto / Placar", levels: { B1: { en: "The final score of the match was two to zero.", pt: "O placar final da partida foi dois a zero." } } },
    { english: "Match", portuguese: "Partida / Jogo", levels: { B1: { en: "We watched an exciting football match on television tonight.", pt: "Nós assistimos a uma partida de futebol emocionante na televisão hoje à noite." } } },
    { english: "Coach", portuguese: "Treinador(a)", levels: { B1: { en: "The coach shouted instructions to the players on the field.", pt: "A treinadora gritou instruções para as jogadoras no campo." } } },
    { english: "Spectator", portuguese: "Espectador(a)", levels: { B1: { en: "The stadium was packed with thousands of enthusiastic spectators.", pt: "O estádio estava lotado com milhares de espectadores entusiasmados." } } },
    { english: "Cheer", portuguese: "Torcer / Animar", levels: { B1: { en: "The crowd started to cheer loudly when their team scored.", pt: "A multidão começou a torcer alto quando o time deles marcou." } } }
  ],
  "supermercado": [
    { english: "Grocery", portuguese: "Compras de mercado / Mantimentos", levels: { B1: { en: "I need to go to the store to get some groceries.", pt: "Eu preciso ir à loja para fazer algumas compras de mercado." } } },
    { english: "Aisle", portuguese: "Corredor (de supermercado)", levels: { B1: { en: "You will find the cereal in the second aisle on the right.", pt: "Você encontrará o cereal no segundo corredor à direita." } } },
    { english: "Cashier", portuguese: "Caixa (pessoa)", levels: { B1: { en: "The friendly cashier scanned all my items very quickly.", pt: "A caixa amigável escaneou todos os meus itens muito rapidamente." } } },
    { english: "Receipt", portuguese: "Recibo / Nota fiscal", levels: { B1: { en: "Make sure you keep the receipt in case you need a refund.", pt: "Certifique-se de guardar o recibo caso você precise de um reembolso." } } },
    { english: "Discount", portuguese: "Desconto", levels: { B1: { en: "They offered a twenty percent discount on all dairy products.", pt: "Eles ofereceram vinte por cento de desconto em todos os laticínios." } } },
    { english: "Trolley", portuguese: "Carrinho de compras (UK)", levels: { B1: { en: "He put the heavy bags into the shopping trolley.", pt: "Ele colocou as sacolas pesadas no carrinho de compras." } } },
    { english: "Affordable", portuguese: "Acessível (preço) / Barato", levels: { B1: { en: "This supermarket has very affordable prices for fresh food.", pt: "Este supermercado tem preços muito acessíveis para comida fresca." } } },
    { english: "Queue", portuguese: "Fila (UK)", levels: { B1: { en: "We had to wait in a long queue to pay for our food.", pt: "Nós tivemos que esperar em uma longa fila para pagar nossa comida." } } }
  ]
};

const b1NewVocabS2 = {
  "compras": [
    { english: "Try on", portuguese: "Experimentar (roupas)", levels: { B1: { en: "Can I try on these shoes in a bigger size?", pt: "Posso experimentar estes sapatos em um tamanho maior?" } } },
    { english: "Fit", portuguese: "Servir / Caber (tamanho)", levels: { B1: { en: "This jacket doesn't fit me anymore; it's too tight.", pt: "Esta jaqueta não me serve mais; está muito apertada." } } },
    { english: "Suit", portuguese: "Cair bem / Combinar (estilo)", levels: { B1: { en: "That blue dress really suits you perfectly.", pt: "Aquele vestido azul realmente te cai perfeitamente." } } },
    { english: "Refund", portuguese: "Reembolso", levels: { B1: { en: "If the product is broken, you can ask for a full refund.", pt: "Se o produto estiver quebrado, você pode pedir um reembolso total." } } },
    { english: "Brand", portuguese: "Marca", levels: { B1: { en: "She only buys clothes from that expensive Italian brand.", pt: "Ela só compra roupas daquela marca italiana cara." } } },
    { english: "Out of stock", portuguese: "Esgotado / Sem estoque", levels: { B1: { en: "I'm sorry, but that specific model is currently out of stock.", pt: "Sinto muito, mas aquele modelo específico está atualmente esgotado." } } },
    { english: "Bargain", portuguese: "Pechincha", levels: { B1: { en: "Buying this laptop for half the price was a real bargain.", pt: "Comprar este laptop pela metade do preço foi uma verdadeira pechincha." } } },
    { english: "Customer", portuguese: "Cliente", levels: { B1: { en: "The store manager apologized to the angry customer.", pt: "O gerente da loja pediu desculpas ao cliente irritado." } } }
  ],
  "profissoes": [
    { english: "Apply for", portuguese: "Candidatar-se a", levels: { B1: { en: "She decided to apply for the manager position in the company.", pt: "Ela decidiu se candidatar à vaga de gerente na empresa." } } },
    { english: "Hire", portuguese: "Contratar", levels: { B1: { en: "They want to hire five new developers by the end of the year.", pt: "Eles querem contratar cinco novos desenvolvedores até o final do ano." } } },
    { english: "Fire / Sack", portuguese: "Demitir", levels: { B1: { en: "He was fired because he was constantly late for work.", pt: "Ele foi demitido porque chegava constantemente atrasado no trabalho." } } },
    { english: "Promotion", portuguese: "Promoção (no trabalho)", levels: { B1: { en: "She received a well-deserved promotion after working hard all year.", pt: "Ela recebeu uma promoção merecida após trabalhar duro o ano todo." } } },
    { english: "Salary", portuguese: "Salário", levels: { B1: { en: "He accepted the job offer because the salary was excellent.", pt: "Ele aceitou a oferta de emprego porque o salário era excelente." } } },
    { english: "Colleague", portuguese: "Colega de trabalho", levels: { B1: { en: "I had lunch with a colleague from the marketing department.", pt: "Eu almocei com uma colega de trabalho do departamento de marketing." } } },
    { english: "Shift", portuguese: "Turno (de trabalho)", levels: { B1: { en: "The nurse works the night shift at the local hospital.", pt: "A enfermeira trabalha no turno da noite no hospital local." } } },
    { english: "Quit / Resign", portuguese: "Pedir demissão", levels: { B1: { en: "He decided to quit his job and travel around the world.", pt: "Ele decidiu pedir demissão do seu emprego e viajar pelo mundo." } } }
  ],
  "lugares": [
    { english: "Sightseeing", portuguese: "Passeio turístico", levels: { B1: { en: "We spent the whole day sightseeing in central London.", pt: "Nós passamos o dia inteiro fazendo turismo no centro de Londres." } } },
    { english: "Crowded", portuguese: "Lotado", levels: { B1: { en: "The subway is always extremely crowded during rush hour.", pt: "O metrô está sempre extremamente lotado durante a hora do rush." } } },
    { english: "Accommodation", portuguese: "Acomodação / Hospedagem", levels: { B1: { en: "We need to book our accommodation before buying the flights.", pt: "Precisamos reservar nossa acomodação antes de comprar os voos." } } },
    { english: "Abroad", portuguese: "No exterior", levels: { B1: { en: "She wants to study abroad when she finishes high school.", pt: "Ela quer estudar no exterior quando terminar o ensino médio." } } },
    { english: "Landmark", portuguese: "Ponto de referência histórico", levels: { B1: { en: "The Eiffel Tower is the most famous landmark in Paris.", pt: "A Torre Eiffel é o ponto de referência mais famoso de Paris." } } },
    { english: "Border", portuguese: "Fronteira", levels: { B1: { en: "They crossed the border between France and Spain by train.", pt: "Eles cruzaram a fronteira entre a França e a Espanha de trem." } } },
    { english: "Guide", portuguese: "Guia turístico", levels: { B1: { en: "The tour guide explained the fascinating history of the castle.", pt: "O guia turístico explicou a fascinante história do castelo." } } },
    { english: "Get lost", portuguese: "Perder-se", levels: { B1: { en: "Make sure you use the map so you don't get lost.", pt: "Certifique-se de usar o mapa para não se perder." } } }
  ],
  "animais": [
    { english: "Wildlife", portuguese: "Vida selvagem", levels: { B1: { en: "The documentary showed incredible footage of African wildlife.", pt: "O documentário mostrou imagens incríveis da vida selvagem africana." } } },
    { english: "Endangered", portuguese: "Em risco de extinção", levels: { B1: { en: "The giant panda is a famous example of an endangered species.", pt: "O panda gigante é um famoso exemplo de uma espécie em risco de extinção." } } },
    { english: "Habitat", portuguese: "Habitat", levels: { B1: { en: "Deforestation is destroying the natural habitat of many birds.", pt: "O desmatamento está destruindo o habitat natural de muitos pássaros." } } },
    { english: "Furry", portuguese: "Peludo", levels: { B1: { en: "They adopted a cute, furry little kitten from the shelter.", pt: "Eles adotaram um gatinho pequeno e peludo do abrigo." } } },
    { english: "Bark", portuguese: "Latir", levels: { B1: { en: "The dog started to bark loudly when the postman arrived.", pt: "O cachorro começou a latir alto quando o carteiro chegou." } } },
    { english: "Bite", portuguese: "Morder", levels: { B1: { en: "Be careful with that wild animal, it might bite you.", pt: "Tenha cuidado com aquele animal selvagem, ele pode te morder." } } },
    { english: "Protect", portuguese: "Proteger", levels: { B1: { en: "It is our responsibility to protect these vulnerable animals.", pt: "É nossa responsabilidade proteger esses animais vulneráveis." } } },
    { english: "Shelter", portuguese: "Abrigo (de animais)", levels: { B1: { en: "We volunteer at the local animal shelter every weekend.", pt: "Nós somos voluntários no abrigo de animais local todo fim de semana." } } }
  ],
  "culinaria": [
    { english: "Recipe", portuguese: "Receita (culinária)", levels: { B1: { en: "My grandmother gave me her secret recipe for chocolate cake.", pt: "Minha avó me deu a receita secreta dela de bolo de chocolate." } } },
    { english: "Ingredients", portuguese: "Ingredientes", levels: { B1: { en: "Make sure you have all the ingredients before you start cooking.", pt: "Certifique-se de ter todos os ingredientes antes de começar a cozinhar." } } },
    { english: "Spicy", portuguese: "Apimentado", levels: { B1: { en: "I can't eat this curry, it is way too spicy for me.", pt: "Não consigo comer esse curry, está apimentado demais para mim." } } },
    { english: "Tasty", portuguese: "Saboroso / Gostoso", levels: { B1: { en: "This soup is incredibly tasty, what did you put in it?", pt: "Esta sopa está incrivelmente saborosa, o que você colocou nela?" } } },
    { english: "Bake", portuguese: "Assar", levels: { B1: { en: "She likes to bake fresh bread early in the morning.", pt: "Ela gosta de assar pão fresco de manhã cedo." } } },
    { english: "Boil", portuguese: "Ferver", levels: { B1: { en: "First, boil some water in a large pot for the pasta.", pt: "Primeiro, ferva um pouco de água em uma panela grande para o macarrão." } } },
    { english: "Raw", portuguese: "Cru(a)", levels: { B1: { en: "Sushi is traditionally made with fresh raw fish.", pt: "Sushi é tradicionalmente feito com peixe cru fresco." } } },
    { english: "Diet", portuguese: "Dieta", levels: { B1: { en: "He decided to go on a strict diet to lose weight.", pt: "Ele decidiu fazer uma dieta rigorosa para perder peso." } } }
  ],
  "tecnologia": [
    { english: "Download", portuguese: "Baixar (download)", levels: { B1: { en: "You can download the application directly from their website.", pt: "Você pode baixar o aplicativo diretamente do site deles." } } },
    { english: "Password", portuguese: "Senha", levels: { B1: { en: "Make sure you choose a strong password for your email account.", pt: "Certifique-se de escolher uma senha forte para sua conta de e-mail." } } },
    { english: "Delete", portuguese: "Apagar / Deletar", levels: { B1: { en: "I accidentally deleted all the important photos from my phone.", pt: "Eu apaguei acidentalmente todas as fotos importantes do meu telefone." } } },
    { english: "Folder", portuguese: "Pasta (computador)", levels: { B1: { en: "I organized all the project files into a single folder.", pt: "Eu organizei todos os arquivos do projeto em uma única pasta." } } },
    { english: "Screen", portuguese: "Tela", levels: { B1: { en: "She dropped her phone and cracked the screen completely.", pt: "Ela derrubou o telefone e rachou a tela completamente." } } },
    { english: "Keyboard", portuguese: "Teclado", levels: { B1: { en: "He spilled coffee on his laptop keyboard this morning.", pt: "Ele derramou café no teclado do laptop esta manhã." } } },
    { english: "Update", portuguese: "Atualizar", levels: { B1: { en: "Your computer will restart automatically after it updates.", pt: "Seu computador irá reiniciar automaticamente após atualizar." } } },
    { english: "Crash", portuguese: "Travar (sistema)", levels: { B1: { en: "The system tends to crash if you open too many programs.", pt: "O sistema tende a travar se você abrir programas demais." } } }
  ],
  "redes-sociais": [
    { english: "Follower", portuguese: "Seguidor", levels: { B1: { en: "She gained thousands of followers after her video went viral.", pt: "Ela ganhou milhares de seguidores depois que o vídeo dela viralizou." } } },
    { english: "Share", portuguese: "Compartilhar", levels: { B1: { en: "Please share this important message with your friends.", pt: "Por favor, compartilhe esta mensagem importante com seus amigos." } } },
    { english: "Viral", portuguese: "Viral", levels: { B1: { en: "It is very hard to predict which videos will go viral.", pt: "É muito difícil prever quais vídeos vão se tornar virais." } } },
    { english: "Upload", portuguese: "Fazer upload / Enviar", levels: { B1: { en: "It took ten minutes to upload the heavy video file.", pt: "Levou dez minutos para fazer o upload do arquivo de vídeo pesado." } } },
    { english: "Tag", portuguese: "Marcar (alguém)", levels: { B1: { en: "Don't forget to tag me in the photos from the party.", pt: "Não se esqueça de me marcar nas fotos da festa." } } },
    { english: "Post", portuguese: "Postar / Publicar", levels: { B1: { en: "He usually posts an update about his travels every week.", pt: "Ele geralmente posta uma atualização sobre suas viagens toda semana." } } },
    { english: "Settings", portuguese: "Configurações", levels: { B1: { en: "You can change your privacy preferences in the settings menu.", pt: "Você pode alterar suas preferências de privacidade no menu de configurações." } } },
    { english: "Profile", portuguese: "Perfil", levels: { B1: { en: "He updated his professional profile to look for a new job.", pt: "Ele atualizou seu perfil profissional para procurar um emprego novo." } } }
  ]
};

function cleanAndInject(filePath, vocabDict) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove ALL items that have ONLY B1 in levels.
  // This removes any { english: "...", portuguese: "...", levels: { B1: { ... } } } block, possibly followed by a comma
  const removeRegex = /\{\s*english:\s*["'][^"']+["']\s*,\s*portuguese:\s*["'][^"']+["']\s*,\s*levels:\s*\{\s*B1:\s*\{[^}]+\}\s*\}\s*\},?\s*/g;
  
  let beforeLen = content.length;
  content = content.replace(removeRegex, '');
  console.log(`Removed ${beforeLen - content.length} chars of old B1 items from ${filePath}`);

  // 2. Inject the new items
  for (const [scenarioId, words] of Object.entries(vocabDict)) {
    const vocabEndRegex = new RegExp(`(id:\\s*["']${scenarioId}["'][\\s\\S]*?vocabulary:\\s*\\[[\\s\\S]*?)(?=\\s*],\\s*(?:flashcards|quiz|dialogue|trueOrFalse|speakingPractice|usefulExpressions))`);
    
    content = content.replace(vocabEndRegex, (match, prefix) => {
      let b1String = '';
      for (const item of words) {
        b1String += `,\n      { english: "${item.english}", portuguese: "${item.portuguese}",\n          levels: { \n                        B1: { en: "${item.levels.B1.en}", pt: "${item.levels.B1.pt}" } \n                      }\n    }`;
      }
      return prefix + b1String;
    });
  }

  // 3. Clean up any trailing commas that might have been left or created
  content = content.replace(/\},\,/g, '},');
  content = content.replace(/,\s*\]/g, ']'); // Remove comma right before ] if we accidentally removed the last item and left a comma before it.

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Injected new B1 items into ${filePath}`);
}

cleanAndInject('data/scenarios1.ts', b1NewVocabS1);
cleanAndInject('data/scenarios2.ts', b1NewVocabS2);
