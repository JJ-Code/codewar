// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = (n) => {

  //the pattern to get the total length of the base pyramid level 

  const totalLength = n + (n - 1);

  for (let starCount = 1; starCount <= totalLength; starCount += 2) {
    const stars = "*".repeat(starCount)
    const halfSpaces = " ".repeat((totalLength - starCount) / 2)
    console.log(halfSpaces + stars + halfSpaces);
  }

}

pyramid(4);
/* will print 
"   *   "
"  ***  "
" ***** "
"*******"
*/



const recursivePyramid = (n, starCount = 1) => {
  const totalLength = n + (n - 1);
  const star = "*".repeat(starCount);
  const halfSpaces = " ".repeat((totalLength - starCount) / 2);
  //stoping  condition 
  if (totalLength === starCount) {
    return console.log(halfSpaces + star + halfSpaces)
  } else {
    console.log(halfSpaces + star + halfSpaces)
    recursivePyramid(n, starCount + 2)
  }
}

recursivePyramid(4)

/* will print
"   *   "
"  ***  "
" ***** "
"*******"
*/
