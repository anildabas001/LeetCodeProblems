// Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n 
// that satisfy the condition nums[i] + nums[j] + nums[k] < target.

// Input:  nums = [-2,0,1,3], target = 2
// Output: 2
// Explanation:
// Because there are two triplets which sums are less than 2:
// [-2, 0, 1]
// [-2, 0, 3]

// Input: nums = [-2,0,-1,3], target = 2
// Output: 3
// Explanation:
// Because there are three triplets which sums are less than 2:
// [-2, 0, -1]
// [-2, 0, 3]
// [-2, -1, 3]

function threeSumSmaller(nums, target) {
    nums.sort((a,b) => a - b);
    let result = 0;

    for (let i = 0; i <= nums.length - 3; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            // if (sum < target) {
            //     result++;
            // }

            if (sum < target) {
                // All triplets with nums[left] and nums[right] are valid
                result += (right - left);
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSumSmaller([-2,0,1,3], 2));
console.log(threeSumSmaller([-2,0,-1,3], 2));