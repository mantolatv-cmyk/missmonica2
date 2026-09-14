const fs = require('fs');

const data1 = {
  "culinaria": {
    tf_a1_p1: [
      { statement: "You use a knife to cut food.", statementPt: "Você usa uma faca para cortar comida.", isTrue: true, explanation: "Knife is faca." },
      { statement: "You cook eggs in the bathroom.", statementPt: "Você cozinha ovos no banheiro.", isTrue: false, explanation: "You cook in the kitchen." },
      { statement: "You need ingredients to make a recipe.", statementPt: "Você precisa de ingredientes para fazer uma receita.", isTrue: true, explanation: "Ingredients is ingredientes." },
      { statement: "You chop vegetables with a spoon.", statementPt: "Você pica vegetais com uma colher.", isTrue: false, explanation: "You chop with a knife." },
      { statement: "You boil water to make pasta.", statementPt: "Você ferve água para fazer macarrão.", isTrue: true, explanation: "Boil is ferver." },
      { statement: "You bake a cake in the oven.", statementPt: "Você assa um bolo no forno.", isTrue: true, explanation: "Bake is assar, oven is forno." }
    ],
    sp_a1_p1: [
      { question: "Do you like to cook?", translation: "Você gosta de cozinhar?" },
      { question: "What ingredients do you need for a cake?", translation: "Quais ingredientes você precisa para um bolo?" },
      { question: "Do you know how to boil an egg?", translation: "Você sabe como ferver um ovo?" }
    ],
    tf_a1_p2: [
      { statement: "You eat soup with a fork.", statementPt: "Você come sopa com um garfo.", isTrue: false, explanation: "You use a spoon." },
      { statement: "You put food on a plate.", statementPt: "Você coloca comida em um prato.", isTrue: true, explanation: "Plate is prato." },
      { statement: "You mix the salad in a bowl.", statementPt: "Você mistura a salada em uma tigela.", isTrue: true, explanation: "Bowl is tigela, mix is misturar." },
      { statement: "Water is sweet.", statementPt: "Água é doce.", isTrue: false, explanation: "Water has no taste." },
      { statement: "You pour juice into a glass.", statementPt: "Você despeja suco em um copo.", isTrue: true, explanation: "Pour is despejar." },
      { statement: "You cook meat in a pan.", statementPt: "Você cozinha carne em uma frigideira.", isTrue: true, explanation: "Pan is frigideira." }
    ],
    sp_a1_p2: [
      { question: "Do you use a fork or a spoon?", translation: "Você usa um garfo ou uma colher?" },
      { question: "Is the food spicy or sweet?", translation: "A comida é apimentada ou doce?" },
      { question: "Can you mix the salad in the bowl?", translation: "Você pode misturar a salada na tigela?" }
    ],
    tf_b1_p1: [
      { statement: "Following a complex recipe requires precise measurements of ingredients.", statementPt: "Seguir uma receita complexa requer medidas precisas de ingredientes.", isTrue: true, explanation: "Recipe is receita, ingredients are ingredientes." },
      { statement: "Chopping onions can inadvertently cause your eyes to tear up.", statementPt: "Picar cebolas pode inadvertidamente fazer seus olhos lacrimejarem.", isTrue: true, explanation: "Chop is picar." },
      { statement: "You bake bread by placing it directly on the stove top.", statementPt: "Você assa pão colocando-o diretamente na parte superior do fogão.", isTrue: false, explanation: "You bake in an oven." },
      { statement: "Boiling potatoes is the first step in making creamy mashed potatoes.", statementPt: "Ferver batatas é o primeiro passo para fazer um purê de batatas cremoso.", isTrue: true, explanation: "Boil is ferver." },
      { statement: "A sharp knife is a dangerous but essential tool for a professional chef.", statementPt: "Uma faca afiada é uma ferramenta perigosa, mas essencial para um chef profissional.", isTrue: true, explanation: "Knife is faca." },
      { statement: "Frying food continuously is the healthiest way to prepare daily meals.", statementPt: "Fritar comida continuamente é a maneira mais saudável de preparar refeições diárias.", isTrue: false, explanation: "Fry is fritar, it is generally not the healthiest." }
    ],
    sp_b1_p1: [
      { question: "How does a chef decide which ingredients to use in a signature dish?", translation: "Como um chef decide quais ingredientes usar em um prato exclusivo?" },
      { question: "What is the most difficult recipe you have ever tried to bake?", translation: "Qual foi a receita mais difícil que você já tentou assar?" },
      { question: "Why is it important to chop vegetables uniformly before cooking them?", translation: "Por que é importante picar vegetais uniformemente antes de cozinhá-los?" }
    ],
    tf_b1_p2: [
      { statement: "You should carefully mix the batter in a large bowl to avoid lumps.", statementPt: "Você deve misturar cuidadosamente a massa em uma tigela grande para evitar caroços.", isTrue: true, explanation: "Mix is misturar, bowl is tigela." },
      { statement: "Pouring hot coffee too quickly can lead to severe burns.", statementPt: "Despejar café quente rápido demais pode causar queimaduras graves.", isTrue: true, explanation: "Pour is despejar." },
      { statement: "A non-stick pan is perfect for cooking delicate fish without tearing it.", statementPt: "Uma frigideira antiaderente é perfeita para cozinhar peixes delicados sem rasgá-los.", isTrue: true, explanation: "Pan is frigideira." },
      { statement: "Spicy food usually contains high amounts of sugar and honey.", statementPt: "Comida apimentada geralmente contém grandes quantidades de açúcar e mel.", isTrue: false, explanation: "Spicy is apimentado, not sweet." },
      { statement: "Tasting the sauce periodically ensures the final flavor is well-balanced.", statementPt: "Provar o molho periodicamente garante que o sabor final fique bem equilibrado.", isTrue: true, explanation: "Taste is provar." },
      { statement: "A fork is typically utilized to consume liquid broths.", statementPt: "Um garfo é tipicamente utilizado para consumir caldos líquidos.", isTrue: false, explanation: "Fork is garfo, you use a spoon for broths." }
    ],
    sp_b1_p2: [
      { question: "Do you prefer a sweet dessert or a savory, salty snack?", translation: "Você prefere uma sobremesa doce ou um lanche salgado?" },
      { question: "What is the secret to mixing ingredients perfectly without making a mess?", translation: "Qual é o segredo para misturar os ingredientes perfeitamente sem fazer bagunça?" },
      { question: "How do you ensure the meat is thoroughly cooked in a frying pan?", translation: "Como você garante que a carne esteja totalmente cozida numa frigideira?" }
    ]
  },
  "tecnologia": {
    tf_a1_p1: [
      { statement: "You use a keyboard to type.", statementPt: "Você usa um teclado para digitar.", isTrue: true, explanation: "Keyboard is teclado." },
      { statement: "You look at the screen to watch a video.", statementPt: "Você olha para a tela para assistir a um vídeo.", isTrue: true, explanation: "Screen is tela." },
      { statement: "You connect a charger to turn off the phone.", statementPt: "Você conecta um carregador para desligar o telefone.", isTrue: false, explanation: "Charger gives battery." },
      { statement: "You use a mouse to play soccer.", statementPt: "Você usa um mouse para jogar futebol.", isTrue: false, explanation: "Mouse is for the computer." },
      { statement: "You download an app on your smartphone.", statementPt: "Você baixa um aplicativo no seu smartphone.", isTrue: true, explanation: "Download means baixar." },
      { statement: "A password protects your phone.", statementPt: "Uma senha protege o seu telefone.", isTrue: true, explanation: "Password is senha." }
    ],
    sp_a1_p1: [
      { question: "Do you know your email password?", translation: "Você sabe a senha do seu email?" },
      { question: "What app do you use every day?", translation: "Qual aplicativo você usa todo dia?" },
      { question: "Is the charger connected to the laptop?", translation: "O carregador está conectado ao laptop?" }
    ],
    tf_a1_p2: [
      { statement: "You write an email to send a message.", statementPt: "Você escreve um email para enviar uma mensagem.", isTrue: true, explanation: "Email is correio eletrônico." },
      { statement: "You click a link to open a website.", statementPt: "Você clica em um link para abrir um site.", isTrue: true, explanation: "Link connects to a website." },
      { statement: "A battery needs a charger when it is low.", statementPt: "Uma bateria precisa de um carregador quando está baixa.", isTrue: true, explanation: "Battery is bateria." },
      { statement: "You delete files you want to keep forever.", statementPt: "Você apaga arquivos que você quer guardar para sempre.", isTrue: false, explanation: "Delete means apagar." },
      { statement: "You wear headphones to listen to music privately.", statementPt: "Você usa fones de ouvido para ouvir música em particular.", isTrue: true, explanation: "Headphones are fones de ouvido." },
      { statement: "You upload a photo to show it online.", statementPt: "Você faz o upload de uma foto para mostrá-la online.", isTrue: true, explanation: "Upload is enviar para a internet." }
    ],
    sp_a1_p2: [
      { question: "Do you have headphones?", translation: "Você tem fones de ouvido?" },
      { question: "Did you save or delete the photo?", translation: "Você salvou ou apagou a foto?" },
      { question: "Do you use a battery charger?", translation: "Você usa um carregador de bateria?" }
    ],
    tf_b1_p1: [
      { statement: "A secure password should contain numbers, symbols, and uppercase letters.", statementPt: "Uma senha segura deve conter números, símbolos e letras maiúsculas.", isTrue: true, explanation: "Password is senha." },
      { statement: "Downloading unverified software from the internet can expose your laptop to viruses.", statementPt: "Baixar software não verificado da internet pode expor seu laptop a vírus.", isTrue: true, explanation: "Download is baixar, internet is internet." },
      { statement: "A high-resolution screen is highly beneficial for graphic designers.", statementPt: "Uma tela de alta resolução é altamente benéfica para designers gráficos.", isTrue: true, explanation: "Screen is tela." },
      { statement: "An outdated app will never require a software update.", statementPt: "Um aplicativo desatualizado nunca exigirá uma atualização de software.", isTrue: false, explanation: "App is aplicativo, it usually requires updates." },
      { statement: "You use a mouse exclusively to speak with digital assistants.", statementPt: "Você usa um mouse exclusivamente para falar com assistentes digitais.", isTrue: false, explanation: "Mouse is used for navigation/clicking." },
      { statement: "A faulty charger can severely damage your smartphone's internal components.", statementPt: "Um carregador defeituoso pode danificar severamente os componentes internos do seu smartphone.", isTrue: true, explanation: "Charger is carregador." }
    ],
    sp_b1_p1: [
      { question: "How crucial is it to establish a strong password for your online banking?", translation: "Quão crucial é estabelecer uma senha forte para o seu banco online?" },
      { question: "What features do you prioritize when purchasing a new smartphone or laptop?", translation: "Quais recursos você prioriza ao comprar um novo smartphone ou laptop?" },
      { question: "Have you ever accidentally downloaded a malicious app from the internet?", translation: "Você já baixou acidentalmente um aplicativo malicioso da internet?" }
    ],
    tf_b1_p2: [
      { statement: "Uploading high-quality videos to a website requires a stable internet connection.", statementPt: "Fazer o upload de vídeos de alta qualidade para um site requer uma conexão de internet estável.", isTrue: true, explanation: "Upload is enviar, website is site." },
      { statement: "Consistently ignoring low battery warnings will eventually ruin the device.", statementPt: "Ignorar consistentemente os avisos de bateria fraca acabará arruinando o dispositivo.", isTrue: true, explanation: "Battery is bateria." },
      { statement: "You delete an important folder if you wish to archive it securely.", statementPt: "Você exclui uma pasta importante se desejar arquivá-la com segurança.", isTrue: false, explanation: "Delete means excluir (apagar)." },
      { statement: "Clicking on a suspicious link in an email is a common cybersecurity risk.", statementPt: "Clicar em um link suspeito num email é um risco comum de segurança cibernética.", isTrue: true, explanation: "Link is link, email is correio eletrônico." },
      { statement: "Noise-canceling headphones are perfect for maintaining focus in a noisy office.", statementPt: "Fones de ouvido com cancelamento de ruído são perfeitos para manter o foco num escritório barulhento.", isTrue: true, explanation: "Headphones are fones de ouvido." },
      { statement: "To plug in a device means to disconnect it from the power source.", statementPt: "Conectar (plug in) um dispositivo significa desconectá-lo da fonte de energia.", isTrue: false, explanation: "Plug in means to connect it." }
    ],
    sp_b1_p2: [
      { question: "How do you identify a fraudulent email or a dangerous link?", translation: "Como você identifica um email fraudulento ou um link perigoso?" },
      { question: "Why is it fundamental to save your documents in a backed-up folder?", translation: "Por que é fundamental salvar seus documentos em uma pasta com backup?" },
      { question: "Do you believe wireless headphones are superior to traditional wired ones?", translation: "Você acredita que fones de ouvido sem fio são superiores aos tradicionais com fio?" }
    ]
  },
  "redes-sociais": {
    tf_a1_p1: [
      { statement: "A follower sees your photos.", statementPt: "Um seguidor vê suas fotos.", isTrue: true, explanation: "Follower is seguidor." },
      { statement: "You scroll to break your phone.", statementPt: "Você rola a tela para quebrar o seu telefone.", isTrue: false, explanation: "Scroll is to view content." },
      { statement: "You leave a comment when you want to say something.", statementPt: "Você deixa um comentário quando quer dizer algo.", isTrue: true, explanation: "Comment is comentário." },
      { statement: "A hashtag makes it hard to find a post.", statementPt: "Uma hashtag torna difícil encontrar uma publicação.", isTrue: false, explanation: "A hashtag makes it easier." },
      { statement: "You send a message to talk privately.", statementPt: "Você envia uma mensagem para falar em particular.", isTrue: true, explanation: "Message is mensagem." },
      { statement: "You like a post when you enjoy it.", statementPt: "Você curte uma postagem quando gosta dela.", isTrue: true, explanation: "Like is curtir." }
    ],
    sp_a1_p1: [
      { question: "How many followers do you have?", translation: "Quantos seguidores você tem?" },
      { question: "Do you always read the comments?", translation: "Você sempre lê os comentários?" },
      { question: "Do you send a lot of messages?", translation: "Você envia muitas mensagens?" }
    ],
    tf_a1_p2: [
      { statement: "A viral video has millions of views.", statementPt: "Um vídeo viral tem milhões de visualizações.", isTrue: true, explanation: "Viral means very popular." },
      { statement: "You tag a friend in a photo.", statementPt: "Você marca um amigo numa foto.", isTrue: true, explanation: "Tag is marcar." },
      { statement: "A story stays on your profile forever.", statementPt: "Um story fica no seu perfil para sempre.", isTrue: false, explanation: "A story disappears after 24 hours." },
      { statement: "You look at your feed to see new posts.", statementPt: "Você olha o seu feed para ver novas publicações.", isTrue: true, explanation: "Feed is the timeline." },
      { statement: "An influencer has no followers.", statementPt: "Um influenciador não tem seguidores.", isTrue: false, explanation: "Influencer has many followers." },
      { statement: "You block someone if they are mean.", statementPt: "Você bloqueia alguém se eles forem rudes.", isTrue: true, explanation: "Block is bloquear." }
    ],
    sp_a1_p2: [
      { question: "Do you check your feed every day?", translation: "Você verifica o seu feed todo dia?" },
      { question: "Did you ever make a viral video?", translation: "Você já fez um vídeo viral?" },
      { question: "Do you tag your friends in your story?", translation: "Você marca os seus amigos no seu story?" }
    ],
    tf_b1_p1: [
      { statement: "Interacting consistently with your followers boosts your online engagement.", statementPt: "Interagir consistentemente com seus seguidores aumenta seu engajamento online.", isTrue: true, explanation: "Followers are seguidores." },
      { statement: "Writing an offensive comment can severely damage your professional reputation.", statementPt: "Escrever um comentário ofensivo pode prejudicar severamente a sua reputação profissional.", isTrue: true, explanation: "Comment is comentário." },
      { statement: "You utilize a hashtag to obscure your post from public searches.", statementPt: "Você utiliza uma hashtag para ocultar sua postagem de pesquisas públicas.", isTrue: false, explanation: "Hashtag makes it visible." },
      { statement: "Endlessly scrolling through profiles can negatively impact mental health.", statementPt: "Rolar a tela interminavelmente por perfis pode impactar negativamente a saúde mental.", isTrue: true, explanation: "Scroll is rolar a tela." },
      { statement: "Sharing an informative post is a great way to spread awareness.", statementPt: "Compartilhar uma publicação informativa é uma ótima maneira de espalhar conscientização.", isTrue: true, explanation: "Share is compartilhar, post is postagem." },
      { statement: "A direct message is publicly visible to everyone who visits your profile.", statementPt: "Uma mensagem direta é publicamente visível para todos que visitam seu perfil.", isTrue: false, explanation: "A message is private." }
    ],
    sp_b1_p1: [
      { question: "How does the pressure to gain followers affect a teenager's self-esteem?", translation: "Como a pressão para ganhar seguidores afeta a autoestima de um adolescente?" },
      { question: "What are the psychological effects of constantly scrolling through social media?", translation: "Quais são os efeitos psicológicos de rolar constantemente pelas redes sociais?" },
      { question: "Why is it crucial to verify facts before you share a controversial post?", translation: "Por que é crucial verificar os fatos antes de compartilhar uma postagem polêmica?" }
    ],
    tf_b1_p2: [
      { statement: "A successful influencer collaborates with brands to promote exclusive products.", statementPt: "Um influenciador de sucesso colabora com marcas para promover produtos exclusivos.", isTrue: true, explanation: "Influencer is influenciador." },
      { statement: "Creating a viral meme requires understanding current cultural trends and humor.", statementPt: "Criar um meme viral requer entender tendências culturais atuais e humor.", isTrue: true, explanation: "Viral and meme." },
      { statement: "The feed algorithm is designed to hide content you are likely to enjoy.", statementPt: "O algoritmo do feed foi projetado para ocultar conteúdo que você provavelmente irá gostar.", isTrue: false, explanation: "Feed shows content you enjoy." },
      { statement: "You can permanently block a malicious user to protect your account's privacy.", statementPt: "Você pode bloquear permanentemente um usuário malicioso para proteger a privacidade da sua conta.", isTrue: true, explanation: "Block is bloquear, account is conta." },
      { statement: "Tagging unauthorized individuals in a professional story is considered impolite.", statementPt: "Marcar indivíduos não autorizados num story profissional é considerado indelicado.", isTrue: true, explanation: "Tag is marcar, story is story." },
      { statement: "A notification is sent exclusively when someone attempts to delete your account.", statementPt: "Uma notificação é enviada exclusivamente quando alguém tenta excluir a sua conta.", isTrue: false, explanation: "Notifications are for any activity." }
    ],
    sp_b1_p2: [
      { question: "What makes a specific meme or video go completely viral overnight?", translation: "O que faz um meme ou vídeo específico se tornar completamente viral da noite para o dia?" },
      { question: "How do you manage the privacy settings to secure your personal account?", translation: "Como você gerencia as configurações de privacidade para proteger sua conta pessoal?" },
      { question: "Is it ethical for an influencer to promote products they don't actually use?", translation: "É ético para um influenciador promover produtos que eles não usam de fato?" }
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
console.log("Done part 4.");
