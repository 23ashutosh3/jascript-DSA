# Interview Target Questions (Medium Complexity)

## Arrays

- [ ] Two Sum (return indices) — use a Map for O(n)
- [ ] Maximum Subarray Sum (Kadane's algorithm)
- [ ] Merge Overlapping Intervals — sort + merge
- [ ] Product of Array Except Self — without division
- [ ] Container With Most Water — two pointer
- [ ] 3Sum — find all triplets that sum to zero

## Strings

- [ ] Longest Substring Without Repeating Characters — sliding window
- [ ] Valid Parentheses — stack-based matching
- [ ] Group Anagrams — sort each word as key in a Map
- [ ] Longest Palindromic Substring — expand from center
- [ ] String Compression — "aaabbc" → "a3b2c1"
- [ ] Minimum Window Substring — sliding window + frequency map

## Sets / HashMaps

- [ ] First Non-Repeating Character
- [ ] Intersection of Two Arrays — Set intersection
- [ ] Longest Consecutive Sequence — Set lookup, O(n)k- [ ] Subarray Sum Equals K — prefix sum + Map
- [ ] Top K Frequent Elements — Map + bucket sort
- [ ] Check if Array Has Duplicates Within K Distance — sliding window Set

## Priority (Top 5)

- [ ] Longest Substring Without Repeating Chars — Sliding window + Set
- [ ] Group Anagrams — HashMap + sorting
- [ ] Longest Consecutive Sequence — Set
- [ ] Subarray Sum Equals K — Prefix sum + Map
- [ ] 3Sum — Two pointers + sorting

## Sliding Window — Fixed Size

- [ ] Maximum sum subarray of size k
- [ ] Maximum average subarray of size k
- [ ] Find all anagrams of a pattern in a string (window = pattern length, compare char counts)
- [ ] Permutation in string (does s2 contain a permutation of s1)

## Sliding Window — Variable Size

- [ ] Longest substring without repeating characters
- [ ] Longest substring with at most k distinct characters
- [ ] Minimum window substring (smallest substring of s containing all chars of t)
- [ ] Minimum size subarray sum (shortest subarray with sum ≥ target)
- [ ] Longest repeating character replacement (replace ≤ k chars to get the longest run of one letter)
- [ ] Fruit into baskets (longest subarray with at most 2 distinct values — same as "k distinct" with k=2)
- [ ] Subarrays with k different integers (count, often done as atMost(k) − atMost(k−1))

## Must-Master (Transferable Templates)

- [ ] Longest substring without repeating characters
- [ ] Minimum window substring
- [ ] Three Sum
- [ ] Trapping Rain Water
- [ ] Minimum size subarray sum

## Behavioral

- [ ] Describe a time you had to debug a difficult production incident where logs were your primary source of information. What was the situation, what actions did you take, and what was the outcome?

## System Design

- [ ] Design a log analytics service for Sanofi that needs to support near real-time dashboards for error rates and latency across multiple microservices deployed globally. Discuss the high-level architecture, data model, and how you would handle scale and multi-region deployments.

## Coding / Design

- [ ] Implement a RESTful API endpoint to retrieve paginated log entries filtered by service_name, status_code, and time range. How would you design the data model and API contract, and what considerations would you take for performance?
