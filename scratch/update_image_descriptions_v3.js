const fs = require('fs');
const path = require('path');

const scenariosData = {
  "familia": `
                    { english: "A family sitting together on a blue sofa", portuguese: "Uma família sentada junta em um sofá azul" },
                    { english: "Drinking orange juice and coffee", portuguese: "Bebendo suco de laranja e café" },
                    { english: "Cozy living room with a fireplace", portuguese: "Sala de estar aconchegante com lareira" },
                    { english: "Bookshelves full of books and photos", portuguese: "Estantes cheias de livros e fotos" }`,
  "amigos": `
                    { english: "Six friends having a picnic in the park", portuguese: "Seis amigos fazendo um piquenique no parque" },
                    { english: "Sitting on a checkered picnic blanket", portuguese: "Sentados em uma toalha de piquenique xadrez" },
                    { english: "Eating sandwiches and having fun", portuguese: "Comendo sanduíches e se divertindo" },
                    { english: "Wicker picnic basket on the grass", portuguese: "Cesta de piquenique de vime na grama" }`,
  "corpo": `
                    { english: "People working out at the gym", portuguese: "Pessoas malhando na academia" },
                    { english: "Stretching on yoga mats", portuguese: "Alongando-se em tapetes de yoga" },
                    { english: "A man doing bicep curls with a barbell", portuguese: "Um homem fazendo rosca bíceps com uma barra" },
                    { english: "Strength and balance written on the wall", portuguese: "Força e equilíbrio escrito na parede" }`,
  "casa": `
                    { english: "Cozy rustic living room and kitchen", portuguese: "Sala de estar e cozinha rústicas e aconchegantes" },
                    { english: "Green velvet sofa on a rug", portuguese: "Sofá de veludo verde em um tapete" },
                    { english: "Exposed brick wall in the background", portuguese: "Parede de tijolos expostos ao fundo" },
                    { english: "Wooden dining counter with stools", portuguese: "Balcão de jantar de madeira com banquetas" }`,
  "casa2": `
                    { english: "A sunny balcony overlooking the city", portuguese: "Uma varanda ensolarada com vista para a cidade" },
                    { english: "Potted green plants and pink flowers", portuguese: "Plantas verdes em vasos e flores rosas" },
                    { english: "Small round table with two chairs", portuguese: "Mesa redonda pequena com duas cadeiras" },
                    { english: "Cars parked on the street below", portuguese: "Carros estacionados na rua lá embaixo" }`,
  "hobbies": `
                    { english: "Three people doing hobbies in the living room", portuguese: "Três pessoas fazendo hobbies na sala de estar" },
                    { english: "A woman painting on a canvas", portuguese: "Uma mulher pintando em uma tela" },
                    { english: "A man playing an acoustic guitar", portuguese: "Um homem tocando um violão acústico" },
                    { english: "A woman reading a book on the armchair", portuguese: "Uma mulher lendo um livro na poltrona" }`,
  "esportes": `
                    { english: "A mixed soccer game on a green field", portuguese: "Um jogo de futebol misto em um campo verde" },
                    { english: "A man and a woman competing for the ball", portuguese: "Um homem e uma mulher competindo pela bola" },
                    { english: "Players wearing green and blue jerseys", portuguese: "Jogadores vestindo camisas verdes e azuis" },
                    { english: "Mud flying from their cleats", portuguese: "Lama voando de suas chuteiras" }`,
  "supermercado": `
                    { english: "A woman pushing a shopping cart", portuguese: "Uma mulher empurrando um carrinho de compras" },
                    { english: "Shopping in the produce and organics aisle", portuguese: "Fazendo compras no corredor de hortifrúti e orgânicos" },
                    { english: "Cart filled with fresh tomatoes and lettuce", portuguese: "Carrinho cheio de tomates frescos e alface" },
                    { english: "Looking at the groceries on the shelves", portuguese: "Olhando para os mantimentos nas prateleiras" }`,
  "compras": `
                    { english: "A woman carrying shopping bags in a mall", portuguese: "Uma mulher carregando sacolas de compras em um shopping" },
                    { english: "Looking at clothes on a rack inside a store", portuguese: "Olhando para roupas em uma arara dentro de uma loja" },
                    { english: "Wearing a cream cardigan and jeans", portuguese: "Vestindo um cardigã creme e jeans" },
                    { english: "Bags from famous fashion brands", portuguese: "Sacolas de marcas de moda famosas" }`,
  "profissoes": `
                    { english: "A busy modern office environment", portuguese: "Um ambiente de escritório moderno e movimentado" },
                    { english: "People working at their desks with laptops", portuguese: "Pessoas trabalhando em suas mesas com notebooks" },
                    { english: "Collaborating in a glass meeting room", portuguese: "Colaborando em uma sala de reunião de vidro" },
                    { english: "Large windows showing a city view", portuguese: "Grandes janelas mostrando uma vista da cidade" }`,
  "lugares": `
                    { english: "A bustling public square in a historic city", portuguese: "Uma praça pública movimentada em uma cidade histórica" },
                    { english: "A large stone palace with a clock tower", portuguese: "Um grande palácio de pedra com uma torre do relógio" },
                    { english: "A prominent fountain with statues", portuguese: "Uma fonte proeminente com estátuas" },
                    { english: "Many tourists walking around the piazza", portuguese: "Muitos turistas caminhando pela praça" }`,
  "animais": `
                    { english: "A golden retriever and an orange tabby cat", portuguese: "Um golden retriever e um gato malhado laranja" },
                    { english: "Sleeping together on an intricate rug", portuguese: "Dormindo juntos em um tapete intrincado" },
                    { english: "The cat is curled up next to the dog", portuguese: "O gato está encolhido ao lado do cachorro" },
                    { english: "Living room with a fireplace and bookshelf", portuguese: "Sala de estar com lareira e estante de livros" }`,
  "culinaria": `
                    { english: "A person cooking a meal in the kitchen", portuguese: "Uma pessoa cozinhando uma refeição na cozinha" },
                    { english: "Using fresh ingredients for the recipe", portuguese: "Usando ingredientes frescos para a receita" },
                    { english: "Stirring the food in a hot pan", portuguese: "Mexendo a comida em uma panela quente" },
                    { english: "Preparing a delicious homemade dish", portuguese: "Preparando um prato caseiro delicioso" }`,
  "tecnologia": `
                    { english: "Typing on the laptop keyboard", portuguese: "Digitando no teclado do notebook" },
                    { english: "Using a modern smartphone device", portuguese: "Usando um dispositivo smartphone moderno" },
                    { english: "Connecting to the wireless internet", portuguese: "Conectando-se à internet sem fio" },
                    { english: "Digital screens and modern technology", portuguese: "Telas digitais e tecnologia moderna" }`,
  "redes-sociais": `
                    { english: "Taking a picture for social media", portuguese: "Tirando uma foto para as redes sociais" },
                    { english: "Scrolling through online profiles", portuguese: "Navegando por perfis online" },
                    { english: "Liking and sharing content with friends", portuguese: "Curtindo e compartilhando conteúdo com amigos" },
                    { english: "Holding a smartphone in hand", portuguese: "Segurando um smartphone na mão" }`
};

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const regex = /id:\s*"([^"]+)"([\s\S]*?imageDescription:\s*\{[\s\S]*?keywords:\s*\[)([\s\S]*?)(\]\s*\})/g;
  
  const newContent = content.replace(regex, (match, id, prefix, oldKeywords, suffix) => {
    if (scenariosData[id]) {
      console.log("Updating keywords for scenario: " + id);
      return 'id: "' + id + '"' + prefix + scenariosData[id] + '\n                  ' + suffix;
    }
    return match;
  });
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
}

updateFile(path.join(__dirname, '../data/scenarios1.ts'));
updateFile(path.join(__dirname, '../data/scenarios2.ts'));

console.log("Updated all scenarios with hyper-specific visual descriptions!");
