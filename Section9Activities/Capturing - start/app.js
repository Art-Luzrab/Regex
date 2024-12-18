/*
Extract all the numbers from this phrase and capture those numbers. Then sum the numbers.
*/

let phrase =
  "First number: 32, and a second number 100. Here is the last number 15.";

/** My Soultion 
let regex = /\d+/g;

let match;
let arr = [];
let sum = 0;

while ((match = regex.exec(phrase)) !== null) {
  arr.push(Number(match[0]));
}

console.log(arr);

for (const numbersToAdd of arr) {
  sum += numbersToAdd;
}

console.log(sum);
*/

// Teachers solution:

total = 0;

let result = phrase.match(/\d+/g);
console.log(result);

if (result) {
  let num1 = result[0],
    num2 = result[1],
    num3 = result[2];

  total = result.reduce((sum, val) => (sum += Number(val)), 0);
  console.log(total);
}
