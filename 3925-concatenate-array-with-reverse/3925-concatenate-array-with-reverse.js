/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    let ans = new Array(2*nums.length)
    for(let i = 0; i<nums.length; i++){
        ans[i]=nums[i]
        ans[nums.length+i] = nums[nums.length-1-i]
    }
    return ans

};