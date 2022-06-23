'use strict';

// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
 */
// Data needed for first part of the section


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

console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
};

console.log(restaurant.order?.(0, 1) ?? `Method doesn't exist`);
const user = [{ name: 'Viki', email: 'xy@gmail.com' }];

console.log(user[0]?.name ?? 'user array is empty');

/*
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
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
};

restaurant.orderPizza('mushrooms', 'onion', 'oliva', 'spinach');
*/

/*const game = {
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
    /* let sum = 0;
    for(i=0; i < playerNames.length; i++){
      sum++;
    } 
  },
};

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

const likelyToWin = team1 > team2 ? 'team2' : 'team1';
console.log(likelyToWin); 
*/