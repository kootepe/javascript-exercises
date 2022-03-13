const repeatString = function(word, number) {
  let string = ``
  for (i = number; i > 0; i--) {
    if (number < 0) {
      string = `ERROR`;
    } else {
  string += word;
}
}
if (number < 0) {
  string = `ERROR`
}
return string;
}

// Do not edit below this line
module.exports = repeatString;
