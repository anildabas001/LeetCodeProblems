/*
    Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 
*/


var sortedSquares = function(nums) {
    let result = [];
    let j = 0;
    let k = nums.length - 1;
    let l = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
        result.push('x'); 
    }

    while (l >= 0) {
        if (nums[j] > nums[k]) {
            result[l] = nums[j];
            j++
        } else {
            result[l] = nums[k];
            k--;
        }

        l--;
    }   

    return result;
};