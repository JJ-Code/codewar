// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
  const vowelArr = ["a", "e", "i", "o", "u"]
  const strArr = str.toLowerCase().split("")

  return strArr.reduce((prev, curr) => {
    let n = vowelArr.includes(curr)
    if (n === true) {
      return ++prev;
    }
    return prev;
  }, 0)
};


//same concept as reduce but with the forEach method
const vowels = (str) => {
  const vowelArr = ["a", "e", "i", "o", "u"]
  const strArr = str.toLowerCase().split("")
  let count = 0;
  strArr.forEach(letter => {
    let n = vowelArr.includes(letter)
    if (n === true) {
      return count++
    }
  });
  console.log(count);
  return count;
}

//with no includes method
const vowels = (str) => {
  const vowelArr = ["a", "e", "i", "o", "u"]
  const strArr = str.toLowerCase().split("")
  let count = 0;
  strArr.forEach(letter => {
    return vowelArr.forEach(vowel => {
      if (letter === vowel) {
        return count++
      }

    })
  });

  return count;
}



//recursion approach 
const vowels2 = (str, count = 0) => {

  //stoping condition
  if (str.length === 0) {
    return console.log(count);
  }

  else {
    const n = ["a", "e", "i", "o", "u"].includes(str[0])
    if (n === true) {
      vowels2(str.substring(1), count + 1)

    } else {

      vowels2(str.substring(1), count + 0)
    }
  }
}
