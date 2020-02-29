
/*Complete the function / method so that it takes CamelCase string and returns the string in snake_case notation.Lowercase 
characters can be numbers.If method gets number, it should
return string.

    //  returns test_controller
    toUnderscore('TestController');

// returns movies_and_books
toUnderscore('MoviesAndBooks');

// returns app7_test
toUnderscore('App7Test');

// returns "1"
toUnderscore(1);*/




//solution 1

const toUnderscore = (string) => {
    return string.toString().split("").map((char, index, arr) => {
        if (/^[A-Z]/.test(char) && index !== 0) {

            char = "_" + char.toLowerCase();
        }
        console.log(char)
        return char
    }).join("").toLowerCase()

}