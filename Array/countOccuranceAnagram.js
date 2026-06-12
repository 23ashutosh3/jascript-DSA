// ==========================================
// Count Occurrences of Anagrams in a String
// ==========================================
//
// Given a string `text` and a pattern `pattern`,
// find the count of occurrences of anagrams of the pattern in the text.
//
// An anagram is a rearrangement of all characters of a string.
// Use a sliding window of size pattern.length over the text.
//
// Examples:
//   Input: text = "forxxorfxdofr", pattern = "for"
//   Output: 3
//   Explanation:
//     "for" (index 0-2) → anagram of "for"
//     "orf" (index 5-7) → anagram of "for"
//     "ofr" (index 10-12) → anagram of "for"
//
//   Input: text = "aabaabaa", pattern = "aaba"
//   Output: 4
//   Explanation:
//     "aaba" (index 0-3) → anagram
//     "abaa" (index 1-4) → anagram
//     "baab" (index 2-5) → anagram
//     "aaba" (index 3-6) → anagram
//
//   Input: text = "abcd", pattern = "xyz"
//   Output: 0
//
//   Input: text = "ab", pattern = "ab"
//   Output: 1
//
// Constraints:
//   - text and pattern contain only lowercase English letters
//   - pattern.length <= text.length
//   - Use sliding window approach
// ==========================================

// forxxorfxdofr;
// 0-0+1 =3
// 1-0+1 =3
// 2-0+1 =3
function countAnagrams(text, pattern) {
  let left = 0;
  let count = 0;
  for (let right = 0; right < text.length ; right++) {
    if (right - left + 1 === pattern.length) {
      let isTrue = isAnagram(
        text.substring(left, left + pattern.length),
        pattern,
      );

      if (isTrue) {
        count++;
      }
      left++;
    }
  }
  return count;

  // your solution here
}
function isAnagram(str1, str2) {
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!obj[str2[i]]) {
      return false;
    }
    obj[str2[i]]--;
  }

  return true;
}

// -------------------- Test Cases --------------------

console.log(countAnagrams("forxxorfxdofr", "for")); // Expected: 3
console.log(countAnagrams("aabaabaa", "aaba")); // Expected: 4
console.log(countAnagrams("abcd", "xyz")); // Expected: 0
console.log(countAnagrams("ab", "ab")); // Expected: 1
console.log(countAnagrams("aaa", "a")); // Expected: 3

// O(n) Sliding Window — update frequency map incrementally instead of rebuilding
function countAnagramsSW(text, pattern) {
  const k = pattern.length;
  let count = 0;

  // build pattern frequency map
  const patMap = {};
  for (const ch of pattern) {
    patMap[ch] = (patMap[ch] || 0) + 1;
  }

  const winMap = {};       // frequency map of current window
  let matched = 0;         // how many unique chars have matching counts
  const required = Object.keys(patMap).length;  // unique chars needed

  let left = 0;

  for (let right = 0; right < text.length; right++) {
    // add right char to window
    const rChar = text[right];
    winMap[rChar] = (winMap[rChar] || 0) + 1;
    if (winMap[rChar] === patMap[rChar]) matched++;
    // if we just went over, it was matched before, now it's not
    if (winMap[rChar] === patMap[rChar] + 1) matched--;

    // window reached size k
    if (right - left + 1 === k) {
      if (matched === required) count++;

      // remove left char from window
      const lChar = text[left];
      if (winMap[lChar] === patMap[lChar]) matched--;
      winMap[lChar]--;
      if (winMap[lChar] === patMap[lChar]) matched++;
      left++;
    }
  }

  return count;
}

console.log("\n--- O(n) Sliding Window ---");
console.log(countAnagramsSW("forxxorfxdofr", "for")); // Expected: 3
console.log(countAnagramsSW("aabaabaa", "aaba")); // Expected: 4
console.log(countAnagramsSW("abcd", "xyz")); // Expected: 0
console.log(countAnagramsSW("ab", "ab")); // Expected: 1
console.log(countAnagramsSW("aaa", "a")); // Expected: 3
