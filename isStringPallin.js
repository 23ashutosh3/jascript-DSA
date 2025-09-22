// 2️⃣ Check if a String is a Palindrome (two-pointer / reversal logic)

function isPallindron(str) {
  const newStr = str;

  return str === newStr.split("").reverse().join("");
}

console.log(isPallindron('abcdba'));




function isPallindron(str) {
  let isPallin = true;

  for (let i = 0; i <= str.length / 2 - 1; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      continue;
    } else {
      isPallin = false;
      break
    }
  }
  return isPallin;
}

console.log(isPallindron("abcdecba"));