//? Differences Between var and let

//? #1: var !=as let

// global scope when you define them outside a function
var counter = 'make it happen';
var counter = 'twice re decleare the variable'; //**twice re decleare the variable

let score = 200;
// let score = 500;//!Identifier 'score' has already been declared
//? but mutation is allowed ie
score = 'one two three';

//? #2: var ==as  let
//? In JavaScript, a block is delimited by a pair of curly braces {} like in the if...else and for statements:

// if(condition) {
//    // inside a block
// }

// for(...) {
//   // inside a block
// }

function increase() {
  //! access the globle variables
  //var
  console.log(counter); //**twice re decleare the variable
  counter = 'thrice -re decleare the variable'; //**thrice -re decleare the variable
  console.log(counter); //**thrice -re decleare the variable
  //let
  console.log(score); //** one two three
  score = 'score:100'; // score:100
  console.log(score); //** one two three
 
  //! localScopeVar
  var localScopeVar = 'ten';
  let localScopeLet = 10;
}
// console.log(localScopeVar);//!localScopeVar is not defined
// console.log(localScopeLet);//!localScopeVar is not defined

// cannot access the counter variable here
increase();

//? #3: var !=as let

for (var i = 0; i < 5; i++) {
  console.log('Inside var loop:', i);
}
console.log('Outside var loop:', i); // okey

for (let a = 0; a < 5; a++) {
  console.log('Inside Letloop:', a);
}
// console.log('Outside Letloop:', a); //! a is not defined
