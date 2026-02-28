/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0
    let digSum = 0
    for(let num of nums){
        sum+=num
        for(let digit of num.toString()){
            digSum+=Number(digit)
        }
    }
    return Math.abs(sum - digSum)
};