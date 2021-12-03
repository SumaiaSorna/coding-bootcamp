// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

const logEvenNums = (nums) => {
  for (let i = 0; i <= nums; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
