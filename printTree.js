let picture = [
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0]
]


const tree = () => {

  for (arr of picture) {
    let str = ""
    arr.forEach(el => {
      if (el) {
        str += "*"
      } else {
        str += " "
      }

    })
    console.log(str)
  }

}

tree()