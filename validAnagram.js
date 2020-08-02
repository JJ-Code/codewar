// Given two strings, write a function to determine if the second string is an anagram of the first.An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

/*validAnagram(" ",  " ") //true
validAnagram("aaz", "zza") //false
validAnagram("texttwisttime", "timetwisttext") //true
*/

const validAnagram = (str1, str2) => {
  let arrSplit1 = str1.split("")
  let arrSplit2 = str2.split("")
  let indexCharStr2;

  let findChar = arrSplit2.find((char, i) => {
    indexCharStr2 = i
    return char === arrSplit1[0]
  })

  if (arrSplit1.length === 0 && arrSplit1.length === 0) {
    return true;
  } else if ((arrSplit1.length === 0 && arrSplit2.length > 0) || (arrSplit1.length > 0 && arrSplit2.length === 0) || (arrSplit2.length == !arrSplit1.length)) {
    return false;
  } else if (findChar === -1) {
    return false;
  }
  else {
    let removeCharStr2 = arrSplit2.splice(indexCharStr2, 1).join("") 
    let removeCharStr = arrSplit1.splice(0, 1).join("")
    validAnagram(removeCharStr, removeCharStr2)

  }

}






//if there is a letter pop letter off of split 1 and 2 
//else return false


// for (let i = 0; i < arrSplit2.length; i++) {
// if (arrSplit1[0] === arrSplit2[i]) {

// }
