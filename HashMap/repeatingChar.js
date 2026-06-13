// ==========================================
// 1. First Repeating Character (HashMap)
// ==========================================
//
// Given a string, find the first character that appears more than once.
// Return the character and its count at the time of first repetition.
// If no character repeats, return null.
//
// Examples:
//   Input: "azbbcde"    Output: { char: 'b', newCount: 2 }
//   Input: "abcdef"     Output: null
//   Input: "abca"       Output: { char: 'a', newCount: 2 }
//
// Constraints:
//   - O(n) time using HashMap
//   - Return as soon as the first repeat is found
// ==========================================

function firstRepeatingChar(input) {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
      const newCount = map.get(input[i]) + 1;
      return {
        char: input[i],
        newCount,
      };
    } else {
      map.set(input[i], 1);
    }
  }
  return null;
}

// -------------------- Test Cases --------------------
console.log(firstRepeatingChar("azbbcde"));
// Expected: { char: 'b', newCount: 2 }

console.log(firstRepeatingChar("abcdef"));
// Expected: null

console.log(firstRepeatingChar("abca"));
// Expected: { char: 'a', newCount: 2 }



// ==========================================
// 2. All Repeating Characters with Count (HashMap)
// ==========================================
//
// Given a string, find all characters that appear more than once
// and return each with its total count.
// If no character repeats, return null.
//
// Examples:
//   Input: "aabbcde"     Output: [ { ele: 'a', count: 2 }, { ele: 'b', count: 2 } ]
//   Input: "abcdef"      Output: null
//   Input: "aabbbccc"    Output: [ { ele: 'a', count: 2 }, { ele: 'b', count: 3 }, { ele: 'c', count: 3 } ]
//
// Constraints:
//   - O(n) time using HashMap
// ==========================================

function allRepeatingCharsMap() {
  const str1 = this.input;

  const map = new Map();

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

// -------------------- Test Cases --------------------
console.log(allRepeatingCharsMap.call({ input: "aabbcde" }));
// Expected: [ { ele: 'a', count: 2 }, { ele: 'b', count: 2 } ]

console.log(allRepeatingCharsMap.call({ input: "abcdef" }));
// Expected: null

console.log(allRepeatingCharsMap.call({ input: "aabbbccc" }));
// Expected: [ { ele: 'a', count: 2 }, { ele: 'b', count: 3 }, { ele: 'c', count: 3 } ]

// ==========================================
// 3. All Repeating Characters with Count (Brute Force)
// ==========================================
//
// Given a string, find all characters that appear more than once
// and return each with its total count. No HashMap used.
//
// Examples:
//   Input: "aabbcde"     Output: [ { char: 'a', count: 2 }, { char: 'b', count: 2 } ]
//   Input: "abcdef"      Output: null
//   Input: "anrrbblcde"  Output: [ { char: 'r', count: 2 }, { char: 'b', count: 2 } ]
//
// Constraints:
//   - O(n^2) time, no HashMap
// ==========================================

function allRepeatingCharsBrute() {
  const str = this.input;
  const checked = [];
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let count = 0;

    if (checked.includes(char)) continue;

    for (let j = 0; j < str.length; j++) {
      if (str[j] === char) {
        count++;
      }
    }

    if (count > 1) {
      result.push({ char, count });
      checked.push(char);
    }
  }

  return result.length ? result : null;
}

// -------------------- Test Cases --------------------
console.log(allRepeatingCharsBrute.call({ input: "aabbcde" }));
// Expected: [ { char: 'a', count: 2 }, { char: 'b', count: 2 } ]

console.log(allRepeatingCharsBrute.call({ input: "abcdef" }));
// Expected: null

console.log(allRepeatingCharsBrute.call({ input: "anrrbblcde" }));
// Expected: [ { char: 'r', count: 2 }, { char: 'b', count: 2 } ]
