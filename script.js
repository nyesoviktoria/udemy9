'use strict';

// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
 */
// Data needed for first part of the section
/*
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

const question = new Map([
  ['question', 'What is the best programming language in the Word?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// const housMap = new Map(Object.entries(openingHours));
// console.log(housMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(
  answer === question.get('Correct') ? question.get(true) : question.get(false)
);


console.log(question.get(question.get('Correct') === answer));

console.log(question.keys());

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze');
console.log(rest.set(2, 'Lisbon'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);


console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic bread');
orderSet.add('Garlic bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);


const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
  openStr += `${day}, `;
};

// console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);

// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}


console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
};

console.log(restaurant.order?.(0, 1) ?? `Method doesn't exist`);
const user = [{ name: 'Viki', email: 'xy@gmail.com' }];

console.log(user[0]?.name ?? 'user array is empty');


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${ i + 1}: ${ el }`);
}


restaurant.orderDelivery({
  time: '22:30',
  address: 'via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

 const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);



let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;

console.log(i, j, k);
 

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = `Jonas`;
const letters = [...str, ' ', 'S.'];

 const ingridients = [
  prompt('Lets make pasta Ingridient1:'),
  prompt('Ingridient2:'),
  prompt('Ingridient3:'),
];

console.log(ingridients);

console.log(restaurant.orderPasta(...ingridients)); 

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
};

restaurant.orderPizza('mushrooms', 'onion', 'oliva', 'spinach');
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerNames) {
    // console.log(...playerNames, playerNames.length);
    let sum = 0;
    for (let i = 0; i < playerNames.length; i++) {
      sum++;
    }
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(new Set([...gameEvents.values()]));
gameEvents.delete(64);
console.log(gameEvents);

// console.log([...gameEvents.keys()].length);

const goalMinutes = [...gameEvents.keys()];
console.log(goalMinutes);

let average = 17;
for (let i = 1; i < goalMinutes.length; i++) {
  average += goalMinutes[i] - goalMinutes[i - 1];
  console.log(average);
}
average /= goalMinutes.length;
console.log(average);

console.log(`An event happened, on average, every ${average} minutes`);

for (const [minute, event] of gameEvents) {
  const whichHalf = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${whichHalf} ${minute}: ${event}`);
}


for (const [player, odd] of Object.entries(game.odds)) {
  const str = player === 'x' ? 'draw' : `victory ${game[player]}`;

  console.log(`Odd of ${str}: ${odd}`);
}

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

// console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

// const likelyToWin = team1 > team2 ? 'team2' : 'team1';
// console.log(likelyToWin);

// team1 > team2 || console.log(`team1`);
// team2 > team1 || console.log(`team2`);

const scored = Object.entries(game.scored);
console.log(scored);

for (const [key, name] of scored) {
  console.log(`Goal ${Number(key) + 1}: ${name}`);
};


for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// (team1+x+team2) /3 game.odds

const odds = Object.values(game.odds);
console.log(odds);

function average(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(average(...odds));

const teamName = Object.entries(game);
// console.log(teamName);

//console.log(`Odd of victory ${game.team1}: ${game.odds.team1} \nOdd of draw: ${game.odds.x} \nOdd of victory ${game.team2}: ${game.odds.team2}`);

const nameScored = Object.values(game.scored);
console.log(nameScored);

function createObject(...goalKickers) {
  const finalScore = {};
  for (let i = 0; i < goalKickers.length; i++) {
    finalScore[i] = goalKickers[i];
  }
  console.log(finalScore);
}

createObject(nameScored);


const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane.length);

console.log(airline.length);
console.log(airline.indexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const chechMiddelSeat = function (seat) {
  console.log(seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ? 'Yes' : 'No');
};
chechMiddelSeat('11B');
chechMiddelSeat('23C');
chechMiddelSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

let passenger = 'jOnAS';

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails

const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS);

const announcement = 'All passengers come to door A. Come to door A!';
console.log(announcement.replace(/door/g, 'gate'));

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed onboard');
  } else {
    console.log('Welcome abord');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');

  const nameUpper = [];
  for (let n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};
capitalizeName('john smith newton');


const message = `Go to gate 23`;
console.log(message.padStart(25, '*').padEnd(35, '*'));
console.log(message.padEnd(25, '*'));

const maskCreditCard = function (number) {
  const str = number + '';
  console.log(str.slice(-4).padStart(str.length, '*'));
};
maskCreditCard(12357865);
maskCreditCard('4564546812357865351321');
const message2 = 'Bed weather... All Departures delayed... ';
console.log(message2.repeat(5));
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const textLowerArr = text.toLowerCase().split('\n');

  const middleArray = [];
  const finalArray = [];

  for (const item of textLowerArr) {
    const itemArr = item.trim().split('_');
    for (let i = 1; i < itemArr.length; i++) {
      itemArr[i] = itemArr[i][0].toUpperCase() + itemArr[i].slice(1);
    }
    // console.log(itemArr);
    middleArray.push(itemArr);
  }
  // console.log(middleArray);

  for (const [first, second] of middleArray) {
    finalArray.push(first + second);
  }
  // console.log(finalArray);
  for (let i = 0; i < finalArray.length; i++) {
    console.log(`${finalArray[i]}`.padEnd(20, ' '), ':)'.repeat(i + 1));
  }
});

const testData =
  'underscore_case\n first_name\nSome_Variable\n calculate_AGE\n delayed_departure';
// console.log(testData)
// conversion(testData);
