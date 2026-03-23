/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let sum1 = 0
    let sum2 = 0
    for(let num of nums){
        if(num<10)sum1+=num
        if(num>9)sum2+=num
    }if(sum1===sum2)return false
    return true
};