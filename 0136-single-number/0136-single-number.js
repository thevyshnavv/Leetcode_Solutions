/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }

    return result;
}