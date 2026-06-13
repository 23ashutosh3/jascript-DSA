// ==========================================
// Maximum Subarray Sum (Kadane's Algorithm)
// ==========================================
//
// Given an integer array, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
//
// Examples:
//   Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//   Output: 6
//   Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6
//
//   Input: [1]
//   Output: 1
//
//   Input: [5, 4, -1, 7, 8]
//   Output: 23
//   Explanation: The entire array [5, 4, -1, 7, 8] has the largest sum = 23
//
// Constraints:
//   - 1 <= arr.length <= 10^5
//   - -10^4 <= arr[i] <= 10^4
// ==========================================

// function maximumSubArr(arr) {
//   let sum = arr[0];
//   let finalArr = [arr[0]];

//   // Use 'let i' to avoid global scope leaks
//   for (let i = 0; i < arr.length; i++) {
//     let arrSum = 0;
//     let newArr = [];
//     arrSum = arr[i];
//     newArr.push(arr[i]);
//     if (arrSum > sum) {
//       sum = arrSum;
//       finalArr = [...newArr];
//     }
//     for (let j = i + 1; j < arr.length; j++) {
//       arrSum = arrSum + arr[j];
//       newArr.push(arr[j]);
//       if (arrSum > sum) {
//         sum = arrSum;
//         finalArr = [...newArr];
//       }
//     }
//   }
//   return [sum, finalArr];
// }

// Kadane's Algorithm - O(n) time, O(1) space
function maximumSubArr(arr) {
  let sum = arr[0];
  let max = 0;

  let start = 0;
  let end = 0;
  let tempStart = 0; // The temporary pointer!
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > max) {
      maxSum = sum;
      start = tempStart;
      end = i;
    }

    if (sum < 0) {
      sum = 0;
      tempStart = i + 1;
    }
  }

  return [arr.slice(start, end + 1)];
}

// Kadane's Algorithm (corrected) - O(n) time, O(1) space
// -------------------- Test Cases --------------------

// Mixed positive and negative — classic example
console.log(maximumSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Expected sum: 6, subarray: [4, -1, 2, 1]

// All negative — should pick the least negative
console.log(maximumSubArr([-5, -3, -8, -1, -4]));
// Expected sum: -1, subarray: [-1]

// All positive — entire array is the answer
console.log(maximumSubArr([1, 2, 3, 4, 5]));
// Expected sum: 15, subarray: [1, 2, 3, 4, 5]

// Single element positive
console.log(maximumSubArr([7]));
// Expected sum: 7, subarray: [7]

// Single element negative
console.log(maximumSubArr([-3]));
// Expected sum: -3, subarray: [-3]

// Max subarray at the end
console.log(maximumSubArr([-1, -2, 5, 6, 7]));
// Expected sum: 18, subarray: [5, 6, 7]

// Max subarray at the beginning
console.log(maximumSubArr([5, 4, -10, 1, 2]));
// Expected sum: 9, subarray: [5, 4]

// Zeros mixed in
console.log(maximumSubArr([0, -1, 0, 3, -2, 4]));
// Expected sum: 5, subarray: [3, -2, 4]

// Two equal max subarrays — returns the first one found
console.log(maximumSubArr([3, -5, 3]));
// Expected sum: 3, subarray: [3]
