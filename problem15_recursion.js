/*
    Write a recursive function called capitalizeFirst. Given an array of strings, 
    capitalize the first letter of each string in the array.
*/

//my solution

function capitalize (word) {

    const capitalized =
      word[0].toUpperCase()
      + word.slice(1);

    return capitalized;
}

function capitalizeFirst (stringArray) {
    let newString = [];

    if (stringArray.length === 0) {
        return [];
    }

    newString.push(capitalize(stringArray[0]));

    stringArray.splice(0, 1);

    return newString.concat(capitalizeFirst(stringArray))

}

console.log(capitalizeFirst(['car','taco','banana']));