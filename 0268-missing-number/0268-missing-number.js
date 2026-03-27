/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = nums.reduce((sum,nums)=>nums+sum,0)
    let sum2 = n*(n+1)/2
    return sum2 - sum
};