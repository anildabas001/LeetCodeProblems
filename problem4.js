/*
Implement a function countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be 
negative numbers in the array. There can be negative numbers in the array, but it will be sorted
 */

//my approach 1

// function countUniqueValues(sortedArr) {
//     let observableobj = {};

//     sortedArr.forEach(element => {
//         observableobj[element] = (observableobj[element] || 0) + 1;
//     });

//     return Object.keys(observableobj).length

// }

// my approach2

// function countUniqueValues(sortedArr) {
//     let i = 0;
//     let j = 0;
//     let uniqueValues = 0;

//     while (j < sortedArr.length) {
//         if (i === 0) {
//             uniqueValues++;
//         }else if (sortedArr[i] === sortedArr[j]) {
//             j++;
//         } else {
//             uniqueValues++;
//             i = j;
//             j++;
//         }
//     }
// }

// my approach3

function countUniqueValues(sortedArr) {
    if(sortedArr.length === 0) {
        return 0;
    }

    let i = 0;
    let j = 0;
    while (j < sortedArr.length) {
        if (sortedArr[i] != sortedArr[j]) {            
            i++;
            sortedArr[i] = sortedArr[j];
        }

       j++;
    }

    return i + 1;
}

console.log(countUniqueValues([1,1,1,1,2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));