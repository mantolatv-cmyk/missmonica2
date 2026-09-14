const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'scenarios1.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const familiaFlashcards = `    flashcards: [
      { 
        english: "My mother is very kind.", portuguese: "Minha mãe é muito gentil.",
        levels: {
          A1: { en: "My mother is very kind.", pt: "Minha mãe é muito gentil." },
          A2: { en: "My mother usually cooks dinner for us every night.", pt: "Minha mãe normalmente cozinha o jantar para nós todas as noites." },
          B1: { en: "My mother has always encouraged me to follow my dreams.", pt: "Minha mãe sempre me encorajou a seguir meus sonhos." }
        }
      },
      { 
        english: "I have two brothers.", portuguese: "Eu tenho dois irmãos.",
        levels: {
          A1: { en: "I have two brothers.", pt: "Eu tenho dois irmãos." },
          A2: { en: "My two brothers play soccer together on weekends.", pt: "Meus dois irmãos jogam futebol juntos nos fins de semana." },
          B1: { en: "Both of my brothers have moved to different cities for work.", pt: "Ambos os meus irmãos se mudaram para cidades diferentes por causa do trabalho." }
        }
      },
      { 
        english: "My grandmother makes cookies.", portuguese: "Minha avó faz biscoitos.",
        levels: {
          A1: { en: "My grandmother makes cookies.", pt: "Minha avó faz biscoitos." },
          A2: { en: "My grandmother baked delicious chocolate cookies yesterday.", pt: "Minha avó assou deliciosos biscoitos de chocolate ontem." },
          B1: { en: "My grandmother has baked these traditional cookies since I was a baby.", pt: "Minha avó tem assado esses biscoitos tradicionais desde que eu era um bebê." }
        }
      },
      { 
        english: "My father works at a hospital.", portuguese: "Meu pai trabalha em um hospital.",
        levels: {
          A1: { en: "My father works at a hospital.", pt: "Meu pai trabalha em um hospital." },
          A2: { en: "My father drove to the hospital early in the morning.", pt: "Meu pai dirigiu para o hospital de manhã cedo." },
          B1: { en: "My father has worked as a dedicated nurse at the city hospital for years.", pt: "Meu pai tem trabalhado como um enfermeiro dedicado no hospital da cidade há anos." }
        }
      },
      { 
        english: "We are a big family.", portuguese: "Nós somos uma família grande.",
        levels: {
          A1: { en: "We are a big family.", pt: "Nós somos uma família grande." },
          A2: { en: "Our big family loves to travel to the beach every summer.", pt: "Nossa grande família adora viajar para a praia todo verão." },
          B1: { en: "Our extended family has always organized a huge reunion on Christmas.", pt: "Nossa família estendida sempre organizou uma enorme reunião no Natal." }
        }
      },
      { 
        english: "My grandfather tells stories.", portuguese: "Meu avô conta histórias.",
        levels: {
          A1: { en: "My grandfather tells stories.", pt: "Meu avô conta histórias." },
          A2: { en: "My grandfather told us a scary story last night.", pt: "Meu avô nos contou uma história assustadora noite passada." },
          B1: { en: "My grandfather has shared incredible stories about his youth with all his grandchildren.", pt: "Meu avô tem compartilhado histórias incríveis sobre sua juventude com todos os seus netos." }
        }
      },
      { 
        english: "She is my younger sister.", portuguese: "Ela é minha irmã mais nova.",
        levels: {
          A1: { en: "She is my younger sister.", pt: "Ela é minha irmã mais nova." },
          A2: { en: "My younger sister plays the piano very well.", pt: "Minha irmã mais nova toca piano muito bem." },
          B1: { en: "My younger sister has just won a prestigious award at her music school.", pt: "Minha irmã mais nova acabou de ganhar um prêmio de prestígio na escola de música dela." }
        }
      },
      { 
        english: "He loves his niece.", portuguese: "Ele ama a sobrinha dele.",
        levels: {
          A1: { en: "He loves his niece.", pt: "Ele ama a sobrinha dele." },
          A2: { en: "He bought a pink dress for his beautiful niece.", pt: "Ele comprou um vestido rosa para a sua linda sobrinha." },
          B1: { en: "He has always taken great care of his beloved niece.", pt: "Ele sempre cuidou muito bem da sua amada sobrinha." }
        }
      },
      { 
        english: "They are married.", portuguese: "Eles são casados.",
        levels: {
          A1: { en: "They are married.", pt: "Eles são casados." },
          A2: { en: "They got married in a beautiful church last year.", pt: "Eles se casaram em uma igreja linda no ano passado." },
          B1: { en: "They have been happily married for over two decades now.", pt: "Eles estão casados e felizes há mais de duas décadas agora." }
        }
      },
      { 
        english: "We visit our grandparents on weekends.", portuguese: "Nós visitamos nossos avós nos fins de semana.",
        levels: {
          A1: { en: "We visit our grandparents on weekends.", pt: "Nós visitamos nossos avós nos fins de semana." },
          A2: { en: "We visited our grandparents and ate lunch with them on Sunday.", pt: "Nós visitamos nossos avós e almoçamos com eles no domingo." },
          B1: { en: "We have visited our grandparents every single weekend without fail.", pt: "Nós temos visitado nossos avós todo santo fim de semana sem falta." }
        }
      },
      { 
        english: "His uncle is very rich.", portuguese: "O tio dele é muito rico.",
        levels: {
          A1: { en: "His uncle is very rich.", pt: "O tio dele é muito rico." },
          A2: { en: "His rich uncle bought a large house near the lake.", pt: "O tio rico dele comprou uma casa grande perto do lago." },
          B1: { en: "His uncle has built a highly successful business from the ground up.", pt: "O tio dele construiu um negócio altamente bem-sucedido do zero." }
        }
      },
      { 
        english: "I am an only child.", portuguese: "Eu sou filho(a) único(a).",
        levels: {
          A1: { en: "I am an only child.", pt: "Eu sou filho(a) único(a)." },
          A2: { en: "Because I am an only child, I have my own bedroom.", pt: "Como sou filho único, eu tenho meu próprio quarto." },
          B1: { en: "Being an only child has given me the opportunity to travel more often with my parents.", pt: "Ser filho único tem me dado a oportunidade de viajar mais frequentemente com meus pais." }
        }
      }
    ],`;

const amigosFlashcards = `    flashcards: [
      { 
        english: "She is my best friend.", portuguese: "Ela é minha melhor amiga.",
        levels: {
          A1: { en: "She is my best friend.", pt: "Ela é minha melhor amiga." },
          A2: { en: "My best friend listens to all my problems.", pt: "Minha melhor amiga ouve todos os meus problemas." },
          B1: { en: "She has been the most loyal best friend I could ever ask for.", pt: "Ela tem sido a melhor amiga mais leal que eu poderia pedir." }
        }
      },
      { 
        english: "Let's hang out this weekend.", portuguese: "Vamos sair este final de semana.",
        levels: {
          A1: { en: "Let's hang out this weekend.", pt: "Vamos sair este final de semana." },
          A2: { en: "We hung out at the shopping mall last Saturday.", pt: "Nós saímos no shopping no sábado passado." },
          B1: { en: "We haven't hung out much recently due to our tight schedules.", pt: "Nós não temos saído muito recentemente devido aos nossos horários apertados." }
        }
      },
      { 
        english: "I like chatting with you.", portuguese: "Eu gosto de bater papo com você.",
        levels: {
          A1: { en: "I like chatting with you.", pt: "Eu gosto de bater papo com você." },
          A2: { en: "We chatted on the phone for two hours yesterday.", pt: "Nós batemos papo no telefone por duas horas ontem." },
          B1: { en: "I have always enjoyed chatting with you about philosophy and life.", pt: "Eu sempre gostei de bater papo com você sobre filosofia e a vida." }
        }
      },
      { 
        english: "We are meeting up at the cafe.", portuguese: "Nós vamos nos encontrar no café.",
        levels: {
          A1: { en: "We are meeting up at the cafe.", pt: "Nós vamos nos encontrar no café." },
          A2: { en: "They met up at the library to study for the test.", pt: "Eles se encontraram na biblioteca para estudar para a prova." },
          B1: { en: "We have finally met up after months of trying to schedule a time.", pt: "Nós finalmente nos encontramos após meses tentando marcar um horário." }
        }
      },
      { 
        english: "They had a lot of fun.", portuguese: "Eles se divertiram muito.",
        levels: {
          A1: { en: "They had a lot of fun.", pt: "Eles se divertiram muito." },
          A2: { en: "We had a lot of fun playing board games together.", pt: "Nós nos divertimos muito jogando jogos de tabuleiro juntos." },
          B1: { en: "The group has had so much fun organizing this charity event.", pt: "O grupo tem se divertido muito organizando este evento de caridade." }
        }
      },
      { 
        english: "He is a good friend.", portuguese: "Ele é um bom amigo.",
        levels: {
          A1: { en: "He is a good friend.", pt: "Ele é um bom amigo." },
          A2: { en: "A good friend always helps you when you need it.", pt: "Um bom amigo sempre te ajuda quando você precisa." },
          B1: { en: "He has proven to be a good friend during the most challenging times.", pt: "Ele provou ser um bom amigo durante os tempos mais desafiadores." }
        }
      },
      { 
        english: "Do you want to come to my party?", portuguese: "Você quer vir à minha festa?",
        levels: {
          A1: { en: "Do you want to come to my party?", pt: "Você quer vir à minha festa?" },
          A2: { en: "I invited everyone from class to my birthday party.", pt: "Eu convidei todos da turma para a minha festa de aniversário." },
          B1: { en: "Have you received the formal invitation for the graduation party?", pt: "Você recebeu o convite formal para a festa de formatura?" }
        }
      },
      { 
        english: "I can always trust him.", portuguese: "Eu sempre posso confiar nele.",
        levels: {
          A1: { en: "I can always trust him.", pt: "Eu sempre posso confiar nele." },
          A2: { en: "I trusted him with my biggest secret.", pt: "Eu confiei a ele o meu maior segredo." },
          B1: { en: "I have trusted him blindly since the day he saved my job.", pt: "Eu confio cegamente nele desde o dia em que ele salvou o meu emprego." }
        }
      },
      { 
        english: "We get along really well.", portuguese: "Nós nos damos super bem.",
        levels: {
          A1: { en: "We get along really well.", pt: "Nós nos damos super bem." },
          A2: { en: "My brother and I didn't get along when we were kids.", pt: "Meu irmão e eu não nos dávamos bem quando éramos crianças." },
          B1: { en: "We have gotten along remarkably well despite our different backgrounds.", pt: "Nós temos nos dado notavelmente bem apesar das nossas origens diferentes." }
        }
      },
      { 
        english: "Thank you for the advice.", portuguese: "Obrigado pelo conselho.",
        levels: {
          A1: { en: "Thank you for the advice.", pt: "Obrigado pelo conselho." },
          A2: { en: "She gave me a great piece of advice about school.", pt: "Ela me deu um ótimo conselho sobre a escola." },
          B1: { en: "The advice you have given me has completely changed my perspective.", pt: "O conselho que você me deu mudou completamente a minha perspectiva." }
        }
      },
      { 
        english: "I am sorry, I apologize.", portuguese: "Sinto muito, peço desculpas.",
        levels: {
          A1: { en: "I am sorry, I apologize.", pt: "Sinto muito, peço desculpas." },
          A2: { en: "He apologized to the teacher for coming to class late.", pt: "Ele pediu desculpas ao professor por chegar atrasado na aula." },
          B1: { en: "I have already apologized sincerely for the misunderstanding.", pt: "Eu já pedi desculpas sinceramente pelo mal-entendido." }
        }
      },
      { 
        english: "Friends help each other.", portuguese: "Amigos ajudam uns aos outros.",
        levels: {
          A1: { en: "Friends help each other.", pt: "Amigos ajudam uns aos outros." },
          A2: { en: "My friends helped me carry the heavy boxes.", pt: "Meus amigos me ajudaram a carregar as caixas pesadas." },
          B1: { en: "True friends have always supported each other unconditionally.", pt: "Verdadeiros amigos sempre se apoiaram incondicionalmente." }
        }
      }
    ],`;

const regexFamilia = /flashcards:\s*\[[\s\S]*?\{\s*english:\s*"I am an only child\.",\s*portuguese:\s*"Eu sou filho\(a\) único\(a\)\."\s*\}\s*\],/;
const regexAmigos = /flashcards:\s*\[[\s\S]*?\{\s*english:\s*"Friends help each other\.",\s*portuguese:\s*"Amigos ajudam uns aos outros\."\s*\}\s*\],/;

content = content.replace(regexFamilia, familiaFlashcards);
content = content.replace(regexAmigos, amigosFlashcards);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ Flashcards dos cenários Família e Amigos atualizados com sucesso com Níveis A1, A2 e B1, contendo frases originais!');
