let some_list = ["a", "b", "c", "b", "d", "m", "n", "n"]


//solutiuon 1 - loops thru key value and obj
const duplicates = (arr) => {
  let dupArr = []
  let objCheck = arr.reduce((obj, val) => {
    (val in obj) ? obj[val]++ : obj[val] = 1;
    return obj;
  }, {})

  for (const key of Object.keys(objCheck)) {
    //     console.log(key, objCheck[key]);
    if (objCheck[key] >= 2) {
      dupArr.push(key)
    }

  }

  return dupArr
}

console.log(
  duplicates(some_list))


//solution 2 - converts obj into arr and loops thru new duplicate arr 
const duplicates = (arr) => {
  let dupArr = []
  let objCheck = arr.reduce((obj, val) => {
    (val in obj) ? obj[val]++ : obj[val] = 1;
    return obj;
  }, {})

  const objArr = Object.entries(objCheck);

  objArr.forEach((el) => {

    if (el[1] >= 2) {
      dupArr.push(el[0])
    }
  })

  return dupArr
}

console.log(
  duplicates(some_list))

