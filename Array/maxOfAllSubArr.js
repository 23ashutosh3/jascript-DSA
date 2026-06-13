// ==========================================
// Maximum of All Subarrays of Size K
// ==========================================
//
// Given an array of integers `nums` and an integer `k`,
// find the maximum element in every contiguous subarray of size k.
//
// Examples:
//   Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
//   Output: [3, 3, 5, 5, 6, 7]
//   Explanation:
//     Window [1, 3, -1]    → max = 3
//     Window [3, -1, -3]   → max = 3
//     Window [-1, -3, 5]   → max = 5
//     Window [-3, 5, 3]    → max = 5
//     Window [5, 3, 6]     → max = 6
//     Window [3, 6, 7]     → max = 7
//
//   Input: nums = [1, 2, 3, 4, 5], k = 2
//   Output: [2, 3, 4, 5]
//
//   Input: nums = [5, 4, 3, 2, 1], k = 3
//   Output: [5, 4, 3]
//
//   Input: nums = [1, 1, 1, 1], k = 2
//   Output: [1, 1, 1]
//
//   Input: nums = [7], k = 1
//   Output: [7]
//
// Constraints:
//   - 1 <= k <= nums.length
//   - Use sliding window approach
//   - Bonus: Solve in O(n) using a deque (monotonic decreasing queue)
// ==========================================

function maxOfAllSubArr(nums, k) {
  const deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// -------------------- Test Cases --------------------

console.log(maxOfAllSubArr([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Expected: [3, 3, 5, 5, 6, 7]
console.log(maxOfAllSubArr([1, 2, 3, 4, 5], 2)); // Expected: [2, 3, 4, 5]
console.log(maxOfAllSubArr([5, 4, 3, 2, 1], 3)); // Expected: [5, 4, 3]
console.log(maxOfAllSubArr([1, 1, 1, 1], 2)); // Expected: [1, 1, 1]
console.log(maxOfAllSubArr([7], 1)); // Expected: [7]
console.log(maxOfAllSubArr([1, -1, 5, -2, 3], 3)); // Expected: [5, 5, 5]
