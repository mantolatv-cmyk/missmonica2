const fs = require('fs');

let content1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');

// Replace in familia
content1 = content1.replace(
  `translation: "Descreva as qualidades de um bom 'parceiro' (partner) ou 'cônjuge' (spouse)."`,
  `translation: "Você se dá bem com sua 'sogra' (mother-in-law) ou 'sogro' (father-in-law)?"`
).replace(
  `question: "Describe the qualities of a good 'partner' or 'spouse'."`,
  `question: "Do you get along with your 'mother-in-law' or 'father-in-law'?"`
).replace(
  `translation: "Você conhece algum 'gêmeo(a)' (twin)? O que é especial em ser 'gêmeo'?"`,
  `translation: "Como é o relacionamento com uma 'madrasta' (stepmother) ou 'padrasto' (stepfather)?"`
).replace(
  `question: "Do you know any 'twins'? What is special about being a 'twin'?"`,
  `question: "How is the relationship with a 'stepmother' or 'stepfather'?"`
);

// Replace in amigos
content1 = content1.replace(
  `question: "Have you ever had to 'apologize' for a big mistake?"`,
  `question: "Are you and your best friend a good 'match'?"`
).replace(
  `translation: "Você já teve que se 'desculpar' (apologize) por um grande erro?"`,
  `translation: "Você e seu melhor amigo(a) são uma boa 'combinação' (match)?"`
);

// Replace in corpo
content1 = content1.replace(
  `question: "Have you ever 'fractured' a bone?"`,
  `question: "When did you last visit the 'dentist' to check your teeth?"`
).replace(
  `translation: "Você já 'fraturou' (fractured) um osso?"`,
  `translation: "Quando foi a última vez que você visitou o 'dentista' (dentist) para checar seus dentes?"`
).replace(
  `question: "What do you do when your 'throat' is sore?"`,
  `question: "Do you 'breathe' deeply when you are stressed?"`
).replace(
  `translation: "O que você faz quando sua 'garganta' (throat) está inflamada?"`,
  `translation: "Você 'respira' (breathe) profundamente quando está estressado(a)?"`
);

// Replace in casa
content1 = content1.replace(
  `question: "Have you ever 'decorated' a room by yourself?"`,
  `question: "Have you ever wanted a master 'suite' in your house?"`
).replace(
  `translation: "Você já 'decorou' (decorated) um cômodo sozinho(a)?"`,
  `translation: "Você já quis uma 'suíte' (suite) master na sua casa?"`
).replace(
  `question: "What is the best way to 'clean' the windows?"`,
  `question: "How do you 'arrange' the books on your 'bookshelf'?"`
).replace(
  `translation: "Qual é a melhor maneira de 'limpar' (clean) as janelas?"`,
  `translation: "Como você 'organiza' (arrange) os livros na sua 'estante' (bookshelf)?"`
);

// Replace in casa2
content1 = content1.replace(
  `question: "Have you ever 'renovated' a part of your house?"`,
  `question: "Have you ever hosted a 'banquet' at home?"`
).replace(
  `translation: "Você já 'reformou' (renovated) uma parte da sua casa?"`,
  `translation: "Você já deu um 'banquete' (banquet) em casa?"`
).replace(
  `question: "Do you prefer a 'sofa' or an 'armchair' for reading?"`,
  `question: "Do you use a 'lamp' for reading at night?"`
).replace(
  `translation: "Você prefere um 'sofá' (sofa) ou uma 'poltrona' (armchair) para ler?"`,
  `translation: "Você usa uma 'lâmpada' (lamp) para ler à noite?"`
);

fs.writeFileSync('../data/scenarios1.ts', content1);

let content2 = fs.readFileSync('../data/scenarios2.ts', 'utf8');

// Replace in compras
content2 = content2.replace(
  `question: "Have you ever found a great 'bargain'? Where?"`,
  `question: "Do you usually pay with 'coins' or card?"`
).replace(
  `translation: "Você já encontrou uma boa 'pechincha' (bargain)? Onde?"`,
  `translation: "Você costuma pagar com 'moedas' (coins) ou cartão?"`
).replace(
  `question: "Do you own anything made of 'leather'?"`,
  `question: "Do you check your 'reflection' in every mirror you pass?"`
).replace(
  `translation: "Você tem algo feito de 'couro' (leather)?"`,
  `translation: "Você checa seu 'reflexo' (reflection) em cada espelho que passa?"`
);

// Replace in profissoes
content2 = content2.replace(
  `question: "Have you ever 'interviewed' someone for a job?"`,
  `question: "Have you ever worked 'overseas'?"`
).replace(
  `translation: "Você já 'entrevistou' (interviewed) alguém para um emprego?"`,
  `translation: "Você já trabalhou no 'exterior' (overseas)?"`
).replace(
  `question: "Do you prefer to 'manage' people or work independently?"`,
  `question: "What is the most important 'ingredient' for success?"`
).replace(
  `translation: "Você prefere 'gerenciar' (manage) pessoas ou trabalhar de forma independente?"`,
  `translation: "Qual é o 'ingrediente' (ingredient) mais importante para o sucesso?"`
);

// Replace in lugares
content2 = content2.replace(
  `question: "Have you ever 'explored' a new city without a map?"`,
  `question: "Have you ever walked 'miles' 'around' the city?"`
).replace(
  `translation: "Você já 'explorou' (explored) uma cidade nova sem um mapa?"`,
  `translation: "Você já andou 'milhas' (miles) 'ao redor' (around) da cidade?"`
).replace(
  `question: "What 'exhibition' would you like to visit next?"`,
  `question: "Do you 'ignore' the noise on a 'flight' if it happens 'precisely' on time?"`
).replace(
  `translation: "Que 'exposição' (exhibition) você gostaria de visitar em seguida?"`,
  `translation: "Você 'ignora' (ignore) o barulho num 'voo' (flight) se acontecer 'precisamente' (precisely) no horário?"`
);

// Replace in animais
content2 = content2.replace(
  `question: "Have you ever 'adopted' an animal from a 'shelter'?"`,
  `question: "Have you visited an 'aquarium' 'since' last year?"`
).replace(
  `translation: "Você já 'adotou' (adopted) um animal de um 'abrigo' (shelter)?"`,
  `translation: "Você visitou um 'aquário' (aquarium) 'desde' (since) o ano passado?"`
).replace(
  `question: "Have you ever seen a tiger's 'stripes' up close?"`,
  `question: "Does the 'mailman' give a 'carrot' to your dog 'softly'?"`
).replace(
  `translation: "Você já viu as 'listras' (stripes) de um tigre de perto?"`,
  `translation: "O 'carteiro' (mailman) dá uma 'cenoura' (carrot) para seu cachorro 'suavemente' (softly)?"`
).replace(
  `question: "Have you ever 'rescued' an animal in danger?"`,
  `question: "What is the 'timeline' for dog training?"`
).replace(
  `translation: "Você já 'resgatou' (rescued) um animal em perigo?"`,
  `translation: "Qual é a 'linha do tempo' (timeline) para treinamento de cães?"`
);

// Replace in culinaria
content2 = content2.replace(
  `question: "Do you 'prefer' spicy or mild 'flavor'?"`,
  `question: "Do you follow a 'recipe' exactly when 'baking' a 'dish'?"`
).replace(
  `translation: "Você 'prefere' (prefer) 'sabor' (flavor) apimentado ou suave?"`,
  `translation: "Você segue uma 'receita' (recipe) exatamente ao 'assar' (baking) um 'prato' (dish)?"`
).replace(
  `question: "Have you ever 'burnt' your food while cooking?"`,
  `question: "Is food an important part of your 'culture'?"`
).replace(
  `translation: "Você já 'queimou' (burnt) sua comida enquanto cozinhava?"`,
  `translation: "A comida é uma parte importante da sua 'cultura' (culture)?"`
).replace(
  `question: "What 'ingredients' do you usually add to your 'stew'?"`,
  `question: "Do you 'slightly' chop a 'tiny' amount of garlic?"`
).replace(
  `translation: "Quais 'ingredientes' (ingredients) você geralmente adiciona ao seu 'ensopado' (stew)?"`,
  `translation: "Você pica 'levemente' (slightly) uma 'minúscula' (tiny) quantidade de alho?"`
);

// Replace in tecnologia
content2 = content2.replace(
  `question: "Have you ever 'upgraded' your computer's 'software'?"`,
  `question: "Have you ever had to 'trap' a virus on your 'mobile'?"`
).replace(
  `translation: "Você já 'atualizou' (upgraded) o 'software' do seu computador?"`,
  `translation: "Você já teve que 'prender' (trap) um vírus no seu 'celular' (mobile)?"`
).replace(
  `question: "How do you 'protect' your data from 'hackers'?"`,
  `question: "Did you ever 'misplace' your device?"`
).replace(
  `translation: "Como você 'protege' (protect) seus dados de 'hackers'?"`,
  `translation: "Você já 'perdeu' (misplace) o seu dispositivo?"`
);

// Replace in redes-sociais
content2 = content2.replace(
  `question: "Have you ever 'blocked' someone on social media?"`,
  `question: "Do you 'mindlessly' 'divide' your 'timeline' with 'inspiring' posts?"`
).replace(
  `translation: "Você já 'bloqueou' (blocked) alguém nas redes sociais?"`,
  `translation: "Você 'distraidamente' (mindlessly) 'divide' (divide) sua 'linha do tempo' (timeline) com posts 'inspiradores' (inspiring)?"`
).replace(
  `question: "Do you 'comment' often on other people's 'posts'?"`,
  `question: "Have you posted anything 'embarrassing' that went viral 'overnight'?"`
).replace(
  `translation: "Você 'comenta' (comment) frequentemente nas 'postagens' (posts) de outras pessoas?"`,
  `translation: "Você já postou algo 'embaraçoso' (embarrassing) que viralizou da 'noite para o dia' (overnight)?"`
);

fs.writeFileSync('../data/scenarios2.ts', content2);
console.log('Replacements done');
