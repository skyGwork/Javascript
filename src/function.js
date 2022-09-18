// function name(params) {
//void code
// }

// const name = (params) => {
//  return code
// }

// document.getElementById('id').addEventListener('click',(params) => {
// return     code
// })

//? functionName(arguments);
//? in the say() function, the message is the parameter and the 'Hello' string is an argument that corresponds to the message parameter.

function say(message) {
  console.log(message);
}
say('hello');

function compare(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
  return 0;
}
compare(10, 20); //0

function add(e) {
  let sum = 0;
  for (let i = 0; i < e.length; i++) {
    sum += e[i];
  }
  return sum;
}
let nums = [1, 2, 3, 4, 5];
console.log(add(nums)); // 15
