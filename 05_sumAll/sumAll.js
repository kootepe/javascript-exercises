const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR';
  } else {
  let sum = 0;
  let numArray = [num1, num2];
  let min = Math.min(...numArray);
  let max = Math.max(...numArray);
  for (i = min -1; i < max + 1; i++) {
    sum += i;
  }
  return sum;
}};

// Do not edit below this line
module.exports = sumAll;
