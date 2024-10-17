// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0


var numSubarrayProductLessThanK = function(nums, k) {
    let result = 0;
    let product = 1;

    let windowStart = 0;
    let windowEnd = 0;

    for (windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        product *= nums[windowEnd];
        while (windowStart < windowEnd && product >= k) {
            product = product / nums[windowStart];
            windowStart++;
        }

        if (product < k) {
            result += (windowEnd - windowStart + 1);
        }        
    }

    return result;
};