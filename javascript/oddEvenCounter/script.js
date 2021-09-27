// declare an Array
const numbersArray = [0, 2, 5, 6, 7, 10, 15, 20, 25, 34];
console.log(numbersArray);

// declare count odd and even numbers

let oddCount = 0;
let evenCount = 0;

// declare a Forloop
for (let i = 0; i < numbersArray.length; i++) {
  // current number

  const currentNumber = numbersArray[i];
  console.log(currentNumber);

  // // for the alert
  if (currentNumber % 2 === 0) {
    evenCount += 1;
  } else {
    oddCount += 1;
  }
}
// display result

alert("evenCount: " + evenCount + " oddCount: " + oddCount);
