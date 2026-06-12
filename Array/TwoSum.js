// Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// Each input has exactly one solution, and you may not use the same element twice.



function twoSum(nums, target) {
  let finalArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        finalArr.push([i, j]);
      }
    }
  }
  return finalArr;
}

// Using Map - O(n)
function twoSumMap(nums, target) {
  let result = [];
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      result.push([map.get(complement), i]);
    }
    map.set(nums[i], i);
  }
  return result;
}

// Test cases (Map)
console.log("--- Map O(n) ---");
console.log(twoSumMap([2, 7, 11, 15], 9));       // Expected: [[0, 1]]
console.log(twoSumMap([3, 2, 4], 6));             // Expected: [[1, 2]]
console.log(twoSumMap([3, 3], 6));                // Expected: [[0, 1]]
console.log(twoSumMap([1, 5, 8, 3, 9], 4));      // Expected: [[0, 3]]
console.log(twoSumMap([-1, -2, -3, -4, -5], -8)); // Expected: [[2, 4]]
console.log(twoSumMap([0, 4, 3, 0], 0));          // Expected: [[0, 3]]

// Test cases (Brute Force)
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]
console.log(twoSum([1, 5, 8, 3, 9], 4)); // Expected: [0, 3]
console.log(twoSum([-1, -2, -3, -4, -5], -8)); // Expected: [2, 4]
console.log(twoSum([0, 4, 3, 0], 0)); // Expected: [0, 3]
console.log(twoSum([1, 5, 3, 3, 4], 4)); // Expected: [[0, 2], [0, 3]]
