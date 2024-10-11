"use strict";

let txt = "Programming courses alwayS starts with a hello world example.";

let regex1 = /hello/;
let regex2 = /world/;
let regex3 = /\s/; // looking for spaces
let regex4 = /s\s/gi; // looking for an s followed by a space globally, case insensitive

console.log(regex1.test(txt)); // true
console.log(regex2.test(txt)); // true

// --------------------------------------------------------------------------------------------------------------------------------------------
console.log(regex1.exec(txt)); // ['hello', index: 41, input: 'Programming courses always starts with a hello world example.', groups: undefined]

console.log(regex2.exec(txt)); // ['world', index: 47, input: 'Programming courses always starts with a hello world example.', groups: undefined]

console.log(txt.match(regex1)); //['hello', index: 41, input: 'Programming courses always starts with a hello world example.', groups: undefined]

// .exec() returns an array

// .match() returns an array aswell

// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log(txt.search(regex1)); // 41

// .search() return index of match, first character

console.log(txt.replace(regex1, "hi")); // Programming courses always starts with a hi world example.

// .replace(), self explanatory

console.log(txt.split(regex1)); // ['Programming courses always starts with a ', ' world example.']

// .split() splits a string into an array. The division is based on the regual expression pattern.

console.log(txt.split(regex3)); // (9) ['Programming', 'courses', 'always', 'starts', 'with', 'a', 'hello', 'world', 'example.']

// ------------------------------------------------------------------------------------------------------------------------------------------

/** Regular Expression Flags */

// /pattern/*flags here*; or new RegExp("pattern", "flags");

// g - global, match more than one occurance
// i - case insensitive match, case doesn't matter
// m - multi-line match

console.log(txt.match(regex4)); //  ['s ', 'S ', 'S ']

console.log(regex4.exec(txt)); // ['s ', index: 18, input: 'Programming courses alwayS starts with a hello world example.', groups: undefined]
console.log(regex4.exec(txt)); // ['S ', index: 25, input: 'Programming courses alwayS starts with a hello world example.', groups: undefined]
console.log(regex4.exec(txt)); // ['s ', index: 32, input: 'Programming courses alwayS starts with a hello world example.', groups: undefined]
console.log(regex4.exec(txt)); // null
