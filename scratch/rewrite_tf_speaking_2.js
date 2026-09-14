const fs = require('fs');

const data = {
  "supermercado": {
    trueOrFalse: {
      part1: [
        { statement: "You use a shopping cart to carry groceries.", statementPt: "Você usa um carrinho de compras para carregar as compras.", isTrue: true, explanation: "Shopping cart means carrinho de compras." },
        { statement: "A cashier works in the grocery store.", statementPt: "Um caixa trabalha no supermercado/mercearia.", isTrue: true, explanation: "Cashier is the person who takes your money." },
        { statement: "You wait in a queue to pay.", statementPt: "Você espera em uma fila para pagar.", isTrue: true, explanation: "Queue means fila." },
        { statement: "An aisle is outside the store.", statementPt: "Um corredor fica do lado de fora da loja.", isTrue: false, explanation: "Aisle is inside the store." },
        { statement: "You get a receipt after paying.", statementPt: "Você recebe um recibo depois de pagar.", isTrue: true, explanation: "Receipt is recibo/nota fiscal." },
        { statement: "A discount makes the groceries more expensive.", statementPt: "Um desconto deixa as compras mais caras.", isTrue: false, explanation: "Discount makes things cheaper." }
      ],
      part2: [
        { statement: "You can pay with cash or a credit card.", statementPt: "Você pode pagar com dinheiro ou cartão de crédito.", isTrue: true, explanation: "Cash and credit card are payment methods." },
        { statement: "Products are placed on a shelf.", statementPt: "Os produtos são colocados em uma prateleira.", isTrue: true, explanation: "Shelf means prateleira." },
        { statement: "A customer sells things in the supermarket.", statementPt: "Um cliente vende coisas no supermercado.", isTrue: false, explanation: "A customer buys things." },
        { statement: "You put your items in a bag to take them home.", statementPt: "Você coloca seus itens em uma sacola para levá-los para casa.", isTrue: true, explanation: "Bag means sacola." },
        { statement: "Price tells you how much money you need.", statementPt: "O preço diz quanto dinheiro você precisa.", isTrue: true, explanation: "Price is preço, money is dinheiro." },
        { statement: "A supermarket only sells clothes.", statementPt: "Um supermercado só vende roupas.", isTrue: false, explanation: "Supermarket sells food and other products." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you use a shopping cart or a trolley?", translation: "Você usa um carrinho de compras (americano) ou carrinho (britânico)?" },
        { question: "Is the grocery affordable here?", translation: "As compras são acessíveis aqui?" },
        { question: "Did you talk to the cashier?", translation: "Você falou com o caixa?" }
      ],
      part2: [
        { question: "Do you pay with cash or credit card?", translation: "Você paga em dinheiro ou cartão de crédito?" },
        { question: "Can you reach that product on the top shelf?", translation: "Você consegue alcançar aquele produto na prateleira de cima?" },
        { question: "Are you a regular customer at this supermarket?", translation: "Você é um cliente regular neste supermercado?" }
      ]
    }
  },
  "compras": {
    trueOrFalse: {
      part1: [
        { statement: "You wear clothes every day.", statementPt: "Você veste roupas todos os dias.", isTrue: true, explanation: "Clothes means roupas." },
        { statement: "You try on shoes in a fitting room.", statementPt: "Você experimenta sapatos em um provador.", isTrue: true, explanation: "Try on means experimentar, fitting room is provador." },
        { statement: "If something is expensive, it has a low price.", statementPt: "Se algo é caro, tem um preço baixo.", isTrue: false, explanation: "Expensive means it has a high price." },
        { statement: "A sale means clothes are cheaper.", statementPt: "Uma liquidação significa que as roupas estão mais baratas.", isTrue: true, explanation: "Sale means liquidação." },
        { statement: "You wear shoes on your hands.", statementPt: "Você usa sapatos nas mãos.", isTrue: false, explanation: "Shoes are for your feet." },
        { statement: "A customer buys things in a store.", statementPt: "Um cliente compra coisas em uma loja.", isTrue: true, explanation: "Customer is cliente, store is loja." }
      ],
      part2: [
        { statement: "You put cash in your wallet.", statementPt: "Você coloca dinheiro em sua carteira.", isTrue: true, explanation: "Wallet means carteira." },
        { statement: "A jacket keeps you warm.", statementPt: "Uma jaqueta mantém você aquecido.", isTrue: true, explanation: "Jacket is jaqueta/casaco." },
        { statement: "A dress is a type of hat.", statementPt: "Um vestido é um tipo de chapéu.", isTrue: false, explanation: "Dress is vestido, hat is chapéu." },
        { statement: "You wear pants on your legs.", statementPt: "Você usa calças nas pernas.", isTrue: true, explanation: "Pants means calças." },
        { statement: "You look in the mirror to see yourself.", statementPt: "Você se olha no espelho para se ver.", isTrue: true, explanation: "Mirror means espelho." },
        { statement: "A cheap gift is always bad.", statementPt: "Um presente barato é sempre ruim.", isTrue: false, explanation: "Cheap means barato, gift is presente. Cheap gifts can be good." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "What is your shoe size?", translation: "Qual é o tamanho do seu sapato?" },
        { question: "Do you always try on clothes before buying?", translation: "Você sempre experimenta as roupas antes de comprar?" },
        { question: "Is this store too expensive?", translation: "Esta loja é cara demais?" }
      ],
      part2: [
        { question: "Do you pay with cash or credit card?", translation: "Você paga em dinheiro ou cartão de crédito?" },
        { question: "Do you like to buy a jacket or a dress as a gift?", translation: "Você gosta de comprar uma jaqueta ou um vestido como presente?" },
        { question: "Do you keep your wallet in your pants?", translation: "Você guarda sua carteira na calça?" }
      ]
    }
  },
  "profissoes": {
    trueOrFalse: {
      part1: [
        { statement: "A doctor works in a hospital.", statementPt: "Um médico trabalha em um hospital.", isTrue: true, explanation: "Doctor means médico." },
        { statement: "A teacher works in a school.", statementPt: "Um professor trabalha em uma escola.", isTrue: true, explanation: "Teacher means professor." },
        { statement: "A chef works in a police station.", statementPt: "Um chef trabalha em uma delegacia.", isTrue: false, explanation: "A chef cooks food in a kitchen/restaurant." },
        { statement: "A lawyer gives legal advice.", statementPt: "Um advogado dá conselhos legais.", isTrue: true, explanation: "Lawyer means advogado." },
        { statement: "An engineer designs buildings and machines.", statementPt: "Um engenheiro projeta edifícios e máquinas.", isTrue: true, explanation: "Engineer is engenheiro." },
        { statement: "A mechanic works in an office.", statementPt: "Um mecânico trabalha em um escritório.", isTrue: false, explanation: "Mechanic works in a garage." }
      ],
      part2: [
        { statement: "A pilot flies an airplane.", statementPt: "Um piloto voa um avião.", isTrue: true, explanation: "Pilot means piloto." },
        { statement: "A dentist fixes teeth.", statementPt: "Um dentista conserta dentes.", isTrue: true, explanation: "Dentist means dentista." },
        { statement: "A farmer works in a company office.", statementPt: "Um fazendeiro trabalha em um escritório de empresa.", isTrue: false, explanation: "Farmer works on a farm." },
        { statement: "A boss pays your salary.", statementPt: "Um chefe paga seu salário.", isTrue: true, explanation: "Boss means chefe, salary is salário." },
        { statement: "A firefighter puts out fires.", statementPt: "Um bombeiro apaga incêndios.", isTrue: true, explanation: "Firefighter means bombeiro." },
        { statement: "A waiter paints beautiful pictures.", statementPt: "Um garçom pinta quadros bonitos.", isTrue: false, explanation: "An artist paints. A waiter serves food." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you want to be a doctor or an engineer?", translation: "Você quer ser médico ou engenheiro?" },
        { question: "Does the teacher work in the office?", translation: "O professor trabalha no escritório?" },
        { question: "Is it hard to be a police officer?", translation: "É difícil ser um policial?" }
      ],
      part2: [
        { question: "Does your company pay a good salary?", translation: "Sua empresa paga um bom salário?" },
        { question: "Is your boss an artist or a pilot?", translation: "Seu chefe é um artista ou um piloto?" },
        { question: "Did the waiter bring your food?", translation: "O garçom trouxe sua comida?" }
      ]
    }
  },
  "lugares": {
    trueOrFalse: {
      part1: [
        { statement: "Students study at a school.", statementPt: "Os alunos estudam em uma escola.", isTrue: true, explanation: "School means escola." },
        { statement: "You read books in a bank.", statementPt: "Você lê livros em um banco.", isTrue: false, explanation: "You read books in a library." },
        { statement: "You wait for a bus at a bus stop.", statementPt: "Você espera por um ônibus em um ponto de ônibus.", isTrue: true, explanation: "Bus stop means ponto de ônibus." },
        { statement: "A hospital is for sick people.", statementPt: "Um hospital é para pessoas doentes.", isTrue: true, explanation: "Hospital means hospital." },
        { statement: "To go straight means to turn left.", statementPt: "Ir direto significa virar à esquerda.", isTrue: false, explanation: "Go straight is seguir em frente. Turn left is virar à esquerda." },
        { statement: "A park is near the street.", statementPt: "Um parque fica perto da rua.", isTrue: true, explanation: "Park is parque, near is perto, street is rua." }
      ],
      part2: [
        { statement: "You buy medicine at a pharmacy.", statementPt: "Você compra remédio em uma farmácia.", isTrue: true, explanation: "Pharmacy means farmácia." },
        { statement: "You eat food in a museum.", statementPt: "Você come comida em um museu.", isTrue: false, explanation: "You eat in a restaurant." },
        { statement: "Airplanes fly from an airport.", statementPt: "Aviões voam de um aeroporto.", isTrue: true, explanation: "Airport means aeroporto." },
        { statement: "A traffic light can be red, yellow, or green.", statementPt: "Um semáforo pode ser vermelho, amarelo ou verde.", isTrue: true, explanation: "Traffic light means semáforo." },
        { statement: "A corner is in the middle of the block.", statementPt: "Uma esquina fica no meio do quarteirão.", isTrue: false, explanation: "Corner is the intersection, block is the whole area." },
        { statement: "You drive over a bridge to cross water.", statementPt: "Você dirige sobre uma ponte para cruzar a água.", isTrue: true, explanation: "Bridge means ponte." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Is the library near the park?", translation: "A biblioteca é perto do parque?" },
        { question: "Do I go straight to find the hospital?", translation: "Eu sigo em frente para encontrar o hospital?" },
        { question: "Where is the bus stop on this street?", translation: "Onde é o ponto de ônibus nesta rua?" }
      ],
      part2: [
        { question: "Is the pharmacy far from the corner?", translation: "A farmácia é longe da esquina?" },
        { question: "Can we walk to the restaurant or the station?", translation: "Podemos ir a pé até o restaurante ou à estação?" },
        { question: "Does this block have a traffic light?", translation: "Este quarteirão tem um semáforo?" }
      ]
    }
  },
  "animais": {
    trueOrFalse: {
      part1: [
        { statement: "A dog is a common pet.", statementPt: "Um cachorro é um animal de estimação comum.", isTrue: true, explanation: "Dog means cachorro, pet means animal de estimação." },
        { statement: "You walk the dog in the sky.", statementPt: "Você passeia com o cachorro no céu.", isTrue: false, explanation: "You walk the dog on the ground." },
        { statement: "A bird can fly.", statementPt: "Um pássaro pode voar.", isTrue: true, explanation: "Bird means pássaro." },
        { statement: "A cow gives milk.", statementPt: "Uma vaca dá leite.", isTrue: true, explanation: "Cow means vaca." },
        { statement: "A fish lives on land.", statementPt: "Um peixe vive na terra.", isTrue: false, explanation: "Fish lives in water." },
        { statement: "A vet is a doctor for animals.", statementPt: "Um veterinário é um médico para animais.", isTrue: true, explanation: "Vet means veterinário." }
      ],
      part2: [
        { statement: "A pig makes a 'meow' sound.", statementPt: "Um porco faz um som de 'miau'.", isTrue: false, explanation: "A cat meows." },
        { statement: "Lions and tigers are wild animals.", statementPt: "Leões e tigres são animais selvagens.", isTrue: true, explanation: "Lion is leão, tiger is tigre." },
        { statement: "An elephant has a long trunk.", statementPt: "Um elefante tem uma tromba longa.", isTrue: true, explanation: "Elephant means elefante." },
        { statement: "A monkey loves to climb trees.", statementPt: "Um macaco adora subir em árvores.", isTrue: true, explanation: "Monkey means macaco." },
        { statement: "A chicken barks.", statementPt: "Uma galinha late.", isTrue: false, explanation: "A dog barks (bark)." },
        { statement: "A rabbit likes to eat carrots.", statementPt: "Um coelho gosta de comer cenouras.", isTrue: true, explanation: "Rabbit means coelho." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you have a pet dog or cat?", translation: "Você tem um cachorro ou gato de estimação?" },
        { question: "Did you feed the fish today?", translation: "Você alimentou o peixe hoje?" },
        { question: "Does the cow live on a farm?", translation: "A vaca vive em uma fazenda?" }
      ],
      part2: [
        { question: "Did the dog bark or bite?", translation: "O cachorro latiu ou mordeu?" },
        { question: "Is the lion bigger than the tiger?", translation: "O leão é maior que o tigre?" },
        { question: "Did you see the monkey and the elephant?", translation: "Você viu o macaco e o elefante?" }
      ]
    }
  },
  "culinaria": {
    trueOrFalse: {
      part1: [
        { statement: "You boil water in a pot.", statementPt: "Você ferve água em uma panela.", isTrue: true, explanation: "Boil means ferver." },
        { statement: "You chop vegetables with a spoon.", statementPt: "Você pica os vegetais com uma colher.", isTrue: false, explanation: "You chop with a knife." },
        { statement: "You bake a cake in an oven.", statementPt: "Você assa um bolo em um forno.", isTrue: true, explanation: "Bake means assar, oven is forno." },
        { statement: "A recipe lists the ingredients you need.", statementPt: "Uma receita lista os ingredientes que você precisa.", isTrue: true, explanation: "Recipe is receita, ingredients are ingredientes." },
        { statement: "You fry an egg in the oven.", statementPt: "Você frita um ovo no forno.", isTrue: false, explanation: "You fry in a pan." },
        { statement: "A knife is used to cut things.", statementPt: "Uma faca é usada para cortar coisas.", isTrue: true, explanation: "Knife means faca." }
      ],
      part2: [
        { statement: "You eat soup with a fork.", statementPt: "Você toma sopa com um garfo.", isTrue: false, explanation: "You eat soup with a spoon." },
        { statement: "You mix the salad in a bowl.", statementPt: "Você mistura a salada em uma tigela.", isTrue: true, explanation: "Mix means misturar, bowl is tigela." },
        { statement: "Sugar makes food taste sweet.", statementPt: "O açúcar faz a comida ter um gosto doce.", isTrue: true, explanation: "Sweet means doce." },
        { statement: "You pour water into a glass.", statementPt: "Você derrama água em um copo.", isTrue: true, explanation: "Pour means derramar/despejar." },
        { statement: "Salt makes food spicy.", statementPt: "O sal deixa a comida apimentada.", isTrue: false, explanation: "Salt makes food salty (salgado)." },
        { statement: "You serve dinner on a plate.", statementPt: "Você serve o jantar em um prato.", isTrue: true, explanation: "Plate means prato." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you like to cook or bake?", translation: "Você gosta de cozinhar ou assar?" },
        { question: "Can you chop the ingredients with this knife?", translation: "Você pode picar os ingredientes com esta faca?" },
        { question: "Did you boil or fry the food?", translation: "Você ferveu ou fritou a comida?" }
      ],
      part2: [
        { question: "Is this food sweet, spicy, or salty?", translation: "Esta comida é doce, apimentada ou salgada?" },
        { question: "Can you pour the water into the bowl?", translation: "Você pode derramar a água na tigela?" },
        { question: "Do you need a fork and a plate?", translation: "Você precisa de um garfo e um prato?" }
      ]
    }
  },
  "tecnologia": {
    trueOrFalse: {
      part1: [
        { statement: "You use a keyboard to type on a laptop.", statementPt: "Você usa um teclado para digitar em um laptop.", isTrue: true, explanation: "Keyboard means teclado." },
        { statement: "A password should be a secret.", statementPt: "Uma senha deve ser um segredo.", isTrue: true, explanation: "Password means senha." },
        { statement: "You download water from the internet.", statementPt: "Você baixa água da internet.", isTrue: false, explanation: "Download means baixar arquivos." },
        { statement: "A smartphone has a touch screen.", statementPt: "Um smartphone tem uma tela sensível ao toque.", isTrue: true, explanation: "Screen means tela." },
        { statement: "You use a charger to get internet.", statementPt: "Você usa um carregador para ter internet.", isTrue: false, explanation: "Charger is to give battery power." },
        { statement: "An app is software on your phone.", statementPt: "Um app é um software no seu celular.", isTrue: true, explanation: "App means aplicativo." }
      ],
      part2: [
        { statement: "You delete a file to save it forever.", statementPt: "Você exclui um arquivo para salvá-lo para sempre.", isTrue: false, explanation: "Delete means excluir." },
        { statement: "You organize files in a folder.", statementPt: "Você organiza arquivos em uma pasta.", isTrue: true, explanation: "Folder means pasta." },
        { statement: "You wear headphones to listen to music.", statementPt: "Você usa fones de ouvido para ouvir música.", isTrue: true, explanation: "Headphones are fones de ouvido." },
        { statement: "You upload a photo to the website.", statementPt: "Você faz o upload de uma foto para o site.", isTrue: true, explanation: "Upload means enviar, website is site." },
        { statement: "A link connects you to another website.", statementPt: "Um link conecta você a outro site.", isTrue: true, explanation: "Link means link/ligação." },
        { statement: "You plug in the battery when it is full.", statementPt: "Você conecta a bateria quando ela está cheia.", isTrue: false, explanation: "You plug in (conecta) when the battery is empty." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Do you use a smartphone or a laptop?", translation: "Você usa um smartphone ou um laptop?" },
        { question: "Did you download the app from the internet?", translation: "Você baixou o aplicativo da internet?" },
        { question: "Did you type your password on the keyboard?", translation: "Você digitou sua senha no teclado?" }
      ],
      part2: [
        { question: "Did you delete the folder or save it?", translation: "Você excluiu a pasta ou a salvou?" },
        { question: "Are you listening to music on your headphones?", translation: "Você está ouvindo música nos seus fones de ouvido?" },
        { question: "Did you upload the file to the website?", translation: "Você fez upload do arquivo para o site?" }
      ]
    }
  },
  "redes-sociais": {
    trueOrFalse: {
      part1: [
        { statement: "You post photos on your profile.", statementPt: "Você posta fotos no seu perfil.", isTrue: true, explanation: "Post is postar, profile is perfil." },
        { statement: "A follower is someone who blocked you.", statementPt: "Um seguidor é alguém que bloqueou você.", isTrue: false, explanation: "Follower is someone who follows your updates." },
        { statement: "You scroll down to see more content.", statementPt: "Você rola a tela para baixo para ver mais conteúdo.", isTrue: true, explanation: "Scroll means rolar a tela." },
        { statement: "You leave a comment to share your opinion.", statementPt: "Você deixa um comentário para compartilhar sua opinião.", isTrue: true, explanation: "Comment means comentário." },
        { statement: "A hashtag helps people find your post.", statementPt: "Uma hashtag ajuda as pessoas a encontrarem seu post.", isTrue: true, explanation: "Hashtag is a tag with #." },
        { statement: "You send a message to everyone publicly.", statementPt: "Você envia uma mensagem para todos publicamente.", isTrue: false, explanation: "Message usually means private message." }
      ],
      part2: [
        { statement: "You see photos in your feed.", statementPt: "Você vê fotos no seu feed.", isTrue: true, explanation: "Feed is the stream of posts." },
        { statement: "A viral video has very few views.", statementPt: "Um vídeo viral tem muito poucas visualizações.", isTrue: false, explanation: "Viral means it is very popular." },
        { statement: "You tag a friend in a photo.", statementPt: "Você marca um amigo em uma foto.", isTrue: true, explanation: "Tag means marcar." },
        { statement: "A story disappears after 24 hours.", statementPt: "Um story desaparece após 24 horas.", isTrue: true, explanation: "Story means história/story." },
        { statement: "You use settings to change your privacy.", statementPt: "Você usa as configurações para mudar sua privacidade.", isTrue: true, explanation: "Settings means configurações." },
        { statement: "You upload a video to your feed.", statementPt: "Você envia um vídeo para o seu feed.", isTrue: true, explanation: "Upload means enviar." }
      ]
    },
    speakingPractice: {
      part1: [
        { question: "Did you comment on my post?", translation: "Você comentou no meu post?" },
        { question: "Do you follow her profile?", translation: "Você segue o perfil dela?" },
        { question: "Did you send a message or scroll the feed?", translation: "Você enviou uma mensagem ou rolou o feed?" }
      ],
      part2: [
        { question: "Did you tag me in your story?", translation: "Você me marcou no seu story?" },
        { question: "Did your video go viral on your feed?", translation: "Seu vídeo viralizou no seu feed?" },
        { question: "Did you upload the video and change the settings?", translation: "Você fez upload do vídeo e mudou as configurações?" }
      ]
    }
  }
};

function injectData(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const id in data) {
    if (content.indexOf(`id: "${id}"`) === -1) continue;

    const startIndex = content.indexOf(`id: "${id}"`);
    let nextId = content.indexOf('id: "', startIndex + 10);
    if (nextId === -1) nextId = content.length;
    let section = content.slice(startIndex, nextId);

    // Replace trueOrFalse
    const tfRegex = /trueOrFalse:\s*\{[\s\S]*?part2:\s*\[[\s\S]*?\]\n\s*\}/;
    if (tfRegex.test(section)) {
      section = section.replace(tfRegex, 'trueOrFalse: ' + JSON.stringify(data[id].trueOrFalse, null, 6));
    }

    // Replace speakingPractice
    const spRegex = /speakingPractice:\s*\{[\s\S]*?part2:\s*\[[\s\S]*?\]\n\s*\}/;
    if (spRegex.test(section)) {
      section = section.replace(spRegex, 'speakingPractice: ' + JSON.stringify(data[id].speakingPractice, null, 6));
    }

    content = content.slice(0, startIndex) + section + content.slice(nextId);
  }

  fs.writeFileSync(filePath, content);
}

injectData('./data/scenarios1.ts');
console.log("Injected into scenarios1.ts");

injectData('./data/scenarios2.ts');
console.log("Injected into scenarios2.ts");
