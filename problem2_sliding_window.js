// Given an array of positive integers and a target sum S, find the length of the smallest contiguous subarray whose sum is greater than or equal to S. If no such subarray exists, return 0.


//unoptimized solution
function smallestSubArray(arr, target) {
    let size = Number.POSITIVE_INFINITY;
    let i = 0;
    let j = i;
    let sum = 0;

    while (j < arr.length) { 
        sum = sum + arr[j];

        if (sum >= target) {
            size = Math.min((j - i  + 1), size);
            i++;
            j = i;
            sum = 0;
            continue;
        }

        j++;
    }

    if (size === Number.POSITIVE_INFINITY) {
        return 0;
    }

    return size;
}

//optimized one

function smallestSubarrayWithSum(arr, S) {
    let windowSum = 0,
        minLength = Infinity,
        windowStart = 0;

    // Slide the window
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // Add the next element to the window
        
        // Shrink the window as small as possible while the sum is greater than or equal to 'S'
        while (windowSum >= S) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart]; // Remove the element from the start of the window
            windowStart++;  // Shrink the window
        }
    }

    // If no valid subarray found, return 0
    return minLength === Infinity ? 0 : minLength;
}


let arr = [2, 1, 5, 2, 3, 2]; 
let k = 7;

console.log(smallestSubArray(arr, k));

arr = [2, 1, 5, 2, 8], k = 7

console.log(smallestSubArray(arr, k));

arr = [1, 1, 1, 1, 1, 1, 1, 1], k = 11

console.log(smallestSubArray(arr, k));

// arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4], k = 4

// console.log(smallestSubArray(arr, k));