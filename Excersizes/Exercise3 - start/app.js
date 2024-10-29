/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/

const regex = /\(?\d{3}\)?-?\.?\d{3}-?\.?\d{4}/g;

const input = document.getElementById("phone");

input.addEventListener("input", function () {
  if (regex.test(input.value) === true) {
    input.classList = "green";
  } else {
    input.classList = "red";
  }
  console.log(input.value);
});
