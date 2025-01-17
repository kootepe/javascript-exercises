const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  let num = num1 - num2;
  return num;
};

const sum = function(array) {
  let sum = 0;
  sum = array.reduce((previousValue, currentValue) => previousValue + currentValue, sum);
return sum;
};

const multiply = function(array) {
  let sum = 0;
  sum = array.reduce((a, b) => a * b);
  return sum;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(integer) {
  let fac = 1;
  for (i = integer; i > 0; i--) {
    fac *= i;
  } 
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
