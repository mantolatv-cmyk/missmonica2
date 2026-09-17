const fs = require('fs');
const path = require('path');

const wouldYouRatherData = {
  "familia": `
      wouldYouRather: [
        { optionA: { english: "Have a big family gathering every weekend", portuguese: "Ter uma grande reunião de família todo fim de semana" }, optionB: { english: "Have a quiet weekend alone", portuguese: "Ter um fim de semana tranquilo sozinho" } },
        { optionA: { english: "Live close to your parents", portuguese: "Morar perto dos seus pais" }, optionB: { english: "Live in another country", portuguese: "Morar em outro país" } },
        { optionA: { english: "Have three brothers", portuguese: "Ter três irmãos" }, optionB: { english: "Have three sisters", portuguese: "Ter três irmãs" } },
        { optionA: { english: "Cook dinner for the family", portuguese: "Fazer o jantar para a família" }, optionB: { english: "Wash all the dishes", portuguese: "Lavar toda a louça" } }
      ]`,
  "amigos": `
      wouldYouRather: [
        { optionA: { english: "Have one best friend", portuguese: "Ter um melhor amigo" }, optionB: { english: "Have many good friends", portuguese: "Ter muitos bons amigos" } },
        { optionA: { english: "Travel with friends", portuguese: "Viajar com amigos" }, optionB: { english: "Travel alone", portuguese: "Viajar sozinho" } },
        { optionA: { english: "Go to a loud party", portuguese: "Ir a uma festa barulhenta" }, optionB: { english: "Have a picnic in the park", portuguese: "Fazer um piquenique no parque" } },
        { optionA: { english: "Lend money to a friend", portuguese: "Emprestar dinheiro a um amigo" }, optionB: { english: "Borrow money from a friend", portuguese: "Pegar dinheiro emprestado de um amigo" } }
      ]`,
  "corpo": `
      wouldYouRather: [
        { optionA: { english: "Work out in a gym", portuguese: "Malhar em uma academia" }, optionB: { english: "Run in the park", portuguese: "Correr no parque" } },
        { optionA: { english: "Have very strong arms", portuguese: "Ter braços muito fortes" }, optionB: { english: "Have very fast legs", portuguese: "Ter pernas muito rápidas" } },
        { optionA: { english: "Wake up early to exercise", portuguese: "Acordar cedo para se exercitar" }, optionB: { english: "Exercise late at night", portuguese: "Se exercitar tarde da noite" } },
        { optionA: { english: "Be very tall", portuguese: "Ser muito alto" }, optionB: { english: "Be very flexible", portuguese: "Ser muito flexível" } }
      ]`,
  "casa": `
      wouldYouRather: [
        { optionA: { english: "Live in a big house", portuguese: "Morar em uma casa grande" }, optionB: { english: "Live in a modern apartment", portuguese: "Morar em um apartamento moderno" } },
        { optionA: { english: "Have a big garden", portuguese: "Ter um jardim grande" }, optionB: { english: "Have a large balcony", portuguese: "Ter uma varanda grande" } },
        { optionA: { english: "Clean the living room", portuguese: "Limpar a sala de estar" }, optionB: { english: "Organize the bedroom", portuguese: "Organizar o quarto" } },
        { optionA: { english: "Have a green velvet sofa", portuguese: "Ter um sofá de veludo verde" }, optionB: { english: "Have a black leather sofa", portuguese: "Ter um sofá de couro preto" } }
      ]`,
  "casa2": `
      wouldYouRather: [
        { optionA: { english: "Cook in a modern kitchen", portuguese: "Cozinhar em uma cozinha moderna" }, optionB: { english: "Order food delivery", portuguese: "Pedir comida por delivery" } },
        { optionA: { english: "Wash the dishes by hand", portuguese: "Lavar a louça à mão" }, optionB: { english: "Take out the trash", portuguese: "Levar o lixo para fora" } },
        { optionA: { english: "Live in the city center", portuguese: "Morar no centro da cidade" }, optionB: { english: "Live in the quiet suburbs", portuguese: "Morar no subúrbio tranquilo" } },
        { optionA: { english: "Have a big refrigerator", portuguese: "Ter uma geladeira grande" }, optionB: { english: "Have a large dining table", portuguese: "Ter uma mesa de jantar grande" } }
      ]`,
  "hobbies": `
      wouldYouRather: [
        { optionA: { english: "Play a musical instrument", portuguese: "Tocar um instrumento musical" }, optionB: { english: "Paint a beautiful picture", portuguese: "Pintar um quadro bonito" } },
        { optionA: { english: "Read books all day", portuguese: "Ler livros o dia todo" }, optionB: { english: "Watch movies all day", portuguese: "Assistir a filmes o dia todo" } },
        { optionA: { english: "Have a quiet hobby at home", portuguese: "Ter um hobby tranquilo em casa" }, optionB: { english: "Have an active outdoor hobby", portuguese: "Ter um hobby ativo ao ar livre" } },
        { optionA: { english: "Play the acoustic guitar", portuguese: "Tocar violão acústico" }, optionB: { english: "Play the piano", portuguese: "Tocar piano" } }
      ]`,
  "esportes": `
      wouldYouRather: [
        { optionA: { english: "Play soccer in the rain", portuguese: "Jogar futebol na chuva" }, optionB: { english: "Play basketball indoors", portuguese: "Jogar basquete em local fechado" } },
        { optionA: { english: "Be a professional athlete", portuguese: "Ser um atleta profissional" }, optionB: { english: "Be a famous coach", portuguese: "Ser um treinador famoso" } },
        { optionA: { english: "Watch sports on TV", portuguese: "Assistir a esportes na TV" }, optionB: { english: "Go to the stadium", portuguese: "Ir ao estádio" } },
        { optionA: { english: "Win the race by one second", portuguese: "Vencer a corrida por um segundo" }, optionB: { english: "Help a teammate win", portuguese: "Ajudar um colega de equipe a vencer" } }
      ]`,
  "supermercado": `
      wouldYouRather: [
        { optionA: { english: "Go grocery shopping early", portuguese: "Fazer as compras do mercado cedo" }, optionB: { english: "Shop late at night", portuguese: "Fazer compras tarde da noite" } },
        { optionA: { english: "Buy fresh organic food", portuguese: "Comprar comida orgânica fresca" }, optionB: { english: "Buy cheap processed food", portuguese: "Comprar comida processada barata" } },
        { optionA: { english: "Push a heavy shopping cart", portuguese: "Empurrar um carrinho de compras pesado" }, optionB: { english: "Carry heavy shopping bags", portuguese: "Carregar sacolas de compras pesadas" } },
        { optionA: { english: "Wait in a long line", portuguese: "Esperar em uma fila longa" }, optionB: { english: "Use self-checkout", portuguese: "Usar o caixa de autoatendimento" } }
      ]`,
  "compras": `
      wouldYouRather: [
        { optionA: { english: "Shop for clothes online", portuguese: "Comprar roupas online" }, optionB: { english: "Shop at the mall", portuguese: "Fazer compras no shopping" } },
        { optionA: { english: "Buy one expensive item", portuguese: "Comprar um item caro" }, optionB: { english: "Buy many cheap items", portuguese: "Comprar muitos itens baratos" } },
        { optionA: { english: "Pay with a credit card", portuguese: "Pagar com cartão de crédito" }, optionB: { english: "Pay with cash", portuguese: "Pagar com dinheiro" } },
        { optionA: { english: "Wait for a big discount", portuguese: "Esperar por um grande desconto" }, optionB: { english: "Buy the new collection now", portuguese: "Comprar a nova coleção agora" } }
      ]`,
  "profissoes": `
      wouldYouRather: [
        { optionA: { english: "Work in a busy office", portuguese: "Trabalhar em um escritório movimentado" }, optionB: { english: "Work from home", portuguese: "Trabalhar de casa" } },
        { optionA: { english: "Be a successful doctor", portuguese: "Ser um médico bem-sucedido" }, optionB: { english: "Be an inspiring teacher", portuguese: "Ser um professor inspirador" } },
        { optionA: { english: "Have a high salary", portuguese: "Ter um salário alto" }, optionB: { english: "Love your job", portuguese: "Amar o seu trabalho" } },
        { optionA: { english: "Be the boss", portuguese: "Ser o chefe" }, optionB: { english: "Be an employee with no stress", portuguese: "Ser um funcionário sem estresse" } }
      ]`,
  "lugares": `
      wouldYouRather: [
        { optionA: { english: "Visit a historic city", portuguese: "Visitar uma cidade histórica" }, optionB: { english: "Visit a modern metropolis", portuguese: "Visitar uma metrópole moderna" } },
        { optionA: { english: "Walk around the city center", portuguese: "Caminhar pelo centro da cidade" }, optionB: { english: "Take a bus tour", portuguese: "Fazer um passeio de ônibus" } },
        { optionA: { english: "Drink coffee at a cafe", portuguese: "Beber café em uma cafeteria" }, optionB: { english: "Read a book at the library", portuguese: "Ler um livro na biblioteca" } },
        { optionA: { english: "Live near a famous square", portuguese: "Morar perto de uma praça famosa" }, optionB: { english: "Live near a quiet park", portuguese: "Morar perto de um parque tranquilo" } }
      ]`,
  "animais": `
      wouldYouRather: [
        { optionA: { english: "Have a cute dog", portuguese: "Ter um cachorro fofo" }, optionB: { english: "Have a lazy cat", portuguese: "Ter um gato preguiçoso" } },
        { optionA: { english: "Walk the dog in the park", portuguese: "Passear com o cachorro no parque" }, optionB: { english: "Sleep on the sofa like a cat", portuguese: "Dormir no sofá como um gato" } },
        { optionA: { english: "Feed pet birds", portuguese: "Alimentar pássaros de estimação" }, optionB: { english: "Watch fish in an aquarium", portuguese: "Observar peixes em um aquário" } },
        { optionA: { english: "Live with 3 dogs", portuguese: "Morar com 3 cachorros" }, optionB: { english: "Live with 3 cats", portuguese: "Morar com 3 gatos" } }
      ]`,
  "culinaria": `
      wouldYouRather: [
        { optionA: { english: "Cook a delicious meal", portuguese: "Cozinhar uma refeição deliciosa" }, optionB: { english: "Bake a sweet cake", portuguese: "Assar um bolo doce" } },
        { optionA: { english: "Eat at a fancy restaurant", portuguese: "Comer em um restaurante chique" }, optionB: { english: "Eat homemade food", portuguese: "Comer comida caseira" } },
        { optionA: { english: "Chop vegetables", portuguese: "Cortar vegetais" }, optionB: { english: "Wash the hot pans", portuguese: "Lavar as panelas quentes" } },
        { optionA: { english: "Follow a recipe book", portuguese: "Seguir um livro de receitas" }, optionB: { english: "Invent your own dish", portuguese: "Inventar seu próprio prato" } }
      ]`,
  "tecnologia": `
      wouldYouRather: [
        { optionA: { english: "Have a fast laptop", portuguese: "Ter um notebook rápido" }, optionB: { english: "Have the newest smartphone", portuguese: "Ter o smartphone mais novo" } },
        { optionA: { english: "Use virtual reality glasses", portuguese: "Usar óculos de realidade virtual" }, optionB: { english: "Play traditional video games", portuguese: "Jogar videogames tradicionais" } },
        { optionA: { english: "Live without internet for a week", portuguese: "Viver sem internet por uma semana" }, optionB: { english: "Live without a phone for a week", portuguese: "Viver sem telefone por uma semana" } },
        { optionA: { english: "Type on a physical keyboard", portuguese: "Digitar em um teclado físico" }, optionB: { english: "Type on a digital screen", portuguese: "Digitar em uma tela digital" } }
      ]`,
  "redes-sociais": `
      wouldYouRather: [
        { optionA: { english: "Take a selfie for Instagram", portuguese: "Tirar uma selfie para o Instagram" }, optionB: { english: "Record a viral video", portuguese: "Gravar um vídeo viral" } },
        { optionA: { english: "Have 1 million followers", portuguese: "Ter 1 milhão de seguidores" }, optionB: { english: "Have 5 close real friends", portuguese: "Ter 5 amigos reais próximos" } },
        { optionA: { english: "Share a post with friends", portuguese: "Compartilhar uma postagem com amigos" }, optionB: { english: "Keep your profile private", portuguese: "Manter seu perfil privado" } },
        { optionA: { english: "Chat online all night", portuguese: "Conversar online a noite toda" }, optionB: { english: "Talk face to face", portuguese: "Conversar cara a cara" } }
      ]`
};

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Encontra o bloco imageDescription para inserir o wouldYouRather logo depois
  const regex = /(id:\s*"([^"]+)"[\s\S]*?imageDescription:\s*\{[\s\S]*?\]\s*\})/g;
  
  const newContent = content.replace(regex, (match, idLine, id) => {
    if (wouldYouRatherData[id]) {
      console.log('Adding wouldYouRather to scenario: ' + id);
      return match + ',\n' + wouldYouRatherData[id];
    }
    return match;
  });
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
}

updateFile(path.join(__dirname, '../data/scenarios1.ts'));
updateFile(path.join(__dirname, '../data/scenarios2.ts'));

console.log('Successfully injected Would You Rather data!');
