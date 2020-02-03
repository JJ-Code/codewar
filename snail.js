/*Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].*/


/*[1, 2, 3, 4, 5, 6]
[20, 21, 22, 23, 24, 7]
[19, 32, 33, 34, 25, 8]
[18, 31, 36, 35, 26, 9]
[17, 30, 29, 28, 27, 10]
[16, 15, 14, 13, 12, 11]*/



//Solution 1: Recursion 

const snail = (arr, newArr = [], count = 1) => {
    let tempArr;

    //removing first index (aka subArr) of arr and concating subArr into newArr (---> going left)
    if (arr.length === 0) return newArr;

    if (count === 1) {
        console.log(arr)
        tempArr = arr.shift();
        return snail(arr, [...newArr, ...tempArr], count + 1)

    }
    // grabbing and removing last index in subArr into newArr from all arr index (going down)
    else if (count === 2) {
        tempArr = [];
        arr.forEach(subArr => {
            tempArr.push(subArr.pop())
        })
        console.log(tempArr, " count2")
        return snail(arr, [...newArr, ...tempArr], count + 1)
    }

    // grabbing and removing last index in arr and reversing subArr into newArr (<--- going right )
    else if (count === 3) {
        tempArr = arr.pop().reverse();
        console.log(tempArr, " count3")
        return snail(arr, [...newArr, ...tempArr], count + 1)
    }

    // grabbing and removing first index in subArr into newArr from all arr index in reverse index order (going up ^)
    else if (count === 4) {

        tempArr = []
        arr.forEach(subArr => {
            //console.log(subArr + "  up")
            tempArr.push(subArr.shift())
        })
        tempArr.reverse();
        console.log(tempArr, " count4")
        return snail(arr, [...newArr, ...tempArr], count = 1)
    }


}

//Test 1 
//console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

//Answer
//[1, 2, 3, 6, 9, 8, 7, 4, 5]


//Test 1
// console.log(snail([
//     [1, 2, 3, 4, 5, 6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11]
// ]))


//Answer Test 2
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]