function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("123abcd"));

// String are immutable in js , first nee to convert it into an array

function reverse(str) {
  strNew = "";
  for (i = str.length; i > 0; i--) {
    strNew = strNew + str[i];
  }
  return strNew;
}
