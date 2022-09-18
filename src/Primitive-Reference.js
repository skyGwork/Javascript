//? JavaScript Primitive vs. Reference Values

//!Primitive
// Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)

let score = 100;
let newScore = score;
console.log(`${score} => ${newScore}`);

score = 200;

console.log(`${score} => ${newScore}`);

//!Reference
// referance copy

//! hobbies == newHobbies
let hobbies = ['sports'];
let newHobbies = hobbies;
console.log(`${hobbies} => ${newHobbies}`);
hobbies.push('coocking');
console.log(`${hobbies} => ${newHobbies}`);
newHobbies.push('coadign');
console.log(`${hobbies} => ${newHobbies}`);

// new copy
//! hobbies != newHobbies
let hobbies = ['sports'];
let newHobbies = [...hobbies];
console.log(`${hobbies} => ${newHobbies}`);
hobbies.push('coocking');
console.log(`${hobbies} => ${newHobbies}`);
newHobbies.push('coadign');
console.log(`${hobbies} => ${newHobbies}`);

// referance copy
let anobj = {};
let newAnobj = { ...anobj };
