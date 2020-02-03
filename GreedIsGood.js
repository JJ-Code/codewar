/*Greed is a dice game played with five six - sided dice.Your mission, should you choose to accept it, is to score a
throw according to these rules.You will always be given an array with five six - sided dice values.

Three 1 's => 1000 points
Three 6 's =>  600 points
Three 5 's =>  500 points
Three 4 's =>  400 points
Three 3 's =>  300 points
Three 2 's =>  200 points
One 1 => 100 points
One 5 => 50 point
A single die can only be counted once in each roll.For example, a "5"
can only count as part of a triplet(contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

Throw Score
-- -- -- -- - -- -- -- -- -- -- -- -- --
5 1 3 4 1 50 + 2 * 100 = 250
1 1 1 3 1 1000 + 100 = 1100
2 4 4 5 4 400 + 50 = 450
In some languages, it is possible to mutate the input to the
function.This is something that you should never do.If you mutate the input, you will not be able to pass all the tests.*/


//Solution 1: Reduce Method and object math
const score = (dice) => {
    let totalScore = 0;
    let newArr = dice.reduce((obj, val) => {
        if (val in obj) {
            obj[val]++;
        } else {
            obj[val] = 1;
        }
        //console.log(obj)
        return obj;
    }, {})

    for (var key in newArr) {
        //3 of a kind or more
        if (newArr[key] >= 3) {
            let tempKeyValue = newArr[key] - 3
            //updating total score
            if (key === "1") {
                // totatlScore = 3 of a kind score + reminder if it is the same key
                totalScore += (1000 + (tempKeyValue * 100))
            } else if (key === "5") {
                totalScore += ((key * 100) + (tempKeyValue * 50))
            } else {
                //console.log(totalScore)
                totalScore += (key * 100)
            }

            //console.log(`${key}: ${newArr[key]} - if`)
            // less then 3     
        } else {

            if (key === "1") {
                totalScore += (newArr[key] * 100)
            } else if (key === "5") {
                totalScore += (newArr[key] * 50)
            }

            //console.log(`${key}: ${newArr[key]} - else`)

        } //end of else

    }
    return totalScore
}

/*-----------------------------------------------*/

//Solution 2: Recursion, Reduce Method and Destructing 

//recursion adder helper function
const addTotal = (die, count, score = 0) => {
    if (count === 0) return score;
    else if (count >= 3) {
        if (die === "1") {
            return addTotal(die, count - 3, score + 1000)
        } else {
            return addTotal(die, count - 3, score + (die * 100))
        }
    } else {
        if (die === "1") {
            return addTotal(die, count - 1, score + 100)
        } else if (die === "5") {
            return addTotal(die, count - 1, score + 50)
        } else {
            return addTotal(die, count - count, score)
        }

    }

}


const score = (arr) => {
    let scoreTotal = 0;
    let diceObj = arr.reduce((obj, val) => {
        (val in obj) ? obj[val]++: obj[val] = 1;
        return obj;
    }, {})
    //destructure obj into array 
    const objArr = Object.entries(diceObj);
    //destructure sub array of obj and invoking helper function 
    for (let [die, count] of objArr) {
        scoreTotal += addTotal(die, count)
    };
    return scoreTotal;
}

/*-----------------------------------------------*/