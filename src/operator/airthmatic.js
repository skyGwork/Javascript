//? Arithmetic Operators

//?  + - * /

let add = 10 + 20;
console.log(add); // 30

let netPrice = 9.99;
let shippingFee = 1.99;
let grossPrice = netPrice + shippingFee;

console.log(grossPrice);

//? If both values are strings, it concatenates the second string to the first one.
//? If one value is a string, it implicitly converts the numeric value into a string and concatenates two strings.

let x = '10';
x = 100;
let y = '20';

console.log(x + y); //? 1020//10020

let subs = 30 - 10;
console.log(subs); // 20

let multi = 5 * 10;
multi = '4' * 10; //40 okey
console.log(multi); // 20

let div = 20 / 10;
div = '200' / 10;
console.log(div); // 2

//? JavaScript Remainder Operator
//? dividend % divisor;
//? dividend = divisor * quotient + remainder
//? where |remainder| < |divisor|

console.log(5 % -2); // 1

console.log(5 % 2); // 1
