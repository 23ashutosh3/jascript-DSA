// Longest Substring Without Repeating Characters:
// Given a string, find the length of the longest substring without repeating characters.

function longestSubString(str) {
  const longestString = new Set();

  const arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    const storeString = new Set(arr[i]);
    for (var j = i + 1; j < arr.length; j++) {
      if (storeString.has(arr[j])) {
        break;
      } else {
        storeString.add(arr[j]);
      }
    }
    let length = storeString.size;
    longestString.add(length);
  }

  const mapArr = [...longestString];
  console.log(longestString);
  mapArr.sort((a, b) => {
    return a - b;
  });

  const mapArrLength = mapArr.length - 1;
  return mapArr[mapArrLength];
}


// Code with maxLength tracking (no sorting):

const longString = "qwertyuqwedsaasdabcstyuiop1234567";
console.log(longestSubString(longString));


function longestSubString(str) {
  let maxLength = 0;
  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    const storeString = new Set();
    storeString.add(arr[i]);

    for (let j = i + 1; j < arr.length; j++) {
      if (storeString.has(arr[j])) break;
      storeString.add(arr[j]);
    }

    maxLength = Math.max(maxLength, storeString.size);
  }

  return maxLength;
}





// O(n) Solution using sliding window and Set
function longestSubString(str) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      // Remove chars from left until duplicate removed
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

const longString1 = "qwertyuqwedsaasdabcstyuiop1234567";
console.log(longestSubString(longString1));  // Outputs: 11