const fs = require('fs');

const readingDataBatch3 = {
  "culinaria": {
    level1: {
      textEn: "Cooking is a fun activity for the whole family. Every Friday night, my mother and I bake a chocolate cake. We use flour, eggs, sugar, and cocoa powder. First, we mix everything in a big bowl. Then, we put it in the oven for forty minutes. The kitchen smells delicious when the cake is ready. We eat it after dinner while watching a movie.",
      textPt: "Cozinhar é uma atividade divertida para toda a família. Toda sexta-feira à noite, minha mãe e eu assamos um bolo de chocolate. Nós usamos farinha, ovos, açúcar e cacau em pó. Primeiro, misturamos tudo em uma tigela grande. Depois, colocamos no forno por quarenta minutos. A cozinha cheira deliciosamente quando o bolo está pronto. Nós o comemos depois do jantar enquanto assistimos a um filme.",
      questions: [
        {
          question: "When does the author bake a cake with their mother?",
          options: ["Every Friday night", "Every Sunday morning", "Once a month", "During holidays"],
          correctIndex: 0,
          explanation: "The text says 'Every Friday night, my mother and I bake a chocolate cake'."
        },
        {
          question: "Which of the following is NOT an ingredient they use?",
          options: ["Milk", "Flour", "Eggs", "Sugar"],
          correctIndex: 0,
          explanation: "They use 'flour, eggs, sugar, and cocoa powder', but milk is not mentioned."
        },
        {
          question: "Where do they mix the ingredients?",
          options: ["In a big bowl", "In the oven", "On the table", "In a small cup"],
          correctIndex: 0,
          explanation: "The text states 'we mix everything in a big bowl'."
        },
        {
          question: "How long does the cake stay in the oven?",
          options: ["Forty minutes", "Fourteen minutes", "An hour", "Ten minutes"],
          correctIndex: 0,
          explanation: "They put it in the oven 'for forty minutes'."
        },
        {
          question: "What do they do while eating the cake?",
          options: ["They watch a movie", "They play a game", "They clean the kitchen", "They talk about school"],
          correctIndex: 0,
          explanation: "They eat it 'while watching a movie'."
        }
      ]
    },
    level2: {
      textEn: "Gastronomy is a beautiful reflection of a region's culture and history. Authentic recipes are often passed down through generations, evolving slightly with each new cook. Preparing a complex dish requires precise timing and an understanding of how different flavors interact. Baking, for example, is more like chemistry because a tiny mistake in measurements can ruin the texture. Cooking isn't just about feeding people; it is an expression of love and heritage.",
      textPt: "A gastronomia é um belo reflexo da cultura e história de uma região. Receitas autênticas costumam ser passadas de geração em geração, evoluindo levemente com cada novo cozinheiro. Preparar um prato complexo exige sincronismo preciso e compreensão de como diferentes sabores interagem. Assar, por exemplo, é mais parecido com química, pois um pequeno erro nas medidas pode estragar a textura. Cozinhar não se trata apenas de alimentar pessoas; é uma expressão de amor e herança.",
      questions: [
        {
          question: "What does the author believe gastronomy reflects?",
          options: ["A region's culture and history", "The modern technology of a region", "The amount of money people have", "The speed of the cooks"],
          correctIndex: 0,
          explanation: "Gastronomy is 'a beautiful reflection of a region's culture and history'."
        },
        {
          question: "How do authentic recipes change over time?",
          options: ["They evolve slightly with each new cook", "They change completely every ten years", "They never change", "They are written in new books"],
          correctIndex: 0,
          explanation: "They are 'evolving slightly with each new cook'."
        },
        {
          question: "What is required to prepare a complex dish?",
          options: ["Precise timing and flavor understanding", "Lots of expensive ingredients", "A very large kitchen", "Fast chopping skills"],
          correctIndex: 0,
          explanation: "It requires 'precise timing and an understanding of how different flavors interact'."
        },
        {
          question: "Why does the author compare baking to chemistry?",
          options: ["Because a tiny mistake in measurements can ruin the texture", "Because you use chemicals instead of food", "Because it is done in a laboratory", "Because it is dangerous"],
          correctIndex: 0,
          explanation: "Baking is like chemistry 'because a tiny mistake in measurements can ruin the texture'."
        },
        {
          question: "According to the text, cooking is an expression of what?",
          options: ["Love and heritage", "Hunger and survival", "Stress and duty", "Wealth and power"],
          correctIndex: 0,
          explanation: "The text concludes it is 'an expression of love and heritage'."
        }
      ]
    }
  },
  "tecnologia": {
    level1: {
      textEn: "Technology makes our lives easier in many ways. I use my smartphone every day to send messages and check the weather. My father uses his laptop to work from home. Sometimes, the internet connection is very slow, and we cannot watch videos. It is important to remember to charge our devices at night. I cannot imagine life without my mobile phone.",
      textPt: "A tecnologia torna nossas vidas mais fáceis de muitas maneiras. Eu uso meu smartphone todos os dias para enviar mensagens e verificar o clima. Meu pai usa seu laptop para trabalhar de casa. Às vezes, a conexão com a internet é muito lenta e não conseguimos assistir a vídeos. É importante lembrar de carregar nossos dispositivos à noite. Não consigo imaginar a vida sem meu celular.",
      questions: [
        {
          question: "What does the author use their smartphone for?",
          options: ["Sending messages and checking the weather", "Playing games and listening to music", "Calling friends and taking photos", "Working from home"],
          correctIndex: 0,
          explanation: "They use it 'to send messages and check the weather'."
        },
        {
          question: "How does the father use technology?",
          options: ["He uses a laptop to work from home", "He uses a tablet to read books", "He uses a smartphone to send emails", "He uses a TV to watch movies"],
          correctIndex: 0,
          explanation: "The father 'uses his laptop to work from home'."
        },
        {
          question: "What problem does the family sometimes face?",
          options: ["A slow internet connection", "Broken laptops", "Lost smartphones", "No electricity at night"],
          correctIndex: 0,
          explanation: "The text mentions 'Sometimes, the internet connection is very slow'."
        },
        {
          question: "What should be done with devices at night?",
          options: ["They should be charged", "They should be turned off", "They should be cleaned", "They should be hidden"],
          correctIndex: 0,
          explanation: "It is important to 'charge our devices at night'."
        },
        {
          question: "How does the author feel about their mobile phone?",
          options: ["They consider it essential to their life", "They think it is too expensive", "They want to buy a new one", "They prefer using a laptop"],
          correctIndex: 0,
          explanation: "The author says 'I cannot imagine life without my mobile phone', meaning it is essential."
        }
      ]
    },
    level2: {
      textEn: "As we become more dependent on digital tools, cybersecurity is increasingly critical. Many users unintentionally trap their devices with malware by downloading unverified software. Furthermore, we often misplace our mobile devices, risking the exposure of sensitive personal data. It is vital to use strong passwords and enable two-factor authentication. Educating yourself about these digital threats can prevent severe privacy breaches.",
      textPt: "À medida que nos tornamos mais dependentes de ferramentas digitais, a cibersegurança se torna cada vez mais crítica. Muitos usuários prendem seus dispositivos acidentalmente em armadilhas de malware ao baixar softwares não verificados. Além disso, frequentemente perdemos nossos dispositivos móveis, arriscando a exposição de dados pessoais sensíveis. É vital usar senhas fortes e ativar a autenticação de dois fatores. Educar-se sobre essas ameaças digitais pode prevenir graves violações de privacidade.",
      questions: [
        {
          question: "What issue is becoming increasingly critical according to the text?",
          options: ["Cybersecurity", "Internet speed", "The price of mobile devices", "Battery life"],
          correctIndex: 0,
          explanation: "The text states 'cybersecurity is increasingly critical'."
        },
        {
          question: "How do users usually 'trap' their devices with malware?",
          options: ["By downloading unverified software", "By misplacing them", "By using strong passwords", "By clicking on ads"],
          correctIndex: 0,
          explanation: "They trap their devices 'by downloading unverified software'."
        },
        {
          question: "What risk is associated with misplacing a mobile device?",
          options: ["Exposure of sensitive personal data", "Losing all your contacts forever", "Breaking the screen", "Having to buy a more expensive phone"],
          correctIndex: 0,
          explanation: "Misplacing devices risks 'the exposure of sensitive personal data'."
        },
        {
          question: "What is a recommended method to protect your data?",
          options: ["Using strong passwords and two-factor authentication", "Never taking your phone outside", "Hiding your laptop", "Only using public Wi-Fi"],
          correctIndex: 0,
          explanation: "It is vital to 'use strong passwords and enable two-factor authentication'."
        },
        {
          question: "What can prevent severe privacy breaches?",
          options: ["Educating yourself about digital threats", "Downloading unverified software", "Misplacing your phone", "Turning off your devices"],
          correctIndex: 0,
          explanation: "The text concludes 'Educating yourself about these digital threats can prevent severe privacy breaches'."
        }
      ]
    }
  },
  "redes-sociais": {
    level1: {
      textEn: "Social media is a fun way to connect with friends. I use Instagram to post pictures of my pets and my vacations. Every evening, I scroll through my feed for about thirty minutes. I like to leave nice comments on my friends' photos. However, I try not to spend too much time online because it can be bad for my eyes. Real life is outside the screen.",
      textPt: "As redes sociais são uma maneira divertida de se conectar com amigos. Eu uso o Instagram para postar fotos dos meus pets e das minhas férias. Toda noite, eu rolo o meu feed por cerca de trinta minutos. Gosto de deixar comentários gentis nas fotos dos meus amigos. No entanto, tento não passar muito tempo online porque pode fazer mal aos meus olhos. A vida real está fora da tela.",
      questions: [
        {
          question: "What does the author post pictures of?",
          options: ["Pets and vacations", "Food and clothes", "Cars and houses", "Books and movies"],
          correctIndex: 0,
          explanation: "The author posts 'pictures of my pets and my vacations'."
        },
        {
          question: "How much time does the author spend scrolling through the feed every evening?",
          options: ["About thirty minutes", "One hour", "Five minutes", "All night"],
          correctIndex: 0,
          explanation: "They scroll 'for about thirty minutes'."
        },
        {
          question: "What does the author like to do on their friends' photos?",
          options: ["Leave nice comments", "Report the photos", "Ignore them", "Share them with strangers"],
          correctIndex: 0,
          explanation: "They 'like to leave nice comments on my friends' photos'."
        },
        {
          question: "Why does the author try to limit their online time?",
          options: ["Because it can be bad for their eyes", "Because their internet is slow", "Because their phone battery dies", "Because they dislike social media"],
          correctIndex: 0,
          explanation: "They try not to spend too much time online 'because it can be bad for my eyes'."
        },
        {
          question: "What does the author mean by 'Real life is outside the screen'?",
          options: ["That people should value physical interactions and experiences", "That computers belong outside", "That social media is completely useless", "That you should take your phone outside"],
          correctIndex: 0,
          explanation: "It implies that physical, real-world experiences are what truly matter."
        }
      ]
    },
    level2: {
      textEn: "Social media platforms have drastically altered how we perceive reality. While they offer inspiring stories and global connectivity, they also have a dark side. It is easy to mindlessly scroll through a timeline, comparing your behind-the-scenes to someone else's highlight reel. An embarrassing mistake can go viral overnight, permanently damaging someone's reputation. Finding a healthy balance between digital engagement and authentic living is the modern challenge.",
      textPt: "As plataformas de redes sociais alteraram drasticamente como percebemos a realidade. Embora ofereçam histórias inspiradoras e conectividade global, elas também têm um lado sombrio. É fácil rolar distraidamente por uma linha do tempo, comparando seus bastidores com os melhores momentos de outra pessoa. Um erro embaraçoso pode viralizar do dia para a noite, prejudicando permanentemente a reputação de alguém. Encontrar um equilíbrio saudável entre engajamento digital e vivência autêntica é o desafio moderno.",
      questions: [
        {
          question: "How have social media platforms affected us, according to the text?",
          options: ["They have drastically altered how we perceive reality", "They have made everyone much happier", "They have stopped global connectivity", "They have eliminated embarrassing mistakes"],
          correctIndex: 0,
          explanation: "They 'have drastically altered how we perceive reality'."
        },
        {
          question: "What does comparing 'your behind-the-scenes to someone else's highlight reel' mean?",
          options: ["Comparing your normal, flawed life to someone's curated, perfect posts", "Watching movies behind a screen", "Comparing two different sports teams", "Making a movie about your life"],
          correctIndex: 0,
          explanation: "It refers to comparing your everyday, flawed reality with the perfect moments people choose to share online."
        },
        {
          question: "What is described as an action people easily do on social media?",
          options: ["Mindlessly scrolling through a timeline", "Deleting their accounts", "Writing long books", "Never looking at photos"],
          correctIndex: 0,
          explanation: "It is easy to 'mindlessly scroll through a timeline'."
        },
        {
          question: "What can happen if an embarrassing mistake goes viral overnight?",
          options: ["It can permanently damage someone's reputation", "It will be forgotten by the next day", "It will make the person very rich", "It will inspire others"],
          correctIndex: 0,
          explanation: "It can 'permanently damaging someone's reputation'."
        },
        {
          question: "What is described as 'the modern challenge'?",
          options: ["Finding a healthy balance between digital engagement and authentic living", "Getting more followers", "Deleting all social media apps", "Making a viral video"],
          correctIndex: 0,
          explanation: "The modern challenge is 'Finding a healthy balance between digital engagement and authentic living'."
        }
      ]
    }
  }
};

function injectReadingDataCorrected(content, data) {
  let newContent = content;
  for (const [id, reading] of Object.entries(data)) {
    const scenarioStart = newContent.indexOf('id: "' + id + '"');
    if (scenarioStart === -1) continue;
    
    let nextId = newContent.indexOf("id: ", scenarioStart + 10);
    if (nextId === -1) nextId = newContent.length;
    
    if (newContent.indexOf("reading:", scenarioStart) !== -1 && newContent.indexOf("reading:", scenarioStart) < nextId) {
       console.log("Already has reading for " + id);
       continue;
    }

    const searchString = "available: true,";
    const insertPos = newContent.indexOf(searchString, scenarioStart);
    
    if (insertPos !== -1) {
      const readingStr = 'reading: ' + JSON.stringify(reading, null, 4) + ',\n    ';
      newContent = newContent.slice(0, insertPos + searchString.length) + '\n    ' + readingStr + newContent.slice(insertPos + searchString.length);
    }
  }
  return newContent;
}

const file3 = '../data/scenarios2.ts';
let c3 = fs.readFileSync(file3, 'utf8');

for (const sc in readingDataBatch3) {
  for (const lvl in readingDataBatch3[sc]) {
    for (let q of readingDataBatch3[sc][lvl].questions) {
      let correctOpt = q.options[q.correctIndex];
      for (let i = q.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
      }
      q.correctIndex = q.options.indexOf(correctOpt);
    }
  }
}

fs.writeFileSync(file3, injectReadingDataCorrected(c3, readingDataBatch3));
console.log("Batch 3 injected.");
