// 3Sum
// Given an array of integers, find all unique triplets [a, b, c] such that a + b + c = 0.
// No duplicate triplets allowed in the result.

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate for i

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;   // skip duplicate
        while (left < right && nums[right] === nums[right - 1]) right--; // skip duplicate
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Using Set - O(n²)
function threeSumSet(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let seen = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      let complement = -(nums[i] + nums[j]);

      if (seen.has(complement)) {
        result.push([nums[i], complement, nums[j]]);
        while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
      }
      seen.add(nums[j]);
    }
  }

  return result;
}

// Test cases (Set)
console.log("--- Set O(n²) ---");
console.log(threeSumSet([-1, 0, 1, 2, -1, -4])); // Expected: [[-1,-1,2], [-1,0,1]]
console.log(threeSumSet([0, 1, 1]));               // Expected: []
console.log(threeSumSet([0, 0, 0]));               // Expected: [[0,0,0]]
console.log(threeSumSet([-2, 0, 1, 1, 2]));        // Expected: [[-2,0,2], [-2,1,1]]
console.log(threeSumSet([1, -1, -1, 0]));           // Expected: [[-1,0,1]]

// Brute force O(n³)
function threeSumBrute(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;

        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return result;
}

// Test cases (Brute force)
console.log("--- Brute Force O(n³) ---");
console.log(threeSumBrute([-1, 0, 1, 2, -1, -4])); // Expected: [[-1,-1,2], [-1,0,1]]
console.log(threeSumBrute([0, 1, 1]));               // Expected: []
console.log(threeSumBrute([0, 0, 0]));               // Expected: [[0,0,0]]
console.log(threeSumBrute([-2, 0, 1, 1, 2]));        // Expected: [[-2,0,2], [-2,1,1]]
console.log(threeSumBrute([1, -1, -1, 0]));           // Expected: [[-1,0,1]]

// Test cases (Two Pointer)
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected: [[-1,-1,2], [-1,0,1]]
console.log(threeSum([0, 1, 1]));               // Expected: []
console.log(threeSum([0, 0, 0]));               // Expected: [[0,0,0]]
console.log(threeSum([-2, 0, 1, 1, 2]));        // Expected: [[-2,0,2], [-2,1,1]]
console.log(threeSum([1, -1, -1, 0]));           // Expected: [[-1,0,1]]
