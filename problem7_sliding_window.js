// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the 
// array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.


var longestOnes = function(nums, k) {
    let windowStart = 0;
    let windowEnd = 0;
    let charFrequency = {1: 0, 0: 0};

    let maxLength = Number.NEGATIVE_INFINITY;

    for (windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        charFrequency[nums[windowEnd]]++;

        while (charFrequency[0] > k) {
            charFrequency[nums[windowStart]]--;
            windowStart++;
        }

        maxLength = Math.max(maxLength, (windowEnd - windowStart + 1));
    }

    return maxLength;
};