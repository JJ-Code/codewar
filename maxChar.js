// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



//Solution 1
const maxChar = (str) => {
  let arr = str.split("")
  let newObj = arr.reduce((obj, val) => {
    //if the current value is in the object++ if not let it be 1
    (val in obj) ? obj[val]++ : obj[val] = 1
    return obj
  }, {})

  //looping thru the obj[keys] values to find the highest value and returning 
  let maxKey = "";
  let filterObj = Object.keys(newObj).forEach((key, index) => {
    if ((newObj[maxKey] < newObj[key]) || maxKey === "") {
      return maxKey = key
    } 
  })

  return maxKey;
}


//solution 2
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // for of is use to loop thru a string 
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // for in use use to loop thru a object 
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
