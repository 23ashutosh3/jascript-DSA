// 2. Find the first repeating character
// Input: "abca"
// Output: "a"

const obj = {
  input: "azbbcde",
};

const obj2 = {
  input: "anrrbblcde",
};

console.log(nonRepeatingChar.call(obj));
console.log(nonRepeatingChar.call(obj2));

// using HashMap Find the first repeating character

function nonRepeatingChar(){
    const str1 = this.input;

    const map = new Map();
    // Step 1: Count frequency of each character

    for(let char of str1){
        if(map.has(char)){
            const newCount = map.get(char)+1
            map.set(char,newCount)

            return {char ,newCount}
        }else{
            map.set(char,1)
        }
    }
}

// return all repeative char with count

function nonRepeatingChar() {
  const str1 = this.input;

  const map = new Map();
  // Step 1: Count frequency of each character

  for (let char of str1) {
    if (map.has(char)) {
      const newCount = map.get(char) + 1;
      map.set(char, newCount);
    } else {
      map.set(char, 1);
    }
  }
  const arr = [];
  for (let [ele, count] of map.entries()) {
    if (map.get(ele) > 1) {
      arr.push({ ele, count });
    }
  }

  return arr.length ? arr : null;
}


// Without Hash Map

function allRepeatingChars() {
  const str = this.input;
  const checked = []; // to avoid duplicates
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let count = 0;

    // Skip already counted character
    if (checked.includes(char)) continue;

    // Count occurrences
    for (let j = 0; j < str.length; j++) {
      if (str[j] === char) {
        count++;
      }
    }

    // Store repeating chars only
    if (count > 1) {
      result.push({ char, count });
      checked.push(char);
    }
  }

  return result.length ? result : null;
}

// Example usage
const obj1 = { input: "aabbcde" };
const obj2 = { input: "anrrbblcde" };

console.log(allRepeatingChars.call(obj1));
// 👉 [ { char: 'a', count: 2 }, { char: 'b', count: 2 } ]

console.log(allRepeatingChars.call(obj2));
// 👉 [ { char: 'r', count: 2 }, { char: 'b', count: 2 } ]
