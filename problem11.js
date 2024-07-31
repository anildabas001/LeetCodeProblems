/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive 
integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or 
equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

*/

//my approach
function minSubArrayLen (intArray, number) {
    let minimalSubArray = 0;
    let windowEnd = 0;
    let windowStart = 0;
    let i = 0;
    let sum = 0;
    
    while (i < intArray.length) {
        sum = sum + intArray[i];
        if (sum >= number) {
            break;
        }

        i++;
    }

    if (i >= intArray.length && sum < number) {
        return 0;
    }

    windowEnd = i;
    minimalSubArray = windowEnd + 1;

    let tempSum = sum;

    while (windowEnd < intArray.length) {     
        if (tempSum >= number) {   
            minimalSubArray = Math.min(minimalSubArray, (windowEnd - windowStart + 1));
            tempSum  = tempSum - intArray[windowStart]; 
            windowStart++;   
        } else {
            windowEnd++;
            tempSum  = tempSum + intArray[windowEnd];
        }    
    }

    return minimalSubArray;
}

//optimized approach

function minSubArrayLen(intArray, number) {
    let start = 0;
    let end = 0;

    let minArrayLength = Number.POSITIVE_INFINITY;
    let sum = intArray[end];
    while (end < intArray.length && start < intArray.length) {
        if (sum < number) {
            end++;
            sum = sum + intArray[end];           
        } else {
            minArrayLength = Math.min(minArrayLength, (end - start + 1));
            sum = sum - intArray[start];
            start ++;
        }
    }

    return minArrayLength === Number.POSITIVE_INFINITY ? 0 : minArrayLength;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0