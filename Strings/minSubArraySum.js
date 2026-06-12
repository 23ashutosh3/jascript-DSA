// ==========================================
// Minimum Size Subarray Sum
// ==========================================
//
// Given an array of positive integers `nums` and a positive integer `target`,
// find the length of the smallest contiguous subarray whose sum is
// greater than or equal to `target`. If no such subarray exists, return 0.
//
// Examples:
//   Input: nums = [2, 3, 1, 2, 4, 3], target = 7
//   Output: 2
//   Explanation: [4, 3] has sum 7 and is the shortest → length 2
//
//   Input: nums = [1, 4, 4], target = 4
//   Output: 1
//   Explanation: [4] has sum >= 4 → length 1
//
//   Input: nums = [1, 1, 1, 1, 1, 1, 1, 1], target = 11
//   Output: 0
//   Explanation: Total sum is 8, can't reach 11
//
//   Input: nums = [1, 2, 3, 4, 5], target = 15
//   Output: 5
//   Explanation: Entire array sums to 15 → length 5
//
//   Input: nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8], target = 15
//   Output: 2
//   Explanation: [10, 7] has sum 17 >= 15 → length 2
//
// Constraints:
//   - 1 <= nums.length <= 10^5
//   - 1 <= nums[i] <= 10^4
//   - 1 <= target <= 10^9
//   - Use sliding window approach (variable size window)
// ==========================================

function minSubarraySum1(nums, target) {
  let minLength = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      count++;
      if (sum >= target) {
        if (count < minLength) {
          minLength = count;
        }
        break;
      }
    }
  }
  return minLength === Infinity ? 0 : minLength;
}
[2, 3, 1, 2, 4, 3]

function minSubarraySum(nums, target) {
  let minLength = Infinity;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      let length = right - left + 1;
      if (length < minLength) {
        minLength = length;
      }
      sum -= nums[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

// -------------------- Test Cases --------------------

console.log(minSubarraySum([2, 3, 1, 2, 4, 3], 7)); // Expected: 2
console.log(minSubarraySum([1, 4, 4], 4)); // Expected: 1
console.log(minSubarraySum([1, 1, 1, 1, 1, 1, 1, 1], 11)); // Expected: 0
console.log(minSubarraySum([1, 2, 3, 4, 5], 15)); // Expected: 5
console.log(minSubarraySum([5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 15)); // Expected: 2
console.log(minSubarraySum([10], 5)); // Expected: 1



// right 0



