// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


const chunk = (array, size) => {
  const newArr = [];
  let index = 0;

  while (index < array.length) {
    newArr.push(array.slice(index, index + size));
    index += size;
  }

  return newArr;
}

//this distorts the original array with splice()
const chunk = (array, size) => {
  let tempArr = array.reduce((prev, curr) => {
    prev.push(array.splice(0, size))
    return prev
  }, [])

  //this check for the case if there is 1 last element in the original array. Reduce does not run when there is only 1 element left. 
  if (array.length === 1) {
    tempArr.push(array)
  }
  return tempArr
}


const chunk = (array, size, newArr = []) => {

  //stopping condition when array.length is 0
  if (array.length === 0) {
    return newArr
  }
  else {
    let sub = newArr.push(array.splice(0, size))
    chunk(array, size, sub)
  }


}


//recurisve solution

const chunk = (array, size, newArr = []) => {

  //stop condition 
  if (array.length === 0) {
    return newArr
  }
  else {
  //otherise keep running chunck()
    let sub = array.splice(0, size)
    newArr.push(sub)
    return chunk(array, size, newArr)
  }

}

//cleaned up version
const chunk = (array, size, newArr = []) => {
  //stop condition 
  if (array.length === 0) return newArr

  //otherwise keep running 
  let sub = array.splice(0, size)
  newArr.push(sub)
  return chunk2(array, size, newArr)

}
