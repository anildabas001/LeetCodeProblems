/*
    Write a recursive function called flatten which accepts an array of arrays and returns a 
    new array with all values flattened.

    // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
    // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    // flatten([[1],[2],[3]]) // [1,2,3]
    // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
*/

function flatten (stringArray) {
    let result = [];
    
    for (let i = 0; i < stringArray.length; i++) {
        if (Array.isArray(stringArray[i])) {
            result = result.concat(flatten(stringArray[i]));
        } else {
            result.push(stringArray[i]);
        }
    }

    return result;

}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]) )// [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3