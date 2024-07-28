/*
    Write a function called maxSubarraySum which accepts and array of integers and a number called n. 
    The function should calculate the maximum sum of n consecutive elements in the array.
*/
//my approach => naive
// function maxSubarraySum(intArray, n) {
//     if (intArray.length ===0) {
//         return null;
//     }
//     let maxSum = Number. MIN_VALUE;
//     for (i = 0; i <= intArray.length - n; i++) {
//         let sum = 0;
//         for (j = i; j < i + n; j++) {
//             sum = sum + intArray[j]
//         }

//         if (sum > maxSum) {
//             maxSum = sum;
//         }
//     }

//     return maxSum;
// }

//my approach

// function maxSubarraySum(intArray, n) {
//     if (n > intArray.length) {
//         return null;
//     }

//     let windowStart = 0;
//     let windowEnd = n - 1;
//     let i = windowStart;
     
//     let maxSum = Number.MIN_VALUE;
//     let sum = 0;

//     while (windowEnd < intArray.length) {
//         sum = sum + intArray[i];        

//         if (i === windowEnd) {
//             if (sum > maxSum) {
//                 maxSum = sum;
//             }

//             sum = 0;
//             windowStart++;
//             windowEnd++;

//             i = windowStart;
//         } else {
//             i++;
//         }
//     }    
//     return maxSum;
// }

function maxSubarraySum (intArray, n) {
    if (n > intArray.length) {
        return null;
    }

    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum = maxSum + intArray[i];
    }
    let tempSum = maxSum;
    for (let j = n; j < intArray.length; j++) {
        tempSum = tempSum + intArray[j] - intArray[j - n];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
console.log(maxSubarraySum([4,2,1,6], 1));
console.log(maxSubarraySum([], 4));