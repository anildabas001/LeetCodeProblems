/*
    You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

*/


var jump = function(nums) {
    let steps = 0;
    let currentJump = nums[0];
    let maxJump = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxJump = Math.max(maxJump, i + nums[i]);

        if (i === currentJump || (i === nums.length -1 && currentJump >= i)) {
            currentJump = maxJump;
            steps++;
        }
    }

    return steps;
};