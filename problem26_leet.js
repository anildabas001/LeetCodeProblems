/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function(nums) {
    let observable = {};

    let maxOccurence = 0;
    let result = 0;
    let threshold = nums.length / 2;
    for (let i = 0; i < nums.length; i++) {
        observable[nums[i]] = observable[nums[i]] ? ++observable[nums[i]] : 1;
        
        if (observable[nums[i]] > maxOccurence && observable[nums[i]] >= threshold ) {
            result = nums[i];
            maxOccurence = observable[nums[i]];
        }
    }

    return result;
};