🧠 What is a Set?
A Set is a collection of unique values. That means:
No duplicates are allowed
The order of insertion is preserved
Values can be of any type (primitive or object)

It behaves like a hash set in other programming languages — i.e., it uses hashing under the hood for fast access.


✅ Why Use a Set?
To store unique items (no duplicates)
To perform operations like:
Checking if a value exists (fast)
Removing duplicates from arrays
Efficient set operations (like union, intersection)

const mySet = new Set();

const numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers); // Set(4) {1, 2, 3, 4} → duplicates removed


<!-- Iteration -->
const set = new Set([1, 2, 3]);
for (const value of set) {
  console.log(value); // 1, 2, 3
}

<!-- using For each -->
set.forEach((value) => {
  console.log(value);
});


| Method          | Description                           |
| --------------- | ------------------------------------- |
| `add(value)`    | Adds a new element to the set         |
| `delete(value)` | Removes a value from the set          |
| `has(value)`    | Checks if the set contains the value  |
| `clear()`       | Removes all elements from the set     |
| `size`          | Property: gets the number of elements |


| Feature                    | `Set`                 | `Array`               |
| -------------------------- | --------------------- | --------------------- |
| Allows duplicates?         | ❌ No                  | ✅ Yes                 |
| Maintains insertion order? | ✅ Yes                 | ✅ Yes                 |
| Lookup performance         | ✅ Fast (O(1) average) | ❌ Slow (O(n))         |
| Indexing                   | ❌ No                  | ✅ Yes (e.g., arr\[0]) |


<!-- 🧠 Does a Set have keys or values? -->
✔️ Short Answer:

A Set has values only
But internally, it treats each value as both the key and value
That's why in the .forEach() callback, the key and value are the same:

const set = new Set(["a", "b"]);
set.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
# Output:
# Key: a, Value: a
# Key: b, Value: b


const set = new Set();
set.add("apple");
set.add("banana");
set.add("apple"); // ignored

console.log(set); // Set(2) {"apple", "banana"}
console.log(set.has("banana")); // true
console.log(set[0]); // undefined (no index access)


| Feature                  | Set                      |
| ------------------------ | ------------------------ |
| Structure                | Hash Table (internally)  |
| Stores                   | Unique **values only**   |
| Keys/Values              | `value === key`          |
| Index access             | ❌ Not supported          |
| Maintains order?         | ✅ Yes (insertion order)  |
| Duplicate entries        | ❌ Not allowed            |
| Access via `.has(value)` | ✅ Fast (avg O(1) lookup) |


| Feature    | `Set`           | `Map`           | `Object`               |
| ---------- | --------------- | --------------- | ---------------------- |
| Key type   | Value only      | Any type        | Strings / Symbols only |
| Stores     | Only values     | Key-value pairs | Key-value pairs        |
| Order      | Insertion order | Insertion order | Not guaranteed         |
| Duplicates | Not allowed     | Allowed         | Allowed                |


1. How to convert a Set (hash-based structure) into an Array?
const mySet = new Set(["a", "b", "c"]);

// Method 1: Using spread operator
const arr1 = [...mySet];

// Method 2: Using Array.from
const arr2 = Array.from(mySet);

console.log(arr1); // ["a", "b", "c"]
console.log(arr2); // ["a", "b", "c"]


🔎 2. How to Get the Index of an Element in a Set?

    Sets in JavaScript do not support indexing
    There’s no set[0] or .indexOf()
    So to find the index, you must convert the Set to an Array first

    const mySet = new Set(["apple", "banana", "cherry"]);
    const arr = [...mySet];
    const index = arr.indexOf("banana");
    console.log(index); // 1


🔍 How to access key-value pairs of objects inside a Set?

You need to iterate through the Set, and for each element, check if it’s an object, then read its properties.

const obj1 = { name: "Alice", age: 25 };
const obj2 = { name: "Bob", age: 30 };
const set = new Set([obj1, obj2]);

for (const item of set) {
  if (typeof item === "object") {
    console.log("Name:", item.name);
    console.log("Age:", item.age);
  }
}


If you want to check for objects inside a Set by value (not by reference), you have two options:

const set = new Set([{ id: 1 }, { id: 2 }]);
const exists = [...set].some(obj => obj.id === 2);
console.log(exists); // ✅ true



🧩 What is a Hash Table?

A hash table (or hash map) is a data structure that stores key-value pairs and provides fast average-time access to values by their keys.

🔍 How Does It Work?

Hash Function:
Takes a key (could be a string, number, object) and computes a hash code — a fixed-size integer that represents the key.
Index Calculation:
The hash code is transformed (usually by modulo operation) into an index that fits within an internal array (called buckets).
Bucket Array:
The hash table has an array of buckets where the key-value pairs are stored.
Collision Handling:
Sometimes different keys produce the same hash index → called a collision. We handle this via:
Chaining: Each bucket holds a linked list or array of entries with the same hash.
Open Addressing: If a bucket is occupied, find the next available bucket (probing).


| Bucket Index | Stored Entries (linked list or array)                         |
| ------------ | ------------------------------------------------------------- |
| 0            | (empty)                                                       |
| 1            | `[["apple", "fruit"]]`                                        |
| 2            | `[["banana", "fruit"], ["carrot", "vegetable"]]` (collision!) |
| 3            | (empty)                                                       |
| 4            | `[["date", "fruit"]]`                                         |
| 5            | (empty)                                                       |




Practice Questions: Hash Tables, Sets, and Maps (Medium to Hard)

Two Sum Problem:
Given an array of integers and a target sum, return indices of the two numbers such that they add up to the target.

Group Anagrams:
Given an array of strings, group the anagrams together.

Longest Substring Without Repeating Characters:
Given a string, find the length of the longest substring without repeating characters.

Subarray Sum Equals K:
Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals k.

Find the Duplicate Number:
Given an array of integers containing n + 1 integers where each integer is between 1 and n (inclusive), find the duplicate number.

Valid Sudoku:
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated.

Copy List with Random Pointer:
Given a linked list where each node contains an additional random pointer, return a deep copy of the list.

Design and Implement a LRU Cache:
Design a data structure that supports get and put operations in O(1) time.

Longest Consecutive Sequence:
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Minimum Window Substring:
Given two strings s and t, return the minimum window substring of s that contains all characters in t.

Top K Frequent Elements:
Given a non-empty array of integers, return the k most frequent elements.

Number of Islands:
Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.

Word Ladder:
Given two words (beginWord and endWord), and a dictionary, find the length of the shortest transformation sequence from beginWord to endWord.

Palindrome Pairs:
Given a list of unique words, find all pairs of distinct indices such that the concatenation forms a palindrome.

Design HashSet:
Implement a hash set from scratch without using built-in libraries.

Design HashMap:
Implement a hash map from scratch with basic put, get, and remove methods.

Find All Anagrams in a String:
Given a string s and a non-empty string p, find all start indices of p's anagrams in s.

Longest Palindromic Substring:
Find the longest palindromic substring in a given string.

Count Subarrays with Equal Number of 0s and 1s:
Given a binary array, find the number of subarrays with equal number of 0s and 1s.

Design a Data Structure that Supports Insert, Delete, Search and GetRandom in O(1):
Implement a data structure supporting insert, delete, search, and get random element operations all in constant time.