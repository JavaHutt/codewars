/**
 * Remove String Spaces
 * @param {string} x 
 * @returns {string}
 */
const noSpace = x => x.replace(/ /g, '');

/**
 * Lost Without a Map
 * @param {array} x
 * @returns {array} 
 */
const maps = x => x.map(item => item * 2);

const phrases = [
    'not at all',
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly'
];
/**
 * I love you, a little , a lot, passionately ... not at all
 * @param {array} n 
 * @returns {string}
 */
const howMuchILoveYou = n => phrases[n % 6];

/**
 * The Wide-Mouthed frog!
 * @param {string} animal
 * @returns {string} 
 */
const mouthSize = animal => animal.toLowerCase() == 'alligator' ? 'small' : 'wide';

/**
 * Alan Partridge II - Apple Turnover
 * @param {number} x 
 * @returns {string}
 */
const apple = x => Math.pow(+x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';

/**
 * The 'if' function
 * @param {boolean} bool 
 * @param {callback} func1 
 * @param {callback} func2 
 */
const _if = (bool, func1, func2) => bool ? func1() : func2();

/**
 * Sum Mixed Array
 * @param {array} x
 * @returns {number} 
 */
const sumMix = x => +x.reduce((prev, current) => +prev + +current);

/**
 * Sum The Strings
 * @param {string} a 
 * @param {string} b
 * @returns {string}
 */
const sumStr = (a,b) => String(+a + +b);

/**
 * Count the Monkeys!
 * @param {number} n 
 * @returns {array}
 */
const monkeyCount = n =>  [...Array(n)].map((item, i) => i + 1);

/**
 * Convert a String to a Number!
 * @param {string} str 
 * @returns {number}
 */
const stringToNumber = str => +str;

/**
 * Multiply
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const multiply = (a, b) => a * b;