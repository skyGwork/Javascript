//? an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

let empty = {};
console.log(empty);

let person = {
  firstName: 'John',
  lastName: 'Doe',
};

//? 1) The dot notation (.)
// objectName.propertyName;

console.log(person.firstName); //John

//? 2) Array-like notation ( [])
// objectName['propertyName'];

console.log(person['lastName']);

//? When a property name contains spaces, you need to place it inside quotes.

let address = {
  'building no': 3960,
  street: 'North 1st street',
  state: 'CA',
  country: 'USA',
};
console.log(address['building no']);
// console.log(address.'building no');//! **** Unexpected string

//? property that does not exist will result in an undefined
console.log(address.district); //undefined

//? Modifying the value of a property
address.state = 'Bihar';
address.country = 'India';

console.log(address);
//? output
// let outputLog = {
//   'building no': 3960,
//   street: 'North 1st street',
//   state: 'Bihar',
//   country: 'India',
// };

//? Adding a new property to an object
address.zipCode = 102025;
console.log(address);

//? Deleting a property of an object
// delete objectName.propertyName;
delete address.street;
console.log(address);

//? Checking if a property exists
// 'propertyName' in objectName;
console.log('location' in address); //false
console.log('zipCode' in address); //true
