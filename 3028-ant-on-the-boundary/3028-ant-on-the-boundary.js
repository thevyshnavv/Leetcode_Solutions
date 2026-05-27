/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let boundary = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        boundary +=nums[i]
        if (boundary === 0) count++
    }return count 
};