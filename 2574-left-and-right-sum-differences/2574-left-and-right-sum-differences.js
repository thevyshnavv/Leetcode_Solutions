/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }
    let leftSum = 0;
    let result = []

    for (let i = 0; i < nums.length; i++) {
        let rightSum = sum - leftSum - nums[i]
        result.push(Math.abs(leftSum - rightSum))
        leftSum += nums[i]
    } return result
};