// ==========================================
// Longest Repeating Character Replacement
// ==========================================
//
// Given a string `s` and an integer `k`, you can replace at most `k`
// characters in the string with any other character. Find the length
// of the longest substring containing the same letter after replacements.
//
// Examples:
//   Input: s = "ABAB", k = 2
//   Output: 4
//   Explanation: Replace both A's with B's (or vice versa) → "BBBB" → length 4
//
//   Input: s = "AABABBA", k = 1
//   Output: 4
//   Explanation: Replace one B at index 3 → "AAAAABA" → "AAAA" → length 4
//
//   Input: s = "AAAA", k = 2
//   Output: 4
//   Explanation: Already all same, no replacements needed
//
//   Input: s = "ABCD", k = 0
//   Output: 1
//   Explanation: No replacements allowed, each char is unique → length 1
//
//   Input: s = "ABBB", k = 2
//   Output: 4
//   Explanation: Replace A and one other with B → "BBBB" → length 4
//
// Constraints:
//   - 1 <= s.length <= 10^5
//   - s consists of uppercase English letters only
//   - 0 <= k <= s.length
//   - Use sliding window approach (variable size window)
//
// Hint: window is valid when (windowSize - maxFreqCharCount) <= k
// ==========================================

function longestRepeatingChar(s, k) {
  // your solution here
}

// -------------------- Test Cases --------------------

console.log(longestRepeatingChar("ABAB", 2));     // Expected: 4
console.log(longestRepeatingChar("AABABBA", 1));   // Expected: 4
console.log(longestRepeatingChar("AAAA", 2));      // Expected: 4
console.log(longestRepeatingChar("ABCD", 0));      // Expected: 1
console.log(longestRepeatingChar("ABBB", 2));      // Expected: 4
console.log(longestRepeatingChar("AAAB", 0));      // Expected: 3
