# Two-Pointer + String Problem Set

Patterns: **string + set + two pointer** and **string + map + two pointer**
Target overall: master the sliding-window template, then layer set/map state on top.

---

## 🟢 Easy (2)

### E1. Longest Substring Without Repeating Characters

Given a string `s`, find the length of the longest substring with all unique characters.

- Example: `s = "abcabcbb"` → `3` ("abc")
- Pattern: string + set + two pointer
- Target: **Time O(n)**, **Space O(min(n, charset))**

### E2. Check First-Window Anagram

Given two strings `s1` and `s2`, return `true` if the first window of length `s1.length` in `s2` is an anagram of `s1`.

- Example: `s1 = "ab"`, `s2 = "baeidooo"` → `true`
- Pattern: string + map + two pointer
- Target: **Time O(m)**, **Space O(charset)**

---

## 🟡 Medium (5)

### M1. Longest Substring with At Most K Distinct Characters

Find the length of the longest substring containing at most `k` distinct characters.

- Example: `s = "eceba"`, `k = 2` → `3` ("ece")
- Pattern: string + map + two pointer
- Target: **Time O(n)**, **Space O(k)**

### M2. Minimum Window with All Target Chars

Given `s` and a set of characters `target`, find the smallest window in `s` that contains every character in `target` at least once.

- Example: `s = "aXbYcZ"`, `target = {X, Y}` → `"XbY"`
- Pattern: string + set + two pointer
- Target: **Time O(n)**, **Space O(|target|)**

### M3. Find All Anagrams in a String

Return the start indices of all substrings in `s` that are anagrams of `p`.

- Example: `s = "cbaebabacd"`, `p = "abc"` → `[0, 6]`
- Pattern: string + map + two pointer
- Target: **Time O(n)**, **Space O(charset)**

### M4. Longest Substring with Per-Char Frequency Cap

Find the longest substring where no character appears more than `limit` times.

- Example: `s = "aaabbbcc"`, `limit = 2` → `4` ("bbcc")
- Pattern: string + map + two pointer
- Target: **Time O(n)**, **Space O(charset)**

### M5. Count Substrings Covering Exactly a Required Set

Given a string `s` of lowercase letters and a set `required`, count substrings that contain _exactly_ the characters in `required` (each at least once, no extra characters).

- Example: `s = "abcabc"`, `required = {a, b, c}` → count valid windows
- Pattern: string + set + two pointer
- Target: **Time O(n)**, **Space O(|required|)**

---

## 🔴 Hard (3)

### H1. Minimum Window Substring

Given `s` and `t`, find the smallest substring of `s` containing all characters of `t`, including duplicate frequencies.

- Example: `s = "ADOBECODEBANC"`, `t = "ABC"` → `"BANC"`
- Pattern: string + map + two pointer
- Target: **Time O(n + m)**, **Space O(charset)**

### H2. Longest At-Most-Two-Distinct, Reconstructed

Find the longest substring with at most 2 distinct characters, AND return the actual substring(s), handling ties. Use a set for distinct chars and a map for frequencies (to shrink correctly).

- Example: `s = "abaccc"` → `"accc"`
- Pattern: string + set + map + two pointer
- Target: **Time O(n)**, **Space O(1)** (bounded distinct count)

### H3. Smallest Window Containing All Distinct Chars of the String

First compute the number of distinct characters in `s` (set). Then find the smallest window in `s` that contains all of them.

- Example: `s = "aabcbcdbca"` → `"dbca"` (length 4)
- Pattern: string + set + map + two pointer
- Target: **Time O(n)**, **Space O(charset)**

---

## Quick Reference — Sliding Window Template

```
left = 0
state = {}            // set or map depending on problem
best = init

for right in range(len(s)):
    add s[right] to state

    while (window is invalid):
        remove s[left] from state
        left += 1

    update best using current window [left, right]

return best
```

- **Set** → when you only care about _presence_ (unique chars, distinct cover).
- **Map** → when you care about _counts_ (frequencies, anagrams, caps, duplicates).
