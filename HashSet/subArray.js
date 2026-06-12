// Subarray Sum Equals K:
// Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals k.

// k=7
// Input: nums = [3, 4, 7, 2, -3, 1, 4, 2], k = 7
// Output: 3
// (Subarrays: [3,4], [7], [1,4,2])










function getSubArrays(inputArr, k) {
  let result = [];
  for (let i = 0; i < inputArr.length; i++) {
    let subArr = [];
    subArr.push(inputArr[i]);
    let sum = inputArr[i];
    if (sum === k) {
      result.push(subArr);
    }
    let finalSum = 0;
    for (let j = i + 1; j < inputArr.length; j++) {
      sum = sum + inputArr[j];
      if (sum <= k) {
        subArr.push(inputArr[j]);
        finalSum = sum;
      }
      if (sum > k) {
        break;
      }
    }
    if (finalSum === k) {
      result.push(subArr);
    }
  }
  return result;
}
function getSubArraysImproved(inputArr, k) {
  let result = [];
  for (let i = 0; i < inputArr.length; i++) {
    let subArr = [];
    let sum = 0;
    for (let j = i; j < inputArr.length; j++) {
      sum += inputArr[j];
      subArr.push(inputArr[j]);
      if (sum === k) {
        result.push([...subArr]);
      }
    }
  }
  return result;
}

let nums = [3, 4, 7, 2, -3, 1, 4, 2];
let k = 7;
function getSubArraysWithMap(inputArr, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < inputArr.length; i++) {
    sum += inputArr[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

console.log("Original:", getSubArrays(nums, k));
console.log("Improved:", getSubArraysImproved(nums, k));
console.log("With Map (O(n)):", getSubArraysWithMap(nums, k));
