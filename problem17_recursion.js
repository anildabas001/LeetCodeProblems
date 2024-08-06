/*
    Write a recursive function called capitalizeWords. 
    Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords (wordArray) {
    let results = [];

    if (wordArray.length === 0) {
        return [];
    }

    results.push(wordArray[0].toUpperCase());

    wordArray.splice(0, 1);

    return results.concat(capitalizeWords(wordArray));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']