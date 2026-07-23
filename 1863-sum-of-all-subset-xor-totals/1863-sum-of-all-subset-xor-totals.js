/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {

    let total = 0;

    function dfs(index, xor) {

        // One subset is completed
        if (index === nums.length) {
            total += xor;
            return;
        }

        // Don't take current number
        dfs(index + 1, xor);

        // Take current number
        dfs(index + 1, xor ^ nums[index]);
    }

    dfs(0, 0);

    return total;
};