// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False





//helper function to remove special character and space then turn it into array 

const helper = (str) => {
  // [a-zA-Z]
  return str.toLowerCase().replace(/[^A-Z0-9]/ig, "").split("")

}

const anagrams = (strA, strB) => {

  //1. Run helper and combine strings into single array 
  let comboStr = [...helper(strA), ...helper(strB)]

  //2. Turn arrary in object and count the number of times the letter shows up 
  const newObj = comboStr.reduce((prev, cur) => {
    prev[cur] = ++prev[cur] || 1;
    return prev;
  }, {})

  //3. Check to see if every value in the object has a reminder of 0 when divide by 2.Odd will indicate that string a and b are not balanace
  const evenCheck = Object.values(newObj).every(val => val % 2 === 0)

  return evenCheck;
}

console.log(anagrams('Hi there', 'Bye there'))

// for (let i = 0; i < newArr.length; i++) {
//   if (newArr[0] === )
  
// };