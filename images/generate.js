const SUITS = [ "spades", "hearts", "clubs", "diamonds" ];
const VALUES = [
  "ace", "two", "three", "four",
  "five", "six", "seven", "eight",
  "nine", "ten", "jack", "queen", "king"
];

const cards = [];

console.log('const IMAGES = {');
SUITS.forEach( suit => {
  VALUES.forEach( val => {
    let key = `${val}_of_${suit}`;
    console.log(`${key}: require('./images/${key}.png'),`);
  })
});
console.log('}');
