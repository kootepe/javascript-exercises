const ftoc = function(degrees) {
  c = (degrees - 32) * (5/9);
  c = Math.round(c * 10) / 10;
  return c;
};

const ctof = function(degrees) {
  f = degrees * (9/5) + 32;
  f = Math.round(f * 10) / 10;
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
