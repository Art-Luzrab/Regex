"use strict";

let txt = "Programming courses always starts with a hello world example.";

let regex1 = /hello/;
let regex2 = /world/;
let regex3 = /\s/;

console.log(regex1.test(txt)); // true
console.log(regex2.test(txt)); // true

// --------------------------------------------------------------------------------------------------------------------------------------------
console.log(regex1.exec(txt)); // ['hello', index: 41, input: 'Programming courses always starts with a hello world example.', groups: undefined]

console.log(regex2.exec(txt)); // ['world', index: 47, input: 'Programming courses always starts with a hello world example.', groups: undefined]

console.log(txt.match(regex1)); //['hello', index: 41, input: 'Programming courses always starts with a hello world example.', groups: undefined]

// .exec() logs an array

// text.match() logs an array aswell

// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log(txt.search(regex1)); // 41

// .search() finds index of match

console.log(txt.replace(regex1, "hi")); // Programming courses always starts with a hi world example.

// .replace(), self explanatory

console.log(txt.split(regex1)); // ['Programming courses always starts with a ', ' world example.']

// .split() removes the word searched for and puts everything else in an array

console.log(txt.split(regex3)); // (9) ['Programming', 'courses', 'always', 'starts', 'with', 'a', 'hello', 'world', 'example.']
