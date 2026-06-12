// ==========================================
// Minimum Window Substring
// ==========================================
//
// Given two strings `s` and `t`, find the smallest substring in `s`
// that contains all characters of `t` (including duplicates).
// If no such substring exists, return "".
//
// Examples:
//   Input: s = "ADOBECODEBANC", t = "ABC"
//   Output: "BANC"
//   Explanation: "BANC" contains A, B, C and is the smallest such window
//
//   Input: s = "a", t = "a"
//   Output: "a"
//
//   Input: s = "a", t = "aa"
//   Output: ""
//   Explanation: s doesn't have two a's
//
//   Input: s = "cabwefgewcwaefgcf", t = "cae"
//   Output: "cwae"
//
//   Input: s = "abc", t = "d"
//   Output: ""
//   Explanation: "d" doesn't exist in s
//
// Constraints:
//   - 1 <= s.length, t.length <= 10^5
//   - s and t consist of uppercase and lowercase English letters
//   - Use sliding window approach (variable size window)
// ==========================================

function minimumWindowSubstring(s, t) {
  // your solution here
}

// -------------------- Test Cases --------------------

console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minimumWindowSubstring("a", "a"));                // Expected: "a"
console.log(minimumWindowSubstring("a", "aa"));               // Expected: ""
console.log(minimumWindowSubstring("cabwefgewcwaefgcf", "cae")); // Expected: "cwae"
console.log(minimumWindowSubstring("abc", "d"));              // Expected: ""
console.log(minimumWindowSubstring("aa", "aa"));              // Expected: "aa"
