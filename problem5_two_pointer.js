// Given an integer array nums of length n and an integer target, 
//find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 


var threeSumClosest = function(nums, target) {
    let minumumDifference = Number.POSITIVE_INFINITY;
    let result = 0;

    nums = nums.sort((a,b) => a - b);
    
    for (let i = 0; i <= nums.length - 3; i++) {
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;

        while (leftPointer < rightPointer) {
            
            let sum = nums[leftPointer] + nums[rightPointer] + nums[i];
            let difference = Math.abs(target - sum);

            if (difference < minumumDifference) {
                result = sum;
                minumumDifference = difference;
            }

            if (sum >= target) {
                rightPointer--;
            } else {
                leftPointer++;
            }
        }
    }

    return result;
};