let data = "2018-3-9";

let reg = /^(\d\d\d\d)[-./](\d{1,2})[-./](?:\d{1,2})$/,
  arr = reg.exec(data),
  year,
  month,
  day;

if (reg.test(data)) {
  year = arr[1];
  month = arr[2];
  day = arr[3];
} else {
  console.log("Wrong format");
}
