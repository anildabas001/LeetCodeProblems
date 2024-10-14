/*Given an array of integers and a number K, find the maximum sum of any contiguous subarray of size K.*/


function maxSum(arr, k) {
    let sum = 0;
    let maxSum = 0; 

    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    maxSum = sum;

    let indexToRemove = 0;

    for (let j = k; j < arr.length; j++) {
        sum = sum - arr[indexToRemove] + arr[j];
        maxSum = Math.max(sum, maxSum);
        indexToRemove++;
    }

    return maxSum;
}

//improved version

function maxSumSubarray(arr, K) {
    let maxSum = 0, windowSum = 0;
    
    // Calculate the sum of the first 'K' elements (initial window)
    for (let i = 0; i < K; i++) {
        windowSum += arr[i];
    }
    
    // Set this sum as the maximum sum initially
    maxSum = windowSum;

    // Slide the window across the array starting from index 'K'
    for (let i = K; i < arr.length; i++) {
        windowSum = windowSum - arr[i - K] + arr[i];  // Slide the window
        maxSum = Math.max(maxSum, windowSum);  // Update the maximum sum
    }

    return maxSum;
}


let arr = [2, 1, 5, 1, 3, 2]; 
let k = 3;

console.log(maxSum(arr, k));

arr = [2, 3, 4, 1, 5]; 
k = 2;

console.log(maxSum(arr, k));


arr = [1, 9, 3, 4, 2]; 
k = 3;

console.log(maxSum(arr, k));

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4], k = 4

console.log(maxSum(arr, k));