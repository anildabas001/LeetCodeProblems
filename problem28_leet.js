/*

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 
*/

//my solution though it will exceed time limit with larger arrays 

var rotate = function(nums, k) {
    for (let i = 0; i < k ;i++) {
        let temp = nums[nums.length - 1];
        for (let j = nums.length - 1; j >= 0; j--) {
            nums[j] = nums[j-1];
        }

        nums[0] = temp;
    }
    return nums;
};

//another my solution


var rotate = function(nums, k) {
    let tempArray = [];
    k = k % nums.length;
    for (let i = nums.length - k; i<= nums.length - 1; i++ ) {
        tempArray.push(nums[i]);                
    }

    let l = nums.length - 1;

    for (let j = nums.length - 1 - k; j >= 0; j--) {
        nums[l] = nums[j];
        l--;
    }

    for (let m = 0; m < tempArray.length; m++) {
        nums[m] = tempArray[m];
    }

    return nums;
};
