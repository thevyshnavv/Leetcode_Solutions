/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    result = []
    for (let i = 0; i < nums.length; i += 2) {
        let value = nums[i + 1]
        let time = nums[i]
        for(let j=0; j<time; j++){
            result.push(value)
        }
    }return result
};