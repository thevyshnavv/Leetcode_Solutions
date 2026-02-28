/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0
    for(let i=1; i<=num; i++){
        sum = 0
        for(let n of i.toString())
        sum+=Number(n)
        if(sum%2 === 0)count++
    }
    return count
};