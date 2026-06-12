// Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements of nums except nums[i].
// You must solve it WITHOUT using division.

function productExceptSelf(nums) {
  // write your solution here
  let finalArr = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        product = (product * nums[j])
      }
    }
    finalArr.push(product);
  }
  return finalArr;
}

function productExceptSelfBrute(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) product *= nums[j];
    }
    result.push(product);
  }
  return result;
}

// Optimal - O(n) time, O(1) extra space (output array doesn't count)
function productExceptSelfOptimal(nums) {
  const n = nums.length;
  const result = new Array(n);

  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let suffix = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffix *= nums[i + 1];
    result[i] *= suffix;
  }

  return result;
}

// Test cases
// console.log(productExceptSelf([1, 2, 3, 4])); // Expected: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Expected: [0, 0, 9, 0, 0]

// console.log("\n--- Brute Force ---");
// console.log(productExceptSelfBrute([1, 2, 3, 4])); // [24, 12, 8, 6]
// console.log(productExceptSelfBrute([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]

// console.log("\n--- Optimal O(n) ---");
// console.log(productExceptSelfOptimal([1, 2, 3, 4])); // [24, 12, 8, 6]
// console.log(productExceptSelfOptimal([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
// console.log(productExceptSelf([2, 3])); // Expected: [3, 2]
// console.log(productExceptSelf([1, 1, 1, 1])); // Expected: [1, 1, 1, 1]
// console.log(productExceptSelf([0, 0, 3, 4])); // Expected: [0, 0, 0, 0]
// console.log(productExceptSelf([5, -2, 3, 1])); // Expected: [-6, 15, -10, -30]
