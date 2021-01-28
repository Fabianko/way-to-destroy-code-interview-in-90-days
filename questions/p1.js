/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    console.log(nums,target)
    let i = 0;
    let j = 1;
    while (i<nums.length) {
        if (nums[i] + nums[j] === target) {
            return [i,j]
        }
        else {
            if (j==nums.length-1) {
                i=i+1
                j=i+1
            }
            else {
                j=j+1
            }
        }
    }
    return []
};

function isEqual(a,b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

let resp = twoSum([2,7,11,15],9)
console.log(isEqual( resp, [ 0, 1 ] ) )
let resp2 = twoSum([3,2,4],6)
console.log(isEqual( resp2, [1,2] ) )
let resp3 = twoSum([3,3],6)
console.log(isEqual( resp3, [ 0, 1 ] ) )
let resp4 = twoSum([3,3],6)
console.log(isEqual( resp4, [ 0, 1 ] ) )



