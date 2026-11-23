/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let small = nums[0];
    let large = nums[0];

    // Find smallest and largest numbers
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < small) {
            small = nums[i];
        }

        if (nums[i] > large) {
            large = nums[i];
        }
    }

    // Find GCD
    let gcd = 1;

    for (let i = 1; i <= small; i++) {
        if (small % i === 0 && large % i === 0) {
            gcd = i;
        }
    }

    return gcd;
};