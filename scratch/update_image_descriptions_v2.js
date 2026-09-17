const fs = require('fs');
const path = require('path');

const scenariosData = {
  "familia": `
                    { english: "A happy family together", portuguese: "Uma família feliz junta" },
                    { english: "Parents and their children", portuguese: "Pais e seus filhos" },
                    { english: "They are smiling and hugging", portuguese: "Eles estão sorrindo e se abraçando" },
                    { english: "Spending quality time", portuguese: "Passando tempo de qualidade" },
                    { english: "Mother, Father, Brother, Sister", portuguese: "Mãe, Pai, Irmão, Irmã" }`,
  "amigos": `
                    { english: "A group of close friends", portuguese: "Um grupo de amigos próximos" },
                    { english: "They are laughing out loud", portuguese: "Eles estão rindo alto" },
                    { english: "Having fun together", portuguese: "Se divertindo juntos" },
                    { english: "Hanging out on the weekend", portuguese: "Saindo no fim de semana" },
                    { english: "True friendship", portuguese: "Amizade verdadeira" }`,
  "corpo": `
                    { english: "Human body parts", portuguese: "Partes do corpo humano" },
                    { english: "Head, shoulders, knees and toes", portuguese: "Cabeça, ombros, joelhos e dedos dos pés" },
                    { english: "Stretching the arms and legs", portuguese: "Alongando os braços e as pernas" },
                    { english: "A healthy human body", portuguese: "Um corpo humano saudável" },
                    { english: "Taking care of your health", portuguese: "Cuidando da sua saúde" }`,
  "casa": `
                    { english: "A cozy living room", portuguese: "Uma sala de estar aconchegante" },
                    { english: "Sitting on a comfortable sofa", portuguese: "Sentado em um sofá confortável" },
                    { english: "Watching TV with family", portuguese: "Assistindo TV com a família" },
                    { english: "A beautiful house interior", portuguese: "O interior de uma casa bonita" },
                    { english: "Relaxing at home", portuguese: "Relaxando em casa" }`,
  "casa2": `
                    { english: "A clean and modern kitchen", portuguese: "Uma cozinha limpa e moderna" },
                    { english: "Preparing dinner on the stove", portuguese: "Preparando o jantar no fogão" },
                    { english: "Opening the refrigerator", portuguese: "Abrindo a geladeira" },
                    { english: "Eating at the dining table", portuguese: "Comendo na mesa de jantar" },
                    { english: "Washing dishes in the sink", portuguese: "Lavando a louça na pia" }`,
  "hobbies": `
                    { english: "Playing a musical instrument", portuguese: "Tocando um instrumento musical" },
                    { english: "Reading an interesting book", portuguese: "Lendo um livro interessante" },
                    { english: "Painting a beautiful picture", portuguese: "Pintando um quadro bonito" },
                    { english: "Enjoying free time activities", portuguese: "Aproveitando atividades de tempo livre" },
                    { english: "Doing what you love", portuguese: "Fazendo o que você ama" }`,
  "esportes": `
                    { english: "Playing soccer on the field", portuguese: "Jogando futebol no campo" },
                    { english: "Running fast to win the race", portuguese: "Correndo rápido para vencer a corrida" },
                    { english: "Swimming in the pool", portuguese: "Nadando na piscina" },
                    { english: "Exercising at the gym", portuguese: "Se exercitando na academia" },
                    { english: "Teamwork and dedication", portuguese: "Trabalho em equipe e dedicação" }`,
  "supermercado": `
                    { english: "Pushing a shopping cart", portuguese: "Empurrando um carrinho de compras" },
                    { english: "Buying fresh fruits and vegetables", portuguese: "Comprando frutas e vegetais frescos" },
                    { english: "Paying at the cashier", portuguese: "Pagando no caixa" },
                    { english: "Checking the price tags", portuguese: "Verificando as etiquetas de preço" },
                    { english: "Aisles full of groceries", portuguese: "Corredores cheios de mantimentos" }`,
  "compras": `
                    { english: "Trying on new clothes", portuguese: "Experimentando roupas novas" },
                    { english: "Carrying shopping bags", portuguese: "Carregando sacolas de compras" },
                    { english: "Looking for a discount", portuguese: "Procurando por um desconto" },
                    { english: "Paying with a credit card", portuguese: "Pagando com cartão de crédito" },
                    { english: "Shopping at the mall", portuguese: "Fazendo compras no shopping" }`,
  "profissoes": `
                    { english: "Working hard at the office", portuguese: "Trabalhando duro no escritório" },
                    { english: "A doctor helping a patient", portuguese: "Um médico ajudando um paciente" },
                    { english: "A teacher writing on the board", portuguese: "Um professor escrevendo no quadro" },
                    { english: "Having a business meeting", portuguese: "Tendo uma reunião de negócios" },
                    { english: "Professional career", portuguese: "Carreira profissional" }`,
  "lugares": `
                    { english: "Walking around the city center", portuguese: "Caminhando pelo centro da cidade" },
                    { english: "Waiting at the bus stop", portuguese: "Esperando no ponto de ônibus" },
                    { english: "Drinking coffee at the cafe", portuguese: "Bebendo café na cafeteria" },
                    { english: "Reading books at the library", portuguese: "Lendo livros na biblioteca" },
                    { english: "A busy street in the downtown", portuguese: "Uma rua movimentada no centro" }`,
  "animais": `
                    { english: "A cute dog playing fetch", portuguese: "Um cachorro fofo brincando de buscar" },
                    { english: "A cat sleeping on the sofa", portuguese: "Um gato dormindo no sofá" },
                    { english: "Feeding the pet birds", portuguese: "Alimentando os pássaros de estimação" },
                    { english: "Walking the dog in the park", portuguese: "Passeando com o cachorro no parque" },
                    { english: "Animals in nature", portuguese: "Animais na natureza" }`,
  "culinaria": `
                    { english: "Cooking a delicious meal", portuguese: "Cozinhando uma refeição deliciosa" },
                    { english: "Baking a cake in the oven", portuguese: "Assando um bolo no forno" },
                    { english: "Chopping vegetables with a knife", portuguese: "Cortando vegetais com uma faca" },
                    { english: "Following a recipe book", portuguese: "Seguindo um livro de receitas" },
                    { english: "Serving food to guests", portuguese: "Servindo comida para os convidados" }`,
  "tecnologia": `
                    { english: "Typing on the laptop keyboard", portuguese: "Digitando no teclado do notebook" },
                    { english: "Scrolling through the smartphone", portuguese: "Rolando a tela do smartphone" },
                    { english: "Wearing virtual reality glasses", portuguese: "Usando óculos de realidade virtual" },
                    { english: "Connecting to the internet", portuguese: "Conectando-se à internet" },
                    { english: "Modern technology devices", portuguese: "Dispositivos de tecnologia moderna" }`,
  "redes-sociais": `
                    { english: "Taking a selfie for Instagram", portuguese: "Tirando uma selfie para o Instagram" },
                    { english: "Liking and sharing a post", portuguese: "Curtindo e compartilhando uma postagem" },
                    { english: "Sending a text message", portuguese: "Enviando uma mensagem de texto" },
                    { english: "Chatting with online friends", portuguese: "Conversando com amigos online" },
                    { english: "Recording a viral video", portuguese: "Gravando um vídeo viral" }`
};

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Encontra cada bloco de cenário
  const regex = /id:\s*"([^"]+)"([\s\S]*?imageDescription:\s*\{[\s\S]*?keywords:\s*\[)([\s\S]*?)(\]\s*\})/g;
  
  const newContent = content.replace(regex, (match, id, prefix, oldKeywords, suffix) => {
    if (scenariosData[id]) {
      console.log("Updating keywords for scenario: " + id);
      return "id: \"" + id + "\"" + prefix + scenariosData[id] + "\n                  " + suffix;
    }
    return match;
  });
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
}

updateFile(path.join(__dirname, '../data/scenarios1.ts'));
updateFile(path.join(__dirname, '../data/scenarios2.ts'));

console.log("Updated all scenarios!");
