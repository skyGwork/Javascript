// rules for naming variables

// you cannot start with number
// example :-
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1);

// you can use only undersore _ or dollar symbol
// first_name (valid)
// _firstname (valid)

// first$name (valid)
// $firstname (valid)

// you cannot use spaces
// var first_name = "harshit"; // snake case writing
// var firstName = "harshit"; // camel case writing
// first name (invalid)

//? convention
// start with small letter and use camelCase

// Initialize a variable
let variableName = value;
const variableName = value;
var variableName = value;

let message;
message = 'Hello';

//? JavaScript is a dynamically typed language, you can assign a value of a different type to a variable.
//! Although, it is not recommended.
let message = 'Hello'; // string
message = 100; // number

// Change a variable
message = 'hi'; // string

// Undefined vs. undeclared variables

let message;
console.log(message); // undefined

console.log(counter);//undeclared

// Constants;
const workday = 5;