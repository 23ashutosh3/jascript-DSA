// Merge Overlapping Intervals — sort + merge
// Given an array of intervals where each interval is [start, end]

// merge all overlapping intervals and return an array of the non-overlapping intervals that cover all
// the input ranges.

// Input: [[1,3], [2,6], [8,10], [15,18]]
// Output: [[1,6], [8,10], [15,18]]

// arr[0]<newArr[0]
// arr[1]>newArr[0]

[
  [1, 4],
  [4, 5],
];

function mergeIntervals(arr) {
  const finalArr = [];
  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < arr.length; i++) {
    let start = arr[i][0];
    let end = arr[i][1];

    while (i + 1 < arr.length && end >= arr[i + 1][0]) {
      if (arr[i + 1][1] > end) {
        end = arr[i + 1][1];
      }
      i++;
    }

    finalArr.push([start, end]);
  }
  return finalArr;
}

// Basic overlap
const basicOverlap = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log("basicOverlap:", mergeIntervals(basicOverlap));
// Expected: [[1,6],[8,10],[15,18]]

// Touching edges — [1,4] and [4,5] share boundary
const touchingEdges = [
  [1, 4],
  [4, 5],
];

console.log("touchingEdges:", mergeIntervals(touchingEdges));
// Expected: [[1,5]]

// All merge into one
const allMerge = [
  [1, 3],
  [2, 5],
  [4, 8],
];
console.log("allMerge:", mergeIntervals(allMerge));
// Expected: [[1,8]]

// No overlaps
const noOverlaps = [
  [1, 2],
  [5, 6],
  [9, 10],
];
console.log("noOverlaps:", mergeIntervals(noOverlaps));
// Expected: [[1,2],[5,6],[9,10]]

// Unsorted input
const unsorted = [
  [8, 10],
  [1, 3],
  [2, 6],
  [15, 18],
];
console.log("unsorted:", mergeIntervals(unsorted));
// Expected: [[1,6],[8,10],[15,18]]

// Single interval
const single = [[1, 5]];
console.log("single:", mergeIntervals(single));
// Expected: [[1,5]]

// One interval fully inside another
const fullyInside = [
  [1, 10],
  [3, 5],
];
console.log("fullyInside:", mergeIntervals(fullyInside));
// Expected: [[1,10]]

// function mergeIntervals(arr) {
//   arr.sort((a, b) => a[0] - b[0]);
//   const merged = [arr[0]];

//   for (let i = 1; i < arr.length; i++) {
//     const last = merged[merged.length - 1];

//     console.log("last", last);

//     if (arr[i][0] <= last[1]) {
//       if (arr[i][1] > last[1]) last[1] = arr[i][1];
//     } else {
//       merged.push(arr[i]);
//     }
//   }
//   return merged;
// }
