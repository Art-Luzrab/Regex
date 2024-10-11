"use strict";

let txt = "Programming courses always starts with a hello world example.";

let regex1 = new RegExp("hello");
let regex2 = /worlds/;

console.log(regex1.test(txt)); // true
console.log(regex2.test(txt)); // false
