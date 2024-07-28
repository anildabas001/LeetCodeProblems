/*
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

//my approach
// function sumZero (sortedArr) {
//     let result = undefined;
//     let arrayLength = sortedArr.length;

//     let i = 0;
//     let j = i + 1;

//     while (i < j && i < arrayLength && j < arrayLength) {
//         let sum = sortedArr[i] + sortedArr[j];

//         if (sum === 0) {
//             return [sortedArr[i], sortedArr[j]];
//         } else if (sum < 0) {
//             j++;
//         } else {
//             i++;
//             j = i + 1;
//         }    
//     }

//     return result;
// }

//my second approach

function sumZero (sortedArr) {
    let lengthArray = sortedArr.length;

    let i = 0;
    let j = lengthArray - 1;

    while (i < j) {
        let sum = sortedArr[i] + sortedArr[j];

        if (sum === 0) {
            return [sortedArr[i], sortedArr[j]];
        } else if (sum > 0) {
            j--;
        } else {
            i++;
        }
    }

    return undefined;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([1,2,3]));
console.log(sumZero([-4, 2, 3, 4,5,6,7]));
console.log(sumZero([ -6, -4, 2, 3, 4, 5, 7]));