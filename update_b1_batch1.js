const fs = require('fs');
const path = require('path');

const b1Replacements = {
  // --- Familia ---
  "Mother / Mom": { en: "My mother has always been the pillar of our family during tough times.", pt: "Minha mãe sempre foi o pilar da nossa família durante os momentos difíceis." },
  "Father / Dad": { en: "My father has been working at the same hospital for over twenty years.", pt: "Meu pai trabalha no mesmo hospital há mais de vinte anos." },
  "Brother": { en: "My younger brother has recently graduated from university with honors.", pt: "Meu irmão mais novo se formou recentemente na universidade com honras." },
  "Sister": { en: "My sister has been studying abroad since last semester.", pt: "Minha irmã está estudando no exterior desde o semestre passado." },
  "Grandmother": { en: "We have visited my grandmother every Sunday since I was a little child.", pt: "Nós visitamos minha avó todo domingo desde que eu era criancinha." },
  "Grandfather": { en: "My grandfather has collected vintage stamps for most of his life.", pt: "Meu avô colecionou selos vintage por grande parte de sua vida." },
  "Aunt": { en: "My aunt has been living in another city, so we rarely get to see her.", pt: "Minha tia mora em outra cidade, então raramente conseguimos vê-la." },
  "Uncle": { en: "My uncle has just bought a new car and is planning a road trip.", pt: "Meu tio acabou de comprar um carro novo e está planejando uma viagem." },
  "Cousin": { en: "I haven't played video games with my cousin since we were teenagers.", pt: "Eu não jogo videogame com meu primo desde que éramos adolescentes." },
  "Parents": { en: "My parents have always been very strict regarding my academic performance.", pt: "Meus pais sempre foram muito rigorosos em relação ao meu desempenho acadêmico." },
  "Nephew": { en: "My nephew has grown so much that I hardly recognized him.", pt: "Meu sobrinho cresceu tanto que mal o reconheci." },
  "Niece": { en: "I have already bought a beautiful educational toy for my niece's birthday.", pt: "Eu já comprei um lindo brinquedo educativo para o aniversário da minha sobrinha." },
  "Grandson": { en: "The grandfather has spent the entire afternoon playing board games with his grandson.", pt: "O avô passou a tarde inteira jogando jogos de tabuleiro com seu neto." },
  "Granddaughter": { en: "She has become the very first granddaughter in our entire extended family.", pt: "Ela se tornou a primeiríssima neta em toda a nossa família estendida." },
  "Wife": { en: "He has bought beautiful red flowers for his wife to celebrate their anniversary.", pt: "Ele comprou lindas flores vermelhas para sua esposa para celebrar o aniversário de casamento." },
  "Husband": { en: "Her husband has been working as a leading doctor at the local clinic.", pt: "O marido dela tem trabalhado como médico chefe na clínica local." },
  "Mother-in-law": { en: "My mother-in-law has cooked an incredible feast for our family gathering.", pt: "Minha sogra cozinhou um banquete incrível para a nossa reunião de família." },
  "Father-in-law": { en: "My father-in-law has always been the one to tell the funniest jokes at dinners.", pt: "Meu sogro sempre foi quem conta as piadas mais engraçadas nos jantares." },
  "Stepmother": { en: "His stepmother has been extremely supportive since she joined our family.", pt: "A madrasta dele tem dado muito apoio desde que entrou para a nossa família." },
  "Stepfather": { en: "My stepfather has already taught me how to drive safely on the highway.", pt: "Meu padrasto já me ensinou a dirigir com segurança na rodovia." },

  // --- Amigos ---
  "Friend": { en: "He has been a supportive friend who always helps me overcome challenges.", pt: "Ele tem sido um amigo apoiador que sempre me ajuda a superar desafios." },
  "Best friend": { en: "She has been my most trusted best friend since we first met in elementary school.", pt: "Ela tem sido minha melhor amiga de maior confiança desde que nos conhecemos no ensino fundamental." },
  "Hang out": { en: "We haven't hung out much lately because everyone has been busy with work.", pt: "Nós não temos saído muito ultimamente porque todos têm estado ocupados com o trabalho." },
  "Meet up": { en: "We have agreed to meet up at the downtown cafe right after our shift ends.", pt: "Nós concordamos em nos encontrar no café do centro logo após o fim do nosso turno." },
  "Chat": { en: "I have really enjoyed chatting with you about our goals and future plans.", pt: "Eu tenho gostado muito de bater papo com você sobre nossos objetivos e planos futuros." },
  "Fun": { en: "The surprise party at your house has been the most fun event of the year.", pt: "A festa surpresa na sua casa foi o evento mais divertido do ano." },
  "Invite": { en: "I have already invited all my closest friends to celebrate at my house.", pt: "Eu já convidei todos os meus amigos mais próximos para celebrar na minha casa." },
  "Party": { en: "Have you decided if you are going to attend the graduation party tonight?", pt: "Você já decidiu se vai comparecer à festa de formatura hoje à noite?" },
  "Group": { en: "Our friend group has remained incredibly united despite the distance between us.", pt: "Nosso grupo de amigos permaneceu incrivelmente unido apesar da distância entre nós." },
  "Share": { en: "We have always shared our deepest secrets and personal struggles with each other.", pt: "Nós sempre compartilhamos nossos segredos mais profundos e lutas pessoais uns com os outros." },
  "Trust": { en: "I have trusted my friends completely with this sensitive information.", pt: "Eu tenho confiado nos meus amigos completamente com essa informação delicada." },
  "Keep a secret": { en: "Have you ever struggled to keep a major secret about a surprise party?", pt: "Você já teve dificuldade para guardar um grande segredo sobre uma festa surpresa?" },
  "Argue": { en: "We have argued a few times in the past, but we have always managed to fix things.", pt: "Nós discutimos algumas vezes no passado, mas sempre conseguimos consertar as coisas." },
  "Apologize": { en: "He has finally apologized for being inappropriately late to the important meeting.", pt: "Ele finalmente pediu desculpas por se atrasar de forma inadequada para a reunião importante." },
  "Help out": { en: "True friends have always helped out whenever someone is going through a tough phase.", pt: "Verdadeiros amigos sempre ajudaram quando alguém está passando por uma fase difícil." },
  "Joke": { en: "He has just told one of the most hilarious jokes I have heard in a long time.", pt: "Ele acabou de contar uma das piadas mais hilárias que ouvi em muito tempo." },
  "Support": { en: "Good friends have always supported each other unconditionally during hard times.", pt: "Bons amigos sempre se apoiaram incondicionalmente durante tempos difíceis." },
  "Advice": { en: "I have recently asked him to give me some professional advice about my career path.", pt: "Recentemente pedi a ele que me desse um conselho profissional sobre minha carreira." },
  "Get along": { en: "They have gotten along surprisingly well since their very first day at school.", pt: "Eles têm se dado surpreendentemente bem desde o primeiríssimo dia na escola." },
  "Introductions": { en: "I have already done the introductions so that everyone feels comfortable and welcome.", pt: "Eu já fiz as apresentações para que todos se sintam confortáveis e bem-vindos." },
};

const filePath = path.join(__dirname, 'data', 'scenarios1.ts');
let content = fs.readFileSync(filePath, 'utf-8');
let matchCount = 0;

// Encontra todas as declarações de vocabulary e substitui o B1 usando o dicionário
for (const [word, b1Replacement] of Object.entries(b1Replacements)) {
  // Regex to match the vocabulary line for this specific word
  // Pattern: { english: "word", portuguese: "...", examples: { A1: {...}, A2: {...}, B1: { en: "...", pt: "..." } } }
  
  // Escape potential regex characters in word (though we don't have any here except maybe parenthesis, wait, Cousin is "Primo(a)")
  const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  
  const regex = new RegExp(`(english:\\s*["'\`]${escapedWord}["'\`].*?B1:\\s*\\{\\s*en:\\s*["'\`]).*?(["'\`]\\s*,\\s*pt:\\s*["'\`]).*?(["'\`]\\s*\\}\\s*\\}\\s*\\})`, 'g');
  
  content = content.replace(regex, (match, prefix, mid, suffix) => {
    matchCount++;
    return `${prefix}${b1Replacement.en}${mid}${b1Replacement.pt}${suffix}`;
  });
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`✅ Substituição finalizada! ${matchCount} frases do nível B1 atualizadas com conteúdo mais avançado.`);
