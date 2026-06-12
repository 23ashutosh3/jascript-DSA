// ### E1. Longest Substring Without Repeating Characters

// Given a string `s`, find the length of the longest substring with all unique characters.

// - Example: `s = "abcabcbb"` → `3` ("abc")
// - Pattern: string + set + two pointer
// - Target: **Time O(n)**, **Space O(min(n, charset))**




// Test cases
const tests = [
  { input: "abcabcbb", expected: 3 },   // "abc"
  { input: "bbbbb", expected: 1 },       // "b"
  { input: "pwwkew", expected: 3 },      // "wke"
  { input: "", expected: 0 },            // empty string
  { input: "a", expected: 1 },           // single char
  { input: "abcdef", expected: 6 },      // all unique
  { input: "aab", expected: 2 },         // "ab"
  { input: "dvdf", expected: 3 },        // "vdf"
  { input: "tmmzuxt", expected: 5 },     // "mzuxt"
];

tests.forEach(({ input, expected }, i) => {
  const result = lengthOfLongestSubstring(input);
  const status = result === expected ? "PASS" : "FAIL";
  console.log(`Test ${i + 1}: ${status} | input: "${input}" | expected: ${expected} | got: ${result}`);
});


