// Maximum Subarray Sum (Kadane's algorithm)
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 6

function maximumSubArr(arr) {
  let sum = arr[0];
  let finalArr = [];

  // Use 'let i' to avoid global scope leaks
  for (let i = 0; i < arr.length; i++) {
    let arrSum = 0;
    let newArr = [];
    arrSum = arr[i];
    newArr.push(arr[i]);
    if (arrSum > sum) {
      sum = arrSum;
      finalArr = [...newArr];
    }
    for (let j = i + 1; j < arr.length; j++) {
      arrSum = arrSum + arr[j];
      newArr.push(arr[j]);
      if (arrSum > sum) {
        sum = arrSum;
        finalArr = [...newArr];
      }
    }
  }
  return [sum, finalArr];
}

// // Kadane's Algorithm - O(n)
// function kadane(arr) {
//   let maxSum = arr[0];
//   let currentSum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     currentSum = currentSum + arr[i] > arr[i] ? currentSum + arr[i] : arr[i];
//     maxSum = currentSum > maxSum ? currentSum : maxSum;
//   }
//   return maxSum;
// }

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const [maxSum, subArray] = maximumSubArr(arr);
console.log("Brute force sum:", maxSum, "subarray:", subArray);
// console.log("Kadane:", kadane(arr));
