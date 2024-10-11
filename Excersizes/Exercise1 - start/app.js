/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = [
  "801-766-9754",
  "801-545-5454",
  "435-666-1212",
  "801-796-8010",
  "435-555-9801",
  "801-009-0909",
  "435-222-8013",
  "801-777-6655",
];

let regEx = /801-/;

newArray = [];

// for of loop solution -------------------------------------------------------
for (const element of phoneNums) {
  if (regEx.test(element)) {
    newArray.push(element);
  }
}
console.log(newArray);

// for loop solution ---------------------------

// for (let i = 0; i < phoneNums.length; i++) {
//   if (regEx.test(phoneNums[i])) {
//     newArray.push(phoneNums[i]);
//   }
// }
// console.log(newArray);

// .filter solution ------------------------------------------

// let newArray = phoneNums.filter((el) => regEx.test(el));
// console.log(newArray);
