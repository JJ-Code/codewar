// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = (n) => {
  if (n === 0) {
    console.log("");
  }
  else {
    for (let starCount = 1; starCount <= n; starCount++) {
      const printStar = "*".repeat(starCount);
      const printSpace = " ".repeat(n - starCount);
      console.log(printStar + printSpace)
    }
  }
}


steps(4)

const recrusiveSteps = (n, starCount = 1) => {
  const star = "*".repeat(starCount);
  const space = " ".repeat(n - starCount)

  //stoping  condition 
  if (n === starCount) {
    return console.log(star + space)
  }
   //stoping  condition for n = 0
  else if (n === 0) {
    return console.log("")
  }
  else {
    console.log(star + space)
    recrusiveSteps(n, starCount + 1)
  }
  
}