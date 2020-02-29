/*Check to see
if a string has the same amount of 'x'
s and 'o'
s.The method must
return a boolean and be
case insensitive.The string can contain any char.

Examples input / output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/



//Solution 1 

function XO(str) {
    // make the string lowercase because we are case insensitive
    str = str.toLowerCase();
    // put the string into an array
    var arrayOfCharacters = str.split("");
    //count the x's
    var countX = arrayOfCharacters.reduce(function (n, val) {
        return n + (val === 'x');
    }, 0);
    // count the o's
    var countO = arrayOfCharacters.reduce(function (n, val) {
        return n + (val === 'o');
    }, 0);
    // do these numbers match? if so return true and if not return false
    if (countX == countO) {
        return true;
    } else {
        return false;
    }
}


//Solution 2 
const XO = (str) => {
    // make the string lowercase and put the string into an array
    const arrOfChar = str.toLowerCase().split("")
    //create a obj to store "x" and "o"
    const charCount = arrOfChar.reduce((obj, char) => {
        if (char in obj) obj[char]++;
        return obj;
    }, {
        x: 0,
        o: 0
    })
    //destruct the key values to so the key parms are declare as variables 
    let {
        x,
        o
    } = charCount
    if (x === o || (x === 0 && o === 0)) {
        return true
    } else {
        return false
    }


}


//Solution 3 
const XO = (str) => {
    // make the string lowercase and put the string into an array
    const arrOfChar = str.toLowerCase().split("")
    //use reduce to count and see if "x" and "o" are balanced 
    const charCount = arrOfChar.reduce((prev, char) => {
        if (char === "x") prev++;
        if (char === "o") prev--;
        return prev;
    }, 0)
    //if it is balance it should be 0
    if (charCount === 0) {
        return true;
    } else {
        return false;
    }

}