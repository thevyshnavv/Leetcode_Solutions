/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    result = Infinity
    for(let i=0; i<nums.length; i++){
        let sum = 0
        for(let digit of String(nums[i])){
            sum+=Number(digit)
        }
        result = Math.min(result,sum)
    }return result
};