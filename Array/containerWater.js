// Container With Most Water
// Given n non-negative integers where each represents a vertical line at position i with height[i],
// find two lines that together with the x-axis form a container that holds the most water.

function maxArea(heightArr) {
  // write your solution here
  let maximumCapacity = 0;

  for (let i = 0; i < heightArr.length - 1; i++) {
    let capacity = 0;
    for (let j = i + 1; j < heightArr.length; j++) {
      let minHeight = Math.min(heightArr[i], heightArr[j]);
      capacity = minHeight * Math.abs(i - j);
      if (maximumCapacity < capacity) {
        maximumCapacity = capacity;
      }
    }
  }
  return maximumCapacity;
}

// Two-pointer approach - O(n)
function maxAreaOptimal(heightArr) {
  let maximumCapacity = 0;
  let left = 0;
  let right = heightArr.length - 1;

  while (left < right) {
    let width = right - left;
    let height = Math.min(heightArr[left], heightArr[right]);
    maximumCapacity = Math.max(maximumCapacity, width * height);

    if (heightArr[left] < heightArr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maximumCapacity;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected: 49
console.log(maxArea([1, 1])); // Expected: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Expected: 16
console.log(maxArea([11, 15, 7, 13, 4])); // Expected: 33
