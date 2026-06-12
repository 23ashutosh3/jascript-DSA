// ==========================================
// Maximum Sum Subarray of Size K
// ==========================================
//
// Given an array of integers `nums` and an integer `k`,
// find the maximum sum of any contiguous subarray of size k.
//
// Examples:
//   Input: nums = [2, 1, 5, 1, 3, 2], k = 3
//   Output: 9
//   Explanation: Subarray [5, 1, 3] has the maximum sum = 9
//
//   Input: nums = [2, 3, 4, 1, 5], k = 2
//   Output: 7
//   Explanation: Subarray [3, 4] has the maximum sum = 7
//
//   Input: nums = [1, 1, 1, 1, 1], k = 1
//   Output: 1
//
// Constraints:
//   - 1 <= k <= nums.length
//   - Array can contain negative numbers
//
// Hint: Think about the sliding window technique.
// ==========================================

function maxSumSizeK(nums, k) {
  // calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  // slide the window: add next element, remove first element
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i]; // add element entering window
    windowSum -= nums[i - k]; // remove element leaving window
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Approach 2: Two-pointer sliding window (left and right pointers)
function maxSumSizeK_twoPointer(nums, k) {
  let left = 0;
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right]; // expand window from right

    if (right - left + 1 === k) {
      // window has reached size k
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[left]; // shrink window from left
      left++;
    }
  }

  return maxSum;
}

// -------------------- Test Cases --------------------

// console.log(maxSumSizeK([2, 1, 5, 1, 3, 2], 3)); // Expected: 9
// console.log(maxSumSizeK([2, 3, 4, 1, 5], 2)); // Expected: 7
// console.log(maxSumSizeK([1, 1, 1, 1, 1], 1)); // Expected: 1
// console.log(maxSumSizeK([-1, 2, 3, -4, 5], 3)); // Expected: 4
// console.log(maxSumSizeK([5], 1)); // Expected: 5

// console.log("\n--- Two Pointer Approach ---");
// console.log(maxSumSizeK_twoPointer([2, 1, 5, 1, 3, 2], 3)); // Expected: 9
// console.log(maxSumSizeK_twoPointer([2, 3, 4, 1, 5], 2)); // Expected: 7
// console.log(maxSumSizeK_twoPointer([1, 1, 1, 1, 1], 1)); // Expected: 1
// console.log(maxSumSizeK_twoPointer([-1, 2, 3, -4, 5], 3)); // Expected: 4
// console.log(maxSumSizeK_twoPointer([5], 1)); // Expected: 5

function maxSumK(arr, k) {
  let sum = 0;
  let maxSum;
  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }
  maxSum = sum;
//   console.log("sum", sum);
  for (let j = k; j < arr.length; j++) {
    sum = sum + arr[j] - arr[j - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

// 8 + 1 - 2 =6

console.log(maxSumK([2, 1, 5, 1, 3, 2], 3)); // Expected: 9
console.log(maxSumK([2, 3, 4, 1, 5], 2)); // Expected: 7
console.log(maxSumK([1, 1, 1, 1, 1], 1)); // Expected: 1
console.log(maxSumK([-1, 2, 3, -4, 5], 3)); // Expected: 4
console.log(maxSumK([5], 1)); // Expected: 5
