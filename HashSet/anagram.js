function groupedAnagram(arr) {
  const result = [];
  const groupedIndices = new Set(); // To track grouped words

  for (let i = 0; i < arr.length; i++) {
    if (groupedIndices.has(i)) continue; // skip if already grouped

    // console.log(groupedIndices, i)

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

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupedAnagram(arr);

//  Anagram check using frequency (fix for Set limitation)
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

  groupedAnagram(arr)
  {
    const groupedAnagram = new HashSet()
    const result = []
    for(var i=0;i<arr.lengrh;i++){
      if(groupedAnagram.has(i)) continue;
      groupedAnagram.add(i)
      const arr1 = [arr[i]]
      for(var j=i+1;j<arr.length;j++){
        if(groupedAnagram.has(j)) continue;
        if(isAnagram(arr[i],arr[j])){
        groupedAnagram.add(j)
        arr1.push(arr[j])
        }
      }
      result.push(arr1)
      return result
    }
  }

