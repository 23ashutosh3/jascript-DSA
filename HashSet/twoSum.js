// Given an array of integers and a target sum, return indices of the two numbers such that they add up to the target.

function getTargetSum(arr, target) {
  const allData = [];
  let value = 0;
  const dataSet = new Set([]);

  for (var i = 0; i < arr.length - 1; i++) {
    value = target - arr[i];
    const index = arr.indexOf(value);
    if (index > 0) {
      const arr1 = [arr[i], arr[index]];
      dataSet.add(arr1);
    }
  }
  return dataSet;
}

const arr = [2, 5, 7, 6, 1, 3];
const targetSum = 9;

console.log(getTargetSum(arr, targetSum));
 

// Complexity is O(n2) can be reduced to O(n) using map