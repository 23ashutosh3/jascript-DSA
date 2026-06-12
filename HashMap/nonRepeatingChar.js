// 1. Find the first non-repeating character in a string

// Input: "aabbcde"
// Output: "c"


// function nonRepeatingChar(){
//     const str1 = this.input;

//     for(let char of str1){
//         if(str1.indexOf(char)===str1.lastIndexOf(char)){
//             return char
//         }
//     }
// }

const obj ={
    input:'aabbcde'
}

const obj2 ={
    input :'aarrbblcde'
}

console.log(nonRepeatingChar.call(obj))
console.log(nonRepeatingChar.call(obj2))


// using HashMap

function nonRepeatingChar(){
    const str1 = this.input;

    const map = new Map();
    // Step 1: Count frequency of each character

    for(let char of str1){
        if(map.has(char)){
            map.set(char,map.get(char)+1)
        }else{
            map.set(char,1)
        }
    }

      // Step 2: Find first character with count = 1

      for(let char of str1){
        if(map.get(char)===1){
            return char;
        }
      }


}
