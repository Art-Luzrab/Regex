/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/

let data = [
  "Jensen, Dale",
  "Smith, Andrea",
  "Jorgensen, Michael",
  "Vasefi, Annika",
  "Lopez, Monica",
  "Crockett, Steven",
];

let reg = /(?<last>\w+), (?<first>\w+)/;
let newData = data.map(function (val) {
  let arr = reg.exec(val);
  if (arr !== null) {
    return arr.groups.first + " " + arr.groups.last;
  } else {
    return null;
  }
});

// let newData = data.map((names) => {
//   let array = reg.exec(names);
//   return array[2] + " " + array[1];
// });

// console.log(newData);
