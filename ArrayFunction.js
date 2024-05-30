const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]


const doubled = numbers.map(num => num * 2);
console.log(`map :${doubled}`); // Output: [ 2, 4, 6, 8, 10, 12 ]

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(`reduce :${sum}`); // Output: 2

const sum2 = numbers.reduce((total, num) => (total +2) + num, 0);
console.log(`reduce2 :${sum2}`); // Output: 2

const firstEven = numbers.find(num => num % 2 === 0);
console.log(`find :${firstEven}`); // Output: true

const hasEven = numbers.some(num => num % 2 === 0);
console.log(`some :${hasEven}`); // Output: false

const allEven = numbers.every(num => num % 2 === 0);
console.log(`every :${allEven}`); 

numbers.forEach(num => console.log(num));

numbers.sort((a, b) => a - b);
console.log(`sort :${numbers}`); 

const sumOfEvens = numbers
    .filter(num => num % 2 === 0)
    .reduce((total, num) => total + num, 0);

console.log(`filter and reduce :${sumOfEvens}`); 
