/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    count = 0;
    sum = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2===0&&nums[i]%3===0){
            count++
            sum+=nums[i]
        }
    }
    if(count===0)return 0
    return Math.floor(sum/count)
};