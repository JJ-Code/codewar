/*Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.*/


function almostIncreasingSequence(sequence) {

    let newArr = sequence.reduce((prev, curr, index, arr) => {
        console.log(arr[index + 2])
        if (curr < arr[index + 1] || curr > arr[index - 1] &&
            (arr[index + 2] - curr) !== 0 && (arr[index + 1] - curr)) {
            prev.push(curr)
        }

        console.log(prev, curr)
        return prev
    }, [])

    let count = sequence.length - newArr.length

    return count <= 1 ? true : false;
}




// function almostIncreasingSequence(sequence) {
//     let newArr = []
// for (let i = 0; i < (sequence.length - 2); i++) {
//     if((sequence[i+1] - sequence[i]) >= 1){
//         newArr.push(true)
//     } else if((sequence[i+2] - sequence[i]) >= 1){
//         newArr.push(true)
//     } else {
//           newArr.push(false)
//     }

// }
//     let check = newArr.includes(false)
//      return check ? false : true;                          


// }


function almostIncreasingSequence(sequence) {
    let counter = 0;
    let newArr = sequence.reduce((prev, curr) => {
        if (prev >= curr) {
            counter++;
        };
        return (prev = curr)
    }, 0)
    return counter === 0 ? true : false;
}


for (let index = 0; index < array.length; index++) {
    const element = array[index];

}



function almostIncreasingSequence(sequence) {
    let nocounter = 0;
    let yescounter = 0;

    for (let index = 1; index < (sequence.length); index++) {
        if ((sequence[index] === sequence[sequence.length - 1]) && ((sequence[index] - sequence[index - 2]) === 1)) {
            yescounter++

        } else if (((sequence[index] - sequence[index - 1]) === 1) && (((sequence[index + 1] - sequence[index]) === 1))) {

            yescounter++
        } else {
            nocounter++
        }

    }
    return nocounter >= 1 ? false : true;
}





const almostIncreasingSequence = (arr, resultArr = [], count = 0) => {
    let resultVal;

    //console.log(arr)
    if (count >= 2) {
        return false
    } else if (arr.length === 0) {
        return true

    } else if ((resultArr.length === 0) && ((arr[1] - arr[0]) === 1 || (arr[2] - arr[0]) === 1)) {
        resultVal = arr.shift()

        resultArr.unshift(resultVal)
        console.log(resultArr)
        return almostIncreasingSequence(arr, resultArr)
    } else if ((resultArr.length === 1) && (arr[0] - resultArr[0]) === 1) {
        resultVal = arr.shift()
        resultArr.unshift(resultVal)
        console.log(resultArr)
        return almostIncreasingSequence(arr, resultArr)
    } else if ((arr[1] - arr[0]) === 1 && (arr[0] - resultArr[0]) === 1) {
        resultVal = arr.shift()
        resultArr.unshift(resultVal)
        console.log(resultArr)
        return almostIncreasingSequence(arr, resultArr)
    } else {

        arr.shift()
        console.log(resultArr)
        return almostIncreasingSequence(arr, resultArr, count + 1)

    }



}