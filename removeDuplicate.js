//  Remove Duplicates from a String (set / hashing use)

function removeDuplicate(data) {
  const rd = new Set(data);
  return Array.from(rd);
}

console.log(removeDuplicate([1, 2, 4, 3, 2, 1]));
