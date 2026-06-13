// ==========================================
// First Negative Number in Every Window of Size K
// ==========================================
//
// Given an array of integers and a positive integer k,
// find the first negative number in every window of size k.
// If a window has no negative number, return 0 for that window.
//
// Examples:
//   Input: nums = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
//   Output: [-1, -1, -7, -15, -15, 0]
//   Explanation:
//     Window [12, -1, -7]   → first negative = -1
//     Window [-1, -7, 8]    → first negative = -1
//     Window [-7, 8, -15]   → first negative = -7
//     Window [8, -15, 30]   → first negative = -15
//     Window [-15, 30, 16]  → first negative = -15
//     Window [30, 16, 28]   → first negative = 0 (no negative)
//
//   Input: nums = [-8, 2, 3, -6, 10], k = 2
//   Output: [-8, 0, -6, -6]
//
//   Input: nums = [1, 2, 3, 4, 5], k = 3
//   Output: [0, 0, 0]
//
//   Input: nums = [-1, -2, -3, -4], k = 2
//   Output: [-1, -2, -3]
//
// Constraints:
//   - 1 <= k <= nums.length
//   - Use sliding window approach
// ==========================================

// 12, -1, -7, 8, -15, 30, 16, 28]

// -8, 2, 3, -6, 10,  = 2

function firstNegative(nums, k) {
  const subArray = [];

  // console.log("nums.length", nums.length - k);

  for (let i = 0; i <= nums.length - k; i++) {
    let j = i;
    let foundNegative = false;
    while (j < k + i) {
      if (nums[j] < 0) {
        subArray.push(nums[j]);
        foundNegative = true;
        break;
      }
      j++;
    }
    if (!foundNegative) {
      subArray.push(0);
    }
  }
  return subArray;
  // your solution here
}

// -------------------- Test Cases --------------------

console.log(firstNegative([12, -1, -7, 8, -15, 30, 16, 28], 3)); // Expected: [-1, -1, -7, -15, -15, 0]
console.log(firstNegative([-8, 2, 3, -6, 10], 2)); // Expected: [-8, 0, -6, -6]
console.log(firstNegative([1, 2, 3, 4, 5], 3)); // Expected: [0, 0, 0]
console.log(firstNegative([-1, -2, -3, -4], 2)); // Expected: [-1, -2, -3]
console.log(firstNegative([5], 1)); // Expected: [0]

// O(n) Sliding Window using queue
function firstNegativeSW(nums, k) {
  const result = [];
  const negatives = []; // queue: stores indices of negative numbers in current window

  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] < 0) {
      negatives.push(right); // track index of every negative
    }

    if (right - left + 1 === k) {
      // window is full — check the front of the queue
      result.push(negatives.length > 0 ? nums[negatives[0]] : 0);

      // if the front negative is leaving the window, remove it
      if (negatives[0] === left) {
        negatives.shift();
      }
      left++;
    }
  }

  return result;
}

// console.log("\n--- O(n) Sliding Window ---");
// console.log(firstNegativeSW([12, -1, -7, 8, -15, 30, 16, 28], 3)); // Expected: [-1, -1, -7, -15, -15, 0]
// console.log(firstNegativeSW([-8, 2, 3, -6, 10], 2)); // Expected: [-8, 0, -6, -6]
// console.log(firstNegativeSW([1, 2, 3, 4, 5], 3)); // Expected: [0, 0, 0]
// console.log(firstNegativeSW([-1, -2, -3, -4], 2)); // Expected: [-1, -2, -3]
// console.log(firstNegativeSW([5], 1)); // Expected: [0]

function firstNegativeOptimal(arr, k) {
  let finalArr = [];
  let firstNegIdx = -1;

  for (let right = 0; right < arr.length; right++) {
    let left = right - k + 1;

    if (left > firstNegIdx) {
      firstNegIdx = -1;
      for (let i = left; i <= right; i++) {
        if (arr[i] < 0) {
          firstNegIdx = i;
          break;
        }
      }
    }

    if (right >= k - 1) {
      finalArr.push(firstNegIdx >= left ? arr[firstNegIdx] : 0);
    }
  }
  return finalArr;
}

console.log("\n--- firstNegativeOptimal ---");
console.log(firstNegativeOptimal([12, -1, -7, 8, -15, 30, 16, 28], 3));
console.log(firstNegativeOptimal([-8, 2, 3, -6, 10], 2));
console.log(firstNegativeOptimal([1, 2, 3, 4, 5], 3));
console.log(firstNegativeOptimal([-1, -2, -3, -4], 2));
console.log(firstNegativeOptimal([5], 1));
