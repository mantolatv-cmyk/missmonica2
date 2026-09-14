const fs = require('fs');

const b1Replacements = {
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
console.log(`Updated scenarios 13-15.`);
