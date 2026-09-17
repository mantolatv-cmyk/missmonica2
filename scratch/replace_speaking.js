const fs = require('fs');

const words = JSON.parse(fs.readFileSync('scratch/words_to_fix.json', 'utf8'));

function generateQuestion(word) {
  const lower = word.toLowerCase();
  let en = "";
  let pt = "";

  const isOneOf = (list) => list.some(w => lower === w.toLowerCase());
  
  const family = ["Mother / Mom", "Father / Dad", "Brother", "Sister", "Grandmother", "Grandfather", "Aunt", "Uncle", "Cousin", "Parents", "Nephew", "Niece", "Grandson", "Granddaughter", "Wife", "Husband", "Mother-in-law", "Father-in-law", "Stepmother", "Stepfather"];
  const friends_verbs = ["Hang out", "Meet up", "Chat", "Invite", "Share", "Trust", "Keep a secret", "Argue", "Apologize", "Help out", "Joke", "Support", "Get along"];
  const friends_nouns = ["Friend", "Best friend", "Fun", "Party", "Group", "Advice", "Introductions"];
  const body = ["Head", "Arm", "Leg", "Hand", "Foot / Feet", "Eyes", "Hair", "Mouth", "Nose", "Ears", "Shoulder", "Knee", "Fingers", "Toes", "Stomach", "Back", "Neck", "Teeth", "Tongue", "Lips"];
  const rooms = ["Living room", "Kitchen", "Bedroom", "Bathroom", "Garage", "Garden / Yard", "Dining room", "Hallway", "Balcony", "Basement", "Attic", "Garden", "Yard"];
  const house_parts = ["Window", "Door", "Roof", "Stairs", "Mirror", "Ceiling", "Wall", "Furniture", "Couch / Sofa", "Sink", "Faucet", "Closet"];
  const chores = ["Sweep the floor", "Do the dishes", "Make the bed", "Take out the trash", "Clean", "Laundry", "Iron the clothes", "Dust the furniture", "Vacuum", "Mop the floor", "Fold the laundry", "Wash the windows", "Mow the lawn", "Water the plants", "Set the table", "Clear the table", "Wipe the counter"];
  const hobbies = ["Read a book", "Play guitar", "Listen to music", "Watch movies", "Draw / Paint", "Travel", "Play video games", "Take photos", "Dance", "Sing", "Go hiking", "Camp", "Knit", "Collect", "Write", "Surf the internet", "Workout", "Play board games"];
  const sports = ["Soccer / Football", "Basketball", "Swim", "Run", "Tennis", "Volleyball", "Cycling"];
  const sports_nouns = ["Team", "Match / Game", "Win", "Lose", "Ball", "Stadium", "Gym", "Coach", "Referee", "Score", "Tournament", "Medal", "Player"];
  const supermarket = ["Shopping cart", "Cashier", "Aisle", "Receipt", "Grocery list", "Checkout", "Bag", "Price", "Discount", "Pay", "Credit card", "Cash", "Change", "Customer", "Shelf", "Basket", "Fresh", "Frozen", "Bakery", "Scale", "Wallet"];
  const clothes = ["Clothes", "Shoes", "Size", "Try on", "Store / Shop", "Fitting room", "Sale", "Expensive", "Cheap", "Jacket", "Pants", "Dress", "Hat", "Gift"];
  const jobs = ["Doctor", "Teacher", "Engineer", "Chef", "Police officer", "Work / Job", "Nurse", "Mechanic", "Lawyer", "Office", "Dentist", "Firefighter", "Driver", "Pilot", "Artist", "Farmer", "Waiter", "Company", "Boss", "Salary"];
  const places = ["Park", "Hospital", "School", "Bus stop", "Street", "Turn left / right", "Library", "Bank", "Go straight", "Near", "Pharmacy", "Restaurant", "Airport", "Station", "Museum", "Far", "Corner", "Block", "Traffic light", "Bridge"];
  const animals = ["Dog", "Cat", "Bird", "Fish", "Pet", "Walk the dog", "Feed", "Horse", "Cow", "Vet", "Pig", "Chicken", "Rabbit", "Lion", "Tiger", "Monkey", "Elephant", "Bark", "Meow", "Bite"];
  const cooking_verbs = ["Cook", "Bake", "Boil", "Fry", "Chop", "Mix", "Pour", "Taste"];
  const cooking_nouns = ["Recipe", "Ingredients", "Knife", "Oven", "Spoon", "Fork", "Plate", "Bowl", "Spicy", "Sweet", "Salty", "Pan"];
  const tech = ["Laptop", "Smartphone", "Internet", "Keyboard", "Screen", "Download", "Password", "Charger", "App", "Mouse", "Upload", "Battery", "Email", "Website", "Link", "Save", "Delete", "Folder", "Headphones", "Plug in"];
  const social = ["Like", "Follow", "Post", "Share", "Profile", "Message", "Comment", "Hashtag", "Scroll", "Follower", "Feed", "Tag", "Story", "Influencer", "Viral", "Meme", "Notification", "Update", "Account"];

  if (isOneOf(family)) { en = "Did you talk to your " + lower + " last weekend?"; pt = "Você falou com seu/sua " + lower + " no último fim de semana?"; }
  else if (isOneOf(friends_verbs)) { en = "Did you " + lower + " with your friends recently?"; pt = "Você " + lower + " com seus amigos recentemente?"; }
  else if (isOneOf(friends_nouns)) { en = "Did you have a " + lower + " with your friends?"; pt = "Você teve um(a) " + lower + " com seus amigos?"; }
  else if (isOneOf(body)) { en = "Did your " + lower + " hurt after working out?"; pt = "Seu/sua " + lower + " doeu depois de malhar?"; }
  else if (isOneOf(rooms)) { en = "Did you clean the " + lower + " yesterday?"; pt = "Você limpou o(a) " + lower + " ontem?"; }
  else if (isOneOf(house_parts)) { en = "Did you fix the " + lower + " in your house?"; pt = "Você consertou o(a) " + lower + " na sua casa?"; }
  else if (isOneOf(chores)) { en = "Did you " + lower + " last weekend?"; pt = "Você " + lower + " no último fim de semana?"; }
  else if (isOneOf(hobbies)) { en = "Did you " + lower + " when you were a child?"; pt = "Você " + lower + " quando era criança?"; }
  else if (isOneOf(sports)) { en = "Did you play " + lower + " when you were in school?"; pt = "Você jogou " + lower + " quando estava na escola?"; }
  else if (isOneOf(sports_nouns)) { en = "Did you watch the " + lower + " on TV?"; pt = "Você assistiu ao(à) " + lower + " na TV?"; }
  else if (isOneOf(supermarket)) { en = "Did you use a " + lower + " at the store?"; pt = "Você usou um(a) " + lower + " na loja?"; }
  else if (isOneOf(clothes)) { en = "Did you buy new " + lower + " last month?"; pt = "Você comprou " + lower + " novo(a) no mês passado?"; }
  else if (isOneOf(jobs)) { en = "Did you want to be a " + lower + " when you were younger?"; pt = "Você queria ser um(a) " + lower + " quando era mais jovem?"; }
  else if (isOneOf(places)) { en = "Did you go to the " + lower + " yesterday?"; pt = "Você foi ao/à " + lower + " ontem?"; }
  else if (isOneOf(animals)) { en = "Did you have a " + lower + " as a child?"; pt = "Você teve um(a) " + lower + " quando criança?"; }
  else if (isOneOf(cooking_verbs)) { en = "Did you " + lower + " dinner last night?"; pt = "Você " + lower + " o jantar na noite passada?"; }
  else if (isOneOf(cooking_nouns)) { en = "Did you use a " + lower + " to cook?"; pt = "Você usou um(a) " + lower + " para cozinhar?"; }
  else if (isOneOf(tech)) { en = "Did you use your " + lower + " this morning?"; pt = "Você usou seu/sua " + lower + " hoje de manhã?"; }
  else if (isOneOf(social)) { en = "Did you check your " + lower + " on social media?"; pt = "Você checou seu/sua " + lower + " nas redes sociais?"; }
  else { en = "Did you use the word '" + word + "' yesterday?"; pt = "Você usou a palavra '" + word + "' ontem?"; }

  en = en.charAt(0).toUpperCase() + en.slice(1);
  pt = pt.charAt(0).toUpperCase() + pt.slice(1);

  return { en, pt };
}

const map = {};
words.forEach(w => {
  map[w] = generateQuestion(w);
});

const files = ['data/scenarios1.ts', 'data/scenarios2.ts'];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  words.forEach(w => {
    const { en, pt } = map[w];
    // Exactly match the JSON object string
    const target = '{ question: "Can you use \\"' + w + '\\" in a sentence in the past simple?", translation: "Você consegue usar \\"' + w + '\\" em uma frase no passado simples?" }';
    const replacement = '{ question: "' + en + '", translation: "' + pt + '" }';
    
    // Replace all occurrences just in case
    content = content.split(target).join(replacement);
  });
  fs.writeFileSync(f, content);
  console.log('Replaced in', f);
});

console.log("Done!");
