//? JavaScript has the primitive data types:

// null
// undefined
// boolean
// number
// string
// symbol – available from ES2015
// bigint – available from ES2020

//? and a complex data type
// object.

// ? JavaScript is a dynamically typed language. It means that a "variable doesn’t associate with a type". In other words, a variable can hold a value of different types.

let counter = 120; // counter is a number
counter = false; // counter is now a boolean
counter = 'foo'; // counter is now a string

let counter = 120;
console.log(typeof counter); // "number"

counter = false;
console.log(typeof counter); // "boolean"

counter = 'Hi';
console.log(typeof counter); // "string"

//? The undefined type
let counter;
console.log(counter); // undefined
console.log(typeof counter); // undefined

//? The null type
let obj = null;
console.log(typeof obj); // object

//? JavaScript defines that null is equal to undefined as follows:
console.log(null == undefined); // true

//? The number type

let num = 100; //integer
let price = 12.5; //floating-point number
let discount = 0.05; //floating-point number

//? JavaScript automatically converts a floating-point number into an integer number if the number appears to be a whole number.
let price = 200.0; // interpreted as an integer 200

//? NaN;
console.log('a' / 2); // NaN;

//? Any operation with NaN returns NaN.
//? The NaN does not equal any value, including itself.
console.log(NaN / 2); // NaN
console.log(NaN == NaN); // false

//? The string type
let greeting = 'Hi';
let message = 'Bye';
let message = "I'm also a valid string"; // use \ to escape the single quote (')

let str = 'JavaScript';
str = str + ' String'; //'Javascript String'

//? attempts change the first character of the string JavaScript:
let s = 'JavaScript';
s[0] = 'j';
console.log(s); //'JavaScript'

//? The boolean type
let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean

//? convert a value of another data type into a boolean value, you use the Boolean() function.
console.log(Boolean('Hi')); // true
console.log(Boolean('')); // false

console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(0)); // false

console.log(Boolean({ foo: 100 })); // true on non-empty object
console.log(Boolean(null)); // false

//? The symbol type
let s1 = Symbol();

//? The Symbol function creates a new unique value every time you call it.
console.log(Symbol() == Symbol()); // false

//? The bigint type: The bigint type represents the whole numbers that are larger than 253 – 1.
let pageView = 9007199254740991n;
console.log(typeof pageView); // 'bigint'

//? The object type
let emptyObject = {};

let person = {
  firstName: 'John',
  lastName: 'Doe',
};

let contact = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '(408)-555-9999',
  address: {
    building: '4000',
    street: 'North 1st street',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};
//? To access a object’s property, you can use

// The dot notation (.)
// The array-like notation ([]).

console.log(contact.firstName);
console.log(contact.lastName);

//? If you reference a property that does not exist, you’ll get an undefined
console.log(contact.age); // undefined

console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'
