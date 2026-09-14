const fs = require('fs');

const b1Replacements = {
  // --- Familia ---
  "Mother / Mom": { en: "My mother always supported our family during tough times.", pt: "Minha mãe sempre apoiou nossa família durante os momentos difíceis." },
  "Father / Dad": { en: "My father worked at the same hospital for twenty years.", pt: "Meu pai trabalhou no mesmo hospital por vinte anos." },
  "Brother": { en: "My younger brother graduated from university with honors.", pt: "Meu irmão mais novo se formou na universidade com honras." },
  "Sister": { en: "My sister studied abroad last semester.", pt: "Minha irmã estudou no exterior no semestre passado." },
  "Grandmother": { en: "We visited my grandmother every Sunday when I was a child.", pt: "Nós visitávamos minha avó todo domingo quando eu era criança." },
  "Grandfather": { en: "My grandfather collected vintage stamps all his life.", pt: "Meu avô colecionou selos vintage a vida toda." },
  "Aunt": { en: "My aunt lives in another city, so we rarely see her.", pt: "Minha tia mora em outra cidade, então raramente a vemos." },
  "Uncle": { en: "My uncle bought a new car and planned a road trip.", pt: "Meu tio comprou um carro novo e planejou uma viagem." },
  "Cousin": { en: "I played video games with my cousin when we were teenagers.", pt: "Eu jogava videogame com meu primo quando éramos adolescentes." },
  "Parents": { en: "My parents were always very strict regarding my academic performance.", pt: "Meus pais sempre foram muito rigorosos em relação ao meu desempenho acadêmico." },
  "Nephew": { en: "My nephew grew so much that I hardly recognized him.", pt: "Meu sobrinho cresceu tanto que mal o reconheci." },
  "Niece": { en: "I bought a beautiful educational toy for my niece's birthday.", pt: "Eu comprei um lindo brinquedo educativo para o aniversário da minha sobrinha." },
  "Grandson": { en: "The grandfather spent the entire afternoon playing board games with his grandson.", pt: "O avô passou a tarde inteira jogando jogos de tabuleiro com seu neto." },
  "Granddaughter": { en: "She became the very first granddaughter in our family.", pt: "Ela se tornou a primeira neta na nossa família." },
  "Wife": { en: "He bought beautiful red flowers for his wife.", pt: "Ele comprou lindas flores vermelhas para sua esposa." },
  "Husband": { en: "Her husband works as a leading doctor at the local clinic.", pt: "O marido dela trabalha como médico chefe na clínica local." },
  "Mother-in-law": { en: "My mother-in-law cooked an incredible feast for our gathering.", pt: "Minha sogra cozinhou um banquete incrível para a nossa reunião." },
  "Father-in-law": { en: "My father-in-law always told the funniest jokes at dinners.", pt: "Meu sogro sempre contava as piadas mais engraçadas nos jantares." },
  "Stepmother": { en: "His stepmother supported him a lot when she joined our family.", pt: "A madrasta dele o apoiou muito quando se juntou à nossa família." },
  "Stepfather": { en: "My stepfather taught me how to drive safely.", pt: "Meu padrasto me ensinou a dirigir com segurança." },

  // --- Amigos ---
  "Friend": { en: "He was a supportive friend who always helped me overcome challenges.", pt: "Ele foi um amigo apoiador que sempre me ajudou a superar desafios." },
  "Best friend": { en: "She was my most trusted best friend in elementary school.", pt: "Ela era minha melhor amiga de maior confiança no ensino fundamental." },
  "Hang out": { en: "We rarely hung out because everyone was busy with work.", pt: "Nós raramente saíamos porque todos estavam ocupados com o trabalho." },
  "Meet up": { en: "We agreed to meet up at the downtown cafe right after our shift.", pt: "Nós concordamos em nos encontrar no café do centro logo após o nosso turno." },
  "Chat": { en: "I really enjoyed chatting with you about our future plans.", pt: "Eu gostei muito de bater papo com você sobre nossos planos futuros." },
  "Fun": { en: "The surprise party at your house was the most fun event of the year.", pt: "A festa surpresa na sua casa foi o evento mais divertido do ano." },
  "Invite": { en: "I invited all my closest friends to celebrate at my house.", pt: "Eu convidei todos os meus amigos mais próximos para celebrar na minha casa." },
  "Party": { en: "Did you attend the graduation party last night?", pt: "Você compareceu à festa de formatura ontem à noite?" },
  "Group": { en: "Our friend group remained incredibly united despite the distance.", pt: "Nosso grupo de amigos permaneceu incrivelmente unido apesar da distância." },
  "Share": { en: "We always shared our deepest secrets with each other.", pt: "Nós sempre compartilhávamos nossos segredos mais profundos uns com os outros." },
  "Trust": { en: "I trusted my friends completely with this sensitive information.", pt: "Eu confiei nos meus amigos completamente com essa informação delicada." },
  "Keep a secret": { en: "Did you keep the major secret about the surprise party?", pt: "Você guardou o grande segredo sobre a festa surpresa?" },
  "Argue": { en: "We argued a few times in the past, but we fixed things.", pt: "Nós discutimos algumas vezes no passado, mas consertamos as coisas." },
  "Apologize": { en: "He finally apologized for being late to the important meeting.", pt: "Ele finalmente pediu desculpas por se atrasar para a reunião importante." },
  "Help out": { en: "True friends always helped out when someone faced a tough phase.", pt: "Verdadeiros amigos sempre ajudavam quando alguém enfrentava uma fase difícil." },
  "Joke": { en: "He told one of the most hilarious jokes I ever heard.", pt: "Ele contou uma das piadas mais hilárias que já ouvi." },
  "Support": { en: "Good friends always supported each other unconditionally during hard times.", pt: "Bons amigos sempre se apoiavam incondicionalmente durante tempos difíceis." },
  "Advice": { en: "I asked him to give me some professional advice about my career.", pt: "Eu pedi a ele que me desse um conselho profissional sobre minha carreira." },
  "Get along": { en: "They got along surprisingly well on their first day at school.", pt: "Eles se deram surpreendentemente bem no primeiro dia na escola." },
  "Introductions": { en: "I did the introductions so that everyone felt comfortable.", pt: "Eu fiz as apresentações para que todos se sentissem confortáveis." },

  // --- Corpo ---
  "Head": { en: "He bumped his head on the low ceiling yesterday.", pt: "Ele bateu a cabeça no teto baixo ontem." },
  "Arm": { en: "She broke her arm while playing basketball.", pt: "Ela quebrou o braço enquanto jogava basquete." },
  "Leg": { en: "He injured his leg during the marathon.", pt: "Ele machucou a perna durante a maratona." },
  "Hand": { en: "She washed her hands before dinner.", pt: "Ela lavou as mãos antes do jantar." },
  "Foot / Feet": { en: "His feet hurt after a long day of walking.", pt: "Os pés dele doíam após um longo dia caminhando." },
  "Eyes": { en: "She closed her eyes and fell asleep.", pt: "Ela fechou os olhos e adormeceu." },
  "Hair": { en: "He cut his hair very short last week.", pt: "Ele cortou o cabelo bem curto semana passada." },
  "Mouth": { en: "The dentist asked him to open his mouth.", pt: "O dentista pediu a ele que abrisse a boca." },
  "Nose": { en: "Her nose bled after she fell down.", pt: "O nariz dela sangrou depois que ela caiu." },
  "Ears": { en: "He covered his ears because of the loud noise.", pt: "Ele cobriu as orelhas por causa do barulho alto." },
  "Shoulder": { en: "She carried the heavy bag on her shoulder.", pt: "Ela carregou a bolsa pesada no ombro." },
  "Knee": { en: "He scraped his knee when he tripped on the sidewalk.", pt: "Ele ralou o joelho quando tropeçou na calçada." },
  "Fingers": { en: "She burned her fingers on the hot stove.", pt: "Ela queimou os dedos no fogão quente." },
  "Toes": { en: "He stubbed his toes on the wooden door.", pt: "Ele bateu os dedos dos pés na porta de madeira." },
  "Stomach": { en: "His stomach ached after he ate too much spicy food.", pt: "O estômago dele doeu depois que ele comeu muita comida apimentada." },
  "Back": { en: "She injured her back lifting heavy boxes.", pt: "Ela machucou as costas levantando caixas pesadas." },
  "Neck": { en: "He wore a thick scarf around his neck during winter.", pt: "Ele usou um cachecol grosso no pescoço durante o inverno." },
  "Teeth": { en: "She brushed her teeth twice every day.", pt: "Ela escovava os dentes duas vezes todos os dias." },
  "Tongue": { en: "He accidentally bit his tongue while chewing.", pt: "Ele acidentalmente mordeu a língua enquanto mastigava." },
  "Lips": { en: "Her lips felt dry in the cold weather.", pt: "Os lábios dela ficaram secos no clima frio." },

  // --- Casa ---
  "Living room": { en: "We watched movies in the living room every Friday.", pt: "Nós assistíamos a filmes na sala de estar toda sexta-feira." },
  "Kitchen": { en: "She cooked a delicious meal in the kitchen.", pt: "Ela cozinhou uma refeição deliciosa na cozinha." },
  "Bedroom": { en: "He cleaned his bedroom before guests arrived.", pt: "Ele limpou seu quarto antes de os convidados chegarem." },
  "Bathroom": { en: "She took a long shower in the bathroom.", pt: "Ela tomou um banho longo no banheiro." },
  "Sweep the floor": { en: "He swept the floor after the party ended.", pt: "Ele varreu o chão depois que a festa acabou." },
  "Do the dishes": { en: "She did the dishes while he dried them.", pt: "Ela lavou a louça enquanto ele as secava." },
  "Make the bed": { en: "I made the bed as soon as I woke up.", pt: "Eu arrumei a cama assim que acordei." },
  "Take out the trash": { en: "He took out the trash before going to work.", pt: "Ele tirou o lixo antes de ir para o trabalho." },
  "Clean": { en: "They cleaned the entire house on Saturday morning.", pt: "Eles limparam a casa inteira no sábado de manhã." },
  "Laundry": { en: "She did the laundry because she needed clean clothes.", pt: "Ela lavou as roupas porque precisava de roupas limpas." },
  "Iron the clothes": { en: "He ironed his clothes for the important meeting.", pt: "Ele passou suas roupas para a reunião importante." },
  "Dust the furniture": { en: "She dusted the furniture to keep the house neat.", pt: "Ela tirou o pó dos móveis para manter a casa arrumada." },
  "Vacuum": { en: "He vacuumed the carpets to remove all the dirt.", pt: "Ele aspirou os tapetes para remover toda a sujeira." },
  "Garage": { en: "He parked his new car in the garage.", pt: "Ele estacionou seu carro novo na garagem." },
  "Garden / Yard": { en: "She planted beautiful roses in the garden last spring.", pt: "Ela plantou lindas rosas no jardim na primavera passada." },
  "Window": { en: "He opened the window to let fresh air inside.", pt: "Ele abriu a janela para deixar o ar fresco entrar." },
  "Door": { en: "She locked the front door before going to bed.", pt: "Ela trancou a porta da frente antes de ir para a cama." },
  "Roof": { en: "The storm severely damaged the roof of our house.", pt: "A tempestade danificou severamente o telhado da nossa casa." },
  "Stairs": { en: "He ran up the stairs to grab his forgotten keys.", pt: "Ele correu pelas escadas para pegar as chaves esquecidas." },
  "Mirror": { en: "She looked at herself in the mirror before leaving.", pt: "Ela olhou para si mesma no espelho antes de sair." }
};

const filePath = '../data/scenarios1.ts';
let content = fs.readFileSync(filePath, 'utf-8');

for (const [word, b1Replacement] of Object.entries(b1Replacements)) {
  const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(\`(english:\\s*["'\`]\\$\{escapedWord\}["'\`][\\s\\S]\{0,300\}?B1:\\s*\\{\\s*en:\\s*["'\`])[^"'\`]+(["'\`]\\s*,\\s*pt:\\s*["'\`])[^"'\`]+(["'\`]\\s*\\})\`, 'g');
  
  content = content.replace(regex, (match, prefix, mid, suffix) => {
    return `${prefix}${b1Replacement.en}${mid}${b1Replacement.pt}${suffix}`;
  });
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`Updated first 4 scenarios.`);
