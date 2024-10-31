let data = "http://allthingsjavascript.com http://google.com youtube.com";

let reg = /\w+(?=\.com)/g,
  arr = data.match(reg);
