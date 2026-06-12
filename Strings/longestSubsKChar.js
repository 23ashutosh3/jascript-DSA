// ==========================================
// Longest Substring with At Most K Distinct Characters
// ==========================================
//
// Given a string `s` and an integer `k`, find the length of the
// longest substring that contains at most `k` distinct characters.
//
// Examples:
//   Input: s = "eceba", k = 2
//   Output: 3
//   Explanation: "ece" has 2 distinct chars (e, c) → length 3
//
//   Input: s = "aa", k = 1
//   Output: 2
//   Explanation: "aa" has 1 distinct char → length 2
//
//   Input: s = "aabbcc", k = 2
//   Output: 4
//   Explanation: "aabb" or "bbcc" → length 4
//
//   Input: s = "abcdef", k = 3
//   Output: 3
//   Explanation: "abc", "bcd", "cde", or "def" → length 3
//
//   Input: s = "aaaa", k = 2
//   Output: 4
//   Explanation: Entire string has only 1 distinct char (< k) → length 4
//
// Constraints:
//   - 1 <= k <= s.length
//   - Use sliding window approach (variable size window)
// ==========================================
// eceba 2
function longestSubsKChar(s, k) {
  let left = 0;
  let maxLen = 0;
  const map = new Map();

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) map.delete(s[left]);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

function longestSubsKCharArray(s, k) {
  let left = 0;
  let maxLen = 0;
  let distinct = 0;
  const freq = {};

  for (let right = 0; right < s.length; right++) {
    if (!freq[s[right]]) distinct++;
    freq[s[right]] = (freq[s[right]] || 0) + 1;

    while (distinct > k) {
      freq[s[left]]--;
      if (freq[s[left]] === 0) distinct--;
      left++;
    }

    if (right - left + 1 > maxLen) maxLen = right - left + 1;
  }

  return maxLen;
}



// -------------------- Test Cases --------------------

console.log(longestSubsKChar("eceba", 2)); // Expected: 3
console.log(longestSubsKCharArray("eceba", 2)); // Expected: 3
console.log(longestSubsKCharSet("eceba", 2)); // Expected: 3
// console.log(longestSubsKChar("aa", 1)); // Expected: 2
// console.log(longestSubsKChar("aabbcc", 2)); // Expected: 4
// console.log(longestSubsKChar("abcdef", 3)); // Expected: 3
// console.log(longestSubsKChar("aaaa", 2)); // Expected: 4
// console.log(longestSubsKChar("abaccc", 2)); // Expected: 4
