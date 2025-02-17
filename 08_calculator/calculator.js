const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(nums) {
	return nums.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, curr) => acc * curr, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num == 0 || num == 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
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
