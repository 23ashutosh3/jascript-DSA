// ==========================================
// Longest Substring Without Repeating Characters
// ==========================================
//
// Given a string `s`, find the length of the longest substring
// without repeating characters.
//
// A substring is a contiguous sequence of characters within the string.
//
// Examples:
//   Input: s = "abcabcbb"
//   Output: 3
//   Explanation: "abc" is the longest substring without repeating chars
//
//   Input: s = "bbbbb"
//   Output: 1
//   Explanation: "b" is the longest, every char is the same
//
//   Input: s = "pwwkew"
//   Output: 3
//   Explanation: "wke" is the longest (not "pwke" — that's a subsequence, not substring)
//
//   Input: s = ""
//   Output: 0
//
//   Input: s = "abcdef"
//   Output: 6
//   Explanation: All characters are unique, entire string is the answer
//
//   Input: s = "dvdf"
//   Output: 3
//   Explanation: "vdf" is the longest
//
// Constraints:
//   - 0 <= s.length <= 10^4
//   - s consists of English letters, digits, symbols, and spaces
//   - Use sliding window approach
// ==========================================
// abcabcbb;
function longestSubstring(s) {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    const longSubstr = new Set();
    let count = 0;

    for (let j = i; j < s.length; j++) {
      if (!longSubstr.has(s[j])) {
        longSubstr.add(s[j]);
        count++;
      } else {
        break;
      }
    }
    if (count > maxLength) {
      maxLength = count;
    }
  }
  return maxLength;
}

// -------------------- Test Cases --------------------

console.log(longestSubstring("abcabcbb")); // Expected: 3
// console.log(longestSubstring("bbbbb")); // Expected: 1
// console.log(longestSubstring("pwwkew")); // Expected: 3
// console.log(longestSubstring("")); // Expected: 0
// console.log(longestSubstring("abcdef")); // Expected: 6
// console.log(longestSubstring("dvdf")); // Expected: 3
// console.log(longestSubstring("aab")); // Expected: 2

function longestSubstringSW(str) {
  const set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log("\n--- O(n) Sliding Window ---");
console.log(longestSubstringSW("abcabcbb")); // Expected: 3
console.log(longestSubstringSW("bbbbb")); // Expected: 1
console.log(longestSubstringSW("pwwkew")); // Expected: 3
console.log(longestSubstringSW("")); // Expected: 0
console.log(longestSubstringSW("abcdef")); // Expected: 6
console.log(longestSubstringSW("dvdf")); // Expected: 3
console.log(longestSubstringSW("aab")); // Expected: 2
