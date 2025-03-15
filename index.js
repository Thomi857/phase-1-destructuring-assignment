const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings
const animalSounds = {
  crow,
  neigh,
moo,
 oink,
baa
};

const { pig, horse, cow, chicken, sheep } = animalSounds;

console.log(cow); 
// This should output: 'moo'


// 1. Use destructuring to assign appropriate variables based on the sounds animals make.


// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const { cow: bessie, sheep: dolly, duck: babe, dog: little } = animalSounds;

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const { cow: blackAndWhite, sheep: black, duck: pink } = animalSounds; 

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.


// Destructuring colors
const [r, blue, green, yellow, orange, indgigo] = colors; // Leaving out indigo

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [red, b, g, y, o] = colors; // Leaving out indigo and violet

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// const [r, b, g, y, o, indg] = colors; // Now we include indigo as indg

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const frog = {
  name: 'Kermit',
  job: 'musician',
  partner: 'Miss Piggy',
  color: 'green',
};

// Destructuring the frog object
const { name, job, partner, color } = frog;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

const songs = {
  song1: 'Rainbow Connection',
  song2: 'The Muppet Show Theme',
  song3: 'Mahna Mahna',
  song4: 'It’s Not Easy Being Green',
};


const { song2, song4 } = songs;
// const { job, partner } = frog; // Kermit's job and partner