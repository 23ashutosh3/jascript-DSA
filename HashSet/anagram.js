function groupedAnagram(arr) {
  const result = [];
  const groupedIndices = new Set(); // To track grouped words

  for (let i = 0; i < arr.length; i++) {
    if (groupedIndices.has(i)) continue; // skip if already grouped

    const currentGroup = [arr[i]];
    groupedIndices.add(i);

    for (let j = i + 1; j < arr.length; j++) {
      if (groupedIndices.has(j)) continue;

      if (isAnagram(arr[i], arr[j])) {
        currentGroup.push(arr[j]);
        groupedIndices.add(j);
      }
    }

    result.push(currentGroup);
  }

  console.log(result);
}

// ✅ Anagram check using frequency (fix for Set limitation)
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupedAnagram(arr);

function groupedAnagram1(arr) {
  const anagram = new Set();
  const result = [];

  for (var i = 0; i < arr.length; i++) {
    if (anagram.has[j]) continue;
    const newArr = [];
    newArr.push(arr[i]);
    anagram.add(i);

    for (var j = i + 1; j < arr.length; j++) {
      if (anagram.has[j]) continue;

      if (isAnagram(arr[i], arr[j])) {
        anagram.add(j);
        newArr.push(arr[j]);
      }
    }

    result.push(newArr);
  }
}

function isAnagram(ele1,ele2){
    if(ele1.length!==ele2.length){
        return false
    }
    const obj ={}

    for(var ele of ele1){
     if(obj[ele]){
        obj[ele]= obj[ele]+1
     }else{
        obj[ele]=0
     }
    }

    for(var val of ele2){
        if(!obj[val]){
            return false
        }else{
            obj[val]--
        }
    }

}

const arr1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupedAnagram(arr);
