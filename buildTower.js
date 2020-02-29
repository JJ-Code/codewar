// Build Tower by the following given argument:
//     number of floors(integer and always greater than 0).

// Tower block is represented as *

// for example, a tower of 3 floors looks like below

// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]

//Solution 1
const towerBuilder = (nFloors) => {
  let tower = [];
  let star = "*";
  let space = " "
  for (let i = 0; i < nFloors; i++) {
    let spaceNum = nFloors - i - 1
    let starNum = 2 * i + 1;
    let spaceHalf = space.repeat(spaceNum)
    let starN = star.repeat(starNum)
    let string = `${spaceHalf}${starN}${spaceHalf}`
    tower.push(string)
  }
  return tower
}



const towerBuilder = (nFloors, arrTower = []) => {
  let space = " ";
  let star = "*";
  let totalStarsFloor = nFloors + (nFloors - 1);

  if (nFloors === 0) return arrTower;

  else if (arrTower.length === 0) {
    let starsPrint = star.repeat(totalStarsFloor)
    arrTower.push(starsPrint)
    return towerBuilder(nFloors - 1, arrTower)
  } else {
    let starsPrint = star.repeat(totalStarsFloor)
    let totalSpaces = arrTower[0].length - totalStarsFloor;
    let spacesHalf = totalSpaces / 2;
    let spacePrint = space.repeat(spacesHalf);
    let string = `${spacePrint}${starsPrint}${spacePrint}`;
    arrTower.push(string);
    return towerBuilder(nFloors - 1, arrTower)

  }
}