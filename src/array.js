let colors = ['red', 'green', 'blue'];

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains);

console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'
mountains[2] = 'K2';

// push() +end of an array
// unshift() +beginning  of an array
// pop() -end of an array
// shift() -end of an array
let num = [1, 2, 3];
num.push(9);
// num.unshift(0);
// num.pop();
// num.shift();
console.log(num);

let hobbies = ['sports'];
// sprade operator
let newHobbies = [...hobbies];

console.log(num.length);
console.log(num.length - 1);
