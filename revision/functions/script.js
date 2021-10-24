const sumOfNum = function (num1, num2) {
  return num1 + num2;
};

const result = sumOfNum(130, 260);
console.log(result);

const oddOrEven = function (num1, num2) {
  // calculate sum of two numbers
  const result = num1 + num2;

  // check if even

  if (result % 2 === 0) {
    console.log(`${result} is even`);
  } else {
    console.log(`${result} is odd`);
  }

  // check if odd
};

oddOrEven(20, 40);
oddOrEven(50, 71);
