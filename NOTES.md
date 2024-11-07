
let txt = "Programming courses alwayS starts with a hello world example.";

let regex1 = /hello/;
let regex2 = /world/;
let regex3 = /\s/; // looking for spaces
let regex4 = /s\s/gi; // looking for an s followed by a space globally, case insensitive

console.log(regex1.test(txt)); // true
console.log(regex2.test(txt)); // true

  ----------------------------------------------------------------------------------------------------------------------------------------------
console.log(regex1.exec(txt)); // ['hello', index: 41, input: 'Programming courses always starts with a hello world example.', groups: undefined]

console.log(regex2.exec(txt)); // ['world', index: 47, input: 'Programming courses always starts with a hello world example.', groups: undefined]

console.log(txt.match(regex1)); //['hello', index: 41, input: 'Programming courses always starts with a hello world example.', groups: undefined]

.exec() returns an array

 .match() returns an array aswell

 ----------------------------------------------------------------------------------------------------------------------------------------------

console.log(txt.search(regex1)); // 41

 .search() return index of match, first character

console.log(txt.replace(regex1, "hi")); // Programming courses always starts with a hi world example.

 .replace(), self explanatory

console.log(txt.split(regex1)); // ['Programming courses always starts with a ', ' world example.']

 .split() splits a string into an array. The division is based on the regual expression pattern.

console.log(txt.split(regex3)); // (9) ['Programming', 'courses', 'always', 'starts', 'with', 'a', 'hello', 'world', 'example.']

  ----------------------------------------------------------------------------------------------------------------------------------------------

# Regular Expression Flags 

 /pattern/*flags here*; or new RegExp("pattern", "flags");

 ## g - global, match more than one occurance
 i - case insensitive match, case doesn't matter
 m - multi-line match

console.log(txt.match(regex4)); //  ['s ', 'S ', 'S ']

console.log(regex4.exec(txt)); // ['s ', index: 18, input: 'Programming courses alwayS starts with a hello world example.', groups: undefined]
console.log(regex4.exec(txt)); // ['S ', index: 25, input: 'Programming courses alwayS starts with a hello world example.', groups: undefined]
console.log(regex4.exec(txt)); // ['s ', index: 32, input: 'Programming courses alwayS starts with a hello world example.', groups: undefined]
console.log(regex4.exec(txt)); // null

 ----------------------------------------------------------------------------------------------------------------------------------------------

 # Specifying Characters in Regular Expressions

 '.' is the wild-card metacharacter
 it matches and represents a single character, unless multiple are used

 \s is the dotAll metacharacter, it matches and represents any character, including newlines

 To escape metacharacters, use the '\'
 ex: /\./ will look for a period only
 ex: /\\/ will look for a backwards slash only

 Control Characters

\t tab
\v vertical tab
\n newline
\r carriage return


 [] targets a specific character(s)
 ex: \gr[ae]\g will target gray and grey, will not target graey.

 '-' specifies a range
 ex: [a-z] will look for letters a-z
     [0-9] will look for numbers 0-9
     [0-9][0-9] will look for double digit numbers

 '^' excludes a characterset
  ex: [^a-z] will exclude every letter a-z

 # Characters You May Need To Escape:
 -
 ^
 \
 ]

 Character Set Shorthand:
 digits: \d [0-9]
 word: \w [a-zA-z0-9]
 space: \s [ \t\r\n]
 negate digit: \D\d{3}-\d{2}-\d{4}
 negate word: \W
 negate space: \S

 # SECTION 5 -------------------------------------------------------------------------------------------------------
^[^\s@]+@[^\s@.]+\.[^\s@.]+$
+ Matches one or more occurrences
 ? Matches zero or one occurrences (makes it lazy)
 * Matches zero or more occurrences

 {min, max} Matches min to max occurrences
 {min} Matches min occurences
 {min,} Matches min or more occurrences

 /\d{3}-\d{2}-\d{4}/g

 This regex matches a match of 3 digits, hyphen, then
 a match of 2 digits, hyphen, and a match of 4 digits.

 So it will match this set of numbers: 529-66-9898

 # SECTION 6 -------------------------------------------------------------------------------------------------------

 ^ Anchors the match to the start of the line.
 $ Anchors the match to the end of the line.
 m multi-line flag affects both '^' and '$' anchors

 Word Boundry Metacharacters

 \b Word boundary--Pattern bounded by a non-word character.
 \B Nonword boundary--Pattern bounded by a word character.

 References position, not an actual character.
 Word characters: \w or [a-zA-Z0-9_]

 Writing Accurate Regular Expressions:

 - When possible, define the quantity of repeated expressions.
 - Narrow the scope of repeated expressions
 - Provide clear starting and ending points
 - Test multiple data sets!

# SECTION 7 -------------------------------------------------------------------------------------------------------

 | allows to specify alternate patterns to match (similar to 'or' in javascript)
 () Groups parts of a pattern together, treating them as a single unit.
 \(any number here)  back reference captures group with a number based on order.
 \k(any word here) used to name a captured referenced group
 ?: non capturing group
 ?=  Positive Look Ahead Group Ensures the specified pattern does exist after the current position.
 ?! Negative Look Ahead Group Ensures the specified pattern does not exist after the current position.
 ?<...> naming a captured group

 Lookbehind groups in regex let you check if a certain pattern appears before the current position in the string, without including that pattern in the match itself.

 (?<=...) Positive Lookbehind Asserts that the specified pattern exists before the current position.
 (?<!...) Negative Lookbehind Asserts that the specified pattern does not exist before the current position.

 -----------------------------------------------------------------------------------------------------------------------------------------------

 # SECTION 9

Useful Regex Expressions:


- Matching an Email Address: /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/g

- Matching a twitter handle: /^@?(\w+)$/g

- Validating Dates: /^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/([0-9]{2})?[0-9]{2}$/g

- Validating ip numbers: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g

-----------------------------------------------------------------------------------------------
- Password with upper, lower, number, special characters:

let password = "NsRN3/>zvd";

let checkPass = function (password) {
  let theLength = /^.{8,32}$/,
    upper = /[A-Z]/,
    lower = /[a-z]/,
    numbers = /[0-9]/,
    special = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

  if (
    theLength.test(password) &&
    upper.test(password) &&
    lower.test(password) &&
    numbers.test(password) &&
    special.test(password)
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(checkPass(password));

-----------------------------------------------------------------------------------------------

- Using replace with regular expressions:

let names = [
  "Smith, James",
  "Peterson, Alyssa",
  "Johnson, Lynette",
  "Lopez, Tony",
];

let newNames = names.map(function (name) {
  return name.replace(/(\w+), (\w+)/, "$2 $1");
});

-----------------------------------------------------------------------------------------------

- Capturing Matched Text: 

Extract all the numbers from this phrase and capture those numbers. Then sum the numbers.

let phrase =
  "First number: 32, and a second number 100. Here is the last number 15.";

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

-----------------------------------------------------------------------------------------------

- Iteration over each match:

/*
Iterate over each match and log the information to the console.
*/

let phrase =
  "First number: 32, and a second number 100. Here is the last number 15.";

let regex = /\d+/g,
  match = null;

while ((match = regex.exec(phrase))) {
  if (match.index == regex.lastIndex) regex.lastIndex++;
  console.log(match);
  console.log(regex.lastIndex);
}

-----------------------------------------------------------------------------------------------
