const fs = require('fs');

const readingData = {
  "familia": {
    level1: {
      textEn: "My family is very big and we live in different cities. Every Sunday, my mother and my father cook a large lunch. My sister comes with her husband and my nephew. My grandmother always brings a delicious cake for dessert. I love spending time with them because we laugh a lot. It is the best day of the week.",
      textPt: "Minha família é muito grande e moramos em cidades diferentes. Todo domingo, minha mãe e meu pai cozinham um grande almoço. Minha irmã vem com o marido dela e meu sobrinho. Minha avó sempre traz um bolo delicioso para a sobremesa. Eu amo passar o tempo com eles porque rimos muito. É o melhor dia da semana.",
      questions: [
        {
          question: "What is the main reason the author enjoys Sundays?",
          options: ["Because the family laughs a lot together", "Because they eat cake", "Because the grandmother visits", "Because the family lives in different cities"],
          correctIndex: 0,
          explanation: "The text says: 'I love spending time with them because we laugh a lot.'"
        },
        {
          question: "Who prepares the main meal on Sundays?",
          options: ["The author's parents", "The grandmother", "The sister's husband", "The nephew"],
          correctIndex: 0,
          explanation: "The mother and father cook a large lunch."
        },
        {
          question: "Based on the text, what does 'dessert' most likely mean?",
          options: ["A sweet food eaten after the main meal", "A type of hot drink", "A traditional dance", "A dry place with sand"],
          correctIndex: 0,
          explanation: "Dessert is a sweet dish (like the cake mentioned) served at the end of a meal."
        },
        {
          question: "How many generations of the family are mentioned as attending the lunch?",
          options: ["Three (Grandmother, Parents, Nephew)", "Two", "Four", "One"],
          correctIndex: 0,
          explanation: "Grandmother (1st), Parents/Aunt (2nd), Nephew (3rd)."
        },
        {
          question: "What can be inferred about the family's living situation?",
          options: ["They have to travel to see each other on Sundays", "They all live in the same house", "They never see each other", "The parents live with the grandmother"],
          correctIndex: 0,
          explanation: "Since they live in different cities, they must travel to gather on Sundays."
        }
      ]
    },
    level2: {
      textEn: "Family dynamics can change significantly across different generations. In the past, the elderly were the sole guardians of tradition, but today, teenagers and youths are also shaping our culture. For example, my stepmother and my father-in-law often discuss how technology affects relationships. Despite these changes, the bond between relatives, whether they are twins or distant cousins, remains a crucial part of our childhood and beyond.",
      textPt: "A dinâmica familiar pode mudar significativamente através de diferentes gerações. No passado, os idosos eram os únicos guardiões da tradição, mas hoje, adolescentes e jovens também estão moldando nossa cultura. Por exemplo, minha madrasta e meu sogro frequentemente discutem como a tecnologia afeta os relacionamentos. Apesar dessas mudanças, o vínculo entre parentes, sejam eles gêmeos ou primos distantes, permanece uma parte crucial de nossa infância e além.",
      questions: [
        {
          question: "According to the text, who currently has an influence on shaping culture?",
          options: ["Both older and younger generations", "Only the elderly", "Only teenagers", "Only the stepmother and father-in-law"],
          correctIndex: 0,
          explanation: "The text states that today, teenagers and youths are also shaping culture, alongside the traditions of the past."
        },
        {
          question: "What is the central theme of the text?",
          options: ["The evolution of family roles and enduring bonds", "Why technology is bad for families", "How to raise twins", "The differences between childhood and adulthood"],
          correctIndex: 0,
          explanation: "The text contrasts past and present family dynamics while emphasizing that family bonds remain crucial."
        },
        {
          question: "In the context of the text, what does 'guardians' mean?",
          options: ["Protectors or keepers of something", "Legal parents", "Security guards", "Distant relatives"],
          correctIndex: 0,
          explanation: "Here, 'guardians' refers to the elderly protecting and keeping traditions alive."
        },
        {
          question: "What do the stepmother and father-in-law typically talk about?",
          options: ["The impact of modern tools on human connection", "Their childhood memories", "How to shape culture", "The best way to raise youths"],
          correctIndex: 0,
          explanation: "They discuss how technology (modern tools) affects relationships (human connection)."
        },
        {
          question: "Which of the following is stated as remaining constant despite societal changes?",
          options: ["The importance of family connections", "The way teenagers use technology", "The traditions kept by the elderly", "The physical distance between relatives"],
          correctIndex: 0,
          explanation: "The bond between relatives remains a crucial part of life, despite changes."
        }
      ]
    }
  },
  "amigos": {
    level1: {
      textEn: "Good friends are hard to find. My best friend is Lucas. We met at school five years ago. He is very funny and always helps me when I have a problem. On weekends, we usually play video games or go to the park to play soccer. Sometimes we argue, but we always say sorry. A true friendship makes life much better.",
      textPt: "Bons amigos são difíceis de encontrar. Meu melhor amigo é Lucas. Nos conhecemos na escola há cinco anos. Ele é muito engraçado e sempre me ajuda quando tenho um problema. Nos finais de semana, geralmente jogamos videogame ou vamos ao parque jogar futebol. Às vezes nós discutimos, mas sempre pedimos desculpas. Uma amizade verdadeira torna a vida muito melhor.",
      questions: [
        {
          question: "How long have the author and Lucas known each other?",
          options: ["For half a decade", "Since they were born", "For five months", "They just met"],
          correctIndex: 0,
          explanation: "They met five years ago (a decade is 10 years, so half a decade is 5)."
        },
        {
          question: "What happens when the two friends have a disagreement?",
          options: ["They apologize to each other", "They stop talking for weeks", "They play video games to forget it", "They find new friends"],
          correctIndex: 0,
          explanation: "The text says 'Sometimes we argue, but we always say sorry'."
        },
        {
          question: "Which of the following best describes Lucas's personality based on the text?",
          options: ["Humorous and supportive", "Quiet and shy", "Athletic and competitive", "Serious and busy"],
          correctIndex: 0,
          explanation: "He is described as 'very funny' (humorous) and 'always helps me' (supportive)."
        },
        {
          question: "Where did the friendship begin?",
          options: ["In an educational setting", "At a soccer match", "In a video game lobby", "At the local park"],
          correctIndex: 0,
          explanation: "They met at school."
        },
        {
          question: "What is the author's overall view on friendship?",
          options: ["It improves the quality of life", "It is too much hard work", "It is only about having fun", "It distracts from school"],
          correctIndex: 0,
          explanation: "The text concludes: 'A true friendship makes life much better.'"
        }
      ]
    },
    level2: {
      textEn: "Maintaining a friendship as an adult requires effort and mutual understanding. We often gather to celebrate milestones or just to offer support during tough times. Sometimes, personalities clash and we disagree, but the ability to forgive is what makes a team strong. Humor is a fantastic tool to assist in resolving conflicts. Ultimately, a good match between friends encourages personal growth.",
      textPt: "Manter uma amizade na fase adulta exige esforço e compreensão mútua. Nós frequentemente nos reunimos para celebrar marcos ou apenas para oferecer apoio em tempos difíceis. Às vezes, as personalidades entram em conflito e nós discordamos, mas a capacidade de perdoar é o que torna uma equipe forte. O humor é uma ferramenta fantástica para ajudar a resolver conflitos. No final das contas, uma boa combinação entre amigos encoraja o crescimento pessoal.",
      questions: [
        {
          question: "According to the text, what is essential for an adult friendship to survive?",
          options: ["Active effort and empathy", "Living close to each other", "Never having arguments", "Having the exact same personality"],
          correctIndex: 0,
          explanation: "It requires 'effort and mutual understanding' (empathy)."
        },
        {
          question: "What does the phrase 'personalities clash' imply?",
          options: ["People have conflicting traits or opinions", "People physically fight", "Friends stop talking forever", "People always agree with each other"],
          correctIndex: 0,
          explanation: "A clash of personalities means they have differences that cause disagreement."
        },
        {
          question: "How does the author view 'forgiveness'?",
          options: ["As a strengthening factor for the group", "As a sign of weakness", "As something that is rarely needed", "As a way to ignore problems"],
          correctIndex: 0,
          explanation: "The text states 'the ability to forgive is what makes a team strong'."
        },
        {
          question: "What role does humor play in friendships, according to the text?",
          options: ["It helps to solve disagreements", "It distracts from the real issues", "It is only useful during celebrations", "It causes more conflicts"],
          correctIndex: 0,
          explanation: "Humor is described as 'a fantastic tool to assist in resolving conflicts'."
        },
        {
          question: "What is the ultimate benefit of a compatible friendship?",
          options: ["It promotes individual development", "It provides financial support", "It ensures you always have a team to play with", "It prevents you from making mistakes"],
          correctIndex: 0,
          explanation: "The text concludes that a good match 'encourages personal growth' (individual development)."
        }
      ]
    }
  },
  "corpo": {
    level1: {
      textEn: "Taking care of your body is very important. You should brush your teeth every day and wash your face in the morning. When my head hurts, I drink water and rest in a quiet room. My brother broke his arm last year, and the doctor put a cast on it. Our bones and muscles need healthy food to stay strong. A good night of sleep is the best medicine.",
      textPt: "Cuidar do seu corpo é muito importante. Você deve escovar os dentes todos os dias e lavar o rosto de manhã. Quando minha cabeça dói, bebo água e descanso em um quarto silencioso. Meu irmão quebrou o braço no ano passado, e o médico colocou gesso. Nossos ossos e músculos precisam de comida saudável para se manterem fortes. Uma boa noite de sono é o melhor remédio.",
      questions: [
        {
          question: "What is the main message of the text?",
          options: ["Basic health and hygiene habits are essential", "You should only drink water when you are sick", "Broken bones are very common", "Doctors are always needed"],
          correctIndex: 0,
          explanation: "The text gives general advice on hygiene, diet, sleep, and handling minor issues."
        },
        {
          question: "How does the author handle a headache?",
          options: ["By hydrating and relaxing in silence", "By taking strong medication immediately", "By eating healthy food", "By going to the doctor"],
          correctIndex: 0,
          explanation: "The author says 'I drink water and rest in a quiet room'."
        },
        {
          question: "What did the doctor do when the brother broke his arm?",
          options: ["Applied a hard protective covering (cast)", "Gave him medicine", "Told him to sleep", "Washed his arm"],
          correctIndex: 0,
          explanation: "The doctor 'put a cast on it'."
        },
        {
          question: "According to the text, why do we need healthy food?",
          options: ["To maintain the strength of our skeletal and muscular systems", "To help us sleep better at night", "To cure a headache", "To make our skin look better"],
          correctIndex: 0,
          explanation: "Healthy food is needed for 'our bones and muscles... to stay strong'."
        },
        {
          question: "What does the author consider 'the best medicine'?",
          options: ["Adequate rest at night", "Drinking a lot of water", "Brushing your teeth", "Wearing a cast"],
          correctIndex: 0,
          explanation: "The text ends with 'A good night of sleep is the best medicine.'"
        }
      ]
    },
    level2: {
      textEn: "Human anatomy is incredibly complex. The spine supports our posture, while joints like the knee allow flexibility. If you can't breathe well through your nose, it might affect your throat. Routine checkups are vital; for instance, visiting the dentist prevents serious issues. Even a small injury to the thumb or the heel can disrupt your daily routine. Understanding your body helps you maintain a healthy and active lifestyle.",
      textPt: "A anatomia humana é incrivelmente complexa. A coluna sustenta nossa postura, enquanto articulações como o joelho permitem flexibilidade. Se você não consegue respirar bem pelo nariz, isso pode afetar sua garganta. Exames de rotina são vitais; por exemplo, visitar o dentista previne problemas graves. Até mesmo uma pequena lesão no polegar ou no calcanhar pode atrapalhar sua rotina diária. Entender seu corpo ajuda a manter um estilo de vida saudável e ativo.",
      questions: [
        {
          question: "What is the primary function of the spine mentioned in the text?",
          options: ["Maintaining the body's upright position", "Providing flexibility to the legs", "Protecting the throat", "Helping with breathing"],
          correctIndex: 0,
          explanation: "The spine 'supports our posture' (upright position)."
        },
        {
          question: "How are the nose and throat connected in this context?",
          options: ["Nasal breathing issues can negatively impact the throat", "They are both part of the spine", "They both require dentist visits", "They are both considered joints"],
          correctIndex: 0,
          explanation: "The text states: 'If you can't breathe well through your nose, it might affect your throat.'"
        },
        {
          question: "Why does the author mention the thumb and the heel?",
          options: ["To illustrate how minor injuries can have a major impact", "Because they are the most important joints", "To show why posture is important", "Because they are the hardest parts to heal"],
          correctIndex: 0,
          explanation: "It mentions them to show that 'Even a small injury... can disrupt your daily routine.'"
        },
        {
          question: "What does the word 'disrupt' most likely mean here?",
          options: ["Interrupt or cause a problem in", "Improve significantly", "Heal completely", "Support perfectly"],
          correctIndex: 0,
          explanation: "An injury disrupts (interrupts/causes problems for) a routine."
        },
        {
          question: "What is the ultimate goal of understanding human anatomy, according to the conclusion?",
          options: ["To facilitate a healthy and active life", "To become a professional dentist", "To never get injured again", "To avoid visiting doctors"],
          correctIndex: 0,
          explanation: "It 'helps you maintain a healthy and active lifestyle'."
        }
      ]
    }
  }
};

function injectReadingData(content, data) {
  let newContent = content;
  for (const [id, reading] of Object.entries(data)) {
    const scenarioStart = newContent.indexOf(`id: "${id}"`);
    if (scenarioStart === -1) continue;

    // We will inject the 'reading' property right before 'usefulExpressions' or at the end of the object.
    // Let's find the end of the scenario object safely.
    // A safe place is right after 'speakingPracticeLevel2: { ... },'
    
    // Instead of complex parsing, let's just use string replacement.
    // We can replace 'usefulExpressions:' with 'reading: ' + JSON.stringify(reading) + ',\n    usefulExpressions:'
    // Or if it doesn't have usefulExpressions, we can find 'icon:' and replace it.
    
    // Actually, 'available: true,' is in every scenario.
    const searchString = "available: true,";
    const insertPos = newContent.indexOf(searchString, scenarioStart);
    
    if (insertPos !== -1) {
      const readingStr = `reading: ${JSON.stringify(reading, null, 4)},\n    `;
      newContent = newContent.slice(0, insertPos + searchString.length) + '\n    ' + readingStr + newContent.slice(insertPos + searchString.length);
    }
  }
  return newContent;
}

const c1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');

// The reading object will have options that need to be shuffled for consistency with what we just did!
// Let's shuffle them right here before injecting.
for (const sc in readingData) {
  for (const lvl in readingData[sc]) {
    for (let q of readingData[sc][lvl].questions) {
      let correctOpt = q.options[q.correctIndex];
      for (let i = q.options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
      }
      q.correctIndex = q.options.indexOf(correctOpt);
    }
  }
}

fs.writeFileSync('../data/scenarios1.ts', injectReadingData(c1, readingData));
console.log("Reading data injected");
