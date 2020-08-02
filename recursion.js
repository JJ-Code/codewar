//power exponent - takes a base and exponent and should function like Math.pow() with no negatives


const power = (base, x) => {
  if (x === 0) return 1;
  return base * power(base, x - 1)
}

//factorial 
const factorial = (x) => {
  if (x === 0) return 1;
  else {
    if (x === 1) return 1;
    return x * factorial(x - 1)
  }
}

// takes an array and returns product of them all 
//productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (arr, sumTotal = 1) => {
  console.log(sumTotal)
  if (arr.length === 0) return sumTotal
  else {
    sumTotal *= arr[0]
    return productOfArray(arr.slice(1), sumTotal)
  }

}


// accepts a number and adds all the nums from 0 to number 
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

const recursiveRange = (num, sumTotal = 0) => {
  if (num === 0) return sumTotal;
  return recursiveRange(num - 1, sumTotal + num)
}



// accepts nth number in the Fib=onacci sequence aka 1,1,2,3,5,8
// every number is equal to sum of the 2 nums before 
//fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}


// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'


const reverse = (string) => {
  let temp = "";
  let char;
  for (char of string) {
    temp = char + temp
  }

  return temp

}
const reverse = (string, newStr = "") => {
  if (string.length === 0) return newStr;
  //console.log(newStr)
  return reverse(string.slice(1), string.charAt(0) + newStr)

}



// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

const isPalindrome = (initalStr) => {
  const splitArr = initalStr.split("");
  const length = splitArr.length;

  const helper = (a = 0, b = length - 1) => {
    // console.log("a:" + a);
    // console.log("b:" + b)

    if (length === 0) {
      return false;
    } else if (length === 1) {
      return true;
    } else if (a > b) {
      return true;
    } else if (splitArr[a] !== splitArr[b]) {
      return false;
    } else {
      return helper(a + 1, b - 1)
    }
  }
  return helper();
}


// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const someRecursive = (arr, fn) => {
  let testFn = fn(arr[0])
  //base case for true
  if (testFn === true) {
    return true;
  }
  //base case false 
  else if (arr.length === 0) {
    return false;
  }
  // if arr[0] is not true in the function then remove it from the arr and check the next vale
  // keep going until arr.length is not 0 
  else {
    return someRecursive(arr.slice(1))
  }
}

const someRecursive = (arr, fn) => {
  let curr = arr[0]
  console.log(curr)
  //base case false 
  if (arr.length === 0) {
    return false;
  }
  //base case for true
  else if (fn(curr)) {
    return true;
  }

  // if arr[0] is not true in the function then remove it from the arr and check the next vale
  // keep going until arr.length is not 0 
  else {
    return someRecursive(arr.slice(1), fn)
  }
}



// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]


//not recurisve 
const flatten = (arr) => {
return arr.toString().split("").filter((item) => item !== ",").map((item) => parseInt(item))
}


//recurisve 
const flatten2 = (oldArr) =>{
  var newArr = []
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}


// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

const capitalizeFirst = (array, newArr = []) => {
  //stop condition 
  if (array.length === 0) {
    return newArr
  } else {
    let firstWord = array[0]
    let firstChar = firstWord.slice(0, 1).toUpperCase()
    let remChar = firstWord.slice(1, firstWord.length)
    let combo = firstChar + remChar
    newArr.push(combo);
    return capitalizeFirst(array.slice(1), newArr)
  }
}


 